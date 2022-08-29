const prompt = require("prompt-sync")({ sigint: true });

// Ejercicios de PG

// 1) Crear una función que pida un valor por parámetro y muestre los 10
// números siguientes.
// 2) Imprimir los números entre el 5 y el 20, saltando de tres en tres.
// 3) Escribir un programa que muestre la sumatoria de todos los números
// entre el 0 y el 100
// 4) Dado un número entero positivo, mostrar su factorial. El factorial de
// un número se obtiene multiplicando todos los números enteros
// positivos que hay entre el 1 y ese número.
// 5) Crear una función que muestre todos los números de la secuencia de
// fibonacci hasta el valor ingresado por parámetro.

// let parametro = parseInt(prompt("Ingrese el valor por parametro: "))

// function ejercicio1(parametro){
//     for(let i = 1; i >= 10; i++){
//         console.log(parametro)
//         parametro++
//         return parametro
//     };
// };

// console.log(ejercicio1(parametro));

// function tablaDeMultiplicar(numero){
//     let i = 0
//     while(i <= 10){
//         console.log(numero + " * " + i + " = " + (numero * i));
//         i = i + 1
//     }
// }

// tablaDeMultiplicar(5)

function dominio(texto){
    return ("http://www." + texto)
}


console.log(dominio("digitalhouse.com.ar"))