require('dotenv').config();
const axios = require('axios');
const {YOUR_API_KEY} = process.env;


const getAll = async function(){
    
   try{ 
        let apiTypes = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&addRecipeInformation=true&number=100`)
        
        let dataTypes = apiTypes.data?.results.map(obj => obj.diets).join([]).split(',');
        let diets = new Set(dataTypes);
        console.log(apiTypes)
        let arr = Array.from(diets);
            return arr;
    }catch{
        console.log(Error)
    }

} 


module.exports = {
    getAll,
    
}