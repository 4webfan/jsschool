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
        addTr( cookieVal[0], cookieVal[1], table);
    });
}

function buttonClickHandler( event ){

    var self = event.target;
    var name = event.target.getAttribute('data-cookieName');
    var date;

    if( window.confirm('Удалить cookie с именем' + name) ){

        date = new Date(0);
        document.cookie = name+"=; path=/; expires=" + date.toUTCString();
        deleteCookie( name );
        deleteTr( self );

    }
}
function addCookie(name, value, expDays){

    var date = new Date(new Date().getTime() + parseInt( expDays * 60 * 60 * 1000 * 24));
    date = date.toUTCString();
    document.cookie = name + '=' + value + '; expires='+ date;

}

function deleteCookie( cookie_name ){

    var cookie_date = new Date ( );
    cookie_date.setTime ( cookie_date.getTime() - 1 );
    document.cookie = cookie_name += "=; expires=" + cookie_date.toGMTString();

}

function addTr( name, value, parent){

    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var button = document.createElement('button');
    var txt1 = document.createTextNode(name);
    var txt2 = document.createTextNode(value);
    var txt3 = document.createTextNode('Delete');

    button.append(txt3);
    td1.append(txt1);
    td2.append(txt2);
    td3.append(button);

    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    parent.append(tr);

    button.setAttribute('data-cookieName', name);
    button.addEventListener( 'click', buttonClickHandler );

}
function deleteTr( node ){
    node.parentNode.parentNode.remove();
}
function cookieAddHandler( event ){

    var cookieName = document.getElementById('cookie_name').value;
    var cookieVal = document.getElementById('cookie_value').value;
    var exp = document.getElementById('cookie_exp').value;
    var error = document.getElementById('error');
    var table = document.getElementById('cookieTable');
    var form = document.getElementById('cookie-added-form');

    exp = parseInt( exp );

    if( cookieName.length > 0 && cookieVal.length > 0 && !isNaN( exp ) && exp > 0 ){
        addCookie( cookieName, cookieVal, exp );
        addTr( cookieName, cookieVal, table );

    }else{
        alert('Cookie не должна быть создана');
    }

    form.reset();
}

function init(){

    document.getElementById('cookie_add-button').addEventListener('click', cookieAddHandler);
    setSomeCookie();

    if( document.cookie.length > 0 )
       buildTable( document.cookie.split(';') );
}


init();