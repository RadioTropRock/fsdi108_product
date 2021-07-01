import React, { Component } from 'react';



class About extends Component {
    state =  { 
        infoVisible: false,
    };

    render() { 
        return (

            <div className="about-page">
            <div className="jumbotron">
  <h1 className="display-4">Radio Trop Rock</h1>
  <p className="lead">The most awarded Trop Rock Radio Station in history!</p>
  <hr className="my-4"></hr>
  <p>Radio Trop Rock has earned EVERY radio category award presented by the Trop Rock Music Association since 2017.</p>
  <p className="lead">
      <p>Radio Trop Rock has also earned every Trop Rockin' Magazine's People's Choice Awards in the Radio category that have ever been presented.</p>

      {
                this.state.infoVisible ? 
                (
                <div>
                    <p></p>
                    <label>2017 TRMA Radio Station of the Year</label>                    
                    <p></p>
                    <label>2017 TRMA Radio Show of the Year (live) </label>
                    <p></p>
                    <label>2017 TRMA Radio Show of the Year (pre-recorded)</label> 
                    <p></p>  
                    <label>2018 TRMA Radio Station of the Year</label>                    
                    <p></p>
                    <label>2018 TRMA Radio Show of the Year (live) </label>
                    <p></p>
                    <label>2018 TRMA Radio Show of the Year (Pre-recorded) </label>           
                    <p></p>
                    <label>2018 Trop Rockin' Magazine's People's Choice Radio Show</label>
                    <p></p>
                    <label>2018 Trop Rockin' Magazine's People's Choice Radio DJ</label>                    
                    <p></p>
                    <label>2019 TRMA Radio Station of the Year </label>
                    <p></p>
                    <label>2019 TRMA Radio Show of the Year (pre-recorded)</label> 
                    <p></p>
                    <label>2019 TRMA Radio Show of the Year (live)</label>                     
                    <p></p>
                    <label>2019 TRMA Business Professional of the Year</label>
                    <p></p>
                    <label>2019 Trop Rockin' Magazine's People's Choice Radio Show</label>
                    <p></p>
                    <label>2019 Trop Rockin' Magazine's People's Choice Radio DJ</label>                    
                    <p></p>
                    <label>2020 TRMA Radio Station of the Year </label>
                    <p></p>
                    <label>2020 TRMA Radio Show of the Year (pre-recorded)</label>
                    <p></p>
                    <label>2020 TRMA Radio Show of the Year (live)</label>                   
                    <p></p>
                    <a href="https://www.troprock.org">Click here to visit the Trop Rock Music Association Website</a>
                    <h1>.....</h1>
                </div>
                ) 
                : 
                (  "" )
            }

    <button onClick ={ this.handleButtonClick } className="btn btn-lg btn-primary"> CLICK HERE FOR AWARDS LIST </button>
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