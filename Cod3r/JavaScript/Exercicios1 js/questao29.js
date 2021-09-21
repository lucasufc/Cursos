/*
 * Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
 * deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
 * deles estão fora do intervalo, escrevendo estas informações
 */

function intervalo (vetor){
    let quantidade = 0
    for(let i in vetor){
        if(vetor[i] >= 10 && vetor[i] <= 20){
            ++quantidade
        }
    }
    return quantidade
}

let vetor = [1,10,11,19,20,21]

console.log(intervalo(vetor))