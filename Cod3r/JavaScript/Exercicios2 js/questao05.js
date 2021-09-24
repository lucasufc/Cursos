/*
 * Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo
 */
function maiorOuIgual(valor1, valor2) {
    if(typeof valor1 != typeof valor2) {
        return false
    }
    return valor1 >= valor2
}

console.log( maiorOuIgual(0, 0)) // retornará false
console.log( maiorOuIgual(0, "0")) // retornará false
console.log( maiorOuIgual(5, 1)) // retornará true