/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

__webpack_require__(2);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _module = __webpack_require__(4);

var root = function (root) {
    if ((typeof root === 'undefined' ? 'undefined' : _typeof(root)) === 'object' && (root.self === root || root.global === global) && root) {
        return root;
    }
}(self || global || {});

var $ = function ($) {
    if (typeof $ === 'function') {
        return $;
    } else {
        throw new Error('You must import jQuery');
    }
}(root.jQuery);

$.fn[_module.ModuleName] = function () {
    var args = Array.prototype.slice.call(arguments, 0);
    var method = args[0];
    var options = args.slice(1).length <= 0 ? void 0 : args.slice(1, args.length);
    var isReturnMethod = this.length === 1 && typeof method === 'string' && _module.ModuleReturns.indexOf(method) !== -1;
    var methodRunner = function methodRunner(method, options, uesReturn) {
        var $this = $(this);
        var module = $this.data(_module.ModuleName);
        if (module) {
            if (typeof method === 'string' && !uesReturn) {
                module[method].apply(module, options);
            } else if (typeof method === 'string' && !!uesReturn) {
                return module[method].apply(module, options);
            } else {
                throw new Error('unsupported options!');
            }
        } else {
            throw new Error('You must run first this plugin!');
        }
    };
    if (isReturnMethod) {
        return methodRunner.call(this, method, options, isReturnMethod);
    } else {
        return this.each(function () {
            var $this = $(this);
            var module = $this.data(_module.ModuleName);
            var opts = null;
            if (module) {
                methodRunner.call(this, method, options);
            } else {
                opts = $.extend(true, {}, _module.ModuleDefaults, (typeof method === 'undefined' ? 'undefined' : _typeof(method)) === 'object' && method, (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object' && options);
                module = new _module.Module(this, opts);
                $this.data(_module.ModuleName, module);
                module.init();
            }
        });
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//Define module name here

var ModuleName = 'frz_table';

//Props default value write here
var ModuleDefaults = {
    count: {
        // M版時每次點擊往前往後移動幾格儲存格
        slide: 1, // [number] 
        // M版時一個畫面show幾格儲存格
        show: 4 // [number] 
    },
    // 設定花多久時間移動完成
    speed: .3, // [number] 
    // 每次點擊儲存格時會執行此callback，並帶入所點擊的儲存格jquery物件
    whenClick: function whenClick($element) {
        // console.log($element)
    }
};
//array dictionary
['12/27(三)', '12/28(四)', '12/29(五)', '12/30(六)', '12/31(日)', '01/1(一)', '01/2(二)', '01/3(三)', '01/4(四)', '01/5(四)'];

//Define you want to get function returns from outside of scope
var ModuleReturns = ['methods']; //string


function on_clicked() {
    $('.date').click(function () {
        var f = $(this).data('forth');
        var b = $(this).data('back');
        var selected_row = $('.date[data-forth=' + f + ']');
        var selected_col = $('.date[data-back=' + b + ']');
        console.log('f:' + f + 'b:' + b);

        $(this).removeClass('selected');
        $('.date').removeClass('add_selected_bg');
        $('.date').removeClass('selected');

        $(this).addClass('selected');
        selected_row.addClass('add_selected_bg');
        selected_col.addClass('add_selected_bg');
    });
}; //on click


function mouseover() {
    $(".date").mouseover(function () {
        $('.date').removeClass('mousover_effect');
        $(this).addClass('mousover_effect');
    });
} //hover
on_clicked();
mouseover();

var Module = function () {
    function Module(ele, options) {
        _classCallCheck(this, Module);

        this.ele = ele;
        this.$ele = $(ele);
        this.option = options;
        this.$btnLeft = $('.btn-left');
        this.$btnRight = $('.btn-right');
        this.$selected = $('.selected');
        this.$date = $('.date');
    }

    _createClass(Module, [{
        key: 'init',
        value: function init() {}
        // this.changeColor();
        //run first here

    }, {
        key: 'methods',
        value: function methods() {
            return this;
        }
    }]);

    return Module;
}();

;
exports.ModuleName = ModuleName;
exports.ModuleDefaults = ModuleDefaults;
exports.ModuleReturns = ModuleReturns;
exports.Module = Module;

/***/ })
/******/ ]);