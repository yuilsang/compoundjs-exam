load("application");

action("index", function () {
    render({
        title: "upload#index"
    });
});

action("api_upload", function() {
    var fs = require("fs");
    var type = req.body.type;

    var file_tmp = req.files.file.path;
    var file_type = req.files.file.type;
    var file_name = req.files.file.name;
    var file_savepath = "files/" + file_name;

    fs.rename( file_tmp, file_savepath, function(err){
        if(err) console.log(err);
        console.log("moved");
        return;
    });


    if(req.params.format == "html") {
        flash('info', 'upload ok');
        redirect("/upload");
    } else {
        send({
            code: 0
        });
    }
});