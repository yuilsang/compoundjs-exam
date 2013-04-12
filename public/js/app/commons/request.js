/**
 * @fileOverview Request Class 정의 파일
 * @version 2013.01.18
 */
define(

    "app/commons/request",

    function() {

        /** @class */
        var Request = Class.$extend(/** @lends Request.prototype */{
            $init: function() {
                this.id = "";
                this.ajax = null;
                this._activity = false;
                this._url = "";
                this._header = {};
                this._method = "get";
                this._done = function() {};
                this._fail = function() {};
                this._always = function() {};
                this._data = {};
            },

            /**
             * @param {String} key
             */
            get: function(key) {
                return this["_"+key];
            },

            /**
             * method Setter
             * @param {String} method
             * @returns {Object}
             */
            method: function(method) {
                this._method = method;
                return this;
            },

            /**
             * url Setter
             * @param url
             * @returns {*}
             */
            url: function(url) {
                this._url = url;
                return this;
            },

            /**
             * header Setter
             * @param header
             * @returns {*}
             */
            header: function(header) {
                this._header = header;
                return this;
            },

            /**
             * data Setter
             * @param data
             * @returns {*}
             */
            data: function(data) {
                this._data = $.extend(this._data, data);
                return this;
            },

            done: function(cb) {
                this._done = cb;
                return this;
            },

            fail: function(cb) {
                this._fail = cb;
                return this;
            },

            always: function(cb) {
                this._always = cb;
                return this;
            },

            /**
             * Request Abort
             * @returns {*}
             */
            abort: function() {
                if(this.ajax) this.ajax.abort();
                return this;
            },

            /**
             * send
             * @param {Function} callback
             * @param {Function} responseProcess
             * @returns {*}
             */
            send: function(callback, responseProcess) {
                callback = callback || function() {};
                responseProcess = responseProcess || Request.responseProcess;

                var req = {
                    type: this._method,
                    url: this._url,
                    data: this._data
                };

                var ajaxCallback = function(status, res) {
                    var result = {
                        "req": req,
                        "res": res
                    };

                    if(status === "done") {
                        this._done(result);
                    } else if(status === "fail") {
                        this._fail(result);
                    } else if(status === "always") {
                        this._always(result);
                        callback(responseProcess(result));
                    }
                };

                console.log("[Request.send]", req);

                this.ajax = $.ajax(req)
                    .done(ajaxCallback.bind(this, "done"))
                    .fail(ajaxCallback.bind(this, "fail"))
                    .always(ajaxCallback.bind(this, "always"));

                return this;
            }
        });

        /**
         * Request Manager
         * @param id
         * @returns {*}
         */
        Request.$ = function(id) {
            window.__Request__ = window.__Request__ || {};

            if(!window.__Request__[id]) {
                window.__Request__[id] = new Request();
                window.__Request__[id].id = id;
            }

            return window.__Request__[id];
        };

//        /**
//         * done Static Method
//         * @param {Function} callback
//         */
//        Request.done = function(callback){
//            var _a = arguments.callee.caller.arguments;
//            if(_a[0] !== "done") return;
//            callback(_a[1]);
//        };
//
//        /**
//         * fail Static Method
//         * @param {Function} callback
//         */
//        Request.fail = function(callback){
//            var _a = arguments.callee.caller.arguments;
//            if(_a[0] !== "fail") return;
//            callback(_a[1]);
//        };
//
//        /**
//         * allways Static Method
//         * @param {Function} callback
//         */
//        Request.always = function(callback){
//            var _a = arguments.callee.caller.arguments;
//            if(_a[0] === "always") return;
//            callback(_a[1]);
//        };

        /**
         * response Process Static Method
         * @param {Object} result
         * @returns {Object}
         */
        Request.responseProcess = function(result) {
            return result;
        };

        return Request;
    }
);

