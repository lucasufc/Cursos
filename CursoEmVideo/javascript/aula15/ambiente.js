let num = [5, 8, 9, 3, 2, 10]
num.push(599)
num.sort((a, b) => {
    return a-b
})
/*
    num.length
    num[]
*/
console.log(num)
let pos = num.indexOf(8)
if( pos == -1) {
    console.log('O valor não foi encontrado!')
}else {
    console.log(`O valor 8 está na posição ${pos}`)
}