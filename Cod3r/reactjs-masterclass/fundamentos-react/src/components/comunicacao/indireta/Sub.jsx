import React from "react";

export default (props )=> {
    function acao() {
        props.onClicar(Math.random(), 'Gerado')
    }
    return (
        <div>
            <button style={{backgroundColor: props.color}}onClick={acao}>Alterar</button>
        </div>
    )
}
