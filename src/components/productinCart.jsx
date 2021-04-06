import React, { Component } from 'react';

class ProductInCart extends Component {
    render() { 
        return (
            <div>
               <img src={"/images/products/" + this.props.data.product.image}
               alt="Product in Cart"
               ></img>

            <label>{this.props.data.product.title}</label>
            <button className="btn btn-sm btn-danger">Remove</button>
             
            </div>
          );
    }
}

export default ProductInCart;