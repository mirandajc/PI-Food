import React, { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { allTypes, createRecipe } from "../../Redux/actions/actions";
import Navbar from '../Navbar/Navbar'
import styles from './CreateRecipe.module.css'


export default function CreateRecipe() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
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
        types: [], 
    })

    function handleSelect(e) {
        setRecipe({
            ...recipe,
            types: [...recipe.types, e.target.value] 
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
            types: [], 
        })
        navigate("/home")
    }

    const formulario = useRef(null)

    return(
        <div className={styles.form}>
            <Navbar/>
        <form ref={formulario} onSubmit={handleSubmit}>
            <label className={styles.text} htmlFor="name">Name</label>
                <input  className={styles.input} type="text" name="name" value={recipe.name} onChange={(e)=>{handleChange(e)}} />
            <label className={styles.text} htmlFor="image" >Imagen / URL</label>
                <input className={styles.input} type="text" name="image" value={recipe.image} onChange={(e)=>{handleChange(e)}} />
            <label className={styles.text} htmlFor="healthScore">healthScore</label>
                <input className={styles.input} type="text" name="healthScore" value={recipe.healthScore} onChange={(e)=>{handleChange(e)}} />
            <label className={styles.text} htmlFor="spoonacularScore">Puntuacion</label>
                <input className={styles.input} type="text" name="spoonacularScore" value={recipe.spoonacularScore} onChange={(e)=>{handleChange(e)}} />
            <label className={styles.text} htmlFor="summary">Summary</label>
                <textarea className={styles.input} type="text" name="summary" value={recipe.summary} onChange={(e)=>{handleChange(e)}} />
            <label className={styles.text} htmlFor="instruction">Instruction</label>
                <textarea className={styles.input} type="text" name="instruction" value={recipe.instruction} onChange={(e)=>{handleChange(e)}} />
            <select className={styles.button} onChange={(e)=> handleSelect(e)}>
                <option value='' name='types'>Diets Type</option>
                {typesDiets?.map(diet=>{
                    return (
                        <option value={diet.id} key={diet.id}>{diet.name}</option>
                    )
                })}
            </select>
            <button className={styles.button}  type="submit" value="submit" onClick={(e)=>{handleSubmit(e)}}>Save recipe</button>
        </form>
        </div>
    )
}