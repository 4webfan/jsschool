module.exports = {
    musicRoute: function() {
        return App.Model.getMusic().then(function(music) {
            results.innerHTML = App.View.render('music', {list: music});
        });
    },
    friendsRoute: function() {
        return App.Model.getFriends().then(function(friends) {
            results.innerHTML = App.View.render('friends', {list: friends});
        });
    },
    newsRoute: function() {
        return App.Model.getNews().then(function(news) {
            results.innerHTML = App.View.render('news', {list: news.items});
        });
    }
};
