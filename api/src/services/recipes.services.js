require('dotenv').config();
const {Recipe} = require('../db')
const axios = require('axios');
const { Sequelize } = require('sequelize');
const {YOUR_API_KEY} = process.env;

const getAllByName = async function(name){
// falta consultar en mi db el nombre

     const apiInfoRecipes = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&addRecipeInformation=true&number=100`)
     
    let recipesInfo = apiInfoRecipes.data?.results.map(element =>
         { return {
            id: element.id, 
            name: element.title.toLowerCase().replace(/[^a-zA-Z 0-9.]+/g,''),
            image: element.image,
            type: element.diets.map(diet=>({name: diet}))
            //summary: element.summary,
            // spoonacularScore: element.spoonacularScore,
            // healthScore: element.healthScore,
            // instruction: element.analyzedInstructions[0]?.steps?.map(item => { return item.step + item.step}).toString(),
         }});
       
    let searchByName = (name)=>{
        return recipesInfo.filter(recipe => {
            if(recipe.name.includes(name)) return recipe
        })
    }
   
    let dbByName = await Recipe.findAll({ 
        where: 
            {name: Sequelize.where( Sequelize.fn('LOWER', Sequelize.col('name')), 'LIKE', '%' + name + '%')},
        raw: true
        })
    let allRecipe = searchByName(name).concat(dbByName);
    return allRecipe
}

const getById = async function(id){
    
   try {const apiById = await axios.get( `https://api.spoonacular.com/recipes/${id}/information?apiKey=${YOUR_API_KEY}`)
 
    let dataByApi = apiById.data;
    let datosByApi = (dataByApi)=>{
        return{
            id: dataByApi.id,
            name: dataByApi.title,
            image: dataByApi.image,
            type: dataByApi.diets.map(diet=>({name: diet})),
            summary: dataByApi.summary,
            spoonacularScore: dataByApi.spoonacularScore,
            healthScore: dataByApi.healthScore,
            instruction: dataByApi.instructions
       }
    }
    return datosByApi(dataByApi)
} catch{
    console.log(Error, 'No se encontro en Api')
}
try{
    let dataByDb = await Recipe.findByPk(id,{ raw: true });
    return dataByDb
}catch{
    console.log(Error, 'No se encontro en Api')
}

// si no pasa en api buscar en db ordenar
        // 

//    let detailsOfRecipes = apiById.data.map(element =>
//     { return {
//        id: element.id, 
//        name: element.title.toLowerCase().replace(/[^a-zA-Z 0-9.]+/g,''),
//        image: element.image,
//        type: element.diets.map(diet=>({name: diet}))
       //summary: element.summary,
       // spoonacularScore: element.spoonacularScore,
       // healthScore: element.healthScore,
       // instruction: element.analyzedInstructions[0]?.steps?.map(item => { return item.step + item.step}).toString(),
    // }});
    // console.log(detailsOfRecipes)
}

const create = function(recipe){
    return{  
        recipe
    }
}
module.exports = {
    getAllByName,
    getById,
    create
}