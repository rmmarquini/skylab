const express = require('express');
const routes = express.Router();

// Invoca os controllers para dentro das rotas
const ProductController = require('./controllers/ProductController');

// Recuperando os mẽtodos inseridos dentro do controller
routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);

module.exports = routes;