function atualizar() {
    let hora =  new Date().getHours()
    let section = document.querySelector('section.container')
    
    if(hora < 12) {
        document.body.style.backgroundColor = '#7ab3ff'
        document.querySelector('a').style.color = 'black'
        section.innerHTML =
        `
        <p>Bom dia!</p>
        <div id="imagem">
            <img src="img/manha.jpg" alt="Tarde">
        </div>
        `        
    } else if(hora < 18) {
        document.body.style.backgroundColor = '#ff8716'
        document.querySelector('a').style.color = 'black'
        section.innerHTML =
        `
        <p>Boa Tarde!</p>
        <div id="imagem">
            <img src="img/tarde.jpg" alt="Sol nascendo">
        </div>
        `
    } else {
        document.body.style.backgroundColor = '#1d1e52'
        section.innerHTML =
        `
        <p>Boa Noite!</p>
        <div id="imagem">
            <img src="img/noite.jpg" alt="Noite">
        </div>
        `
    }
}
atualizar()