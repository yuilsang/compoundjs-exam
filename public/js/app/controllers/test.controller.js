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
//        var MyView = View.object($(".test"), {
//            load: function() {
//                console.log("MyView.load");
//            },
//            render: function() {
//                console.log("MyView.render");
//
//                this.rendering("border", function() {
//                    console.log("MyView.render--", this.$());
//                    this.$().css("border", "2px solid blue");
//                }.bind(this));
//            }
//        });

        /** @class */
        var TestController = View.$extend(/** @lends TestController.prototype */{
            $init: function() {
                console.log("213132")
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