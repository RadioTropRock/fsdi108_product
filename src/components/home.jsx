import React, { Component } from 'react';
import Logo from "./BUTTON LOGO.jpg";
class Home extends Component {
    render() { 
        return ( 
            <div>
                <h1>Welcome to Radio Trop Rock</h1>
                <p>Here you will be able to purchase Radio Trop Rock merchandise by using the menu at the top. Simply navigate to the "Store" tab.</p>
                <a href="https://www.radiotroprock.com">Click here to listen to Radio Trop Rock</a>
                <h1>.....</h1>
                <h1></h1>
                <img src={Logo} alt= "RTR logo"/>
                
            </div>
          
       
         );
         

     
    }

};















export default Home;