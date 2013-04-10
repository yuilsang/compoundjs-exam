/**
 * @fileOverview Controller
 * @version 2013.04.05
 */
define(

    "app/controllers/menu.controller",

    [
        "app/common/controller",
        "app/common/url"
    ],


    function(
        Controller,
        URL
        ) {

        /** @class */
        var MenuController = Controller.$extend(/** @lends MenuController.prototype */{
            $init: function() {

                var actionName = URL.getControllerName();
                this.render("selected", [actionName]);
            },
            render: function(cmd, arg) {
                this.rendering("selected", function(name) {

                    $("._menu li").removeClass("active");
                    $("._"+name).addClass("active");

                    switch(name) {
                        case "home":
                            break;
                        case "about":
                            break;
                        case "sample":
                            break;
                    }
                });
            }
        });

        return MenuController;

    });