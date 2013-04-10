/**
 * @fileOverview Request Class 정의 파일
 * @version 2013.01.18
 */
define(

    "app/common/request",

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
                this._data = {};
            },
            method: function(method) {
                if(method) {
                    this._method = method;
                    return this;
                } else {
                    return this._method;
                }
            },
            url: function(url) {
                if(url) {
                    this._url = url;
                    return this;
                } else {
                    return this._url;
                }
            },
            header: function(header) {
                if(header) {
                    this._header = header;
                    return this;
                } else {
                    return this._header;
                }
            },
            data: function(data) {
                if(data) {
                    this._data = $.extend(this._data, data);
                    return this;
                } else {
                    return this._data;
                }
            },
            abort: function() {
                if(this.ajax) this.ajax.abort();
                return this;
            },
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

                    callback(status, responseProcess(result));
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

        Request.close = function(id) {
            window.__Request__ = window.__Request__ || {};

            if(!window.__Request__[id]) {
                window.__Request__[id] = null;
            }
        };

        Request.done = function(callback){
            var _a = arguments.callee.caller.arguments;
            if(_a[0] !== "done") return;
            callback(_a[1]);
        };

        Request.fail = function(callback){
            var _a = arguments.callee.caller.arguments;
            if(_a[0] !== "fail") return;
            callback(_a[1]);
        };

        Request.allways = function(callback){
            var _a = arguments.callee.caller.arguments;
            if(_a[0] === "allways") return;
            callback(_a[1]);
        };

        Request.responseProcess = function(result) {
            return result;
        };

        return Request;
    }
);

