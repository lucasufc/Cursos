/*
 * Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
 * quantidade especificada no parâmetro.
 */

function simboloMais(valor){
    let mais = ''
    for(let i = 0; i < valor; ++i) {
        mais +='+'
    }
    return mais
}

console.log(simboloMais(2)) // retornará "++"
console.log(simboloMais(4)) // retornará "++++")