//aqui declaramos las variables llamandolas desde el html
const pantalla = document.getElementById("pantalla");
const botones = document.querySelectorAll("button");


/*Primero hacemos que los operadores logicos se puedan reconocer en javascript*/ 
botones.forEach(boton => {
  boton.addEventListener("click", () => {
    const valor = boton.textContent;

    // limpiamos la calculadora =
    if (valor === "AC") {
      pantalla.value = "";
      return;
    }
    //le damos el valor al boton eliminar para borrar por elemento
    if (valor === "⌫") {
      pantalla.value = pantalla.value.slice(0, -1);
      return;
    }
    //mostramos resultados en pantalla cuando le den al boton igual
    if (valor === "=") {
      try {
        // reemplazos por seguridad visual
        let expresion = pantalla.value
          .replace(/X/g, "*")
          .replace(/÷/g, "/")
          .replace(/,/g, ".");

        // Evalúa
        let resultado = eval(expresion);
        pantalla.value = resultado;
      } catch (error) {
        pantalla.value = "Error";
      }
      return;
    }

     // Convertir operadores visuales a JS
    let operador = valor;
    if (valor === "X") operador = "*";
    if (valor === "÷") operador = "/";
    if (valor === ",") operador = ".";

    pantalla.value += operador;

  });
});