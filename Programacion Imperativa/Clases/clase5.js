const prompt = require("prompt-sync")({ sigint: true });

function saludar(){
    console.log("hola, tanto tiempo sin verte.")
}

function sumar(a, b){
    return a + b
}

let nombre = prompt("Ingrese su nombre: ");
function saludo(nombre){
    console.log("Hola", nombre,", como te va?")
}

saludar()
console.log(sumar(2,2))
saludo(nombre)

function test1(x, y){
    return y - x
}

test1(10, 40)
//console.log(test1(10, 40))

function test2 (x, y){
    return x * 2
    //console.log(x)
    return x / 2
}

test2(10)
//console.log(test2(10))

function pulgadasACentimetros(pulgadas){
    return pulgadas * 2.54
}
//console.log(pulgadasACentimetros(1))

function stringAUrl (string){
    //console.log(`https://www.${string}.com`)
}
stringAUrl(`pedro`)

function stringAAdmiracion(string){
    //console.log(`${string}!`)
}
stringAAdmiracion(`vamos`)

let edadPerro = prompt(`Ingrese edad del perro: `)

function edad(edadPerro){
    //console.log(edadPerro * 7)
}
edad(edadPerro)


let sueldo = prompt(`Ingrese su sueldo: `)
function horaDeTrabajo(sueldo){
    return sueldo / 40
}
//console.log(horaDeTrabajo(sueldo))
