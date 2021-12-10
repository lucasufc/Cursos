import Link from "next/link"
import styles from '../styles/Navegador.module.css'
export default function Navegador(props) {
    let texto = props.destino.charAt(0).toUpperCase() +  props.destino.slice(1)
    let destino = props.texto? props.texto : texto

    return(
        <Link href={`/${props.destino}`} passHref>
            <div className={styles.navegador}>
                {destino}
            </div>
        </Link>
    )
}