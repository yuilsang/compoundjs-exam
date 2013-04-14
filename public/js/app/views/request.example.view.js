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
        var RequestExampleView = View.object("._example", /** @lends RequestExampleView.prototype */{
        });


        var v = View.obj($("h3").get(0), {
            load: function() {

                this.style.border = "1px solid red";
            }
        });


        return RequestExampleView;

    }
);