import React from "react"
import NavBar from '../Navbar/Navbar'
import RecipeCard from "../Recipe-Card/RecipeCard"

export default function Home(){
    return(
        <div>
                <h2>Bienvenidos</h2>
                <div><NavBar/></div>
                <div><RecipeCard/></div>
        </div>
    )
}