import each from './helpers/each';
import initializeSelect2 from './initialize-select2';

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
     * Update settings with data-* attributes
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
     * Load lib Select2
     */
    render() {
       initializeSelect2(this.$element, this.settings);
    }
}

export default Autocomplete;