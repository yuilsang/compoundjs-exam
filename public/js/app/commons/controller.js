/**
 * @fileOverview Controller Class 정의 파일
 * @version 2013.04.08
 */
define(

    "app/common/controller",

    [
        "app/common/view"
    ],

    function(View) {

        /** @class */
        var Controller = View.$extend(/** @lends Controller.prototype */{
            $init: function() {

            }
        });

        return Controller;
    });

