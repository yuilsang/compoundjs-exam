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
        var FileListExampleView = View.object("._filelist", /** @lends FileListExampleView.prototype */{

            filename: function(e) {
                var filename = $("span", $(e.currentTarget).parent("li")).text();
                return filename;
            },
            render: function() {

                this.rendering("clearlist", function(filelist) {
                    this.$("#filelist").html();
                });

                // 목록을 그려줌.
                this.rendering("list", function(filelist) {

                    for(var i=0;i<filelist.length;i++) {
                        this.$("#filelist").append("<li><span>"+filelist[i]+"</span> <a href='#' class='_upload_remove'>[x]</a></li>");
                    }
                });

                // 목록내 삭제.
                this.rendering("remove", function(e) {
                    var el = this.$(e.currentTarget).parent("li");
                    $(el).remove();
                });
            }
        });

        return FileListExampleView;

    }
);