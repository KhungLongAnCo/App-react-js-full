import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            
            <div className="container">
                <h3>Welcome To My Web ♥ ♥ ♥ </h3>
                <br/>
                <p>
                    The web is designed by Luan Koy and this is just the daily 
                    work management web demo 
                </p>
                <br/>
                <NavLink to="/ListProducts" className="btn btn-primary">Let Start Now</NavLink>
                
            </div>
            
        )
    }
}



export default Home;

