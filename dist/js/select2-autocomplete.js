!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("Select2")):"function"==typeof define&&define.amd?define("select2-autocomplete",["Select2"],t):"object"==typeof exports?exports["select2-autocomplete"]=t(require("Select2")):e["select2-autocomplete"]=t(e.Select2)}("undefined"!=typeof self?self:this,function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=0;n<e&&!1!==t(n);n++);};var o=function(e,t){var n=function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t}(e);r(n.length,function(r){var o=n[r],i=e[o];t(i,o)})},i=(n(2),null),a={};function u(e){var t={};return a.filterBy&&(t[a.filterBy]=e.term),t}function s(e){var t=null;return t=a.responseData?e[a.responseData]:e,{results:$.map(t,function(e){return e.id=e[a.optionValue],e.text=e[a.optionText],e})}}function l(){i.html($("<option>",{value:"",text:""})),i.select2({tags:a.withTags,minimumInputLength:2,ajax:{url:a.requestUrl,delay:a.ajaxDelay,cache:a.ajaxCache,dataType:"json",data:u,processResults:s},insertTag:function(e,t){e.length>0&&e.unshift(t)}})}var c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i=e,a=t,l()},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var p=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.element=t,this.$element=$(t),this.defaults=n,this.settings=$.extend(!0,{},n)}return f(e,[{key:"setDataSettings",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.$element.data("settings",e)}},{key:"updateSettings",value:function(){var e=this,t=e.$element.data();e.settings={},o(t,function(t,n){e.settings[n]=t})}},{key:"render",value:function(){c(this.$element,this.settings)}}]),e}();!function(e){e.fn.select2Autocomplete=function(t){var n=e.extend({},{withTags:!0,optionValue:"name",optionText:"name",filterBy:"",requestUrl:"",responseData:"",ajaxDelay:250,ajaxCache:!0},t);return this.each(function(){var e=new p(this,n);e.updateSettings(),e.setDataSettings(e.settings),e.render()}),this}}(jQuery)},function(t,n){t.exports=e}])});