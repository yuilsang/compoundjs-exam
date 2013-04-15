/**
 * @fileOverview Model Class 정의 파일
 * @version 2013.04.11
 */
define(

    "app/commons/model",

    [
        "app/commons/request"
    ],

    function(
        Request
        ) {

        /** @class */
        var Model = Class.$extend(/** @lends Model.prototype */{
            REQUEST: Request,
            $init: function() {

            },
            load: function() {

            },
            set: function() {
                return this[v];
            },
            get: function(v) {
                var obj = this[v];
                if(typeof obj === "undefined") {

                }
                return this[v];
            }
        });

        Model.object = function(methods, load) {
            load = load || true;
            var ModelClass = Model.$extend(methods);
            var instance = new ModelClass();
            if(load) instance.load();
            return instance;
        };

        return Model;
    }
);

