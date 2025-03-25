import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

document.addEventListener("DOMContentLoaded", () => {
  const excuseElement = document.getElementById("excuse");
  const button = document.getElementById("generateExcuse");

  const who = ["El perro", "Mi abuela", "El cartero", "Mi pájaro", "Un primo", "El vecino"];
  const action = ["se comió", "orinó sobre", "aplastó", "rompió", "tiró", "perdió", "dañó"];
  const what = ["mi tarea", "mi teléfono", "el auto", "mi casa", "las llaves", "la moto"];
  const when = ["antes de la clase", "mientras dormía", "mientras hacía ejercicio", "durante el almuerzo", "mientras rezaba", "al despertar", "la noche anterior", "cuando salí a caminar"];

  function generateExcuse() {
      const randomWho = who[Math.floor(Math.random() * who.length)];
      const randomAction = action[Math.floor(Math.random() * action.length)];
      const randomWhat = what[Math.floor(Math.random() * what.length)];
      const randomWhen = when[Math.floor(Math.random() * when.length)];

      return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
  }

  button.addEventListener("click", () => {
      excuseElement.innerHTML = generateExcuse();
  });

  excuseElement.innerHTML = generateExcuse();
});