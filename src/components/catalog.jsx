import React, { Component } from 'react';
import Product from './product';
import ProductService from '../services/productService';


class Catalog extends Component {
    state = {
        catalog: []
     };

    render() { 
        return ( 
            <div className="catalog-page">
                <h3>
                    Radio Trop Rock Merchandise consisting of {this.state.catalog.length} products
                </h3>

                {this.state.catalog.map((p) => ( <Product key={p.id} data={p}></Product> ))}

            </div>
         );
    }

    componentDidMount() {
        // call the service, get the catalog and put the catalog in the state
        let service = new ProductService();
        var data = service.getProducts();

        this.setState({ catalog: data });
    }
}

export default Catalog;

