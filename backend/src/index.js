// informamos que vamos usar o formato json 
//para criar um objeto java script a partir de arquivos json das requisições

/* 
Métodos HTTP

GET - Buscar/listar informação
POST - Criar uma informação 
PUT - Alterar uma informação
DELETE - Deletar informação 

*/ 

/*
Tipos de parâmetros

- Query Params: Parametros nomeados enviados na rota após "?" 
{filtros, paginação}

    URL: http//localhost/users?name=Igor

    app.get('/users', (require, request)=>{
        const params = require.query;
        console.log(params);
    });

    NO CONSOLE: {name:'Igor'}

- Route Params: Parâmetros utilizados para identificar recursos (tables in DB)

    URL: http://localhost/user/1

    app.get('/users/:id', (require, request)=>{
        const params = require.params;
        console.log(params);
    });

    NO CONSOLE: {id:1}
; 

- Request Body: Corpo da requisição, utilizado para criar ou alterar recursos;
URL: http://localhost/users
BODY: {
    "name": "Igor",
    "age": "23"
}

app.post('/users', (require, request)=>{
    const params = require.body;
    console.log(params);
});

NO CONSOLE: 
{
    "name": "Igor",
    "age": "23"
}

*/ 

/*
Ferramentas para query em BD

    Driver: SELECT * FROM users,

    Query Builder: table('users').select('*').where()
        ex:Knex
 */


const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json()); 
app.use(routes);


app.listen(3333);