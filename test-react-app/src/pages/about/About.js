import React, {Component, PropTypes} from 'react';
import Menu from "../../components/Menu";

class About extends Component {

    static propTypes = {};

    constructor(){
        super();

    }


    render(){

        return (
            <div className = "mainContainer">
                <Menu />
                <div className="mainContent">
                    <h1>About</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam delectus explicabo iste libero, maxime minus molestiae neque odio odit quibusdam quidem quod reiciendis repellendus sed totam ut velit! Provident, repellendus! </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam delectus explicabo iste libero, maxime minus molestiae neque odio odit quibusdam quidem quod reiciendis repellendus sed totam ut velit! Provident, repellendus! </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam delectus explicabo iste libero, maxime minus molestiae neque odio odit quibusdam quidem quod reiciendis repellendus sed totam ut velit! Provident, repellendus! </p>
                    <div className = 'imageContainer'>
                        <img src="/assets/img/img.jpeg" />
                    </div>
                </div>
            </div>
        )
    }
}

export default About;