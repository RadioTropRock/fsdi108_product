import React, { Component } from 'react';
import "./quantityPicker.css";
class QuantityPicker extends Component {
    state = { 
        quantity: this.props.minimum,
        name: 'Eric'
    }
    render() { 
        return (
            <div className="qntPicker">
                <button onClick={this.increaseQuantity} className="btn btn-sm btn-primary"> + </button>
                <label>{this.state.quantity}</label>
                <button onClick={this.decreaseQuantity} className="btn btn-sm btn-primary"> - </button>
               
            </div>
          );
    }

    increaseQuantity = () => {
      
        //  this.state.quantity = 999; <--- dont modify state directly
        let current = this.state.quantity + 1;
        this.setState({ quantity: current });

        this.props.onValueChange(current);
    }

    decreaseQuantity = () => {
      
        let current = this.state.quantity - 1;
        if (current >= this.props.minimum) {
        this.setState({ quantity: current });
        this.props.onValueChange(current);
        }
    }
}
 
export default QuantityPicker;