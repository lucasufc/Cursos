/*
 * Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
 */

function imparEPar(vetor){
    let impar = 0, par = 0
    for(let i in vetor){
        if(vetor[i]%2){
            ++impar
        } else{
            ++par
        }
    }
    return [impar, par]
}

let a = [1,4,2,3,59,2,3]

console.log(imparEPar(a))