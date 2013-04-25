/**
 * @fileOverview View Class 정의 파일
 * @version 2013.01.18
 * @author yuilsang
 */
define(

    "app/commons/url.util",

    function() {

        /** @class */
        var URLUtil = Class.$extend(/** @lends URLUtil.prototype */{
            $init: function() {

            }
        });

        URLUtil.routesName = function(name) {
            var paths = location.pathname.split("/");
            var controllerName = (paths[1] == "" ? "home" : paths[1]);
            var actionName = paths[2] || null;
            if(name == "controller") {
                return controllerName;
            } else if(name == "action") {
                return actionName;
            }
        };

        URLUtil.controller = function(name) {
            if(name) {
                return (this.routesName("controller") === name ? true : false)
            } else {
                return this.routesName("controller");
            }
        };

        URLUtil.action = function(name) {
            if(name) {
                return (this.routesName("action") === name ? true : false)
            } else {
                return this.routesName("action");
            }
        };


        /**
         * @description 브라우저 URL 주소를 parsing 하여 Query 의 name 에 해당하는 value 를 반환
         * @static
         * @param   {String}    name    Query Name
         * @return  {String}    Query Value
         * @example
         * var v = URLUtil.query("cmd");
         */
        URLUtil.query = function(name) {
            name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
            var regexS = "[\\?&]"+name+"=([^&#]*)";
            var regex = new RegExp( regexS );
            var results = regex.exec( window.location.href );
            if(results === null) {
                return null;
            } else {
                return results[1];
            }
        };

        /**
         * 브라우저 URL Hash 값 parsing
         * @param {String} name hash key name
         * @return {String} hash  value
         */
        URLUtil.hash = function(name) {
            var hash = window.location.hash.substr(1);
            name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
            var regexS = name+"=([^&]*)";
            var regex = new RegExp( regexS );
            var results = regex.exec( hash );

            if(results === null) {
                return null;
            } else {
                return results[1];
            }
        };

        /**
         * @description utf8 encoding
         * @static
         * @param   {String}    string  문자열
         * @return  {String}
         * @link    http://www.webtoolkit.info/
         * @example
         * var v = URLUtil.encode("가나다라");
         */
        URLUtil.encode = function(string) {
            return escape(_webtoolkitUrl._utf8_encode(string));
        };

        /**
         * @description utf8 decoding
         * @static
         * @param   {String}    string  encode 된 문자열
         * @return  {String}
         * @link    http://www.webtoolkit.info/
         * @example
         * var v = StringUtil.decode("L+uztOuCtOq4sC8-");
         */
        URLUtil.decode = function(string) {
            return escape(_webtoolkitUrl._utf8_decode(string));
        };

        return URLUtil;
    }
);


/**
 *  URL encode / decode
 *  http://www.webtoolkit.info/
 **/
var _webtoolkitUrl = {

    // public method for url encoding
    encode : function (string) {
        return escape(this._utf8_encode(string));
    },

    // public method for url decoding
    decode : function (string) {
        return this._utf8_decode(unescape(string));
    },

    // private method for UTF-8 encoding
    _utf8_encode : function (string) {
        string = string.replace(/\r\n/g,"\n");
        var utftext = "";

        for (var n = 0; n < string.length; n++) {

            var c = string.charCodeAt(n);

            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }

        }

        return utftext;
    },

    // private method for UTF-8 decoding
    _utf8_decode : function (utftext) {
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;

        while ( i < utftext.length ) {

            c = utftext.charCodeAt(i);

            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            }
            else if((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i+1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            }
            else {
                c2 = utftext.charCodeAt(i+1);
                c3 = utftext.charCodeAt(i+2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }

        }
        return string;
    }
};