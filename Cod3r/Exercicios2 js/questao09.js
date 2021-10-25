/*
 * Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
 * que o segundo será o número de vezes que haverá repetição. Um array será retornado.
 */

function repetir (valor, quantidade){
    let vetor = []
    for(let i = 0; i < quantidade; ++i) {
        vetor.push(valor)
    }
    return vetor
}

console.log(repetir("código", 2)) // retornará ["código", "código"]
console.log(repetir(7, 3)) // retornará [7, 7, 7]