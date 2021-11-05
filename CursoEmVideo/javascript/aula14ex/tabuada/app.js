function tabular() {
    let num = document.getElementById('numero')
    let tab = document.getElementById('tabuada')
    if ( num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for(let contador = 1; contador <= 10; ++contador){
            let item = document.createElement('option')
            item.text = `${n} x ${contador} = ${n*contador}`
            item.value = `tab${contador}`
            tab.appendChild(item)
            //tab.innerHTML += `<option value = "tab${contador-1}">${n} x ${contador} = ${n*contador}</option>`
        }
    }
}