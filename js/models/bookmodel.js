app.models.Book = Backbone.Model.extend({

    initialize:function () {
    },

    sync: function(method, model, options) {
        if (method === "read") {
            app.adapters.mybook.findById(parseInt(this.id)).done(function (data) {
                options.success(data);
            });
        }
    }

});

app.models.BookCollection = Backbone.Collection.extend({

    model: app.models.Book,

    sync: function(method, model, options) {
        if (method === "read") {
            app.adapters.mybook.findByName(options.data.name).done(function (data) {
                options.success(data);
            });
        }
    }

});