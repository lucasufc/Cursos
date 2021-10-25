/*
 * Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de
 * vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar
 * maiúsculas de minúsculas.
 */
function contarCaractere(letra, texto){
    let contador = 0
    for (let i in texto){
        if(texto[i] == letra){
            ++contador
        }
    }
    return contador
}
console.log(contarCaractere("r", "A sorte favorece os audazes")) // retornará 2
console.log(contarCaractere("c", "Conhece-te a ti mesmo")) // retornará 1
