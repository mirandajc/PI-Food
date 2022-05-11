import React, { useState } from "react";

export default function Pagination({pag, setPag, max, input, setInput, handlePagination}) {
    
    // const [input,setInput] = useState(1);
    const nextPage = () => {
        setInput(input + 1);
        setPag( pag + 1)
    }
    const prevPage = () => {
        setInput    (input -1);
        setPag  (pag - 1)
    }



    return (
        <div>
            <button onClick={prevPage} >prev</button>
            <input  max={max} min='1' name="pag" autoComplete="off" value={input} onChange={(e)=> handlePagination(e)} />
            <p> de {max}</p>
            <button onClick={nextPage} >next</button>
        </div>
    )
}