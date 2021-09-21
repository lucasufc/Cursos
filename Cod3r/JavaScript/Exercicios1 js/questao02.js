/*
 * Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados: 
 * Equilátero: Os três lados são iguais.
 * Isósceles: Dois lados iguais.
 * Escaleno: Todos os lados são diferentes.
 * Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto ao tamanho de seus lados.
 * (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo). 
 */

function tipoTriangulo(ladoA, ladoB, ladoC) {
    if( (ladoA == ladoB) && (ladoB == ladoC) ){
        return "Equilátero"
    } else if( (ladoA != ladoB) && (ladoA != ladoC) && (ladoB != ladoC) ){
        return "Escaleno"
    } else {
        return "Isóceles"
    }
}

console.log(tipoTriangulo(1, 2, 3))
console.log(tipoTriangulo(2, 2, 3))
console.log(tipoTriangulo(2, 2, 2))