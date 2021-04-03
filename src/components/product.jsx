import React, { Component } from "react";
import QuantityPicker from "./quantityPicker";
import "./product.css";
import { connect } from "react-redux";
import { addProductToCart } from "../store/actions/actions";

class Product extends Component {
  state = {
    quantity: this.props.data.minimum || 1,
  };
  render() {
    return (
      <div className="product">
        <img className="product-image"  src = {"/images/products/" + this.props.data.image}alt="Product"></img>

      
        <label>{this.props.data.title}</label>
       
          <label>Total: ${(this.props.data.price * this.state.quantity).toFixed(2)}</label>
          <label>Unit Price: ${this.props.data.price.toFixed(2)}</label>
       

        <QuantityPicker minimum ={this.props.data.minimum || 1}
        onValueChange ={this.handleQuantityChange}></QuantityPicker>

        <button onClick = {this.handleAddToCart} className="btn btn-sm btn-secondary"> Add to Cart </button>
      </div>
    );
  }

  calculateTotal = () => {
    var total = this.props.data.price * this.state.quantity;
    return total.toFixed(2);
  };



handleQuantityChange = (qnty)  => {
  console.log("Quantity changed to" + qnty);
  this.setState({ quantity: qnty});
};

handleAddToCart = () => {
  console.log ("add 2 cart");
  var prodInCart ={
    product: this.props.data,
    quantity: this.state.quantity
  }
  this.props.addProductToCart( prodInCart );
};
}

export default connect (null, { addProductToCart }) (Product);  

