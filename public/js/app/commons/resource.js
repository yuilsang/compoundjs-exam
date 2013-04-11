/**
 * @fileOverview jKit Resource Class 정의 파일
 * @version 2013.01.18
 */
define(
    [
        "module",
        "app/common/view"
    ],
    function (
        module,
        View
        ) {

    /** @class */
    var Resource = Class.$extend(/** @lends Resource.prototype */{

        $init: function(xml) {
            this.xml = xml;
            this.htmls = {};

            this.init();
        },

        // initalize
        init: function() {
            this._parseResourceXML();
        },

        // parse XML
        _parseResourceXML: function(){
            var resource = this.xml.getElementsByTagName("resource")[0];
            var markup = resource.getElementsByTagName("markup")[0];
            var html = markup.getElementsByTagName("html");

            for(var i=0;i<html.length;i++) {
                var id = html[i].getAttribute("id");
                var value = html[i].text || html[i].textContent;

                this.htmls[id] = $.trim(value);
            }
        },

        // jQuery
        $: function(id) {
            return $(this.htmls[id]);
        },

        /**
         * html 가져오기
         * @param {String} id
         * @param {Object=} data
         * @return {String} html string
         */
        html: function(id, data) {
            var html = this.htmls[id];

            if(!data) return html;
            if(data.length) { // data array 인 경우
                var htmlstr = [];
                for(var i=0;i<data.length;i++) {
                    if(data[i]) {
                        htmlstr.push($.tmpl(html, data[i]).outerHTML());
                    }
                }
                html = htmlstr.join("");
            } else { // data 가 object 인 경우
                html = $.tmpl(html, data).outerHTML();
            }

            return html;
        },

        lang: function() {

        }
    });

    // requirejs xml load plugin
    Resource.load = function(name, requ, load, config){
        if(!window.XMLHttpRequest) {
            window.XMLHttpRequest = function (){
                try{ return new ActiveXObject("Msxml2.XMLHTTP.6.0"); } catch(e){}
                try{ return new ActiveXObject("Msxml2.XMLHTTP.3.0"); } catch(e){}
                try{ return new ActiveXObject("Microsoft.XMLHTTP"); } catch(e){}
                throw new Error("No AJAX support.");
            };
        }

        var req = new window.XMLHttpRequest();
        req.onreadystatechange = function(){
            if(req.readyState == 4){
                if(req.status!=200) throw new Error("Load "+requ.toUrl(name)+" but get status "+req.status);
                load(new Resource(req.responseXML));
            }
        };

        req.open('GET', requ.toUrl(name));
        req.send(null);
    };

    return Resource;
});