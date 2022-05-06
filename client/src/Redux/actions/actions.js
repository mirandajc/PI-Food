import axios from "axios";

export default function allTypes(){
    return(dispatch)=>{
        axios.get("http://localhost:3001/types")
        .then(result=>{
            console.log(result)
            return dispatch({
                type: "ALL_TYPES",
                payload: result
            })
        }).catch(Error=>console.log(Error))
    }
}

export default function allRecipes(){
   return (dispatch)=>{
    axios.get("http://localhost:3001/recipes")
    .then(result=>{
        return dispatch({
            type: "ALL_RECIPES",
            payload: result.data
        })
    }).catch(Error=>console.log(Error))
   }
}

