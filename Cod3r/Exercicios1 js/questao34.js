/*
 * Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
 * todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.
*/

function verifica (string1, string2){
    let estaContido = true;
    for (let i = 0; i < string1.length; ++i) {
        let caractereString1 = string1.charAt(i).toUpperCase()
        for(let j = 0; j < string2.length; ++j){
            let caractereString2 = string2.charAt(j).toUpperCase()
            if(caractereString1 == caractereString2) {
                estaContido = true
                break
            } else {
                estaContido = false
            }
        }
        if(!estaContido) {
            return estaContido
        }
    }
    return estaContido
}

function verificacaoDeString (string1, string2) {
    if(string1.length>= string2.length){
        return (verifica(string2, string1))
    } else{
        return (verifica(string1, string2))
    }
 }

 console.log(verificacaoDeString('abccc','abc'))

 