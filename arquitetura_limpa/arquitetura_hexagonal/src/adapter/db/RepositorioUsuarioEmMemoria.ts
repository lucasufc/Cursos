import Usuario from "@/core/usuario/model/Usuario"

export default class RepositorioUsuarioEmMemoria {
    private static readonly items: Usuario[] = []
    async inserir(usuario: Usuario) {
        const items = RepositorioUsuarioEmMemoria.items
        const usuarioExiste = await this.buscarPorEmail(usuario.email)
        if (usuarioExiste) return
        items.push(usuario)
    }

    async buscarPorEmail(email: string): Promise<Usuario | null> {
        const items = RepositorioUsuarioEmMemoria.items
        const usuario = items.find(u => u.email === email) ?? null
        return usuario
    }
}