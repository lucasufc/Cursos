import Carro from "./Carro"

export default class Fusca implements Carro {
    constructor(
        readonly velocidadeMaxima: number = 140,
        private _velocidadeAtual: number = 0
    ) {}
    acelerar(): void {
        this._velocidadeAtual = Math.min(
            this.velocidadeMaxima,
            this._velocidadeAtual + 5
        )
    }

    frear(): void {
        this._velocidadeAtual = Math.max(this.velocidadeAtual - 5, 0)
    }

    get velocidadeAtual() {
        return this._velocidadeAtual
    }
}
