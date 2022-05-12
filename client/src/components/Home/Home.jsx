import React, {useEffect, useState} from "react"
import NavBar from '../Navbar/Navbar'
import RecipeCard from "../Recipe-Card/RecipeCard"
import { useDispatch, useSelector } from "react-redux";
import { allRecipes, allTypes } from "../../Redux/actions/actions.js";
import Pagination from "../Pagination/Pagination";
//import { Link } from "react-router-dom";


function Home(){


    let {recipes, types} = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(allRecipes())
    },[dispatch])
    
    useEffect(()=>{
        dispatch(allTypes())
    },[dispatch])
    
    //---- filtro por type
    
    const [typByRecipe , setTypeByRecipe] = useState(recipes)
    function handleSelectType(e) {  
        console.log(recipes)
        recipes = recipes.filter(recipe => {
            let diet = recipe.type?.map(d => d.name)
            if (diet.includes(e.target.value)){
                return recipe 
            }
        })
        
        setTypeByRecipe(recipes)
        setPag(1)
        setInput(input=1)
    }
    
    
    //------Paginacion
    const [pag, setPag] = useState(1);
    const [recipesPag , setRecipesPag] = useState(9);
    let [input,setInput] = useState(1);
    const max = Math.ceil(typByRecipe?.length? typByRecipe.length/recipesPag : recipes.length /recipesPag);
    function handlePagination(e) {
        if(e.target.value <= max && e.target.value >= 0) {
            setInput(input = e.target.value)
            setPag(e.target.value)
        } else {
            alert(`El num de Pag deber ser mayor o igual a 1 y menor o igual a ${max}`)
        }
    }
    //------Ordenamiento a-z / z-a
    const [list, setList] = useState('Order')
    function handleSelect(e) {
        console.log(e.target.val)
        if(e.target.value === "A-Z"){
            recipes = recipes.sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0))
            setList(e.target.value);
            setPag(1)
            setInput(input=1)
        }else if(e.target.value === "Z-A" ){
            recipes = recipes.sort((b, a) => (a.name > b.name ? 1 : a.name< b.name ? -1 : 0))
            setList(1);
            setPag(1)
            setInput(input=1)
        }
    }

     
    return(
        <div>
                <NavBar/>
                <Pagination pag={pag} setPag={setPag} max={max} input={input} setInput={setInput} handlePagination={handlePagination} />
                <select value={list} onChange={(e)=> handleSelect(e)}>
                    <option disabled selected >Order</option>
                    <option >A-Z</option>
                    <option >Z-A</option>
                </select>
                <select  onChange={(e)=> handleSelectType(e)}>
                    <option>Filter by diet type</option>
                    {types?.map(type=>{
                    return (
                        <option value={type.id} key={type.id}>{type.name}</option>
                    )
                })}
                </select>
                <div>
                    {typByRecipe?.length && typByRecipe.slice(
                    (pag-1)* recipesPag, 
                    (pag-1)* recipesPag+ recipesPag
                )?.map(recipe => {
                    return (
                        <RecipeCard image={recipe.image} name={recipe.name} id={recipe.id} type={recipe.type?.map(diet =>  <p>{diet.name}</p> )} key={Math.random().toString(36).substr(2, 9)} ></RecipeCard>
                        )
                    })
                }
                {!typByRecipe?.length && recipes.slice(
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

