const { reject } = require("lodash")

function gerarNumerosEntre(min, max, numerosProibidos){
    if(min > max) {
        [min, max] = [max, min]
    }
    return new Promise (resolve => {
        const aleatorio = parseInt (Math.random() * (max - min + 1) + min)
        if(numerosProibidos.includes(aleatorio)){
            reject('Número repetido!')
        } else {
            resolve(aleatorio)
        }
        
    })
}

async function gerarMegaSena(qtdeNumeros) {
    try {
        const numeros = []
        for(let _ of Array(qtdeNumeros).fill()){
            numeros.push(await gerarNumerosEntre(1,60, numeros))
        }
        return numeros
    } catch(e) {
        if(tentativas > 10) {
            throw "Não deu certo!"
        } else {
            return gerarMegaSena(qtdeNumeros, tentativas + 1)
        }
    }
}
gerarMegaSena(60)
    .then(console.log)
    .catch(console.log)

gerarNumerosEntre(1, 5, [1, 2, 4])
    .then(console.log)
    .catch(console.log)