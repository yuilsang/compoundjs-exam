/**
 * @fileOverview View
 * @version 2013.04.10
 */
define(

    "app/views/fileupload.example.view",

    [
        "app/commons/view"
    ],

    function(
        View
        ) {

        /** @class */
        var FileUploadExampleView = View.object(/** @lends FileUploadExampleView.prototype */{
            load: function() {
                this.$("._fileupload");
                this.$("@filename", "._uploadfilename");
                this.$("@file", "#file");
            },
            filename: function() {
                return this.$("@file").val();
            },
            render: function() {
                // 목록내 삭제.
                this.rendering("filename", function(str) {
                    this.$("@filename").html(str);
                });
            }
        });

        return FileUploadExampleView;

    }
);