/*
 * Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
 * inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
 * elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
 * o valor do elemento for maior que 5.
 */

function multiplicaTodos (vetor, inteiro){
    for (let i in vetor){
        vetor[i] *= inteiro
    }
    return vetor
}

function multiplicaMaiorCinco (vetor, inteiro){
    for (let i in vetor){
        if(vetor[i] > 5){
            vetor[i] *= inteiro
        }    
    }
    return vetor
}

let vetor = [1, 2, 3, 4, 5, 6]

console.log(multiplicaMaiorCinco(vetor, 10))