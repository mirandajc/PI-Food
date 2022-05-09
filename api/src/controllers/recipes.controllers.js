const recipesService = require('../services/recipes.services')

const getRecipes = async function( req, res, next){
    if(req.query.name || req.params.id) next()
    else{
    try{const recipes = await recipesService.getRecipesApiDb()
    res.send(recipes)
    }catch{
        res.status(404).send('error')
    }
    }
}

const getRecipesByName = async function(req,res,next){
    // Buscar todos las recetas que coincidan con el nombre en mi API Y DB
    // Despues devuelvo 
    const recipes = await recipesService.getAllByName(req.query.name);
    res.send(recipes) // tiene que devolver toda la informacion del la receta buscada
}

const getRecipeById = async function( req, res, next){
    if( !req.params.id || req.query.name ) next()
    else {
     try{
    if(req.params.id) {
        const recipes = await recipesService.getById(req.params.id)
        const recipeDataBase = await recipesService.getIdByDb(req.params.id)
        if(recipes){
            res.send(recipes)  
        } else if(recipeDataBase){
            res.send(recipeDataBase)  
        } else {
        res.status(400).send('No id provided.')    
    }
}
}catch(error){
    console.log(error);
    res.status(404).send('No encontramos tu receta')
}
    }

    
    
}

const createRecipe = async function( req, res, next){
    // si no encuentro la receta creada en el api o en mi base de datos recien lo voy a crear
    const recipe = await  recipesService.create(req.body)
    // console.log("Details:",req.body.details)
    console.log(recipe)
    res.status(201).send(recipe)
}

module.exports = {
    getRecipesByName,
    getRecipeById,
    createRecipe,
    getRecipes
}


