import React, { Component } from 'react';
import api from '../../services/api';

import './style.css';

export default class Main extends Component {
    state = {
        products: [],
    }
    
    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/products');
        
        this.setState({products: response.data.docs});
    }

    // SEMPRE Q EU TIVER UMA VARIAVEL COM ESTADO DEFINIDO O METODO render() FICARA ESCUTANDO
    // A ALTERACAO DESSA VARIAVEL, TRAZENDO-AS EM TELA
    render() {
        const { products } = this.state;

        return (
            <div className="product-list">
                {products.map(product => (
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>
                        <a href={product.title} target="_blank">Acessar</a>
                    </article>
                ))}

                <div className="actions">
                    <button>&lt;</button>
                    <button>&gt;</button>
                </div>

            </div>
        )
    }
}