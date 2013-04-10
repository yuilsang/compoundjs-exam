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
            "app/controllers/test.controller",
            "app/controllers/example.controller"
        ],
        function(
            URL,
            MenuController,
            TestController,
            ExampleController
            ) {
                new MenuController();
                new TestController();
                new ExampleController();
        }
    );
}).call(this);