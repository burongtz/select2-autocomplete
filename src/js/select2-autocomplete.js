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

(function ($) {
    "use strict";
    $.fn.select2Autocomplete = function (options) {
        var defaults = $.extend({}, {
            withTags: true,
            optionValue: 'name',
            optionText: 'name',
            filterBy: '',
            requestUrl: 'asd',
            responseData: '',
            ajaxDelay: 250,
            ajaxCache: true
        }, options);

        /**
         * 
         * @param {*}  
         */
        function updateSettings($self) {
            var data = $self.data();
            var settings = $.extend(true, {}, defaults);

            _.forEach(data, function (v, k) {
                settings[k] = v;
            });

            $self.data('settings', settings);
            return settings;
        }

        /**
         * 
         * @param {*} settings 
         */
        function createAjaxConfig(settings) {
            var ajaxConfig = {};

            ajaxConfig['url'] = settings.requestUrl;
            ajaxConfig['dataType'] = 'json';
            ajaxConfig['delay'] = settings.ajaxDelay;
            ajaxConfig['cache'] = settings.ajaxCache;

            ajaxConfig['data'] = function (params) {
                var data = {};
                if (settings.filterBy) {
                    data[settings.filterBy] = params.term;
                }
                return data;
            };

            ajaxConfig['processResults'] = function (data) {
                var result = null;

                if (settings.responseData) {
                    result = data[settings.responseData];
                } else {
                    result = data;
                }

                return {
                    results: $.map(result, function (item) {
                        item.id = item[settings.optionValue];
                        item.text = item[settings.optionText];
                        return item;
                    })
                };
            };

            return ajaxConfig;
        }

        /**
         * 
         * @param {*}  
         * @param {*} settings 
         */
        function initializeSelect2($self, settings) {
            // Create an empty option to
            // fire on change when is first time as tag.
            // TODO: improve this.
            $self.html(
                $('<option>', {
                    value: '',
                    text: ''
                })
            );

            $self.select2({
                tags: settings.withTags,
                minimumInputLength: 1, // minimun chars to start request
                ajax: createAjaxConfig(settings)
            });
        }

        /**
         * Main
         */
        this.each(function () {
            var $self = $(this);
            var settings = updateSettings($self);
            initializeSelect2($self, settings);
        });

        return this;
    };
}(jQuery));