import axios from "axios";
export const ALL_RECIPES = 'ALL_RECIPES';
export const ALL_TYPES = 'ALL_TYPES';


function allTypes(){
    return(dispatch)=>{
        axios.get("http://localhost:3001/types")
        .then(result=>{
            return dispatch({
                type: ALL_TYPES,
                payload: result
            })
        })
    }
}

function allRecipes(){
   return (dispatch)=>{
    axios.get("http://localhost:3001/recipes")
    .then(result=>{
        return dispatch({
            type: ALL_RECIPES,
            payload: result.data
        })
    }).catch(Error=>console.log(Error))
   }
}

export default {
allTypes,
allTypes,
ALL_RECIPES,
ALL_TYPES
}
