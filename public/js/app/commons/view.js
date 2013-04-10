/**
 * @fileOverview View Class 정의 파일
 * @version 2013.01.18
 */
define(

    "app/common/view",

    function() {

        /** @class */
        var View = Class.$extend(/** @lends View.prototype */{
            $init: function() {
                this.view = null;
            },

            /**
             * 렌더링
             * @param {String} cmd
             * @param {Array=} [arg]
             */
            render: function(cmd, arg) {

            },

            /**
             * 렌더링하기
             * @param ifcommand
             * @param cb
             * @param delegate
             */
            rendering: function(ifcommand, cb, delegate) {
                delegate = delegate || this;
                if (arguments.callee.caller.arguments[0] === ifcommand) {
                    $.proxy(cb, delegate).apply(delegate, arguments.callee.caller.arguments[1]);
                }
            }
        });


        return View;
    }
);

