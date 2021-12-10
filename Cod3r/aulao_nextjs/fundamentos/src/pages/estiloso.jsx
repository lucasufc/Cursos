import styles from '../styles/Estiloso.module.css'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Estiloso() {
    return (
        <Layout titulo="Estilo usando CSS Módulos">
        <div className={styles.roxo}>
            <div id={styles['amarelo']}>
                <h1>Teste</h1>
            </div>
        </div>
        </Layout>
    )
}