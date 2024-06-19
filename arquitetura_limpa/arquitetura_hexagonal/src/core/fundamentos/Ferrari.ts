import Carro from "./Carro"

export default class Ferrari implements Carro {
    constructor(
        readonly velocidadeMaxima: number = 324,
        private _velocidadeAtual: number = 0
    ) {}
    acelerar(): void {
        this._velocidadeAtual = Math.min(
            this.velocidadeMaxima,
            this._velocidadeAtual + 20
        )
    }

    frear(): void {
        this._velocidadeAtual = Math.max(this.velocidadeAtual - 20, 0)
    }

    get velocidadeAtual() {
        return this._velocidadeAtual
    }
}
