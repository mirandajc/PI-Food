import React from "react";
import { Link } from "react-router-dom";
import DetailRecipe from "../Detail-Recipe/DetailRecipe";

export default function RecipeCard({image ,name, type}){

    return(
        <div>
            <img src={image}alt='imagen' />
            <section>
                <h2>{name}</h2>
                <Link to='/recipes/:id'>
                <div>{type}</div>
                <button><DetailRecipe/></button> 
                </Link>
            </section>
        </div>
    )
}