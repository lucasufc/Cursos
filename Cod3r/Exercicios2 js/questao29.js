/*
 * Crie uma função que recebe um array de números e 
 * retorna o segundo maior número presente nesse array
 */
function segundoMaior(vetor) {
    let vet = vetor.sort(function(a, b){return a - b })
    return vet[vet.length - 2]
}
console.log(segundoMaior([12, 16, 1, 5])) // retornará 12
console.log(segundoMaior([8, 4, 5, 6])) // retornará 6
