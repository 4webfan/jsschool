
new Promise(function(resolve) {
    if (document.readyState === 'complete') {
        resolve();
    } else {
        window.onload = resolve;
    }
}).then(function() {
    return new Promise(function( resolve, reject ){
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
}).then( function(resp){

    function parseData( data ){

        return JSON.parse( data ).map( item => item.name ).sort();
    }

    function buildList( arr ){

        var source = document.getElementById('listItemTemplate').innerHTML;
        var template = Handlebars.compile( source );
        var newArr = arr.map( item => { return {city: item} });
        var list =  template( {list: newArr} );
        document.getElementById('result').innerHTML =  list;

    }

    function inputHandler( event ){
        var self = event.target;
        var ul = document.querySelector('ul');
        var newArr = [];

        cities.forEach( item => {
            if( item.toLowerCase().indexOf(self.value.toLowerCase()) == 0 )
            newArr.push(item);
        });

        buildList( newArr );
    }

    cities = parseData( resp );
    buildList( cities );
    document.getElementById('input').addEventListener('input', inputHandler);
}).catch(function(e) {
    alert(`Ошибка: ${e.message}`);
});