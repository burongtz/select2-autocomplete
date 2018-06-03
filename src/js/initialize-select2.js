import select2 from 'select2';

let $element = null;
let settings = {};

/**
 * Ajax data add param to filter.
 * @param Object params 
 */
function prepareAjaxData(params) {
    var data = {};
    if (settings.filterBy) {
        data[settings.filterBy] = params.term;
    }
    return data;
}

/**
 * Pocess results.
 * @param JSON data 
 */
function processResults(data) {
    var result = null;

    if (settings.responseData) {
        result = data[settings.responseData];
    } else {
        result = data;
    }

    return {
        results: $.map(result, item => {
            item.id = item[settings.optionValue];
            item.text = item[settings.optionText];
            return item;
        })
    };
}

/**
 * Create configuration for AJAX of Select2.
 */
function createAjaxConf() {
    return {
        url: settings.requestUrl,
        delay: settings.ajaxDelay,
        cache: settings.ajaxCache,
        dataType: 'json',
        data: prepareAjaxData,
        processResults: processResults
    };
}

/**
 * Delete options and add an empty option.
 * TODO: improve, this was added as hack to trigger onchange.
 */
function clearOptions() {
    $element.html($('<option>', {
        value: '',
        text: ''
    }));
}

/**
 * Show "Not Found if empty data".
 * @param JSON data 
 * @param Object tag 
 */
function insertTag(data, tag) {
    if (data.length > 0) {
        data.unshift(tag);
    }
}

/**
 * initialize Select2.
 */
function render() {
    clearOptions();

    $element.select2({
        tags: settings.withTags,
        minimumInputLength: 2, // minimun chars to start request
        ajax: createAjaxConf(),
        insertTag: insertTag
    });
}

/**
 * 
 * @param jQuery  $el $(select-tag)
 * @param Object sett - Settings
 */
function initializeSelect2($el, sett = {}) {
    $element = $el;
    settings = sett;
    render();
}

export default initializeSelect2;