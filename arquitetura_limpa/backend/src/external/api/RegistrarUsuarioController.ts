import RegistrarUsuario from "@/core/usuario/service/RegistrarUsuario"
import { Express } from "express"

export default class RegistrarUsuarioController {
    constructor(servidor: Express, casoDeUso: RegistrarUsuario) {
        servidor.post("/api/usuarios/registrar", async (req, resp) => {
            try {
                await casoDeUso.executar({
                    nome: req.body.nome,
                    email: req.body.email,
                    senha: req.body.senha,
                })
                resp.status(201).send('Usuario Criado com sucesso!')
            } catch(error: any) {
                resp.status(400).send(error.message)
            }
        })
    }
}
