/**
 * @fileOverview Controller
 * @version 2013.04.10
 */
define(

    "app/controllers/test.controller",

    [
        "app/commons/controller",
        "app/commons/url"
    ],

    function(
        Controller,
        URL
        ) {

        /** @class */
        var TestController = Controller.$extend(/** @lends TestController.prototype */{
            $init: function() {
                console.log("TestController");
            }
        });

        return TestController;

    }
);