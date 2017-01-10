import React, { Component } from 'react';
import { Link } from 'react-router';

class Menu extends Component {
    render(){
        return (
            <div className="menu">
                <div className="menu__item"><Link to="/">Main</Link></div>
                <div className="menu__item"><Link to="/cities">Cities</Link></div>
                <div className="menu__item"><Link to="/comments">Comments</Link></div>
                <div className="menu__item"><Link to="/gallery">Gallery</Link></div>
            </div>
         )
    }
}

export default Menu;