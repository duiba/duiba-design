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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Alert = __webpack_require__(1);
	
	var _Alert2 = _interopRequireDefault(_Alert);
	
	var _Button = __webpack_require__(8);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Modal = __webpack_require__(13);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _MessageBox = __webpack_require__(39);
	
	var _MessageBox2 = _interopRequireDefault(_MessageBox);
	
	var _Switch = __webpack_require__(41);
	
	var _Switch2 = _interopRequireDefault(_Switch);
	
	var _Pagination = __webpack_require__(46);
	
	var _Pagination2 = _interopRequireDefault(_Pagination);
	
	var _Tooltip = __webpack_require__(51);
	
	var _Tooltip2 = _interopRequireDefault(_Tooltip);
	
	var _Tabs = __webpack_require__(57);
	
	var _Tabs2 = _interopRequireDefault(_Tabs);
	
	var _Tab = __webpack_require__(62);
	
	var _Tab2 = _interopRequireDefault(_Tab);
	
	var _Breadcrumb = __webpack_require__(65);
	
	var _Breadcrumb2 = _interopRequireDefault(_Breadcrumb);
	
	var _BreadcrumbItem = __webpack_require__(68);
	
	var _BreadcrumbItem2 = _interopRequireDefault(_BreadcrumbItem);
	
	var _Checkbox = __webpack_require__(73);
	
	var _Checkbox2 = _interopRequireDefault(_Checkbox);
	
	var _CheckboxGroup = __webpack_require__(78);
	
	var _CheckboxGroup2 = _interopRequireDefault(_CheckboxGroup);
	
	var _Datepicker = __webpack_require__(81);
	
	var _Datepicker2 = _interopRequireDefault(_Datepicker);
	
	var _Timepicker = __webpack_require__(141);
	
	var _Timepicker2 = _interopRequireDefault(_Timepicker);
	
	var _Daterangepicker = __webpack_require__(150);
	
	var _Daterangepicker2 = _interopRequireDefault(_Daterangepicker);
	
	var _Select = __webpack_require__(155);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import FileUpload from './components/FileUpload';
	// import ImageUpload from './components/ImageUpload';
	// import MultiImageUpload from './components/MultiImageUpload';
	// import RichEditor from './components/RichEditor';
	
	var components = [_Alert2.default, _Button2.default, _Modal2.default, _MessageBox2.default, _Switch2.default, _Pagination2.default, _Tooltip2.default, _Tabs2.default, _Tab2.default, _Breadcrumb2.default, _BreadcrumbItem2.default, _Checkbox2.default, _CheckboxGroup2.default, _Datepicker2.default, _Timepicker2.default, _Daterangepicker2.default, _Select2.default
	// FileUpload,
	// ImageUpload,
	// MultiImageUpload,
	// RichEditor
	];
	
	var install = function install(Vue) {
	  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	  /* istanbul ignore if */
	  if (install.installed) return;
	  //   // locale.use(opts.locale);
	  //   // locale.i18n(opts.i18n);
	
	  components.map(function (component) {
	    Vue.component(component.name, component);
	  });
	
	  //   // Vue.use(Loading.directive);
	
	  //   // Vue.prototype.$loading = Loading.service;
	  //   // Vue.prototype.$msgbox = MessageBox;
	  //   // Vue.prototype.$alert = MessageBox.alert;
	  //   // Vue.prototype.$confirm = MessageBox.confirm;
	  //   // Vue.prototype.$prompt = MessageBox.prompt;
	  //   // Vue.prototype.$notify = Notification;
	  //   // Vue.prototype.$message = Message;
	};
	
	exports.default = {
	  version: '0.1.0',
	  // locale: locale.use,
	  // i18n: locale.i18n,
	  install: install,
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
	  Select: _Select2.default
	  // FileUpload,
	  // ImageUpload,
	  // MultiImageUpload,
	  // RichEditor
	};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

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
	  var id = "/Users/nuanfeng/Github/duiba-design/src/components/Alert.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

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
			module.hot.accept("!!../../node_modules/.0.21.0@css-loader/index.js?sourceMap!../../node_modules/.8.0.0@vue-loader/lib/style-rewriter.js?id=_v-05a1ba90&file=Alert.vue!../../node_modules/.2.2.3@less-loader/index.js!../../node_modules/.8.0.0@vue-loader/lib/selector.js?type=style&index=0!../../node_modules/.1.7.1@eslint-loader/index.js!../../node_modules/.1.7.1@eslint-loader/index.js!./Alert.vue", function() {
				var newContent = require("!!../../node_modules/.0.21.0@css-loader/index.js?sourceMap!../../node_modules/.8.0.0@vue-loader/lib/style-rewriter.js?id=_v-05a1ba90&file=Alert.vue!../../node_modules/.2.2.3@less-loader/index.js!../../node_modules/.8.0.0@vue-loader/lib/selector.js?type=style&index=0!../../node_modules/.1.7.1@eslint-loader/index.js!../../node_modules/.1.7.1@eslint-loader/index.js!./Alert.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".d-alert {\n  border: 1px solid #d2f0f0;\n  line-height: 1.5;\n  background: #f6fdfd;\n  position: relative;\n  padding: 6px 30px 6px 15px;\n  box-sizing: border-box;\n  font-size: 14px;\n}\n.d-alert .close {\n  position: absolute;\n  right: 10px;\n  cursor: pointer;\n  font-size: 12px;\n  color: #d8d8d8;\n}\n.d-alert .close:hover {\n  color: #444;\n}\n.d-alert a {\n  color: #29b6b0;\n  text-decoration: underline;\n}\n", "", {"version":3,"sources":["/./src/components/Alert.vue"],"names":[],"mappings":"AAAA;EACE,0BAA0B;EAC1B,iBAAiB;EACjB,oBAAoB;EACpB,mBAAmB;EACnB,2BAA2B;EAC3B,uBAAuB;EACvB,gBAAgB;CACjB;AACD;EACE,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;EAChB,gBAAgB;EAChB,eAAe;CAChB;AACD;EACE,YAAY;CACb;AACD;EACE,eAAe;EACf,2BAA2B;CAC5B","file":"Alert.vue","sourcesContent":[".d-alert {\n  border: 1px solid #d2f0f0;\n  line-height: 1.5;\n  background: #f6fdfd;\n  position: relative;\n  padding: 6px 30px 6px 15px;\n  box-sizing: border-box;\n  font-size: 14px;\n}\n.d-alert .close {\n  position: absolute;\n  right: 10px;\n  cursor: pointer;\n  font-size: 12px;\n  color: #d8d8d8;\n}\n.d-alert .close:hover {\n  color: #444;\n}\n.d-alert a {\n  color: #29b6b0;\n  text-decoration: underline;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

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


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

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


/***/ }),
/* 6 */
/***/ (function(module, exports) {

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

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = "\n<div v-show=\"show\" class=\"d-alert\">\n  <i v-show=\"closable\" class=\"iconhandle close\" @click=\"close\">&#xe609;</i>\n  <slot></slot>\n</div>\n";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

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
	  var id = "/Users/nuanfeng/Github/duiba-design/src/components/Button.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

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
			module.hot.accept("!!../../node_modules/.0.21.0@css-loader/index.js?sourceMap!../../node_modules/.8.0.0@vue-loader/lib/style-rewriter.js?id=_v-4e419486&file=Button.vue!../../node_modules/.2.2.3@less-loader/index.js!../../node_modules/.8.0.0@vue-loader/lib/selector.js?type=style&index=0!../../node_modules/.1.7.1@eslint-loader/index.js!../../node_modules/.1.7.1@eslint-loader/index.js!./Button.vue", function() {
				var newContent = require("!!../../node_modules/.0.21.0@css-loader/index.js?sourceMap!../../node_modules/.8.0.0@vue-loader/lib/style-rewriter.js?id=_v-4e419486&file=Button.vue!../../node_modules/.2.2.3@less-loader/index.js!../../node_modules/.8.0.0@vue-loader/lib/selector.js?type=style&index=0!../../node_modules/.1.7.1@eslint-loader/index.js!../../node_modules/.1.7.1@eslint-loader/index.js!./Button.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".d-button {\n  display: inline-block;\n  border-radius: 2px;\n  line-height: 1;\n  height: 30px;\n  font-size: 14px;\n  padding: 0 10px;\n  cursor: pointer;\n  outline: none;\n  white-space: nowrap;\n}\n.d-button + .d-button {\n  margin-left: 15px;\n}\n.d-button.is-disabled {\n  cursor: not-allowed;\n  background: #f4f4f4;\n  border-color: #ececec;\n  color: #d8d8d8;\n}\n.d-button.is-disabled:hover {\n  border-color: #ececec;\n  background: #f4f4f4;\n  color: #d8d8d8;\n}\n.d-button .iconhandle {\n  font-size: 14px;\n}\n.d-button--default {\n  background: #fff;\n  color: #444;\n  border: 1px solid #ccc;\n}\n.d-button--default:hover {\n  border-color: #888;\n}\n.d-button--primary {\n  background: #29b6b0;\n  border: 1px solid #29b6b0;\n  color: #fff;\n}\n.d-button--primary:hover {\n  background: #15c8c0;\n  border: 1px solid #15c8c0;\n}\n.d-button--text {\n  background: transparent;\n  border: 0;\n  color: #29b6b0;\n}\n.d-button--text:hover {\n  color: #15c8c0;\n}\n.d-button--text.is-disabled {\n  background: transparent;\n}\n.d-button--text.is-disabled:hover {\n  background: transparent;\n}\n.d-button--warning {\n  background: #ff795c;\n  border: 1px solid #ff795c;\n  color: #fff;\n}\n.d-button--warning:hover {\n  background: #ff8970;\n  border: 1px solid #ff8970;\n}\n.d-button--large {\n  height: 34px;\n  padding: 0 15px;\n}\n", "", {"version":3,"sources":["/./src/components/Button.vue"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,mBAAmB;EACnB,eAAe;EACf,aAAa;EACb,gBAAgB;EAChB,gBAAgB;EAChB,gBAAgB;EAChB,cAAc;EACd,oBAAoB;CACrB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,oBAAoB;EACpB,oBAAoB;EACpB,sBAAsB;EACtB,eAAe;CAChB;AACD;EACE,sBAAsB;EACtB,oBAAoB;EACpB,eAAe;CAChB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,iBAAiB;EACjB,YAAY;EACZ,uBAAuB;CACxB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,oBAAoB;EACpB,0BAA0B;EAC1B,YAAY;CACb;AACD;EACE,oBAAoB;EACpB,0BAA0B;CAC3B;AACD;EACE,wBAAwB;EACxB,UAAU;EACV,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,wBAAwB;CACzB;AACD;EACE,wBAAwB;CACzB;AACD;EACE,oBAAoB;EACpB,0BAA0B;EAC1B,YAAY;CACb;AACD;EACE,oBAAoB;EACpB,0BAA0B;CAC3B;AACD;EACE,aAAa;EACb,gBAAgB;CACjB","file":"Button.vue","sourcesContent":[".d-button {\n  display: inline-block;\n  border-radius: 2px;\n  line-height: 1;\n  height: 30px;\n  font-size: 14px;\n  padding: 0 10px;\n  cursor: pointer;\n  outline: none;\n  white-space: nowrap;\n}\n.d-button + .d-button {\n  margin-left: 15px;\n}\n.d-button.is-disabled {\n  cursor: not-allowed;\n  background: #f4f4f4;\n  border-color: #ececec;\n  color: #d8d8d8;\n}\n.d-button.is-disabled:hover {\n  border-color: #ececec;\n  background: #f4f4f4;\n  color: #d8d8d8;\n}\n.d-button .iconhandle {\n  font-size: 14px;\n}\n.d-button--default {\n  background: #fff;\n  color: #444;\n  border: 1px solid #ccc;\n}\n.d-button--default:hover {\n  border-color: #888;\n}\n.d-button--primary {\n  background: #29b6b0;\n  border: 1px solid #29b6b0;\n  color: #fff;\n}\n.d-button--primary:hover {\n  background: #15c8c0;\n  border: 1px solid #15c8c0;\n}\n.d-button--text {\n  background: transparent;\n  border: 0;\n  color: #29b6b0;\n}\n.d-button--text:hover {\n  color: #15c8c0;\n}\n.d-button--text.is-disabled {\n  background: transparent;\n}\n.d-button--text.is-disabled:hover {\n  background: transparent;\n}\n.d-button--warning {\n  background: #ff795c;\n  border: 1px solid #ff795c;\n  color: #fff;\n}\n.d-button--warning:hover {\n  background: #ff8970;\n  border: 1px solid #ff8970;\n}\n.d-button--large {\n  height: 34px;\n  padding: 0 15px;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 11 */
/***/ (function(module, exports) {

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
	//     <i class="iconhandle" v-if="icon" v-html="icon"></i>
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
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    to: [String, Object]
	  },
	
	  methods: {
	    clickHandle: function clickHandle(event) {
	      this.$emit('click', event);
	      if (this.disabled) {
	        return;
	      }
	      var to = this.to;
	      if (to) {
	        if (typeof to === 'string') {
	          location.href = to;
	        } else {
	          this.$router && this.$router.go(to);
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

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = "\n<button :disabled=\"disabled\" @click=\"clickHandle\" class=\"d-button\"\n  :class=\"[\n    type ? 'd-button--' + type : '',\n    size ? 'd-button--' + size : '',\n    {\n      'is-disabled': disabled\n    }\n  ]\"\n>\n  <i class=\"iconhandle\" v-if=\"icon\" v-html=\"icon\"></i>\n  <slot></slot>\n</button>\n";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

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
	  var id = "/Users/nuanfeng/Github/duiba-design/src/components/Modal.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

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
			module.hot.accept("!!../../node_modules/.0.21.0@css-loader/index.js?sourceMap!../../node_modules/.8.0.0@vue-loader/lib/style-rewriter.js?id=_v-54a2f8ee&file=Modal.vue!../../node_modules/.2.2.3@less-loader/index.js!../../node_modules/.8.0.0@vue-loader/lib/selector.js?type=style&index=0!../../node_modules/.1.7.1@eslint-loader/index.js!../../node_modules/.1.7.1@eslint-loader/index.js!./Modal.vue", function() {
				var newContent = require("!!../../node_modules/.0.21.0@css-loader/index.js?sourceMap!../../node_modules/.8.0.0@vue-loader/lib/style-rewriter.js?id=_v-54a2f8ee&file=Modal.vue!../../node_modules/.2.2.3@less-loader/index.js!../../node_modules/.8.0.0@vue-loader/lib/selector.js?type=style&index=0!../../node_modules/.1.7.1@eslint-loader/index.js!../../node_modules/.1.7.1@eslint-loader/index.js!./Modal.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".modal-open {\n  overflow: hidden;\n}\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.d-modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  overflow: hidden;\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n  transition: all .5s ease;\n}\n.d-modal.fade .modal-dialog {\n  transition: -webkit-transform 0.5s ease-out;\n  transition: transform 0.5s ease-out;\n  transition: transform 0.5s ease-out, -webkit-transform 0.5s ease-out;\n  -webkit-transform: translate(0, -25%);\n          transform: translate(0, -25%);\n}\n.d-modal.in {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.d-modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n          transform: translate(0, 0);\n}\n.d-modal.d-message-box .modal-dialog {\n  width: auto !important;\n  max-width: 500px;\n  position: absolute;\n  left: 50%;\n}\n.d-modal.d-message-box .modal-content {\n  border-top: 0;\n  box-shadow: none;\n}\n.d-modal.d-message-box .iconhandle {\n  margin-right: 5px;\n}\n.d-modal.d-message-box .success {\n  color: #59dfa3;\n}\n.d-modal.d-message-box .error {\n  color: #f9431d;\n}\n.d-modal.d-message-box p {\n  color: #444;\n  font-size: 14px;\n  padding: 0 5px 0 3px;\n  text-align: center;\n  margin: 5px 0;\n}\n.d-modal.d-message-box p.desc {\n  color: #888;\n  font-size: 12px;\n}\n.fade {\n  opacity: 0;\n  transition: opacity .15s linear;\n}\n.fade.in {\n  opacity: 1;\n}\n.modal-dialog {\n  position: absolute;\n  width: auto;\n}\n.modal-content {\n  position: relative;\n  background-color: #fff;\n  background-clip: padding-box;\n  border-radius: 5px;\n  outline: 0;\n  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\n  border-top: 8px solid #444;\n}\n.modal-content .close {\n  position: absolute;\n  right: 10px;\n  top: 8px;\n  cursor: pointer;\n  font-size: 12px;\n  color: #d8d8d8;\n}\n.modal-content .close:hover {\n  color: #444;\n}\n.modal-header {\n  padding: 24px 20px 0;\n  font-size: 15px;\n  line-height: 20px;\n}\n.modal-header .modal-title {\n  font-weight: 700;\n  font-size: 16px;\n  color: #444;\n  margin: 0;\n}\n.modal-body {\n  padding: 10px 20px;\n  font-size: 14px;\n  line-height: 1.5;\n  overflow: hidden;\n}\n.modal-footer {\n  padding: 10px 0 20px 20px;\n}\n", "", {"version":3,"sources":["/./src/components/Modal.vue"],"names":[],"mappings":"AAAA;EACE,iBAAiB;CAClB;AACD;EACE,mBAAmB;EACnB,iBAAiB;CAClB;AACD;EACE,gBAAgB;EAChB,OAAO;EACP,SAAS;EACT,UAAU;EACV,QAAQ;EACR,cAAc;EACd,cAAc;EACd,iBAAiB;EACjB,kCAAkC;EAClC,WAAW;EACX,yBAAyB;CAC1B;AACD;EACE,4CAAoC;EAApC,oCAAoC;EAApC,qEAAoC;EACpC,sCAA8B;UAA9B,8BAA8B;CAC/B;AACD;EACE,qCAAqC;CACtC;AACD;EACE,mCAA2B;UAA3B,2BAA2B;CAC5B;AACD;EACE,uBAAuB;EACvB,iBAAiB;EACjB,mBAAmB;EACnB,UAAU;CACX;AACD;EACE,cAAc;EACd,iBAAiB;CAClB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,YAAY;EACZ,gBAAgB;EAChB,qBAAqB;EACrB,mBAAmB;EACnB,cAAc;CACf;AACD;EACE,YAAY;EACZ,gBAAgB;CACjB;AACD;EACE,WAAW;EACX,gCAAgC;CACjC;AACD;EACE,WAAW;CACZ;AACD;EACE,mBAAmB;EACnB,YAAY;CACb;AACD;EACE,mBAAmB;EACnB,uBAAuB;EACvB,6BAA6B;EAC7B,mBAAmB;EACnB,WAAW;EACX,yCAAyC;EACzC,2BAA2B;CAC5B;AACD;EACE,mBAAmB;EACnB,YAAY;EACZ,SAAS;EACT,gBAAgB;EAChB,gBAAgB;EAChB,eAAe;CAChB;AACD;EACE,YAAY;CACb;AACD;EACE,qBAAqB;EACrB,gBAAgB;EAChB,kBAAkB;CACnB;AACD;EACE,iBAAiB;EACjB,gBAAgB;EAChB,YAAY;EACZ,UAAU;CACX;AACD;EACE,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB;EACjB,iBAAiB;CAClB;AACD;EACE,0BAA0B;CAC3B","file":"Modal.vue","sourcesContent":[".modal-open {\n  overflow: hidden;\n}\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.d-modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  overflow: hidden;\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n  transition: all .5s ease;\n}\n.d-modal.fade .modal-dialog {\n  transition: transform 0.5s ease-out;\n  transform: translate(0, -25%);\n}\n.d-modal.in {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.d-modal.in .modal-dialog {\n  transform: translate(0, 0);\n}\n.d-modal.d-message-box .modal-dialog {\n  width: auto !important;\n  max-width: 500px;\n  position: absolute;\n  left: 50%;\n}\n.d-modal.d-message-box .modal-content {\n  border-top: 0;\n  box-shadow: none;\n}\n.d-modal.d-message-box .iconhandle {\n  margin-right: 5px;\n}\n.d-modal.d-message-box .success {\n  color: #59dfa3;\n}\n.d-modal.d-message-box .error {\n  color: #f9431d;\n}\n.d-modal.d-message-box p {\n  color: #444;\n  font-size: 14px;\n  padding: 0 5px 0 3px;\n  text-align: center;\n  margin: 5px 0;\n}\n.d-modal.d-message-box p.desc {\n  color: #888;\n  font-size: 12px;\n}\n.fade {\n  opacity: 0;\n  transition: opacity .15s linear;\n}\n.fade.in {\n  opacity: 1;\n}\n.modal-dialog {\n  position: absolute;\n  width: auto;\n}\n.modal-content {\n  position: relative;\n  background-color: #fff;\n  background-clip: padding-box;\n  border-radius: 5px;\n  outline: 0;\n  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\n  border-top: 8px solid #444;\n}\n.modal-content .close {\n  position: absolute;\n  right: 10px;\n  top: 8px;\n  cursor: pointer;\n  font-size: 12px;\n  color: #d8d8d8;\n}\n.modal-content .close:hover {\n  color: #444;\n}\n.modal-header {\n  padding: 24px 20px 0;\n  font-size: 15px;\n  line-height: 20px;\n}\n.modal-header .modal-title {\n  font-weight: 700;\n  font-size: 16px;\n  color: #444;\n  margin: 0;\n}\n.modal-body {\n  padding: 10px 20px;\n  font-size: 14px;\n  line-height: 1.5;\n  overflow: hidden;\n}\n.modal-footer {\n  padding: 10px 0 20px 20px;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

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
	  mounted: function mounted() {
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
	                _this.$emit('update:show', false);
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
	      this.$emit('update:show', false);
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
	//               <p v-html="description"></p>
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

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(18), __esModule: true };

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(19);
	module.exports = __webpack_require__(22).Number.isInteger;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(20);
	
	$export($export.S, 'Number', {isInteger: __webpack_require__(35)});

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(26)
	  , createDesc = __webpack_require__(34);
	module.exports = __webpack_require__(30) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(28);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(30) && !__webpack_require__(31)(function(){
	  return Object.defineProperty(__webpack_require__(32)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(31)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(28)
	  , document = __webpack_require__(21).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(28)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ }),
/* 36 */
/***/ (function(module, exports) {

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

/***/ }),
/* 37 */
/***/ (function(module, exports) {

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

/***/ }),
/* 38 */
/***/ (function(module, exports) {

	module.exports = "\n<div role=\"dialog\"\n  v-bind:class=\"{\n    'd-modal': true,\n    'fade': effect === 'fade',\n    'd-message-box': type === 'message',\n  }\"\n>\n  <div class=\"modal-dialog\" role=\"document\" v-bind:style=\"{width: optionalWidth}\">\n    <div class=\"modal-content\">\n      <slot name=\"modal-header\" v-if=\"type !== 'message'\">\n        <div class=\"modal-header\">\n          <i class=\"iconhandle close\" @click=\"close\">&#xe609;</i>\n          <h4 class=\"modal-title\">\n            <slot name=\"title\">\n              {{title}}\n            </slot>\n          </h4>\n        </div>\n      </slot>\n      <slot name=\"modal-body\">\n        <div class=\"modal-body\">\n          <template v-if=\"type === 'message'\">\n            <p>\n              <i class=\"iconhandle success\" v-if=\"messageType === 'success'\">&#xe629;</i>\n              <i class=\"iconhandle error\" v-if=\"messageType === 'error'\">&#xe605;</i>\n              {{title}}\n            </p>\n            <p class=\"desc\" v-if=\"messageDesc\">\n              {{messageDesc}}\n            </p>\n          </template>\n          <template v-else>\n            <p v-html=\"description\"></p>\n          </template>\n        </div>\n      </slot>\n      <slot name=\"modal-footer\" v-if=\"type !== 'message'\">\n        <div class=\"modal-footer\">\n          <d-button type=\"primary\" size=\"large\" @click=\"onOk\">{{ okText }}</d-button>\n          <d-button size=\"large\" @click=\"close\">{{ cancelText }}</d-button>\n        </div>\n      </slot>\n    </div>\n  </div>\n</div>\n";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

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
	        body.removeChild(this.$el);
	      });
	    }, options.time || 1500);
	  });
	  setTimeout(function () {
	    instance.show = true;
	    body.appendChild(instance.$el);
	  }, 500);
	};
	
	MessageBox.ignoreInit = true;
	
	exports.default = MessageBox;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*!
	 * Vue.js v2.3.3
	 * (c) 2014-2017 Evan You
	 * Released under the MIT License.
	 */
	(function (global, factory) {
		 true ? module.exports = factory() :
		typeof define === 'function' && define.amd ? define(factory) :
		(global.Vue = factory());
	}(this, (function () { 'use strict';
	
	/*  */
	
	// these helpers produces better vm code in JS engines due to their
	// explicitness and function inlining
	function isUndef (v) {
	  return v === undefined || v === null
	}
	
	function isDef (v) {
	  return v !== undefined && v !== null
	}
	
	function isTrue (v) {
	  return v === true
	}
	
	function isFalse (v) {
	  return v === false
	}
	/**
	 * Check if value is primitive
	 */
	function isPrimitive (value) {
	  return typeof value === 'string' || typeof value === 'number'
	}
	
	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 */
	function isObject (obj) {
	  return obj !== null && typeof obj === 'object'
	}
	
	var _toString = Object.prototype.toString;
	
	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 */
	function isPlainObject (obj) {
	  return _toString.call(obj) === '[object Object]'
	}
	
	function isRegExp (v) {
	  return _toString.call(v) === '[object RegExp]'
	}
	
	/**
	 * Convert a value to a string that is actually rendered.
	 */
	function toString (val) {
	  return val == null
	    ? ''
	    : typeof val === 'object'
	      ? JSON.stringify(val, null, 2)
	      : String(val)
	}
	
	/**
	 * Convert a input value to a number for persistence.
	 * If the conversion fails, return original string.
	 */
	function toNumber (val) {
	  var n = parseFloat(val);
	  return isNaN(n) ? val : n
	}
	
	/**
	 * Make a map and return a function for checking if a key
	 * is in that map.
	 */
	function makeMap (
	  str,
	  expectsLowerCase
	) {
	  var map = Object.create(null);
	  var list = str.split(',');
	  for (var i = 0; i < list.length; i++) {
	    map[list[i]] = true;
	  }
	  return expectsLowerCase
	    ? function (val) { return map[val.toLowerCase()]; }
	    : function (val) { return map[val]; }
	}
	
	/**
	 * Check if a tag is a built-in tag.
	 */
	var isBuiltInTag = makeMap('slot,component', true);
	
	/**
	 * Remove an item from an array
	 */
	function remove (arr, item) {
	  if (arr.length) {
	    var index = arr.indexOf(item);
	    if (index > -1) {
	      return arr.splice(index, 1)
	    }
	  }
	}
	
	/**
	 * Check whether the object has the property.
	 */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	function hasOwn (obj, key) {
	  return hasOwnProperty.call(obj, key)
	}
	
	/**
	 * Create a cached version of a pure function.
	 */
	function cached (fn) {
	  var cache = Object.create(null);
	  return (function cachedFn (str) {
	    var hit = cache[str];
	    return hit || (cache[str] = fn(str))
	  })
	}
	
	/**
	 * Camelize a hyphen-delimited string.
	 */
	var camelizeRE = /-(\w)/g;
	var camelize = cached(function (str) {
	  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
	});
	
	/**
	 * Capitalize a string.
	 */
	var capitalize = cached(function (str) {
	  return str.charAt(0).toUpperCase() + str.slice(1)
	});
	
	/**
	 * Hyphenate a camelCase string.
	 */
	var hyphenateRE = /([^-])([A-Z])/g;
	var hyphenate = cached(function (str) {
	  return str
	    .replace(hyphenateRE, '$1-$2')
	    .replace(hyphenateRE, '$1-$2')
	    .toLowerCase()
	});
	
	/**
	 * Simple bind, faster than native
	 */
	function bind (fn, ctx) {
	  function boundFn (a) {
	    var l = arguments.length;
	    return l
	      ? l > 1
	        ? fn.apply(ctx, arguments)
	        : fn.call(ctx, a)
	      : fn.call(ctx)
	  }
	  // record original fn length
	  boundFn._length = fn.length;
	  return boundFn
	}
	
	/**
	 * Convert an Array-like object to a real Array.
	 */
	function toArray (list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret
	}
	
	/**
	 * Mix properties into target object.
	 */
	function extend (to, _from) {
	  for (var key in _from) {
	    to[key] = _from[key];
	  }
	  return to
	}
	
	/**
	 * Merge an Array of Objects into a single Object.
	 */
	function toObject (arr) {
	  var res = {};
	  for (var i = 0; i < arr.length; i++) {
	    if (arr[i]) {
	      extend(res, arr[i]);
	    }
	  }
	  return res
	}
	
	/**
	 * Perform no operation.
	 */
	function noop () {}
	
	/**
	 * Always return false.
	 */
	var no = function () { return false; };
	
	/**
	 * Return same value
	 */
	var identity = function (_) { return _; };
	
	/**
	 * Generate a static keys string from compiler modules.
	 */
	function genStaticKeys (modules) {
	  return modules.reduce(function (keys, m) {
	    return keys.concat(m.staticKeys || [])
	  }, []).join(',')
	}
	
	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 */
	function looseEqual (a, b) {
	  var isObjectA = isObject(a);
	  var isObjectB = isObject(b);
	  if (isObjectA && isObjectB) {
	    try {
	      return JSON.stringify(a) === JSON.stringify(b)
	    } catch (e) {
	      // possible circular reference
	      return a === b
	    }
	  } else if (!isObjectA && !isObjectB) {
	    return String(a) === String(b)
	  } else {
	    return false
	  }
	}
	
	function looseIndexOf (arr, val) {
	  for (var i = 0; i < arr.length; i++) {
	    if (looseEqual(arr[i], val)) { return i }
	  }
	  return -1
	}
	
	/**
	 * Ensure a function is called only once.
	 */
	function once (fn) {
	  var called = false;
	  return function () {
	    if (!called) {
	      called = true;
	      fn.apply(this, arguments);
	    }
	  }
	}
	
	var SSR_ATTR = 'data-server-rendered';
	
	var ASSET_TYPES = [
	  'component',
	  'directive',
	  'filter'
	];
	
	var LIFECYCLE_HOOKS = [
	  'beforeCreate',
	  'created',
	  'beforeMount',
	  'mounted',
	  'beforeUpdate',
	  'updated',
	  'beforeDestroy',
	  'destroyed',
	  'activated',
	  'deactivated'
	];
	
	/*  */
	
	var config = ({
	  /**
	   * Option merge strategies (used in core/util/options)
	   */
	  optionMergeStrategies: Object.create(null),
	
	  /**
	   * Whether to suppress warnings.
	   */
	  silent: false,
	
	  /**
	   * Show production mode tip message on boot?
	   */
	  productionTip: "development" !== 'production',
	
	  /**
	   * Whether to enable devtools
	   */
	  devtools: "development" !== 'production',
	
	  /**
	   * Whether to record perf
	   */
	  performance: false,
	
	  /**
	   * Error handler for watcher errors
	   */
	  errorHandler: null,
	
	  /**
	   * Ignore certain custom elements
	   */
	  ignoredElements: [],
	
	  /**
	   * Custom user key aliases for v-on
	   */
	  keyCodes: Object.create(null),
	
	  /**
	   * Check if a tag is reserved so that it cannot be registered as a
	   * component. This is platform-dependent and may be overwritten.
	   */
	  isReservedTag: no,
	
	  /**
	   * Check if an attribute is reserved so that it cannot be used as a component
	   * prop. This is platform-dependent and may be overwritten.
	   */
	  isReservedAttr: no,
	
	  /**
	   * Check if a tag is an unknown element.
	   * Platform-dependent.
	   */
	  isUnknownElement: no,
	
	  /**
	   * Get the namespace of an element
	   */
	  getTagNamespace: noop,
	
	  /**
	   * Parse the real tag name for the specific platform.
	   */
	  parsePlatformTagName: identity,
	
	  /**
	   * Check if an attribute must be bound using property, e.g. value
	   * Platform-dependent.
	   */
	  mustUseProp: no,
	
	  /**
	   * Exposed for legacy reasons
	   */
	  _lifecycleHooks: LIFECYCLE_HOOKS
	});
	
	/*  */
	
	var emptyObject = Object.freeze({});
	
	/**
	 * Check if a string starts with $ or _
	 */
	function isReserved (str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F
	}
	
	/**
	 * Define a property.
	 */
	function def (obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}
	
	/**
	 * Parse simple path.
	 */
	var bailRE = /[^\w.$]/;
	function parsePath (path) {
	  if (bailRE.test(path)) {
	    return
	  }
	  var segments = path.split('.');
	  return function (obj) {
	    for (var i = 0; i < segments.length; i++) {
	      if (!obj) { return }
	      obj = obj[segments[i]];
	    }
	    return obj
	  }
	}
	
	/*  */
	
	var warn = noop;
	var tip = noop;
	var formatComponentName = (null); // work around flow check
	
	{
	  var hasConsole = typeof console !== 'undefined';
	  var classifyRE = /(?:^|[-_])(\w)/g;
	  var classify = function (str) { return str
	    .replace(classifyRE, function (c) { return c.toUpperCase(); })
	    .replace(/[-_]/g, ''); };
	
	  warn = function (msg, vm) {
	    if (hasConsole && (!config.silent)) {
	      console.error("[Vue warn]: " + msg + (
	        vm ? generateComponentTrace(vm) : ''
	      ));
	    }
	  };
	
	  tip = function (msg, vm) {
	    if (hasConsole && (!config.silent)) {
	      console.warn("[Vue tip]: " + msg + (
	        vm ? generateComponentTrace(vm) : ''
	      ));
	    }
	  };
	
	  formatComponentName = function (vm, includeFile) {
	    if (vm.$root === vm) {
	      return '<Root>'
	    }
	    var name = typeof vm === 'string'
	      ? vm
	      : typeof vm === 'function' && vm.options
	        ? vm.options.name
	        : vm._isVue
	          ? vm.$options.name || vm.$options._componentTag
	          : vm.name;
	
	    var file = vm._isVue && vm.$options.__file;
	    if (!name && file) {
	      var match = file.match(/([^/\\]+)\.vue$/);
	      name = match && match[1];
	    }
	
	    return (
	      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
	      (file && includeFile !== false ? (" at " + file) : '')
	    )
	  };
	
	  var repeat = function (str, n) {
	    var res = '';
	    while (n) {
	      if (n % 2 === 1) { res += str; }
	      if (n > 1) { str += str; }
	      n >>= 1;
	    }
	    return res
	  };
	
	  var generateComponentTrace = function (vm) {
	    if (vm._isVue && vm.$parent) {
	      var tree = [];
	      var currentRecursiveSequence = 0;
	      while (vm) {
	        if (tree.length > 0) {
	          var last = tree[tree.length - 1];
	          if (last.constructor === vm.constructor) {
	            currentRecursiveSequence++;
	            vm = vm.$parent;
	            continue
	          } else if (currentRecursiveSequence > 0) {
	            tree[tree.length - 1] = [last, currentRecursiveSequence];
	            currentRecursiveSequence = 0;
	          }
	        }
	        tree.push(vm);
	        vm = vm.$parent;
	      }
	      return '\n\nfound in\n\n' + tree
	        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
	            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
	            : formatComponentName(vm))); })
	        .join('\n')
	    } else {
	      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
	    }
	  };
	}
	
	/*  */
	
	function handleError (err, vm, info) {
	  if (config.errorHandler) {
	    config.errorHandler.call(null, err, vm, info);
	  } else {
	    {
	      warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
	    }
	    /* istanbul ignore else */
	    if (inBrowser && typeof console !== 'undefined') {
	      console.error(err);
	    } else {
	      throw err
	    }
	  }
	}
	
	/*  */
	/* globals MutationObserver */
	
	// can we use __proto__?
	var hasProto = '__proto__' in {};
	
	// Browser environment sniffing
	var inBrowser = typeof window !== 'undefined';
	var UA = inBrowser && window.navigator.userAgent.toLowerCase();
	var isIE = UA && /msie|trident/.test(UA);
	var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
	var isEdge = UA && UA.indexOf('edge/') > 0;
	var isAndroid = UA && UA.indexOf('android') > 0;
	var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
	var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
	
	var supportsPassive = false;
	if (inBrowser) {
	  try {
	    var opts = {};
	    Object.defineProperty(opts, 'passive', ({
	      get: function get () {
	        /* istanbul ignore next */
	        supportsPassive = true;
	      }
	    } )); // https://github.com/facebook/flow/issues/285
	    window.addEventListener('test-passive', null, opts);
	  } catch (e) {}
	}
	
	// this needs to be lazy-evaled because vue may be required before
	// vue-server-renderer can set VUE_ENV
	var _isServer;
	var isServerRendering = function () {
	  if (_isServer === undefined) {
	    /* istanbul ignore if */
	    if (!inBrowser && typeof global !== 'undefined') {
	      // detect presence of vue-server-renderer and avoid
	      // Webpack shimming the process
	      _isServer = global['process'].env.VUE_ENV === 'server';
	    } else {
	      _isServer = false;
	    }
	  }
	  return _isServer
	};
	
	// detect devtools
	var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
	
	/* istanbul ignore next */
	function isNative (Ctor) {
	  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
	}
	
	var hasSymbol =
	  typeof Symbol !== 'undefined' && isNative(Symbol) &&
	  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);
	
	/**
	 * Defer a task to execute it asynchronously.
	 */
	var nextTick = (function () {
	  var callbacks = [];
	  var pending = false;
	  var timerFunc;
	
	  function nextTickHandler () {
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
	    var logError = function (err) { console.error(err); };
	    timerFunc = function () {
	      p.then(nextTickHandler).catch(logError);
	      // in problematic UIWebViews, Promise.then doesn't completely break, but
	      // it can get stuck in a weird state where callbacks are pushed into the
	      // microtask queue but the queue isn't being flushed, until the browser
	      // needs to do some other work, e.g. handle a timer. Therefore we can
	      // "force" the microtask queue to be flushed by adding an empty timer.
	      if (isIOS) { setTimeout(noop); }
	    };
	  } else if (typeof MutationObserver !== 'undefined' && (
	    isNative(MutationObserver) ||
	    // PhantomJS and iOS 7.x
	    MutationObserver.toString() === '[object MutationObserverConstructor]'
	  )) {
	    // use MutationObserver where native Promise is not available,
	    // e.g. PhantomJS IE11, iOS7, Android 4.4
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
	    timerFunc = function () {
	      setTimeout(nextTickHandler, 0);
	    };
	  }
	
	  return function queueNextTick (cb, ctx) {
	    var _resolve;
	    callbacks.push(function () {
	      if (cb) {
	        try {
	          cb.call(ctx);
	        } catch (e) {
	          handleError(e, ctx, 'nextTick');
	        }
	      } else if (_resolve) {
	        _resolve(ctx);
	      }
	    });
	    if (!pending) {
	      pending = true;
	      timerFunc();
	    }
	    if (!cb && typeof Promise !== 'undefined') {
	      return new Promise(function (resolve, reject) {
	        _resolve = resolve;
	      })
	    }
	  }
	})();
	
	var _Set;
	/* istanbul ignore if */
	if (typeof Set !== 'undefined' && isNative(Set)) {
	  // use native Set when available.
	  _Set = Set;
	} else {
	  // a non-standard Set polyfill that only works with primitive keys.
	  _Set = (function () {
	    function Set () {
	      this.set = Object.create(null);
	    }
	    Set.prototype.has = function has (key) {
	      return this.set[key] === true
	    };
	    Set.prototype.add = function add (key) {
	      this.set[key] = true;
	    };
	    Set.prototype.clear = function clear () {
	      this.set = Object.create(null);
	    };
	
	    return Set;
	  }());
	}
	
	/*  */
	
	
	var uid = 0;
	
	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 */
	var Dep = function Dep () {
	  this.id = uid++;
	  this.subs = [];
	};
	
	Dep.prototype.addSub = function addSub (sub) {
	  this.subs.push(sub);
	};
	
	Dep.prototype.removeSub = function removeSub (sub) {
	  remove(this.subs, sub);
	};
	
	Dep.prototype.depend = function depend () {
	  if (Dep.target) {
	    Dep.target.addDep(this);
	  }
	};
	
	Dep.prototype.notify = function notify () {
	  // stabilize the subscriber list first
	  var subs = this.subs.slice();
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};
	
	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;
	var targetStack = [];
	
	function pushTarget (_target) {
	  if (Dep.target) { targetStack.push(Dep.target); }
	  Dep.target = _target;
	}
	
	function popTarget () {
	  Dep.target = targetStack.pop();
	}
	
	/*
	 * not type checking this file because flow doesn't play well with
	 * dynamically accessing methods on Array prototype
	 */
	
	var arrayProto = Array.prototype;
	var arrayMethods = Object.create(arrayProto);[
	  'push',
	  'pop',
	  'shift',
	  'unshift',
	  'splice',
	  'sort',
	  'reverse'
	]
	.forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  def(arrayMethods, method, function mutator () {
	    var arguments$1 = arguments;
	
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments$1[i];
	    }
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted;
	    switch (method) {
	      case 'push':
	        inserted = args;
	        break
	      case 'unshift':
	        inserted = args;
	        break
	      case 'splice':
	        inserted = args.slice(2);
	        break
	    }
	    if (inserted) { ob.observeArray(inserted); }
	    // notify change
	    ob.dep.notify();
	    return result
	  });
	});
	
	/*  */
	
	var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
	
	/**
	 * By default, when a reactive property is set, the new value is
	 * also converted to become reactive. However when passing down props,
	 * we don't want to force conversion because the value may be a nested value
	 * under a frozen data structure. Converting it would defeat the optimization.
	 */
	var observerState = {
	  shouldConvert: true,
	  isSettingProps: false
	};
	
	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 */
	var Observer = function Observer (value) {
	  this.value = value;
	  this.dep = new Dep();
	  this.vmCount = 0;
	  def(value, '__ob__', this);
	  if (Array.isArray(value)) {
	    var augment = hasProto
	      ? protoAugment
	      : copyAugment;
	    augment(value, arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	};
	
	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 */
	Observer.prototype.walk = function walk (obj) {
	  var keys = Object.keys(obj);
	  for (var i = 0; i < keys.length; i++) {
	    defineReactive$$1(obj, keys[i], obj[keys[i]]);
	  }
	};
	
	/**
	 * Observe a list of Array items.
	 */
	Observer.prototype.observeArray = function observeArray (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
	};
	
	// helpers
	
	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 */
	function protoAugment (target, src) {
	  /* eslint-disable no-proto */
	  target.__proto__ = src;
	  /* eslint-enable no-proto */
	}
	
	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 */
	/* istanbul ignore next */
	function copyAugment (target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    def(target, key, src[key]);
	  }
	}
	
	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 */
	function observe (value, asRootData) {
	  if (!isObject(value)) {
	    return
	  }
	  var ob;
	  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if (
	    observerState.shouldConvert &&
	    !isServerRendering() &&
	    (Array.isArray(value) || isPlainObject(value)) &&
	    Object.isExtensible(value) &&
	    !value._isVue
	  ) {
	    ob = new Observer(value);
	  }
	  if (asRootData && ob) {
	    ob.vmCount++;
	  }
	  return ob
	}
	
	/**
	 * Define a reactive property on an Object.
	 */
	function defineReactive$$1 (
	  obj,
	  key,
	  val,
	  customSetter
	) {
	  var dep = new Dep();
	
	  var property = Object.getOwnPropertyDescriptor(obj, key);
	  if (property && property.configurable === false) {
	    return
	  }
	
	  // cater for pre-defined getter/setters
	  var getter = property && property.get;
	  var setter = property && property.set;
	
	  var childOb = observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter () {
	      var value = getter ? getter.call(obj) : val;
	      if (Dep.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	        }
	        if (Array.isArray(value)) {
	          dependArray(value);
	        }
	      }
	      return value
	    },
	    set: function reactiveSetter (newVal) {
	      var value = getter ? getter.call(obj) : val;
	      /* eslint-disable no-self-compare */
	      if (newVal === value || (newVal !== newVal && value !== value)) {
	        return
	      }
	      /* eslint-enable no-self-compare */
	      if ("development" !== 'production' && customSetter) {
	        customSetter();
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
	
	/**
	 * Set a property on an object. Adds the new property and
	 * triggers change notification if the property doesn't
	 * already exist.
	 */
	function set (target, key, val) {
	  if (Array.isArray(target) && typeof key === 'number') {
	    target.length = Math.max(target.length, key);
	    target.splice(key, 1, val);
	    return val
	  }
	  if (hasOwn(target, key)) {
	    target[key] = val;
	    return val
	  }
	  var ob = (target ).__ob__;
	  if (target._isVue || (ob && ob.vmCount)) {
	    "development" !== 'production' && warn(
	      'Avoid adding reactive properties to a Vue instance or its root $data ' +
	      'at runtime - declare it upfront in the data option.'
	    );
	    return val
	  }
	  if (!ob) {
	    target[key] = val;
	    return val
	  }
	  defineReactive$$1(ob.value, key, val);
	  ob.dep.notify();
	  return val
	}
	
	/**
	 * Delete a property and trigger change if necessary.
	 */
	function del (target, key) {
	  if (Array.isArray(target) && typeof key === 'number') {
	    target.splice(key, 1);
	    return
	  }
	  var ob = (target ).__ob__;
	  if (target._isVue || (ob && ob.vmCount)) {
	    "development" !== 'production' && warn(
	      'Avoid deleting properties on a Vue instance or its root $data ' +
	      '- just set it to null.'
	    );
	    return
	  }
	  if (!hasOwn(target, key)) {
	    return
	  }
	  delete target[key];
	  if (!ob) {
	    return
	  }
	  ob.dep.notify();
	}
	
	/**
	 * Collect dependencies on array elements when the array is touched, since
	 * we cannot intercept array element access like property getters.
	 */
	function dependArray (value) {
	  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
	    e = value[i];
	    e && e.__ob__ && e.__ob__.dep.depend();
	    if (Array.isArray(e)) {
	      dependArray(e);
	    }
	  }
	}
	
	/*  */
	
	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 */
	var strats = config.optionMergeStrategies;
	
	/**
	 * Options with restrictions
	 */
	{
	  strats.el = strats.propsData = function (parent, child, vm, key) {
	    if (!vm) {
	      warn(
	        "option \"" + key + "\" can only be used during instance " +
	        'creation with the `new` keyword.'
	      );
	    }
	    return defaultStrat(parent, child)
	  };
	}
	
	/**
	 * Helper that recursively merges two data objects together.
	 */
	function mergeData (to, from) {
	  if (!from) { return to }
	  var key, toVal, fromVal;
	  var keys = Object.keys(from);
	  for (var i = 0; i < keys.length; i++) {
	    key = keys[i];
	    toVal = to[key];
	    fromVal = from[key];
	    if (!hasOwn(to, key)) {
	      set(to, key, fromVal);
	    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
	      mergeData(toVal, fromVal);
	    }
	  }
	  return to
	}
	
	/**
	 * Data
	 */
	strats.data = function (
	  parentVal,
	  childVal,
	  vm
	) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal
	    }
	    if (typeof childVal !== 'function') {
	      "development" !== 'production' && warn(
	        'The "data" option should be a function ' +
	        'that returns a per-instance value in component ' +
	        'definitions.',
	        vm
	      );
	      return parentVal
	    }
	    if (!parentVal) {
	      return childVal
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn () {
	      return mergeData(
	        childVal.call(this),
	        parentVal.call(this)
	      )
	    }
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn () {
	      // instance merge
	      var instanceData = typeof childVal === 'function'
	        ? childVal.call(vm)
	        : childVal;
	      var defaultData = typeof parentVal === 'function'
	        ? parentVal.call(vm)
	        : undefined;
	      if (instanceData) {
	        return mergeData(instanceData, defaultData)
	      } else {
	        return defaultData
	      }
	    }
	  }
	};
	
	/**
	 * Hooks and props are merged as arrays.
	 */
	function mergeHook (
	  parentVal,
	  childVal
	) {
	  return childVal
	    ? parentVal
	      ? parentVal.concat(childVal)
	      : Array.isArray(childVal)
	        ? childVal
	        : [childVal]
	    : parentVal
	}
	
	LIFECYCLE_HOOKS.forEach(function (hook) {
	  strats[hook] = mergeHook;
	});
	
	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */
	function mergeAssets (parentVal, childVal) {
	  var res = Object.create(parentVal || null);
	  return childVal
	    ? extend(res, childVal)
	    : res
	}
	
	ASSET_TYPES.forEach(function (type) {
	  strats[type + 's'] = mergeAssets;
	});
	
	/**
	 * Watchers.
	 *
	 * Watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */
	strats.watch = function (parentVal, childVal) {
	  /* istanbul ignore if */
	  if (!childVal) { return Object.create(parentVal || null) }
	  if (!parentVal) { return childVal }
	  var ret = {};
	  extend(ret, parentVal);
	  for (var key in childVal) {
	    var parent = ret[key];
	    var child = childVal[key];
	    if (parent && !Array.isArray(parent)) {
	      parent = [parent];
	    }
	    ret[key] = parent
	      ? parent.concat(child)
	      : [child];
	  }
	  return ret
	};
	
	/**
	 * Other object hashes.
	 */
	strats.props =
	strats.methods =
	strats.computed = function (parentVal, childVal) {
	  if (!childVal) { return Object.create(parentVal || null) }
	  if (!parentVal) { return childVal }
	  var ret = Object.create(null);
	  extend(ret, parentVal);
	  extend(ret, childVal);
	  return ret
	};
	
	/**
	 * Default strategy.
	 */
	var defaultStrat = function (parentVal, childVal) {
	  return childVal === undefined
	    ? parentVal
	    : childVal
	};
	
	/**
	 * Validate component names
	 */
	function checkComponents (options) {
	  for (var key in options.components) {
	    var lower = key.toLowerCase();
	    if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
	      warn(
	        'Do not use built-in or reserved HTML elements as component ' +
	        'id: ' + key
	      );
	    }
	  }
	}
	
	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 */
	function normalizeProps (options) {
	  var props = options.props;
	  if (!props) { return }
	  var res = {};
	  var i, val, name;
	  if (Array.isArray(props)) {
	    i = props.length;
	    while (i--) {
	      val = props[i];
	      if (typeof val === 'string') {
	        name = camelize(val);
	        res[name] = { type: null };
	      } else {
	        warn('props must be strings when using array syntax.');
	      }
	    }
	  } else if (isPlainObject(props)) {
	    for (var key in props) {
	      val = props[key];
	      name = camelize(key);
	      res[name] = isPlainObject(val)
	        ? val
	        : { type: val };
	    }
	  }
	  options.props = res;
	}
	
	/**
	 * Normalize raw function directives into object format.
	 */
	function normalizeDirectives (options) {
	  var dirs = options.directives;
	  if (dirs) {
	    for (var key in dirs) {
	      var def = dirs[key];
	      if (typeof def === 'function') {
	        dirs[key] = { bind: def, update: def };
	      }
	    }
	  }
	}
	
	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 */
	function mergeOptions (
	  parent,
	  child,
	  vm
	) {
	  {
	    checkComponents(child);
	  }
	
	  if (typeof child === 'function') {
	    child = child.options;
	  }
	
	  normalizeProps(child);
	  normalizeDirectives(child);
	  var extendsFrom = child.extends;
	  if (extendsFrom) {
	    parent = mergeOptions(parent, extendsFrom, vm);
	  }
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      parent = mergeOptions(parent, child.mixins[i], vm);
	    }
	  }
	  var options = {};
	  var key;
	  for (key in parent) {
	    mergeField(key);
	  }
	  for (key in child) {
	    if (!hasOwn(parent, key)) {
	      mergeField(key);
	    }
	  }
	  function mergeField (key) {
	    var strat = strats[key] || defaultStrat;
	    options[key] = strat(parent[key], child[key], vm, key);
	  }
	  return options
	}
	
	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 */
	function resolveAsset (
	  options,
	  type,
	  id,
	  warnMissing
	) {
	  /* istanbul ignore if */
	  if (typeof id !== 'string') {
	    return
	  }
	  var assets = options[type];
	  // check local registration variations first
	  if (hasOwn(assets, id)) { return assets[id] }
	  var camelizedId = camelize(id);
	  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
	  var PascalCaseId = capitalize(camelizedId);
	  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
	  // fallback to prototype chain
	  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
	  if ("development" !== 'production' && warnMissing && !res) {
	    warn(
	      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
	      options
	    );
	  }
	  return res
	}
	
	/*  */
	
	function validateProp (
	  key,
	  propOptions,
	  propsData,
	  vm
	) {
	  var prop = propOptions[key];
	  var absent = !hasOwn(propsData, key);
	  var value = propsData[key];
	  // handle boolean props
	  if (isType(Boolean, prop.type)) {
	    if (absent && !hasOwn(prop, 'default')) {
	      value = false;
	    } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
	      value = true;
	    }
	  }
	  // check default value
	  if (value === undefined) {
	    value = getPropDefaultValue(vm, prop, key);
	    // since the default value is a fresh copy,
	    // make sure to observe it.
	    var prevShouldConvert = observerState.shouldConvert;
	    observerState.shouldConvert = true;
	    observe(value);
	    observerState.shouldConvert = prevShouldConvert;
	  }
	  {
	    assertProp(prop, key, value, vm, absent);
	  }
	  return value
	}
	
	/**
	 * Get the default value of a prop.
	 */
	function getPropDefaultValue (vm, prop, key) {
	  // no default, return undefined
	  if (!hasOwn(prop, 'default')) {
	    return undefined
	  }
	  var def = prop.default;
	  // warn against non-factory defaults for Object & Array
	  if ("development" !== 'production' && isObject(def)) {
	    warn(
	      'Invalid default value for prop "' + key + '": ' +
	      'Props with type Object/Array must use a factory function ' +
	      'to return the default value.',
	      vm
	    );
	  }
	  // the raw prop value was also undefined from previous render,
	  // return previous default value to avoid unnecessary watcher trigger
	  if (vm && vm.$options.propsData &&
	    vm.$options.propsData[key] === undefined &&
	    vm._props[key] !== undefined
	  ) {
	    return vm._props[key]
	  }
	  // call factory function for non-Function types
	  // a value is Function if its prototype is function even across different execution context
	  return typeof def === 'function' && getType(prop.type) !== 'Function'
	    ? def.call(vm)
	    : def
	}
	
	/**
	 * Assert whether a prop is valid.
	 */
	function assertProp (
	  prop,
	  name,
	  value,
	  vm,
	  absent
	) {
	  if (prop.required && absent) {
	    warn(
	      'Missing required prop: "' + name + '"',
	      vm
	    );
	    return
	  }
	  if (value == null && !prop.required) {
	    return
	  }
	  var type = prop.type;
	  var valid = !type || type === true;
	  var expectedTypes = [];
	  if (type) {
	    if (!Array.isArray(type)) {
	      type = [type];
	    }
	    for (var i = 0; i < type.length && !valid; i++) {
	      var assertedType = assertType(value, type[i]);
	      expectedTypes.push(assertedType.expectedType || '');
	      valid = assertedType.valid;
	    }
	  }
	  if (!valid) {
	    warn(
	      'Invalid prop: type check failed for prop "' + name + '".' +
	      ' Expected ' + expectedTypes.map(capitalize).join(', ') +
	      ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.',
	      vm
	    );
	    return
	  }
	  var validator = prop.validator;
	  if (validator) {
	    if (!validator(value)) {
	      warn(
	        'Invalid prop: custom validator check failed for prop "' + name + '".',
	        vm
	      );
	    }
	  }
	}
	
	var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;
	
	function assertType (value, type) {
	  var valid;
	  var expectedType = getType(type);
	  if (simpleCheckRE.test(expectedType)) {
	    valid = typeof value === expectedType.toLowerCase();
	  } else if (expectedType === 'Object') {
	    valid = isPlainObject(value);
	  } else if (expectedType === 'Array') {
	    valid = Array.isArray(value);
	  } else {
	    valid = value instanceof type;
	  }
	  return {
	    valid: valid,
	    expectedType: expectedType
	  }
	}
	
	/**
	 * Use function string name to check built-in types,
	 * because a simple equality check will fail when running
	 * across different vms / iframes.
	 */
	function getType (fn) {
	  var match = fn && fn.toString().match(/^\s*function (\w+)/);
	  return match ? match[1] : ''
	}
	
	function isType (type, fn) {
	  if (!Array.isArray(fn)) {
	    return getType(fn) === getType(type)
	  }
	  for (var i = 0, len = fn.length; i < len; i++) {
	    if (getType(fn[i]) === getType(type)) {
	      return true
	    }
	  }
	  /* istanbul ignore next */
	  return false
	}
	
	/*  */
	
	var mark;
	var measure;
	
	{
	  var perf = inBrowser && window.performance;
	  /* istanbul ignore if */
	  if (
	    perf &&
	    perf.mark &&
	    perf.measure &&
	    perf.clearMarks &&
	    perf.clearMeasures
	  ) {
	    mark = function (tag) { return perf.mark(tag); };
	    measure = function (name, startTag, endTag) {
	      perf.measure(name, startTag, endTag);
	      perf.clearMarks(startTag);
	      perf.clearMarks(endTag);
	      perf.clearMeasures(name);
	    };
	  }
	}
	
	/* not type checking this file because flow doesn't play well with Proxy */
	
	var initProxy;
	
	{
	  var allowedGlobals = makeMap(
	    'Infinity,undefined,NaN,isFinite,isNaN,' +
	    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
	    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
	    'require' // for Webpack/Browserify
	  );
	
	  var warnNonPresent = function (target, key) {
	    warn(
	      "Property or method \"" + key + "\" is not defined on the instance but " +
	      "referenced during render. Make sure to declare reactive data " +
	      "properties in the data option.",
	      target
	    );
	  };
	
	  var hasProxy =
	    typeof Proxy !== 'undefined' &&
	    Proxy.toString().match(/native code/);
	
	  if (hasProxy) {
	    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta');
	    config.keyCodes = new Proxy(config.keyCodes, {
	      set: function set (target, key, value) {
	        if (isBuiltInModifier(key)) {
	          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
	          return false
	        } else {
	          target[key] = value;
	          return true
	        }
	      }
	    });
	  }
	
	  var hasHandler = {
	    has: function has (target, key) {
	      var has = key in target;
	      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
	      if (!has && !isAllowed) {
	        warnNonPresent(target, key);
	      }
	      return has || !isAllowed
	    }
	  };
	
	  var getHandler = {
	    get: function get (target, key) {
	      if (typeof key === 'string' && !(key in target)) {
	        warnNonPresent(target, key);
	      }
	      return target[key]
	    }
	  };
	
	  initProxy = function initProxy (vm) {
	    if (hasProxy) {
	      // determine which proxy handler to use
	      var options = vm.$options;
	      var handlers = options.render && options.render._withStripped
	        ? getHandler
	        : hasHandler;
	      vm._renderProxy = new Proxy(vm, handlers);
	    } else {
	      vm._renderProxy = vm;
	    }
	  };
	}
	
	/*  */
	
	var VNode = function VNode (
	  tag,
	  data,
	  children,
	  text,
	  elm,
	  context,
	  componentOptions
	) {
	  this.tag = tag;
	  this.data = data;
	  this.children = children;
	  this.text = text;
	  this.elm = elm;
	  this.ns = undefined;
	  this.context = context;
	  this.functionalContext = undefined;
	  this.key = data && data.key;
	  this.componentOptions = componentOptions;
	  this.componentInstance = undefined;
	  this.parent = undefined;
	  this.raw = false;
	  this.isStatic = false;
	  this.isRootInsert = true;
	  this.isComment = false;
	  this.isCloned = false;
	  this.isOnce = false;
	};
	
	var prototypeAccessors = { child: {} };
	
	// DEPRECATED: alias for componentInstance for backwards compat.
	/* istanbul ignore next */
	prototypeAccessors.child.get = function () {
	  return this.componentInstance
	};
	
	Object.defineProperties( VNode.prototype, prototypeAccessors );
	
	var createEmptyVNode = function () {
	  var node = new VNode();
	  node.text = '';
	  node.isComment = true;
	  return node
	};
	
	function createTextVNode (val) {
	  return new VNode(undefined, undefined, undefined, String(val))
	}
	
	// optimized shallow clone
	// used for static nodes and slot nodes because they may be reused across
	// multiple renders, cloning them avoids errors when DOM manipulations rely
	// on their elm reference.
	function cloneVNode (vnode) {
	  var cloned = new VNode(
	    vnode.tag,
	    vnode.data,
	    vnode.children,
	    vnode.text,
	    vnode.elm,
	    vnode.context,
	    vnode.componentOptions
	  );
	  cloned.ns = vnode.ns;
	  cloned.isStatic = vnode.isStatic;
	  cloned.key = vnode.key;
	  cloned.isComment = vnode.isComment;
	  cloned.isCloned = true;
	  return cloned
	}
	
	function cloneVNodes (vnodes) {
	  var len = vnodes.length;
	  var res = new Array(len);
	  for (var i = 0; i < len; i++) {
	    res[i] = cloneVNode(vnodes[i]);
	  }
	  return res
	}
	
	/*  */
	
	var normalizeEvent = cached(function (name) {
	  var passive = name.charAt(0) === '&';
	  name = passive ? name.slice(1) : name;
	  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
	  name = once$$1 ? name.slice(1) : name;
	  var capture = name.charAt(0) === '!';
	  name = capture ? name.slice(1) : name;
	  return {
	    name: name,
	    once: once$$1,
	    capture: capture,
	    passive: passive
	  }
	});
	
	function createFnInvoker (fns) {
	  function invoker () {
	    var arguments$1 = arguments;
	
	    var fns = invoker.fns;
	    if (Array.isArray(fns)) {
	      for (var i = 0; i < fns.length; i++) {
	        fns[i].apply(null, arguments$1);
	      }
	    } else {
	      // return handler return value for single handlers
	      return fns.apply(null, arguments)
	    }
	  }
	  invoker.fns = fns;
	  return invoker
	}
	
	function updateListeners (
	  on,
	  oldOn,
	  add,
	  remove$$1,
	  vm
	) {
	  var name, cur, old, event;
	  for (name in on) {
	    cur = on[name];
	    old = oldOn[name];
	    event = normalizeEvent(name);
	    if (isUndef(cur)) {
	      "development" !== 'production' && warn(
	        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
	        vm
	      );
	    } else if (isUndef(old)) {
	      if (isUndef(cur.fns)) {
	        cur = on[name] = createFnInvoker(cur);
	      }
	      add(event.name, cur, event.once, event.capture, event.passive);
	    } else if (cur !== old) {
	      old.fns = cur;
	      on[name] = old;
	    }
	  }
	  for (name in oldOn) {
	    if (isUndef(on[name])) {
	      event = normalizeEvent(name);
	      remove$$1(event.name, oldOn[name], event.capture);
	    }
	  }
	}
	
	/*  */
	
	function mergeVNodeHook (def, hookKey, hook) {
	  var invoker;
	  var oldHook = def[hookKey];
	
	  function wrappedHook () {
	    hook.apply(this, arguments);
	    // important: remove merged hook to ensure it's called only once
	    // and prevent memory leak
	    remove(invoker.fns, wrappedHook);
	  }
	
	  if (isUndef(oldHook)) {
	    // no existing hook
	    invoker = createFnInvoker([wrappedHook]);
	  } else {
	    /* istanbul ignore if */
	    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
	      // already a merged invoker
	      invoker = oldHook;
	      invoker.fns.push(wrappedHook);
	    } else {
	      // existing plain hook
	      invoker = createFnInvoker([oldHook, wrappedHook]);
	    }
	  }
	
	  invoker.merged = true;
	  def[hookKey] = invoker;
	}
	
	/*  */
	
	function extractPropsFromVNodeData (
	  data,
	  Ctor,
	  tag
	) {
	  // we are only extracting raw values here.
	  // validation and default values are handled in the child
	  // component itself.
	  var propOptions = Ctor.options.props;
	  if (isUndef(propOptions)) {
	    return
	  }
	  var res = {};
	  var attrs = data.attrs;
	  var props = data.props;
	  if (isDef(attrs) || isDef(props)) {
	    for (var key in propOptions) {
	      var altKey = hyphenate(key);
	      {
	        var keyInLowerCase = key.toLowerCase();
	        if (
	          key !== keyInLowerCase &&
	          attrs && hasOwn(attrs, keyInLowerCase)
	        ) {
	          tip(
	            "Prop \"" + keyInLowerCase + "\" is passed to component " +
	            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
	            " \"" + key + "\". " +
	            "Note that HTML attributes are case-insensitive and camelCased " +
	            "props need to use their kebab-case equivalents when using in-DOM " +
	            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
	          );
	        }
	      }
	      checkProp(res, props, key, altKey, true) ||
	      checkProp(res, attrs, key, altKey, false);
	    }
	  }
	  return res
	}
	
	function checkProp (
	  res,
	  hash,
	  key,
	  altKey,
	  preserve
	) {
	  if (isDef(hash)) {
	    if (hasOwn(hash, key)) {
	      res[key] = hash[key];
	      if (!preserve) {
	        delete hash[key];
	      }
	      return true
	    } else if (hasOwn(hash, altKey)) {
	      res[key] = hash[altKey];
	      if (!preserve) {
	        delete hash[altKey];
	      }
	      return true
	    }
	  }
	  return false
	}
	
	/*  */
	
	// The template compiler attempts to minimize the need for normalization by
	// statically analyzing the template at compile time.
	//
	// For plain HTML markup, normalization can be completely skipped because the
	// generated render function is guaranteed to return Array<VNode>. There are
	// two cases where extra normalization is needed:
	
	// 1. When the children contains components - because a functional component
	// may return an Array instead of a single root. In this case, just a simple
	// normalization is needed - if any child is an Array, we flatten the whole
	// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
	// because functional components already normalize their own children.
	function simpleNormalizeChildren (children) {
	  for (var i = 0; i < children.length; i++) {
	    if (Array.isArray(children[i])) {
	      return Array.prototype.concat.apply([], children)
	    }
	  }
	  return children
	}
	
	// 2. When the children contains constructs that always generated nested Arrays,
	// e.g. <template>, <slot>, v-for, or when the children is provided by user
	// with hand-written render functions / JSX. In such cases a full normalization
	// is needed to cater to all possible types of children values.
	function normalizeChildren (children) {
	  return isPrimitive(children)
	    ? [createTextVNode(children)]
	    : Array.isArray(children)
	      ? normalizeArrayChildren(children)
	      : undefined
	}
	
	function isTextNode (node) {
	  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
	}
	
	function normalizeArrayChildren (children, nestedIndex) {
	  var res = [];
	  var i, c, last;
	  for (i = 0; i < children.length; i++) {
	    c = children[i];
	    if (isUndef(c) || typeof c === 'boolean') { continue }
	    last = res[res.length - 1];
	    //  nested
	    if (Array.isArray(c)) {
	      res.push.apply(res, normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i)));
	    } else if (isPrimitive(c)) {
	      if (isTextNode(last)) {
	        // merge adjacent text nodes
	        // this is necessary for SSR hydration because text nodes are
	        // essentially merged when rendered to HTML strings
	        (last).text += String(c);
	      } else if (c !== '') {
	        // convert primitive to vnode
	        res.push(createTextVNode(c));
	      }
	    } else {
	      if (isTextNode(c) && isTextNode(last)) {
	        // merge adjacent text nodes
	        res[res.length - 1] = createTextVNode(last.text + c.text);
	      } else {
	        // default key for nested array children (likely generated by v-for)
	        if (isTrue(children._isVList) &&
	          isDef(c.tag) &&
	          isUndef(c.key) &&
	          isDef(nestedIndex)) {
	          c.key = "__vlist" + nestedIndex + "_" + i + "__";
	        }
	        res.push(c);
	      }
	    }
	  }
	  return res
	}
	
	/*  */
	
	function ensureCtor (comp, base) {
	  return isObject(comp)
	    ? base.extend(comp)
	    : comp
	}
	
	function resolveAsyncComponent (
	  factory,
	  baseCtor,
	  context
	) {
	  if (isTrue(factory.error) && isDef(factory.errorComp)) {
	    return factory.errorComp
	  }
	
	  if (isDef(factory.resolved)) {
	    return factory.resolved
	  }
	
	  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
	    return factory.loadingComp
	  }
	
	  if (isDef(factory.contexts)) {
	    // already pending
	    factory.contexts.push(context);
	  } else {
	    var contexts = factory.contexts = [context];
	    var sync = true;
	
	    var forceRender = function () {
	      for (var i = 0, l = contexts.length; i < l; i++) {
	        contexts[i].$forceUpdate();
	      }
	    };
	
	    var resolve = once(function (res) {
	      // cache resolved
	      factory.resolved = ensureCtor(res, baseCtor);
	      // invoke callbacks only if this is not a synchronous resolve
	      // (async resolves are shimmed as synchronous during SSR)
	      if (!sync) {
	        forceRender();
	      }
	    });
	
	    var reject = once(function (reason) {
	      "development" !== 'production' && warn(
	        "Failed to resolve async component: " + (String(factory)) +
	        (reason ? ("\nReason: " + reason) : '')
	      );
	      if (isDef(factory.errorComp)) {
	        factory.error = true;
	        forceRender();
	      }
	    });
	
	    var res = factory(resolve, reject);
	
	    if (isObject(res)) {
	      if (typeof res.then === 'function') {
	        // () => Promise
	        if (isUndef(factory.resolved)) {
	          res.then(resolve, reject);
	        }
	      } else if (isDef(res.component) && typeof res.component.then === 'function') {
	        res.component.then(resolve, reject);
	
	        if (isDef(res.error)) {
	          factory.errorComp = ensureCtor(res.error, baseCtor);
	        }
	
	        if (isDef(res.loading)) {
	          factory.loadingComp = ensureCtor(res.loading, baseCtor);
	          if (res.delay === 0) {
	            factory.loading = true;
	          } else {
	            setTimeout(function () {
	              if (isUndef(factory.resolved) && isUndef(factory.error)) {
	                factory.loading = true;
	                forceRender();
	              }
	            }, res.delay || 200);
	          }
	        }
	
	        if (isDef(res.timeout)) {
	          setTimeout(function () {
	            if (isUndef(factory.resolved)) {
	              reject(
	                "timeout (" + (res.timeout) + "ms)"
	              );
	            }
	          }, res.timeout);
	        }
	      }
	    }
	
	    sync = false;
	    // return in case resolved synchronously
	    return factory.loading
	      ? factory.loadingComp
	      : factory.resolved
	  }
	}
	
	/*  */
	
	function getFirstComponentChild (children) {
	  if (Array.isArray(children)) {
	    for (var i = 0; i < children.length; i++) {
	      var c = children[i];
	      if (isDef(c) && isDef(c.componentOptions)) {
	        return c
	      }
	    }
	  }
	}
	
	/*  */
	
	/*  */
	
	function initEvents (vm) {
	  vm._events = Object.create(null);
	  vm._hasHookEvent = false;
	  // init parent attached events
	  var listeners = vm.$options._parentListeners;
	  if (listeners) {
	    updateComponentListeners(vm, listeners);
	  }
	}
	
	var target;
	
	function add (event, fn, once$$1) {
	  if (once$$1) {
	    target.$once(event, fn);
	  } else {
	    target.$on(event, fn);
	  }
	}
	
	function remove$1 (event, fn) {
	  target.$off(event, fn);
	}
	
	function updateComponentListeners (
	  vm,
	  listeners,
	  oldListeners
	) {
	  target = vm;
	  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
	}
	
	function eventsMixin (Vue) {
	  var hookRE = /^hook:/;
	  Vue.prototype.$on = function (event, fn) {
	    var this$1 = this;
	
	    var vm = this;
	    if (Array.isArray(event)) {
	      for (var i = 0, l = event.length; i < l; i++) {
	        this$1.$on(event[i], fn);
	      }
	    } else {
	      (vm._events[event] || (vm._events[event] = [])).push(fn);
	      // optimize hook:event cost by using a boolean flag marked at registration
	      // instead of a hash lookup
	      if (hookRE.test(event)) {
	        vm._hasHookEvent = true;
	      }
	    }
	    return vm
	  };
	
	  Vue.prototype.$once = function (event, fn) {
	    var vm = this;
	    function on () {
	      vm.$off(event, on);
	      fn.apply(vm, arguments);
	    }
	    on.fn = fn;
	    vm.$on(event, on);
	    return vm
	  };
	
	  Vue.prototype.$off = function (event, fn) {
	    var this$1 = this;
	
	    var vm = this;
	    // all
	    if (!arguments.length) {
	      vm._events = Object.create(null);
	      return vm
	    }
	    // array of events
	    if (Array.isArray(event)) {
	      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
	        this$1.$off(event[i$1], fn);
	      }
	      return vm
	    }
	    // specific event
	    var cbs = vm._events[event];
	    if (!cbs) {
	      return vm
	    }
	    if (arguments.length === 1) {
	      vm._events[event] = null;
	      return vm
	    }
	    // specific handler
	    var cb;
	    var i = cbs.length;
	    while (i--) {
	      cb = cbs[i];
	      if (cb === fn || cb.fn === fn) {
	        cbs.splice(i, 1);
	        break
	      }
	    }
	    return vm
	  };
	
	  Vue.prototype.$emit = function (event) {
	    var vm = this;
	    {
	      var lowerCaseEvent = event.toLowerCase();
	      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
	        tip(
	          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
	          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
	          "Note that HTML attributes are case-insensitive and you cannot use " +
	          "v-on to listen to camelCase events when using in-DOM templates. " +
	          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
	        );
	      }
	    }
	    var cbs = vm._events[event];
	    if (cbs) {
	      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
	      var args = toArray(arguments, 1);
	      for (var i = 0, l = cbs.length; i < l; i++) {
	        cbs[i].apply(vm, args);
	      }
	    }
	    return vm
	  };
	}
	
	/*  */
	
	/**
	 * Runtime helper for resolving raw children VNodes into a slot object.
	 */
	function resolveSlots (
	  children,
	  context
	) {
	  var slots = {};
	  if (!children) {
	    return slots
	  }
	  var defaultSlot = [];
	  for (var i = 0, l = children.length; i < l; i++) {
	    var child = children[i];
	    // named slots should only be respected if the vnode was rendered in the
	    // same context.
	    if ((child.context === context || child.functionalContext === context) &&
	      child.data && child.data.slot != null
	    ) {
	      var name = child.data.slot;
	      var slot = (slots[name] || (slots[name] = []));
	      if (child.tag === 'template') {
	        slot.push.apply(slot, child.children);
	      } else {
	        slot.push(child);
	      }
	    } else {
	      defaultSlot.push(child);
	    }
	  }
	  // ignore whitespace
	  if (!defaultSlot.every(isWhitespace)) {
	    slots.default = defaultSlot;
	  }
	  return slots
	}
	
	function isWhitespace (node) {
	  return node.isComment || node.text === ' '
	}
	
	function resolveScopedSlots (
	  fns, // see flow/vnode
	  res
	) {
	  res = res || {};
	  for (var i = 0; i < fns.length; i++) {
	    if (Array.isArray(fns[i])) {
	      resolveScopedSlots(fns[i], res);
	    } else {
	      res[fns[i].key] = fns[i].fn;
	    }
	  }
	  return res
	}
	
	/*  */
	
	var activeInstance = null;
	
	function initLifecycle (vm) {
	  var options = vm.$options;
	
	  // locate first non-abstract parent
	  var parent = options.parent;
	  if (parent && !options.abstract) {
	    while (parent.$options.abstract && parent.$parent) {
	      parent = parent.$parent;
	    }
	    parent.$children.push(vm);
	  }
	
	  vm.$parent = parent;
	  vm.$root = parent ? parent.$root : vm;
	
	  vm.$children = [];
	  vm.$refs = {};
	
	  vm._watcher = null;
	  vm._inactive = null;
	  vm._directInactive = false;
	  vm._isMounted = false;
	  vm._isDestroyed = false;
	  vm._isBeingDestroyed = false;
	}
	
	function lifecycleMixin (Vue) {
	  Vue.prototype._update = function (vnode, hydrating) {
	    var vm = this;
	    if (vm._isMounted) {
	      callHook(vm, 'beforeUpdate');
	    }
	    var prevEl = vm.$el;
	    var prevVnode = vm._vnode;
	    var prevActiveInstance = activeInstance;
	    activeInstance = vm;
	    vm._vnode = vnode;
	    // Vue.prototype.__patch__ is injected in entry points
	    // based on the rendering backend used.
	    if (!prevVnode) {
	      // initial render
	      vm.$el = vm.__patch__(
	        vm.$el, vnode, hydrating, false /* removeOnly */,
	        vm.$options._parentElm,
	        vm.$options._refElm
	      );
	    } else {
	      // updates
	      vm.$el = vm.__patch__(prevVnode, vnode);
	    }
	    activeInstance = prevActiveInstance;
	    // update __vue__ reference
	    if (prevEl) {
	      prevEl.__vue__ = null;
	    }
	    if (vm.$el) {
	      vm.$el.__vue__ = vm;
	    }
	    // if parent is an HOC, update its $el as well
	    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
	      vm.$parent.$el = vm.$el;
	    }
	    // updated hook is called by the scheduler to ensure that children are
	    // updated in a parent's updated hook.
	  };
	
	  Vue.prototype.$forceUpdate = function () {
	    var vm = this;
	    if (vm._watcher) {
	      vm._watcher.update();
	    }
	  };
	
	  Vue.prototype.$destroy = function () {
	    var vm = this;
	    if (vm._isBeingDestroyed) {
	      return
	    }
	    callHook(vm, 'beforeDestroy');
	    vm._isBeingDestroyed = true;
	    // remove self from parent
	    var parent = vm.$parent;
	    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
	      remove(parent.$children, vm);
	    }
	    // teardown watchers
	    if (vm._watcher) {
	      vm._watcher.teardown();
	    }
	    var i = vm._watchers.length;
	    while (i--) {
	      vm._watchers[i].teardown();
	    }
	    // remove reference from data ob
	    // frozen object may not have observer.
	    if (vm._data.__ob__) {
	      vm._data.__ob__.vmCount--;
	    }
	    // call the last hook...
	    vm._isDestroyed = true;
	    // invoke destroy hooks on current rendered tree
	    vm.__patch__(vm._vnode, null);
	    // fire destroyed hook
	    callHook(vm, 'destroyed');
	    // turn off all instance listeners.
	    vm.$off();
	    // remove __vue__ reference
	    if (vm.$el) {
	      vm.$el.__vue__ = null;
	    }
	    // remove reference to DOM nodes (prevents leak)
	    vm.$options._parentElm = vm.$options._refElm = null;
	  };
	}
	
	function mountComponent (
	  vm,
	  el,
	  hydrating
	) {
	  vm.$el = el;
	  if (!vm.$options.render) {
	    vm.$options.render = createEmptyVNode;
	    {
	      /* istanbul ignore if */
	      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
	        vm.$options.el || el) {
	        warn(
	          'You are using the runtime-only build of Vue where the template ' +
	          'compiler is not available. Either pre-compile the templates into ' +
	          'render functions, or use the compiler-included build.',
	          vm
	        );
	      } else {
	        warn(
	          'Failed to mount component: template or render function not defined.',
	          vm
	        );
	      }
	    }
	  }
	  callHook(vm, 'beforeMount');
	
	  var updateComponent;
	  /* istanbul ignore if */
	  if ("development" !== 'production' && config.performance && mark) {
	    updateComponent = function () {
	      var name = vm._name;
	      var id = vm._uid;
	      var startTag = "vue-perf-start:" + id;
	      var endTag = "vue-perf-end:" + id;
	
	      mark(startTag);
	      var vnode = vm._render();
	      mark(endTag);
	      measure((name + " render"), startTag, endTag);
	
	      mark(startTag);
	      vm._update(vnode, hydrating);
	      mark(endTag);
	      measure((name + " patch"), startTag, endTag);
	    };
	  } else {
	    updateComponent = function () {
	      vm._update(vm._render(), hydrating);
	    };
	  }
	
	  vm._watcher = new Watcher(vm, updateComponent, noop);
	  hydrating = false;
	
	  // manually mounted instance, call mounted on self
	  // mounted is called for render-created child components in its inserted hook
	  if (vm.$vnode == null) {
	    vm._isMounted = true;
	    callHook(vm, 'mounted');
	  }
	  return vm
	}
	
	function updateChildComponent (
	  vm,
	  propsData,
	  listeners,
	  parentVnode,
	  renderChildren
	) {
	  // determine whether component has slot children
	  // we need to do this before overwriting $options._renderChildren
	  var hasChildren = !!(
	    renderChildren ||               // has new static slots
	    vm.$options._renderChildren ||  // has old static slots
	    parentVnode.data.scopedSlots || // has new scoped slots
	    vm.$scopedSlots !== emptyObject // has old scoped slots
	  );
	
	  vm.$options._parentVnode = parentVnode;
	  vm.$vnode = parentVnode; // update vm's placeholder node without re-render
	  if (vm._vnode) { // update child tree's parent
	    vm._vnode.parent = parentVnode;
	  }
	  vm.$options._renderChildren = renderChildren;
	
	  // update props
	  if (propsData && vm.$options.props) {
	    observerState.shouldConvert = false;
	    {
	      observerState.isSettingProps = true;
	    }
	    var props = vm._props;
	    var propKeys = vm.$options._propKeys || [];
	    for (var i = 0; i < propKeys.length; i++) {
	      var key = propKeys[i];
	      props[key] = validateProp(key, vm.$options.props, propsData, vm);
	    }
	    observerState.shouldConvert = true;
	    {
	      observerState.isSettingProps = false;
	    }
	    // keep a copy of raw propsData
	    vm.$options.propsData = propsData;
	  }
	  // update listeners
	  if (listeners) {
	    var oldListeners = vm.$options._parentListeners;
	    vm.$options._parentListeners = listeners;
	    updateComponentListeners(vm, listeners, oldListeners);
	  }
	  // resolve slots + force update if has children
	  if (hasChildren) {
	    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
	    vm.$forceUpdate();
	  }
	}
	
	function isInInactiveTree (vm) {
	  while (vm && (vm = vm.$parent)) {
	    if (vm._inactive) { return true }
	  }
	  return false
	}
	
	function activateChildComponent (vm, direct) {
	  if (direct) {
	    vm._directInactive = false;
	    if (isInInactiveTree(vm)) {
	      return
	    }
	  } else if (vm._directInactive) {
	    return
	  }
	  if (vm._inactive || vm._inactive === null) {
	    vm._inactive = false;
	    for (var i = 0; i < vm.$children.length; i++) {
	      activateChildComponent(vm.$children[i]);
	    }
	    callHook(vm, 'activated');
	  }
	}
	
	function deactivateChildComponent (vm, direct) {
	  if (direct) {
	    vm._directInactive = true;
	    if (isInInactiveTree(vm)) {
	      return
	    }
	  }
	  if (!vm._inactive) {
	    vm._inactive = true;
	    for (var i = 0; i < vm.$children.length; i++) {
	      deactivateChildComponent(vm.$children[i]);
	    }
	    callHook(vm, 'deactivated');
	  }
	}
	
	function callHook (vm, hook) {
	  var handlers = vm.$options[hook];
	  if (handlers) {
	    for (var i = 0, j = handlers.length; i < j; i++) {
	      try {
	        handlers[i].call(vm);
	      } catch (e) {
	        handleError(e, vm, (hook + " hook"));
	      }
	    }
	  }
	  if (vm._hasHookEvent) {
	    vm.$emit('hook:' + hook);
	  }
	}
	
	/*  */
	
	
	var MAX_UPDATE_COUNT = 100;
	
	var queue = [];
	var activatedChildren = [];
	var has = {};
	var circular = {};
	var waiting = false;
	var flushing = false;
	var index = 0;
	
	/**
	 * Reset the scheduler's state.
	 */
	function resetSchedulerState () {
	  index = queue.length = activatedChildren.length = 0;
	  has = {};
	  {
	    circular = {};
	  }
	  waiting = flushing = false;
	}
	
	/**
	 * Flush both queues and run the watchers.
	 */
	function flushSchedulerQueue () {
	  flushing = true;
	  var watcher, id;
	
	  // Sort queue before flush.
	  // This ensures that:
	  // 1. Components are updated from parent to child. (because parent is always
	  //    created before the child)
	  // 2. A component's user watchers are run before its render watcher (because
	  //    user watchers are created before the render watcher)
	  // 3. If a component is destroyed during a parent component's watcher run,
	  //    its watchers can be skipped.
	  queue.sort(function (a, b) { return a.id - b.id; });
	
	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (index = 0; index < queue.length; index++) {
	    watcher = queue[index];
	    id = watcher.id;
	    has[id] = null;
	    watcher.run();
	    // in dev build, check and stop circular updates.
	    if ("development" !== 'production' && has[id] != null) {
	      circular[id] = (circular[id] || 0) + 1;
	      if (circular[id] > MAX_UPDATE_COUNT) {
	        warn(
	          'You may have an infinite update loop ' + (
	            watcher.user
	              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
	              : "in a component render function."
	          ),
	          watcher.vm
	        );
	        break
	      }
	    }
	  }
	
	  // keep copies of post queues before resetting state
	  var activatedQueue = activatedChildren.slice();
	  var updatedQueue = queue.slice();
	
	  resetSchedulerState();
	
	  // call component updated and activated hooks
	  callActivatedHooks(activatedQueue);
	  callUpdateHooks(updatedQueue);
	
	  // devtool hook
	  /* istanbul ignore if */
	  if (devtools && config.devtools) {
	    devtools.emit('flush');
	  }
	}
	
	function callUpdateHooks (queue) {
	  var i = queue.length;
	  while (i--) {
	    var watcher = queue[i];
	    var vm = watcher.vm;
	    if (vm._watcher === watcher && vm._isMounted) {
	      callHook(vm, 'updated');
	    }
	  }
	}
	
	/**
	 * Queue a kept-alive component that was activated during patch.
	 * The queue will be processed after the entire tree has been patched.
	 */
	function queueActivatedComponent (vm) {
	  // setting _inactive to false here so that a render function can
	  // rely on checking whether it's in an inactive tree (e.g. router-view)
	  vm._inactive = false;
	  activatedChildren.push(vm);
	}
	
	function callActivatedHooks (queue) {
	  for (var i = 0; i < queue.length; i++) {
	    queue[i]._inactive = true;
	    activateChildComponent(queue[i], true /* true */);
	  }
	}
	
	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 */
	function queueWatcher (watcher) {
	  var id = watcher.id;
	  if (has[id] == null) {
	    has[id] = true;
	    if (!flushing) {
	      queue.push(watcher);
	    } else {
	      // if already flushing, splice the watcher based on its id
	      // if already past its id, it will be run next immediately.
	      var i = queue.length - 1;
	      while (i > index && queue[i].id > watcher.id) {
	        i--;
	      }
	      queue.splice(i + 1, 0, watcher);
	    }
	    // queue the flush
	    if (!waiting) {
	      waiting = true;
	      nextTick(flushSchedulerQueue);
	    }
	  }
	}
	
	/*  */
	
	var uid$2 = 0;
	
	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 */
	var Watcher = function Watcher (
	  vm,
	  expOrFn,
	  cb,
	  options
	) {
	  this.vm = vm;
	  vm._watchers.push(this);
	  // options
	  if (options) {
	    this.deep = !!options.deep;
	    this.user = !!options.user;
	    this.lazy = !!options.lazy;
	    this.sync = !!options.sync;
	  } else {
	    this.deep = this.user = this.lazy = this.sync = false;
	  }
	  this.cb = cb;
	  this.id = ++uid$2; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = [];
	  this.newDeps = [];
	  this.depIds = new _Set();
	  this.newDepIds = new _Set();
	  this.expression = expOrFn.toString();
	  // parse expression for getter
	  if (typeof expOrFn === 'function') {
	    this.getter = expOrFn;
	  } else {
	    this.getter = parsePath(expOrFn);
	    if (!this.getter) {
	      this.getter = function () {};
	      "development" !== 'production' && warn(
	        "Failed watching path: \"" + expOrFn + "\" " +
	        'Watcher only accepts simple dot-delimited paths. ' +
	        'For full control, use a function instead.',
	        vm
	      );
	    }
	  }
	  this.value = this.lazy
	    ? undefined
	    : this.get();
	};
	
	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */
	Watcher.prototype.get = function get () {
	  pushTarget(this);
	  var value;
	  var vm = this.vm;
	  if (this.user) {
	    try {
	      value = this.getter.call(vm, vm);
	    } catch (e) {
	      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
	    }
	  } else {
	    value = this.getter.call(vm, vm);
	  }
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  popTarget();
	  this.cleanupDeps();
	  return value
	};
	
	/**
	 * Add a dependency to this directive.
	 */
	Watcher.prototype.addDep = function addDep (dep) {
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
	Watcher.prototype.cleanupDeps = function cleanupDeps () {
	    var this$1 = this;
	
	  var i = this.deps.length;
	  while (i--) {
	    var dep = this$1.deps[i];
	    if (!this$1.newDepIds.has(dep.id)) {
	      dep.removeSub(this$1);
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
	 */
	Watcher.prototype.update = function update () {
	  /* istanbul ignore else */
	  if (this.lazy) {
	    this.dirty = true;
	  } else if (this.sync) {
	    this.run();
	  } else {
	    queueWatcher(this);
	  }
	};
	
	/**
	 * Scheduler job interface.
	 * Will be called by the scheduler.
	 */
	Watcher.prototype.run = function run () {
	  if (this.active) {
	    var value = this.get();
	    if (
	      value !== this.value ||
	      // Deep watchers and watchers on Object/Arrays should fire even
	      // when the value is the same, because the value may
	      // have mutated.
	      isObject(value) ||
	      this.deep
	    ) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      if (this.user) {
	        try {
	          this.cb.call(this.vm, value, oldValue);
	        } catch (e) {
	          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue);
	      }
	    }
	  }
	};
	
	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */
	Watcher.prototype.evaluate = function evaluate () {
	  this.value = this.get();
	  this.dirty = false;
	};
	
	/**
	 * Depend on all deps collected by this watcher.
	 */
	Watcher.prototype.depend = function depend () {
	    var this$1 = this;
	
	  var i = this.deps.length;
	  while (i--) {
	    this$1.deps[i].depend();
	  }
	};
	
	/**
	 * Remove self from all dependencies' subscriber list.
	 */
	Watcher.prototype.teardown = function teardown () {
	    var this$1 = this;
	
	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed.
	    if (!this.vm._isBeingDestroyed) {
	      remove(this.vm._watchers, this);
	    }
	    var i = this.deps.length;
	    while (i--) {
	      this$1.deps[i].removeSub(this$1);
	    }
	    this.active = false;
	  }
	};
	
	/**
	 * Recursively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 */
	var seenObjects = new _Set();
	function traverse (val) {
	  seenObjects.clear();
	  _traverse(val, seenObjects);
	}
	
	function _traverse (val, seen) {
	  var i, keys;
	  var isA = Array.isArray(val);
	  if ((!isA && !isObject(val)) || !Object.isExtensible(val)) {
	    return
	  }
	  if (val.__ob__) {
	    var depId = val.__ob__.dep.id;
	    if (seen.has(depId)) {
	      return
	    }
	    seen.add(depId);
	  }
	  if (isA) {
	    i = val.length;
	    while (i--) { _traverse(val[i], seen); }
	  } else {
	    keys = Object.keys(val);
	    i = keys.length;
	    while (i--) { _traverse(val[keys[i]], seen); }
	  }
	}
	
	/*  */
	
	var sharedPropertyDefinition = {
	  enumerable: true,
	  configurable: true,
	  get: noop,
	  set: noop
	};
	
	function proxy (target, sourceKey, key) {
	  sharedPropertyDefinition.get = function proxyGetter () {
	    return this[sourceKey][key]
	  };
	  sharedPropertyDefinition.set = function proxySetter (val) {
	    this[sourceKey][key] = val;
	  };
	  Object.defineProperty(target, key, sharedPropertyDefinition);
	}
	
	function initState (vm) {
	  vm._watchers = [];
	  var opts = vm.$options;
	  if (opts.props) { initProps(vm, opts.props); }
	  if (opts.methods) { initMethods(vm, opts.methods); }
	  if (opts.data) {
	    initData(vm);
	  } else {
	    observe(vm._data = {}, true /* asRootData */);
	  }
	  if (opts.computed) { initComputed(vm, opts.computed); }
	  if (opts.watch) { initWatch(vm, opts.watch); }
	}
	
	var isReservedProp = {
	  key: 1,
	  ref: 1,
	  slot: 1
	};
	
	function initProps (vm, propsOptions) {
	  var propsData = vm.$options.propsData || {};
	  var props = vm._props = {};
	  // cache prop keys so that future props updates can iterate using Array
	  // instead of dynamic object key enumeration.
	  var keys = vm.$options._propKeys = [];
	  var isRoot = !vm.$parent;
	  // root instance props should be converted
	  observerState.shouldConvert = isRoot;
	  var loop = function ( key ) {
	    keys.push(key);
	    var value = validateProp(key, propsOptions, propsData, vm);
	    /* istanbul ignore else */
	    {
	      if (isReservedProp[key] || config.isReservedAttr(key)) {
	        warn(
	          ("\"" + key + "\" is a reserved attribute and cannot be used as component prop."),
	          vm
	        );
	      }
	      defineReactive$$1(props, key, value, function () {
	        if (vm.$parent && !observerState.isSettingProps) {
	          warn(
	            "Avoid mutating a prop directly since the value will be " +
	            "overwritten whenever the parent component re-renders. " +
	            "Instead, use a data or computed property based on the prop's " +
	            "value. Prop being mutated: \"" + key + "\"",
	            vm
	          );
	        }
	      });
	    }
	    // static props are already proxied on the component's prototype
	    // during Vue.extend(). We only need to proxy props defined at
	    // instantiation here.
	    if (!(key in vm)) {
	      proxy(vm, "_props", key);
	    }
	  };
	
	  for (var key in propsOptions) loop( key );
	  observerState.shouldConvert = true;
	}
	
	function initData (vm) {
	  var data = vm.$options.data;
	  data = vm._data = typeof data === 'function'
	    ? getData(data, vm)
	    : data || {};
	  if (!isPlainObject(data)) {
	    data = {};
	    "development" !== 'production' && warn(
	      'data functions should return an object:\n' +
	      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
	      vm
	    );
	  }
	  // proxy data on instance
	  var keys = Object.keys(data);
	  var props = vm.$options.props;
	  var i = keys.length;
	  while (i--) {
	    if (props && hasOwn(props, keys[i])) {
	      "development" !== 'production' && warn(
	        "The data property \"" + (keys[i]) + "\" is already declared as a prop. " +
	        "Use prop default value instead.",
	        vm
	      );
	    } else if (!isReserved(keys[i])) {
	      proxy(vm, "_data", keys[i]);
	    }
	  }
	  // observe data
	  observe(data, true /* asRootData */);
	}
	
	function getData (data, vm) {
	  try {
	    return data.call(vm)
	  } catch (e) {
	    handleError(e, vm, "data()");
	    return {}
	  }
	}
	
	var computedWatcherOptions = { lazy: true };
	
	function initComputed (vm, computed) {
	  var watchers = vm._computedWatchers = Object.create(null);
	
	  for (var key in computed) {
	    var userDef = computed[key];
	    var getter = typeof userDef === 'function' ? userDef : userDef.get;
	    {
	      if (getter === undefined) {
	        warn(
	          ("No getter function has been defined for computed property \"" + key + "\"."),
	          vm
	        );
	        getter = noop;
	      }
	    }
	    // create internal watcher for the computed property.
	    watchers[key] = new Watcher(vm, getter, noop, computedWatcherOptions);
	
	    // component-defined computed properties are already defined on the
	    // component prototype. We only need to define computed properties defined
	    // at instantiation here.
	    if (!(key in vm)) {
	      defineComputed(vm, key, userDef);
	    } else {
	      if (key in vm.$data) {
	        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
	      } else if (vm.$options.props && key in vm.$options.props) {
	        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
	      }
	    }
	  }
	}
	
	function defineComputed (target, key, userDef) {
	  if (typeof userDef === 'function') {
	    sharedPropertyDefinition.get = createComputedGetter(key);
	    sharedPropertyDefinition.set = noop;
	  } else {
	    sharedPropertyDefinition.get = userDef.get
	      ? userDef.cache !== false
	        ? createComputedGetter(key)
	        : userDef.get
	      : noop;
	    sharedPropertyDefinition.set = userDef.set
	      ? userDef.set
	      : noop;
	  }
	  Object.defineProperty(target, key, sharedPropertyDefinition);
	}
	
	function createComputedGetter (key) {
	  return function computedGetter () {
	    var watcher = this._computedWatchers && this._computedWatchers[key];
	    if (watcher) {
	      if (watcher.dirty) {
	        watcher.evaluate();
	      }
	      if (Dep.target) {
	        watcher.depend();
	      }
	      return watcher.value
	    }
	  }
	}
	
	function initMethods (vm, methods) {
	  var props = vm.$options.props;
	  for (var key in methods) {
	    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
	    {
	      if (methods[key] == null) {
	        warn(
	          "method \"" + key + "\" has an undefined value in the component definition. " +
	          "Did you reference the function correctly?",
	          vm
	        );
	      }
	      if (props && hasOwn(props, key)) {
	        warn(
	          ("method \"" + key + "\" has already been defined as a prop."),
	          vm
	        );
	      }
	    }
	  }
	}
	
	function initWatch (vm, watch) {
	  for (var key in watch) {
	    var handler = watch[key];
	    if (Array.isArray(handler)) {
	      for (var i = 0; i < handler.length; i++) {
	        createWatcher(vm, key, handler[i]);
	      }
	    } else {
	      createWatcher(vm, key, handler);
	    }
	  }
	}
	
	function createWatcher (vm, key, handler) {
	  var options;
	  if (isPlainObject(handler)) {
	    options = handler;
	    handler = handler.handler;
	  }
	  if (typeof handler === 'string') {
	    handler = vm[handler];
	  }
	  vm.$watch(key, handler, options);
	}
	
	function stateMixin (Vue) {
	  // flow somehow has problems with directly declared definition object
	  // when using Object.defineProperty, so we have to procedurally build up
	  // the object here.
	  var dataDef = {};
	  dataDef.get = function () { return this._data };
	  var propsDef = {};
	  propsDef.get = function () { return this._props };
	  {
	    dataDef.set = function (newData) {
	      warn(
	        'Avoid replacing instance root $data. ' +
	        'Use nested data properties instead.',
	        this
	      );
	    };
	    propsDef.set = function () {
	      warn("$props is readonly.", this);
	    };
	  }
	  Object.defineProperty(Vue.prototype, '$data', dataDef);
	  Object.defineProperty(Vue.prototype, '$props', propsDef);
	
	  Vue.prototype.$set = set;
	  Vue.prototype.$delete = del;
	
	  Vue.prototype.$watch = function (
	    expOrFn,
	    cb,
	    options
	  ) {
	    var vm = this;
	    options = options || {};
	    options.user = true;
	    var watcher = new Watcher(vm, expOrFn, cb, options);
	    if (options.immediate) {
	      cb.call(vm, watcher.value);
	    }
	    return function unwatchFn () {
	      watcher.teardown();
	    }
	  };
	}
	
	/*  */
	
	function initProvide (vm) {
	  var provide = vm.$options.provide;
	  if (provide) {
	    vm._provided = typeof provide === 'function'
	      ? provide.call(vm)
	      : provide;
	  }
	}
	
	function initInjections (vm) {
	  var result = resolveInject(vm.$options.inject, vm);
	  if (result) {
	    Object.keys(result).forEach(function (key) {
	      /* istanbul ignore else */
	      {
	        defineReactive$$1(vm, key, result[key], function () {
	          warn(
	            "Avoid mutating an injected value directly since the changes will be " +
	            "overwritten whenever the provided component re-renders. " +
	            "injection being mutated: \"" + key + "\"",
	            vm
	          );
	        });
	      }
	    });
	  }
	}
	
	function resolveInject (inject, vm) {
	  if (inject) {
	    // inject is :any because flow is not smart enough to figure out cached
	    // isArray here
	    var isArray = Array.isArray(inject);
	    var result = Object.create(null);
	    var keys = isArray
	      ? inject
	      : hasSymbol
	        ? Reflect.ownKeys(inject)
	        : Object.keys(inject);
	
	    for (var i = 0; i < keys.length; i++) {
	      var key = keys[i];
	      var provideKey = isArray ? key : inject[key];
	      var source = vm;
	      while (source) {
	        if (source._provided && provideKey in source._provided) {
	          result[key] = source._provided[provideKey];
	          break
	        }
	        source = source.$parent;
	      }
	    }
	    return result
	  }
	}
	
	/*  */
	
	function createFunctionalComponent (
	  Ctor,
	  propsData,
	  data,
	  context,
	  children
	) {
	  var props = {};
	  var propOptions = Ctor.options.props;
	  if (isDef(propOptions)) {
	    for (var key in propOptions) {
	      props[key] = validateProp(key, propOptions, propsData || {});
	    }
	  } else {
	    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
	    if (isDef(data.props)) { mergeProps(props, data.props); }
	  }
	  // ensure the createElement function in functional components
	  // gets a unique context - this is necessary for correct named slot check
	  var _context = Object.create(context);
	  var h = function (a, b, c, d) { return createElement(_context, a, b, c, d, true); };
	  var vnode = Ctor.options.render.call(null, h, {
	    data: data,
	    props: props,
	    children: children,
	    parent: context,
	    listeners: data.on || {},
	    injections: resolveInject(Ctor.options.inject, context),
	    slots: function () { return resolveSlots(children, context); }
	  });
	  if (vnode instanceof VNode) {
	    vnode.functionalContext = context;
	    vnode.functionalOptions = Ctor.options;
	    if (data.slot) {
	      (vnode.data || (vnode.data = {})).slot = data.slot;
	    }
	  }
	  return vnode
	}
	
	function mergeProps (to, from) {
	  for (var key in from) {
	    to[camelize(key)] = from[key];
	  }
	}
	
	/*  */
	
	// hooks to be invoked on component VNodes during patch
	var componentVNodeHooks = {
	  init: function init (
	    vnode,
	    hydrating,
	    parentElm,
	    refElm
	  ) {
	    if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
	      var child = vnode.componentInstance = createComponentInstanceForVnode(
	        vnode,
	        activeInstance,
	        parentElm,
	        refElm
	      );
	      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
	    } else if (vnode.data.keepAlive) {
	      // kept-alive components, treat as a patch
	      var mountedNode = vnode; // work around flow
	      componentVNodeHooks.prepatch(mountedNode, mountedNode);
	    }
	  },
	
	  prepatch: function prepatch (oldVnode, vnode) {
	    var options = vnode.componentOptions;
	    var child = vnode.componentInstance = oldVnode.componentInstance;
	    updateChildComponent(
	      child,
	      options.propsData, // updated props
	      options.listeners, // updated listeners
	      vnode, // new parent vnode
	      options.children // new children
	    );
	  },
	
	  insert: function insert (vnode) {
	    var context = vnode.context;
	    var componentInstance = vnode.componentInstance;
	    if (!componentInstance._isMounted) {
	      componentInstance._isMounted = true;
	      callHook(componentInstance, 'mounted');
	    }
	    if (vnode.data.keepAlive) {
	      if (context._isMounted) {
	        // vue-router#1212
	        // During updates, a kept-alive component's child components may
	        // change, so directly walking the tree here may call activated hooks
	        // on incorrect children. Instead we push them into a queue which will
	        // be processed after the whole patch process ended.
	        queueActivatedComponent(componentInstance);
	      } else {
	        activateChildComponent(componentInstance, true /* direct */);
	      }
	    }
	  },
	
	  destroy: function destroy (vnode) {
	    var componentInstance = vnode.componentInstance;
	    if (!componentInstance._isDestroyed) {
	      if (!vnode.data.keepAlive) {
	        componentInstance.$destroy();
	      } else {
	        deactivateChildComponent(componentInstance, true /* direct */);
	      }
	    }
	  }
	};
	
	var hooksToMerge = Object.keys(componentVNodeHooks);
	
	function createComponent (
	  Ctor,
	  data,
	  context,
	  children,
	  tag
	) {
	  if (isUndef(Ctor)) {
	    return
	  }
	
	  var baseCtor = context.$options._base;
	
	  // plain options object: turn it into a constructor
	  if (isObject(Ctor)) {
	    Ctor = baseCtor.extend(Ctor);
	  }
	
	  // if at this stage it's not a constructor or an async component factory,
	  // reject.
	  if (typeof Ctor !== 'function') {
	    {
	      warn(("Invalid Component definition: " + (String(Ctor))), context);
	    }
	    return
	  }
	
	  // async component
	  if (isUndef(Ctor.cid)) {
	    Ctor = resolveAsyncComponent(Ctor, baseCtor, context);
	    if (Ctor === undefined) {
	      // return nothing if this is indeed an async component
	      // wait for the callback to trigger parent update.
	      return
	    }
	  }
	
	  // resolve constructor options in case global mixins are applied after
	  // component constructor creation
	  resolveConstructorOptions(Ctor);
	
	  data = data || {};
	
	  // transform component v-model data into props & events
	  if (isDef(data.model)) {
	    transformModel(Ctor.options, data);
	  }
	
	  // extract props
	  var propsData = extractPropsFromVNodeData(data, Ctor, tag);
	
	  // functional component
	  if (isTrue(Ctor.options.functional)) {
	    return createFunctionalComponent(Ctor, propsData, data, context, children)
	  }
	
	  // extract listeners, since these needs to be treated as
	  // child component listeners instead of DOM listeners
	  var listeners = data.on;
	  // replace with listeners with .native modifier
	  data.on = data.nativeOn;
	
	  if (isTrue(Ctor.options.abstract)) {
	    // abstract components do not keep anything
	    // other than props & listeners
	    data = {};
	  }
	
	  // merge component management hooks onto the placeholder node
	  mergeHooks(data);
	
	  // return a placeholder vnode
	  var name = Ctor.options.name || tag;
	  var vnode = new VNode(
	    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
	    data, undefined, undefined, undefined, context,
	    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children }
	  );
	  return vnode
	}
	
	function createComponentInstanceForVnode (
	  vnode, // we know it's MountedComponentVNode but flow doesn't
	  parent, // activeInstance in lifecycle state
	  parentElm,
	  refElm
	) {
	  var vnodeComponentOptions = vnode.componentOptions;
	  var options = {
	    _isComponent: true,
	    parent: parent,
	    propsData: vnodeComponentOptions.propsData,
	    _componentTag: vnodeComponentOptions.tag,
	    _parentVnode: vnode,
	    _parentListeners: vnodeComponentOptions.listeners,
	    _renderChildren: vnodeComponentOptions.children,
	    _parentElm: parentElm || null,
	    _refElm: refElm || null
	  };
	  // check inline-template render functions
	  var inlineTemplate = vnode.data.inlineTemplate;
	  if (isDef(inlineTemplate)) {
	    options.render = inlineTemplate.render;
	    options.staticRenderFns = inlineTemplate.staticRenderFns;
	  }
	  return new vnodeComponentOptions.Ctor(options)
	}
	
	function mergeHooks (data) {
	  if (!data.hook) {
	    data.hook = {};
	  }
	  for (var i = 0; i < hooksToMerge.length; i++) {
	    var key = hooksToMerge[i];
	    var fromParent = data.hook[key];
	    var ours = componentVNodeHooks[key];
	    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
	  }
	}
	
	function mergeHook$1 (one, two) {
	  return function (a, b, c, d) {
	    one(a, b, c, d);
	    two(a, b, c, d);
	  }
	}
	
	// transform component v-model info (value and callback) into
	// prop and event handler respectively.
	function transformModel (options, data) {
	  var prop = (options.model && options.model.prop) || 'value';
	  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
	  var on = data.on || (data.on = {});
	  if (isDef(on[event])) {
	    on[event] = [data.model.callback].concat(on[event]);
	  } else {
	    on[event] = data.model.callback;
	  }
	}
	
	/*  */
	
	var SIMPLE_NORMALIZE = 1;
	var ALWAYS_NORMALIZE = 2;
	
	// wrapper function for providing a more flexible interface
	// without getting yelled at by flow
	function createElement (
	  context,
	  tag,
	  data,
	  children,
	  normalizationType,
	  alwaysNormalize
	) {
	  if (Array.isArray(data) || isPrimitive(data)) {
	    normalizationType = children;
	    children = data;
	    data = undefined;
	  }
	  if (isTrue(alwaysNormalize)) {
	    normalizationType = ALWAYS_NORMALIZE;
	  }
	  return _createElement(context, tag, data, children, normalizationType)
	}
	
	function _createElement (
	  context,
	  tag,
	  data,
	  children,
	  normalizationType
	) {
	  if (isDef(data) && isDef((data).__ob__)) {
	    "development" !== 'production' && warn(
	      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
	      'Always create fresh vnode data objects in each render!',
	      context
	    );
	    return createEmptyVNode()
	  }
	  if (!tag) {
	    // in case of component :is set to falsy value
	    return createEmptyVNode()
	  }
	  // support single function children as default scoped slot
	  if (Array.isArray(children) &&
	    typeof children[0] === 'function'
	  ) {
	    data = data || {};
	    data.scopedSlots = { default: children[0] };
	    children.length = 0;
	  }
	  if (normalizationType === ALWAYS_NORMALIZE) {
	    children = normalizeChildren(children);
	  } else if (normalizationType === SIMPLE_NORMALIZE) {
	    children = simpleNormalizeChildren(children);
	  }
	  var vnode, ns;
	  if (typeof tag === 'string') {
	    var Ctor;
	    ns = config.getTagNamespace(tag);
	    if (config.isReservedTag(tag)) {
	      // platform built-in elements
	      vnode = new VNode(
	        config.parsePlatformTagName(tag), data, children,
	        undefined, undefined, context
	      );
	    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
	      // component
	      vnode = createComponent(Ctor, data, context, children, tag);
	    } else {
	      // unknown or unlisted namespaced elements
	      // check at runtime because it may get assigned a namespace when its
	      // parent normalizes children
	      vnode = new VNode(
	        tag, data, children,
	        undefined, undefined, context
	      );
	    }
	  } else {
	    // direct component options / constructor
	    vnode = createComponent(tag, data, context, children);
	  }
	  if (isDef(vnode)) {
	    if (ns) { applyNS(vnode, ns); }
	    return vnode
	  } else {
	    return createEmptyVNode()
	  }
	}
	
	function applyNS (vnode, ns) {
	  vnode.ns = ns;
	  if (vnode.tag === 'foreignObject') {
	    // use default namespace inside foreignObject
	    return
	  }
	  if (isDef(vnode.children)) {
	    for (var i = 0, l = vnode.children.length; i < l; i++) {
	      var child = vnode.children[i];
	      if (isDef(child.tag) && isUndef(child.ns)) {
	        applyNS(child, ns);
	      }
	    }
	  }
	}
	
	/*  */
	
	/**
	 * Runtime helper for rendering v-for lists.
	 */
	function renderList (
	  val,
	  render
	) {
	  var ret, i, l, keys, key;
	  if (Array.isArray(val) || typeof val === 'string') {
	    ret = new Array(val.length);
	    for (i = 0, l = val.length; i < l; i++) {
	      ret[i] = render(val[i], i);
	    }
	  } else if (typeof val === 'number') {
	    ret = new Array(val);
	    for (i = 0; i < val; i++) {
	      ret[i] = render(i + 1, i);
	    }
	  } else if (isObject(val)) {
	    keys = Object.keys(val);
	    ret = new Array(keys.length);
	    for (i = 0, l = keys.length; i < l; i++) {
	      key = keys[i];
	      ret[i] = render(val[key], key, i);
	    }
	  }
	  if (isDef(ret)) {
	    (ret)._isVList = true;
	  }
	  return ret
	}
	
	/*  */
	
	/**
	 * Runtime helper for rendering <slot>
	 */
	function renderSlot (
	  name,
	  fallback,
	  props,
	  bindObject
	) {
	  var scopedSlotFn = this.$scopedSlots[name];
	  if (scopedSlotFn) { // scoped slot
	    props = props || {};
	    if (bindObject) {
	      extend(props, bindObject);
	    }
	    return scopedSlotFn(props) || fallback
	  } else {
	    var slotNodes = this.$slots[name];
	    // warn duplicate slot usage
	    if (slotNodes && "development" !== 'production') {
	      slotNodes._rendered && warn(
	        "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
	        "- this will likely cause render errors.",
	        this
	      );
	      slotNodes._rendered = true;
	    }
	    return slotNodes || fallback
	  }
	}
	
	/*  */
	
	/**
	 * Runtime helper for resolving filters
	 */
	function resolveFilter (id) {
	  return resolveAsset(this.$options, 'filters', id, true) || identity
	}
	
	/*  */
	
	/**
	 * Runtime helper for checking keyCodes from config.
	 */
	function checkKeyCodes (
	  eventKeyCode,
	  key,
	  builtInAlias
	) {
	  var keyCodes = config.keyCodes[key] || builtInAlias;
	  if (Array.isArray(keyCodes)) {
	    return keyCodes.indexOf(eventKeyCode) === -1
	  } else {
	    return keyCodes !== eventKeyCode
	  }
	}
	
	/*  */
	
	/**
	 * Runtime helper for merging v-bind="object" into a VNode's data.
	 */
	function bindObjectProps (
	  data,
	  tag,
	  value,
	  asProp
	) {
	  if (value) {
	    if (!isObject(value)) {
	      "development" !== 'production' && warn(
	        'v-bind without argument expects an Object or Array value',
	        this
	      );
	    } else {
	      if (Array.isArray(value)) {
	        value = toObject(value);
	      }
	      var hash;
	      for (var key in value) {
	        if (key === 'class' || key === 'style') {
	          hash = data;
	        } else {
	          var type = data.attrs && data.attrs.type;
	          hash = asProp || config.mustUseProp(tag, type, key)
	            ? data.domProps || (data.domProps = {})
	            : data.attrs || (data.attrs = {});
	        }
	        if (!(key in hash)) {
	          hash[key] = value[key];
	        }
	      }
	    }
	  }
	  return data
	}
	
	/*  */
	
	/**
	 * Runtime helper for rendering static trees.
	 */
	function renderStatic (
	  index,
	  isInFor
	) {
	  var tree = this._staticTrees[index];
	  // if has already-rendered static tree and not inside v-for,
	  // we can reuse the same tree by doing a shallow clone.
	  if (tree && !isInFor) {
	    return Array.isArray(tree)
	      ? cloneVNodes(tree)
	      : cloneVNode(tree)
	  }
	  // otherwise, render a fresh tree.
	  tree = this._staticTrees[index] =
	    this.$options.staticRenderFns[index].call(this._renderProxy);
	  markStatic(tree, ("__static__" + index), false);
	  return tree
	}
	
	/**
	 * Runtime helper for v-once.
	 * Effectively it means marking the node as static with a unique key.
	 */
	function markOnce (
	  tree,
	  index,
	  key
	) {
	  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
	  return tree
	}
	
	function markStatic (
	  tree,
	  key,
	  isOnce
	) {
	  if (Array.isArray(tree)) {
	    for (var i = 0; i < tree.length; i++) {
	      if (tree[i] && typeof tree[i] !== 'string') {
	        markStaticNode(tree[i], (key + "_" + i), isOnce);
	      }
	    }
	  } else {
	    markStaticNode(tree, key, isOnce);
	  }
	}
	
	function markStaticNode (node, key, isOnce) {
	  node.isStatic = true;
	  node.key = key;
	  node.isOnce = isOnce;
	}
	
	/*  */
	
	function initRender (vm) {
	  vm._vnode = null; // the root of the child tree
	  vm._staticTrees = null;
	  var parentVnode = vm.$vnode = vm.$options._parentVnode; // the placeholder node in parent tree
	  var renderContext = parentVnode && parentVnode.context;
	  vm.$slots = resolveSlots(vm.$options._renderChildren, renderContext);
	  vm.$scopedSlots = emptyObject;
	  // bind the createElement fn to this instance
	  // so that we get proper render context inside it.
	  // args order: tag, data, children, normalizationType, alwaysNormalize
	  // internal version is used by render functions compiled from templates
	  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
	  // normalization is always applied for the public version, used in
	  // user-written render functions.
	  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };
	}
	
	function renderMixin (Vue) {
	  Vue.prototype.$nextTick = function (fn) {
	    return nextTick(fn, this)
	  };
	
	  Vue.prototype._render = function () {
	    var vm = this;
	    var ref = vm.$options;
	    var render = ref.render;
	    var staticRenderFns = ref.staticRenderFns;
	    var _parentVnode = ref._parentVnode;
	
	    if (vm._isMounted) {
	      // clone slot nodes on re-renders
	      for (var key in vm.$slots) {
	        vm.$slots[key] = cloneVNodes(vm.$slots[key]);
	      }
	    }
	
	    vm.$scopedSlots = (_parentVnode && _parentVnode.data.scopedSlots) || emptyObject;
	
	    if (staticRenderFns && !vm._staticTrees) {
	      vm._staticTrees = [];
	    }
	    // set parent vnode. this allows render functions to have access
	    // to the data on the placeholder node.
	    vm.$vnode = _parentVnode;
	    // render self
	    var vnode;
	    try {
	      vnode = render.call(vm._renderProxy, vm.$createElement);
	    } catch (e) {
	      handleError(e, vm, "render function");
	      // return error render result,
	      // or previous vnode to prevent render error causing blank component
	      /* istanbul ignore else */
	      {
	        vnode = vm.$options.renderError
	          ? vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e)
	          : vm._vnode;
	      }
	    }
	    // return empty vnode in case the render function errored out
	    if (!(vnode instanceof VNode)) {
	      if ("development" !== 'production' && Array.isArray(vnode)) {
	        warn(
	          'Multiple root nodes returned from render function. Render function ' +
	          'should return a single root node.',
	          vm
	        );
	      }
	      vnode = createEmptyVNode();
	    }
	    // set parent
	    vnode.parent = _parentVnode;
	    return vnode
	  };
	
	  // internal render helpers.
	  // these are exposed on the instance prototype to reduce generated render
	  // code size.
	  Vue.prototype._o = markOnce;
	  Vue.prototype._n = toNumber;
	  Vue.prototype._s = toString;
	  Vue.prototype._l = renderList;
	  Vue.prototype._t = renderSlot;
	  Vue.prototype._q = looseEqual;
	  Vue.prototype._i = looseIndexOf;
	  Vue.prototype._m = renderStatic;
	  Vue.prototype._f = resolveFilter;
	  Vue.prototype._k = checkKeyCodes;
	  Vue.prototype._b = bindObjectProps;
	  Vue.prototype._v = createTextVNode;
	  Vue.prototype._e = createEmptyVNode;
	  Vue.prototype._u = resolveScopedSlots;
	}
	
	/*  */
	
	var uid$1 = 0;
	
	function initMixin (Vue) {
	  Vue.prototype._init = function (options) {
	    var vm = this;
	    // a uid
	    vm._uid = uid$1++;
	
	    var startTag, endTag;
	    /* istanbul ignore if */
	    if ("development" !== 'production' && config.performance && mark) {
	      startTag = "vue-perf-init:" + (vm._uid);
	      endTag = "vue-perf-end:" + (vm._uid);
	      mark(startTag);
	    }
	
	    // a flag to avoid this being observed
	    vm._isVue = true;
	    // merge options
	    if (options && options._isComponent) {
	      // optimize internal component instantiation
	      // since dynamic options merging is pretty slow, and none of the
	      // internal component options needs special treatment.
	      initInternalComponent(vm, options);
	    } else {
	      vm.$options = mergeOptions(
	        resolveConstructorOptions(vm.constructor),
	        options || {},
	        vm
	      );
	    }
	    /* istanbul ignore else */
	    {
	      initProxy(vm);
	    }
	    // expose real self
	    vm._self = vm;
	    initLifecycle(vm);
	    initEvents(vm);
	    initRender(vm);
	    callHook(vm, 'beforeCreate');
	    initInjections(vm); // resolve injections before data/props
	    initState(vm);
	    initProvide(vm); // resolve provide after data/props
	    callHook(vm, 'created');
	
	    /* istanbul ignore if */
	    if ("development" !== 'production' && config.performance && mark) {
	      vm._name = formatComponentName(vm, false);
	      mark(endTag);
	      measure(((vm._name) + " init"), startTag, endTag);
	    }
	
	    if (vm.$options.el) {
	      vm.$mount(vm.$options.el);
	    }
	  };
	}
	
	function initInternalComponent (vm, options) {
	  var opts = vm.$options = Object.create(vm.constructor.options);
	  // doing this because it's faster than dynamic enumeration.
	  opts.parent = options.parent;
	  opts.propsData = options.propsData;
	  opts._parentVnode = options._parentVnode;
	  opts._parentListeners = options._parentListeners;
	  opts._renderChildren = options._renderChildren;
	  opts._componentTag = options._componentTag;
	  opts._parentElm = options._parentElm;
	  opts._refElm = options._refElm;
	  if (options.render) {
	    opts.render = options.render;
	    opts.staticRenderFns = options.staticRenderFns;
	  }
	}
	
	function resolveConstructorOptions (Ctor) {
	  var options = Ctor.options;
	  if (Ctor.super) {
	    var superOptions = resolveConstructorOptions(Ctor.super);
	    var cachedSuperOptions = Ctor.superOptions;
	    if (superOptions !== cachedSuperOptions) {
	      // super option changed,
	      // need to resolve new options.
	      Ctor.superOptions = superOptions;
	      // check if there are any late-modified/attached options (#4976)
	      var modifiedOptions = resolveModifiedOptions(Ctor);
	      // update base extend options
	      if (modifiedOptions) {
	        extend(Ctor.extendOptions, modifiedOptions);
	      }
	      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
	      if (options.name) {
	        options.components[options.name] = Ctor;
	      }
	    }
	  }
	  return options
	}
	
	function resolveModifiedOptions (Ctor) {
	  var modified;
	  var latest = Ctor.options;
	  var extended = Ctor.extendOptions;
	  var sealed = Ctor.sealedOptions;
	  for (var key in latest) {
	    if (latest[key] !== sealed[key]) {
	      if (!modified) { modified = {}; }
	      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
	    }
	  }
	  return modified
	}
	
	function dedupe (latest, extended, sealed) {
	  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
	  // between merges
	  if (Array.isArray(latest)) {
	    var res = [];
	    sealed = Array.isArray(sealed) ? sealed : [sealed];
	    extended = Array.isArray(extended) ? extended : [extended];
	    for (var i = 0; i < latest.length; i++) {
	      // push original options and not sealed options to exclude duplicated options
	      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
	        res.push(latest[i]);
	      }
	    }
	    return res
	  } else {
	    return latest
	  }
	}
	
	function Vue$3 (options) {
	  if ("development" !== 'production' &&
	    !(this instanceof Vue$3)
	  ) {
	    warn('Vue is a constructor and should be called with the `new` keyword');
	  }
	  this._init(options);
	}
	
	initMixin(Vue$3);
	stateMixin(Vue$3);
	eventsMixin(Vue$3);
	lifecycleMixin(Vue$3);
	renderMixin(Vue$3);
	
	/*  */
	
	function initUse (Vue) {
	  Vue.use = function (plugin) {
	    /* istanbul ignore if */
	    if (plugin.installed) {
	      return this
	    }
	    // additional parameters
	    var args = toArray(arguments, 1);
	    args.unshift(this);
	    if (typeof plugin.install === 'function') {
	      plugin.install.apply(plugin, args);
	    } else if (typeof plugin === 'function') {
	      plugin.apply(null, args);
	    }
	    plugin.installed = true;
	    return this
	  };
	}
	
	/*  */
	
	function initMixin$1 (Vue) {
	  Vue.mixin = function (mixin) {
	    this.options = mergeOptions(this.options, mixin);
	    return this
	  };
	}
	
	/*  */
	
	function initExtend (Vue) {
	  /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */
	  Vue.cid = 0;
	  var cid = 1;
	
	  /**
	   * Class inheritance
	   */
	  Vue.extend = function (extendOptions) {
	    extendOptions = extendOptions || {};
	    var Super = this;
	    var SuperId = Super.cid;
	    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
	    if (cachedCtors[SuperId]) {
	      return cachedCtors[SuperId]
	    }
	
	    var name = extendOptions.name || Super.options.name;
	    {
	      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
	        warn(
	          'Invalid component name: "' + name + '". Component names ' +
	          'can only contain alphanumeric characters and the hyphen, ' +
	          'and must start with a letter.'
	        );
	      }
	    }
	
	    var Sub = function VueComponent (options) {
	      this._init(options);
	    };
	    Sub.prototype = Object.create(Super.prototype);
	    Sub.prototype.constructor = Sub;
	    Sub.cid = cid++;
	    Sub.options = mergeOptions(
	      Super.options,
	      extendOptions
	    );
	    Sub['super'] = Super;
	
	    // For props and computed properties, we define the proxy getters on
	    // the Vue instances at extension time, on the extended prototype. This
	    // avoids Object.defineProperty calls for each instance created.
	    if (Sub.options.props) {
	      initProps$1(Sub);
	    }
	    if (Sub.options.computed) {
	      initComputed$1(Sub);
	    }
	
	    // allow further extension/mixin/plugin usage
	    Sub.extend = Super.extend;
	    Sub.mixin = Super.mixin;
	    Sub.use = Super.use;
	
	    // create asset registers, so extended classes
	    // can have their private assets too.
	    ASSET_TYPES.forEach(function (type) {
	      Sub[type] = Super[type];
	    });
	    // enable recursive self-lookup
	    if (name) {
	      Sub.options.components[name] = Sub;
	    }
	
	    // keep a reference to the super options at extension time.
	    // later at instantiation we can check if Super's options have
	    // been updated.
	    Sub.superOptions = Super.options;
	    Sub.extendOptions = extendOptions;
	    Sub.sealedOptions = extend({}, Sub.options);
	
	    // cache constructor
	    cachedCtors[SuperId] = Sub;
	    return Sub
	  };
	}
	
	function initProps$1 (Comp) {
	  var props = Comp.options.props;
	  for (var key in props) {
	    proxy(Comp.prototype, "_props", key);
	  }
	}
	
	function initComputed$1 (Comp) {
	  var computed = Comp.options.computed;
	  for (var key in computed) {
	    defineComputed(Comp.prototype, key, computed[key]);
	  }
	}
	
	/*  */
	
	function initAssetRegisters (Vue) {
	  /**
	   * Create asset registration methods.
	   */
	  ASSET_TYPES.forEach(function (type) {
	    Vue[type] = function (
	      id,
	      definition
	    ) {
	      if (!definition) {
	        return this.options[type + 's'][id]
	      } else {
	        /* istanbul ignore if */
	        {
	          if (type === 'component' && config.isReservedTag(id)) {
	            warn(
	              'Do not use built-in or reserved HTML elements as component ' +
	              'id: ' + id
	            );
	          }
	        }
	        if (type === 'component' && isPlainObject(definition)) {
	          definition.name = definition.name || id;
	          definition = this.options._base.extend(definition);
	        }
	        if (type === 'directive' && typeof definition === 'function') {
	          definition = { bind: definition, update: definition };
	        }
	        this.options[type + 's'][id] = definition;
	        return definition
	      }
	    };
	  });
	}
	
	/*  */
	
	var patternTypes = [String, RegExp];
	
	function getComponentName (opts) {
	  return opts && (opts.Ctor.options.name || opts.tag)
	}
	
	function matches (pattern, name) {
	  if (typeof pattern === 'string') {
	    return pattern.split(',').indexOf(name) > -1
	  } else if (isRegExp(pattern)) {
	    return pattern.test(name)
	  }
	  /* istanbul ignore next */
	  return false
	}
	
	function pruneCache (cache, current, filter) {
	  for (var key in cache) {
	    var cachedNode = cache[key];
	    if (cachedNode) {
	      var name = getComponentName(cachedNode.componentOptions);
	      if (name && !filter(name)) {
	        if (cachedNode !== current) {
	          pruneCacheEntry(cachedNode);
	        }
	        cache[key] = null;
	      }
	    }
	  }
	}
	
	function pruneCacheEntry (vnode) {
	  if (vnode) {
	    vnode.componentInstance.$destroy();
	  }
	}
	
	var KeepAlive = {
	  name: 'keep-alive',
	  abstract: true,
	
	  props: {
	    include: patternTypes,
	    exclude: patternTypes
	  },
	
	  created: function created () {
	    this.cache = Object.create(null);
	  },
	
	  destroyed: function destroyed () {
	    var this$1 = this;
	
	    for (var key in this$1.cache) {
	      pruneCacheEntry(this$1.cache[key]);
	    }
	  },
	
	  watch: {
	    include: function include (val) {
	      pruneCache(this.cache, this._vnode, function (name) { return matches(val, name); });
	    },
	    exclude: function exclude (val) {
	      pruneCache(this.cache, this._vnode, function (name) { return !matches(val, name); });
	    }
	  },
	
	  render: function render () {
	    var vnode = getFirstComponentChild(this.$slots.default);
	    var componentOptions = vnode && vnode.componentOptions;
	    if (componentOptions) {
	      // check pattern
	      var name = getComponentName(componentOptions);
	      if (name && (
	        (this.include && !matches(this.include, name)) ||
	        (this.exclude && matches(this.exclude, name))
	      )) {
	        return vnode
	      }
	      var key = vnode.key == null
	        // same constructor may get registered as different local components
	        // so cid alone is not enough (#3269)
	        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
	        : vnode.key;
	      if (this.cache[key]) {
	        vnode.componentInstance = this.cache[key].componentInstance;
	      } else {
	        this.cache[key] = vnode;
	      }
	      vnode.data.keepAlive = true;
	    }
	    return vnode
	  }
	};
	
	var builtInComponents = {
	  KeepAlive: KeepAlive
	};
	
	/*  */
	
	function initGlobalAPI (Vue) {
	  // config
	  var configDef = {};
	  configDef.get = function () { return config; };
	  {
	    configDef.set = function () {
	      warn(
	        'Do not replace the Vue.config object, set individual fields instead.'
	      );
	    };
	  }
	  Object.defineProperty(Vue, 'config', configDef);
	
	  // exposed util methods.
	  // NOTE: these are not considered part of the public API - avoid relying on
	  // them unless you are aware of the risk.
	  Vue.util = {
	    warn: warn,
	    extend: extend,
	    mergeOptions: mergeOptions,
	    defineReactive: defineReactive$$1
	  };
	
	  Vue.set = set;
	  Vue.delete = del;
	  Vue.nextTick = nextTick;
	
	  Vue.options = Object.create(null);
	  ASSET_TYPES.forEach(function (type) {
	    Vue.options[type + 's'] = Object.create(null);
	  });
	
	  // this is used to identify the "base" constructor to extend all plain-object
	  // components with in Weex's multi-instance scenarios.
	  Vue.options._base = Vue;
	
	  extend(Vue.options.components, builtInComponents);
	
	  initUse(Vue);
	  initMixin$1(Vue);
	  initExtend(Vue);
	  initAssetRegisters(Vue);
	}
	
	initGlobalAPI(Vue$3);
	
	Object.defineProperty(Vue$3.prototype, '$isServer', {
	  get: isServerRendering
	});
	
	Object.defineProperty(Vue$3.prototype, '$ssrContext', {
	  get: function get () {
	    /* istanbul ignore next */
	    return this.$vnode.ssrContext
	  }
	});
	
	Vue$3.version = '2.3.3';
	
	/*  */
	
	// these are reserved for web because they are directly compiled away
	// during template compilation
	var isReservedAttr = makeMap('style,class');
	
	// attributes that should be using props for binding
	var acceptValue = makeMap('input,textarea,option,select');
	var mustUseProp = function (tag, type, attr) {
	  return (
	    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
	    (attr === 'selected' && tag === 'option') ||
	    (attr === 'checked' && tag === 'input') ||
	    (attr === 'muted' && tag === 'video')
	  )
	};
	
	var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');
	
	var isBooleanAttr = makeMap(
	  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
	  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
	  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
	  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
	  'required,reversed,scoped,seamless,selected,sortable,translate,' +
	  'truespeed,typemustmatch,visible'
	);
	
	var xlinkNS = 'http://www.w3.org/1999/xlink';
	
	var isXlink = function (name) {
	  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
	};
	
	var getXlinkProp = function (name) {
	  return isXlink(name) ? name.slice(6, name.length) : ''
	};
	
	var isFalsyAttrValue = function (val) {
	  return val == null || val === false
	};
	
	/*  */
	
	function genClassForVnode (vnode) {
	  var data = vnode.data;
	  var parentNode = vnode;
	  var childNode = vnode;
	  while (isDef(childNode.componentInstance)) {
	    childNode = childNode.componentInstance._vnode;
	    if (childNode.data) {
	      data = mergeClassData(childNode.data, data);
	    }
	  }
	  while (isDef(parentNode = parentNode.parent)) {
	    if (parentNode.data) {
	      data = mergeClassData(data, parentNode.data);
	    }
	  }
	  return genClassFromData(data)
	}
	
	function mergeClassData (child, parent) {
	  return {
	    staticClass: concat(child.staticClass, parent.staticClass),
	    class: isDef(child.class)
	      ? [child.class, parent.class]
	      : parent.class
	  }
	}
	
	function genClassFromData (data) {
	  var dynamicClass = data.class;
	  var staticClass = data.staticClass;
	  if (isDef(staticClass) || isDef(dynamicClass)) {
	    return concat(staticClass, stringifyClass(dynamicClass))
	  }
	  /* istanbul ignore next */
	  return ''
	}
	
	function concat (a, b) {
	  return a ? b ? (a + ' ' + b) : a : (b || '')
	}
	
	function stringifyClass (value) {
	  if (isUndef(value)) {
	    return ''
	  }
	  if (typeof value === 'string') {
	    return value
	  }
	  var res = '';
	  if (Array.isArray(value)) {
	    var stringified;
	    for (var i = 0, l = value.length; i < l; i++) {
	      if (isDef(value[i])) {
	        if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
	          res += stringified + ' ';
	        }
	      }
	    }
	    return res.slice(0, -1)
	  }
	  if (isObject(value)) {
	    for (var key in value) {
	      if (value[key]) { res += key + ' '; }
	    }
	    return res.slice(0, -1)
	  }
	  /* istanbul ignore next */
	  return res
	}
	
	/*  */
	
	var namespaceMap = {
	  svg: 'http://www.w3.org/2000/svg',
	  math: 'http://www.w3.org/1998/Math/MathML'
	};
	
	var isHTMLTag = makeMap(
	  'html,body,base,head,link,meta,style,title,' +
	  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
	  'div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,' +
	  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
	  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
	  'embed,object,param,source,canvas,script,noscript,del,ins,' +
	  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
	  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
	  'output,progress,select,textarea,' +
	  'details,dialog,menu,menuitem,summary,' +
	  'content,element,shadow,template'
	);
	
	// this map is intentionally selective, only covering SVG elements that may
	// contain child elements.
	var isSVG = makeMap(
	  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
	  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
	  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
	  true
	);
	
	var isPreTag = function (tag) { return tag === 'pre'; };
	
	var isReservedTag = function (tag) {
	  return isHTMLTag(tag) || isSVG(tag)
	};
	
	function getTagNamespace (tag) {
	  if (isSVG(tag)) {
	    return 'svg'
	  }
	  // basic support for MathML
	  // note it doesn't support other MathML elements being component roots
	  if (tag === 'math') {
	    return 'math'
	  }
	}
	
	var unknownElementCache = Object.create(null);
	function isUnknownElement (tag) {
	  /* istanbul ignore if */
	  if (!inBrowser) {
	    return true
	  }
	  if (isReservedTag(tag)) {
	    return false
	  }
	  tag = tag.toLowerCase();
	  /* istanbul ignore if */
	  if (unknownElementCache[tag] != null) {
	    return unknownElementCache[tag]
	  }
	  var el = document.createElement(tag);
	  if (tag.indexOf('-') > -1) {
	    // http://stackoverflow.com/a/28210364/1070244
	    return (unknownElementCache[tag] = (
	      el.constructor === window.HTMLUnknownElement ||
	      el.constructor === window.HTMLElement
	    ))
	  } else {
	    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
	  }
	}
	
	/*  */
	
	/**
	 * Query an element selector if it's not an element already.
	 */
	function query (el) {
	  if (typeof el === 'string') {
	    var selected = document.querySelector(el);
	    if (!selected) {
	      "development" !== 'production' && warn(
	        'Cannot find element: ' + el
	      );
	      return document.createElement('div')
	    }
	    return selected
	  } else {
	    return el
	  }
	}
	
	/*  */
	
	function createElement$1 (tagName, vnode) {
	  var elm = document.createElement(tagName);
	  if (tagName !== 'select') {
	    return elm
	  }
	  // false or null will remove the attribute but undefined will not
	  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
	    elm.setAttribute('multiple', 'multiple');
	  }
	  return elm
	}
	
	function createElementNS (namespace, tagName) {
	  return document.createElementNS(namespaceMap[namespace], tagName)
	}
	
	function createTextNode (text) {
	  return document.createTextNode(text)
	}
	
	function createComment (text) {
	  return document.createComment(text)
	}
	
	function insertBefore (parentNode, newNode, referenceNode) {
	  parentNode.insertBefore(newNode, referenceNode);
	}
	
	function removeChild (node, child) {
	  node.removeChild(child);
	}
	
	function appendChild (node, child) {
	  node.appendChild(child);
	}
	
	function parentNode (node) {
	  return node.parentNode
	}
	
	function nextSibling (node) {
	  return node.nextSibling
	}
	
	function tagName (node) {
	  return node.tagName
	}
	
	function setTextContent (node, text) {
	  node.textContent = text;
	}
	
	function setAttribute (node, key, val) {
	  node.setAttribute(key, val);
	}
	
	
	var nodeOps = Object.freeze({
		createElement: createElement$1,
		createElementNS: createElementNS,
		createTextNode: createTextNode,
		createComment: createComment,
		insertBefore: insertBefore,
		removeChild: removeChild,
		appendChild: appendChild,
		parentNode: parentNode,
		nextSibling: nextSibling,
		tagName: tagName,
		setTextContent: setTextContent,
		setAttribute: setAttribute
	});
	
	/*  */
	
	var ref = {
	  create: function create (_, vnode) {
	    registerRef(vnode);
	  },
	  update: function update (oldVnode, vnode) {
	    if (oldVnode.data.ref !== vnode.data.ref) {
	      registerRef(oldVnode, true);
	      registerRef(vnode);
	    }
	  },
	  destroy: function destroy (vnode) {
	    registerRef(vnode, true);
	  }
	};
	
	function registerRef (vnode, isRemoval) {
	  var key = vnode.data.ref;
	  if (!key) { return }
	
	  var vm = vnode.context;
	  var ref = vnode.componentInstance || vnode.elm;
	  var refs = vm.$refs;
	  if (isRemoval) {
	    if (Array.isArray(refs[key])) {
	      remove(refs[key], ref);
	    } else if (refs[key] === ref) {
	      refs[key] = undefined;
	    }
	  } else {
	    if (vnode.data.refInFor) {
	      if (Array.isArray(refs[key]) && refs[key].indexOf(ref) < 0) {
	        refs[key].push(ref);
	      } else {
	        refs[key] = [ref];
	      }
	    } else {
	      refs[key] = ref;
	    }
	  }
	}
	
	/**
	 * Virtual DOM patching algorithm based on Snabbdom by
	 * Simon Friis Vindum (@paldepind)
	 * Licensed under the MIT License
	 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
	 *
	 * modified by Evan You (@yyx990803)
	 *
	
	/*
	 * Not type-checking this because this file is perf-critical and the cost
	 * of making flow understand it is not worth it.
	 */
	
	var emptyNode = new VNode('', {}, []);
	
	var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];
	
	function sameVnode (a, b) {
	  return (
	    a.key === b.key &&
	    a.tag === b.tag &&
	    a.isComment === b.isComment &&
	    isDef(a.data) === isDef(b.data) &&
	    sameInputType(a, b)
	  )
	}
	
	// Some browsers do not support dynamically changing type for <input>
	// so they need to be treated as different nodes
	function sameInputType (a, b) {
	  if (a.tag !== 'input') { return true }
	  var i;
	  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
	  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
	  return typeA === typeB
	}
	
	function createKeyToOldIdx (children, beginIdx, endIdx) {
	  var i, key;
	  var map = {};
	  for (i = beginIdx; i <= endIdx; ++i) {
	    key = children[i].key;
	    if (isDef(key)) { map[key] = i; }
	  }
	  return map
	}
	
	function createPatchFunction (backend) {
	  var i, j;
	  var cbs = {};
	
	  var modules = backend.modules;
	  var nodeOps = backend.nodeOps;
	
	  for (i = 0; i < hooks.length; ++i) {
	    cbs[hooks[i]] = [];
	    for (j = 0; j < modules.length; ++j) {
	      if (isDef(modules[j][hooks[i]])) {
	        cbs[hooks[i]].push(modules[j][hooks[i]]);
	      }
	    }
	  }
	
	  function emptyNodeAt (elm) {
	    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
	  }
	
	  function createRmCb (childElm, listeners) {
	    function remove$$1 () {
	      if (--remove$$1.listeners === 0) {
	        removeNode(childElm);
	      }
	    }
	    remove$$1.listeners = listeners;
	    return remove$$1
	  }
	
	  function removeNode (el) {
	    var parent = nodeOps.parentNode(el);
	    // element may have already been removed due to v-html / v-text
	    if (isDef(parent)) {
	      nodeOps.removeChild(parent, el);
	    }
	  }
	
	  var inPre = 0;
	  function createElm (vnode, insertedVnodeQueue, parentElm, refElm, nested) {
	    vnode.isRootInsert = !nested; // for transition enter check
	    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
	      return
	    }
	
	    var data = vnode.data;
	    var children = vnode.children;
	    var tag = vnode.tag;
	    if (isDef(tag)) {
	      {
	        if (data && data.pre) {
	          inPre++;
	        }
	        if (
	          !inPre &&
	          !vnode.ns &&
	          !(config.ignoredElements.length && config.ignoredElements.indexOf(tag) > -1) &&
	          config.isUnknownElement(tag)
	        ) {
	          warn(
	            'Unknown custom element: <' + tag + '> - did you ' +
	            'register the component correctly? For recursive components, ' +
	            'make sure to provide the "name" option.',
	            vnode.context
	          );
	        }
	      }
	      vnode.elm = vnode.ns
	        ? nodeOps.createElementNS(vnode.ns, tag)
	        : nodeOps.createElement(tag, vnode);
	      setScope(vnode);
	
	      /* istanbul ignore if */
	      {
	        createChildren(vnode, children, insertedVnodeQueue);
	        if (isDef(data)) {
	          invokeCreateHooks(vnode, insertedVnodeQueue);
	        }
	        insert(parentElm, vnode.elm, refElm);
	      }
	
	      if ("development" !== 'production' && data && data.pre) {
	        inPre--;
	      }
	    } else if (isTrue(vnode.isComment)) {
	      vnode.elm = nodeOps.createComment(vnode.text);
	      insert(parentElm, vnode.elm, refElm);
	    } else {
	      vnode.elm = nodeOps.createTextNode(vnode.text);
	      insert(parentElm, vnode.elm, refElm);
	    }
	  }
	
	  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
	    var i = vnode.data;
	    if (isDef(i)) {
	      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
	      if (isDef(i = i.hook) && isDef(i = i.init)) {
	        i(vnode, false /* hydrating */, parentElm, refElm);
	      }
	      // after calling the init hook, if the vnode is a child component
	      // it should've created a child instance and mounted it. the child
	      // component also has set the placeholder vnode's elm.
	      // in that case we can just return the element and be done.
	      if (isDef(vnode.componentInstance)) {
	        initComponent(vnode, insertedVnodeQueue);
	        if (isTrue(isReactivated)) {
	          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
	        }
	        return true
	      }
	    }
	  }
	
	  function initComponent (vnode, insertedVnodeQueue) {
	    if (isDef(vnode.data.pendingInsert)) {
	      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
	    }
	    vnode.elm = vnode.componentInstance.$el;
	    if (isPatchable(vnode)) {
	      invokeCreateHooks(vnode, insertedVnodeQueue);
	      setScope(vnode);
	    } else {
	      // empty component root.
	      // skip all element-related modules except for ref (#3455)
	      registerRef(vnode);
	      // make sure to invoke the insert hook
	      insertedVnodeQueue.push(vnode);
	    }
	  }
	
	  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
	    var i;
	    // hack for #4339: a reactivated component with inner transition
	    // does not trigger because the inner node's created hooks are not called
	    // again. It's not ideal to involve module-specific logic in here but
	    // there doesn't seem to be a better way to do it.
	    var innerNode = vnode;
	    while (innerNode.componentInstance) {
	      innerNode = innerNode.componentInstance._vnode;
	      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
	        for (i = 0; i < cbs.activate.length; ++i) {
	          cbs.activate[i](emptyNode, innerNode);
	        }
	        insertedVnodeQueue.push(innerNode);
	        break
	      }
	    }
	    // unlike a newly created component,
	    // a reactivated keep-alive component doesn't insert itself
	    insert(parentElm, vnode.elm, refElm);
	  }
	
	  function insert (parent, elm, ref) {
	    if (isDef(parent)) {
	      if (isDef(ref)) {
	        if (ref.parentNode === parent) {
	          nodeOps.insertBefore(parent, elm, ref);
	        }
	      } else {
	        nodeOps.appendChild(parent, elm);
	      }
	    }
	  }
	
	  function createChildren (vnode, children, insertedVnodeQueue) {
	    if (Array.isArray(children)) {
	      for (var i = 0; i < children.length; ++i) {
	        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
	      }
	    } else if (isPrimitive(vnode.text)) {
	      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
	    }
	  }
	
	  function isPatchable (vnode) {
	    while (vnode.componentInstance) {
	      vnode = vnode.componentInstance._vnode;
	    }
	    return isDef(vnode.tag)
	  }
	
	  function invokeCreateHooks (vnode, insertedVnodeQueue) {
	    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
	      cbs.create[i$1](emptyNode, vnode);
	    }
	    i = vnode.data.hook; // Reuse variable
	    if (isDef(i)) {
	      if (isDef(i.create)) { i.create(emptyNode, vnode); }
	      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
	    }
	  }
	
	  // set scope id attribute for scoped CSS.
	  // this is implemented as a special case to avoid the overhead
	  // of going through the normal attribute patching process.
	  function setScope (vnode) {
	    var i;
	    var ancestor = vnode;
	    while (ancestor) {
	      if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
	        nodeOps.setAttribute(vnode.elm, i, '');
	      }
	      ancestor = ancestor.parent;
	    }
	    // for slot content they should also get the scopeId from the host instance.
	    if (isDef(i = activeInstance) &&
	      i !== vnode.context &&
	      isDef(i = i.$options._scopeId)
	    ) {
	      nodeOps.setAttribute(vnode.elm, i, '');
	    }
	  }
	
	  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
	    for (; startIdx <= endIdx; ++startIdx) {
	      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
	    }
	  }
	
	  function invokeDestroyHook (vnode) {
	    var i, j;
	    var data = vnode.data;
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
	      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
	    }
	    if (isDef(i = vnode.children)) {
	      for (j = 0; j < vnode.children.length; ++j) {
	        invokeDestroyHook(vnode.children[j]);
	      }
	    }
	  }
	
	  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
	    for (; startIdx <= endIdx; ++startIdx) {
	      var ch = vnodes[startIdx];
	      if (isDef(ch)) {
	        if (isDef(ch.tag)) {
	          removeAndInvokeRemoveHook(ch);
	          invokeDestroyHook(ch);
	        } else { // Text node
	          removeNode(ch.elm);
	        }
	      }
	    }
	  }
	
	  function removeAndInvokeRemoveHook (vnode, rm) {
	    if (isDef(rm) || isDef(vnode.data)) {
	      var i;
	      var listeners = cbs.remove.length + 1;
	      if (isDef(rm)) {
	        // we have a recursively passed down rm callback
	        // increase the listeners count
	        rm.listeners += listeners;
	      } else {
	        // directly removing
	        rm = createRmCb(vnode.elm, listeners);
	      }
	      // recursively invoke hooks on child component root node
	      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
	        removeAndInvokeRemoveHook(i, rm);
	      }
	      for (i = 0; i < cbs.remove.length; ++i) {
	        cbs.remove[i](vnode, rm);
	      }
	      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
	        i(vnode, rm);
	      } else {
	        rm();
	      }
	    } else {
	      removeNode(vnode.elm);
	    }
	  }
	
	  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
	    var oldStartIdx = 0;
	    var newStartIdx = 0;
	    var oldEndIdx = oldCh.length - 1;
	    var oldStartVnode = oldCh[0];
	    var oldEndVnode = oldCh[oldEndIdx];
	    var newEndIdx = newCh.length - 1;
	    var newStartVnode = newCh[0];
	    var newEndVnode = newCh[newEndIdx];
	    var oldKeyToIdx, idxInOld, elmToMove, refElm;
	
	    // removeOnly is a special flag used only by <transition-group>
	    // to ensure removed elements stay in correct relative positions
	    // during leaving transitions
	    var canMove = !removeOnly;
	
	    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
	      if (isUndef(oldStartVnode)) {
	        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
	      } else if (isUndef(oldEndVnode)) {
	        oldEndVnode = oldCh[--oldEndIdx];
	      } else if (sameVnode(oldStartVnode, newStartVnode)) {
	        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
	        oldStartVnode = oldCh[++oldStartIdx];
	        newStartVnode = newCh[++newStartIdx];
	      } else if (sameVnode(oldEndVnode, newEndVnode)) {
	        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
	        oldEndVnode = oldCh[--oldEndIdx];
	        newEndVnode = newCh[--newEndIdx];
	      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
	        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
	        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
	        oldStartVnode = oldCh[++oldStartIdx];
	        newEndVnode = newCh[--newEndIdx];
	      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
	        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
	        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
	        oldEndVnode = oldCh[--oldEndIdx];
	        newStartVnode = newCh[++newStartIdx];
	      } else {
	        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
	        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null;
	        if (isUndef(idxInOld)) { // New element
	          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
	          newStartVnode = newCh[++newStartIdx];
	        } else {
	          elmToMove = oldCh[idxInOld];
	          /* istanbul ignore if */
	          if ("development" !== 'production' && !elmToMove) {
	            warn(
	              'It seems there are duplicate keys that is causing an update error. ' +
	              'Make sure each v-for item has a unique key.'
	            );
	          }
	          if (sameVnode(elmToMove, newStartVnode)) {
	            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
	            oldCh[idxInOld] = undefined;
	            canMove && nodeOps.insertBefore(parentElm, newStartVnode.elm, oldStartVnode.elm);
	            newStartVnode = newCh[++newStartIdx];
	          } else {
	            // same key but different element. treat as new element
	            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
	            newStartVnode = newCh[++newStartIdx];
	          }
	        }
	      }
	    }
	    if (oldStartIdx > oldEndIdx) {
	      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
	      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
	    } else if (newStartIdx > newEndIdx) {
	      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
	    }
	  }
	
	  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
	    if (oldVnode === vnode) {
	      return
	    }
	    // reuse element for static trees.
	    // note we only do this if the vnode is cloned -
	    // if the new node is not cloned it means the render functions have been
	    // reset by the hot-reload-api and we need to do a proper re-render.
	    if (isTrue(vnode.isStatic) &&
	      isTrue(oldVnode.isStatic) &&
	      vnode.key === oldVnode.key &&
	      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
	    ) {
	      vnode.elm = oldVnode.elm;
	      vnode.componentInstance = oldVnode.componentInstance;
	      return
	    }
	    var i;
	    var data = vnode.data;
	    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
	      i(oldVnode, vnode);
	    }
	    var elm = vnode.elm = oldVnode.elm;
	    var oldCh = oldVnode.children;
	    var ch = vnode.children;
	    if (isDef(data) && isPatchable(vnode)) {
	      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
	      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
	    }
	    if (isUndef(vnode.text)) {
	      if (isDef(oldCh) && isDef(ch)) {
	        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
	      } else if (isDef(ch)) {
	        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
	        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
	      } else if (isDef(oldCh)) {
	        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
	      } else if (isDef(oldVnode.text)) {
	        nodeOps.setTextContent(elm, '');
	      }
	    } else if (oldVnode.text !== vnode.text) {
	      nodeOps.setTextContent(elm, vnode.text);
	    }
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
	    }
	  }
	
	  function invokeInsertHook (vnode, queue, initial) {
	    // delay insert hooks for component root nodes, invoke them after the
	    // element is really inserted
	    if (isTrue(initial) && isDef(vnode.parent)) {
	      vnode.parent.data.pendingInsert = queue;
	    } else {
	      for (var i = 0; i < queue.length; ++i) {
	        queue[i].data.hook.insert(queue[i]);
	      }
	    }
	  }
	
	  var bailed = false;
	  // list of modules that can skip create hook during hydration because they
	  // are already rendered on the client or has no need for initialization
	  var isRenderedModule = makeMap('attrs,style,class,staticClass,staticStyle,key');
	
	  // Note: this is a browser-only function so we can assume elms are DOM nodes.
	  function hydrate (elm, vnode, insertedVnodeQueue) {
	    {
	      if (!assertNodeMatch(elm, vnode)) {
	        return false
	      }
	    }
	    vnode.elm = elm;
	    var tag = vnode.tag;
	    var data = vnode.data;
	    var children = vnode.children;
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
	      if (isDef(i = vnode.componentInstance)) {
	        // child component. it should have hydrated its own tree.
	        initComponent(vnode, insertedVnodeQueue);
	        return true
	      }
	    }
	    if (isDef(tag)) {
	      if (isDef(children)) {
	        // empty element, allow client to pick up and populate children
	        if (!elm.hasChildNodes()) {
	          createChildren(vnode, children, insertedVnodeQueue);
	        } else {
	          var childrenMatch = true;
	          var childNode = elm.firstChild;
	          for (var i$1 = 0; i$1 < children.length; i$1++) {
	            if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue)) {
	              childrenMatch = false;
	              break
	            }
	            childNode = childNode.nextSibling;
	          }
	          // if childNode is not null, it means the actual childNodes list is
	          // longer than the virtual children list.
	          if (!childrenMatch || childNode) {
	            if ("development" !== 'production' &&
	              typeof console !== 'undefined' &&
	              !bailed
	            ) {
	              bailed = true;
	              console.warn('Parent: ', elm);
	              console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
	            }
	            return false
	          }
	        }
	      }
	      if (isDef(data)) {
	        for (var key in data) {
	          if (!isRenderedModule(key)) {
	            invokeCreateHooks(vnode, insertedVnodeQueue);
	            break
	          }
	        }
	      }
	    } else if (elm.data !== vnode.text) {
	      elm.data = vnode.text;
	    }
	    return true
	  }
	
	  function assertNodeMatch (node, vnode) {
	    if (isDef(vnode.tag)) {
	      return (
	        vnode.tag.indexOf('vue-component') === 0 ||
	        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
	      )
	    } else {
	      return node.nodeType === (vnode.isComment ? 8 : 3)
	    }
	  }
	
	  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
	    if (isUndef(vnode)) {
	      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
	      return
	    }
	
	    var isInitialPatch = false;
	    var insertedVnodeQueue = [];
	
	    if (isUndef(oldVnode)) {
	      // empty mount (likely as component), create new root element
	      isInitialPatch = true;
	      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
	    } else {
	      var isRealElement = isDef(oldVnode.nodeType);
	      if (!isRealElement && sameVnode(oldVnode, vnode)) {
	        // patch existing root node
	        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
	      } else {
	        if (isRealElement) {
	          // mounting to a real element
	          // check if this is server-rendered content and if we can perform
	          // a successful hydration.
	          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
	            oldVnode.removeAttribute(SSR_ATTR);
	            hydrating = true;
	          }
	          if (isTrue(hydrating)) {
	            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
	              invokeInsertHook(vnode, insertedVnodeQueue, true);
	              return oldVnode
	            } else {
	              warn(
	                'The client-side rendered virtual DOM tree is not matching ' +
	                'server-rendered content. This is likely caused by incorrect ' +
	                'HTML markup, for example nesting block-level elements inside ' +
	                '<p>, or missing <tbody>. Bailing hydration and performing ' +
	                'full client-side render.'
	              );
	            }
	          }
	          // either not server-rendered, or hydration failed.
	          // create an empty node and replace it
	          oldVnode = emptyNodeAt(oldVnode);
	        }
	        // replacing existing element
	        var oldElm = oldVnode.elm;
	        var parentElm$1 = nodeOps.parentNode(oldElm);
	        createElm(
	          vnode,
	          insertedVnodeQueue,
	          // extremely rare edge case: do not insert if old element is in a
	          // leaving transition. Only happens when combining transition +
	          // keep-alive + HOCs. (#4590)
	          oldElm._leaveCb ? null : parentElm$1,
	          nodeOps.nextSibling(oldElm)
	        );
	
	        if (isDef(vnode.parent)) {
	          // component root element replaced.
	          // update parent placeholder node element, recursively
	          var ancestor = vnode.parent;
	          while (ancestor) {
	            ancestor.elm = vnode.elm;
	            ancestor = ancestor.parent;
	          }
	          if (isPatchable(vnode)) {
	            for (var i = 0; i < cbs.create.length; ++i) {
	              cbs.create[i](emptyNode, vnode.parent);
	            }
	          }
	        }
	
	        if (isDef(parentElm$1)) {
	          removeVnodes(parentElm$1, [oldVnode], 0, 0);
	        } else if (isDef(oldVnode.tag)) {
	          invokeDestroyHook(oldVnode);
	        }
	      }
	    }
	
	    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
	    return vnode.elm
	  }
	}
	
	/*  */
	
	var directives = {
	  create: updateDirectives,
	  update: updateDirectives,
	  destroy: function unbindDirectives (vnode) {
	    updateDirectives(vnode, emptyNode);
	  }
	};
	
	function updateDirectives (oldVnode, vnode) {
	  if (oldVnode.data.directives || vnode.data.directives) {
	    _update(oldVnode, vnode);
	  }
	}
	
	function _update (oldVnode, vnode) {
	  var isCreate = oldVnode === emptyNode;
	  var isDestroy = vnode === emptyNode;
	  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
	  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);
	
	  var dirsWithInsert = [];
	  var dirsWithPostpatch = [];
	
	  var key, oldDir, dir;
	  for (key in newDirs) {
	    oldDir = oldDirs[key];
	    dir = newDirs[key];
	    if (!oldDir) {
	      // new directive, bind
	      callHook$1(dir, 'bind', vnode, oldVnode);
	      if (dir.def && dir.def.inserted) {
	        dirsWithInsert.push(dir);
	      }
	    } else {
	      // existing directive, update
	      dir.oldValue = oldDir.value;
	      callHook$1(dir, 'update', vnode, oldVnode);
	      if (dir.def && dir.def.componentUpdated) {
	        dirsWithPostpatch.push(dir);
	      }
	    }
	  }
	
	  if (dirsWithInsert.length) {
	    var callInsert = function () {
	      for (var i = 0; i < dirsWithInsert.length; i++) {
	        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
	      }
	    };
	    if (isCreate) {
	      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert);
	    } else {
	      callInsert();
	    }
	  }
	
	  if (dirsWithPostpatch.length) {
	    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function () {
	      for (var i = 0; i < dirsWithPostpatch.length; i++) {
	        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
	      }
	    });
	  }
	
	  if (!isCreate) {
	    for (key in oldDirs) {
	      if (!newDirs[key]) {
	        // no longer present, unbind
	        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
	      }
	    }
	  }
	}
	
	var emptyModifiers = Object.create(null);
	
	function normalizeDirectives$1 (
	  dirs,
	  vm
	) {
	  var res = Object.create(null);
	  if (!dirs) {
	    return res
	  }
	  var i, dir;
	  for (i = 0; i < dirs.length; i++) {
	    dir = dirs[i];
	    if (!dir.modifiers) {
	      dir.modifiers = emptyModifiers;
	    }
	    res[getRawDirName(dir)] = dir;
	    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
	  }
	  return res
	}
	
	function getRawDirName (dir) {
	  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
	}
	
	function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
	  var fn = dir.def && dir.def[hook];
	  if (fn) {
	    try {
	      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
	    } catch (e) {
	      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
	    }
	  }
	}
	
	var baseModules = [
	  ref,
	  directives
	];
	
	/*  */
	
	function updateAttrs (oldVnode, vnode) {
	  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
	    return
	  }
	  var key, cur, old;
	  var elm = vnode.elm;
	  var oldAttrs = oldVnode.data.attrs || {};
	  var attrs = vnode.data.attrs || {};
	  // clone observed objects, as the user probably wants to mutate it
	  if (isDef(attrs.__ob__)) {
	    attrs = vnode.data.attrs = extend({}, attrs);
	  }
	
	  for (key in attrs) {
	    cur = attrs[key];
	    old = oldAttrs[key];
	    if (old !== cur) {
	      setAttr(elm, key, cur);
	    }
	  }
	  // #4391: in IE9, setting type can reset value for input[type=radio]
	  /* istanbul ignore if */
	  if (isIE9 && attrs.value !== oldAttrs.value) {
	    setAttr(elm, 'value', attrs.value);
	  }
	  for (key in oldAttrs) {
	    if (isUndef(attrs[key])) {
	      if (isXlink(key)) {
	        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
	      } else if (!isEnumeratedAttr(key)) {
	        elm.removeAttribute(key);
	      }
	    }
	  }
	}
	
	function setAttr (el, key, value) {
	  if (isBooleanAttr(key)) {
	    // set attribute for blank value
	    // e.g. <option disabled>Select one</option>
	    if (isFalsyAttrValue(value)) {
	      el.removeAttribute(key);
	    } else {
	      el.setAttribute(key, key);
	    }
	  } else if (isEnumeratedAttr(key)) {
	    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
	  } else if (isXlink(key)) {
	    if (isFalsyAttrValue(value)) {
	      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
	    } else {
	      el.setAttributeNS(xlinkNS, key, value);
	    }
	  } else {
	    if (isFalsyAttrValue(value)) {
	      el.removeAttribute(key);
	    } else {
	      el.setAttribute(key, value);
	    }
	  }
	}
	
	var attrs = {
	  create: updateAttrs,
	  update: updateAttrs
	};
	
	/*  */
	
	function updateClass (oldVnode, vnode) {
	  var el = vnode.elm;
	  var data = vnode.data;
	  var oldData = oldVnode.data;
	  if (
	    isUndef(data.staticClass) &&
	    isUndef(data.class) && (
	      isUndef(oldData) || (
	        isUndef(oldData.staticClass) &&
	        isUndef(oldData.class)
	      )
	    )
	  ) {
	    return
	  }
	
	  var cls = genClassForVnode(vnode);
	
	  // handle transition classes
	  var transitionClass = el._transitionClasses;
	  if (isDef(transitionClass)) {
	    cls = concat(cls, stringifyClass(transitionClass));
	  }
	
	  // set the class
	  if (cls !== el._prevClass) {
	    el.setAttribute('class', cls);
	    el._prevClass = cls;
	  }
	}
	
	var klass = {
	  create: updateClass,
	  update: updateClass
	};
	
	/*  */
	
	var validDivisionCharRE = /[\w).+\-_$\]]/;
	
	function parseFilters (exp) {
	  var inSingle = false;
	  var inDouble = false;
	  var inTemplateString = false;
	  var inRegex = false;
	  var curly = 0;
	  var square = 0;
	  var paren = 0;
	  var lastFilterIndex = 0;
	  var c, prev, i, expression, filters;
	
	  for (i = 0; i < exp.length; i++) {
	    prev = c;
	    c = exp.charCodeAt(i);
	    if (inSingle) {
	      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
	    } else if (inDouble) {
	      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
	    } else if (inTemplateString) {
	      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
	    } else if (inRegex) {
	      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
	    } else if (
	      c === 0x7C && // pipe
	      exp.charCodeAt(i + 1) !== 0x7C &&
	      exp.charCodeAt(i - 1) !== 0x7C &&
	      !curly && !square && !paren
	    ) {
	      if (expression === undefined) {
	        // first filter, end of expression
	        lastFilterIndex = i + 1;
	        expression = exp.slice(0, i).trim();
	      } else {
	        pushFilter();
	      }
	    } else {
	      switch (c) {
	        case 0x22: inDouble = true; break         // "
	        case 0x27: inSingle = true; break         // '
	        case 0x60: inTemplateString = true; break // `
	        case 0x28: paren++; break                 // (
	        case 0x29: paren--; break                 // )
	        case 0x5B: square++; break                // [
	        case 0x5D: square--; break                // ]
	        case 0x7B: curly++; break                 // {
	        case 0x7D: curly--; break                 // }
	      }
	      if (c === 0x2f) { // /
	        var j = i - 1;
	        var p = (void 0);
	        // find first non-whitespace prev char
	        for (; j >= 0; j--) {
	          p = exp.charAt(j);
	          if (p !== ' ') { break }
	        }
	        if (!p || !validDivisionCharRE.test(p)) {
	          inRegex = true;
	        }
	      }
	    }
	  }
	
	  if (expression === undefined) {
	    expression = exp.slice(0, i).trim();
	  } else if (lastFilterIndex !== 0) {
	    pushFilter();
	  }
	
	  function pushFilter () {
	    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
	    lastFilterIndex = i + 1;
	  }
	
	  if (filters) {
	    for (i = 0; i < filters.length; i++) {
	      expression = wrapFilter(expression, filters[i]);
	    }
	  }
	
	  return expression
	}
	
	function wrapFilter (exp, filter) {
	  var i = filter.indexOf('(');
	  if (i < 0) {
	    // _f: resolveFilter
	    return ("_f(\"" + filter + "\")(" + exp + ")")
	  } else {
	    var name = filter.slice(0, i);
	    var args = filter.slice(i + 1);
	    return ("_f(\"" + name + "\")(" + exp + "," + args)
	  }
	}
	
	/*  */
	
	function baseWarn (msg) {
	  console.error(("[Vue compiler]: " + msg));
	}
	
	function pluckModuleFunction (
	  modules,
	  key
	) {
	  return modules
	    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
	    : []
	}
	
	function addProp (el, name, value) {
	  (el.props || (el.props = [])).push({ name: name, value: value });
	}
	
	function addAttr (el, name, value) {
	  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
	}
	
	function addDirective (
	  el,
	  name,
	  rawName,
	  value,
	  arg,
	  modifiers
	) {
	  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
	}
	
	function addHandler (
	  el,
	  name,
	  value,
	  modifiers,
	  important,
	  warn
	) {
	  // warn prevent and passive modifier
	  /* istanbul ignore if */
	  if (
	    "development" !== 'production' && warn &&
	    modifiers && modifiers.prevent && modifiers.passive
	  ) {
	    warn(
	      'passive and prevent can\'t be used together. ' +
	      'Passive handler can\'t prevent default event.'
	    );
	  }
	  // check capture modifier
	  if (modifiers && modifiers.capture) {
	    delete modifiers.capture;
	    name = '!' + name; // mark the event as captured
	  }
	  if (modifiers && modifiers.once) {
	    delete modifiers.once;
	    name = '~' + name; // mark the event as once
	  }
	  /* istanbul ignore if */
	  if (modifiers && modifiers.passive) {
	    delete modifiers.passive;
	    name = '&' + name; // mark the event as passive
	  }
	  var events;
	  if (modifiers && modifiers.native) {
	    delete modifiers.native;
	    events = el.nativeEvents || (el.nativeEvents = {});
	  } else {
	    events = el.events || (el.events = {});
	  }
	  var newHandler = { value: value, modifiers: modifiers };
	  var handlers = events[name];
	  /* istanbul ignore if */
	  if (Array.isArray(handlers)) {
	    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
	  } else if (handlers) {
	    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
	  } else {
	    events[name] = newHandler;
	  }
	}
	
	function getBindingAttr (
	  el,
	  name,
	  getStatic
	) {
	  var dynamicValue =
	    getAndRemoveAttr(el, ':' + name) ||
	    getAndRemoveAttr(el, 'v-bind:' + name);
	  if (dynamicValue != null) {
	    return parseFilters(dynamicValue)
	  } else if (getStatic !== false) {
	    var staticValue = getAndRemoveAttr(el, name);
	    if (staticValue != null) {
	      return JSON.stringify(staticValue)
	    }
	  }
	}
	
	function getAndRemoveAttr (el, name) {
	  var val;
	  if ((val = el.attrsMap[name]) != null) {
	    var list = el.attrsList;
	    for (var i = 0, l = list.length; i < l; i++) {
	      if (list[i].name === name) {
	        list.splice(i, 1);
	        break
	      }
	    }
	  }
	  return val
	}
	
	/*  */
	
	/**
	 * Cross-platform code generation for component v-model
	 */
	function genComponentModel (
	  el,
	  value,
	  modifiers
	) {
	  var ref = modifiers || {};
	  var number = ref.number;
	  var trim = ref.trim;
	
	  var baseValueExpression = '$$v';
	  var valueExpression = baseValueExpression;
	  if (trim) {
	    valueExpression =
	      "(typeof " + baseValueExpression + " === 'string'" +
	        "? " + baseValueExpression + ".trim()" +
	        ": " + baseValueExpression + ")";
	  }
	  if (number) {
	    valueExpression = "_n(" + valueExpression + ")";
	  }
	  var assignment = genAssignmentCode(value, valueExpression);
	
	  el.model = {
	    value: ("(" + value + ")"),
	    expression: ("\"" + value + "\""),
	    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
	  };
	}
	
	/**
	 * Cross-platform codegen helper for generating v-model value assignment code.
	 */
	function genAssignmentCode (
	  value,
	  assignment
	) {
	  var modelRs = parseModel(value);
	  if (modelRs.idx === null) {
	    return (value + "=" + assignment)
	  } else {
	    return "var $$exp = " + (modelRs.exp) + ", $$idx = " + (modelRs.idx) + ";" +
	      "if (!Array.isArray($$exp)){" +
	        value + "=" + assignment + "}" +
	      "else{$$exp.splice($$idx, 1, " + assignment + ")}"
	  }
	}
	
	/**
	 * parse directive model to do the array update transform. a[idx] = val => $$a.splice($$idx, 1, val)
	 *
	 * for loop possible cases:
	 *
	 * - test
	 * - test[idx]
	 * - test[test1[idx]]
	 * - test["a"][idx]
	 * - xxx.test[a[a].test1[idx]]
	 * - test.xxx.a["asa"][test1[idx]]
	 *
	 */
	
	var len;
	var str;
	var chr;
	var index$1;
	var expressionPos;
	var expressionEndPos;
	
	function parseModel (val) {
	  str = val;
	  len = str.length;
	  index$1 = expressionPos = expressionEndPos = 0;
	
	  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
	    return {
	      exp: val,
	      idx: null
	    }
	  }
	
	  while (!eof()) {
	    chr = next();
	    /* istanbul ignore if */
	    if (isStringStart(chr)) {
	      parseString(chr);
	    } else if (chr === 0x5B) {
	      parseBracket(chr);
	    }
	  }
	
	  return {
	    exp: val.substring(0, expressionPos),
	    idx: val.substring(expressionPos + 1, expressionEndPos)
	  }
	}
	
	function next () {
	  return str.charCodeAt(++index$1)
	}
	
	function eof () {
	  return index$1 >= len
	}
	
	function isStringStart (chr) {
	  return chr === 0x22 || chr === 0x27
	}
	
	function parseBracket (chr) {
	  var inBracket = 1;
	  expressionPos = index$1;
	  while (!eof()) {
	    chr = next();
	    if (isStringStart(chr)) {
	      parseString(chr);
	      continue
	    }
	    if (chr === 0x5B) { inBracket++; }
	    if (chr === 0x5D) { inBracket--; }
	    if (inBracket === 0) {
	      expressionEndPos = index$1;
	      break
	    }
	  }
	}
	
	function parseString (chr) {
	  var stringQuote = chr;
	  while (!eof()) {
	    chr = next();
	    if (chr === stringQuote) {
	      break
	    }
	  }
	}
	
	/*  */
	
	var warn$1;
	
	// in some cases, the event used has to be determined at runtime
	// so we used some reserved tokens during compile.
	var RANGE_TOKEN = '__r';
	var CHECKBOX_RADIO_TOKEN = '__c';
	
	function model (
	  el,
	  dir,
	  _warn
	) {
	  warn$1 = _warn;
	  var value = dir.value;
	  var modifiers = dir.modifiers;
	  var tag = el.tag;
	  var type = el.attrsMap.type;
	
	  {
	    var dynamicType = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
	    if (tag === 'input' && dynamicType) {
	      warn$1(
	        "<input :type=\"" + dynamicType + "\" v-model=\"" + value + "\">:\n" +
	        "v-model does not support dynamic input types. Use v-if branches instead."
	      );
	    }
	    // inputs with type="file" are read only and setting the input's
	    // value will throw an error.
	    if (tag === 'input' && type === 'file') {
	      warn$1(
	        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
	        "File inputs are read only. Use a v-on:change listener instead."
	      );
	    }
	  }
	
	  if (tag === 'select') {
	    genSelect(el, value, modifiers);
	  } else if (tag === 'input' && type === 'checkbox') {
	    genCheckboxModel(el, value, modifiers);
	  } else if (tag === 'input' && type === 'radio') {
	    genRadioModel(el, value, modifiers);
	  } else if (tag === 'input' || tag === 'textarea') {
	    genDefaultModel(el, value, modifiers);
	  } else if (!config.isReservedTag(tag)) {
	    genComponentModel(el, value, modifiers);
	    // component v-model doesn't need extra runtime
	    return false
	  } else {
	    warn$1(
	      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
	      "v-model is not supported on this element type. " +
	      'If you are working with contenteditable, it\'s recommended to ' +
	      'wrap a library dedicated for that purpose inside a custom component.'
	    );
	  }
	
	  // ensure runtime directive metadata
	  return true
	}
	
	function genCheckboxModel (
	  el,
	  value,
	  modifiers
	) {
	  var number = modifiers && modifiers.number;
	  var valueBinding = getBindingAttr(el, 'value') || 'null';
	  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
	  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
	  addProp(el, 'checked',
	    "Array.isArray(" + value + ")" +
	      "?_i(" + value + "," + valueBinding + ")>-1" + (
	        trueValueBinding === 'true'
	          ? (":(" + value + ")")
	          : (":_q(" + value + "," + trueValueBinding + ")")
	      )
	  );
	  addHandler(el, CHECKBOX_RADIO_TOKEN,
	    "var $$a=" + value + "," +
	        '$$el=$event.target,' +
	        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
	    'if(Array.isArray($$a)){' +
	      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
	          '$$i=_i($$a,$$v);' +
	      "if($$c){$$i<0&&(" + value + "=$$a.concat($$v))}" +
	      "else{$$i>-1&&(" + value + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}" +
	    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
	    null, true
	  );
	}
	
	function genRadioModel (
	    el,
	    value,
	    modifiers
	) {
	  var number = modifiers && modifiers.number;
	  var valueBinding = getBindingAttr(el, 'value') || 'null';
	  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
	  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
	  addHandler(el, CHECKBOX_RADIO_TOKEN, genAssignmentCode(value, valueBinding), null, true);
	}
	
	function genSelect (
	    el,
	    value,
	    modifiers
	) {
	  var number = modifiers && modifiers.number;
	  var selectedVal = "Array.prototype.filter" +
	    ".call($event.target.options,function(o){return o.selected})" +
	    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
	    "return " + (number ? '_n(val)' : 'val') + "})";
	
	  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
	  var code = "var $$selectedVal = " + selectedVal + ";";
	  code = code + " " + (genAssignmentCode(value, assignment));
	  addHandler(el, 'change', code, null, true);
	}
	
	function genDefaultModel (
	  el,
	  value,
	  modifiers
	) {
	  var type = el.attrsMap.type;
	  var ref = modifiers || {};
	  var lazy = ref.lazy;
	  var number = ref.number;
	  var trim = ref.trim;
	  var needCompositionGuard = !lazy && type !== 'range';
	  var event = lazy
	    ? 'change'
	    : type === 'range'
	      ? RANGE_TOKEN
	      : 'input';
	
	  var valueExpression = '$event.target.value';
	  if (trim) {
	    valueExpression = "$event.target.value.trim()";
	  }
	  if (number) {
	    valueExpression = "_n(" + valueExpression + ")";
	  }
	
	  var code = genAssignmentCode(value, valueExpression);
	  if (needCompositionGuard) {
	    code = "if($event.target.composing)return;" + code;
	  }
	
	  addProp(el, 'value', ("(" + value + ")"));
	  addHandler(el, event, code, null, true);
	  if (trim || number || type === 'number') {
	    addHandler(el, 'blur', '$forceUpdate()');
	  }
	}
	
	/*  */
	
	// normalize v-model event tokens that can only be determined at runtime.
	// it's important to place the event as the first in the array because
	// the whole point is ensuring the v-model callback gets called before
	// user-attached handlers.
	function normalizeEvents (on) {
	  var event;
	  /* istanbul ignore if */
	  if (isDef(on[RANGE_TOKEN])) {
	    // IE input[type=range] only supports `change` event
	    event = isIE ? 'change' : 'input';
	    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
	    delete on[RANGE_TOKEN];
	  }
	  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
	    // Chrome fires microtasks in between click/change, leads to #4521
	    event = isChrome ? 'click' : 'change';
	    on[event] = [].concat(on[CHECKBOX_RADIO_TOKEN], on[event] || []);
	    delete on[CHECKBOX_RADIO_TOKEN];
	  }
	}
	
	var target$1;
	
	function add$1 (
	  event,
	  handler,
	  once$$1,
	  capture,
	  passive
	) {
	  if (once$$1) {
	    var oldHandler = handler;
	    var _target = target$1; // save current target element in closure
	    handler = function (ev) {
	      var res = arguments.length === 1
	        ? oldHandler(ev)
	        : oldHandler.apply(null, arguments);
	      if (res !== null) {
	        remove$2(event, handler, capture, _target);
	      }
	    };
	  }
	  target$1.addEventListener(
	    event,
	    handler,
	    supportsPassive
	      ? { capture: capture, passive: passive }
	      : capture
	  );
	}
	
	function remove$2 (
	  event,
	  handler,
	  capture,
	  _target
	) {
	  (_target || target$1).removeEventListener(event, handler, capture);
	}
	
	function updateDOMListeners (oldVnode, vnode) {
	  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
	    return
	  }
	  var on = vnode.data.on || {};
	  var oldOn = oldVnode.data.on || {};
	  target$1 = vnode.elm;
	  normalizeEvents(on);
	  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
	}
	
	var events = {
	  create: updateDOMListeners,
	  update: updateDOMListeners
	};
	
	/*  */
	
	function updateDOMProps (oldVnode, vnode) {
	  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
	    return
	  }
	  var key, cur;
	  var elm = vnode.elm;
	  var oldProps = oldVnode.data.domProps || {};
	  var props = vnode.data.domProps || {};
	  // clone observed objects, as the user probably wants to mutate it
	  if (isDef(props.__ob__)) {
	    props = vnode.data.domProps = extend({}, props);
	  }
	
	  for (key in oldProps) {
	    if (isUndef(props[key])) {
	      elm[key] = '';
	    }
	  }
	  for (key in props) {
	    cur = props[key];
	    // ignore children if the node has textContent or innerHTML,
	    // as these will throw away existing DOM nodes and cause removal errors
	    // on subsequent patches (#3360)
	    if (key === 'textContent' || key === 'innerHTML') {
	      if (vnode.children) { vnode.children.length = 0; }
	      if (cur === oldProps[key]) { continue }
	    }
	
	    if (key === 'value') {
	      // store value as _value as well since
	      // non-string values will be stringified
	      elm._value = cur;
	      // avoid resetting cursor position when value is the same
	      var strCur = isUndef(cur) ? '' : String(cur);
	      if (shouldUpdateValue(elm, vnode, strCur)) {
	        elm.value = strCur;
	      }
	    } else {
	      elm[key] = cur;
	    }
	  }
	}
	
	// check platforms/web/util/attrs.js acceptValue
	
	
	function shouldUpdateValue (
	  elm,
	  vnode,
	  checkVal
	) {
	  return (!elm.composing && (
	    vnode.tag === 'option' ||
	    isDirty(elm, checkVal) ||
	    isInputChanged(elm, checkVal)
	  ))
	}
	
	function isDirty (elm, checkVal) {
	  // return true when textbox (.number and .trim) loses focus and its value is not equal to the updated value
	  return document.activeElement !== elm && elm.value !== checkVal
	}
	
	function isInputChanged (elm, newVal) {
	  var value = elm.value;
	  var modifiers = elm._vModifiers; // injected by v-model runtime
	  if ((isDef(modifiers) && modifiers.number) || elm.type === 'number') {
	    return toNumber(value) !== toNumber(newVal)
	  }
	  if (isDef(modifiers) && modifiers.trim) {
	    return value.trim() !== newVal.trim()
	  }
	  return value !== newVal
	}
	
	var domProps = {
	  create: updateDOMProps,
	  update: updateDOMProps
	};
	
	/*  */
	
	var parseStyleText = cached(function (cssText) {
	  var res = {};
	  var listDelimiter = /;(?![^(]*\))/g;
	  var propertyDelimiter = /:(.+)/;
	  cssText.split(listDelimiter).forEach(function (item) {
	    if (item) {
	      var tmp = item.split(propertyDelimiter);
	      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
	    }
	  });
	  return res
	});
	
	// merge static and dynamic style data on the same vnode
	function normalizeStyleData (data) {
	  var style = normalizeStyleBinding(data.style);
	  // static style is pre-processed into an object during compilation
	  // and is always a fresh object, so it's safe to merge into it
	  return data.staticStyle
	    ? extend(data.staticStyle, style)
	    : style
	}
	
	// normalize possible array / string values into Object
	function normalizeStyleBinding (bindingStyle) {
	  if (Array.isArray(bindingStyle)) {
	    return toObject(bindingStyle)
	  }
	  if (typeof bindingStyle === 'string') {
	    return parseStyleText(bindingStyle)
	  }
	  return bindingStyle
	}
	
	/**
	 * parent component style should be after child's
	 * so that parent component's style could override it
	 */
	function getStyle (vnode, checkChild) {
	  var res = {};
	  var styleData;
	
	  if (checkChild) {
	    var childNode = vnode;
	    while (childNode.componentInstance) {
	      childNode = childNode.componentInstance._vnode;
	      if (childNode.data && (styleData = normalizeStyleData(childNode.data))) {
	        extend(res, styleData);
	      }
	    }
	  }
	
	  if ((styleData = normalizeStyleData(vnode.data))) {
	    extend(res, styleData);
	  }
	
	  var parentNode = vnode;
	  while ((parentNode = parentNode.parent)) {
	    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
	      extend(res, styleData);
	    }
	  }
	  return res
	}
	
	/*  */
	
	var cssVarRE = /^--/;
	var importantRE = /\s*!important$/;
	var setProp = function (el, name, val) {
	  /* istanbul ignore if */
	  if (cssVarRE.test(name)) {
	    el.style.setProperty(name, val);
	  } else if (importantRE.test(val)) {
	    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
	  } else {
	    var normalizedName = normalize(name);
	    if (Array.isArray(val)) {
	      // Support values array created by autoprefixer, e.g.
	      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
	      // Set them one by one, and the browser will only set those it can recognize
	      for (var i = 0, len = val.length; i < len; i++) {
	        el.style[normalizedName] = val[i];
	      }
	    } else {
	      el.style[normalizedName] = val;
	    }
	  }
	};
	
	var prefixes = ['Webkit', 'Moz', 'ms'];
	
	var testEl;
	var normalize = cached(function (prop) {
	  testEl = testEl || document.createElement('div');
	  prop = camelize(prop);
	  if (prop !== 'filter' && (prop in testEl.style)) {
	    return prop
	  }
	  var upper = prop.charAt(0).toUpperCase() + prop.slice(1);
	  for (var i = 0; i < prefixes.length; i++) {
	    var prefixed = prefixes[i] + upper;
	    if (prefixed in testEl.style) {
	      return prefixed
	    }
	  }
	});
	
	function updateStyle (oldVnode, vnode) {
	  var data = vnode.data;
	  var oldData = oldVnode.data;
	
	  if (isUndef(data.staticStyle) && isUndef(data.style) &&
	    isUndef(oldData.staticStyle) && isUndef(oldData.style)
	  ) {
	    return
	  }
	
	  var cur, name;
	  var el = vnode.elm;
	  var oldStaticStyle = oldData.staticStyle;
	  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};
	
	  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
	  var oldStyle = oldStaticStyle || oldStyleBinding;
	
	  var style = normalizeStyleBinding(vnode.data.style) || {};
	
	  // store normalized style under a different key for next diff
	  // make sure to clone it if it's reactive, since the user likley wants
	  // to mutate it.
	  vnode.data.normalizedStyle = isDef(style.__ob__)
	    ? extend({}, style)
	    : style;
	
	  var newStyle = getStyle(vnode, true);
	
	  for (name in oldStyle) {
	    if (isUndef(newStyle[name])) {
	      setProp(el, name, '');
	    }
	  }
	  for (name in newStyle) {
	    cur = newStyle[name];
	    if (cur !== oldStyle[name]) {
	      // ie9 setting to null has no effect, must use empty string
	      setProp(el, name, cur == null ? '' : cur);
	    }
	  }
	}
	
	var style = {
	  create: updateStyle,
	  update: updateStyle
	};
	
	/*  */
	
	/**
	 * Add class with compatibility for SVG since classList is not supported on
	 * SVG elements in IE
	 */
	function addClass (el, cls) {
	  /* istanbul ignore if */
	  if (!cls || !(cls = cls.trim())) {
	    return
	  }
	
	  /* istanbul ignore else */
	  if (el.classList) {
	    if (cls.indexOf(' ') > -1) {
	      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
	    } else {
	      el.classList.add(cls);
	    }
	  } else {
	    var cur = " " + (el.getAttribute('class') || '') + " ";
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      el.setAttribute('class', (cur + cls).trim());
	    }
	  }
	}
	
	/**
	 * Remove class with compatibility for SVG since classList is not supported on
	 * SVG elements in IE
	 */
	function removeClass (el, cls) {
	  /* istanbul ignore if */
	  if (!cls || !(cls = cls.trim())) {
	    return
	  }
	
	  /* istanbul ignore else */
	  if (el.classList) {
	    if (cls.indexOf(' ') > -1) {
	      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
	    } else {
	      el.classList.remove(cls);
	    }
	  } else {
	    var cur = " " + (el.getAttribute('class') || '') + " ";
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    el.setAttribute('class', cur.trim());
	  }
	}
	
	/*  */
	
	function resolveTransition (def$$1) {
	  if (!def$$1) {
	    return
	  }
	  /* istanbul ignore else */
	  if (typeof def$$1 === 'object') {
	    var res = {};
	    if (def$$1.css !== false) {
	      extend(res, autoCssTransition(def$$1.name || 'v'));
	    }
	    extend(res, def$$1);
	    return res
	  } else if (typeof def$$1 === 'string') {
	    return autoCssTransition(def$$1)
	  }
	}
	
	var autoCssTransition = cached(function (name) {
	  return {
	    enterClass: (name + "-enter"),
	    enterToClass: (name + "-enter-to"),
	    enterActiveClass: (name + "-enter-active"),
	    leaveClass: (name + "-leave"),
	    leaveToClass: (name + "-leave-to"),
	    leaveActiveClass: (name + "-leave-active")
	  }
	});
	
	var hasTransition = inBrowser && !isIE9;
	var TRANSITION = 'transition';
	var ANIMATION = 'animation';
	
	// Transition property/event sniffing
	var transitionProp = 'transition';
	var transitionEndEvent = 'transitionend';
	var animationProp = 'animation';
	var animationEndEvent = 'animationend';
	if (hasTransition) {
	  /* istanbul ignore if */
	  if (window.ontransitionend === undefined &&
	    window.onwebkittransitionend !== undefined
	  ) {
	    transitionProp = 'WebkitTransition';
	    transitionEndEvent = 'webkitTransitionEnd';
	  }
	  if (window.onanimationend === undefined &&
	    window.onwebkitanimationend !== undefined
	  ) {
	    animationProp = 'WebkitAnimation';
	    animationEndEvent = 'webkitAnimationEnd';
	  }
	}
	
	// binding to window is necessary to make hot reload work in IE in strict mode
	var raf = inBrowser && window.requestAnimationFrame
	  ? window.requestAnimationFrame.bind(window)
	  : setTimeout;
	
	function nextFrame (fn) {
	  raf(function () {
	    raf(fn);
	  });
	}
	
	function addTransitionClass (el, cls) {
	  (el._transitionClasses || (el._transitionClasses = [])).push(cls);
	  addClass(el, cls);
	}
	
	function removeTransitionClass (el, cls) {
	  if (el._transitionClasses) {
	    remove(el._transitionClasses, cls);
	  }
	  removeClass(el, cls);
	}
	
	function whenTransitionEnds (
	  el,
	  expectedType,
	  cb
	) {
	  var ref = getTransitionInfo(el, expectedType);
	  var type = ref.type;
	  var timeout = ref.timeout;
	  var propCount = ref.propCount;
	  if (!type) { return cb() }
	  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
	  var ended = 0;
	  var end = function () {
	    el.removeEventListener(event, onEnd);
	    cb();
	  };
	  var onEnd = function (e) {
	    if (e.target === el) {
	      if (++ended >= propCount) {
	        end();
	      }
	    }
	  };
	  setTimeout(function () {
	    if (ended < propCount) {
	      end();
	    }
	  }, timeout + 1);
	  el.addEventListener(event, onEnd);
	}
	
	var transformRE = /\b(transform|all)(,|$)/;
	
	function getTransitionInfo (el, expectedType) {
	  var styles = window.getComputedStyle(el);
	  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
	  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
	  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
	  var animationDelays = styles[animationProp + 'Delay'].split(', ');
	  var animationDurations = styles[animationProp + 'Duration'].split(', ');
	  var animationTimeout = getTimeout(animationDelays, animationDurations);
	
	  var type;
	  var timeout = 0;
	  var propCount = 0;
	  /* istanbul ignore if */
	  if (expectedType === TRANSITION) {
	    if (transitionTimeout > 0) {
	      type = TRANSITION;
	      timeout = transitionTimeout;
	      propCount = transitionDurations.length;
	    }
	  } else if (expectedType === ANIMATION) {
	    if (animationTimeout > 0) {
	      type = ANIMATION;
	      timeout = animationTimeout;
	      propCount = animationDurations.length;
	    }
	  } else {
	    timeout = Math.max(transitionTimeout, animationTimeout);
	    type = timeout > 0
	      ? transitionTimeout > animationTimeout
	        ? TRANSITION
	        : ANIMATION
	      : null;
	    propCount = type
	      ? type === TRANSITION
	        ? transitionDurations.length
	        : animationDurations.length
	      : 0;
	  }
	  var hasTransform =
	    type === TRANSITION &&
	    transformRE.test(styles[transitionProp + 'Property']);
	  return {
	    type: type,
	    timeout: timeout,
	    propCount: propCount,
	    hasTransform: hasTransform
	  }
	}
	
	function getTimeout (delays, durations) {
	  /* istanbul ignore next */
	  while (delays.length < durations.length) {
	    delays = delays.concat(delays);
	  }
	
	  return Math.max.apply(null, durations.map(function (d, i) {
	    return toMs(d) + toMs(delays[i])
	  }))
	}
	
	function toMs (s) {
	  return Number(s.slice(0, -1)) * 1000
	}
	
	/*  */
	
	function enter (vnode, toggleDisplay) {
	  var el = vnode.elm;
	
	  // call leave callback now
	  if (isDef(el._leaveCb)) {
	    el._leaveCb.cancelled = true;
	    el._leaveCb();
	  }
	
	  var data = resolveTransition(vnode.data.transition);
	  if (isUndef(data)) {
	    return
	  }
	
	  /* istanbul ignore if */
	  if (isDef(el._enterCb) || el.nodeType !== 1) {
	    return
	  }
	
	  var css = data.css;
	  var type = data.type;
	  var enterClass = data.enterClass;
	  var enterToClass = data.enterToClass;
	  var enterActiveClass = data.enterActiveClass;
	  var appearClass = data.appearClass;
	  var appearToClass = data.appearToClass;
	  var appearActiveClass = data.appearActiveClass;
	  var beforeEnter = data.beforeEnter;
	  var enter = data.enter;
	  var afterEnter = data.afterEnter;
	  var enterCancelled = data.enterCancelled;
	  var beforeAppear = data.beforeAppear;
	  var appear = data.appear;
	  var afterAppear = data.afterAppear;
	  var appearCancelled = data.appearCancelled;
	  var duration = data.duration;
	
	  // activeInstance will always be the <transition> component managing this
	  // transition. One edge case to check is when the <transition> is placed
	  // as the root node of a child component. In that case we need to check
	  // <transition>'s parent for appear check.
	  var context = activeInstance;
	  var transitionNode = activeInstance.$vnode;
	  while (transitionNode && transitionNode.parent) {
	    transitionNode = transitionNode.parent;
	    context = transitionNode.context;
	  }
	
	  var isAppear = !context._isMounted || !vnode.isRootInsert;
	
	  if (isAppear && !appear && appear !== '') {
	    return
	  }
	
	  var startClass = isAppear && appearClass
	    ? appearClass
	    : enterClass;
	  var activeClass = isAppear && appearActiveClass
	    ? appearActiveClass
	    : enterActiveClass;
	  var toClass = isAppear && appearToClass
	    ? appearToClass
	    : enterToClass;
	
	  var beforeEnterHook = isAppear
	    ? (beforeAppear || beforeEnter)
	    : beforeEnter;
	  var enterHook = isAppear
	    ? (typeof appear === 'function' ? appear : enter)
	    : enter;
	  var afterEnterHook = isAppear
	    ? (afterAppear || afterEnter)
	    : afterEnter;
	  var enterCancelledHook = isAppear
	    ? (appearCancelled || enterCancelled)
	    : enterCancelled;
	
	  var explicitEnterDuration = toNumber(
	    isObject(duration)
	      ? duration.enter
	      : duration
	  );
	
	  if ("development" !== 'production' && explicitEnterDuration != null) {
	    checkDuration(explicitEnterDuration, 'enter', vnode);
	  }
	
	  var expectsCSS = css !== false && !isIE9;
	  var userWantsControl = getHookArgumentsLength(enterHook);
	
	  var cb = el._enterCb = once(function () {
	    if (expectsCSS) {
	      removeTransitionClass(el, toClass);
	      removeTransitionClass(el, activeClass);
	    }
	    if (cb.cancelled) {
	      if (expectsCSS) {
	        removeTransitionClass(el, startClass);
	      }
	      enterCancelledHook && enterCancelledHook(el);
	    } else {
	      afterEnterHook && afterEnterHook(el);
	    }
	    el._enterCb = null;
	  });
	
	  if (!vnode.data.show) {
	    // remove pending leave element on enter by injecting an insert hook
	    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
	      var parent = el.parentNode;
	      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
	      if (pendingNode &&
	        pendingNode.tag === vnode.tag &&
	        pendingNode.elm._leaveCb
	      ) {
	        pendingNode.elm._leaveCb();
	      }
	      enterHook && enterHook(el, cb);
	    });
	  }
	
	  // start enter transition
	  beforeEnterHook && beforeEnterHook(el);
	  if (expectsCSS) {
	    addTransitionClass(el, startClass);
	    addTransitionClass(el, activeClass);
	    nextFrame(function () {
	      addTransitionClass(el, toClass);
	      removeTransitionClass(el, startClass);
	      if (!cb.cancelled && !userWantsControl) {
	        if (isValidDuration(explicitEnterDuration)) {
	          setTimeout(cb, explicitEnterDuration);
	        } else {
	          whenTransitionEnds(el, type, cb);
	        }
	      }
	    });
	  }
	
	  if (vnode.data.show) {
	    toggleDisplay && toggleDisplay();
	    enterHook && enterHook(el, cb);
	  }
	
	  if (!expectsCSS && !userWantsControl) {
	    cb();
	  }
	}
	
	function leave (vnode, rm) {
	  var el = vnode.elm;
	
	  // call enter callback now
	  if (isDef(el._enterCb)) {
	    el._enterCb.cancelled = true;
	    el._enterCb();
	  }
	
	  var data = resolveTransition(vnode.data.transition);
	  if (isUndef(data)) {
	    return rm()
	  }
	
	  /* istanbul ignore if */
	  if (isDef(el._leaveCb) || el.nodeType !== 1) {
	    return
	  }
	
	  var css = data.css;
	  var type = data.type;
	  var leaveClass = data.leaveClass;
	  var leaveToClass = data.leaveToClass;
	  var leaveActiveClass = data.leaveActiveClass;
	  var beforeLeave = data.beforeLeave;
	  var leave = data.leave;
	  var afterLeave = data.afterLeave;
	  var leaveCancelled = data.leaveCancelled;
	  var delayLeave = data.delayLeave;
	  var duration = data.duration;
	
	  var expectsCSS = css !== false && !isIE9;
	  var userWantsControl = getHookArgumentsLength(leave);
	
	  var explicitLeaveDuration = toNumber(
	    isObject(duration)
	      ? duration.leave
	      : duration
	  );
	
	  if ("development" !== 'production' && isDef(explicitLeaveDuration)) {
	    checkDuration(explicitLeaveDuration, 'leave', vnode);
	  }
	
	  var cb = el._leaveCb = once(function () {
	    if (el.parentNode && el.parentNode._pending) {
	      el.parentNode._pending[vnode.key] = null;
	    }
	    if (expectsCSS) {
	      removeTransitionClass(el, leaveToClass);
	      removeTransitionClass(el, leaveActiveClass);
	    }
	    if (cb.cancelled) {
	      if (expectsCSS) {
	        removeTransitionClass(el, leaveClass);
	      }
	      leaveCancelled && leaveCancelled(el);
	    } else {
	      rm();
	      afterLeave && afterLeave(el);
	    }
	    el._leaveCb = null;
	  });
	
	  if (delayLeave) {
	    delayLeave(performLeave);
	  } else {
	    performLeave();
	  }
	
	  function performLeave () {
	    // the delayed leave may have already been cancelled
	    if (cb.cancelled) {
	      return
	    }
	    // record leaving element
	    if (!vnode.data.show) {
	      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
	    }
	    beforeLeave && beforeLeave(el);
	    if (expectsCSS) {
	      addTransitionClass(el, leaveClass);
	      addTransitionClass(el, leaveActiveClass);
	      nextFrame(function () {
	        addTransitionClass(el, leaveToClass);
	        removeTransitionClass(el, leaveClass);
	        if (!cb.cancelled && !userWantsControl) {
	          if (isValidDuration(explicitLeaveDuration)) {
	            setTimeout(cb, explicitLeaveDuration);
	          } else {
	            whenTransitionEnds(el, type, cb);
	          }
	        }
	      });
	    }
	    leave && leave(el, cb);
	    if (!expectsCSS && !userWantsControl) {
	      cb();
	    }
	  }
	}
	
	// only used in dev mode
	function checkDuration (val, name, vnode) {
	  if (typeof val !== 'number') {
	    warn(
	      "<transition> explicit " + name + " duration is not a valid number - " +
	      "got " + (JSON.stringify(val)) + ".",
	      vnode.context
	    );
	  } else if (isNaN(val)) {
	    warn(
	      "<transition> explicit " + name + " duration is NaN - " +
	      'the duration expression might be incorrect.',
	      vnode.context
	    );
	  }
	}
	
	function isValidDuration (val) {
	  return typeof val === 'number' && !isNaN(val)
	}
	
	/**
	 * Normalize a transition hook's argument length. The hook may be:
	 * - a merged hook (invoker) with the original in .fns
	 * - a wrapped component method (check ._length)
	 * - a plain function (.length)
	 */
	function getHookArgumentsLength (fn) {
	  if (isUndef(fn)) {
	    return false
	  }
	  var invokerFns = fn.fns;
	  if (isDef(invokerFns)) {
	    // invoker
	    return getHookArgumentsLength(
	      Array.isArray(invokerFns)
	        ? invokerFns[0]
	        : invokerFns
	    )
	  } else {
	    return (fn._length || fn.length) > 1
	  }
	}
	
	function _enter (_, vnode) {
	  if (vnode.data.show !== true) {
	    enter(vnode);
	  }
	}
	
	var transition = inBrowser ? {
	  create: _enter,
	  activate: _enter,
	  remove: function remove$$1 (vnode, rm) {
	    /* istanbul ignore else */
	    if (vnode.data.show !== true) {
	      leave(vnode, rm);
	    } else {
	      rm();
	    }
	  }
	} : {};
	
	var platformModules = [
	  attrs,
	  klass,
	  events,
	  domProps,
	  style,
	  transition
	];
	
	/*  */
	
	// the directive module should be applied last, after all
	// built-in modules have been applied.
	var modules = platformModules.concat(baseModules);
	
	var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });
	
	/**
	 * Not type checking this file because flow doesn't like attaching
	 * properties to Elements.
	 */
	
	/* istanbul ignore if */
	if (isIE9) {
	  // http://www.matts411.com/post/internet-explorer-9-oninput/
	  document.addEventListener('selectionchange', function () {
	    var el = document.activeElement;
	    if (el && el.vmodel) {
	      trigger(el, 'input');
	    }
	  });
	}
	
	var model$1 = {
	  inserted: function inserted (el, binding, vnode) {
	    if (vnode.tag === 'select') {
	      var cb = function () {
	        setSelected(el, binding, vnode.context);
	      };
	      cb();
	      /* istanbul ignore if */
	      if (isIE || isEdge) {
	        setTimeout(cb, 0);
	      }
	    } else if (vnode.tag === 'textarea' || el.type === 'text' || el.type === 'password') {
	      el._vModifiers = binding.modifiers;
	      if (!binding.modifiers.lazy) {
	        // Safari < 10.2 & UIWebView doesn't fire compositionend when
	        // switching focus before confirming composition choice
	        // this also fixes the issue where some browsers e.g. iOS Chrome
	        // fires "change" instead of "input" on autocomplete.
	        el.addEventListener('change', onCompositionEnd);
	        if (!isAndroid) {
	          el.addEventListener('compositionstart', onCompositionStart);
	          el.addEventListener('compositionend', onCompositionEnd);
	        }
	        /* istanbul ignore if */
	        if (isIE9) {
	          el.vmodel = true;
	        }
	      }
	    }
	  },
	  componentUpdated: function componentUpdated (el, binding, vnode) {
	    if (vnode.tag === 'select') {
	      setSelected(el, binding, vnode.context);
	      // in case the options rendered by v-for have changed,
	      // it's possible that the value is out-of-sync with the rendered options.
	      // detect such cases and filter out values that no longer has a matching
	      // option in the DOM.
	      var needReset = el.multiple
	        ? binding.value.some(function (v) { return hasNoMatchingOption(v, el.options); })
	        : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, el.options);
	      if (needReset) {
	        trigger(el, 'change');
	      }
	    }
	  }
	};
	
	function setSelected (el, binding, vm) {
	  var value = binding.value;
	  var isMultiple = el.multiple;
	  if (isMultiple && !Array.isArray(value)) {
	    "development" !== 'production' && warn(
	      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
	      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
	      vm
	    );
	    return
	  }
	  var selected, option;
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    option = el.options[i];
	    if (isMultiple) {
	      selected = looseIndexOf(value, getValue(option)) > -1;
	      if (option.selected !== selected) {
	        option.selected = selected;
	      }
	    } else {
	      if (looseEqual(getValue(option), value)) {
	        if (el.selectedIndex !== i) {
	          el.selectedIndex = i;
	        }
	        return
	      }
	    }
	  }
	  if (!isMultiple) {
	    el.selectedIndex = -1;
	  }
	}
	
	function hasNoMatchingOption (value, options) {
	  for (var i = 0, l = options.length; i < l; i++) {
	    if (looseEqual(getValue(options[i]), value)) {
	      return false
	    }
	  }
	  return true
	}
	
	function getValue (option) {
	  return '_value' in option
	    ? option._value
	    : option.value
	}
	
	function onCompositionStart (e) {
	  e.target.composing = true;
	}
	
	function onCompositionEnd (e) {
	  // prevent triggering an input event for no reason
	  if (!e.target.composing) { return }
	  e.target.composing = false;
	  trigger(e.target, 'input');
	}
	
	function trigger (el, type) {
	  var e = document.createEvent('HTMLEvents');
	  e.initEvent(type, true, true);
	  el.dispatchEvent(e);
	}
	
	/*  */
	
	// recursively search for possible transition defined inside the component root
	function locateNode (vnode) {
	  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
	    ? locateNode(vnode.componentInstance._vnode)
	    : vnode
	}
	
	var show = {
	  bind: function bind (el, ref, vnode) {
	    var value = ref.value;
	
	    vnode = locateNode(vnode);
	    var transition = vnode.data && vnode.data.transition;
	    var originalDisplay = el.__vOriginalDisplay =
	      el.style.display === 'none' ? '' : el.style.display;
	    if (value && transition && !isIE9) {
	      vnode.data.show = true;
	      enter(vnode, function () {
	        el.style.display = originalDisplay;
	      });
	    } else {
	      el.style.display = value ? originalDisplay : 'none';
	    }
	  },
	
	  update: function update (el, ref, vnode) {
	    var value = ref.value;
	    var oldValue = ref.oldValue;
	
	    /* istanbul ignore if */
	    if (value === oldValue) { return }
	    vnode = locateNode(vnode);
	    var transition = vnode.data && vnode.data.transition;
	    if (transition && !isIE9) {
	      vnode.data.show = true;
	      if (value) {
	        enter(vnode, function () {
	          el.style.display = el.__vOriginalDisplay;
	        });
	      } else {
	        leave(vnode, function () {
	          el.style.display = 'none';
	        });
	      }
	    } else {
	      el.style.display = value ? el.__vOriginalDisplay : 'none';
	    }
	  },
	
	  unbind: function unbind (
	    el,
	    binding,
	    vnode,
	    oldVnode,
	    isDestroy
	  ) {
	    if (!isDestroy) {
	      el.style.display = el.__vOriginalDisplay;
	    }
	  }
	};
	
	var platformDirectives = {
	  model: model$1,
	  show: show
	};
	
	/*  */
	
	// Provides transition support for a single element/component.
	// supports transition mode (out-in / in-out)
	
	var transitionProps = {
	  name: String,
	  appear: Boolean,
	  css: Boolean,
	  mode: String,
	  type: String,
	  enterClass: String,
	  leaveClass: String,
	  enterToClass: String,
	  leaveToClass: String,
	  enterActiveClass: String,
	  leaveActiveClass: String,
	  appearClass: String,
	  appearActiveClass: String,
	  appearToClass: String,
	  duration: [Number, String, Object]
	};
	
	// in case the child is also an abstract component, e.g. <keep-alive>
	// we want to recursively retrieve the real component to be rendered
	function getRealChild (vnode) {
	  var compOptions = vnode && vnode.componentOptions;
	  if (compOptions && compOptions.Ctor.options.abstract) {
	    return getRealChild(getFirstComponentChild(compOptions.children))
	  } else {
	    return vnode
	  }
	}
	
	function extractTransitionData (comp) {
	  var data = {};
	  var options = comp.$options;
	  // props
	  for (var key in options.propsData) {
	    data[key] = comp[key];
	  }
	  // events.
	  // extract listeners and pass them directly to the transition methods
	  var listeners = options._parentListeners;
	  for (var key$1 in listeners) {
	    data[camelize(key$1)] = listeners[key$1];
	  }
	  return data
	}
	
	function placeholder (h, rawChild) {
	  if (/\d-keep-alive$/.test(rawChild.tag)) {
	    return h('keep-alive', {
	      props: rawChild.componentOptions.propsData
	    })
	  }
	}
	
	function hasParentTransition (vnode) {
	  while ((vnode = vnode.parent)) {
	    if (vnode.data.transition) {
	      return true
	    }
	  }
	}
	
	function isSameChild (child, oldChild) {
	  return oldChild.key === child.key && oldChild.tag === child.tag
	}
	
	var Transition = {
	  name: 'transition',
	  props: transitionProps,
	  abstract: true,
	
	  render: function render (h) {
	    var this$1 = this;
	
	    var children = this.$slots.default;
	    if (!children) {
	      return
	    }
	
	    // filter out text nodes (possible whitespaces)
	    children = children.filter(function (c) { return c.tag; });
	    /* istanbul ignore if */
	    if (!children.length) {
	      return
	    }
	
	    // warn multiple elements
	    if ("development" !== 'production' && children.length > 1) {
	      warn(
	        '<transition> can only be used on a single element. Use ' +
	        '<transition-group> for lists.',
	        this.$parent
	      );
	    }
	
	    var mode = this.mode;
	
	    // warn invalid mode
	    if ("development" !== 'production' &&
	      mode && mode !== 'in-out' && mode !== 'out-in'
	    ) {
	      warn(
	        'invalid <transition> mode: ' + mode,
	        this.$parent
	      );
	    }
	
	    var rawChild = children[0];
	
	    // if this is a component root node and the component's
	    // parent container node also has transition, skip.
	    if (hasParentTransition(this.$vnode)) {
	      return rawChild
	    }
	
	    // apply transition data to child
	    // use getRealChild() to ignore abstract components e.g. keep-alive
	    var child = getRealChild(rawChild);
	    /* istanbul ignore if */
	    if (!child) {
	      return rawChild
	    }
	
	    if (this._leaving) {
	      return placeholder(h, rawChild)
	    }
	
	    // ensure a key that is unique to the vnode type and to this transition
	    // component instance. This key will be used to remove pending leaving nodes
	    // during entering.
	    var id = "__transition-" + (this._uid) + "-";
	    child.key = child.key == null
	      ? id + child.tag
	      : isPrimitive(child.key)
	        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
	        : child.key;
	
	    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
	    var oldRawChild = this._vnode;
	    var oldChild = getRealChild(oldRawChild);
	
	    // mark v-show
	    // so that the transition module can hand over the control to the directive
	    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
	      child.data.show = true;
	    }
	
	    if (oldChild && oldChild.data && !isSameChild(child, oldChild)) {
	      // replace old child transition data with fresh one
	      // important for dynamic transitions!
	      var oldData = oldChild && (oldChild.data.transition = extend({}, data));
	      // handle transition mode
	      if (mode === 'out-in') {
	        // return placeholder node and queue update when leave finishes
	        this._leaving = true;
	        mergeVNodeHook(oldData, 'afterLeave', function () {
	          this$1._leaving = false;
	          this$1.$forceUpdate();
	        });
	        return placeholder(h, rawChild)
	      } else if (mode === 'in-out') {
	        var delayedLeave;
	        var performLeave = function () { delayedLeave(); };
	        mergeVNodeHook(data, 'afterEnter', performLeave);
	        mergeVNodeHook(data, 'enterCancelled', performLeave);
	        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
	      }
	    }
	
	    return rawChild
	  }
	};
	
	/*  */
	
	// Provides transition support for list items.
	// supports move transitions using the FLIP technique.
	
	// Because the vdom's children update algorithm is "unstable" - i.e.
	// it doesn't guarantee the relative positioning of removed elements,
	// we force transition-group to update its children into two passes:
	// in the first pass, we remove all nodes that need to be removed,
	// triggering their leaving transition; in the second pass, we insert/move
	// into the final desired state. This way in the second pass removed
	// nodes will remain where they should be.
	
	var props = extend({
	  tag: String,
	  moveClass: String
	}, transitionProps);
	
	delete props.mode;
	
	var TransitionGroup = {
	  props: props,
	
	  render: function render (h) {
	    var tag = this.tag || this.$vnode.data.tag || 'span';
	    var map = Object.create(null);
	    var prevChildren = this.prevChildren = this.children;
	    var rawChildren = this.$slots.default || [];
	    var children = this.children = [];
	    var transitionData = extractTransitionData(this);
	
	    for (var i = 0; i < rawChildren.length; i++) {
	      var c = rawChildren[i];
	      if (c.tag) {
	        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
	          children.push(c);
	          map[c.key] = c
	          ;(c.data || (c.data = {})).transition = transitionData;
	        } else {
	          var opts = c.componentOptions;
	          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
	          warn(("<transition-group> children must be keyed: <" + name + ">"));
	        }
	      }
	    }
	
	    if (prevChildren) {
	      var kept = [];
	      var removed = [];
	      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
	        var c$1 = prevChildren[i$1];
	        c$1.data.transition = transitionData;
	        c$1.data.pos = c$1.elm.getBoundingClientRect();
	        if (map[c$1.key]) {
	          kept.push(c$1);
	        } else {
	          removed.push(c$1);
	        }
	      }
	      this.kept = h(tag, null, kept);
	      this.removed = removed;
	    }
	
	    return h(tag, null, children)
	  },
	
	  beforeUpdate: function beforeUpdate () {
	    // force removing pass
	    this.__patch__(
	      this._vnode,
	      this.kept,
	      false, // hydrating
	      true // removeOnly (!important, avoids unnecessary moves)
	    );
	    this._vnode = this.kept;
	  },
	
	  updated: function updated () {
	    var children = this.prevChildren;
	    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
	    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
	      return
	    }
	
	    // we divide the work into three loops to avoid mixing DOM reads and writes
	    // in each iteration - which helps prevent layout thrashing.
	    children.forEach(callPendingCbs);
	    children.forEach(recordPosition);
	    children.forEach(applyTranslation);
	
	    // force reflow to put everything in position
	    var body = document.body;
	    var f = body.offsetHeight; // eslint-disable-line
	
	    children.forEach(function (c) {
	      if (c.data.moved) {
	        var el = c.elm;
	        var s = el.style;
	        addTransitionClass(el, moveClass);
	        s.transform = s.WebkitTransform = s.transitionDuration = '';
	        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
	          if (!e || /transform$/.test(e.propertyName)) {
	            el.removeEventListener(transitionEndEvent, cb);
	            el._moveCb = null;
	            removeTransitionClass(el, moveClass);
	          }
	        });
	      }
	    });
	  },
	
	  methods: {
	    hasMove: function hasMove (el, moveClass) {
	      /* istanbul ignore if */
	      if (!hasTransition) {
	        return false
	      }
	      if (this._hasMove != null) {
	        return this._hasMove
	      }
	      // Detect whether an element with the move class applied has
	      // CSS transitions. Since the element may be inside an entering
	      // transition at this very moment, we make a clone of it and remove
	      // all other transition classes applied to ensure only the move class
	      // is applied.
	      var clone = el.cloneNode();
	      if (el._transitionClasses) {
	        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
	      }
	      addClass(clone, moveClass);
	      clone.style.display = 'none';
	      this.$el.appendChild(clone);
	      var info = getTransitionInfo(clone);
	      this.$el.removeChild(clone);
	      return (this._hasMove = info.hasTransform)
	    }
	  }
	};
	
	function callPendingCbs (c) {
	  /* istanbul ignore if */
	  if (c.elm._moveCb) {
	    c.elm._moveCb();
	  }
	  /* istanbul ignore if */
	  if (c.elm._enterCb) {
	    c.elm._enterCb();
	  }
	}
	
	function recordPosition (c) {
	  c.data.newPos = c.elm.getBoundingClientRect();
	}
	
	function applyTranslation (c) {
	  var oldPos = c.data.pos;
	  var newPos = c.data.newPos;
	  var dx = oldPos.left - newPos.left;
	  var dy = oldPos.top - newPos.top;
	  if (dx || dy) {
	    c.data.moved = true;
	    var s = c.elm.style;
	    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
	    s.transitionDuration = '0s';
	  }
	}
	
	var platformComponents = {
	  Transition: Transition,
	  TransitionGroup: TransitionGroup
	};
	
	/*  */
	
	// install platform specific utils
	Vue$3.config.mustUseProp = mustUseProp;
	Vue$3.config.isReservedTag = isReservedTag;
	Vue$3.config.isReservedAttr = isReservedAttr;
	Vue$3.config.getTagNamespace = getTagNamespace;
	Vue$3.config.isUnknownElement = isUnknownElement;
	
	// install platform runtime directives & components
	extend(Vue$3.options.directives, platformDirectives);
	extend(Vue$3.options.components, platformComponents);
	
	// install platform patch function
	Vue$3.prototype.__patch__ = inBrowser ? patch : noop;
	
	// public mount method
	Vue$3.prototype.$mount = function (
	  el,
	  hydrating
	) {
	  el = el && inBrowser ? query(el) : undefined;
	  return mountComponent(this, el, hydrating)
	};
	
	// devtools global hook
	/* istanbul ignore next */
	setTimeout(function () {
	  if (config.devtools) {
	    if (devtools) {
	      devtools.emit('init', Vue$3);
	    } else if ("development" !== 'production' && isChrome) {
	      console[console.info ? 'info' : 'log'](
	        'Download the Vue Devtools extension for a better development experience:\n' +
	        'https://github.com/vuejs/vue-devtools'
	      );
	    }
	  }
	  if ("development" !== 'production' &&
	    config.productionTip !== false &&
	    inBrowser && typeof console !== 'undefined'
	  ) {
	    console[console.info ? 'info' : 'log'](
	      "You are running Vue in development mode.\n" +
	      "Make sure to turn on production mode when deploying for production.\n" +
	      "See more tips at https://vuejs.org/guide/deployment.html"
	    );
	  }
	}, 0);
	
	/*  */
	
	// check whether current browser encodes a char inside attribute values
	function shouldDecode (content, encoded) {
	  var div = document.createElement('div');
	  div.innerHTML = "<div a=\"" + content + "\">";
	  return div.innerHTML.indexOf(encoded) > 0
	}
	
	// #3663
	// IE encodes newlines inside attribute values while other browsers don't
	var shouldDecodeNewlines = inBrowser ? shouldDecode('\n', '&#10;') : false;
	
	/*  */
	
	var isUnaryTag = makeMap(
	  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
	  'link,meta,param,source,track,wbr'
	);
	
	// Elements that you can, intentionally, leave open
	// (and which close themselves)
	var canBeLeftOpenTag = makeMap(
	  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
	);
	
	// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
	// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
	var isNonPhrasingTag = makeMap(
	  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
	  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
	  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
	  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
	  'title,tr,track'
	);
	
	/*  */
	
	var decoder;
	
	function decode (html) {
	  decoder = decoder || document.createElement('div');
	  decoder.innerHTML = html;
	  return decoder.textContent
	}
	
	/**
	 * Not type-checking this file because it's mostly vendor code.
	 */
	
	/*!
	 * HTML Parser By John Resig (ejohn.org)
	 * Modified by Juriy "kangax" Zaytsev
	 * Original code by Erik Arvidsson, Mozilla Public License
	 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
	 */
	
	// Regular Expressions for parsing tags and attributes
	var singleAttrIdentifier = /([^\s"'<>/=]+)/;
	var singleAttrAssign = /(?:=)/;
	var singleAttrValues = [
	  // attr value double quotes
	  /"([^"]*)"+/.source,
	  // attr value, single quotes
	  /'([^']*)'+/.source,
	  // attr value, no quotes
	  /([^\s"'=<>`]+)/.source
	];
	var attribute = new RegExp(
	  '^\\s*' + singleAttrIdentifier.source +
	  '(?:\\s*(' + singleAttrAssign.source + ')' +
	  '\\s*(?:' + singleAttrValues.join('|') + '))?'
	);
	
	// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
	// but for Vue templates we can enforce a simple charset
	var ncname = '[a-zA-Z_][\\w\\-\\.]*';
	var qnameCapture = '((?:' + ncname + '\\:)?' + ncname + ')';
	var startTagOpen = new RegExp('^<' + qnameCapture);
	var startTagClose = /^\s*(\/?)>/;
	var endTag = new RegExp('^<\\/' + qnameCapture + '[^>]*>');
	var doctype = /^<!DOCTYPE [^>]+>/i;
	var comment = /^<!--/;
	var conditionalComment = /^<!\[/;
	
	var IS_REGEX_CAPTURING_BROKEN = false;
	'x'.replace(/x(.)?/g, function (m, g) {
	  IS_REGEX_CAPTURING_BROKEN = g === '';
	});
	
	// Special Elements (can contain anything)
	var isPlainTextElement = makeMap('script,style,textarea', true);
	var reCache = {};
	
	var decodingMap = {
	  '&lt;': '<',
	  '&gt;': '>',
	  '&quot;': '"',
	  '&amp;': '&',
	  '&#10;': '\n'
	};
	var encodedAttr = /&(?:lt|gt|quot|amp);/g;
	var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10);/g;
	
	function decodeAttr (value, shouldDecodeNewlines) {
	  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
	  return value.replace(re, function (match) { return decodingMap[match]; })
	}
	
	function parseHTML (html, options) {
	  var stack = [];
	  var expectHTML = options.expectHTML;
	  var isUnaryTag$$1 = options.isUnaryTag || no;
	  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
	  var index = 0;
	  var last, lastTag;
	  while (html) {
	    last = html;
	    // Make sure we're not in a plaintext content element like script/style
	    if (!lastTag || !isPlainTextElement(lastTag)) {
	      var textEnd = html.indexOf('<');
	      if (textEnd === 0) {
	        // Comment:
	        if (comment.test(html)) {
	          var commentEnd = html.indexOf('-->');
	
	          if (commentEnd >= 0) {
	            advance(commentEnd + 3);
	            continue
	          }
	        }
	
	        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
	        if (conditionalComment.test(html)) {
	          var conditionalEnd = html.indexOf(']>');
	
	          if (conditionalEnd >= 0) {
	            advance(conditionalEnd + 2);
	            continue
	          }
	        }
	
	        // Doctype:
	        var doctypeMatch = html.match(doctype);
	        if (doctypeMatch) {
	          advance(doctypeMatch[0].length);
	          continue
	        }
	
	        // End tag:
	        var endTagMatch = html.match(endTag);
	        if (endTagMatch) {
	          var curIndex = index;
	          advance(endTagMatch[0].length);
	          parseEndTag(endTagMatch[1], curIndex, index);
	          continue
	        }
	
	        // Start tag:
	        var startTagMatch = parseStartTag();
	        if (startTagMatch) {
	          handleStartTag(startTagMatch);
	          continue
	        }
	      }
	
	      var text = (void 0), rest$1 = (void 0), next = (void 0);
	      if (textEnd >= 0) {
	        rest$1 = html.slice(textEnd);
	        while (
	          !endTag.test(rest$1) &&
	          !startTagOpen.test(rest$1) &&
	          !comment.test(rest$1) &&
	          !conditionalComment.test(rest$1)
	        ) {
	          // < in plain text, be forgiving and treat it as text
	          next = rest$1.indexOf('<', 1);
	          if (next < 0) { break }
	          textEnd += next;
	          rest$1 = html.slice(textEnd);
	        }
	        text = html.substring(0, textEnd);
	        advance(textEnd);
	      }
	
	      if (textEnd < 0) {
	        text = html;
	        html = '';
	      }
	
	      if (options.chars && text) {
	        options.chars(text);
	      }
	    } else {
	      var stackedTag = lastTag.toLowerCase();
	      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
	      var endTagLength = 0;
	      var rest = html.replace(reStackedTag, function (all, text, endTag) {
	        endTagLength = endTag.length;
	        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
	          text = text
	            .replace(/<!--([\s\S]*?)-->/g, '$1')
	            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
	        }
	        if (options.chars) {
	          options.chars(text);
	        }
	        return ''
	      });
	      index += html.length - rest.length;
	      html = rest;
	      parseEndTag(stackedTag, index - endTagLength, index);
	    }
	
	    if (html === last) {
	      options.chars && options.chars(html);
	      if ("development" !== 'production' && !stack.length && options.warn) {
	        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""));
	      }
	      break
	    }
	  }
	
	  // Clean up any remaining tags
	  parseEndTag();
	
	  function advance (n) {
	    index += n;
	    html = html.substring(n);
	  }
	
	  function parseStartTag () {
	    var start = html.match(startTagOpen);
	    if (start) {
	      var match = {
	        tagName: start[1],
	        attrs: [],
	        start: index
	      };
	      advance(start[0].length);
	      var end, attr;
	      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
	        advance(attr[0].length);
	        match.attrs.push(attr);
	      }
	      if (end) {
	        match.unarySlash = end[1];
	        advance(end[0].length);
	        match.end = index;
	        return match
	      }
	    }
	  }
	
	  function handleStartTag (match) {
	    var tagName = match.tagName;
	    var unarySlash = match.unarySlash;
	
	    if (expectHTML) {
	      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
	        parseEndTag(lastTag);
	      }
	      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
	        parseEndTag(tagName);
	      }
	    }
	
	    var unary = isUnaryTag$$1(tagName) || tagName === 'html' && lastTag === 'head' || !!unarySlash;
	
	    var l = match.attrs.length;
	    var attrs = new Array(l);
	    for (var i = 0; i < l; i++) {
	      var args = match.attrs[i];
	      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
	      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
	        if (args[3] === '') { delete args[3]; }
	        if (args[4] === '') { delete args[4]; }
	        if (args[5] === '') { delete args[5]; }
	      }
	      var value = args[3] || args[4] || args[5] || '';
	      attrs[i] = {
	        name: args[1],
	        value: decodeAttr(
	          value,
	          options.shouldDecodeNewlines
	        )
	      };
	    }
	
	    if (!unary) {
	      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
	      lastTag = tagName;
	    }
	
	    if (options.start) {
	      options.start(tagName, attrs, unary, match.start, match.end);
	    }
	  }
	
	  function parseEndTag (tagName, start, end) {
	    var pos, lowerCasedTagName;
	    if (start == null) { start = index; }
	    if (end == null) { end = index; }
	
	    if (tagName) {
	      lowerCasedTagName = tagName.toLowerCase();
	    }
	
	    // Find the closest opened tag of the same type
	    if (tagName) {
	      for (pos = stack.length - 1; pos >= 0; pos--) {
	        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
	          break
	        }
	      }
	    } else {
	      // If no tag name is provided, clean shop
	      pos = 0;
	    }
	
	    if (pos >= 0) {
	      // Close all the open elements, up the stack
	      for (var i = stack.length - 1; i >= pos; i--) {
	        if ("development" !== 'production' &&
	          (i > pos || !tagName) &&
	          options.warn
	        ) {
	          options.warn(
	            ("tag <" + (stack[i].tag) + "> has no matching end tag.")
	          );
	        }
	        if (options.end) {
	          options.end(stack[i].tag, start, end);
	        }
	      }
	
	      // Remove the open elements from the stack
	      stack.length = pos;
	      lastTag = pos && stack[pos - 1].tag;
	    } else if (lowerCasedTagName === 'br') {
	      if (options.start) {
	        options.start(tagName, [], true, start, end);
	      }
	    } else if (lowerCasedTagName === 'p') {
	      if (options.start) {
	        options.start(tagName, [], false, start, end);
	      }
	      if (options.end) {
	        options.end(tagName, start, end);
	      }
	    }
	  }
	}
	
	/*  */
	
	var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
	var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	
	var buildRegex = cached(function (delimiters) {
	  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
	  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
	  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
	});
	
	function parseText (
	  text,
	  delimiters
	) {
	  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
	  if (!tagRE.test(text)) {
	    return
	  }
	  var tokens = [];
	  var lastIndex = tagRE.lastIndex = 0;
	  var match, index;
	  while ((match = tagRE.exec(text))) {
	    index = match.index;
	    // push text token
	    if (index > lastIndex) {
	      tokens.push(JSON.stringify(text.slice(lastIndex, index)));
	    }
	    // tag token
	    var exp = parseFilters(match[1].trim());
	    tokens.push(("_s(" + exp + ")"));
	    lastIndex = index + match[0].length;
	  }
	  if (lastIndex < text.length) {
	    tokens.push(JSON.stringify(text.slice(lastIndex)));
	  }
	  return tokens.join('+')
	}
	
	/*  */
	
	var onRE = /^@|^v-on:/;
	var dirRE = /^v-|^@|^:/;
	var forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/;
	var forIteratorRE = /\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/;
	
	var argRE = /:(.*)$/;
	var bindRE = /^:|^v-bind:/;
	var modifierRE = /\.[^.]+/g;
	
	var decodeHTMLCached = cached(decode);
	
	// configurable state
	var warn$2;
	var delimiters;
	var transforms;
	var preTransforms;
	var postTransforms;
	var platformIsPreTag;
	var platformMustUseProp;
	var platformGetTagNamespace;
	
	/**
	 * Convert HTML string to AST.
	 */
	function parse (
	  template,
	  options
	) {
	  warn$2 = options.warn || baseWarn;
	  platformGetTagNamespace = options.getTagNamespace || no;
	  platformMustUseProp = options.mustUseProp || no;
	  platformIsPreTag = options.isPreTag || no;
	  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
	  transforms = pluckModuleFunction(options.modules, 'transformNode');
	  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');
	  delimiters = options.delimiters;
	
	  var stack = [];
	  var preserveWhitespace = options.preserveWhitespace !== false;
	  var root;
	  var currentParent;
	  var inVPre = false;
	  var inPre = false;
	  var warned = false;
	
	  function warnOnce (msg) {
	    if (!warned) {
	      warned = true;
	      warn$2(msg);
	    }
	  }
	
	  function endPre (element) {
	    // check pre state
	    if (element.pre) {
	      inVPre = false;
	    }
	    if (platformIsPreTag(element.tag)) {
	      inPre = false;
	    }
	  }
	
	  parseHTML(template, {
	    warn: warn$2,
	    expectHTML: options.expectHTML,
	    isUnaryTag: options.isUnaryTag,
	    canBeLeftOpenTag: options.canBeLeftOpenTag,
	    shouldDecodeNewlines: options.shouldDecodeNewlines,
	    start: function start (tag, attrs, unary) {
	      // check namespace.
	      // inherit parent ns if there is one
	      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);
	
	      // handle IE svg bug
	      /* istanbul ignore if */
	      if (isIE && ns === 'svg') {
	        attrs = guardIESVGBug(attrs);
	      }
	
	      var element = {
	        type: 1,
	        tag: tag,
	        attrsList: attrs,
	        attrsMap: makeAttrsMap(attrs),
	        parent: currentParent,
	        children: []
	      };
	      if (ns) {
	        element.ns = ns;
	      }
	
	      if (isForbiddenTag(element) && !isServerRendering()) {
	        element.forbidden = true;
	        "development" !== 'production' && warn$2(
	          'Templates should only be responsible for mapping the state to the ' +
	          'UI. Avoid placing tags with side-effects in your templates, such as ' +
	          "<" + tag + ">" + ', as they will not be parsed.'
	        );
	      }
	
	      // apply pre-transforms
	      for (var i = 0; i < preTransforms.length; i++) {
	        preTransforms[i](element, options);
	      }
	
	      if (!inVPre) {
	        processPre(element);
	        if (element.pre) {
	          inVPre = true;
	        }
	      }
	      if (platformIsPreTag(element.tag)) {
	        inPre = true;
	      }
	      if (inVPre) {
	        processRawAttrs(element);
	      } else {
	        processFor(element);
	        processIf(element);
	        processOnce(element);
	        processKey(element);
	
	        // determine whether this is a plain element after
	        // removing structural attributes
	        element.plain = !element.key && !attrs.length;
	
	        processRef(element);
	        processSlot(element);
	        processComponent(element);
	        for (var i$1 = 0; i$1 < transforms.length; i$1++) {
	          transforms[i$1](element, options);
	        }
	        processAttrs(element);
	      }
	
	      function checkRootConstraints (el) {
	        {
	          if (el.tag === 'slot' || el.tag === 'template') {
	            warnOnce(
	              "Cannot use <" + (el.tag) + "> as component root element because it may " +
	              'contain multiple nodes.'
	            );
	          }
	          if (el.attrsMap.hasOwnProperty('v-for')) {
	            warnOnce(
	              'Cannot use v-for on stateful component root element because ' +
	              'it renders multiple elements.'
	            );
	          }
	        }
	      }
	
	      // tree management
	      if (!root) {
	        root = element;
	        checkRootConstraints(root);
	      } else if (!stack.length) {
	        // allow root elements with v-if, v-else-if and v-else
	        if (root.if && (element.elseif || element.else)) {
	          checkRootConstraints(element);
	          addIfCondition(root, {
	            exp: element.elseif,
	            block: element
	          });
	        } else {
	          warnOnce(
	            "Component template should contain exactly one root element. " +
	            "If you are using v-if on multiple elements, " +
	            "use v-else-if to chain them instead."
	          );
	        }
	      }
	      if (currentParent && !element.forbidden) {
	        if (element.elseif || element.else) {
	          processIfConditions(element, currentParent);
	        } else if (element.slotScope) { // scoped slot
	          currentParent.plain = false;
	          var name = element.slotTarget || '"default"';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
	        } else {
	          currentParent.children.push(element);
	          element.parent = currentParent;
	        }
	      }
	      if (!unary) {
	        currentParent = element;
	        stack.push(element);
	      } else {
	        endPre(element);
	      }
	      // apply post-transforms
	      for (var i$2 = 0; i$2 < postTransforms.length; i$2++) {
	        postTransforms[i$2](element, options);
	      }
	    },
	
	    end: function end () {
	      // remove trailing whitespace
	      var element = stack[stack.length - 1];
	      var lastNode = element.children[element.children.length - 1];
	      if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
	        element.children.pop();
	      }
	      // pop stack
	      stack.length -= 1;
	      currentParent = stack[stack.length - 1];
	      endPre(element);
	    },
	
	    chars: function chars (text) {
	      if (!currentParent) {
	        {
	          if (text === template) {
	            warnOnce(
	              'Component template requires a root element, rather than just text.'
	            );
	          } else if ((text = text.trim())) {
	            warnOnce(
	              ("text \"" + text + "\" outside root element will be ignored.")
	            );
	          }
	        }
	        return
	      }
	      // IE textarea placeholder bug
	      /* istanbul ignore if */
	      if (isIE &&
	        currentParent.tag === 'textarea' &&
	        currentParent.attrsMap.placeholder === text
	      ) {
	        return
	      }
	      var children = currentParent.children;
	      text = inPre || text.trim()
	        ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
	        // only preserve whitespace if its not right after a starting tag
	        : preserveWhitespace && children.length ? ' ' : '';
	      if (text) {
	        var expression;
	        if (!inVPre && text !== ' ' && (expression = parseText(text, delimiters))) {
	          children.push({
	            type: 2,
	            expression: expression,
	            text: text
	          });
	        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
	          children.push({
	            type: 3,
	            text: text
	          });
	        }
	      }
	    }
	  });
	  return root
	}
	
	function processPre (el) {
	  if (getAndRemoveAttr(el, 'v-pre') != null) {
	    el.pre = true;
	  }
	}
	
	function processRawAttrs (el) {
	  var l = el.attrsList.length;
	  if (l) {
	    var attrs = el.attrs = new Array(l);
	    for (var i = 0; i < l; i++) {
	      attrs[i] = {
	        name: el.attrsList[i].name,
	        value: JSON.stringify(el.attrsList[i].value)
	      };
	    }
	  } else if (!el.pre) {
	    // non root node in pre blocks with no attributes
	    el.plain = true;
	  }
	}
	
	function processKey (el) {
	  var exp = getBindingAttr(el, 'key');
	  if (exp) {
	    if ("development" !== 'production' && el.tag === 'template') {
	      warn$2("<template> cannot be keyed. Place the key on real elements instead.");
	    }
	    el.key = exp;
	  }
	}
	
	function processRef (el) {
	  var ref = getBindingAttr(el, 'ref');
	  if (ref) {
	    el.ref = ref;
	    el.refInFor = checkInFor(el);
	  }
	}
	
	function processFor (el) {
	  var exp;
	  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
	    var inMatch = exp.match(forAliasRE);
	    if (!inMatch) {
	      "development" !== 'production' && warn$2(
	        ("Invalid v-for expression: " + exp)
	      );
	      return
	    }
	    el.for = inMatch[2].trim();
	    var alias = inMatch[1].trim();
	    var iteratorMatch = alias.match(forIteratorRE);
	    if (iteratorMatch) {
	      el.alias = iteratorMatch[1].trim();
	      el.iterator1 = iteratorMatch[2].trim();
	      if (iteratorMatch[3]) {
	        el.iterator2 = iteratorMatch[3].trim();
	      }
	    } else {
	      el.alias = alias;
	    }
	  }
	}
	
	function processIf (el) {
	  var exp = getAndRemoveAttr(el, 'v-if');
	  if (exp) {
	    el.if = exp;
	    addIfCondition(el, {
	      exp: exp,
	      block: el
	    });
	  } else {
	    if (getAndRemoveAttr(el, 'v-else') != null) {
	      el.else = true;
	    }
	    var elseif = getAndRemoveAttr(el, 'v-else-if');
	    if (elseif) {
	      el.elseif = elseif;
	    }
	  }
	}
	
	function processIfConditions (el, parent) {
	  var prev = findPrevElement(parent.children);
	  if (prev && prev.if) {
	    addIfCondition(prev, {
	      exp: el.elseif,
	      block: el
	    });
	  } else {
	    warn$2(
	      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
	      "used on element <" + (el.tag) + "> without corresponding v-if."
	    );
	  }
	}
	
	function findPrevElement (children) {
	  var i = children.length;
	  while (i--) {
	    if (children[i].type === 1) {
	      return children[i]
	    } else {
	      if ("development" !== 'production' && children[i].text !== ' ') {
	        warn$2(
	          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
	          "will be ignored."
	        );
	      }
	      children.pop();
	    }
	  }
	}
	
	function addIfCondition (el, condition) {
	  if (!el.ifConditions) {
	    el.ifConditions = [];
	  }
	  el.ifConditions.push(condition);
	}
	
	function processOnce (el) {
	  var once$$1 = getAndRemoveAttr(el, 'v-once');
	  if (once$$1 != null) {
	    el.once = true;
	  }
	}
	
	function processSlot (el) {
	  if (el.tag === 'slot') {
	    el.slotName = getBindingAttr(el, 'name');
	    if ("development" !== 'production' && el.key) {
	      warn$2(
	        "`key` does not work on <slot> because slots are abstract outlets " +
	        "and can possibly expand into multiple elements. " +
	        "Use the key on a wrapping element instead."
	      );
	    }
	  } else {
	    var slotTarget = getBindingAttr(el, 'slot');
	    if (slotTarget) {
	      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
	    }
	    if (el.tag === 'template') {
	      el.slotScope = getAndRemoveAttr(el, 'scope');
	    }
	  }
	}
	
	function processComponent (el) {
	  var binding;
	  if ((binding = getBindingAttr(el, 'is'))) {
	    el.component = binding;
	  }
	  if (getAndRemoveAttr(el, 'inline-template') != null) {
	    el.inlineTemplate = true;
	  }
	}
	
	function processAttrs (el) {
	  var list = el.attrsList;
	  var i, l, name, rawName, value, modifiers, isProp;
	  for (i = 0, l = list.length; i < l; i++) {
	    name = rawName = list[i].name;
	    value = list[i].value;
	    if (dirRE.test(name)) {
	      // mark element as dynamic
	      el.hasBindings = true;
	      // modifiers
	      modifiers = parseModifiers(name);
	      if (modifiers) {
	        name = name.replace(modifierRE, '');
	      }
	      if (bindRE.test(name)) { // v-bind
	        name = name.replace(bindRE, '');
	        value = parseFilters(value);
	        isProp = false;
	        if (modifiers) {
	          if (modifiers.prop) {
	            isProp = true;
	            name = camelize(name);
	            if (name === 'innerHtml') { name = 'innerHTML'; }
	          }
	          if (modifiers.camel) {
	            name = camelize(name);
	          }
	          if (modifiers.sync) {
	            addHandler(
	              el,
	              ("update:" + (camelize(name))),
	              genAssignmentCode(value, "$event")
	            );
	          }
	        }
	        if (isProp || platformMustUseProp(el.tag, el.attrsMap.type, name)) {
	          addProp(el, name, value);
	        } else {
	          addAttr(el, name, value);
	        }
	      } else if (onRE.test(name)) { // v-on
	        name = name.replace(onRE, '');
	        addHandler(el, name, value, modifiers, false, warn$2);
	      } else { // normal directives
	        name = name.replace(dirRE, '');
	        // parse arg
	        var argMatch = name.match(argRE);
	        var arg = argMatch && argMatch[1];
	        if (arg) {
	          name = name.slice(0, -(arg.length + 1));
	        }
	        addDirective(el, name, rawName, value, arg, modifiers);
	        if ("development" !== 'production' && name === 'model') {
	          checkForAliasModel(el, value);
	        }
	      }
	    } else {
	      // literal attribute
	      {
	        var expression = parseText(value, delimiters);
	        if (expression) {
	          warn$2(
	            name + "=\"" + value + "\": " +
	            'Interpolation inside attributes has been removed. ' +
	            'Use v-bind or the colon shorthand instead. For example, ' +
	            'instead of <div id="{{ val }}">, use <div :id="val">.'
	          );
	        }
	      }
	      addAttr(el, name, JSON.stringify(value));
	    }
	  }
	}
	
	function checkInFor (el) {
	  var parent = el;
	  while (parent) {
	    if (parent.for !== undefined) {
	      return true
	    }
	    parent = parent.parent;
	  }
	  return false
	}
	
	function parseModifiers (name) {
	  var match = name.match(modifierRE);
	  if (match) {
	    var ret = {};
	    match.forEach(function (m) { ret[m.slice(1)] = true; });
	    return ret
	  }
	}
	
	function makeAttrsMap (attrs) {
	  var map = {};
	  for (var i = 0, l = attrs.length; i < l; i++) {
	    if (
	      "development" !== 'production' &&
	      map[attrs[i].name] && !isIE && !isEdge
	    ) {
	      warn$2('duplicate attribute: ' + attrs[i].name);
	    }
	    map[attrs[i].name] = attrs[i].value;
	  }
	  return map
	}
	
	// for script (e.g. type="x/template") or style, do not decode content
	function isTextTag (el) {
	  return el.tag === 'script' || el.tag === 'style'
	}
	
	function isForbiddenTag (el) {
	  return (
	    el.tag === 'style' ||
	    (el.tag === 'script' && (
	      !el.attrsMap.type ||
	      el.attrsMap.type === 'text/javascript'
	    ))
	  )
	}
	
	var ieNSBug = /^xmlns:NS\d+/;
	var ieNSPrefix = /^NS\d+:/;
	
	/* istanbul ignore next */
	function guardIESVGBug (attrs) {
	  var res = [];
	  for (var i = 0; i < attrs.length; i++) {
	    var attr = attrs[i];
	    if (!ieNSBug.test(attr.name)) {
	      attr.name = attr.name.replace(ieNSPrefix, '');
	      res.push(attr);
	    }
	  }
	  return res
	}
	
	function checkForAliasModel (el, value) {
	  var _el = el;
	  while (_el) {
	    if (_el.for && _el.alias === value) {
	      warn$2(
	        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
	        "You are binding v-model directly to a v-for iteration alias. " +
	        "This will not be able to modify the v-for source array because " +
	        "writing to the alias is like modifying a function local variable. " +
	        "Consider using an array of objects and use v-model on an object property instead."
	      );
	    }
	    _el = _el.parent;
	  }
	}
	
	/*  */
	
	var isStaticKey;
	var isPlatformReservedTag;
	
	var genStaticKeysCached = cached(genStaticKeys$1);
	
	/**
	 * Goal of the optimizer: walk the generated template AST tree
	 * and detect sub-trees that are purely static, i.e. parts of
	 * the DOM that never needs to change.
	 *
	 * Once we detect these sub-trees, we can:
	 *
	 * 1. Hoist them into constants, so that we no longer need to
	 *    create fresh nodes for them on each re-render;
	 * 2. Completely skip them in the patching process.
	 */
	function optimize (root, options) {
	  if (!root) { return }
	  isStaticKey = genStaticKeysCached(options.staticKeys || '');
	  isPlatformReservedTag = options.isReservedTag || no;
	  // first pass: mark all non-static nodes.
	  markStatic$1(root);
	  // second pass: mark static roots.
	  markStaticRoots(root, false);
	}
	
	function genStaticKeys$1 (keys) {
	  return makeMap(
	    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
	    (keys ? ',' + keys : '')
	  )
	}
	
	function markStatic$1 (node) {
	  node.static = isStatic(node);
	  if (node.type === 1) {
	    // do not make component slot content static. this avoids
	    // 1. components not able to mutate slot nodes
	    // 2. static slot content fails for hot-reloading
	    if (
	      !isPlatformReservedTag(node.tag) &&
	      node.tag !== 'slot' &&
	      node.attrsMap['inline-template'] == null
	    ) {
	      return
	    }
	    for (var i = 0, l = node.children.length; i < l; i++) {
	      var child = node.children[i];
	      markStatic$1(child);
	      if (!child.static) {
	        node.static = false;
	      }
	    }
	  }
	}
	
	function markStaticRoots (node, isInFor) {
	  if (node.type === 1) {
	    if (node.static || node.once) {
	      node.staticInFor = isInFor;
	    }
	    // For a node to qualify as a static root, it should have children that
	    // are not just static text. Otherwise the cost of hoisting out will
	    // outweigh the benefits and it's better off to just always render it fresh.
	    if (node.static && node.children.length && !(
	      node.children.length === 1 &&
	      node.children[0].type === 3
	    )) {
	      node.staticRoot = true;
	      return
	    } else {
	      node.staticRoot = false;
	    }
	    if (node.children) {
	      for (var i = 0, l = node.children.length; i < l; i++) {
	        markStaticRoots(node.children[i], isInFor || !!node.for);
	      }
	    }
	    if (node.ifConditions) {
	      walkThroughConditionsBlocks(node.ifConditions, isInFor);
	    }
	  }
	}
	
	function walkThroughConditionsBlocks (conditionBlocks, isInFor) {
	  for (var i = 1, len = conditionBlocks.length; i < len; i++) {
	    markStaticRoots(conditionBlocks[i].block, isInFor);
	  }
	}
	
	function isStatic (node) {
	  if (node.type === 2) { // expression
	    return false
	  }
	  if (node.type === 3) { // text
	    return true
	  }
	  return !!(node.pre || (
	    !node.hasBindings && // no dynamic bindings
	    !node.if && !node.for && // not v-if or v-for or v-else
	    !isBuiltInTag(node.tag) && // not a built-in
	    isPlatformReservedTag(node.tag) && // not a component
	    !isDirectChildOfTemplateFor(node) &&
	    Object.keys(node).every(isStaticKey)
	  ))
	}
	
	function isDirectChildOfTemplateFor (node) {
	  while (node.parent) {
	    node = node.parent;
	    if (node.tag !== 'template') {
	      return false
	    }
	    if (node.for) {
	      return true
	    }
	  }
	  return false
	}
	
	/*  */
	
	var fnExpRE = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
	var simplePathRE = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/;
	
	// keyCode aliases
	var keyCodes = {
	  esc: 27,
	  tab: 9,
	  enter: 13,
	  space: 32,
	  up: 38,
	  left: 37,
	  right: 39,
	  down: 40,
	  'delete': [8, 46]
	};
	
	// #4868: modifiers that prevent the execution of the listener
	// need to explicitly return null so that we can determine whether to remove
	// the listener for .once
	var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };
	
	var modifierCode = {
	  stop: '$event.stopPropagation();',
	  prevent: '$event.preventDefault();',
	  self: genGuard("$event.target !== $event.currentTarget"),
	  ctrl: genGuard("!$event.ctrlKey"),
	  shift: genGuard("!$event.shiftKey"),
	  alt: genGuard("!$event.altKey"),
	  meta: genGuard("!$event.metaKey"),
	  left: genGuard("'button' in $event && $event.button !== 0"),
	  middle: genGuard("'button' in $event && $event.button !== 1"),
	  right: genGuard("'button' in $event && $event.button !== 2")
	};
	
	function genHandlers (
	  events,
	  isNative,
	  warn
	) {
	  var res = isNative ? 'nativeOn:{' : 'on:{';
	  for (var name in events) {
	    var handler = events[name];
	    // #5330: warn click.right, since right clicks do not actually fire click events.
	    if ("development" !== 'production' &&
	      name === 'click' &&
	      handler && handler.modifiers && handler.modifiers.right
	    ) {
	      warn(
	        "Use \"contextmenu\" instead of \"click.right\" since right clicks " +
	        "do not actually fire \"click\" events."
	      );
	    }
	    res += "\"" + name + "\":" + (genHandler(name, handler)) + ",";
	  }
	  return res.slice(0, -1) + '}'
	}
	
	function genHandler (
	  name,
	  handler
	) {
	  if (!handler) {
	    return 'function(){}'
	  }
	
	  if (Array.isArray(handler)) {
	    return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
	  }
	
	  var isMethodPath = simplePathRE.test(handler.value);
	  var isFunctionExpression = fnExpRE.test(handler.value);
	
	  if (!handler.modifiers) {
	    return isMethodPath || isFunctionExpression
	      ? handler.value
	      : ("function($event){" + (handler.value) + "}") // inline statement
	  } else {
	    var code = '';
	    var genModifierCode = '';
	    var keys = [];
	    for (var key in handler.modifiers) {
	      if (modifierCode[key]) {
	        genModifierCode += modifierCode[key];
	        // left/right
	        if (keyCodes[key]) {
	          keys.push(key);
	        }
	      } else {
	        keys.push(key);
	      }
	    }
	    if (keys.length) {
	      code += genKeyFilter(keys);
	    }
	    // Make sure modifiers like prevent and stop get executed after key filtering
	    if (genModifierCode) {
	      code += genModifierCode;
	    }
	    var handlerCode = isMethodPath
	      ? handler.value + '($event)'
	      : isFunctionExpression
	        ? ("(" + (handler.value) + ")($event)")
	        : handler.value;
	    return ("function($event){" + code + handlerCode + "}")
	  }
	}
	
	function genKeyFilter (keys) {
	  return ("if(!('button' in $event)&&" + (keys.map(genFilterCode).join('&&')) + ")return null;")
	}
	
	function genFilterCode (key) {
	  var keyVal = parseInt(key, 10);
	  if (keyVal) {
	    return ("$event.keyCode!==" + keyVal)
	  }
	  var alias = keyCodes[key];
	  return ("_k($event.keyCode," + (JSON.stringify(key)) + (alias ? ',' + JSON.stringify(alias) : '') + ")")
	}
	
	/*  */
	
	function bind$1 (el, dir) {
	  el.wrapData = function (code) {
	    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + (dir.modifiers && dir.modifiers.prop ? ',true' : '') + ")")
	  };
	}
	
	/*  */
	
	var baseDirectives = {
	  bind: bind$1,
	  cloak: noop
	};
	
	/*  */
	
	// configurable state
	var warn$3;
	var transforms$1;
	var dataGenFns;
	var platformDirectives$1;
	var isPlatformReservedTag$1;
	var staticRenderFns;
	var onceCount;
	var currentOptions;
	
	function generate (
	  ast,
	  options
	) {
	  // save previous staticRenderFns so generate calls can be nested
	  var prevStaticRenderFns = staticRenderFns;
	  var currentStaticRenderFns = staticRenderFns = [];
	  var prevOnceCount = onceCount;
	  onceCount = 0;
	  currentOptions = options;
	  warn$3 = options.warn || baseWarn;
	  transforms$1 = pluckModuleFunction(options.modules, 'transformCode');
	  dataGenFns = pluckModuleFunction(options.modules, 'genData');
	  platformDirectives$1 = options.directives || {};
	  isPlatformReservedTag$1 = options.isReservedTag || no;
	  var code = ast ? genElement(ast) : '_c("div")';
	  staticRenderFns = prevStaticRenderFns;
	  onceCount = prevOnceCount;
	  return {
	    render: ("with(this){return " + code + "}"),
	    staticRenderFns: currentStaticRenderFns
	  }
	}
	
	function genElement (el) {
	  if (el.staticRoot && !el.staticProcessed) {
	    return genStatic(el)
	  } else if (el.once && !el.onceProcessed) {
	    return genOnce(el)
	  } else if (el.for && !el.forProcessed) {
	    return genFor(el)
	  } else if (el.if && !el.ifProcessed) {
	    return genIf(el)
	  } else if (el.tag === 'template' && !el.slotTarget) {
	    return genChildren(el) || 'void 0'
	  } else if (el.tag === 'slot') {
	    return genSlot(el)
	  } else {
	    // component or element
	    var code;
	    if (el.component) {
	      code = genComponent(el.component, el);
	    } else {
	      var data = el.plain ? undefined : genData(el);
	
	      var children = el.inlineTemplate ? null : genChildren(el, true);
	      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
	    }
	    // module transforms
	    for (var i = 0; i < transforms$1.length; i++) {
	      code = transforms$1[i](el, code);
	    }
	    return code
	  }
	}
	
	// hoist static sub-trees out
	function genStatic (el) {
	  el.staticProcessed = true;
	  staticRenderFns.push(("with(this){return " + (genElement(el)) + "}"));
	  return ("_m(" + (staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
	}
	
	// v-once
	function genOnce (el) {
	  el.onceProcessed = true;
	  if (el.if && !el.ifProcessed) {
	    return genIf(el)
	  } else if (el.staticInFor) {
	    var key = '';
	    var parent = el.parent;
	    while (parent) {
	      if (parent.for) {
	        key = parent.key;
	        break
	      }
	      parent = parent.parent;
	    }
	    if (!key) {
	      "development" !== 'production' && warn$3(
	        "v-once can only be used inside v-for that is keyed. "
	      );
	      return genElement(el)
	    }
	    return ("_o(" + (genElement(el)) + "," + (onceCount++) + (key ? ("," + key) : "") + ")")
	  } else {
	    return genStatic(el)
	  }
	}
	
	function genIf (el) {
	  el.ifProcessed = true; // avoid recursion
	  return genIfConditions(el.ifConditions.slice())
	}
	
	function genIfConditions (conditions) {
	  if (!conditions.length) {
	    return '_e()'
	  }
	
	  var condition = conditions.shift();
	  if (condition.exp) {
	    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions)))
	  } else {
	    return ("" + (genTernaryExp(condition.block)))
	  }
	
	  // v-if with v-once should generate code like (a)?_m(0):_m(1)
	  function genTernaryExp (el) {
	    return el.once ? genOnce(el) : genElement(el)
	  }
	}
	
	function genFor (el) {
	  var exp = el.for;
	  var alias = el.alias;
	  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
	  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
	
	  if (
	    "development" !== 'production' &&
	    maybeComponent(el) && el.tag !== 'slot' && el.tag !== 'template' && !el.key
	  ) {
	    warn$3(
	      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
	      "v-for should have explicit keys. " +
	      "See https://vuejs.org/guide/list.html#key for more info.",
	      true /* tip */
	    );
	  }
	
	  el.forProcessed = true; // avoid recursion
	  return "_l((" + exp + ")," +
	    "function(" + alias + iterator1 + iterator2 + "){" +
	      "return " + (genElement(el)) +
	    '})'
	}
	
	function genData (el) {
	  var data = '{';
	
	  // directives first.
	  // directives may mutate the el's other properties before they are generated.
	  var dirs = genDirectives(el);
	  if (dirs) { data += dirs + ','; }
	
	  // key
	  if (el.key) {
	    data += "key:" + (el.key) + ",";
	  }
	  // ref
	  if (el.ref) {
	    data += "ref:" + (el.ref) + ",";
	  }
	  if (el.refInFor) {
	    data += "refInFor:true,";
	  }
	  // pre
	  if (el.pre) {
	    data += "pre:true,";
	  }
	  // record original tag name for components using "is" attribute
	  if (el.component) {
	    data += "tag:\"" + (el.tag) + "\",";
	  }
	  // module data generation functions
	  for (var i = 0; i < dataGenFns.length; i++) {
	    data += dataGenFns[i](el);
	  }
	  // attributes
	  if (el.attrs) {
	    data += "attrs:{" + (genProps(el.attrs)) + "},";
	  }
	  // DOM props
	  if (el.props) {
	    data += "domProps:{" + (genProps(el.props)) + "},";
	  }
	  // event handlers
	  if (el.events) {
	    data += (genHandlers(el.events, false, warn$3)) + ",";
	  }
	  if (el.nativeEvents) {
	    data += (genHandlers(el.nativeEvents, true, warn$3)) + ",";
	  }
	  // slot target
	  if (el.slotTarget) {
	    data += "slot:" + (el.slotTarget) + ",";
	  }
	  // scoped slots
	  if (el.scopedSlots) {
	    data += (genScopedSlots(el.scopedSlots)) + ",";
	  }
	  // component v-model
	  if (el.model) {
	    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
	  }
	  // inline-template
	  if (el.inlineTemplate) {
	    var inlineTemplate = genInlineTemplate(el);
	    if (inlineTemplate) {
	      data += inlineTemplate + ",";
	    }
	  }
	  data = data.replace(/,$/, '') + '}';
	  // v-bind data wrap
	  if (el.wrapData) {
	    data = el.wrapData(data);
	  }
	  return data
	}
	
	function genDirectives (el) {
	  var dirs = el.directives;
	  if (!dirs) { return }
	  var res = 'directives:[';
	  var hasRuntime = false;
	  var i, l, dir, needRuntime;
	  for (i = 0, l = dirs.length; i < l; i++) {
	    dir = dirs[i];
	    needRuntime = true;
	    var gen = platformDirectives$1[dir.name] || baseDirectives[dir.name];
	    if (gen) {
	      // compile-time directive that manipulates AST.
	      // returns true if it also needs a runtime counterpart.
	      needRuntime = !!gen(el, dir, warn$3);
	    }
	    if (needRuntime) {
	      hasRuntime = true;
	      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
	    }
	  }
	  if (hasRuntime) {
	    return res.slice(0, -1) + ']'
	  }
	}
	
	function genInlineTemplate (el) {
	  var ast = el.children[0];
	  if ("development" !== 'production' && (
	    el.children.length > 1 || ast.type !== 1
	  )) {
	    warn$3('Inline-template components must have exactly one child element.');
	  }
	  if (ast.type === 1) {
	    var inlineRenderFns = generate(ast, currentOptions);
	    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
	  }
	}
	
	function genScopedSlots (slots) {
	  return ("scopedSlots:_u([" + (Object.keys(slots).map(function (key) { return genScopedSlot(key, slots[key]); }).join(',')) + "])")
	}
	
	function genScopedSlot (key, el) {
	  if (el.for && !el.forProcessed) {
	    return genForScopedSlot(key, el)
	  }
	  return "{key:" + key + ",fn:function(" + (String(el.attrsMap.scope)) + "){" +
	    "return " + (el.tag === 'template'
	      ? genChildren(el) || 'void 0'
	      : genElement(el)) + "}}"
	}
	
	function genForScopedSlot (key, el) {
	  var exp = el.for;
	  var alias = el.alias;
	  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
	  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
	  el.forProcessed = true; // avoid recursion
	  return "_l((" + exp + ")," +
	    "function(" + alias + iterator1 + iterator2 + "){" +
	      "return " + (genScopedSlot(key, el)) +
	    '})'
	}
	
	function genChildren (el, checkSkip) {
	  var children = el.children;
	  if (children.length) {
	    var el$1 = children[0];
	    // optimize single v-for
	    if (children.length === 1 &&
	      el$1.for &&
	      el$1.tag !== 'template' &&
	      el$1.tag !== 'slot'
	    ) {
	      return genElement(el$1)
	    }
	    var normalizationType = checkSkip ? getNormalizationType(children) : 0;
	    return ("[" + (children.map(genNode).join(',')) + "]" + (normalizationType ? ("," + normalizationType) : ''))
	  }
	}
	
	// determine the normalization needed for the children array.
	// 0: no normalization needed
	// 1: simple normalization needed (possible 1-level deep nested array)
	// 2: full normalization needed
	function getNormalizationType (children) {
	  var res = 0;
	  for (var i = 0; i < children.length; i++) {
	    var el = children[i];
	    if (el.type !== 1) {
	      continue
	    }
	    if (needsNormalization(el) ||
	        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
	      res = 2;
	      break
	    }
	    if (maybeComponent(el) ||
	        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
	      res = 1;
	    }
	  }
	  return res
	}
	
	function needsNormalization (el) {
	  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
	}
	
	function maybeComponent (el) {
	  return !isPlatformReservedTag$1(el.tag)
	}
	
	function genNode (node) {
	  if (node.type === 1) {
	    return genElement(node)
	  } else {
	    return genText(node)
	  }
	}
	
	function genText (text) {
	  return ("_v(" + (text.type === 2
	    ? text.expression // no need for () because already wrapped in _s()
	    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
	}
	
	function genSlot (el) {
	  var slotName = el.slotName || '"default"';
	  var children = genChildren(el);
	  var res = "_t(" + slotName + (children ? ("," + children) : '');
	  var attrs = el.attrs && ("{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}");
	  var bind$$1 = el.attrsMap['v-bind'];
	  if ((attrs || bind$$1) && !children) {
	    res += ",null";
	  }
	  if (attrs) {
	    res += "," + attrs;
	  }
	  if (bind$$1) {
	    res += (attrs ? '' : ',null') + "," + bind$$1;
	  }
	  return res + ')'
	}
	
	// componentName is el.component, take it as argument to shun flow's pessimistic refinement
	function genComponent (componentName, el) {
	  var children = el.inlineTemplate ? null : genChildren(el, true);
	  return ("_c(" + componentName + "," + (genData(el)) + (children ? ("," + children) : '') + ")")
	}
	
	function genProps (props) {
	  var res = '';
	  for (var i = 0; i < props.length; i++) {
	    var prop = props[i];
	    res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
	  }
	  return res.slice(0, -1)
	}
	
	// #3895, #4268
	function transformSpecialNewlines (text) {
	  return text
	    .replace(/\u2028/g, '\\u2028')
	    .replace(/\u2029/g, '\\u2029')
	}
	
	/*  */
	
	// these keywords should not appear inside expressions, but operators like
	// typeof, instanceof and in are allowed
	var prohibitedKeywordRE = new RegExp('\\b' + (
	  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
	  'super,throw,while,yield,delete,export,import,return,switch,default,' +
	  'extends,finally,continue,debugger,function,arguments'
	).split(',').join('\\b|\\b') + '\\b');
	
	// these unary operators should not be used as property/method names
	var unaryOperatorsRE = new RegExp('\\b' + (
	  'delete,typeof,void'
	).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');
	
	// check valid identifier for v-for
	var identRE = /[A-Za-z_$][\w$]*/;
	
	// strip strings in expressions
	var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
	
	// detect problematic expressions in a template
	function detectErrors (ast) {
	  var errors = [];
	  if (ast) {
	    checkNode(ast, errors);
	  }
	  return errors
	}
	
	function checkNode (node, errors) {
	  if (node.type === 1) {
	    for (var name in node.attrsMap) {
	      if (dirRE.test(name)) {
	        var value = node.attrsMap[name];
	        if (value) {
	          if (name === 'v-for') {
	            checkFor(node, ("v-for=\"" + value + "\""), errors);
	          } else if (onRE.test(name)) {
	            checkEvent(value, (name + "=\"" + value + "\""), errors);
	          } else {
	            checkExpression(value, (name + "=\"" + value + "\""), errors);
	          }
	        }
	      }
	    }
	    if (node.children) {
	      for (var i = 0; i < node.children.length; i++) {
	        checkNode(node.children[i], errors);
	      }
	    }
	  } else if (node.type === 2) {
	    checkExpression(node.expression, node.text, errors);
	  }
	}
	
	function checkEvent (exp, text, errors) {
	  var stipped = exp.replace(stripStringRE, '');
	  var keywordMatch = stipped.match(unaryOperatorsRE);
	  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
	    errors.push(
	      "avoid using JavaScript unary operator as property name: " +
	      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
	    );
	  }
	  checkExpression(exp, text, errors);
	}
	
	function checkFor (node, text, errors) {
	  checkExpression(node.for || '', text, errors);
	  checkIdentifier(node.alias, 'v-for alias', text, errors);
	  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
	  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
	}
	
	function checkIdentifier (ident, type, text, errors) {
	  if (typeof ident === 'string' && !identRE.test(ident)) {
	    errors.push(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())));
	  }
	}
	
	function checkExpression (exp, text, errors) {
	  try {
	    new Function(("return " + exp));
	  } catch (e) {
	    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
	    if (keywordMatch) {
	      errors.push(
	        "avoid using JavaScript keyword as property name: " +
	        "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
	      );
	    } else {
	      errors.push(("invalid expression: " + (text.trim())));
	    }
	  }
	}
	
	/*  */
	
	function baseCompile (
	  template,
	  options
	) {
	  var ast = parse(template.trim(), options);
	  optimize(ast, options);
	  var code = generate(ast, options);
	  return {
	    ast: ast,
	    render: code.render,
	    staticRenderFns: code.staticRenderFns
	  }
	}
	
	function makeFunction (code, errors) {
	  try {
	    return new Function(code)
	  } catch (err) {
	    errors.push({ err: err, code: code });
	    return noop
	  }
	}
	
	function createCompiler (baseOptions) {
	  var functionCompileCache = Object.create(null);
	
	  function compile (
	    template,
	    options
	  ) {
	    var finalOptions = Object.create(baseOptions);
	    var errors = [];
	    var tips = [];
	    finalOptions.warn = function (msg, tip$$1) {
	      (tip$$1 ? tips : errors).push(msg);
	    };
	
	    if (options) {
	      // merge custom modules
	      if (options.modules) {
	        finalOptions.modules = (baseOptions.modules || []).concat(options.modules);
	      }
	      // merge custom directives
	      if (options.directives) {
	        finalOptions.directives = extend(
	          Object.create(baseOptions.directives),
	          options.directives
	        );
	      }
	      // copy other options
	      for (var key in options) {
	        if (key !== 'modules' && key !== 'directives') {
	          finalOptions[key] = options[key];
	        }
	      }
	    }
	
	    var compiled = baseCompile(template, finalOptions);
	    {
	      errors.push.apply(errors, detectErrors(compiled.ast));
	    }
	    compiled.errors = errors;
	    compiled.tips = tips;
	    return compiled
	  }
	
	  function compileToFunctions (
	    template,
	    options,
	    vm
	  ) {
	    options = options || {};
	
	    /* istanbul ignore if */
	    {
	      // detect possible CSP restriction
	      try {
	        new Function('return 1');
	      } catch (e) {
	        if (e.toString().match(/unsafe-eval|CSP/)) {
	          warn(
	            'It seems you are using the standalone build of Vue.js in an ' +
	            'environment with Content Security Policy that prohibits unsafe-eval. ' +
	            'The template compiler cannot work in this environment. Consider ' +
	            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
	            'templates into render functions.'
	          );
	        }
	      }
	    }
	
	    // check cache
	    var key = options.delimiters
	      ? String(options.delimiters) + template
	      : template;
	    if (functionCompileCache[key]) {
	      return functionCompileCache[key]
	    }
	
	    // compile
	    var compiled = compile(template, options);
	
	    // check compilation errors/tips
	    {
	      if (compiled.errors && compiled.errors.length) {
	        warn(
	          "Error compiling template:\n\n" + template + "\n\n" +
	          compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
	          vm
	        );
	      }
	      if (compiled.tips && compiled.tips.length) {
	        compiled.tips.forEach(function (msg) { return tip(msg, vm); });
	      }
	    }
	
	    // turn code into functions
	    var res = {};
	    var fnGenErrors = [];
	    res.render = makeFunction(compiled.render, fnGenErrors);
	    var l = compiled.staticRenderFns.length;
	    res.staticRenderFns = new Array(l);
	    for (var i = 0; i < l; i++) {
	      res.staticRenderFns[i] = makeFunction(compiled.staticRenderFns[i], fnGenErrors);
	    }
	
	    // check function generation errors.
	    // this should only happen if there is a bug in the compiler itself.
	    // mostly for codegen development use
	    /* istanbul ignore if */
	    {
	      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
	        warn(
	          "Failed to generate render function:\n\n" +
	          fnGenErrors.map(function (ref) {
	            var err = ref.err;
	            var code = ref.code;
	
	            return ((err.toString()) + " in\n\n" + code + "\n");
	        }).join('\n'),
	          vm
	        );
	      }
	    }
	
	    return (functionCompileCache[key] = res)
	  }
	
	  return {
	    compile: compile,
	    compileToFunctions: compileToFunctions
	  }
	}
	
	/*  */
	
	function transformNode (el, options) {
	  var warn = options.warn || baseWarn;
	  var staticClass = getAndRemoveAttr(el, 'class');
	  if ("development" !== 'production' && staticClass) {
	    var expression = parseText(staticClass, options.delimiters);
	    if (expression) {
	      warn(
	        "class=\"" + staticClass + "\": " +
	        'Interpolation inside attributes has been removed. ' +
	        'Use v-bind or the colon shorthand instead. For example, ' +
	        'instead of <div class="{{ val }}">, use <div :class="val">.'
	      );
	    }
	  }
	  if (staticClass) {
	    el.staticClass = JSON.stringify(staticClass);
	  }
	  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
	  if (classBinding) {
	    el.classBinding = classBinding;
	  }
	}
	
	function genData$1 (el) {
	  var data = '';
	  if (el.staticClass) {
	    data += "staticClass:" + (el.staticClass) + ",";
	  }
	  if (el.classBinding) {
	    data += "class:" + (el.classBinding) + ",";
	  }
	  return data
	}
	
	var klass$1 = {
	  staticKeys: ['staticClass'],
	  transformNode: transformNode,
	  genData: genData$1
	};
	
	/*  */
	
	function transformNode$1 (el, options) {
	  var warn = options.warn || baseWarn;
	  var staticStyle = getAndRemoveAttr(el, 'style');
	  if (staticStyle) {
	    /* istanbul ignore if */
	    {
	      var expression = parseText(staticStyle, options.delimiters);
	      if (expression) {
	        warn(
	          "style=\"" + staticStyle + "\": " +
	          'Interpolation inside attributes has been removed. ' +
	          'Use v-bind or the colon shorthand instead. For example, ' +
	          'instead of <div style="{{ val }}">, use <div :style="val">.'
	        );
	      }
	    }
	    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
	  }
	
	  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
	  if (styleBinding) {
	    el.styleBinding = styleBinding;
	  }
	}
	
	function genData$2 (el) {
	  var data = '';
	  if (el.staticStyle) {
	    data += "staticStyle:" + (el.staticStyle) + ",";
	  }
	  if (el.styleBinding) {
	    data += "style:(" + (el.styleBinding) + "),";
	  }
	  return data
	}
	
	var style$1 = {
	  staticKeys: ['staticStyle'],
	  transformNode: transformNode$1,
	  genData: genData$2
	};
	
	var modules$1 = [
	  klass$1,
	  style$1
	];
	
	/*  */
	
	function text (el, dir) {
	  if (dir.value) {
	    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
	  }
	}
	
	/*  */
	
	function html (el, dir) {
	  if (dir.value) {
	    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
	  }
	}
	
	var directives$1 = {
	  model: model,
	  text: text,
	  html: html
	};
	
	/*  */
	
	var baseOptions = {
	  expectHTML: true,
	  modules: modules$1,
	  directives: directives$1,
	  isPreTag: isPreTag,
	  isUnaryTag: isUnaryTag,
	  mustUseProp: mustUseProp,
	  canBeLeftOpenTag: canBeLeftOpenTag,
	  isReservedTag: isReservedTag,
	  getTagNamespace: getTagNamespace,
	  staticKeys: genStaticKeys(modules$1)
	};
	
	var ref$1 = createCompiler(baseOptions);
	var compileToFunctions = ref$1.compileToFunctions;
	
	/*  */
	
	var idToTemplate = cached(function (id) {
	  var el = query(id);
	  return el && el.innerHTML
	});
	
	var mount = Vue$3.prototype.$mount;
	Vue$3.prototype.$mount = function (
	  el,
	  hydrating
	) {
	  el = el && query(el);
	
	  /* istanbul ignore if */
	  if (el === document.body || el === document.documentElement) {
	    "development" !== 'production' && warn(
	      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
	    );
	    return this
	  }
	
	  var options = this.$options;
	  // resolve template/el and convert to render function
	  if (!options.render) {
	    var template = options.template;
	    if (template) {
	      if (typeof template === 'string') {
	        if (template.charAt(0) === '#') {
	          template = idToTemplate(template);
	          /* istanbul ignore if */
	          if ("development" !== 'production' && !template) {
	            warn(
	              ("Template element not found or is empty: " + (options.template)),
	              this
	            );
	          }
	        }
	      } else if (template.nodeType) {
	        template = template.innerHTML;
	      } else {
	        {
	          warn('invalid template option:' + template, this);
	        }
	        return this
	      }
	    } else if (el) {
	      template = getOuterHTML(el);
	    }
	    if (template) {
	      /* istanbul ignore if */
	      if ("development" !== 'production' && config.performance && mark) {
	        mark('compile');
	      }
	
	      var ref = compileToFunctions(template, {
	        shouldDecodeNewlines: shouldDecodeNewlines,
	        delimiters: options.delimiters
	      }, this);
	      var render = ref.render;
	      var staticRenderFns = ref.staticRenderFns;
	      options.render = render;
	      options.staticRenderFns = staticRenderFns;
	
	      /* istanbul ignore if */
	      if ("development" !== 'production' && config.performance && mark) {
	        mark('compile end');
	        measure(((this._name) + " compile"), 'compile', 'compile end');
	      }
	    }
	  }
	  return mount.call(this, el, hydrating)
	};
	
	/**
	 * Get outerHTML of elements, taking care
	 * of SVG elements in IE as well.
	 */
	function getOuterHTML (el) {
	  if (el.outerHTML) {
	    return el.outerHTML
	  } else {
	    var container = document.createElement('div');
	    container.appendChild(el.cloneNode(true));
	    return container.innerHTML
	  }
	}
	
	Vue$3.compile = compileToFunctions;
	
	return Vue$3;
	
	})));
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(42)
	__vue_script__ = __webpack_require__(44)
	__vue_template__ = __webpack_require__(45)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/nuanfeng/Github/duiba-design/src/components/Switch.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(43);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/.0.21.0@css-loader/index.js?sourceMap!../../node_modules/.8.0.0@vue-loader/lib/style-rewriter.js?id=_v-242f5388&file=Switch.vue!../../node_modules/.2.2.3@less-loader/index.js!../../node_modules/.8.0.0@vue-loader/lib/selector.js?type=style&index=0!../../node_modules/.1.7.1@eslint-loader/index.js!../../node_modules/.1.7.1@eslint-loader/index.js!./Switch.vue", function() {
				var newContent = require("!!../../node_modules/.0.21.0@css-loader/index.js?sourceMap!../../node_modules/.8.0.0@vue-loader/lib/style-rewriter.js?id=_v-242f5388&file=Switch.vue!../../node_modules/.2.2.3@less-loader/index.js!../../node_modules/.8.0.0@vue-loader/lib/selector.js?type=style&index=0!../../node_modules/.1.7.1@eslint-loader/index.js!../../node_modules/.1.7.1@eslint-loader/index.js!./Switch.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".d-switch {\n  position: relative;\n  width: 44px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.d-switch-label {\n  display: block;\n  overflow: hidden;\n  cursor: pointer;\n  border-radius: 11px;\n}\n.d-switch-inner {\n  width: 200%;\n  margin-left: -100%;\n  transition: margin 0.2s ease-in;\n}\n.d-switch-inner:before,\n.d-switch-inner:after {\n  float: left;\n  padding: 0;\n  width: 50%;\n  height: 22px;\n  line-height: 22px;\n  color: white;\n  box-sizing: border-box;\n}\n.d-switch-inner:before {\n  content: \"\\5F00\";\n  padding-left: 7px;\n  font-size: 12px;\n  color: #fff;\n  background-color: #444;\n}\n.d-switch-inner:after {\n  content: \"\\5173\";\n  padding-right: 7px;\n  color: #fff;\n  font-size: 12px;\n  background-color: #bbb;\n  text-align: right;\n}\n.d-switch-switch {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 22px;\n  width: 14px;\n  margin: 4px;\n  background: white;\n  border-radius: 11px;\n  transition: right 0.2s ease-in, box-shadow 0.2s ease-in;\n}\n.on .d-switch-inner {\n  margin-left: 0;\n}\n.on .d-switch-switch {\n  right: 0;\n}\n.disable .d-switch-inner:before,\n.disable .d-switch-inner:after {\n  cursor: not-allowed;\n  background-color: #eee;\n}\n", "", {"version":3,"sources":["/./src/components/Switch.vue"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,YAAY;EACZ,0BAAkB;KAAlB,uBAAkB;MAAlB,sBAAkB;UAAlB,kBAAkB;CACnB;AACD;EACE,eAAe;EACf,iBAAiB;EACjB,gBAAgB;EAChB,oBAAoB;CACrB;AACD;EACE,YAAY;EACZ,mBAAmB;EACnB,gCAAgC;CACjC;AACD;;EAEE,YAAY;EACZ,WAAW;EACX,WAAW;EACX,aAAa;EACb,kBAAkB;EAClB,aAAa;EACb,uBAAuB;CACxB;AACD;EACE,iBAAa;EACb,kBAAkB;EAClB,gBAAgB;EAChB,YAAY;EACZ,uBAAuB;CACxB;AACD;EACE,iBAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;EAChB,uBAAuB;EACvB,kBAAkB;CACnB;AACD;EACE,mBAAmB;EACnB,OAAO;EACP,UAAU;EACV,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,oBAAoB;EACpB,wDAAwD;CACzD;AACD;EACE,eAAe;CAChB;AACD;EACE,SAAS;CACV;AACD;;EAEE,oBAAoB;EACpB,uBAAuB;CACxB","file":"Switch.vue","sourcesContent":[".d-switch {\n  position: relative;\n  width: 44px;\n  user-select: none;\n}\n.d-switch-label {\n  display: block;\n  overflow: hidden;\n  cursor: pointer;\n  border-radius: 11px;\n}\n.d-switch-inner {\n  width: 200%;\n  margin-left: -100%;\n  transition: margin 0.2s ease-in;\n}\n.d-switch-inner:before,\n.d-switch-inner:after {\n  float: left;\n  padding: 0;\n  width: 50%;\n  height: 22px;\n  line-height: 22px;\n  color: white;\n  box-sizing: border-box;\n}\n.d-switch-inner:before {\n  content: \"开\";\n  padding-left: 7px;\n  font-size: 12px;\n  color: #fff;\n  background-color: #444;\n}\n.d-switch-inner:after {\n  content: \"关\";\n  padding-right: 7px;\n  color: #fff;\n  font-size: 12px;\n  background-color: #bbb;\n  text-align: right;\n}\n.d-switch-switch {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 22px;\n  width: 14px;\n  margin: 4px;\n  background: white;\n  border-radius: 11px;\n  transition: right 0.2s ease-in, box-shadow 0.2s ease-in;\n}\n.on .d-switch-inner {\n  margin-left: 0;\n}\n.on .d-switch-switch {\n  right: 0;\n}\n.disable .d-switch-inner:before,\n.disable .d-switch-inner:after {\n  cursor: not-allowed;\n  background-color: #eee;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 44 */
/***/ (function(module, exports) {

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
	      // if (this.onChange) {
	      //   this.onChange(!this.status, this.params);
	      //   return;
	      // }
	      if (!this.disabled) {
	        this.$emit('update:status', !this.status);
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

/***/ }),
/* 45 */
/***/ (function(module, exports) {

	module.exports = "\n<div class=\"d-switch\" v-bind:class=\"{\n  'on': status,\n  'disable': disabled,\n  'off': !status\n}\" @click=\"toggleSwitch\">\n  <label class=\"d-switch-label\">\n    <div class=\"d-switch-inner\"></div>\n    <div class=\"d-switch-switch\"></div>\n  </label>\n</div>\n";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(47)
	__vue_script__ = __webpack_require__(49)
	__vue_template__ = __webpack_require__(50)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/nuanfeng/Github/duiba-design/src/components/Pagination.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(48);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/.0.21.0@css-loader/index.js?sourceMap!../../node_modules/.8.0.0@vue-loader/lib/style-rewriter.js?id=_v-d98c1a24&file=Pagination.vue!../../node_modules/.2.2.3@less-loader/index.js!../../node_modules/.8.0.0@vue-loader/lib/selector.js?type=style&index=0!../../node_modules/.1.7.1@eslint-loader/index.js!../../node_modules/.1.7.1@eslint-loader/index.js!./Pagination.vue", function() {
				var newContent = require("!!../../node_modules/.0.21.0@css-loader/index.js?sourceMap!../../node_modules/.8.0.0@vue-loader/lib/style-rewriter.js?id=_v-d98c1a24&file=Pagination.vue!../../node_modules/.2.2.3@less-loader/index.js!../../node_modules/.8.0.0@vue-loader/lib/selector.js?type=style&index=0!../../node_modules/.1.7.1@eslint-loader/index.js!../../node_modules/.1.7.1@eslint-loader/index.js!./Pagination.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".pagination {\n  overflow: hidden;\n  background-color: #e8e7e2;\n  line-height: 28px;\n  padding: 8px 20px;\n}\n.total-count {\n  float: left;\n  font-size: 14px;\n}\n.pagination-list {\n  float: right;\n  margin: 2px 0 0;\n}\n.pagination-list .number,\n.pagination-list .point {\n  float: left;\n  padding: 0 6px;\n  min-width: 12px;\n  line-height: 22px;\n  text-align: center;\n  border: 1px solid #dfdfdf;\n  background-color: #fff;\n  color: #444;\n  font-size: 12px;\n  margin-right: 8px;\n  cursor: pointer;\n}\n.pagination-list .number.active,\n.pagination-list .point.active {\n  background-color: #444;\n  border-color: #444;\n  color: #fff;\n}\n.pagination-list .point {\n  background-color: transparent;\n  border: 0;\n  font-size: 14px;\n}\n.pagination-list .point span {\n  position: relative;\n  top: -3px;\n}\n", "", {"version":3,"sources":["/./src/components/Pagination.vue"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,0BAA0B;EAC1B,kBAAkB;EAClB,kBAAkB;CACnB;AACD;EACE,YAAY;EACZ,gBAAgB;CACjB;AACD;EACE,aAAa;EACb,gBAAgB;CACjB;AACD;;EAEE,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB;EACnB,0BAA0B;EAC1B,uBAAuB;EACvB,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;EAClB,gBAAgB;CACjB;AACD;;EAEE,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;CACb;AACD;EACE,8BAA8B;EAC9B,UAAU;EACV,gBAAgB;CACjB;AACD;EACE,mBAAmB;EACnB,UAAU;CACX","file":"Pagination.vue","sourcesContent":[".pagination {\n  overflow: hidden;\n  background-color: #e8e7e2;\n  line-height: 28px;\n  padding: 8px 20px;\n}\n.total-count {\n  float: left;\n  font-size: 14px;\n}\n.pagination-list {\n  float: right;\n  margin: 2px 0 0;\n}\n.pagination-list .number,\n.pagination-list .point {\n  float: left;\n  padding: 0 6px;\n  min-width: 12px;\n  line-height: 22px;\n  text-align: center;\n  border: 1px solid #dfdfdf;\n  background-color: #fff;\n  color: #444;\n  font-size: 12px;\n  margin-right: 8px;\n  cursor: pointer;\n}\n.pagination-list .number.active,\n.pagination-list .point.active {\n  background-color: #444;\n  border-color: #444;\n  color: #fff;\n}\n.pagination-list .point {\n  background-color: transparent;\n  border: 0;\n  font-size: 14px;\n}\n.pagination-list .point span {\n  position: relative;\n  top: -3px;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 49 */
/***/ (function(module, exports) {

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

/***/ }),
/* 50 */
/***/ (function(module, exports) {

	module.exports = "\n<div class=\"pagination\">\n  <div class=\"total-count\">共{{total}}条</div>\n  <ul class=\"pagination-list\" @click=\"onPagerClick\">\n    <li class=\"iconhandle number prev\" v-if=\"currentPage !== 1\">\n      &#xe612;\n    </li>\n    <li\n    :class=\"{ active: currentPage === 1 }\"\n    v-if=\"pageCount > 0\"\n    class=\"number\">1</li>\n    <li\n      class=\"point\"\n      v-if=\"showPrevDot\">\n      <span>...</span>\n    </li>\n    <li\n      v-for=\"pager in pagers\"\n      :class=\"{ active: currentPage === pager }\"\n      class=\"number\">{{ pager }}</li>\n    <li\n      class=\"point\"\n      v-if=\"showNextDot\">\n      <span>...</span>\n    </li>\n    <li\n      :class=\"{ active: currentPage === pageCount }\"\n      class=\"number\"\n      v-if=\"pageCount > 1\">{{ pageCount }}</li>\n    <li class=\"iconhandle number next\" v-if=\"currentPage !== pageCount\">\n      &#xe619;\n    </li>\n  </ul>\n</div>\n";

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(52)
	__vue_script__ = __webpack_require__(54)
	__vue_template__ = __webpack_require__(56)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/nuanfeng/Github/duiba-design/src/components/Tooltip.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(53);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/.0.21.0@css-loader/index.js?sourceMap!../../node_modules/.8.0.0@vue-loader/lib/style-rewriter.js?id=_v-17659cdf&file=Tooltip.vue!../../node_modules/.2.2.3@less-loader/index.js!../../node_modules/.8.0.0@vue-loader/lib/selector.js?type=style&index=0!../../node_modules/.1.7.1@eslint-loader/index.js!../../node_modules/.1.7.1@eslint-loader/index.js!./Tooltip.vue", function() {
				var newContent = require("!!../../node_modules/.0.21.0@css-loader/index.js?sourceMap!../../node_modules/.8.0.0@vue-loader/lib/style-rewriter.js?id=_v-17659cdf&file=Tooltip.vue!../../node_modules/.2.2.3@less-loader/index.js!../../node_modules/.8.0.0@vue-loader/lib/selector.js?type=style&index=0!../../node_modules/.1.7.1@eslint-loader/index.js!../../node_modules/.1.7.1@eslint-loader/index.js!./Tooltip.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".d-tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-family: \"Hiragino Sans GB\", \"Helvetica Neue\", Helvetica, \"Microsoft Yahei\", STHeiTi, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.42857143;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  font-size: 12px;\n  opacity: 0.9;\n  visibility: hidden;\n}\n.d-tooltip.top {\n  margin-top: -3px;\n  padding: 5px 0;\n}\n.d-tooltip.right {\n  margin-left: 3px;\n  padding: 0 5px;\n}\n.d-tooltip.bottom {\n  margin-top: 3px;\n  padding: 5px 0;\n}\n.d-tooltip.left {\n  margin-left: -3px;\n  padding: 0 5px;\n}\n.d-tooltip.visible {\n  visibility: visible;\n}\n.d-tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #29B6B0;\n  border-radius: 20px;\n}\n.d-tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.d-tooltip.top .d-tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #29B6B0;\n}\n.d-tooltip.right .d-tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #29B6B0;\n}\n.d-tooltip.left .d-tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #29B6B0;\n}\n.d-tooltip.bottom .d-tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #29B6B0;\n}\n.delete.top .d-tooltip-inner {\n  background-color: #ff795c;\n}\n.delete.top .d-tooltip-arrow {\n  border-top-color: #ff795c;\n}\n.disable.top .d-tooltip-inner {\n  background-color: #eee;\n  border-radius: 6px;\n  color: #888;\n}\n.disable.top .d-tooltip-arrow {\n  border-top-color: #eee;\n}\n", "", {"version":3,"sources":["/./src/components/Tooltip.vue"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,cAAc;EACd,eAAe;EACf,4GAA4G;EAC5G,mBAAmB;EACnB,oBAAoB;EACpB,uBAAuB;EACvB,iBAAiB;EACjB,wBAAwB;EACxB,iBAAiB;EACjB,kBAAkB;EAClB,sBAAsB;EACtB,kBAAkB;EAClB,qBAAqB;EACrB,oBAAoB;EACpB,mBAAmB;EACnB,qBAAqB;EACrB,kBAAkB;EAClB,gBAAgB;EAChB,aAAa;EACb,mBAAmB;CACpB;AACD;EACE,iBAAiB;EACjB,eAAe;CAChB;AACD;EACE,iBAAiB;EACjB,eAAe;CAChB;AACD;EACE,gBAAgB;EAChB,eAAe;CAChB;AACD;EACE,kBAAkB;EAClB,eAAe;CAChB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,iBAAiB;EACjB,iBAAiB;EACjB,YAAY;EACZ,mBAAmB;EACnB,0BAA0B;EAC1B,oBAAoB;CACrB;AACD;EACE,mBAAmB;EACnB,SAAS;EACT,UAAU;EACV,0BAA0B;EAC1B,oBAAoB;CACrB;AACD;EACE,UAAU;EACV,UAAU;EACV,kBAAkB;EAClB,wBAAwB;EACxB,0BAA0B;CAC3B;AACD;EACE,SAAS;EACT,QAAQ;EACR,iBAAiB;EACjB,4BAA4B;EAC5B,4BAA4B;CAC7B;AACD;EACE,SAAS;EACT,SAAS;EACT,iBAAiB;EACjB,4BAA4B;EAC5B,2BAA2B;CAC5B;AACD;EACE,OAAO;EACP,UAAU;EACV,kBAAkB;EAClB,wBAAwB;EACxB,6BAA6B;CAC9B;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;CACb;AACD;EACE,uBAAuB;CACxB","file":"Tooltip.vue","sourcesContent":[".d-tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-family: \"Hiragino Sans GB\", \"Helvetica Neue\", Helvetica, \"Microsoft Yahei\", STHeiTi, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.42857143;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  font-size: 12px;\n  opacity: 0.9;\n  visibility: hidden;\n}\n.d-tooltip.top {\n  margin-top: -3px;\n  padding: 5px 0;\n}\n.d-tooltip.right {\n  margin-left: 3px;\n  padding: 0 5px;\n}\n.d-tooltip.bottom {\n  margin-top: 3px;\n  padding: 5px 0;\n}\n.d-tooltip.left {\n  margin-left: -3px;\n  padding: 0 5px;\n}\n.d-tooltip.visible {\n  visibility: visible;\n}\n.d-tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #29B6B0;\n  border-radius: 20px;\n}\n.d-tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.d-tooltip.top .d-tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #29B6B0;\n}\n.d-tooltip.right .d-tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #29B6B0;\n}\n.d-tooltip.left .d-tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #29B6B0;\n}\n.d-tooltip.bottom .d-tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #29B6B0;\n}\n.delete.top .d-tooltip-inner {\n  background-color: #ff795c;\n}\n.delete.top .d-tooltip-arrow {\n  border-top-color: #ff795c;\n}\n.disable.top .d-tooltip-inner {\n  background-color: #eee;\n  border-radius: 6px;\n  color: #888;\n}\n.disable.top .d-tooltip-arrow {\n  border-top-color: #eee;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _popoverMixins = __webpack_require__(55);
	
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
	//   visibility: hidden;
	
	//   &.top    { margin-top:  -3px; padding: @tooltip-arrow-width 0; }
	//   &.right  { margin-left:  3px; padding: 0 @tooltip-arrow-width; }
	//   &.bottom { margin-top:   3px; padding: @tooltip-arrow-width 0; }
	//   &.left   { margin-left: -3px; padding: 0 @tooltip-arrow-width; }
	
	//   &.visible { visibility: visible; }
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
	//   <div style="position:relative;">
	//     <span ref="trigger">
	//       <slot>
	//       </slot>
	//     </span>
	//     <div class="d-tooltip"
	//       v-bind:class="{
	//         'top':     placement === 'top',
	//         'left':    placement === 'left',
	//         'right':   placement === 'right',
	//         'bottom':  placement === 'bottom',
	//         'disable': type === 'disable',
	//         'delete':  type === 'delete',
	//         'visible': show === true  
	//       }"
	//       ref="popover"
	//       role="tooltip">
	//       <div class="d-tooltip-arrow"></div>
	//       <div class="d-tooltip-inner">
	//         <slot name="content" v-html="content">{{content}}</slot>
	//       </div>
	//     </div>
	//   </div>
	// </template>
	
	// <script>

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

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
	        var popover = this.$refs.popover;
	        var triger = this.$refs.trigger.children[0];
	
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
	  mounted: function mounted() {
	    var _this = this;
	
	    if (!this.$refs.popover) return console.error("Couldn't find popover ref in your component that uses popoverMixin.");
	    var popover = this.$refs.popover;
	    var triger = this.$refs.trigger.children[0];
	
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
	    popover.style.visibility = 'hidden';
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

/***/ }),
/* 56 */
/***/ (function(module, exports) {

	module.exports = "\n<div style=\"position:relative;\">\n  <span ref=\"trigger\">\n    <slot>\n    </slot>\n  </span>\n  <div class=\"d-tooltip\"\n    v-bind:class=\"{\n      'top':     placement === 'top',\n      'left':    placement === 'left',\n      'right':   placement === 'right',\n      'bottom':  placement === 'bottom',\n      'disable': type === 'disable',\n      'delete':  type === 'delete',\n      'visible': show === true  \n    }\"\n    ref=\"popover\"\n    role=\"tooltip\">\n    <div class=\"d-tooltip-arrow\"></div>\n    <div class=\"d-tooltip-inner\">\n      <slot name=\"content\" v-html=\"content\">{{content}}</slot>\n    </div>\n  </div>\n</div>\n";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(58)
	__vue_script__ = __webpack_require__(60)
	__vue_template__ = __webpack_require__(61)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/nuanfeng/Github/duiba-design/src/components/Tabs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(59);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/.0.21.0@css-loader/index.js?sourceMap!../../node_modules/.8.0.0@vue-loader/lib/style-rewriter.js?id=_v-22a74c5c&file=Tabs.vue!../../node_modules/.2.2.3@less-loader/index.js!../../node_modules/.8.0.0@vue-loader/lib/selector.js?type=style&index=0!../../node_modules/.1.7.1@eslint-loader/index.js!../../node_modules/.1.7.1@eslint-loader/index.js!./Tabs.vue", function() {
				var newContent = require("!!../../node_modules/.0.21.0@css-loader/index.js?sourceMap!../../node_modules/.8.0.0@vue-loader/lib/style-rewriter.js?id=_v-22a74c5c&file=Tabs.vue!../../node_modules/.2.2.3@less-loader/index.js!../../node_modules/.8.0.0@vue-loader/lib/selector.js?type=style&index=0!../../node_modules/.1.7.1@eslint-loader/index.js!../../node_modules/.1.7.1@eslint-loader/index.js!./Tabs.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".d-tabs {\n  border-bottom: 1px solid #e5e5e5;\n  overflow: hidden;\n}\n.d-tabs li {\n  font-size: 14px;\n  position: relative;\n  bottom: -1px;\n  margin: 0 10px;\n  float: left;\n  line-height: 34px;\n}\n.d-tabs li:first-child {\n  margin-left: 0;\n}\n.d-tabs li::before {\n  content: '';\n  position: absolute;\n  top: 9px;\n  right: -10px;\n  height: 16px;\n  border-right: 1px dashed #d8d8d8;\n}\n.d-tabs li:last-child::before {\n  display: none;\n}\n.d-tabs li a {\n  display: block;\n  border-bottom: 2px solid transparent;\n  padding: 0 25px 0 15px;\n  padding-right: 25px;\n  position: relative;\n  color: #888;\n}\n.d-tabs li a.active {\n  font-weight: normal;\n  border-bottom: 2px solid #29b6b0;\n  color: #444;\n}\n.d-tabs li .iconhandle {\n  font-size: 12px;\n  position: absolute;\n  top: -5px;\n  right: 8px;\n  color: #a5a5a5;\n}\n.d-tabs li .iconhandle.active {\n  color: #29b6b0;\n}\n.d-tab-content {\n  padding: 10px 0;\n}\n", "", {"version":3,"sources":["/./src/components/Tabs.vue"],"names":[],"mappings":"AAAA;EACE,iCAAiC;EACjC,iBAAiB;CAClB;AACD;EACE,gBAAgB;EAChB,mBAAmB;EACnB,aAAa;EACb,eAAe;EACf,YAAY;EACZ,kBAAkB;CACnB;AACD;EACE,eAAe;CAChB;AACD;EACE,YAAY;EACZ,mBAAmB;EACnB,SAAS;EACT,aAAa;EACb,aAAa;EACb,iCAAiC;CAClC;AACD;EACE,cAAc;CACf;AACD;EACE,eAAe;EACf,qCAAqC;EACrC,uBAAuB;EACvB,oBAAoB;EACpB,mBAAmB;EACnB,YAAY;CACb;AACD;EACE,oBAAoB;EACpB,iCAAiC;EACjC,YAAY;CACb;AACD;EACE,gBAAgB;EAChB,mBAAmB;EACnB,UAAU;EACV,WAAW;EACX,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,gBAAgB;CACjB","file":"Tabs.vue","sourcesContent":[".d-tabs {\n  border-bottom: 1px solid #e5e5e5;\n  overflow: hidden;\n}\n.d-tabs li {\n  font-size: 14px;\n  position: relative;\n  bottom: -1px;\n  margin: 0 10px;\n  float: left;\n  line-height: 34px;\n}\n.d-tabs li:first-child {\n  margin-left: 0;\n}\n.d-tabs li::before {\n  content: '';\n  position: absolute;\n  top: 9px;\n  right: -10px;\n  height: 16px;\n  border-right: 1px dashed #d8d8d8;\n}\n.d-tabs li:last-child::before {\n  display: none;\n}\n.d-tabs li a {\n  display: block;\n  border-bottom: 2px solid transparent;\n  padding: 0 25px 0 15px;\n  padding-right: 25px;\n  position: relative;\n  color: #888;\n}\n.d-tabs li a.active {\n  font-weight: normal;\n  border-bottom: 2px solid #29b6b0;\n  color: #444;\n}\n.d-tabs li .iconhandle {\n  font-size: 12px;\n  position: absolute;\n  top: -5px;\n  right: 8px;\n  color: #a5a5a5;\n}\n.d-tabs li .iconhandle.active {\n  color: #29b6b0;\n}\n.d-tab-content {\n  padding: 10px 0;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 60 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div>
	//     <!-- Nav tabs -->
	//     <ul class="d-tabs cf" role="tablist">
	//       <template v-for="t in tabs">
	//         <li @click.prevent="select(t)">
	//           <a :class="{active: t.active}" href="javascript:void(0)">
	//             {{t.header}}
	//           </a>
	//         </li>
	//       </template>
	//     </ul>
	//     <div class="d-tab-content" ref="tab-content">
	//       <slot></slot>
	//     </div>
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
	      tabs: [],
	      myActive: this.active
	    };
	  },
	  created: function created() {
	    this._tabset = true;
	  },
	
	  watch: {
	    myActive: function myActive(val) {
	      this.show = this.tabs[val];
	    }
	  },
	  mounted: function mounted() {
	    this.show = this.tabs[this.myActive];
	  },
	
	  methods: {
	    select: function select(tab) {
	      if (!tab.disabled) {
	        this.myActive = tab.index;
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

/***/ }),
/* 61 */
/***/ (function(module, exports) {

	module.exports = "\n<div>\n  <!-- Nav tabs -->\n  <ul class=\"d-tabs cf\" role=\"tablist\">\n    <template v-for=\"t in tabs\">\n      <li @click.prevent=\"select(t)\">\n        <a :class=\"{active: t.active}\" href=\"javascript:void(0)\">\n          {{t.header}}\n        </a>\n      </li>\n    </template>\n  </ul>\n  <div class=\"d-tab-content\" ref=\"tab-content\">\n    <slot></slot>\n  </div>\n</div>\n";

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(63)
	__vue_template__ = __webpack_require__(64)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/nuanfeng/Github/duiba-design/src/components/Tab.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 63 */
/***/ (function(module, exports) {

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

/***/ }),
/* 64 */
/***/ (function(module, exports) {

	module.exports = "\n<div role=\"tabpanel\" class=\"d-tab-pane\" v-show=\"active\">\n  <slot></slot>\n</div>\n";

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(66)
	__vue_template__ = __webpack_require__(67)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/nuanfeng/Github/duiba-design/src/components/Breadcrumb.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 66 */
/***/ (function(module, exports) {

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

/***/ }),
/* 67 */
/***/ (function(module, exports) {

	module.exports = "\n<div class=\"d-breadcrumb\">\n  <slot></slot>\n</div>\n";

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(69)
	__vue_script__ = __webpack_require__(71)
	__vue_template__ = __webpack_require__(72)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/nuanfeng/Github/duiba-design/src/components/BreadcrumbItem.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(70);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/.0.21.0@css-loader/index.js?sourceMap!../../node_modules/.8.0.0@vue-loader/lib/style-rewriter.js?id=_v-416f750a&file=BreadcrumbItem.vue!../../node_modules/.2.2.3@less-loader/index.js!../../node_modules/.8.0.0@vue-loader/lib/selector.js?type=style&index=0!../../node_modules/.1.7.1@eslint-loader/index.js!../../node_modules/.1.7.1@eslint-loader/index.js!./BreadcrumbItem.vue", function() {
				var newContent = require("!!../../node_modules/.0.21.0@css-loader/index.js?sourceMap!../../node_modules/.8.0.0@vue-loader/lib/style-rewriter.js?id=_v-416f750a&file=BreadcrumbItem.vue!../../node_modules/.2.2.3@less-loader/index.js!../../node_modules/.8.0.0@vue-loader/lib/selector.js?type=style&index=0!../../node_modules/.1.7.1@eslint-loader/index.js!../../node_modules/.1.7.1@eslint-loader/index.js!./BreadcrumbItem.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".d-breadcrumb {\n  line-height: 1;\n  font-size: 18px;\n}\n.d-breadcrumb__item {\n  color: #444;\n}\n.d-breadcrumb__item:last-child {\n  font-weight: bold;\n}\n.d-breadcrumb__item:last-child .d-breadcrumb__separator {\n  display: none;\n}\n.d-breadcrumb__item:last-child .d-breadcrumb__item__inner {\n  cursor: default;\n}\n.d-breadcrumb__separator {\n  font-family: handle;\n  font-size: 12px;\n  margin: 0 5px;\n  vertical-align: middle;\n}\n.d-breadcrumb__item__inner {\n  cursor: pointer;\n}\n", "", {"version":3,"sources":["/./src/components/BreadcrumbItem.vue"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,gBAAgB;CACjB;AACD;EACE,YAAY;CACb;AACD;EACE,kBAAkB;CACnB;AACD;EACE,cAAc;CACf;AACD;EACE,gBAAgB;CACjB;AACD;EACE,oBAAoB;EACpB,gBAAgB;EAChB,cAAc;EACd,uBAAuB;CACxB;AACD;EACE,gBAAgB;CACjB","file":"BreadcrumbItem.vue","sourcesContent":[".d-breadcrumb {\n  line-height: 1;\n  font-size: 18px;\n}\n.d-breadcrumb__item {\n  color: #444;\n}\n.d-breadcrumb__item:last-child {\n  font-weight: bold;\n}\n.d-breadcrumb__item:last-child .d-breadcrumb__separator {\n  display: none;\n}\n.d-breadcrumb__item:last-child .d-breadcrumb__item__inner {\n  cursor: default;\n}\n.d-breadcrumb__separator {\n  font-family: handle;\n  font-size: 12px;\n  margin: 0 5px;\n  vertical-align: middle;\n}\n.d-breadcrumb__item__inner {\n  cursor: pointer;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 71 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <span class="d-breadcrumb__item">
	//     <span class="d-breadcrumb__item__inner" ref="link">
	//       <slot></slot>
	//     </span>
	//     <span class="d-breadcrumb__separator">{{separator}}</span>
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
	      var link = this.$refs.link;
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

/***/ }),
/* 72 */
/***/ (function(module, exports) {

	module.exports = "\n<span class=\"d-breadcrumb__item\">\n  <span class=\"d-breadcrumb__item__inner\" ref=\"link\">\n    <slot></slot>\n  </span>\n  <span class=\"d-breadcrumb__separator\">{{separator}}</span>\n</span>\n";

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(74)
	__vue_script__ = __webpack_require__(76)
	__vue_template__ = __webpack_require__(77)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/nuanfeng/Github/duiba-design/src/components/Checkbox.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(75);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/.0.21.0@css-loader/index.js?sourceMap!../../node_modules/.8.0.0@vue-loader/lib/style-rewriter.js?id=_v-6801d997&file=Checkbox.vue!../../node_modules/.2.2.3@less-loader/index.js!../../node_modules/.8.0.0@vue-loader/lib/selector.js?type=style&index=0!../../node_modules/.1.7.1@eslint-loader/index.js!../../node_modules/.1.7.1@eslint-loader/index.js!./Checkbox.vue", function() {
				var newContent = require("!!../../node_modules/.0.21.0@css-loader/index.js?sourceMap!../../node_modules/.8.0.0@vue-loader/lib/style-rewriter.js?id=_v-6801d997&file=Checkbox.vue!../../node_modules/.2.2.3@less-loader/index.js!../../node_modules/.8.0.0@vue-loader/lib/selector.js?type=style&index=0!../../node_modules/.1.7.1@eslint-loader/index.js!../../node_modules/.1.7.1@eslint-loader/index.js!./Checkbox.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".d-checkbox-control {\n  display: inline-block;\n  line-height: 34px;\n  height: 34px;\n  padding-left: 24px;\n  position: relative;\n  font-size: 14px;\n}\n.d-checkbox-control input {\n  opacity: 0;\n  position: absolute;\n  left: 0;\n  top: 10px;\n  z-index: -1;\n}\n.d-checkbox-control .icon {\n  position: absolute;\n  left: 0;\n  top: 10px;\n  width: 12px;\n  height: 12px;\n  line-height: 12px;\n  border: 1px solid #e4e3df;\n  font-size: 12px;\n  cursor: pointer;\n  border-radius: 1px;\n  background-color: #fff;\n}\n.d-checkbox-control .icon:hover {\n  border-color: #828282;\n}\n.d-checkbox-control .iconhandle {\n  background-color: #29b6b0;\n  border-color: #29b6b0;\n  color: #fff;\n}\n.d-checkbox-control .iconhandle span {\n  display: block;\n  -webkit-transform: scale(0.6, 0.6);\n          transform: scale(0.6, 0.6);\n  margin-top: 1px;\n}\n.d-checkbox-control .iconhandle:hover {\n  border-color: #29b6b0;\n}\n.d-checkbox-control.is-disabled .iconhandle,\n.d-checkbox-control.is-disabled .icon {\n  cursor: not-allowed;\n  background-color: #d3dce6;\n  border-color: #d3dce6;\n}\n.d-checkbox-control.is-disabled .icon {\n  border-color: #d3dce6;\n}\n", "", {"version":3,"sources":["/./src/components/Checkbox.vue"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,gBAAgB;CACjB;AACD;EACE,WAAW;EACX,mBAAmB;EACnB,QAAQ;EACR,UAAU;EACV,YAAY;CACb;AACD;EACE,mBAAmB;EACnB,QAAQ;EACR,UAAU;EACV,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,0BAA0B;EAC1B,gBAAgB;EAChB,gBAAgB;EAChB,mBAAmB;EACnB,uBAAuB;CACxB;AACD;EACE,sBAAsB;CACvB;AACD;EACE,0BAA0B;EAC1B,sBAAsB;EACtB,YAAY;CACb;AACD;EACE,eAAe;EACf,mCAA2B;UAA3B,2BAA2B;EAC3B,gBAAgB;CACjB;AACD;EACE,sBAAsB;CACvB;AACD;;EAEE,oBAAoB;EACpB,0BAA0B;EAC1B,sBAAsB;CACvB;AACD;EACE,sBAAsB;CACvB","file":"Checkbox.vue","sourcesContent":[".d-checkbox-control {\n  display: inline-block;\n  line-height: 34px;\n  height: 34px;\n  padding-left: 24px;\n  position: relative;\n  font-size: 14px;\n}\n.d-checkbox-control input {\n  opacity: 0;\n  position: absolute;\n  left: 0;\n  top: 10px;\n  z-index: -1;\n}\n.d-checkbox-control .icon {\n  position: absolute;\n  left: 0;\n  top: 10px;\n  width: 12px;\n  height: 12px;\n  line-height: 12px;\n  border: 1px solid #e4e3df;\n  font-size: 12px;\n  cursor: pointer;\n  border-radius: 1px;\n  background-color: #fff;\n}\n.d-checkbox-control .icon:hover {\n  border-color: #828282;\n}\n.d-checkbox-control .iconhandle {\n  background-color: #29b6b0;\n  border-color: #29b6b0;\n  color: #fff;\n}\n.d-checkbox-control .iconhandle span {\n  display: block;\n  transform: scale(0.6, 0.6);\n  margin-top: 1px;\n}\n.d-checkbox-control .iconhandle:hover {\n  border-color: #29b6b0;\n}\n.d-checkbox-control.is-disabled .iconhandle,\n.d-checkbox-control.is-disabled .icon {\n  cursor: not-allowed;\n  background-color: #d3dce6;\n  border-color: #d3dce6;\n}\n.d-checkbox-control.is-disabled .icon {\n  border-color: #d3dce6;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 76 */
/***/ (function(module, exports) {

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
	//       <span>{{isChecked ? '&#xe610;' : ''}}</span>
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
	          this.$emit('update:checked', newValue);
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

/***/ }),
/* 77 */
/***/ (function(module, exports) {

	module.exports = "\n<label class=\"d-checkbox-control\"\n  v-bind:class=\"{\n    'is-disabled': disabled\n  }\"\n>\n  <i class=\"icon\" v-bind:class=\"{'iconhandle': isChecked}\" @click=\"handleClick\">\n    <span>{{isChecked ? '&#xe610;' : ''}}</span>\n  </i>\n  <slot></slot>\n</label>\n";

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(79)
	__vue_template__ = __webpack_require__(80)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/nuanfeng/Github/duiba-design/src/components/CheckboxGroup.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 79 */
/***/ (function(module, exports) {

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

/***/ }),
/* 80 */
/***/ (function(module, exports) {

	module.exports = "\n<div class=\"d-checkbox-group\">\n  <slot></slot>\n</div>\n";

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(82)
	__vue_script__ = __webpack_require__(84)
	__vue_template__ = __webpack_require__(140)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/nuanfeng/Github/duiba-design/src/components/Datepicker.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(83);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/.0.21.0@css-loader/index.js?sourceMap!../../node_modules/.8.0.0@vue-loader/lib/style-rewriter.js?id=_v-0afdd810&file=Datepicker.vue!../../node_modules/.2.2.3@less-loader/index.js!../../node_modules/.8.0.0@vue-loader/lib/selector.js?type=style&index=0!../../node_modules/.1.7.1@eslint-loader/index.js!../../node_modules/.1.7.1@eslint-loader/index.js!./Datepicker.vue", function() {
				var newContent = require("!!../../node_modules/.0.21.0@css-loader/index.js?sourceMap!../../node_modules/.8.0.0@vue-loader/lib/style-rewriter.js?id=_v-0afdd810&file=Datepicker.vue!../../node_modules/.2.2.3@less-loader/index.js!../../node_modules/.8.0.0@vue-loader/lib/selector.js?type=style&index=0!../../node_modules/.1.7.1@eslint-loader/index.js!../../node_modules/.1.7.1@eslint-loader/index.js!./Datepicker.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".datepicker {\n  position: relative;\n  display: inline-block;\n}\n.datepicker .form-control {\n  font-size: 14px;\n}\n.datepicker .iconhandle {\n  position: absolute;\n  right: 13px;\n  top: 8px;\n  color: #888;\n  line-height: 1;\n}\n.datepicker .iconhandle-has-value {\n  color: #444;\n}\n.datepicker:hover .form-control {\n  border-color: #888;\n}\n.datepicker:hover .iconhandle {\n  color: #444;\n}\ninput.datepicker-input.with-reset-button {\n  padding-right: 25px;\n}\n.datepicker > button.close {\n  position: absolute;\n  top: calc(37%);\n  right: 10px;\n  outline: none;\n  z-index: 2;\n}\n.datepicker > button.close:focus {\n  opacity: .2;\n}\n.datepicker-popup {\n  position: absolute;\n  border: 1px solid #888;\n  border-radius: 5px;\n  background: #fff;\n  margin-top: 2px;\n  z-index: 1000;\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n}\n.datepicker-inner {\n  width: 218px;\n}\n.datepicker-body {\n  padding: 10px 10px;\n}\n.datepicker-ctrl p,\n.datepicker-ctrl span,\n.datepicker-body span {\n  display: inline-block;\n  width: 28px;\n  line-height: 28px;\n  height: 28px;\n  border-radius: 4px;\n  font-size: 14px;\n}\n.datepicker-ctrl p {\n  width: 65%;\n}\n.datepicker-popup .datepicker-ctrl span {\n  position: absolute;\n  top: 0;\n  right: 0;\n  font-size: 12px;\n  line-height: 28px;\n  color: #444 !important;\n}\n.datepicker-popup .datepicker-ctrl span:hover {\n  background: #eee;\n}\n.datepicker-body span {\n  text-align: center;\n}\n.datepicker-monthRange span,\n.datepicker-timeRange span {\n  width: 48px;\n  height: 36px;\n  line-height: 36px;\n}\n.datepicker-item-disable {\n  background-color: white!important;\n  cursor: not-allowed !important;\n}\n.decadeRange span:first-child,\n.decadeRange span:last-child,\n.datepicker-item-disable,\n.datepicker-item-gray {\n  color: #999;\n}\n.datepicker-dateRange-item-active:hover,\n.datepicker-dateRange-item-active {\n  background: #29b6b0 !important;\n  color: white!important;\n}\n.datepicker-monthRange,\n.datepicker-timeRange {\n  margin-top: 10px;\n}\n.datepicker-monthRange span,\n.datepicker-timeRange span,\n.datepicker-ctrl span,\n.datepicker-ctrl p,\n.datepicker-dateRange span {\n  cursor: pointer;\n}\n.datepicker-monthRange span:hover,\n.datepicker-timeRange span:hover,\n.datepicker-ctrl p:hover,\n.datepicker-ctrl i:hover,\n.datepicker-dateRange span:hover,\n.datepicker-dateRange-item-hover {\n  background-color: #eeeeee;\n}\n.datepicker-weekRange span {\n  font-weight: bold;\n}\n.datepicker-label {\n  background-color: #f8f8f8;\n  font-weight: 700;\n  padding: 7px 0;\n  text-align: center;\n}\n.datepicker-ctrl {\n  position: relative;\n  height: 30px;\n  line-height: 30px;\n  font-weight: bold;\n  text-align: center;\n}\n.month-btn {\n  font-weight: bold;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.datepicker-preBtn {\n  left: 2px;\n}\n.datepicker-nextBtn {\n  right: 2px;\n}\n", "", {"version":3,"sources":["/./src/components/Datepicker.vue"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,sBAAsB;CACvB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,mBAAmB;EACnB,YAAY;EACZ,SAAS;EACT,YAAY;EACZ,eAAe;CAChB;AACD;EACE,YAAY;CACb;AACD;EACE,mBAAmB;CACpB;AACD;EACE,YAAY;CACb;AACD;EACE,oBAAoB;CACrB;AACD;EACE,mBAAmB;EACnB,eAAe;EACf,YAAY;EACZ,cAAc;EACd,WAAW;CACZ;AACD;EACE,YAAY;CACb;AACD;EACE,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;EACjB,gBAAgB;EAChB,cAAc;EACd,4CAA4C;CAC7C;AACD;EACE,aAAa;CACd;AACD;EACE,mBAAmB;CACpB;AACD;;;EAGE,sBAAsB;EACtB,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,gBAAgB;CACjB;AACD;EACE,WAAW;CACZ;AACD;EACE,mBAAmB;EACnB,OAAO;EACP,SAAS;EACT,gBAAgB;EAChB,kBAAkB;EAClB,uBAAuB;CACxB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,mBAAmB;CACpB;AACD;;EAEE,YAAY;EACZ,aAAa;EACb,kBAAkB;CACnB;AACD;EACE,kCAAkC;EAClC,+BAA+B;CAChC;AACD;;;;EAIE,YAAY;CACb;AACD;;EAEE,+BAA+B;EAC/B,uBAAuB;CACxB;AACD;;EAEE,iBAAiB;CAClB;AACD;;;;;EAKE,gBAAgB;CACjB;AACD;;;;;;EAME,0BAA0B;CAC3B;AACD;EACE,kBAAkB;CACnB;AACD;EACE,0BAA0B;EAC1B,iBAAiB;EACjB,eAAe;EACf,mBAAmB;CACpB;AACD;EACE,mBAAmB;EACnB,aAAa;EACb,kBAAkB;EAClB,kBAAkB;EAClB,mBAAmB;CACpB;AACD;EACE,kBAAkB;EAClB,0BAA0B;EAC1B,uBAAuB;EACvB,sBAAsB;EACtB,kBAAkB;CACnB;AACD;EACE,UAAU;CACX;AACD;EACE,WAAW;CACZ","file":"Datepicker.vue","sourcesContent":[".datepicker {\n  position: relative;\n  display: inline-block;\n}\n.datepicker .form-control {\n  font-size: 14px;\n}\n.datepicker .iconhandle {\n  position: absolute;\n  right: 13px;\n  top: 8px;\n  color: #888;\n  line-height: 1;\n}\n.datepicker .iconhandle-has-value {\n  color: #444;\n}\n.datepicker:hover .form-control {\n  border-color: #888;\n}\n.datepicker:hover .iconhandle {\n  color: #444;\n}\ninput.datepicker-input.with-reset-button {\n  padding-right: 25px;\n}\n.datepicker > button.close {\n  position: absolute;\n  top: calc(37%);\n  right: 10px;\n  outline: none;\n  z-index: 2;\n}\n.datepicker > button.close:focus {\n  opacity: .2;\n}\n.datepicker-popup {\n  position: absolute;\n  border: 1px solid #888;\n  border-radius: 5px;\n  background: #fff;\n  margin-top: 2px;\n  z-index: 1000;\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n}\n.datepicker-inner {\n  width: 218px;\n}\n.datepicker-body {\n  padding: 10px 10px;\n}\n.datepicker-ctrl p,\n.datepicker-ctrl span,\n.datepicker-body span {\n  display: inline-block;\n  width: 28px;\n  line-height: 28px;\n  height: 28px;\n  border-radius: 4px;\n  font-size: 14px;\n}\n.datepicker-ctrl p {\n  width: 65%;\n}\n.datepicker-popup .datepicker-ctrl span {\n  position: absolute;\n  top: 0;\n  right: 0;\n  font-size: 12px;\n  line-height: 28px;\n  color: #444 !important;\n}\n.datepicker-popup .datepicker-ctrl span:hover {\n  background: #eee;\n}\n.datepicker-body span {\n  text-align: center;\n}\n.datepicker-monthRange span,\n.datepicker-timeRange span {\n  width: 48px;\n  height: 36px;\n  line-height: 36px;\n}\n.datepicker-item-disable {\n  background-color: white!important;\n  cursor: not-allowed !important;\n}\n.decadeRange span:first-child,\n.decadeRange span:last-child,\n.datepicker-item-disable,\n.datepicker-item-gray {\n  color: #999;\n}\n.datepicker-dateRange-item-active:hover,\n.datepicker-dateRange-item-active {\n  background: #29b6b0 !important;\n  color: white!important;\n}\n.datepicker-monthRange,\n.datepicker-timeRange {\n  margin-top: 10px;\n}\n.datepicker-monthRange span,\n.datepicker-timeRange span,\n.datepicker-ctrl span,\n.datepicker-ctrl p,\n.datepicker-dateRange span {\n  cursor: pointer;\n}\n.datepicker-monthRange span:hover,\n.datepicker-timeRange span:hover,\n.datepicker-ctrl p:hover,\n.datepicker-ctrl i:hover,\n.datepicker-dateRange span:hover,\n.datepicker-dateRange-item-hover {\n  background-color: #eeeeee;\n}\n.datepicker-weekRange span {\n  font-weight: bold;\n}\n.datepicker-label {\n  background-color: #f8f8f8;\n  font-weight: 700;\n  padding: 7px 0;\n  text-align: center;\n}\n.datepicker-ctrl {\n  position: relative;\n  height: 30px;\n  line-height: 30px;\n  font-weight: bold;\n  text-align: center;\n}\n.month-btn {\n  font-weight: bold;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.datepicker-preBtn {\n  left: 2px;\n}\n.datepicker-nextBtn {\n  right: 2px;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(37);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	var _translations = __webpack_require__(85);
	
	var _translations2 = _interopRequireDefault(_translations);
	
	var _dateUtils = __webpack_require__(86);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'd-datepicker',
	
	  props: {
	    value: {
	      type: String,
	      default: ''
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
	  mounted: function mounted() {
	    var _this = this;
	
	    this.$emit('child-created', this);
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
	        this.$emit('update:value', this.stringify(this.currDate));
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
	      this.$emit('update:value', this.stringify(this.currDate));
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
	      this.$emit('update:value', this.stringify(this.currDate) + ':00');
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
	//             <template v-for="(m, index) in text.months">
	//               <span
	//                 :class="{
	//                   'datepicker-dateRange-item-active': (text.months[getTimeMonth(value)] === m) &&
	//                   currDate.getFullYear() === getTimeYear(value)
	//                 }"
	//                 @click="monthSelect(index)">
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
	//                   'datepicker-dateRange-item-active': getTimeYear(value) === decade.text
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

/***/ }),
/* 85 */
/***/ (function(module, exports) {

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

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof2 = __webpack_require__(87);
	
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

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(88);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__(124);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(89), __esModule: true };

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(90);
	__webpack_require__(119);
	module.exports = __webpack_require__(123).f('iterator');

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(91)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(94)(String, 'String', function(iterated){
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

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(92)
	  , defined   = __webpack_require__(93);
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

/***/ }),
/* 92 */
/***/ (function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ }),
/* 93 */
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(95)
	  , $export        = __webpack_require__(20)
	  , redefine       = __webpack_require__(96)
	  , hide           = __webpack_require__(25)
	  , has            = __webpack_require__(97)
	  , Iterators      = __webpack_require__(98)
	  , $iterCreate    = __webpack_require__(99)
	  , setToStringTag = __webpack_require__(115)
	  , getPrototypeOf = __webpack_require__(117)
	  , ITERATOR       = __webpack_require__(116)('iterator')
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

/***/ }),
/* 95 */
/***/ (function(module, exports) {

	module.exports = true;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(25);

/***/ }),
/* 97 */
/***/ (function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ }),
/* 98 */
/***/ (function(module, exports) {

	module.exports = {};

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(100)
	  , descriptor     = __webpack_require__(34)
	  , setToStringTag = __webpack_require__(115)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(25)(IteratorPrototype, __webpack_require__(116)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(27)
	  , dPs         = __webpack_require__(101)
	  , enumBugKeys = __webpack_require__(113)
	  , IE_PROTO    = __webpack_require__(110)('IE_PROTO')
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
	  __webpack_require__(114).appendChild(iframe);
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


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(26)
	  , anObject = __webpack_require__(27)
	  , getKeys  = __webpack_require__(102);
	
	module.exports = __webpack_require__(30) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(103)
	  , enumBugKeys = __webpack_require__(113);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(97)
	  , toIObject    = __webpack_require__(104)
	  , arrayIndexOf = __webpack_require__(107)(false)
	  , IE_PROTO     = __webpack_require__(110)('IE_PROTO');
	
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

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(105)
	  , defined = __webpack_require__(93);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(106);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ }),
/* 106 */
/***/ (function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(104)
	  , toLength  = __webpack_require__(108)
	  , toIndex   = __webpack_require__(109);
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

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(92)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(92)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(111)('keys')
	  , uid    = __webpack_require__(112);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(21)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ }),
/* 112 */
/***/ (function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ }),
/* 113 */
/***/ (function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(21).document && document.documentElement;

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

	var def = __webpack_require__(26).f
	  , has = __webpack_require__(97)
	  , TAG = __webpack_require__(116)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(111)('wks')
	  , uid        = __webpack_require__(112)
	  , Symbol     = __webpack_require__(21).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(97)
	  , toObject    = __webpack_require__(118)
	  , IE_PROTO    = __webpack_require__(110)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(93);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(120);
	var global        = __webpack_require__(21)
	  , hide          = __webpack_require__(25)
	  , Iterators     = __webpack_require__(98)
	  , TO_STRING_TAG = __webpack_require__(116)('toStringTag');
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(121)
	  , step             = __webpack_require__(122)
	  , Iterators        = __webpack_require__(98)
	  , toIObject        = __webpack_require__(104);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(94)(Array, 'Array', function(iterated, kind){
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

/***/ }),
/* 121 */
/***/ (function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ }),
/* 122 */
/***/ (function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(116);

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(125), __esModule: true };

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(126);
	__webpack_require__(137);
	__webpack_require__(138);
	__webpack_require__(139);
	module.exports = __webpack_require__(22).Symbol;

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(21)
	  , has            = __webpack_require__(97)
	  , DESCRIPTORS    = __webpack_require__(30)
	  , $export        = __webpack_require__(20)
	  , redefine       = __webpack_require__(96)
	  , META           = __webpack_require__(127).KEY
	  , $fails         = __webpack_require__(31)
	  , shared         = __webpack_require__(111)
	  , setToStringTag = __webpack_require__(115)
	  , uid            = __webpack_require__(112)
	  , wks            = __webpack_require__(116)
	  , wksExt         = __webpack_require__(123)
	  , wksDefine      = __webpack_require__(128)
	  , keyOf          = __webpack_require__(129)
	  , enumKeys       = __webpack_require__(130)
	  , isArray        = __webpack_require__(133)
	  , anObject       = __webpack_require__(27)
	  , toIObject      = __webpack_require__(104)
	  , toPrimitive    = __webpack_require__(33)
	  , createDesc     = __webpack_require__(34)
	  , _create        = __webpack_require__(100)
	  , gOPNExt        = __webpack_require__(134)
	  , $GOPD          = __webpack_require__(136)
	  , $DP            = __webpack_require__(26)
	  , $keys          = __webpack_require__(102)
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
	  __webpack_require__(135).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(132).f  = $propertyIsEnumerable;
	  __webpack_require__(131).f = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(95)){
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

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(112)('meta')
	  , isObject = __webpack_require__(28)
	  , has      = __webpack_require__(97)
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

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(21)
	  , core           = __webpack_require__(22)
	  , LIBRARY        = __webpack_require__(95)
	  , wksExt         = __webpack_require__(123)
	  , defineProperty = __webpack_require__(26).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(102)
	  , toIObject = __webpack_require__(104);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(102)
	  , gOPS    = __webpack_require__(131)
	  , pIE     = __webpack_require__(132);
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

/***/ }),
/* 131 */
/***/ (function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 132 */
/***/ (function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(106);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(104)
	  , gOPN      = __webpack_require__(135).f
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


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(103)
	  , hiddenKeys = __webpack_require__(113).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(132)
	  , createDesc     = __webpack_require__(34)
	  , toIObject      = __webpack_require__(104)
	  , toPrimitive    = __webpack_require__(33)
	  , has            = __webpack_require__(97)
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

/***/ }),
/* 137 */
/***/ (function(module, exports) {



/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(128)('asyncIterator');

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(128)('observable');

/***/ }),
/* 140 */
/***/ (function(module, exports) {

	module.exports = "\n<div class=\"datepicker\">\n  <input\n    class=\"form-control datepicker-input\"\n    :class=\"{\n      'with-reset-button': showResetButton\n    }\"\n    type=\"text\"\n    :style=\"{width: width}\"\n    @click=\"inputClick\"\n    v-model=\"value\"\n    :placeholder=\"placeholder\"\n    readonly>\n  <i\n    class=\"iconhandle\"\n    :class=\"{ 'iconhandle-has-value': value}\"\n    @click=\"inputClick\">&#xe60d;</i>\n  <div class=\"datepicker-popup\" v-show=\"displayDayView\">\n    <div class=\"datepicker-inner\">\n      <div class=\"datepicker-body\">\n        <div class=\"datepicker-ctrl\">\n          <span\n            class=\"month-btn datepicker-preBtn iconhandle\"\n            @click=\"preNextMonthClick(0)\">&#xe642;</span>\n          <span\n            class=\"month-btn datepicker-nextBtn iconhandle\"\n            @click=\"preNextMonthClick(1)\">&#xe643;</span>\n          <p @click=\"switchMonthView\">\n            {{stringifyDayHeader(currDate)}}\n          </p>\n        </div>\n        <div class=\"datepicker-weekRange\">\n          <span v-for=\"w in text.daysOfWeek\">{{w}}</span>\n        </div>\n        <div class=\"datepicker-dateRange\">\n          <span\n            v-for=\"d in dateRange\"\n            :class=\"d.sclass\"\n            @click=\"daySelect(d.date, $event)\">\n            {{d.text}}\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"datepicker-popup\" v-show=\"displayMonthView\">\n    <div class=\"datepicker-inner\">\n      <div class=\"datepicker-body\">\n        <div class=\"datepicker-ctrl\">\n          <span\n            class=\"month-btn datepicker-preBtn iconhandle\"\n            @click=\"preNextYearClick(0)\">&#xe642;</span>\n          <span\n            class=\"month-btn datepicker-nextBtn iconhandle\"\n            @click=\"preNextYearClick(1)\">&#xe643;</span>\n          <p @click=\"switchDecadeView\">\n            {{stringifyYearHeader(currDate)}}\n          </p>\n        </div>\n        <div class=\"datepicker-monthRange\">\n          <template v-for=\"(m, index) in text.months\">\n            <span\n              :class=\"{\n                'datepicker-dateRange-item-active': (text.months[getTimeMonth(value)] === m) &&\n                currDate.getFullYear() === getTimeYear(value)\n              }\"\n              @click=\"monthSelect(index)\">\n              {{m.substr(0,3)}}\n            </span>\n          </template>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"datepicker-popup\" v-show=\"displayYearView\">\n    <div class=\"datepicker-inner\">\n      <div class=\"datepicker-body\">\n        <div class=\"datepicker-ctrl\">\n          <span\n            class=\"month-btn datepicker-preBtn iconhandle\"\n            @click=\"preNextDecadeClick(0)\">&#xe642;</span>\n          <span\n            class=\"month-btn datepicker-nextBtn iconhandle\"\n            @click=\"preNextDecadeClick(1)\">&#xe643;</span>\n          <p>{{stringifyDecadeHeader(currDate)}}</p>\n        </div>\n        <div class=\"datepicker-monthRange decadeRange\">\n          <template v-for=\"decade in decadeRange\">\n            <span\n              :class=\"{\n                'datepicker-dateRange-item-active': getTimeYear(value) === decade.text\n              }\"\n              @click.stop=\"yearSelect(decade.text)\">\n              {{decade.text}}\n            </span>\n          </template>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"datepicker-popup\" v-show=\"displayTimeView\">\n    <div class=\"datepicker-inner\">\n      <div class=\"datepicker-body\">\n        <div class=\"datepicker-ctrl\">\n          <p @click=\"switchDayView\">\n            {{stringifyTimeHeader(tempDate)}}\n          </p>\n        </div>\n        <div class=\"datepicker-timeRange\">\n          <template v-for=\"time in timeRange\">\n            <span\n              :class=\"time.sclass\"\n              @click.stop=\"timeSelect(time.text, $event)\">\n              {{time.text}}\n            </span>\n          </template>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"datepicker-popup\" v-show=\"displayMinuteView\">\n    <div class=\"datepicker-inner\">\n      <div class=\"datepicker-body\">\n        <div class=\"datepicker-ctrl\">\n          <p @click=\"switchDayView\">\n            {{stringifyTimeHeader(tempDate)}}\n          </p>\n        </div>\n        <div class=\"datepicker-timeRange\">\n          <template v-for=\"time in minuteRange\">\n            <span\n              :class=\"time.sclass\"\n              @click.stop=\"minuteSelect(time.text, $event)\">\n              {{time.text}}\n            </span>\n          </template>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(142)
	__vue_script__ = __webpack_require__(144)
	__vue_template__ = __webpack_require__(149)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/nuanfeng/Github/duiba-design/src/components/Timepicker.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(143);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/.0.21.0@css-loader/index.js?sourceMap!../../node_modules/.8.0.0@vue-loader/lib/style-rewriter.js?id=_v-6717206f&file=Timepicker.vue!../../node_modules/.2.2.3@less-loader/index.js!../../node_modules/.8.0.0@vue-loader/lib/selector.js?type=style&index=0!../../node_modules/.1.7.1@eslint-loader/index.js!../../node_modules/.1.7.1@eslint-loader/index.js!./Timepicker.vue", function() {
				var newContent = require("!!../../node_modules/.0.21.0@css-loader/index.js?sourceMap!../../node_modules/.8.0.0@vue-loader/lib/style-rewriter.js?id=_v-6717206f&file=Timepicker.vue!../../node_modules/.2.2.3@less-loader/index.js!../../node_modules/.8.0.0@vue-loader/lib/selector.js?type=style&index=0!../../node_modules/.1.7.1@eslint-loader/index.js!../../node_modules/.1.7.1@eslint-loader/index.js!./Timepicker.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".time-picker {\n  display: inline-block;\n  position: relative;\n  font-size: 1em;\n  width: 10em;\n  font-family: sans-serif;\n  vertical-align: middle;\n}\n.time-picker * {\n  box-sizing: border-box;\n}\n.time-picker input.display-time {\n  border: 1px solid #d2d2d2;\n  width: 10em;\n  height: 2.2em;\n  padding: 0.3em 0.5em;\n  font-size: 1em;\n}\n.time-picker .clear-btn {\n  position: absolute;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  margin-top: -0.15em;\n  z-index: 3;\n  font-size: 1.1em;\n  line-height: 1em;\n  vertical-align: middle;\n  width: 1.3em;\n  color: #d2d2d2;\n  background: rgba(255, 255, 255, 0);\n  text-align: center;\n  font-style: normal;\n  transition: color .2s;\n}\n.time-picker .clear-btn:hover {\n  color: #797979;\n  cursor: pointer;\n}\n.time-picker .time-picker-overlay {\n  z-index: 2;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.time-picker .dropdown {\n  position: absolute;\n  z-index: 5;\n  top: 36px;\n  left: 0;\n  background: #fff;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.15);\n  width: 10em;\n  height: 10em;\n  font-weight: normal;\n}\n.time-picker .dropdown .select-list {\n  width: 10em;\n  height: 10em;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.time-picker .dropdown ul {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.time-picker .dropdown ul.minutes,\n.time-picker .dropdown ul.seconds,\n.time-picker .dropdown ul.apms {\n  border-left: 1px solid #fff;\n}\n.time-picker .dropdown ul li {\n  text-align: center;\n  padding: 0.3em 0;\n  color: #161616;\n}\n.time-picker .dropdown ul li:not(.hint):hover {\n  background: rgba(0, 0, 0, 0.08);\n  color: #161616;\n  cursor: pointer;\n}\n.time-picker .dropdown ul li.active,\n.time-picker .dropdown ul li.active:hover {\n  background: #41B883;\n  color: #fff;\n}\n.time-picker .dropdown .hint {\n  color: #a5a5a5;\n  cursor: default;\n  font-size: 0.8em;\n}\n", "", {"version":3,"sources":["/./src/components/Timepicker.vue"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,mBAAmB;EACnB,eAAe;EACf,YAAY;EACZ,wBAAwB;EACxB,uBAAuB;CACxB;AACD;EACE,uBAAuB;CACxB;AACD;EACE,0BAA0B;EAC1B,YAAY;EACZ,cAAc;EACd,qBAAqB;EACrB,eAAe;CAChB;AACD;EACE,mBAAmB;EACnB,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,6BAAyB;EAAzB,8BAAyB;MAAzB,6BAAyB;UAAzB,yBAAyB;EACzB,yBAAwB;MAAxB,sBAAwB;UAAxB,wBAAwB;EACxB,0BAAoB;MAApB,uBAAoB;UAApB,oBAAoB;EACpB,OAAO;EACP,SAAS;EACT,UAAU;EACV,oBAAoB;EACpB,WAAW;EACX,iBAAiB;EACjB,iBAAiB;EACjB,uBAAuB;EACvB,aAAa;EACb,eAAe;EACf,mCAAmC;EACnC,mBAAmB;EACnB,mBAAmB;EAEnB,sBAAsB;CACvB;AACD;EACE,eAAe;EACf,gBAAgB;CACjB;AACD;EACE,WAAW;EACX,gBAAgB;EAChB,OAAO;EACP,QAAQ;EACR,SAAS;EACT,UAAU;CACX;AACD;EACE,mBAAmB;EACnB,WAAW;EACX,UAAU;EACV,QAAQ;EACR,iBAAiB;EACjB,0CAA0C;EAC1C,YAAY;EACZ,aAAa;EACb,oBAAoB;CACrB;AACD;EACE,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,+BAAsB;EAAtB,8BAAsB;MAAtB,0BAAsB;UAAtB,sBAAsB;EACtB,2BAAqB;MAArB,wBAAqB;UAArB,qBAAqB;EACrB,0BAA+B;MAA/B,uBAA+B;UAA/B,+BAA+B;CAChC;AACD;EACE,WAAW;EACX,UAAU;EACV,iBAAiB;EACjB,oBAAQ;MAAR,YAAQ;UAAR,QAAQ;EACR,mBAAmB;EACnB,iBAAiB;CAClB;AACD;;;EAGE,4BAA4B;CAC7B;AACD;EACE,mBAAmB;EACnB,iBAAiB;EACjB,eAAe;CAChB;AACD;EACE,gCAAgC;EAChC,eAAe;EACf,gBAAgB;CACjB;AACD;;EAEE,oBAAoB;EACpB,YAAY;CACb;AACD;EACE,eAAe;EACf,gBAAgB;EAChB,iBAAiB;CAClB","file":"Timepicker.vue","sourcesContent":[".time-picker {\n  display: inline-block;\n  position: relative;\n  font-size: 1em;\n  width: 10em;\n  font-family: sans-serif;\n  vertical-align: middle;\n}\n.time-picker * {\n  box-sizing: border-box;\n}\n.time-picker input.display-time {\n  border: 1px solid #d2d2d2;\n  width: 10em;\n  height: 2.2em;\n  padding: 0.3em 0.5em;\n  font-size: 1em;\n}\n.time-picker .clear-btn {\n  position: absolute;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  margin-top: -0.15em;\n  z-index: 3;\n  font-size: 1.1em;\n  line-height: 1em;\n  vertical-align: middle;\n  width: 1.3em;\n  color: #d2d2d2;\n  background: rgba(255, 255, 255, 0);\n  text-align: center;\n  font-style: normal;\n  -webkit-transition: color .2s;\n  transition: color .2s;\n}\n.time-picker .clear-btn:hover {\n  color: #797979;\n  cursor: pointer;\n}\n.time-picker .time-picker-overlay {\n  z-index: 2;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.time-picker .dropdown {\n  position: absolute;\n  z-index: 5;\n  top: 36px;\n  left: 0;\n  background: #fff;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.15);\n  width: 10em;\n  height: 10em;\n  font-weight: normal;\n}\n.time-picker .dropdown .select-list {\n  width: 10em;\n  height: 10em;\n  overflow: hidden;\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: stretch;\n  justify-content: space-between;\n}\n.time-picker .dropdown ul {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  flex: 1;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.time-picker .dropdown ul.minutes,\n.time-picker .dropdown ul.seconds,\n.time-picker .dropdown ul.apms {\n  border-left: 1px solid #fff;\n}\n.time-picker .dropdown ul li {\n  text-align: center;\n  padding: 0.3em 0;\n  color: #161616;\n}\n.time-picker .dropdown ul li:not(.hint):hover {\n  background: rgba(0, 0, 0, 0.08);\n  color: #161616;\n  cursor: pointer;\n}\n.time-picker .dropdown ul li.active,\n.time-picker .dropdown ul li.active:hover {\n  background: #41B883;\n  color: #fff;\n}\n.time-picker .dropdown .hint {\n  color: #a5a5a5;\n  cursor: default;\n  font-size: 0.8em;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _keys = __webpack_require__(145);
	
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
	
	  mounted: function mounted() {
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
	      this.$emit('vue-timepicker-update', fullValues);
	    },
	
	    updateTimeValue: function updateTimeValue(fullValues) {
	      if (!this.timeValue) {
	        // return the `fullValues` if `timeValue` is not set
	        this.$emit('change', { data: fullValues });
	        return;
	      }
	
	      this.muteWatch = true;
	
	      var self = this;
	      (0, _keys2.default)(this.timeValue).forEach(function (key) {
	        self.timeValue[key] = fullValues[key];
	      });
	
	      this.$nextTick(function () {
	        self.muteWatch = false;
	        self.$emit('change', { data: self.timeValue });
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

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(146), __esModule: true };

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(147);
	module.exports = __webpack_require__(22).Object.keys;

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(118)
	  , $keys    = __webpack_require__(102);
	
	__webpack_require__(148)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 149 */
/***/ (function(module, exports) {

	module.exports = "\n<span class=\"time-picker\">\n  <input class=\"display-time\" v-model=\"displayTime\" @click=\"toggleDropdown\" type=\"text\" readonly />\n  <span class=\"clear-btn\" v-if=\"!hideClearButton\" v-show=\"!showDropdown && showClearBtn()\" @click=\"clearTime\">&times;</span>\n  <div class=\"time-picker-overlay\" v-if=\"showDropdown\" @click=\"toggleDropdown\"></div>\n  <div class=\"dropdown\" v-show=\"showDropdown\">\n    <div class=\"select-list\">\n      <ul class=\"hours\">\n        <li class=\"hint\" v-text=\"hourType\"></li>\n        <li v-for=\"hr in hours\" v-text=\"hr\" :class=\"{active: hour === hr}\" @click=\"select('hour', hr)\"></li>\n      </ul>\n      <ul class=\"minutes\">\n        <li class=\"hint\" v-text=\"minuteType\"></li>\n        <li v-for=\"m in minutes\" v-text=\"m\" :class=\"{active: minute === m}\" @click=\"select('minute', m)\"></li>\n      </ul>\n      <ul class=\"seconds\" v-if=\"secondType\">\n        <li class=\"hint\" v-text=\"secondType\"></li>\n        <li v-for=\"s in seconds\" v-text=\"s\" :class=\"{active: second === s}\" @click=\"select('second', s)\"></li>\n      </ul>\n      <ul class=\"apms\" v-if=\"apmType\">\n        <li class=\"hint\" v-text=\"apmType\"></li>\n        <li v-for=\"a in apms\" v-text=\"a\" :class=\"{active: apm === a}\" @click=\"select('apm', a)\"></li>\n      </ul>\n    </div>\n  </div>\n</span>\n";

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(151)
	__vue_script__ = __webpack_require__(153)
	__vue_template__ = __webpack_require__(154)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/nuanfeng/Github/duiba-design/src/components/Daterangepicker.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(152);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/.0.21.0@css-loader/index.js?sourceMap!../../node_modules/.8.0.0@vue-loader/lib/style-rewriter.js?id=_v-45b52379&file=Daterangepicker.vue!../../node_modules/.2.2.3@less-loader/index.js!../../node_modules/.8.0.0@vue-loader/lib/selector.js?type=style&index=0!../../node_modules/.1.7.1@eslint-loader/index.js!../../node_modules/.1.7.1@eslint-loader/index.js!./Daterangepicker.vue", function() {
				var newContent = require("!!../../node_modules/.0.21.0@css-loader/index.js?sourceMap!../../node_modules/.8.0.0@vue-loader/lib/style-rewriter.js?id=_v-45b52379&file=Daterangepicker.vue!../../node_modules/.2.2.3@less-loader/index.js!../../node_modules/.8.0.0@vue-loader/lib/selector.js?type=style&index=0!../../node_modules/.1.7.1@eslint-loader/index.js!../../node_modules/.1.7.1@eslint-loader/index.js!./Daterangepicker.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".date-range {\n  position: relative;\n  border: 1px solid #ccc;\n  display: inline-block;\n  background-color: #fff;\n  height: 32px;\n  border-radius: 2px;\n}\n.date-range:hover {\n  border-color: #888;\n}\n.date-range .range-split {\n  display: inline-block;\n  vertical-align: top;\n  margin-top: 8px;\n  line-height: 16px;\n}\n.date-range .datepicker .form-control {\n  border: 0;\n  height: 32px;\n  line-height: 32px;\n}\n.date-range .date-range-error {\n  font-size: 12px;\n  color: #ff795c;\n  margin-top: 10px;\n  line-height: 1.5;\n  position: absolute;\n  bottom: -20px;\n  left: 0;\n}\n", "", {"version":3,"sources":["/./src/components/Daterangepicker.vue"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,uBAAuB;EACvB,sBAAsB;EACtB,uBAAuB;EACvB,aAAa;EACb,mBAAmB;CACpB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,sBAAsB;EACtB,oBAAoB;EACpB,gBAAgB;EAChB,kBAAkB;CACnB;AACD;EACE,UAAU;EACV,aAAa;EACb,kBAAkB;CACnB;AACD;EACE,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,iBAAiB;EACjB,mBAAmB;EACnB,cAAc;EACd,QAAQ;CACT","file":"Daterangepicker.vue","sourcesContent":[".date-range {\n  position: relative;\n  border: 1px solid #ccc;\n  display: inline-block;\n  background-color: #fff;\n  height: 32px;\n  border-radius: 2px;\n}\n.date-range:hover {\n  border-color: #888;\n}\n.date-range .range-split {\n  display: inline-block;\n  vertical-align: top;\n  margin-top: 8px;\n  line-height: 16px;\n}\n.date-range .datepicker .form-control {\n  border: 0;\n  height: 32px;\n  line-height: 32px;\n}\n.date-range .date-range-error {\n  font-size: 12px;\n  color: #ff795c;\n  margin-top: 10px;\n  line-height: 1.5;\n  position: absolute;\n  bottom: -20px;\n  left: 0;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Datepicker = __webpack_require__(81);
	
	var _Datepicker2 = _interopRequireDefault(_Datepicker);
	
	var _dateUtils = __webpack_require__(86);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div class="date-range">
	//     <datepicker :value.sync="myStart" :rangeflag="true" :on-change="selectDate('myStart')" placeholder="起始时间" :disabled-date="disabledDate" :width="width">
	//     </datepicker>
	//     <span class="range-split">-</span>
	//     <datepicker :value.sync="myEnd" :rangeflag="true" :on-change="selectDate('myEnd')" placeholder="结束时间" :disabled-date="disabledDate" :width="width">
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
	    myStart: function myStart() {
	      var startTime = new Date(this.myStart);
	      var endTime = new Date(this.myEnd);
	      if (startTime.getTime() > endTime.getTime()) {
	        this.myEnd = this.myStart;
	      }
	      this.$emit('update:start', this.myStart);
	    },
	    myEnd: function myEnd() {
	      var startTime = new Date(this.myStart);
	      var endTime = new Date(this.myEnd);
	      if (endTime.getTime() < startTime.getTime()) {
	        this.myStart = this.myEnd;
	      }
	      this.$emit('update:end', this.myEnd);
	    }
	  },
	
	  data: function data() {
	    return {
	      errorTip: '',
	      myStart: this.start,
	      myEnd: this.end
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
	        var startTime = new Date(_this.myStart);
	        var endTime = new Date(_this.myEnd);
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
	              _this.myEnd = (0, _dateUtils.formatDate)(endTime);
	            } else {
	              startTime.setDate(startTime.getDate() + (range - _this.range));
	              _this.myStart = (0, _dateUtils.formatDate)(startTime);
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

/***/ }),
/* 154 */
/***/ (function(module, exports) {

	module.exports = "\n<div class=\"date-range\">\n  <datepicker :value.sync=\"myStart\" :rangeflag=\"true\" :on-change=\"selectDate('myStart')\" placeholder=\"起始时间\" :disabled-date=\"disabledDate\" :width=\"width\">\n  </datepicker>\n  <span class=\"range-split\">-</span>\n  <datepicker :value.sync=\"myEnd\" :rangeflag=\"true\" :on-change=\"selectDate('myEnd')\" placeholder=\"结束时间\" :disabled-date=\"disabledDate\" :width=\"width\">\n  </datepicker>\n  <p class=\"date-range-error\" v-show=\"errorTip\">{{errorTip}}</p>\n</div>\n";

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(156)
	__vue_script__ = __webpack_require__(158)
	__vue_template__ = __webpack_require__(159)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/nuanfeng/Github/duiba-design/src/components/Select.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(157);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/.0.21.0@css-loader/index.js?sourceMap!../../node_modules/.8.0.0@vue-loader/lib/style-rewriter.js?id=_v-53a2a560&file=Select.vue!../../node_modules/.2.2.3@less-loader/index.js!../../node_modules/.8.0.0@vue-loader/lib/selector.js?type=style&index=0!../../node_modules/.1.7.1@eslint-loader/index.js!../../node_modules/.1.7.1@eslint-loader/index.js!./Select.vue", function() {
				var newContent = require("!!../../node_modules/.0.21.0@css-loader/index.js?sourceMap!../../node_modules/.8.0.0@vue-loader/lib/style-rewriter.js?id=_v-53a2a560&file=Select.vue!../../node_modules/.2.2.3@less-loader/index.js!../../node_modules/.8.0.0@vue-loader/lib/selector.js?type=style&index=0!../../node_modules/.1.7.1@eslint-loader/index.js!../../node_modules/.1.7.1@eslint-loader/index.js!./Select.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".select-group {\n  width: 195px;\n  position: relative;\n  display: inline-block;\n}\n.select-group.disabled .select-toggle,\n.select-group[disabled] .select-toggle {\n  color: #d8d8d8;\n  cursor: not-allowed;\n  background: #f4f4f4;\n  border-color: #ececec;\n}\n.select-toggle {\n  display: block;\n  border: 1px solid #ccc;\n  background-color: #fff;\n  line-height: 32px;\n  font-size: 14px;\n  color: #444;\n  padding: 0 26px 0 14px;\n  position: relative;\n  cursor: pointer;\n  border-radius: 2px;\n}\n.select-toggle .iconhandle {\n  color: #888;\n  font-size: 12px;\n  position: absolute;\n  right: 14px;\n}\n.select-toggle:hover {\n  border-color: #888;\n}\n.select-toggle:hover .iconhandle {\n  color: #444;\n}\n.select-menu {\n  border: 1px solid #dedede;\n  background-color: #fff;\n  width: 100%;\n  max-height: 180px;\n  overflow-y: auto;\n  box-sizing: border-box;\n  position: absolute;\n  left: 0;\n  top: 34px;\n  z-index: 9999;\n  border-radius: 0 0 4px 4px;\n}\n.select-menu li {\n  border-bottom: 1px solid #ccc;\n}\n.select-menu li:last-child {\n  border: 0;\n}\n.select-menu li.active a,\n.select-menu li.active .iconhandle {\n  color: #444;\n}\n.select-menu a {\n  display: block;\n  position: relative;\n  padding-left: 32px;\n  line-height: 32px;\n  font-size: 14px;\n  cursor: pointer;\n  color: #888;\n}\n.select-menu a:hover {\n  background-color: #f9f9f9;\n  color: #444;\n}\n.select-menu .iconhandle {\n  font-size: 12px;\n  position: absolute;\n  left: 14px;\n}\n", "", {"version":3,"sources":["/./src/components/Select.vue"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,sBAAsB;CACvB;AACD;;EAEE,eAAe;EACf,oBAAoB;EACpB,oBAAoB;EACpB,sBAAsB;CACvB;AACD;EACE,eAAe;EACf,uBAAuB;EACvB,uBAAuB;EACvB,kBAAkB;EAClB,gBAAgB;EAChB,YAAY;EACZ,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;EAChB,mBAAmB;CACpB;AACD;EACE,YAAY;EACZ,gBAAgB;EAChB,mBAAmB;EACnB,YAAY;CACb;AACD;EACE,mBAAmB;CACpB;AACD;EACE,YAAY;CACb;AACD;EACE,0BAA0B;EAC1B,uBAAuB;EACvB,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,uBAAuB;EACvB,mBAAmB;EACnB,QAAQ;EACR,UAAU;EACV,cAAc;EACd,2BAA2B;CAC5B;AACD;EACE,8BAA8B;CAC/B;AACD;EACE,UAAU;CACX;AACD;;EAEE,YAAY;CACb;AACD;EACE,eAAe;EACf,mBAAmB;EACnB,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,gBAAgB;EAChB,YAAY;CACb;AACD;EACE,0BAA0B;EAC1B,YAAY;CACb;AACD;EACE,gBAAgB;EAChB,mBAAmB;EACnB,WAAW;CACZ","file":"Select.vue","sourcesContent":[".select-group {\n  width: 195px;\n  position: relative;\n  display: inline-block;\n}\n.select-group.disabled .select-toggle,\n.select-group[disabled] .select-toggle {\n  color: #d8d8d8;\n  cursor: not-allowed;\n  background: #f4f4f4;\n  border-color: #ececec;\n}\n.select-toggle {\n  display: block;\n  border: 1px solid #ccc;\n  background-color: #fff;\n  line-height: 32px;\n  font-size: 14px;\n  color: #444;\n  padding: 0 26px 0 14px;\n  position: relative;\n  cursor: pointer;\n  border-radius: 2px;\n}\n.select-toggle .iconhandle {\n  color: #888;\n  font-size: 12px;\n  position: absolute;\n  right: 14px;\n}\n.select-toggle:hover {\n  border-color: #888;\n}\n.select-toggle:hover .iconhandle {\n  color: #444;\n}\n.select-menu {\n  border: 1px solid #dedede;\n  background-color: #fff;\n  width: 100%;\n  max-height: 180px;\n  overflow-y: auto;\n  box-sizing: border-box;\n  position: absolute;\n  left: 0;\n  top: 34px;\n  z-index: 9999;\n  border-radius: 0 0 4px 4px;\n}\n.select-menu li {\n  border-bottom: 1px solid #ccc;\n}\n.select-menu li:last-child {\n  border: 0;\n}\n.select-menu li.active a,\n.select-menu li.active .iconhandle {\n  color: #444;\n}\n.select-menu a {\n  display: block;\n  position: relative;\n  padding-left: 32px;\n  line-height: 32px;\n  font-size: 14px;\n  cursor: pointer;\n  color: #888;\n}\n.select-menu a:hover {\n  background-color: #f9f9f9;\n  color: #444;\n}\n.select-menu .iconhandle {\n  font-size: 12px;\n  position: absolute;\n  left: 14px;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

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
	    value: {},
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
	  mounted: function mounted() {
	    var _this = this;
	
	    var triger = this.$refs.trigger;
	    var container = this.$refs.container;
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
	        var val = this.idName ? first && first[this.idName] : first && first.id;
	        this.$emit('update:value', val);
	        return first;
	      }
	    }
	  },
	  methods: {
	    /**
	     * 选中某个值
	     */
	    select: function select(v) {
	      this.$emit('update:value', v);
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
	// <div class="select-group" :class="{open: show}" ref="container" :disabled="disabled">
	//   <a class="select-toggle" ref="trigger">
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

/***/ }),
/* 159 */
/***/ (function(module, exports) {

	module.exports = "\n<div class=\"select-group\" :class=\"{open: show}\" ref=\"container\" :disabled=\"disabled\">\n  <a class=\"select-toggle\" ref=\"trigger\">\n    {{selectItem && selectItem[labelName]}}\n    <i class=\"iconhandle\">&#xe618;</i>\n  </a>\n  <ul class=\"select-menu\" v-show=\"!disabled && show\">\n    <template v-if=\"options.length\">\n      <li v-for=\"option in options\" :id=\"option.id || option[idName]\" :class=\"{'active': isSelected(option)}\">\n        <a @mousedown.prevent=\"select(option.id || option[idName])\">\n          <i class=\"iconhandle\" v-show=\"isSelected(option)\">&#xe610;</i>\n          {{ option.label || option[labelName] }}\n        </a>\n      </li>\n    </template>\n  </ul>\n</div>\n";

/***/ })
/******/ ])
});
;
//# sourceMappingURL=duiba-design.js.map