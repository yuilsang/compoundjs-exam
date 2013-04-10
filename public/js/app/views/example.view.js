/**
 * @fileOverview View
 * @version 2013.04.10
 */
define(

    "app/controllers/example.view",

    [
        "app/commons/view"
    ],

    function(
        View
        ) {

        /** @class */
        var ExampleView = View.$extend(/** @lends ExampleView.prototype */{
            $init: function() {
                console.log("ExampleView");
            }
        });

        return ExampleView;

    }
);