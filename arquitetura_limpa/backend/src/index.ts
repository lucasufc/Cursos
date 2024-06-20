import dotenv from "dotenv"
import express from "express"
import RegistrarUsuario from "./core/usuario/service/RegistrarUsuario"
import RepositorioUsuarioEmMemoria from "./external/db/RepositorioUsuarioEmMemoria"
import SenhaCripto from "./external/auth/SenhaCripto"
import RegistrarUsuarioController from "./external/api/RegistrarUsuarioController"
import LoginUsuario from "./core/usuario/service/LoginUsuario"
import LoginUsuarioController from "./external/api/LoginUsuarioController"
import ObterProdutoPorId from "./core/produto/service/ObterProdutoPorId"
import ObterProdutoPorIdController from "./external/api/ObterProdutoPorIdController"
import UsuarioMiddleware from "./external/api/UsuarioMiddleware"

dotenv.config()

const app = express()
const porta = process.env.API_PORT ?? 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(porta, () => {
    console.log(`🔥 Servidor executando na porta ${porta}!`)
})

// -------------------- Rotas Abertas

const RepositorioUsuario = new RepositorioUsuarioEmMemoria()
const provedorCripto = new SenhaCripto()
const registrarUsuario = new RegistrarUsuario(RepositorioUsuario, provedorCripto)

new RegistrarUsuarioController(app, registrarUsuario)

const loginUsuario = new LoginUsuario(RepositorioUsuario, provedorCripto)

new LoginUsuarioController(app, loginUsuario)

// -------------------- Rotas Protegidas
const usuarioMid = UsuarioMiddleware(RepositorioUsuario)

const obterProdutoPorId = new ObterProdutoPorId()
new ObterProdutoPorIdController(app, obterProdutoPorId, usuarioMid)
