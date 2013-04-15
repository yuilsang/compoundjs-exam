/**
 * @fileOverview View Class 정의 파일
 * @version 2013.01.18
 */
define(

    "app/commons/url",

    function() {

        /** @class */
        var URL = Class.$extend(/** @lends URL.prototype */{
            $init: function() {

            }
        });

        URL.routesName = function(name) {
            var paths = location.pathname.split("/");
            var controllerName = (paths[1] == "" ? "home" : paths[1]);
            var actionName = paths[2] || null;
            if(name == "controller") {
                return controllerName;
            } else if(name == "action") {
                return actionName;
            }
        };

        URL.action = function(name) {
            if(name) {
                return (this.routesName("action") === name ? true : false)
            } else {
                return this.routesName("action");
            }
        };

        return URL;
    }
);

