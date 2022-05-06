import {ALL_RECIPES, ALL_TYPES} from '../actions/actions.js';

const initialState = {
    recipes: [],
    types: []
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
    
        default:
            return {...state}
    }
}

export default rootReducer;

