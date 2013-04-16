/**
 * @fileOverview jKit Notification Class 정의 파일
 * @version 2013.01.18
 */
define("modules/kit/notification",
    function() {
        /** @class */
        var Notification = Class.$extend(/** @lends Notification.prototype */{
            classname: "Notification",
            /**
             * @description 알림 클래스
             * @example // 예제
             * require(["modules/kit/notification"], function(Notification) {
             *      var notification = new Notification();
             * });
             */
            $init: function() {
                this._pool = {};
            },

            /**
             * @description selector 추가
             * @public
             * @param {String} name 이름
             * @param {Function} selector 함수
             * @example
             * require(["modules/kit/notification"], function(Notification) {
             *      var notification = new Notification();
             *      notification.add("ADD", function() {
             *          alert("test");
             *      });
             *      notification.notify("ADD");
             * });
             */
            add: function(name, selector) {
                if(typeof this._pool[name] === "undefined") this._pool[name] = [];

                this._pool[name].push({
                    selector: selector
                });
            },

            /**
             * @description selector 삭제
             * @public
             * @param {String} name 이름
             * @param {Function} selector 함수
             */
            remove: function(name, selector) {
                if(typeof this._pool[name] == "undefined") return;

                var newPool = [];
                var pool = this._pool[name];

                for(var i=0;i<pool.length;i++) {
                    if(pool[i].selector !== selector) newPool.push(pool[i]);
                }

                this._pool[name] = newPool;
            },

            /**
             * @description notify
             * @public
             * @param {String} name 이름
             * @param {Array} arg arguments
             */
            notify: function(name, arg) {
                var pool = this._pool[name];
                if(typeof pool == "undefined") return;
                for(var i=0;i<pool.length;i++) {
                    pool[i].selector.apply(this, arg);
                }
            }
        });


        if(typeof window.NotificationCenter === "undefined") {
            window.GlobalNotificationCenter = new Notification();

            /**
             * @description Notification Global Instance
             * @type {Object} notification instance
             * @example
             * Notification.Center.add("REFRESH", $.proxy(this.refresh, this));
             * Notification.Center.remove("REFRESH", $.proxy(this.refresh, this));
             * Notification.Center.notify("REFRESH", [1,2,3]);
             */
            Notification.Center = window.GlobalNotificationCenter;
        }

        return Notification;
    });