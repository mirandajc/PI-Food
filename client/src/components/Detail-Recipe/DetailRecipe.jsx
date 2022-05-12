import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { recipeById } from "../../Redux/actions/actions";
import styles from './DetailRecipe.module.css'

export default function DetailRecipe(){
    
    const recipeDetail = useSelector(state => state.detail)
    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(recipeById(id)) // id es lo que entra como params y lo envio a la accion para que busque la comida correspondiente del id
    },[dispatch,id])

    return(
        <div>
            <img className={styles.imagen} src={recipeDetail.image} alt='imagen'/>
            <div>
             <h4 className={styles.text}>{recipeDetail.name}</h4>
             <h4 className={styles.text} >Resumen: {recipeDetail.summary}</h4>
             <h4 className={styles.text} >Puntaje Saludable: {recipeDetail.healthScore}</h4>
             <h4 className={styles.text} >Puntuacion: {recipeDetail.spoonacularScore}</h4>
             <h4 className={styles.text} >Instruccion: {recipeDetail.instruction}</h4>
             <h4 className={styles.text} >Tipo de dieta:{recipeDetail.types?.map(diet => { 

                 return(
                     <li key={Math.random().toString(36).substr(2, 9)} >{diet.name}</li>
                 ) })}</h4>
            </div> 
        </div>
    )
}