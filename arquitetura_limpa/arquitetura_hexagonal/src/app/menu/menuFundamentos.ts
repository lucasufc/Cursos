import TerminalUtil from "@/app/utils/TerminalUtil"
import poliformismo from "../fundamentos/polimorfismo"
import dip from "../fundamentos/dip"

export default async function menuFundamentos() {
    TerminalUtil.titulo('Fundamentos')
    const [indice] = await TerminalUtil.menu(['1. Poliformismo', '2. DIP', 'Voltar'])

    switch (indice) {
        case 0:
            await poliformismo()
            break
        case 1:
            await dip()
            break
        default:
            return
    }
    await menuFundamentos()
}
