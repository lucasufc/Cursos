import ProvedorCriptografia from "../../core/usuario/service/ProvedorCriptografia";

// Na arquitetura hexagonal esta classe é um Adaptador!
// O adaptador não faz parte do core da sua aplicação
export default class EspacoSenhaCripo implements ProvedorCriptografia{
    criptografar(senha: string): string {
        return senha.split('').join(' ')
    }
}