/**
 * @fileOverview View
 * @version 2013.04.10
 */
define(

    "app/views/html5upload.example.view",

    [
        "app/commons/view"
    ],

    function(
        View
        ) {

        /** @class */
        var HTML5UploadExampleView = View.object($("._html5upload"), /** @lends HTML5UploadExampleView.prototype */{
//            load: function() {
//                this.$("@dropbox", "#dropbox");
//                this.$$("dropbox", "#dropbox");
//            },
//            filename: function() {
//                return this.$("@file").val();
//            },
//            render: function() {
//                this.rendering("filename", function(str) {
//                    this.el("filename").html(str);
//                    this.$("filename", ".d.f.g.")
//                    this.$("@filename").html(str);
//                });
//            }
        });

        return HTML5UploadExampleView;

    }
);