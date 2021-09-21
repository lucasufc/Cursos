/*
 * Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
 * ou false.
*/

function divisivelPorTres (valor) {
    return  valor%3 == 0

}

console.log(divisivelPorTres(1))
console.log(divisivelPorTres(3))
console.log(divisivelPorTres(6))
console.log(divisivelPorTres(7))