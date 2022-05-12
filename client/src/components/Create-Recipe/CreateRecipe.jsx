import React, { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { allTypes, createRecipe } from "../../Redux/actions/actions";
import Navbar from '../Navbar/Navbar'

export default function CreateRecipe() {
    const dispatch = useDispatch();
    const typesDiets = useSelector((state) => state.types)
    useEffect(()=>{
        dispatch(allTypes())
    },[dispatch])
    
    const [recipe , setRecipe] = useState({ // se relaciona con el nombre
        name: '',
        image: '',
        summary: '',
        spoonacularScore: 0,
        healthScore: 0,
        instruction: '',    
        type: [], // cambio s
    })

    function handleSelect(e) {
        setRecipe({
            ...recipe,
            type: [...recipe.type, e.target.value] //cambio s
        })
    }

    function handleChange(e) {
        setRecipe({
            ...recipe, // copia de datos para no eliminar lo que ya escribimos 
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(createRecipe(recipe))
        setRecipe({
            name: '',
            image: '',
            summary: '',
            spoonacularScore: '',
            healthScore: '',
            instruction: '',
            type: [], // cambio s
        })
    }

    const formulario = useRef(null)

    return(
        <div>
            <Navbar/>
        <form ref={formulario} onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
                <input type="text" name="name" value={recipe.name} onChange={(e)=>{handleChange(e)}} />
            <label htmlFor="image" >Imagen / URL</label>
                <input type="text" name="image" value={recipe.image} onChange={(e)=>{handleChange(e)}} />
            <label htmlFor="healthScore">healthScore</label>
                <input type="text" name="healthScore" value={recipe.healthScore} onChange={(e)=>{handleChange(e)}} />
            <label htmlFor="spoonacularScore">Puntuacion</label>
                <input type="text" name="spoonacularScore" value={recipe.spoonacularScore} onChange={(e)=>{handleChange(e)}} />
            <label htmlFor="summary">Summary</label>
                <textarea type="text" name="summary" value={recipe.summary} onChange={(e)=>{handleChange(e)}} />
            <label htmlFor="instruction">Instruction</label>
                <textarea type="text" name="instruction" value={recipe.instruction} onChange={(e)=>{handleChange(e)}} />
            <select onChange={(e)=> handleSelect(e)}>
                <option value='' name='type'>Diets Type</option>
                {typesDiets?.map(diet=>{
                    return (
                        <option value={diet.id} key={diet.id}>{diet.name}</option>
                    )
                })}
            </select>
            <button type="submit" value="submit" onClick={(e)=>{handleSubmit(e)}}>Save recipe</button>
        </form>
        </div>
    )
}