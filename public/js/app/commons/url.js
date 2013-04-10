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

        URL.controllerName = function() {
            var paths = location.pathname.split("/");
            var actionName = paths[1] == "" ? "home" : paths[1];

            return actionName;
        };

        return URL;
    }
);

