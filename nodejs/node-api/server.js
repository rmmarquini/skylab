// Dependências
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Inicializando o App
const app = express();
// Informando para a API que desejo postar informações no formato JSON
app.use(express.json());
app.use(cors());

// Iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi', 
    { useNewUrlParser: true }
);
// Importando todo diretório de models
requireDir('./src/models');

// Definindo Rotas
// Qdo eu defino /api, significa q todas as minhas transações de models irá passar por essa rota
app.use('/api', require('./src/routes'));

// Indica que o servidor está registrado na porta 3001
app.listen(3001);