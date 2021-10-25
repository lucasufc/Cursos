/*
 * Criar uma função que receba um array de números e retorne o menor número desse array.
 */
function menorNumero(vetor) {
    let menor = vetor[0]
    for(let i = 1; i < vetor.length; ++i){
        if(menor > vetor[i]){
            menor = vetor[i]
        }
    }
    return menor
}
console.log(menorNumero([10, 5, 35, 65])) // retornará 5
console.log(menorNumero([5, -15, 50, 3])) // retornará -15