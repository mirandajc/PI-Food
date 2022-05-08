const { Router } = require('express');
const typesController = require('../controllers/types.controllers.js')
const recipesController = require('../controllers/recipes.controllers.js')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/types', typesController.getTypes)
router.get('/recipes', recipesController.getRecipes)
router.get('/recipes', recipesController.getRecipesByName)
router.get('/recipes/:id', recipesController.getRecipeById)
router.post('/recipe', recipesController.createRecipe)

module.exports = router;
