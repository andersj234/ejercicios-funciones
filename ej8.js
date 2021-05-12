let factorial = parseInt(window.prompt('escoge el numero factorial que quieres'))

function factoriales(numero){
    let numero =1
    for(let i=numero; i > 1; i--){
        numero = numero*i
    }
    return numero
}
window.alert(`El factorial de ${numero} es ${factorial(numero)}`)

/*let numero = parseInt(window.prompt("Introduce un número:"));

function factorial(num) {
  let suma = 1;
  for (i = num; i > 1; i--) {
    suma = suma * i;
  }
  return suma;
}

window.alert(`El factorial de ${numero} es ${factorial(numero)}`);*/