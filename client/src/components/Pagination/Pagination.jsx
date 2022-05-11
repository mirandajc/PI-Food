import React, { useState } from "react";

export default function Pagination({pag, setPag, max}) {
    const [input,setInput] = useState(1);
    function nextPage() {
        setInput(input + 1);
        setPag( pag + 1)
    }
    function prevPage() {
        setInput(input -1);
        setPag( pag - 1)
    }

    return (
        <div>
            <button onClick={prevPage}>prev</button>
            <input name="pag" autoComplete="off" value={input} />
            <p>{max}</p>
            <button onClick={nextPage }>next</button>
        </div>
    )
}