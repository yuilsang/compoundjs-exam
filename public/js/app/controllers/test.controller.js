/**
 * @fileOverview Controller
 * @version 2013.04.10
 */
define(

    "app/controllers/test.controller",

    [
        "app/commons/view"
    ],

    function(
        View
        ) {

        /** @class */
        var TestController = View.$extend(/** @lends TestController.prototype */{
            $init: function() {
                this.element($(".testcontroller"));
            },
            load: function() {
                console.log("TestController.load");

                this.render("border");

            },
            render: function(cmd) {
                console.log("TestController.render");

                this.rendering("border", function() {
                    this.$().css("border", "2px solid orange");
                }, this);
            }
        });

        return TestController;

    }
);