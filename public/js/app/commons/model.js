/**
 * @fileOverview Model Class 정의 파일
 * @version 2013.04.11
 */
define(

    "app/commons/model",

    [
        "app/common/request"
    ],

    function(
        Request
        ) {

        /** @class */
        var Model = Request.$extend(/** @lends Model.prototype */{
            $init: function() {

            },

            load: function() {

            }
        });

        Model.singleton = function(methods, load) {
            load = load || true;
            var ViewClass = View.$extend(methods);
            var instance = new ViewClass();
            if(load) instance.load();
            return instance;
        };

        return Model;
    }
);

