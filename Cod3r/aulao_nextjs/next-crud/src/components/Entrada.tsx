interface EntradaProps {
    tipo?: 'text' | 'number'
    texto: string
    valor: any
    somenteLeitura?: boolean
    className?: string
    valorMudou?: (valor: any) => void
}

export default function Entrada(props: EntradaProps) {
    return(
        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-3">
                {props.texto}
            </label>
            <input
                placeholder={`Digite ${props.texto =="Nome"? 'o':'a'} ${props.texto}`}
                type={props.tipo ?? 'text'} 
                value={props.valor}
                onChange={e => props.valorMudou?.(e.target.value)}
                readOnly={props.somenteLeitura}
                className={`
                    border border-teal-700 rounded-md
                    focus:outline-none px-4 py-2
                    ${props.somenteLeitura ? '': 'focus:bg-teal-50'}
                    
                `}/>
        </div>
    )
}