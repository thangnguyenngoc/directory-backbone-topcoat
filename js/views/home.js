app.views.home = Backbone.View.extend({

    initialize: function () {
		window.KINVEY_DEBUG = true;
		Kinvey.init({
			appKey: "kid_VeHZ4rGBeO",
			appSecret: "bcdeef3788584ea4813c0dce76f88e5f"
		})
		.then(function (activeUser) {
			// the Kinvey.init function returns a promise which resolves to the active user
			// data (or null if there is no active user). Note: when logged in, activeUser
			// here is *not* an instance of Kinvey.Backbone.User, but just the attributes of
			// the user. You must instantiate the User yourself (to allow for custom subclasses).
			//App.user = new Kinvey.Backbone.User(activeUser);
			var user = new Kinvey.Backbone.User();
			var promise = user.connect('facebook', {
				success: function(model, response, options) {
					//do nothing
				}
			});
		};
    },

    render: function () {
        this.$el.html(this.template());
        return this;
    },
});