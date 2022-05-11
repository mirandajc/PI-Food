import React, {useEffect, useState} from "react"
import NavBar from '../Navbar/Navbar'
import RecipeCard from "../Recipe-Card/RecipeCard"
import { useDispatch, useSelector } from "react-redux";
import { allRecipes, allTypes } from "../../Redux/actions/actions.js";
import Pagination from "../Pagination/Pagination";
//import { Link } from "react-router-dom";


function Home(){

    const {recipes, types} = useSelector(state => state)
    console.log(recipes, types)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(allRecipes())
    },[dispatch])
    

    //------Paginacion
    const [pag, setPag] = useState(1);
    const [recipesPag , setRecipesPag] = useState(9);
    const max = Math.ceil(recipes.length /recipesPag);


    useEffect(()=>{
        dispatch(allTypes())
    },[dispatch])

    //(a ,b)=> a.name.localeCompare(b.n ame) a-z
    //(a ,b)=> b.name.localeCompare(a.name) z-a

    return(
        <div>
                <h2>Bienvenidos</h2>
                <NavBar/>
                <Pagination pag={pag} setPag={setPag} max={max} />
                <div>
                {recipes.slice(
                    (pag-1)* recipesPag, 
                    (pag-1)* recipesPag+ recipesPag
                )?.map(recipe => {
                    return (
                        <RecipeCard image={recipe.image} name={recipe.name} id={recipe.id} type={recipe.type?.map(diet =>  <p>{diet.name}</p> )} key={Math.random().toString(36).substr(2, 9)} ></RecipeCard>
                        )
                    })
                }
                </div>
        </div>
    )
}
export default (Home)

