"use strict";

function Accordion(){

    this.init = function( obj ){

        var accordion = document.getElementById('accordion');
        accordion.addEventListener( 'click', this.itemClickHandler );

    }

    this.itemClickHandler = function( event ){

        event.preventDefault();

        if( !event.target.classList.contains('accordion-list__link') )
            return;

        var parent = this;
        var that = event.target;
        var links = parent.querySelectorAll('.accordion-list__link');
        var sublist = that.parentNode.querySelector('.accordion-sublist');
        var sublists = parent.querySelectorAll('.accordion-sublist');
        var linkActiveClass = 'accordion-list__link_active';
        var listHideClass = 'accordion-sublist_hide';

        if( !that.classList.contains( linkActiveClass ) ){

            sublists.forEach( item => item.classList.add( listHideClass ) );
            links.forEach( item => item.classList.remove( linkActiveClass ) );
            that.classList.add( linkActiveClass );
            sublist.classList.remove( listHideClass );

        }else{

            that.classList.remove( linkActiveClass );
            sublist.classList.add( listHideClass );

        }

        return false;
    }
}

var accordionObj = document.getElementById('accordion');
var accord = new Accordion();

accord.init( accordionObj );
