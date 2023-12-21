// document.addEventListener("DOMContentLoaded", () => {
//   const sections = document.querySelectorAll(".section");
//   const sectBtns = document.querySelector(".controls");
//   const sectBtn = document.querySelectorAll(".control");

//   Aggiungi una classe "active" al pulsante Home all'avvio
//   const homeButton = document.querySelector(".control-1");
//   homeButton.classList.add("active-btn");

//   Funzione per gestire il clic sui pulsanti di navigazione
//   sectBtn.forEach((btn) => {
//     btn.addEventListener("click", () => {
//       const id = btn.getAttribute("data-id");

//       Rimuovi la classe "active" da tutti i pulsanti
//       sectBtn.forEach((btn) => {
//         btn.classList.remove("active-btn");
//       });

//       Aggiungi la classe "active" solo al pulsante cliccato
//       btn.classList.add("active-btn");

//       Nascondi tutte le sezioni
//       sections.forEach((section) => {
//         section.classList.remove("active");
//       });

//       Mostra solo la sezione corrispondente
//       const section = document.getElementById(id);
//       section.classList.add("active");
//     });
//   });

//   Funzione per gestire il clic sulle sezioni
//   sections.forEach((section) => {
//     section.addEventListener("click", () => {
//       const id = section.getAttribute("id");

//       Rimuovi la classe "active" da tutti i pulsanti
//       sectBtn.forEach((btn) => {
//         btn.classList.remove("active-btn");
//       });

//       Trova il pulsante corrispondente alla sezione
//       const btn = document.querySelector(`[data-id="${id}"]`);
//       btn.classList.add("active-btn");

//       Nascondi tutte le sezioni
//       sections.forEach((s) => {
//         s.classList.remove("active");
//       });

//       Mostra solo la sezione cliccata
//       section.classList.add("active");
//     });
//   });
// });

// Funzione autoeseguibile per evitare inquinamento dello scope globale
(function () {
  // Seleziona tutti gli elementi con la classe "control" e itera su di essi
  // Il codice all'interno di questa funzione verrà eseguito per ogni elemento trovato con la classe "control"
  // lo spread(operatore di propagazione crea un array contenente tutti gli elemanti con classe controll)
  [...document.querySelectorAll(".control")].forEach((button) => {
    // Aggiungi un listener per l'evento di click a ciascun elemento "control"
    button.addEventListener("click", function () {
      // Rimuovi la classe "active-btn" dall'elemento con la classe "active-btn"
      document.querySelector(".active-btn").classList.remove("active-btn");
      // Aggiungi la classe "active-btn" all'elemento attualmente cliccato
      this.classList.add("active-btn");
      // Rimuovi la classe "active" dall'elemento con la classe "active"
      document.querySelector(".active").classList.remove("active");
      // Aggiungi la classe "active" all'elemento identificato dal dataset "id" del pulsante cliccato
      document.getElementById(button.dataset.id).classList.add("active");
    });
  });

  // Aggiungi un listener per l'evento di click al pulsante con la classe "theme-btn"
  document.querySelector(".theme-btn").addEventListener("click", () => {
    // Toggle della classe "light-mode" sul corpo del documento HTML
    document.body.classList.toggle("light-mode");
  });
})();
