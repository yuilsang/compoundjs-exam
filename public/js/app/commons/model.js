/**
 * @fileOverview Model Class 정의 파일
 * @version 2013.04.11
 */
define(

    "app/commons/model",

    [
        "app/commons/controller",
        "app/commons/request"
    ],

    function(
        Controller,
        Request
        ) {

        /** @class */
        var Model = Controller.$extend(/** @lends Model.prototype */{
            REQUEST: Request,

            load: function() {

            }
        });

        Model.singleton = function(methods, load) {
            load = load || true;
            var ModelClass = Model.$extend(methods);
            var instance = new ModelClass();
            if(load) instance.load();
            return instance;
        };

        return Model;
    }
);
