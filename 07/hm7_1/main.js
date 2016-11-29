function setSomeCookie(){
    document.cookie = 'name = Vasya';
    document.cookie = 'city = Moscow';
    document.cookie = 'age = 25';
    document.cookie = 'lang = ru';
    document.cookie = 'work = web developer';
    document.cookie = 'hibbies = music';
}

function buildTable( arr ){
    var table = document.getElementById('cookieTable');

    arr.forEach( item => {
        var cookieVal = item.split('=');
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var button = document.createElement('button');
        var txt1 = document.createTextNode(cookieVal[0]);
        var txt2 = document.createTextNode(cookieVal[1]);
        var txt3 = document.createTextNode('Delete');

        button.append(txt3);
        td1.append(txt1);
        td2.append(txt2);
        td3.append(button);

        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        table.append(tr);

        tr.append();
        button.setAttribute('data-cookieName', cookieVal[0]);
        button.addEventListener( 'click', buttonClickHandler );

    });
}

function buttonClickHandler( event ){
    var self = event.target;
    var name = event.target.getAttribute('data-cookieName');
    var date;
    if( window.confirm('Удалить cookie с именем' + name) ){
        date = new Date(0);
        document.cookie = name+"=; path=/; expires=" + date.toUTCString();
        delete_cookie( name );
        deleteTr( self );
    }
}

function delete_cookie( cookie_name ){

    var cookie_date = new Date ( ); 
    cookie_date.setTime ( cookie_date.getTime() - 1 );
    document.cookie = cookie_name += "=; expires=" + cookie_date.toGMTString();

}
function deleteTr( node ){
    node.parentNode.parentNode.remove();
}


setSomeCookie();
buildTable( document.cookie.split(';') );