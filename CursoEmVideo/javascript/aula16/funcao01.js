function parImpar(numero) {
    if(numero % 2) {
        return `O número ${numero} é Ímpar!`
    } else {
        return `O número ${numero} é Par!`
    }
}

console.log(parImpar(223))