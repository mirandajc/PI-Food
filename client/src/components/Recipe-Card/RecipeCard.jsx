import React from "react"
import {Link} from "react-router-dom"


export default function RecipeCard(){
    return(
        <div>
            <section>
                <h2>Card</h2>
                <Link to='/recipes/:id'>
                <button>Detail Recipe</button>
                </Link>
            </section>
        </div>
    )
}