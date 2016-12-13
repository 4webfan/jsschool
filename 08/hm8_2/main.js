var users = [];

new Promise(function(resolve) {
    if (document.readyState === 'complete') {
        resolve();
    } else {
        window.onload = resolve;
    }
}).then(function() {
  return new Promise(function(resolve, reject) {
    VK.init({
      apiId: 5755678
    });

    VK.Auth.login(function(response) {
      if (response.session) {
        resolve(response);
      } else {
        reject(new Error('Не удалось авторизоваться'));
      }
    }, 2);
  });
}).then(function(){
    return new Promise(function(resolve, reject){
        VK.api('users.get', {'name_case': 'gen'}, function(response) {
            if (response.error) {
                reject(new Error(response.error.error_msg));
            } else {

                document.getElementById('info').textContent = `Друзья ${response.response[0].first_name} ${response.response[0].last_name}`;
                resolve();
            }
        });
    });
}).then(function(){
   // get friends id
   return new Promise(function(resolve, reject){
       VK.api('friends.get', {'fields': 'photo_50, nickname, domain, bdate'}, function(response) {
           if (response.error) {
               reject(new Error(response.error.error_msg));
           } else {
               resolve( response );
           }
       });
   });
}).then(function(a){
    // get friends id
    var users = a.response;

    function buildList( arr ){

        let source = document.getElementById('listItemTemplate').innerHTML;
        let template = Handlebars.compile( source );
        let newArr = arr.map( item => { return {data: item} });
        let list =  template( {list: newArr} );
        document.getElementById('result').innerHTML =  list;

    }

    function getAge( date ){

        if( date ) {

            let  dateComponent = date.split('.');

            if( dateComponent.length == 3 ){
                return ((new Date().getTime() - new Date( `${dateComponent[2]}-${dateComponent[1]}-${dateComponent[0]}` )) / (24 * 3600 * 365.25 * 1000)) | 0;
            }
        }

        return null;
    }

    function getNextDate( str ){

        let date;
        str ? date = new Date( str ) : date = new Date();

        return date.getTime();
    }

    function getDateStr( a, b, c ){

        return `${a}-${b}-${c}`;
    }

    function nextBirtday( str ){

        if( str ){
            // curent year
            let currentDate = new Date();
            let currentYear = currentDate.getFullYear();
            let dateComponent = str.split('.');
            let dateStr = getDateStr( currentYear, dateComponent[1], dateComponent[0] );
            let nextDate = getNextDate( dateStr );

            if( nextDate > getNextDate() ){
                return nextDate;
            }else if( nextDate ){
                return getNextDate( getDateStr( ++currentYear, dateComponent[1], dateComponent[0] ));
            }

        }

        return null;
    }

    // add new prop
    var users = users.map( item => {

            let age = item.age = getAge(item.bdate );
            ( age ) ? item.age = age : item.age = 'Не указан год рождения';

            item.nextbd = nextBirtday( item.bdate );

            item.valueOf = function(){
                if( this.nextbd )
                  return this.nextbd; // timestamp след дня рождения пользователя
                else
                  return new Date().getTime() + 2 * 365.25 * 24 * 3600 * 1000; // на 2 года вперёд, чтобы при сортировке пользователи без даты были в конце
            };

            return  item;
    });

    // sort user
    users.sort((a,b) => {return a - b });

    buildList( users );

}).catch(function(e) {
  alert(`Ошибка: ${e.message}`);
});

