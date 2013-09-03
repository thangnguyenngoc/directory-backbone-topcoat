app.routers.AppRouter = Backbone.Router.extend({

    routes: {
        "":						"home",
		"mybooks":				"mybooks",
		"newbooks":				"newbooks",
		"allbooks":				"allbooks",
		"settings":				"settings",
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
	
	newbooks: function () {
        // Since the home view never changes, we instantiate it and render it only once
        if (!app.newbooksView) {
            app.newbooksView = new app.views.newbooks();
            app.newbooksView.render();
        } else {
            console.log('reusing home view');
            app.newbooksView.delegateEvents(); // delegate events when the view is recycled
        }
        app.slider.slidePage(app.newbooksView.$el);
    },
	
	allbooks: function () {
        // Since the home view never changes, we instantiate it and render it only once
        if (!app.allbooksView) {
            app.allbooksView = new app.views.allbooks();
            app.allbooksView.render();
        } else {
            console.log('reusing home view');
            app.allbooksView.delegateEvents(); // delegate events when the view is recycled
        }
        app.slider.slidePage(app.allbooksView.$el);
    },
	
	settings: function () {
        // Since the home view never changes, we instantiate it and render it only once
        if (!app.settingsView) {
            app.settingsView = new app.views.settings();
            app.settingsView.render();
        } else {
            console.log('reusing home view');
            app.settingsView.delegateEvents(); // delegate events when the view is recycled
        }
        app.slider.slidePage(app.settingsView.$el);
    },
});