/*
 * Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.
*/

let vetor = [3,2,4,5,21,3,12,3,12,23,1,500]
let min, max

for (let i in vetor){
    if(i == 0){
        min = vetor[i]
        max = vetor[i]
    }else {
        max = (vetor[i] > max) ? vetor[i] : vetor[i]
        min = (vetor[i] < min) ? vetor[i] : min
    }
}
console.log(min, max)