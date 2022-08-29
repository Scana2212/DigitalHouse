const prompt = require("prompt-sync")({ sigint: true });

console.log("***********");
let op = parseInt(prompt("Ingrese una opción: (1-Cargar Datos de cuenta 2-Hacer Depositos 3-Hacer extracciones 4-Salir): "));
console.log("***********");

function menu(op){
    // op entre 0 y 5
    while(op > 0 && op < 5){ 
        // si no es valida, que vuelva a ingresar
        console.log("Opción Invalida, por favor elija una de las siguientes");
        op = parseInt(prompt("(1-Cargar Datos de cuenta 2-Hacer Depositos 3-Hacer extracciones 4-Salir): "));
    }
    // si es valida, entrar a el condicional correspondiente
    if (op === 1){
        return "hola"
    } else if (op === 2){
        return "mundo"
    } else if(op === 3){
        return "lucas"
    } else {
        return 23
    }
}

// Ingresar por teclado el numero para realizar la accion correspondiente
// console.log("***********");
// let op = parseInt(prompt("Ingrese una opción: (1-Cargar Datos de cuenta 2-Hacer Depositos 3-Hacer extracciones 4-Salir): "));
// console.log("***********");

// imprimir por consola la función
console.log(menu);