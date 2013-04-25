/**
 * @fileOverview Type Utility
 * @version 2013.01.18
 * @author yuilsang
 */
define(

    "app/commons/type.util",

    function() {
        /**
         * @name TypeUtil
         * @class
         * @constructor
         * @description 타입 유틸리티 및 체크 기능 모음
         * @param   {Varient}   o   Number/String/Object/Array/Function/Date ...
         * @returns {Bool}
         * @example
         * require(["modules/util/type"], function(TypeUtil) {
         *      TypeUtil(value);
         * });
         */
        var TypeUtil = function(o) {
            return !!o && Object.prototype.toString.call(o).match(/(\w+)\]/)[1];
        };

        /**
         * @description TypeUtil.Number
         * @constant
         * @type {String}
         */
        TypeUtil.Number = "Number";

        /**
         * @description TypeUtil.String
         * @constant
         * @type {String}
         */
        TypeUtil.Boolean = "Boolean";

        /**
         * @description TypeUtil.String
         * @constant
         * @type {String}
         */
        TypeUtil.String = "String";

        /**
         * @description TypeUtil.Object
         * @constant
         * @type {String}
         */
        TypeUtil.Object = "Object";

        /**
         * @description TypeUtil.Array
         * @constant
         * @type {String}
         */
        TypeUtil.Array= "Array";

        /**
         * @description TypeUtil.Function
         * @constant
         * @type {String}
         */
        TypeUtil.Function = "Function";

        /**
         * @description TypeUtil.Date
         * @constant
         * @type {String}
         */
        TypeUtil.Date = "Date";

        /**
         * @description HTML Document
         * @constant
         * @type {String}
         */
        TypeUtil.HTMLDocument = "HTMLDocument";

        /**
         * @description 배열 확인
         * @static
         * @param {Varient} v   객체
         * @returns {Boolean}   true/false
         */
        TypeUtil.isArray = function(v) { return v; };

        /**
         * @description 함수 확인
         * @static
         * @param {Varient} v   객체
         * @returns {Boolean}   true/false
         */
        TypeUtil.isFunction = function(v) { return v; };

        /**
         * @description 객체 확인
         * @static
         * @param {Varient} v   객체
         * @returns {Boolean}   true/false
         */
        TypeUtil.isObject = function(v) { return v; };

        /**
         * @description 문자 확인
         * @static
         * @param {Varient} v   객체
         * @returns {Boolean}   true/false
         */
        TypeUtil.isString = function(v) { return v; };

        /**
         * @description 숫자 확인
         * @static
         * @param {Varient} v   객체
         * @returns {Boolean}   true/false
         */
        TypeUtil.isNumber = function(v) { return v; };

        var types = ['Array','Function','Object','String','Number'];
        var typesLength = types.length;
        while (typesLength--) {
            TypeUtil['is' + types[typesLength]] = (function(type){
                return function(o) {
                    return !!o && ( Object.prototype.toString.call(o) === '[object ' + type + ']' );
                };
            })(types[typesLength]);
        }

        return TypeUtil;
});

