var app = {
    views: {},
    models: {},
    routers: {},
    utils: {},
    adapters: {}
};

$(document).on("ready", function () {
    app.router = new app.routers.AppRouter();
    app.utils.templates.load(["home", "mybooks", "newbooks", "allbooks", "settings"],
        function () {
            app.router = new app.routers.AppRouter();
            Backbone.history.start();
        });
});