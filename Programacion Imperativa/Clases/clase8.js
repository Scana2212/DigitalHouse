const prompt = require("prompt-sync")({ sigint: true });

for(let loro = 1; loro <= 5; loro++) {
    console.log("Repetir vez");
};

for(let loro = 5; loro >= 1; loro--) {
    console.log("Repetir vez");
};

let vuelta = 1
while(vuelta <= 5){
    console.log("Repetir una vez");
    vuelta++
};

do{
    console.log("Repetir una vez")
    vuelta++
}while(vuelta <= 1);

function noParesDeContarImparesHasta(numero){
    let impares = 0;
    for(let i = 0; i <= numero; i++){
        if (i % 2 !== 0){
            impares++
        }
    }
    return impares
};

// console.log(noParesDeContarImparesHasta(5))

