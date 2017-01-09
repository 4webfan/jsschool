import React, {Component, PropTypes} from 'react';
import Filterform from './components/Filterform';
import Cities from './components/Cities';

class App extends Component {

    static propTypes = {};

    constructor(){
        super();

        this.state = {cities: [], filteredList: [], search: ''};

        let ctx = this;
        // get promise, when get cities list from server
        this.getCities().then(function(resp){
            // Data processing
            let citiesList = JSON.parse( resp  ).map( item => item.name ).sort();

            // Update State
            ctx.setState({ cities: citiesList, filteredList: citiesList });
        });
    }

    getCities(){
        return new Promise(function(resolve, reject){

            var xhr = new XMLHttpRequest();
            var resp, citiesArr;
            xhr.open( 'GET', 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json', true );

            xhr.addEventListener( 'load', function(){

                if( xhr.status == 200 ){
                    resp = xhr.response;
                    resolve( resp );
                }else{
                    reject(new Error('Неправильный ответ сервера'));
                }

            });
            xhr.addEventListener('error', function(){
                reject(new Error('Ошибка загрузки данных'));
            });
            xhr.send();

        });

    }

    // get data from children component
    filterStr = ( value ) => {
        this.searchSity(value);
    }

    searchSity = (search) => {
        let cities = this.state.cities;
        let filteredCitiesList = [];

        // filter citiesList
        cities.forEach( (item) => {
            if( item.toLowerCase().indexOf(search.toLowerCase()) == 0){
                filteredCitiesList.push(item);
            }
        });

        this.setState({filteredList: filteredCitiesList});
    }

    render(){
        return (
            <div>
               <Filterform getStr = {this.filterStr} />
               <Cities citiesList = {this.state.filteredList} />
            </div>
        )
    }
}

export default App;