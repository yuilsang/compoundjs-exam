/**
 * @fileOverview Controller
 * @version 2013.04.10
 */
define(

    "app/controllers/example.upload.controller",

    [
        "app/commons/url",
        "app/commons/flow",
        "app/commons/request",
        "app/commons/view",
        "app/views/request.example.view",
        "app/views/filelist.example.view",
        "app/views/fileupload.example.view",
        "app/views/html5upload.example.view",
        "app/models/example.model"
    ],

    function(
        URL,
        Flow,
        Request,
        View,
        RequestExampleView,
        FileListExampleView,
        FileUploadExampleView,
        HTML5UploadExampleView,
        ExampleModel
        ) {

        /** @class */
        var ExampleUploadController = View.$extend(/** @lends ExampleUploadController.prototype */{
            $init: function() {
                this.element($(".uploadcontroller"));
            },
            load: function() {
                console.log('load');

                FileListExampleView.on("click", "._upload_remove", this.onclick.bind(this));
                FileUploadExampleView.on("change", "#file", this.onchange.bind(this));
                HTML5UploadExampleView.$().filedrop({ // https://github.com/weixiyen/jquery-filedrop
                    paramname:"file",
                    data : {
                        authenticity_token: $('meta[name=csrf-token]').attr('content')
                    },
                    maxfiles: 25,
                    maxfilesize: 25,
                    url: "/upload/filesave.json",
                    uploadFinished:function(i, file, response) {

                    }.bind(this),
                    error: function(err, file) {
                        switch(err) {
                            case 'BrowserNotSupported':
                                alert('Your browser does not support HTML5 file uploads!');
                                break;
                            case 'TooManyFiles':
                                alert('Too many files! Please select 5 at most! (configurable)');
                                break;
                            case 'FileTooLarge':
                                alert(file.name+' is too large! Please upload files up to 2mb (configurable).');
                                break;
                            default:
                                break;
                        }
                    },
                    beforeEach: function(file) {},
                    uploadStarted:function(i, file, len) {},
                    globalProgressUpdated: function(progress) {
//                        $(".progress .bar").width(n+"%");
                    },
                    progressUpdated: function(i, file, progress) {},
                    afterAll: function() {
                        console.log("afterAll");
                        this.onloadFileList();
                    }.bind(this)
                });


                this.onloadFileList();
            },
            // 파일 목록 로드
            onloadFileList: function() {
                Request
                    .$("ExampleController")
                    .method("GET")
                    .url("/upload/filelist.json")
                    .send(function(r) {
                        FileListExampleView.render("clearlist");
                        FileListExampleView.render("list", [r.res.filelist]);
                    }.bind(this));

                //FileListExampleView.
            },
            onchange: function(e) {
                this.responding("#file", function() {
                    var filename = FileUploadExampleView.filename();
                    FileUploadExampleView.render("filename", [filename]);
                });
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
                    }, function(data) {
                        FileListExampleView.render("remove", [e]);
                    });

                }.bind(this));
            }
        });

        return ExampleUploadController;

    }
);