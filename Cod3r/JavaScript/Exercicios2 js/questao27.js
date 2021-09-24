/*
 * Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao
 * ao objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas, conforme
 * exemplo a seguir:
 */
function inverter (objeto) {
    let obj = {}
    for (let i in objeto) {
        obj[objeto[i]] = i.toString()
    }
    return obj
}

console.log(inverter({ a: 1, b: 2, c: 3})) // retornará { 1: "a", 2: "b", 3: "c"}