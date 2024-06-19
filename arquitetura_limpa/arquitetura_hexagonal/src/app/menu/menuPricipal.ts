import TerminalUtil from "@/app/utils/TerminalUtil"
import menuFundamentos from "./menuFundamentos"
import menuUsuario from "./menuUsuario"

export default async function menuPricinpal() {
    TerminalUtil.titulo("Menu Pricipal")

    const [indice] = await TerminalUtil.menu(["1. Fundamentos", "2. Usuário", "Sair"])
    switch (indice) {
        case 0:
            await menuFundamentos()
            break
        case 1:
            await menuUsuario()
            break
        default:
            process.exit(0)
    }
    menuPricinpal()
}
