/*
 * Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por
 * exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês
 */
function nomeDoMes(mes){
    meses = [
        'Janeiro', 'Feveiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ]
    return meses[ mes - 1 ]
}

console.log( nomeDoMes(1))// retornará "janeiro"
console.log( nomeDoMes(4)) // retornará "abril"
