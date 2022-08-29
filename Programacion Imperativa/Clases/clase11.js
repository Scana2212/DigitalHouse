const prompt = require("prompt-sync")({ sigint: true });
// Desde un banco nos contactan para crear una aplicación que pueda facilitar el manejo
// de información y las acciones que el mismo necesita. Nuestro tech leader nos facilita la
// forma de representar a los usuarios (cuentas bancarias). Cada una de estas cuentas
// tiene la siguiente información:

// ● N.o de cuenta (solo números).
// ● Tipo de cuenta (cuenta corriente en pesos o caja de ahorro en
// pesos).
// ● Saldo en pesos (solo la cantidad).
// ● Titular de la cuenta (nombre completo).

//   2. Nos solicitan también crear un objeto literal llamado “banco”, el cual tendrá una
// propiedad llamada “clientes” que estará compuesta de la lista de objetos
// obtenidos en el punto anterior.
// 3. Al objeto “banco”, crearle un método llamado consultarCliente, el cual recibirá un
// nombre (titular) por parámetro, deberá buscarlo en la lista de cuentas y retornar el
// objeto cliente que corresponda con ese nombre ingresado.
// Ayuda: let clienteEncontrado = banco.consultarCliente(“Ramon Connell”);
// 4. Crear otro método llamado depósito que recibirá dos parámetros: el titular de
// cuenta y una cantidad de dinero a depositar. El método debe obtener la cuenta
// correspondiente y luego sumar la cantidad de dinero a depositar a saldo en pesos.
// Luego, deberá dar un aviso por la consola con el mensaje “Depósito realizado, su
// nuevo saldo es: ”.
// 5. Crear un último método llamado extracción que recibirá también dos parámetros:
// el titular de cuenta y el monto a extraer. El método debe obtener la cuenta
// correspondiente y restar el monto al saldo actual. En caso de que el resultado sea
// menor a 0, deberá imprimir un mensaje por la consola de “Fondos insuficientes”.
// De lo contrario, deberá imprimir “Extracción realizada correctamente, su nuevo
// saldo es: XXXX”.

//la lista de clientes.
let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    },
  ];

let banco = {
    clientes : arrayCuentas,
    saldo : function(titular){
      for(let i = 0; i < arrayCuentas.length; i++){
          if(arrayCuentas[i].titularCuenta === titular){
            let mensaje = "Su saldo es: ";
            return mensaje + arrayCuentas[i].saldoEnPesos;
          }
      }
  },

    consultarCliente : function(titular){
        for(let i = 0; i < arrayCuentas.length; i++){
            if(arrayCuentas[i].titularCuenta === titular){
                return (arrayCuentas[i]);
            }
        }
    },

    deposito : function(titular, cantidadDeposito){
        for(let i = 0; i < arrayCuentas.length; i++){
            if(arrayCuentas[i].titularCuenta === titular){
                monto = arrayCuentas[i].saldoEnPesos + cantidadDeposito;
                let mensaje = "Depósito realizado, su nuevo saldo es: ";
                return mensaje + monto;
            }
        }
    },

    extraccion : function(titular){
      let cantidadExtraccion = parseInt(prompt("Ingrese un monto para la extracción: "))
      for(let i = 0; i < arrayCuentas.length; i++){
          if(arrayCuentas[i].titularCuenta === titular){
              let monto = arrayCuentas[i].saldoEnPesos - cantidadExtraccion;
              if (monto < 0){
                console.log("Fondos Insuficientes");
                while(cantidadExtraccion > arrayCuentas[i].saldoEnPesos){
                  cantidadExtraccion = parseInt(prompt("Ingrese un monto válido de extracción: "))
                  monto = arrayCuentas[i].saldoEnPesos - cantidadExtraccion;
                }
              } else {
                console.log("Extracción realizada correctamente, su nuevo saldo es: ", monto)
              }
          }
      }
  }
}
// --Imprimi por consola el resultado del deposito(4)--
let cuentas = banco.deposito("Ramon Connell", 1000)
console.log(cuentas);


let saldoActual = banco.saldo("Ramon Connell")
console.log(saldoActual);


let cuentas2 = banco.extraccion("Ramon Connell")
console.log(cuentas2);