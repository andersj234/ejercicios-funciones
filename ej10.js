let opcion = window.prompt('elige una funcion: ').toLowerCase()

if(opcion === 'triangulo' || opcion === 'triangulo'){
    let base = parseInt(window.alert.prompt('cual es la base?'))
    let altura = parseInt(window.prompt('cual es la altura'));
    document.getElementById("div").innerHTML = `El area de su triangulo es ${areaTriangulo(base, altura)}`;
}else if(opcion === 'circulo')
function areaCirculo (radio){
    return parseInt((radio**2)*3.14);

}

function areaTriangulo (base, altura){
    return parseInt (base*altura)/2
}

function areaCuadrado (lado){
    return parseInt(lado*lado)
}

/*let opcion = window.prompt("Elige una función:").toLowerCase();
const pi = 3.1592;

if (opcion === "triangulo" || opcion === "triángulo") {
  let base = parseInt(window.prompt("Cual es la base?"));
  let altura = parseInt(window.prompt("Cual es la altura?"));
  document.getElementById(
    "div"
  ).innerHTML = `El área de su triángulo es ${areaTriangulo(base, altura)}`;
} else if (opcion === "circulo" || opcion === "círculo") {
  let radio = parseInt(window.prompt("Cual es el radio del círculo?"));
  document.getElementById(
    "div"
  ).innerHTML = `El área de su circulo es ${areaCirculo(radio)}`;
} else if (opcion === "cuadrado") {
  let lado = parseInt(window.prompt("Cual es el lado?"));
  document.getElementById(
    "div"
  ).innerHTML = `El área de su cuadrado es ${areaCuadrado(lado)}`;
} else {
  document.getElementById("div").innerHTML = `No digas chorradas`;
}

function areaCirculo(radio) {
  return parseInt((radio ^ 2) * pi);
}

function areaTriangulo(base, altura) {
  return parseInt((base * altura) / 2);
}

function areaCuadrado(lado) {
  return parseInt(lado * lado);
}*/