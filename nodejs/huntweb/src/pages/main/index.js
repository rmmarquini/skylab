import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './style.css';

export default class Main extends Component {
    state = {
        products: [],
        productInfo: {},
        page: 1
    }
    
    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);

        const { docs, ...productInfo } = response.data;
        
        this.setState({ products: docs, productInfo, page });
    }

    prevPage = () => {
        const { page, productInfo } = this.state;

        console.log(page);

        if (page === 1) return;

        const pageNumber = page - 1;

        this.loadProducts(pageNumber);
    };

    nextPage = () => {
        const { page, productInfo } = this.state;

        if (page === productInfo.pages) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);
    };

    // SEMPRE Q EU TIVER UMA VARIAVEL COM ESTADO DEFINIDO O METODO render() FICARA ESCUTANDO
    // A ALTERACAO DESSA VARIAVEL, TRAZENDO-AS EM TELA
    render() {
        const { products, page, productInfo } = this.state;

        return (
            <div className="product-list">
                {products.map(product => (
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>
                        <Link to={`/products/${product._id}`}>Acessar</Link>
                    </article>
                ))}

                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>&lt;</button>
                    <button disabled={page === productInfo.pages} onClick={this.nextPage}>&gt;</button>
                </div>

            </div>
        )
    }
}