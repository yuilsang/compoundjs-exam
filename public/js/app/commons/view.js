/**
 * @fileOverview View Class 정의 파일
 * @version 2013.01.18
 */
define(

    "app/commons/view",

    function() {

        /** @class */
        var View = Class.$extend(/** @lends View.prototype */{
            $init: function() {
                this.view = null;
            },

            $: function(selector) {
                if(selector) {
                    var view = $(selector);
                    if(this.view == null) this.view = view;

                    return view;
                } else {
                    return this.view;
                }
            },

            respondSelector: function(selector, cb) {
                if (arguments.callee.caller.arguments[0].handleObj.selector === selector) {
                    cb.apply(this, arguments.callee.caller.arguments[1]);
                }
            },

            /**
             * 렌더
             * @param {String} cmd
             * @param {Array=} [arg]
             */
            render: function(cmd, arg) {

            },

            /**
             * 렌더링하기
             * @param cmd
             * @param cb
             */
            rendering: function(cmd, cb) {
                if (arguments.callee.caller.arguments[0] === cmd) {
                    cb.apply(this, arguments.callee.caller.arguments[1]);
                }
            }
        });


        View.singleton = function(methods) {
            var ViewClass = View.$extend(methods);
            var instance = new ViewClass();
            return instance;
        };


        return View;
    }
);

