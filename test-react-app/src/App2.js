import React, {Component, PropTypes} from 'react';
import Menu from "./Menu";
//import Filterform from './components/Filterform';
//import Cities from './components/Cities';

class App extends Component {

    static propTypes = {};

    constructor(){
        super();
    }

    render(){

        return (
             <div>
                <Menu />
                App2 Component
            </div>
        )
    }
}

export default App;