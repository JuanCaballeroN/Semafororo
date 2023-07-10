document.addEventListener("DOMContentLoaded", function() {
  let semaforo = document.getElementById("semaforo");

  function cambiarSemaforo() {
    if (semaforo.classList.contains("red")) {
      semaforo.classList.remove("red");
      semaforo.classList.add("green");
      setTimeout(cambiarSemaforo, 2000);
    } else if (semaforo.classList.contains("green")) {
      semaforo.classList.remove("green");
      semaforo.classList.add("yellow");
      setTimeout(cambiarSemaforo, 2000);
    } else if (semaforo.classList.contains("yellow")) {
      semaforo.classList.remove("yellow");
      semaforo.classList.add("red");
      setTimeout(cambiarSemaforo, 2000);
    }
  }

  cambiarSemaforo();
});
