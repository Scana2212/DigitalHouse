// Realizar una función llamada restarPares que reciba por parámetro dos valores numéricos. 
// Si ambos números recibidos son pares entonces se deberá retornar el resultado de restarle al primer parámetro el segundo. 
// Si alguno o los dos no son pares , se deberá retornar un string que diga “Lo siento, uno de los parámetros no es par”


// ejercicio 1
console.log("**********");
console.log("Ejercicio 1: ");

function restarPares(parametro1, parametro2){
    if(parametro1 % 2 === 0 && parametro2 % 2 === 0){
        let resultado = parametro1 - parametro2
        return resultado 
    } else if(parametro1 % 2 !== 0 || parametro2 % 2 !== 0){
        let resultado = "Lo siento, uno de los parámetros no es par"
        return resultado
    }
}

let resRestarPares = restarPares(3, 4)
console.log(resRestarPares);

// Debemos poder controlar el acceso a un recital de música para una determinada persona. Para eso, debemos realizar una función  que reciba dos parámetros
// La edad de la persona, Number
// Si tiene o no, el ticket de entrada , booleano
// La función deberá evaluar las siguientes condiciones y retornar en cada caso lo que se pida:
// Si tiene entrada y es mayor o igual de 18 años: retorna un valor booleano true.
// Si tiene entrada pero es menor de 18 años: retorna un string que diga “Sólo puedes acceder con un adulto acompañante”.
// Si no tiene entrada: retorna un booleano false.

// ejercicio 2
console.log("**********");
console.log("Ejercicio 2: ");

function recital(x, n){
    if(x === true && n >= 18){
        return true
    } else if(x === true && n < 18){
        let mensaje = "Sólo puedes acceder con un adulto acompañante"
        return mensaje
    } else{
        return false
    }
}

let ticket = true //probé hacerlo con false
let edad = 17   // probé hacerlo con 12 y 20

let resRecital = recital(ticket, edad)
console.log(resRecital);

// Realizar una función que reciba un array como parámetro, y lo recorra para filtrar los productos que sean de tipo “tecnologia” y que su precio sea mayor o igual a 50000, la función deberá retornar un nuevo arreglo con los productos que cumplan con las condiciones antes mencionadas.


// ejercicio 3
console.log("**********");
console.log("Ejercicio 3: ");

let productos = [
    {
        producto : "remera",
        tipo: "indumentaria",
        precio: 2100
    },
    {
        producto : "notebook",
        tipo: "tecnologia",
        precio: 200000
    },
    {
        producto : "celular",
        tipo: "tecnologia",
        precio: 27000
    },
    {
        producto : "protector solar",
        tipo: "cosmetica",
        precio: 2500
    },
    {
        producto : "pantalon",
        tipo: "indumentaria",
        precio: 7500
    },
    {
        producto : "tablet",
        tipo: "tecnologia",
        precio: 60000
    },
]

let nuevoArray = []

function filtrarProductos(array){
    for(let i = 0; i < array.length; i++){
        if(array[i].tipo === "tecnologia" && array[i].precio >= 50000){
            nuevoArray.push(array[i])
        }
    }
    return nuevoArray
}

filtrarProductos(productos);
console.log(nuevoArray);