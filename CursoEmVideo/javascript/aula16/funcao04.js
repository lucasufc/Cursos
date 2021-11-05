function fatorial (numero) {
    let resultado = 1
    for(let contador = 1 ; contador <= numero ; ++contador){
        resultado *= contador
    }
    return resultado
}

console.log(fatorial(5))