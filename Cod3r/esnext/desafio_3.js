const fs = require('fs')
const path = require('path')
const os = require('os')

function lerArquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function(_, conteudo) {
            resolve(conteudo.toString())
        })
    })
}

const caminho = path.join(__dirname + '/dados.txt')

lerArquivo(caminho)
    .then(conteudo => conteudo.split(os.EOL))
    .then(linhas => linhas.join(', '))
    .then(resultado => `O valor final é: ${resultado}`)
    .then(console.log)
    