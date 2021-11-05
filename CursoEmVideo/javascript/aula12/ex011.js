var idade = 65
console.log(`Você tem ${idade} então você `)
if( idade < 16) {
    console.log(`não vota!`)
} else if (idade < 18 || idade > 65){
    console.log('tem voto opcional!')
} else {
    console.log('vota!')
}
    