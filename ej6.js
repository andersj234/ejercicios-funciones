let numeroUsuario1
let numeroUsuario2
do{  
numeroUsuario1 = parseInt(window.prompt('escoje un numero'))
numeroUsuario2 = parseInt(window.prompt('escoje un numero'))
window.alert(usuario(numeroUsuario1, numeroUsuario2))
}
while(numeroUsuario2 !==0);

function usuario(numero1, numero2){
    return numero1/numero2;
   
}
console.log(usuario(numeroUsuario1,numeroUsuario2)) //aunque escriba un cero no me lo para

/*do {
  let num1 = parseInt(window.prompt("Introduce un número"));
  let num2 = parseInt(window.prompt("Introduce otro número"));

  window.alert(dividir(num1, num2));
} while (num2 !== 0);

function dividir(numero1, numero2) {
  return numero1 / numero2;
}*/

//este es el bueno