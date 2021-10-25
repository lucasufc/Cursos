/*
 * Crie uma função que recebe dois parâmetros, 
 * base e expoente,
 * e retorne a base elevada ao expoente.
 */

// Só funciona com expoentes inteiros
function exponenciacao (base, expoente){
    let valor = 1
    let operacao = (valor,base) => valor*base
    if (expoente == 0){
        return 0
    } else if (expoente < 0){
        expoente = -expoente
        operacao = (valor, base) => valor/base
    }
    
    for (let i = 0; i < expoente; ++i){
        valor = operacao(valor,base)
    }
    return valor
}
console.log(exponenciacao(2,-2))
console.log(exponenciacao(2,-1))
console.log(exponenciacao(2,0))
console.log(exponenciacao(2,1))
console.log(exponenciacao(2,2))
