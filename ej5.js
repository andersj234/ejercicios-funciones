let numeroUsuario1 =parseInt(window.prompt('escoge un numero'))
let numeroUsuario2 =parseInt(window.prompt('escoge un numero'))
function numeroMayorMenor(numero1, numero2){
    numero1
    numero2
    
    //o
     /*numero1 > numero2
    ? numero1 = true
    : numero1 = false*/
    return numero1, numero2;
}
numeroMayorMenor(numeroUsuario1, numeroUsuario2)
console.log(numeroMayorMenor(numeroUsuario1, numeroUsuario2))
if(numeroUsuario1 > numeroUsuario2){
    document.getElementById("div").innerHTML =`${numeroUsuario1} es mayor que ${numeroUsuario2}`
}else{
    document.getElementById("div").innerHTML =`${numeroUsuario1} es menor que ${numeroUsuario2}`
}

  
/*let num1 = parseInt(window.prompt("Introduce un número"));
let num2 = parseInt(window.prompt("Introduce otro número"));

function comparador(numero1, numero2) {
  numero1 > numero2
    ? console.log(`El ${numero1} es mayor`)
    : console.log(`El ${numero1} es menor`);
}

console.log(comparador(num1, num2));*/