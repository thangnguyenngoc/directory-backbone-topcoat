app.adapters.mybook = (function () {

    console.log("Loading localstorage adapter module");

    var findById = function (id) {

            var deferred = $.Deferred(),
                mybooks = JSON.parse(window.localStorage.getItem("mybooks")),
                mybook = null,
                l = mybooks.length;

            for (var i = 0; i < l; i++) {
                if (mybooks[i].id === id) {
                    mybook = mybooks[i];
                    break;
                }
            }

            deferred.resolve(mybook);
            return deferred.promise();
        },

        findByName = function (searchKey) {
            var deferred = $.Deferred(),
                mybooks = JSON.parse(window.localStorage.getItem("mybooks")),
                results = mybooks.filter(function (element) {
                    var fullName = element.title + " " + element.author + " " + element.category;
                    return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
                });
            deferred.resolve(results);
            return deferred.promise();
        },

    // Store sample data in Local Storage
    window.localStorage.setItem("mybooks", JSON.stringify(
        [
			{"id": 1, "title": "Hello World", "author": "unknown", "category": "fairy tale", "publisheddate": "8/8/2013"},
			{"id": 2, "title": "Hello World", "author": "unknown", "category": "fairy tale", "publisheddate": "8/9/2013"},
			{"id": 3, "title": "Hello World", "author": "unknown", "category": "fairy tale", "publisheddate": "8/10/2013"},
			{"id": 4, "title": "Hello World", "author": "unknown", "category": "fairy tale", "publisheddate": "8/11/2013"},
			{"id": 5, "title": "Hello World", "author": "unknown", "category": "fairy tale", "publisheddate": "8/12/2013"},
			{"id": 6, "title": "Hello World", "author": "unknown", "category": "fairy tale", "publisheddate": "8/13/2013"},
			{"id": 7, "title": "Hello World", "author": "unknown", "category": "fairy tale", "publisheddate": "8/14/2013"},
			{"id": 8, "title": "Hello World", "author": "unknown", "category": "fairy tale", "publisheddate": "8/15/2013"},
			{"id": 9, "title": "Hello World", "author": "unknown", "category": "fairy tale", "publisheddate": "8/16/2013"},
			{"id": 10, "title": "Hello World", "author": "unknown", "category": "fairy tale", "publisheddate": "8/17/2013"},
			{"id": 11, "title": "Hello World", "author": "unknown", "category": "fairy tale", "publisheddate": "8/18/2013"},
			{"id": 12, "title": "Hello World", "author": "unknown", "category": "fairy tale", "publisheddate": "8/19/2013"},
			{"id": 13, "title": "Hello World", "author": "unknown", "category": "fairy tale", "publisheddate": "8/20/2013"},
			{"id": 14, "title": "Hello World", "author": "unknown", "category": "fairy tale", "publisheddate": "8/21/2013"},
			{"id": 15, "title": "Hello World", "author": "unknown", "category": "fairy tale", "publisheddate": "8/22/2013"}
        ]
    ));

        // The public API
    return {
        findById: findById,
        findByName: findByName
    };


}());