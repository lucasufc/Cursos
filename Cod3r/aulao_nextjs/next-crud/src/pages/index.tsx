import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import Cliente from "../core/Cliente"
import Botao from "../components/Botao"
import Formulario from "../components/Formulario"

export default function Home() {

    const clientes = [
        new Cliente('Ana', 34, '1'),
        new Cliente('Bia', 45, '2'),
        new Cliente('Carlos', 23, '3'),
        new Cliente('Pedro', 54, '4')
    ]
    function clienteSelecionado(cliente: Cliente) {
        console.log(cliente.nome)
    }
    function clienteExcluido(cliente: Cliente) {
        console.log(`Excluir: ${cliente.nome}`)
    }
  return (
    <div className={`
      flex h-screen justify-center
      items-center bg-slate-50`}>
        <Layout titulo="Cadastro Simples">
          <div className="flex justify-end">
            <Botao className="mb-4">Novo Cliente</Botao>
          </div>
          <Formulario cliente={clientes[0]}/>
            <Tabela clientes={clientes}
            clienteSelecionado={clienteSelecionado}
            clienteExcluido={clienteExcluido}></Tabela>
        </Layout>
    </div>
  )
}
