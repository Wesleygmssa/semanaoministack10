const {Router} = require('express');
const axios = require('axios');
const Dev = require('./models/Dev')

const routes = Router();


routes.post('/devs', async (request , response)=>{ // essa função pode demorear pra responder

 const {github_username, techs} = request.body;
//conectando api o github para retorna dos dados
 const apiResponse =  await axios.get(`https://api.github.com/users/${github_username}`);// aguarda finalizar api para passar a res

 const {name = login, avatar_url, bio} = apiResponse.data// desestruturando o objeto

const techsArray = techs.split(',').map(tech => tech.trim()); // coloando e array e removendo o espaçamento

const dev = await Dev.create({
            github_username,
            name,
            avatar_url,
            bio,
            techs: techsArray,
            
    
        })

 return response.json(dev);
 
});

module.exports = routes;