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
        var FileListExampleView = View.object($("._filelist"), /** @lends FileListExampleView.prototype */{

            /**
             * filenmae 가져오기
             * @param e
             * @returns {*|jQuery}
             */
            filename: function(e) {
                var filename = $("span", $(e.currentTarget).parent("li")).text();
                return filename;
            },

            /**
             * render
             */
            render: function() {
                // 목록 비우기
                this.rendering("clearlist", function() {
                    this.$().html("");
                });

                // 목록 노출
                this.rendering("list", function(filelist) {
                    for(var i=0;i<filelist.length;i++) {
                        this.$().append("<li><span>"+filelist[i]+"</span> <a href='#' class='_upload_remove'>[x]</a></li>");
                    }
                });

                // 목록 삭제
                this.rendering("remove", function(e) {
                    console.log(e);
                    var el = $(e.currentTarget).parent("li");
                    $(el).remove();
                });
            }
        });

        return FileListExampleView;

    }
);