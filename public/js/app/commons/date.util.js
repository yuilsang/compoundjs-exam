/**
 * @fileOverview Date Utility
 * @version 2013.01.27
 * @author yuilsang
 */
define("app/commons/date.util",
    function() {
        /**
         * @name DateUtil
         * @namespace
         * @description 날짜 유틸리티 기능 모음
         */
        var DateUtil = {};

        /**
         * 날짜 객체를 문자열 템플릿으로 치환해주는 기능
         * @static
         * @param {Date} dateObject 날짜 객체
         * @param {String} formatString 날짜를 표시할 문자열 템플릿 <br>{YYYY} : 년도<br>{MN} : 월<br>{DD} : 일<br>{hh} : 24시간<br>{mm} : 분<br>{ss} : 초
         * @return {String} 치환된 문자열
         * @example
         * var dateObject = new Date();
         * DateUtil.toDateString(dateObject, "{YYYY}.{MM}.{DD} {hh}:{mm}");
         */
        DateUtil.toDateString = function(dateObject,formatString) {
            var leadingZeros = function(n, digits) {
                var zero = "";
                n = n.toString();

                if (n.length < digits) {
                    for (var i = 0; i < digits - n.length; i++)
                        zero += '0';
                }
                return zero + n;
            };

            dateObject = new Date(dateObject);
            formatString = formatString.replace("{YYYY}", leadingZeros(dateObject.getFullYear(), 4));
            formatString = formatString.replace("{MM}", leadingZeros(dateObject.getMonth()+1, 2));
            formatString = formatString.replace("{DD}", leadingZeros(dateObject.getDate(), 2));
            formatString = formatString.replace("{hh}", leadingZeros(dateObject.getHours(), 2));
            formatString = formatString.replace("{mm}", leadingZeros(dateObject.getMinutes(), 2));
            formatString = formatString.replace("{ss}", leadingZeros(dateObject.getSeconds(), 2));

            return formatString;
        };

        /**
         * 현재 날짜를 user가 정의한 format 형태로 가져오는 기능
         * @param formatString
         * @return {*}
         */
        DateUtil.currentDateString = function(formatString) {
            var date = new Date();

            formatString = DateUtil.toDateString(date, formatString);

            return formatString;
        };

        return DateUtil;
    }
);











