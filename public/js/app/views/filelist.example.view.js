/**
 * @fileOverview View
 * @version 2013.04.10
 */
define(

    "app/views/filelist.example.view",

    [
        "app/commons/view"
    ],

    function(
        View
        ) {

        /** @class */
        var FileListExampleView = View.singleton(/** @lends FileListExampleView.prototype */{
            $init: function() {
                this.$("._filelist");
            },
            render: function() {
                this.rendering("list", function(filelist) {
                    for(var i=0;i<filelist.length;i++) {
                        this.$("#filelist").append("<li>"+filelist[i]+"</li>");
                    }
                })
            }
        });

        return FileListExampleView;

    }
);