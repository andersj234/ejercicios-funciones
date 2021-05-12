let cambio = window
  .prompt("Escribe dólares, yenes o libras según la moneda a cambiar.")
  .toLowerCase();

let cantidad = parseInt(window.prompt("Escribe la cantidad en euros"));

function convertir(cantidad, moneda) {
  if (moneda === "dólares") {
    return cantidad * 0.86;
  } else if (moneda === "yenes") {
    return cantidad * 129.852;
  } else if (moneda === "libras") {
    return cantidad * 1.28611;
  } else {
    return "Te has colao";
  }
}

window.prompt(
  `Tus ${cantidad}€ son ${convertir(cantidad, cambio)} en ${cambio}`
);