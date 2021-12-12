import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import Botao from "../components/Botao"
import Formulario from "../components/Formulario"
import useClientes from "../hooks/useClientes"


export default function Home() {
  const {
    cliente, clientes, tabelaVisivel,
    exibirTabela,
    salvarCliente,
    novoCliente,
    excluirCliente,
    selecionarCliente,
  } = useClientes()
  return (
    <div className={`
      flex h-screen justify-center
      items-center bg-slate-50`}>
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Botao onClick={novoCliente} className="mb-4 bg-teal-900 hover:bg-teal-600">Novo Cliente</Botao>
            </div>
            <Tabela clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}></Tabela>
          </>
        ) : (
          <Formulario cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={exibirTabela}
          />
        )}
      </Layout>
    </div>
  )
}
