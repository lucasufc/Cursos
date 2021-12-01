let pontuacaoTimeA = 0, pontuacaoTimeB = 0
let setTimeA = 0, setTimeB = 0;
const nomeTimeA = window.prompt('Qual o nome do time 1?')
const nomeTimeB = window.prompt('Qual o nome do time 2?')

atualizarNomes()
ativarPontos()

function ativarPontos() {
    let pontosA = document.querySelector('#pontuacaoA')
    pontosA.style.cursor = 'pointer'
    pontosA.onclick = atualizarPonto(nomeTimeA)
    pontosA.innerText = pontuacaoTimeA

    let pontosB = document.querySelector('#pontuacaoB')
    pontosB.onclick = atualizarPonto(nomeTimeB)
    pontosB.style.cursor = 'pointer'
    pontosB.innerText = pontuacaoTimeB
}
function ativarSet() {
    let setA = document.querySelector('#setA')
    setA.style.cursor = 'pointer'
    setA.innerText = setTimeA
    let setB = document.querySelector('#setB')
    setB.style.cursor = 'pointer'
    setB.innerText = setTimeB
}

function atualizarPonto(time){
    if(time == nomeTimeA) {
        setPontuacao(nomeTimeA)
    } else {
        setPontuacao(nomeTimeB)
    }
}
function setPontuacao(time){
    let pontuacao
    if(time == nomeTimeA) {
        pontuacao = document.querySelector('#pontuacaoA')
        pontuacaoTimeA += 1
        pontuacao.innerText = pontuacaoTimeA
    } else {
        pontuacao = document.querySelector('#pontuacaoB')
        pontuacaoTimeB += 1
        pontuacao.innerText = pontuacaoTimeB
    }
}

function atualizarNomes () {
    let span = document.querySelector('#nomeTimeA')
    span.innerText = nomeTimeA
    span = document.querySelector('#nomeTimeB')
    span.innerText = nomeTimeB
}