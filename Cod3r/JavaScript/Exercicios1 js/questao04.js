/* 
 * Crie uma função que irá receber dois valores, o dividendo e o divisor. 
 * A função deverá imprimir o resultado
 * e o resto da divisão destes dois valores.
 */

function divisao(dividendo, divisor) {
    return [ Math.floor(dividendo/divisor), dividendo % divisor]
}

console.log(divisao(10,1))
console.log(divisao(10,2))
console.log(divisao(10,3))