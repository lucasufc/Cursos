const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retornar um Array apenas com os preços
const resgatarJSON = vetor => JSON.parse(vetor)
const pegarPreco = objeto => objeto.preco.toFixed(2)

resultado = carrinho.map(resgatarJSON).map(pegarPreco)
console.log(resultado)