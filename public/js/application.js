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
            "app/controllers/example.controller",
            "app/controllers/test.controller"
        ],
        function(
            URL,
            MenuController,
            ExampleController,
            TestController
            ) {

                if (URL.routesName("controller") == "test") {
                    new TestController();
                } else {
                    new MenuController($("._menu").get(0));
                    new ExampleController();
                }
        }
    );
}).call(this);