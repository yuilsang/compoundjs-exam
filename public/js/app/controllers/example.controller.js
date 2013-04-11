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
        "app/views/request.example.view",
        "app/views/filelist.example.view",
        "app/views/fileupload.example.view",
        "app/models/example.model"
    ],

    function(
        Controller,
        URL,
        Flow,
        Request,
        RequestExampleView,
        FileListExampleView,
        FileUploadExampleView,
        ExampleModel
        ) {

        /** @class */
        var ExampleController = Controller.$extend(/** @lends ExampleController.prototype */{
            $init: function() {
                RequestExampleView.on("click", "._request", this.onclick.bind(this));
                RequestExampleView.on("click", "._request_sync", this.onclick.bind(this));
                FileListExampleView.on("click", "._upload_remove", this.onclick.bind(this));
                FileUploadExampleView.on("change", "#file", this.onchange.bind(this));

                this.onloadFileList();
            },
            // 파일 목록 로드
            onloadFileList: function() {
                Request
                    .$("ExampleController")
                    .method("GET")
                    .url("/upload/filelist.json")
                    .send(function() {
                        Request.done(function(r) {
                            FileListExampleView.render("list", [r.res.filelist]);
                        });
                    }.bind(this));

                //FileListExampleView.
            },
            onchange: function(e) {
                this.respondSelector("#file", function() {
                    var filename = FileUploadExampleView.filename();
                    FileUploadExampleView.render("filename", [filename]);
                });
            },
            // 클릭 이벤트 처리
            onclick: function(e) {

                // request 버튼 클릭 처리
                this.respondSelector("._request", function() {
                    Request
                        .$("ExampleController")
                        .method("GET")
                        .url("/example/api/request")
                        .data({authenticity_token: $('meta[name=csrf-token]').attr('content') })
                        .send(function() {

                        Request.done(function(r) {
                            console.log(r);
                        });

                    });
                }.bind(this));

                // request sync 버튼 클릭 처리
                this.respondSelector("._request_sync", function() {
                    Flow.sync([function(next) {
                        Request
                            .$("ExampleController")
                            .method("GET")
                            .url("/example/api/request")
                            .data({authenticity_token: $('meta[name=csrf-token]').attr('content') })
                            .send(function() {
                            Request.done(function(r) {
                                next(null, r);
                            });
                        });
                    }, function(next) {
                        Request
                            .$("ExampleController")
                            .data({ data1: "23121321" })
                            .send(function() {
                            Request.done(function(r) {
                                next(null, r);
                            });
                        });
                    }], function(err, self) {
                        console.log(err, self);
                    });
                }.bind(this));

                // 파일 삭제 버튼 클릭 처리
                this.respondSelector("._upload_remove", function() {
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

        return ExampleController;

    }
);