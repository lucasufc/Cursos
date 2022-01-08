import React from 'react'
import './Card.css'

export default (props) => {
    const estilo = {
        borderColor: props.color || '#000' 
    }
    return(
        <div className="Card" style={estilo}>
            <div className="Conteudo">
                {props.children}
            </div>
            <div className="Title" style={{backgroundColor: props.color || '#000'}}>
                {props.titulo}
            </div>
        </div>
    )
}
