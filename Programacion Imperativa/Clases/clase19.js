const numeros = [1, 3, 10, 6, 4, 9, 8, 7, 5, 2];

function ordenarListado(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - 1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
};

// ordenarListado(numeros);
// console.log(numeros);


// mesa de trabajo

const edades = [33, 27, 34, 30, 34, 25];

// a. Desarrollar una función que ordene internamente de forma ascendente las
// edades, la misma deberá retornar él array ordenado , es decir deberíamos
// obtener resultado como él siguiente.

// [25, 27, 30, 33, 34, 34]

// b. Desarrollar una función que ordene internamente de forma descendente
// las edades, la misma deberá retornar él array ordenado , es decir
// deberíamos obtener resultado como él siguiente.

// [34, 34, 33, 30, 27, 25]

// ejercicio a

function ordenarListado(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - 1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr
};

let resultadoa = ordenarListado(edades);
// console.log(resultadoa);


// ejercicio b

function ordenarListado2(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - 1; j++){
            if(arr[j] < arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr
};

let resultadob = ordenarListado2(edades);
// console.log(resultadob);


// Parte 2
const letras = ["C", "A", "D", "E", "H", "Z", "J", "L"];

function ordenarAlfabetica(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - 1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr
};

let resultado3 = ordenarAlfabetica(letras);
// console.log(resultado3);

// 3. A partir del siguiente array de Objetos Literales se solicita realizar lo siguiente:

const arrayCuentas = [
{
    titular: "Arlene Barr",
    estaHabilitada: false,
    saldo: 3253.40,
    edadTitular: 33,
    tipoCuenta: "sueldo"
},
{
    titular: "Roslyn Torres",
    estaHabilitada: false,
    saldo: 3229.45,
    edadTitular: 27,
    tipoCuenta: "sueldo"
},
{
    titular: "Cleo Lopez",
    estaHabilitada: true,
    saldo: 1360.19,
    edadTitular: 34,
    tipoCuenta: "corriente"
},
{
    titular: "Daniel Malone",
    estaHabilitada: false,
    saldo: 3627.12,
    edadTitular: 30,
    tipoCuenta: "sueldo"
},
{
    titular: "Ethel Leon",
    estaHabilitada: true,
    saldo: 1616.52,
    edadTitular: 34,
    ipoCuenta: "sueldo"
},
{
    titular: "Harding Mitchell",
    estaHabilitada: true,
    saldo: 1408.68,
    edadTitular: 25,
    tipoCuenta: "corriente"
}
]

// a. Desarrollar una función que ordene internamente de forma ascendente según él
// saldo de cada cuenta, la misma deberá retornar él array ordenado .

function ordenarSaldos(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - 1; j++){
            if(arr[j].saldo > arr[j+1].saldo){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr
};

let saldosOrdenados = ordenarSaldos(arrayCuentas);
// console.log(saldosOrdenados);

// b. Desarrollar una función que ordene internamente de forma ascendente según la
// edad del titular de cada cuenta, la misma deberá retornar él array ordenado.

function ordenarEdad(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - 1; j++){
            if(arr[j].edadTitular > arr[j+1].edadTitular){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr
};

let edadesOrdenadas = ordenarEdad(arrayCuentas);
console.log(edadesOrdenadas);