/*
 * Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as
 * consoantes, ou seja, sem as vogais.
 */

function removerVogais(palavra) {
    let vogais = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']
    vogais.forEach(vogal => palavra = palavra.replace(vogal,''))
    return palavra

}

console.log(removerVogais("Cod3r")) // retornará "Cd3r"
console.log(removerVogais("Fundamentos")) // retornará "Fndmnts"