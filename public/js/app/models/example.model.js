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
        var ExampleModel = Model.object(/** @lends ExampleModel.prototype */{
            load: function() {
                this.uploaderActivity = false;
            },

            removeFile: function(data, cb) {
                cb = cb || function() {};

                this.REQUEST
                    .$("ExampleModel")
                    .method("GET")
                    .url("/upload/fileremove.json")
                    .data(data)
                    .data({authenticity_token: $('meta[name=csrf-token]').attr('content') })
                    .send(function(status, data) {
                        cb(status, data);
                    });
            }
        });

        return ExampleModel;
    }
);