import React, { Component } from "react";
import QuantityPicker from "./quantityPicker";
import "./product.css";

class Product extends Component {
  state = {};
  render() {
    return (
      <div className="product">
        <img src = "https://picsum.photos/200/300"></img>

        <label className="description">Product Description here</label>

        <label className="total">$ Total</label>
        <label className="price">$ Price</label>

        <QuantityPicker></QuantityPicker>
      </div>
    );
  }
}

export default Product;
