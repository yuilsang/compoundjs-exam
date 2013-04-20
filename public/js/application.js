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
            "app/commons/url.util"
            ,"app/controllers/menu.controller"
        ],
        function(
            URLUtil
            ,MenuController
            ) {

                if (URLUtil.routesName("controller") === "test") {
                    require(["app/controllers/test.controller"], function(TestController) {
                        new TestController();
                    });
                } else if (URLUtil.routesName("controller") === "example" ) {
                    new MenuController($("._menu").get(0));

                    if (URLUtil.action("request")) {
                        require(["app/controllers/example.request.controller"], function(ExampleRequestController) {
                            new ExampleRequestController();
                        });
                    }
                    else if(URLUtil.action("upload")) {
                        require(["app/controllers/example.upload.controller"], function(ExampleUploadController) {
                            new ExampleUploadController();
                        });

                    }
                } else {
                    new MenuController($("._menu").get(0));
                }
        }
    );
}).call(this);