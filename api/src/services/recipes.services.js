require('dotenv').config();
const {Recipe, Type} = require('../db')
const axios = require('axios');
const { Sequelize } = require('sequelize');
const Op = Sequelize.Op;

//  const { types } = require('pg');
const {YOUR_API_KEY} = process.env;

const getRecipesApiDb = async function() {
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
       
        
    let dbByName = await Recipe.findAll({raw:true});
    
    let allRecipe = recipesInfo.concat(dbByName);
    return allRecipe
}

const getAllByName = async function(name){
    try {
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
                // console.log(recipe)
            })
        }
      
        let dbByName = await Recipe.findAll({
            where:{
                name: {
                    [Op.like]: `%${name}%`
                }
            },
            include: {
                model: Type,
                attributes: ["name"],
                through: {
                    attributes: [],
                }
            }
        });
        // dbByName = { type: dbByName?.types };
        // delete dbByName.types;
        let allRecipe = searchByName(name).concat(dbByName);
        return allRecipe
    } catch(error) {
        console.log(error)
        throw error
    }
}

const getIdByDb = async function (recipeId){
   
    // let dataByDb = await Recipe.findByPk(recipeId,{ raw: true });

    let dataByDb = await Recipe.findByPk( recipeId, {
        include: {
            model: Type,
            attributes: ["name"],
            through: {
                attributes: [],
            } 
        }});
    console.log("estoy aca:", dataByDb)

    return dataByDb
    
}

const getById = async function(recipeId){
        
    try {
        if(typeof recipeId !== 'undefined') {
            const apiById = await axios.get( `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${YOUR_API_KEY}`)
    
            let dataByApi = apiById.data;
            let datosByApi = (dataByApi)=>{
                return {
                    id: dataByApi.id,
                    name: dataByApi.title,
                    image: dataByApi.image,
                    types: dataByApi.diets.map(diet=>({name: diet})),
                    summary: dataByApi.summary,
                    spoonacularScore: dataByApi.spoonacularScore,
                    healthScore: dataByApi.healthScore,
                    instruction: dataByApi.instructions
                }
            }
            
            return datosByApi(dataByApi)
            
        } else {
            console.log('Recipe ID: '+recipeId)
        }
    }catch(error){
        console.log(error)
    }

}

const create = async function(recipe){
    //const {name, image, summary, aggregateLikes, healthScore, instruction, types: ['','','' ]{name y id}} = req.body;
    try {
        let newRecipe = await Recipe.create({
            name: recipe.name,
            image: recipe.image,
            summary: recipe.summary,
            spoonacularScore: recipe.spoonacularScore,
            aggregateLikes: recipe.aggregateLikes,
            healthScore: recipe.healthScore,
            instruction: recipe.instruction
        })
        await Promise.all(recipe.types?.map( async type =>{
           await newRecipe.addType(
               [(await Type.findOrCreate({
                   where: {
                       name: type
                   }
               }))[0].dataValues.id]
           )
        }))
        
        const recipeType = await Recipe.findOne({
            where:{
                name: recipe.name
            },
            include: {
                model: Type,
                attributes: ["name"],
                through: {
                    attributes: [],
                } 
            }
        })
       // console.log(typeDiet)
        // const recipeTypes = recipe.types
        // console.log(recipeTypes)
        // await recipeTypes.map(type => newRecipe.addType(type));
        // // await Promise.all(proms)
        // return newRecipe
        console.log(recipeType)
        return recipeType
    } catch(error) {
        console.log(error, 'error en create')
    }
}
    
module.exports = {
    getRecipesApiDb,
    getAllByName,
    getById,
    create,
    getIdByDb
}