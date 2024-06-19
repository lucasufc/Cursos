import Usuario from "@/core/usuario/model/Usuario"
import TerminalUtil from "../utils/TerminalUtil"
import RegistrarUsuario from "@/core/usuario/service/RegistrarUsuario"
import SenhaCripto from "@/adapter/auth/SenhaCripto"
import RepositorioUsuarioPg from "@/adapter/db/RepositorioUsuarioPg"


export default async function registrarUsuario() {
    TerminalUtil.titulo("Registrar Usuário")

    const nome = await TerminalUtil.campoRequerido('Nome', 'teste')
    const email = await TerminalUtil.campoRequerido('Email', 'teste@teste.com.br')
    const senha = await TerminalUtil.campoRequerido('Senha', '123')

    const usuario: Usuario = { nome, email, senha }
    const provedorCripto = new SenhaCripto()
    const repositorio = new RepositorioUsuarioPg()

    const CasoDeUso = new RegistrarUsuario(repositorio, provedorCripto)
    
    try {
        await CasoDeUso.executar(usuario)
        TerminalUtil.sucesso('Usuário registrado com sucesso!\n')
    } catch(e) {
        TerminalUtil.error('\nUsuário já cadastrado!\n')

    } finally {
        await TerminalUtil.esperarEnter()
    }
}
