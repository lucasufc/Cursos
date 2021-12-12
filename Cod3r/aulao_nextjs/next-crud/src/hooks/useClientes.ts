import Cliente from "../core/Cliente"
import { useState, useEffect } from "react"
import ClienteRepositorio from "../core/ClienteRepositorio"
import ColecaoCliente from "../backend/db/ColecaoCliente"
import useTabelaOuForm from "./useTabelaOuForm"

export default function useClientes() {
    const repo: ClienteRepositorio = new ColecaoCliente()

    const [clientes, setClientes] = useState<Cliente[]>([])

    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const {exibirTabela, exibirFormulario, formularioVisivel, tabelaVisivel} = useTabelaOuForm()

    useEffect(obterTodos, [])

    function obterTodos() {
        repo.obterTodos().then((clientes) => {
            setClientes(clientes)
            exibirTabela()
        })

    }
    function selecionarCliente(cliente: Cliente) {
        setCliente(cliente)
        exibirFormulario()
    }
    async function excluirCliente(cliente: Cliente) {
        await repo.excluir(cliente)
        obterTodos()
    }
    async function salvarCliente(cliente: Cliente) {
        await repo.salvar(cliente)
        obterTodos()
    }
    function novoCliente() {
        repo.salvar(Cliente.vazio())
        exibirFormulario()
    }

    return {
        cliente, clientes, tabelaVisivel,
        exibirTabela,
        salvarCliente,
        novoCliente,
        excluirCliente,
        selecionarCliente,
        obterTodos
    }
}