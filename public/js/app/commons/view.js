/**
 * @fileOverview View Class 정의 파일
 * @version 2013.01.18
 * @author yuilsang
 */
define(

    "app/commons/view",

    function() {

        /** @class */
        var View = Class.$extend(/** @lends View.prototype */{
            $constructor: function() {
                this._element = null;
                this._jQuerys = {};
                this._options = {};
            },

            $init: function(element, options) {
                this.element(element);
                this.options(options);
            },

            $unload: function() {
            },

            load: function() {
            },

            unload: function() {
            },

            element: function(element) {
                if(element) {
                    this.$unload();
                    this.unload();
                    this._element = element;
                    this.load();
                } else {
                    return this._element;
                }
            },

            options: function(options) {
                if(options) {
                    this._options = $.extend(this._options, options);
                } else {
                    return this._options;
                }
            },

            $: function(key, query) {
                if(key && query) {
                    this._jQuerys[key] = $(query, this.element());
                    return this._jQuerys[key];
                } if(key) {
                    return this._jQuerys[key] || null;
                } else {
                    return $(this.element());
                }
            },

            on: function() {
                this.$().on.apply(this.$(), arguments);
            },

            /**
             *
             * @param selector
             * @param cb
             * @param delegate
             */
            responding: function(selector, cb, delegate) {
                if (delegate) cb = cb.bind(delegate);
                if (arguments.callee.caller.arguments[0].handleObj.selector === selector) {
                    cb.apply(this, arguments.callee.caller.arguments[1]);
                }
            },

            /**
             * render
             * @param {String} cmd
             * @param {Array|} [arg]
             */
            render: function(cmd, arg) {
            },

            /**
             * rendering
             * @param cmd
             * @param cb
             * @param delegate
             */
            rendering: function(cmd, cb, delegate) {
                if (delegate) cb = cb.bind(delegate);
                if (arguments.callee.caller.arguments[0] === cmd) {
                    cb.apply(this, arguments.callee.caller.arguments[1]);
                }
            }
        });

        View.object = function(element, methods) {
            var len = element.length || 0;

            if(len > 0) {
                element = element.get(0);
            }

            var MyViewClass = View.$extend(methods);
            return new MyViewClass(element);
        };

        return View;
    }
);