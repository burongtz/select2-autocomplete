import each from './each';

class Autocomplete {
    constructor(element = null, defaults = null) {
        this.element = element;
        this.$element = $(element);
        this.defaults = defaults;
        this.settings = $.extend(true, {}, defaults);
    }

    /**
     * Save settings in Data.
     * @param Object settings - {}
     */
    setDataSettings(settings = {}) {
        this.$element
            .data('settings', settings);
    }

    /**
     * 
     */
    updateSettings() {
        let self = this;
        const data = self.$element.data();

        self.settings = {};
        each(data, (v, k) => {
            self.settings[k] = v;
        });
    }

    /**
     * 
     */
    getAjaxConfig() {
        let self = this;
        let ajaxConfig = {};

        ajaxConfig['url'] = self.settings.requestUrl;
        ajaxConfig['dataType'] = 'json';
        ajaxConfig['delay'] = self.settings.ajaxDelay;
        ajaxConfig['cache'] = self.settings.ajaxCache;

        ajaxConfig['data'] = params => {
            var data = {};
            if (self.settings.filterBy) {
                data[self.settings.filterBy] = params.term;
            }
            return data;
        };

        ajaxConfig['processResults'] = data => {
            var result = null;

            if (self.settings.responseData) {
                result = data[self.settings.responseData];
            } else {
                result = data;
            }

            return {
                results: $.map(result, item => {
                    item.id = item[self.settings.optionValue];
                    item.text = item[self.settings.optionText];
                    return item;
                })
            };
        };

        return ajaxConfig;
    }

    /**
     * 
     */
    render() {
        let self = this;
        const $emptyOption = $('<option>', {
            value: '',
            text: ''
        });

        self.$element
            .html($emptyOption);

        self.$element
            .select2({
                tags: self.settings.withTags,
                minimumInputLength: 2, // minimun chars to start request
                ajax: self.getAjaxConfig(),
                insertTag: (data, tag) => { // TODO: improve if it possible
                    if (data.length > 0) {
                        data.unshift(tag);
                    }
                }
            });
    }
}

export default Autocomplete;