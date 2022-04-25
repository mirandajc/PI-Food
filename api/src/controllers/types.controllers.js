const typesService = require('../services/types.services')

const getTypes =  function(req, res, next){
    const type =  typesService.getAll()
    res.send(type)
   
}

module.exports = {
    getTypes
}