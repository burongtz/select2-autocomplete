let $element = null;
let settings = {};

/**
 * 
 * @param {*} params 
 */
function prepareAjaxData(params) {
    var data = {};
    if (settings.filterBy) {
        data[settings.filterBy] = params.term;
    }
    return data;
}

/**
 * 
 * @param {*} data 
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
 * 
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
 * 
 */
function render() {
    $element.html($('<option>', {
        value: '',
        text: ''
    }));

    $element.select2({
        tags: settings.withTags,
        minimumInputLength: 2, // minimun chars to start request
        ajax: createAjaxConf(),
        insertTag: (data, tag) => { // TODO: improve if it possible
            if (data.length > 0) {
                data.unshift(tag);
            }
        }
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