/*
 * Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número
 * que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que
 * têm a quantidade de dígitos indicada pelo segundo parâmetro.
 */
function filtrarPorQuantidadeDeDigitos(vetor, digitos) {
    let valores = []
    let resultado
    for (let i in vetor) {
        resultado = Math.floor(vetor[i] / Math.pow(10,digitos-1))
        if( resultado > 0 && resultado < 10){
            valores.push(vetor[i])
        }
    }
    return valores
}
console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2)) // retornará [38, 10, 11]
console.log(filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1)) // retornará [5, 9, 1]