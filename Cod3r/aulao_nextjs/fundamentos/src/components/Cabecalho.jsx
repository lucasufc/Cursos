import styles from '../styles/Cabecalho.module.css'

export default function Cabecalho (props){
    // props é somente leitura
    let titulo = props.titulo? <h1>{props.titulo}</h1> : <h1> Mais um Exemplo</h1>
    let subtitulo = props.subtitulo? <h2>{props.subtitulo}</h2> : <></>

    return (
        <header className={styles.cabecalho}>
            <div>
                {titulo}
                {subtitulo}
            </div>
            <div className={styles.propiedades}>
            {props.children}
            </div>
        </header>
    )
}