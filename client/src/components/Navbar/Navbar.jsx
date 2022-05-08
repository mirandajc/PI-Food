import React from "react"
//import CreateRecipe from "../Create-Recipe/CreateRecipe"
import Search from '../Search/Search'
import  { Link } from 'react-router-dom'

export default function Navbar(){
    return(
        <div>
            <div><img src='https://i.pinimg.com/564x/77/0a/18/770a18bdd112d8f8ea0d821c4d8fc208.jpg' alt='Logo'/></div>
            <div><Search/></div>
            <Link to='/recipe'>
                <button>New Recipe</button>
            </Link>
        </div>
    )
}