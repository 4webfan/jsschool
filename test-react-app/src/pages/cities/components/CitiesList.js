import React, {Component, PropTypes} from 'react';
import City from './City';

export default class CitiesList extends Component {


    constructor(){
        super();
    }

    componentDidMount(){

    }

    componentDidUpdate(){

    }


    render(){

        const citiesList = this.props.citiesList;

        return (
            <div id="result">
                <ul>
                    {citiesList.map( (item, i) =>  <City data = {item} key = {i} /> )}
                </ul>
            </div>
        )
    }
}