const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArrray');

//index, show, store, update, destroy

module.exports = {
    async index (request, response){
        const devs = await Dev.find(); // listando todos devs no banco de dados
        return response.json(devs)
    },

    async store (request , response){ // essa função pode demorear pra responder

        const {github_username, techs, latitude, longitude} = request.body; // recebendo dados via post

        let dev = await Dev.findOne({github_username});

        if(!dev){

            //conectando api o github para retorna dos dados pelo usuário de login
        const apiResponse =  await axios.get(`https://api.github.com/users/${github_username}`);
       
        const {name = login, avatar_url, bio} = apiResponse.data// desestruturando o objeto
       
       const techsArray = parseStringAsArray(techs); // coloando e array e removendo o espaçamento
       
       const location = {
           type: 'Point',
           coordinates: [longitude, latitude]
       }
       //sobrepondo a variavel dev
       dev = await Dev.create({
                   github_username,
                   name,
                   avatar_url,
                   bio,
                   techs: techsArray,
                   location
                   
           
               });

        }

       
       
        return response.json(dev);
        
       }
}