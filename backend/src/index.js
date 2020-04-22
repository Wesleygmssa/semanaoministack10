const express =  require ('express');
const mongoose = require ('mongoose');
const cors = require('cors');
const routes = require ('./routes');


const app = express();
//week10

mongoose.connect('mongodb+srv://guerra:12345@cluster0-rk68b.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());// receber requisição no formato JSON
app.use(routes); // utlizando as rotas

//Tipos de Params:
//Query request:  req.query (Filtros, Ordenação, paginação);
//Route Params:   req.params '/users/:id' (Identificar um recuso na alteração, remoção)
//Body: req.body (Dados para criação ou alteração de um registro)

//MongoDB (Não-relacional)

app.listen(3333);