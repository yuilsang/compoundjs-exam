/**
 * @fileOverview Controller Class 정의 파일
 * @version 2013.04.08
 */
define(

    "app/commons/controller",

    [
        "app/commons/view"
    ],

    function(View) {

        /** @class */
        var Controller = View.$extend(/** @lends Controller.prototype */{
            setView: function() {

            }
        });

        return Controller;
    });

