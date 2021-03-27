import React, { Component } from 'react';



class About extends Component {
    state =  { 
        infoVisible: false,
    };

    render() { 
        return (

            <div className="about-page">
            <div className="jumbotron">
  <h1 className="display-4">Eric Babin</h1>
  <p className="lead">We love to overcharge you for vegetables via the internet</p>
  <hr className="my-4"></hr>
  <p>We will do our best to get them to you before they rot, however, we can't promise you they will.</p>
  <p className="lead">
      <p>If you have any problems do not contact us. You should have known better than to buy fresh items on the internet.</p>

      {
                this.state.infoVisible ? 
                (
                <div>
                    <p></p>
                    <label>Why did you click the button?</label>
                    <p></p>
                    <label>I told you not to! </label>
                    <p></p>
                </div>
                ) 
                : 
                (  "" )
            }

    <button onClick ={ this.handleButtonClick } className="btn btn-lg btn-primary"> DO NOT CLICK THIS BUTTON </button>
  </p>
</div>
 </div>    
           
           
           
          );
    }

    handleButtonClick = () => {
        this.setState({ infoVisible: true});
    };
}
 
export default About;