interface BotaoProps {
    cor?: 'green'| 'red' | 'cyan'
    className?: string
    children: any
}

export default function Botao(props: BotaoProps) {
    const cor = props.cor?? 'teal'
    const classe = ` bg-${cor}-900 hover:bg-${cor}-600
                    text-gray-100 px-4 py-2
                    shadow-md
                    rounded-md ${props.className}`
    return (
        <button className={classe}>
            {props.children}
        </button>
    )
}