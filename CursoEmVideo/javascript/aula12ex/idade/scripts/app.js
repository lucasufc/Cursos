function calcularIdade() {
    if (document.querySelector('input#idade').value == 0) {
        return -1
    }
    return  Number(new Date().getFullYear()) - Number(document.querySelector('input#idade').value);
}

function verificar () {
    let idade = calcularIdade()
    let resp = document.querySelector('div#resp')
    let genero = document.getElementsByName('check')
    resp.style.textAlign = 'center'
    if(idade < 0 || idade > 130){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else if(genero[0].checked){
        homem(idade, resp)
    } else {
        mulher(idade, resp)
    }
}

function homem (idade, resp) {
    resp.innerHTML = `<p>Detectamos Homem com ${idade} anos</p>`
    imagem(0, idade, resp)
}
function mulher (idade, resp){
    resp.innerHTML = `<p>Detectamos Mulher com ${idade} anos</p>`
    imagem(1, idade, resp)
    
}


function imagem(gen, idade, resp) {
    let destino ='img/'
    if(gen == 0) {
        destino += 'Homem/'
    } else {
        destino += 'Mulher/'
    }

    if(idade < 10){
        destino += 'bebe.png'
    } else if(idade <21) {

        destino += 'jovem.png'
    } else if(idade < 50) {
        destino += 'adulto.png'
    } else {
        destino += 'idoso.png'
    }

    resp.innerHTML +=  `<img src="${destino}" alt="Pessoa">`
}