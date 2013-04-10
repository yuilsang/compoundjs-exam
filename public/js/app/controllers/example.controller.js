/**
 * @fileOverview Controller
 * @version 2013.04.10
 */
define(

    "app/controllers/example.controller",

    [
        "app/commons/controller",
        "app/commons/url",
        "app/views/request.example.view"
    ],

    function(
        Controller,
        URL,
        RequestExampleView
        ) {

        /** @class */
        var ExampleController = Controller.$extend(/** @lends ExampleController.prototype */{
            $init: function() {
                console.log("ExampleController");

                console.log(RequestExampleView);

            }
        });

        return ExampleController;

    }
);