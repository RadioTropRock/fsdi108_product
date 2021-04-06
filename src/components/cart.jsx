import React, { Component } from 'react';
import {connect} from 'react-redux';
import ProductInCart from "./productinCart";
class Cart extends Component {
    state = {  };

    render() { 
        return (
            <div>
                <h1>Your Cart</h1>

                {this.props.cart.map((item) => (
                    <ProductInCart key={item.product.id} data={item}></ProductInCart>
                    ))}

                    <div>
                        Total: {this.getTotal()}
                        </div>
            </div>
          );
    }
    getTotal = () => {
        // calculate the total
        let granTotal = 0;
        for (let i = 0; i < this.props.cart.length; i++) {
          let item = this.props.cart[i];
          let itemTotal = item.quantity * item.product.price;
          granTotal += itemTotal;
        }
    
        return "$ " + granTotal.toFixed(2);
      };
    }    


 var mapStateToProps = (state) => {
     return {
         cart: state,
     }
 }

export default connect(mapStateToProps ,null) (Cart);