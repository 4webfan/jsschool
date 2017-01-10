import React, {Component, PropTypes} from 'react';

export default class Filterform extends Component{

    constructor(){
        super();
    }

    changeHandler( e ){
        // send value in parent component
        this.props.getStr( e.currentTarget.value );
    }

    render(){
        return(
            <input
                type="text"
                id="input"
                onChange = {this.changeHandler.bind(this)}
            />
        )
    }

}