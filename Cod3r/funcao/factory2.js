function criarProduto(nome = 'Não cadastrado!', preco = 'Não cadastrado!'){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('PS4', 4548))
console.log(criarProduto('Notebook', 548))