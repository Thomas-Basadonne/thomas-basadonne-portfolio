document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  const sectBtns = document.querySelector(".controls");
  const sectBtn = document.querySelectorAll(".control");

  // Aggiungi una classe "active" al pulsante Home all'avvio
  const homeButton = document.querySelector(".control-1");
  homeButton.classList.add("active-btn");

  // Funzione per gestire il clic sui pulsanti di navigazione
  sectBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");

      // Rimuovi la classe "active" da tutti i pulsanti
      sectBtn.forEach((btn) => {
        btn.classList.remove("active-btn");
      });

      // Aggiungi la classe "active" solo al pulsante cliccato
      btn.classList.add("active-btn");

      // Nascondi tutte le sezioni
      sections.forEach((section) => {
        section.classList.remove("active");
      });

      // Mostra solo la sezione corrispondente
      const section = document.getElementById(id);
      section.classList.add("active");
    });
  });

  // Funzione per gestire il clic sulle sezioni
  sections.forEach((section) => {
    section.addEventListener("click", () => {
      const id = section.getAttribute("id");

      // Rimuovi la classe "active" da tutti i pulsanti
      sectBtn.forEach((btn) => {
        btn.classList.remove("active-btn");
      });

      // Trova il pulsante corrispondente alla sezione
      const btn = document.querySelector(`[data-id="${id}"]`);
      btn.classList.add("active-btn");

      // Nascondi tutte le sezioni
      sections.forEach((s) => {
        s.classList.remove("active");
      });

      // Mostra solo la sezione cliccata
      section.classList.add("active");
    });
  });
});
