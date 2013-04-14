/**
 * @fileOverview Controller
 * @version 2013.04.10
 */
define(

    "app/controllers/test.controller",

    [
        "app/commons/controller",
        "app/commons/view"
    ],

    function(
        Controller,
        View
        ) {


        var MyView = View.object($(".test").get(0), {
            load: function() {
                console.log("load")
            },
            render: function() {
                this.rendering("border", function() {
                    this.$().css("border", "2px solid blue");
                }.bind(this));
            }
        });

        /** @class */
        var TestController = Controller.$extend(/** @lends TestController.prototype */{
            $init: function() {
                console.log("TestController");
                MyView.render("border");
            }
        });

        return TestController;

    }
);