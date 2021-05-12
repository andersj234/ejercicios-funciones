let numero =parseInt(window.prompt('escoge un numero'))

function numeroCifras(){
    
    let cif =num.tostring()
    let cifras =cif.length;
    window.alert(`las cifras del numero ${numero} son ${cifras}`)
}

numeroCifras(numero)

  
/*let num = parseInt(window.prompt("Introduce un número:"));

function numeroCifras(numero) {
  if (numero >= 0) {
    let cif = numero.toString();
    let cifras = cif.length;
    return `Las cifras del número ${num} son ${cifras}`;
  } else {
    return "El número introducido es negativo";
  }
}

window.alert(numeroCifras(num));*/
