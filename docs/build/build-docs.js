/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "docs/build";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _bodyDocs = __webpack_require__(7);
	
	var _bodyDocs2 = _interopRequireDefault(_bodyDocs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	new Vue({
	  el: 'body',
	
	  components: {
	    bodyDocs: _bodyDocs2.default
	  }
	}); /* global Vue */
	// import './assets/docs.less';

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(8)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(20)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/.npminstall/vue-loader/7.1.7/vue-loader/lib/selector.js?type=script&index=0!./../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./bodyDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/.npminstall/vue-loader/7.1.7/vue-loader/lib/selector.js?type=script&index=0!./../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./bodyDocs.vue","-!vue-html-loader!./../node_modules/.npminstall/vue-loader/7.1.7/vue-loader/lib/selector.js?type=template&index=0!./../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./bodyDocs.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/.npminstall/vue-loader/7.1.7/vue-loader/lib/selector.js?type=script&index=0!./../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./bodyDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/.npminstall/vue-loader/7.1.7/vue-loader/lib/selector.js?type=template&index=0!./../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./bodyDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Tip = __webpack_require__(9);
	
	var _Tip2 = _interopRequireDefault(_Tip);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
	    Tip: _Tip2.default
	  }
	};
	// </script>
	// <template>
	//   <div id="container">
	//     <tip></tip>
	//   </div>
	// </template>
	
	// <script>

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(10)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(19)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/.npminstall/vue-loader/7.1.7/vue-loader/lib/selector.js?type=script&index=0!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./Tip.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/.npminstall/vue-loader/7.1.7/vue-loader/lib/selector.js?type=script&index=0!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./Tip.vue","-!vue-html-loader!./../../node_modules/.npminstall/vue-loader/7.1.7/vue-loader/lib/selector.js?type=template&index=0!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./Tip.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/.npminstall/vue-loader/7.1.7/vue-loader/lib/selector.js?type=script&index=0!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./Tip.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/.npminstall/vue-loader/7.1.7/vue-loader/lib/selector.js?type=template&index=0!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./Tip.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Tip = __webpack_require__(11);
	
	var _Tip2 = _interopRequireDefault(_Tip);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
	    Tip: _Tip2.default
	  }
	};
	// </script>
	// <template>
	//   <div class="component-tip">
	//     <tip>
	//       This is a tip.
	//     </tip>
	//     <tip :dismissable="false">
	//       This is a tip can not close.
	//     </tip>
	//   </div>
	// </template>
	
	// <script>

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(12)
	module.exports = __webpack_require__(16)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(18)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/.npminstall/vue-loader/7.1.7/vue-loader/lib/selector.js?type=script&index=0!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./Tip.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/.npminstall/vue-loader/7.1.7/vue-loader/lib/selector.js?type=script&index=0!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./Tip.vue","-!vue-html-loader!./../../node_modules/.npminstall/vue-loader/7.1.7/vue-loader/lib/selector.js?type=template&index=0!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./Tip.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/.npminstall/vue-loader/7.1.7/vue-loader/lib/selector.js?type=script&index=0!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./Tip.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/.npminstall/vue-loader/7.1.7/vue-loader/lib/selector.js?type=template&index=0!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./Tip.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(13);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.21.0/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/7.1.7/vue-loader/lib/style-rewriter.js?id=_v-23ce939a&file=Tip.vue!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/7.1.7/vue-loader/lib/selector.js?type=style&index=0!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./Tip.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.21.0/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/7.1.7/vue-loader/lib/style-rewriter.js?id=_v-23ce939a&file=Tip.vue!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/7.1.7/vue-loader/lib/selector.js?type=style&index=0!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./../../node_modules/.npminstall/eslint-loader/1.6.1/eslint-loader/index.js!./Tip.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports
	
	
	// module
	exports.push([module.id, ".tip {\n  border: 1px solid #d2f0f0;\n  line-height: 1.5;\n  background: #f6fdfd;\n  position: relative;\n  padding: 6px 30px 6px 15px;\n  box-sizing: border-box;\n  font-size: 14px;\n}\n.tip .close {\n  position: absolute;\n  right: 10px;\n  cursor: pointer;\n  font-size: 12px;\n  color: #d8d8d8;\n}\n.tip .close:hover {\n  color: #444;\n}\n.tip a {\n  color: #29b6b0;\n  text-decoration: underline;\n}\n", ""]);
	
	// exports


/***/ },
/* 14 */
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
/* 15 */
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
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
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
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _coerceBoolean = __webpack_require__(17);
	
	var _coerceBoolean2 = _interopRequireDefault(_coerceBoolean);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    dismissable: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: true
	    },
	    show: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: true,
	      twoWay: true
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
	// .tip {
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
	// <template>
	//   <div v-show="show" class="tip">
	//     <i v-show="dismissable" class="iconhandle close" @click="close">&#xe609;</i>
	//     <slot></slot>
	//   </div>
	// </template>
	
	// <script>

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	// Attempt to convert a string value to a Boolean. Otherwise, return the value
	// without modification so Vue can throw a warning.
	exports.default = function (val) {
	  return typeof val !== 'string' ? val : val === 'true' ? true : val === 'false' ? false : val === 'null' ? false : val === 'undefined' ? false : val;
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "<div v-show=\"show\" class=\"tip\">\n    <i v-show=\"dismissable\" class=\"iconhandle close\" @click=\"close\">&#xe609;</i>\n    <slot></slot>\n  </div>";

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "<div class=\"component-tip\">\n    <tip>\n      This is a tip.\n    </tip>\n    <tip :dismissable=\"false\">\n      This is a tip can not close.\n    </tip>\n  </div>";

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "<div id=\"container\">\n    <tip></tip>\n  </div>";

/***/ }
/******/ ]);
//# sourceMappingURL=build-docs.js.map