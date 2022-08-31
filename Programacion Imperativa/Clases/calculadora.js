const prompt = require("prompt-sync")({ sigint: true });

let num1 = parseInt(prompt("Ingrese el primer número: "))
let num2 = parseInt(prompt("Ingrese el segundo número: "))

function sumar(){
    let mensaje = "La suma es igual a: "
    return mensaje + (num1 + num2)
}

function restar(){
    let mensaje = "La resta es igual a: "
    return mensaje + (num1 - num2)
}

function multiplicar(){
    let mensaje = "La multiplicación es igual a: "
    return mensaje + (num1 * num2)
}

function dividir(){
    let mensaje = "La divisón es igual a: "
    return mensaje + (num1 / num2)
}

console.log(sumar())
console.log(restar())
console.log(multiplicar())
console.log(dividir())