/**
 * @fileOverview Controller
 * @version 2013.04.10
 */
define(

    "app/controllers/example.request.controller",

    [
        "app/commons/url",
        "app/commons/flow",
        "app/commons/request",
        "app/commons/view",
        "app/views/request.example.view",
        "app/models/example.model"
    ],

    function(
        URL,
        Flow,
        Request,
        View,
        RequestExampleView,
        ExampleModel
        ) {

        /** @class */
        var ExampleRequestController = View.$extend(/** @lends ExampleRequestController.prototype */{
            $init: function() {
                RequestExampleView.on("click", "._request", this.onclick.bind(this));
                RequestExampleView.on("click", "._request_sync", this.onclick.bind(this));
            },

            // 클릭 이벤트 처리
            onclick: function(e) {

                // request 버튼 클릭 처리
                this.responding("._request", function() {
                    Request
                        .$("ExampleController")
                        .method("GET")
                        .url("/example/api/request")
                        .data({authenticity_token: $('meta[name=csrf-token]').attr('content') })
                        .send(function(r) {
                            console.log(r);

                    });
                }.bind(this));

                // request sync 버튼 클릭 처리
                this.responding("._request_sync", function() {
                    Flow.sync([function(next) {
                        ExampleModel.request({}, function(r) {
                            next(null, r);
                        });

                    }, function(next) {
                        Request
                            .$("ExampleController")
                            .data({ data1: "23121321" })
                            .send(function(r) {
                                next(null, r);
                        });
                    }], function(err, self) {
                        console.log(err, self);
                    });
                }.bind(this));

                // 파일 삭제 버튼 클릭 처리
                this.responding("._upload_remove", function() {
                    var _filename = FileListExampleView.filename(e);

                    ExampleModel.removeFile({
                        filename: _filename
                    }, function(status, data) {
                        switch(status) {
                            case "done":
                                FileListExampleView.render("remove", [e]);
                                break;
                        }
                    });

                }.bind(this));
            }
        });

        return ExampleRequestController;

    }
);