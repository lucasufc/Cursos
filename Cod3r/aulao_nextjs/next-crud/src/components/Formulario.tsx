import { useState } from "react";
import Entrada from "./Entrada";
import Cliente from "../core/Cliente"
import Botao from "./Botao";

interface FormularioProps {
    cliente: Cliente
    cancelado?: () => void
    clienteMudou?:(cliente: Cliente) => void
}

export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)
    return(
        <div>
            {id ? (
                <Entrada somenteLeitura texto='Código' valor={id} className="mb-4"/>
            ): false}
            <Entrada 
                texto="Nome" 
                valor={nome}
                valorMudou={setNome}
                className="mb-4"
            />
            <Entrada 
                texto="Idade" 
                tipo="number" 
                valor={idade}
                valorMudou={setIdade}
            />
            <div className="mt-7 flex justify-end">
                <Botao onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))} cor='green' className="bg-sky-700 hover:bg-sky-500 mr-2">
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao onClick={props.cancelado} cor='red' className="bg-red-700 hover:bg-red-500">
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}