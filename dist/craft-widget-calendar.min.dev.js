window["Calendar"] =
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.min.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.min.js":
/*!**********************!*\
  !*** ./index.min.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst Calendar = __webpack_require__(/*! ./main.js */ \"./main.js\");\n\nwindow.Craft.usePackage(Calendar.default);\n\nmodule.exports = Calendar.default || Calendar;\n\n\n//# sourceURL=webpack://Calendar/./index.min.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_View_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/View.js */ \"./src/View.js\");\n/* harmony import */ var _src_Month_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/Month.js */ \"./src/Month.js\");\n/* harmony import */ var _src_Day_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/Day.js */ \"./src/Day.js\");\n/* harmony import */ var _src_StyleSheet_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/StyleSheet.js */ \"./src/StyleSheet.js\");\n\n\n\n\n\n\nconst Packages = {\n\tView       : _src_View_js__WEBPACK_IMPORTED_MODULE_0__[\"View\"],\n\tMonth      : _src_Month_js__WEBPACK_IMPORTED_MODULE_1__[\"Month\"],\n\tDay        : _src_Day_js__WEBPACK_IMPORTED_MODULE_2__[\"Day\"],\n\tStyleSheet : _src_StyleSheet_js__WEBPACK_IMPORTED_MODULE_3__[\"StyleSheet\"],\n};\n\nPackages.inject = function(Craft){\n\tCraft.Widget = Craft.Widget || {};\n\tif( !Craft.Widget.Calendar ){\n\t\tCraft.Widget.Calendar = Packages;\n\t}\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Packages);\n\n\n\n//# sourceURL=webpack://Calendar/./main.js?");

/***/ }),

/***/ "./src/Day.js":
/*!********************!*\
  !*** ./src/Day.js ***!
  \********************/
/*! exports provided: Day */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Day\", function() { return Day; });\n/* harmony import */ var _craftkit_craft_uikit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @craftkit/craft-uikit */ \"@craftkit/craft-uikit\");\n/* harmony import */ var _craftkit_craft_uikit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_craftkit_craft_uikit__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n/** \n * Day\n * \n * Represent day.\n * \n * @packagename Craft.Widget.Calendar.Day\n * \n * @example\n * \n * // You may want to design your own Day expression.\n * // This is just an example.\n * // Below case, 'has_note' css class will be defined or loaded in your delegate.handleSelectCalendarMonth.\n * \n * class MyDay extends Craft.Widget.Calendar.Day {\n *     style(componentId){\n *         return super.style(componentId) + `\n *             .today { background-color: lightgreen; }\n *             .has_note { background-color: yellowgreen; }\n *         `;\n *     }\n * }\n * \n * // calendar build by MyDay\n * \n * let calendar = new Craft.Widget.Calendar.View({\n *     yyyy     : '2020',\n *     mm       : '07',\n *     delegate : this,\n *     Day      : MyDay,\n * });\n * this.appendView(calendar);\n * \n * // instantiate MyDay directly\n * \n * let day = new MyDay({ \n *     delegate   : this.delegate,\n *     yyyy       : '2020',\n *     mm         : '07',\n *     dd         : '17',\n *     classes    : ['weekday0','prev_month','has_note'],\n *     StyleSheet : this.styleSheet,\n * });\n * \n */\nclass Day extends _craftkit_craft_uikit__WEBPACK_IMPORTED_MODULE_0__[\"UI\"].View {\n\t\n\t/**\n\t * Day constructor\n\t * \n\t * @param {Object} options - options\n\t * @param {String} options.yyyy - year\n\t * @param {String} options.mm - month\n\t * @param {String} options.dd - day\n\t * @param {Object} options.classes - CSS classes to be applied. (CSS will be defined in your Craft.Widget.Calendar.Month[View]#styleSheet.)\n\t */\n\tconstructor(options){\n\t\tsuper();\n\t\tthis.packagename = 'Craft.Widget.Calendar.Day';\n\t\t\n\t\tthis.delegate   = options.delegate;\n\t\tthis.styleSheet = options.StyleSheet;\n\t\t\n\t\tif( Number(options.yyyy) ){\n\t\t\tthis.yyyy = ('0000'+options.yyyy).slice(-4);\n\t\t}else{\n\t\t\tthis.yyyy = moment().format('YYYY');\n\t\t}\n\t\t\n\t\tif( Number(options.mm) ){\n\t\t\tthis.mm = ('00'+options.mm).slice(-2);\n\t\t}else{\n\t\t\tthis.mm = moment().format('MM');\n\t\t}\n\t\t\n\t\tif( Number(options.dd) ){\n\t\t\tthis.dd = ('00'+options.dd).slice(-2);\n\t\t}else{\n\t\t\tthis.dd = moment().format('DD');\n\t\t}\n\t\t\n\t\tthis.iso = this.yyyy + '-' + this.mm + '-' + this.dd;\n\t\tthis.moment = moment(this.iso);\n\t\t\n\t\tthis.UserData = {};\n\t\tthis.classes = options.classes || [];\n\t}\n\t\n\t/** \n\t * click event handler\n\t * @protected\n\t */\n\tclick(){\n\t\tthis.delegate.handleSelectCalendarDay(this);\n\t}\n\t\n\t/** \n\t * style\n\t * @protected\n\t */\n\tstyle(componentId){\n\t\treturn this.styleSheet.day;\n\t}\n\t\n\t/** \n\t * template\n\t * @protected\n\t */\n\ttemplate(componentId){\n\t\treturn `\n\t\t\t<div class=\"root ${this.classes.join(' ')}\" onclick=\"Craft.Core.ComponentStack.get('${componentId}').click();\">\n\t\t\t\t${Number(this.dd)}\n\t\t\t</div>\n\t\t`;\n\t}\n\t\n}\n\n\n//# sourceURL=webpack://Calendar/./src/Day.js?");

/***/ }),

/***/ "./src/Month.js":
/*!**********************!*\
  !*** ./src/Month.js ***!
  \**********************/
/*! exports provided: Month */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Month\", function() { return Month; });\n/* harmony import */ var _craftkit_craft_uikit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @craftkit/craft-uikit */ \"@craftkit/craft-uikit\");\n/* harmony import */ var _craftkit_craft_uikit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_craftkit_craft_uikit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Day_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Day.js */ \"./src/Day.js\");\n\n\n\n\n\n/** \n * Month\n * \n * Collect Days and its view.\n * To fill up 6 week container, This object also has a part of days in prev month and next month.\n * \n * @packagename Craft.Widget.Calendar.Month\n * \n * @example\n * \n * let month = new Month({ \n *     yyyy     : '2020', \n *     mm       : '01',\n *     delegate : this.delegate,\n *     Day      : Craft.Widget.Calendar.Day,\n * });\n * \n * var day = month.index['2020-01-15'];\n * day.classes.push('today');\n * day.renderView();\n * \n */\nclass Month extends _craftkit_craft_uikit__WEBPACK_IMPORTED_MODULE_0__[\"UI\"].View {\n\t\n\t/**\n\t * Month constructor\n\t * \n\t * @param {Object} options - options\n\t * @param {String} options.yyyy - year\n\t * @param {String} options.mm - month\n\t * @param {Object} options.delegate - Calendar event handler\n\t * @param {Craft.Widget.Calendar.Day} options.Day - Day class\n\t * @param {Craft.Widget.Calendar.StyleSheet} options.StyleSheet - StyleSheet class\n\t */\n\tconstructor(options){\n\t\tsuper();\n\t\tthis.packagename = 'Craft.Widget.Calendar.Month';\n\t\t\n\t\tthis.delegate   = options.delegate;\n\t\tthis.dayClass   = options.Day;\n\t\tthis.styleSheet = options.StyleSheet;\n\t\t\n\t\tif( Number(options.yyyy) ){\n\t\t\tthis.yyyy = ('0000'+options.yyyy).slice(-4);\n\t\t}else{\n\t\t\tthis.yyyy = moment().format('YYYY');\n\t\t}\n\t\t\n\t\tif( Number(options.mm) ){\n\t\t\tthis.mm = ('00'+options.mm).slice(-2);\n\t\t}else{\n\t\t\tthis.mm = moment().format('MM');\n\t\t}\n\t\t\n\t\tthis.dd = '01';\n\t\t\n\t\tthis.iso = this.yyyy + '-' + this.mm;\n\t\t\n\t\tthis.prev_days = []; // array of Day object to fill the first week\n\t\tthis.this_days = []; // array of Day object\n\t\tthis.next_days = []; // array of Day object to fill the last week\n\t\tthis.days      = []; // all of Day objects\n\t\tthis.index     = {}; // iso8601 : Day object\n\t\t\n\t\tthis.this_month = '';\n\t\tthis.prev_month = '';\n\t\tthis.next_month = '';\n\t\t\n\t\tthis.today = moment();\n\t\t\n\t\tthis.build();\n\t}\n\t\n\t/** \n\t * Build Days in this month. (internal utility called from the constructor)\n\t * \n\t * @protected\n\t */\n\tbuild(){\n\t\tthis.this_month = new moment( this.iso + '-' + this.dd );\n\t\tthis.prev_month = this.this_month.clone().subtract(1,'month');\n\t\tthis.next_month = this.this_month.clone().add(1,'month');\n\t\t\n\t\t// prev month\n\t\tlet prev_month_last_day  = this.prev_month.endOf('month').date();\n\t\tlet prev_month_rest_days = this.prev_month.endOf('month').day() === 6 ? 0 : this.prev_month.endOf('month').day() + 1;\n\t\tlet prev_month_month     = this.prev_month.format('MM');\n\t\tlet prev_month_year      = this.prev_month.format('YYYY');\n\t\t\n\t\tlet prev_month_weekday_cursor = 0;\n\t\tfor( let i=prev_month_rest_days; i>=1; i-- ){\n\t\t\tlet weekday = prev_month_weekday_cursor  % 7;\n\t\t\tlet day = new this.dayClass({\n\t\t\t\tdelegate   : this.delegate,\n\t\t\t\tyyyy       : prev_month_year,\n\t\t\t\tmm         : prev_month_month,\n\t\t\t\tdd         : prev_month_last_day - i + 1,\n\t\t\t\tclasses    : ['weekday'+weekday,'prev_month'],\n\t\t\t\tStyleSheet : this.styleSheet,\n\t\t\t});\n\t\t\tday.loadView();\n\t\t\tthis.prev_days.push(day);\n\t\t\tthis.days.push(day);\n\t\t\tthis.index[day.iso] = day;\n\t\t\tprev_month_weekday_cursor++;\n\t\t}\n\t\t\n\t\t// this month\n\t\tlet this_month_year  = this.this_month.year();\n\t\tlet this_month_month = this.this_month.month() + 1;\n\t\t\n\t\tlet weekday_cursor = this.this_month.weekday();\n\t\tlet today_iso = this.today.format('YYYY-MM-DD');\n\t\t\n\t\tfor( let i=0; i<this.this_month.daysInMonth(); i++ ){\n\t\t\tlet weekday = weekday_cursor % 7;\n\t\t\tlet day = new this.dayClass({\n\t\t\t\tdelegate   : this.delegate,\n\t\t\t\tyyyy       : this_month_year,\n\t\t\t\tmm         : this_month_month,\n\t\t\t\tdd         : i + 1,\n\t\t\t\tclasses    : ['weekday'+weekday,'this_month'],\n\t\t\t\tStyleSheet : this.styleSheet,\n\t\t\t});\n\t\t\tif( day.iso == today_iso ){\n\t\t\t\tday.classes.push('today');\n\t\t\t}\n\t\t\tday.loadView();\n\t\t\tthis.this_days.push(day);\n\t\t\tthis.days.push(day);\n\t\t\tthis.index[day.iso] = day;\n\t\t\tweekday_cursor++;\n\t\t}\n\t\t\n\t\t// next month\n\t\tlet next_month_month     = this.next_month.month() + 1;\n\t\tlet next_month_year      = this.next_month.year();\n\t\tlet next_month_rest_days = 42 - (prev_month_rest_days + this.this_month.endOf('month').date());\n\t\t\n\t\tfor( let i=0; i<next_month_rest_days; i++ ){\n\t\t\tlet weekday = weekday_cursor % 7;\n\t\t\tlet day = new this.dayClass({\n\t\t\t\tdelegate   : this.delegate,\n\t\t\t\tyyyy       : next_month_year,\n\t\t\t\tmm         : next_month_month,\n\t\t\t\tdd         : i + 1,\n\t\t\t\tclasses    : ['weekday'+weekday,'next_month'],\n\t\t\t\tStyleSheet : this.styleSheet,\n\t\t\t});\n\t\t\tday.loadView();\n\t\t\tthis.next_days.push(day);\n\t\t\tthis.days.push(day);\n\t\t\tthis.index[day.iso] = day;\n\t\t\tweekday_cursor++;\n\t\t}\n\t}\n\t\n\t/** \n\t * Lifecycle method : viewDidLoad\n\t * \n\t * deploy Days\n\t * \n\t * @protected\n\t */\n\tviewDidLoad(callback){\n\t\tthis.days.map( (day) => this.appendView(day) );\n\t}\n\t\n\t/** \n\t * style\n\t * @protected\n\t */\n\tstyle(componentId){\n\t\treturn this.styleSheet.month;\n\t}\n\t\n\t/** \n\t * template\n\t * @protected\n\t */\n\ttemplate(componentId){\n\t\treturn `<div class=\"root\"></div>`;\n\t}\n}\n\n\n//# sourceURL=webpack://Calendar/./src/Month.js?");

/***/ }),

/***/ "./src/StyleSheet.js":
/*!***************************!*\
  !*** ./src/StyleSheet.js ***!
  \***************************/
/*! exports provided: StyleSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyleSheet\", function() { return StyleSheet; });\n\n/** \n * default CSS\n * \n * @namespace Craft.Widget.Calendar.StyleSheet\n * @packagename Craft.Widget.Calendar.StyleSheet\n */\nvar StyleSheet = {\n\t\n\t/**\n\t * CSS for layouting Header, Month and Navi\n\t * @protected\n\t */\n\tcalendar : `\n\t\t* { box-sizing:border-box; margin:0; padding:0; }\n\t\t:host {}\n\t\t.root {\n\t\t\tbox-sizing: border-box;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tbackground-color: #fff;\n\t\t}\n\t\t.header { width:100%; margin-left:auto; margin-right:auto; }\n\t\t.month { width:100%; margin-left:auto; margin-right:auto; }\n\t\t.navi { width:100%; margin-left:auto; margin-right:auto; display:flex; }\n\t\t.prev { width:100%; cursor:pointer; text-align:right;  }\n\t\t.next { width:100%; cursor:pointer; margin-left:auto; text-align:left; }\n\t`,\n\t\n\t/**\n\t * CSS for Header object\n\t * @protected\n\t */\n\theader : `\n\t\t.root {}\n\t`,\n\t\n\t/**\n\t * CSS for Month object\n\t * @protected\n\t */\n\tmonth : `\n\t\t* { box-sizing:border-box; margin:0; padding:0; }\n\t\t:host {\n\t\t\twidth: 100%;\n\t\t}\n\t\t.root {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: row;\n\t\t\tflex-wrap: wrap;\n\t\t}\n\t`,\n\t\n\t/**\n\t * CSS for Day object\n\t * @protected\n\t */\n\tday : `\n\t\t* { box-sizing:border-box; margin:0; padding:0; }\n\t\t:host {\n\t\t\twidth: 14.28%;\n\t\t}\n\t\t.root {\n\t\t\ttext-align: center;\n\t\t\tcursor: pointer;\n\t\t}\n\t\t.root:hover {\n\t\t\tbackground-color: yellowgreen;\n\t\t}\n\t\t\n\t\t/* weekday(sunday-saturday) should be applied at first */\n\t\t\n\t\t/* sunday */\n\t\t.weekday0 {\n\t\t\tcolor: #f00;\n\t\t}\n\t\t/* monday */\n\t\t.weekday1 {\n\t\t\tcolor: #555;\n\t\t}\n\t\t/* tuesday */\n\t\t.weekday2 {\n\t\t\tcolor: #555;\n\t\t}\n\t\t/* wednesday */\n\t\t.weekday3 {\n\t\t\tcolor: #555;\n\t\t}\n\t\t/* thursday */\n\t\t.weekday4 {\n\t\t\tcolor: #555;\n\t\t}\n\t\t/* friday */\n\t\t.weekday5 {\n\t\t\tcolor: #555;\n\t\t}\n\t\t/* saturday */\n\t\t.weekday6 {\n\t\t\tcolor: #00f;\n\t\t}\n\t\t\n\t\t/* whether day is in this month or not */\n\t\t.prev_month {\n\t\t\tpointer-events: none;\n\t\t\topacity: 0.5;\n\t\t}\n\t\t.this_month {\n\t\t\tpointer-events: all;\n\t\t}\n\t\t.next_month {\n\t\t\tpointer-events: none;\n\t\t\topacity: 0.5;\n\t\t}\n\t\t\n\t\t/* mark today */\n\t\t.today {\n\t\t\tcolor: #0f0;\n\t\t}\n\t`\n\t\n};\n\n\n//# sourceURL=webpack://Calendar/./src/StyleSheet.js?");

/***/ }),

/***/ "./src/View.js":
/*!*********************!*\
  !*** ./src/View.js ***!
  \*********************/
/*! exports provided: View */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"View\", function() { return View; });\n/* harmony import */ var _craftkit_craft_uikit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @craftkit/craft-uikit */ \"@craftkit/craft-uikit\");\n/* harmony import */ var _craftkit_craft_uikit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_craftkit_craft_uikit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Month_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Month.js */ \"./src/Month.js\");\n/* harmony import */ var _Day_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Day.js */ \"./src/Day.js\");\n/* harmony import */ var _StyleSheet_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StyleSheet.js */ \"./src/StyleSheet.js\");\n\n\n\n\n\n\n\n/** \n * View\n * \n * View is a Facade for calendar elements.\n * \n * And also, View and its sub-class has responsibility for layouting Calendar and handling event like: \"go to next month\".\n * \n * @packagename Craft.Widget.Calendar.View\n * \n * @example\n * \n * // sample of Calendar consumer:\n * \n * class Page extends Craft.UI.DefaultRootViewController {\n *     \n *     viewDidLoad(callback){\n *         this.calendar = new Craft.Widget.Calendar.View({\n *             yyyy     : '2020',\n *             mm       : '07',\n *             delegate : this,\n *             Day      : Craft.Widget.Calendar.Day,\n *         });\n *         this.appendView(this.calendar);\n *     }\n *     \n *     loadCalendarMetaDataFor(yyyy,mm,callback){\n *         callback({ '2020-07-15' : {class:'holiday'} });\n *     }\n *     \n *     handleSelectCalendarMonth(month){\n *         loadCalendarMetaDataFor(month.yyyy,month.mm, (meta) => {\n *             Object.keys(meta).forEach( iso => {\n *                 let day = this.calendar.month.index[iso] // get Day object (skip checking Day existence)\n *                 day.classes.push(meta[iso].class);       // if hit, the meta data should have class 'holiday'\n *                 day.renderView();                        // ok, lets update view\n *             });\n *         });\n *     }\n *     \n *     handleSelectCalendarDay(day){\n *         window.location = `//${day.iso}.html`; // go to selected page\n *     }\n * }\n * \n * // sample of customized View\n * \n * class MyCalendarView extends Craft.Widget.Calendar.View {\n *     viewDidLoad(callback){\n *         this.appendView({ target:this.shadow.getElementById('navi'), component:new MyPrev({delegate:this}) });\n *         this.appendView({ target:this.shadow.getElementById('navi'), component:new MyNext({delegate:this}) });\n *         super.viewDidLoad(callback);\n *     }\n *     updateHeader(){\n *         this.shadow.getElementById('header').innerHTML = this.month.yyyy + '/' + this.month.mm; // YYYY/MM instead of default YYYY-MM\n *     }\n *     template(componentId){\n *         return `\n *             <div class=\"root\">\n *                 <div id=\"header\" class=\"header\"></div>\n *                 <div id=\"month\" class=\"month\"></div>\n *                 <div id=\"navi\" class=\"navi\"></div>\n *             </div>\n *         `;\n *     }\n * }\n * \n * class MyPrev extends Craft.UI.View {\n *     constructor(options){\n *         super();\n *         this.delegate = options.delegate;\n *     }\n *     template(componentId){\n *         return `\n *             <div class=\"root\" onclick=\"${componentId}.delegate.prev();\"> ＜${componentId}.month.prev_month.format('MM') </div>\n *         `;\n *     }\n * }\n * \n * class MyNext extends Craft.UI.View {\n *     template(componentId){\n *         return `\n *             <div class=\"root\" onclick=\"${componentId}.delegate.next();\"> ${componentId}.month.next_month.format('MM')＞ </div>\n *         `;\n *     }\n * }\n * \n */\nclass View extends _craftkit_craft_uikit__WEBPACK_IMPORTED_MODULE_0__[\"UI\"].View {\n\t\n\t/**\n\t * Calendar constructor\n\t * \n\t * @param {Object} options - options\n\t * @param {String} options.yyyy - Year\n\t * @param {String} options.mm - Month\n\t * @param {Object} options.delegate - Calendar event handler\n\t * @param {Craft.Widget.Calendar.Day} options.Day - Day class (optional)\n\t */\n\tconstructor(options){\n\t\tsuper();\n\t\tthis.packagename = 'Craft.Widget.Calendar.View';\n\t\tif( !options ){ options = {}; }\n\t\t\n\t\tthis.delegate   = options.delegate;\n\t\tthis.dayClass   = options.Day || _Day_js__WEBPACK_IMPORTED_MODULE_2__[\"Day\"];\n\t\tthis.styleSheet = options.StyleSheet || _StyleSheet_js__WEBPACK_IMPORTED_MODULE_3__[\"StyleSheet\"];\n\t\t\n\t\tif( Number(options.yyyy) ){\n\t\t\tthis.yyyy = ('0000'+String(options.yyyy)).slice(-4);\n\t\t}else{\n\t\t\tthis.yyyy = moment().format('YYYY');\n\t\t}\n\t\t\n\t\tif( Number(options.mm) ){\n\t\t\tthis.mm = ('00'+String(options.mm)).slice(-2);\n\t\t}else{\n\t\t\tthis.mm = moment().format('MM');\n\t\t}\n\t\t\n\t\tthis.index = {}; // { YYYY-MM : Month object }\n\t\t\n\t\tlet this_month = new _Month_js__WEBPACK_IMPORTED_MODULE_1__[\"Month\"]({\n\t\t\tdelegate   : this.delegate,\n\t\t\tyyyy       : this.yyyy,\n\t\t\tmm         : this.mm,\n\t\t\tDay        : this.dayClass,\n\t\t\tStyleSheet : this.styleSheet,\n\t\t});\n\t\tthis.month = this_month;\n\t\tthis.index[ this.yyyy + '-' + this.mm ] = this.month;\n\t}\n\t\n\t/**\n\t * Lifecycle method : viewDidLoad\n\t * \n\t * Create Month.\n\t * \n\t * @protected\n\t */\n\tviewDidLoad(callback){\n\t\tthis.delegate.handleSelectCalendarMonth(this.index[ this.yyyy + '-' + this.mm ]);\n\t\t\n\t\tthis.appendView({\n\t\t\ttarget    : this.shadow.getElementById('month'),\n\t\t\tcomponent : this.index[ this.yyyy + '-' + this.mm ]\n\t\t});\n\t\t\n\t\tthis.updateHeader();\n\t\t\n\t\tif(callback){ callback(); }\n\t}\n\t\n\t/**\n\t * move to previous month\n\t * @public\n\t */\n\tprev(){\n\t\tlet prev_month = this.month.prev_month;\n\t\tlet this_month = '';\n\t\tlet prev_month_yyyy = prev_month.format('YYYY');\n\t\tlet prev_month_mm   = prev_month.format('MM');\n\t\tlet prev_month_yyyymm = prev_month_yyyy + '-' + prev_month_mm\n\t\tif( this.index[ prev_month_yyyymm ] ){\n\t\t\tthis_month = this.index[ prev_month_yyyymm ];\n\t\t}else{\n\t\t\tthis_month = new _Month_js__WEBPACK_IMPORTED_MODULE_1__[\"Month\"]({\n\t\t\t\tdelegate   : this.delegate,\n\t\t\t\tyyyy       : prev_month_yyyy,\n\t\t\t\tmm         : prev_month_mm,\n\t\t\t\tDay        : this.dayClass,\n\t\t\t\tStyleSheet : this.styleSheet,\n\t\t\t});\n\t\t\tthis.index[ prev_month_yyyymm ] = this_month;\n\t\t}\n\t\tthis.removeView(this.month);\n\t\t\n\t\tthis.delegate.handleSelectCalendarMonth(this_month);\n\t\t\n\t\tthis.month = this_month;\n\t\tthis.appendView({\n\t\t\ttarget    : this.shadow.getElementById('month'),\n\t\t\tcomponent : this.month\n\t\t});\n\t\t\n\t\tthis.updateHeader();\n\t}\n\t\n\t/**\n\t * move to next month\n\t * @public\n\t */\n\tnext(){\n\t\tlet next_month = this.month.next_month;\n\t\tlet this_month = '';\n\t\tlet next_month_yyyy = next_month.format('YYYY');\n\t\tlet next_month_mm   = next_month.format('MM');\n\t\tlet next_month_yyyymm = next_month_yyyy + '-' + next_month_mm\n\t\tif( this.index[ next_month_yyyymm ] ){\n\t\t\tthis_month = this.index[ next_month_yyyymm ];\n\t\t}else{\n\t\t\tthis_month = new _Month_js__WEBPACK_IMPORTED_MODULE_1__[\"Month\"]({\n\t\t\t\tdelegate   : this.delegate,\n\t\t\t\tyyyy       : next_month_yyyy,\n\t\t\t\tmm         : next_month_mm,\n\t\t\t\tDay        : this.dayClass,\n\t\t\t\tStyleSheet : this.styleSheet,\n\t\t\t});\n\t\t\tthis.index[ next_month_yyyymm ] = this_month;\n\t\t}\n\t\tthis.removeView(this.month);\n\t\t\n\t\tthis.delegate.handleSelectCalendarMonth(this_month);\n\t\t\n\t\tthis.month = this_month;\n\t\tthis.appendView({\n\t\t\ttarget    : this.shadow.getElementById('month'),\n\t\t\tcomponent : this.month\n\t\t});\n\t\tthis.delegate.handleSelectCalendarMonth(this_month);\n\t\t\n\t\tthis.updateHeader();\n\t}\n\t\n\t/** \n\t * update Header\n\t * \n\t * Should be called just after you change month.\n\t * This is default behavior. To implement your own header design, override this method.\n\t * \n\t * @public\n\t */\n\tupdateHeader(){\n\t\tthis.shadow.getElementById('header').innerHTML = this.month.iso;\n\t}\n\t\n\t/** \n\t * style\n\t * @protected\n\t */\n\tstyle(componentId){\n\t\treturn this.styleSheet.calendar;\n\t}\n\t\n\t/** \n\t * template\n\t * @protected\n\t */\n\ttemplate(componentId){\n\t\treturn `\n\t\t\t<div class=\"root\">\n\t\t\t\t<div id=\"header\" class=\"header\"></div>\n\t\t\t\t<div id=\"month\" class=\"month\"></div>\n\t\t\t\t<div id=\"navi\" class=\"navi\">\n\t\t\t\t\t<div id=\"prev\" class=\"prev\" onclick=\"Craft.Core.ComponentStack.get('${componentId}').prev();\"> ← </div>\n\t\t\t\t\t<div id=\"next\" class=\"next\" onclick=\"Craft.Core.ComponentStack.get('${componentId}').next();\"> → </div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t`;\n\t}\n\n}\n\n\n//# sourceURL=webpack://Calendar/./src/View.js?");

/***/ }),

/***/ "@craftkit/craft-uikit":
/*!************************!*\
  !*** external "Craft" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = window[\"Craft\"]; }());\n\n//# sourceURL=webpack://Calendar/external_%22Craft%22?");

/***/ })

/******/ });