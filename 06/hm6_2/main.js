
function parseData( data ){
    var arrObj = JSON.parse( data );
    var arr = arrObj.map( item => item.name );
    return arr.sort();
}

function buildList( arr ){

    var ul = document.createElement('ul');
    document.documentElement.append(ul);

    arr.forEach(function(item){
        var li = document.createElement('li');
        var text = document.createTextNode( item );

        li.appendChild(text);
        ul.appendChild(li);
    });

    return
}

var xhrPromise = function( resolve, reject ){

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

xhrPromise().then(function( resp ){

    buildList( parseData( resp ) );

}, function(){
    console.log('Error');
});

