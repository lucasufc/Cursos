import Navegador from '../components/Navegador'

export default function Home() {

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
        }}>
            <Navegador destino="estiloso"/>
            <Navegador destino="exemplo"/>
            <Navegador destino="jsx"/>
            <Navegador destino="navegacao" texto="Navegação #01"/>
            <Navegador destino="cliente/sp-2/321" texto="Navegação #02"/>
            <Navegador destino="estado" texto="Componente com Estado"/>
            <Navegador destino="integracao_1" texto="Integração com API #01"/>
            <Navegador destino="estatico" texto="Conteúdo Estático"/>
        </div>
    )
}