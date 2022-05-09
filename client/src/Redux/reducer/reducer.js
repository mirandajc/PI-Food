import {ALL_RECIPES, ALL_TYPES, RECIPE_ID, RECIPE_NAME} from '../actions/actions.js';

const initialState = {
    recipes: [],
    types: [],
    detail:[]
}

const rootReducer = (state = initialState,action)=>{
    switch (action.type) {
        case ALL_RECIPES:
            return{
                ...state,
                recipes:action.payload
            }
        case ALL_TYPES:
            return{
                ...state,
                types: action.payload
            }
        case RECIPE_ID:
            return{
                ...state,
                detail: action.payload
            }
        case RECIPE_NAME:
            return{
                ...state,
                recipes: action.payload
            }
            
        default:
            return {...state}
    }
}

export default rootReducer;

