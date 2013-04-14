/**
 * @fileOverview View Class 정의 파일
 * @version 2013.01.18
 */
define(

    "app/commons/view",

    function() {

        /** @class */
        var View = Class.$extend(/** @lends View.prototype */{
            $init: function(element, options) {
                this.model = {};
                this.model.element = null;

                this.options = $.extend({}, options);
                this.element(element);
            },

            load: function() {

            },

            element: function(element) {
                this.element = element || null;
                this.$ = $(this.element)

                if(this.element) this.load();
            },

            $: function(query, val) {
                if(arguments.length>0) {
                    return $(query, this.element);
                } else {
                    return $(this.element);
                }
            },

            on: function() {
                this.$.on.apply(this.$(), arguments);
            },

            /**
             *
             * @param selector
             * @param cb
             */
            responding: function(selector, cb) {
                if (arguments.callee.caller.arguments[0].handleObj.selector === selector) {
                    cb.apply(this, arguments.callee.caller.arguments[1]);
                }
            },

            /**
             * render
             * @param {String} cmd
             * @param {Array=} [arg]
             */
            render: function(cmd, arg) {
            },

            /**
             * rendering
             * @param cmd
             * @param cb
             */
            rendering: function(cmd, cb) {
                if (arguments.callee.caller.arguments[0] === cmd) {
                    cb.apply(this, arguments.callee.caller.arguments[1]);
                }
            }
        });



        View.object = function(element, methods) {
            var MyViewClass = View.$extend(methods);
            return new MyViewClass(element);
        };

        return View;
    }
);


Function.prototype.define = function(prop, desc) {
    Object.defineProperty(this.prototype, prop, desc);
    return Object.__;
};