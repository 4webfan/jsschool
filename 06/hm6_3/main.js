
function parseData( data ){

    return JSON.parse( data ).map( item => item.name ).sort();
}

function buildList( arr ){

    var fragment = document.createDocumentFragment();
    var ul = fragment.appendChild(document.createElement('ul'));

    arr.forEach(function(item){
        if( item ){

            var li = ul.appendChild(document.createElement('li'));
            li.appendChild(document.createTextNode(item));
            ul.appendChild(li);
        }
    });

    document.documentElement.append(ul);

    return
}

function inputHandler( event ){
    var self = event.target;
    var ul = document.querySelector('ul');
    var newArr = cities.map( item => {

        if( item.toLowerCase().indexOf(self.value.toLowerCase()) == 0 )
            return item;

    } );
    ul.remove();
    buildList( newArr );

}
function xhrPromise(){
    return new Promise(function( resolve, reject ){
        var xhr = new XMLHttpRequest();
        var resp, citiesArr;
        xhr.open( 'GET', 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json', true );

        xhr.addEventListener( 'load', function(){
            
            if( xhr.status == 200 ){
                resp = xhr.response;
                resolve( resp );
            }else{
               reject(); 
            }
            
        });
        xhr.addEventListener('error', function(){
            reject();
        });
        xhr.send();
    });
}

var cities = [];

xhrPromise().then(function( resp ){
    cities = parseData( resp );
    buildList( cities );
    document.getElementById('input').addEventListener('input', inputHandler);

}, function(){
    console.log('Error');
});

