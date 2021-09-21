/*
 * Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação.
 * A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e 
 * a segunda retornará o valor da aplicação sob o regime de juros compostos.
*/
function jurosSimples(capitalInicial, taxaDeJuros,tempo){
    return `Montante: R$ ${(capitalInicial * (1 + taxaDeJuros * tempo )).toFixed(2)}`
}

function jurosCompostos(capitalInicial, taxaDeJuros,tempo){
    return `Montante: R$ ${(capitalInicial * Math.pow(1 + taxaDeJuros, tempo)).toFixed(2)}`
}

console.log(jurosSimples(3000,0.03,3))
console.log(jurosCompostos(3000,0.03,3))