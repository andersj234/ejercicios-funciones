let numeroUsuario1
let numeroUsuario2
do{  
numeroUsuario1 = parseInt(window.prompt('escoje un numero'))
numeroUsuario2 = parseInt(window.prompt('escoje un numero'))
window.alert(usuario(numeroUsuario1, numeroUsuario2))
}
while(numeroUsuario1 === 0 || numeroUsuario2 ===0);

function usuario(numero1, numero2){
    return numero1/numero2;
   
}
console.log(usuario(numeroUsuario1,numeroUsuario2))