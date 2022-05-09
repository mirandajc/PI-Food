import React, { useState } from "react"
import {useDispatch} from 'react-redux'
import { recipeByName } from "../../Redux/actions/actions";

export default function Search(){
    const [name, setName] = useState('');
    const dispatch = useDispatch()

    function handleChange(e) {
        e.preventDefault()
        setName(e.target.value)
    }

    function handleSumit(e) {
        e.preventDefault()
        dispatch(recipeByName(name))
        setName('')
    }

    return(
        <div>
            <input type="text" name="search" placeholder="Por ejemplo: vegetable..." value={name} onChange={e => handleChange(e)}/>
            <button type="sumit" onClick={(e)=> handleSumit(e)} >BUSCAR</button>
        </div>
    )
}