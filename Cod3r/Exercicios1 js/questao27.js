/*
 * Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
 * crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
 * quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
 */
function checagem (altura,taxaDeCrescimento){
    let anos = 0
    while(altura[0] + taxaDeCrescimento[0]*anos > altura[1] + taxaDeCrescimento[1]*anos){
        ++anos
    }
    return anos
}

function compara(altura,taxaDeCrescimento){
    if(altura[0] > altura[1]){
        if(taxaDeCrescimento[0] > taxaDeCrescimento[1]){
            console.log("A primeira criança sempre será maior")
        }else {
            return checagem(altura,taxaDeCrescimento)
        }
    } else if( altura [0] == altura [1]){
        console.log("Os dois possuem a mesma altura!")
    } else{
        if(taxaDeCrescimento[1] > taxaDeCrescimento[0]){
            console.log("A Segunda criança sempre será maior")
        }else {
            return checagem([altura[1], altura[0]],[taxaDeCrescimento[1], taxaDeCrescimento[0]])
        }
    }
}
let crianca =  [100, 130]
let taxa = [15, 0]
console.log(compara(crianca, taxa))