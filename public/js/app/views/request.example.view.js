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
        var RequestExampleView = View.object($("._example"), /** @lends RequestExampleView.prototype */{

        });

        return RequestExampleView;

    }
);