import React, { useState } from "react";
import Display from "./Display";

export default (props) => {
    const [valor, setValor] = useState(0)
    const [passo, setPasso] = useState(1)
    function operar(num) {
        setValor(valor + num)
    }
    return(
        <>
            <h2>Contador</h2>
            <Display valor={valor}/>
            <div className="Buttons">
                <button onClick={e => operar(passo)}>+{passo}</button>
                <button onClick={e => operar(-passo)}>-{passo}      </button>
            </div>
            <input type="number" value={+passo} onChange={e => setPasso(+e.target.value)}/>
        </>
    )
}