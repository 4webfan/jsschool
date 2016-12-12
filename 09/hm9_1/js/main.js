"use strict";

var users = [];
var usersInList = []; 
var dragSrcEl = null;

window.onload = function(){

    if( localStorage.users && localStorage.usersInList){
        users = JSON.parse( localStorage.users );
        usersInList = JSON.parse( localStorage.usersInList );

        app();
    }else{
        getFriends();
    } 
}

function getFriends(){
    return new Promise(function(resolve) {
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
           VK.api('friends.get', {'fields': 'photo_50, nickname, domain, bdate'}, function(response) {
               if (response.error) {
                   reject(new Error(response.error.error_msg));
               } else {
                   resolve( response );
               }
           });
       });
    }).then(function(a){

        users = a.response;
        app();

    }).catch(function(e) {
      alert(`Ошибка: ${e.message}`);
    });
}


function app(){

    return new Promise(function(resolve, reject){

        function buildList( arr, flag ){

            let source = document.getElementById('listItemTemplate').innerHTML;
            let template = Handlebars.compile( source );
            let newArr = arr.map( item => { return {data: item} });
            let list =  template( {list: newArr} );
            let id;
            (flag) ? id = 'result' : id = 'result2';
            document.getElementById( id ).innerHTML =  list;

            addHandlers();

        }

        // add Handlers
        function addHandlers(){

            let item = document.querySelectorAll('#result .friends-list__item');
            let goal = document.getElementById('result2');
            let itemInList = goal.querySelectorAll('.friends-list__item');

            for( let i = 0; i < item.length; i++ ){

                let addButton = item[i].querySelector('.friends-list__add');
                addButton.addEventListener('click', addClick) ;
                item[i].addEventListener('dragstart', handleDragStart );

            }

            for(let i = 0; i < itemInList.length; i++){
                itemInList[i].querySelector('.friends-list__add').addEventListener( 'click', itemInListClickHandler );
            }

            goal.addEventListener('dragover', handleDragOver );
            goal.addEventListener('drop', handleDrop );

            document.addEventListener( 'input', inputHandler );
            document.getElementById('save').addEventListener( 'click', saveHandler );
        }

        
        // Handlers
        function handleDragStart(e) {

          e.dataTransfer.effectAllowed = 'move';
          e.dataTransfer.setData('text/html', this.innerHTML);
          dragSrcEl = this;

        }

        function handleDragOver(e) {

            e.preventDefault(); 
            e.dataTransfer.dropEffect = 'move';  

            return false;
        }

        function handleDrop(e) {
            e.stopPropagation(); 

              if (dragSrcEl != this) {
                let id = dragSrcEl.getAttribute('data-id');
                this.classList.remove('over');
                objModified( id, users, usersInList, true );
            }

            return false;
        }



        function addClick(e){

            e.preventDefault();
            let id = (e.target.closest('.friends-list__item').getAttribute('data-id'));
            objModified( id, users, usersInList, true );
        }

        function itemInListClickHandler(e){
            e.preventDefault();
            let li = e.target.closest('.friends-list__item');
            let id = li.getAttribute('data-id');
            objModified( id, usersInList, users, false );
        }

        function inputHandler(e){

            let self = e.target;
            let id = self.getAttribute('id');
            let val = self.value;
            let listObj, flag, filter = [];

            if( id == 'input1' ){
                listObj = users;
                flag = true;
            }else if( id == 'input2' ){
                listObj = usersInList;
                flag = false;
            }

            listObj.forEach( item => {
                let name = item.first_name + ' '+ item.last_name;
                if( name.indexOf(val) != -1){
                    filter.push( item );
                }
            });

            buildList( filter, flag );
        }

        function saveHandler(e){
            e.preventDefault();

            let usersList = JSON.stringify(users);
            let usersAddedList = JSON.stringify(usersInList);

            localStorage.setItem('users', usersList );
            localStorage.setItem('usersInList', usersAddedList );

            alert('Сохранено');

        }

        function objModified( id, arr1, arr2, flag ){

            let index, obj;
            arr1.map( (item, i ) => {
                if( item.uid == id ){
                    index = i;
                    obj = item;
                    return;
                }

            });

            if( index !== undefined ){

                arr2.push( Object.assign({}, obj) );
                arr1.splice( index, 1 );
                
                if(flag){
                    // При добавлении
                    buildList( arr1, true );
                    buildList( arr2, false );
                }else{
                    // При удалении
                    buildList( arr1, false);
                    buildList( arr2, true );
                }
                
            }

        }

        buildList( users, true );
        buildList( usersInList, false );
        document.getElementById('input1').value = '';
        document.getElementById('input2').value = '';
    });
}

