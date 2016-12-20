module.exports = function(){
    Handlebars.registerHelper('formatTime', function(time) {
        var minutes = parseInt(time / 60),
            seconds = time - minutes * 60;

        minutes = minutes.toString().length === 1 ? '0' + minutes : minutes;
        seconds = seconds.toString().length === 1 ? '0' + seconds : seconds;

        return minutes + ':' + seconds;
    });

    Handlebars.registerHelper('formatDate', function(ts) {
        return new Date(ts * 1000).toLocaleString();
    });



    document.addEventListener('click', function(e){
        var self = e.target;
        var id = self.getAttribute('id');

        if(id == 'music'){
            App.Router.handle('music')
        }else if(id == 'friends'){
            App.Router.handle('friends')
        }else if(id == 'news'){
            App.Router.handle('news')
        }

    });

    new Promise(function(resolve) {
        window.onload = resolve;
    }).then(function() {
        return App.Model.login(5267932, 2 | 8 | 8192);
    }).then(function() {
        return App.Model.getUser().then(function(users) {
            header.innerHTML = App.View.render('header', users[0]);
        });
    }).catch(function(e) {
        console.error(e);
        alert('Ошибка: ' + e.message);
    });
}


