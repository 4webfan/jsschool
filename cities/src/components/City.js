import React, {Component, PropTypes} from "react";

export default class City extends Component {

    render(){

        return (
            <li > {this.props.data} </li>
        );
    }
};