import Carro from "@/core/fundamentos/Carro"
import TerminalUtil from "../utils/TerminalUtil"
import Ferrari from "@/core/fundamentos/Ferrari"
import Fusca from "@/core/fundamentos/Fusca"

export default async function poliformismo() {
    TerminalUtil.titulo("Poliforfismo")

    const [tipoCarro] = await TerminalUtil.selecao("Tipo de Carro?", ["Ferrari", "Fusca"])
    const carro: Carro = tipoCarro === 0 ? new Ferrari() : new Fusca()

    while (true) {
        TerminalUtil.limpar()
        TerminalUtil.exibirChaveValor("Velocidade Máxima", `${carro.velocidadeMaxima} km/h`)
        TerminalUtil.exibirChaveValor("Velocidade Atual", `${carro.velocidadeAtual} km/h`)
        
        const [ opcao ] = await TerminalUtil.selecao("Qual opção?", ["Acelerar", "Frear", "Parar"])
        
        switch(opcao){
            case 0:
                carro.acelerar()
                break
            case 1:
                carro.frear()
                break
            default:
                return 
        }
    }
}

