# ReciclaTech — Laboratório Digital de Sustentabilidade

Projeto educacional interativo voltado a escolas públicas, com três módulos:

* **🧪 ReciclaLab** — laboratório digital (estações: Água, Energia, Resíduos, Consumo)
* **🕹️ Missão Sustentável** — mini game de correção de hábitos
* **🔁 Ciclo do Lixo** — painel animado do consumo ao reuso

**Concepção pedagógica:** Tânia Reis Oliveira
**Desenvolvimento:** Plena Informática

---

## 🎯 Objetivos

* Fomentar práticas de sustentabilidade com atividades simples, mensuráveis e engajadoras
* Operar **offline** (PWA) em ambientes com internet limitada
* Entregar recursos didáticos aplicáveis em qualquer escola (pública/privada)

---

## 📁 Estrutura de Pastas

```
edutech-sjc/
├─ index.html                     # Portal (V2: acessibilidade, narração, progresso global, certificado)
├─ manifest.json                  # PWA
├─ service-worker.js              # Cache offline
├─ README.md
├─ assets/
│  ├─ css/global.css              # Estilos globais
│  └─ img/
│     ├─ icon-192.png             # Ícone PWA (placeholder)
│     └─ icon-512.png             # Ícone PWA (placeholder)
├─ reciclalab/
│  ├─ index.html
│  ├─ styles.css
│  └─ app.js
├─ missao-sustentavel/
│  └─ index.html                  # HTML único (marca conclusão: localStorage 'missao-complete')
└─ ciclo-do-lixo/
   └─ ciclo-do-lixo.html          # HTML único (marca conclusão: localStorage 'ciclolixo-complete')
```

---

## 🚀 Execução Local (VS Code)

1. Abra a pasta `edutech-sjc/` no VS Code.
2. Use o **Live Server** (ou outro servidor local).

   * Sem servidor, o Service Worker não ativa em `file://`.
3. Acesse `http://localhost:XXXX/` → veja o portal **ReciclaTech**.

> **PWA/Offline**: no navegador, abra DevTools → Application → Service Workers → confirme “activated”. Depois, teste sem internet (as páginas devem abrir do cache).

---

## 🌐 Publicação Gratuita

### Vercel

* `vercel` na raiz `edutech-sjc/` (project root = `.`)
* Output: estático (não precisa build)
* Garante HTTPS (necessário pro Service Worker)

### Netlify

* Arraste a pasta `edutech-sjc/` para o painel **Deploys**
* Ou use `netlify deploy --prod` apontando para a pasta do projeto

### GitHub Pages

* Habilite Pages (branch `main`, pasta `/root`)
* Dica: confirme que `manifest.json` e `service-worker.js` estão na raiz publicada

---

## 🧠 Progresso & Integrações

* **ReciclaLab** salva progresso parcial em
  `localStorage['reciclalab-progress'] = {agua, energia, residuos, consumo}`.
* **Missão Sustentável** marca finalização com
  `localStorage['missao-complete'] = 'true'`.
* **Ciclo do Lixo** marca finalização com
  `localStorage['ciclolixo-complete'] = 'true'`.
* O **portal (index V2)** lê esses valores e mostra **progresso global** + **badges**.

> Dica: no portal, há botões “Marcar concluído” para uso manual (útil em escolas sem internet ou sem retorno dos módulos).

---

## ♿ Acessibilidade & Inclusão

* **Alto contraste** (toggle na home)
* **Narração** (SpeechSynthesis) do resumo da página
* Navegação por teclado (modais, setas, tab foco)
* Certificado imprimível com nome do participante

> Melhorias sugeridas: Libras/avatares animados, leitura de conteúdo nos módulos, alto contraste nos três módulos (base pronta pra replicar).

---

## 🧩 Personalização por Escola

* Aplique a logo/cores locais no `index.html` (portal) e em cada módulo
* Gere QR Codes para cada módulo (link público) e espalhe pela escola
* Use **Canva Edu/Google Forms** para murais/relatórios da turma

---

## 🧪 Testes Sugeridos

1. Abrir cada módulo, interagir e marcar conclusão; voltar à home e checar a barra global.
2. Imprimir o **Certificado** a partir do portal (botão).
3. Ativar **Acessibilidade** e avaliar contraste/leitura.
4. Simular ambiente **offline** após primeiro acesso — garantir que tudo abre do cache.

---

## 🔧 Troubleshooting

* **CSS não aplica / tela “preta e branca”**
  → Caminho errado para `styles.css` ou cache do navegador (Ctrl+F5).
* **Service Worker não ativa**
  → Precisa rodar em **HTTP/HTTPS**, não `file://`. Use Live Server ou publique.
* **PWA sem ícone**
  → Adicione `assets/img/icon-192.png` e `icon-512.png` (PNG válidos).
* **Progresso não atualiza no portal**
  → Limpe `localStorage` (DevTools → Application → Clear) e repita o fluxo.

---

## 📜 Créditos

**Concepção pedagógica:** Tânia Reis Oliveira
**Desenvolvimento:** Plena Informática (ReciclaTech)

---

## 🛣️ Roadmap (Evolução futura)

* **PWA completo com Workbox** (rotas de cache e fallback customizado)
* **Painel Web do Educador** (coleta anônima de métricas por turma/escola)
* **Integração Google Classroom** (entrega de atividades)
* **Modo Libras/Narração módulo-a-módulo**
* **Certificado com QR e verificação** (hash + validação simples)

