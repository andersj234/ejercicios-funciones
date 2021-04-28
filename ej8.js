let factorial = parseInt(window.prompt('escoge el numero factorial que quieres'))
let numero =1
function factoriales(){
    for(let i=1; i<=10; i++){
        numero = numero*i
        console(console.log(`${i} -- ${numero}`))
    }
    return numero
}
window.alert(factoriales(4))