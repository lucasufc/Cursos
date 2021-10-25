/*
 * Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
 * primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
 * Faça a troca sem utilizar uma variável auxiliar.
 */

function troca(vetor1, vetor2){
    [vetor1, vetor2] = [vetor2, vetor1] 
    return [vetor1, vetor2]
}

let vetor1 = [1, 2, 3]
let vetor2 = [2, 4, 6]

console.log(troca(vetor1,vetor2))