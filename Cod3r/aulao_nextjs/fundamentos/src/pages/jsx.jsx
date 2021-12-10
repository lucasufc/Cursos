import Layout from '../components/Layout'
export default function Jsx() {

    const title = 'JSX é um conceito central!'
    function subtitle() {
        return  'Muito Legal'
    }

    return (
        <Layout titulo={title} subtitulo={subtitle()}>
            <p>{`Texto: ${Math.random().toFixed(4)}`}</p>
            <p>
                {JSON.stringify({nome: 'João', idade:'30'})}
            </p>
        </Layout>
    )
}