const recipesService = require('../services/recipes.services')

const getRecipesByName = async function(req,res,next){
    // Buscar todos las recetas que coincidan con el nombre en mi API Y DB
    // Despues devuelvo 
    const recipes = await recipesService.getAllByName(req.query.name);
    res.send(recipes) // tiene que devolver toda la informacion del la receta buscada
   
}

const getRecipeById = async function( req, res, next){


    const recipes = await recipesService.getById(req.params.id) // informacion que nos envia el cliente que es un objeto
    // console.log('ID:',req.params)
    console.log(recipes)
    res.send(recipes)
    
}

const createRecipe =  function( req, res, next){
    // si no encuentro la receta creada en el api o en mi base de datos recien lo voy a crear
    const recipe =  recipesService.create({
        name: req.body.name,
        image: req.body.image,
        summary: req.body.summary,
        aggregateLikes: req.body.aggregateLikes,
        healthScore: req.body.healthScore,
        instruction: req.body.instruction,
    })
    // console.log("Details:",req.body.details)
    console.log(recipe)
    res.status(201).send(recipe)
}

module.exports = {
    getRecipesByName,
    getRecipeById,
    createRecipe
}


