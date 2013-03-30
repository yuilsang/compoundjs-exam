load("application");

action("index", function () {
    render({
        title: "upload#index"
    });
});

action("api_uploadedfilelist", function() {
    var fs = require("fs");
    var async = require("async");


    async.series([function(next) {
       // read file
       fs.readdir("files/", function(err, files) {
           if(err) {
               next(err);
               return;
           }

           next(null, files);
       });
    }], function(err, datas) {

        if(req.params.format == "html") {
            flash('info', 'upload ok');
            redirect("/upload");
        } else {
            send({
                code: 0,
                files: datas[0]
            });
        }
    });
});

action("api_upload", function() {
    var fs = require("fs");
    var async = require("async");
    var type = req.body.type;

    var file_tmp = req.files.file.path;
    var file_type = req.files.file.type;
    var file_name = req.files.file.name;
    var file_savepath = "files/" + file_name;

    async.series([function(next) {
        // file upload
        fs.rename( file_tmp, file_savepath, function(err){
            if(err) next(err);

            next(null);

            return;
        });
    }], function(err, datas) {
        // fail
        if(err) {
            if(req.params.format == "html") {
                flash('error', 'upload fail');
                redirect("/upload");
            } else {
                send({
                    code: 1
                });
            }
            return;
        }

        // success
        if(req.params.format == "html") {
            flash('info', 'upload ok');
            redirect("/upload");
        } else {
            send({
                code: 0
            });
        }
    });

});