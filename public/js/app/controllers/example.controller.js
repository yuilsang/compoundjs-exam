/**
 * @fileOverview Controller
 * @version 2013.04.10
 */
define(

    "app/controllers/example.controller",

    [
        "app/commons/controller",
        "app/commons/url",
        "app/commons/request",
        "app/views/request.example.view"
    ],

    function(
        Controller,
        URL,
        Request,
        RequestExampleView
        ) {

        /** @class */
        var ExampleController = Controller.$extend(/** @lends ExampleController.prototype */{
            $init: function() {
                RequestExampleView.on("click", "._request", this.onclick.bind(this));
            },
            onclick: function() {
                this.respondSelector("._request", function() {
                    Request.$("my").method("GET").url("/example/api/request").data({authenticity_token: $('meta[name=csrf-token]').attr('content') }).send(function() {
                        Request.done(function(r) {
                            console.log(r);
                        });
                    });
                }.bind(this));
            }
        });

        return ExampleController;

    }
);