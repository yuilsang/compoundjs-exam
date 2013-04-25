/**
 * @fileOverview String Utility
 * @version 2013.01.18
 * @author yuilsang
 */
define("app/commons/string.util",
    ["app/commons/type.util"],
    function(TypeUtil) {
        /**
         * @name StringUtil
         * @namespace
         * @description 문자열 유틸리티 기능 모음
         * @requires TypeUtil
         * @example
         * define(["modules/util/string"], function(StringUtil) {
         *      var urls = StringUtil.collect("http://yuilsang.com ^_^" , "URL");
         * });
         */
        var StringUtil = {};

        /**
         * @static
         * @description Object 확장 메소드
         * @param {String} text  문자열
         * @param {Constant} c   REGEX 상수
         * @return  {String}
         * @example
         * var url = StringUtil.collect("http://yuilsang.com ^_^" , StringUtil.REGEX.URL);
         * // 상수 대신 문자열로도 가능
         * var url = StringUtil.collect("http://yuilsang.com ^_^" , "URL");
         */
        StringUtil.collect= function(text, c) {
            var regex = TypeUtil.isString(c) ? StringUtil.REGEX[c] : c;

            return text.match(regex);
        };

        /**
         * @description 모든 문자열 치환하기
         * @static
         * @param {String} str  텍스트
         * @param {String} org  원본 문자열
         * @param {String} rep  변경할 문자열
         * @return {String}
         */
        StringUtil.replaceAll= function(str, org, rep) {
            return str.split(org).join(rep);
        };

        /**
         * @description 임의 문자열 반환
         * @static
         * @return  {String}
         * @example
         * var value = StringUtil.rand();
         */
        StringUtil.rand = function() {
            var c = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
            var string_length = 8;
            var r = '';
            for (var i=0; i<string_length; i++) {
                var rnum = Math.floor(Math.random() * c.length);
                r += c.substring(rnum,rnum+1);
            }
            return r;
        };

        /**
         * @name StringUtil.REGEX
         * @namespace
         * @requires StringUtil
         * @description 문자열 정규식 모음
         */
        StringUtil.REGEX = {};

        /**
         * @constant
         * @description URL 매칭
         */
        StringUtil.REGEX.URL = /(?:(?:(https?|ftp|telnet):\/\/|[\s\t\r\n\[\]\`\<\>\"\'])((?:[\w$\-_\.+!*\'\(\),]|%[0-9a-f][0-9a-f])*\:(?:[\w$\-_\.+!*\'\(\),;\?&=]|%[0-9a-f][0-9a-f])+\@)?(?:((?:(?:[a-z0-9\-가-힣]+\.)+[a-z0-9\-]{2,})|(?:[\d]{1,3}\.){3}[\d]{1,3})|localhost)(?:\:([0-9]+))?((?:\/(?:[\#\w$\-_\.+!*\'\(\),;:@&=ㄱ-ㅎㅏ-ㅣ가-힣]|%[0-9a-f][0-9a-f])+)*)(?:\/([^\s\/\?\.:<>|#]*(?:\.[^\s\/\?:<>|#]+)*))?(\/?[\?;](?:[a-z0-9\-\_]+(?:=[^\s:&<>]*)?\&)*[a-z0-9\-\_]+(?:=[^\s:&<>]*)?)?(#[\w\-\_]+)?)/gmi;

        /**
         * @constant
         * @description 전화번호 매칭
         */
        StringUtil.REGEX.PHONE = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/;

        /**
         * @constant
         * @description 이메일 매칭
         */
        StringUtil.REGEX.EMAIL = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

        /**
         * @constant
         * @description 영문 소문자, 숫자, 6~12자리
         */
        StringUtil.REGEX.USERID = /^[a-z0-9_]{6,12}$/;

        /**
         * @constant
         * @description 주민번호 (Social Security Number) - 숫자 13자리, - 는 있어도, 없어도 됨
         */
        StringUtil.REGEX.SSN = /^\d{2}[0-1]\d[0-3]\d-?[1-6]\d{6}$/;

        return StringUtil;
    }
);



// http://kais.tistory.com/110