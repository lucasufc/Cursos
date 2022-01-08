import React from 'react'
import './Card.css'

export default props => 
    <div className="Card" style={{borderColor: props.color || '#000' }}>
        <div className="Conteudo">
            {props.children}
        </div>
        <div className="Title" style={{backgroundColor: props.color || '#000'}}>
            {props.titulo}
        </div>
    </div>