//const {Recipe} = require('../db')

const getAllByName =  function(name){
    // const getName = await Recipe.findAll(name)
    // .then((Recipe) => res.send(Recipe))
    // .then(res.send(getName))
    // .catch(console.log(Error))
    return {
        name,
        pancho: 'pan con salchicha'
    }
}

const getById = function(id){
    return{
        id
    }
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