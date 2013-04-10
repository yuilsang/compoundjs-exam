/**
 * @fileOverview Controller
 * @version 2013.04.10
 */
define(

    "app/controllers/example.controller",

    [
        "app/commons/controller",
        "app/commons/url",
        "app/commons/flow",
        "app/commons/request",
        "app/views/request.example.view"
    ],

    function(
        Controller,
        URL,
        Flow,
        Request,
        RequestExampleView
        ) {

        /** @class */
        var ExampleController = Controller.$extend(/** @lends ExampleController.prototype */{
            $init: function() {
                RequestExampleView.on("click", "._request", this.onclick.bind(this));
                RequestExampleView.on("click", "._request_sync", this.onclick.bind(this));
            },
            onclick: function() {
                this.respondSelector("._request", function() {
                    Request.$("ExampleController").method("GET").url("/example/api/request").data({authenticity_token: $('meta[name=csrf-token]').attr('content') }).send(function() {
                        Request.done(function(r) {
                            console.log(r);
                        });
                    });
                }.bind(this));

                this.respondSelector("._request_sync", function() {
                    Flow.sync([function(next) {
                        Request.$("ExampleController").method("GET").url("/example/api/request").data({authenticity_token: $('meta[name=csrf-token]').attr('content') }).send(function() {
                            Request.done(function(r) {
                                next(null, r);
                            });
                        });
                    }, function(next) {
                        Request.$("ExampleController").data({ data1: "23121321" }).send(function() {
                            Request.done(function(r) {
                                next(null, r);
                            });
                        });
                    }], function(err, self) {
                        console.log(err, self);
                    });
                }.bind(this));
            }
        });

        return ExampleController;

    }
);