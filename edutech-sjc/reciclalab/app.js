/* ===== ReciclaLab - Lógica principal ===== */

// Seletores úteis
const modals = document.querySelectorAll(".modal");
const openBtns = document.querySelectorAll("[data-open]");
const closeBtns = document.querySelectorAll("[data-close]");
const doneBtns = document.querySelectorAll("[data-done]");
const backdrop = document.querySelector(".backdrop");
const barFill = document.getElementById("barFill");
const barLabel = document.getElementById("barLabel");
const resetProgress = document.getElementById("resetProgress");

// Gerenciamento de progresso
let progress = JSON.parse(localStorage.getItem("reciclalab-progress")) || {
  agua: false,
  energia: false,
  residuos: false,
  consumo: false,
};

// Atualiza barra
function updateProgress() {
  const values = Object.values(progress);
  const doneCount = values.filter(Boolean).length;
  const percent = Math.round((doneCount / values.length) * 100);

  barFill.style.width = `${percent}%`;
  barLabel.textContent = `${percent}% concluído`;

  localStorage.setItem("reciclalab-progress", JSON.stringify(progress));
}

// Abre modal
openBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const id = btn.dataset.open;
    const modal = document.getElementById(`modal-${id}`);
    modal.style.display = "flex";
    backdrop.style.display = "block";
    modal.setAttribute("aria-hidden", "false");
  });
});

// Fecha modal
function closeAll() {
  modals.forEach((m) => {
    m.style.display = "none";
    m.setAttribute("aria-hidden", "true");
  });
  backdrop.style.display = "none";
}

closeBtns.forEach((btn) => btn.addEventListener("click", closeAll));
backdrop.addEventListener("click", closeAll);
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeAll();
});

// Marca como aprendido
doneBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const id = btn.dataset.done;
    progress[id] = true;
    updateProgress();
    alert(`Excelente! Você concluiu a estação de ${id}. 🌱`);
    closeAll();
  });
});

// Reset progresso
resetProgress.addEventListener("click", () => {
  if (confirm("Deseja realmente limpar seu progresso?")) {
    progress = { agua: false, energia: false, residuos: false, consumo: false };
    updateProgress();
  }
});

// Inicializa
updateProgress();
