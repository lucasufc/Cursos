import React, { useState } from "react";
import Sub from "./Sub";

export default (props) => {

    const [num, setNum] = useState(0)
    const [texto, setTexto] = useState('Valor')

    function quandoClicar(valorGerado, texto) {
        setNum((valorGerado*100).toFixed(0))
        setTexto(texto)
    }

    return(
        <div>
            <h4>{texto}: {num}</h4>
            <Sub onClicar={quandoClicar} color={props.color}>Pedro</Sub>
        </div>
    )
}
