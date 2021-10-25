/*
 * Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
 * pares e que também tenham índices pares.
 */
function receberSomenteOsParesDeIndicesPares (vetor){
    let pares = []
    for (let i in vetor){
        if(!(vetor[i] % 2) && !(i % 2)){
            pares.push(vetor[i])
        }
    }
    return pares
}

console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4])) // retornará []
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43])) // retornará [10, 22]
