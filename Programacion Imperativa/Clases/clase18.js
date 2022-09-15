let numeros = [
	[10, 3, 2, 1, 4, 7],
	[5, 5, 10, 100, 4],
	[5, 125, 10, 1020, 4],
	[5, 5, 5097, 100, 4]
];

/**
 * Suma los valores que sean mayores
 * o iguales a 10, pero menor a 1000.
 */

function sumarNum(arr){
    let suma = 0
	for(let i = 0; i < arr.length; i++){ //compara la cantidad de filas, recorre por array
		for(let j = 0; j < arr[i].length; j++){ // compara la cantidad de columnas, recorre las filas
			if(arr[i][j] >= 10 && arr[i][j] < 1000){
                suma += arr[i][j]
            }
		}
	}
    return suma
}

// let resultado = sumarNum(numeros);
// console.log(resultado);


// Ejercicio

// Se está realizando el desarrollo de una aplicación para control de gastos. Cada día, el usuario ingresa sus gastos cotidianos.
// La idea es solo registrar el total de los gastos, al finalizar la jornada.
// Para simplificar, vamos a considerar que todos los meses tienen cuatro semanas.
// Los gastos estarán en una matriz de 4x7, cada fila representa una semana y cada columna un día. Es decir fila 0, semana 1, fila 1, semana 2, etc. Columna 0, dia 1, columna 1, dia 2, etcétera. 

miMatriz = [
	[1135, 2500, 900, 1600, 2800, 3650, 1100],
	[1750, 1890, 1900, 1300, 898, 1750, 2800],
	[1700, 1150, 1690, 1900, 1770, 4500, 2560],
	[800, 1250, 1430, 2100, 1980, 1270, 950]
];

// a)  Lo que nos solicitan es dar el total de gastos en una semana. Recordemos que cada fila representa una semana, es decir, si nos indican semana 2 tenemos que sumar la fila 1 de la matriz. Recordar que las matrices comienzan siempre en posición 0. 

function gastoSemana(matriz, numeroSemana){
	let gastoTotal = 0
	for(let i = 0; i < matriz.length; i++){
		for(let j = 0; j < matriz[i].length; j++){
			if(i === (numeroSemana - 1)){
				gastoTotal += matriz[i][j]
			}
		}
	}
	return gastoTotal
}

let solucionSemanas = gastoSemana(miMatriz, 3)
// console.log(solucionSemanas);

// b) La aplicación también tendrá una parte de estadísticas, para esto nos solicitan dar el total de un día en particular, por ejemplo del día 3, acá también tengamos en cuenta lo que ocurre con las filas, ya que las columnas también comienzan en 0.

function gastoDia(matriz, numeroDia){
	let gastoTotal = 0
	for(let i = 0; i < matriz.length; i++){
		for(let j = 0; j < matriz[i].length; j++){
			if(j === (numeroDia - 1)){
				gastoTotal += matriz[i][j]
			}
		}
	}
	return gastoTotal
}

let solucionDias = gastoDia(miMatriz, 1)
// console.log(solucionDias);

// c) Por último, es necesario tener el total de gastos realizados en el mes.
// Pregunta para pensar, ¿es lo mismo recorrer por filas o por columnas para resolver este último punto?

function gastoMes(matriz){
	let gastoTotal = 0
	for(let i = 0; i < matriz.length; i++){
		for(let j = 0; j < matriz[i].length; j++){
			gastoTotal += matriz[i][j]		
		}
	}
	return gastoTotal
}

let solucionMes = gastoMes(miMatriz);
// console.log(solucionMes);

// d) Obtener cuál fue la semana que más gastos se realizaron. Indicar el día que más gastos se realizaron.
// Posibles matrices para comprobar los resultados. 

function diaMasGastos(matriz){
	let gastoDiaMayor = matriz[0][0]
	for(let i = 0; i < matriz.length; i++){
		for(let j = 0; j < matriz[i].length; j++){
			if(gastoDiaMayor < matriz[i][j]){
				gastoDiaMayor = matriz[i][j]
			}
		}
	}
	
	return gastoDiaMayor
}

let solDiaGastos = diaMasGastos(miMatriz);
// let mensaje = ("El día que más gastó fue el día ", dia, "de la semana ", semana, "y el gasto fue de ", gastoDiaMayor)
console.log(solDiaGastos);


function SemanaMasGastos(matriz){
	let semanaMayor = matriz[0][0]
	let semana = i + 1
	let semanaAnterior = i 
	for(let i = 0; i < matriz.length; i++){
		

		for(let j = 0; j < matriz[i].length; j++){
			

		}
	}
	
	return semanaMayor
}