/**
 * @fileOverview View
 * @version 2013.04.10
 */
define(

    "app/views/request.example.view",

    [
        "app/commons/view"
    ],

    function(
        View
        ) {

        /** @class */
        var RequestExampleView = View.singleton(/** @lends RequestExampleView.prototype */{
            $init: function() {
                this.$("._example");
            }
        });

        return RequestExampleView;

    }
);