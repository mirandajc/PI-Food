const typesService = require('../services/types.services');
const {Type} = require('../db')
require('dotenv').config();

const getTypes = async function(req, res, next){
    try{
        const typeApi = await typesService.getAll()
        const diets = typeApi.map(name => ({ name }));
        console.log(diets)
        
        res.send(diets)
        await Type.bulkCreate(diets)
         // crea un elemento por cada objeto de name await por que crea un elemento a la vez no todo de una 
    } catch(error) {
            console.log(error)
    }
}

module.exports = {
    getTypes
}

//separar bien los services y controllers