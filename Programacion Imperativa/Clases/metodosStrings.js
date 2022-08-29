function reemplazoFastFast(texto, cambiar, reemplazar){
    let frase = texto.replace(cambiar, reemplazar)
    return frase
}

let textoSinGuiones = reemplazoFastFast("Este texto es corto", "corto", "largo")
console.log(textoSinGuiones);