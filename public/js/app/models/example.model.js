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

            request: function(data, cb) {
                console.log("request");
                cb = cb || function() {};

                Model.REQUEST
                    .$("ExampleModel")
                    .method("GET")
                    .url("/example/api/request")
                    .data({authenticity_token: $('meta[name=csrf-token]').attr('content') })
                    .send(function(data) {
                        cb(data, self);
                    });
            },

            removeFile: function(data, cb) {
                cb = cb || function() {};

                Model.REQUEST
                    .$("ExampleModel")
                    .method("GET")
                    .url("/upload/fileremove.json")
                    .data(data)
                    .data({authenticity_token: $('meta[name=csrf-token]').attr('content') })
                    .send(function(data) {
                        cb(data, self);
                    });
            }
        });

        return ExampleModel;
    }
);