let numeroPar =parseInt(window,prompt('escoge un numero'))
function esPar(numero1){
    numero1%2 ===0
    return numero1
}

if(numeroPar%2 === 0){
    console.log(`el numero ${numeroPar} es par`)
}else if(numeroPar%2 !==0){
    console.log(`el numero ${numeroPar} es impar`)
}
console.log(esPar(numeroPar))