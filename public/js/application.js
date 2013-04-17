require.config({
    "baseUrl" : "/js",
    "urlArgs" : "ver=" + Math.floor(new Date().getTime() / 1000),
    "paths" : {
        /*"case" : "../case"*/
    }
});

$(document).ready(function() {
    require(
        [
            "app/commons/url",
            "app/controllers/menu.controller"
        ],
        function(
            URL,
            MenuController
            ) {

            require(["app/controllers/test.controller"], function(TestController) {
                new TestController();
            });
//
//                if (URL.routesName("controller") === "test") {
//                    require(["app/controllers/test.controller"], function(TestController) {
//                        new TestController();
//                    });
//                } else if (URL.routesName("controller") === "example" ) {
//                    new MenuController($("._menu").get(0));
//
//                    if (URL.action("request")) {
//                        require(["app/controllers/example.request.controller"], function(ExampleRequestController) {
//                            new ExampleRequestController();
//                        });
//                    }
//                    else if(URL.action("upload")) {
//                        require(["app/controllers/example.upload.controller"], function(ExampleUploadController) {
//                            new ExampleUploadController();
//                        });
//
//                    }
//                } else {
//                    new MenuController($("._menu").get(0));
//                }
        }
    );
});