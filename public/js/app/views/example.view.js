/**
 * @fileOverview View
 * @version 2013.04.10
 */
define(

    "app/views/example.view",

    [
        "app/commons/view"
    ],

    function(
        View
        ) {

        /** @class */
        var ExampleView = View.$extend(/** @lends ExampleView.prototype */{
            load: function() {
                console.log("ExampleView");
            }
        });

        return ExampleView;

    }
);