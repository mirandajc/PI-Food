const getAllByName = function(name){
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
    return recipe
}

module.exports = {
    getAllByName,
    getById,
    create
}