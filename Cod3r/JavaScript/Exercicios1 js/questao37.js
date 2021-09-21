/*
 * Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
 * como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
 * bem como a soma dos elementos.
*/

function progressaoAritimetica (n, a1, r){
    let soma = 0, atual
    for(let i = 0; i< n; ++i){
        atual = a1 + i * r
        console.log(`a${i+1} = ${atual}`)
        soma += atual
    }
    console.log(`Soma = ${soma}`)
}

function progressaoGeometrica (n, a1, r){
    let soma = 0, atual
    for(let i = 0; i< n; ++i){
        atual = a1 *( 1 + i * r)
        console.log(`a${i+1} = ${atual}`)
        soma += atual
    }
    console.log(`Soma = ${soma}`)
}

//progressaoAritimetica(3, 0, 1)
progressaoGeometrica(4, 2, 2)