/**
 * @fileOverview Controller
 * @version 2013.04.05
 */
define(

    "app/controllers/menu.controller",

    [
        "app/commons/controller",
        "app/commons/url"
    ],

    function(
        Controller,
        URL
        ) {

        /** @class */
        var MenuController = Controller.$extend(/** @lends MenuController.prototype */{
            $init: function() {
                var controllerName = URL.controllerName();
                this.render("selected", [controllerName]);
            },
            render: function(cmd, arg) {
                this.rendering("selected", function(name) {
                    $("._menu li").removeClass("active");
                    $("._"+name).addClass("active");

                    switch(name) {
                        case "home":
                            break;
                        case "example":
                            break;
                    }
                });
            }
        });

        return MenuController;

    }
);