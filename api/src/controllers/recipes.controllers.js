const recipesService = require('../services/recipes.services')

const getRecipesByName = function(req,res,next){
    const recipes = recipesService.getAllByName(req.query.name);
    res.send(recipes)
}

const getRecipeById = function(req, res, next){
    const recipes = recipesService.getById(req.params.id)
    res.send(recipes)
}

const createRecipe = function(req, res, next){
    const recipe = recipesService.create(req.body)
    res.status(201).send(recipe)
}

module.exports = {
    getRecipesByName,
    getRecipeById,
    createRecipe
}


