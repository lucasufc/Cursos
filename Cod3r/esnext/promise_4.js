function gerarNumerosEntre(min, max, tempo= 1000){
    if(min > max) {
        [min, max] = [max, min]
    }
    return new Promise (resolve => {
        setTimeout(function(){
            const aleatorio = parseInt (Math.random() * (max - min + 1) + min)
            resolve(aleatorio)
        }, tempo)
    })
}
function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(1,60,4000),
        gerarNumerosEntre(1,60,1000),
        gerarNumerosEntre(1,60 ,500),
        gerarNumerosEntre(1,60, 3000),
        gerarNumerosEntre(1,60, 100),
        gerarNumerosEntre(1,60,1500)
    ])
}

gerarVariosNumeros()
    .then(console.log)