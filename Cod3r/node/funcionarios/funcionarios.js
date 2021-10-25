const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')
const eMulher = objeto => objeto.genero === 'M'
const eChinesa = objeto => objeto.pais === 'China'
const menorSalario = (func, funcAtual) =>{
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    
    const func = funcionarios
        .filter(eMulher)
        .filter(eChinesa)
        .reduce(menorSalario)
    console.log(func)
})


/*const menorSalario =(valor, i) => {
    let  menor
    if( i == 0) {
        menor = valor
    } else if(valor < menor){
        menor = valor
    }
    return menor
}*/