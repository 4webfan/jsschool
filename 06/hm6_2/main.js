function getCitiesList(){
    var xhr = new XMLHttpRequest();
    var resp, citiesArr;
    xhr.open( 'GET', 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json', true );
    xhr.addEventListener( 'load', function(){
        resp = xhr.response;
        citiesArr = parseData( resp );
        buildList( citiesArr );
    });
    xhr.send();
}

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


window.addEventListener( 'load', getCitiesList );