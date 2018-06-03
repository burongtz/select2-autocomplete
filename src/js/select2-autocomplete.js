/**
 * Rqeuired libs:
 *   - https://jquery.com/ and https://select2.org
 *
 * The HTML:
 * 
 * <select class="search"
 *      data-option-value="name"
 *      data-option-text="name"
 *      data-filter-by="name"
 *      data-response-data="data"
 *      data-request-url="https://jsonplaceholder.typicode.com/users"
 *      data-ajax-delay="250"
 *      data-ajax-cache="true"></select>
 *
 * Dictionary:
 * 
 * [data-option-value]
 * This value is a key from JSON response and will attribute value of <option value="___"></option>
 *
 * [data-option-text]
 * This value is a key from JSON response and will text shown in select <option>___</option>
 *
 * [data-request-url]
 * This value is the endpoint to request a JSON
 *
 * [data-filter-by]
 * This is going to be added after url "dominio.com?___=
 * 
 * [data-response-data]
 * Use when records are inside other key { 'data' : {} }
 */

 import each from './helpers/each';
 import Autocomplete from './Autocomplete'

(function ($) {
    "use strict";

    $.fn.select2Autocomplete = function (options) {
        let defaults = $.extend({}, {
            withTags: true,
            optionValue: 'name',
            optionText: 'name',
            filterBy: '',
            requestUrl: '',
            responseData: '',
            ajaxDelay: 250,
            ajaxCache: true
        }, options);

        /**
         * Main
         */
        this.each(function () {
            let autocomplete = new Autocomplete(this, defaults);
            autocomplete.updateSettings();
            autocomplete.setDataSettings(autocomplete.settings);
            autocomplete.render();
        });

        return this;
    };
}(jQuery));