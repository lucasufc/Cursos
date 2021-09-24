/*
 * Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
 * multiplicação deles. Porém, não utilize o operador de mutiplicação.
 */

function multiplicar (valor1, valor2) {
    let resultado = 0
    if(valor1 > valor2){
        [valor1, valor2] = [valor2, valor1]
    }
    for(let i = 0; i < valor2; ++i) {
        resultado += valor1
    }
    return resultado
}

console.log(multiplicar(5, 5)) // retornará 25
console.log(multiplicar(0, 7)) // retornará 0
