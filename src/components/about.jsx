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
  <p className="lead">You want to be a "cool kid" RIGHT?</p>
  <hr className="my-4"></hr>
  <p>If so, you should buy a bunch of our shirts. That is the only way you will be "cool".</p>
  <p className="lead">
      <p>If you have any problems trying to buy this stuff just send us the money and then we'll try to figure it out.</p>

      {
                this.state.infoVisible ? 
                (
                <div>
                    <p></p>
                    <label>Can you not read? It said DO NOT click the button!?</label>
                    <p></p>
                    <label>Just for that, you should send us even MORE money!  </label>
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