!function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=0;n<t&&!1!==e(n);n++);};var a=function(t,e){var n=function(t){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(n);return e}(t);r(n.length,function(r){var a=n[r],i=t[a];e(i,a)})},i=null,o={};function u(t){var e={};return o.filterBy&&(e[o.filterBy]=t.term),e}function s(t){var e=null;return e=o.responseData?t[o.responseData]:t,{results:$.map(e,function(t){return t.id=t[o.optionValue],t.text=t[o.optionText],t})}}function l(){i.html($("<option>",{value:"",text:""})),i.select2({tags:o.withTags,minimumInputLength:2,ajax:{url:o.requestUrl,delay:o.ajaxDelay,cache:o.ajaxCache,dataType:"json",data:u,processResults:s},insertTag:function(t,e){t.length>0&&t.unshift(e)}})}var c=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i=t,o=e,l()},f=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();var h=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.element=e,this.$element=$(e),this.defaults=n,this.settings=$.extend(!0,{},n)}return f(t,[{key:"setDataSettings",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.$element.data("settings",t)}},{key:"updateSettings",value:function(){var t=this,e=t.$element.data();t.settings={},a(e,function(e,n){t.settings[n]=e})}},{key:"render",value:function(){c(this.$element,this.settings)}}]),t}();!function(t){t.fn.select2Autocomplete=function(e){var n=t.extend({},{withTags:!0,optionValue:"name",optionText:"name",filterBy:"",requestUrl:"",responseData:"",ajaxDelay:250,ajaxCache:!0},e);return this.each(function(){var t=new h(this,n);t.updateSettings(),t.setDataSettings(t.settings),t.render()}),this}}(jQuery)}]);