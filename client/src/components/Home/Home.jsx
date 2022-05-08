import React, {useEffect} from "react"
import NavBar from '../Navbar/Navbar'
import RecipeCard from "../Recipe-Card/RecipeCard"
import { useDispatch, useSelector } from "react-redux";
import { allTypes, allRecipes } from "../../Redux/actions/actions.js";
import { Link } from "react-router-dom";


function Home(){

    const {recipes, types} = useSelector(state => state)
    console.log(recipes, types)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(allRecipes())
    },[dispatch])
    
    useEffect(()=>{
        dispatch(allTypes())
    },[dispatch])

    return(
        <div>
                <h2>Bienvenidos</h2>
                <NavBar/>
                <div>
                {recipes?.map(recipe => {
                    return (
                        <Link  to={`/recipes/${recipe.id}`}>
                        <RecipeCard image={recipe.image} name={recipe.name} type={recipe.type?.map(diet =>  <p>{diet.name}</p> )} key={recipe.id} ></RecipeCard>
                        </Link>
                        )
                    })
                }
                </div>
        </div>
    )
}
export default (Home)

