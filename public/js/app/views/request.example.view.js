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
                console.log("ExampleView");

                this.$("._example");
                this.$().on("click", "._request", this.onclick.bind(this));
            },
            onclick: function() {

                this.respondSelector("._request", function() {
                    alert(1);
                });

            }
        });

        return RequestExampleView;

    }
);