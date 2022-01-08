// Dependencias 
import React from 'react'
import './App.css'

// Components
import Card from './components/layout/Card'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalComIf from './components/basicos/CondicionalComIf'

export default function App() {
    return(
        <div className='App' >
            <Card titulo="#01 - Primeiro Componente" color="#92B06A">
                <Primeiro>Olá React!</Primeiro>
            </Card>
            <Card titulo="#02 - Componente com Parâmetros" color="#FF85CB">
                <ComParametro titulo="Opa" subtitulo="Epa" />
            </Card>
            <Card titulo="#03 - Componente com Filhos" color="#D96459">
                <ComFilhos>
                    <ul>
                        <li>Ana</li>
                        <li>Bia</li>
                        <li>Carlos</li>
                        <li>Daniel</li>
                    </ul>
                </ComFilhos>
            </Card>
            <Card titulo="#04 - Repetição" color="#008BBA">
                <Repeticao/>
            </Card>
            <Card titulo="#05 - Condicional v1" color="#E94C6F">
                <Condicional numero={4}/>
            </Card>
            <Card titulo="#06 - Condicional v2" color="#FA6900">
                <CondicionalComIf numero={6}/>
            </Card>
        </div>
    )
}