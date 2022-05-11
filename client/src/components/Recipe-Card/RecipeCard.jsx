import React from "react";
import { Link } from "react-router-dom";

export default function RecipeCard({image ,name, type, id}){

    return(
        <div>
            <img src={image} alt='imagen'/>
            <div>
                <h2>{name}</h2>
                <div>{type}</div> 
                <button><Link to={`/recipes/${id}`}>Mas detalle</Link></button> 
            </div>
        </div>
    )
}