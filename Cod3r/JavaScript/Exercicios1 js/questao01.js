/*
 * Crie uma função que dado dois valores (passados como parâmetros) 
 * mostre no console a soma, subtração, multiplicação e divisão desses valores.
 */

function operacoes(valor1, valor2){
    console.log(`
    Soma: ${valor1 + valor2},
    Subtração: ${valor1 - valor2},
    Multiplicação: ${valor1 * valor2}
    Divisão: ${(valor1 / valor2).toFixed(2)}`)
}
operacoes(2,1)