function scanDom(){

    var rootEl = document.documentElement;
    var statistic = {
        text: 0,
        tags: {

        },
        classes: {

        },
        test: {

        }
    }



    function domIterator( el ){

        if( el.nodeType == 1){
            // elsement
            let name = el.nodeName;
            let elClases = el.classList;
            let child = el.childNodes;

            // tags
            if( !statistic.tags.hasOwnProperty( name ) ){
                statistic.tags[ name ] = document.getElementsByTagName(name).length;
            }

            //classes
            if( elClases.length ){
                for( let i = 0; i < elClases.length; i++ ){
                    if( !statistic.classes.hasOwnProperty( elClases[i] ) ){
                        statistic.classes[ elClases[i] ] = document.getElementsByClassName(elClases[i]).length;
                    }
                }
            }


            if( child.length ){
                for( let i = 0; i< child.length; i++ ){
                    domIterator( child[i] );
                }
            }

        }else if( el.nodeType == 3 ){
            // textNode
            statistic.text++;
        }

        
    }

    function statisticWriter( obj ){
        
        for( let prop in obj.tags ){
            console.log('Тегов '+ prop.toLowerCase() + ' - ' + obj.tags[prop]);
        }

        console.log( 'Текстовых узлов - ' + obj.text );

        for ( let prop in obj.classes ){
            console.log('Элементов с классом '+ prop + ' - ' + obj.classes[prop]);
        }

    }

    domIterator( rootEl );
    statisticWriter( statistic );
    
}