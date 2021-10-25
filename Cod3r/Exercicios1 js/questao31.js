/*
 * Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
 * e imprime a quantidade no console.
 */

let vetor = [ -1, -4, 21, 47, -44, 3, -3, 4, 47, 5, 12]

let negativos = 0

for (let i in vetor){
    negativos = (vetor[i] < 0) ? ++negativos : negativos
}
console.log(negativos)