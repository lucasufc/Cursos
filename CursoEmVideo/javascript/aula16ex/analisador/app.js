var vetor = []
function adicionar() {
    let num = document.getElementById('numero')
    let tab = document.getElementById('tabuada')
    let resp = document.getElementById('resp')
    let n = Number(num.value)
    if ( num.value.length == 0 || vetor.includes(n) || n < 1 || n > 100) {
        window.alert('Valor Inválido')
        
    } else {
        resp.innerHTML = ``
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado.`
        vetor.push(n)
        item.value = `tab${vetor.length}`
        tab.appendChild(item)
    }
    num.value = ''
}

function finalizar() {
    let resp = document.getElementById('resp')
    let aux = vetor.sort((a,b) => a - b)
    let tam = vetor.length
    let sum = aux.reduce((a,b) => a + b)
    if(tam){
        let item = document.createElement('p')
        item.innerText = `Ao todo temos ${vetor.length} números cadastrados.`
        resp.appendChild(item)
        item = document.createElement('p')
        item.innerText = `O maior valor informado foi ${aux[tam-1]}.`
        resp.appendChild(item)
        item = document.createElement('p')
        item.innerText = `O menor valor informado foi ${aux[0]}.`
        resp.appendChild(item)
        item = document.createElement('p')
        item.innerText = `Somando todos os valores, temos ${sum}.`
        resp.appendChild(item)
        item = document.createElement('p')
        item.innerText = `A média dos valores digitados é ${( sum / tam).toFixed(2)}`
        resp.appendChild(item)
    } else {
        window.alert('Adicione algum valor!')
    }
}
//tab.innerHTML = ''