/* 
 * Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
 * aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
 * aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
 * "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
*/

function mediaPonderada(notas){
    notas.sort()
    let valor = 0
    let peso = [3,3,4]
    for (let i in notas){
       valor += (notas[i]*peso[i])/10
    }
    return valor
}

function resultado(codigo, notas){
    if(codigo >= 0){
        let media = mediaPonderada(notas)
        if(media >= 5){
            return `O aluno de ${codigo}, foi APROVADO`
        } else {
            return `O aluno de ${codigo}, foi reprovado`
        }
    }
}

let aluno = 123
let notas = [2.8, 6, 3.5]
console.log(resultado(aluno, notas))