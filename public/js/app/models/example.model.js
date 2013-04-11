/**
 * @fileOverview Model
 * @version 2013.04.05
 */
define(

    "app/models/example.model",

    [
        "app/commons/model"
    ],

    function(
        Model
        ) {

        /** @class */
        var ExampleModel = Model.singleton(/** @lends ExampleModel.prototype */{
            load: function() {

            }
        });

        return ExampleModel;

    }
);