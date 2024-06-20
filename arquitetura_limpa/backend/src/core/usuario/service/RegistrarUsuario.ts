import CasoDeUso from "@/core/shared/CasoDeUso";
import Usuario from "../model/Usuario";
import Erros from "@/core/shared/Erros";
import Id from "@/core/shared/id";
import ProvedorCriptografia from "./ProvedorCriptografia";
import RepositorioUsuario from "./RepositorioUsuario";

export default class RegistrarUsuario implements CasoDeUso<Usuario, void> {
    constructor(
        private repositorio: RepositorioUsuario,
        private provedorCripto: ProvedorCriptografia
    ){}
    async executar(usuario: Usuario): Promise<void> {
        const senhaCripto = this.provedorCripto.criptografar(usuario.senha!)
        const usuarioExiste  = await this.repositorio.buscarPorEmail(usuario.email)
        if (usuarioExiste) throw new Error(Erros.USUARIO_JA_EXISTE)
        const novoUsuario: Usuario = {
            ...usuario,
            id: Id.gerarHash(),
            senha: senhaCripto
        }
        this.repositorio.inserir(novoUsuario)
    }
}