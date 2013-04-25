/**
 * @fileOverview Object Utility
 * @version 2013.01.18
 * @author yuilsang
 * @author yuilsang
 */
define(

    "app/commons/object.util",

    function() {
        /**
         * @name ObjectUtil
         * @namespace
         * @description 객체 유틸리티 기능 모음
         */
        var ObjectUtil = {};

        /**
         * @description Object 확장 메소드
         * @static
         * @param {Object} destination  원본 object
         * @param {Object} source   추가 object
         * @example
         * var people = {
         *      name: "ilsang yu"
         * };
         * ObjectUtil.extend(people, {
         *      sex: "male"
         * });
         *
         * // result
         * people = {
         *      name: "ilsang yu",
         *      sex: "male"
         * };
         *
         */
        ObjectUtil.extend = function (destination, source){
            for(var property in source){
                destination[property] = source[property];
            }
            return destination;
        };

        return ObjectUtil;
    });












