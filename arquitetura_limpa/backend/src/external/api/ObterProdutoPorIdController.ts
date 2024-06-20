import { Express } from "express"
import ObterProdutoPorId from "@/core/produto/service/ObterProdutoPorId"

export default class ObterProdutoPorIdController {
    constructor(servidor: Express, casoDeUso: ObterProdutoPorId, ...midlewares: any[]) {
        servidor.post("/api/produtos/:id", ...midlewares, async (req, resp) => {
            try {
                const produto = await casoDeUso.executar({
                    produtoId: (req.params as any).id,
                    usuario: (req as any).usuario
                })

                resp.status(200).send(produto)
            } catch (error: any) {
                resp.status(400).send(error.message)
            }
        })
    }
}
