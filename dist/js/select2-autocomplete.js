(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Select2"));
	else if(typeof define === 'function' && define.amd)
		define("select2-autocomplete", ["Select2"], factory);
	else if(typeof exports === 'object')
		exports["select2-autocomplete"] = factory(require("Select2"));
	else
		root["select2-autocomplete"] = factory(root["Select2"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__repeat__ = __webpack_require__(3);


/**
 * Get object keys.
 * @param Object obj
 */
function getObjectKeys(obj) {
    var ret = [];

    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            ret.push(key);
        }
    }

    return ret;
}

/**
 * Iterate each element of object.
 * @param {Object} obj
 * @param {function} cb
 */
function each(obj, cb) {
    var keys = getObjectKeys(obj);

    Object(__WEBPACK_IMPORTED_MODULE_0__repeat__["a" /* default */])(keys.length, function (index) {
        var key = keys[index];
        var element = obj[key];
        cb(element, key);
    });
}

/* harmony default export */ __webpack_exports__["a"] = (each);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__each__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Autocomplete__ = __webpack_require__(4);
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
            requestUrl: '',
            responseData: '',
            ajaxDelay: 250,
            ajaxCache: true
        }, options);

        /**
         * Main
         */
        this.each(function () {
            var autocomplete = new __WEBPACK_IMPORTED_MODULE_1__Autocomplete__["a" /* default */](this, defaults);
            autocomplete.updateSettings();
            autocomplete.setDataSettings(autocomplete.settings);
            autocomplete.render();
        });

        return this;
    };
})(jQuery);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Repeat
 * @param integer size 
 * @param function cb - callback
 */
var repeat = function repeat() {
    var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    for (var index = 0; index < size; index++) {
        if (cb(index) === false) {
            break;
        }
    }
};

/* harmony default export */ __webpack_exports__["a"] = (repeat);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__each__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__initialize_select2__ = __webpack_require__(5);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var Autocomplete = function () {
    function Autocomplete() {
        var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        _classCallCheck(this, Autocomplete);

        this.element = element;
        this.$element = $(element);
        this.defaults = defaults;
        this.settings = $.extend(true, {}, defaults);
    }

    /**
     * Save settings in Data.
     * @param Object settings - {}
     */


    _createClass(Autocomplete, [{
        key: 'setDataSettings',
        value: function setDataSettings() {
            var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            this.$element.data('settings', settings);
        }

        /**
         * Update settings with data-* attributes
         */

    }, {
        key: 'updateSettings',
        value: function updateSettings() {
            var self = this;
            var data = self.$element.data();

            self.settings = {};
            Object(__WEBPACK_IMPORTED_MODULE_0__each__["a" /* default */])(data, function (v, k) {
                self.settings[k] = v;
            });
        }

        /**
         * 
         */

    }, {
        key: 'render',
        value: function render() {
            Object(__WEBPACK_IMPORTED_MODULE_1__initialize_select2__["a" /* default */])(this.$element, this.settings);
        }
    }]);

    return Autocomplete;
}();

/* harmony default export */ __webpack_exports__["a"] = (Autocomplete);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_select2__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_select2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_select2__);


var $element = null;
var settings = {};

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
        results: $.map(result, function (item) {
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
        insertTag: function insertTag(data, tag) {
            // TODO: improve if it possible
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
function initializeSelect2($el) {
    var sett = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    $element = $el;
    settings = sett;
    render();
}

/* harmony default export */ __webpack_exports__["a"] = (initializeSelect2);

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ })
/******/ ]);
});