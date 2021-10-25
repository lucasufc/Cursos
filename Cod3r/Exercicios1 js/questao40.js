/*
 * Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
 * modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
 * conceito B e de 9,0 a 10,0 o conceito A
 */

function conceito (nota){
    if(nota <5){
        return 'D'
    } else if(nota < 7){
        return 'C'
    } else if(nota < 9){
        return 'B'
    } else if (nota <= 10) {
        return 'A'
    } else {
        return "nota inválida"
    }
}

function verificar(notas){
    let classificador = []
    for(let i in notas){
        classificador.push(conceito(notas[i]))
    }
    return classificador
}
let notas = [1, 6, 8, 9, 11]

console.log(verificar(notas))