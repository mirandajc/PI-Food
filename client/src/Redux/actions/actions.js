import axios from "axios";
export const ALL_RECIPES = 'ALL_RECIPES';
export const ALL_TYPES = 'ALL_TYPES';
export const RECIPE_ID = 'RECIPE_ID';
export const RECIPE_NAME = 'RECIPE_NAME';
export const CREATE_RECIPE = 'CREATE_RECIPE';

export function allTypes(){
    return async (dispatch)=>{
        await axios.get("http://localhost:3001/types")
        .then(result=>{
            return dispatch({
                type: ALL_TYPES,
                payload: result.data
            })
        })
    }
}

export function allRecipes(){
   return async (dispatch)=>{
    await axios.get("http://localhost:3001/recipes")
    .then(result=>{
        return dispatch({
            type: ALL_RECIPES,
            payload: result.data
        })
    }).catch(Error=>console.log(Error))
   }
}

export function recipeById(id){
    
        return async (dispatch)=>{
           await axios.get(`http://localhost:3001/recipes/${id}`)
            .then(result=>{
                return dispatch({
                    type: RECIPE_ID,
                    payload: result.data
                })
            }).catch(Error=>console.log(Error))
        }
  
    
}

export function recipeByName(name){
    return async (dispatch)=>{
        await axios.get(`http://localhost:3001/recipes?name=${name}`)
        .then(result=>{
            return dispatch({
                type: RECIPE_NAME,
                payload: result.data
            })
        }).catch(Error=>console.log(Error))
    }
}

export function createRecipe(recipe){
    return async (dispatch)=>{
        await axios.post('http://localhost:3001/recipe',recipe)
        .then(createdRecipe=>{
            return dispatch({
                type: CREATE_RECIPE,
                payload: createdRecipe
            })
        }).catch(Error=>console.log('ACA TENES TU ACTION', Error))
    } 
}
