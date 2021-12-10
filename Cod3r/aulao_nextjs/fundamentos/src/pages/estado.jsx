import { useState } from "react"
import Layout from "../components/Layout"
import styles from "../styles/Estado.module.css"

export default function Estado () {
    const [numero, setNumero] = useState(0)
    function incrementar() {
        setNumero(numero + 1)
    }
    return (
        <Layout titulo="Componente com Estado">
            <div className={styles.numero}>{numero}</div>
            <button className={styles.botao} onClick={incrementar}>Incrementar</button>
        </Layout>
    )
}