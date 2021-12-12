import Cliente from '../core/Cliente'
import { IconeEdicao, IconeLixo } from './Icones'

interface TabelaProps {
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void

}
export default function Tabela(props: TabelaProps) {

    const exibirAcoes = props.clienteExcluido ||  props.clienteSelecionado
    function renderizarCabecalho() {
        return(
            <tr>
                <th className='text-left px-4 py-2'>Código</th>
                <th className='text-left px-4 py-2'>Nome</th>
                <th className='text-left px-4 py-2'>Idade</th>
                {exibirAcoes ? (
                    <th className='px-4 py-2'>Ações</th>
                ) : false}
            </tr>
        )
    }
    function renderizarDados() {
        return props.clientes?.map((cliente, i) =>{
            return (
                <tr key={cliente.id} 
                    className={`${i % 2 === 0 ? 'bg-teal-50': 'bg-teal-100'}`}>
                    <td className='text-left p-4'>{cliente.id}</td>
                    <td className='text-left p-4'>{cliente.nome}</td>
                    <td className='text-left p-4'>{cliente.idade}</td>
                    {renderizarAcoes(cliente)}
                </tr>
            )
        })
    }

    function renderizarAcoes(cliente: Cliente) {
        return(
            <td className='flex justify-center items-center'>
                {props.clienteSelecionado ? (
                    <button onClick={()=>props.clienteSelecionado?.(cliente)} className='text-green-600  py-4 mr-3'>
                        {IconeEdicao}
                    </button>
                ) : false}
                {props.clienteExcluido ? (
                    <button onClick={()=>props.clienteExcluido?.(cliente)} className='text-red-500  py-4'>
                        {IconeLixo}
                    </button>

                ) : false }
            </td>
        )
    }
    return (
        <table className='w-full rounded-xl overflow-hidden shadow-md'>
            <thead className={`
                text-gray-50
                bg-teal-500
            `}>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}