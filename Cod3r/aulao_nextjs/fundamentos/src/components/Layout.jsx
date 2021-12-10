import Link from "next/link"
import styles from "../styles/Layout.module.css"
import Cabecalho from "./Cabecalho"

export default function Layout (props) {
    return (
        <div className={styles.layout}>
            <Cabecalho titulo = {props.titulo} subtitulo = {props.subtitulo}>
                <Link href="/">Voltar</Link>
            </Cabecalho>

            <div className={styles.conteudo}>
                {props.children}
            </div>
        </div>
    )
}