import React, { Component } from 'react';
import { Link } from 'react-router';

class Menu extends Component {
    render(){
        return (<div className="Menu">
                    <div className="menu__item"><Link to="/">Main</Link></div>
                    <div className="menu__item"><Link to="/about">Cities</Link></div>
                    <div className="menu__item"><Link to="/about">Comments</Link></div>
                </div>)
    }
}

export default Menu;