// Ejercicio 1

// En un concurso de fotografía, donde los usuarios publican una fotografía y obtienen
// likes, se registra la cantidad de likes obtenidos por cada usuario en un array. Ordenar
// los valores para poder indicar cuál fue la mayor cantidad de likes obtenidos, cuánto
// obtuvo el segundo, cuánto el tercero y cuánto el que menos likes obtuvo —suponer
// que participaron 15 usuarios y suponer para cada uno, una cantidad de likes—.

let fotografía = [
{
    usuario : "Alan Gomez",
    likes: 2000
},
{
    usuario : "J Rei",
    likes: 17000
},
{
    usuario : "Duki",
    likes: 82500
},
{
    usuario : "YSY A",
    likes: 81750
},
{
    usuario : "Rusherking",
    likes: 50000
},
{
    usuario : "FMK",
    likes: 20000
},
{
    usuario : "FerPa",
    likes: 16500
},
{
    usuario : "Dj Roman",
    likes: 1500
},
{
    usuario : "Agustin",
    likes: 200
},
{
    usuario : "Pinocho",
    likes: 3000
},
{
    usuario : "Iron Man",
    likes: 230000
},
{
    usuario : "Thor",
    likes: 120000
},
{
    usuario : "Capitan America",
    likes: 200000
},
{
    usuario : "Hulk",
    likes: 170000
},
{
    usuario : "Nick Fury",
    likes: 2500
},
];

function ordenarLikes(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - 1; j++){
            if(arr[j].likes > arr[j+1].likes){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr
};

let resultadoLikes = ordenarLikes(fotografía)
// console.log(resultadoLikes);

// Ejercicio 2
// El servicio meteorológico, para llevar el control diario de temperatura, utiliza un
// objeto temperatura donde registra día —valor numérico del día—, mes —valor
// numérico—, temperatura máxima y temperatura mínima, correspondiente a dicho
// día. Las temperaturas —objeto temperatura— están cargados en un array.
// a) Ordenar por temperatura mínima de menor a mayor.
// b) Ordenar por temperatura máxima de mayor a menor.

let controlDiario = [
    {
        dia : 03,
        mes : 07,
        temperaturaMaxima : 37,
        temperaturaMinima : 28,
    },
    {
        dia : 06,
        mes : 05,
        temperaturaMaxima : 35,
        temperaturaMinima : 25,
    },
    {
        dia : 20,
        mes : 01,
        temperaturaMaxima : 38,
        temperaturaMinima : 27,
    }
]

function ordenarTemperaturas(arr, par){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - 1; j++){
            if(par === 1){
                if(arr[j].temperaturaMaxima < arr[j+1].temperaturaMaxima){
                    let temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp
                }
            } else if (par === 2){
                if(arr[j].temperaturaMinima > arr[j+1].temperaturaMinima){
                    let temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp
                }
            }
        }
    }
    return arr
}

let tempeMaxima = ordenarTemperaturas(controlDiario, 1);
console.log(tempeMaxima);
let tempeMinima = ordenarTemperaturas(controlDiario, 2);
console.log(tempeMinima);