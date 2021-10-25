/*
 * Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
 */

let vetor = [1,1,1,1,1]

let media = 0, i

for(i in vetor){
    media += vetor[i] / vetor.length
}
console.log(media)