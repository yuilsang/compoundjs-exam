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
        var FileUploadExampleView = View.object($("._fileupload"), /** @lends FileUploadExampleView.prototype */{

            /**
             * load
             */
            load: function() {
                this.$("@filename", "._uploadfilename");
                this.$("@file", "#file");
            },

            /**
             * filename 가져오기
             * @returns {*}
             */
            filename: function() {
                return this.$("@file").val();
            },

            /**
             * render
             */
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