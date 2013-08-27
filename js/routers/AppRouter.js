app.routers.AppRouter = Backbone.Router.extend({

    routes: {
        "":						"home",
		"mybooks":				"mybooks",
    },

    initialize: function () {
        app.slider = new PageSlider($('body'));

    },

    home: function () {
        // Since the home view never changes, we instantiate it and render it only once
        if (!app.homeView) {
            app.homeView = new app.views.home();
            app.homeView.render();
        } else {
            console.log('reusing home view');
            app.homeView.delegateEvents(); // delegate events when the view is recycled
        }
        app.slider.slidePage(app.homeView.$el);
    },
	
	mybooks: function () {
        // Since the home view never changes, we instantiate it and render it only once
        if (!app.mybooksView) {
            app.mybooksView = new app.views.mybooks();
            app.mybooksView.render();
        } else {
            console.log('reusing home view');
            app.mybooksView.delegateEvents(); // delegate events when the view is recycled
        }
        app.slider.slidePage(app.mybooksView.$el);
    },
});