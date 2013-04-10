/**
 * @fileOverview Sync Class 정의 파일
 * @version 2013.01.18
 */
define(

    "app/common/flow",

    function() {

        /** @class */
        var Flow = Class.$extend(/** @lends Flow.prototype */{
            $init: function() {

            }
        });

        /**
         * Synchronization 기능
         * @param {Array} sync_list
         * @param {Function} end_callback
         */
        Flow.sync = function(sync_list, end_callback) {
            sync_list = sync_list || [];

            var arg_list = [];

            var run = function(){
                sync_list[0](next);
                sync_list.shift();
            };

            var next = function(err, arg) {
                err = err || null;
                arg_list.push(arg || []);

                if(err !== null || sync_list.length == 0) {
                    end_callback(err, arg_list);
                    return;
                }

                run();
            };

            run();
        };

        return Flow;
    }
);

