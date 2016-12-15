(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["DuibaDesign"] = factory();
	else
		root["DuibaDesign"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Alert = __webpack_require__(1);
	
	var _Alert2 = _interopRequireDefault(_Alert);
	
	var _Button = __webpack_require__(8);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Modal = __webpack_require__(13);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _MessageBox = __webpack_require__(39);
	
	var _MessageBox2 = _interopRequireDefault(_MessageBox);
	
	var _Switch = __webpack_require__(42);
	
	var _Switch2 = _interopRequireDefault(_Switch);
	
	var _Pagination = __webpack_require__(47);
	
	var _Pagination2 = _interopRequireDefault(_Pagination);
	
	var _Tooltip = __webpack_require__(52);
	
	var _Tooltip2 = _interopRequireDefault(_Tooltip);
	
	var _Tabs = __webpack_require__(58);
	
	var _Tabs2 = _interopRequireDefault(_Tabs);
	
	var _Tab = __webpack_require__(63);
	
	var _Tab2 = _interopRequireDefault(_Tab);
	
	var _Breadcrumb = __webpack_require__(66);
	
	var _Breadcrumb2 = _interopRequireDefault(_Breadcrumb);
	
	var _BreadcrumbItem = __webpack_require__(69);
	
	var _BreadcrumbItem2 = _interopRequireDefault(_BreadcrumbItem);
	
	var _Checkbox = __webpack_require__(74);
	
	var _Checkbox2 = _interopRequireDefault(_Checkbox);
	
	var _CheckboxGroup = __webpack_require__(79);
	
	var _CheckboxGroup2 = _interopRequireDefault(_CheckboxGroup);
	
	var _Datepicker = __webpack_require__(82);
	
	var _Datepicker2 = _interopRequireDefault(_Datepicker);
	
	var _Timepicker = __webpack_require__(142);
	
	var _Timepicker2 = _interopRequireDefault(_Timepicker);
	
	var _Daterangepicker = __webpack_require__(151);
	
	var _Daterangepicker2 = _interopRequireDefault(_Daterangepicker);
	
	var _Select = __webpack_require__(156);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	var _FileUpload = __webpack_require__(161);
	
	var _FileUpload2 = _interopRequireDefault(_FileUpload);
	
	var _ImageUpload = __webpack_require__(164);
	
	var _ImageUpload2 = _interopRequireDefault(_ImageUpload);
	
	var _MultiImageUpload = __webpack_require__(170);
	
	var _MultiImageUpload2 = _interopRequireDefault(_MultiImageUpload);
	
	var _RichEditor = __webpack_require__(175);
	
	var _RichEditor2 = _interopRequireDefault(_RichEditor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = {
	  Alert: _Alert2.default,
	  Button: _Button2.default,
	  Modal: _Modal2.default,
	  MessageBox: _MessageBox2.default,
	  Switch: _Switch2.default,
	  Pagination: _Pagination2.default,
	  Tooltip: _Tooltip2.default,
	  Tabs: _Tabs2.default,
	  Tab: _Tab2.default,
	  Breadcrumb: _Breadcrumb2.default,
	  BreadcrumbItem: _BreadcrumbItem2.default,
	  Checkbox: _Checkbox2.default,
	  CheckboxGroup: _CheckboxGroup2.default,
	  Datepicker: _Datepicker2.default,
	  Timepicker: _Timepicker2.default,
	  Daterangepicker: _Daterangepicker2.default,
	  Select: _Select2.default,
	  FileUpload: _FileUpload2.default,
	  ImageUpload: _ImageUpload2.default,
	  MultiImageUpload: _MultiImageUpload2.default,
	  RichEditor: _RichEditor2.default
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(2)
	__vue_script__ = __webpack_require__(6)
	__vue_template__ = __webpack_require__(7)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/cookfront/Sites/workspace/study/duiba-design/src/components/Alert.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.21.0/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/style-rewriter.js?id=_v-3b34dc30&file=Alert.vue!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/selector.js?type=style&index=0!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./Alert.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.21.0/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/style-rewriter.js?id=_v-3b34dc30&file=Alert.vue!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/selector.js?type=style&index=0!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./Alert.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".d-alert {\n  border: 1px solid #d2f0f0;\n  line-height: 1.5;\n  background: #f6fdfd;\n  position: relative;\n  padding: 6px 30px 6px 15px;\n  box-sizing: border-box;\n  font-size: 14px;\n}\n.d-alert .close {\n  position: absolute;\n  right: 10px;\n  cursor: pointer;\n  font-size: 12px;\n  color: #d8d8d8;\n}\n.d-alert .close:hover {\n  color: #444;\n}\n.d-alert a {\n  color: #29b6b0;\n  text-decoration: underline;\n}\n", "", {"version":3,"sources":["/./src/components/Alert.vue"],"names":[],"mappings":"AAAA;EACE,0BAA0B;EAC1B,iBAAiB;EACjB,oBAAoB;EACpB,mBAAmB;EACnB,2BAA2B;EAC3B,uBAAuB;EACvB,gBAAgB;CACjB;AACD;EACE,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;EAChB,gBAAgB;EAChB,eAAe;CAChB;AACD;EACE,YAAY;CACb;AACD;EACE,eAAe;EACf,2BAA2B;CAC5B","file":"Alert.vue","sourcesContent":[".d-alert {\n  border: 1px solid #d2f0f0;\n  line-height: 1.5;\n  background: #f6fdfd;\n  position: relative;\n  padding: 6px 30px 6px 15px;\n  box-sizing: border-box;\n  font-size: 14px;\n}\n.d-alert .close {\n  position: absolute;\n  right: 10px;\n  cursor: pointer;\n  font-size: 12px;\n  color: #d8d8d8;\n}\n.d-alert .close:hover {\n  color: #444;\n}\n.d-alert a {\n  color: #29b6b0;\n  text-decoration: underline;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div v-show="show" class="d-alert">
	//     <i v-show="closable" class="iconhandle close" @click="close">&#xe609;</i>
	//     <slot></slot>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  name: 'd-alert',
	
	  props: {
	    closable: {
	      type: Boolean,
	      default: true
	    },
	    show: {
	      type: Boolean,
	      default: true,
	      twoWay: true
	    },
	    type: {
	      type: String,
	      default: 'info'
	    }
	  },
	  methods: {
	    close: function close() {
	      this.show = false;
	    }
	  }
	};
	// </script>
	
	// <style lang="less">
	// .d-alert {
	//   border: 1px solid #d2f0f0;
	//   line-height: 1.5;
	//   background: #f6fdfd;
	//   position: relative;
	//   padding: 6px 30px 6px 15px;
	//   box-sizing: border-box;
	//   font-size: 14px;
	
	//   .close {
	//     position: absolute;
	//     right: 10px;
	//     cursor: pointer;
	//     font-size: 12px;
	//     color: #d8d8d8;
	
	//     &:hover {
	//       color: #444;
	//     }
	//   }
	
	//   a {
	//     color: #29b6b0;
	//     text-decoration: underline;
	//   }
	// }
	// </style>
	
	/* generated by vue-loader */

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "\n<div v-show=\"show\" class=\"d-alert\">\n  <i v-show=\"closable\" class=\"iconhandle close\" @click=\"close\">&#xe609;</i>\n  <slot></slot>\n</div>\n";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(9)
	__vue_script__ = __webpack_require__(11)
	__vue_template__ = __webpack_require__(12)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/cookfront/Sites/workspace/study/duiba-design/src/components/Button.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(10);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.21.0/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/style-rewriter.js?id=_v-5e19ebe4&file=Button.vue!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/selector.js?type=style&index=0!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./Button.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.21.0/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/style-rewriter.js?id=_v-5e19ebe4&file=Button.vue!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/selector.js?type=style&index=0!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./Button.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".d-button {\n  display: inline-block;\n  border-radius: 2px;\n  line-height: 1;\n  height: 30px;\n  font-size: 14px;\n  padding: 0 10px;\n  cursor: pointer;\n  outline: none;\n  white-space: nowrap;\n}\n.d-button + .d-button {\n  margin-left: 15px;\n}\n.d-button.is-disabled {\n  cursor: not-allowed;\n  background: #f4f4f4;\n  border-color: #ececec;\n  color: #d8d8d8;\n}\n.d-button.is-disabled:hover {\n  border-color: #ececec;\n  background: #f4f4f4;\n  color: #d8d8d8;\n}\n.d-button .iconhandle {\n  font-size: 14px;\n}\n.d-button--default {\n  background: #fff;\n  color: #444;\n  border: 1px solid #ccc;\n}\n.d-button--default:hover {\n  border-color: #888;\n}\n.d-button--primary {\n  background: #29b6b0;\n  border: 1px solid #29b6b0;\n  color: #fff;\n}\n.d-button--primary:hover {\n  background: #15c8c0;\n  border: 1px solid #15c8c0;\n}\n.d-button--text {\n  background: transparent;\n  border: 0;\n  color: #29b6b0;\n}\n.d-button--text:hover {\n  color: #15c8c0;\n}\n.d-button--text.is-disabled {\n  background: transparent;\n}\n.d-button--text.is-disabled:hover {\n  background: transparent;\n}\n.d-button--warning {\n  background: #ff795c;\n  border: 1px solid #ff795c;\n  color: #fff;\n}\n.d-button--warning:hover {\n  background: #ff8970;\n  border: 1px solid #ff8970;\n}\n.d-button--large {\n  height: 34px;\n  padding: 0 15px;\n}\n", "", {"version":3,"sources":["/./src/components/Button.vue"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,mBAAmB;EACnB,eAAe;EACf,aAAa;EACb,gBAAgB;EAChB,gBAAgB;EAChB,gBAAgB;EAChB,cAAc;EACd,oBAAoB;CACrB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,oBAAoB;EACpB,oBAAoB;EACpB,sBAAsB;EACtB,eAAe;CAChB;AACD;EACE,sBAAsB;EACtB,oBAAoB;EACpB,eAAe;CAChB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,iBAAiB;EACjB,YAAY;EACZ,uBAAuB;CACxB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,oBAAoB;EACpB,0BAA0B;EAC1B,YAAY;CACb;AACD;EACE,oBAAoB;EACpB,0BAA0B;CAC3B;AACD;EACE,wBAAwB;EACxB,UAAU;EACV,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,wBAAwB;CACzB;AACD;EACE,wBAAwB;CACzB;AACD;EACE,oBAAoB;EACpB,0BAA0B;EAC1B,YAAY;CACb;AACD;EACE,oBAAoB;EACpB,0BAA0B;CAC3B;AACD;EACE,aAAa;EACb,gBAAgB;CACjB","file":"Button.vue","sourcesContent":[".d-button {\n  display: inline-block;\n  border-radius: 2px;\n  line-height: 1;\n  height: 30px;\n  font-size: 14px;\n  padding: 0 10px;\n  cursor: pointer;\n  outline: none;\n  white-space: nowrap;\n}\n.d-button + .d-button {\n  margin-left: 15px;\n}\n.d-button.is-disabled {\n  cursor: not-allowed;\n  background: #f4f4f4;\n  border-color: #ececec;\n  color: #d8d8d8;\n}\n.d-button.is-disabled:hover {\n  border-color: #ececec;\n  background: #f4f4f4;\n  color: #d8d8d8;\n}\n.d-button .iconhandle {\n  font-size: 14px;\n}\n.d-button--default {\n  background: #fff;\n  color: #444;\n  border: 1px solid #ccc;\n}\n.d-button--default:hover {\n  border-color: #888;\n}\n.d-button--primary {\n  background: #29b6b0;\n  border: 1px solid #29b6b0;\n  color: #fff;\n}\n.d-button--primary:hover {\n  background: #15c8c0;\n  border: 1px solid #15c8c0;\n}\n.d-button--text {\n  background: transparent;\n  border: 0;\n  color: #29b6b0;\n}\n.d-button--text:hover {\n  color: #15c8c0;\n}\n.d-button--text.is-disabled {\n  background: transparent;\n}\n.d-button--text.is-disabled:hover {\n  background: transparent;\n}\n.d-button--warning {\n  background: #ff795c;\n  border: 1px solid #ff795c;\n  color: #fff;\n}\n.d-button--warning:hover {\n  background: #ff8970;\n  border: 1px solid #ff8970;\n}\n.d-button--large {\n  height: 34px;\n  padding: 0 15px;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <button :disabled="disabled" @click="clickHandle" class="d-button"
	//     :class="[
	//       type ? 'd-button--' + type : '',
	//       size ? 'd-button--' + size : '',
	//       {
	//         'is-disabled': disabled
	//       }
	//     ]"
	//   >
	//     <i class="iconhandle" v-if="icon">{{{icon}}}</i>
	//     <slot></slot>
	//   </button>
	// </template>
	
	// <script>
	exports.default = {
	  name: 'd-button',
	
	  props: {
	    type: {
	      type: String,
	      default: 'default'
	    },
	    size: String,
	    icon: {
	      type: String,
	      default: ''
	    },
	    disabled: Boolean,
	    to: [String, Object]
	  },
	
	  methods: {
	    clickHandle: function clickHandle(event) {
	      if (this.disabled) {
	        return;
	      }
	      var to = this.to;
	      if (to) {
	        if (typeof to === 'string') {
	          location.href = to;
	        } else {
	          this.$router.go(to);
	        }
	        return;
	      }
	    }
	  }
	};
	// </script>
	
	// <style lang="less">
	// .d-button {
	//   display: inline-block;
	//   border-radius: 2px;
	//   line-height: 1;
	//   height: 30px;
	//   font-size: 14px;
	//   padding: 0 10px;
	//   cursor: pointer;
	//   outline: none;
	//   white-space: nowrap;
	
	//   + .d-button {
	//     margin-left: 15px;
	//   }
	
	//   &.is-disabled {
	//     cursor: not-allowed;
	//     background: #f4f4f4;
	//     border-color: #ececec;
	//     color: #d8d8d8;
	
	//     &:hover {
	//       border-color: #ececec;
	//       background: #f4f4f4;
	//       color: #d8d8d8;
	//     }
	//   }
	
	//   .iconhandle {
	//     font-size: 14px;
	//   }
	// }
	
	// .d-button--default {
	//   background: #fff;
	//   color: #444;
	//   border: 1px solid #ccc;
	
	//   &:hover {
	//     border-color: #888;
	//   }
	// }
	
	// .d-button--primary {
	//   background: #29b6b0;
	//   border: 1px solid #29b6b0;
	//   color: #fff;
	
	//   &:hover {
	//     background: #15c8c0;
	//     border: 1px solid #15c8c0;
	//   }
	// }
	
	// .d-button--text {
	//   background: transparent;
	//   border: 0;
	//   color: #29b6b0;
	
	//   &:hover {
	//     color: #15c8c0;
	//   }
	
	//   &.is-disabled {
	//     background: transparent;
	
	//     &:hover {
	//       background: transparent;
	//     }
	//   }
	// }
	
	// .d-button--warning {
	//   background: #ff795c;
	//   border: 1px solid #ff795c;
	//   color: #fff;
	
	//   &:hover {
	//     background: #ff8970;
	//     border: 1px solid #ff8970;
	//   }
	// }
	
	// .d-button--large {
	//   height: 34px;
	//   padding: 0 15px;
	// }
	// </style>
	
	/* generated by vue-loader */

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "\n<button :disabled=\"disabled\" @click=\"clickHandle\" class=\"d-button\"\n  :class=\"[\n    type ? 'd-button--' + type : '',\n    size ? 'd-button--' + size : '',\n    {\n      'is-disabled': disabled\n    }\n  ]\"\n>\n  <i class=\"iconhandle\" v-if=\"icon\">{{{icon}}}</i>\n  <slot></slot>\n</button>\n";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(14)
	__vue_script__ = __webpack_require__(16)
	__vue_template__ = __webpack_require__(38)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/cookfront/Sites/workspace/study/duiba-design/src/components/Modal.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(15);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.21.0/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/style-rewriter.js?id=_v-13b43d01&file=Modal.vue!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/selector.js?type=style&index=0!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./Modal.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.21.0/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/style-rewriter.js?id=_v-13b43d01&file=Modal.vue!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/selector.js?type=style&index=0!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./Modal.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".modal-open {\n  overflow: hidden;\n}\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.d-modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  overflow: hidden;\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n  -webkit-transition: all .5s ease;\n  transition: all .5s ease;\n}\n.d-modal.fade .modal-dialog {\n  -webkit-transition: -webkit-transform 0.5s ease-out;\n  transition: -webkit-transform 0.5s ease-out;\n  transition: transform 0.5s ease-out;\n  transition: transform 0.5s ease-out, -webkit-transform 0.5s ease-out;\n  -webkit-transform: translate(0, -25%);\n          transform: translate(0, -25%);\n}\n.d-modal.in {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.d-modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n          transform: translate(0, 0);\n}\n.d-modal.d-message-box .modal-dialog {\n  width: auto !important;\n  max-width: 500px;\n  position: absolute;\n  left: 50%;\n}\n.d-modal.d-message-box .modal-content {\n  border-top: 0;\n  box-shadow: none;\n}\n.d-modal.d-message-box .iconhandle {\n  margin-right: 5px;\n}\n.d-modal.d-message-box .success {\n  color: #59dfa3;\n}\n.d-modal.d-message-box .error {\n  color: #f9431d;\n}\n.d-modal.d-message-box p {\n  color: #444;\n  font-size: 14px;\n  padding: 0 5px 0 3px;\n  text-align: center;\n  margin: 5px 0;\n}\n.d-modal.d-message-box p.desc {\n  color: #888;\n  font-size: 12px;\n}\n.fade {\n  opacity: 0;\n  -webkit-transition: opacity .15s linear;\n  transition: opacity .15s linear;\n}\n.fade.in {\n  opacity: 1;\n}\n.modal-dialog {\n  position: absolute;\n  width: auto;\n}\n.modal-content {\n  position: relative;\n  background-color: #fff;\n  background-clip: padding-box;\n  border-radius: 5px;\n  outline: 0;\n  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\n  border-top: 8px solid #444;\n}\n.modal-content .close {\n  position: absolute;\n  right: 10px;\n  top: 8px;\n  cursor: pointer;\n  font-size: 12px;\n  color: #d8d8d8;\n}\n.modal-content .close:hover {\n  color: #444;\n}\n.modal-header {\n  padding: 24px 20px 0;\n  font-size: 15px;\n  line-height: 20px;\n}\n.modal-header .modal-title {\n  font-weight: 700;\n  font-size: 16px;\n  color: #444;\n  margin: 0;\n}\n.modal-body {\n  padding: 10px 20px;\n  font-size: 14px;\n  line-height: 1.5;\n  overflow: hidden;\n}\n.modal-footer {\n  padding: 10px 0 20px 20px;\n}\n", "", {"version":3,"sources":["/./src/components/Modal.vue"],"names":[],"mappings":"AAAA;EACE,iBAAiB;CAClB;AACD;EACE,mBAAmB;EACnB,iBAAiB;CAClB;AACD;EACE,gBAAgB;EAChB,OAAO;EACP,SAAS;EACT,UAAU;EACV,QAAQ;EACR,cAAc;EACd,cAAc;EACd,iBAAiB;EACjB,kCAAkC;EAClC,WAAW;EACX,iCAAyB;EAAzB,yBAAyB;CAC1B;AACD;EACE,oDAAoC;EAApC,4CAAoC;EAApC,oCAAoC;EAApC,qEAAoC;EACpC,sCAA8B;UAA9B,8BAA8B;CAC/B;AACD;EACE,qCAAqC;CACtC;AACD;EACE,mCAA2B;UAA3B,2BAA2B;CAC5B;AACD;EACE,uBAAuB;EACvB,iBAAiB;EACjB,mBAAmB;EACnB,UAAU;CACX;AACD;EACE,cAAc;EACd,iBAAiB;CAClB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,YAAY;EACZ,gBAAgB;EAChB,qBAAqB;EACrB,mBAAmB;EACnB,cAAc;CACf;AACD;EACE,YAAY;EACZ,gBAAgB;CACjB;AACD;EACE,WAAW;EACX,wCAAgC;EAAhC,gCAAgC;CACjC;AACD;EACE,WAAW;CACZ;AACD;EACE,mBAAmB;EACnB,YAAY;CACb;AACD;EACE,mBAAmB;EACnB,uBAAuB;EACvB,6BAA6B;EAC7B,mBAAmB;EACnB,WAAW;EACX,yCAAyC;EACzC,2BAA2B;CAC5B;AACD;EACE,mBAAmB;EACnB,YAAY;EACZ,SAAS;EACT,gBAAgB;EAChB,gBAAgB;EAChB,eAAe;CAChB;AACD;EACE,YAAY;CACb;AACD;EACE,qBAAqB;EACrB,gBAAgB;EAChB,kBAAkB;CACnB;AACD;EACE,iBAAiB;EACjB,gBAAgB;EAChB,YAAY;EACZ,UAAU;CACX;AACD;EACE,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB;EACjB,iBAAiB;CAClB;AACD;EACE,0BAA0B;CAC3B","file":"Modal.vue","sourcesContent":[".modal-open {\n  overflow: hidden;\n}\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.d-modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  overflow: hidden;\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n  transition: all .5s ease;\n}\n.d-modal.fade .modal-dialog {\n  transition: transform 0.5s ease-out;\n  transform: translate(0, -25%);\n}\n.d-modal.in {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.d-modal.in .modal-dialog {\n  transform: translate(0, 0);\n}\n.d-modal.d-message-box .modal-dialog {\n  width: auto !important;\n  max-width: 500px;\n  position: absolute;\n  left: 50%;\n}\n.d-modal.d-message-box .modal-content {\n  border-top: 0;\n  box-shadow: none;\n}\n.d-modal.d-message-box .iconhandle {\n  margin-right: 5px;\n}\n.d-modal.d-message-box .success {\n  color: #59dfa3;\n}\n.d-modal.d-message-box .error {\n  color: #f9431d;\n}\n.d-modal.d-message-box p {\n  color: #444;\n  font-size: 14px;\n  padding: 0 5px 0 3px;\n  text-align: center;\n  margin: 5px 0;\n}\n.d-modal.d-message-box p.desc {\n  color: #888;\n  font-size: 12px;\n}\n.fade {\n  opacity: 0;\n  transition: opacity .15s linear;\n}\n.fade.in {\n  opacity: 1;\n}\n.modal-dialog {\n  position: absolute;\n  width: auto;\n}\n.modal-content {\n  position: relative;\n  background-color: #fff;\n  background-clip: padding-box;\n  border-radius: 5px;\n  outline: 0;\n  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\n  border-top: 8px solid #444;\n}\n.modal-content .close {\n  position: absolute;\n  right: 10px;\n  top: 8px;\n  cursor: pointer;\n  font-size: 12px;\n  color: #d8d8d8;\n}\n.modal-content .close:hover {\n  color: #444;\n}\n.modal-header {\n  padding: 24px 20px 0;\n  font-size: 15px;\n  line-height: 20px;\n}\n.modal-header .modal-title {\n  font-weight: 700;\n  font-size: 16px;\n  color: #444;\n  margin: 0;\n}\n.modal-body {\n  padding: 10px 20px;\n  font-size: 14px;\n  line-height: 1.5;\n  overflow: hidden;\n}\n.modal-footer {\n  padding: 10px 0 20px 20px;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _isInteger = __webpack_require__(17);
	
	var _isInteger2 = _interopRequireDefault(_isInteger);
	
	var _getScrollBarWidth = __webpack_require__(36);
	
	var _getScrollBarWidth2 = _interopRequireDefault(_getScrollBarWidth);
	
	var _EventListener = __webpack_require__(37);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	var _Button = __webpack_require__(8);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'd-modal',
	
	  components: {
	    DButton: _Button2.default
	  },
	
	  props: {
	    okText: {
	      type: String,
	      default: '确定'
	    },
	    cancelText: {
	      type: String,
	      default: '取消'
	    },
	    title: {
	      type: String,
	      default: ''
	    },
	    description: {
	      type: String,
	      default: ''
	    },
	    type: {
	      type: String,
	      default: ''
	    },
	    messageType: {
	      type: String,
	      default: 'success'
	    },
	    messageDesc: {
	      type: String,
	      default: ''
	    },
	    show: {
	      require: true,
	      type: Boolean
	    },
	    width: {
	      default: 300
	    },
	    onOk: {
	      type: Function,
	      default: function _default() {}
	    },
	    effect: {
	      type: String,
	      default: 'fade'
	    },
	    backdrop: {
	      type: Boolean,
	      default: true
	    },
	    onClose: {
	      default: null
	    }
	  },
	  ready: function ready() {
	    var _this = this;
	
	    this.$watch('show', function (val) {
	      var el = _this.$el;
	      var body = document.body;
	      var scrollBarWidth = (0, _getScrollBarWidth2.default)();
	      var contentBox = el.querySelector('.modal-content');
	      var dialogBox = el.querySelector('.modal-dialog');
	
	      if (val) {
	        contentBox.focus();
	        el.style.display = 'block';
	        setTimeout(function () {
	          el.classList.add('in');
	
	          setTimeout(function () {
	            var dialogHeight = dialogBox.offsetHeight;
	            var dialogWidth = dialogBox.offsetWidth;
	            var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	            var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	            if (dialogHeight > windowHeight) {
	              dialogBox.style.top = '50px';
	            } else {
	              dialogBox.style.top = (windowHeight - dialogHeight) / 2 - 50 + 'px';
	            }
	            dialogBox.style.left = (windowWidth - dialogWidth) / 2 + 'px';
	          }, 0);
	        }, 0);
	        body.classList.add('modal-open');
	
	        if (scrollBarWidth !== 0) {
	          body.style.paddingRight = scrollBarWidth + 'px';
	        }
	
	        if (_this.backdrop) {
	          _this._blurModalContentEvent = _EventListener2.default.listen(_this.$el, 'click', function (e) {
	            if (e.target === el) {
	              if (_this.onClose) {
	                _this.onClose();
	                return;
	              } else {
	                _this.show = false;
	              }
	            }
	          });
	        }
	      } else {
	        if (_this._blurModalContentEvent) _this._blurModalContentEvent.remove();
	
	        el.classList.remove('in');
	        setTimeout(function () {
	          el.style.display = 'none';
	          body.classList.remove('modal-open');
	          body.style.paddingRight = '0';
	        }, 300);
	      }
	    }, { immediate: true });
	  },
	
	  computed: {
	    optionalWidth: function optionalWidth() {
	      if (this.width === null) {
	        return null;
	      } else if ((0, _isInteger2.default)(+this.width)) {
	        return this.width + 'px';
	      }
	
	      return this.width;
	    }
	  },
	  methods: {
	    close: function close() {
	      if (this.onClose) {
	        this.onClose();
	        return;
	      }
	      this.show = false;
	    }
	  },
	  destroyed: function destroyed() {
	    if (this._blurModalContentEvent) {
	      this._blurModalContentEvent.remove();
	    }
	  }
	};
	// </script>
	
	// <style lang="less">
	// .modal-open {
	//   overflow: hidden;
	
	//   .modal {
	//     overflow-x: hidden;
	//     overflow-y: auto;
	//   }
	// }
	
	// .d-modal {
	//   position: fixed;
	//   top: 0;
	//   right: 0;
	//   bottom: 0;
	//   left: 0;
	//   z-index: 1050;
	//   display: none;
	//   overflow: hidden;
	//   -webkit-overflow-scrolling: touch;
	//   outline: 0;
	//   transition: all .5s ease;
	
	//   &.fade {
	//     .modal-dialog {
	//       transition: transform .5s ease-out;
	//       transform: translate(0, -25%);
	//     }
	//   }
	
	//   &.in {
	//     background-color: rgba(0, 0, 0, .5);
	
	//     .modal-dialog {
	//       transform: translate(0, 0);
	//     }
	//   }
	
	//   &.d-message-box {
	//     .modal-dialog {
	//       width: auto !important;
	//       max-width: 500px;
	//       position: absolute;
	//       left: 50%;
	//     }
	
	//     .modal-content {
	//       border-top: 0;
	//       box-shadow: none;
	//     }
	
	//     .iconhandle {
	//       margin-right: 5px;
	//     }
	
	//     .success {
	//       color: #59dfa3;
	//     }
	
	//     .error {
	//       color: #f9431d;
	//     }
	
	//     p {
	//       color: #444;
	//       font-size: 14px;
	//       padding: 0 5px 0 3px;
	//       text-align: center;
	//       margin: 5px 0;
	
	//       &.desc {
	//         color: #888;
	//         font-size: 12px;
	//       }
	//     }
	//   }
	// }
	
	// .fade {
	//   opacity: 0;
	//   transition: opacity .15s linear;
	
	//   &.in {
	//     opacity: 1;
	//   }
	// }
	
	// .modal-dialog {
	//   position: absolute;
	//   width: auto;
	// }
	
	// .modal-content {
	//   position: relative;
	//   background-color: #fff;
	//   background-clip: padding-box;
	//   border-radius: 5px;
	//   outline: 0;
	//   box-shadow: 0 3px 9px rgba(0, 0, 0, .5);
	//   border-top: 8px solid #444;
	
	//   .close {
	//     position: absolute;
	//     right: 10px;
	//     top: 8px;
	//     cursor: pointer;
	//     font-size: 12px;
	//     color: #d8d8d8;
	
	//     &:hover {
	//       color: #444;
	//     }
	//   }
	// }
	
	// .modal-header {
	//   padding: 24px 20px 0;
	//   font-size: 15px;
	//   line-height: 20px;
	
	//   .modal-title {
	//     font-weight: 700;
	//     font-size: 16px;
	//     color: #444;
	//     margin: 0;
	//   }
	// }
	
	// .modal-body {
	//   padding: 10px 20px;
	//   font-size: 14px;
	//   line-height: 1.5;
	//   overflow: hidden;
	// }
	
	// .modal-footer {
	//   padding: 10px 0 20px 20px;
	// }
	// </style>
	
	
	/* generated by vue-loader */
	// <template>
	//   <div role="dialog"
	//     v-bind:class="{
	//       'd-modal': true,
	//       'fade': effect === 'fade',
	//       'd-message-box': type === 'message',
	//     }"
	//   >
	//     <div class="modal-dialog" role="document" v-bind:style="{width: optionalWidth}">
	//       <div class="modal-content">
	//         <slot name="modal-header" v-if="type !== 'message'">
	//           <div class="modal-header">
	//             <i class="iconhandle close" @click="close">&#xe609;</i>
	//             <h4 class="modal-title">
	//               <slot name="title">
	//                 {{title}}
	//               </slot>
	//             </h4>
	//           </div>
	//         </slot>
	//         <slot name="modal-body">
	//           <div class="modal-body">
	//             <template v-if="type === 'message'">
	//               <p>
	//                 <i class="iconhandle success" v-if="messageType === 'success'">&#xe629;</i>
	//                 <i class="iconhandle error" v-if="messageType === 'error'">&#xe605;</i>
	//                 {{title}}
	//               </p>
	//               <p class="desc" v-if="messageDesc">
	//                 {{messageDesc}}
	//               </p>
	//             </template>
	//             <template v-else>
	//               <p>{{{description}}}</p>
	//             </template>
	//           </div>
	//         </slot>
	//         <slot name="modal-footer" v-if="type !== 'message'">
	//           <div class="modal-footer">
	//             <d-button type="primary" size="large" @click="onOk">{{ okText }}</d-button>
	//             <d-button size="large" @click="close">{{ cancelText }}</d-button>
	//           </div>
	//         </slot>
	//       </div>
	//     </div>
	//   </div>
	// </template>
	
	// <script>

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(18), __esModule: true };

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(19);
	module.exports = __webpack_require__(22).Number.isInteger;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(20);
	
	$export($export.S, 'Number', {isInteger: __webpack_require__(35)});

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(21)
	  , core      = __webpack_require__(22)
	  , ctx       = __webpack_require__(23)
	  , hide      = __webpack_require__(25)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 21 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 22 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(24);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(26)
	  , createDesc = __webpack_require__(34);
	module.exports = __webpack_require__(30) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(27)
	  , IE8_DOM_DEFINE = __webpack_require__(29)
	  , toPrimitive    = __webpack_require__(33)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(30) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(28);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(30) && !__webpack_require__(31)(function(){
	  return Object.defineProperty(__webpack_require__(32)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(31)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(28)
	  , document = __webpack_require__(21).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(28);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(28)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 36 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  if (document.documentElement.scrollHeight <= document.documentElement.clientHeight) {
	    return 0;
	  }
	  var inner = document.createElement('p');
	  inner.style.width = '100%';
	  inner.style.height = '200px';
	
	  var outer = document.createElement('div');
	  outer.style.position = 'absolute';
	  outer.style.top = '0px';
	  outer.style.left = '0px';
	  outer.style.visibility = 'hidden';
	  outer.style.width = '200px';
	  outer.style.height = '150px';
	  outer.style.overflow = 'hidden';
	  outer.appendChild(inner);
	
	  document.body.appendChild(outer);
	  var w1 = inner.offsetWidth;
	  outer.style.overflow = 'scroll';
	  var w2 = inner.offsetWidth;
	  if (w1 === w2) w2 = outer.clientWidth;
	
	  document.body.removeChild(outer);
	
	  return w1 - w2;
	};

/***/ },
/* 37 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var EventListener = {
	  /**
	   * Listen to DOM events during the bubble phase.
	   *
	   * @param {DOMEventTarget} target DOM element to register listener on.
	   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
	   * @param {function} callback Callback function.
	   * @return {object} Object with a `remove` method.
	   */
	  listen: function listen(target, eventType, callback) {
	    if (target.addEventListener) {
	      target.addEventListener(eventType, callback, false);
	      return {
	        remove: function remove() {
	          target.removeEventListener(eventType, callback, false);
	        }
	      };
	    } else if (target.attachEvent) {
	      target.attachEvent('on' + eventType, callback);
	      return {
	        remove: function remove() {
	          target.detachEvent('on' + eventType, callback);
	        }
	      };
	    }
	  }
	};
	
	exports.default = EventListener;

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = "\n<div role=\"dialog\"\n  v-bind:class=\"{\n    'd-modal': true,\n    'fade': effect === 'fade',\n    'd-message-box': type === 'message',\n  }\"\n>\n  <div class=\"modal-dialog\" role=\"document\" v-bind:style=\"{width: optionalWidth}\">\n    <div class=\"modal-content\">\n      <slot name=\"modal-header\" v-if=\"type !== 'message'\">\n        <div class=\"modal-header\">\n          <i class=\"iconhandle close\" @click=\"close\">&#xe609;</i>\n          <h4 class=\"modal-title\">\n            <slot name=\"title\">\n              {{title}}\n            </slot>\n          </h4>\n        </div>\n      </slot>\n      <slot name=\"modal-body\">\n        <div class=\"modal-body\">\n          <template v-if=\"type === 'message'\">\n            <p>\n              <i class=\"iconhandle success\" v-if=\"messageType === 'success'\">&#xe629;</i>\n              <i class=\"iconhandle error\" v-if=\"messageType === 'error'\">&#xe605;</i>\n              {{title}}\n            </p>\n            <p class=\"desc\" v-if=\"messageDesc\">\n              {{messageDesc}}\n            </p>\n          </template>\n          <template v-else>\n            <p>{{{description}}}</p>\n          </template>\n        </div>\n      </slot>\n      <slot name=\"modal-footer\" v-if=\"type !== 'message'\">\n        <div class=\"modal-footer\">\n          <d-button type=\"primary\" size=\"large\" @click=\"onOk\">{{ okText }}</d-button>\n          <d-button size=\"large\" @click=\"close\">{{ cancelText }}</d-button>\n        </div>\n      </slot>\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vue = __webpack_require__(40);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _getScrollBarWidth = __webpack_require__(36);
	
	var _getScrollBarWidth2 = _interopRequireDefault(_getScrollBarWidth);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var MessageBoxConstructor = _vue2.default.extend(__webpack_require__(13));
	
	var MessageBox = function MessageBox(options) {
	  var body = document.body;
	  var instance = new MessageBoxConstructor({
	    el: document.createElement('div'),
	    propsData: {
	      title: options.title,
	      messageType: options.type,
	      messageDesc: options.description,
	      type: 'message',
	      show: false
	    }
	  });
	  instance.$watch('show', function (val) {
	    var _this = this;
	
	    var scrollBarWidth = (0, _getScrollBarWidth2.default)();
	    if (val) {
	      this.show = true;
	      body.classList.add('modal-open');
	      if (scrollBarWidth !== 0) {
	        body.style.paddingRight = scrollBarWidth + 'px';
	      }
	    }
	    setTimeout(function () {
	      _this.close();
	      body.classList.remove('modal-open');
	      body.style.paddingRight = '0';
	      _this.$nextTick(function () {
	        this.$remove();
	      });
	    }, options.time || 1500);
	  });
	  setTimeout(function () {
	    instance.show = true;
	    instance.$appendTo(body);
	  }, 500);
	};
	
	MessageBox.ignoreInit = true;
	
	exports.default = MessageBox;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/*!
	 * Vue.js v1.0.28
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	'use strict';
	
	function set(obj, key, val) {
	  if (hasOwn(obj, key)) {
	    obj[key] = val;
	    return;
	  }
	  if (obj._isVue) {
	    set(obj._data, key, val);
	    return;
	  }
	  var ob = obj.__ob__;
	  if (!ob) {
	    obj[key] = val;
	    return;
	  }
	  ob.convert(key, val);
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._proxy(key);
	      vm._digest();
	    }
	  }
	  return val;
	}
	
	/**
	 * Delete a property and trigger change if necessary.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 */
	
	function del(obj, key) {
	  if (!hasOwn(obj, key)) {
	    return;
	  }
	  delete obj[key];
	  var ob = obj.__ob__;
	  if (!ob) {
	    if (obj._isVue) {
	      delete obj._data[key];
	      obj._digest();
	    }
	    return;
	  }
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._unproxy(key);
	      vm._digest();
	    }
	  }
	}
	
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	 * Check whether the object has the property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @return {Boolean}
	 */
	
	function hasOwn(obj, key) {
	  return hasOwnProperty.call(obj, key);
	}
	
	/**
	 * Check if an expression is a literal value.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */
	
	var literalValueRE = /^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/;
	
	function isLiteral(exp) {
	  return literalValueRE.test(exp);
	}
	
	/**
	 * Check if a string starts with $ or _
	 *
	 * @param {String} str
	 * @return {Boolean}
	 */
	
	function isReserved(str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F;
	}
	
	/**
	 * Guard text output, make sure undefined outputs
	 * empty string
	 *
	 * @param {*} value
	 * @return {String}
	 */
	
	function _toString(value) {
	  return value == null ? '' : value.toString();
	}
	
	/**
	 * Check and convert possible numeric strings to numbers
	 * before setting back to data
	 *
	 * @param {*} value
	 * @return {*|Number}
	 */
	
	function toNumber(value) {
	  if (typeof value !== 'string') {
	    return value;
	  } else {
	    var parsed = Number(value);
	    return isNaN(parsed) ? value : parsed;
	  }
	}
	
	/**
	 * Convert string boolean literals into real booleans.
	 *
	 * @param {*} value
	 * @return {*|Boolean}
	 */
	
	function toBoolean(value) {
	  return value === 'true' ? true : value === 'false' ? false : value;
	}
	
	/**
	 * Strip quotes from a string
	 *
	 * @param {String} str
	 * @return {String | false}
	 */
	
	function stripQuotes(str) {
	  var a = str.charCodeAt(0);
	  var b = str.charCodeAt(str.length - 1);
	  return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
	}
	
	/**
	 * Camelize a hyphen-delimited string.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var camelizeRE = /-(\w)/g;
	
	function camelize(str) {
	  return str.replace(camelizeRE, toUpper);
	}
	
	function toUpper(_, c) {
	  return c ? c.toUpperCase() : '';
	}
	
	/**
	 * Hyphenate a camelCase string.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var hyphenateRE = /([^-])([A-Z])/g;
	
	function hyphenate(str) {
	  return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase();
	}
	
	/**
	 * Converts hyphen/underscore/slash delimitered names into
	 * camelized classNames.
	 *
	 * e.g. my-component => MyComponent
	 *      some_else    => SomeElse
	 *      some/comp    => SomeComp
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var classifyRE = /(?:^|[-_\/])(\w)/g;
	
	function classify(str) {
	  return str.replace(classifyRE, toUpper);
	}
	
	/**
	 * Simple bind, faster than native
	 *
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @return {Function}
	 */
	
	function bind(fn, ctx) {
	  return function (a) {
	    var l = arguments.length;
	    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
	  };
	}
	
	/**
	 * Convert an Array-like object to a real Array.
	 *
	 * @param {Array-like} list
	 * @param {Number} [start] - start index
	 * @return {Array}
	 */
	
	function toArray(list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret;
	}
	
	/**
	 * Mix properties into target object.
	 *
	 * @param {Object} to
	 * @param {Object} from
	 */
	
	function extend(to, from) {
	  var keys = Object.keys(from);
	  var i = keys.length;
	  while (i--) {
	    to[keys[i]] = from[keys[i]];
	  }
	  return to;
	}
	
	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	function isObject(obj) {
	  return obj !== null && typeof obj === 'object';
	}
	
	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	var toString = Object.prototype.toString;
	var OBJECT_STRING = '[object Object]';
	
	function isPlainObject(obj) {
	  return toString.call(obj) === OBJECT_STRING;
	}
	
	/**
	 * Array type check.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	var isArray = Array.isArray;
	
	/**
	 * Define a property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @param {Boolean} [enumerable]
	 */
	
	function def(obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}
	
	/**
	 * Debounce a function so it only gets called after the
	 * input stops arriving after the given wait period.
	 *
	 * @param {Function} func
	 * @param {Number} wait
	 * @return {Function} - the debounced function
	 */
	
	function _debounce(func, wait) {
	  var timeout, args, context, timestamp, result;
	  var later = function later() {
	    var last = Date.now() - timestamp;
	    if (last < wait && last >= 0) {
	      timeout = setTimeout(later, wait - last);
	    } else {
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    }
	  };
	  return function () {
	    context = this;
	    args = arguments;
	    timestamp = Date.now();
	    if (!timeout) {
	      timeout = setTimeout(later, wait);
	    }
	    return result;
	  };
	}
	
	/**
	 * Manual indexOf because it's slightly faster than
	 * native.
	 *
	 * @param {Array} arr
	 * @param {*} obj
	 */
	
	function indexOf(arr, obj) {
	  var i = arr.length;
	  while (i--) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	}
	
	/**
	 * Make a cancellable version of an async callback.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 */
	
	function cancellable(fn) {
	  var cb = function cb() {
	    if (!cb.cancelled) {
	      return fn.apply(this, arguments);
	    }
	  };
	  cb.cancel = function () {
	    cb.cancelled = true;
	  };
	  return cb;
	}
	
	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 *
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 */
	
	function looseEqual(a, b) {
	  /* eslint-disable eqeqeq */
	  return a == b || (isObject(a) && isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
	  /* eslint-enable eqeqeq */
	}
	
	var hasProto = ('__proto__' in {});
	
	// Browser environment sniffing
	var inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';
	
	// detect devtools
	var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
	
	// UA sniffing for working around browser-specific quirks
	var UA = inBrowser && window.navigator.userAgent.toLowerCase();
	var isIE = UA && UA.indexOf('trident') > 0;
	var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
	var isAndroid = UA && UA.indexOf('android') > 0;
	var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
	
	var transitionProp = undefined;
	var transitionEndEvent = undefined;
	var animationProp = undefined;
	var animationEndEvent = undefined;
	
	// Transition property/event sniffing
	if (inBrowser && !isIE9) {
	  var isWebkitTrans = window.ontransitionend === undefined && window.onwebkittransitionend !== undefined;
	  var isWebkitAnim = window.onanimationend === undefined && window.onwebkitanimationend !== undefined;
	  transitionProp = isWebkitTrans ? 'WebkitTransition' : 'transition';
	  transitionEndEvent = isWebkitTrans ? 'webkitTransitionEnd' : 'transitionend';
	  animationProp = isWebkitAnim ? 'WebkitAnimation' : 'animation';
	  animationEndEvent = isWebkitAnim ? 'webkitAnimationEnd' : 'animationend';
	}
	
	/* istanbul ignore next */
	function isNative(Ctor) {
	  return (/native code/.test(Ctor.toString())
	  );
	}
	
	/**
	 * Defer a task to execute it asynchronously. Ideally this
	 * should be executed as a microtask, so we leverage
	 * MutationObserver if it's available, and fallback to
	 * setTimeout(0).
	 *
	 * @param {Function} cb
	 * @param {Object} ctx
	 */
	
	var nextTick = (function () {
	  var callbacks = [];
	  var pending = false;
	  var timerFunc = undefined;
	
	  function nextTickHandler() {
	    pending = false;
	    var copies = callbacks.slice(0);
	    callbacks.length = 0;
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]();
	    }
	  }
	
	  // the nextTick behavior leverages the microtask queue, which can be accessed
	  // via either native Promise.then or MutationObserver.
	  // MutationObserver has wider support, however it is seriously bugged in
	  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
	  // completely stops working after triggering a few times... so, if native
	  // Promise is available, we will use it:
	  /* istanbul ignore if */
	  if (typeof Promise !== 'undefined' && isNative(Promise)) {
	    var p = Promise.resolve();
	    var noop = function noop() {};
	    timerFunc = function () {
	      p.then(nextTickHandler);
	      // in problematic UIWebViews, Promise.then doesn't completely break, but
	      // it can get stuck in a weird state where callbacks are pushed into the
	      // microtask queue but the queue isn't being flushed, until the browser
	      // needs to do some other work, e.g. handle a timer. Therefore we can
	      // "force" the microtask queue to be flushed by adding an empty timer.
	      if (isIOS) setTimeout(noop);
	    };
	  } else if (typeof MutationObserver !== 'undefined') {
	    // use MutationObserver where native Promise is not available,
	    // e.g. IE11, iOS7, Android 4.4
	    var counter = 1;
	    var observer = new MutationObserver(nextTickHandler);
	    var textNode = document.createTextNode(String(counter));
	    observer.observe(textNode, {
	      characterData: true
	    });
	    timerFunc = function () {
	      counter = (counter + 1) % 2;
	      textNode.data = String(counter);
	    };
	  } else {
	    // fallback to setTimeout
	    /* istanbul ignore next */
	    timerFunc = setTimeout;
	  }
	
	  return function (cb, ctx) {
	    var func = ctx ? function () {
	      cb.call(ctx);
	    } : cb;
	    callbacks.push(func);
	    if (pending) return;
	    pending = true;
	    timerFunc(nextTickHandler, 0);
	  };
	})();
	
	var _Set = undefined;
	/* istanbul ignore if */
	if (typeof Set !== 'undefined' && isNative(Set)) {
	  // use native Set when available.
	  _Set = Set;
	} else {
	  // a non-standard Set polyfill that only works with primitive keys.
	  _Set = function () {
	    this.set = Object.create(null);
	  };
	  _Set.prototype.has = function (key) {
	    return this.set[key] !== undefined;
	  };
	  _Set.prototype.add = function (key) {
	    this.set[key] = 1;
	  };
	  _Set.prototype.clear = function () {
	    this.set = Object.create(null);
	  };
	}
	
	function Cache(limit) {
	  this.size = 0;
	  this.limit = limit;
	  this.head = this.tail = undefined;
	  this._keymap = Object.create(null);
	}
	
	var p = Cache.prototype;
	
	/**
	 * Put <value> into the cache associated with <key>.
	 * Returns the entry which was removed to make room for
	 * the new entry. Otherwise undefined is returned.
	 * (i.e. if there was enough room already).
	 *
	 * @param {String} key
	 * @param {*} value
	 * @return {Entry|undefined}
	 */
	
	p.put = function (key, value) {
	  var removed;
	
	  var entry = this.get(key, true);
	  if (!entry) {
	    if (this.size === this.limit) {
	      removed = this.shift();
	    }
	    entry = {
	      key: key
	    };
	    this._keymap[key] = entry;
	    if (this.tail) {
	      this.tail.newer = entry;
	      entry.older = this.tail;
	    } else {
	      this.head = entry;
	    }
	    this.tail = entry;
	    this.size++;
	  }
	  entry.value = value;
	
	  return removed;
	};
	
	/**
	 * Purge the least recently used (oldest) entry from the
	 * cache. Returns the removed entry or undefined if the
	 * cache was empty.
	 */
	
	p.shift = function () {
	  var entry = this.head;
	  if (entry) {
	    this.head = this.head.newer;
	    this.head.older = undefined;
	    entry.newer = entry.older = undefined;
	    this._keymap[entry.key] = undefined;
	    this.size--;
	  }
	  return entry;
	};
	
	/**
	 * Get and register recent use of <key>. Returns the value
	 * associated with <key> or undefined if not in cache.
	 *
	 * @param {String} key
	 * @param {Boolean} returnEntry
	 * @return {Entry|*}
	 */
	
	p.get = function (key, returnEntry) {
	  var entry = this._keymap[key];
	  if (entry === undefined) return;
	  if (entry === this.tail) {
	    return returnEntry ? entry : entry.value;
	  }
	  // HEAD--------------TAIL
	  //   <.older   .newer>
	  //  <--- add direction --
	  //   A  B  C  <D>  E
	  if (entry.newer) {
	    if (entry === this.head) {
	      this.head = entry.newer;
	    }
	    entry.newer.older = entry.older; // C <-- E.
	  }
	  if (entry.older) {
	    entry.older.newer = entry.newer; // C. --> E
	  }
	  entry.newer = undefined; // D --x
	  entry.older = this.tail; // D. --> E
	  if (this.tail) {
	    this.tail.newer = entry; // E. <-- D
	  }
	  this.tail = entry;
	  return returnEntry ? entry : entry.value;
	};
	
	var cache$1 = new Cache(1000);
	var reservedArgRE = /^in$|^-?\d+/;
	
	/**
	 * Parser state
	 */
	
	var str;
	var dir;
	var len;
	var index;
	var chr;
	var state;
	var startState = 0;
	var filterState = 1;
	var filterNameState = 2;
	var filterArgState = 3;
	
	var doubleChr = 0x22;
	var singleChr = 0x27;
	var pipeChr = 0x7C;
	var escapeChr = 0x5C;
	var spaceChr = 0x20;
	
	var expStartChr = { 0x5B: 1, 0x7B: 1, 0x28: 1 };
	var expChrPair = { 0x5B: 0x5D, 0x7B: 0x7D, 0x28: 0x29 };
	
	function peek() {
	  return str.charCodeAt(index + 1);
	}
	
	function next() {
	  return str.charCodeAt(++index);
	}
	
	function eof() {
	  return index >= len;
	}
	
	function eatSpace() {
	  while (peek() === spaceChr) {
	    next();
	  }
	}
	
	function isStringStart(chr) {
	  return chr === doubleChr || chr === singleChr;
	}
	
	function isExpStart(chr) {
	  return expStartChr[chr];
	}
	
	function isExpEnd(start, chr) {
	  return expChrPair[start] === chr;
	}
	
	function parseString() {
	  var stringQuote = next();
	  var chr;
	  while (!eof()) {
	    chr = next();
	    // escape char
	    if (chr === escapeChr) {
	      next();
	    } else if (chr === stringQuote) {
	      break;
	    }
	  }
	}
	
	function parseSpecialExp(chr) {
	  var inExp = 0;
	  var startChr = chr;
	
	  while (!eof()) {
	    chr = peek();
	    if (isStringStart(chr)) {
	      parseString();
	      continue;
	    }
	
	    if (startChr === chr) {
	      inExp++;
	    }
	    if (isExpEnd(startChr, chr)) {
	      inExp--;
	    }
	
	    next();
	
	    if (inExp === 0) {
	      break;
	    }
	  }
	}
	
	/**
	 * syntax:
	 * expression | filterName  [arg  arg [| filterName arg arg]]
	 */
	
	function parseExpression() {
	  var start = index;
	  while (!eof()) {
	    chr = peek();
	    if (isStringStart(chr)) {
	      parseString();
	    } else if (isExpStart(chr)) {
	      parseSpecialExp(chr);
	    } else if (chr === pipeChr) {
	      next();
	      chr = peek();
	      if (chr === pipeChr) {
	        next();
	      } else {
	        if (state === startState || state === filterArgState) {
	          state = filterState;
	        }
	        break;
	      }
	    } else if (chr === spaceChr && (state === filterNameState || state === filterArgState)) {
	      eatSpace();
	      break;
	    } else {
	      if (state === filterState) {
	        state = filterNameState;
	      }
	      next();
	    }
	  }
	
	  return str.slice(start + 1, index) || null;
	}
	
	function parseFilterList() {
	  var filters = [];
	  while (!eof()) {
	    filters.push(parseFilter());
	  }
	  return filters;
	}
	
	function parseFilter() {
	  var filter = {};
	  var args;
	
	  state = filterState;
	  filter.name = parseExpression().trim();
	
	  state = filterArgState;
	  args = parseFilterArguments();
	
	  if (args.length) {
	    filter.args = args;
	  }
	  return filter;
	}
	
	function parseFilterArguments() {
	  var args = [];
	  while (!eof() && state !== filterState) {
	    var arg = parseExpression();
	    if (!arg) {
	      break;
	    }
	    args.push(processFilterArg(arg));
	  }
	
	  return args;
	}
	
	/**
	 * Check if an argument is dynamic and strip quotes.
	 *
	 * @param {String} arg
	 * @return {Object}
	 */
	
	function processFilterArg(arg) {
	  if (reservedArgRE.test(arg)) {
	    return {
	      value: toNumber(arg),
	      dynamic: false
	    };
	  } else {
	    var stripped = stripQuotes(arg);
	    var dynamic = stripped === arg;
	    return {
	      value: dynamic ? arg : stripped,
	      dynamic: dynamic
	    };
	  }
	}
	
	/**
	 * Parse a directive value and extract the expression
	 * and its filters into a descriptor.
	 *
	 * Example:
	 *
	 * "a + 1 | uppercase" will yield:
	 * {
	 *   expression: 'a + 1',
	 *   filters: [
	 *     { name: 'uppercase', args: null }
	 *   ]
	 * }
	 *
	 * @param {String} s
	 * @return {Object}
	 */
	
	function parseDirective(s) {
	  var hit = cache$1.get(s);
	  if (hit) {
	    return hit;
	  }
	
	  // reset parser state
	  str = s;
	  dir = {};
	  len = str.length;
	  index = -1;
	  chr = '';
	  state = startState;
	
	  var filters;
	
	  if (str.indexOf('|') < 0) {
	    dir.expression = str.trim();
	  } else {
	    dir.expression = parseExpression().trim();
	    filters = parseFilterList();
	    if (filters.length) {
	      dir.filters = filters;
	    }
	  }
	
	  cache$1.put(s, dir);
	  return dir;
	}
	
	var directive = Object.freeze({
	  parseDirective: parseDirective
	});
	
	var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	var cache = undefined;
	var tagRE = undefined;
	var htmlRE = undefined;
	/**
	 * Escape a string so it can be used in a RegExp
	 * constructor.
	 *
	 * @param {String} str
	 */
	
	function escapeRegex(str) {
	  return str.replace(regexEscapeRE, '\\$&');
	}
	
	function compileRegex() {
	  var open = escapeRegex(config.delimiters[0]);
	  var close = escapeRegex(config.delimiters[1]);
	  var unsafeOpen = escapeRegex(config.unsafeDelimiters[0]);
	  var unsafeClose = escapeRegex(config.unsafeDelimiters[1]);
	  tagRE = new RegExp(unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '|' + open + '((?:.|\\n)+?)' + close, 'g');
	  htmlRE = new RegExp('^' + unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '$');
	  // reset cache
	  cache = new Cache(1000);
	}
	
	/**
	 * Parse a template text string into an array of tokens.
	 *
	 * @param {String} text
	 * @return {Array<Object> | null}
	 *               - {String} type
	 *               - {String} value
	 *               - {Boolean} [html]
	 *               - {Boolean} [oneTime]
	 */
	
	function parseText(text) {
	  if (!cache) {
	    compileRegex();
	  }
	  var hit = cache.get(text);
	  if (hit) {
	    return hit;
	  }
	  if (!tagRE.test(text)) {
	    return null;
	  }
	  var tokens = [];
	  var lastIndex = tagRE.lastIndex = 0;
	  var match, index, html, value, first, oneTime;
	  /* eslint-disable no-cond-assign */
	  while (match = tagRE.exec(text)) {
	    /* eslint-enable no-cond-assign */
	    index = match.index;
	    // push text token
	    if (index > lastIndex) {
	      tokens.push({
	        value: text.slice(lastIndex, index)
	      });
	    }
	    // tag token
	    html = htmlRE.test(match[0]);
	    value = html ? match[1] : match[2];
	    first = value.charCodeAt(0);
	    oneTime = first === 42; // *
	    value = oneTime ? value.slice(1) : value;
	    tokens.push({
	      tag: true,
	      value: value.trim(),
	      html: html,
	      oneTime: oneTime
	    });
	    lastIndex = index + match[0].length;
	  }
	  if (lastIndex < text.length) {
	    tokens.push({
	      value: text.slice(lastIndex)
	    });
	  }
	  cache.put(text, tokens);
	  return tokens;
	}
	
	/**
	 * Format a list of tokens into an expression.
	 * e.g. tokens parsed from 'a {{b}} c' can be serialized
	 * into one single expression as '"a " + b + " c"'.
	 *
	 * @param {Array} tokens
	 * @param {Vue} [vm]
	 * @return {String}
	 */
	
	function tokensToExp(tokens, vm) {
	  if (tokens.length > 1) {
	    return tokens.map(function (token) {
	      return formatToken(token, vm);
	    }).join('+');
	  } else {
	    return formatToken(tokens[0], vm, true);
	  }
	}
	
	/**
	 * Format a single token.
	 *
	 * @param {Object} token
	 * @param {Vue} [vm]
	 * @param {Boolean} [single]
	 * @return {String}
	 */
	
	function formatToken(token, vm, single) {
	  return token.tag ? token.oneTime && vm ? '"' + vm.$eval(token.value) + '"' : inlineFilters(token.value, single) : '"' + token.value + '"';
	}
	
	/**
	 * For an attribute with multiple interpolation tags,
	 * e.g. attr="some-{{thing | filter}}", in order to combine
	 * the whole thing into a single watchable expression, we
	 * have to inline those filters. This function does exactly
	 * that. This is a bit hacky but it avoids heavy changes
	 * to directive parser and watcher mechanism.
	 *
	 * @param {String} exp
	 * @param {Boolean} single
	 * @return {String}
	 */
	
	var filterRE = /[^|]\|[^|]/;
	function inlineFilters(exp, single) {
	  if (!filterRE.test(exp)) {
	    return single ? exp : '(' + exp + ')';
	  } else {
	    var dir = parseDirective(exp);
	    if (!dir.filters) {
	      return '(' + exp + ')';
	    } else {
	      return 'this._applyFilters(' + dir.expression + // value
	      ',null,' + // oldValue (null for read)
	      JSON.stringify(dir.filters) + // filter descriptors
	      ',false)'; // write?
	    }
	  }
	}
	
	var text = Object.freeze({
	  compileRegex: compileRegex,
	  parseText: parseText,
	  tokensToExp: tokensToExp
	});
	
	var delimiters = ['{{', '}}'];
	var unsafeDelimiters = ['{{{', '}}}'];
	
	var config = Object.defineProperties({
	
	  /**
	   * Whether to print debug messages.
	   * Also enables stack trace for warnings.
	   *
	   * @type {Boolean}
	   */
	
	  debug: false,
	
	  /**
	   * Whether to suppress warnings.
	   *
	   * @type {Boolean}
	   */
	
	  silent: false,
	
	  /**
	   * Whether to use async rendering.
	   */
	
	  async: true,
	
	  /**
	   * Whether to warn against errors caught when evaluating
	   * expressions.
	   */
	
	  warnExpressionErrors: true,
	
	  /**
	   * Whether to allow devtools inspection.
	   * Disabled by default in production builds.
	   */
	
	  devtools: process.env.NODE_ENV !== 'production',
	
	  /**
	   * Internal flag to indicate the delimiters have been
	   * changed.
	   *
	   * @type {Boolean}
	   */
	
	  _delimitersChanged: true,
	
	  /**
	   * List of asset types that a component can own.
	   *
	   * @type {Array}
	   */
	
	  _assetTypes: ['component', 'directive', 'elementDirective', 'filter', 'transition', 'partial'],
	
	  /**
	   * prop binding modes
	   */
	
	  _propBindingModes: {
	    ONE_WAY: 0,
	    TWO_WAY: 1,
	    ONE_TIME: 2
	  },
	
	  /**
	   * Max circular updates allowed in a batcher flush cycle.
	   */
	
	  _maxUpdateCount: 100
	
	}, {
	  delimiters: { /**
	                 * Interpolation delimiters. Changing these would trigger
	                 * the text parser to re-compile the regular expressions.
	                 *
	                 * @type {Array<String>}
	                 */
	
	    get: function get() {
	      return delimiters;
	    },
	    set: function set(val) {
	      delimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  },
	  unsafeDelimiters: {
	    get: function get() {
	      return unsafeDelimiters;
	    },
	    set: function set(val) {
	      unsafeDelimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  }
	});
	
	var warn = undefined;
	var formatComponentName = undefined;
	
	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var hasConsole = typeof console !== 'undefined';
	
	    warn = function (msg, vm) {
	      if (hasConsole && !config.silent) {
	        console.error('[Vue warn]: ' + msg + (vm ? formatComponentName(vm) : ''));
	      }
	    };
	
	    formatComponentName = function (vm) {
	      var name = vm._isVue ? vm.$options.name : vm.name;
	      return name ? ' (found in component: <' + hyphenate(name) + '>)' : '';
	    };
	  })();
	}
	
	/**
	 * Append with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function appendWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    target.appendChild(el);
	  }, vm, cb);
	}
	
	/**
	 * InsertBefore with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function beforeWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    before(el, target);
	  }, vm, cb);
	}
	
	/**
	 * Remove with transition.
	 *
	 * @param {Element} el
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function removeWithTransition(el, vm, cb) {
	  applyTransition(el, -1, function () {
	    remove(el);
	  }, vm, cb);
	}
	
	/**
	 * Apply transitions with an operation callback.
	 *
	 * @param {Element} el
	 * @param {Number} direction
	 *                  1: enter
	 *                 -1: leave
	 * @param {Function} op - the actual DOM operation
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function applyTransition(el, direction, op, vm, cb) {
	  var transition = el.__v_trans;
	  if (!transition ||
	  // skip if there are no js hooks and CSS transition is
	  // not supported
	  !transition.hooks && !transitionEndEvent ||
	  // skip transitions for initial compile
	  !vm._isCompiled ||
	  // if the vm is being manipulated by a parent directive
	  // during the parent's compilation phase, skip the
	  // animation.
	  vm.$parent && !vm.$parent._isCompiled) {
	    op();
	    if (cb) cb();
	    return;
	  }
	  var action = direction > 0 ? 'enter' : 'leave';
	  transition[action](op, cb);
	}
	
	var transition = Object.freeze({
	  appendWithTransition: appendWithTransition,
	  beforeWithTransition: beforeWithTransition,
	  removeWithTransition: removeWithTransition,
	  applyTransition: applyTransition
	});
	
	/**
	 * Query an element selector if it's not an element already.
	 *
	 * @param {String|Element} el
	 * @return {Element}
	 */
	
	function query(el) {
	  if (typeof el === 'string') {
	    var selector = el;
	    el = document.querySelector(el);
	    if (!el) {
	      process.env.NODE_ENV !== 'production' && warn('Cannot find element: ' + selector);
	    }
	  }
	  return el;
	}
	
	/**
	 * Check if a node is in the document.
	 * Note: document.documentElement.contains should work here
	 * but always returns false for comment nodes in phantomjs,
	 * making unit tests difficult. This is fixed by doing the
	 * contains() check on the node's parentNode instead of
	 * the node itself.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */
	
	function inDoc(node) {
	  if (!node) return false;
	  var doc = node.ownerDocument.documentElement;
	  var parent = node.parentNode;
	  return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && doc.contains(parent));
	}
	
	/**
	 * Get and remove an attribute from a node.
	 *
	 * @param {Node} node
	 * @param {String} _attr
	 */
	
	function getAttr(node, _attr) {
	  var val = node.getAttribute(_attr);
	  if (val !== null) {
	    node.removeAttribute(_attr);
	  }
	  return val;
	}
	
	/**
	 * Get an attribute with colon or v-bind: prefix.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {String|null}
	 */
	
	function getBindAttr(node, name) {
	  var val = getAttr(node, ':' + name);
	  if (val === null) {
	    val = getAttr(node, 'v-bind:' + name);
	  }
	  return val;
	}
	
	/**
	 * Check the presence of a bind attribute.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {Boolean}
	 */
	
	function hasBindAttr(node, name) {
	  return node.hasAttribute(name) || node.hasAttribute(':' + name) || node.hasAttribute('v-bind:' + name);
	}
	
	/**
	 * Insert el before target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	function before(el, target) {
	  target.parentNode.insertBefore(el, target);
	}
	
	/**
	 * Insert el after target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	function after(el, target) {
	  if (target.nextSibling) {
	    before(el, target.nextSibling);
	  } else {
	    target.parentNode.appendChild(el);
	  }
	}
	
	/**
	 * Remove el from DOM
	 *
	 * @param {Element} el
	 */
	
	function remove(el) {
	  el.parentNode.removeChild(el);
	}
	
	/**
	 * Prepend el to target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	function prepend(el, target) {
	  if (target.firstChild) {
	    before(el, target.firstChild);
	  } else {
	    target.appendChild(el);
	  }
	}
	
	/**
	 * Replace target with el
	 *
	 * @param {Element} target
	 * @param {Element} el
	 */
	
	function replace(target, el) {
	  var parent = target.parentNode;
	  if (parent) {
	    parent.replaceChild(el, target);
	  }
	}
	
	/**
	 * Add event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 * @param {Boolean} [useCapture]
	 */
	
	function on(el, event, cb, useCapture) {
	  el.addEventListener(event, cb, useCapture);
	}
	
	/**
	 * Remove event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */
	
	function off(el, event, cb) {
	  el.removeEventListener(event, cb);
	}
	
	/**
	 * For IE9 compat: when both class and :class are present
	 * getAttribute('class') returns wrong value...
	 *
	 * @param {Element} el
	 * @return {String}
	 */
	
	function getClass(el) {
	  var classname = el.className;
	  if (typeof classname === 'object') {
	    classname = classname.baseVal || '';
	  }
	  return classname;
	}
	
	/**
	 * In IE9, setAttribute('class') will result in empty class
	 * if the element also has the :class attribute; However in
	 * PhantomJS, setting `className` does not work on SVG elements...
	 * So we have to do a conditional check here.
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */
	
	function setClass(el, cls) {
	  /* istanbul ignore if */
	  if (isIE9 && !/svg$/.test(el.namespaceURI)) {
	    el.className = cls;
	  } else {
	    el.setAttribute('class', cls);
	  }
	}
	
	/**
	 * Add class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */
	
	function addClass(el, cls) {
	  if (el.classList) {
	    el.classList.add(cls);
	  } else {
	    var cur = ' ' + getClass(el) + ' ';
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      setClass(el, (cur + cls).trim());
	    }
	  }
	}
	
	/**
	 * Remove class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */
	
	function removeClass(el, cls) {
	  if (el.classList) {
	    el.classList.remove(cls);
	  } else {
	    var cur = ' ' + getClass(el) + ' ';
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    setClass(el, cur.trim());
	  }
	  if (!el.className) {
	    el.removeAttribute('class');
	  }
	}
	
	/**
	 * Extract raw content inside an element into a temporary
	 * container div
	 *
	 * @param {Element} el
	 * @param {Boolean} asFragment
	 * @return {Element|DocumentFragment}
	 */
	
	function extractContent(el, asFragment) {
	  var child;
	  var rawContent;
	  /* istanbul ignore if */
	  if (isTemplate(el) && isFragment(el.content)) {
	    el = el.content;
	  }
	  if (el.hasChildNodes()) {
	    trimNode(el);
	    rawContent = asFragment ? document.createDocumentFragment() : document.createElement('div');
	    /* eslint-disable no-cond-assign */
	    while (child = el.firstChild) {
	      /* eslint-enable no-cond-assign */
	      rawContent.appendChild(child);
	    }
	  }
	  return rawContent;
	}
	
	/**
	 * Trim possible empty head/tail text and comment
	 * nodes inside a parent.
	 *
	 * @param {Node} node
	 */
	
	function trimNode(node) {
	  var child;
	  /* eslint-disable no-sequences */
	  while ((child = node.firstChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  while ((child = node.lastChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  /* eslint-enable no-sequences */
	}
	
	function isTrimmable(node) {
	  return node && (node.nodeType === 3 && !node.data.trim() || node.nodeType === 8);
	}
	
	/**
	 * Check if an element is a template tag.
	 * Note if the template appears inside an SVG its tagName
	 * will be in lowercase.
	 *
	 * @param {Element} el
	 */
	
	function isTemplate(el) {
	  return el.tagName && el.tagName.toLowerCase() === 'template';
	}
	
	/**
	 * Create an "anchor" for performing dom insertion/removals.
	 * This is used in a number of scenarios:
	 * - fragment instance
	 * - v-html
	 * - v-if
	 * - v-for
	 * - component
	 *
	 * @param {String} content
	 * @param {Boolean} persist - IE trashes empty textNodes on
	 *                            cloneNode(true), so in certain
	 *                            cases the anchor needs to be
	 *                            non-empty to be persisted in
	 *                            templates.
	 * @return {Comment|Text}
	 */
	
	function createAnchor(content, persist) {
	  var anchor = config.debug ? document.createComment(content) : document.createTextNode(persist ? ' ' : '');
	  anchor.__v_anchor = true;
	  return anchor;
	}
	
	/**
	 * Find a component ref attribute that starts with $.
	 *
	 * @param {Element} node
	 * @return {String|undefined}
	 */
	
	var refRE = /^v-ref:/;
	
	function findRef(node) {
	  if (node.hasAttributes()) {
	    var attrs = node.attributes;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      var name = attrs[i].name;
	      if (refRE.test(name)) {
	        return camelize(name.replace(refRE, ''));
	      }
	    }
	  }
	}
	
	/**
	 * Map a function to a range of nodes .
	 *
	 * @param {Node} node
	 * @param {Node} end
	 * @param {Function} op
	 */
	
	function mapNodeRange(node, end, op) {
	  var next;
	  while (node !== end) {
	    next = node.nextSibling;
	    op(node);
	    node = next;
	  }
	  op(end);
	}
	
	/**
	 * Remove a range of nodes with transition, store
	 * the nodes in a fragment with correct ordering,
	 * and call callback when done.
	 *
	 * @param {Node} start
	 * @param {Node} end
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Function} cb
	 */
	
	function removeNodeRange(start, end, vm, frag, cb) {
	  var done = false;
	  var removed = 0;
	  var nodes = [];
	  mapNodeRange(start, end, function (node) {
	    if (node === end) done = true;
	    nodes.push(node);
	    removeWithTransition(node, vm, onRemoved);
	  });
	  function onRemoved() {
	    removed++;
	    if (done && removed >= nodes.length) {
	      for (var i = 0; i < nodes.length; i++) {
	        frag.appendChild(nodes[i]);
	      }
	      cb && cb();
	    }
	  }
	}
	
	/**
	 * Check if a node is a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */
	
	function isFragment(node) {
	  return node && node.nodeType === 11;
	}
	
	/**
	 * Get outerHTML of elements, taking care
	 * of SVG elements in IE as well.
	 *
	 * @param {Element} el
	 * @return {String}
	 */
	
	function getOuterHTML(el) {
	  if (el.outerHTML) {
	    return el.outerHTML;
	  } else {
	    var container = document.createElement('div');
	    container.appendChild(el.cloneNode(true));
	    return container.innerHTML;
	  }
	}
	
	var commonTagRE = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/i;
	var reservedTagRE = /^(slot|partial|component)$/i;
	
	var isUnknownElement = undefined;
	if (process.env.NODE_ENV !== 'production') {
	  isUnknownElement = function (el, tag) {
	    if (tag.indexOf('-') > -1) {
	      // http://stackoverflow.com/a/28210364/1070244
	      return el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
	    } else {
	      return (/HTMLUnknownElement/.test(el.toString()) &&
	        // Chrome returns unknown for several HTML5 elements.
	        // https://code.google.com/p/chromium/issues/detail?id=540526
	        // Firefox returns unknown for some "Interactive elements."
	        !/^(data|time|rtc|rb|details|dialog|summary)$/.test(tag)
	      );
	    }
	  };
	}
	
	/**
	 * Check if an element is a component, if yes return its
	 * component id.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */
	
	function checkComponentAttr(el, options) {
	  var tag = el.tagName.toLowerCase();
	  var hasAttrs = el.hasAttributes();
	  if (!commonTagRE.test(tag) && !reservedTagRE.test(tag)) {
	    if (resolveAsset(options, 'components', tag)) {
	      return { id: tag };
	    } else {
	      var is = hasAttrs && getIsBinding(el, options);
	      if (is) {
	        return is;
	      } else if (process.env.NODE_ENV !== 'production') {
	        var expectedTag = options._componentNameMap && options._componentNameMap[tag];
	        if (expectedTag) {
	          warn('Unknown custom element: <' + tag + '> - ' + 'did you mean <' + expectedTag + '>? ' + 'HTML is case-insensitive, remember to use kebab-case in templates.');
	        } else if (isUnknownElement(el, tag)) {
	          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.');
	        }
	      }
	    }
	  } else if (hasAttrs) {
	    return getIsBinding(el, options);
	  }
	}
	
	/**
	 * Get "is" binding from an element.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */
	
	function getIsBinding(el, options) {
	  // dynamic syntax
	  var exp = el.getAttribute('is');
	  if (exp != null) {
	    if (resolveAsset(options, 'components', exp)) {
	      el.removeAttribute('is');
	      return { id: exp };
	    }
	  } else {
	    exp = getBindAttr(el, 'is');
	    if (exp != null) {
	      return { id: exp, dynamic: true };
	    }
	  }
	}
	
	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 *
	 * All strategy functions follow the same signature:
	 *
	 * @param {*} parentVal
	 * @param {*} childVal
	 * @param {Vue} [vm]
	 */
	
	var strats = config.optionMergeStrategies = Object.create(null);
	
	/**
	 * Helper that recursively merges two data objects together.
	 */
	
	function mergeData(to, from) {
	  var key, toVal, fromVal;
	  for (key in from) {
	    toVal = to[key];
	    fromVal = from[key];
	    if (!hasOwn(to, key)) {
	      set(to, key, fromVal);
	    } else if (isObject(toVal) && isObject(fromVal)) {
	      mergeData(toVal, fromVal);
	    }
	  }
	  return to;
	}
	
	/**
	 * Data
	 */
	
	strats.data = function (parentVal, childVal, vm) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal;
	    }
	    if (typeof childVal !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
	      return parentVal;
	    }
	    if (!parentVal) {
	      return childVal;
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn() {
	      return mergeData(childVal.call(this), parentVal.call(this));
	    };
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn() {
	      // instance merge
	      var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
	      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
	      if (instanceData) {
	        return mergeData(instanceData, defaultData);
	      } else {
	        return defaultData;
	      }
	    };
	  }
	};
	
	/**
	 * El
	 */
	
	strats.el = function (parentVal, childVal, vm) {
	  if (!vm && childVal && typeof childVal !== 'function') {
	    process.env.NODE_ENV !== 'production' && warn('The "el" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
	    return;
	  }
	  var ret = childVal || parentVal;
	  // invoke the element factory if this is instance merge
	  return vm && typeof ret === 'function' ? ret.call(vm) : ret;
	};
	
	/**
	 * Hooks and param attributes are merged as arrays.
	 */
	
	strats.init = strats.created = strats.ready = strats.attached = strats.detached = strats.beforeCompile = strats.compiled = strats.beforeDestroy = strats.destroyed = strats.activate = function (parentVal, childVal) {
	  return childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
	};
	
	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */
	
	function mergeAssets(parentVal, childVal) {
	  var res = Object.create(parentVal || null);
	  return childVal ? extend(res, guardArrayAssets(childVal)) : res;
	}
	
	config._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets;
	});
	
	/**
	 * Events & Watchers.
	 *
	 * Events & watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */
	
	strats.watch = strats.events = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = {};
	  extend(ret, parentVal);
	  for (var key in childVal) {
	    var parent = ret[key];
	    var child = childVal[key];
	    if (parent && !isArray(parent)) {
	      parent = [parent];
	    }
	    ret[key] = parent ? parent.concat(child) : [child];
	  }
	  return ret;
	};
	
	/**
	 * Other object hashes.
	 */
	
	strats.props = strats.methods = strats.computed = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = Object.create(null);
	  extend(ret, parentVal);
	  extend(ret, childVal);
	  return ret;
	};
	
	/**
	 * Default strategy.
	 */
	
	var defaultStrat = function defaultStrat(parentVal, childVal) {
	  return childVal === undefined ? parentVal : childVal;
	};
	
	/**
	 * Make sure component options get converted to actual
	 * constructors.
	 *
	 * @param {Object} options
	 */
	
	function guardComponents(options) {
	  if (options.components) {
	    var components = options.components = guardArrayAssets(options.components);
	    var ids = Object.keys(components);
	    var def;
	    if (process.env.NODE_ENV !== 'production') {
	      var map = options._componentNameMap = {};
	    }
	    for (var i = 0, l = ids.length; i < l; i++) {
	      var key = ids[i];
	      if (commonTagRE.test(key) || reservedTagRE.test(key)) {
	        process.env.NODE_ENV !== 'production' && warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
	        continue;
	      }
	      // record a all lowercase <-> kebab-case mapping for
	      // possible custom element case error warning
	      if (process.env.NODE_ENV !== 'production') {
	        map[key.replace(/-/g, '').toLowerCase()] = hyphenate(key);
	      }
	      def = components[key];
	      if (isPlainObject(def)) {
	        components[key] = Vue.extend(def);
	      }
	    }
	  }
	}
	
	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 *
	 * @param {Object} options
	 */
	
	function guardProps(options) {
	  var props = options.props;
	  var i, val;
	  if (isArray(props)) {
	    options.props = {};
	    i = props.length;
	    while (i--) {
	      val = props[i];
	      if (typeof val === 'string') {
	        options.props[val] = null;
	      } else if (val.name) {
	        options.props[val.name] = val;
	      }
	    }
	  } else if (isPlainObject(props)) {
	    var keys = Object.keys(props);
	    i = keys.length;
	    while (i--) {
	      val = props[keys[i]];
	      if (typeof val === 'function') {
	        props[keys[i]] = { type: val };
	      }
	    }
	  }
	}
	
	/**
	 * Guard an Array-format assets option and converted it
	 * into the key-value Object format.
	 *
	 * @param {Object|Array} assets
	 * @return {Object}
	 */
	
	function guardArrayAssets(assets) {
	  if (isArray(assets)) {
	    var res = {};
	    var i = assets.length;
	    var asset;
	    while (i--) {
	      asset = assets[i];
	      var id = typeof asset === 'function' ? asset.options && asset.options.name || asset.id : asset.name || asset.id;
	      if (!id) {
	        process.env.NODE_ENV !== 'production' && warn('Array-syntax assets must provide a "name" or "id" field.');
	      } else {
	        res[id] = asset;
	      }
	    }
	    return res;
	  }
	  return assets;
	}
	
	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 *
	 * @param {Object} parent
	 * @param {Object} child
	 * @param {Vue} [vm] - if vm is present, indicates this is
	 *                     an instantiation merge.
	 */
	
	function mergeOptions(parent, child, vm) {
	  guardComponents(child);
	  guardProps(child);
	  if (process.env.NODE_ENV !== 'production') {
	    if (child.propsData && !vm) {
	      warn('propsData can only be used as an instantiation option.');
	    }
	  }
	  var options = {};
	  var key;
	  if (child['extends']) {
	    parent = typeof child['extends'] === 'function' ? mergeOptions(parent, child['extends'].options, vm) : mergeOptions(parent, child['extends'], vm);
	  }
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      var mixin = child.mixins[i];
	      var mixinOptions = mixin.prototype instanceof Vue ? mixin.options : mixin;
	      parent = mergeOptions(parent, mixinOptions, vm);
	    }
	  }
	  for (key in parent) {
	    mergeField(key);
	  }
	  for (key in child) {
	    if (!hasOwn(parent, key)) {
	      mergeField(key);
	    }
	  }
	  function mergeField(key) {
	    var strat = strats[key] || defaultStrat;
	    options[key] = strat(parent[key], child[key], vm, key);
	  }
	  return options;
	}
	
	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 *
	 * @param {Object} options
	 * @param {String} type
	 * @param {String} id
	 * @param {Boolean} warnMissing
	 * @return {Object|Function}
	 */
	
	function resolveAsset(options, type, id, warnMissing) {
	  /* istanbul ignore if */
	  if (typeof id !== 'string') {
	    return;
	  }
	  var assets = options[type];
	  var camelizedId;
	  var res = assets[id] ||
	  // camelCase ID
	  assets[camelizedId = camelize(id)] ||
	  // Pascal Case ID
	  assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)];
	  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
	    warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
	  }
	  return res;
	}
	
	var uid$1 = 0;
	
	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 *
	 * @constructor
	 */
	function Dep() {
	  this.id = uid$1++;
	  this.subs = [];
	}
	
	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;
	
	/**
	 * Add a directive subscriber.
	 *
	 * @param {Directive} sub
	 */
	
	Dep.prototype.addSub = function (sub) {
	  this.subs.push(sub);
	};
	
	/**
	 * Remove a directive subscriber.
	 *
	 * @param {Directive} sub
	 */
	
	Dep.prototype.removeSub = function (sub) {
	  this.subs.$remove(sub);
	};
	
	/**
	 * Add self as a dependency to the target watcher.
	 */
	
	Dep.prototype.depend = function () {
	  Dep.target.addDep(this);
	};
	
	/**
	 * Notify all subscribers of a new value.
	 */
	
	Dep.prototype.notify = function () {
	  // stablize the subscriber list first
	  var subs = toArray(this.subs);
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};
	
	var arrayProto = Array.prototype;
	var arrayMethods = Object.create(arrayProto)
	
	/**
	 * Intercept mutating methods and emit events
	 */
	
	;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  def(arrayMethods, method, function mutator() {
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments[i];
	    }
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted;
	    switch (method) {
	      case 'push':
	        inserted = args;
	        break;
	      case 'unshift':
	        inserted = args;
	        break;
	      case 'splice':
	        inserted = args.slice(2);
	        break;
	    }
	    if (inserted) ob.observeArray(inserted);
	    // notify change
	    ob.dep.notify();
	    return result;
	  });
	});
	
	/**
	 * Swap the element at the given index with a new value
	 * and emits corresponding event.
	 *
	 * @param {Number} index
	 * @param {*} val
	 * @return {*} - replaced element
	 */
	
	def(arrayProto, '$set', function $set(index, val) {
	  if (index >= this.length) {
	    this.length = Number(index) + 1;
	  }
	  return this.splice(index, 1, val)[0];
	});
	
	/**
	 * Convenience method to remove the element at given index or target element reference.
	 *
	 * @param {*} item
	 */
	
	def(arrayProto, '$remove', function $remove(item) {
	  /* istanbul ignore if */
	  if (!this.length) return;
	  var index = indexOf(this, item);
	  if (index > -1) {
	    return this.splice(index, 1);
	  }
	});
	
	var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
	
	/**
	 * By default, when a reactive property is set, the new value is
	 * also converted to become reactive. However in certain cases, e.g.
	 * v-for scope alias and props, we don't want to force conversion
	 * because the value may be a nested value under a frozen data structure.
	 *
	 * So whenever we want to set a reactive property without forcing
	 * conversion on the new value, we wrap that call inside this function.
	 */
	
	var shouldConvert = true;
	
	function withoutConversion(fn) {
	  shouldConvert = false;
	  fn();
	  shouldConvert = true;
	}
	
	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 *
	 * @param {Array|Object} value
	 * @constructor
	 */
	
	function Observer(value) {
	  this.value = value;
	  this.dep = new Dep();
	  def(value, '__ob__', this);
	  if (isArray(value)) {
	    var augment = hasProto ? protoAugment : copyAugment;
	    augment(value, arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	}
	
	// Instance methods
	
	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 *
	 * @param {Object} obj
	 */
	
	Observer.prototype.walk = function (obj) {
	  var keys = Object.keys(obj);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    this.convert(keys[i], obj[keys[i]]);
	  }
	};
	
	/**
	 * Observe a list of Array items.
	 *
	 * @param {Array} items
	 */
	
	Observer.prototype.observeArray = function (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
	};
	
	/**
	 * Convert a property into getter/setter so we can emit
	 * the events when the property is accessed/changed.
	 *
	 * @param {String} key
	 * @param {*} val
	 */
	
	Observer.prototype.convert = function (key, val) {
	  defineReactive(this.value, key, val);
	};
	
	/**
	 * Add an owner vm, so that when $set/$delete mutations
	 * happen we can notify owner vms to proxy the keys and
	 * digest the watchers. This is only called when the object
	 * is observed as an instance's root $data.
	 *
	 * @param {Vue} vm
	 */
	
	Observer.prototype.addVm = function (vm) {
	  (this.vms || (this.vms = [])).push(vm);
	};
	
	/**
	 * Remove an owner vm. This is called when the object is
	 * swapped out as an instance's $data object.
	 *
	 * @param {Vue} vm
	 */
	
	Observer.prototype.removeVm = function (vm) {
	  this.vms.$remove(vm);
	};
	
	// helpers
	
	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 *
	 * @param {Object|Array} target
	 * @param {Object} src
	 */
	
	function protoAugment(target, src) {
	  /* eslint-disable no-proto */
	  target.__proto__ = src;
	  /* eslint-enable no-proto */
	}
	
	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */
	
	function copyAugment(target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    def(target, key, src[key]);
	  }
	}
	
	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 *
	 * @param {*} value
	 * @param {Vue} [vm]
	 * @return {Observer|undefined}
	 * @static
	 */
	
	function observe(value, vm) {
	  if (!value || typeof value !== 'object') {
	    return;
	  }
	  var ob;
	  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if (shouldConvert && (isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
	    ob = new Observer(value);
	  }
	  if (ob && vm) {
	    ob.addVm(vm);
	  }
	  return ob;
	}
	
	/**
	 * Define a reactive property on an Object.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 */
	
	function defineReactive(obj, key, val) {
	  var dep = new Dep();
	
	  var property = Object.getOwnPropertyDescriptor(obj, key);
	  if (property && property.configurable === false) {
	    return;
	  }
	
	  // cater for pre-defined getter/setters
	  var getter = property && property.get;
	  var setter = property && property.set;
	
	  var childOb = observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter() {
	      var value = getter ? getter.call(obj) : val;
	      if (Dep.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	        }
	        if (isArray(value)) {
	          for (var e, i = 0, l = value.length; i < l; i++) {
	            e = value[i];
	            e && e.__ob__ && e.__ob__.dep.depend();
	          }
	        }
	      }
	      return value;
	    },
	    set: function reactiveSetter(newVal) {
	      var value = getter ? getter.call(obj) : val;
	      if (newVal === value) {
	        return;
	      }
	      if (setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }
	      childOb = observe(newVal);
	      dep.notify();
	    }
	  });
	}
	
	
	
	var util = Object.freeze({
		defineReactive: defineReactive,
		set: set,
		del: del,
		hasOwn: hasOwn,
		isLiteral: isLiteral,
		isReserved: isReserved,
		_toString: _toString,
		toNumber: toNumber,
		toBoolean: toBoolean,
		stripQuotes: stripQuotes,
		camelize: camelize,
		hyphenate: hyphenate,
		classify: classify,
		bind: bind,
		toArray: toArray,
		extend: extend,
		isObject: isObject,
		isPlainObject: isPlainObject,
		def: def,
		debounce: _debounce,
		indexOf: indexOf,
		cancellable: cancellable,
		looseEqual: looseEqual,
		isArray: isArray,
		hasProto: hasProto,
		inBrowser: inBrowser,
		devtools: devtools,
		isIE: isIE,
		isIE9: isIE9,
		isAndroid: isAndroid,
		isIOS: isIOS,
		get transitionProp () { return transitionProp; },
		get transitionEndEvent () { return transitionEndEvent; },
		get animationProp () { return animationProp; },
		get animationEndEvent () { return animationEndEvent; },
		nextTick: nextTick,
		get _Set () { return _Set; },
		query: query,
		inDoc: inDoc,
		getAttr: getAttr,
		getBindAttr: getBindAttr,
		hasBindAttr: hasBindAttr,
		before: before,
		after: after,
		remove: remove,
		prepend: prepend,
		replace: replace,
		on: on,
		off: off,
		setClass: setClass,
		addClass: addClass,
		removeClass: removeClass,
		extractContent: extractContent,
		trimNode: trimNode,
		isTemplate: isTemplate,
		createAnchor: createAnchor,
		findRef: findRef,
		mapNodeRange: mapNodeRange,
		removeNodeRange: removeNodeRange,
		isFragment: isFragment,
		getOuterHTML: getOuterHTML,
		mergeOptions: mergeOptions,
		resolveAsset: resolveAsset,
		checkComponentAttr: checkComponentAttr,
		commonTagRE: commonTagRE,
		reservedTagRE: reservedTagRE,
		get warn () { return warn; }
	});
	
	var uid = 0;
	
	function initMixin (Vue) {
	  /**
	   * The main init sequence. This is called for every
	   * instance, including ones that are created from extended
	   * constructors.
	   *
	   * @param {Object} options - this options object should be
	   *                           the result of merging class
	   *                           options and the options passed
	   *                           in to the constructor.
	   */
	
	  Vue.prototype._init = function (options) {
	    options = options || {};
	
	    this.$el = null;
	    this.$parent = options.parent;
	    this.$root = this.$parent ? this.$parent.$root : this;
	    this.$children = [];
	    this.$refs = {}; // child vm references
	    this.$els = {}; // element references
	    this._watchers = []; // all watchers as an array
	    this._directives = []; // all directives
	
	    // a uid
	    this._uid = uid++;
	
	    // a flag to avoid this being observed
	    this._isVue = true;
	
	    // events bookkeeping
	    this._events = {}; // registered callbacks
	    this._eventsCount = {}; // for $broadcast optimization
	
	    // fragment instance properties
	    this._isFragment = false;
	    this._fragment = // @type {DocumentFragment}
	    this._fragmentStart = // @type {Text|Comment}
	    this._fragmentEnd = null; // @type {Text|Comment}
	
	    // lifecycle state
	    this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = this._vForRemoving = false;
	    this._unlinkFn = null;
	
	    // context:
	    // if this is a transcluded component, context
	    // will be the common parent vm of this instance
	    // and its host.
	    this._context = options._context || this.$parent;
	
	    // scope:
	    // if this is inside an inline v-for, the scope
	    // will be the intermediate scope created for this
	    // repeat fragment. this is used for linking props
	    // and container directives.
	    this._scope = options._scope;
	
	    // fragment:
	    // if this instance is compiled inside a Fragment, it
	    // needs to register itself as a child of that fragment
	    // for attach/detach to work properly.
	    this._frag = options._frag;
	    if (this._frag) {
	      this._frag.children.push(this);
	    }
	
	    // push self into parent / transclusion host
	    if (this.$parent) {
	      this.$parent.$children.push(this);
	    }
	
	    // merge options.
	    options = this.$options = mergeOptions(this.constructor.options, options, this);
	
	    // set ref
	    this._updateRef();
	
	    // initialize data as empty object.
	    // it will be filled up in _initData().
	    this._data = {};
	
	    // call init hook
	    this._callHook('init');
	
	    // initialize data observation and scope inheritance.
	    this._initState();
	
	    // setup event system and option events.
	    this._initEvents();
	
	    // call created hook
	    this._callHook('created');
	
	    // if `el` option is passed, start compilation.
	    if (options.el) {
	      this.$mount(options.el);
	    }
	  };
	}
	
	var pathCache = new Cache(1000);
	
	// actions
	var APPEND = 0;
	var PUSH = 1;
	var INC_SUB_PATH_DEPTH = 2;
	var PUSH_SUB_PATH = 3;
	
	// states
	var BEFORE_PATH = 0;
	var IN_PATH = 1;
	var BEFORE_IDENT = 2;
	var IN_IDENT = 3;
	var IN_SUB_PATH = 4;
	var IN_SINGLE_QUOTE = 5;
	var IN_DOUBLE_QUOTE = 6;
	var AFTER_PATH = 7;
	var ERROR = 8;
	
	var pathStateMachine = [];
	
	pathStateMachine[BEFORE_PATH] = {
	  'ws': [BEFORE_PATH],
	  'ident': [IN_IDENT, APPEND],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};
	
	pathStateMachine[IN_PATH] = {
	  'ws': [IN_PATH],
	  '.': [BEFORE_IDENT],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};
	
	pathStateMachine[BEFORE_IDENT] = {
	  'ws': [BEFORE_IDENT],
	  'ident': [IN_IDENT, APPEND]
	};
	
	pathStateMachine[IN_IDENT] = {
	  'ident': [IN_IDENT, APPEND],
	  '0': [IN_IDENT, APPEND],
	  'number': [IN_IDENT, APPEND],
	  'ws': [IN_PATH, PUSH],
	  '.': [BEFORE_IDENT, PUSH],
	  '[': [IN_SUB_PATH, PUSH],
	  'eof': [AFTER_PATH, PUSH]
	};
	
	pathStateMachine[IN_SUB_PATH] = {
	  "'": [IN_SINGLE_QUOTE, APPEND],
	  '"': [IN_DOUBLE_QUOTE, APPEND],
	  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
	  ']': [IN_PATH, PUSH_SUB_PATH],
	  'eof': ERROR,
	  'else': [IN_SUB_PATH, APPEND]
	};
	
	pathStateMachine[IN_SINGLE_QUOTE] = {
	  "'": [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_SINGLE_QUOTE, APPEND]
	};
	
	pathStateMachine[IN_DOUBLE_QUOTE] = {
	  '"': [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_DOUBLE_QUOTE, APPEND]
	};
	
	/**
	 * Determine the type of a character in a keypath.
	 *
	 * @param {Char} ch
	 * @return {String} type
	 */
	
	function getPathCharType(ch) {
	  if (ch === undefined) {
	    return 'eof';
	  }
	
	  var code = ch.charCodeAt(0);
	
	  switch (code) {
	    case 0x5B: // [
	    case 0x5D: // ]
	    case 0x2E: // .
	    case 0x22: // "
	    case 0x27: // '
	    case 0x30:
	      // 0
	      return ch;
	
	    case 0x5F: // _
	    case 0x24:
	      // $
	      return 'ident';
	
	    case 0x20: // Space
	    case 0x09: // Tab
	    case 0x0A: // Newline
	    case 0x0D: // Return
	    case 0xA0: // No-break space
	    case 0xFEFF: // Byte Order Mark
	    case 0x2028: // Line Separator
	    case 0x2029:
	      // Paragraph Separator
	      return 'ws';
	  }
	
	  // a-z, A-Z
	  if (code >= 0x61 && code <= 0x7A || code >= 0x41 && code <= 0x5A) {
	    return 'ident';
	  }
	
	  // 1-9
	  if (code >= 0x31 && code <= 0x39) {
	    return 'number';
	  }
	
	  return 'else';
	}
	
	/**
	 * Format a subPath, return its plain form if it is
	 * a literal string or number. Otherwise prepend the
	 * dynamic indicator (*).
	 *
	 * @param {String} path
	 * @return {String}
	 */
	
	function formatSubPath(path) {
	  var trimmed = path.trim();
	  // invalid leading 0
	  if (path.charAt(0) === '0' && isNaN(path)) {
	    return false;
	  }
	  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed;
	}
	
	/**
	 * Parse a string path into an array of segments
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */
	
	function parse(path) {
	  var keys = [];
	  var index = -1;
	  var mode = BEFORE_PATH;
	  var subPathDepth = 0;
	  var c, newChar, key, type, transition, action, typeMap;
	
	  var actions = [];
	
	  actions[PUSH] = function () {
	    if (key !== undefined) {
	      keys.push(key);
	      key = undefined;
	    }
	  };
	
	  actions[APPEND] = function () {
	    if (key === undefined) {
	      key = newChar;
	    } else {
	      key += newChar;
	    }
	  };
	
	  actions[INC_SUB_PATH_DEPTH] = function () {
	    actions[APPEND]();
	    subPathDepth++;
	  };
	
	  actions[PUSH_SUB_PATH] = function () {
	    if (subPathDepth > 0) {
	      subPathDepth--;
	      mode = IN_SUB_PATH;
	      actions[APPEND]();
	    } else {
	      subPathDepth = 0;
	      key = formatSubPath(key);
	      if (key === false) {
	        return false;
	      } else {
	        actions[PUSH]();
	      }
	    }
	  };
	
	  function maybeUnescapeQuote() {
	    var nextChar = path[index + 1];
	    if (mode === IN_SINGLE_QUOTE && nextChar === "'" || mode === IN_DOUBLE_QUOTE && nextChar === '"') {
	      index++;
	      newChar = '\\' + nextChar;
	      actions[APPEND]();
	      return true;
	    }
	  }
	
	  while (mode != null) {
	    index++;
	    c = path[index];
	
	    if (c === '\\' && maybeUnescapeQuote()) {
	      continue;
	    }
	
	    type = getPathCharType(c);
	    typeMap = pathStateMachine[mode];
	    transition = typeMap[type] || typeMap['else'] || ERROR;
	
	    if (transition === ERROR) {
	      return; // parse error
	    }
	
	    mode = transition[0];
	    action = actions[transition[1]];
	    if (action) {
	      newChar = transition[2];
	      newChar = newChar === undefined ? c : newChar;
	      if (action() === false) {
	        return;
	      }
	    }
	
	    if (mode === AFTER_PATH) {
	      keys.raw = path;
	      return keys;
	    }
	  }
	}
	
	/**
	 * External parse that check for a cache hit first
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */
	
	function parsePath(path) {
	  var hit = pathCache.get(path);
	  if (!hit) {
	    hit = parse(path);
	    if (hit) {
	      pathCache.put(path, hit);
	    }
	  }
	  return hit;
	}
	
	/**
	 * Get from an object from a path string
	 *
	 * @param {Object} obj
	 * @param {String} path
	 */
	
	function getPath(obj, path) {
	  return parseExpression$1(path).get(obj);
	}
	
	/**
	 * Warn against setting non-existent root path on a vm.
	 */
	
	var warnNonExistent;
	if (process.env.NODE_ENV !== 'production') {
	  warnNonExistent = function (path, vm) {
	    warn('You are setting a non-existent path "' + path.raw + '" ' + 'on a vm instance. Consider pre-initializing the property ' + 'with the "data" option for more reliable reactivity ' + 'and better performance.', vm);
	  };
	}
	
	/**
	 * Set on an object from a path
	 *
	 * @param {Object} obj
	 * @param {String | Array} path
	 * @param {*} val
	 */
	
	function setPath(obj, path, val) {
	  var original = obj;
	  if (typeof path === 'string') {
	    path = parse(path);
	  }
	  if (!path || !isObject(obj)) {
	    return false;
	  }
	  var last, key;
	  for (var i = 0, l = path.length; i < l; i++) {
	    last = obj;
	    key = path[i];
	    if (key.charAt(0) === '*') {
	      key = parseExpression$1(key.slice(1)).get.call(original, original);
	    }
	    if (i < l - 1) {
	      obj = obj[key];
	      if (!isObject(obj)) {
	        obj = {};
	        if (process.env.NODE_ENV !== 'production' && last._isVue) {
	          warnNonExistent(path, last);
	        }
	        set(last, key, obj);
	      }
	    } else {
	      if (isArray(obj)) {
	        obj.$set(key, val);
	      } else if (key in obj) {
	        obj[key] = val;
	      } else {
	        if (process.env.NODE_ENV !== 'production' && obj._isVue) {
	          warnNonExistent(path, obj);
	        }
	        set(obj, key, val);
	      }
	    }
	  }
	  return true;
	}
	
	var path = Object.freeze({
	  parsePath: parsePath,
	  getPath: getPath,
	  setPath: setPath
	});
	
	var expressionCache = new Cache(1000);
	
	var allowedKeywords = 'Math,Date,this,true,false,null,undefined,Infinity,NaN,' + 'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' + 'encodeURIComponent,parseInt,parseFloat';
	var allowedKeywordsRE = new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)');
	
	// keywords that don't make sense inside expressions
	var improperKeywords = 'break,case,class,catch,const,continue,debugger,default,' + 'delete,do,else,export,extends,finally,for,function,if,' + 'import,in,instanceof,let,return,super,switch,throw,try,' + 'var,while,with,yield,enum,await,implements,package,' + 'protected,static,interface,private,public';
	var improperKeywordsRE = new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)');
	
	var wsRE = /\s/g;
	var newlineRE = /\n/g;
	var saveRE = /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\"']|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g;
	var restoreRE = /"(\d+)"/g;
	var pathTestRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;
	var identRE = /[^\w$\.](?:[A-Za-z_$][\w$]*)/g;
	var literalValueRE$1 = /^(?:true|false|null|undefined|Infinity|NaN)$/;
	
	function noop() {}
	
	/**
	 * Save / Rewrite / Restore
	 *
	 * When rewriting paths found in an expression, it is
	 * possible for the same letter sequences to be found in
	 * strings and Object literal property keys. Therefore we
	 * remove and store these parts in a temporary array, and
	 * restore them after the path rewrite.
	 */
	
	var saved = [];
	
	/**
	 * Save replacer
	 *
	 * The save regex can match two possible cases:
	 * 1. An opening object literal
	 * 2. A string
	 * If matched as a plain string, we need to escape its
	 * newlines, since the string needs to be preserved when
	 * generating the function body.
	 *
	 * @param {String} str
	 * @param {String} isString - str if matched as a string
	 * @return {String} - placeholder with index
	 */
	
	function save(str, isString) {
	  var i = saved.length;
	  saved[i] = isString ? str.replace(newlineRE, '\\n') : str;
	  return '"' + i + '"';
	}
	
	/**
	 * Path rewrite replacer
	 *
	 * @param {String} raw
	 * @return {String}
	 */
	
	function rewrite(raw) {
	  var c = raw.charAt(0);
	  var path = raw.slice(1);
	  if (allowedKeywordsRE.test(path)) {
	    return raw;
	  } else {
	    path = path.indexOf('"') > -1 ? path.replace(restoreRE, restore) : path;
	    return c + 'scope.' + path;
	  }
	}
	
	/**
	 * Restore replacer
	 *
	 * @param {String} str
	 * @param {String} i - matched save index
	 * @return {String}
	 */
	
	function restore(str, i) {
	  return saved[i];
	}
	
	/**
	 * Rewrite an expression, prefixing all path accessors with
	 * `scope.` and generate getter/setter functions.
	 *
	 * @param {String} exp
	 * @return {Function}
	 */
	
	function compileGetter(exp) {
	  if (improperKeywordsRE.test(exp)) {
	    process.env.NODE_ENV !== 'production' && warn('Avoid using reserved keywords in expression: ' + exp);
	  }
	  // reset state
	  saved.length = 0;
	  // save strings and object literal keys
	  var body = exp.replace(saveRE, save).replace(wsRE, '');
	  // rewrite all paths
	  // pad 1 space here because the regex matches 1 extra char
	  body = (' ' + body).replace(identRE, rewrite).replace(restoreRE, restore);
	  return makeGetterFn(body);
	}
	
	/**
	 * Build a getter function. Requires eval.
	 *
	 * We isolate the try/catch so it doesn't affect the
	 * optimization of the parse function when it is not called.
	 *
	 * @param {String} body
	 * @return {Function|undefined}
	 */
	
	function makeGetterFn(body) {
	  try {
	    /* eslint-disable no-new-func */
	    return new Function('scope', 'return ' + body + ';');
	    /* eslint-enable no-new-func */
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production') {
	      /* istanbul ignore if */
	      if (e.toString().match(/unsafe-eval|CSP/)) {
	        warn('It seems you are using the default build of Vue.js in an environment ' + 'with Content Security Policy that prohibits unsafe-eval. ' + 'Use the CSP-compliant build instead: ' + 'http://vuejs.org/guide/installation.html#CSP-compliant-build');
	      } else {
	        warn('Invalid expression. ' + 'Generated function body: ' + body);
	      }
	    }
	    return noop;
	  }
	}
	
	/**
	 * Compile a setter function for the expression.
	 *
	 * @param {String} exp
	 * @return {Function|undefined}
	 */
	
	function compileSetter(exp) {
	  var path = parsePath(exp);
	  if (path) {
	    return function (scope, val) {
	      setPath(scope, path, val);
	    };
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid setter expression: ' + exp);
	  }
	}
	
	/**
	 * Parse an expression into re-written getter/setters.
	 *
	 * @param {String} exp
	 * @param {Boolean} needSet
	 * @return {Function}
	 */
	
	function parseExpression$1(exp, needSet) {
	  exp = exp.trim();
	  // try cache
	  var hit = expressionCache.get(exp);
	  if (hit) {
	    if (needSet && !hit.set) {
	      hit.set = compileSetter(hit.exp);
	    }
	    return hit;
	  }
	  var res = { exp: exp };
	  res.get = isSimplePath(exp) && exp.indexOf('[') < 0
	  // optimized super simple getter
	  ? makeGetterFn('scope.' + exp)
	  // dynamic getter
	  : compileGetter(exp);
	  if (needSet) {
	    res.set = compileSetter(exp);
	  }
	  expressionCache.put(exp, res);
	  return res;
	}
	
	/**
	 * Check if an expression is a simple path.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */
	
	function isSimplePath(exp) {
	  return pathTestRE.test(exp) &&
	  // don't treat literal values as paths
	  !literalValueRE$1.test(exp) &&
	  // Math constants e.g. Math.PI, Math.E etc.
	  exp.slice(0, 5) !== 'Math.';
	}
	
	var expression = Object.freeze({
	  parseExpression: parseExpression$1,
	  isSimplePath: isSimplePath
	});
	
	// we have two separate queues: one for directive updates
	// and one for user watcher registered via $watch().
	// we want to guarantee directive updates to be called
	// before user watchers so that when user watchers are
	// triggered, the DOM would have already been in updated
	// state.
	
	var queue = [];
	var userQueue = [];
	var has = {};
	var circular = {};
	var waiting = false;
	
	/**
	 * Reset the batcher's state.
	 */
	
	function resetBatcherState() {
	  queue.length = 0;
	  userQueue.length = 0;
	  has = {};
	  circular = {};
	  waiting = false;
	}
	
	/**
	 * Flush both queues and run the watchers.
	 */
	
	function flushBatcherQueue() {
	  var _again = true;
	
	  _function: while (_again) {
	    _again = false;
	
	    runBatcherQueue(queue);
	    runBatcherQueue(userQueue);
	    // user watchers triggered more watchers,
	    // keep flushing until it depletes
	    if (queue.length) {
	      _again = true;
	      continue _function;
	    }
	    // dev tool hook
	    /* istanbul ignore if */
	    if (devtools && config.devtools) {
	      devtools.emit('flush');
	    }
	    resetBatcherState();
	  }
	}
	
	/**
	 * Run the watchers in a single queue.
	 *
	 * @param {Array} queue
	 */
	
	function runBatcherQueue(queue) {
	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (var i = 0; i < queue.length; i++) {
	    var watcher = queue[i];
	    var id = watcher.id;
	    has[id] = null;
	    watcher.run();
	    // in dev build, check and stop circular updates.
	    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
	      circular[id] = (circular[id] || 0) + 1;
	      if (circular[id] > config._maxUpdateCount) {
	        warn('You may have an infinite update loop for watcher ' + 'with expression "' + watcher.expression + '"', watcher.vm);
	        break;
	      }
	    }
	  }
	  queue.length = 0;
	}
	
	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 *
	 * @param {Watcher} watcher
	 *   properties:
	 *   - {Number} id
	 *   - {Function} run
	 */
	
	function pushWatcher(watcher) {
	  var id = watcher.id;
	  if (has[id] == null) {
	    // push watcher into appropriate queue
	    var q = watcher.user ? userQueue : queue;
	    has[id] = q.length;
	    q.push(watcher);
	    // queue the flush
	    if (!waiting) {
	      waiting = true;
	      nextTick(flushBatcherQueue);
	    }
	  }
	}
	
	var uid$2 = 0;
	
	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 *
	 * @param {Vue} vm
	 * @param {String|Function} expOrFn
	 * @param {Function} cb
	 * @param {Object} options
	 *                 - {Array} filters
	 *                 - {Boolean} twoWay
	 *                 - {Boolean} deep
	 *                 - {Boolean} user
	 *                 - {Boolean} sync
	 *                 - {Boolean} lazy
	 *                 - {Function} [preProcess]
	 *                 - {Function} [postProcess]
	 * @constructor
	 */
	function Watcher(vm, expOrFn, cb, options) {
	  // mix in options
	  if (options) {
	    extend(this, options);
	  }
	  var isFn = typeof expOrFn === 'function';
	  this.vm = vm;
	  vm._watchers.push(this);
	  this.expression = expOrFn;
	  this.cb = cb;
	  this.id = ++uid$2; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = [];
	  this.newDeps = [];
	  this.depIds = new _Set();
	  this.newDepIds = new _Set();
	  this.prevError = null; // for async error stacks
	  // parse expression for getter/setter
	  if (isFn) {
	    this.getter = expOrFn;
	    this.setter = undefined;
	  } else {
	    var res = parseExpression$1(expOrFn, this.twoWay);
	    this.getter = res.get;
	    this.setter = res.set;
	  }
	  this.value = this.lazy ? undefined : this.get();
	  // state for avoiding false triggers for deep and Array
	  // watchers during vm._digest()
	  this.queued = this.shallow = false;
	}
	
	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */
	
	Watcher.prototype.get = function () {
	  this.beforeGet();
	  var scope = this.scope || this.vm;
	  var value;
	  try {
	    value = this.getter.call(scope, scope);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating expression ' + '"' + this.expression + '": ' + e.toString(), this.vm);
	    }
	  }
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  if (this.preProcess) {
	    value = this.preProcess(value);
	  }
	  if (this.filters) {
	    value = scope._applyFilters(value, null, this.filters, false);
	  }
	  if (this.postProcess) {
	    value = this.postProcess(value);
	  }
	  this.afterGet();
	  return value;
	};
	
	/**
	 * Set the corresponding value with the setter.
	 *
	 * @param {*} value
	 */
	
	Watcher.prototype.set = function (value) {
	  var scope = this.scope || this.vm;
	  if (this.filters) {
	    value = scope._applyFilters(value, this.value, this.filters, true);
	  }
	  try {
	    this.setter.call(scope, scope, value);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating setter ' + '"' + this.expression + '": ' + e.toString(), this.vm);
	    }
	  }
	  // two-way sync for v-for alias
	  var forContext = scope.$forContext;
	  if (forContext && forContext.alias === this.expression) {
	    if (forContext.filters) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using two-way binding on ' + 'a v-for alias (' + this.expression + '), and the ' + 'v-for has filters. This will not work properly. ' + 'Either remove the filters or use an array of ' + 'objects and bind to object properties instead.', this.vm);
	      return;
	    }
	    forContext._withLock(function () {
	      if (scope.$key) {
	        // original is an object
	        forContext.rawValue[scope.$key] = value;
	      } else {
	        forContext.rawValue.$set(scope.$index, value);
	      }
	    });
	  }
	};
	
	/**
	 * Prepare for dependency collection.
	 */
	
	Watcher.prototype.beforeGet = function () {
	  Dep.target = this;
	};
	
	/**
	 * Add a dependency to this directive.
	 *
	 * @param {Dep} dep
	 */
	
	Watcher.prototype.addDep = function (dep) {
	  var id = dep.id;
	  if (!this.newDepIds.has(id)) {
	    this.newDepIds.add(id);
	    this.newDeps.push(dep);
	    if (!this.depIds.has(id)) {
	      dep.addSub(this);
	    }
	  }
	};
	
	/**
	 * Clean up for dependency collection.
	 */
	
	Watcher.prototype.afterGet = function () {
	  Dep.target = null;
	  var i = this.deps.length;
	  while (i--) {
	    var dep = this.deps[i];
	    if (!this.newDepIds.has(dep.id)) {
	      dep.removeSub(this);
	    }
	  }
	  var tmp = this.depIds;
	  this.depIds = this.newDepIds;
	  this.newDepIds = tmp;
	  this.newDepIds.clear();
	  tmp = this.deps;
	  this.deps = this.newDeps;
	  this.newDeps = tmp;
	  this.newDeps.length = 0;
	};
	
	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 *
	 * @param {Boolean} shallow
	 */
	
	Watcher.prototype.update = function (shallow) {
	  if (this.lazy) {
	    this.dirty = true;
	  } else if (this.sync || !config.async) {
	    this.run();
	  } else {
	    // if queued, only overwrite shallow with non-shallow,
	    // but not the other way around.
	    this.shallow = this.queued ? shallow ? this.shallow : false : !!shallow;
	    this.queued = true;
	    // record before-push error stack in debug mode
	    /* istanbul ignore if */
	    if (process.env.NODE_ENV !== 'production' && config.debug) {
	      this.prevError = new Error('[vue] async stack trace');
	    }
	    pushWatcher(this);
	  }
	};
	
	/**
	 * Batcher job interface.
	 * Will be called by the batcher.
	 */
	
	Watcher.prototype.run = function () {
	  if (this.active) {
	    var value = this.get();
	    if (value !== this.value ||
	    // Deep watchers and watchers on Object/Arrays should fire even
	    // when the value is the same, because the value may
	    // have mutated; but only do so if this is a
	    // non-shallow update (caused by a vm digest).
	    (isObject(value) || this.deep) && !this.shallow) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      // in debug + async mode, when a watcher callbacks
	      // throws, we also throw the saved before-push error
	      // so the full cross-tick stack trace is available.
	      var prevError = this.prevError;
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && config.debug && prevError) {
	        this.prevError = null;
	        try {
	          this.cb.call(this.vm, value, oldValue);
	        } catch (e) {
	          nextTick(function () {
	            throw prevError;
	          }, 0);
	          throw e;
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue);
	      }
	    }
	    this.queued = this.shallow = false;
	  }
	};
	
	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */
	
	Watcher.prototype.evaluate = function () {
	  // avoid overwriting another watcher that is being
	  // collected.
	  var current = Dep.target;
	  this.value = this.get();
	  this.dirty = false;
	  Dep.target = current;
	};
	
	/**
	 * Depend on all deps collected by this watcher.
	 */
	
	Watcher.prototype.depend = function () {
	  var i = this.deps.length;
	  while (i--) {
	    this.deps[i].depend();
	  }
	};
	
	/**
	 * Remove self from all dependencies' subcriber list.
	 */
	
	Watcher.prototype.teardown = function () {
	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed or is performing a v-for
	    // re-render (the watcher list is then filtered by v-for).
	    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
	      this.vm._watchers.$remove(this);
	    }
	    var i = this.deps.length;
	    while (i--) {
	      this.deps[i].removeSub(this);
	    }
	    this.active = false;
	    this.vm = this.cb = this.value = null;
	  }
	};
	
	/**
	 * Recrusively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 *
	 * @param {*} val
	 */
	
	var seenObjects = new _Set();
	function traverse(val, seen) {
	  var i = undefined,
	      keys = undefined;
	  if (!seen) {
	    seen = seenObjects;
	    seen.clear();
	  }
	  var isA = isArray(val);
	  var isO = isObject(val);
	  if ((isA || isO) && Object.isExtensible(val)) {
	    if (val.__ob__) {
	      var depId = val.__ob__.dep.id;
	      if (seen.has(depId)) {
	        return;
	      } else {
	        seen.add(depId);
	      }
	    }
	    if (isA) {
	      i = val.length;
	      while (i--) traverse(val[i], seen);
	    } else if (isO) {
	      keys = Object.keys(val);
	      i = keys.length;
	      while (i--) traverse(val[keys[i]], seen);
	    }
	  }
	}
	
	var text$1 = {
	
	  bind: function bind() {
	    this.attr = this.el.nodeType === 3 ? 'data' : 'textContent';
	  },
	
	  update: function update(value) {
	    this.el[this.attr] = _toString(value);
	  }
	};
	
	var templateCache = new Cache(1000);
	var idSelectorCache = new Cache(1000);
	
	var map = {
	  efault: [0, '', ''],
	  legend: [1, '<fieldset>', '</fieldset>'],
	  tr: [2, '<table><tbody>', '</tbody></table>'],
	  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>']
	};
	
	map.td = map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];
	
	map.option = map.optgroup = [1, '<select multiple="multiple">', '</select>'];
	
	map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1, '<table>', '</table>'];
	
	map.g = map.defs = map.symbol = map.use = map.image = map.text = map.circle = map.ellipse = map.line = map.path = map.polygon = map.polyline = map.rect = [1, '<svg ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'xmlns:ev="http://www.w3.org/2001/xml-events"' + 'version="1.1">', '</svg>'];
	
	/**
	 * Check if a node is a supported template node with a
	 * DocumentFragment content.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */
	
	function isRealTemplate(node) {
	  return isTemplate(node) && isFragment(node.content);
	}
	
	var tagRE$1 = /<([\w:-]+)/;
	var entityRE = /&#?\w+?;/;
	var commentRE = /<!--/;
	
	/**
	 * Convert a string template to a DocumentFragment.
	 * Determines correct wrapping by tag types. Wrapping
	 * strategy found in jQuery & component/domify.
	 *
	 * @param {String} templateString
	 * @param {Boolean} raw
	 * @return {DocumentFragment}
	 */
	
	function stringToFragment(templateString, raw) {
	  // try a cache hit first
	  var cacheKey = raw ? templateString : templateString.trim();
	  var hit = templateCache.get(cacheKey);
	  if (hit) {
	    return hit;
	  }
	
	  var frag = document.createDocumentFragment();
	  var tagMatch = templateString.match(tagRE$1);
	  var entityMatch = entityRE.test(templateString);
	  var commentMatch = commentRE.test(templateString);
	
	  if (!tagMatch && !entityMatch && !commentMatch) {
	    // text only, return a single text node.
	    frag.appendChild(document.createTextNode(templateString));
	  } else {
	    var tag = tagMatch && tagMatch[1];
	    var wrap = map[tag] || map.efault;
	    var depth = wrap[0];
	    var prefix = wrap[1];
	    var suffix = wrap[2];
	    var node = document.createElement('div');
	
	    node.innerHTML = prefix + templateString + suffix;
	    while (depth--) {
	      node = node.lastChild;
	    }
	
	    var child;
	    /* eslint-disable no-cond-assign */
	    while (child = node.firstChild) {
	      /* eslint-enable no-cond-assign */
	      frag.appendChild(child);
	    }
	  }
	  if (!raw) {
	    trimNode(frag);
	  }
	  templateCache.put(cacheKey, frag);
	  return frag;
	}
	
	/**
	 * Convert a template node to a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {DocumentFragment}
	 */
	
	function nodeToFragment(node) {
	  // if its a template tag and the browser supports it,
	  // its content is already a document fragment. However, iOS Safari has
	  // bug when using directly cloned template content with touch
	  // events and can cause crashes when the nodes are removed from DOM, so we
	  // have to treat template elements as string templates. (#2805)
	  /* istanbul ignore if */
	  if (isRealTemplate(node)) {
	    return stringToFragment(node.innerHTML);
	  }
	  // script template
	  if (node.tagName === 'SCRIPT') {
	    return stringToFragment(node.textContent);
	  }
	  // normal node, clone it to avoid mutating the original
	  var clonedNode = cloneNode(node);
	  var frag = document.createDocumentFragment();
	  var child;
	  /* eslint-disable no-cond-assign */
	  while (child = clonedNode.firstChild) {
	    /* eslint-enable no-cond-assign */
	    frag.appendChild(child);
	  }
	  trimNode(frag);
	  return frag;
	}
	
	// Test for the presence of the Safari template cloning bug
	// https://bugs.webkit.org/showug.cgi?id=137755
	var hasBrokenTemplate = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var a = document.createElement('div');
	    a.innerHTML = '<template>1</template>';
	    return !a.cloneNode(true).firstChild.innerHTML;
	  } else {
	    return false;
	  }
	})();
	
	// Test for IE10/11 textarea placeholder clone bug
	var hasTextareaCloneBug = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var t = document.createElement('textarea');
	    t.placeholder = 't';
	    return t.cloneNode(true).value === 't';
	  } else {
	    return false;
	  }
	})();
	
	/**
	 * 1. Deal with Safari cloning nested <template> bug by
	 *    manually cloning all template instances.
	 * 2. Deal with IE10/11 textarea placeholder bug by setting
	 *    the correct value after cloning.
	 *
	 * @param {Element|DocumentFragment} node
	 * @return {Element|DocumentFragment}
	 */
	
	function cloneNode(node) {
	  /* istanbul ignore if */
	  if (!node.querySelectorAll) {
	    return node.cloneNode();
	  }
	  var res = node.cloneNode(true);
	  var i, original, cloned;
	  /* istanbul ignore if */
	  if (hasBrokenTemplate) {
	    var tempClone = res;
	    if (isRealTemplate(node)) {
	      node = node.content;
	      tempClone = res.content;
	    }
	    original = node.querySelectorAll('template');
	    if (original.length) {
	      cloned = tempClone.querySelectorAll('template');
	      i = cloned.length;
	      while (i--) {
	        cloned[i].parentNode.replaceChild(cloneNode(original[i]), cloned[i]);
	      }
	    }
	  }
	  /* istanbul ignore if */
	  if (hasTextareaCloneBug) {
	    if (node.tagName === 'TEXTAREA') {
	      res.value = node.value;
	    } else {
	      original = node.querySelectorAll('textarea');
	      if (original.length) {
	        cloned = res.querySelectorAll('textarea');
	        i = cloned.length;
	        while (i--) {
	          cloned[i].value = original[i].value;
	        }
	      }
	    }
	  }
	  return res;
	}
	
	/**
	 * Process the template option and normalizes it into a
	 * a DocumentFragment that can be used as a partial or a
	 * instance template.
	 *
	 * @param {*} template
	 *        Possible values include:
	 *        - DocumentFragment object
	 *        - Node object of type Template
	 *        - id selector: '#some-template-id'
	 *        - template string: '<div><span>{{msg}}</span></div>'
	 * @param {Boolean} shouldClone
	 * @param {Boolean} raw
	 *        inline HTML interpolation. Do not check for id
	 *        selector and keep whitespace in the string.
	 * @return {DocumentFragment|undefined}
	 */
	
	function parseTemplate(template, shouldClone, raw) {
	  var node, frag;
	
	  // if the template is already a document fragment,
	  // do nothing
	  if (isFragment(template)) {
	    trimNode(template);
	    return shouldClone ? cloneNode(template) : template;
	  }
	
	  if (typeof template === 'string') {
	    // id selector
	    if (!raw && template.charAt(0) === '#') {
	      // id selector can be cached too
	      frag = idSelectorCache.get(template);
	      if (!frag) {
	        node = document.getElementById(template.slice(1));
	        if (node) {
	          frag = nodeToFragment(node);
	          // save selector to cache
	          idSelectorCache.put(template, frag);
	        }
	      }
	    } else {
	      // normal string template
	      frag = stringToFragment(template, raw);
	    }
	  } else if (template.nodeType) {
	    // a direct node
	    frag = nodeToFragment(template);
	  }
	
	  return frag && shouldClone ? cloneNode(frag) : frag;
	}
	
	var template = Object.freeze({
	  cloneNode: cloneNode,
	  parseTemplate: parseTemplate
	});
	
	var html = {
	
	  bind: function bind() {
	    // a comment node means this is a binding for
	    // {{{ inline unescaped html }}}
	    if (this.el.nodeType === 8) {
	      // hold nodes
	      this.nodes = [];
	      // replace the placeholder with proper anchor
	      this.anchor = createAnchor('v-html');
	      replace(this.el, this.anchor);
	    }
	  },
	
	  update: function update(value) {
	    value = _toString(value);
	    if (this.nodes) {
	      this.swap(value);
	    } else {
	      this.el.innerHTML = value;
	    }
	  },
	
	  swap: function swap(value) {
	    // remove old nodes
	    var i = this.nodes.length;
	    while (i--) {
	      remove(this.nodes[i]);
	    }
	    // convert new value to a fragment
	    // do not attempt to retrieve from id selector
	    var frag = parseTemplate(value, true, true);
	    // save a reference to these nodes so we can remove later
	    this.nodes = toArray(frag.childNodes);
	    before(frag, this.anchor);
	  }
	};
	
	/**
	 * Abstraction for a partially-compiled fragment.
	 * Can optionally compile content with a child scope.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Vue} [host]
	 * @param {Object} [scope]
	 * @param {Fragment} [parentFrag]
	 */
	function Fragment(linker, vm, frag, host, scope, parentFrag) {
	  this.children = [];
	  this.childFrags = [];
	  this.vm = vm;
	  this.scope = scope;
	  this.inserted = false;
	  this.parentFrag = parentFrag;
	  if (parentFrag) {
	    parentFrag.childFrags.push(this);
	  }
	  this.unlink = linker(vm, frag, host, scope, this);
	  var single = this.single = frag.childNodes.length === 1 &&
	  // do not go single mode if the only node is an anchor
	  !frag.childNodes[0].__v_anchor;
	  if (single) {
	    this.node = frag.childNodes[0];
	    this.before = singleBefore;
	    this.remove = singleRemove;
	  } else {
	    this.node = createAnchor('fragment-start');
	    this.end = createAnchor('fragment-end');
	    this.frag = frag;
	    prepend(this.node, frag);
	    frag.appendChild(this.end);
	    this.before = multiBefore;
	    this.remove = multiRemove;
	  }
	  this.node.__v_frag = this;
	}
	
	/**
	 * Call attach/detach for all components contained within
	 * this fragment. Also do so recursively for all child
	 * fragments.
	 *
	 * @param {Function} hook
	 */
	
	Fragment.prototype.callHook = function (hook) {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    this.childFrags[i].callHook(hook);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    hook(this.children[i]);
	  }
	};
	
	/**
	 * Insert fragment before target, single node version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */
	
	function singleBefore(target, withTransition) {
	  this.inserted = true;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  method(this.node, target, this.vm);
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}
	
	/**
	 * Remove fragment, single node version
	 */
	
	function singleRemove() {
	  this.inserted = false;
	  var shouldCallRemove = inDoc(this.node);
	  var self = this;
	  this.beforeRemove();
	  removeWithTransition(this.node, this.vm, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}
	
	/**
	 * Insert fragment before target, multi-nodes version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */
	
	function multiBefore(target, withTransition) {
	  this.inserted = true;
	  var vm = this.vm;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  mapNodeRange(this.node, this.end, function (node) {
	    method(node, target, vm);
	  });
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}
	
	/**
	 * Remove fragment, multi-nodes version
	 */
	
	function multiRemove() {
	  this.inserted = false;
	  var self = this;
	  var shouldCallRemove = inDoc(this.node);
	  this.beforeRemove();
	  removeNodeRange(this.node, this.end, this.vm, this.frag, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}
	
	/**
	 * Prepare the fragment for removal.
	 */
	
	Fragment.prototype.beforeRemove = function () {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    // call the same method recursively on child
	    // fragments, depth-first
	    this.childFrags[i].beforeRemove(false);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    // Call destroy for all contained instances,
	    // with remove:false and defer:true.
	    // Defer is necessary because we need to
	    // keep the children to call detach hooks
	    // on them.
	    this.children[i].$destroy(false, true);
	  }
	  var dirs = this.unlink.dirs;
	  for (i = 0, l = dirs.length; i < l; i++) {
	    // disable the watchers on all the directives
	    // so that the rendered content stays the same
	    // during removal.
	    dirs[i]._watcher && dirs[i]._watcher.teardown();
	  }
	};
	
	/**
	 * Destroy the fragment.
	 */
	
	Fragment.prototype.destroy = function () {
	  if (this.parentFrag) {
	    this.parentFrag.childFrags.$remove(this);
	  }
	  this.node.__v_frag = null;
	  this.unlink();
	};
	
	/**
	 * Call attach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */
	
	function attach(child) {
	  if (!child._isAttached && inDoc(child.$el)) {
	    child._callHook('attached');
	  }
	}
	
	/**
	 * Call detach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */
	
	function detach(child) {
	  if (child._isAttached && !inDoc(child.$el)) {
	    child._callHook('detached');
	  }
	}
	
	var linkerCache = new Cache(5000);
	
	/**
	 * A factory that can be used to create instances of a
	 * fragment. Caches the compiled linker if possible.
	 *
	 * @param {Vue} vm
	 * @param {Element|String} el
	 */
	function FragmentFactory(vm, el) {
	  this.vm = vm;
	  var template;
	  var isString = typeof el === 'string';
	  if (isString || isTemplate(el) && !el.hasAttribute('v-if')) {
	    template = parseTemplate(el, true);
	  } else {
	    template = document.createDocumentFragment();
	    template.appendChild(el);
	  }
	  this.template = template;
	  // linker can be cached, but only for components
	  var linker;
	  var cid = vm.constructor.cid;
	  if (cid > 0) {
	    var cacheId = cid + (isString ? el : getOuterHTML(el));
	    linker = linkerCache.get(cacheId);
	    if (!linker) {
	      linker = compile(template, vm.$options, true);
	      linkerCache.put(cacheId, linker);
	    }
	  } else {
	    linker = compile(template, vm.$options, true);
	  }
	  this.linker = linker;
	}
	
	/**
	 * Create a fragment instance with given host and scope.
	 *
	 * @param {Vue} host
	 * @param {Object} scope
	 * @param {Fragment} parentFrag
	 */
	
	FragmentFactory.prototype.create = function (host, scope, parentFrag) {
	  var frag = cloneNode(this.template);
	  return new Fragment(this.linker, this.vm, frag, host, scope, parentFrag);
	};
	
	var ON = 700;
	var MODEL = 800;
	var BIND = 850;
	var TRANSITION = 1100;
	var EL = 1500;
	var COMPONENT = 1500;
	var PARTIAL = 1750;
	var IF = 2100;
	var FOR = 2200;
	var SLOT = 2300;
	
	var uid$3 = 0;
	
	var vFor = {
	
	  priority: FOR,
	  terminal: true,
	
	  params: ['track-by', 'stagger', 'enter-stagger', 'leave-stagger'],
	
	  bind: function bind() {
	    if (process.env.NODE_ENV !== 'production' && this.el.hasAttribute('v-if')) {
	      warn('<' + this.el.tagName.toLowerCase() + ' v-for="' + this.expression + '" v-if="' + this.el.getAttribute('v-if') + '">: ' + 'Using v-if and v-for on the same element is not recommended - ' + 'consider filtering the source Array instead.', this.vm);
	    }
	
	    // support "item in/of items" syntax
	    var inMatch = this.expression.match(/(.*) (?:in|of) (.*)/);
	    if (inMatch) {
	      var itMatch = inMatch[1].match(/\((.*),(.*)\)/);
	      if (itMatch) {
	        this.iterator = itMatch[1].trim();
	        this.alias = itMatch[2].trim();
	      } else {
	        this.alias = inMatch[1].trim();
	      }
	      this.expression = inMatch[2];
	    }
	
	    if (!this.alias) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid v-for expression "' + this.descriptor.raw + '": ' + 'alias is required.', this.vm);
	      return;
	    }
	
	    // uid as a cache identifier
	    this.id = '__v-for__' + ++uid$3;
	
	    // check if this is an option list,
	    // so that we know if we need to update the <select>'s
	    // v-model when the option list has changed.
	    // because v-model has a lower priority than v-for,
	    // the v-model is not bound here yet, so we have to
	    // retrive it in the actual updateModel() function.
	    var tag = this.el.tagName;
	    this.isOption = (tag === 'OPTION' || tag === 'OPTGROUP') && this.el.parentNode.tagName === 'SELECT';
	
	    // setup anchor nodes
	    this.start = createAnchor('v-for-start');
	    this.end = createAnchor('v-for-end');
	    replace(this.el, this.end);
	    before(this.start, this.end);
	
	    // cache
	    this.cache = Object.create(null);
	
	    // fragment factory
	    this.factory = new FragmentFactory(this.vm, this.el);
	  },
	
	  update: function update(data) {
	    this.diff(data);
	    this.updateRef();
	    this.updateModel();
	  },
	
	  /**
	   * Diff, based on new data and old data, determine the
	   * minimum amount of DOM manipulations needed to make the
	   * DOM reflect the new data Array.
	   *
	   * The algorithm diffs the new data Array by storing a
	   * hidden reference to an owner vm instance on previously
	   * seen data. This allows us to achieve O(n) which is
	   * better than a levenshtein distance based algorithm,
	   * which is O(m * n).
	   *
	   * @param {Array} data
	   */
	
	  diff: function diff(data) {
	    // check if the Array was converted from an Object
	    var item = data[0];
	    var convertedFromObject = this.fromObject = isObject(item) && hasOwn(item, '$key') && hasOwn(item, '$value');
	
	    var trackByKey = this.params.trackBy;
	    var oldFrags = this.frags;
	    var frags = this.frags = new Array(data.length);
	    var alias = this.alias;
	    var iterator = this.iterator;
	    var start = this.start;
	    var end = this.end;
	    var inDocument = inDoc(start);
	    var init = !oldFrags;
	    var i, l, frag, key, value, primitive;
	
	    // First pass, go through the new Array and fill up
	    // the new frags array. If a piece of data has a cached
	    // instance for it, we reuse it. Otherwise build a new
	    // instance.
	    for (i = 0, l = data.length; i < l; i++) {
	      item = data[i];
	      key = convertedFromObject ? item.$key : null;
	      value = convertedFromObject ? item.$value : item;
	      primitive = !isObject(value);
	      frag = !init && this.getCachedFrag(value, i, key);
	      if (frag) {
	        // reusable fragment
	        frag.reused = true;
	        // update $index
	        frag.scope.$index = i;
	        // update $key
	        if (key) {
	          frag.scope.$key = key;
	        }
	        // update iterator
	        if (iterator) {
	          frag.scope[iterator] = key !== null ? key : i;
	        }
	        // update data for track-by, object repeat &
	        // primitive values.
	        if (trackByKey || convertedFromObject || primitive) {
	          withoutConversion(function () {
	            frag.scope[alias] = value;
	          });
	        }
	      } else {
	        // new instance
	        frag = this.create(value, alias, i, key);
	        frag.fresh = !init;
	      }
	      frags[i] = frag;
	      if (init) {
	        frag.before(end);
	      }
	    }
	
	    // we're done for the initial render.
	    if (init) {
	      return;
	    }
	
	    // Second pass, go through the old fragments and
	    // destroy those who are not reused (and remove them
	    // from cache)
	    var removalIndex = 0;
	    var totalRemoved = oldFrags.length - frags.length;
	    // when removing a large number of fragments, watcher removal
	    // turns out to be a perf bottleneck, so we batch the watcher
	    // removals into a single filter call!
	    this.vm._vForRemoving = true;
	    for (i = 0, l = oldFrags.length; i < l; i++) {
	      frag = oldFrags[i];
	      if (!frag.reused) {
	        this.deleteCachedFrag(frag);
	        this.remove(frag, removalIndex++, totalRemoved, inDocument);
	      }
	    }
	    this.vm._vForRemoving = false;
	    if (removalIndex) {
	      this.vm._watchers = this.vm._watchers.filter(function (w) {
	        return w.active;
	      });
	    }
	
	    // Final pass, move/insert new fragments into the
	    // right place.
	    var targetPrev, prevEl, currentPrev;
	    var insertionIndex = 0;
	    for (i = 0, l = frags.length; i < l; i++) {
	      frag = frags[i];
	      // this is the frag that we should be after
	      targetPrev = frags[i - 1];
	      prevEl = targetPrev ? targetPrev.staggerCb ? targetPrev.staggerAnchor : targetPrev.end || targetPrev.node : start;
	      if (frag.reused && !frag.staggerCb) {
	        currentPrev = findPrevFrag(frag, start, this.id);
	        if (currentPrev !== targetPrev && (!currentPrev ||
	        // optimization for moving a single item.
	        // thanks to suggestions by @livoras in #1807
	        findPrevFrag(currentPrev, start, this.id) !== targetPrev)) {
	          this.move(frag, prevEl);
	        }
	      } else {
	        // new instance, or still in stagger.
	        // insert with updated stagger index.
	        this.insert(frag, insertionIndex++, prevEl, inDocument);
	      }
	      frag.reused = frag.fresh = false;
	    }
	  },
	
	  /**
	   * Create a new fragment instance.
	   *
	   * @param {*} value
	   * @param {String} alias
	   * @param {Number} index
	   * @param {String} [key]
	   * @return {Fragment}
	   */
	
	  create: function create(value, alias, index, key) {
	    var host = this._host;
	    // create iteration scope
	    var parentScope = this._scope || this.vm;
	    var scope = Object.create(parentScope);
	    // ref holder for the scope
	    scope.$refs = Object.create(parentScope.$refs);
	    scope.$els = Object.create(parentScope.$els);
	    // make sure point $parent to parent scope
	    scope.$parent = parentScope;
	    // for two-way binding on alias
	    scope.$forContext = this;
	    // define scope properties
	    // important: define the scope alias without forced conversion
	    // so that frozen data structures remain non-reactive.
	    withoutConversion(function () {
	      defineReactive(scope, alias, value);
	    });
	    defineReactive(scope, '$index', index);
	    if (key) {
	      defineReactive(scope, '$key', key);
	    } else if (scope.$key) {
	      // avoid accidental fallback
	      def(scope, '$key', null);
	    }
	    if (this.iterator) {
	      defineReactive(scope, this.iterator, key !== null ? key : index);
	    }
	    var frag = this.factory.create(host, scope, this._frag);
	    frag.forId = this.id;
	    this.cacheFrag(value, frag, index, key);
	    return frag;
	  },
	
	  /**
	   * Update the v-ref on owner vm.
	   */
	
	  updateRef: function updateRef() {
	    var ref = this.descriptor.ref;
	    if (!ref) return;
	    var hash = (this._scope || this.vm).$refs;
	    var refs;
	    if (!this.fromObject) {
	      refs = this.frags.map(findVmFromFrag);
	    } else {
	      refs = {};
	      this.frags.forEach(function (frag) {
	        refs[frag.scope.$key] = findVmFromFrag(frag);
	      });
	    }
	    hash[ref] = refs;
	  },
	
	  /**
	   * For option lists, update the containing v-model on
	   * parent <select>.
	   */
	
	  updateModel: function updateModel() {
	    if (this.isOption) {
	      var parent = this.start.parentNode;
	      var model = parent && parent.__v_model;
	      if (model) {
	        model.forceUpdate();
	      }
	    }
	  },
	
	  /**
	   * Insert a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Node} prevEl
	   * @param {Boolean} inDocument
	   */
	
	  insert: function insert(frag, index, prevEl, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	    }
	    var staggerAmount = this.getStagger(frag, index, null, 'enter');
	    if (inDocument && staggerAmount) {
	      // create an anchor and insert it synchronously,
	      // so that we can resolve the correct order without
	      // worrying about some elements not inserted yet
	      var anchor = frag.staggerAnchor;
	      if (!anchor) {
	        anchor = frag.staggerAnchor = createAnchor('stagger-anchor');
	        anchor.__v_frag = frag;
	      }
	      after(anchor, prevEl);
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.before(anchor);
	        remove(anchor);
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      var target = prevEl.nextSibling;
	      /* istanbul ignore if */
	      if (!target) {
	        // reset end anchor position in case the position was messed up
	        // by an external drag-n-drop library.
	        after(this.end, prevEl);
	        target = this.end;
	      }
	      frag.before(target);
	    }
	  },
	
	  /**
	   * Remove a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {Boolean} inDocument
	   */
	
	  remove: function remove(frag, index, total, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	      // it's not possible for the same frag to be removed
	      // twice, so if we have a pending stagger callback,
	      // it means this frag is queued for enter but removed
	      // before its transition started. Since it is already
	      // destroyed, we can just leave it in detached state.
	      return;
	    }
	    var staggerAmount = this.getStagger(frag, index, total, 'leave');
	    if (inDocument && staggerAmount) {
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.remove();
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      frag.remove();
	    }
	  },
	
	  /**
	   * Move a fragment to a new position.
	   * Force no transition.
	   *
	   * @param {Fragment} frag
	   * @param {Node} prevEl
	   */
	
	  move: function move(frag, prevEl) {
	    // fix a common issue with Sortable:
	    // if prevEl doesn't have nextSibling, this means it's
	    // been dragged after the end anchor. Just re-position
	    // the end anchor to the end of the container.
	    /* istanbul ignore if */
	    if (!prevEl.nextSibling) {
	      this.end.parentNode.appendChild(this.end);
	    }
	    frag.before(prevEl.nextSibling, false);
	  },
	
	  /**
	   * Cache a fragment using track-by or the object key.
	   *
	   * @param {*} value
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {String} [key]
	   */
	
	  cacheFrag: function cacheFrag(value, frag, index, key) {
	    var trackByKey = this.params.trackBy;
	    var cache = this.cache;
	    var primitive = !isObject(value);
	    var id;
	    if (key || trackByKey || primitive) {
	      id = getTrackByKey(index, key, value, trackByKey);
	      if (!cache[id]) {
	        cache[id] = frag;
	      } else if (trackByKey !== '$index') {
	        process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	      }
	    } else {
	      id = this.id;
	      if (hasOwn(value, id)) {
	        if (value[id] === null) {
	          value[id] = frag;
	        } else {
	          process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	        }
	      } else if (Object.isExtensible(value)) {
	        def(value, id, frag);
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('Frozen v-for objects cannot be automatically tracked, make sure to ' + 'provide a track-by key.');
	      }
	    }
	    frag.raw = value;
	  },
	
	  /**
	   * Get a cached fragment from the value/index/key
	   *
	   * @param {*} value
	   * @param {Number} index
	   * @param {String} key
	   * @return {Fragment}
	   */
	
	  getCachedFrag: function getCachedFrag(value, index, key) {
	    var trackByKey = this.params.trackBy;
	    var primitive = !isObject(value);
	    var frag;
	    if (key || trackByKey || primitive) {
	      var id = getTrackByKey(index, key, value, trackByKey);
	      frag = this.cache[id];
	    } else {
	      frag = value[this.id];
	    }
	    if (frag && (frag.reused || frag.fresh)) {
	      process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	    }
	    return frag;
	  },
	
	  /**
	   * Delete a fragment from cache.
	   *
	   * @param {Fragment} frag
	   */
	
	  deleteCachedFrag: function deleteCachedFrag(frag) {
	    var value = frag.raw;
	    var trackByKey = this.params.trackBy;
	    var scope = frag.scope;
	    var index = scope.$index;
	    // fix #948: avoid accidentally fall through to
	    // a parent repeater which happens to have $key.
	    var key = hasOwn(scope, '$key') && scope.$key;
	    var primitive = !isObject(value);
	    if (trackByKey || key || primitive) {
	      var id = getTrackByKey(index, key, value, trackByKey);
	      this.cache[id] = null;
	    } else {
	      value[this.id] = null;
	      frag.raw = null;
	    }
	  },
	
	  /**
	   * Get the stagger amount for an insertion/removal.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {String} type
	   */
	
	  getStagger: function getStagger(frag, index, total, type) {
	    type = type + 'Stagger';
	    var trans = frag.node.__v_trans;
	    var hooks = trans && trans.hooks;
	    var hook = hooks && (hooks[type] || hooks.stagger);
	    return hook ? hook.call(frag, index, total) : index * parseInt(this.params[type] || this.params.stagger, 10);
	  },
	
	  /**
	   * Pre-process the value before piping it through the
	   * filters. This is passed to and called by the watcher.
	   */
	
	  _preProcess: function _preProcess(value) {
	    // regardless of type, store the un-filtered raw value.
	    this.rawValue = value;
	    return value;
	  },
	
	  /**
	   * Post-process the value after it has been piped through
	   * the filters. This is passed to and called by the watcher.
	   *
	   * It is necessary for this to be called during the
	   * watcher's dependency collection phase because we want
	   * the v-for to update when the source Object is mutated.
	   */
	
	  _postProcess: function _postProcess(value) {
	    if (isArray(value)) {
	      return value;
	    } else if (isPlainObject(value)) {
	      // convert plain object to array.
	      var keys = Object.keys(value);
	      var i = keys.length;
	      var res = new Array(i);
	      var key;
	      while (i--) {
	        key = keys[i];
	        res[i] = {
	          $key: key,
	          $value: value[key]
	        };
	      }
	      return res;
	    } else {
	      if (typeof value === 'number' && !isNaN(value)) {
	        value = range(value);
	      }
	      return value || [];
	    }
	  },
	
	  unbind: function unbind() {
	    if (this.descriptor.ref) {
	      (this._scope || this.vm).$refs[this.descriptor.ref] = null;
	    }
	    if (this.frags) {
	      var i = this.frags.length;
	      var frag;
	      while (i--) {
	        frag = this.frags[i];
	        this.deleteCachedFrag(frag);
	        frag.destroy();
	      }
	    }
	  }
	};
	
	/**
	 * Helper to find the previous element that is a fragment
	 * anchor. This is necessary because a destroyed frag's
	 * element could still be lingering in the DOM before its
	 * leaving transition finishes, but its inserted flag
	 * should have been set to false so we can skip them.
	 *
	 * If this is a block repeat, we want to make sure we only
	 * return frag that is bound to this v-for. (see #929)
	 *
	 * @param {Fragment} frag
	 * @param {Comment|Text} anchor
	 * @param {String} id
	 * @return {Fragment}
	 */
	
	function findPrevFrag(frag, anchor, id) {
	  var el = frag.node.previousSibling;
	  /* istanbul ignore if */
	  if (!el) return;
	  frag = el.__v_frag;
	  while ((!frag || frag.forId !== id || !frag.inserted) && el !== anchor) {
	    el = el.previousSibling;
	    /* istanbul ignore if */
	    if (!el) return;
	    frag = el.__v_frag;
	  }
	  return frag;
	}
	
	/**
	 * Create a range array from given number.
	 *
	 * @param {Number} n
	 * @return {Array}
	 */
	
	function range(n) {
	  var i = -1;
	  var ret = new Array(Math.floor(n));
	  while (++i < n) {
	    ret[i] = i;
	  }
	  return ret;
	}
	
	/**
	 * Get the track by key for an item.
	 *
	 * @param {Number} index
	 * @param {String} key
	 * @param {*} value
	 * @param {String} [trackByKey]
	 */
	
	function getTrackByKey(index, key, value, trackByKey) {
	  return trackByKey ? trackByKey === '$index' ? index : trackByKey.charAt(0).match(/\w/) ? getPath(value, trackByKey) : value[trackByKey] : key || value;
	}
	
	if (process.env.NODE_ENV !== 'production') {
	  vFor.warnDuplicate = function (value) {
	    warn('Duplicate value found in v-for="' + this.descriptor.raw + '": ' + JSON.stringify(value) + '. Use track-by="$index" if ' + 'you are expecting duplicate values.', this.vm);
	  };
	}
	
	/**
	 * Find a vm from a fragment.
	 *
	 * @param {Fragment} frag
	 * @return {Vue|undefined}
	 */
	
	function findVmFromFrag(frag) {
	  var node = frag.node;
	  // handle multi-node frag
	  if (frag.end) {
	    while (!node.__vue__ && node !== frag.end && node.nextSibling) {
	      node = node.nextSibling;
	    }
	  }
	  return node.__vue__;
	}
	
	var vIf = {
	
	  priority: IF,
	  terminal: true,
	
	  bind: function bind() {
	    var el = this.el;
	    if (!el.__vue__) {
	      // check else block
	      var next = el.nextElementSibling;
	      if (next && getAttr(next, 'v-else') !== null) {
	        remove(next);
	        this.elseEl = next;
	      }
	      // check main block
	      this.anchor = createAnchor('v-if');
	      replace(el, this.anchor);
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-if="' + this.expression + '" cannot be ' + 'used on an instance root element.', this.vm);
	      this.invalid = true;
	    }
	  },
	
	  update: function update(value) {
	    if (this.invalid) return;
	    if (value) {
	      if (!this.frag) {
	        this.insert();
	      }
	    } else {
	      this.remove();
	    }
	  },
	
	  insert: function insert() {
	    if (this.elseFrag) {
	      this.elseFrag.remove();
	      this.elseFrag = null;
	    }
	    // lazy init factory
	    if (!this.factory) {
	      this.factory = new FragmentFactory(this.vm, this.el);
	    }
	    this.frag = this.factory.create(this._host, this._scope, this._frag);
	    this.frag.before(this.anchor);
	  },
	
	  remove: function remove() {
	    if (this.frag) {
	      this.frag.remove();
	      this.frag = null;
	    }
	    if (this.elseEl && !this.elseFrag) {
	      if (!this.elseFactory) {
	        this.elseFactory = new FragmentFactory(this.elseEl._context || this.vm, this.elseEl);
	      }
	      this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag);
	      this.elseFrag.before(this.anchor);
	    }
	  },
	
	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	    if (this.elseFrag) {
	      this.elseFrag.destroy();
	    }
	  }
	};
	
	var show = {
	
	  bind: function bind() {
	    // check else block
	    var next = this.el.nextElementSibling;
	    if (next && getAttr(next, 'v-else') !== null) {
	      this.elseEl = next;
	    }
	  },
	
	  update: function update(value) {
	    this.apply(this.el, value);
	    if (this.elseEl) {
	      this.apply(this.elseEl, !value);
	    }
	  },
	
	  apply: function apply(el, value) {
	    if (inDoc(el)) {
	      applyTransition(el, value ? 1 : -1, toggle, this.vm);
	    } else {
	      toggle();
	    }
	    function toggle() {
	      el.style.display = value ? '' : 'none';
	    }
	  }
	};
	
	var text$2 = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	    var isRange = el.type === 'range';
	    var lazy = this.params.lazy;
	    var number = this.params.number;
	    var debounce = this.params.debounce;
	
	    // handle composition events.
	    //   http://blog.evanyou.me/2014/01/03/composition-event/
	    // skip this for Android because it handles composition
	    // events quite differently. Android doesn't trigger
	    // composition events for language input methods e.g.
	    // Chinese, but instead triggers them for spelling
	    // suggestions... (see Discussion/#162)
	    var composing = false;
	    if (!isAndroid && !isRange) {
	      this.on('compositionstart', function () {
	        composing = true;
	      });
	      this.on('compositionend', function () {
	        composing = false;
	        // in IE11 the "compositionend" event fires AFTER
	        // the "input" event, so the input handler is blocked
	        // at the end... have to call it here.
	        //
	        // #1327: in lazy mode this is unecessary.
	        if (!lazy) {
	          self.listener();
	        }
	      });
	    }
	
	    // prevent messing with the input when user is typing,
	    // and force update on blur.
	    this.focused = false;
	    if (!isRange && !lazy) {
	      this.on('focus', function () {
	        self.focused = true;
	      });
	      this.on('blur', function () {
	        self.focused = false;
	        // do not sync value after fragment removal (#2017)
	        if (!self._frag || self._frag.inserted) {
	          self.rawListener();
	        }
	      });
	    }
	
	    // Now attach the main listener
	    this.listener = this.rawListener = function () {
	      if (composing || !self._bound) {
	        return;
	      }
	      var val = number || isRange ? toNumber(el.value) : el.value;
	      self.set(val);
	      // force update on next tick to avoid lock & same value
	      // also only update when user is not typing
	      nextTick(function () {
	        if (self._bound && !self.focused) {
	          self.update(self._watcher.value);
	        }
	      });
	    };
	
	    // apply debounce
	    if (debounce) {
	      this.listener = _debounce(this.listener, debounce);
	    }
	
	    // Support jQuery events, since jQuery.trigger() doesn't
	    // trigger native events in some cases and some plugins
	    // rely on $.trigger()
	    //
	    // We want to make sure if a listener is attached using
	    // jQuery, it is also removed with jQuery, that's why
	    // we do the check for each directive instance and
	    // store that check result on itself. This also allows
	    // easier test coverage control by unsetting the global
	    // jQuery variable in tests.
	    this.hasjQuery = typeof jQuery === 'function';
	    if (this.hasjQuery) {
	      var method = jQuery.fn.on ? 'on' : 'bind';
	      jQuery(el)[method]('change', this.rawListener);
	      if (!lazy) {
	        jQuery(el)[method]('input', this.listener);
	      }
	    } else {
	      this.on('change', this.rawListener);
	      if (!lazy) {
	        this.on('input', this.listener);
	      }
	    }
	
	    // IE9 doesn't fire input event on backspace/del/cut
	    if (!lazy && isIE9) {
	      this.on('cut', function () {
	        nextTick(self.listener);
	      });
	      this.on('keyup', function (e) {
	        if (e.keyCode === 46 || e.keyCode === 8) {
	          self.listener();
	        }
	      });
	    }
	
	    // set initial value if present
	    if (el.hasAttribute('value') || el.tagName === 'TEXTAREA' && el.value.trim()) {
	      this.afterBind = this.listener;
	    }
	  },
	
	  update: function update(value) {
	    // #3029 only update when the value changes. This prevent
	    // browsers from overwriting values like selectionStart
	    value = _toString(value);
	    if (value !== this.el.value) this.el.value = value;
	  },
	
	  unbind: function unbind() {
	    var el = this.el;
	    if (this.hasjQuery) {
	      var method = jQuery.fn.off ? 'off' : 'unbind';
	      jQuery(el)[method]('change', this.listener);
	      jQuery(el)[method]('input', this.listener);
	    }
	  }
	};
	
	var radio = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	
	    this.getValue = function () {
	      // value overwrite via v-bind:value
	      if (el.hasOwnProperty('_value')) {
	        return el._value;
	      }
	      var val = el.value;
	      if (self.params.number) {
	        val = toNumber(val);
	      }
	      return val;
	    };
	
	    this.listener = function () {
	      self.set(self.getValue());
	    };
	    this.on('change', this.listener);
	
	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },
	
	  update: function update(value) {
	    this.el.checked = looseEqual(value, this.getValue());
	  }
	};
	
	var select = {
	
	  bind: function bind() {
	    var _this = this;
	
	    var self = this;
	    var el = this.el;
	
	    // method to force update DOM using latest value.
	    this.forceUpdate = function () {
	      if (self._watcher) {
	        self.update(self._watcher.get());
	      }
	    };
	
	    // check if this is a multiple select
	    var multiple = this.multiple = el.hasAttribute('multiple');
	
	    // attach listener
	    this.listener = function () {
	      var value = getValue(el, multiple);
	      value = self.params.number ? isArray(value) ? value.map(toNumber) : toNumber(value) : value;
	      self.set(value);
	    };
	    this.on('change', this.listener);
	
	    // if has initial value, set afterBind
	    var initValue = getValue(el, multiple, true);
	    if (multiple && initValue.length || !multiple && initValue !== null) {
	      this.afterBind = this.listener;
	    }
	
	    // All major browsers except Firefox resets
	    // selectedIndex with value -1 to 0 when the element
	    // is appended to a new parent, therefore we have to
	    // force a DOM update whenever that happens...
	    this.vm.$on('hook:attached', function () {
	      nextTick(_this.forceUpdate);
	    });
	    if (!inDoc(el)) {
	      nextTick(this.forceUpdate);
	    }
	  },
	
	  update: function update(value) {
	    var el = this.el;
	    el.selectedIndex = -1;
	    var multi = this.multiple && isArray(value);
	    var options = el.options;
	    var i = options.length;
	    var op, val;
	    while (i--) {
	      op = options[i];
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      /* eslint-disable eqeqeq */
	      op.selected = multi ? indexOf$1(value, val) > -1 : looseEqual(value, val);
	      /* eslint-enable eqeqeq */
	    }
	  },
	
	  unbind: function unbind() {
	    /* istanbul ignore next */
	    this.vm.$off('hook:attached', this.forceUpdate);
	  }
	};
	
	/**
	 * Get select value
	 *
	 * @param {SelectElement} el
	 * @param {Boolean} multi
	 * @param {Boolean} init
	 * @return {Array|*}
	 */
	
	function getValue(el, multi, init) {
	  var res = multi ? [] : null;
	  var op, val, selected;
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    op = el.options[i];
	    selected = init ? op.hasAttribute('selected') : op.selected;
	    if (selected) {
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      if (multi) {
	        res.push(val);
	      } else {
	        return val;
	      }
	    }
	  }
	  return res;
	}
	
	/**
	 * Native Array.indexOf uses strict equal, but in this
	 * case we need to match string/numbers with custom equal.
	 *
	 * @param {Array} arr
	 * @param {*} val
	 */
	
	function indexOf$1(arr, val) {
	  var i = arr.length;
	  while (i--) {
	    if (looseEqual(arr[i], val)) {
	      return i;
	    }
	  }
	  return -1;
	}
	
	var checkbox = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	
	    this.getValue = function () {
	      return el.hasOwnProperty('_value') ? el._value : self.params.number ? toNumber(el.value) : el.value;
	    };
	
	    function getBooleanValue() {
	      var val = el.checked;
	      if (val && el.hasOwnProperty('_trueValue')) {
	        return el._trueValue;
	      }
	      if (!val && el.hasOwnProperty('_falseValue')) {
	        return el._falseValue;
	      }
	      return val;
	    }
	
	    this.listener = function () {
	      var model = self._watcher.get();
	      if (isArray(model)) {
	        var val = self.getValue();
	        var i = indexOf(model, val);
	        if (el.checked) {
	          if (i < 0) {
	            self.set(model.concat(val));
	          }
	        } else if (i > -1) {
	          self.set(model.slice(0, i).concat(model.slice(i + 1)));
	        }
	      } else {
	        self.set(getBooleanValue());
	      }
	    };
	
	    this.on('change', this.listener);
	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },
	
	  update: function update(value) {
	    var el = this.el;
	    if (isArray(value)) {
	      el.checked = indexOf(value, this.getValue()) > -1;
	    } else {
	      if (el.hasOwnProperty('_trueValue')) {
	        el.checked = looseEqual(value, el._trueValue);
	      } else {
	        el.checked = !!value;
	      }
	    }
	  }
	};
	
	var handlers = {
	  text: text$2,
	  radio: radio,
	  select: select,
	  checkbox: checkbox
	};
	
	var model = {
	
	  priority: MODEL,
	  twoWay: true,
	  handlers: handlers,
	  params: ['lazy', 'number', 'debounce'],
	
	  /**
	   * Possible elements:
	   *   <select>
	   *   <textarea>
	   *   <input type="*">
	   *     - text
	   *     - checkbox
	   *     - radio
	   *     - number
	   */
	
	  bind: function bind() {
	    // friendly warning...
	    this.checkFilters();
	    if (this.hasRead && !this.hasWrite) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using a read-only filter with ' + 'v-model="' + this.descriptor.raw + '". ' + 'You might want to use a two-way filter to ensure correct behavior.', this.vm);
	    }
	    var el = this.el;
	    var tag = el.tagName;
	    var handler;
	    if (tag === 'INPUT') {
	      handler = handlers[el.type] || handlers.text;
	    } else if (tag === 'SELECT') {
	      handler = handlers.select;
	    } else if (tag === 'TEXTAREA') {
	      handler = handlers.text;
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-model does not support element type: ' + tag, this.vm);
	      return;
	    }
	    el.__v_model = this;
	    handler.bind.call(this);
	    this.update = handler.update;
	    this._unbind = handler.unbind;
	  },
	
	  /**
	   * Check read/write filter stats.
	   */
	
	  checkFilters: function checkFilters() {
	    var filters = this.filters;
	    if (!filters) return;
	    var i = filters.length;
	    while (i--) {
	      var filter = resolveAsset(this.vm.$options, 'filters', filters[i].name);
	      if (typeof filter === 'function' || filter.read) {
	        this.hasRead = true;
	      }
	      if (filter.write) {
	        this.hasWrite = true;
	      }
	    }
	  },
	
	  unbind: function unbind() {
	    this.el.__v_model = null;
	    this._unbind && this._unbind();
	  }
	};
	
	// keyCode aliases
	var keyCodes = {
	  esc: 27,
	  tab: 9,
	  enter: 13,
	  space: 32,
	  'delete': [8, 46],
	  up: 38,
	  left: 37,
	  right: 39,
	  down: 40
	};
	
	function keyFilter(handler, keys) {
	  var codes = keys.map(function (key) {
	    var charCode = key.charCodeAt(0);
	    if (charCode > 47 && charCode < 58) {
	      return parseInt(key, 10);
	    }
	    if (key.length === 1) {
	      charCode = key.toUpperCase().charCodeAt(0);
	      if (charCode > 64 && charCode < 91) {
	        return charCode;
	      }
	    }
	    return keyCodes[key];
	  });
	  codes = [].concat.apply([], codes);
	  return function keyHandler(e) {
	    if (codes.indexOf(e.keyCode) > -1) {
	      return handler.call(this, e);
	    }
	  };
	}
	
	function stopFilter(handler) {
	  return function stopHandler(e) {
	    e.stopPropagation();
	    return handler.call(this, e);
	  };
	}
	
	function preventFilter(handler) {
	  return function preventHandler(e) {
	    e.preventDefault();
	    return handler.call(this, e);
	  };
	}
	
	function selfFilter(handler) {
	  return function selfHandler(e) {
	    if (e.target === e.currentTarget) {
	      return handler.call(this, e);
	    }
	  };
	}
	
	var on$1 = {
	
	  priority: ON,
	  acceptStatement: true,
	  keyCodes: keyCodes,
	
	  bind: function bind() {
	    // deal with iframes
	    if (this.el.tagName === 'IFRAME' && this.arg !== 'load') {
	      var self = this;
	      this.iframeBind = function () {
	        on(self.el.contentWindow, self.arg, self.handler, self.modifiers.capture);
	      };
	      this.on('load', this.iframeBind);
	    }
	  },
	
	  update: function update(handler) {
	    // stub a noop for v-on with no value,
	    // e.g. @mousedown.prevent
	    if (!this.descriptor.raw) {
	      handler = function () {};
	    }
	
	    if (typeof handler !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('v-on:' + this.arg + '="' + this.expression + '" expects a function value, ' + 'got ' + handler, this.vm);
	      return;
	    }
	
	    // apply modifiers
	    if (this.modifiers.stop) {
	      handler = stopFilter(handler);
	    }
	    if (this.modifiers.prevent) {
	      handler = preventFilter(handler);
	    }
	    if (this.modifiers.self) {
	      handler = selfFilter(handler);
	    }
	    // key filter
	    var keys = Object.keys(this.modifiers).filter(function (key) {
	      return key !== 'stop' && key !== 'prevent' && key !== 'self' && key !== 'capture';
	    });
	    if (keys.length) {
	      handler = keyFilter(handler, keys);
	    }
	
	    this.reset();
	    this.handler = handler;
	
	    if (this.iframeBind) {
	      this.iframeBind();
	    } else {
	      on(this.el, this.arg, this.handler, this.modifiers.capture);
	    }
	  },
	
	  reset: function reset() {
	    var el = this.iframeBind ? this.el.contentWindow : this.el;
	    if (this.handler) {
	      off(el, this.arg, this.handler);
	    }
	  },
	
	  unbind: function unbind() {
	    this.reset();
	  }
	};
	
	var prefixes = ['-webkit-', '-moz-', '-ms-'];
	var camelPrefixes = ['Webkit', 'Moz', 'ms'];
	var importantRE = /!important;?$/;
	var propCache = Object.create(null);
	
	var testEl = null;
	
	var style = {
	
	  deep: true,
	
	  update: function update(value) {
	    if (typeof value === 'string') {
	      this.el.style.cssText = value;
	    } else if (isArray(value)) {
	      this.handleObject(value.reduce(extend, {}));
	    } else {
	      this.handleObject(value || {});
	    }
	  },
	
	  handleObject: function handleObject(value) {
	    // cache object styles so that only changed props
	    // are actually updated.
	    var cache = this.cache || (this.cache = {});
	    var name, val;
	    for (name in cache) {
	      if (!(name in value)) {
	        this.handleSingle(name, null);
	        delete cache[name];
	      }
	    }
	    for (name in value) {
	      val = value[name];
	      if (val !== cache[name]) {
	        cache[name] = val;
	        this.handleSingle(name, val);
	      }
	    }
	  },
	
	  handleSingle: function handleSingle(prop, value) {
	    prop = normalize(prop);
	    if (!prop) return; // unsupported prop
	    // cast possible numbers/booleans into strings
	    if (value != null) value += '';
	    if (value) {
	      var isImportant = importantRE.test(value) ? 'important' : '';
	      if (isImportant) {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          warn('It\'s probably a bad idea to use !important with inline rules. ' + 'This feature will be deprecated in a future version of Vue.');
	        }
	        value = value.replace(importantRE, '').trim();
	        this.el.style.setProperty(prop.kebab, value, isImportant);
	      } else {
	        this.el.style[prop.camel] = value;
	      }
	    } else {
	      this.el.style[prop.camel] = '';
	    }
	  }
	
	};
	
	/**
	 * Normalize a CSS property name.
	 * - cache result
	 * - auto prefix
	 * - camelCase -> dash-case
	 *
	 * @param {String} prop
	 * @return {String}
	 */
	
	function normalize(prop) {
	  if (propCache[prop]) {
	    return propCache[prop];
	  }
	  var res = prefix(prop);
	  propCache[prop] = propCache[res] = res;
	  return res;
	}
	
	/**
	 * Auto detect the appropriate prefix for a CSS property.
	 * https://gist.github.com/paulirish/523692
	 *
	 * @param {String} prop
	 * @return {String}
	 */
	
	function prefix(prop) {
	  prop = hyphenate(prop);
	  var camel = camelize(prop);
	  var upper = camel.charAt(0).toUpperCase() + camel.slice(1);
	  if (!testEl) {
	    testEl = document.createElement('div');
	  }
	  var i = prefixes.length;
	  var prefixed;
	  if (camel !== 'filter' && camel in testEl.style) {
	    return {
	      kebab: prop,
	      camel: camel
	    };
	  }
	  while (i--) {
	    prefixed = camelPrefixes[i] + upper;
	    if (prefixed in testEl.style) {
	      return {
	        kebab: prefixes[i] + prop,
	        camel: prefixed
	      };
	    }
	  }
	}
	
	// xlink
	var xlinkNS = 'http://www.w3.org/1999/xlink';
	var xlinkRE = /^xlink:/;
	
	// check for attributes that prohibit interpolations
	var disallowedInterpAttrRE = /^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/;
	// these attributes should also set their corresponding properties
	// because they only affect the initial state of the element
	var attrWithPropsRE = /^(?:value|checked|selected|muted)$/;
	// these attributes expect enumrated values of "true" or "false"
	// but are not boolean attributes
	var enumeratedAttrRE = /^(?:draggable|contenteditable|spellcheck)$/;
	
	// these attributes should set a hidden property for
	// binding v-model to object values
	var modelProps = {
	  value: '_value',
	  'true-value': '_trueValue',
	  'false-value': '_falseValue'
	};
	
	var bind$1 = {
	
	  priority: BIND,
	
	  bind: function bind() {
	    var attr = this.arg;
	    var tag = this.el.tagName;
	    // should be deep watch on object mode
	    if (!attr) {
	      this.deep = true;
	    }
	    // handle interpolation bindings
	    var descriptor = this.descriptor;
	    var tokens = descriptor.interp;
	    if (tokens) {
	      // handle interpolations with one-time tokens
	      if (descriptor.hasOneTime) {
	        this.expression = tokensToExp(tokens, this._scope || this.vm);
	      }
	
	      // only allow binding on native attributes
	      if (disallowedInterpAttrRE.test(attr) || attr === 'name' && (tag === 'PARTIAL' || tag === 'SLOT')) {
	        process.env.NODE_ENV !== 'production' && warn(attr + '="' + descriptor.raw + '": ' + 'attribute interpolation is not allowed in Vue.js ' + 'directives and special attributes.', this.vm);
	        this.el.removeAttribute(attr);
	        this.invalid = true;
	      }
	
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production') {
	        var raw = attr + '="' + descriptor.raw + '": ';
	        // warn src
	        if (attr === 'src') {
	          warn(raw + 'interpolation in "src" attribute will cause ' + 'a 404 request. Use v-bind:src instead.', this.vm);
	        }
	
	        // warn style
	        if (attr === 'style') {
	          warn(raw + 'interpolation in "style" attribute will cause ' + 'the attribute to be discarded in Internet Explorer. ' + 'Use v-bind:style instead.', this.vm);
	        }
	      }
	    }
	  },
	
	  update: function update(value) {
	    if (this.invalid) {
	      return;
	    }
	    var attr = this.arg;
	    if (this.arg) {
	      this.handleSingle(attr, value);
	    } else {
	      this.handleObject(value || {});
	    }
	  },
	
	  // share object handler with v-bind:class
	  handleObject: style.handleObject,
	
	  handleSingle: function handleSingle(attr, value) {
	    var el = this.el;
	    var interp = this.descriptor.interp;
	    if (this.modifiers.camel) {
	      attr = camelize(attr);
	    }
	    if (!interp && attrWithPropsRE.test(attr) && attr in el) {
	      var attrValue = attr === 'value' ? value == null // IE9 will set input.value to "null" for null...
	      ? '' : value : value;
	
	      if (el[attr] !== attrValue) {
	        el[attr] = attrValue;
	      }
	    }
	    // set model props
	    var modelProp = modelProps[attr];
	    if (!interp && modelProp) {
	      el[modelProp] = value;
	      // update v-model if present
	      var model = el.__v_model;
	      if (model) {
	        model.listener();
	      }
	    }
	    // do not set value attribute for textarea
	    if (attr === 'value' && el.tagName === 'TEXTAREA') {
	      el.removeAttribute(attr);
	      return;
	    }
	    // update attribute
	    if (enumeratedAttrRE.test(attr)) {
	      el.setAttribute(attr, value ? 'true' : 'false');
	    } else if (value != null && value !== false) {
	      if (attr === 'class') {
	        // handle edge case #1960:
	        // class interpolation should not overwrite Vue transition class
	        if (el.__v_trans) {
	          value += ' ' + el.__v_trans.id + '-transition';
	        }
	        setClass(el, value);
	      } else if (xlinkRE.test(attr)) {
	        el.setAttributeNS(xlinkNS, attr, value === true ? '' : value);
	      } else {
	        el.setAttribute(attr, value === true ? '' : value);
	      }
	    } else {
	      el.removeAttribute(attr);
	    }
	  }
	};
	
	var el = {
	
	  priority: EL,
	
	  bind: function bind() {
	    /* istanbul ignore if */
	    if (!this.arg) {
	      return;
	    }
	    var id = this.id = camelize(this.arg);
	    var refs = (this._scope || this.vm).$els;
	    if (hasOwn(refs, id)) {
	      refs[id] = this.el;
	    } else {
	      defineReactive(refs, id, this.el);
	    }
	  },
	
	  unbind: function unbind() {
	    var refs = (this._scope || this.vm).$els;
	    if (refs[this.id] === this.el) {
	      refs[this.id] = null;
	    }
	  }
	};
	
	var ref = {
	  bind: function bind() {
	    process.env.NODE_ENV !== 'production' && warn('v-ref:' + this.arg + ' must be used on a child ' + 'component. Found on <' + this.el.tagName.toLowerCase() + '>.', this.vm);
	  }
	};
	
	var cloak = {
	  bind: function bind() {
	    var el = this.el;
	    this.vm.$once('pre-hook:compiled', function () {
	      el.removeAttribute('v-cloak');
	    });
	  }
	};
	
	// logic control
	// two-way binding
	// event handling
	// attributes
	// ref & el
	// cloak
	// must export plain object
	var directives = {
	  text: text$1,
	  html: html,
	  'for': vFor,
	  'if': vIf,
	  show: show,
	  model: model,
	  on: on$1,
	  bind: bind$1,
	  el: el,
	  ref: ref,
	  cloak: cloak
	};
	
	var vClass = {
	
	  deep: true,
	
	  update: function update(value) {
	    if (!value) {
	      this.cleanup();
	    } else if (typeof value === 'string') {
	      this.setClass(value.trim().split(/\s+/));
	    } else {
	      this.setClass(normalize$1(value));
	    }
	  },
	
	  setClass: function setClass(value) {
	    this.cleanup(value);
	    for (var i = 0, l = value.length; i < l; i++) {
	      var val = value[i];
	      if (val) {
	        apply(this.el, val, addClass);
	      }
	    }
	    this.prevKeys = value;
	  },
	
	  cleanup: function cleanup(value) {
	    var prevKeys = this.prevKeys;
	    if (!prevKeys) return;
	    var i = prevKeys.length;
	    while (i--) {
	      var key = prevKeys[i];
	      if (!value || value.indexOf(key) < 0) {
	        apply(this.el, key, removeClass);
	      }
	    }
	  }
	};
	
	/**
	 * Normalize objects and arrays (potentially containing objects)
	 * into array of strings.
	 *
	 * @param {Object|Array<String|Object>} value
	 * @return {Array<String>}
	 */
	
	function normalize$1(value) {
	  var res = [];
	  if (isArray(value)) {
	    for (var i = 0, l = value.length; i < l; i++) {
	      var _key = value[i];
	      if (_key) {
	        if (typeof _key === 'string') {
	          res.push(_key);
	        } else {
	          for (var k in _key) {
	            if (_key[k]) res.push(k);
	          }
	        }
	      }
	    }
	  } else if (isObject(value)) {
	    for (var key in value) {
	      if (value[key]) res.push(key);
	    }
	  }
	  return res;
	}
	
	/**
	 * Add or remove a class/classes on an element
	 *
	 * @param {Element} el
	 * @param {String} key The class name. This may or may not
	 *                     contain a space character, in such a
	 *                     case we'll deal with multiple class
	 *                     names at once.
	 * @param {Function} fn
	 */
	
	function apply(el, key, fn) {
	  key = key.trim();
	  if (key.indexOf(' ') === -1) {
	    fn(el, key);
	    return;
	  }
	  // The key contains one or more space characters.
	  // Since a class name doesn't accept such characters, we
	  // treat it as multiple classes.
	  var keys = key.split(/\s+/);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    fn(el, keys[i]);
	  }
	}
	
	var component = {
	
	  priority: COMPONENT,
	
	  params: ['keep-alive', 'transition-mode', 'inline-template'],
	
	  /**
	   * Setup. Two possible usages:
	   *
	   * - static:
	   *   <comp> or <div v-component="comp">
	   *
	   * - dynamic:
	   *   <component :is="view">
	   */
	
	  bind: function bind() {
	    if (!this.el.__vue__) {
	      // keep-alive cache
	      this.keepAlive = this.params.keepAlive;
	      if (this.keepAlive) {
	        this.cache = {};
	      }
	      // check inline-template
	      if (this.params.inlineTemplate) {
	        // extract inline template as a DocumentFragment
	        this.inlineTemplate = extractContent(this.el, true);
	      }
	      // component resolution related state
	      this.pendingComponentCb = this.Component = null;
	      // transition related state
	      this.pendingRemovals = 0;
	      this.pendingRemovalCb = null;
	      // create a ref anchor
	      this.anchor = createAnchor('v-component');
	      replace(this.el, this.anchor);
	      // remove is attribute.
	      // this is removed during compilation, but because compilation is
	      // cached, when the component is used elsewhere this attribute
	      // will remain at link time.
	      this.el.removeAttribute('is');
	      this.el.removeAttribute(':is');
	      // remove ref, same as above
	      if (this.descriptor.ref) {
	        this.el.removeAttribute('v-ref:' + hyphenate(this.descriptor.ref));
	      }
	      // if static, build right now.
	      if (this.literal) {
	        this.setComponent(this.expression);
	      }
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('cannot mount component "' + this.expression + '" ' + 'on already mounted element: ' + this.el);
	    }
	  },
	
	  /**
	   * Public update, called by the watcher in the dynamic
	   * literal scenario, e.g. <component :is="view">
	   */
	
	  update: function update(value) {
	    if (!this.literal) {
	      this.setComponent(value);
	    }
	  },
	
	  /**
	   * Switch dynamic components. May resolve the component
	   * asynchronously, and perform transition based on
	   * specified transition mode. Accepts a few additional
	   * arguments specifically for vue-router.
	   *
	   * The callback is called when the full transition is
	   * finished.
	   *
	   * @param {String} value
	   * @param {Function} [cb]
	   */
	
	  setComponent: function setComponent(value, cb) {
	    this.invalidatePending();
	    if (!value) {
	      // just remove current
	      this.unbuild(true);
	      this.remove(this.childVM, cb);
	      this.childVM = null;
	    } else {
	      var self = this;
	      this.resolveComponent(value, function () {
	        self.mountComponent(cb);
	      });
	    }
	  },
	
	  /**
	   * Resolve the component constructor to use when creating
	   * the child vm.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */
	
	  resolveComponent: function resolveComponent(value, cb) {
	    var self = this;
	    this.pendingComponentCb = cancellable(function (Component) {
	      self.ComponentName = Component.options.name || (typeof value === 'string' ? value : null);
	      self.Component = Component;
	      cb();
	    });
	    this.vm._resolveComponent(value, this.pendingComponentCb);
	  },
	
	  /**
	   * Create a new instance using the current constructor and
	   * replace the existing instance. This method doesn't care
	   * whether the new component and the old one are actually
	   * the same.
	   *
	   * @param {Function} [cb]
	   */
	
	  mountComponent: function mountComponent(cb) {
	    // actual mount
	    this.unbuild(true);
	    var self = this;
	    var activateHooks = this.Component.options.activate;
	    var cached = this.getCached();
	    var newComponent = this.build();
	    if (activateHooks && !cached) {
	      this.waitingFor = newComponent;
	      callActivateHooks(activateHooks, newComponent, function () {
	        if (self.waitingFor !== newComponent) {
	          return;
	        }
	        self.waitingFor = null;
	        self.transition(newComponent, cb);
	      });
	    } else {
	      // update ref for kept-alive component
	      if (cached) {
	        newComponent._updateRef();
	      }
	      this.transition(newComponent, cb);
	    }
	  },
	
	  /**
	   * When the component changes or unbinds before an async
	   * constructor is resolved, we need to invalidate its
	   * pending callback.
	   */
	
	  invalidatePending: function invalidatePending() {
	    if (this.pendingComponentCb) {
	      this.pendingComponentCb.cancel();
	      this.pendingComponentCb = null;
	    }
	  },
	
	  /**
	   * Instantiate/insert a new child vm.
	   * If keep alive and has cached instance, insert that
	   * instance; otherwise build a new one and cache it.
	   *
	   * @param {Object} [extraOptions]
	   * @return {Vue} - the created instance
	   */
	
	  build: function build(extraOptions) {
	    var cached = this.getCached();
	    if (cached) {
	      return cached;
	    }
	    if (this.Component) {
	      // default options
	      var options = {
	        name: this.ComponentName,
	        el: cloneNode(this.el),
	        template: this.inlineTemplate,
	        // make sure to add the child with correct parent
	        // if this is a transcluded component, its parent
	        // should be the transclusion host.
	        parent: this._host || this.vm,
	        // if no inline-template, then the compiled
	        // linker can be cached for better performance.
	        _linkerCachable: !this.inlineTemplate,
	        _ref: this.descriptor.ref,
	        _asComponent: true,
	        _isRouterView: this._isRouterView,
	        // if this is a transcluded component, context
	        // will be the common parent vm of this instance
	        // and its host.
	        _context: this.vm,
	        // if this is inside an inline v-for, the scope
	        // will be the intermediate scope created for this
	        // repeat fragment. this is used for linking props
	        // and container directives.
	        _scope: this._scope,
	        // pass in the owner fragment of this component.
	        // this is necessary so that the fragment can keep
	        // track of its contained components in order to
	        // call attach/detach hooks for them.
	        _frag: this._frag
	      };
	      // extra options
	      // in 1.0.0 this is used by vue-router only
	      /* istanbul ignore if */
	      if (extraOptions) {
	        extend(options, extraOptions);
	      }
	      var child = new this.Component(options);
	      if (this.keepAlive) {
	        this.cache[this.Component.cid] = child;
	      }
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && this.el.hasAttribute('transition') && child._isFragment) {
	        warn('Transitions will not work on a fragment instance. ' + 'Template: ' + child.$options.template, child);
	      }
	      return child;
	    }
	  },
	
	  /**
	   * Try to get a cached instance of the current component.
	   *
	   * @return {Vue|undefined}
	   */
	
	  getCached: function getCached() {
	    return this.keepAlive && this.cache[this.Component.cid];
	  },
	
	  /**
	   * Teardown the current child, but defers cleanup so
	   * that we can separate the destroy and removal steps.
	   *
	   * @param {Boolean} defer
	   */
	
	  unbuild: function unbuild(defer) {
	    if (this.waitingFor) {
	      if (!this.keepAlive) {
	        this.waitingFor.$destroy();
	      }
	      this.waitingFor = null;
	    }
	    var child = this.childVM;
	    if (!child || this.keepAlive) {
	      if (child) {
	        // remove ref
	        child._inactive = true;
	        child._updateRef(true);
	      }
	      return;
	    }
	    // the sole purpose of `deferCleanup` is so that we can
	    // "deactivate" the vm right now and perform DOM removal
	    // later.
	    child.$destroy(false, defer);
	  },
	
	  /**
	   * Remove current destroyed child and manually do
	   * the cleanup after removal.
	   *
	   * @param {Function} cb
	   */
	
	  remove: function remove(child, cb) {
	    var keepAlive = this.keepAlive;
	    if (child) {
	      // we may have a component switch when a previous
	      // component is still being transitioned out.
	      // we want to trigger only one lastest insertion cb
	      // when the existing transition finishes. (#1119)
	      this.pendingRemovals++;
	      this.pendingRemovalCb = cb;
	      var self = this;
	      child.$remove(function () {
	        self.pendingRemovals--;
	        if (!keepAlive) child._cleanup();
	        if (!self.pendingRemovals && self.pendingRemovalCb) {
	          self.pendingRemovalCb();
	          self.pendingRemovalCb = null;
	        }
	      });
	    } else if (cb) {
	      cb();
	    }
	  },
	
	  /**
	   * Actually swap the components, depending on the
	   * transition mode. Defaults to simultaneous.
	   *
	   * @param {Vue} target
	   * @param {Function} [cb]
	   */
	
	  transition: function transition(target, cb) {
	    var self = this;
	    var current = this.childVM;
	    // for devtool inspection
	    if (current) current._inactive = true;
	    target._inactive = false;
	    this.childVM = target;
	    switch (self.params.transitionMode) {
	      case 'in-out':
	        target.$before(self.anchor, function () {
	          self.remove(current, cb);
	        });
	        break;
	      case 'out-in':
	        self.remove(current, function () {
	          target.$before(self.anchor, cb);
	        });
	        break;
	      default:
	        self.remove(current);
	        target.$before(self.anchor, cb);
	    }
	  },
	
	  /**
	   * Unbind.
	   */
	
	  unbind: function unbind() {
	    this.invalidatePending();
	    // Do not defer cleanup when unbinding
	    this.unbuild();
	    // destroy all keep-alive cached instances
	    if (this.cache) {
	      for (var key in this.cache) {
	        this.cache[key].$destroy();
	      }
	      this.cache = null;
	    }
	  }
	};
	
	/**
	 * Call activate hooks in order (asynchronous)
	 *
	 * @param {Array} hooks
	 * @param {Vue} vm
	 * @param {Function} cb
	 */
	
	function callActivateHooks(hooks, vm, cb) {
	  var total = hooks.length;
	  var called = 0;
	  hooks[0].call(vm, next);
	  function next() {
	    if (++called >= total) {
	      cb();
	    } else {
	      hooks[called].call(vm, next);
	    }
	  }
	}
	
	var propBindingModes = config._propBindingModes;
	var empty = {};
	
	// regexes
	var identRE$1 = /^[$_a-zA-Z]+[\w$]*$/;
	var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/;
	
	/**
	 * Compile props on a root element and return
	 * a props link function.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Array} propOptions
	 * @param {Vue} vm
	 * @return {Function} propsLinkFn
	 */
	
	function compileProps(el, propOptions, vm) {
	  var props = [];
	  var propsData = vm.$options.propsData;
	  var names = Object.keys(propOptions);
	  var i = names.length;
	  var options, name, attr, value, path, parsed, prop;
	  while (i--) {
	    name = names[i];
	    options = propOptions[name] || empty;
	
	    if (process.env.NODE_ENV !== 'production' && name === '$data') {
	      warn('Do not use $data as prop.', vm);
	      continue;
	    }
	
	    // props could contain dashes, which will be
	    // interpreted as minus calculations by the parser
	    // so we need to camelize the path here
	    path = camelize(name);
	    if (!identRE$1.test(path)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop key: "' + name + '". Prop keys ' + 'must be valid identifiers.', vm);
	      continue;
	    }
	
	    prop = {
	      name: name,
	      path: path,
	      options: options,
	      mode: propBindingModes.ONE_WAY,
	      raw: null
	    };
	
	    attr = hyphenate(name);
	    // first check dynamic version
	    if ((value = getBindAttr(el, attr)) === null) {
	      if ((value = getBindAttr(el, attr + '.sync')) !== null) {
	        prop.mode = propBindingModes.TWO_WAY;
	      } else if ((value = getBindAttr(el, attr + '.once')) !== null) {
	        prop.mode = propBindingModes.ONE_TIME;
	      }
	    }
	    if (value !== null) {
	      // has dynamic binding!
	      prop.raw = value;
	      parsed = parseDirective(value);
	      value = parsed.expression;
	      prop.filters = parsed.filters;
	      // check binding type
	      if (isLiteral(value) && !parsed.filters) {
	        // for expressions containing literal numbers and
	        // booleans, there's no need to setup a prop binding,
	        // so we can optimize them as a one-time set.
	        prop.optimizedLiteral = true;
	      } else {
	        prop.dynamic = true;
	        // check non-settable path for two-way bindings
	        if (process.env.NODE_ENV !== 'production' && prop.mode === propBindingModes.TWO_WAY && !settablePathRE.test(value)) {
	          prop.mode = propBindingModes.ONE_WAY;
	          warn('Cannot bind two-way prop with non-settable ' + 'parent path: ' + value, vm);
	        }
	      }
	      prop.parentPath = value;
	
	      // warn required two-way
	      if (process.env.NODE_ENV !== 'production' && options.twoWay && prop.mode !== propBindingModes.TWO_WAY) {
	        warn('Prop "' + name + '" expects a two-way binding type.', vm);
	      }
	    } else if ((value = getAttr(el, attr)) !== null) {
	      // has literal binding!
	      prop.raw = value;
	    } else if (propsData && (value = propsData[name] || propsData[path]) !== null) {
	      // has propsData
	      prop.raw = value;
	    } else if (process.env.NODE_ENV !== 'production') {
	      // check possible camelCase prop usage
	      var lowerCaseName = path.toLowerCase();
	      value = /[A-Z\-]/.test(name) && (el.getAttribute(lowerCaseName) || el.getAttribute(':' + lowerCaseName) || el.getAttribute('v-bind:' + lowerCaseName) || el.getAttribute(':' + lowerCaseName + '.once') || el.getAttribute('v-bind:' + lowerCaseName + '.once') || el.getAttribute(':' + lowerCaseName + '.sync') || el.getAttribute('v-bind:' + lowerCaseName + '.sync'));
	      if (value) {
	        warn('Possible usage error for prop `' + lowerCaseName + '` - ' + 'did you mean `' + attr + '`? HTML is case-insensitive, remember to use ' + 'kebab-case for props in templates.', vm);
	      } else if (options.required && (!propsData || !(name in propsData) && !(path in propsData))) {
	        // warn missing required
	        warn('Missing required prop: ' + name, vm);
	      }
	    }
	    // push prop
	    props.push(prop);
	  }
	  return makePropsLinkFn(props);
	}
	
	/**
	 * Build a function that applies props to a vm.
	 *
	 * @param {Array} props
	 * @return {Function} propsLinkFn
	 */
	
	function makePropsLinkFn(props) {
	  return function propsLinkFn(vm, scope) {
	    // store resolved props info
	    vm._props = {};
	    var inlineProps = vm.$options.propsData;
	    var i = props.length;
	    var prop, path, options, value, raw;
	    while (i--) {
	      prop = props[i];
	      raw = prop.raw;
	      path = prop.path;
	      options = prop.options;
	      vm._props[path] = prop;
	      if (inlineProps && hasOwn(inlineProps, path)) {
	        initProp(vm, prop, inlineProps[path]);
	      }if (raw === null) {
	        // initialize absent prop
	        initProp(vm, prop, undefined);
	      } else if (prop.dynamic) {
	        // dynamic prop
	        if (prop.mode === propBindingModes.ONE_TIME) {
	          // one time binding
	          value = (scope || vm._context || vm).$get(prop.parentPath);
	          initProp(vm, prop, value);
	        } else {
	          if (vm._context) {
	            // dynamic binding
	            vm._bindDir({
	              name: 'prop',
	              def: propDef,
	              prop: prop
	            }, null, null, scope); // el, host, scope
	          } else {
	              // root instance
	              initProp(vm, prop, vm.$get(prop.parentPath));
	            }
	        }
	      } else if (prop.optimizedLiteral) {
	        // optimized literal, cast it and just set once
	        var stripped = stripQuotes(raw);
	        value = stripped === raw ? toBoolean(toNumber(raw)) : stripped;
	        initProp(vm, prop, value);
	      } else {
	        // string literal, but we need to cater for
	        // Boolean props with no value, or with same
	        // literal value (e.g. disabled="disabled")
	        // see https://github.com/vuejs/vue-loader/issues/182
	        value = options.type === Boolean && (raw === '' || raw === hyphenate(prop.name)) ? true : raw;
	        initProp(vm, prop, value);
	      }
	    }
	  };
	}
	
	/**
	 * Process a prop with a rawValue, applying necessary coersions,
	 * default values & assertions and call the given callback with
	 * processed value.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} rawValue
	 * @param {Function} fn
	 */
	
	function processPropValue(vm, prop, rawValue, fn) {
	  var isSimple = prop.dynamic && isSimplePath(prop.parentPath);
	  var value = rawValue;
	  if (value === undefined) {
	    value = getPropDefaultValue(vm, prop);
	  }
	  value = coerceProp(prop, value, vm);
	  var coerced = value !== rawValue;
	  if (!assertProp(prop, value, vm)) {
	    value = undefined;
	  }
	  if (isSimple && !coerced) {
	    withoutConversion(function () {
	      fn(value);
	    });
	  } else {
	    fn(value);
	  }
	}
	
	/**
	 * Set a prop's initial value on a vm and its data object.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */
	
	function initProp(vm, prop, value) {
	  processPropValue(vm, prop, value, function (value) {
	    defineReactive(vm, prop.path, value);
	  });
	}
	
	/**
	 * Update a prop's value on a vm.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */
	
	function updateProp(vm, prop, value) {
	  processPropValue(vm, prop, value, function (value) {
	    vm[prop.path] = value;
	  });
	}
	
	/**
	 * Get the default value of a prop.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @return {*}
	 */
	
	function getPropDefaultValue(vm, prop) {
	  // no default, return undefined
	  var options = prop.options;
	  if (!hasOwn(options, 'default')) {
	    // absent boolean value defaults to false
	    return options.type === Boolean ? false : undefined;
	  }
	  var def = options['default'];
	  // warn against non-factory defaults for Object & Array
	  if (isObject(def)) {
	    process.env.NODE_ENV !== 'production' && warn('Invalid default value for prop "' + prop.name + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && options.type !== Function ? def.call(vm) : def;
	}
	
	/**
	 * Assert whether a prop is valid.
	 *
	 * @param {Object} prop
	 * @param {*} value
	 * @param {Vue} vm
	 */
	
	function assertProp(prop, value, vm) {
	  if (!prop.options.required && ( // non-required
	  prop.raw === null || // abscent
	  value == null) // null or undefined
	  ) {
	      return true;
	    }
	  var options = prop.options;
	  var type = options.type;
	  var valid = !type;
	  var expectedTypes = [];
	  if (type) {
	    if (!isArray(type)) {
	      type = [type];
	    }
	    for (var i = 0; i < type.length && !valid; i++) {
	      var assertedType = assertType(value, type[i]);
	      expectedTypes.push(assertedType.expectedType);
	      valid = assertedType.valid;
	    }
	  }
	  if (!valid) {
	    if (process.env.NODE_ENV !== 'production') {
	      warn('Invalid prop: type check failed for prop "' + prop.name + '".' + ' Expected ' + expectedTypes.map(formatType).join(', ') + ', got ' + formatValue(value) + '.', vm);
	    }
	    return false;
	  }
	  var validator = options.validator;
	  if (validator) {
	    if (!validator(value)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop: custom validator check failed for prop "' + prop.name + '".', vm);
	      return false;
	    }
	  }
	  return true;
	}
	
	/**
	 * Force parsing value with coerce option.
	 *
	 * @param {*} value
	 * @param {Object} options
	 * @return {*}
	 */
	
	function coerceProp(prop, value, vm) {
	  var coerce = prop.options.coerce;
	  if (!coerce) {
	    return value;
	  }
	  if (typeof coerce === 'function') {
	    return coerce(value);
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid coerce for prop "' + prop.name + '": expected function, got ' + typeof coerce + '.', vm);
	    return value;
	  }
	}
	
	/**
	 * Assert the type of a value
	 *
	 * @param {*} value
	 * @param {Function} type
	 * @return {Object}
	 */
	
	function assertType(value, type) {
	  var valid;
	  var expectedType;
	  if (type === String) {
	    expectedType = 'string';
	    valid = typeof value === expectedType;
	  } else if (type === Number) {
	    expectedType = 'number';
	    valid = typeof value === expectedType;
	  } else if (type === Boolean) {
	    expectedType = 'boolean';
	    valid = typeof value === expectedType;
	  } else if (type === Function) {
	    expectedType = 'function';
	    valid = typeof value === expectedType;
	  } else if (type === Object) {
	    expectedType = 'object';
	    valid = isPlainObject(value);
	  } else if (type === Array) {
	    expectedType = 'array';
	    valid = isArray(value);
	  } else {
	    valid = value instanceof type;
	  }
	  return {
	    valid: valid,
	    expectedType: expectedType
	  };
	}
	
	/**
	 * Format type for output
	 *
	 * @param {String} type
	 * @return {String}
	 */
	
	function formatType(type) {
	  return type ? type.charAt(0).toUpperCase() + type.slice(1) : 'custom type';
	}
	
	/**
	 * Format value
	 *
	 * @param {*} value
	 * @return {String}
	 */
	
	function formatValue(val) {
	  return Object.prototype.toString.call(val).slice(8, -1);
	}
	
	var bindingModes = config._propBindingModes;
	
	var propDef = {
	
	  bind: function bind() {
	    var child = this.vm;
	    var parent = child._context;
	    // passed in from compiler directly
	    var prop = this.descriptor.prop;
	    var childKey = prop.path;
	    var parentKey = prop.parentPath;
	    var twoWay = prop.mode === bindingModes.TWO_WAY;
	
	    var parentWatcher = this.parentWatcher = new Watcher(parent, parentKey, function (val) {
	      updateProp(child, prop, val);
	    }, {
	      twoWay: twoWay,
	      filters: prop.filters,
	      // important: props need to be observed on the
	      // v-for scope if present
	      scope: this._scope
	    });
	
	    // set the child initial value.
	    initProp(child, prop, parentWatcher.value);
	
	    // setup two-way binding
	    if (twoWay) {
	      // important: defer the child watcher creation until
	      // the created hook (after data observation)
	      var self = this;
	      child.$once('pre-hook:created', function () {
	        self.childWatcher = new Watcher(child, childKey, function (val) {
	          parentWatcher.set(val);
	        }, {
	          // ensure sync upward before parent sync down.
	          // this is necessary in cases e.g. the child
	          // mutates a prop array, then replaces it. (#1683)
	          sync: true
	        });
	      });
	    }
	  },
	
	  unbind: function unbind() {
	    this.parentWatcher.teardown();
	    if (this.childWatcher) {
	      this.childWatcher.teardown();
	    }
	  }
	};
	
	var queue$1 = [];
	var queued = false;
	
	/**
	 * Push a job into the queue.
	 *
	 * @param {Function} job
	 */
	
	function pushJob(job) {
	  queue$1.push(job);
	  if (!queued) {
	    queued = true;
	    nextTick(flush);
	  }
	}
	
	/**
	 * Flush the queue, and do one forced reflow before
	 * triggering transitions.
	 */
	
	function flush() {
	  // Force layout
	  var f = document.documentElement.offsetHeight;
	  for (var i = 0; i < queue$1.length; i++) {
	    queue$1[i]();
	  }
	  queue$1 = [];
	  queued = false;
	  // dummy return, so js linters don't complain about
	  // unused variable f
	  return f;
	}
	
	var TYPE_TRANSITION = 'transition';
	var TYPE_ANIMATION = 'animation';
	var transDurationProp = transitionProp + 'Duration';
	var animDurationProp = animationProp + 'Duration';
	
	/**
	 * If a just-entered element is applied the
	 * leave class while its enter transition hasn't started yet,
	 * and the transitioned property has the same value for both
	 * enter/leave, then the leave transition will be skipped and
	 * the transitionend event never fires. This function ensures
	 * its callback to be called after a transition has started
	 * by waiting for double raf.
	 *
	 * It falls back to setTimeout on devices that support CSS
	 * transitions but not raf (e.g. Android 4.2 browser) - since
	 * these environments are usually slow, we are giving it a
	 * relatively large timeout.
	 */
	
	var raf = inBrowser && window.requestAnimationFrame;
	var waitForTransitionStart = raf
	/* istanbul ignore next */
	? function (fn) {
	  raf(function () {
	    raf(fn);
	  });
	} : function (fn) {
	  setTimeout(fn, 50);
	};
	
	/**
	 * A Transition object that encapsulates the state and logic
	 * of the transition.
	 *
	 * @param {Element} el
	 * @param {String} id
	 * @param {Object} hooks
	 * @param {Vue} vm
	 */
	function Transition(el, id, hooks, vm) {
	  this.id = id;
	  this.el = el;
	  this.enterClass = hooks && hooks.enterClass || id + '-enter';
	  this.leaveClass = hooks && hooks.leaveClass || id + '-leave';
	  this.hooks = hooks;
	  this.vm = vm;
	  // async state
	  this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null;
	  this.justEntered = false;
	  this.entered = this.left = false;
	  this.typeCache = {};
	  // check css transition type
	  this.type = hooks && hooks.type;
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV !== 'production') {
	    if (this.type && this.type !== TYPE_TRANSITION && this.type !== TYPE_ANIMATION) {
	      warn('invalid CSS transition type for transition="' + this.id + '": ' + this.type, vm);
	    }
	  }
	  // bind
	  var self = this;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone'].forEach(function (m) {
	    self[m] = bind(self[m], self);
	  });
	}
	
	var p$1 = Transition.prototype;
	
	/**
	 * Start an entering transition.
	 *
	 * 1. enter transition triggered
	 * 2. call beforeEnter hook
	 * 3. add enter class
	 * 4. insert/show element
	 * 5. call enter hook (with possible explicit js callback)
	 * 6. reflow
	 * 7. based on transition type:
	 *    - transition:
	 *        remove class now, wait for transitionend,
	 *        then done if there's no explicit js callback.
	 *    - animation:
	 *        wait for animationend, remove class,
	 *        then done if there's no explicit js callback.
	 *    - no css transition:
	 *        done now if there's no explicit js callback.
	 * 8. wait for either done or js callback, then call
	 *    afterEnter hook.
	 *
	 * @param {Function} op - insert/show the element
	 * @param {Function} [cb]
	 */
	
	p$1.enter = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeEnter');
	  this.cb = cb;
	  addClass(this.el, this.enterClass);
	  op();
	  this.entered = false;
	  this.callHookWithCb('enter');
	  if (this.entered) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.enterCancelled;
	  pushJob(this.enterNextTick);
	};
	
	/**
	 * The "nextTick" phase of an entering transition, which is
	 * to be pushed into a queue and executed after a reflow so
	 * that removing the class can trigger a CSS transition.
	 */
	
	p$1.enterNextTick = function () {
	  var _this = this;
	
	  // prevent transition skipping
	  this.justEntered = true;
	  waitForTransitionStart(function () {
	    _this.justEntered = false;
	  });
	  var enterDone = this.enterDone;
	  var type = this.getCssTransitionType(this.enterClass);
	  if (!this.pendingJsCb) {
	    if (type === TYPE_TRANSITION) {
	      // trigger transition by removing enter class now
	      removeClass(this.el, this.enterClass);
	      this.setupCssCb(transitionEndEvent, enterDone);
	    } else if (type === TYPE_ANIMATION) {
	      this.setupCssCb(animationEndEvent, enterDone);
	    } else {
	      enterDone();
	    }
	  } else if (type === TYPE_TRANSITION) {
	    removeClass(this.el, this.enterClass);
	  }
	};
	
	/**
	 * The "cleanup" phase of an entering transition.
	 */
	
	p$1.enterDone = function () {
	  this.entered = true;
	  this.cancel = this.pendingJsCb = null;
	  removeClass(this.el, this.enterClass);
	  this.callHook('afterEnter');
	  if (this.cb) this.cb();
	};
	
	/**
	 * Start a leaving transition.
	 *
	 * 1. leave transition triggered.
	 * 2. call beforeLeave hook
	 * 3. add leave class (trigger css transition)
	 * 4. call leave hook (with possible explicit js callback)
	 * 5. reflow if no explicit js callback is provided
	 * 6. based on transition type:
	 *    - transition or animation:
	 *        wait for end event, remove class, then done if
	 *        there's no explicit js callback.
	 *    - no css transition:
	 *        done if there's no explicit js callback.
	 * 7. wait for either done or js callback, then call
	 *    afterLeave hook.
	 *
	 * @param {Function} op - remove/hide the element
	 * @param {Function} [cb]
	 */
	
	p$1.leave = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeLeave');
	  this.op = op;
	  this.cb = cb;
	  addClass(this.el, this.leaveClass);
	  this.left = false;
	  this.callHookWithCb('leave');
	  if (this.left) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.leaveCancelled;
	  // only need to handle leaveDone if
	  // 1. the transition is already done (synchronously called
	  //    by the user, which causes this.op set to null)
	  // 2. there's no explicit js callback
	  if (this.op && !this.pendingJsCb) {
	    // if a CSS transition leaves immediately after enter,
	    // the transitionend event never fires. therefore we
	    // detect such cases and end the leave immediately.
	    if (this.justEntered) {
	      this.leaveDone();
	    } else {
	      pushJob(this.leaveNextTick);
	    }
	  }
	};
	
	/**
	 * The "nextTick" phase of a leaving transition.
	 */
	
	p$1.leaveNextTick = function () {
	  var type = this.getCssTransitionType(this.leaveClass);
	  if (type) {
	    var event = type === TYPE_TRANSITION ? transitionEndEvent : animationEndEvent;
	    this.setupCssCb(event, this.leaveDone);
	  } else {
	    this.leaveDone();
	  }
	};
	
	/**
	 * The "cleanup" phase of a leaving transition.
	 */
	
	p$1.leaveDone = function () {
	  this.left = true;
	  this.cancel = this.pendingJsCb = null;
	  this.op();
	  removeClass(this.el, this.leaveClass);
	  this.callHook('afterLeave');
	  if (this.cb) this.cb();
	  this.op = null;
	};
	
	/**
	 * Cancel any pending callbacks from a previously running
	 * but not finished transition.
	 */
	
	p$1.cancelPending = function () {
	  this.op = this.cb = null;
	  var hasPending = false;
	  if (this.pendingCssCb) {
	    hasPending = true;
	    off(this.el, this.pendingCssEvent, this.pendingCssCb);
	    this.pendingCssEvent = this.pendingCssCb = null;
	  }
	  if (this.pendingJsCb) {
	    hasPending = true;
	    this.pendingJsCb.cancel();
	    this.pendingJsCb = null;
	  }
	  if (hasPending) {
	    removeClass(this.el, this.enterClass);
	    removeClass(this.el, this.leaveClass);
	  }
	  if (this.cancel) {
	    this.cancel.call(this.vm, this.el);
	    this.cancel = null;
	  }
	};
	
	/**
	 * Call a user-provided synchronous hook function.
	 *
	 * @param {String} type
	 */
	
	p$1.callHook = function (type) {
	  if (this.hooks && this.hooks[type]) {
	    this.hooks[type].call(this.vm, this.el);
	  }
	};
	
	/**
	 * Call a user-provided, potentially-async hook function.
	 * We check for the length of arguments to see if the hook
	 * expects a `done` callback. If true, the transition's end
	 * will be determined by when the user calls that callback;
	 * otherwise, the end is determined by the CSS transition or
	 * animation.
	 *
	 * @param {String} type
	 */
	
	p$1.callHookWithCb = function (type) {
	  var hook = this.hooks && this.hooks[type];
	  if (hook) {
	    if (hook.length > 1) {
	      this.pendingJsCb = cancellable(this[type + 'Done']);
	    }
	    hook.call(this.vm, this.el, this.pendingJsCb);
	  }
	};
	
	/**
	 * Get an element's transition type based on the
	 * calculated styles.
	 *
	 * @param {String} className
	 * @return {Number}
	 */
	
	p$1.getCssTransitionType = function (className) {
	  /* istanbul ignore if */
	  if (!transitionEndEvent ||
	  // skip CSS transitions if page is not visible -
	  // this solves the issue of transitionend events not
	  // firing until the page is visible again.
	  // pageVisibility API is supported in IE10+, same as
	  // CSS transitions.
	  document.hidden ||
	  // explicit js-only transition
	  this.hooks && this.hooks.css === false ||
	  // element is hidden
	  isHidden(this.el)) {
	    return;
	  }
	  var type = this.type || this.typeCache[className];
	  if (type) return type;
	  var inlineStyles = this.el.style;
	  var computedStyles = window.getComputedStyle(this.el);
	  var transDuration = inlineStyles[transDurationProp] || computedStyles[transDurationProp];
	  if (transDuration && transDuration !== '0s') {
	    type = TYPE_TRANSITION;
	  } else {
	    var animDuration = inlineStyles[animDurationProp] || computedStyles[animDurationProp];
	    if (animDuration && animDuration !== '0s') {
	      type = TYPE_ANIMATION;
	    }
	  }
	  if (type) {
	    this.typeCache[className] = type;
	  }
	  return type;
	};
	
	/**
	 * Setup a CSS transitionend/animationend callback.
	 *
	 * @param {String} event
	 * @param {Function} cb
	 */
	
	p$1.setupCssCb = function (event, cb) {
	  this.pendingCssEvent = event;
	  var self = this;
	  var el = this.el;
	  var onEnd = this.pendingCssCb = function (e) {
	    if (e.target === el) {
	      off(el, event, onEnd);
	      self.pendingCssEvent = self.pendingCssCb = null;
	      if (!self.pendingJsCb && cb) {
	        cb();
	      }
	    }
	  };
	  on(el, event, onEnd);
	};
	
	/**
	 * Check if an element is hidden - in that case we can just
	 * skip the transition alltogether.
	 *
	 * @param {Element} el
	 * @return {Boolean}
	 */
	
	function isHidden(el) {
	  if (/svg$/.test(el.namespaceURI)) {
	    // SVG elements do not have offset(Width|Height)
	    // so we need to check the client rect
	    var rect = el.getBoundingClientRect();
	    return !(rect.width || rect.height);
	  } else {
	    return !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
	  }
	}
	
	var transition$1 = {
	
	  priority: TRANSITION,
	
	  update: function update(id, oldId) {
	    var el = this.el;
	    // resolve on owner vm
	    var hooks = resolveAsset(this.vm.$options, 'transitions', id);
	    id = id || 'v';
	    oldId = oldId || 'v';
	    el.__v_trans = new Transition(el, id, hooks, this.vm);
	    removeClass(el, oldId + '-transition');
	    addClass(el, id + '-transition');
	  }
	};
	
	var internalDirectives = {
	  style: style,
	  'class': vClass,
	  component: component,
	  prop: propDef,
	  transition: transition$1
	};
	
	// special binding prefixes
	var bindRE = /^v-bind:|^:/;
	var onRE = /^v-on:|^@/;
	var dirAttrRE = /^v-([^:]+)(?:$|:(.*)$)/;
	var modifierRE = /\.[^\.]+/g;
	var transitionRE = /^(v-bind:|:)?transition$/;
	
	// default directive priority
	var DEFAULT_PRIORITY = 1000;
	var DEFAULT_TERMINAL_PRIORITY = 2000;
	
	/**
	 * Compile a template and return a reusable composite link
	 * function, which recursively contains more link functions
	 * inside. This top level compile function would normally
	 * be called on instance root nodes, but can also be used
	 * for partial compilation if the partial argument is true.
	 *
	 * The returned composite link function, when called, will
	 * return an unlink function that tearsdown all directives
	 * created during the linking phase.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Object} options
	 * @param {Boolean} partial
	 * @return {Function}
	 */
	
	function compile(el, options, partial) {
	  // link function for the node itself.
	  var nodeLinkFn = partial || !options._asComponent ? compileNode(el, options) : null;
	  // link function for the childNodes
	  var childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && !isScript(el) && el.hasChildNodes() ? compileNodeList(el.childNodes, options) : null;
	
	  /**
	   * A composite linker function to be called on a already
	   * compiled piece of DOM, which instantiates all directive
	   * instances.
	   *
	   * @param {Vue} vm
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host] - host vm of transcluded content
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - link context fragment
	   * @return {Function|undefined}
	   */
	
	  return function compositeLinkFn(vm, el, host, scope, frag) {
	    // cache childNodes before linking parent, fix #657
	    var childNodes = toArray(el.childNodes);
	    // link
	    var dirs = linkAndCapture(function compositeLinkCapturer() {
	      if (nodeLinkFn) nodeLinkFn(vm, el, host, scope, frag);
	      if (childLinkFn) childLinkFn(vm, childNodes, host, scope, frag);
	    }, vm);
	    return makeUnlinkFn(vm, dirs);
	  };
	}
	
	/**
	 * Apply a linker to a vm/element pair and capture the
	 * directives created during the process.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 */
	
	function linkAndCapture(linker, vm) {
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV === 'production') {
	    // reset directives before every capture in production
	    // mode, so that when unlinking we don't need to splice
	    // them out (which turns out to be a perf hit).
	    // they are kept in development mode because they are
	    // useful for Vue's own tests.
	    vm._directives = [];
	  }
	  var originalDirCount = vm._directives.length;
	  linker();
	  var dirs = vm._directives.slice(originalDirCount);
	  sortDirectives(dirs);
	  for (var i = 0, l = dirs.length; i < l; i++) {
	    dirs[i]._bind();
	  }
	  return dirs;
	}
	
	/**
	 * sort directives by priority (stable sort)
	 *
	 * @param {Array} dirs
	 */
	function sortDirectives(dirs) {
	  if (dirs.length === 0) return;
	
	  var groupedMap = {};
	  var i, j, k, l;
	  var index = 0;
	  var priorities = [];
	  for (i = 0, j = dirs.length; i < j; i++) {
	    var dir = dirs[i];
	    var priority = dir.descriptor.def.priority || DEFAULT_PRIORITY;
	    var array = groupedMap[priority];
	    if (!array) {
	      array = groupedMap[priority] = [];
	      priorities.push(priority);
	    }
	    array.push(dir);
	  }
	
	  priorities.sort(function (a, b) {
	    return a > b ? -1 : a === b ? 0 : 1;
	  });
	  for (i = 0, j = priorities.length; i < j; i++) {
	    var group = groupedMap[priorities[i]];
	    for (k = 0, l = group.length; k < l; k++) {
	      dirs[index++] = group[k];
	    }
	  }
	}
	
	/**
	 * Linker functions return an unlink function that
	 * tearsdown all directives instances generated during
	 * the process.
	 *
	 * We create unlink functions with only the necessary
	 * information to avoid retaining additional closures.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Vue} [context]
	 * @param {Array} [contextDirs]
	 * @return {Function}
	 */
	
	function makeUnlinkFn(vm, dirs, context, contextDirs) {
	  function unlink(destroying) {
	    teardownDirs(vm, dirs, destroying);
	    if (context && contextDirs) {
	      teardownDirs(context, contextDirs);
	    }
	  }
	  // expose linked directives
	  unlink.dirs = dirs;
	  return unlink;
	}
	
	/**
	 * Teardown partial linked directives.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Boolean} destroying
	 */
	
	function teardownDirs(vm, dirs, destroying) {
	  var i = dirs.length;
	  while (i--) {
	    dirs[i]._teardown();
	    if (process.env.NODE_ENV !== 'production' && !destroying) {
	      vm._directives.$remove(dirs[i]);
	    }
	  }
	}
	
	/**
	 * Compile link props on an instance.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} props
	 * @param {Object} [scope]
	 * @return {Function}
	 */
	
	function compileAndLinkProps(vm, el, props, scope) {
	  var propsLinkFn = compileProps(el, props, vm);
	  var propDirs = linkAndCapture(function () {
	    propsLinkFn(vm, scope);
	  }, vm);
	  return makeUnlinkFn(vm, propDirs);
	}
	
	/**
	 * Compile the root element of an instance.
	 *
	 * 1. attrs on context container (context scope)
	 * 2. attrs on the component template root node, if
	 *    replace:true (child scope)
	 *
	 * If this is a fragment instance, we only need to compile 1.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @param {Object} contextOptions
	 * @return {Function}
	 */
	
	function compileRoot(el, options, contextOptions) {
	  var containerAttrs = options._containerAttrs;
	  var replacerAttrs = options._replacerAttrs;
	  var contextLinkFn, replacerLinkFn;
	
	  // only need to compile other attributes for
	  // non-fragment instances
	  if (el.nodeType !== 11) {
	    // for components, container and replacer need to be
	    // compiled separately and linked in different scopes.
	    if (options._asComponent) {
	      // 2. container attributes
	      if (containerAttrs && contextOptions) {
	        contextLinkFn = compileDirectives(containerAttrs, contextOptions);
	      }
	      if (replacerAttrs) {
	        // 3. replacer attributes
	        replacerLinkFn = compileDirectives(replacerAttrs, options);
	      }
	    } else {
	      // non-component, just compile as a normal element.
	      replacerLinkFn = compileDirectives(el.attributes, options);
	    }
	  } else if (process.env.NODE_ENV !== 'production' && containerAttrs) {
	    // warn container directives for fragment instances
	    var names = containerAttrs.filter(function (attr) {
	      // allow vue-loader/vueify scoped css attributes
	      return attr.name.indexOf('_v-') < 0 &&
	      // allow event listeners
	      !onRE.test(attr.name) &&
	      // allow slots
	      attr.name !== 'slot';
	    }).map(function (attr) {
	      return '"' + attr.name + '"';
	    });
	    if (names.length) {
	      var plural = names.length > 1;
	
	      var componentName = options.el.tagName.toLowerCase();
	      if (componentName === 'component' && options.name) {
	        componentName += ':' + options.name;
	      }
	
	      warn('Attribute' + (plural ? 's ' : ' ') + names.join(', ') + (plural ? ' are' : ' is') + ' ignored on component ' + '<' + componentName + '> because ' + 'the component is a fragment instance: ' + 'http://vuejs.org/guide/components.html#Fragment-Instance');
	    }
	  }
	
	  options._containerAttrs = options._replacerAttrs = null;
	  return function rootLinkFn(vm, el, scope) {
	    // link context scope dirs
	    var context = vm._context;
	    var contextDirs;
	    if (context && contextLinkFn) {
	      contextDirs = linkAndCapture(function () {
	        contextLinkFn(context, el, null, scope);
	      }, context);
	    }
	
	    // link self
	    var selfDirs = linkAndCapture(function () {
	      if (replacerLinkFn) replacerLinkFn(vm, el);
	    }, vm);
	
	    // return the unlink function that tearsdown context
	    // container directives.
	    return makeUnlinkFn(vm, selfDirs, context, contextDirs);
	  };
	}
	
	/**
	 * Compile a node and return a nodeLinkFn based on the
	 * node type.
	 *
	 * @param {Node} node
	 * @param {Object} options
	 * @return {Function|null}
	 */
	
	function compileNode(node, options) {
	  var type = node.nodeType;
	  if (type === 1 && !isScript(node)) {
	    return compileElement(node, options);
	  } else if (type === 3 && node.data.trim()) {
	    return compileTextNode(node, options);
	  } else {
	    return null;
	  }
	}
	
	/**
	 * Compile an element and return a nodeLinkFn.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|null}
	 */
	
	function compileElement(el, options) {
	  // preprocess textareas.
	  // textarea treats its text content as the initial value.
	  // just bind it as an attr directive for value.
	  if (el.tagName === 'TEXTAREA') {
	    // a textarea which has v-pre attr should skip complie.
	    if (getAttr(el, 'v-pre') !== null) {
	      return skip;
	    }
	    var tokens = parseText(el.value);
	    if (tokens) {
	      el.setAttribute(':value', tokensToExp(tokens));
	      el.value = '';
	    }
	  }
	  var linkFn;
	  var hasAttrs = el.hasAttributes();
	  var attrs = hasAttrs && toArray(el.attributes);
	  // check terminal directives (for & if)
	  if (hasAttrs) {
	    linkFn = checkTerminalDirectives(el, attrs, options);
	  }
	  // check element directives
	  if (!linkFn) {
	    linkFn = checkElementDirectives(el, options);
	  }
	  // check component
	  if (!linkFn) {
	    linkFn = checkComponent(el, options);
	  }
	  // normal directives
	  if (!linkFn && hasAttrs) {
	    linkFn = compileDirectives(attrs, options);
	  }
	  return linkFn;
	}
	
	/**
	 * Compile a textNode and return a nodeLinkFn.
	 *
	 * @param {TextNode} node
	 * @param {Object} options
	 * @return {Function|null} textNodeLinkFn
	 */
	
	function compileTextNode(node, options) {
	  // skip marked text nodes
	  if (node._skip) {
	    return removeText;
	  }
	
	  var tokens = parseText(node.wholeText);
	  if (!tokens) {
	    return null;
	  }
	
	  // mark adjacent text nodes as skipped,
	  // because we are using node.wholeText to compile
	  // all adjacent text nodes together. This fixes
	  // issues in IE where sometimes it splits up a single
	  // text node into multiple ones.
	  var next = node.nextSibling;
	  while (next && next.nodeType === 3) {
	    next._skip = true;
	    next = next.nextSibling;
	  }
	
	  var frag = document.createDocumentFragment();
	  var el, token;
	  for (var i = 0, l = tokens.length; i < l; i++) {
	    token = tokens[i];
	    el = token.tag ? processTextToken(token, options) : document.createTextNode(token.value);
	    frag.appendChild(el);
	  }
	  return makeTextNodeLinkFn(tokens, frag, options);
	}
	
	/**
	 * Linker for an skipped text node.
	 *
	 * @param {Vue} vm
	 * @param {Text} node
	 */
	
	function removeText(vm, node) {
	  remove(node);
	}
	
	/**
	 * Process a single text token.
	 *
	 * @param {Object} token
	 * @param {Object} options
	 * @return {Node}
	 */
	
	function processTextToken(token, options) {
	  var el;
	  if (token.oneTime) {
	    el = document.createTextNode(token.value);
	  } else {
	    if (token.html) {
	      el = document.createComment('v-html');
	      setTokenType('html');
	    } else {
	      // IE will clean up empty textNodes during
	      // frag.cloneNode(true), so we have to give it
	      // something here...
	      el = document.createTextNode(' ');
	      setTokenType('text');
	    }
	  }
	  function setTokenType(type) {
	    if (token.descriptor) return;
	    var parsed = parseDirective(token.value);
	    token.descriptor = {
	      name: type,
	      def: directives[type],
	      expression: parsed.expression,
	      filters: parsed.filters
	    };
	  }
	  return el;
	}
	
	/**
	 * Build a function that processes a textNode.
	 *
	 * @param {Array<Object>} tokens
	 * @param {DocumentFragment} frag
	 */
	
	function makeTextNodeLinkFn(tokens, frag) {
	  return function textNodeLinkFn(vm, el, host, scope) {
	    var fragClone = frag.cloneNode(true);
	    var childNodes = toArray(fragClone.childNodes);
	    var token, value, node;
	    for (var i = 0, l = tokens.length; i < l; i++) {
	      token = tokens[i];
	      value = token.value;
	      if (token.tag) {
	        node = childNodes[i];
	        if (token.oneTime) {
	          value = (scope || vm).$eval(value);
	          if (token.html) {
	            replace(node, parseTemplate(value, true));
	          } else {
	            node.data = _toString(value);
	          }
	        } else {
	          vm._bindDir(token.descriptor, node, host, scope);
	        }
	      }
	    }
	    replace(el, fragClone);
	  };
	}
	
	/**
	 * Compile a node list and return a childLinkFn.
	 *
	 * @param {NodeList} nodeList
	 * @param {Object} options
	 * @return {Function|undefined}
	 */
	
	function compileNodeList(nodeList, options) {
	  var linkFns = [];
	  var nodeLinkFn, childLinkFn, node;
	  for (var i = 0, l = nodeList.length; i < l; i++) {
	    node = nodeList[i];
	    nodeLinkFn = compileNode(node, options);
	    childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && node.tagName !== 'SCRIPT' && node.hasChildNodes() ? compileNodeList(node.childNodes, options) : null;
	    linkFns.push(nodeLinkFn, childLinkFn);
	  }
	  return linkFns.length ? makeChildLinkFn(linkFns) : null;
	}
	
	/**
	 * Make a child link function for a node's childNodes.
	 *
	 * @param {Array<Function>} linkFns
	 * @return {Function} childLinkFn
	 */
	
	function makeChildLinkFn(linkFns) {
	  return function childLinkFn(vm, nodes, host, scope, frag) {
	    var node, nodeLinkFn, childrenLinkFn;
	    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
	      node = nodes[n];
	      nodeLinkFn = linkFns[i++];
	      childrenLinkFn = linkFns[i++];
	      // cache childNodes before linking parent, fix #657
	      var childNodes = toArray(node.childNodes);
	      if (nodeLinkFn) {
	        nodeLinkFn(vm, node, host, scope, frag);
	      }
	      if (childrenLinkFn) {
	        childrenLinkFn(vm, childNodes, host, scope, frag);
	      }
	    }
	  };
	}
	
	/**
	 * Check for element directives (custom elements that should
	 * be resovled as terminal directives).
	 *
	 * @param {Element} el
	 * @param {Object} options
	 */
	
	function checkElementDirectives(el, options) {
	  var tag = el.tagName.toLowerCase();
	  if (commonTagRE.test(tag)) {
	    return;
	  }
	  var def = resolveAsset(options, 'elementDirectives', tag);
	  if (def) {
	    return makeTerminalNodeLinkFn(el, tag, '', options, def);
	  }
	}
	
	/**
	 * Check if an element is a component. If yes, return
	 * a component link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|undefined}
	 */
	
	function checkComponent(el, options) {
	  var component = checkComponentAttr(el, options);
	  if (component) {
	    var ref = findRef(el);
	    var descriptor = {
	      name: 'component',
	      ref: ref,
	      expression: component.id,
	      def: internalDirectives.component,
	      modifiers: {
	        literal: !component.dynamic
	      }
	    };
	    var componentLinkFn = function componentLinkFn(vm, el, host, scope, frag) {
	      if (ref) {
	        defineReactive((scope || vm).$refs, ref, null);
	      }
	      vm._bindDir(descriptor, el, host, scope, frag);
	    };
	    componentLinkFn.terminal = true;
	    return componentLinkFn;
	  }
	}
	
	/**
	 * Check an element for terminal directives in fixed order.
	 * If it finds one, return a terminal link function.
	 *
	 * @param {Element} el
	 * @param {Array} attrs
	 * @param {Object} options
	 * @return {Function} terminalLinkFn
	 */
	
	function checkTerminalDirectives(el, attrs, options) {
	  // skip v-pre
	  if (getAttr(el, 'v-pre') !== null) {
	    return skip;
	  }
	  // skip v-else block, but only if following v-if
	  if (el.hasAttribute('v-else')) {
	    var prev = el.previousElementSibling;
	    if (prev && prev.hasAttribute('v-if')) {
	      return skip;
	    }
	  }
	
	  var attr, name, value, modifiers, matched, dirName, rawName, arg, def, termDef;
	  for (var i = 0, j = attrs.length; i < j; i++) {
	    attr = attrs[i];
	    name = attr.name.replace(modifierRE, '');
	    if (matched = name.match(dirAttrRE)) {
	      def = resolveAsset(options, 'directives', matched[1]);
	      if (def && def.terminal) {
	        if (!termDef || (def.priority || DEFAULT_TERMINAL_PRIORITY) > termDef.priority) {
	          termDef = def;
	          rawName = attr.name;
	          modifiers = parseModifiers(attr.name);
	          value = attr.value;
	          dirName = matched[1];
	          arg = matched[2];
	        }
	      }
	    }
	  }
	
	  if (termDef) {
	    return makeTerminalNodeLinkFn(el, dirName, value, options, termDef, rawName, arg, modifiers);
	  }
	}
	
	function skip() {}
	skip.terminal = true;
	
	/**
	 * Build a node link function for a terminal directive.
	 * A terminal link function terminates the current
	 * compilation recursion and handles compilation of the
	 * subtree in the directive.
	 *
	 * @param {Element} el
	 * @param {String} dirName
	 * @param {String} value
	 * @param {Object} options
	 * @param {Object} def
	 * @param {String} [rawName]
	 * @param {String} [arg]
	 * @param {Object} [modifiers]
	 * @return {Function} terminalLinkFn
	 */
	
	function makeTerminalNodeLinkFn(el, dirName, value, options, def, rawName, arg, modifiers) {
	  var parsed = parseDirective(value);
	  var descriptor = {
	    name: dirName,
	    arg: arg,
	    expression: parsed.expression,
	    filters: parsed.filters,
	    raw: value,
	    attr: rawName,
	    modifiers: modifiers,
	    def: def
	  };
	  // check ref for v-for, v-if and router-view
	  if (dirName === 'for' || dirName === 'router-view') {
	    descriptor.ref = findRef(el);
	  }
	  var fn = function terminalNodeLinkFn(vm, el, host, scope, frag) {
	    if (descriptor.ref) {
	      defineReactive((scope || vm).$refs, descriptor.ref, null);
	    }
	    vm._bindDir(descriptor, el, host, scope, frag);
	  };
	  fn.terminal = true;
	  return fn;
	}
	
	/**
	 * Compile the directives on an element and return a linker.
	 *
	 * @param {Array|NamedNodeMap} attrs
	 * @param {Object} options
	 * @return {Function}
	 */
	
	function compileDirectives(attrs, options) {
	  var i = attrs.length;
	  var dirs = [];
	  var attr, name, value, rawName, rawValue, dirName, arg, modifiers, dirDef, tokens, matched;
	  while (i--) {
	    attr = attrs[i];
	    name = rawName = attr.name;
	    value = rawValue = attr.value;
	    tokens = parseText(value);
	    // reset arg
	    arg = null;
	    // check modifiers
	    modifiers = parseModifiers(name);
	    name = name.replace(modifierRE, '');
	
	    // attribute interpolations
	    if (tokens) {
	      value = tokensToExp(tokens);
	      arg = name;
	      pushDir('bind', directives.bind, tokens);
	      // warn against mixing mustaches with v-bind
	      if (process.env.NODE_ENV !== 'production') {
	        if (name === 'class' && Array.prototype.some.call(attrs, function (attr) {
	          return attr.name === ':class' || attr.name === 'v-bind:class';
	        })) {
	          warn('class="' + rawValue + '": Do not mix mustache interpolation ' + 'and v-bind for "class" on the same element. Use one or the other.', options);
	        }
	      }
	    } else
	
	      // special attribute: transition
	      if (transitionRE.test(name)) {
	        modifiers.literal = !bindRE.test(name);
	        pushDir('transition', internalDirectives.transition);
	      } else
	
	        // event handlers
	        if (onRE.test(name)) {
	          arg = name.replace(onRE, '');
	          pushDir('on', directives.on);
	        } else
	
	          // attribute bindings
	          if (bindRE.test(name)) {
	            dirName = name.replace(bindRE, '');
	            if (dirName === 'style' || dirName === 'class') {
	              pushDir(dirName, internalDirectives[dirName]);
	            } else {
	              arg = dirName;
	              pushDir('bind', directives.bind);
	            }
	          } else
	
	            // normal directives
	            if (matched = name.match(dirAttrRE)) {
	              dirName = matched[1];
	              arg = matched[2];
	
	              // skip v-else (when used with v-show)
	              if (dirName === 'else') {
	                continue;
	              }
	
	              dirDef = resolveAsset(options, 'directives', dirName, true);
	              if (dirDef) {
	                pushDir(dirName, dirDef);
	              }
	            }
	  }
	
	  /**
	   * Push a directive.
	   *
	   * @param {String} dirName
	   * @param {Object|Function} def
	   * @param {Array} [interpTokens]
	   */
	
	  function pushDir(dirName, def, interpTokens) {
	    var hasOneTimeToken = interpTokens && hasOneTime(interpTokens);
	    var parsed = !hasOneTimeToken && parseDirective(value);
	    dirs.push({
	      name: dirName,
	      attr: rawName,
	      raw: rawValue,
	      def: def,
	      arg: arg,
	      modifiers: modifiers,
	      // conversion from interpolation strings with one-time token
	      // to expression is differed until directive bind time so that we
	      // have access to the actual vm context for one-time bindings.
	      expression: parsed && parsed.expression,
	      filters: parsed && parsed.filters,
	      interp: interpTokens,
	      hasOneTime: hasOneTimeToken
	    });
	  }
	
	  if (dirs.length) {
	    return makeNodeLinkFn(dirs);
	  }
	}
	
	/**
	 * Parse modifiers from directive attribute name.
	 *
	 * @param {String} name
	 * @return {Object}
	 */
	
	function parseModifiers(name) {
	  var res = Object.create(null);
	  var match = name.match(modifierRE);
	  if (match) {
	    var i = match.length;
	    while (i--) {
	      res[match[i].slice(1)] = true;
	    }
	  }
	  return res;
	}
	
	/**
	 * Build a link function for all directives on a single node.
	 *
	 * @param {Array} directives
	 * @return {Function} directivesLinkFn
	 */
	
	function makeNodeLinkFn(directives) {
	  return function nodeLinkFn(vm, el, host, scope, frag) {
	    // reverse apply because it's sorted low to high
	    var i = directives.length;
	    while (i--) {
	      vm._bindDir(directives[i], el, host, scope, frag);
	    }
	  };
	}
	
	/**
	 * Check if an interpolation string contains one-time tokens.
	 *
	 * @param {Array} tokens
	 * @return {Boolean}
	 */
	
	function hasOneTime(tokens) {
	  var i = tokens.length;
	  while (i--) {
	    if (tokens[i].oneTime) return true;
	  }
	}
	
	function isScript(el) {
	  return el.tagName === 'SCRIPT' && (!el.hasAttribute('type') || el.getAttribute('type') === 'text/javascript');
	}
	
	var specialCharRE = /[^\w\-:\.]/;
	
	/**
	 * Process an element or a DocumentFragment based on a
	 * instance option object. This allows us to transclude
	 * a template node/fragment before the instance is created,
	 * so the processed fragment can then be cloned and reused
	 * in v-for.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */
	
	function transclude(el, options) {
	  // extract container attributes to pass them down
	  // to compiler, because they need to be compiled in
	  // parent scope. we are mutating the options object here
	  // assuming the same object will be used for compile
	  // right after this.
	  if (options) {
	    options._containerAttrs = extractAttrs(el);
	  }
	  // for template tags, what we want is its content as
	  // a documentFragment (for fragment instances)
	  if (isTemplate(el)) {
	    el = parseTemplate(el);
	  }
	  if (options) {
	    if (options._asComponent && !options.template) {
	      options.template = '<slot></slot>';
	    }
	    if (options.template) {
	      options._content = extractContent(el);
	      el = transcludeTemplate(el, options);
	    }
	  }
	  if (isFragment(el)) {
	    // anchors for fragment instance
	    // passing in `persist: true` to avoid them being
	    // discarded by IE during template cloning
	    prepend(createAnchor('v-start', true), el);
	    el.appendChild(createAnchor('v-end', true));
	  }
	  return el;
	}
	
	/**
	 * Process the template option.
	 * If the replace option is true this will swap the $el.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */
	
	function transcludeTemplate(el, options) {
	  var template = options.template;
	  var frag = parseTemplate(template, true);
	  if (frag) {
	    var replacer = frag.firstChild;
	    if (!replacer) {
	      return frag;
	    }
	    var tag = replacer.tagName && replacer.tagName.toLowerCase();
	    if (options.replace) {
	      /* istanbul ignore if */
	      if (el === document.body) {
	        process.env.NODE_ENV !== 'production' && warn('You are mounting an instance with a template to ' + '<body>. This will replace <body> entirely. You ' + 'should probably use `replace: false` here.');
	      }
	      // there are many cases where the instance must
	      // become a fragment instance: basically anything that
	      // can create more than 1 root nodes.
	      if (
	      // multi-children template
	      frag.childNodes.length > 1 ||
	      // non-element template
	      replacer.nodeType !== 1 ||
	      // single nested component
	      tag === 'component' || resolveAsset(options, 'components', tag) || hasBindAttr(replacer, 'is') ||
	      // element directive
	      resolveAsset(options, 'elementDirectives', tag) ||
	      // for block
	      replacer.hasAttribute('v-for') ||
	      // if block
	      replacer.hasAttribute('v-if')) {
	        return frag;
	      } else {
	        options._replacerAttrs = extractAttrs(replacer);
	        mergeAttrs(el, replacer);
	        return replacer;
	      }
	    } else {
	      el.appendChild(frag);
	      return el;
	    }
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid template option: ' + template);
	  }
	}
	
	/**
	 * Helper to extract a component container's attributes
	 * into a plain object array.
	 *
	 * @param {Element} el
	 * @return {Array}
	 */
	
	function extractAttrs(el) {
	  if (el.nodeType === 1 && el.hasAttributes()) {
	    return toArray(el.attributes);
	  }
	}
	
	/**
	 * Merge the attributes of two elements, and make sure
	 * the class names are merged properly.
	 *
	 * @param {Element} from
	 * @param {Element} to
	 */
	
	function mergeAttrs(from, to) {
	  var attrs = from.attributes;
	  var i = attrs.length;
	  var name, value;
	  while (i--) {
	    name = attrs[i].name;
	    value = attrs[i].value;
	    if (!to.hasAttribute(name) && !specialCharRE.test(name)) {
	      to.setAttribute(name, value);
	    } else if (name === 'class' && !parseText(value) && (value = value.trim())) {
	      value.split(/\s+/).forEach(function (cls) {
	        addClass(to, cls);
	      });
	    }
	  }
	}
	
	/**
	 * Scan and determine slot content distribution.
	 * We do this during transclusion instead at compile time so that
	 * the distribution is decoupled from the compilation order of
	 * the slots.
	 *
	 * @param {Element|DocumentFragment} template
	 * @param {Element} content
	 * @param {Vue} vm
	 */
	
	function resolveSlots(vm, content) {
	  if (!content) {
	    return;
	  }
	  var contents = vm._slotContents = Object.create(null);
	  var el, name;
	  for (var i = 0, l = content.children.length; i < l; i++) {
	    el = content.children[i];
	    /* eslint-disable no-cond-assign */
	    if (name = el.getAttribute('slot')) {
	      (contents[name] || (contents[name] = [])).push(el);
	    }
	    /* eslint-enable no-cond-assign */
	    if (process.env.NODE_ENV !== 'production' && getBindAttr(el, 'slot')) {
	      warn('The "slot" attribute must be static.', vm.$parent);
	    }
	  }
	  for (name in contents) {
	    contents[name] = extractFragment(contents[name], content);
	  }
	  if (content.hasChildNodes()) {
	    var nodes = content.childNodes;
	    if (nodes.length === 1 && nodes[0].nodeType === 3 && !nodes[0].data.trim()) {
	      return;
	    }
	    contents['default'] = extractFragment(content.childNodes, content);
	  }
	}
	
	/**
	 * Extract qualified content nodes from a node list.
	 *
	 * @param {NodeList} nodes
	 * @return {DocumentFragment}
	 */
	
	function extractFragment(nodes, parent) {
	  var frag = document.createDocumentFragment();
	  nodes = toArray(nodes);
	  for (var i = 0, l = nodes.length; i < l; i++) {
	    var node = nodes[i];
	    if (isTemplate(node) && !node.hasAttribute('v-if') && !node.hasAttribute('v-for')) {
	      parent.removeChild(node);
	      node = parseTemplate(node, true);
	    }
	    frag.appendChild(node);
	  }
	  return frag;
	}
	
	
	
	var compiler = Object.freeze({
		compile: compile,
		compileAndLinkProps: compileAndLinkProps,
		compileRoot: compileRoot,
		transclude: transclude,
		resolveSlots: resolveSlots
	});
	
	function stateMixin (Vue) {
	  /**
	   * Accessor for `$data` property, since setting $data
	   * requires observing the new object and updating
	   * proxied properties.
	   */
	
	  Object.defineProperty(Vue.prototype, '$data', {
	    get: function get() {
	      return this._data;
	    },
	    set: function set(newData) {
	      if (newData !== this._data) {
	        this._setData(newData);
	      }
	    }
	  });
	
	  /**
	   * Setup the scope of an instance, which contains:
	   * - observed data
	   * - computed properties
	   * - user methods
	   * - meta properties
	   */
	
	  Vue.prototype._initState = function () {
	    this._initProps();
	    this._initMeta();
	    this._initMethods();
	    this._initData();
	    this._initComputed();
	  };
	
	  /**
	   * Initialize props.
	   */
	
	  Vue.prototype._initProps = function () {
	    var options = this.$options;
	    var el = options.el;
	    var props = options.props;
	    if (props && !el) {
	      process.env.NODE_ENV !== 'production' && warn('Props will not be compiled if no `el` option is ' + 'provided at instantiation.', this);
	    }
	    // make sure to convert string selectors into element now
	    el = options.el = query(el);
	    this._propsUnlinkFn = el && el.nodeType === 1 && props
	    // props must be linked in proper scope if inside v-for
	    ? compileAndLinkProps(this, el, props, this._scope) : null;
	  };
	
	  /**
	   * Initialize the data.
	   */
	
	  Vue.prototype._initData = function () {
	    var dataFn = this.$options.data;
	    var data = this._data = dataFn ? dataFn() : {};
	    if (!isPlainObject(data)) {
	      data = {};
	      process.env.NODE_ENV !== 'production' && warn('data functions should return an object.', this);
	    }
	    var props = this._props;
	    // proxy data on instance
	    var keys = Object.keys(data);
	    var i, key;
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      // there are two scenarios where we can proxy a data key:
	      // 1. it's not already defined as a prop
	      // 2. it's provided via a instantiation option AND there are no
	      //    template prop present
	      if (!props || !hasOwn(props, key)) {
	        this._proxy(key);
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('Data field "' + key + '" is already defined ' + 'as a prop. To provide default value for a prop, use the "default" ' + 'prop option; if you want to pass prop values to an instantiation ' + 'call, use the "propsData" option.', this);
	      }
	    }
	    // observe data
	    observe(data, this);
	  };
	
	  /**
	   * Swap the instance's $data. Called in $data's setter.
	   *
	   * @param {Object} newData
	   */
	
	  Vue.prototype._setData = function (newData) {
	    newData = newData || {};
	    var oldData = this._data;
	    this._data = newData;
	    var keys, key, i;
	    // unproxy keys not present in new data
	    keys = Object.keys(oldData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!(key in newData)) {
	        this._unproxy(key);
	      }
	    }
	    // proxy keys not already proxied,
	    // and trigger change for changed values
	    keys = Object.keys(newData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!hasOwn(this, key)) {
	        // new property
	        this._proxy(key);
	      }
	    }
	    oldData.__ob__.removeVm(this);
	    observe(newData, this);
	    this._digest();
	  };
	
	  /**
	   * Proxy a property, so that
	   * vm.prop === vm._data.prop
	   *
	   * @param {String} key
	   */
	
	  Vue.prototype._proxy = function (key) {
	    if (!isReserved(key)) {
	      // need to store ref to self here
	      // because these getter/setters might
	      // be called by child scopes via
	      // prototype inheritance.
	      var self = this;
	      Object.defineProperty(self, key, {
	        configurable: true,
	        enumerable: true,
	        get: function proxyGetter() {
	          return self._data[key];
	        },
	        set: function proxySetter(val) {
	          self._data[key] = val;
	        }
	      });
	    }
	  };
	
	  /**
	   * Unproxy a property.
	   *
	   * @param {String} key
	   */
	
	  Vue.prototype._unproxy = function (key) {
	    if (!isReserved(key)) {
	      delete this[key];
	    }
	  };
	
	  /**
	   * Force update on every watcher in scope.
	   */
	
	  Vue.prototype._digest = function () {
	    for (var i = 0, l = this._watchers.length; i < l; i++) {
	      this._watchers[i].update(true); // shallow updates
	    }
	  };
	
	  /**
	   * Setup computed properties. They are essentially
	   * special getter/setters
	   */
	
	  function noop() {}
	  Vue.prototype._initComputed = function () {
	    var computed = this.$options.computed;
	    if (computed) {
	      for (var key in computed) {
	        var userDef = computed[key];
	        var def = {
	          enumerable: true,
	          configurable: true
	        };
	        if (typeof userDef === 'function') {
	          def.get = makeComputedGetter(userDef, this);
	          def.set = noop;
	        } else {
	          def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, this) : bind(userDef.get, this) : noop;
	          def.set = userDef.set ? bind(userDef.set, this) : noop;
	        }
	        Object.defineProperty(this, key, def);
	      }
	    }
	  };
	
	  function makeComputedGetter(getter, owner) {
	    var watcher = new Watcher(owner, getter, null, {
	      lazy: true
	    });
	    return function computedGetter() {
	      if (watcher.dirty) {
	        watcher.evaluate();
	      }
	      if (Dep.target) {
	        watcher.depend();
	      }
	      return watcher.value;
	    };
	  }
	
	  /**
	   * Setup instance methods. Methods must be bound to the
	   * instance since they might be passed down as a prop to
	   * child components.
	   */
	
	  Vue.prototype._initMethods = function () {
	    var methods = this.$options.methods;
	    if (methods) {
	      for (var key in methods) {
	        this[key] = bind(methods[key], this);
	      }
	    }
	  };
	
	  /**
	   * Initialize meta information like $index, $key & $value.
	   */
	
	  Vue.prototype._initMeta = function () {
	    var metas = this.$options._meta;
	    if (metas) {
	      for (var key in metas) {
	        defineReactive(this, key, metas[key]);
	      }
	    }
	  };
	}
	
	var eventRE = /^v-on:|^@/;
	
	function eventsMixin (Vue) {
	  /**
	   * Setup the instance's option events & watchers.
	   * If the value is a string, we pull it from the
	   * instance's methods by name.
	   */
	
	  Vue.prototype._initEvents = function () {
	    var options = this.$options;
	    if (options._asComponent) {
	      registerComponentEvents(this, options.el);
	    }
	    registerCallbacks(this, '$on', options.events);
	    registerCallbacks(this, '$watch', options.watch);
	  };
	
	  /**
	   * Register v-on events on a child component
	   *
	   * @param {Vue} vm
	   * @param {Element} el
	   */
	
	  function registerComponentEvents(vm, el) {
	    var attrs = el.attributes;
	    var name, value, handler;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      name = attrs[i].name;
	      if (eventRE.test(name)) {
	        name = name.replace(eventRE, '');
	        // force the expression into a statement so that
	        // it always dynamically resolves the method to call (#2670)
	        // kinda ugly hack, but does the job.
	        value = attrs[i].value;
	        if (isSimplePath(value)) {
	          value += '.apply(this, $arguments)';
	        }
	        handler = (vm._scope || vm._context).$eval(value, true);
	        handler._fromParent = true;
	        vm.$on(name.replace(eventRE), handler);
	      }
	    }
	  }
	
	  /**
	   * Register callbacks for option events and watchers.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {Object} hash
	   */
	
	  function registerCallbacks(vm, action, hash) {
	    if (!hash) return;
	    var handlers, key, i, j;
	    for (key in hash) {
	      handlers = hash[key];
	      if (isArray(handlers)) {
	        for (i = 0, j = handlers.length; i < j; i++) {
	          register(vm, action, key, handlers[i]);
	        }
	      } else {
	        register(vm, action, key, handlers);
	      }
	    }
	  }
	
	  /**
	   * Helper to register an event/watch callback.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {String} key
	   * @param {Function|String|Object} handler
	   * @param {Object} [options]
	   */
	
	  function register(vm, action, key, handler, options) {
	    var type = typeof handler;
	    if (type === 'function') {
	      vm[action](key, handler, options);
	    } else if (type === 'string') {
	      var methods = vm.$options.methods;
	      var method = methods && methods[handler];
	      if (method) {
	        vm[action](key, method, options);
	      } else {
	        process.env.NODE_ENV !== 'production' && warn('Unknown method: "' + handler + '" when ' + 'registering callback for ' + action + ': "' + key + '".', vm);
	      }
	    } else if (handler && type === 'object') {
	      register(vm, action, key, handler.handler, handler);
	    }
	  }
	
	  /**
	   * Setup recursive attached/detached calls
	   */
	
	  Vue.prototype._initDOMHooks = function () {
	    this.$on('hook:attached', onAttached);
	    this.$on('hook:detached', onDetached);
	  };
	
	  /**
	   * Callback to recursively call attached hook on children
	   */
	
	  function onAttached() {
	    if (!this._isAttached) {
	      this._isAttached = true;
	      this.$children.forEach(callAttach);
	    }
	  }
	
	  /**
	   * Iterator to call attached hook
	   *
	   * @param {Vue} child
	   */
	
	  function callAttach(child) {
	    if (!child._isAttached && inDoc(child.$el)) {
	      child._callHook('attached');
	    }
	  }
	
	  /**
	   * Callback to recursively call detached hook on children
	   */
	
	  function onDetached() {
	    if (this._isAttached) {
	      this._isAttached = false;
	      this.$children.forEach(callDetach);
	    }
	  }
	
	  /**
	   * Iterator to call detached hook
	   *
	   * @param {Vue} child
	   */
	
	  function callDetach(child) {
	    if (child._isAttached && !inDoc(child.$el)) {
	      child._callHook('detached');
	    }
	  }
	
	  /**
	   * Trigger all handlers for a hook
	   *
	   * @param {String} hook
	   */
	
	  Vue.prototype._callHook = function (hook) {
	    this.$emit('pre-hook:' + hook);
	    var handlers = this.$options[hook];
	    if (handlers) {
	      for (var i = 0, j = handlers.length; i < j; i++) {
	        handlers[i].call(this);
	      }
	    }
	    this.$emit('hook:' + hook);
	  };
	}
	
	function noop$1() {}
	
	/**
	 * A directive links a DOM element with a piece of data,
	 * which is the result of evaluating an expression.
	 * It registers a watcher with the expression and calls
	 * the DOM update function when a change is triggered.
	 *
	 * @param {Object} descriptor
	 *                 - {String} name
	 *                 - {Object} def
	 *                 - {String} expression
	 *                 - {Array<Object>} [filters]
	 *                 - {Object} [modifiers]
	 *                 - {Boolean} literal
	 *                 - {String} attr
	 *                 - {String} arg
	 *                 - {String} raw
	 *                 - {String} [ref]
	 *                 - {Array<Object>} [interp]
	 *                 - {Boolean} [hasOneTime]
	 * @param {Vue} vm
	 * @param {Node} el
	 * @param {Vue} [host] - transclusion host component
	 * @param {Object} [scope] - v-for scope
	 * @param {Fragment} [frag] - owner fragment
	 * @constructor
	 */
	function Directive(descriptor, vm, el, host, scope, frag) {
	  this.vm = vm;
	  this.el = el;
	  // copy descriptor properties
	  this.descriptor = descriptor;
	  this.name = descriptor.name;
	  this.expression = descriptor.expression;
	  this.arg = descriptor.arg;
	  this.modifiers = descriptor.modifiers;
	  this.filters = descriptor.filters;
	  this.literal = this.modifiers && this.modifiers.literal;
	  // private
	  this._locked = false;
	  this._bound = false;
	  this._listeners = null;
	  // link context
	  this._host = host;
	  this._scope = scope;
	  this._frag = frag;
	  // store directives on node in dev mode
	  if (process.env.NODE_ENV !== 'production' && this.el) {
	    this.el._vue_directives = this.el._vue_directives || [];
	    this.el._vue_directives.push(this);
	  }
	}
	
	/**
	 * Initialize the directive, mixin definition properties,
	 * setup the watcher, call definition bind() and update()
	 * if present.
	 */
	
	Directive.prototype._bind = function () {
	  var name = this.name;
	  var descriptor = this.descriptor;
	
	  // remove attribute
	  if ((name !== 'cloak' || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
	    var attr = descriptor.attr || 'v-' + name;
	    this.el.removeAttribute(attr);
	  }
	
	  // copy def properties
	  var def = descriptor.def;
	  if (typeof def === 'function') {
	    this.update = def;
	  } else {
	    extend(this, def);
	  }
	
	  // setup directive params
	  this._setupParams();
	
	  // initial bind
	  if (this.bind) {
	    this.bind();
	  }
	  this._bound = true;
	
	  if (this.literal) {
	    this.update && this.update(descriptor.raw);
	  } else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
	    // wrapped updater for context
	    var dir = this;
	    if (this.update) {
	      this._update = function (val, oldVal) {
	        if (!dir._locked) {
	          dir.update(val, oldVal);
	        }
	      };
	    } else {
	      this._update = noop$1;
	    }
	    var preProcess = this._preProcess ? bind(this._preProcess, this) : null;
	    var postProcess = this._postProcess ? bind(this._postProcess, this) : null;
	    var watcher = this._watcher = new Watcher(this.vm, this.expression, this._update, // callback
	    {
	      filters: this.filters,
	      twoWay: this.twoWay,
	      deep: this.deep,
	      preProcess: preProcess,
	      postProcess: postProcess,
	      scope: this._scope
	    });
	    // v-model with inital inline value need to sync back to
	    // model instead of update to DOM on init. They would
	    // set the afterBind hook to indicate that.
	    if (this.afterBind) {
	      this.afterBind();
	    } else if (this.update) {
	      this.update(watcher.value);
	    }
	  }
	};
	
	/**
	 * Setup all param attributes, e.g. track-by,
	 * transition-mode, etc...
	 */
	
	Directive.prototype._setupParams = function () {
	  if (!this.params) {
	    return;
	  }
	  var params = this.params;
	  // swap the params array with a fresh object.
	  this.params = Object.create(null);
	  var i = params.length;
	  var key, val, mappedKey;
	  while (i--) {
	    key = hyphenate(params[i]);
	    mappedKey = camelize(key);
	    val = getBindAttr(this.el, key);
	    if (val != null) {
	      // dynamic
	      this._setupParamWatcher(mappedKey, val);
	    } else {
	      // static
	      val = getAttr(this.el, key);
	      if (val != null) {
	        this.params[mappedKey] = val === '' ? true : val;
	      }
	    }
	  }
	};
	
	/**
	 * Setup a watcher for a dynamic param.
	 *
	 * @param {String} key
	 * @param {String} expression
	 */
	
	Directive.prototype._setupParamWatcher = function (key, expression) {
	  var self = this;
	  var called = false;
	  var unwatch = (this._scope || this.vm).$watch(expression, function (val, oldVal) {
	    self.params[key] = val;
	    // since we are in immediate mode,
	    // only call the param change callbacks if this is not the first update.
	    if (called) {
	      var cb = self.paramWatchers && self.paramWatchers[key];
	      if (cb) {
	        cb.call(self, val, oldVal);
	      }
	    } else {
	      called = true;
	    }
	  }, {
	    immediate: true,
	    user: false
	  });(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch);
	};
	
	/**
	 * Check if the directive is a function caller
	 * and if the expression is a callable one. If both true,
	 * we wrap up the expression and use it as the event
	 * handler.
	 *
	 * e.g. on-click="a++"
	 *
	 * @return {Boolean}
	 */
	
	Directive.prototype._checkStatement = function () {
	  var expression = this.expression;
	  if (expression && this.acceptStatement && !isSimplePath(expression)) {
	    var fn = parseExpression$1(expression).get;
	    var scope = this._scope || this.vm;
	    var handler = function handler(e) {
	      scope.$event = e;
	      fn.call(scope, scope);
	      scope.$event = null;
	    };
	    if (this.filters) {
	      handler = scope._applyFilters(handler, null, this.filters);
	    }
	    this.update(handler);
	    return true;
	  }
	};
	
	/**
	 * Set the corresponding value with the setter.
	 * This should only be used in two-way directives
	 * e.g. v-model.
	 *
	 * @param {*} value
	 * @public
	 */
	
	Directive.prototype.set = function (value) {
	  /* istanbul ignore else */
	  if (this.twoWay) {
	    this._withLock(function () {
	      this._watcher.set(value);
	    });
	  } else if (process.env.NODE_ENV !== 'production') {
	    warn('Directive.set() can only be used inside twoWay' + 'directives.');
	  }
	};
	
	/**
	 * Execute a function while preventing that function from
	 * triggering updates on this directive instance.
	 *
	 * @param {Function} fn
	 */
	
	Directive.prototype._withLock = function (fn) {
	  var self = this;
	  self._locked = true;
	  fn.call(self);
	  nextTick(function () {
	    self._locked = false;
	  });
	};
	
	/**
	 * Convenience method that attaches a DOM event listener
	 * to the directive element and autometically tears it down
	 * during unbind.
	 *
	 * @param {String} event
	 * @param {Function} handler
	 * @param {Boolean} [useCapture]
	 */
	
	Directive.prototype.on = function (event, handler, useCapture) {
	  on(this.el, event, handler, useCapture);(this._listeners || (this._listeners = [])).push([event, handler]);
	};
	
	/**
	 * Teardown the watcher and call unbind.
	 */
	
	Directive.prototype._teardown = function () {
	  if (this._bound) {
	    this._bound = false;
	    if (this.unbind) {
	      this.unbind();
	    }
	    if (this._watcher) {
	      this._watcher.teardown();
	    }
	    var listeners = this._listeners;
	    var i;
	    if (listeners) {
	      i = listeners.length;
	      while (i--) {
	        off(this.el, listeners[i][0], listeners[i][1]);
	      }
	    }
	    var unwatchFns = this._paramUnwatchFns;
	    if (unwatchFns) {
	      i = unwatchFns.length;
	      while (i--) {
	        unwatchFns[i]();
	      }
	    }
	    if (process.env.NODE_ENV !== 'production' && this.el) {
	      this.el._vue_directives.$remove(this);
	    }
	    this.vm = this.el = this._watcher = this._listeners = null;
	  }
	};
	
	function lifecycleMixin (Vue) {
	  /**
	   * Update v-ref for component.
	   *
	   * @param {Boolean} remove
	   */
	
	  Vue.prototype._updateRef = function (remove) {
	    var ref = this.$options._ref;
	    if (ref) {
	      var refs = (this._scope || this._context).$refs;
	      if (remove) {
	        if (refs[ref] === this) {
	          refs[ref] = null;
	        }
	      } else {
	        refs[ref] = this;
	      }
	    }
	  };
	
	  /**
	   * Transclude, compile and link element.
	   *
	   * If a pre-compiled linker is available, that means the
	   * passed in element will be pre-transcluded and compiled
	   * as well - all we need to do is to call the linker.
	   *
	   * Otherwise we need to call transclude/compile/link here.
	   *
	   * @param {Element} el
	   */
	
	  Vue.prototype._compile = function (el) {
	    var options = this.$options;
	
	    // transclude and init element
	    // transclude can potentially replace original
	    // so we need to keep reference; this step also injects
	    // the template and caches the original attributes
	    // on the container node and replacer node.
	    var original = el;
	    el = transclude(el, options);
	    this._initElement(el);
	
	    // handle v-pre on root node (#2026)
	    if (el.nodeType === 1 && getAttr(el, 'v-pre') !== null) {
	      return;
	    }
	
	    // root is always compiled per-instance, because
	    // container attrs and props can be different every time.
	    var contextOptions = this._context && this._context.$options;
	    var rootLinker = compileRoot(el, options, contextOptions);
	
	    // resolve slot distribution
	    resolveSlots(this, options._content);
	
	    // compile and link the rest
	    var contentLinkFn;
	    var ctor = this.constructor;
	    // component compilation can be cached
	    // as long as it's not using inline-template
	    if (options._linkerCachable) {
	      contentLinkFn = ctor.linker;
	      if (!contentLinkFn) {
	        contentLinkFn = ctor.linker = compile(el, options);
	      }
	    }
	
	    // link phase
	    // make sure to link root with prop scope!
	    var rootUnlinkFn = rootLinker(this, el, this._scope);
	    var contentUnlinkFn = contentLinkFn ? contentLinkFn(this, el) : compile(el, options)(this, el);
	
	    // register composite unlink function
	    // to be called during instance destruction
	    this._unlinkFn = function () {
	      rootUnlinkFn();
	      // passing destroying: true to avoid searching and
	      // splicing the directives
	      contentUnlinkFn(true);
	    };
	
	    // finally replace original
	    if (options.replace) {
	      replace(original, el);
	    }
	
	    this._isCompiled = true;
	    this._callHook('compiled');
	  };
	
	  /**
	   * Initialize instance element. Called in the public
	   * $mount() method.
	   *
	   * @param {Element} el
	   */
	
	  Vue.prototype._initElement = function (el) {
	    if (isFragment(el)) {
	      this._isFragment = true;
	      this.$el = this._fragmentStart = el.firstChild;
	      this._fragmentEnd = el.lastChild;
	      // set persisted text anchors to empty
	      if (this._fragmentStart.nodeType === 3) {
	        this._fragmentStart.data = this._fragmentEnd.data = '';
	      }
	      this._fragment = el;
	    } else {
	      this.$el = el;
	    }
	    this.$el.__vue__ = this;
	    this._callHook('beforeCompile');
	  };
	
	  /**
	   * Create and bind a directive to an element.
	   *
	   * @param {Object} descriptor - parsed directive descriptor
	   * @param {Node} node   - target node
	   * @param {Vue} [host] - transclusion host component
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - owner fragment
	   */
	
	  Vue.prototype._bindDir = function (descriptor, node, host, scope, frag) {
	    this._directives.push(new Directive(descriptor, this, node, host, scope, frag));
	  };
	
	  /**
	   * Teardown an instance, unobserves the data, unbind all the
	   * directives, turn off all the event listeners, etc.
	   *
	   * @param {Boolean} remove - whether to remove the DOM node.
	   * @param {Boolean} deferCleanup - if true, defer cleanup to
	   *                                 be called later
	   */
	
	  Vue.prototype._destroy = function (remove, deferCleanup) {
	    if (this._isBeingDestroyed) {
	      if (!deferCleanup) {
	        this._cleanup();
	      }
	      return;
	    }
	
	    var destroyReady;
	    var pendingRemoval;
	
	    var self = this;
	    // Cleanup should be called either synchronously or asynchronoysly as
	    // callback of this.$remove(), or if remove and deferCleanup are false.
	    // In any case it should be called after all other removing, unbinding and
	    // turning of is done
	    var cleanupIfPossible = function cleanupIfPossible() {
	      if (destroyReady && !pendingRemoval && !deferCleanup) {
	        self._cleanup();
	      }
	    };
	
	    // remove DOM element
	    if (remove && this.$el) {
	      pendingRemoval = true;
	      this.$remove(function () {
	        pendingRemoval = false;
	        cleanupIfPossible();
	      });
	    }
	
	    this._callHook('beforeDestroy');
	    this._isBeingDestroyed = true;
	    var i;
	    // remove self from parent. only necessary
	    // if parent is not being destroyed as well.
	    var parent = this.$parent;
	    if (parent && !parent._isBeingDestroyed) {
	      parent.$children.$remove(this);
	      // unregister ref (remove: true)
	      this._updateRef(true);
	    }
	    // destroy all children.
	    i = this.$children.length;
	    while (i--) {
	      this.$children[i].$destroy();
	    }
	    // teardown props
	    if (this._propsUnlinkFn) {
	      this._propsUnlinkFn();
	    }
	    // teardown all directives. this also tearsdown all
	    // directive-owned watchers.
	    if (this._unlinkFn) {
	      this._unlinkFn();
	    }
	    i = this._watchers.length;
	    while (i--) {
	      this._watchers[i].teardown();
	    }
	    // remove reference to self on $el
	    if (this.$el) {
	      this.$el.__vue__ = null;
	    }
	
	    destroyReady = true;
	    cleanupIfPossible();
	  };
	
	  /**
	   * Clean up to ensure garbage collection.
	   * This is called after the leave transition if there
	   * is any.
	   */
	
	  Vue.prototype._cleanup = function () {
	    if (this._isDestroyed) {
	      return;
	    }
	    // remove self from owner fragment
	    // do it in cleanup so that we can call $destroy with
	    // defer right when a fragment is about to be removed.
	    if (this._frag) {
	      this._frag.children.$remove(this);
	    }
	    // remove reference from data ob
	    // frozen object may not have observer.
	    if (this._data && this._data.__ob__) {
	      this._data.__ob__.removeVm(this);
	    }
	    // Clean up references to private properties and other
	    // instances. preserve reference to _data so that proxy
	    // accessors still work. The only potential side effect
	    // here is that mutating the instance after it's destroyed
	    // may affect the state of other components that are still
	    // observing the same object, but that seems to be a
	    // reasonable responsibility for the user rather than
	    // always throwing an error on them.
	    this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null;
	    // call the last hook...
	    this._isDestroyed = true;
	    this._callHook('destroyed');
	    // turn off all instance listeners.
	    this.$off();
	  };
	}
	
	function miscMixin (Vue) {
	  /**
	   * Apply a list of filter (descriptors) to a value.
	   * Using plain for loops here because this will be called in
	   * the getter of any watcher with filters so it is very
	   * performance sensitive.
	   *
	   * @param {*} value
	   * @param {*} [oldValue]
	   * @param {Array} filters
	   * @param {Boolean} write
	   * @return {*}
	   */
	
	  Vue.prototype._applyFilters = function (value, oldValue, filters, write) {
	    var filter, fn, args, arg, offset, i, l, j, k;
	    for (i = 0, l = filters.length; i < l; i++) {
	      filter = filters[write ? l - i - 1 : i];
	      fn = resolveAsset(this.$options, 'filters', filter.name, true);
	      if (!fn) continue;
	      fn = write ? fn.write : fn.read || fn;
	      if (typeof fn !== 'function') continue;
	      args = write ? [value, oldValue] : [value];
	      offset = write ? 2 : 1;
	      if (filter.args) {
	        for (j = 0, k = filter.args.length; j < k; j++) {
	          arg = filter.args[j];
	          args[j + offset] = arg.dynamic ? this.$get(arg.value) : arg.value;
	        }
	      }
	      value = fn.apply(this, args);
	    }
	    return value;
	  };
	
	  /**
	   * Resolve a component, depending on whether the component
	   * is defined normally or using an async factory function.
	   * Resolves synchronously if already resolved, otherwise
	   * resolves asynchronously and caches the resolved
	   * constructor on the factory.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */
	
	  Vue.prototype._resolveComponent = function (value, cb) {
	    var factory;
	    if (typeof value === 'function') {
	      factory = value;
	    } else {
	      factory = resolveAsset(this.$options, 'components', value, true);
	    }
	    /* istanbul ignore if */
	    if (!factory) {
	      return;
	    }
	    // async component factory
	    if (!factory.options) {
	      if (factory.resolved) {
	        // cached
	        cb(factory.resolved);
	      } else if (factory.requested) {
	        // pool callbacks
	        factory.pendingCallbacks.push(cb);
	      } else {
	        factory.requested = true;
	        var cbs = factory.pendingCallbacks = [cb];
	        factory.call(this, function resolve(res) {
	          if (isPlainObject(res)) {
	            res = Vue.extend(res);
	          }
	          // cache resolved
	          factory.resolved = res;
	          // invoke callbacks
	          for (var i = 0, l = cbs.length; i < l; i++) {
	            cbs[i](res);
	          }
	        }, function reject(reason) {
	          process.env.NODE_ENV !== 'production' && warn('Failed to resolve async component' + (typeof value === 'string' ? ': ' + value : '') + '. ' + (reason ? '\nReason: ' + reason : ''));
	        });
	      }
	    } else {
	      // normal component
	      cb(factory);
	    }
	  };
	}
	
	var filterRE$1 = /[^|]\|[^|]/;
	
	function dataAPI (Vue) {
	  /**
	   * Get the value from an expression on this vm.
	   *
	   * @param {String} exp
	   * @param {Boolean} [asStatement]
	   * @return {*}
	   */
	
	  Vue.prototype.$get = function (exp, asStatement) {
	    var res = parseExpression$1(exp);
	    if (res) {
	      if (asStatement) {
	        var self = this;
	        return function statementHandler() {
	          self.$arguments = toArray(arguments);
	          var result = res.get.call(self, self);
	          self.$arguments = null;
	          return result;
	        };
	      } else {
	        try {
	          return res.get.call(this, this);
	        } catch (e) {}
	      }
	    }
	  };
	
	  /**
	   * Set the value from an expression on this vm.
	   * The expression must be a valid left-hand
	   * expression in an assignment.
	   *
	   * @param {String} exp
	   * @param {*} val
	   */
	
	  Vue.prototype.$set = function (exp, val) {
	    var res = parseExpression$1(exp, true);
	    if (res && res.set) {
	      res.set.call(this, this, val);
	    }
	  };
	
	  /**
	   * Delete a property on the VM
	   *
	   * @param {String} key
	   */
	
	  Vue.prototype.$delete = function (key) {
	    del(this._data, key);
	  };
	
	  /**
	   * Watch an expression, trigger callback when its
	   * value changes.
	   *
	   * @param {String|Function} expOrFn
	   * @param {Function} cb
	   * @param {Object} [options]
	   *                 - {Boolean} deep
	   *                 - {Boolean} immediate
	   * @return {Function} - unwatchFn
	   */
	
	  Vue.prototype.$watch = function (expOrFn, cb, options) {
	    var vm = this;
	    var parsed;
	    if (typeof expOrFn === 'string') {
	      parsed = parseDirective(expOrFn);
	      expOrFn = parsed.expression;
	    }
	    var watcher = new Watcher(vm, expOrFn, cb, {
	      deep: options && options.deep,
	      sync: options && options.sync,
	      filters: parsed && parsed.filters,
	      user: !options || options.user !== false
	    });
	    if (options && options.immediate) {
	      cb.call(vm, watcher.value);
	    }
	    return function unwatchFn() {
	      watcher.teardown();
	    };
	  };
	
	  /**
	   * Evaluate a text directive, including filters.
	   *
	   * @param {String} text
	   * @param {Boolean} [asStatement]
	   * @return {String}
	   */
	
	  Vue.prototype.$eval = function (text, asStatement) {
	    // check for filters.
	    if (filterRE$1.test(text)) {
	      var dir = parseDirective(text);
	      // the filter regex check might give false positive
	      // for pipes inside strings, so it's possible that
	      // we don't get any filters here
	      var val = this.$get(dir.expression, asStatement);
	      return dir.filters ? this._applyFilters(val, null, dir.filters) : val;
	    } else {
	      // no filter
	      return this.$get(text, asStatement);
	    }
	  };
	
	  /**
	   * Interpolate a piece of template text.
	   *
	   * @param {String} text
	   * @return {String}
	   */
	
	  Vue.prototype.$interpolate = function (text) {
	    var tokens = parseText(text);
	    var vm = this;
	    if (tokens) {
	      if (tokens.length === 1) {
	        return vm.$eval(tokens[0].value) + '';
	      } else {
	        return tokens.map(function (token) {
	          return token.tag ? vm.$eval(token.value) : token.value;
	        }).join('');
	      }
	    } else {
	      return text;
	    }
	  };
	
	  /**
	   * Log instance data as a plain JS object
	   * so that it is easier to inspect in console.
	   * This method assumes console is available.
	   *
	   * @param {String} [path]
	   */
	
	  Vue.prototype.$log = function (path) {
	    var data = path ? getPath(this._data, path) : this._data;
	    if (data) {
	      data = clean(data);
	    }
	    // include computed fields
	    if (!path) {
	      var key;
	      for (key in this.$options.computed) {
	        data[key] = clean(this[key]);
	      }
	      if (this._props) {
	        for (key in this._props) {
	          data[key] = clean(this[key]);
	        }
	      }
	    }
	    console.log(data);
	  };
	
	  /**
	   * "clean" a getter/setter converted object into a plain
	   * object copy.
	   *
	   * @param {Object} - obj
	   * @return {Object}
	   */
	
	  function clean(obj) {
	    return JSON.parse(JSON.stringify(obj));
	  }
	}
	
	function domAPI (Vue) {
	  /**
	   * Convenience on-instance nextTick. The callback is
	   * auto-bound to the instance, and this avoids component
	   * modules having to rely on the global Vue.
	   *
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$nextTick = function (fn) {
	    nextTick(fn, this);
	  };
	
	  /**
	   * Append instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$appendTo = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, append, appendWithTransition);
	  };
	
	  /**
	   * Prepend instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$prependTo = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.hasChildNodes()) {
	      this.$before(target.firstChild, cb, withTransition);
	    } else {
	      this.$appendTo(target, cb, withTransition);
	    }
	    return this;
	  };
	
	  /**
	   * Insert instance before target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$before = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, beforeWithCb, beforeWithTransition);
	  };
	
	  /**
	   * Insert instance after target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$after = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.nextSibling) {
	      this.$before(target.nextSibling, cb, withTransition);
	    } else {
	      this.$appendTo(target.parentNode, cb, withTransition);
	    }
	    return this;
	  };
	
	  /**
	   * Remove instance from DOM
	   *
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$remove = function (cb, withTransition) {
	    if (!this.$el.parentNode) {
	      return cb && cb();
	    }
	    var inDocument = this._isAttached && inDoc(this.$el);
	    // if we are not in document, no need to check
	    // for transitions
	    if (!inDocument) withTransition = false;
	    var self = this;
	    var realCb = function realCb() {
	      if (inDocument) self._callHook('detached');
	      if (cb) cb();
	    };
	    if (this._isFragment) {
	      removeNodeRange(this._fragmentStart, this._fragmentEnd, this, this._fragment, realCb);
	    } else {
	      var op = withTransition === false ? removeWithCb : removeWithTransition;
	      op(this.$el, this, realCb);
	    }
	    return this;
	  };
	
	  /**
	   * Shared DOM insertion function.
	   *
	   * @param {Vue} vm
	   * @param {Element} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition]
	   * @param {Function} op1 - op for non-transition insert
	   * @param {Function} op2 - op for transition insert
	   * @return vm
	   */
	
	  function insert(vm, target, cb, withTransition, op1, op2) {
	    target = query(target);
	    var targetIsDetached = !inDoc(target);
	    var op = withTransition === false || targetIsDetached ? op1 : op2;
	    var shouldCallHook = !targetIsDetached && !vm._isAttached && !inDoc(vm.$el);
	    if (vm._isFragment) {
	      mapNodeRange(vm._fragmentStart, vm._fragmentEnd, function (node) {
	        op(node, target, vm);
	      });
	      cb && cb();
	    } else {
	      op(vm.$el, target, vm, cb);
	    }
	    if (shouldCallHook) {
	      vm._callHook('attached');
	    }
	    return vm;
	  }
	
	  /**
	   * Check for selectors
	   *
	   * @param {String|Element} el
	   */
	
	  function query(el) {
	    return typeof el === 'string' ? document.querySelector(el) : el;
	  }
	
	  /**
	   * Append operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */
	
	  function append(el, target, vm, cb) {
	    target.appendChild(el);
	    if (cb) cb();
	  }
	
	  /**
	   * InsertBefore operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */
	
	  function beforeWithCb(el, target, vm, cb) {
	    before(el, target);
	    if (cb) cb();
	  }
	
	  /**
	   * Remove operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */
	
	  function removeWithCb(el, vm, cb) {
	    remove(el);
	    if (cb) cb();
	  }
	}
	
	function eventsAPI (Vue) {
	  /**
	   * Listen on the given `event` with `fn`.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$on = function (event, fn) {
	    (this._events[event] || (this._events[event] = [])).push(fn);
	    modifyListenerCount(this, event, 1);
	    return this;
	  };
	
	  /**
	   * Adds an `event` listener that will be invoked a single
	   * time then automatically removed.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$once = function (event, fn) {
	    var self = this;
	    function on() {
	      self.$off(event, on);
	      fn.apply(this, arguments);
	    }
	    on.fn = fn;
	    this.$on(event, on);
	    return this;
	  };
	
	  /**
	   * Remove the given callback for `event` or all
	   * registered callbacks.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$off = function (event, fn) {
	    var cbs;
	    // all
	    if (!arguments.length) {
	      if (this.$parent) {
	        for (event in this._events) {
	          cbs = this._events[event];
	          if (cbs) {
	            modifyListenerCount(this, event, -cbs.length);
	          }
	        }
	      }
	      this._events = {};
	      return this;
	    }
	    // specific event
	    cbs = this._events[event];
	    if (!cbs) {
	      return this;
	    }
	    if (arguments.length === 1) {
	      modifyListenerCount(this, event, -cbs.length);
	      this._events[event] = null;
	      return this;
	    }
	    // specific handler
	    var cb;
	    var i = cbs.length;
	    while (i--) {
	      cb = cbs[i];
	      if (cb === fn || cb.fn === fn) {
	        modifyListenerCount(this, event, -1);
	        cbs.splice(i, 1);
	        break;
	      }
	    }
	    return this;
	  };
	
	  /**
	   * Trigger an event on self.
	   *
	   * @param {String|Object} event
	   * @return {Boolean} shouldPropagate
	   */
	
	  Vue.prototype.$emit = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    var cbs = this._events[event];
	    var shouldPropagate = isSource || !cbs;
	    if (cbs) {
	      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
	      // this is a somewhat hacky solution to the question raised
	      // in #2102: for an inline component listener like <comp @test="doThis">,
	      // the propagation handling is somewhat broken. Therefore we
	      // need to treat these inline callbacks differently.
	      var hasParentCbs = isSource && cbs.some(function (cb) {
	        return cb._fromParent;
	      });
	      if (hasParentCbs) {
	        shouldPropagate = false;
	      }
	      var args = toArray(arguments, 1);
	      for (var i = 0, l = cbs.length; i < l; i++) {
	        var cb = cbs[i];
	        var res = cb.apply(this, args);
	        if (res === true && (!hasParentCbs || cb._fromParent)) {
	          shouldPropagate = true;
	        }
	      }
	    }
	    return shouldPropagate;
	  };
	
	  /**
	   * Recursively broadcast an event to all children instances.
	   *
	   * @param {String|Object} event
	   * @param {...*} additional arguments
	   */
	
	  Vue.prototype.$broadcast = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    // if no child has registered for this event,
	    // then there's no need to broadcast.
	    if (!this._eventsCount[event]) return;
	    var children = this.$children;
	    var args = toArray(arguments);
	    if (isSource) {
	      // use object event to indicate non-source emit
	      // on children
	      args[0] = { name: event, source: this };
	    }
	    for (var i = 0, l = children.length; i < l; i++) {
	      var child = children[i];
	      var shouldPropagate = child.$emit.apply(child, args);
	      if (shouldPropagate) {
	        child.$broadcast.apply(child, args);
	      }
	    }
	    return this;
	  };
	
	  /**
	   * Recursively propagate an event up the parent chain.
	   *
	   * @param {String} event
	   * @param {...*} additional arguments
	   */
	
	  Vue.prototype.$dispatch = function (event) {
	    var shouldPropagate = this.$emit.apply(this, arguments);
	    if (!shouldPropagate) return;
	    var parent = this.$parent;
	    var args = toArray(arguments);
	    // use object event to indicate non-source emit
	    // on parents
	    args[0] = { name: event, source: this };
	    while (parent) {
	      shouldPropagate = parent.$emit.apply(parent, args);
	      parent = shouldPropagate ? parent.$parent : null;
	    }
	    return this;
	  };
	
	  /**
	   * Modify the listener counts on all parents.
	   * This bookkeeping allows $broadcast to return early when
	   * no child has listened to a certain event.
	   *
	   * @param {Vue} vm
	   * @param {String} event
	   * @param {Number} count
	   */
	
	  var hookRE = /^hook:/;
	  function modifyListenerCount(vm, event, count) {
	    var parent = vm.$parent;
	    // hooks do not get broadcasted so no need
	    // to do bookkeeping for them
	    if (!parent || !count || hookRE.test(event)) return;
	    while (parent) {
	      parent._eventsCount[event] = (parent._eventsCount[event] || 0) + count;
	      parent = parent.$parent;
	    }
	  }
	}
	
	function lifecycleAPI (Vue) {
	  /**
	   * Set instance target element and kick off the compilation
	   * process. The passed in `el` can be a selector string, an
	   * existing Element, or a DocumentFragment (for block
	   * instances).
	   *
	   * @param {Element|DocumentFragment|string} el
	   * @public
	   */
	
	  Vue.prototype.$mount = function (el) {
	    if (this._isCompiled) {
	      process.env.NODE_ENV !== 'production' && warn('$mount() should be called only once.', this);
	      return;
	    }
	    el = query(el);
	    if (!el) {
	      el = document.createElement('div');
	    }
	    this._compile(el);
	    this._initDOMHooks();
	    if (inDoc(this.$el)) {
	      this._callHook('attached');
	      ready.call(this);
	    } else {
	      this.$once('hook:attached', ready);
	    }
	    return this;
	  };
	
	  /**
	   * Mark an instance as ready.
	   */
	
	  function ready() {
	    this._isAttached = true;
	    this._isReady = true;
	    this._callHook('ready');
	  }
	
	  /**
	   * Teardown the instance, simply delegate to the internal
	   * _destroy.
	   *
	   * @param {Boolean} remove
	   * @param {Boolean} deferCleanup
	   */
	
	  Vue.prototype.$destroy = function (remove, deferCleanup) {
	    this._destroy(remove, deferCleanup);
	  };
	
	  /**
	   * Partially compile a piece of DOM and return a
	   * decompile function.
	   *
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host]
	   * @param {Object} [scope]
	   * @param {Fragment} [frag]
	   * @return {Function}
	   */
	
	  Vue.prototype.$compile = function (el, host, scope, frag) {
	    return compile(el, this.$options, true)(this, el, host, scope, frag);
	  };
	}
	
	/**
	 * The exposed Vue constructor.
	 *
	 * API conventions:
	 * - public API methods/properties are prefixed with `$`
	 * - internal methods/properties are prefixed with `_`
	 * - non-prefixed properties are assumed to be proxied user
	 *   data.
	 *
	 * @constructor
	 * @param {Object} [options]
	 * @public
	 */
	
	function Vue(options) {
	  this._init(options);
	}
	
	// install internals
	initMixin(Vue);
	stateMixin(Vue);
	eventsMixin(Vue);
	lifecycleMixin(Vue);
	miscMixin(Vue);
	
	// install instance APIs
	dataAPI(Vue);
	domAPI(Vue);
	eventsAPI(Vue);
	lifecycleAPI(Vue);
	
	var slot = {
	
	  priority: SLOT,
	  params: ['name'],
	
	  bind: function bind() {
	    // this was resolved during component transclusion
	    var name = this.params.name || 'default';
	    var content = this.vm._slotContents && this.vm._slotContents[name];
	    if (!content || !content.hasChildNodes()) {
	      this.fallback();
	    } else {
	      this.compile(content.cloneNode(true), this.vm._context, this.vm);
	    }
	  },
	
	  compile: function compile(content, context, host) {
	    if (content && context) {
	      if (this.el.hasChildNodes() && content.childNodes.length === 1 && content.childNodes[0].nodeType === 1 && content.childNodes[0].hasAttribute('v-if')) {
	        // if the inserted slot has v-if
	        // inject fallback content as the v-else
	        var elseBlock = document.createElement('template');
	        elseBlock.setAttribute('v-else', '');
	        elseBlock.innerHTML = this.el.innerHTML;
	        // the else block should be compiled in child scope
	        elseBlock._context = this.vm;
	        content.appendChild(elseBlock);
	      }
	      var scope = host ? host._scope : this._scope;
	      this.unlink = context.$compile(content, host, scope, this._frag);
	    }
	    if (content) {
	      replace(this.el, content);
	    } else {
	      remove(this.el);
	    }
	  },
	
	  fallback: function fallback() {
	    this.compile(extractContent(this.el, true), this.vm);
	  },
	
	  unbind: function unbind() {
	    if (this.unlink) {
	      this.unlink();
	    }
	  }
	};
	
	var partial = {
	
	  priority: PARTIAL,
	
	  params: ['name'],
	
	  // watch changes to name for dynamic partials
	  paramWatchers: {
	    name: function name(value) {
	      vIf.remove.call(this);
	      if (value) {
	        this.insert(value);
	      }
	    }
	  },
	
	  bind: function bind() {
	    this.anchor = createAnchor('v-partial');
	    replace(this.el, this.anchor);
	    this.insert(this.params.name);
	  },
	
	  insert: function insert(id) {
	    var partial = resolveAsset(this.vm.$options, 'partials', id, true);
	    if (partial) {
	      this.factory = new FragmentFactory(this.vm, partial);
	      vIf.insert.call(this);
	    }
	  },
	
	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	  }
	};
	
	var elementDirectives = {
	  slot: slot,
	  partial: partial
	};
	
	var convertArray = vFor._postProcess;
	
	/**
	 * Limit filter for arrays
	 *
	 * @param {Number} n
	 * @param {Number} offset (Decimal expected)
	 */
	
	function limitBy(arr, n, offset) {
	  offset = offset ? parseInt(offset, 10) : 0;
	  n = toNumber(n);
	  return typeof n === 'number' ? arr.slice(offset, offset + n) : arr;
	}
	
	/**
	 * Filter filter for arrays
	 *
	 * @param {String} search
	 * @param {String} [delimiter]
	 * @param {String} ...dataKeys
	 */
	
	function filterBy(arr, search, delimiter) {
	  arr = convertArray(arr);
	  if (search == null) {
	    return arr;
	  }
	  if (typeof search === 'function') {
	    return arr.filter(search);
	  }
	  // cast to lowercase string
	  search = ('' + search).toLowerCase();
	  // allow optional `in` delimiter
	  // because why not
	  var n = delimiter === 'in' ? 3 : 2;
	  // extract and flatten keys
	  var keys = Array.prototype.concat.apply([], toArray(arguments, n));
	  var res = [];
	  var item, key, val, j;
	  for (var i = 0, l = arr.length; i < l; i++) {
	    item = arr[i];
	    val = item && item.$value || item;
	    j = keys.length;
	    if (j) {
	      while (j--) {
	        key = keys[j];
	        if (key === '$key' && contains(item.$key, search) || contains(getPath(val, key), search)) {
	          res.push(item);
	          break;
	        }
	      }
	    } else if (contains(item, search)) {
	      res.push(item);
	    }
	  }
	  return res;
	}
	
	/**
	 * Order filter for arrays
	 *
	 * @param {String|Array<String>|Function} ...sortKeys
	 * @param {Number} [order]
	 */
	
	function orderBy(arr) {
	  var comparator = null;
	  var sortKeys = undefined;
	  arr = convertArray(arr);
	
	  // determine order (last argument)
	  var args = toArray(arguments, 1);
	  var order = args[args.length - 1];
	  if (typeof order === 'number') {
	    order = order < 0 ? -1 : 1;
	    args = args.length > 1 ? args.slice(0, -1) : args;
	  } else {
	    order = 1;
	  }
	
	  // determine sortKeys & comparator
	  var firstArg = args[0];
	  if (!firstArg) {
	    return arr;
	  } else if (typeof firstArg === 'function') {
	    // custom comparator
	    comparator = function (a, b) {
	      return firstArg(a, b) * order;
	    };
	  } else {
	    // string keys. flatten first
	    sortKeys = Array.prototype.concat.apply([], args);
	    comparator = function (a, b, i) {
	      i = i || 0;
	      return i >= sortKeys.length - 1 ? baseCompare(a, b, i) : baseCompare(a, b, i) || comparator(a, b, i + 1);
	    };
	  }
	
	  function baseCompare(a, b, sortKeyIndex) {
	    var sortKey = sortKeys[sortKeyIndex];
	    if (sortKey) {
	      if (sortKey !== '$key') {
	        if (isObject(a) && '$value' in a) a = a.$value;
	        if (isObject(b) && '$value' in b) b = b.$value;
	      }
	      a = isObject(a) ? getPath(a, sortKey) : a;
	      b = isObject(b) ? getPath(b, sortKey) : b;
	    }
	    return a === b ? 0 : a > b ? order : -order;
	  }
	
	  // sort on a copy to avoid mutating original array
	  return arr.slice().sort(comparator);
	}
	
	/**
	 * String contain helper
	 *
	 * @param {*} val
	 * @param {String} search
	 */
	
	function contains(val, search) {
	  var i;
	  if (isPlainObject(val)) {
	    var keys = Object.keys(val);
	    i = keys.length;
	    while (i--) {
	      if (contains(val[keys[i]], search)) {
	        return true;
	      }
	    }
	  } else if (isArray(val)) {
	    i = val.length;
	    while (i--) {
	      if (contains(val[i], search)) {
	        return true;
	      }
	    }
	  } else if (val != null) {
	    return val.toString().toLowerCase().indexOf(search) > -1;
	  }
	}
	
	var digitsRE = /(\d{3})(?=\d)/g;
	
	// asset collections must be a plain object.
	var filters = {
	
	  orderBy: orderBy,
	  filterBy: filterBy,
	  limitBy: limitBy,
	
	  /**
	   * Stringify value.
	   *
	   * @param {Number} indent
	   */
	
	  json: {
	    read: function read(value, indent) {
	      return typeof value === 'string' ? value : JSON.stringify(value, null, arguments.length > 1 ? indent : 2);
	    },
	    write: function write(value) {
	      try {
	        return JSON.parse(value);
	      } catch (e) {
	        return value;
	      }
	    }
	  },
	
	  /**
	   * 'abc' => 'Abc'
	   */
	
	  capitalize: function capitalize(value) {
	    if (!value && value !== 0) return '';
	    value = value.toString();
	    return value.charAt(0).toUpperCase() + value.slice(1);
	  },
	
	  /**
	   * 'abc' => 'ABC'
	   */
	
	  uppercase: function uppercase(value) {
	    return value || value === 0 ? value.toString().toUpperCase() : '';
	  },
	
	  /**
	   * 'AbC' => 'abc'
	   */
	
	  lowercase: function lowercase(value) {
	    return value || value === 0 ? value.toString().toLowerCase() : '';
	  },
	
	  /**
	   * 12345 => $12,345.00
	   *
	   * @param {String} sign
	   * @param {Number} decimals Decimal places
	   */
	
	  currency: function currency(value, _currency, decimals) {
	    value = parseFloat(value);
	    if (!isFinite(value) || !value && value !== 0) return '';
	    _currency = _currency != null ? _currency : '$';
	    decimals = decimals != null ? decimals : 2;
	    var stringified = Math.abs(value).toFixed(decimals);
	    var _int = decimals ? stringified.slice(0, -1 - decimals) : stringified;
	    var i = _int.length % 3;
	    var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
	    var _float = decimals ? stringified.slice(-1 - decimals) : '';
	    var sign = value < 0 ? '-' : '';
	    return sign + _currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
	  },
	
	  /**
	   * 'item' => 'items'
	   *
	   * @params
	   *  an array of strings corresponding to
	   *  the single, double, triple ... forms of the word to
	   *  be pluralized. When the number to be pluralized
	   *  exceeds the length of the args, it will use the last
	   *  entry in the array.
	   *
	   *  e.g. ['single', 'double', 'triple', 'multiple']
	   */
	
	  pluralize: function pluralize(value) {
	    var args = toArray(arguments, 1);
	    var length = args.length;
	    if (length > 1) {
	      var index = value % 10 - 1;
	      return index in args ? args[index] : args[length - 1];
	    } else {
	      return args[0] + (value === 1 ? '' : 's');
	    }
	  },
	
	  /**
	   * Debounce a handler function.
	   *
	   * @param {Function} handler
	   * @param {Number} delay = 300
	   * @return {Function}
	   */
	
	  debounce: function debounce(handler, delay) {
	    if (!handler) return;
	    if (!delay) {
	      delay = 300;
	    }
	    return _debounce(handler, delay);
	  }
	};
	
	function installGlobalAPI (Vue) {
	  /**
	   * Vue and every constructor that extends Vue has an
	   * associated options object, which can be accessed during
	   * compilation steps as `this.constructor.options`.
	   *
	   * These can be seen as the default options of every
	   * Vue instance.
	   */
	
	  Vue.options = {
	    directives: directives,
	    elementDirectives: elementDirectives,
	    filters: filters,
	    transitions: {},
	    components: {},
	    partials: {},
	    replace: true
	  };
	
	  /**
	   * Expose useful internals
	   */
	
	  Vue.util = util;
	  Vue.config = config;
	  Vue.set = set;
	  Vue['delete'] = del;
	  Vue.nextTick = nextTick;
	
	  /**
	   * The following are exposed for advanced usage / plugins
	   */
	
	  Vue.compiler = compiler;
	  Vue.FragmentFactory = FragmentFactory;
	  Vue.internalDirectives = internalDirectives;
	  Vue.parsers = {
	    path: path,
	    text: text,
	    template: template,
	    directive: directive,
	    expression: expression
	  };
	
	  /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */
	
	  Vue.cid = 0;
	  var cid = 1;
	
	  /**
	   * Class inheritance
	   *
	   * @param {Object} extendOptions
	   */
	
	  Vue.extend = function (extendOptions) {
	    extendOptions = extendOptions || {};
	    var Super = this;
	    var isFirstExtend = Super.cid === 0;
	    if (isFirstExtend && extendOptions._Ctor) {
	      return extendOptions._Ctor;
	    }
	    var name = extendOptions.name || Super.options.name;
	    if (process.env.NODE_ENV !== 'production') {
	      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
	        warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characaters and the hyphen.');
	        name = null;
	      }
	    }
	    var Sub = createClass(name || 'VueComponent');
	    Sub.prototype = Object.create(Super.prototype);
	    Sub.prototype.constructor = Sub;
	    Sub.cid = cid++;
	    Sub.options = mergeOptions(Super.options, extendOptions);
	    Sub['super'] = Super;
	    // allow further extension
	    Sub.extend = Super.extend;
	    // create asset registers, so extended classes
	    // can have their private assets too.
	    config._assetTypes.forEach(function (type) {
	      Sub[type] = Super[type];
	    });
	    // enable recursive self-lookup
	    if (name) {
	      Sub.options.components[name] = Sub;
	    }
	    // cache constructor
	    if (isFirstExtend) {
	      extendOptions._Ctor = Sub;
	    }
	    return Sub;
	  };
	
	  /**
	   * A function that returns a sub-class constructor with the
	   * given name. This gives us much nicer output when
	   * logging instances in the console.
	   *
	   * @param {String} name
	   * @return {Function}
	   */
	
	  function createClass(name) {
	    /* eslint-disable no-new-func */
	    return new Function('return function ' + classify(name) + ' (options) { this._init(options) }')();
	    /* eslint-enable no-new-func */
	  }
	
	  /**
	   * Plugin system
	   *
	   * @param {Object} plugin
	   */
	
	  Vue.use = function (plugin) {
	    /* istanbul ignore if */
	    if (plugin.installed) {
	      return;
	    }
	    // additional parameters
	    var args = toArray(arguments, 1);
	    args.unshift(this);
	    if (typeof plugin.install === 'function') {
	      plugin.install.apply(plugin, args);
	    } else {
	      plugin.apply(null, args);
	    }
	    plugin.installed = true;
	    return this;
	  };
	
	  /**
	   * Apply a global mixin by merging it into the default
	   * options.
	   */
	
	  Vue.mixin = function (mixin) {
	    Vue.options = mergeOptions(Vue.options, mixin);
	  };
	
	  /**
	   * Create asset registration methods with the following
	   * signature:
	   *
	   * @param {String} id
	   * @param {*} definition
	   */
	
	  config._assetTypes.forEach(function (type) {
	    Vue[type] = function (id, definition) {
	      if (!definition) {
	        return this.options[type + 's'][id];
	      } else {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          if (type === 'component' && (commonTagRE.test(id) || reservedTagRE.test(id))) {
	            warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
	          }
	        }
	        if (type === 'component' && isPlainObject(definition)) {
	          if (!definition.name) {
	            definition.name = id;
	          }
	          definition = Vue.extend(definition);
	        }
	        this.options[type + 's'][id] = definition;
	        return definition;
	      }
	    };
	  });
	
	  // expose internal transition API
	  extend(Vue.transition, transition);
	}
	
	installGlobalAPI(Vue);
	
	Vue.version = '1.0.28';
	
	// devtools global hook
	/* istanbul ignore next */
	setTimeout(function () {
	  if (config.devtools) {
	    if (devtools) {
	      devtools.emit('init', Vue);
	    } else if (process.env.NODE_ENV !== 'production' && inBrowser && /Chrome\/\d+/.test(window.navigator.userAgent)) {
	      console.log('Download the Vue Devtools for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
	    }
	  }
	}, 0);
	
	module.exports = Vue;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(41)))

/***/ },
/* 41 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(43)
	__vue_script__ = __webpack_require__(45)
	__vue_template__ = __webpack_require__(46)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/cookfront/Sites/workspace/study/duiba-design/src/components/Switch.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(44);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.21.0/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/style-rewriter.js?id=_v-b23e6de0&file=Switch.vue!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/selector.js?type=style&index=0!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./Switch.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.21.0/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/style-rewriter.js?id=_v-b23e6de0&file=Switch.vue!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/selector.js?type=style&index=0!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./Switch.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".d-switch {\n  position: relative;\n  width: 44px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.d-switch-label {\n  display: block;\n  overflow: hidden;\n  cursor: pointer;\n  border-radius: 11px;\n}\n.d-switch-inner {\n  width: 200%;\n  margin-left: -100%;\n  -webkit-transition: margin 0.2s ease-in;\n  transition: margin 0.2s ease-in;\n}\n.d-switch-inner:before,\n.d-switch-inner:after {\n  float: left;\n  padding: 0;\n  width: 50%;\n  height: 22px;\n  line-height: 22px;\n  color: white;\n  box-sizing: border-box;\n}\n.d-switch-inner:before {\n  content: \"\\5F00\";\n  padding-left: 7px;\n  font-size: 12px;\n  color: #fff;\n  background-color: #444;\n}\n.d-switch-inner:after {\n  content: \"\\5173\";\n  padding-right: 7px;\n  color: #fff;\n  font-size: 12px;\n  background-color: #bbb;\n  text-align: right;\n}\n.d-switch-switch {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 22px;\n  width: 14px;\n  margin: 4px;\n  background: white;\n  border-radius: 11px;\n  -webkit-transition: right 0.2s ease-in, box-shadow 0.2s ease-in;\n  transition: right 0.2s ease-in, box-shadow 0.2s ease-in;\n}\n.on .d-switch-inner {\n  margin-left: 0;\n}\n.on .d-switch-switch {\n  right: 0;\n}\n.disable .d-switch-inner:before,\n.disable .d-switch-inner:after {\n  cursor: not-allowed;\n  background-color: #eee;\n}\n", "", {"version":3,"sources":["/./src/components/Switch.vue"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,YAAY;EACZ,0BAAkB;KAAlB,uBAAkB;MAAlB,sBAAkB;UAAlB,kBAAkB;CACnB;AACD;EACE,eAAe;EACf,iBAAiB;EACjB,gBAAgB;EAChB,oBAAoB;CACrB;AACD;EACE,YAAY;EACZ,mBAAmB;EACnB,wCAAgC;EAAhC,gCAAgC;CACjC;AACD;;EAEE,YAAY;EACZ,WAAW;EACX,WAAW;EACX,aAAa;EACb,kBAAkB;EAClB,aAAa;EACb,uBAAuB;CACxB;AACD;EACE,iBAAa;EACb,kBAAkB;EAClB,gBAAgB;EAChB,YAAY;EACZ,uBAAuB;CACxB;AACD;EACE,iBAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;EAChB,uBAAuB;EACvB,kBAAkB;CACnB;AACD;EACE,mBAAmB;EACnB,OAAO;EACP,UAAU;EACV,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,oBAAoB;EACpB,gEAAwD;EAAxD,wDAAwD;CACzD;AACD;EACE,eAAe;CAChB;AACD;EACE,SAAS;CACV;AACD;;EAEE,oBAAoB;EACpB,uBAAuB;CACxB","file":"Switch.vue","sourcesContent":[".d-switch {\n  position: relative;\n  width: 44px;\n  user-select: none;\n}\n.d-switch-label {\n  display: block;\n  overflow: hidden;\n  cursor: pointer;\n  border-radius: 11px;\n}\n.d-switch-inner {\n  width: 200%;\n  margin-left: -100%;\n  transition: margin 0.2s ease-in;\n}\n.d-switch-inner:before,\n.d-switch-inner:after {\n  float: left;\n  padding: 0;\n  width: 50%;\n  height: 22px;\n  line-height: 22px;\n  color: white;\n  box-sizing: border-box;\n}\n.d-switch-inner:before {\n  content: \"开\";\n  padding-left: 7px;\n  font-size: 12px;\n  color: #fff;\n  background-color: #444;\n}\n.d-switch-inner:after {\n  content: \"关\";\n  padding-right: 7px;\n  color: #fff;\n  font-size: 12px;\n  background-color: #bbb;\n  text-align: right;\n}\n.d-switch-switch {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 22px;\n  width: 14px;\n  margin: 4px;\n  background: white;\n  border-radius: 11px;\n  transition: right 0.2s ease-in, box-shadow 0.2s ease-in;\n}\n.on .d-switch-inner {\n  margin-left: 0;\n}\n.on .d-switch-switch {\n  right: 0;\n}\n.disable .d-switch-inner:before,\n.disable .d-switch-inner:after {\n  cursor: not-allowed;\n  background-color: #eee;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 45 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="d-switch" v-bind:class="{
	//     'on': status,
	//     'disable': disabled,
	//     'off': !status
	//   }" @click="toggleSwitch">
	//     <label class="d-switch-label">
	//       <div class="d-switch-inner"></div>
	//       <div class="d-switch-switch"></div>
	//     </label>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  name: 'd-switch',
	
	  props: {
	    status: {
	      type: Boolean,
	      default: true
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    onChange: {
	      default: null
	    },
	    params: {
	      default: null
	    }
	  },
	
	  methods: {
	    toggleSwitch: function toggleSwitch() {
	      if (this.onChange) {
	        this.onChange(!this.status, this.params);
	        return;
	      }
	      if (!this.disabled) {
	        this.status = !this.status;
	      }
	    }
	  }
	};
	// </script>
	
	// <style lang="less">
	// .d-switch {
	//   position: relative;
	//   width: 44px;
	//   user-select: none;
	// }
	
	// .d-switch-label {
	//   display: block;
	//   overflow: hidden;
	//   cursor: pointer;
	//   border-radius: 11px;
	// }
	
	// .d-switch-inner {
	//   width: 200%;
	//   margin-left: -100%;
	//   transition: margin 0.2s ease-in;
	// }
	
	// .d-switch-inner:before,
	// .d-switch-inner:after {
	//   float: left;
	//   padding: 0;
	//   width: 50%;
	//   height: 22px;
	//   line-height: 22px;
	//   color: white;
	//   box-sizing: border-box;
	// }
	
	// .d-switch-inner:before {
	//   content: "开";
	//   padding-left: 7px;
	//   font-size: 12px;
	//   color: #fff;
	//   background-color: #444;
	// }
	
	// .d-switch-inner:after {
	//   content: "关";
	//   padding-right: 7px;
	//   color: #fff;
	//   font-size: 12px;
	//   background-color: #bbb;
	//   text-align: right;
	// }
	
	// .d-switch-switch {
	//   position: absolute;
	//   top: 0;
	//   bottom: 0;
	//   right: 22px;
	//   width: 14px;
	//   margin: 4px;
	//   background: white;
	//   border-radius: 11px;
	//   transition: right 0.2s ease-in, box-shadow 0.2s ease-in;
	// }
	
	// .on .d-switch-inner {
	//   margin-left: 0;
	// }
	
	// .on .d-switch-switch {
	//   right: 0;
	// }
	
	// .disable  {
	//   .d-switch-inner:before,
	//   .d-switch-inner:after {
	//     cursor: not-allowed;
	//     background-color: #eee;
	//   }
	// }
	// </style>
	

	/* generated by vue-loader */

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"d-switch\" v-bind:class=\"{\n  'on': status,\n  'disable': disabled,\n  'off': !status\n}\" @click=\"toggleSwitch\">\n  <label class=\"d-switch-label\">\n    <div class=\"d-switch-inner\"></div>\n    <div class=\"d-switch-switch\"></div>\n  </label>\n</div>\n";

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(48)
	__vue_script__ = __webpack_require__(50)
	__vue_template__ = __webpack_require__(51)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/cookfront/Sites/workspace/study/duiba-design/src/components/Pagination.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(49);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.21.0/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/style-rewriter.js?id=_v-64b53714&file=Pagination.vue!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/selector.js?type=style&index=0!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./Pagination.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.21.0/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/style-rewriter.js?id=_v-64b53714&file=Pagination.vue!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/selector.js?type=style&index=0!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./Pagination.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".pagination {\n  overflow: hidden;\n  background-color: #e8e7e2;\n  line-height: 28px;\n  padding: 8px 20px;\n}\n.total-count {\n  float: left;\n  font-size: 14px;\n}\n.pagination-list {\n  float: right;\n  margin: 2px 0 0;\n}\n.pagination-list .number,\n.pagination-list .point {\n  float: left;\n  padding: 0 6px;\n  min-width: 12px;\n  line-height: 22px;\n  text-align: center;\n  border: 1px solid #dfdfdf;\n  background-color: #fff;\n  color: #444;\n  font-size: 12px;\n  margin-right: 8px;\n  cursor: pointer;\n}\n.pagination-list .number.active,\n.pagination-list .point.active {\n  background-color: #444;\n  border-color: #444;\n  color: #fff;\n}\n.pagination-list .point {\n  background-color: transparent;\n  border: 0;\n  font-size: 14px;\n}\n.pagination-list .point span {\n  position: relative;\n  top: -3px;\n}\n", "", {"version":3,"sources":["/./src/components/Pagination.vue"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,0BAA0B;EAC1B,kBAAkB;EAClB,kBAAkB;CACnB;AACD;EACE,YAAY;EACZ,gBAAgB;CACjB;AACD;EACE,aAAa;EACb,gBAAgB;CACjB;AACD;;EAEE,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB;EACnB,0BAA0B;EAC1B,uBAAuB;EACvB,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;EAClB,gBAAgB;CACjB;AACD;;EAEE,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;CACb;AACD;EACE,8BAA8B;EAC9B,UAAU;EACV,gBAAgB;CACjB;AACD;EACE,mBAAmB;EACnB,UAAU;CACX","file":"Pagination.vue","sourcesContent":[".pagination {\n  overflow: hidden;\n  background-color: #e8e7e2;\n  line-height: 28px;\n  padding: 8px 20px;\n}\n.total-count {\n  float: left;\n  font-size: 14px;\n}\n.pagination-list {\n  float: right;\n  margin: 2px 0 0;\n}\n.pagination-list .number,\n.pagination-list .point {\n  float: left;\n  padding: 0 6px;\n  min-width: 12px;\n  line-height: 22px;\n  text-align: center;\n  border: 1px solid #dfdfdf;\n  background-color: #fff;\n  color: #444;\n  font-size: 12px;\n  margin-right: 8px;\n  cursor: pointer;\n}\n.pagination-list .number.active,\n.pagination-list .point.active {\n  background-color: #444;\n  border-color: #444;\n  color: #fff;\n}\n.pagination-list .point {\n  background-color: transparent;\n  border: 0;\n  font-size: 14px;\n}\n.pagination-list .point span {\n  position: relative;\n  top: -3px;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 50 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="pagination">
	//     <div class="total-count">共{{total}}条</div>
	//     <ul class="pagination-list" @click="onPagerClick">
	//       <li class="iconhandle number prev" v-if="currentPage !== 1">
	//         &#xe612;
	//       </li>
	//       <li
	//       :class="{ active: currentPage === 1 }"
	//       v-if="pageCount > 0"
	//       class="number">1</li>
	//       <li
	//         class="point"
	//         v-if="showPrevDot">
	//         <span>...</span>
	//       </li>
	//       <li
	//         v-for="pager in pagers"
	//         :class="{ active: currentPage === pager }"
	//         class="number">{{ pager }}</li>
	//       <li
	//         class="point"
	//         v-if="showNextDot">
	//         <span>...</span>
	//       </li>
	//       <li
	//         :class="{ active: currentPage === pageCount }"
	//         class="number"
	//         v-if="pageCount > 1">{{ pageCount }}</li>
	//       <li class="iconhandle number next" v-if="currentPage !== pageCount">
	//         &#xe619;
	//       </li>
	//     </ul>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  name: 'd-pagination',
	
	  props: {
	    /**
	     * 数据总条数
	     */
	    total: {
	      required: true,
	      type: Number
	    },
	    /**
	     * 每页数据条数，默认十条
	     */
	    pageSize: {
	      type: Number,
	      default: 10
	    },
	    /**
	     * 当前页
	     */
	    currentPage: {
	      type: Number,
	      default: 1
	    }
	  },
	
	  computed: {
	    /**
	     * 数据的总页数
	     */
	    pageCount: function pageCount() {
	      return Math.ceil(this.total / this.pageSize);
	    },
	    /*
	     * 显示的页码
	     */
	    pagers: function pagers() {
	      var pagerCount = 7;
	
	      var currentPage = Number(this.currentPage);
	      var pageCount = Number(this.pageCount);
	
	      var showPrevDot = false;
	      var showNextDot = false;
	
	      // 如果页数大于7则会显示对应的 `...`
	      if (pageCount > pagerCount) {
	        if (currentPage > pagerCount - 2) {
	          showPrevDot = true;
	        }
	
	        if (currentPage < pageCount - 2) {
	          showNextDot = true;
	        }
	      }
	
	      var array = [];
	
	      if (showPrevDot && !showNextDot) {
	        var startPage = pageCount - (pagerCount - 2);
	        for (var i = startPage; i < pageCount; i++) {
	          array.push(i);
	        }
	      } else if (!showPrevDot && showNextDot) {
	        for (var _i = 2; _i < pagerCount; _i++) {
	          array.push(_i);
	        }
	      } else if (showPrevDot && showNextDot) {
	        var offset = Math.floor(pagerCount / 2) - 1;
	        for (var _i2 = currentPage - offset; _i2 <= currentPage + offset; _i2++) {
	          array.push(_i2);
	        }
	      } else {
	        for (var _i3 = 2; _i3 < pageCount; _i3++) {
	          array.push(_i3);
	        }
	      }
	
	      this.showPrevDot = showPrevDot;
	      this.showNextDot = showNextDot;
	
	      return array;
	    }
	  },
	
	  data: function data() {
	    return {
	      showPrevDot: false,
	      showNextDot: false
	    };
	  },
	
	
	  methods: {
	    onPagerClick: function onPagerClick(event) {
	      var target = event.target;
	      if (target.tagName.toUpperCase() === 'UL') {
	        return;
	      }
	
	      var newPage = Number(event.target.textContent);
	      var currentPage = this.currentPage;
	
	      if (target.className.indexOf('prev') !== -1) {
	        newPage = currentPage - 1;
	      } else if (target.className.indexOf('next') !== -1) {
	        newPage = currentPage + 1;
	      }
	
	      if (newPage !== currentPage) {
	        this.$emit('change', newPage);
	      }
	    }
	  }
	};
	// </script>
	
	// <style lang="less">
	// .pagination {
	//   overflow: hidden;
	//   background-color: #e8e7e2;
	//   line-height: 28px;
	//   padding: 8px 20px;
	// }
	
	// .total-count {
	//   float: left;
	//   font-size: 14px;
	// }
	
	// .pagination-list {
	//   float: right;
	//   margin: 2px 0 0;
	
	//   .number,
	//   .point {
	//     float: left;
	//     padding: 0 6px;
	//     min-width: 12px;
	//     line-height: 22px;
	//     text-align: center;
	//     border: 1px solid #dfdfdf;
	//     background-color: #fff;
	//     color: #444;
	//     font-size: 12px;
	//     margin-right: 8px;
	//     cursor: pointer;
	
	//     &.active {
	//       background-color: #444;
	//       border-color: #444;
	//       color: #fff;
	//     }
	//   }
	
	//   .point {
	//     background-color: transparent;
	//     border: 0;
	//     font-size: 14px;
	
	//     span {
	//       position: relative;
	//       top: -3px;
	//     }
	//   }
	// }
	// </style>
	

	/* generated by vue-loader */

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"pagination\">\n  <div class=\"total-count\">共{{total}}条</div>\n  <ul class=\"pagination-list\" @click=\"onPagerClick\">\n    <li class=\"iconhandle number prev\" v-if=\"currentPage !== 1\">\n      &#xe612;\n    </li>\n    <li\n    :class=\"{ active: currentPage === 1 }\"\n    v-if=\"pageCount > 0\"\n    class=\"number\">1</li>\n    <li\n      class=\"point\"\n      v-if=\"showPrevDot\">\n      <span>...</span>\n    </li>\n    <li\n      v-for=\"pager in pagers\"\n      :class=\"{ active: currentPage === pager }\"\n      class=\"number\">{{ pager }}</li>\n    <li\n      class=\"point\"\n      v-if=\"showNextDot\">\n      <span>...</span>\n    </li>\n    <li\n      :class=\"{ active: currentPage === pageCount }\"\n      class=\"number\"\n      v-if=\"pageCount > 1\">{{ pageCount }}</li>\n    <li class=\"iconhandle number next\" v-if=\"currentPage !== pageCount\">\n      &#xe619;\n    </li>\n  </ul>\n</div>\n";

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(53)
	__vue_script__ = __webpack_require__(55)
	__vue_template__ = __webpack_require__(57)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/cookfront/Sites/workspace/study/duiba-design/src/components/Tooltip.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(54);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.21.0/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/style-rewriter.js?id=_v-2a3a4f52&file=Tooltip.vue!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/selector.js?type=style&index=0!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./Tooltip.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.21.0/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/style-rewriter.js?id=_v-2a3a4f52&file=Tooltip.vue!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/selector.js?type=style&index=0!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./Tooltip.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".d-tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-family: \"Hiragino Sans GB\", \"Helvetica Neue\", Helvetica, \"Microsoft Yahei\", STHeiTi, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.42857143;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  font-size: 12px;\n  opacity: 0.9;\n}\n.d-tooltip.top {\n  margin-top: -3px;\n  padding: 5px 0;\n}\n.d-tooltip.right {\n  margin-left: 3px;\n  padding: 0 5px;\n}\n.d-tooltip.bottom {\n  margin-top: 3px;\n  padding: 5px 0;\n}\n.d-tooltip.left {\n  margin-left: -3px;\n  padding: 0 5px;\n}\n.d-tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #29B6B0;\n  border-radius: 20px;\n}\n.d-tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.d-tooltip.top .d-tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #29B6B0;\n}\n.d-tooltip.right .d-tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #29B6B0;\n}\n.d-tooltip.left .d-tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #29B6B0;\n}\n.d-tooltip.bottom .d-tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #29B6B0;\n}\n.delete.top .d-tooltip-inner {\n  background-color: #ff795c;\n}\n.delete.top .d-tooltip-arrow {\n  border-top-color: #ff795c;\n}\n.disable.top .d-tooltip-inner {\n  background-color: #eee;\n  border-radius: 6px;\n  color: #888;\n}\n.disable.top .d-tooltip-arrow {\n  border-top-color: #eee;\n}\n", "", {"version":3,"sources":["/./src/components/Tooltip.vue"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,cAAc;EACd,eAAe;EACf,4GAA4G;EAC5G,mBAAmB;EACnB,oBAAoB;EACpB,uBAAuB;EACvB,iBAAiB;EACjB,wBAAwB;EACxB,iBAAiB;EACjB,kBAAkB;EAClB,sBAAsB;EACtB,kBAAkB;EAClB,qBAAqB;EACrB,oBAAoB;EACpB,mBAAmB;EACnB,qBAAqB;EACrB,kBAAkB;EAClB,gBAAgB;EAChB,aAAa;CACd;AACD;EACE,iBAAiB;EACjB,eAAe;CAChB;AACD;EACE,iBAAiB;EACjB,eAAe;CAChB;AACD;EACE,gBAAgB;EAChB,eAAe;CAChB;AACD;EACE,kBAAkB;EAClB,eAAe;CAChB;AACD;EACE,iBAAiB;EACjB,iBAAiB;EACjB,YAAY;EACZ,mBAAmB;EACnB,0BAA0B;EAC1B,oBAAoB;CACrB;AACD;EACE,mBAAmB;EACnB,SAAS;EACT,UAAU;EACV,0BAA0B;EAC1B,oBAAoB;CACrB;AACD;EACE,UAAU;EACV,UAAU;EACV,kBAAkB;EAClB,wBAAwB;EACxB,0BAA0B;CAC3B;AACD;EACE,SAAS;EACT,QAAQ;EACR,iBAAiB;EACjB,4BAA4B;EAC5B,4BAA4B;CAC7B;AACD;EACE,SAAS;EACT,SAAS;EACT,iBAAiB;EACjB,4BAA4B;EAC5B,2BAA2B;CAC5B;AACD;EACE,OAAO;EACP,UAAU;EACV,kBAAkB;EAClB,wBAAwB;EACxB,6BAA6B;CAC9B;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;CACb;AACD;EACE,uBAAuB;CACxB","file":"Tooltip.vue","sourcesContent":[".d-tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-family: \"Hiragino Sans GB\", \"Helvetica Neue\", Helvetica, \"Microsoft Yahei\", STHeiTi, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.42857143;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  font-size: 12px;\n  opacity: 0.9;\n}\n.d-tooltip.top {\n  margin-top: -3px;\n  padding: 5px 0;\n}\n.d-tooltip.right {\n  margin-left: 3px;\n  padding: 0 5px;\n}\n.d-tooltip.bottom {\n  margin-top: 3px;\n  padding: 5px 0;\n}\n.d-tooltip.left {\n  margin-left: -3px;\n  padding: 0 5px;\n}\n.d-tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #29B6B0;\n  border-radius: 20px;\n}\n.d-tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.d-tooltip.top .d-tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #29B6B0;\n}\n.d-tooltip.right .d-tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #29B6B0;\n}\n.d-tooltip.left .d-tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #29B6B0;\n}\n.d-tooltip.bottom .d-tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #29B6B0;\n}\n.delete.top .d-tooltip-inner {\n  background-color: #ff795c;\n}\n.delete.top .d-tooltip-arrow {\n  border-top-color: #ff795c;\n}\n.disable.top .d-tooltip-inner {\n  background-color: #eee;\n  border-radius: 6px;\n  color: #888;\n}\n.disable.top .d-tooltip-arrow {\n  border-top-color: #eee;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _popoverMixins = __webpack_require__(56);
	
	var _popoverMixins2 = _interopRequireDefault(_popoverMixins);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'd-tooltip',
	
	  mixins: [_popoverMixins2.default],
	
	  props: {
	    trigger: {
	      type: String,
	      default: 'hover'
	    },
	    placement: {
	      type: String,
	      default: 'top'
	    },
	    type: {
	      type: String,
	      default: null
	    }
	  }
	};
	// </script>
	
	// <style lang="less">
	// // tooltip
	// // Tooltip max width
	// @tooltip-max-width:            200px;
	// // Tooltip text color
	// @tooltip-color:                #fff;
	// // Tooltip background color
	// @tooltip-bg:                   #29B6B0;
	// @tooltip-opacity:              .9;
	// // Tooltip arrow width
	// @tooltip-arrow-width:          5px;
	// // Tooltip arrow color
	// @tooltip-arrow-color:          @tooltip-bg;
	// @zindex-tooltip:               1070;
	// @tooltip-border-radius:        20px;
	// @font-size-small:              12px;
	// @font-family: "Hiragino Sans GB","Helvetica Neue",Helvetica,"Microsoft Yahei",STHeiTi,Arial,sans-serif;
	// @line-height-base:             1.428571429; // 20/14
	
	// // Base class
	// .d-tooltip {
	//   position: absolute;
	//   z-index: @zindex-tooltip;
	//   display: block;
	//   // Our parent element can be arbitrary since tooltips are by default inserted as a sibling of their target element.
	//   // So reset our font and text properties to avoid inheriting weird values.
	//   font-family: @font-family;
	//   // We deliberately do NOT reset font-size.
	//   font-style: normal;
	//   font-weight: normal;
	//   letter-spacing: normal;
	//   line-break: auto;
	//   line-height: @line-height-base;
	//   text-align: left; // Fallback for where `start` is not supported
	//   text-align: start;
	//   text-decoration: none;
	//   text-shadow: none;
	//   text-transform: none;
	//   white-space: normal;
	//   word-break: normal;
	//   word-spacing: normal;
	//   word-wrap: normal;
	//   font-size: @font-size-small;
	//   opacity: @tooltip-opacity;
	
	//   &.top    { margin-top:  -3px; padding: @tooltip-arrow-width 0; }
	//   &.right  { margin-left:  3px; padding: 0 @tooltip-arrow-width; }
	//   &.bottom { margin-top:   3px; padding: @tooltip-arrow-width 0; }
	//   &.left   { margin-left: -3px; padding: 0 @tooltip-arrow-width; }
	// }
	
	// // Wrapper for the tooltip content
	// .d-tooltip-inner {
	//   max-width: @tooltip-max-width;
	//   padding: 3px 8px;
	//   color: @tooltip-color;
	//   text-align: center;
	//   background-color: @tooltip-bg;
	//   border-radius: @tooltip-border-radius;
	// }
	
	// // Arrows
	// .d-tooltip-arrow {
	//   position: absolute;
	//   width: 0;
	//   height: 0;
	//   border-color: transparent;
	//   border-style: solid;
	// }
	
	// .d-tooltip {
	//   &.top .d-tooltip-arrow {
	//     bottom: 0;
	//     left: 50%;
	//     margin-left: -@tooltip-arrow-width;
	//     border-width: @tooltip-arrow-width @tooltip-arrow-width 0;
	//     border-top-color: @tooltip-arrow-color;
	//   }
	//   &.right .d-tooltip-arrow {
	//     top: 50%;
	//     left: 0;
	//     margin-top: -@tooltip-arrow-width;
	//     border-width: @tooltip-arrow-width @tooltip-arrow-width @tooltip-arrow-width 0;
	//     border-right-color: @tooltip-arrow-color;
	//   }
	//   &.left .d-tooltip-arrow {
	//     top: 50%;
	//     right: 0;
	//     margin-top: -@tooltip-arrow-width;
	//     border-width: @tooltip-arrow-width 0 @tooltip-arrow-width @tooltip-arrow-width;
	//     border-left-color: @tooltip-arrow-color;
	//   }
	//   &.bottom .d-tooltip-arrow {
	//     top: 0;
	//     left: 50%;
	//     margin-left: -@tooltip-arrow-width;
	//     border-width: 0 @tooltip-arrow-width @tooltip-arrow-width;
	//     border-bottom-color: @tooltip-arrow-color;
	//   }
	// }
	
	// .delete.top {
	//   .d-tooltip-inner {
	//     background-color: #ff795c;
	//   }
	
	//   .d-tooltip-arrow {
	//     border-top-color: #ff795c;
	//   }
	// }
	
	// .disable.top {
	//   .d-tooltip-inner {
	//     background-color: #eee;
	//     border-radius: 6px;
	//     color: #888;
	//   }
	
	//   .d-tooltip-arrow {
	//     border-top-color: #eee;
	//   }
	// }
	// </style>
	
	/* generated by vue-loader */
	// <template>
	//   <span v-el:trigger>
	//     <slot>
	//     </slot>
	//   </span>
	//   <div class="d-tooltip"
	//     v-bind:class="{
	//       'top':     placement === 'top',
	//       'left':    placement === 'left',
	//       'right':   placement === 'right',
	//       'bottom':  placement === 'bottom',
	//       'disable': type === 'disable',
	//       'delete':  type === 'delete'
	//     }"
	//     v-el:popover
	//     v-show="show"
	//     role="tooltip">
	//     <div class="d-tooltip-arrow"></div>
	//     <div class="d-tooltip-inner">
	//       <slot name="content">
	//         {{{content}}}
	//       </slot>
	//    </div>
	//   </div>
	// </template>
	
	// <script>

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(37);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    trigger: {
	      type: String,
	      default: 'click'
	    },
	    effect: {
	      type: String,
	      default: 'fadein'
	    },
	    title: {
	      type: String
	    },
	    content: {
	      type: String
	    },
	    header: {
	      type: Boolean,
	      default: true
	    },
	    placement: {
	      type: String
	    }
	  },
	  data: function data() {
	    return {
	      position: {
	        top: 0,
	        left: 0
	      },
	      show: true
	    };
	  },
	
	  watch: {
	    show: function show(val) {
	      if (val) {
	        var popover = this.$els.popover;
	        var triger = this.$els.trigger.children[0];
	        switch (this.placement) {
	          case 'top':
	            this.position.left = triger.offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2;
	            this.position.top = triger.offsetTop - popover.offsetHeight;
	            break;
	          case 'left':
	            this.position.left = triger.offsetLeft - popover.offsetWidth;
	            this.position.top = triger.offsetTop + triger.offsetHeight / 2 - popover.offsetHeight / 2;
	            break;
	          case 'right':
	            this.position.left = triger.offsetLeft + triger.offsetWidth;
	            this.position.top = triger.offsetTop + triger.offsetHeight / 2 - popover.offsetHeight / 2;
	            break;
	          case 'bottom':
	            this.position.left = triger.offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2;
	            this.position.top = triger.offsetTop + triger.offsetHeight;
	            break;
	          default:
	            console.log('Wrong placement prop');
	        }
	        popover.style.top = this.position.top + 'px';
	        popover.style.left = this.position.left + 'px';
	      }
	    }
	  },
	  methods: {
	    toggle: function toggle() {
	      this.show = !this.show;
	    }
	  },
	  ready: function ready() {
	    var _this = this;
	
	    if (!this.$els.popover) return console.error("Couldn't find popover v-el in your component that uses popoverMixin.");
	    var popover = this.$els.popover;
	    var triger = this.$els.trigger.children[0];
	    if (this.trigger === 'hover') {
	      this._mouseenterEvent = _EventListener2.default.listen(triger, 'mouseenter', function () {
	        _this.show = true;
	      });
	      this._mouseleaveEvent = _EventListener2.default.listen(triger, 'mouseleave', function () {
	        _this.show = false;
	      });
	    } else if (this.trigger === 'focus') {
	      this._focusEvent = _EventListener2.default.listen(triger, 'focus', function () {
	        _this.show = true;
	      });
	      this._blurEvent = _EventListener2.default.listen(triger, 'blur', function () {
	        _this.show = false;
	      });
	    } else {
	      this._clickEvent = _EventListener2.default.listen(triger, 'click', this.toggle);
	    }
	
	    // switch (this.placement) {
	    //   case 'top' :
	    //     this.position.left = triger.offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2;
	    //     this.position.top = triger.offsetTop - popover.offsetHeight;
	    //     break;
	    //   case 'left':
	    //     this.position.left = triger.offsetLeft - popover.offsetWidth;
	    //     this.position.top = triger.offsetTop + triger.offsetHeight / 2 - popover.offsetHeight / 2;
	    //     break;
	    //   case 'right':
	    //     this.position.left = triger.offsetLeft + triger.offsetWidth;
	    //     this.position.top = triger.offsetTop + triger.offsetHeight / 2 - popover.offsetHeight / 2;
	    //     break;
	    //   case 'bottom':
	    //     this.position.left = triger.offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2;
	    //     this.position.top = triger.offsetTop + triger.offsetHeight;
	    //     break;
	    //   default:
	    //     console.log('Wrong placement prop');
	    // }
	    // popover.style.top = this.position.top + 'px';
	    // popover.style.left = this.position.left + 'px';
	    popover.style.display = 'none';
	    this.show = !this.show;
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._blurEvent) {
	      this._blurEvent.remove();
	      this._focusEvent.remove();
	    }
	    if (this._mouseenterEvent) {
	      this._mouseenterEvent.remove();
	      this._mouseleaveEvent.remove();
	    }
	    if (this._clickEvent) this._clickEvent.remove();
	  }
	};

/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports = "\n<span v-el:trigger>\n  <slot>\n  </slot>\n</span>\n<div class=\"d-tooltip\"\n  v-bind:class=\"{\n    'top':     placement === 'top',\n    'left':    placement === 'left',\n    'right':   placement === 'right',\n    'bottom':  placement === 'bottom',\n    'disable': type === 'disable',\n    'delete':  type === 'delete'\n  }\"\n  v-el:popover\n  v-show=\"show\"\n  role=\"tooltip\">\n  <div class=\"d-tooltip-arrow\"></div>\n  <div class=\"d-tooltip-inner\">\n    <slot name=\"content\">\n      {{{content}}}\n    </slot>\n </div>\n</div>\n";

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(59)
	__vue_script__ = __webpack_require__(61)
	__vue_template__ = __webpack_require__(62)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/cookfront/Sites/workspace/study/duiba-design/src/components/Tabs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(60);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.21.0/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/style-rewriter.js?id=_v-74cd915a&file=Tabs.vue!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/selector.js?type=style&index=0!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./Tabs.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.21.0/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/style-rewriter.js?id=_v-74cd915a&file=Tabs.vue!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/selector.js?type=style&index=0!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./Tabs.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".d-tabs {\n  border-bottom: 1px solid #e5e5e5;\n  overflow: hidden;\n}\n.d-tabs li {\n  font-size: 14px;\n  position: relative;\n  bottom: -1px;\n  margin: 0 10px;\n  float: left;\n  line-height: 34px;\n}\n.d-tabs li:first-child {\n  margin-left: 0;\n}\n.d-tabs li::before {\n  content: '';\n  position: absolute;\n  top: 9px;\n  right: -10px;\n  height: 16px;\n  border-right: 1px dashed #d8d8d8;\n}\n.d-tabs li:last-child::before {\n  display: none;\n}\n.d-tabs li a {\n  display: block;\n  border-bottom: 2px solid transparent;\n  padding: 0 25px 0 15px;\n  padding-right: 25px;\n  position: relative;\n  color: #888;\n}\n.d-tabs li a.active {\n  font-weight: normal;\n  border-bottom: 2px solid #29b6b0;\n  color: #444;\n}\n.d-tabs li .iconhandle {\n  font-size: 12px;\n  position: absolute;\n  top: -5px;\n  right: 8px;\n  color: #a5a5a5;\n}\n.d-tabs li .iconhandle.active {\n  color: #29b6b0;\n}\n.d-tab-content {\n  padding: 10px 0;\n}\n", "", {"version":3,"sources":["/./src/components/Tabs.vue"],"names":[],"mappings":"AAAA;EACE,iCAAiC;EACjC,iBAAiB;CAClB;AACD;EACE,gBAAgB;EAChB,mBAAmB;EACnB,aAAa;EACb,eAAe;EACf,YAAY;EACZ,kBAAkB;CACnB;AACD;EACE,eAAe;CAChB;AACD;EACE,YAAY;EACZ,mBAAmB;EACnB,SAAS;EACT,aAAa;EACb,aAAa;EACb,iCAAiC;CAClC;AACD;EACE,cAAc;CACf;AACD;EACE,eAAe;EACf,qCAAqC;EACrC,uBAAuB;EACvB,oBAAoB;EACpB,mBAAmB;EACnB,YAAY;CACb;AACD;EACE,oBAAoB;EACpB,iCAAiC;EACjC,YAAY;CACb;AACD;EACE,gBAAgB;EAChB,mBAAmB;EACnB,UAAU;EACV,WAAW;EACX,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,gBAAgB;CACjB","file":"Tabs.vue","sourcesContent":[".d-tabs {\n  border-bottom: 1px solid #e5e5e5;\n  overflow: hidden;\n}\n.d-tabs li {\n  font-size: 14px;\n  position: relative;\n  bottom: -1px;\n  margin: 0 10px;\n  float: left;\n  line-height: 34px;\n}\n.d-tabs li:first-child {\n  margin-left: 0;\n}\n.d-tabs li::before {\n  content: '';\n  position: absolute;\n  top: 9px;\n  right: -10px;\n  height: 16px;\n  border-right: 1px dashed #d8d8d8;\n}\n.d-tabs li:last-child::before {\n  display: none;\n}\n.d-tabs li a {\n  display: block;\n  border-bottom: 2px solid transparent;\n  padding: 0 25px 0 15px;\n  padding-right: 25px;\n  position: relative;\n  color: #888;\n}\n.d-tabs li a.active {\n  font-weight: normal;\n  border-bottom: 2px solid #29b6b0;\n  color: #444;\n}\n.d-tabs li .iconhandle {\n  font-size: 12px;\n  position: absolute;\n  top: -5px;\n  right: 8px;\n  color: #a5a5a5;\n}\n.d-tabs li .iconhandle.active {\n  color: #29b6b0;\n}\n.d-tab-content {\n  padding: 10px 0;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 61 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <!-- Nav tabs -->
	//   <ul class="d-tabs cf" role="tablist">
	//     <template v-for="t in tabs">
	//       <li @click.prevent="select(t)">
	//         <a :class="{active: t.active}" href="javascript:void(0)">
	//           {{{t.header}}}
	//         </a>
	//       </li>
	//     </template>
	//   </ul>
	//   <div class="d-tab-content" v-el:tab-content>
	//     <slot></slot>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  name: 'd-tabs',
	
	  props: {
	    active: {
	      type: Number,
	      default: 0
	    }
	  },
	  data: function data() {
	    return {
	      show: null,
	      tabs: []
	    };
	  },
	  created: function created() {
	    this._tabset = true;
	  },
	
	  watch: {
	    active: function active(val) {
	      this.show = this.tabs[val];
	    }
	  },
	  ready: function ready() {
	    this.show = this.tabs[this.active];
	  },
	
	  methods: {
	    select: function select(tab) {
	      if (!tab.disabled) {
	        this.active = tab.index;
	      }
	    }
	  }
	};
	// </script>
	
	// <style lang="less">
	// .d-tabs {
	//   border-bottom: 1px solid #e5e5e5;
	//   overflow: hidden;
	
	//   li {
	//     font-size: 14px;
	//     position: relative;
	//     bottom: -1px;
	//     margin: 0 10px;
	//     float: left;
	//     line-height: 34px;
	
	//     &:first-child {
	//       margin-left: 0;        
	//     }
	
	//     &::before {
	//       content: '';
	//       position: absolute;
	//       top: 9px;
	//       right: -10px;
	//       height: 16px;
	//       border-right: 1px dashed #d8d8d8;
	//     }
	
	//     &:last-child::before {
	//       display: none;
	//     }
	
	//     a {
	//       display: block;
	//       border-bottom: 2px solid transparent;
	//       padding: 0 25px 0 15px;
	//       padding-right: 25px;
	//       position: relative;
	//       color: #888;
	//     }
	
	//     a.active {
	//       font-weight: normal;
	//       border-bottom: 2px solid #29b6b0;
	//       color: #444;
	//     }
	
	//     .iconhandle {
	//       font-size: 12px;
	//       position: absolute;
	//       top: -5px;
	//       right: 8px;
	//       color: #a5a5a5;
	
	//       &.active {
	//         color: #29b6b0;
	//       }
	//     }
	//   }
	// }
	
	// .d-tab-content {
	//   padding: 10px 0;
	// }
	// </style>
	

	/* generated by vue-loader */

/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = "\n<!-- Nav tabs -->\n<ul class=\"d-tabs cf\" role=\"tablist\">\n  <template v-for=\"t in tabs\">\n    <li @click.prevent=\"select(t)\">\n      <a :class=\"{active: t.active}\" href=\"javascript:void(0)\">\n        {{{t.header}}}\n      </a>\n    </li>\n  </template>\n</ul>\n<div class=\"d-tab-content\" v-el:tab-content>\n  <slot></slot>\n</div>\n";

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(64)
	__vue_template__ = __webpack_require__(65)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/cookfront/Sites/workspace/study/duiba-design/src/components/Tab.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 64 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div role="tabpanel" class="d-tab-pane" v-show="active">
	//     <slot></slot>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  name: 'd-tab',
	
	  props: {
	    header: {
	      type: String
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    }
	  },
	  computed: {
	    active: function active() {
	      return this._tabset && this._tabset.show === this;
	    },
	    index: function index() {
	      return this._tabset.tabs.indexOf(this);
	    }
	  },
	  created: function created() {
	    var tabset = this;
	
	    while (tabset && tabset._tabset !== true && tabset.$parent) {
	      tabset = tabset.$parent;
	    }
	
	    if (!tabset._tabset) {
	      this._tabset = {};
	      console.warn('Warning: "tab" depend on "tabset" to work properly.');
	    } else {
	      tabset.tabs.push(this);
	      this._tabset = tabset;
	    }
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._tabset.active === this.index) {
	      this._tabset.active = 0;
	    }
	    this._tabset.tabs.splice(this.index, 1);
	  }
	};
	// </script>
	
	/* generated by vue-loader */

/***/ },
/* 65 */
/***/ function(module, exports) {

	module.exports = "\n<div role=\"tabpanel\" class=\"d-tab-pane\" v-show=\"active\">\n  <slot></slot>\n</div>\n";

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(67)
	__vue_template__ = __webpack_require__(68)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/cookfront/Sites/workspace/study/duiba-design/src/components/Breadcrumb.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 67 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="d-breadcrumb">
	//     <slot></slot>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  name: 'd-breadcrumb',
	
	  props: {
	    separator: {
	      type: String,
	      default: '&#xe619;'
	    }
	  }
	};
	// </script>
	
	/* generated by vue-loader */

/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"d-breadcrumb\">\n  <slot></slot>\n</div>\n";

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(70)
	__vue_script__ = __webpack_require__(72)
	__vue_template__ = __webpack_require__(73)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/cookfront/Sites/workspace/study/duiba-design/src/components/BreadcrumbItem.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(71);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.21.0/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/style-rewriter.js?id=_v-e3923adc&file=BreadcrumbItem.vue!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/selector.js?type=style&index=0!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./BreadcrumbItem.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.21.0/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/style-rewriter.js?id=_v-e3923adc&file=BreadcrumbItem.vue!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/selector.js?type=style&index=0!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./BreadcrumbItem.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".d-breadcrumb {\n  line-height: 1;\n  font-size: 18px;\n}\n.d-breadcrumb__item {\n  color: #444;\n}\n.d-breadcrumb__item:last-child {\n  font-weight: bold;\n}\n.d-breadcrumb__item:last-child .d-breadcrumb__separator {\n  display: none;\n}\n.d-breadcrumb__item:last-child .d-breadcrumb__item__inner {\n  cursor: default;\n}\n.d-breadcrumb__separator {\n  font-family: handle;\n  font-size: 12px;\n  margin: 0 5px;\n  vertical-align: middle;\n}\n.d-breadcrumb__item__inner {\n  cursor: pointer;\n}\n", "", {"version":3,"sources":["/./src/components/BreadcrumbItem.vue"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,gBAAgB;CACjB;AACD;EACE,YAAY;CACb;AACD;EACE,kBAAkB;CACnB;AACD;EACE,cAAc;CACf;AACD;EACE,gBAAgB;CACjB;AACD;EACE,oBAAoB;EACpB,gBAAgB;EAChB,cAAc;EACd,uBAAuB;CACxB;AACD;EACE,gBAAgB;CACjB","file":"BreadcrumbItem.vue","sourcesContent":[".d-breadcrumb {\n  line-height: 1;\n  font-size: 18px;\n}\n.d-breadcrumb__item {\n  color: #444;\n}\n.d-breadcrumb__item:last-child {\n  font-weight: bold;\n}\n.d-breadcrumb__item:last-child .d-breadcrumb__separator {\n  display: none;\n}\n.d-breadcrumb__item:last-child .d-breadcrumb__item__inner {\n  cursor: default;\n}\n.d-breadcrumb__separator {\n  font-family: handle;\n  font-size: 12px;\n  margin: 0 5px;\n  vertical-align: middle;\n}\n.d-breadcrumb__item__inner {\n  cursor: pointer;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 72 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <span class="d-breadcrumb__item">
	//     <span class="d-breadcrumb__item__inner" v-el:link>
	//       <slot></slot>
	//     </span>
	//     <span class="d-breadcrumb__separator">{{{separator}}}</span>
	//   </span>
	// </template>
	// <script>
	exports.default = {
	  name: 'd-breadcrumb-item',
	
	  props: {
	    to: {}
	  },
	
	  data: function data() {
	    return {
	      separator: ''
	    };
	  },
	  ready: function ready() {
	    var _this = this;
	
	    this.separator = this.$parent.separator;
	    if (this.to) {
	      var link = this.$els.link;
	      link.addEventListener('click', function (_) {
	        _this.$router.go(_this.to);
	      });
	    }
	  }
	};
	// </script>
	
	// <style lang="less">
	// .d-breadcrumb {
	//   line-height: 1;
	//   font-size: 18px;
	// }
	// .d-breadcrumb__item {
	//   color: #444;
	
	//   &:last-child {
	//     font-weight: bold;
	
	//     .d-breadcrumb__separator {
	//       display: none;
	//     }
	
	//     .d-breadcrumb__item__inner {
	//       cursor: default;
	//     }
	//   }
	// }
	
	// .d-breadcrumb__separator {
	//   font-family: handle;
	//   font-size: 12px;
	//   margin: 0 5px;
	//   vertical-align: middle;
	// }
	
	// .d-breadcrumb__item__inner {
	//   cursor: pointer;
	// }
	// </style>
	
	/* generated by vue-loader */

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = "\n<span class=\"d-breadcrumb__item\">\n  <span class=\"d-breadcrumb__item__inner\" v-el:link>\n    <slot></slot>\n  </span>\n  <span class=\"d-breadcrumb__separator\">{{{separator}}}</span>\n</span>\n";

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(75)
	__vue_script__ = __webpack_require__(77)
	__vue_template__ = __webpack_require__(78)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/cookfront/Sites/workspace/study/duiba-design/src/components/Checkbox.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(76);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.21.0/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/style-rewriter.js?id=_v-042c0d1f&file=Checkbox.vue!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/selector.js?type=style&index=0!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./Checkbox.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.21.0/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/style-rewriter.js?id=_v-042c0d1f&file=Checkbox.vue!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/selector.js?type=style&index=0!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./Checkbox.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".d-checkbox-control {\n  display: inline-block;\n  line-height: 34px;\n  height: 34px;\n  padding-left: 24px;\n  position: relative;\n  font-size: 14px;\n}\n.d-checkbox-control input {\n  opacity: 0;\n  position: absolute;\n  left: 0;\n  top: 10px;\n  z-index: -1;\n}\n.d-checkbox-control .icon {\n  position: absolute;\n  left: 0;\n  top: 10px;\n  width: 12px;\n  height: 12px;\n  line-height: 12px;\n  border: 1px solid #e4e3df;\n  font-size: 12px;\n  cursor: pointer;\n  border-radius: 1px;\n  background-color: #fff;\n}\n.d-checkbox-control .icon:hover {\n  border-color: #828282;\n}\n.d-checkbox-control .iconhandle {\n  background-color: #29b6b0;\n  border-color: #29b6b0;\n  color: #fff;\n}\n.d-checkbox-control .iconhandle span {\n  display: block;\n  -webkit-transform: scale(0.6, 0.6);\n          transform: scale(0.6, 0.6);\n  margin-top: 1px;\n}\n.d-checkbox-control .iconhandle:hover {\n  border-color: #29b6b0;\n}\n.d-checkbox-control.is-disabled .iconhandle,\n.d-checkbox-control.is-disabled .icon {\n  cursor: not-allowed;\n  background-color: #d3dce6;\n  border-color: #d3dce6;\n}\n.d-checkbox-control.is-disabled .icon {\n  border-color: #d3dce6;\n}\n", "", {"version":3,"sources":["/./src/components/Checkbox.vue"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,gBAAgB;CACjB;AACD;EACE,WAAW;EACX,mBAAmB;EACnB,QAAQ;EACR,UAAU;EACV,YAAY;CACb;AACD;EACE,mBAAmB;EACnB,QAAQ;EACR,UAAU;EACV,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,0BAA0B;EAC1B,gBAAgB;EAChB,gBAAgB;EAChB,mBAAmB;EACnB,uBAAuB;CACxB;AACD;EACE,sBAAsB;CACvB;AACD;EACE,0BAA0B;EAC1B,sBAAsB;EACtB,YAAY;CACb;AACD;EACE,eAAe;EACf,mCAA2B;UAA3B,2BAA2B;EAC3B,gBAAgB;CACjB;AACD;EACE,sBAAsB;CACvB;AACD;;EAEE,oBAAoB;EACpB,0BAA0B;EAC1B,sBAAsB;CACvB;AACD;EACE,sBAAsB;CACvB","file":"Checkbox.vue","sourcesContent":[".d-checkbox-control {\n  display: inline-block;\n  line-height: 34px;\n  height: 34px;\n  padding-left: 24px;\n  position: relative;\n  font-size: 14px;\n}\n.d-checkbox-control input {\n  opacity: 0;\n  position: absolute;\n  left: 0;\n  top: 10px;\n  z-index: -1;\n}\n.d-checkbox-control .icon {\n  position: absolute;\n  left: 0;\n  top: 10px;\n  width: 12px;\n  height: 12px;\n  line-height: 12px;\n  border: 1px solid #e4e3df;\n  font-size: 12px;\n  cursor: pointer;\n  border-radius: 1px;\n  background-color: #fff;\n}\n.d-checkbox-control .icon:hover {\n  border-color: #828282;\n}\n.d-checkbox-control .iconhandle {\n  background-color: #29b6b0;\n  border-color: #29b6b0;\n  color: #fff;\n}\n.d-checkbox-control .iconhandle span {\n  display: block;\n  transform: scale(0.6, 0.6);\n  margin-top: 1px;\n}\n.d-checkbox-control .iconhandle:hover {\n  border-color: #29b6b0;\n}\n.d-checkbox-control.is-disabled .iconhandle,\n.d-checkbox-control.is-disabled .icon {\n  cursor: not-allowed;\n  background-color: #d3dce6;\n  border-color: #d3dce6;\n}\n.d-checkbox-control.is-disabled .icon {\n  border-color: #d3dce6;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 77 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <label class="d-checkbox-control"
	//     v-bind:class="{
	//       'is-disabled': disabled
	//     }"
	//   >
	//     <i class="icon" v-bind:class="{'iconhandle': isChecked}" @click="handleClick">
	//       <span>{{{isChecked ? '&#xe610;' : ''}}}</span>
	//     </i>
	//     <slot></slot>
	//   </label>
	// </template>
	
	// <script>
	exports.default = {
	  name: 'd-checkbox',
	
	  props: {
	    checked: {
	      type: Boolean,
	      default: false
	    },
	    name: [String, Number],
	    disabled: {
	      type: Boolean,
	      default: false
	    }
	  },
	
	  computed: {
	    isChecked: {
	      get: function get() {
	        if (!this.wrapInGroup) {
	          return this.checked;
	        } else {
	          return this.$parent.value.indexOf(this.name) !== -1;
	        }
	      },
	      set: function set(newValue) {
	        if (!this.wrapInGroup) {
	          this.checked = newValue;
	        } else {
	          var index = this.$parent.value.indexOf(this.name);
	          if (newValue && index === -1) {
	            this.$parent.value.push(this.name);
	          } else if (index !== -1) {
	            this.$parent.value.splice(index, 1);
	          }
	        }
	      }
	    }
	  },
	
	  data: function data() {
	    return {
	      wrapInGroup: this.$parent.$options.name === 'd-checkbox-group'
	    };
	  },
	
	
	  methods: {
	    handleClick: function handleClick() {
	      // 禁用
	      if (this.disabled) {
	        return;
	      }
	      this.isChecked = !this.isChecked;
	      this.$emit('change', this.isChecked);
	    }
	  }
	};
	// </script>
	
	// <style lang="less">
	// .d-checkbox-control {
	//   display: inline-block;
	//   line-height: 34px;
	//   height: 34px;
	//   padding-left: 24px;
	//   position: relative;
	//   font-size: 14px;
	
	//   input {
	//     opacity: 0;
	//     position: absolute;
	//     left: 0;
	//     top: 10px;
	//     z-index: -1;
	//   }
	
	//   .icon {
	//     position: absolute;
	//     left: 0;
	//     top: 10px;
	//     width: 12px;
	//     height: 12px;
	//     line-height: 12px;
	//     border: 1px solid #e4e3df;
	//     font-size: 12px;
	//     cursor: pointer;
	//     border-radius: 1px;
	//     background-color: #fff;
	
	//     &:hover {
	//       border-color: #828282;
	//     }
	//   }
	
	//   .iconhandle {
	//     background-color: #29b6b0;
	//     border-color: #29b6b0;
	//     color: #fff;
	
	//     span {
	//       display: block;
	//       transform: scale(.6, .6);
	//       margin-top: 1px;
	//     }
	
	//     &:hover {
	//       border-color: #29b6b0;
	//     }
	//   }
	
	//   &.is-disabled {
	//     .iconhandle,
	//     .icon {
	//       cursor: not-allowed;
	//       background-color: #d3dce6;
	//       border-color: #d3dce6;
	//     }
	
	//     .icon {
	//       border-color: #d3dce6;
	//     }
	//   }
	// }
	// </style>
	

	/* generated by vue-loader */

/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports = "\n<label class=\"d-checkbox-control\"\n  v-bind:class=\"{\n    'is-disabled': disabled\n  }\"\n>\n  <i class=\"icon\" v-bind:class=\"{'iconhandle': isChecked}\" @click=\"handleClick\">\n    <span>{{{isChecked ? '&#xe610;' : ''}}}</span>\n  </i>\n  <slot></slot>\n</label>\n";

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(80)
	__vue_template__ = __webpack_require__(81)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/cookfront/Sites/workspace/study/duiba-design/src/components/CheckboxGroup.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 80 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="d-checkbox-group">
	//     <slot></slot>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  name: 'd-checkbox-group',
	
	  props: {
	    value: {
	      type: Array
	    }
	  },
	
	  watch: {
	    value: function value(_value) {
	      this.$emit('change', _value);
	    }
	  }
	};
	// </script>
	
	/* generated by vue-loader */

/***/ },
/* 81 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"d-checkbox-group\">\n  <slot></slot>\n</div>\n";

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(83)
	__vue_script__ = __webpack_require__(85)
	__vue_template__ = __webpack_require__(141)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/cookfront/Sites/workspace/study/duiba-design/src/components/Datepicker.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(84);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.21.0/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/style-rewriter.js?id=_v-45694998&file=Datepicker.vue!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/selector.js?type=style&index=0!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./Datepicker.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.21.0/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/style-rewriter.js?id=_v-45694998&file=Datepicker.vue!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/selector.js?type=style&index=0!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./Datepicker.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".datepicker {\n  position: relative;\n  display: inline-block;\n}\n.datepicker .form-control {\n  font-size: 14px;\n}\n.datepicker .iconhandle {\n  position: absolute;\n  right: 13px;\n  top: 8px;\n  color: #888;\n  line-height: 1;\n}\n.datepicker .iconhandle-has-value {\n  color: #444;\n}\n.datepicker:hover .form-control {\n  border-color: #888;\n}\n.datepicker:hover .iconhandle {\n  color: #444;\n}\ninput.datepicker-input.with-reset-button {\n  padding-right: 25px;\n}\n.datepicker > button.close {\n  position: absolute;\n  top: calc(37%);\n  right: 10px;\n  outline: none;\n  z-index: 2;\n}\n.datepicker > button.close:focus {\n  opacity: .2;\n}\n.datepicker-popup {\n  position: absolute;\n  border: 1px solid #888;\n  border-radius: 5px;\n  background: #fff;\n  margin-top: 2px;\n  z-index: 1000;\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n}\n.datepicker-inner {\n  width: 218px;\n}\n.datepicker-body {\n  padding: 10px 10px;\n}\n.datepicker-ctrl p,\n.datepicker-ctrl span,\n.datepicker-body span {\n  display: inline-block;\n  width: 28px;\n  line-height: 28px;\n  height: 28px;\n  border-radius: 4px;\n  font-size: 14px;\n}\n.datepicker-ctrl p {\n  width: 65%;\n}\n.datepicker-popup .datepicker-ctrl span {\n  position: absolute;\n  top: 0;\n  right: 0;\n  font-size: 12px;\n  line-height: 28px;\n  color: #444 !important;\n}\n.datepicker-popup .datepicker-ctrl span:hover {\n  background: #eee;\n}\n.datepicker-body span {\n  text-align: center;\n}\n.datepicker-monthRange span,\n.datepicker-timeRange span {\n  width: 48px;\n  height: 36px;\n  line-height: 36px;\n}\n.datepicker-item-disable {\n  background-color: white!important;\n  cursor: not-allowed !important;\n}\n.decadeRange span:first-child,\n.decadeRange span:last-child,\n.datepicker-item-disable,\n.datepicker-item-gray {\n  color: #999;\n}\n.datepicker-dateRange-item-active:hover,\n.datepicker-dateRange-item-active {\n  background: #29b6b0 !important;\n  color: white!important;\n}\n.datepicker-monthRange,\n.datepicker-timeRange {\n  margin-top: 10px;\n}\n.datepicker-monthRange span,\n.datepicker-timeRange span,\n.datepicker-ctrl span,\n.datepicker-ctrl p,\n.datepicker-dateRange span {\n  cursor: pointer;\n}\n.datepicker-monthRange span:hover,\n.datepicker-timeRange span:hover,\n.datepicker-ctrl p:hover,\n.datepicker-ctrl i:hover,\n.datepicker-dateRange span:hover,\n.datepicker-dateRange-item-hover {\n  background-color: #eeeeee;\n}\n.datepicker-weekRange span {\n  font-weight: bold;\n}\n.datepicker-label {\n  background-color: #f8f8f8;\n  font-weight: 700;\n  padding: 7px 0;\n  text-align: center;\n}\n.datepicker-ctrl {\n  position: relative;\n  height: 30px;\n  line-height: 30px;\n  font-weight: bold;\n  text-align: center;\n}\n.month-btn {\n  font-weight: bold;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.datepicker-preBtn {\n  left: 2px;\n}\n.datepicker-nextBtn {\n  right: 2px;\n}\n", "", {"version":3,"sources":["/./src/components/Datepicker.vue"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,sBAAsB;CACvB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,mBAAmB;EACnB,YAAY;EACZ,SAAS;EACT,YAAY;EACZ,eAAe;CAChB;AACD;EACE,YAAY;CACb;AACD;EACE,mBAAmB;CACpB;AACD;EACE,YAAY;CACb;AACD;EACE,oBAAoB;CACrB;AACD;EACE,mBAAmB;EACnB,eAAe;EACf,YAAY;EACZ,cAAc;EACd,WAAW;CACZ;AACD;EACE,YAAY;CACb;AACD;EACE,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;EACjB,gBAAgB;EAChB,cAAc;EACd,4CAA4C;CAC7C;AACD;EACE,aAAa;CACd;AACD;EACE,mBAAmB;CACpB;AACD;;;EAGE,sBAAsB;EACtB,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,gBAAgB;CACjB;AACD;EACE,WAAW;CACZ;AACD;EACE,mBAAmB;EACnB,OAAO;EACP,SAAS;EACT,gBAAgB;EAChB,kBAAkB;EAClB,uBAAuB;CACxB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,mBAAmB;CACpB;AACD;;EAEE,YAAY;EACZ,aAAa;EACb,kBAAkB;CACnB;AACD;EACE,kCAAkC;EAClC,+BAA+B;CAChC;AACD;;;;EAIE,YAAY;CACb;AACD;;EAEE,+BAA+B;EAC/B,uBAAuB;CACxB;AACD;;EAEE,iBAAiB;CAClB;AACD;;;;;EAKE,gBAAgB;CACjB;AACD;;;;;;EAME,0BAA0B;CAC3B;AACD;EACE,kBAAkB;CACnB;AACD;EACE,0BAA0B;EAC1B,iBAAiB;EACjB,eAAe;EACf,mBAAmB;CACpB;AACD;EACE,mBAAmB;EACnB,aAAa;EACb,kBAAkB;EAClB,kBAAkB;EAClB,mBAAmB;CACpB;AACD;EACE,kBAAkB;EAClB,0BAA0B;EAC1B,uBAAuB;EACvB,sBAAsB;EACtB,kBAAkB;CACnB;AACD;EACE,UAAU;CACX;AACD;EACE,WAAW;CACZ","file":"Datepicker.vue","sourcesContent":[".datepicker {\n  position: relative;\n  display: inline-block;\n}\n.datepicker .form-control {\n  font-size: 14px;\n}\n.datepicker .iconhandle {\n  position: absolute;\n  right: 13px;\n  top: 8px;\n  color: #888;\n  line-height: 1;\n}\n.datepicker .iconhandle-has-value {\n  color: #444;\n}\n.datepicker:hover .form-control {\n  border-color: #888;\n}\n.datepicker:hover .iconhandle {\n  color: #444;\n}\ninput.datepicker-input.with-reset-button {\n  padding-right: 25px;\n}\n.datepicker > button.close {\n  position: absolute;\n  top: calc(37%);\n  right: 10px;\n  outline: none;\n  z-index: 2;\n}\n.datepicker > button.close:focus {\n  opacity: .2;\n}\n.datepicker-popup {\n  position: absolute;\n  border: 1px solid #888;\n  border-radius: 5px;\n  background: #fff;\n  margin-top: 2px;\n  z-index: 1000;\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n}\n.datepicker-inner {\n  width: 218px;\n}\n.datepicker-body {\n  padding: 10px 10px;\n}\n.datepicker-ctrl p,\n.datepicker-ctrl span,\n.datepicker-body span {\n  display: inline-block;\n  width: 28px;\n  line-height: 28px;\n  height: 28px;\n  border-radius: 4px;\n  font-size: 14px;\n}\n.datepicker-ctrl p {\n  width: 65%;\n}\n.datepicker-popup .datepicker-ctrl span {\n  position: absolute;\n  top: 0;\n  right: 0;\n  font-size: 12px;\n  line-height: 28px;\n  color: #444 !important;\n}\n.datepicker-popup .datepicker-ctrl span:hover {\n  background: #eee;\n}\n.datepicker-body span {\n  text-align: center;\n}\n.datepicker-monthRange span,\n.datepicker-timeRange span {\n  width: 48px;\n  height: 36px;\n  line-height: 36px;\n}\n.datepicker-item-disable {\n  background-color: white!important;\n  cursor: not-allowed !important;\n}\n.decadeRange span:first-child,\n.decadeRange span:last-child,\n.datepicker-item-disable,\n.datepicker-item-gray {\n  color: #999;\n}\n.datepicker-dateRange-item-active:hover,\n.datepicker-dateRange-item-active {\n  background: #29b6b0 !important;\n  color: white!important;\n}\n.datepicker-monthRange,\n.datepicker-timeRange {\n  margin-top: 10px;\n}\n.datepicker-monthRange span,\n.datepicker-timeRange span,\n.datepicker-ctrl span,\n.datepicker-ctrl p,\n.datepicker-dateRange span {\n  cursor: pointer;\n}\n.datepicker-monthRange span:hover,\n.datepicker-timeRange span:hover,\n.datepicker-ctrl p:hover,\n.datepicker-ctrl i:hover,\n.datepicker-dateRange span:hover,\n.datepicker-dateRange-item-hover {\n  background-color: #eeeeee;\n}\n.datepicker-weekRange span {\n  font-weight: bold;\n}\n.datepicker-label {\n  background-color: #f8f8f8;\n  font-weight: 700;\n  padding: 7px 0;\n  text-align: center;\n}\n.datepicker-ctrl {\n  position: relative;\n  height: 30px;\n  line-height: 30px;\n  font-weight: bold;\n  text-align: center;\n}\n.month-btn {\n  font-weight: bold;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.datepicker-preBtn {\n  left: 2px;\n}\n.datepicker-nextBtn {\n  right: 2px;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(37);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	var _translations = __webpack_require__(86);
	
	var _translations2 = _interopRequireDefault(_translations);
	
	var _dateUtils = __webpack_require__(87);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'd-datepicker',
	
	  props: {
	    value: {
	      type: String,
	      default: '',
	      twoWay: true
	    },
	    format: {
	      default: 'yyyy-MM-dd'
	    },
	    disabledDate: {
	      type: Function,
	      default: function _default() {}
	    },
	    width: {
	      type: String,
	      default: '200px'
	    },
	    showResetButton: {
	      type: Boolean,
	      default: false
	    },
	    lang: {
	      type: String,
	      default: 'cn'
	    },
	    placeholder: {
	      type: String
	    },
	    rangeflag: {
	      type: Boolean,
	      default: false
	    },
	    onChange: {
	      default: null
	    },
	    time: {
	      type: Boolean,
	      default: false
	    },
	    minute: {
	      type: Boolean,
	      default: false
	    }
	  },
	  ready: function ready() {
	    var _this = this;
	
	    this.$dispatch('child-created', this);
	    this.currDate = this.parse(this.value) || this.parse(new Date());
	    this._closeEvent = _EventListener2.default.listen(window, 'click', function (e) {
	      if (!_this.$el.contains(e.target)) _this.close();
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._closeEvent) this._closeEvent.remove();
	  },
	  data: function data() {
	    return {
	      currDate: new Date(),
	      minuteRange: [],
	      timeRange: [],
	      dateRange: [],
	      decadeRange: [],
	      tempDate: new Date(),
	      tempTime: null,
	      displayTimeView: false,
	      displayDayView: false,
	      displayMonthView: false,
	      displayYearView: false,
	      displayMinuteView: false
	    };
	  },
	
	  watch: {
	    currDate: function currDate() {
	      this.getDateRange();
	    },
	    tempDate: function tempDate() {
	      this.getTimeRange();
	    },
	    tempTime: function tempTime() {
	      this.getMinuteRange();
	    },
	    value: function value(val) {
	      if (!val) {
	        this.currDate = new Date();
	        return;
	      }
	      this.currDate = this.parse(this.value);
	    }
	  },
	  computed: {
	    text: function text() {
	      return (0, _translations2.default)(this.lang);
	    }
	  },
	  methods: {
	    getTimeYear: function getTimeYear(val) {
	      return this.parse(val) ? this.parse(val).getFullYear() : new Date().getFullYear();
	    },
	    getTimeMonth: function getTimeMonth(val) {
	      return this.parse(val) ? this.parse(val).getMonth() : new Date().getMonth();
	    },
	
	    /**
	     * 关闭
	     */
	    close: function close() {
	      this.displayDayView = this.displayTimeView = this.displayMinuteView = this.displayMonthView = this.displayYearView = false;
	    },
	
	
	    /**
	     * input框点击事件，唤起日历选择
	     */
	    inputClick: function inputClick() {
	      this.displayDayView = this.displayTimeView = this.displayMinuteView = this.displayMonthView = this.displayYearView = false;
	      if (this.displayMonthView || this.displayYearView) {
	        this.displayDayView = false;
	      } else {
	        this.displayDayView = !this.displayDayView;
	      }
	    },
	
	
	    /**
	     * 十年选择向前或向后点击处理函数
	     *
	     * @param {Number} flag 标识：0->向前，1->向后
	     */
	    preNextDecadeClick: function preNextDecadeClick(flag) {
	      var year = this.currDate.getFullYear();
	      var months = this.currDate.getMonth();
	      var date = this.currDate.getDate();
	
	      if (flag === 0) {
	        this.currDate = new Date(year - 10, months, date);
	      } else {
	        this.currDate = new Date(year + 10, months, date);
	      }
	    },
	
	
	    /**
	     * 月向前或向后点击处理函数
	     *
	     * @param {Number} flag 标识：0->向前，1->向后
	     */
	    preNextMonthClick: function preNextMonthClick(flag) {
	      var year = this.currDate.getFullYear();
	      var month = this.currDate.getMonth();
	      var date = this.currDate.getDate();
	
	      if (flag === 0) {
	        var preMonth = this.getYearMonth(year, month - 1);
	        this.currDate = new Date(preMonth.year, preMonth.month, date);
	      } else {
	        var nextMonth = this.getYearMonth(year, month + 1);
	        this.currDate = new Date(nextMonth.year, nextMonth.month, date);
	      }
	    },
	
	
	    /**
	     * 年向前或向后点击处理函数
	     *
	     * @param {Number} flag 标识：0->向前，1->向后
	     */
	    preNextYearClick: function preNextYearClick(flag) {
	      var year = this.currDate.getFullYear();
	      var months = this.currDate.getMonth();
	      var date = this.currDate.getDate();
	
	      if (flag === 0) {
	        this.currDate = new Date(year - 1, months, date);
	      } else {
	        this.currDate = new Date(year + 1, months, date);
	      }
	    },
	
	
	    /**
	     * 年份选择处理函数，切换到月选择
	     */
	    yearSelect: function yearSelect(year) {
	      this.displayYearView = false;
	      this.displayMonthView = true;
	      this.currDate = new Date(year, this.currDate.getMonth(), this.currDate.getDate());
	    },
	
	
	    /**
	     * 天选择处理函数
	     *
	     * @param {Date} date 日期
	     * @param {Object} el 选择的元素
	     */
	    daySelect: function daySelect(date, event) {
	      if (event.target.classList[0] === 'datepicker-item-disable') {
	        return false;
	      } else if (this.time) {
	        this.tempDate = date;
	        this.displayDayView = false;
	        this.displayTimeView = true;
	      } else {
	        this.currDate = date;
	        this.value = this.stringify(this.currDate);
	        this.displayDayView = false;
	      }
	      if (this.rangeflag) {
	        this.onChange(date);
	      }
	    },
	
	
	    /**
	     * 时间选择
	     */
	    timeSelect: function timeSelect(time, event) {
	      if (event.target.classList[0] === 'datepicker-item-disable') {
	        return false;
	      }
	      time = time.split(':');
	
	      this.displayTimeView = false;
	
	      if (this.minute) {
	        this.tempTime = time[0];
	        this.displayMinuteView = true;
	        return;
	      }
	
	      this.tempDate.setHours(parseInt(time[0]));
	      this.tempDate.setMinutes(0);
	      this.currDate = this.tempDate;
	      this.value = this.stringify(this.currDate);
	    },
	    minuteSelect: function minuteSelect(time, event) {
	      if (event.target.classList[0] === 'datepicker-item-disable') {
	        return false;
	      }
	
	      time = time.split(':');
	      this.displayMinuteView = false;
	      this.tempDate.setHours(parseInt(time[0]));
	      this.tempDate.setMinutes(time[1]);
	      this.currDate = this.tempDate;
	      this.value = this.stringify(this.currDate) + ':00';
	    },
	
	
	    /**
	     * 切换到天选择
	     */
	    switchDayView: function switchDayView() {
	      this.displayTimeView = false;
	      this.displayDayView = true;
	    },
	
	
	    /**
	     * 切换到月份选择
	     */
	    switchMonthView: function switchMonthView() {
	      this.displayDayView = false;
	      this.displayMonthView = true;
	    },
	
	
	    /**
	     * 切换到年份选择
	     */
	    switchDecadeView: function switchDecadeView() {
	      this.displayMonthView = false;
	      this.displayYearView = true;
	    },
	
	
	    /**
	     * 月份选择处理函数
	     *
	     * @param {Number} index 几月
	     */
	    monthSelect: function monthSelect(index) {
	      this.displayMonthView = false;
	      this.displayDayView = true;
	      this.currDate = new Date(this.currDate.getFullYear(), index, this.currDate.getDate());
	    },
	
	
	    /**
	     * 获取年和月
	     */
	    getYearMonth: function getYearMonth(year, month) {
	      if (month > 11) {
	        year++;
	        month = 0;
	      } else if (month < 0) {
	        year--;
	        month = 11;
	      }
	      return { year: year, month: month };
	    },
	
	
	    // getMonthDay (year, month, day) {
	    //   if (day === 0) {
	    //     month--;
	    //     let yearMonth = this.getYearMonth(year, month)
	    //     day = this.dayCount(yearMonth.year, yearMonth.month)
	    //     yearMonth.date = day
	    //     return yearMonth
	    //   } else if ()
	    // },
	
	    /**
	     * 获取年份选择时的头部字符串，如`2010-2020`
	     */
	    stringifyDecadeHeader: function stringifyDecadeHeader(date) {
	      var yearStr = date.getFullYear().toString();
	      var firstYearOfDecade = yearStr.substring(0, yearStr.length - 1) + 0;
	      var lastYearOfDecade = parseInt(firstYearOfDecade, 10) + 10;
	      return firstYearOfDecade + '-' + lastYearOfDecade;
	    },
	
	
	    /**
	     * 根据日期获取日历头部字符串，如`一月 2016`
	     */
	    stringifyDayHeader: function stringifyDayHeader(date) {
	      return this.text.months[date.getMonth()] + ' ' + date.getFullYear();
	    },
	
	
	    /**
	     * 根据日期获取月份字符串，如`一月`
	     */
	    parseMonth: function parseMonth(date) {
	      return this.text.months[date.getMonth()];
	    },
	
	
	    /**
	     * 日期转年份
	     */
	    stringifyYearHeader: function stringifyYearHeader(date) {
	      return date.getFullYear();
	    },
	
	
	    /**
	     * 根据日期转换为天的字符串，如`20 八月 2016`
	     */
	    stringifyTimeHeader: function stringifyTimeHeader(date) {
	      return ('0' + date.getDate()).slice(-2) + ' ' + this.text.months[date.getMonth()] + ' ' + date.getFullYear();
	    },
	
	
	    /**
	     * 日期转字符串
	     */
	    stringify: function stringify(date) {
	      var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.format;
	
	      var year = date.getFullYear();
	      var month = date.getMonth() + 1;
	      var day = date.getDate();
	      var monthName = this.parseMonth(date);
	      var hour = date.getHours();
	      var minute = date.getMinutes();
	
	      return format.replace(/yyyy/g, year).replace(/MMMM/g, monthName).replace(/MMM/g, monthName.substring(0, 3)).replace(/MM/g, ('0' + month).slice(-2)).replace(/dd/g, ('0' + day).slice(-2)).replace(/yy/g, year).replace(/M(?!a)/g, month).replace(/d/g, day).replace(/hh/g, ('0' + hour).slice(-2)).replace(/ii/g, ('0' + minute).slice(-2));
	    },
	
	
	    /**
	     * 将字符串解析为时间
	     */
	    parse: function parse(str) {
	      if (!str) {
	        return null;
	      }
	      if (str.length === 10 && (this.format === 'dd-MM-yyyy' || this.format === 'dd/MM/yyyy')) {
	        str = str.substring(3, 5) + '-' + str.substring(0, 2) + '-' + str.substring(6, 10);
	      }
	      var date = new Date(str);
	      return isNaN(date.getFullYear()) ? null : date;
	    },
	
	
	    /**
	     * 获取每月天数
	     */
	    getDayCount: function getDayCount(year, month) {
	      var dict = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	      if (month === 1) {
	        if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
	          return 29;
	        }
	      }
	      return dict[month];
	    },
	    getTimeRange: function getTimeRange() {
	      this.timeRange = [];
	      for (var i = 0; i < 24; i++) {
	        var hour = ('0' + i).slice(-2);
	        var now = new Date();
	        var currHour = now.getHours();
	        var sclass = '';
	        if ((0, _dateUtils.isSameDay)(this.tempDate, now) && currHour > i) {
	          sclass = 'datepicker-item-disable';
	        }
	        if (this.currDate.getHours() === i && (0, _dateUtils.isSameDay)(this.tempDate, now) && currHour < i) {
	          sclass = 'datepicker-dateRange-item-active';
	        }
	        this.timeRange.push({
	          text: hour + ':00',
	          sclass: sclass
	        });
	      }
	    },
	    getMinuteRange: function getMinuteRange() {
	      this.minuteRange = [];
	
	      var time = ('0' + this.tempTime).slice(-2);
	      for (var i = 0; i <= 55; i += 5) {
	        var minute = ('0' + i).slice(-2);
	        var now = new Date();
	        var currHour = now.getHours();
	        var currMinute = now.getMinutes();
	        var sclass = '';
	
	        if ((0, _dateUtils.isSameDay)(this.tempDate, now) && currMinute >= i && currHour === +this.tempTime) {
	          sclass = 'datepicker-item-disable';
	        }
	
	        this.minuteRange.push({
	          text: time + ':' + minute,
	          sclass: sclass
	        });
	      }
	    },
	
	
	    /**
	     * 获取时间区间
	     */
	    getDateRange: function getDateRange() {
	      this.dateRange = [];
	      this.decadeRange = [];
	      var time = {
	        year: this.currDate.getFullYear(),
	        month: this.currDate.getMonth(),
	        day: this.currDate.getDate()
	      };
	      var yearStr = time.year.toString();
	      var firstYearOfDecade = yearStr.substring(0, yearStr.length - 1) + 0 - 1;
	      for (var i = 0; i < 12; i++) {
	        this.decadeRange.push({
	          text: firstYearOfDecade + i
	        });
	      }
	
	      var currMonthFirstDay = new Date(time.year, time.month, 1);
	      var firstDayWeek = currMonthFirstDay.getDay() + 1;
	      if (firstDayWeek === 0) {
	        firstDayWeek = 7;
	      }
	      var dayCount = this.getDayCount(time.year, time.month);
	      if (firstDayWeek > 1) {
	        var preMonth = this.getYearMonth(time.year, time.month - 1);
	        var prevMonthDayCount = this.getDayCount(preMonth.year, preMonth.month);
	        for (var _i = 1; _i < firstDayWeek; _i++) {
	          var dayText = prevMonthDayCount - firstDayWeek + _i + 1;
	          var date = new Date(preMonth.year, preMonth.month, dayText);
	          this.dateRange.push({
	            text: dayText,
	            date: date,
	            sclass: this.disabledDate(date) ? 'datepicker-item-disable' : 'datepicker-item-gray'
	          });
	        }
	      }
	
	      for (var _i2 = 1; _i2 <= dayCount; _i2++) {
	        var _date = new Date(time.year, time.month, _i2);
	        var week = _date.getDay();
	        var sclass = '';
	        if (this.disabledDate(_date)) {
	          sclass = 'datepicker-item-disable';
	        }
	        if (_i2 === time.day) {
	          if (this.value) {
	            var valueDate = this.parse(this.value);
	            if (valueDate) {
	              if (valueDate.getFullYear() === time.year && valueDate.getMonth() === time.month) {
	                sclass = 'datepicker-dateRange-item-active';
	              }
	            }
	          }
	        }
	        this.dateRange.push({
	          text: _i2,
	          date: _date,
	          sclass: sclass
	        });
	      }
	
	      if (this.dateRange.length < 42) {
	        var nextMonthNeed = 42 - this.dateRange.length;
	        var nextMonth = this.getYearMonth(time.year, time.month + 1);
	
	        for (var _i3 = 1; _i3 <= nextMonthNeed; _i3++) {
	          var _date2 = new Date(nextMonth.year, nextMonth.month, _i3);
	          this.dateRange.push({
	            text: _i3,
	            date: _date2,
	            sclass: this.disabledDate(_date2) ? 'datepicker-item-disable' : 'datepicker-item-gray'
	          });
	        }
	      }
	    }
	  }
	};
	// </script>
	
	// <style lang="less">
	// .datepicker{
	//   position: relative;
	//   display: inline-block;
	//   .form-control {
	//     font-size: 14px;
	//   }
	//   .iconhandle{
	//     position: absolute;
	//     right: 13px;
	//     top: 8px;
	//     color: #888;
	//     line-height: 1;
	//   }
	//   .iconhandle-has-value {
	//     color: #444;
	//   }
	//   &:hover {
	//     .form-control {
	//       border-color: #888;
	//     }
	//      .iconhandle {
	//        color: #444;
	//      }
	//    }
	// }
	// input.datepicker-input.with-reset-button {
	//   padding-right: 25px;
	// }
	// .datepicker > button.close {
	//   position: absolute;
	//   top: calc(50% - 13px);
	//   right: 10px;
	//   outline: none;
	//   z-index: 2;
	// }
	// .datepicker > button.close:focus {
	//   opacity: .2;
	// }
	// .datepicker-popup{
	//   position: absolute;
	//   border: 1px solid #888;
	//   border-radius: 5px;
	//   background: #fff;
	//   margin-top: 2px;
	//   z-index: 1000;
	//   box-shadow: 0 6px 12px rgba(0,0,0,0.175);
	// }
	// .datepicker-inner{
	//   width: 218px;
	// }
	// .datepicker-body{
	//   padding: 10px 10px;
	// }
	// .datepicker-ctrl p,
	// .datepicker-ctrl span,
	// .datepicker-body span{
	//   display: inline-block;
	//   width: 28px;
	//   line-height: 28px;
	//   height: 28px;
	//   border-radius: 4px;
	//   font-size: 14px;
	// }
	// .datepicker-ctrl p {
	//   width: 65%;
	// }
	// .datepicker-popup .datepicker-ctrl span {
	//   position: absolute;
	//   top: 0;
	//   right: 0;
	//   font-size: 12px;
	//   line-height: 28px;
	//   color: #444 !important;
	//   &:hover {
	//      background: #eee;
	//   }
	// }
	// .datepicker-body span {
	//   text-align: center;
	// }
	// .datepicker-monthRange span,
	// .datepicker-timeRange span {
	//   width: 48px;
	//   height: 36px;
	//   line-height: 36px;
	// }
	// .datepicker-item-disable {
	//   background-color: white!important;
	//   cursor: not-allowed!important;
	// }
	// .decadeRange span:first-child,
	// .decadeRange span:last-child,
	// .datepicker-item-disable,
	// .datepicker-item-gray{
	//   color: #999;
	// }
	
	// .datepicker-dateRange-item-active:hover,
	// .datepicker-dateRange-item-active {
	//   background: #29b6b0 !important;
	//   color: white!important;
	// }
	// .datepicker-monthRange,
	// .datepicker-timeRange {
	//   margin-top: 10px
	// }
	// .datepicker-monthRange span,
	// .datepicker-timeRange span,
	// .datepicker-ctrl span,
	// .datepicker-ctrl p,
	// .datepicker-dateRange span {
	//   cursor: pointer;
	// }
	// .datepicker-monthRange span:hover,
	// .datepicker-timeRange span:hover,
	// .datepicker-ctrl p:hover,
	// .datepicker-ctrl i:hover,
	// .datepicker-dateRange span:hover,
	// .datepicker-dateRange-item-hover {
	//   background-color : #eeeeee;
	// }
	// .datepicker-weekRange span{
	//   font-weight: bold;
	// }
	// .datepicker-label{
	//   background-color: #f8f8f8;
	//   font-weight: 700;
	//   padding: 7px 0;
	//   text-align: center;
	// }
	// .datepicker-ctrl{
	//   position: relative;
	//   height: 30px;
	//   line-height: 30px;
	//   font-weight: bold;
	//   text-align: center;
	// }
	// .month-btn{
	//   font-weight: bold;
	//   -webkit-user-select:none;
	//   -moz-user-select:none;
	//   -ms-user-select:none;
	//   user-select:none;
	// }
	// .datepicker-preBtn{
	//   left: 2px;
	// }
	// .datepicker-nextBtn{
	//   right: 2px;
	// }
	// </style>
	
	/* generated by vue-loader */
	// <template>
	//   <div class="datepicker">
	//     <input
	//       class="form-control datepicker-input"
	//       :class="{
	//         'with-reset-button': showResetButton
	//       }"
	//       type="text"
	//       :style="{width: width}"
	//       @click="inputClick"
	//       v-model="value"
	//       :placeholder="placeholder"
	//       readonly>
	//     <i
	//       class="iconhandle"
	//       :class="{ 'iconhandle-has-value': value}"
	//       @click="inputClick">&#xe60d;</i>
	//     <div class="datepicker-popup" v-show="displayDayView">
	//       <div class="datepicker-inner">
	//         <div class="datepicker-body">
	//           <div class="datepicker-ctrl">
	//             <span
	//               class="month-btn datepicker-preBtn iconhandle"
	//               @click="preNextMonthClick(0)">&#xe642;</span>
	//             <span
	//               class="month-btn datepicker-nextBtn iconhandle"
	//               @click="preNextMonthClick(1)">&#xe643;</span>
	//             <p @click="switchMonthView">
	//               {{stringifyDayHeader(currDate)}}
	//             </p>
	//           </div>
	//           <div class="datepicker-weekRange">
	//             <span v-for="w in text.daysOfWeek">{{w}}</span>
	//           </div>
	//           <div class="datepicker-dateRange">
	//             <span
	//               v-for="d in dateRange"
	//               :class="d.sclass"
	//               @click="daySelect(d.date, $event)">
	//               {{d.text}}
	//             </span>
	//           </div>
	//         </div>
	//       </div>
	//     </div>
	//     <div class="datepicker-popup" v-show="displayMonthView">
	//       <div class="datepicker-inner">
	//         <div class="datepicker-body">
	//           <div class="datepicker-ctrl">
	//             <span
	//               class="month-btn datepicker-preBtn iconhandle"
	//               @click="preNextYearClick(0)">&#xe642;</span>
	//             <span
	//               class="month-btn datepicker-nextBtn iconhandle"
	//               @click="preNextYearClick(1)">&#xe643;</span>
	//             <p @click="switchDecadeView">
	//               {{stringifyYearHeader(currDate)}}
	//             </p>
	//           </div>
	//           <div class="datepicker-monthRange">
	//             <template v-for="m in text.months">
	//               <span
	//                 :class="{
	//                   'datepicker-dateRange-item-active': (this.text.months[this.getTimeMonth(this.value)] === m) &&
	//                   this.currDate.getFullYear() === this.getTimeYear(this.value)
	//                 }"
	//                 @click="monthSelect($index)">
	//                 {{m.substr(0,3)}}
	//               </span>
	//             </template>
	//           </div>
	//         </div>
	//       </div>
	//     </div>
	//     <div class="datepicker-popup" v-show="displayYearView">
	//       <div class="datepicker-inner">
	//         <div class="datepicker-body">
	//           <div class="datepicker-ctrl">
	//             <span
	//               class="month-btn datepicker-preBtn iconhandle"
	//               @click="preNextDecadeClick(0)">&#xe642;</span>
	//             <span
	//               class="month-btn datepicker-nextBtn iconhandle"
	//               @click="preNextDecadeClick(1)">&#xe643;</span>
	//             <p>{{stringifyDecadeHeader(currDate)}}</p>
	//           </div>
	//           <div class="datepicker-monthRange decadeRange">
	//             <template v-for="decade in decadeRange">
	//               <span
	//                 :class="{
	//                   'datepicker-dateRange-item-active': this.getTimeYear(this.value) === decade.text
	//                 }"
	//                 @click.stop="yearSelect(decade.text)">
	//                 {{decade.text}}
	//               </span>
	//             </template>
	//           </div>
	//         </div>
	//       </div>
	//     </div>
	//     <div class="datepicker-popup" v-show="displayTimeView">
	//       <div class="datepicker-inner">
	//         <div class="datepicker-body">
	//           <div class="datepicker-ctrl">
	//             <p @click="switchDayView">
	//               {{stringifyTimeHeader(tempDate)}}
	//             </p>
	//           </div>
	//           <div class="datepicker-timeRange">
	//             <template v-for="time in timeRange">
	//               <span
	//                 :class="time.sclass"
	//                 @click.stop="timeSelect(time.text, $event)">
	//                 {{time.text}}
	//               </span>
	//             </template>
	//           </div>
	//         </div>
	//       </div>
	//     </div>
	//     <div class="datepicker-popup" v-show="displayMinuteView">
	//       <div class="datepicker-inner">
	//         <div class="datepicker-body">
	//           <div class="datepicker-ctrl">
	//             <p @click="switchDayView">
	//               {{stringifyTimeHeader(tempDate)}}
	//             </p>
	//           </div>
	//           <div class="datepicker-timeRange">
	//             <template v-for="time in minuteRange">
	//               <span
	//                 :class="time.sclass"
	//                 @click.stop="minuteSelect(time.text, $event)">
	//                 {{time.text}}
	//               </span>
	//             </template>
	//           </div>
	//         </div>
	//       </div>
	//     </div>
	//   </div>
	// </template>
	
	// <script>
	/* eslint-disable */

/***/ },
/* 86 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/* eslint-disable */
	var text = {
	  daysOfWeek: {
	    en: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
	    cn: ['日', '一', '二', '三', '四', '五', '六'],
	    es: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa']
	  },
	  limit: {
	    en: 'Limit reached ({{limit}} items max).',
	    es: 'Limite alcanzado (máximo {{limit}} items).'
	  },
	  loading: {
	    en: 'Loading...',
	    cn: '加载...',
	    es: 'Cargando...'
	  },
	  minLength: {
	    en: 'Min. Length',
	    es: 'Tamaño Mínimo'
	  },
	  months: {
	    en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	    cn: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
	    es: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
	  },
	  notSelected: {
	    en: 'Nothing Selected',
	    es: 'Nada seleccionado'
	  },
	  required: {
	    en: 'Required',
	    es: 'Requerido'
	  },
	  search: {
	    en: 'Search',
	    es: 'Buscar'
	  }
	};
	
	exports.default = function () {
	  var lang = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en';
	
	  var tr = {};
	  for (var i in text) {
	    tr[i] = text[i][lang] || text[i]['en'];
	  }
	  return tr;
	};

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof2 = __webpack_require__(88);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	exports.formatDate = formatDate;
	exports.isSameDay = isSameDay;
	exports.formatDateTime = formatDateTime;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function formatDate(date) {
	  if (!date) {
	    date = new Date();
	  }
	
	  if ((typeof date === 'undefined' ? 'undefined' : (0, _typeof3.default)(date)) !== 'object') {
	    date = new Date(date);
	  }
	
	  var year = date.getFullYear();
	  var month = date.getMonth() + 1;
	  var day = date.getDate();
	
	  month = ('0' + month).slice(-2);
	  day = ('0' + day).slice(-2);
	  return year + '-' + month + '-' + day;
	}
	
	function isSameDay(date1, date2) {
	  return formatDate(date1) === formatDate(date2);
	}
	
	function formatDateTime(date) {
	  if ((typeof date === 'undefined' ? 'undefined' : (0, _typeof3.default)(date)) !== 'object') {
	    date = new Date(date);
	  }
	  var dateStr = formatDate(date);
	  var timeStr = ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2) + ':' + ('0' + date.getSeconds()).slice(-2);
	  return dateStr + ' ' + timeStr;
	}

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(89);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__(125);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(90), __esModule: true };

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(91);
	__webpack_require__(120);
	module.exports = __webpack_require__(124).f('iterator');

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(92)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(95)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(93)
	  , defined   = __webpack_require__(94);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 93 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 94 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(96)
	  , $export        = __webpack_require__(20)
	  , redefine       = __webpack_require__(97)
	  , hide           = __webpack_require__(25)
	  , has            = __webpack_require__(98)
	  , Iterators      = __webpack_require__(99)
	  , $iterCreate    = __webpack_require__(100)
	  , setToStringTag = __webpack_require__(116)
	  , getPrototypeOf = __webpack_require__(118)
	  , ITERATOR       = __webpack_require__(117)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 96 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(25);

/***/ },
/* 98 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 99 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(101)
	  , descriptor     = __webpack_require__(34)
	  , setToStringTag = __webpack_require__(116)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(25)(IteratorPrototype, __webpack_require__(117)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(27)
	  , dPs         = __webpack_require__(102)
	  , enumBugKeys = __webpack_require__(114)
	  , IE_PROTO    = __webpack_require__(111)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(32)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(115).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(26)
	  , anObject = __webpack_require__(27)
	  , getKeys  = __webpack_require__(103);
	
	module.exports = __webpack_require__(30) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(104)
	  , enumBugKeys = __webpack_require__(114);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(98)
	  , toIObject    = __webpack_require__(105)
	  , arrayIndexOf = __webpack_require__(108)(false)
	  , IE_PROTO     = __webpack_require__(111)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(106)
	  , defined = __webpack_require__(94);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(107);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 107 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(105)
	  , toLength  = __webpack_require__(109)
	  , toIndex   = __webpack_require__(110);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(93)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(93)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(112)('keys')
	  , uid    = __webpack_require__(113);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(21)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 113 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 114 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(21).document && document.documentElement;

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(26).f
	  , has = __webpack_require__(98)
	  , TAG = __webpack_require__(117)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(112)('wks')
	  , uid        = __webpack_require__(113)
	  , Symbol     = __webpack_require__(21).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(98)
	  , toObject    = __webpack_require__(119)
	  , IE_PROTO    = __webpack_require__(111)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(94);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(121);
	var global        = __webpack_require__(21)
	  , hide          = __webpack_require__(25)
	  , Iterators     = __webpack_require__(99)
	  , TO_STRING_TAG = __webpack_require__(117)('toStringTag');
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(122)
	  , step             = __webpack_require__(123)
	  , Iterators        = __webpack_require__(99)
	  , toIObject        = __webpack_require__(105);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(95)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 122 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 123 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(117);

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(126), __esModule: true };

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(127);
	__webpack_require__(138);
	__webpack_require__(139);
	__webpack_require__(140);
	module.exports = __webpack_require__(22).Symbol;

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(21)
	  , has            = __webpack_require__(98)
	  , DESCRIPTORS    = __webpack_require__(30)
	  , $export        = __webpack_require__(20)
	  , redefine       = __webpack_require__(97)
	  , META           = __webpack_require__(128).KEY
	  , $fails         = __webpack_require__(31)
	  , shared         = __webpack_require__(112)
	  , setToStringTag = __webpack_require__(116)
	  , uid            = __webpack_require__(113)
	  , wks            = __webpack_require__(117)
	  , wksExt         = __webpack_require__(124)
	  , wksDefine      = __webpack_require__(129)
	  , keyOf          = __webpack_require__(130)
	  , enumKeys       = __webpack_require__(131)
	  , isArray        = __webpack_require__(134)
	  , anObject       = __webpack_require__(27)
	  , toIObject      = __webpack_require__(105)
	  , toPrimitive    = __webpack_require__(33)
	  , createDesc     = __webpack_require__(34)
	  , _create        = __webpack_require__(101)
	  , gOPNExt        = __webpack_require__(135)
	  , $GOPD          = __webpack_require__(137)
	  , $DP            = __webpack_require__(26)
	  , $keys          = __webpack_require__(103)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(136).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(133).f  = $propertyIsEnumerable;
	  __webpack_require__(132).f = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(96)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});
	
	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);
	
	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(25)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(113)('meta')
	  , isObject = __webpack_require__(28)
	  , has      = __webpack_require__(98)
	  , setDesc  = __webpack_require__(26).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(31)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(21)
	  , core           = __webpack_require__(22)
	  , LIBRARY        = __webpack_require__(96)
	  , wksExt         = __webpack_require__(124)
	  , defineProperty = __webpack_require__(26).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(103)
	  , toIObject = __webpack_require__(105);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(103)
	  , gOPS    = __webpack_require__(132)
	  , pIE     = __webpack_require__(133);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 132 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 133 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(107);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(105)
	  , gOPN      = __webpack_require__(136).f
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(104)
	  , hiddenKeys = __webpack_require__(114).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(133)
	  , createDesc     = __webpack_require__(34)
	  , toIObject      = __webpack_require__(105)
	  , toPrimitive    = __webpack_require__(33)
	  , has            = __webpack_require__(98)
	  , IE8_DOM_DEFINE = __webpack_require__(29)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(30) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 138 */
/***/ function(module, exports) {



/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(129)('asyncIterator');

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(129)('observable');

/***/ },
/* 141 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"datepicker\">\n  <input\n    class=\"form-control datepicker-input\"\n    :class=\"{\n      'with-reset-button': showResetButton\n    }\"\n    type=\"text\"\n    :style=\"{width: width}\"\n    @click=\"inputClick\"\n    v-model=\"value\"\n    :placeholder=\"placeholder\"\n    readonly>\n  <i\n    class=\"iconhandle\"\n    :class=\"{ 'iconhandle-has-value': value}\"\n    @click=\"inputClick\">&#xe60d;</i>\n  <div class=\"datepicker-popup\" v-show=\"displayDayView\">\n    <div class=\"datepicker-inner\">\n      <div class=\"datepicker-body\">\n        <div class=\"datepicker-ctrl\">\n          <span\n            class=\"month-btn datepicker-preBtn iconhandle\"\n            @click=\"preNextMonthClick(0)\">&#xe642;</span>\n          <span\n            class=\"month-btn datepicker-nextBtn iconhandle\"\n            @click=\"preNextMonthClick(1)\">&#xe643;</span>\n          <p @click=\"switchMonthView\">\n            {{stringifyDayHeader(currDate)}}\n          </p>\n        </div>\n        <div class=\"datepicker-weekRange\">\n          <span v-for=\"w in text.daysOfWeek\">{{w}}</span>\n        </div>\n        <div class=\"datepicker-dateRange\">\n          <span\n            v-for=\"d in dateRange\"\n            :class=\"d.sclass\"\n            @click=\"daySelect(d.date, $event)\">\n            {{d.text}}\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"datepicker-popup\" v-show=\"displayMonthView\">\n    <div class=\"datepicker-inner\">\n      <div class=\"datepicker-body\">\n        <div class=\"datepicker-ctrl\">\n          <span\n            class=\"month-btn datepicker-preBtn iconhandle\"\n            @click=\"preNextYearClick(0)\">&#xe642;</span>\n          <span\n            class=\"month-btn datepicker-nextBtn iconhandle\"\n            @click=\"preNextYearClick(1)\">&#xe643;</span>\n          <p @click=\"switchDecadeView\">\n            {{stringifyYearHeader(currDate)}}\n          </p>\n        </div>\n        <div class=\"datepicker-monthRange\">\n          <template v-for=\"m in text.months\">\n            <span\n              :class=\"{\n                'datepicker-dateRange-item-active': (this.text.months[this.getTimeMonth(this.value)] === m) &&\n                this.currDate.getFullYear() === this.getTimeYear(this.value)\n              }\"\n              @click=\"monthSelect($index)\">\n              {{m.substr(0,3)}}\n            </span>\n          </template>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"datepicker-popup\" v-show=\"displayYearView\">\n    <div class=\"datepicker-inner\">\n      <div class=\"datepicker-body\">\n        <div class=\"datepicker-ctrl\">\n          <span\n            class=\"month-btn datepicker-preBtn iconhandle\"\n            @click=\"preNextDecadeClick(0)\">&#xe642;</span>\n          <span\n            class=\"month-btn datepicker-nextBtn iconhandle\"\n            @click=\"preNextDecadeClick(1)\">&#xe643;</span>\n          <p>{{stringifyDecadeHeader(currDate)}}</p>\n        </div>\n        <div class=\"datepicker-monthRange decadeRange\">\n          <template v-for=\"decade in decadeRange\">\n            <span\n              :class=\"{\n                'datepicker-dateRange-item-active': this.getTimeYear(this.value) === decade.text\n              }\"\n              @click.stop=\"yearSelect(decade.text)\">\n              {{decade.text}}\n            </span>\n          </template>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"datepicker-popup\" v-show=\"displayTimeView\">\n    <div class=\"datepicker-inner\">\n      <div class=\"datepicker-body\">\n        <div class=\"datepicker-ctrl\">\n          <p @click=\"switchDayView\">\n            {{stringifyTimeHeader(tempDate)}}\n          </p>\n        </div>\n        <div class=\"datepicker-timeRange\">\n          <template v-for=\"time in timeRange\">\n            <span\n              :class=\"time.sclass\"\n              @click.stop=\"timeSelect(time.text, $event)\">\n              {{time.text}}\n            </span>\n          </template>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"datepicker-popup\" v-show=\"displayMinuteView\">\n    <div class=\"datepicker-inner\">\n      <div class=\"datepicker-body\">\n        <div class=\"datepicker-ctrl\">\n          <p @click=\"switchDayView\">\n            {{stringifyTimeHeader(tempDate)}}\n          </p>\n        </div>\n        <div class=\"datepicker-timeRange\">\n          <template v-for=\"time in minuteRange\">\n            <span\n              :class=\"time.sclass\"\n              @click.stop=\"minuteSelect(time.text, $event)\">\n              {{time.text}}\n            </span>\n          </template>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(143)
	__vue_script__ = __webpack_require__(145)
	__vue_template__ = __webpack_require__(150)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/cookfront/Sites/workspace/study/duiba-design/src/components/Timepicker.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(144);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.21.0/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/style-rewriter.js?id=_v-bcfadc12&file=Timepicker.vue!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/selector.js?type=style&index=0!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./Timepicker.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.21.0/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/style-rewriter.js?id=_v-bcfadc12&file=Timepicker.vue!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/selector.js?type=style&index=0!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./Timepicker.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".time-picker {\n  display: inline-block;\n  position: relative;\n  font-size: 1em;\n  width: 10em;\n  font-family: sans-serif;\n  vertical-align: middle;\n}\n.time-picker * {\n  box-sizing: border-box;\n}\n.time-picker input.display-time {\n  border: 1px solid #d2d2d2;\n  width: 10em;\n  height: 2.2em;\n  padding: 0.3em 0.5em;\n  font-size: 1em;\n}\n.time-picker .clear-btn {\n  position: absolute;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column nowrap;\n      flex-flow: column nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  margin-top: -0.15em;\n  z-index: 3;\n  font-size: 1.1em;\n  line-height: 1em;\n  vertical-align: middle;\n  width: 1.3em;\n  color: #d2d2d2;\n  background: rgba(255, 255, 255, 0);\n  text-align: center;\n  font-style: normal;\n  -webkit-transition: color .2s;\n  transition: color .2s;\n}\n.time-picker .clear-btn:hover {\n  color: #797979;\n  cursor: pointer;\n}\n.time-picker .time-picker-overlay {\n  z-index: 2;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.time-picker .dropdown {\n  position: absolute;\n  z-index: 5;\n  top: 36px;\n  left: 0;\n  background: #fff;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.15);\n  width: 10em;\n  height: 10em;\n  font-weight: normal;\n}\n.time-picker .dropdown .select-list {\n  width: 10em;\n  height: 10em;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: row nowrap;\n      flex-flow: row nowrap;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.time-picker .dropdown ul {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.time-picker .dropdown ul.minutes,\n.time-picker .dropdown ul.seconds,\n.time-picker .dropdown ul.apms {\n  border-left: 1px solid #fff;\n}\n.time-picker .dropdown ul li {\n  text-align: center;\n  padding: 0.3em 0;\n  color: #161616;\n}\n.time-picker .dropdown ul li:not(.hint):hover {\n  background: rgba(0, 0, 0, 0.08);\n  color: #161616;\n  cursor: pointer;\n}\n.time-picker .dropdown ul li.active,\n.time-picker .dropdown ul li.active:hover {\n  background: #41B883;\n  color: #fff;\n}\n.time-picker .dropdown .hint {\n  color: #a5a5a5;\n  cursor: default;\n  font-size: 0.8em;\n}\n", "", {"version":3,"sources":["/./src/components/Timepicker.vue"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,mBAAmB;EACnB,eAAe;EACf,YAAY;EACZ,wBAAwB;EACxB,uBAAuB;CACxB;AACD;EACE,uBAAuB;CACxB;AACD;EACE,0BAA0B;EAC1B,YAAY;EACZ,cAAc;EACd,qBAAqB;EACrB,eAAe;CAChB;AACD;EACE,mBAAmB;EACnB,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,6BAAyB;MAAzB,yBAAyB;EACzB,yBAAwB;MAAxB,sBAAwB;UAAxB,wBAAwB;EACxB,0BAAoB;MAApB,uBAAoB;UAApB,oBAAoB;EACpB,OAAO;EACP,SAAS;EACT,UAAU;EACV,oBAAoB;EACpB,WAAW;EACX,iBAAiB;EACjB,iBAAiB;EACjB,uBAAuB;EACvB,aAAa;EACb,eAAe;EACf,mCAAmC;EACnC,mBAAmB;EACnB,mBAAmB;EACnB,8BAA8B;EAC9B,sBAAsB;CACvB;AACD;EACE,eAAe;EACf,gBAAgB;CACjB;AACD;EACE,WAAW;EACX,gBAAgB;EAChB,OAAO;EACP,QAAQ;EACR,SAAS;EACT,UAAU;CACX;AACD;EACE,mBAAmB;EACnB,WAAW;EACX,UAAU;EACV,QAAQ;EACR,iBAAiB;EACjB,0CAA0C;EAC1C,YAAY;EACZ,aAAa;EACb,oBAAoB;CACrB;AACD;EACE,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,0BAAsB;MAAtB,sBAAsB;EACtB,2BAAqB;MAArB,wBAAqB;UAArB,qBAAqB;EACrB,0BAA+B;MAA/B,uBAA+B;UAA/B,+BAA+B;CAChC;AACD;EACE,WAAW;EACX,UAAU;EACV,iBAAiB;EACjB,oBAAQ;MAAR,YAAQ;UAAR,QAAQ;EACR,mBAAmB;EACnB,iBAAiB;CAClB;AACD;;;EAGE,4BAA4B;CAC7B;AACD;EACE,mBAAmB;EACnB,iBAAiB;EACjB,eAAe;CAChB;AACD;EACE,gCAAgC;EAChC,eAAe;EACf,gBAAgB;CACjB;AACD;;EAEE,oBAAoB;EACpB,YAAY;CACb;AACD;EACE,eAAe;EACf,gBAAgB;EAChB,iBAAiB;CAClB","file":"Timepicker.vue","sourcesContent":[".time-picker {\n  display: inline-block;\n  position: relative;\n  font-size: 1em;\n  width: 10em;\n  font-family: sans-serif;\n  vertical-align: middle;\n}\n.time-picker * {\n  box-sizing: border-box;\n}\n.time-picker input.display-time {\n  border: 1px solid #d2d2d2;\n  width: 10em;\n  height: 2.2em;\n  padding: 0.3em 0.5em;\n  font-size: 1em;\n}\n.time-picker .clear-btn {\n  position: absolute;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  margin-top: -0.15em;\n  z-index: 3;\n  font-size: 1.1em;\n  line-height: 1em;\n  vertical-align: middle;\n  width: 1.3em;\n  color: #d2d2d2;\n  background: rgba(255, 255, 255, 0);\n  text-align: center;\n  font-style: normal;\n  -webkit-transition: color .2s;\n  transition: color .2s;\n}\n.time-picker .clear-btn:hover {\n  color: #797979;\n  cursor: pointer;\n}\n.time-picker .time-picker-overlay {\n  z-index: 2;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.time-picker .dropdown {\n  position: absolute;\n  z-index: 5;\n  top: 36px;\n  left: 0;\n  background: #fff;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.15);\n  width: 10em;\n  height: 10em;\n  font-weight: normal;\n}\n.time-picker .dropdown .select-list {\n  width: 10em;\n  height: 10em;\n  overflow: hidden;\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: stretch;\n  justify-content: space-between;\n}\n.time-picker .dropdown ul {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  flex: 1;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.time-picker .dropdown ul.minutes,\n.time-picker .dropdown ul.seconds,\n.time-picker .dropdown ul.apms {\n  border-left: 1px solid #fff;\n}\n.time-picker .dropdown ul li {\n  text-align: center;\n  padding: 0.3em 0;\n  color: #161616;\n}\n.time-picker .dropdown ul li:not(.hint):hover {\n  background: rgba(0, 0, 0, 0.08);\n  color: #161616;\n  cursor: pointer;\n}\n.time-picker .dropdown ul li.active,\n.time-picker .dropdown ul li.active:hover {\n  background: #41B883;\n  color: #fff;\n}\n.time-picker .dropdown .hint {\n  color: #a5a5a5;\n  cursor: default;\n  font-size: 0.8em;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _keys = __webpack_require__(146);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <span class="time-picker">
	//     <input class="display-time" v-model="displayTime" @click="toggleDropdown" type="text" readonly />
	//     <span class="clear-btn" v-if="!hideClearButton" v-show="!showDropdown && showClearBtn()" @click="clearTime">&times;</span>
	//     <div class="time-picker-overlay" v-if="showDropdown" @click="toggleDropdown"></div>
	//     <div class="dropdown" v-show="showDropdown">
	//       <div class="select-list">
	//         <ul class="hours">
	//           <li class="hint" v-text="hourType"></li>
	//           <li v-for="hr in hours" v-text="hr" :class="{active: hour === hr}" @click="select('hour', hr)"></li>
	//         </ul>
	//         <ul class="minutes">
	//           <li class="hint" v-text="minuteType"></li>
	//           <li v-for="m in minutes" v-text="m" :class="{active: minute === m}" @click="select('minute', m)"></li>
	//         </ul>
	//         <ul class="seconds" v-if="secondType">
	//           <li class="hint" v-text="secondType"></li>
	//           <li v-for="s in seconds" v-text="s" :class="{active: second === s}" @click="select('second', s)"></li>
	//         </ul>
	//         <ul class="apms" v-if="apmType">
	//           <li class="hint" v-text="apmType"></li>
	//           <li v-for="a in apms" v-text="a" :class="{active: apm === a}" @click="select('apm', a)"></li>
	//         </ul>
	//       </div>
	//     </div>
	//   </span>
	// </template>
	
	// <script>
	/* eslint-disable */
	
	var CONFIG = {
	  HOUR_TOKENS: ['HH', 'H', 'hh', 'h', 'kk', 'k'],
	  MINUTE_TOKENS: ['mm', 'm'],
	  SECOND_TOKENS: ['ss', 's'],
	  APM_TOKENS: ['A', 'a']
	};
	
	exports.default = {
	  name: 'd-timepicker',
	
	  props: {
	    timeValue: { type: Object, twoWay: true },
	    hideClearButton: { type: Boolean },
	    format: { type: String },
	    minuteInterval: { type: Number },
	    secondInterval: { type: Number }
	  },
	
	  data: function data() {
	    return {
	      hours: [],
	      minutes: [],
	      seconds: [],
	      apms: [],
	      showDropdown: false,
	      muteWatch: false,
	      hourType: 'HH',
	      minuteType: 'mm',
	      secondType: '',
	      apmType: '',
	      hour: '',
	      minute: '',
	      second: '',
	      apm: '',
	      fullValues: undefined
	    };
	  },
	
	
	  computed: {
	    displayTime: function displayTime() {
	      var formatString = String(this.format || 'HH:mm');
	      if (this.hour) {
	        formatString = formatString.replace(new RegExp(this.hourType, 'g'), this.hour);
	      }
	      if (this.minute) {
	        formatString = formatString.replace(new RegExp(this.minuteType, 'g'), this.minute);
	      }
	      if (this.second && this.secondType) {
	        formatString = formatString.replace(new RegExp(this.secondType, 'g'), this.second);
	      }
	      if (this.apm && this.apmType) {
	        formatString = formatString.replace(new RegExp(this.apmType, 'g'), this.apm);
	      }
	      return formatString;
	    }
	  },
	
	  watch: {
	    'format': 'renderFormat',
	    'minuteInterval': function minuteInterval(newInteval) {
	      this.renderList('minute', newInteval);
	    },
	    'secondInterval': function secondInterval(newInteval) {
	      this.renderList('second', newInteval);
	    },
	    'timeValue': 'readValues',
	    'displayTime': 'fillValues'
	  },
	
	  ready: function ready() {
	    this.renderFormat();
	  },
	
	  methods: {
	    formatValue: function formatValue(type, i) {
	      switch (type) {
	        case 'H':
	        case 'm':
	        case 's':
	          return String(i);
	        case 'HH':
	        case 'mm':
	        case 'ss':
	          return i < 10 ? '0' + i : String(i);
	        case 'h':
	        case 'k':
	          return String(i + 1);
	        case 'hh':
	        case 'kk':
	          return i + 1 < 10 ? '0' + (i + 1) : String(i + 1);
	        default:
	          return '';
	      }
	    },
	
	    checkAcceptingType: function checkAcceptingType(validValues, formatString, fallbackValue) {
	      if (!validValues || !formatString || !formatString.length) {
	        return '';
	      }
	      for (var i = 0; i < validValues.length; i++) {
	        if (formatString.indexOf(validValues[i]) > -1) {
	          return validValues[i];
	        }
	      }
	      return fallbackValue || '';
	    },
	
	    renderFormat: function renderFormat(newFormat) {
	      newFormat = newFormat || this.format;
	      if (!newFormat || !newFormat.length) {
	        newFormat = 'HH:mm';
	      }
	
	      this.hourType = this.checkAcceptingType(CONFIG.HOUR_TOKENS, newFormat, 'HH');
	      this.minuteType = this.checkAcceptingType(CONFIG.MINUTE_TOKENS, newFormat, 'mm');
	      this.secondType = this.checkAcceptingType(CONFIG.SECOND_TOKENS, newFormat);
	      this.apmType = this.checkAcceptingType(CONFIG.APM_TOKENS, newFormat);
	
	      this.renderHoursList();
	      this.renderList('minute');
	
	      if (this.secondType) {
	        this.renderList('second');
	      }
	
	      if (this.apmType) {
	        this.renderApmList();
	      }
	
	      var self = this;
	      this.$nextTick(function () {
	        self.readValues();
	      });
	    },
	
	    renderHoursList: function renderHoursList() {
	      var hoursCount = this.hourType === 'h' || this.hourType === 'hh' ? 12 : 24;
	      this.hours = [];
	      for (var i = 0; i < hoursCount; i++) {
	        this.hours.push(this.formatValue(this.hourType, i));
	      }
	    },
	
	    renderList: function renderList(listType, interval) {
	      if (listType === 'second') {
	        interval = interval || this.secondInterval;
	      } else if (listType === 'minute') {
	        interval = interval || this.minuteInterval;
	      } else {
	        return;
	      }
	
	      if (interval === 0) {
	        interval = 60;
	      } else if (interval > 60) {
	        window.console.warn('`' + listType + '-interval` should be less than 60. Current value is', interval);
	        interval = 1;
	      } else if (interval < 1) {
	        window.console.warn('`' + listType + '-interval` should be NO less than 1. Current value is', interval);
	        interval = 1;
	      } else if (!interval) {
	        interval = 1;
	      }
	
	      if (listType === 'minute') {
	        this.minutes = [];
	      } else {
	        this.seconds = [];
	      }
	
	      for (var i = 0; i < 60; i += interval) {
	        if (listType === 'minute') {
	          this.minutes.push(this.formatValue(this.minuteType, i));
	        } else {
	          this.seconds.push(this.formatValue(this.secondType, i));
	        }
	      }
	    },
	
	    renderApmList: function renderApmList() {
	      this.apms = [];
	      if (!this.apmType) {
	        return;
	      }
	      this.apms = this.apmType === 'A' ? ['AM', 'PM'] : ['am', 'pm'];
	    },
	
	    readValues: function readValues() {
	      if (!this.timeValue || this.muteWatch) {
	        return;
	      }
	
	      var values = (0, _keys2.default)(this.timeValue);
	
	      if (values.indexOf(this.hourType) > -1) {
	        this.hour = this.timeValue[this.hourType];
	      }
	
	      if (values.indexOf(this.minuteType) > -1) {
	        this.minute = this.timeValue[this.minuteType];
	      }
	
	      if (values.indexOf(this.secondType) > -1) {
	        this.second = this.timeValue[this.secondType];
	      }
	
	      if (values.indexOf(this.apmType) > -1) {
	        this.apm = this.timeValue[this.apmType];
	      }
	
	      this.fillValues();
	    },
	
	    fillValues: function fillValues() {
	      var fullValues = {};
	
	      var baseHour = this.hour;
	      var baseHourType = this.hourType;
	
	      var hourValue = baseHour || baseHour === 0 ? Number(baseHour) : '';
	      var baseOnTwelveHours = this.isTwelveHours(baseHourType);
	      var apmValue = this.apm ? String(this.apm).toLowerCase() : false;
	
	      CONFIG.HOUR_TOKENS.forEach(function (token) {
	        if (token === baseHourType) {
	          fullValues[token] = baseHour;
	          return;
	        }
	
	        var value;
	        var apm;
	        switch (token) {
	          case 'H':
	          case 'HH':
	            if (!String(hourValue).length) {
	              fullValues[token] = '';
	              return;
	            } else if (baseOnTwelveHours) {
	              if (apmValue === 'pm') {
	                value = hourValue < 12 ? hourValue + 12 : hourValue;
	              } else {
	                value = hourValue % 12;
	              }
	            } else {
	              value = hourValue % 24;
	            }
	            fullValues[token] = token === 'HH' && value < 10 ? '0' + value : String(value);
	            break;
	          case 'k':
	          case 'kk':
	            if (!String(hourValue).length) {
	              fullValues[token] = '';
	              return;
	            } else if (baseOnTwelveHours) {
	              if (apmValue === 'pm') {
	                value = hourValue < 12 ? hourValue + 12 : hourValue;
	              } else {
	                value = hourValue === 12 ? 24 : hourValue;
	              }
	            } else {
	              value = hourValue === 0 ? 24 : hourValue;
	            }
	            fullValues[token] = token === 'kk' && value < 10 ? '0' + value : String(value);
	            break;
	          case 'h':
	          case 'hh':
	            if (apmValue) {
	              value = hourValue;
	              apm = apmValue || 'am';
	            } else {
	              if (!String(hourValue).length) {
	                fullValues[token] = '';
	                fullValues.a = '';
	                fullValues.A = '';
	                return;
	              } else if (hourValue > 11) {
	                apm = 'pm';
	                value = hourValue === 12 ? 12 : hourValue % 12;
	              } else {
	                apm = 'am';
	                value = hourValue % 12 === 0 ? 12 : hourValue;
	              }
	            }
	            fullValues[token] = token === 'hh' && value < 10 ? '0' + value : String(value);
	            fullValues.a = apm;
	            fullValues.A = apm.toUpperCase();
	            break;
	        }
	      });
	
	      if (this.minute || this.minute === 0) {
	        var minuteValue = Number(this.minute);
	        fullValues.m = String(minuteValue);
	        fullValues.mm = minuteValue < 10 ? '0' + minuteValue : String(minuteValue);
	      } else {
	        fullValues.m = '';
	        fullValues.mm = '';
	      }
	
	      if (this.second || this.second === 0) {
	        var secondValue = Number(this.second) || 0;
	        fullValues.s = String(secondValue);
	        fullValues.ss = secondValue < 10 ? '0' + secondValue : String(secondValue);
	      } else {
	        fullValues.s = '';
	        fullValues.ss = '';
	      }
	
	      this.fullValues = fullValues;
	      this.updateTimeValue(fullValues);
	      this.$dispatch('vue-timepicker-update', fullValues);
	    },
	
	    updateTimeValue: function updateTimeValue(fullValues) {
	      if (!this.timeValue) {
	        // return the `fullValues` if `timeValue` is not set
	        this.$dispatch('change', { data: fullValues });
	        return;
	      }
	
	      this.muteWatch = true;
	
	      var self = this;
	      (0, _keys2.default)(this.timeValue).forEach(function (key) {
	        self.timeValue[key] = fullValues[key];
	      });
	
	      this.$nextTick(function () {
	        self.muteWatch = false;
	        self.$dispatch('change', { data: self.timeValue });
	      });
	    },
	
	    isTwelveHours: function isTwelveHours(token) {
	      return token === 'h' || token === 'hh';
	    },
	
	    toggleDropdown: function toggleDropdown() {
	      this.showDropdown = !this.showDropdown;
	    },
	
	    select: function select(type, value) {
	      if (type === 'hour') {
	        this.hour = value;
	      } else if (type === 'minute') {
	        this.minute = value;
	      } else if (type === 'second') {
	        this.second = value;
	      } else if (type === 'apm') {
	        this.apm = value;
	      }
	    },
	
	    showClearBtn: function showClearBtn() {
	      if (this.hour && this.hour !== '' || this.minute && this.minute !== '') {
	        return true;
	      } else {
	        return false;
	      }
	    },
	
	    clearTime: function clearTime() {
	      this.hour = '';
	      this.minute = '';
	      this.second = '';
	      this.apm = '';
	    }
	  }
	};
	// </script>
	
	// <style lang="less">
	// .time-picker {
	//   display: inline-block;
	//   position: relative;
	//   font-size: 1em;
	//   width: 10em;
	//   font-family: sans-serif;
	//   vertical-align: middle;
	// }
	
	// .time-picker * {
	//   box-sizing: border-box;
	// }
	
	// .time-picker input.display-time {
	//   border: 1px solid #d2d2d2;
	//   width: 10em;
	//   height: 2.2em;
	//   padding: 0.3em 0.5em;
	//   font-size: 1em;
	// }
	
	// .time-picker .clear-btn {
	//   position: absolute;
	//   display: flex;
	//   flex-flow: column nowrap;
	//   justify-content: center;
	//   align-items: center;
	//   top: 0;
	//   right: 0;
	//   bottom: 0;
	//   margin-top: -0.15em;
	//   z-index: 3;
	//   font-size: 1.1em;
	//   line-height: 1em;
	//   vertical-align: middle;
	//   width: 1.3em;
	//   color: #d2d2d2;
	//   background: rgba(255,255,255,0);
	//   text-align: center;
	//   font-style: normal;
	
	//   -webkit-transition: color .2s;
	//   transition: color .2s;
	// }
	
	// .time-picker .clear-btn:hover {
	//   color: #797979;
	//   cursor: pointer;
	// }
	
	// .time-picker .time-picker-overlay {
	//   z-index: 2;
	//   position: fixed;
	//   top: 0;
	//   left: 0;
	//   right: 0;
	//   bottom: 0;
	// }
	
	// .time-picker .dropdown {
	//   position: absolute;
	//   z-index: 5;
	//   top: 36px;
	//   left: 0;
	//   background: #fff;
	//   box-shadow: 0 1px 6px rgba(0,0,0,0.15);
	//   width: 10em;
	//   height: 10em;
	//   font-weight: normal;
	// }
	
	// .time-picker .dropdown .select-list {
	//   width: 10em;
	//   height: 10em;
	//   overflow: hidden;
	//   display: flex;
	//   flex-flow: row nowrap;
	//   align-items: stretch;
	//   justify-content: space-between;
	// }
	
	// .time-picker .dropdown ul {
	//   padding: 0;
	//   margin: 0;
	//   list-style: none;
	
	//   flex: 1;
	//   overflow-x: hidden;
	//   overflow-y: auto;
	// }
	
	// .time-picker .dropdown ul.minutes,
	// .time-picker .dropdown ul.seconds,
	// .time-picker .dropdown ul.apms{
	//   border-left: 1px solid #fff;
	// }
	
	// .time-picker .dropdown ul li {
	//   text-align: center;
	//   padding: 0.3em 0;
	//   color: #161616;
	// }
	
	// .time-picker .dropdown ul li:not(.hint):hover {
	//   background: rgba(0,0,0,.08);
	//   color: #161616;
	//   cursor: pointer;
	// }
	
	// .time-picker .dropdown ul li.active,
	// .time-picker .dropdown ul li.active:hover {
	//   background: #41B883;
	//   color: #fff;
	// }
	
	// .time-picker .dropdown .hint {
	//   color: #a5a5a5;
	//   cursor: default;
	//   font-size: 0.8em;
	// }
	// </style>
	
	/* generated by vue-loader */

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(147), __esModule: true };

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(148);
	module.exports = __webpack_require__(22).Object.keys;

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(119)
	  , $keys    = __webpack_require__(103);
	
	__webpack_require__(149)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(20)
	  , core    = __webpack_require__(22)
	  , fails   = __webpack_require__(31);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 150 */
/***/ function(module, exports) {

	module.exports = "\n<span class=\"time-picker\">\n  <input class=\"display-time\" v-model=\"displayTime\" @click=\"toggleDropdown\" type=\"text\" readonly />\n  <span class=\"clear-btn\" v-if=\"!hideClearButton\" v-show=\"!showDropdown && showClearBtn()\" @click=\"clearTime\">&times;</span>\n  <div class=\"time-picker-overlay\" v-if=\"showDropdown\" @click=\"toggleDropdown\"></div>\n  <div class=\"dropdown\" v-show=\"showDropdown\">\n    <div class=\"select-list\">\n      <ul class=\"hours\">\n        <li class=\"hint\" v-text=\"hourType\"></li>\n        <li v-for=\"hr in hours\" v-text=\"hr\" :class=\"{active: hour === hr}\" @click=\"select('hour', hr)\"></li>\n      </ul>\n      <ul class=\"minutes\">\n        <li class=\"hint\" v-text=\"minuteType\"></li>\n        <li v-for=\"m in minutes\" v-text=\"m\" :class=\"{active: minute === m}\" @click=\"select('minute', m)\"></li>\n      </ul>\n      <ul class=\"seconds\" v-if=\"secondType\">\n        <li class=\"hint\" v-text=\"secondType\"></li>\n        <li v-for=\"s in seconds\" v-text=\"s\" :class=\"{active: second === s}\" @click=\"select('second', s)\"></li>\n      </ul>\n      <ul class=\"apms\" v-if=\"apmType\">\n        <li class=\"hint\" v-text=\"apmType\"></li>\n        <li v-for=\"a in apms\" v-text=\"a\" :class=\"{active: apm === a}\" @click=\"select('apm', a)\"></li>\n      </ul>\n    </div>\n  </div>\n</span>\n";

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(152)
	__vue_script__ = __webpack_require__(154)
	__vue_template__ = __webpack_require__(155)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/cookfront/Sites/workspace/study/duiba-design/src/components/Daterangepicker.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(153);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.21.0/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/style-rewriter.js?id=_v-dc49321e&file=Daterangepicker.vue!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/selector.js?type=style&index=0!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./Daterangepicker.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.21.0/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/style-rewriter.js?id=_v-dc49321e&file=Daterangepicker.vue!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/selector.js?type=style&index=0!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./Daterangepicker.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".date-range {\n  position: relative;\n  border: 1px solid #ccc;\n  display: inline-block;\n  background-color: #fff;\n  height: 32px;\n  border-radius: 2px;\n}\n.date-range:hover {\n  border-color: #888;\n}\n.date-range .range-split {\n  display: inline-block;\n  vertical-align: top;\n  margin-top: 8px;\n  line-height: 16px;\n}\n.date-range .datepicker .form-control {\n  border: 0;\n  height: 32px;\n  line-height: 32px;\n}\n.date-range .date-range-error {\n  font-size: 12px;\n  color: #ff795c;\n  margin-top: 10px;\n  line-height: 1.5;\n  position: absolute;\n  bottom: -20px;\n  left: 0;\n}\n", "", {"version":3,"sources":["/./src/components/Daterangepicker.vue"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,uBAAuB;EACvB,sBAAsB;EACtB,uBAAuB;EACvB,aAAa;EACb,mBAAmB;CACpB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,sBAAsB;EACtB,oBAAoB;EACpB,gBAAgB;EAChB,kBAAkB;CACnB;AACD;EACE,UAAU;EACV,aAAa;EACb,kBAAkB;CACnB;AACD;EACE,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,iBAAiB;EACjB,mBAAmB;EACnB,cAAc;EACd,QAAQ;CACT","file":"Daterangepicker.vue","sourcesContent":[".date-range {\n  position: relative;\n  border: 1px solid #ccc;\n  display: inline-block;\n  background-color: #fff;\n  height: 32px;\n  border-radius: 2px;\n}\n.date-range:hover {\n  border-color: #888;\n}\n.date-range .range-split {\n  display: inline-block;\n  vertical-align: top;\n  margin-top: 8px;\n  line-height: 16px;\n}\n.date-range .datepicker .form-control {\n  border: 0;\n  height: 32px;\n  line-height: 32px;\n}\n.date-range .date-range-error {\n  font-size: 12px;\n  color: #ff795c;\n  margin-top: 10px;\n  line-height: 1.5;\n  position: absolute;\n  bottom: -20px;\n  left: 0;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Datepicker = __webpack_require__(82);
	
	var _Datepicker2 = _interopRequireDefault(_Datepicker);
	
	var _dateUtils = __webpack_require__(87);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div class="date-range" :error-show.sync="false">
	//     <datepicker :value.sync="start" :rangeflag="true" :on-change="selectDate('start')" placeholder="起始时间" :disabled-date="disabledDate" :width="width">
	//     </datepicker>
	//     <span class="range-split">-</span>
	//     <datepicker :value.sync="end" :rangeflag="true" :on-change="selectDate('end')" placeholder="结束时间" :disabled-date="disabledDate" :width="width">
	//     </datepicker>
	//     <p class="date-range-error" v-show="errorTip">{{errorTip}}</p>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  name: 'd-daterangepicker',
	
	  components: {
	    datepicker: _Datepicker2.default
	  },
	
	  props: {
	    start: {
	      type: String,
	      default: (0, _dateUtils.formatDate)()
	    },
	    end: {
	      type: String,
	      default: (0, _dateUtils.formatDate)()
	    },
	    range: {
	      type: Number,
	      default: null
	    },
	    disabledDate: {
	      type: Function,
	      default: function _default() {}
	    },
	    errorShow: {
	      type: Boolean,
	      default: false
	    },
	    width: {
	      type: String,
	      default: '200px'
	    }
	  },
	
	  watch: {
	    start: function start() {
	      var startTime = new Date(this.start);
	      var endTime = new Date(this.end);
	      if (startTime.getTime() > endTime.getTime()) {
	        this.end = this.start;
	      }
	    },
	    end: function end() {
	      var startTime = new Date(this.start);
	      var endTime = new Date(this.end);
	      if (endTime.getTime() < startTime.getTime()) {
	        this.start = this.end;
	      }
	    }
	  },
	
	  data: function data() {
	    return {
	      errorTip: ''
	    };
	  },
	
	
	  methods: {
	    selectDate: function selectDate(type) {
	      var _this = this;
	
	      return function (date) {
	        if (!_this.range) {
	          return;
	        }
	        var oneDay = 24 * 60 * 60 * 1000;
	        var startTime = new Date(_this.start);
	        var endTime = new Date(_this.end);
	        var range;
	        if (type === 'start') {
	          range = Math.round(Math.abs((endTime.getTime() - date.getTime()) / oneDay));
	        } else {
	          range = Math.round(Math.abs((date.getTime() - startTime.getTime()) / oneDay));
	        }
	        // 选择的是起始时间，且区间大于range
	        if (range > _this.range) {
	          if (_this.errorShow) {
	            _this.errorTip = '时间范围不能超过' + _this.range + '天';
	          } else {
	            if (type === 'start') {
	              endTime.setDate(endTime.getDate() - (range - _this.range));
	              _this.end = (0, _dateUtils.formatDate)(endTime);
	            } else {
	              startTime.setDate(startTime.getDate() + (range - _this.range));
	              _this.start = (0, _dateUtils.formatDate)(startTime);
	            }
	          }
	        } else {
	          _this.errorTip = '';
	        }
	      };
	    }
	  }
	};
	// </script>
	
	// <style lang="less">
	// .date-range {
	//   position: relative;
	//   border: 1px solid #ccc;
	//   display: inline-block;
	//   background-color: #fff;
	//   height: 32px;
	//   border-radius: 2px;
	//   &:hover {
	//      border-color: #888;
	//   }
	//   .range-split {
	//     display: inline-block;
	//     vertical-align: top;
	//     margin-top: 8px;
	//     line-height: 16px;
	//   }
	//   .datepicker .form-control {
	//     border: 0;
	//     height: 32px;
	//     line-height: 32px;
	//   }
	//   .date-range-error {
	//     font-size: 12px;
	//     color: #ff795c;
	//     margin-top: 10px;
	//     line-height: 1.5;
	//     position: absolute;
	//     bottom: -20px;
	//     left: 0;
	//   }
	// }
	// </style>
	
	/* generated by vue-loader */

/***/ },
/* 155 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"date-range\" :error-show.sync=\"false\">\n  <datepicker :value.sync=\"start\" :rangeflag=\"true\" :on-change=\"selectDate('start')\" placeholder=\"起始时间\" :disabled-date=\"disabledDate\" :width=\"width\">\n  </datepicker>\n  <span class=\"range-split\">-</span>\n  <datepicker :value.sync=\"end\" :rangeflag=\"true\" :on-change=\"selectDate('end')\" placeholder=\"结束时间\" :disabled-date=\"disabledDate\" :width=\"width\">\n  </datepicker>\n  <p class=\"date-range-error\" v-show=\"errorTip\">{{errorTip}}</p>\n</div>\n";

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(157)
	__vue_script__ = __webpack_require__(159)
	__vue_template__ = __webpack_require__(160)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/cookfront/Sites/workspace/study/duiba-design/src/components/Select.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(158);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.21.0/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/style-rewriter.js?id=_v-58e022d8&file=Select.vue!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/selector.js?type=style&index=0!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./Select.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.21.0/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/style-rewriter.js?id=_v-58e022d8&file=Select.vue!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/selector.js?type=style&index=0!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./Select.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".select-group {\n  width: 195px;\n  position: relative;\n  display: inline-block;\n}\n.select-group.disabled .select-toggle,\n.select-group[disabled] .select-toggle {\n  color: #d8d8d8;\n  cursor: not-allowed;\n  background: #f4f4f4;\n  border-color: #ececec;\n}\n.select-toggle {\n  display: block;\n  border: 1px solid #ccc;\n  background-color: #fff;\n  line-height: 32px;\n  font-size: 14px;\n  color: #444;\n  padding: 0 26px 0 14px;\n  position: relative;\n  cursor: pointer;\n  border-radius: 2px;\n}\n.select-toggle .iconhandle {\n  color: #888;\n  font-size: 12px;\n  position: absolute;\n  right: 14px;\n}\n.select-toggle:hover {\n  border-color: #888;\n}\n.select-toggle:hover .iconhandle {\n  color: #444;\n}\n.select-menu {\n  border: 1px solid #dedede;\n  background-color: #fff;\n  width: 100%;\n  max-height: 180px;\n  overflow-y: auto;\n  box-sizing: border-box;\n  position: absolute;\n  left: 0;\n  top: 34px;\n  z-index: 9999;\n  border-radius: 0 0 4px 4px;\n}\n.select-menu li {\n  border-bottom: 1px solid #ccc;\n}\n.select-menu li:last-child {\n  border: 0;\n}\n.select-menu li.active a,\n.select-menu li.active .iconhandle {\n  color: #444;\n}\n.select-menu a {\n  display: block;\n  position: relative;\n  padding-left: 32px;\n  line-height: 32px;\n  font-size: 14px;\n  cursor: pointer;\n  color: #888;\n}\n.select-menu a:hover {\n  background-color: #f9f9f9;\n  color: #444;\n}\n.select-menu .iconhandle {\n  font-size: 12px;\n  position: absolute;\n  left: 14px;\n}\n", "", {"version":3,"sources":["/./src/components/Select.vue"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,sBAAsB;CACvB;AACD;;EAEE,eAAe;EACf,oBAAoB;EACpB,oBAAoB;EACpB,sBAAsB;CACvB;AACD;EACE,eAAe;EACf,uBAAuB;EACvB,uBAAuB;EACvB,kBAAkB;EAClB,gBAAgB;EAChB,YAAY;EACZ,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;EAChB,mBAAmB;CACpB;AACD;EACE,YAAY;EACZ,gBAAgB;EAChB,mBAAmB;EACnB,YAAY;CACb;AACD;EACE,mBAAmB;CACpB;AACD;EACE,YAAY;CACb;AACD;EACE,0BAA0B;EAC1B,uBAAuB;EACvB,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,uBAAuB;EACvB,mBAAmB;EACnB,QAAQ;EACR,UAAU;EACV,cAAc;EACd,2BAA2B;CAC5B;AACD;EACE,8BAA8B;CAC/B;AACD;EACE,UAAU;CACX;AACD;;EAEE,YAAY;CACb;AACD;EACE,eAAe;EACf,mBAAmB;EACnB,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,gBAAgB;EAChB,YAAY;CACb;AACD;EACE,0BAA0B;EAC1B,YAAY;CACb;AACD;EACE,gBAAgB;EAChB,mBAAmB;EACnB,WAAW;CACZ","file":"Select.vue","sourcesContent":[".select-group {\n  width: 195px;\n  position: relative;\n  display: inline-block;\n}\n.select-group.disabled .select-toggle,\n.select-group[disabled] .select-toggle {\n  color: #d8d8d8;\n  cursor: not-allowed;\n  background: #f4f4f4;\n  border-color: #ececec;\n}\n.select-toggle {\n  display: block;\n  border: 1px solid #ccc;\n  background-color: #fff;\n  line-height: 32px;\n  font-size: 14px;\n  color: #444;\n  padding: 0 26px 0 14px;\n  position: relative;\n  cursor: pointer;\n  border-radius: 2px;\n}\n.select-toggle .iconhandle {\n  color: #888;\n  font-size: 12px;\n  position: absolute;\n  right: 14px;\n}\n.select-toggle:hover {\n  border-color: #888;\n}\n.select-toggle:hover .iconhandle {\n  color: #444;\n}\n.select-menu {\n  border: 1px solid #dedede;\n  background-color: #fff;\n  width: 100%;\n  max-height: 180px;\n  overflow-y: auto;\n  box-sizing: border-box;\n  position: absolute;\n  left: 0;\n  top: 34px;\n  z-index: 9999;\n  border-radius: 0 0 4px 4px;\n}\n.select-menu li {\n  border-bottom: 1px solid #ccc;\n}\n.select-menu li:last-child {\n  border: 0;\n}\n.select-menu li.active a,\n.select-menu li.active .iconhandle {\n  color: #444;\n}\n.select-menu a {\n  display: block;\n  position: relative;\n  padding-left: 32px;\n  line-height: 32px;\n  font-size: 14px;\n  cursor: pointer;\n  color: #888;\n}\n.select-menu a:hover {\n  background-color: #f9f9f9;\n  color: #444;\n}\n.select-menu .iconhandle {\n  font-size: 12px;\n  position: absolute;\n  left: 14px;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(37);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'd-select',
	
	  props: {
	    trigger: {
	      type: String,
	      default: 'hover'
	    },
	    idName: {
	      type: String,
	      default: 'id'
	    },
	    labelName: {
	      type: String,
	      default: 'label'
	    },
	    value: {
	      twoWay: true
	    },
	    options: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    }
	  },
	  data: function data() {
	    return {
	      show: false
	    };
	  },
	  ready: function ready() {
	    var _this = this;
	
	    var triger = this.$els.trigger;
	    var container = this.$els.container;
	    if (this.trigger === 'hover') {
	      this._mouseenterEvent = _EventListener2.default.listen(triger, 'mouseenter', function (e) {
	        _this.show = true;
	      });
	      this._mouseleaveEvent = _EventListener2.default.listen(container, 'mouseleave', function (e) {
	        _this.show = false;
	      });
	    } else {
	      this._clickEvent = _EventListener2.default.listen(triger, 'click', this.toggleDropdown);
	      this._documentEvent = _EventListener2.default.listen(document, 'click', function () {
	        _this.show = false;
	      });
	    }
	  },
	
	  computed: {
	    selectItem: function selectItem() {
	      var _this2 = this;
	
	      if (!!this.value) {
	        var item = this.options.filter(function (item) {
	          return (item.id || item[_this2.idName]) === _this2.value;
	        });
	        return item && item[0];
	      } else {
	        var first = this.options[0];
	        this.value = this.idName ? first && first[this.idName] : first && first.id;
	        return first;
	      }
	    }
	  },
	  methods: {
	    /**
	     * 选中某个值
	     */
	    select: function select(v) {
	      this.value = v;
	      this.toggleDropdown();
	      this.$emit('select', v);
	    },
	
	    /**
	     * 当前是否选中
	     */
	    isSelected: function isSelected(option) {
	      if (!this.value) {
	        return this.options.indexOf(option) === 0;
	      }
	      return this.value === (option.id || option[this.idName]);
	    },
	
	    /**
	     * 切换下拉框
	     */
	    toggleDropdown: function toggleDropdown(e) {
	      if (e) {
	        e.stopPropagation();
	      }
	      this.show = !this.show;
	    }
	  },
	  beforeDestory: function beforeDestory() {
	    if (this._mouseenterEvent) {
	      this._mouseenterEvent.remove();
	      this._mouseleaveEvent.remove();
	    }
	    if (this._clickEvent) {
	      this._clickEvent.remove();
	    }
	  }
	};
	// </script>
	
	// <style lang="less">
	// .select-group {
	//   width: 195px;
	//   position: relative;
	//   display: inline-block;
	
	//   &.disabled,
	//   &[disabled] {
	//     .select-toggle{
	//       color:#d8d8d8;
	//       cursor: not-allowed;
	//       background: #f4f4f4;
	//       border-color: #ececec;
	//     }
	//   }
	// }
	
	// .select-toggle {
	//   display: block;
	//   border: 1px solid #ccc;
	//   background-color: #fff;
	//   line-height: 32px;
	//   font-size: 14px;
	//   color: #444;
	//   padding: 0 26px 0 14px;
	//   position: relative;
	//   cursor: pointer;
	//   border-radius: 2px;
	
	//   .iconhandle {
	//     color: #888;
	//     font-size: 12px;
	//     position: absolute;
	//     right: 14px;
	//   }
	
	//   &:hover {
	//     border-color: #888;
	
	//     .iconhandle{
	//       color: #444;
	//     }
	//   }
	
	// }
	
	// .select-menu {
	//   border: 1px solid #dedede;
	//   background-color: #fff;
	//   width: 100%;
	//   max-height: 180px;
	//   overflow-y: auto;
	//   box-sizing: border-box;
	//   position: absolute;
	//   left: 0;
	//   top: 34px;
	//   z-index: 9999;
	//   border-radius:  0 0 4px 4px;
	
	//   li {
	//     border-bottom: 1px solid #ccc;
	
	//     &:last-child {
	//       border: 0;
	//     }
	
	//     &.active a,
	//     &.active .iconhandle{
	//       color: #444;
	//     }
	//   }
	
	//   a {
	//     display: block;
	//     position: relative;
	//     padding-left: 32px;
	//     line-height: 32px;
	//     font-size: 14px;
	//     cursor: pointer;
	//     color: #888;
	
	//     &:hover {
	//       background-color: #f9f9f9;
	//       color: #444;
	//     }
	//   }
	
	//   .iconhandle {
	//     font-size: 12px;
	//     position: absolute;
	//     left: 14px;
	//   }
	// }
	// </style>
	
	/* generated by vue-loader */
	// <template>
	// <div class="select-group" :class="{open: show}" v-el:container :disabled="disabled">
	//   <a class="select-toggle" v-el:trigger>
	//     {{selectItem && selectItem[labelName]}}
	//     <i class="iconhandle">&#xe618;</i>
	//   </a>
	//   <ul class="select-menu" v-show="!disabled && show">
	//     <template v-if="options.length">
	//       <li v-for="option in options" :id="option.id || option[idName]" :class="{'active': isSelected(option)}">
	//         <a @mousedown.prevent="select(option.id || option[idName])">
	//           <i class="iconhandle" v-show="isSelected(option)">&#xe610;</i>
	//           {{ option.label || option[labelName] }}
	//         </a>
	//       </li>
	//     </template>
	//   </ul>
	// </div>
	// </template>
	
	// <script>
	/* eslint-disable no-extra-boolean-cast */

/***/ },
/* 160 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"select-group\" :class=\"{open: show}\" v-el:container :disabled=\"disabled\">\n  <a class=\"select-toggle\" v-el:trigger>\n    {{selectItem && selectItem[labelName]}}\n    <i class=\"iconhandle\">&#xe618;</i>\n  </a>\n  <ul class=\"select-menu\" v-show=\"!disabled && show\">\n    <template v-if=\"options.length\">\n      <li v-for=\"option in options\" :id=\"option.id || option[idName]\" :class=\"{'active': isSelected(option)}\">\n        <a @mousedown.prevent=\"select(option.id || option[idName])\">\n          <i class=\"iconhandle\" v-show=\"isSelected(option)\">&#xe610;</i>\n          {{ option.label || option[labelName] }}\n        </a>\n      </li>\n    </template>\n  </ul>\n</div>\n";

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(162)
	__vue_template__ = __webpack_require__(163)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/cookfront/Sites/workspace/study/duiba-design/src/components/FileUpload.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof2 = __webpack_require__(88);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//     <div :class="{'file-uploads': true, 'file-uploads-html5': $mode == 'html5', 'file-uploads-html4': $mode == 'html4'}">
	//         <input-file></input-file>
	//     </div>
	// </template>
	
	// <script>
	/* eslint-disable */
	exports.default = {
	  name: 'd-fileupload',
	
	  props: {
	    title: {
	      type: String,
	      default: 'Upload file'
	    },
	    name: {
	      type: String,
	      default: 'file'
	    },
	    drop: {
	      default: false
	    },
	    extensions: {
	      default: function _default() {
	        return [];
	      }
	    },
	    formdata: {
	      default: function _default() {}
	    },
	    postAction: {
	      type: String
	    },
	    putAction: {
	      type: String
	    },
	    accept: {
	      type: String
	    },
	    multiple: {
	      type: Boolean
	    },
	    timeout: {
	      type: Number,
	      default: 0
	    },
	    size: {
	      type: Number
	    },
	    events: {
	      type: Object,
	      default: function _default() {}
	    }
	  },
	
	  components: {
	    inputFile: {
	      template: '<input type="file" :name="$parent.name" :id="$parent.id||$parent.name" :accept="$parent.accept" @change="change" :multiple="$parent.multiple && $parent.$mode == \'html5\'">',
	      methods: {
	        change: function change(e) {
	          this.$parent._addFileUploads(e.target);
	          this.$destroy();
	        }
	      }
	    }
	  },
	
	  data: function data() {
	    var data = this.formdata;
	    return {
	      files: [],
	      active: false,
	      uploaded: true,
	      dropActive: false,
	      dropElement: false,
	      request: {
	        data: data,
	        headers: {}
	      }
	    };
	  },
	  ready: function ready() {
	    this._drop(this.drop);
	  },
	  init: function init() {
	    var input = document.createElement('input');
	    input.type = 'file';
	    if (window.FormData && input.files) {
	      this.$mode = 'html4';
	    } else {
	      this.$mode = 'html4';
	    }
	    this._index = 0;
	    this._dropActive = 0;
	    this._files = {};
	  },
	  beforeDestroy: function beforeDestroy() {
	    this.active = false;
	    this.files = [];
	  },
	
	
	  watch: {
	    drop: function drop(value) {
	      this._drop(value);
	    },
	    files: function files(_files) {
	      var ids = [];
	      for (var i = 0; i < _files.length; i++) {
	        var file = _files[i];
	        if (!file.errno && !file.success) {
	          this.uploaded = false;
	        }
	        ids.push(file.id);
	      }
	      for (var id in this._files) {
	        if (ids.indexOf(id) != -1) {
	          continue;
	        }
	
	        var file = this._files[id]._file;
	
	        file.removed = true;
	        var xhr = this._files[id].xhr;
	        if (xhr) {
	          try {
	            xhr.abort();
	            xhr.timeout = 1;
	          } catch (e) {}
	        }
	        var iframe = this._files[id].iframe;
	        if (iframe) {
	          iframe.onabort({ type: 'abort' });
	        }
	        delete this._files[id];
	        this._uploadEvents('removeFileUpload', file);
	      }
	      this._index = 0;
	    },
	    active: function active(newValue, oldValue) {
	      if (newValue && !oldValue) {
	        this._fileUploads();
	      }
	    },
	    uploaded: function uploaded(_uploaded) {
	      if (_uploaded) {
	        this.active = false;
	      }
	    }
	  },
	
	  methods: {
	    clear: function clear() {
	      if (this.files.length) {
	        this.files.splice(0, this.files.length);
	      }
	    },
	    _uploadEvents: function _uploadEvents(name, file) {
	      this.$dispatch && this.$dispatch(name, file, this);
	      this[name] && this[name](file);
	      this.events && this.events[name] && this.events[name](file, this);
	    },
	    _drop: function _drop(value) {
	      if (this.dropElement && this.$mode === 'html5') {
	        try {
	          window.document.removeEventListener('dragenter', this._onDragenter, false);
	          window.document.removeEventListener('dragleave', this._onDragleave, false);
	          this.dropElement.removeEventListener('dragover', this._onDragover, false);
	          this.dropElement.removeEventListener('drop', this._onDrop, false);
	        } catch (e) {}
	      }
	
	      if (!value) {
	        this.dropElement = false;
	        return;
	      }
	
	      if (typeof value == 'string') {
	        this.dropElement = document.querySelector(value) || this.$root.$el.querySelector(value);
	      } else if (typeof value == 'boolean') {
	        this.dropElement = this.$parent.$el;
	      } else {
	        this.dropElement = this.drop;
	      }
	      if (this.dropElement && this.$mode === 'html5') {
	        window.document.addEventListener('dragenter', this._onDragenter, false);
	        window.document.addEventListener('dragleave', this._onDragleave, false);
	        this.dropElement.addEventListener('dragover', this._onDragover, false);
	        this.dropElement.addEventListener('drop', this._onDrop, false);
	      }
	    },
	    _onDragenter: function _onDragenter(e) {
	      this._dropActive++;
	      this.dropActive = !!this._dropActive;
	      e.preventDefault();
	    },
	    _onDragleave: function _onDragleave(e) {
	      e.preventDefault();
	      this._dropActive--;
	      if (e.target.nodeName == 'HTML' || e.screenX == 0 && e.screenY == 0) {
	        this.dropActive = !!this._dropActive;
	      }
	    },
	    _onDragover: function _onDragover(e) {
	      e.preventDefault();
	    },
	    _addFileUpload: function _addFileUpload(hiddenData, file) {
	      var defaultFile = {
	        size: -1,
	        name: 'Filename',
	        progress: '0.00',
	        speed: 0,
	        active: false,
	        error: '',
	        errno: '',
	        success: false,
	        data: {},
	        request: {
	          headers: {},
	          data: {}
	        }
	      };
	      for (var key in defaultFile) {
	        if (typeof file[key] == 'undefined') {
	          file[key] = defaultFile[key];
	        }
	      }
	      if (!file.id) {
	        file.id = Math.random().toString(36).substr(2);
	      }
	
	      if (!this.multiple) {
	        this.clear();
	      }
	
	      this._files[file.id] = hiddenData;
	      file = this.files[this.files.push(file) - 1];
	      this._files[file.id]._file = file;
	      this._uploadEvents('addFileUpload', file);
	    },
	    _onDrop: function _onDrop(e) {
	      this._dropActive = 0;
	      this.dropActive = false;
	      e.preventDefault();
	      if (e.dataTransfer.files.length) {
	        for (var i = 0; i < e.dataTransfer.files.length; i++) {
	          var file = e.dataTransfer.files[i];
	          this._addFileUpload({ file: file }, { size: file.size, name: file.name });
	          if (!this.multiple) {
	            break;
	          }
	        }
	      }
	    },
	    _addFileUploads: function _addFileUploads(el) {
	      var _this2 = this;
	
	      var Component = this.$options.components.inputFile;
	      new Component({
	        parent: this,
	        el: el
	      });
	      this.uploaded = false;
	
	      var reader = FileReader && new FileReader();
	      var _this = this;
	      if (el.files) {
	        var _loop = function _loop(i) {
	          var file = el.files[i];
	          if (_this2.accept.indexOf('image') !== -1) {
	            reader.readAsDataURL(file);
	            reader.onload = function (thefile) {
	              var img = new Image();
	              img.src = thefile.target.result;
	              img.onload = function () {
	                _this._addFileUpload({
	                  file: file,
	                  el: el
	                }, {
	                  size: file.size,
	                  name: file.name,
	                  width: this.width,
	                  height: this.height
	                });
	              };
	            };
	          } else {
	            _this2._addFileUpload({
	              file: file,
	              el: el
	            }, {
	              size: file.size,
	              name: file.name
	            });
	          }
	        };
	
	        for (var i = 0; i < el.files.length; i++) {
	          _loop(i);
	        }
	      } else {
	        this._addFileUpload({ el: el }, { size: -1, name: el.value.replace(/^.*?([^\/\\\r\n]+)$/, '$1') });
	      }
	    },
	    _fileUploads: function _fileUploads() {
	      if (!this.active) {
	        return;
	      }
	      for (; this._index < this.files.length; this._index++) {
	        var file = this.files[this._index];
	        if (file.active || file.success || file.errno) {
	          continue;
	        }
	        if (this.size && this.size > 0 && file.size >= 0 && file.size > this.size) {
	          file.error = 'Size';
	          file.errno = 'size';
	          continue;
	        }
	
	        if (this.extensions && (this.extensions.length || typeof this.extensions.length == 'undefined')) {
	          var extensions = this.extensions;
	          if ((typeof extensions === 'undefined' ? 'undefined' : (0, _typeof3.default)(extensions)) == 'object' && extensions instanceof RegExp) {} else {
	            if (typeof extensions == 'string') {
	              extensions = extensions.split(',').map(function (value) {
	                return value.trim();
	              }).filter(function (value) {
	                return value;
	              });
	            }
	            extensions = new RegExp('\\.(' + extensions.join('|').replace(/\./g, '\\.') + ')$', 'i');
	          }
	
	          if (file.name.search(extensions) == -1) {
	            file.error = 'Extension';
	            file.errno = 'extension';
	            continue;
	          }
	        }
	
	        if (this.$mode == 'html5') {
	          if (this.putAction || file.putAction) {
	            this._fileUploadPut(file);
	          } else if (this.postAction || file.postAction) {
	            this._fileUploadHtml5(file);
	          } else {
	            file.error = 'Not Support';
	            file.errno = 'not_support';
	            continue;
	          }
	        } else {
	          if (this.postAction || file.postAction) {
	            this._fileUploadHtml4(file);
	          } else {
	            file.error = 'Not Support';
	            file.errno = 'not_support';
	            continue;
	          }
	        }
	        return;
	      }
	      this.active = false;
	      this.uploaded = true;
	    },
	    _fileUploadXhr: function _fileUploadXhr(xhr, file, data) {
	      var _self = this;
	      var hiddenData = this._files[file.id];
	      var fileUploads = false;
	      var speedTime = 0;
	      var speedLoaded = 0;
	      xhr.upload.onprogress = function (e) {
	        if (file.removed) {
	          xhr.abort();
	          return;
	        }
	        if (!_self.active || !file.active) {
	          xhr.abort();
	          return;
	        }
	        if (e.lengthComputable) {
	          file.progress = (e.loaded / e.total * 100).toFixed(2);
	          var speedTime2 = Math.round(Date.now() / 1000);
	          if (speedTime2 != speedTime) {
	            file.speed = e.loaded - speedLoaded;
	            speedLoaded = e.loaded;
	            speedTime = speedTime2;
	          }
	        }
	        _self._uploadEvents('fileUploadProgress', file);
	      };
	
	      var callback = function callback(e) {
	        switch (e.type) {
	          case 'timeout':
	            file.errno = 'timeout';
	            file.error = 'Timeout';
	            break;
	          case 'abort':
	            file.errno = 'abort';
	            file.error = 'Abort';
	            break;
	          case 'error':
	            if (!xhr.status) {
	              file.errno = 'network';
	              file.error = 'Network';
	            } else if (xhr.status >= 500) {
	              file.errno = 'server';
	              file.error = 'Server';
	            } else if (xhr.status >= 400) {
	              file.errno = 'denied';
	              file.error = 'Denied';
	            }
	            break;
	          default:
	            if (xhr.status >= 500) {
	              file.errno = 'server';
	              file.error = 'Server';
	            } else if (xhr.status >= 400) {
	              file.errno = 'denied';
	              file.error = 'Denied';
	            } else {
	              file.progress = '100.00';
	              file.success = true;
	            }
	        }
	        file.active = false;
	        if (xhr.responseText) {
	          var contentType = xhr.getResponseHeader('Content-Type');
	          if (contentType && contentType.indexOf('/json') != -1) {
	            file.data = JSON.parse(xhr.responseText);
	          } else {
	            file.data = xhr.responseText;
	          }
	        }
	        if (!fileUploads) {
	          fileUploads = true;
	          if (!file.removed) {
	            _self._uploadEvents('afterFileUpload', file);
	          }
	          setTimeout(function () {
	            _self._fileUploads();
	          }, 50);
	        }
	      };
	
	      xhr.onload = callback;
	      xhr.onerror = callback;
	      xhr.onabort = callback;
	      xhr.ontimeout = callback;
	
	      if (this.timeout) {
	        xhr.timeout = this.timeout;
	      }
	
	      xhr.onload = callback;
	      xhr.onerror = callback;
	      xhr.onabort = callback;
	      xhr.ontimeout = callback;
	
	      if (this.timeout) {
	        xhr.timeout = this.timeout;
	      }
	
	      xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	      for (var key in this.request.headers) {
	        xhr.setRequestHeader(key, this.request.headers[key]);
	      }
	      for (var key in file.request.headers) {
	        xhr.setRequestHeader(key, file.request.headers[key]);
	      }
	
	      xhr.send(data);
	      file.active = true;
	      hiddenData.xhr = xhr;
	      var interval = setInterval(function () {
	        if (!_self.active || !file.active || file.success || file.errno) {
	          clearInterval(interval);
	          if (!file.success && !file.errno) {
	            xhr.abort();
	          }
	        }
	      }, 100);
	      this._uploadEvents('beforeFileUpload', file);
	    },
	    _fileUploadPut: function _fileUploadPut(file) {
	      var _self = this;
	
	      var querys = {};
	      for (var key in this.request.data) {
	        querys[key] = this.request.data[key];
	      }
	      for (var _key in file.request.data) {
	        querys[_key] = file.request.data[_key];
	      }
	      var queryArray = [];
	      for (var _key2 in querys) {
	        if (querys[_key2] !== null && typeof querys[_key2] !== 'undefined') {
	          queryArray.push(encodeURIComponent(_key2) + '=' + encodeURIComponent(querys[_key2]));
	        }
	      }
	      var queryString = queryArray.length ? '?' + queryArray.join('&') : '';
	
	      var xhr = new XMLHttpRequest();
	      xhr.open('PUT', (file.putAction || this.putAction) + queryString);
	      this._fileUploadXhr(xhr, file, this._files[file.id].file);
	    },
	    _fileUploadHtml5: function _fileUploadHtml5(file) {
	      var form = new window.FormData();
	      form.append(this.name, this._files[file.id].file);
	      for (var key in this.request.data) {
	        form.append(key, this.request.data[key]);
	      }
	
	      for (var key in file.request.data) {
	        form.append(key, file.request.data[key]);
	      }
	
	      var xhr = new XMLHttpRequest();
	      xhr.open('POST', file.postAction || this.postAction);
	      this._fileUploadXhr(xhr, file, form);
	    },
	    _fileUploadHtml4: function _fileUploadHtml4(file) {
	      var _self = this;
	      var hiddenData = this._files[file.id];
	
	      var fileUploads = false;
	
	      var keydown = function keydown(e) {
	        if (e.keyCode == 27) {
	          e.preventDefault();
	        }
	      };
	
	      var iframe = document.createElement('iframe');
	      iframe.id = 'upload-iframe-' + file.id;
	      iframe.name = 'upload-iframe-' + file.id;
	      iframe.src = 'about:blank';
	      iframe.style.width = '1px';
	      iframe.style.height = '1px';
	      iframe.style.top = '-9999px';
	      iframe.style.left = '-9999px';
	      iframe.style.position = 'absolute';
	      iframe.style.marginTop = '-9999em';
	
	      var form = document.createElement('form');
	      form.action = file.postAction || this.postAction;
	      form.name = 'upload-form-' + file.id;
	      form.setAttribute('method', 'POST');
	      form.setAttribute('target', 'upload-iframe-' + file.id);
	      form.setAttribute('enctype', 'multipart/form-data');
	      form.appendChild(hiddenData.el);
	      for (var key in this.request.data) {
	        var input = document.createElement('input');
	        input.type = 'hidden';
	        input.name = key;
	        input.value = this.request.data[key];
	        form.appendChild(input);
	      }
	
	      for (var key in file.request.data) {
	        var input = document.createElement('input');
	        input.type = 'hidden';
	        input.name = key;
	        input.value = file.request.data[key];
	        form.appendChild(input);
	      }
	
	      var getDocumentData = function getDocumentData() {
	        var doc;
	        try {
	          if (iframe.contentWindow) {
	            doc = iframe.contentWindow.document;
	          }
	        } catch (err) {}
	        if (!doc) {
	          try {
	            doc = iframe.contentDocument ? iframe.contentDocument : iframe.document;
	          } catch (err) {
	            doc = iframe.document;
	          }
	        }
	        if (doc && doc.body) {
	          return doc.body.innerText;
	        }
	        return null;
	      };
	
	      var callback = function callback(e) {
	        switch (e.type) {
	          case 'abort':
	            file.errno = 'abort';
	            file.error = 'Abort';
	            break;
	          case 'error':
	            var data = getDocumentData();
	            if (file.errno) {} else if (data === null) {
	              file.errno = 'network';
	              file.error = 'Network';
	            } else {
	              file.errno = 'denied';
	              file.error = 'Denied';
	            }
	            break;
	          default:
	            var data = getDocumentData();
	            if (file.errno) {} else if (data === null) {
	              file.errno = 'network';
	              file.error = 'Network';
	            } else {
	              file.progress = '100.00';
	              file.success = true;
	            }
	        }
	
	        file.active = false;
	        if (typeof data != "undefined") {
	          if (data && data.substr(0, 1) == '{' && data.substr(data.length - 1, 1) == '}') {
	            try {
	              data = JSON.parse(data);
	            } catch (err) {}
	          }
	          file.data = data;
	        }
	        if (!fileUploads) {
	          document.body.removeEventListener('keydown', keydown);
	          document.body.removeEventListener('keydown', keydown);
	          fileUploads = true;
	          iframe.parentNode && iframe.parentNode.removeChild(iframe);
	          if (!file.removed) {
	            _self._uploadEvents('afterFileUpload', file);
	          }
	          setTimeout(function () {
	            _self._fileUploads();
	          }, 50);
	        }
	      };
	
	      setTimeout(function () {
	        document.body.appendChild(iframe).appendChild(form).submit();
	        iframe.onload = callback;
	        iframe.onerror = callback;
	        iframe.onabort = callback;
	
	        file.active = true;
	
	        hiddenData.iframe = iframe;
	
	        document.body.addEventListener('keydown', keydown);
	        var interval = setInterval(function () {
	          if (!_self.active || !file.active || file.success || file.errno) {
	            clearInterval(interval);
	            if (!file.success && !file.errno) {
	              iframe.onabort({ type: 'abort' });
	            }
	          }
	        }, 50);
	        _self._uploadEvents('beforeFileUpload', file);
	      }, 10);
	    }
	  }
	};
	// </script>
	
	/* generated by vue-loader */

/***/ },
/* 163 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"{'file-uploads': true, 'file-uploads-html5': $mode == 'html5', 'file-uploads-html4': $mode == 'html4'}\">\n    <input-file></input-file>\n</div>\n";

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(165)
	__vue_script__ = __webpack_require__(167)
	__vue_template__ = __webpack_require__(169)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/cookfront/Sites/workspace/study/duiba-design/src/components/ImageUpload.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(166);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.21.0/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/style-rewriter.js?id=_v-f4928de0&file=ImageUpload.vue!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/selector.js?type=style&index=0!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./ImageUpload.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.21.0/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/style-rewriter.js?id=_v-f4928de0&file=ImageUpload.vue!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/selector.js?type=style&index=0!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./ImageUpload.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".d-image-upload-container .img {\n  padding: 5px;\n  border: 1px solid #e5e5e5;\n  display: inline-block;\n  float: left;\n}\n.d-image-upload-container .img img {\n  opacity: 0;\n}\n.d-image-upload-container .img p {\n  min-width: 100px;\n  min-height: 100px;\n  background: #d8d8d8 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAAuCAMAAACiV5+BAAAAgVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9d3yJTAAAAKnRSTlMAS/Di+/hZBYSSRSIczMb06+coct3QuqegmV06Lg99T7uxnH53aGc4EgzK062bAAABXklEQVRIx63V2W6DMBBA0SnYsc0OgbAlzb7N/39gFbeKRAkDBt+nPB1NNCMMZI/mFCaMJeGpecDctiXHd7zczkKeNf6rfpordxd7uXdTxYvxQ7FnqHD8GDdyggQHSgIDJsLBounKDYluUxXhUowrJjIrJFtNZI40c4SR/EbWlTrHNBOfVVXLxh9YsszRqFz2l79THI3jatdVvBRnlXaues2QKCSuka3h3YVC2LeANfGPL5PuJNRfqywavSM/pkfREQPFv6vfkKPo6IE2eknjo4wN5FHDMLl6Bbr966fkg+MEDMkc0LnkMgO44nIGr1DaYEoobDAFODYYB5gNhgG3wXBIbTApRDaYCJQNRsHeBrMH4SxnHAGgcHEKAAK+VOH6oZFLGQmvRLFMKQTo/GSJkvjwV5bOV9IM3vn5XCX3O094NU+pdtCtPZgjhxb6ZTJk0wkWygwGEu3XxNruE/YD6t9ijjcy+L4AAAAASUVORK5CYII=) no-repeat 50%;\n}\n.d-image-upload-container .img-uploaded img {\n  display: block;\n  width: 100%;\n  opacity: 1;\n}\n.d-image-upload-container .upload-area {\n  display: table;\n  padding-left: 20px;\n  min-height: 112px;\n}\n.d-image-upload-container .upload-area p {\n  font-size: 14px;\n  margin-bottom: 15px;\n  color: #888;\n}\n.d-image-upload-container .upload-cell {\n  display: table-cell;\n  vertical-align: middle;\n}\n.d-image-upload-container .upload-btn {\n  position: relative;\n}\n.d-image-upload-container .file-upload {\n  width: 78px;\n  height: 30px;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.d-image-upload-container .file-upload input {\n  z-index: 1;\n  opacity: 0;\n  font-size: 20em;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n}\n.d-image-upload-container .invalid {\n  color: #ffc4b8;\n  font-size: 12px;\n  margin: 10px 0 0;\n}\n", "", {"version":3,"sources":["/./src/components/ImageUpload.vue"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,0BAA0B;EAC1B,sBAAsB;EACtB,YAAY;CACb;AACD;EACE,WAAW;CACZ;AACD;EACE,iBAAiB;EACjB,kBAAkB;EAClB,k2BAAk2B;CACn2B;AACD;EACE,eAAe;EACf,YAAY;EACZ,WAAW;CACZ;AACD;EACE,eAAe;EACf,mBAAmB;EACnB,kBAAkB;CACnB;AACD;EACE,gBAAgB;EAChB,oBAAoB;EACpB,YAAY;CACb;AACD;EACE,oBAAoB;EACpB,uBAAuB;CACxB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,OAAO;EACP,QAAQ;CACT;AACD;EACE,WAAW;EACX,WAAW;EACX,gBAAgB;EAChB,OAAO;EACP,QAAQ;EACR,SAAS;EACT,UAAU;EACV,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,gBAAgB;CACjB;AACD;EACE,eAAe;EACf,gBAAgB;EAChB,iBAAiB;CAClB","file":"ImageUpload.vue","sourcesContent":[".d-image-upload-container .img {\n  padding: 5px;\n  border: 1px solid #e5e5e5;\n  display: inline-block;\n  float: left;\n}\n.d-image-upload-container .img img {\n  opacity: 0;\n}\n.d-image-upload-container .img p {\n  min-width: 100px;\n  min-height: 100px;\n  background: #d8d8d8 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAAuCAMAAACiV5+BAAAAgVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9d3yJTAAAAKnRSTlMAS/Di+/hZBYSSRSIczMb06+coct3QuqegmV06Lg99T7uxnH53aGc4EgzK062bAAABXklEQVRIx63V2W6DMBBA0SnYsc0OgbAlzb7N/39gFbeKRAkDBt+nPB1NNCMMZI/mFCaMJeGpecDctiXHd7zczkKeNf6rfpordxd7uXdTxYvxQ7FnqHD8GDdyggQHSgIDJsLBounKDYluUxXhUowrJjIrJFtNZI40c4SR/EbWlTrHNBOfVVXLxh9YsszRqFz2l79THI3jatdVvBRnlXaues2QKCSuka3h3YVC2LeANfGPL5PuJNRfqywavSM/pkfREQPFv6vfkKPo6IE2eknjo4wN5FHDMLl6Bbr966fkg+MEDMkc0LnkMgO44nIGr1DaYEoobDAFODYYB5gNhgG3wXBIbTApRDaYCJQNRsHeBrMH4SxnHAGgcHEKAAK+VOH6oZFLGQmvRLFMKQTo/GSJkvjwV5bOV9IM3vn5XCX3O094NU+pdtCtPZgjhxb6ZTJk0wkWygwGEu3XxNruE/YD6t9ijjcy+L4AAAAASUVORK5CYII=) no-repeat 50%;\n}\n.d-image-upload-container .img-uploaded img {\n  display: block;\n  width: 100%;\n  opacity: 1;\n}\n.d-image-upload-container .upload-area {\n  display: table;\n  padding-left: 20px;\n  min-height: 112px;\n}\n.d-image-upload-container .upload-area p {\n  font-size: 14px;\n  margin-bottom: 15px;\n  color: #888;\n}\n.d-image-upload-container .upload-cell {\n  display: table-cell;\n  vertical-align: middle;\n}\n.d-image-upload-container .upload-btn {\n  position: relative;\n}\n.d-image-upload-container .file-upload {\n  width: 78px;\n  height: 30px;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.d-image-upload-container .file-upload input {\n  z-index: 1;\n  opacity: 0;\n  font-size: 20em;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n}\n.d-image-upload-container .invalid {\n  color: #ffc4b8;\n  font-size: 12px;\n  margin: 10px 0 0;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ImageUploadMixins = __webpack_require__(168);
	
	var _ImageUploadMixins2 = _interopRequireDefault(_ImageUploadMixins);
	
	var _Button = __webpack_require__(8);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div class="d-image-upload-container">
	//     <div class="img" v-bind:class="{
	//       'img-uploaded': !!value
	//     }">
	//       <p>
	//         <img :src="value" alt="">
	//       </p>
	//     </div>
	//     <div class="upload-area">
	//       <div class="upload-cell">
	//         <slot name="upload-tip">
	//         </slot>
	//         <div class="upload-btn">
	//           <fileupload class="file-upload" name="file" :post-action="uploadUrl" :put-action="uploadUrl" :extensions="extensions" :accept="accept" :size="size"></fileupload>
	//           <d-button>选择上传</d-button>
	//         </div>
	//       </div>
	//     </div>
	//     <p class="invalid" v-show="errorTip">
	//       <i class="iconhandle">&#xe62a;</i>
	//       {{errorTip}}
	//     </p>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  name: 'd-imageupload',
	
	  components: {
	    DButton: _Button2.default
	  },
	
	  mixins: [_ImageUploadMixins2.default],
	
	  props: {
	    uploadUrl: {
	      type: String,
	      default: '/upload/image'
	    },
	    value: {
	      type: String,
	      twoWay: true,
	      default: ''
	    }
	  },
	
	  methods: {
	    afterFileUpload: function afterFileUpload(file) {
	      this.value = file.data.data.value;
	      this.$emit('uploaded', this.value);
	    }
	  }
	};
	// </script>
	
	// <style lang="less">
	// .d-image-upload-container {
	//   .img {
	//     padding: 5px;
	//     border: 1px solid #e5e5e5;
	//     display: inline-block;
	//     float: left;
	
	//     img {
	//       opacity: 0;
	//     }
	
	//     p {
	//       min-width: 100px;
	//       min-height: 100px;
	//       background: #d8d8d8 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAAuCAMAAACiV5+BAAAAgVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9d3yJTAAAAKnRSTlMAS/Di+/hZBYSSRSIczMb06+coct3QuqegmV06Lg99T7uxnH53aGc4EgzK062bAAABXklEQVRIx63V2W6DMBBA0SnYsc0OgbAlzb7N/39gFbeKRAkDBt+nPB1NNCMMZI/mFCaMJeGpecDctiXHd7zczkKeNf6rfpordxd7uXdTxYvxQ7FnqHD8GDdyggQHSgIDJsLBounKDYluUxXhUowrJjIrJFtNZI40c4SR/EbWlTrHNBOfVVXLxh9YsszRqFz2l79THI3jatdVvBRnlXaues2QKCSuka3h3YVC2LeANfGPL5PuJNRfqywavSM/pkfREQPFv6vfkKPo6IE2eknjo4wN5FHDMLl6Bbr966fkg+MEDMkc0LnkMgO44nIGr1DaYEoobDAFODYYB5gNhgG3wXBIbTApRDaYCJQNRsHeBrMH4SxnHAGgcHEKAAK+VOH6oZFLGQmvRLFMKQTo/GSJkvjwV5bOV9IM3vn5XCX3O094NU+pdtCtPZgjhxb6ZTJk0wkWygwGEu3XxNruE/YD6t9ijjcy+L4AAAAASUVORK5CYII=) no-repeat 50%
	//     }
	//   }
	
	//   .img-uploaded {
	//     img {
	//       display: block;
	//       width: 100%;
	//       opacity: 1;
	//     }
	//   }
	
	//   .upload-area {
	//     display: table;
	//     padding-left: 20px;
	//     min-height: 112px;
	
	//     p {
	//       font-size: 14px;
	//       margin-bottom: 15px;
	//       color: #888;
	//     }
	//   }
	
	//   .upload-cell {
	//     display: table-cell;
	//     vertical-align: middle;
	//   }
	
	//   .upload-btn {
	//     position: relative;
	//   }
	
	//   .file-upload {
	//     width: 78px;
	//     height: 30px;
	//     position: absolute;
	//     top: 0;
	//     left: 0;
	
	//     input {
	//       z-index: 1;
	//       opacity: 0;
	//       font-size: 20em;
	//       top: 0;
	//       left: 0;
	//       right: 0;
	//       bottom: 0;
	//       position: absolute;
	//       width: 100%;
	//       height: 100%;
	//       cursor: pointer;
	//     }
	//   }
	
	//   .invalid {
	//     color: #ffc4b8;
	//     font-size: 12px;
	//     margin: 10px 0 0;
	//   }
	// }
	// </style>
	
	/* generated by vue-loader */

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _FileUpload = __webpack_require__(161);
	
	var _FileUpload2 = _interopRequireDefault(_FileUpload);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
	    fileupload: _FileUpload2.default
	  },
	
	  props: {
	    width: {
	      type: Number,
	      required: true
	    },
	    height: {
	      type: Number,
	      default: 'auto'
	    },
	    size: {
	      type: Number,
	      default: 1024 * 1024
	    },
	    extensions: {
	      type: String,
	      default: 'jpg,png,jpeg'
	    },
	    errorTip: {
	      type: String,
	      default: ''
	    }
	  },
	
	  computed: {
	    accept: function accept() {
	      var str = [];
	      if (this.extensions.indexOf('jpg') !== -1) {
	        str.push('image/jpg');
	      }
	      if (this.extensions.indexOf('jpeg') !== -1) {
	        str.push('image/jpeg');
	      }
	      if (this.extensions.indexOf('png') !== -1) {
	        str.push('image/png');
	      }
	      if (this.extensions.indexOf('gif') !== -1) {
	        str.push('image/gif');
	      }
	      return str.join(',');
	    }
	  },
	
	  events: {
	    addFileUpload: 'addFileUpload',
	    afterFileUpload: 'afterFileUpload'
	  },
	
	  methods: {
	    addFileUpload: function addFileUpload(file, component) {
	      this.errorTip = '';
	      var nameType = false;
	      var extArray = this.extensions.split(',');
	      extArray.forEach(function (item) {
	        if (file.name.indexOf(item) !== -1 && !nameType) {
	          nameType = true;
	        }
	      });
	      if (!nameType) {
	        this.errorTip = '上传的图片格式不符合要求';
	        return;
	      }
	
	      if (file.size > this.size) {
	        this.errorTip = '图片大小超过上传大小';
	        return;
	      }
	      if (this.width && +file.width !== +this.width || this.height && +file.height !== +this.height) {
	        this.errorTip = '上传的图片尺寸不符合要求';
	        return;
	      }
	      component.active = true;
	    }
	  }
	};

/***/ },
/* 169 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"d-image-upload-container\">\n  <div class=\"img\" v-bind:class=\"{\n    'img-uploaded': !!value\n  }\">\n    <p>\n      <img :src=\"value\" alt=\"\">\n    </p>\n  </div>\n  <div class=\"upload-area\">\n    <div class=\"upload-cell\">\n      <slot name=\"upload-tip\">\n      </slot>\n      <div class=\"upload-btn\">\n        <fileupload class=\"file-upload\" name=\"file\" :post-action=\"uploadUrl\" :put-action=\"uploadUrl\" :extensions=\"extensions\" :accept=\"accept\" :size=\"size\"></fileupload>\n        <d-button>选择上传</d-button>\n      </div>\n    </div>\n  </div>\n  <p class=\"invalid\" v-show=\"errorTip\">\n    <i class=\"iconhandle\">&#xe62a;</i>\n    {{errorTip}}\n  </p>\n</div>\n";

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(171)
	__vue_script__ = __webpack_require__(173)
	__vue_template__ = __webpack_require__(174)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/cookfront/Sites/workspace/study/duiba-design/src/components/MultiImageUpload.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(172);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.21.0/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/style-rewriter.js?id=_v-1b55a59f&file=MultiImageUpload.vue!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/selector.js?type=style&index=0!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./MultiImageUpload.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.21.0/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/style-rewriter.js?id=_v-1b55a59f&file=MultiImageUpload.vue!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/selector.js?type=style&index=0!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./MultiImageUpload.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".multi-image-upload .uploaded-image,\n.multi-image-upload .add-image-container {\n  float: left;\n}\n.multi-image-upload li {\n  float: left;\n  padding: 3px;\n  position: relative;\n  background-color: #fff;\n  border: 1px solid #e5e5e5;\n  margin-right: 15px;\n  margin-bottom: 15px;\n}\n.multi-image-upload img {\n  display: block;\n}\n.multi-image-upload .remove-icon {\n  position: absolute;\n  top: -8px;\n  right: -8px;\n  color: #ccc;\n  cursor: pointer;\n}\n.multi-image-upload .add-image-container {\n  padding: 3px;\n  border: 1px solid #e5e5e5;\n  position: relative;\n}\n.multi-image-upload .add-image-btn {\n  display: block;\n  background-color: #d8d8d8;\n  text-align: center;\n  color: #fff;\n  min-width: 100px;\n}\n.multi-image-upload .file-upload {\n  position: absolute;\n  top: 0;\n  left: 0;\n  min-width: 100px;\n  height: 100px;\n}\n.multi-image-upload .file-upload input {\n  z-index: 1;\n  opacity: 0;\n  font-size: 20em;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n}\n.multi-image-upload .invalid {\n  clear: both;\n  font-size: 14px;\n  color: #ff795c;\n  padding-top: 10px;\n}\n", "", {"version":3,"sources":["/./src/components/MultiImageUpload.vue"],"names":[],"mappings":"AAAA;;EAEE,YAAY;CACb;AACD;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,0BAA0B;EAC1B,mBAAmB;EACnB,oBAAoB;CACrB;AACD;EACE,eAAe;CAChB;AACD;EACE,mBAAmB;EACnB,UAAU;EACV,YAAY;EACZ,YAAY;EACZ,gBAAgB;CACjB;AACD;EACE,aAAa;EACb,0BAA0B;EAC1B,mBAAmB;CACpB;AACD;EACE,eAAe;EACf,0BAA0B;EAC1B,mBAAmB;EACnB,YAAY;EACZ,iBAAiB;CAClB;AACD;EACE,mBAAmB;EACnB,OAAO;EACP,QAAQ;EACR,iBAAiB;EACjB,cAAc;CACf;AACD;EACE,WAAW;EACX,WAAW;EACX,gBAAgB;EAChB,OAAO;EACP,QAAQ;EACR,SAAS;EACT,UAAU;EACV,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,gBAAgB;CACjB;AACD;EACE,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf,kBAAkB;CACnB","file":"MultiImageUpload.vue","sourcesContent":[".multi-image-upload .uploaded-image,\n.multi-image-upload .add-image-container {\n  float: left;\n}\n.multi-image-upload li {\n  float: left;\n  padding: 3px;\n  position: relative;\n  background-color: #fff;\n  border: 1px solid #e5e5e5;\n  margin-right: 15px;\n  margin-bottom: 15px;\n}\n.multi-image-upload img {\n  display: block;\n}\n.multi-image-upload .remove-icon {\n  position: absolute;\n  top: -8px;\n  right: -8px;\n  color: #ccc;\n  cursor: pointer;\n}\n.multi-image-upload .add-image-container {\n  padding: 3px;\n  border: 1px solid #e5e5e5;\n  position: relative;\n}\n.multi-image-upload .add-image-btn {\n  display: block;\n  background-color: #d8d8d8;\n  text-align: center;\n  color: #fff;\n  min-width: 100px;\n}\n.multi-image-upload .file-upload {\n  position: absolute;\n  top: 0;\n  left: 0;\n  min-width: 100px;\n  height: 100px;\n}\n.multi-image-upload .file-upload input {\n  z-index: 1;\n  opacity: 0;\n  font-size: 20em;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n}\n.multi-image-upload .invalid {\n  clear: both;\n  font-size: 14px;\n  color: #ff795c;\n  padding-top: 10px;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ImageUploadMixins = __webpack_require__(168);
	
	var _ImageUploadMixins2 = _interopRequireDefault(_ImageUploadMixins);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'd-multi-imageupload',
	
	  mixins: [_ImageUploadMixins2.default],
	
	  props: {
	    values: {
	      type: Array,
	      default: function _default() {
	        return [];
	      },
	      twoWay: true
	    },
	    max: {
	      type: Number,
	      default: 5
	    },
	    uploadUrl: {
	      type: String,
	      default: '/upload/image'
	    }
	  },
	
	  methods: {
	    afterFileUpload: function afterFileUpload(file) {
	      this.values.push(file.data.data.url);
	      this.$emit('uploaded', this.url);
	    },
	
	    /**
	     * 移除某张图片
	     */
	    removeImage: function removeImage(index) {
	      this.values.splice(index, 1);
	    }
	  }
	};
	// </script>
	
	// <style lang="less">
	// .multi-image-upload {
	
	//   .uploaded-image,
	//   .add-image-container {
	//     float: left;
	//   }
	
	//   li {
	//     float: left;
	//     padding: 3px;
	//     position: relative;
	//     background-color: #fff;
	//     border: 1px solid #e5e5e5;
	//     margin-right: 15px;
	//     margin-bottom: 15px;
	//   }
	
	//   img {
	//     display: block;
	//   }
	
	//   .remove-icon {
	//     position: absolute;
	//     top: -8px;
	//     right: -8px;
	//     color: #ccc;
	//     cursor: pointer;
	//   }
	
	//   .add-image-container {
	//     padding: 3px;
	//     border: 1px solid #e5e5e5;
	//     position: relative;
	//   }
	
	//   .add-image-btn {
	//     display: block;
	//     background-color: #d8d8d8;
	//     text-align: center;
	//     color: #fff;
	//     min-width: 100px;
	//   }
	
	//   .file-upload {
	//     position: absolute;
	//     top: 0;
	//     left: 0;
	//     min-width: 100px;
	//     height: 100px;
	
	//     input {
	//       z-index: 1;
	//       opacity: 0;
	//       font-size: 20em;
	//       top: 0;
	//       left: 0;
	//       right: 0;
	//       bottom: 0;
	//       position: absolute;
	//       width: 100%;
	//       height: 100%;
	//       cursor: pointer;
	//     }
	//   }
	
	//   .invalid {
	//     clear: both;
	//     font-size: 14px;
	//     color: #ff795c;
	//     padding-top: 10px;
	//   }
	// }
	// </style>
	
	/* generated by vue-loader */
	// <template>
	//   <div class="multi-image-upload">
	//     <ul class="uploaded-image">
	//       <li track-by="$index" v-for="(index, img) in values">
	//         <img :src="img">
	//         <i class="iconhandle remove-icon" @click="removeImage(index)">&#xe605;</i>
	//       </li>
	//     </ul>
	//     <div class="add-image-container" v-show="values.length < max">
	//       <fileupload class="file-upload" name="file" :post-action="uploadUrl" :put-action="uploadUrl" :extensions="extensions" :accept="accept" :size="size"></fileupload>
	//       <i class="add-image-btn">+</i>
	//     </div>
	//     <p class="invalid" v-show="errorTip">
	//       <i class="iconhandle">&#xe62a;</i>
	//       {{errorTip}}
	//     </p>
	//   </div>
	// </template>
	
	// <script>

/***/ },
/* 174 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"multi-image-upload\">\n  <ul class=\"uploaded-image\">\n    <li track-by=\"$index\" v-for=\"(index, img) in values\">\n      <img :src=\"img\">\n      <i class=\"iconhandle remove-icon\" @click=\"removeImage(index)\">&#xe605;</i>\n    </li>\n  </ul>\n  <div class=\"add-image-container\" v-show=\"values.length < max\">\n    <fileupload class=\"file-upload\" name=\"file\" :post-action=\"uploadUrl\" :put-action=\"uploadUrl\" :extensions=\"extensions\" :accept=\"accept\" :size=\"size\"></fileupload>\n    <i class=\"add-image-btn\">+</i>\n  </div>\n  <p class=\"invalid\" v-show=\"errorTip\">\n    <i class=\"iconhandle\">&#xe62a;</i>\n    {{errorTip}}\n  </p>\n</div>\n";

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(176)
	__vue_script__ = __webpack_require__(178)
	__vue_template__ = __webpack_require__(179)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/cookfront/Sites/workspace/study/duiba-design/src/components/RichEditor.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(177);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.21.0/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/style-rewriter.js?id=_v-836fe276&file=RichEditor.vue!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/selector.js?type=style&index=0!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./RichEditor.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.21.0/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/style-rewriter.js?id=_v-836fe276&file=RichEditor.vue!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.0.0/vue-loader/lib/selector.js?type=style&index=0!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./RichEditor.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".richeditor {\n  border: 1px solid #d9d9d9;\n  background: #fff;\n  width: 100%;\n  box-sizing: border-box;\n  position: relative;\n}\n.richeditor textarea {\n  border: 0;\n  height: 300px;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 10px 15px;\n  outline: 0;\n  resize: none;\n  font-size: 14px;\n}\n.richeditor .wysihtml5-link-modal {\n  position: absolute;\n  z-index: 100;\n  border: 1px solid #e9e9e9;\n  background-color: #fff;\n  border-radius: 5px;\n  top: -10px;\n  left: -1px;\n  width: 80%;\n}\n.richeditor .wysihtml5-link-modal .form-group {\n  padding: 5px 15px 15px;\n  border-bottom: 1px solid #e9e9e9;\n  margin-bottom: 10px;\n}\n.richeditor .wysihtml5-link-modal .link-btns {\n  margin: 10px 0;\n  padding: 0 15px;\n}\n.richeditor .wysihtml5-link-modal label {\n  line-height: 2;\n  color: #666;\n}\n.richeditor .foreColor.wysihtml5-command-active {\n  color: #F66B4E;\n}\n.richeditor-toolbar {\n  padding-left: 10px;\n  background: #fafafa;\n}\n.richeditor-toolbar .iconhandle {\n  display: inline-block;\n  line-height: 40px;\n  padding: 0 7px;\n  color: #bbb;\n  font-weight: normal;\n  font-size: 12px;\n}\n.richeditor-toolbar .iconhandle.foreColor {\n  line-height: 9px;\n  border-bottom: 2px solid #F66B4E;\n  margin: 10px 7px 0px;\n  padding: 0px;\n}\n.richeditor-toolbar .iconhandle:hover {\n  color: #444;\n}\n.richeditor-toolbar .create-link,\n.richeditor-toolbar .ordered-list {\n  padding-right: 15px;\n}\n.richeditor-toolbar .unordered-list,\n.richeditor-toolbar .insert-image {\n  border-left: 1px dashed #d9d9d9;\n  padding-left: 15px;\n}\n.wysihtml5-image-modal .modal-dialog {\n  top: 50% !important;\n  left: 50% !important;\n  -webkit-transform: translate(-50%, -50%) !important;\n          transform: translate(-50%, -50%) !important;\n}\n.wysihtml5-image-modal .modal-footer {\n  border-top: 1px solid #e9e9e9;\n  overflow: hidden;\n  padding: 10px 20px;\n}\n.wysihtml5-image-modal .modal-body .iconhandle {\n  color: #ff795c;\n}\n", "", {"version":3,"sources":["/./src/components/RichEditor.vue"],"names":[],"mappings":"AAAA;EACE,0BAA0B;EAC1B,iBAAiB;EACjB,YAAY;EACZ,uBAAuB;EACvB,mBAAmB;CACpB;AACD;EACE,UAAU;EACV,cAAc;EACd,YAAY;EACZ,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,aAAa;EACb,gBAAgB;CACjB;AACD;EACE,mBAAmB;EACnB,aAAa;EACb,0BAA0B;EAC1B,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,WAAW;EACX,WAAW;CACZ;AACD;EACE,uBAAuB;EACvB,iCAAiC;EACjC,oBAAoB;CACrB;AACD;EACE,eAAe;EACf,gBAAgB;CACjB;AACD;EACE,eAAe;EACf,YAAY;CACb;AACD;EACE,eAAe;CAChB;AACD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;AACD;EACE,sBAAsB;EACtB,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,oBAAoB;EACpB,gBAAgB;CACjB;AACD;EACE,iBAAiB;EACjB,iCAAiC;EACjC,qBAAqB;EACrB,aAAa;CACd;AACD;EACE,YAAY;CACb;AACD;;EAEE,oBAAoB;CACrB;AACD;;EAEE,gCAAgC;EAChC,mBAAmB;CACpB;AACD;EACE,oBAAoB;EACpB,qBAAqB;EACrB,oDAA4C;UAA5C,4CAA4C;CAC7C;AACD;EACE,8BAA8B;EAC9B,iBAAiB;EACjB,mBAAmB;CACpB;AACD;EACE,eAAe;CAChB","file":"RichEditor.vue","sourcesContent":[".richeditor {\n  border: 1px solid #d9d9d9;\n  background: #fff;\n  width: 100%;\n  box-sizing: border-box;\n  position: relative;\n}\n.richeditor textarea {\n  border: 0;\n  height: 300px;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 10px 15px;\n  outline: 0;\n  resize: none;\n  font-size: 14px;\n}\n.richeditor .wysihtml5-link-modal {\n  position: absolute;\n  z-index: 100;\n  border: 1px solid #e9e9e9;\n  background-color: #fff;\n  border-radius: 5px;\n  top: -10px;\n  left: -1px;\n  width: 80%;\n}\n.richeditor .wysihtml5-link-modal .form-group {\n  padding: 5px 15px 15px;\n  border-bottom: 1px solid #e9e9e9;\n  margin-bottom: 10px;\n}\n.richeditor .wysihtml5-link-modal .link-btns {\n  margin: 10px 0;\n  padding: 0 15px;\n}\n.richeditor .wysihtml5-link-modal label {\n  line-height: 2;\n  color: #666;\n}\n.richeditor .foreColor.wysihtml5-command-active {\n  color: #F66B4E;\n}\n.richeditor-toolbar {\n  padding-left: 10px;\n  background: #fafafa;\n}\n.richeditor-toolbar .iconhandle {\n  display: inline-block;\n  line-height: 40px;\n  padding: 0 7px;\n  color: #bbb;\n  font-weight: normal;\n  font-size: 12px;\n}\n.richeditor-toolbar .iconhandle.foreColor {\n  line-height: 9px;\n  border-bottom: 2px solid #F66B4E;\n  margin: 10px 7px 0px;\n  padding: 0px;\n}\n.richeditor-toolbar .iconhandle:hover {\n  color: #444;\n}\n.richeditor-toolbar .create-link,\n.richeditor-toolbar .ordered-list {\n  padding-right: 15px;\n}\n.richeditor-toolbar .unordered-list,\n.richeditor-toolbar .insert-image {\n  border-left: 1px dashed #d9d9d9;\n  padding-left: 15px;\n}\n.wysihtml5-image-modal .modal-dialog {\n  top: 50% !important;\n  left: 50% !important;\n  transform: translate(-50%, -50%) !important;\n}\n.wysihtml5-image-modal .modal-footer {\n  border-top: 1px solid #e9e9e9;\n  overflow: hidden;\n  padding: 10px 20px;\n}\n.wysihtml5-image-modal .modal-body .iconhandle {\n  color: #ff795c;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ImageUpload = __webpack_require__(164);
	
	var _ImageUpload2 = _interopRequireDefault(_ImageUpload);
	
	var _Button = __webpack_require__(8);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Modal = __webpack_require__(13);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* eslint-disable no-new */
	exports.default = {
	  name: 'd-richeditor',
	
	  components: {
	    DImageupload: _ImageUpload2.default,
	    DButton: _Button2.default,
	    DModal: _Modal2.default
	  },
	
	  props: {
	    toolbar: {
	      default: function _default() {
	        return {
	          formatBlock: true,
	          fontSize: true,
	          bold: true,
	          foreColor: true,
	          createLink: true,
	          insertUnorderedList: true,
	          insertOrderedList: true,
	          insertImage: true,
	          formatBlockP: false
	        };
	      }
	    },
	    description: {
	      type: String,
	      default: ''
	    },
	    toolbarId: {
	      type: String,
	      default: '',
	      required: true
	    },
	    editorId: {
	      type: String,
	      default: '',
	      required: true
	    },
	    placeholder: {
	      type: String,
	      default: ''
	    },
	    value: {
	      default: '',
	      twoWay: true
	    },
	    alwaysUpdate: {
	      type: Boolean,
	      default: false
	    },
	    imageWidth: {
	      type: Number,
	      default: 640
	    }
	  },
	
	  data: function data() {
	    return {
	      imageUrl: '',
	      isInit: false,
	      imageModalShow: false
	    };
	  },
	
	  watch: {
	    'description': function description(val) {
	      if (this.alwaysUpdate) {
	        this.editor.setValue(val);
	      } else {
	        if (val && (!this.isInit || !this.toolbar.insertImage)) {
	          this.editor.setValue(val);
	          this.isInit = true;
	        }
	      }
	    }
	  },
	
	  ready: function ready() {
	    var _this = this;
	
	    this.editor = new wysihtml5.Editor(this.editorId, {
	      toolbar: this.toolbarId,
	      parserRules: wysihtml5ParserRules,
	      stylesheets: '//yun.duiba.com.cn/tuia/tuia-advertiser/css/wysihtml5.v5.css',
	      useLineBreaks: false
	    });
	    this.editor.on('blur', function () {
	      _this.value = _this.editor.getValue();
	    });
	    this.editor.on('show:dialog', function (event) {
	      if (event.command === 'insertImage') {
	        _this.imageUrl = _this.$els.imageurl.value;
	      }
	    });
	  },
	
	
	  methods: {
	    insertImageClick: function insertImageClick() {
	      if (!this.isInit) {
	        this.value = this.editor.getValue();
	      }
	      this.imageModalShow = true;
	      this.imageUrl = '';
	    }
	  }
	};
	// </script>
	
	// <style lang="less">
	// .richeditor {
	//   border: 1px solid #d9d9d9;
	//   background: #fff;
	//   width: 100%;
	//   box-sizing: border-box;
	//   position: relative;
	
	//   textarea {
	//     border: 0;
	//     height: 300px;
	//     width: 100%;
	//     box-sizing: border-box;
	//     padding: 10px 15px;
	//     outline: 0;
	//     resize: none;
	//     font-size: 14px;
	//   }
	
	//   .wysihtml5-link-modal {
	//     position: absolute;
	//     z-index: 100;
	//     border: 1px solid #e9e9e9;
	//     background-color: #fff;
	//     border-radius: 5px;
	//     top: -10px;
	//     left: -1px;
	//     width: 80%;
	
	//     .form-group {
	//       padding: 5px 15px 15px;
	//       border-bottom: 1px solid #e9e9e9;
	//       margin-bottom: 10px;
	//     }
	
	//     .link-btns {
	//       margin: 10px 0;
	//       padding: 0 15px;
	//     }
	
	//     label {
	//       line-height: 2;
	//       color: #666;
	//     }
	//   }
	
	//   .foreColor.wysihtml5-command-active {
	//     color: #F66B4E;
	//   }
	// }
	
	// .richeditor-toolbar {
	//   padding-left: 10px;
	//   background: #fafafa;
	
	//   .iconhandle {
	//     display: inline-block;
	//     line-height: 40px;
	//     padding: 0 7px;
	//     color: #bbb;
	//     font-weight: normal;
	//     font-size: 12px;
	//   }
	
	//   .iconhandle.foreColor {
	//     line-height: 9px;
	//     border-bottom: 2px solid #F66B4E;
	//     margin: 10px 7px 0px;
	//     padding: 0px;
	//   }
	
	//   .iconhandle:hover {
	//     color: #444;
	//   }
	
	//   .create-link,
	//   .ordered-list {
	//     padding-right: 15px;
	//   }
	
	//   .unordered-list,
	//   .insert-image {
	//     border-left: 1px dashed #d9d9d9;
	//     padding-left: 15px;
	//   }
	// }
	
	// .wysihtml5-image-modal {
	//   .modal-dialog {
	//     top: 50% !important;
	//     left: 50% !important;
	//     transform: translate(-50%, -50%) !important;
	//   }
	
	//   .modal-footer {
	//     border-top: 1px solid #e9e9e9;
	//     overflow: hidden;
	//     padding: 10px 20px;
	//   }
	
	//   .modal-body .iconhandle {
	//     color: #ff795c;
	//   }
	// }
	// </style>
	
	/* generated by vue-loader */
	// <template>
	//   <div class="richeditor" v-el:richeditor>
	//     <div class="richeditor-toolbar" id="{{toolbarId}}" style="display: none;">
	//       <a data-wysihtml5-command="formatBlock" class="iconhandle" data-wysihtml5-command-value="h4" v-if="toolbar.formatBlock">&#xe62d;</a>
	//       <a data-wysihtml5-command="formatBlock" class="iconhandle" data-wysihtml5-command-value="p" v-if="toolbar.formatBlockP">&#xe656;</a>
	//       <a data-wysihtml5-command="fontSize" class="iconhandle" data-wysihtml5-command-value="large" v-if="toolbar.fontSize">&#xe62e;</a>
	//       <a data-wysihtml5-command="bold" class="iconhandle" title="CTRL+B" v-if="toolbar.bold">&#xe622;</a>
	//       <a data-wysihtml5-command="foreColor" class="iconhandle foreColor" data-wysihtml5-command-value="red" v-if="toolbar.foreColor">&#xe625;</a>
	//       <a data-wysihtml5-command="createLink" class="iconhandle create-link" v-if="toolbar.createLink">&#xe604;</a>
	//       <a data-wysihtml5-command="insertUnorderedList" class="iconhandle unordered-list" v-if="toolbar.insertUnorderedList">&#xe626;</a>
	//       <a data-wysihtml5-command="insertOrderedList" class="iconhandle ordered-list" v-if="toolbar.insertOrderedList">&#xe627;</a>
	//       <a data-wysihtml5-command="insertImage" class="iconhandle insert-image" v-if="toolbar.insertImage" @click="insertImageClick">&#xe623;</a>
	
	//       <div class="wysihtml5-link-modal" data-wysihtml5-dialog="createLink" style="display: none;" v-if="toolbar.createLink">
	//         <div class="form-group">
	//           <label>
	//             地址：
	//           </label>
	//           <input data-wysihtml5-dialog-field="href" value="http://" class="form-control">
	//         </div>
	//         <div class="link-btns">
	//           <d-button data-wysihtml5-dialog-action="cancel">取消</d-button>
	//           <d-button data-wysihtml5-dialog-action="save" type="primary">确认</d-button>
	//         </div>
	//       </div>
	
	//       <div class="wysihtml5-image-modal" data-wysihtml5-dialog="insertImage" style="display: none;" v-if="toolbar.insertImage">
	//         <d-modal title="添加图片" :width="570" :show.sync="imageModalShow">
	//           <div class="modal-header" slot="modal-header">
	//             <i class="iconhandle close" data-wysihtml5-dialog-action="cancel">&#xe609;</i>
	//             <h4 class="modal-title" > 
	//               添加图片
	//             </h4>
	//           </div>
	//           <div class="modal-body" slot="modal-body">
	//             <d-imageupload :url.sync="imageUrl" :width="imageWidth">
	//               <p slot="upload-tip">
	//                 图片宽为{{imageWidth}}px格式为jpg、jpeg、png
	//               </p>
	//             </d-imageupload>
	//             <input type="hidden" data-wysihtml5-dialog-field="src" :value="imageUrl" v-el:imageurl>
	//           </div>
	//           <div class="modal-footer" slot="modal-footer">
	//             <d-button type="primary" data-wysihtml5-dialog-action="save" v-if="imageUrl.length !== 0">添加</d-button>
	//             <d-button type="primary" disabled v-else>添加</d-button>
	//             <d-button data-wysihtml5-dialog-action="cancel">取消</d-button>
	//           </div>
	//         </d-modal>
	//       </div>
	//     </div>
	//     <textarea id="{{editorId}}" placeholder="{{placeholder}}" :value="description">
	//     </textarea>
	//   </div>
	// </template>
	
	// <script>

/***/ },
/* 179 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"richeditor\" v-el:richeditor>\n  <div class=\"richeditor-toolbar\" id=\"{{toolbarId}}\" style=\"display: none;\">\n    <a data-wysihtml5-command=\"formatBlock\" class=\"iconhandle\" data-wysihtml5-command-value=\"h4\" v-if=\"toolbar.formatBlock\">&#xe62d;</a>\n    <a data-wysihtml5-command=\"formatBlock\" class=\"iconhandle\" data-wysihtml5-command-value=\"p\" v-if=\"toolbar.formatBlockP\">&#xe656;</a>\n    <a data-wysihtml5-command=\"fontSize\" class=\"iconhandle\" data-wysihtml5-command-value=\"large\" v-if=\"toolbar.fontSize\">&#xe62e;</a>\n    <a data-wysihtml5-command=\"bold\" class=\"iconhandle\" title=\"CTRL+B\" v-if=\"toolbar.bold\">&#xe622;</a>\n    <a data-wysihtml5-command=\"foreColor\" class=\"iconhandle foreColor\" data-wysihtml5-command-value=\"red\" v-if=\"toolbar.foreColor\">&#xe625;</a>\n    <a data-wysihtml5-command=\"createLink\" class=\"iconhandle create-link\" v-if=\"toolbar.createLink\">&#xe604;</a>\n    <a data-wysihtml5-command=\"insertUnorderedList\" class=\"iconhandle unordered-list\" v-if=\"toolbar.insertUnorderedList\">&#xe626;</a>\n    <a data-wysihtml5-command=\"insertOrderedList\" class=\"iconhandle ordered-list\" v-if=\"toolbar.insertOrderedList\">&#xe627;</a>\n    <a data-wysihtml5-command=\"insertImage\" class=\"iconhandle insert-image\" v-if=\"toolbar.insertImage\" @click=\"insertImageClick\">&#xe623;</a>\n\n    <div class=\"wysihtml5-link-modal\" data-wysihtml5-dialog=\"createLink\" style=\"display: none;\" v-if=\"toolbar.createLink\">\n      <div class=\"form-group\">\n        <label>\n          地址：\n        </label>\n        <input data-wysihtml5-dialog-field=\"href\" value=\"http://\" class=\"form-control\">\n      </div>\n      <div class=\"link-btns\">\n        <d-button data-wysihtml5-dialog-action=\"cancel\">取消</d-button>\n        <d-button data-wysihtml5-dialog-action=\"save\" type=\"primary\">确认</d-button>\n      </div>\n    </div>\n\n    <div class=\"wysihtml5-image-modal\" data-wysihtml5-dialog=\"insertImage\" style=\"display: none;\" v-if=\"toolbar.insertImage\">\n      <d-modal title=\"添加图片\" :width=\"570\" :show.sync=\"imageModalShow\">\n        <div class=\"modal-header\" slot=\"modal-header\">\n          <i class=\"iconhandle close\" data-wysihtml5-dialog-action=\"cancel\">&#xe609;</i>\n          <h4 class=\"modal-title\" > \n            添加图片\n          </h4>\n        </div>\n        <div class=\"modal-body\" slot=\"modal-body\">\n          <d-imageupload :url.sync=\"imageUrl\" :width=\"imageWidth\">\n            <p slot=\"upload-tip\">\n              图片宽为{{imageWidth}}px格式为jpg、jpeg、png\n            </p>\n          </d-imageupload>\n          <input type=\"hidden\" data-wysihtml5-dialog-field=\"src\" :value=\"imageUrl\" v-el:imageurl>\n        </div>\n        <div class=\"modal-footer\" slot=\"modal-footer\">\n          <d-button type=\"primary\" data-wysihtml5-dialog-action=\"save\" v-if=\"imageUrl.length !== 0\">添加</d-button>\n          <d-button type=\"primary\" disabled v-else>添加</d-button>\n          <d-button data-wysihtml5-dialog-action=\"cancel\">取消</d-button>\n        </div>\n      </d-modal>\n    </div>\n  </div>\n  <textarea id=\"{{editorId}}\" placeholder=\"{{placeholder}}\" :value=\"description\">\n  </textarea>\n</div>\n";

/***/ }
/******/ ])
});
;
//# sourceMappingURL=duiba-design.js.map