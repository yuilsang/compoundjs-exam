/**
 * @fileOverview View Class 정의 파일
 * @version 2013.01.18
 */
define(

    "app/commons/view",

    function() {

        /** @class */
        var View = Class.$extend(/** @lends View.prototype */{
            view: null,
            subviews: {},
            $init: function() {
                this.view = null;
                this.subviews = {};
            },

            load: function() {
            },

            $: function(selector, v) {
                if(selector) {
                    if(typeof selector == "string" && selector.indexOf("@") > -1 && v) {
                        var name = selector.replace("@", "");
                        this.subviews[name] = (this.view == null ? $(v) : $(v, this.view));
                        return v;
                    } else if(typeof selector == "string" && selector.indexOf("@") > -1) {
                        var name = selector.replace("@", "");
                        return this.subviews[name];
                    }

                    var view = (this.view == null ? $(selector) : $(selector, this.view));
                    if(this.view == null) this.view = view;

                    return view;
                } else {
                    return this.view;
                }
            },

            on: function() {
                this.$().on.apply(this.$(), arguments);
            },

            /**
             *
             * @param selector
             * @param cb
             */
            respondSelector: function(selector, cb) {
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

        View.object = function(methods, load) {
            load = load || true;
            var ViewClass = View.$extend(methods);
            var instance = new ViewClass();
            if(load) instance.load();
            return instance;
        };

        return View;
    }
);

