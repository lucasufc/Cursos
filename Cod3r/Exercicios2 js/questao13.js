/*
 * Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
 * array recebido como parâmetro
 */

function filtrarNumeros (vetor) {
    let resultado = []
    for(let i in vetor) {
        if(typeof vetor[i] == 'number'){
            resultado.push(vetor[i])
        }
    }
    return resultado
}

console.log(filtrarNumeros(["Javascript", 1, "3", "Web", 20])) // retornará [1, 20]
console.log(filtrarNumeros(["a", "c"])) // retornará []
