let pontuacaoTimeA = 0, pontuacaoTimeB = 0
let setTimeA = 0, setTimeB = 0;
let nomeTimeA
let nomeTimeB
function pegarNomes() {
    nomeTimeA = window.prompt('Qual o nome do time 1?')
    do{
        nomeTimeB = window.prompt('Qual o nome do time 2?')
    } while(nomeTimeA == nomeTimeB)
}
pegarNomes()
atualizarNomes()
ativarPontos()
ativarSet()

function checar(time) {
    ganhouSet(time)
    ganhouPartida(time)
}
function ganhouSet (time) {
    if(time == nomeTimeA) {
        if(pontuacaoTimeA >= 25 && (pontuacaoTimeA - pontuacaoTimeB >= 2)){
            atualizarPonto(nomeTimeA, 0)
            atualizarPonto(nomeTimeB, 0)
            atualizarSet(nomeTimeA)
        }
    }else {
        if(pontuacaoTimeB >= 25 && (pontuacaoTimeB - pontuacaoTimeA >= 2)){
            atualizarPonto(nomeTimeA, 0)
            atualizarPonto(nomeTimeB, 0)
            atualizarSet(nomeTimeB)
        }
    }
}


function ganhouPartida(time) {
    if(time == nomeTimeA){
        if(setTimeA == 3) {
            console.log(`O time ${nomeTimeA} venceu!`)
        }
    } else {
        if(setTimeB == 3) {
            console.log(`O time ${nomeTimeB} venceu!`)
        }
    }
}
function ativarPontos() {
    let pontosA = document.querySelector('#pontuacaoA')
    pontosA.style.cursor = 'pointer'
    pontosA.onclick = () => {
        atualizarPonto(nomeTimeA)
        checar(nomeTimeA)
        pontosA.innerText = pontuacaoTimeA
    } 

    let pontosB = document.querySelector('#pontuacaoB')
    pontosB.style.cursor = 'pointer'
    pontosB.onclick = () => {
        atualizarPonto(nomeTimeB)
        checar(nomeTimeB)
        pontosB.innerText = pontuacaoTimeB
    } 
}

function atualizarSet(time){
    if(time == nomeTimeA) {
        setSet(nomeTimeA)
    } else {
        setSet(nomeTimeB)
    }
}
function ativarSet() {
    let setA = document.querySelector('#setA')
    setA.style.cursor = 'pointer'
    setA.onclick = () => {
        atualizarSet(nomeTimeA)
        setA.innerText = setTimeA
    }
    let setB = document.querySelector('#setB')
    setB.style.cursor = 'pointer'
    setB.onclick = () => {
        atualizarSet(nomeTimeB)
        setB.innerText = setTimeB
    }
}
function setSet(time){
    let set
    if(time == nomeTimeA) {
        set = document.querySelector('#setA')
        setTimeA += 1
        set.innerText = setTimeA
        
    } else {
        set = document.querySelector('#setB')
        setTimeB += 1
        set.innerText = setTimeB
    }
}
function atualizarPonto(time, valor = 1){
    if(time == nomeTimeA) {
        setPontuacao(nomeTimeA, valor)
    } else {
        setPontuacao(nomeTimeB, valor)
    }
}
function setPontuacao(time,valor){
    let pontuacao
    if(time == nomeTimeA) {
        pontuacao = document.querySelector('#pontuacaoA')
        if(valor){
            pontuacaoTimeA += valor
        }else {
            pontuacaoTimeA = 0
        }   
        pontuacao.innerText = pontuacaoTimeA
    } else {
        pontuacao = document.querySelector('#pontuacaoB')
        if(valor){
            pontuacaoTimeB += valor
        }else {
            pontuacaoTimeB = 0
        }
        pontuacao.innerText = pontuacaoTimeB
    }
}

function atualizarNomes () {
    let span = document.querySelector('#nomeTimeA')
    span.innerText = nomeTimeA
    span = document.querySelector('#nomeTimeB')
    span.innerText = nomeTimeB
}