import React, {Component, PropTypes} from 'react';
import Menu from "../../components/Menu";
import $, {jQuery} from 'jquery';
import slick from '../../../assets/scripts/slick.min';


export default class Gallery extends Component{

    componentDidMount(){

        $('#slider').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1
        });
    }

    render(){
        return(
            <div className = "mainContainer">
                <Menu />

                <div className="mainContent">
                    <h1>Gallery</h1>

                    <div className="rSlider" id="slider">
                        <div className = "rSlider__item">
                            <img src="/assets/img/slider/1.jpg" />
                        </div>
                        <div className = "rSlider__item">
                            <img src="/assets/img/slider/2.jpg" />
                        </div>
                        <div className = "rSlider__item">
                            <img src="/assets/img/slider/3.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}