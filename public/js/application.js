require.config({
    "baseUrl" : "/js",
    "urlArgs" : "ver=" + Math.floor(new Date().getTime() / 1000),
    "paths" : {
        /*"case" : "../case"*/
    }
});

(function() {
    require(
        [
            "app/commons/url",
            "app/controllers/menu.controller",
            "app/controllers/test.controller"
        ],
        function(
            URL,
            MenuController,
            TestController
            ) {
                new MenuController();
                new TestController();
        }
    );
}).call(this);