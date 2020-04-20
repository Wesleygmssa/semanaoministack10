const express =  require ('express');
const mongoose = require ('mongoose');
const routes = require ('./routes');

const app = express();
//week10
mongoose.connect('mongodb+srv://oministack:12345@oministack-jkxww.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});

app.use(express.json());// receber requisição no formato JSON
app.use(routes); // utlizando as rotas

//Tipos de Params:
//Query request:  req.query (Filtros, Ordenação, paginação);
//Route Params:   req.params '/users/:id' (Identificar um recuso na alteração, remoção)
//Body: req.body (Dados para criação ou alteração de um registro)

//MongoDB (Não-relacional)

app.listen(3333);