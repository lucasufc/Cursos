function contar() {
    let inicio = Number(document.getElementById('inicio').value)
    let fim = Number(document.getElementById('fim').value)
    let passo = Number(document.getElementById('passo').value)
    let resp = document.querySelector('div#resp')
    let texto = '<p>Contando:</p> <p>'
    if(inicio > fim) {
        window.alert('[Atenção] Valor de início maior que valor de Fim! Invertendo valores!')
        let aux = inicio
        inicio = fim
        fim = aux
    } 
    if(passo <= 0){
        window.alert('[Erro] Alterando valor de passo para 1')
        passo = 1
    }
    
    resp.innerHTML = ''
    for( ; inicio <= fim; inicio += passo ){
        texto += `${inicio} &#x1F449; `
    }
    texto += '&#x1F3C1</p>'
    resp.innerHTML = texto
}