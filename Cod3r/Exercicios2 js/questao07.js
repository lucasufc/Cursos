/*
 * Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se
 * o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha
 * "entre" como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro
 * inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não
 * considerando se numero é igual a minimo ou a maximo.
 */

function estaEntre (numero, minimo, maximo, incluso) {
    if( minimo > maximo) {
        [minimo, maximo] = [maximo, minimo]
    }
    if(incluso){
        return numero >= minimo && numero <= maximo
    } else {
        return numero > minimo && numero < falso
    }
}

console.log(estaEntre(10, 100, 50)) // retornará false
console.log(estaEntre(16, 100, 160)) // retornará false
console.log(estaEntre(3, 150, 3)) // retornará false
console.log(estaEntre(3, 150, 3, true)) // retornará true
