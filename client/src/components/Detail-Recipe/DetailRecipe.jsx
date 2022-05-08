import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { recipeById } from "../../Redux/actions/actions";

export default function DetailRecipe(){
    
    const recipeDetail = useSelector(state => state.detail)
    console.log(recipeDetail)
    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(recipeById(id)) // id es lo que entra como params y lo envio a la accion para que busque la comida correspondiente del id
    },[dispatch,id])

    return(
        <div>
            <img src={recipeDetail.image} alt='imagen'/>
            <div>
             <h4>{recipeDetail.name}</h4>
             <h4>Resumen: {recipeDetail.summary}</h4>
             <h4>Puntaje Saludable: {recipeDetail.healthScore}</h4>
             <h4>{recipeDetail.spoonacularScore}</h4>
             <h4>Instruccion: {recipeDetail.instruction}</h4>
             <h4>Tipo de dieta:{recipeDetail.type?.map(diet => { 
                 return(
                     <p>{diet.name}</p>
                 ) })}</h4>
            </div> 
        </div>
    )
}