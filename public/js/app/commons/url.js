/**
 * @fileOverview View Class 정의 파일
 * @version 2013.01.18
 */
define(

    "app/commons/url.util",

    function() {

        /** @class */
        var URLUtil = Class.$extend(/** @lends URLUtil.prototype */{
            $init: function() {

            }
        });

        URLUtil.routesName = function(name) {
            var paths = location.pathname.split("/");
            var controllerName = (paths[1] == "" ? "home" : paths[1]);
            var actionName = paths[2] || null;
            if(name == "controller") {
                return controllerName;
            } else if(name == "action") {
                return actionName;
            }
        };

        URLUtil.controller = function(name) {
            if(name) {
                return (this.routesName("controller") === name ? true : false)
            } else {
                return this.routesName("controller");
            }
        };

        URLUtil.action = function(name) {
            if(name) {
                return (this.routesName("action") === name ? true : false)
            } else {
                return this.routesName("action");
            }
        };

        return URLUtil;
    }
);

