interface BotaoProps {
    cor?: 'green'| 'red' | 'cyan'
    className?: string
    children: any
    onClick?: () => void
}

export default function Botao(props: BotaoProps) {
    const classe = ` 
                    text-gray-100 px-4 py-2
                    shadow-md
                    rounded-md ${props.className}`
    return (
        <button onClick={props.onClick}className={classe}>
            {props.children}
        </button>
    )
}