const typesService = require('../services/types.services')

const getTypes = function(req, res, next){
    res.send(typesService.getAll())
}

module.exports = {
    getTypes
}