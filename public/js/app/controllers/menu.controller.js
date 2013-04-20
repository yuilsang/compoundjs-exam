/**
 * @fileOverview Controller
 * @version 2013.04.05
 */
define(

    "app/controllers/menu.controller",

    [
        "app/commons/view",
        "app/commons/url.util"
    ],

    function(
        View,
        URLUtil
        ) {

        /** @class */
        var MenuController = View.$extend(/** @lends MenuController.prototype */{
            $init: function() {
                this.element($("._menu").get(0));
            },
            load: function() {
                var controllerName = URL.routesName("controller");
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