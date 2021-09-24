/*
 * Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.
 */
function somarNumeros (vetor) {
    return vetor.reduce (function (acumulador, adicional){
        return acumulador + adicional
    })
}

console.log(somarNumeros([10, 10, 10])) // retornará 30
console.log(somarNumeros([15, 15, 15, 15])) // retornará 60