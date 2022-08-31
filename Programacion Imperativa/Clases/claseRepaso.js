const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];
// console.log(edades);

// 1. Obtener en un nuevo array las edades menores a 18.
let menoresEdad = []

function edadMenores(array){
    for(let i = 0; i < array.length; i++){
        if( array[i] < 18){
            menoresEdad.push(array[i])
        }
    }
    return menoresEdad
}

// edadMenores(edades)
// console.log(menoresEdad);

// 2. Obtener en un nuevo array las edades mayor o igual a 18.
let mayoresEdad = []

function edadMayores(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] >= 18){
            mayoresEdad.push(array[i])
        }
    }
    return mayoresEdad
}

// edadMayores(edades);
// console.log(mayoresEdad);

// 3. Obtener en un nuevo array las edades igual a 18.
let edadJusta = []

function edadDieci(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] === 18){
            edadJusta.push(array[i])
        }
    }
    return edadJusta
}

// edadDieci(edades)
// console.log(edadJusta);

// 4. Obtener el menor.
let edadMenor = 100000

function menor(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] < edadMenor){
            edadMenor = array[i]
        }
    }
    return edadMenor
}

// console.log(edades);
// menor(edades);
// console.log(edadMenor)

// 5. Obtener el mayor. 

let edadMayor = -1

function mayor(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] > edadMayor){
            edadMayor = array[i]
        }
    }
    return edadMayor
}

// mayor(edades);
// console.log(edadMayor);

// 6. Obtener el promedio de edades.
let promedio, sumaEdades = 0

function promEdades(array){
    for (let i = 0; i < array.length; i++) {
        sumaEdades = sumaEdades + array[i];
    }
    promedio = sumaEdades / array.length
    mensaje = "El promedio de edada es: "
    return mensaje + promedio
}

console.log(promEdades(edades));

// 7. Incrementar en 1 todas las edades.

function edades_1(array){
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i] + 1
    }
    return array
}

// console.log(edades);
// edades_1(edades);
// console.log(edades);