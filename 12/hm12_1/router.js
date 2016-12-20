module.exports = {
    handle: function(route) {
        var routeName = route + 'Route';

        App.Controller[routeName]();
    }
};
