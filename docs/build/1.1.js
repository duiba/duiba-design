webpackJsonp([1],Array(22).concat([
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./examples/alert.md": 23,
		"./examples/breadcrumb.md": 28,
		"./examples/button.md": 31,
		"./examples/checkbox.md": 35,
		"./examples/datepicker.md": 39,
		"./examples/fileupload.md": 45,
		"./examples/imageupload.md": 48,
		"./examples/messagebox.md": 54,
		"./examples/modal.md": 90,
		"./examples/pagination.md": 94,
		"./examples/richeditor.md": 98,
		"./examples/select.md": 102,
		"./examples/switch.md": 106,
		"./examples/table.md": 112,
		"./examples/tabs.md": 115,
		"./examples/timepicker.md": 118,
		"./examples/tooltip.md": 122
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 22;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(24);

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(25)
	__vue_template__ = __webpack_require__(27)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/cookfront/Sites/work/duiba-design/node_modules/vue-markdown-loader/.cache/alert-4.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(26);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../.npminstall/css-loader/0.21.0/css-loader/index.js?sourceMap!./../../.npminstall/vue-loader/8.0.0/vue-loader/lib/style-rewriter.js?id=_v-32ac6a08&file=alert-4.vue!./../../.npminstall/less-loader/2.2.3/less-loader/index.js!./../../.npminstall/vue-loader/8.0.0/vue-loader/lib/selector.js?type=style&index=0!./alert-4.vue", function() {
				var newContent = require("!!./../../.npminstall/css-loader/0.21.0/css-loader/index.js?sourceMap!./../../.npminstall/vue-loader/8.0.0/vue-loader/lib/style-rewriter.js?id=_v-32ac6a08&file=alert-4.vue!./../../.npminstall/less-loader/2.2.3/less-loader/index.js!./../../.npminstall/vue-loader/8.0.0/vue-loader/lib/selector.js?type=style&index=0!./alert-4.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, ".tip {\n  margin: 20px 0;\n}\n", "", {"version":3,"sources":["/./node_modules/vue-markdown-loader/.cache/alert-4.vue"],"names":[],"mappings":"AAAA;EACE,eAAe;CAChB","file":"alert-4.vue","sourcesContent":[".tip {\n  margin: 20px 0;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = "<section>\n<h2 id=\"alert-jing-gao\"><a class=\"header-anchor\" href=\"#alert-jing-gao\" aria-hidden=\"true\">¶</a> Alert 警告</h2>\n<p>用于页面中展示重要的提示信息。</p>\n<h3 id=\"ji-ben-yong-fa\"><a class=\"header-anchor\" href=\"#ji-ben-yong-fa\" aria-hidden=\"true\">¶</a> 基本用法</h3>\n<p>页面中的非浮层元素，不会自动消失。</p>\n<demo-block class=\"demo-box\">\n                      <div class=\"source\" slot=\"source\"><d-alert :closable=\"false\">\n  这是一个不能关闭的alert\n</d-alert>\n<d-alert>\n  这是一个可以关闭的alert\n</d-alert>\n</div>\n                      <p>Alert 组件提供目前就一种类型，后续有需求可以添加 <code>type</code> 属性。</p>\n\n                      <div class=\"highlight\" slot=\"highlight\"><pre><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-alert</span> <span class=\"hljs-attr\">:closable</span>=<span class=\"hljs-string\">\"false\"</span>&gt;</span>\n  这是一个不能关闭的alert\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-alert</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-alert</span>&gt;</span>\n  这是一个可以关闭的alert\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-alert</span>&gt;</span>\n</code></pre>\n</div></demo-block>\n<h3 id=\"attribute\"><a class=\"header-anchor\" href=\"#attribute\" aria-hidden=\"true\">¶</a> Attribute</h3>\n<table class=\"table\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>closable</td>\n<td>是否可关闭</td>\n<td>boolean</td>\n<td>—</td>\n<td>true</td>\n</tr>\n<tr>\n<td>show</td>\n<td>是否显示</td>\n<td>boolean</td>\n<td>—</td>\n<td>true</td>\n</tr>\n</tbody>\n</table>\n</section>";

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(29);

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_template__ = __webpack_require__(30)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/cookfront/Sites/work/duiba-design/node_modules/vue-markdown-loader/.cache/breadcrumb-2.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = "<section><h2 id=\"breadcrumb-mian-bao-xie\"><a class=\"header-anchor\" href=\"#breadcrumb-mian-bao-xie\" aria-hidden=\"true\">¶</a> Breadcrumb 面包屑</h2>\n<p>显示当前页面的路径，快速返回之前的任意页面。</p>\n<h3 id=\"ji-chu-yong-fa\"><a class=\"header-anchor\" href=\"#ji-chu-yong-fa\" aria-hidden=\"true\">¶</a> 基础用法</h3>\n<p>适用广泛的基础用法。</p>\n<demo-block class=\"demo-box\">\n                      <div class=\"source\" slot=\"source\"><d-breadcrumb>\n  <d-breadcrumb-item :to=\"{ path: '/' }\">首页</d-breadcrumb-item>\n  <d-breadcrumb-item>活动管理</d-breadcrumb-item>\n  <d-breadcrumb-item>活动列表</d-breadcrumb-item>\n  <d-breadcrumb-item>活动详情</d-breadcrumb-item>\n</d-breadcrumb>\n</div>\n                      <p>在<code>d-breadcrumb</code>中使用<code>d-breadcrumb-item</code>标签表示从首页开始的每一级。且提供了一个<code>separator</code>属性，在<code>d-breadcrumb</code>标签中设置它来决定分隔符。</p>\n\n                      <div class=\"highlight\" slot=\"highlight\"><pre><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-breadcrumb</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-breadcrumb-item</span> <span class=\"hljs-attr\">:to</span>=<span class=\"hljs-string\">\"{ path: '/' }\"</span>&gt;</span>首页<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-breadcrumb-item</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-breadcrumb-item</span>&gt;</span>活动管理<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-breadcrumb-item</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-breadcrumb-item</span>&gt;</span>活动列表<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-breadcrumb-item</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-breadcrumb-item</span>&gt;</span>活动详情<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-breadcrumb-item</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-breadcrumb</span>&gt;</span>\n</code></pre>\n</div></demo-block>\n<h3 id=\"breadcrumb-attributes\"><a class=\"header-anchor\" href=\"#breadcrumb-attributes\" aria-hidden=\"true\">¶</a> Breadcrumb Attributes</h3>\n<table class=\"table\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>separator</td>\n<td>分隔符</td>\n<td>string</td>\n<td>—</td>\n<td>iconfont的<code>&amp;#xe619;</code></td>\n</tr>\n</tbody>\n</table>\n<h3 id=\"breadcrumb-item-attributes\"><a class=\"header-anchor\" href=\"#breadcrumb-item-attributes\" aria-hidden=\"true\">¶</a> Breadcrumb Item Attributes</h3>\n<table class=\"table\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>to</td>\n<td>路由跳转对象，同 <code>vue-router</code> 的 <code>to</code></td>\n<td>string/object</td>\n<td>—</td>\n<td>—</td>\n</tr>\n</tbody>\n</table>\n</section>";

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(32);

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(33)
	__vue_template__ = __webpack_require__(34)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/cookfront/Sites/work/duiba-design/node_modules/vue-markdown-loader/.cache/button-3.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 33 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template><section>
	// <h2 id="button-an-niu"><a class="header-anchor" href="#button-an-niu" aria-hidden="true">¶</a> Button 按钮</h2>
	// <p>常用的操作按钮。</p>
	// <h3 id="ji-chu-yong-fa"><a class="header-anchor" href="#ji-chu-yong-fa" aria-hidden="true">¶</a> 基础用法</h3>
	// <p>基础的按钮用法。</p>
	// <demo-block class="demo-box">
	//                       <div class="source" slot="source"><d-button>默认按钮</d-button>
	// <d-button type="primary">主要按钮</d-button>
	// <d-button type="text">文字按钮</d-button>
	// </div>
	//                       <p>Button 组件默认提供7种主题，由<code>type</code>属性来定义，默认为<code>default</code>。</p>
	
	//                       <div class="highlight" slot="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">d-button</span>&gt;</span>默认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">d-button</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">d-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span>&gt;</span>主要按钮<span class="hljs-tag">&lt;/<span class="hljs-name">d-button</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">d-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span>&gt;</span>文字按钮<span class="hljs-tag">&lt;/<span class="hljs-name">d-button</span>&gt;</span>
	// </code></pre>
	// </div></demo-block>
	// <h3 id="jin-yong-zhuang-tai"><a class="header-anchor" href="#jin-yong-zhuang-tai" aria-hidden="true">¶</a> 禁用状态</h3>
	// <p>按钮不可用状态。</p>
	// <demo-block class="demo-box">
	//                       <div class="source" slot="source"><d-button :disabled="true">默认按钮</d-button>
	// <d-button type="primary" :disabled="true">主要按钮</d-button>
	// <d-button type="text" :disabled="true">文字按钮</d-button>
	// <d-button icon="" :disabled="true">批量删除</d-button>
	// </div>
	//                       <p>你可以使用<code>disabled</code>属性来定义按钮是否可用，它接受一个<code>Boolean</code>值。</p>
	
	//                       <div class="highlight" slot="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">d-button</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">"true"</span>&gt;</span>默认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">d-button</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">d-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">"true"</span>&gt;</span>主要按钮<span class="hljs-tag">&lt;/<span class="hljs-name">d-button</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">d-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">"true"</span>&gt;</span>文字按钮<span class="hljs-tag">&lt;/<span class="hljs-name">d-button</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">d-button</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"&amp;#xe61d;"</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">"true"</span>&gt;</span>批量删除<span class="hljs-tag">&lt;/<span class="hljs-name">d-button</span>&gt;</span>
	// </code></pre>
	// </div></demo-block>
	// <h3 id="yan-se-qing-xiang"><a class="header-anchor" href="#yan-se-qing-xiang" aria-hidden="true">¶</a> 颜色倾向</h3>
	// <p>不同的颜色倾向代表不同的提示。</p>
	// <demo-block class="demo-box">
	//                       <div class="source" slot="source"><d-button type="warning">警告按钮</d-button>
	// </div>
	//                       <p>目前只提供了 <code>warning</code> 样式，显示为橘色，如有其他颜色需求可以添加不同的type。</p>
	
	//                       <div class="highlight" slot="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">d-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"warning"</span>&gt;</span>警告按钮<span class="hljs-tag">&lt;/<span class="hljs-name">d-button</span>&gt;</span>
	// </code></pre>
	// </div></demo-block>
	// <h3 id="tu-biao-an-niu"><a class="header-anchor" href="#tu-biao-an-niu" aria-hidden="true">¶</a> 图标按钮</h3>
	// <p>带图标的按钮可增强辨识度(有文字)或节省空间(无文字)。</p>
	// <demo-block class="demo-box">
	//                       <div class="source" slot="source"><d-button icon="">批量删除</d-button>
	// <d-button icon="" type="primary">批量删除</d-button>
	// <d-button icon=""></d-button>
	// </div>
	//                       <p>设置<code>icon</code>属性为对应的iconfont值即可。</p>
	
	//                       <div class="highlight" slot="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">d-button</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"&amp;#xe61d;"</span>&gt;</span>批量删除<span class="hljs-tag">&lt;/<span class="hljs-name">d-button</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">d-button</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"&amp;#xe61d;"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span>&gt;</span>批量删除<span class="hljs-tag">&lt;/<span class="hljs-name">d-button</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">d-button</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"&amp;#xe61d;"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">d-button</span>&gt;</span>
	// </code></pre>
	// </div></demo-block>
	// <h3 id="bu-tong-chi-cun"><a class="header-anchor" href="#bu-tong-chi-cun" aria-hidden="true">¶</a> 不同尺寸</h3>
	// <p>Button组件提供除了默认值以外，还有一种大尺寸按钮，可以在不同场景下选择合适的按钮尺寸。</p>
	// <demo-block class="demo-box">
	//                       <div class="source" slot="source"><d-button type="primary" size="large">大型按钮</d-button>
	// <d-button type="primary">正常按钮</d-button>
	// </div>
	//                       <p>额外的尺寸：<code>large</code>，通过设置<code>size</code>属性来配置它们。</p>
	
	//                       <div class="highlight" slot="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">d-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"large"</span>&gt;</span>大型按钮<span class="hljs-tag">&lt;/<span class="hljs-name">d-button</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">d-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span>&gt;</span>正常按钮<span class="hljs-tag">&lt;/<span class="hljs-name">d-button</span>&gt;</span>
	// </code></pre>
	// </div></demo-block>
	// <h3 id="an-niu-dian-ji-hui-diao"><a class="header-anchor" href="#an-niu-dian-ji-hui-diao" aria-hidden="true">¶</a> 按钮点击回调</h3>
	// <demo-block class="demo-box">
	//                       <div class="source" slot="source"><d-button @click="handleClick">普通按钮</d-button>
	// </div>
	//                       <p>可以设置一个按钮点击的回调函数。</p>
	
	//                       <div class="highlight" slot="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">d-button</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"handleClick"</span>&gt;</span>普通按钮<span class="hljs-tag">&lt;/<span class="hljs-name">d-button</span>&gt;</span>
	// </code></pre>
	// </div></demo-block>
	// <h3 id="attributes"><a class="header-anchor" href="#attributes" aria-hidden="true">¶</a> Attributes</h3>
	// <table class="table"><thead>
	// <tr>
	// <th>参数</th>
	// <th>说明</th>
	// <th>类型</th>
	// <th>可选值</th>
	// <th>默认值</th>
	// </tr>
	// </thead>
	// <tbody>
	// <tr>
	// <td>size</td>
	// <td>尺寸</td>
	// <td>string</td>
	// <td>large</td>
	// <td>—</td>
	// </tr>
	// <tr>
	// <td>type</td>
	// <td>类型</td>
	// <td>string</td>
	// <td>primary,warning,text</td>
	// <td>—</td>
	// </tr>
	// <tr>
	// <td>disabled</td>
	// <td>禁用</td>
	// <td>boolean</td>
	// <td>true, false</td>
	// <td>false</td>
	// </tr>
	// <tr>
	// <td>icon</td>
	// <td>图标，已有的图标库中的图标名</td>
	// <td>string</td>
	// <td>—</td>
	// <td>—</td>
	// </tr>
	// </tbody>
	// </table>
	// </section></template>
	
	// <script>
	exports.default = {
	  methods: {
	    handleClick: function handleClick(evt) {
	      alert(evt);
	    }
	  }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = "<section>\n<h2 id=\"button-an-niu\"><a class=\"header-anchor\" href=\"#button-an-niu\" aria-hidden=\"true\">¶</a> Button 按钮</h2>\n<p>常用的操作按钮。</p>\n<h3 id=\"ji-chu-yong-fa\"><a class=\"header-anchor\" href=\"#ji-chu-yong-fa\" aria-hidden=\"true\">¶</a> 基础用法</h3>\n<p>基础的按钮用法。</p>\n<demo-block class=\"demo-box\">\n                      <div class=\"source\" slot=\"source\"><d-button>默认按钮</d-button>\n<d-button type=\"primary\">主要按钮</d-button>\n<d-button type=\"text\">文字按钮</d-button>\n</div>\n                      <p>Button 组件默认提供7种主题，由<code>type</code>属性来定义，默认为<code>default</code>。</p>\n\n                      <div class=\"highlight\" slot=\"highlight\"><pre><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-button</span>&gt;</span>默认按钮<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span>&gt;</span>主要按钮<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"text\"</span>&gt;</span>文字按钮<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-button</span>&gt;</span>\n</code></pre>\n</div></demo-block>\n<h3 id=\"jin-yong-zhuang-tai\"><a class=\"header-anchor\" href=\"#jin-yong-zhuang-tai\" aria-hidden=\"true\">¶</a> 禁用状态</h3>\n<p>按钮不可用状态。</p>\n<demo-block class=\"demo-box\">\n                      <div class=\"source\" slot=\"source\"><d-button :disabled=\"true\">默认按钮</d-button>\n<d-button type=\"primary\" :disabled=\"true\">主要按钮</d-button>\n<d-button type=\"text\" :disabled=\"true\">文字按钮</d-button>\n<d-button icon=\"\" :disabled=\"true\">批量删除</d-button>\n</div>\n                      <p>你可以使用<code>disabled</code>属性来定义按钮是否可用，它接受一个<code>Boolean</code>值。</p>\n\n                      <div class=\"highlight\" slot=\"highlight\"><pre><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-button</span> <span class=\"hljs-attr\">:disabled</span>=<span class=\"hljs-string\">\"true\"</span>&gt;</span>默认按钮<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span> <span class=\"hljs-attr\">:disabled</span>=<span class=\"hljs-string\">\"true\"</span>&gt;</span>主要按钮<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"text\"</span> <span class=\"hljs-attr\">:disabled</span>=<span class=\"hljs-string\">\"true\"</span>&gt;</span>文字按钮<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-button</span> <span class=\"hljs-attr\">icon</span>=<span class=\"hljs-string\">\"&amp;#xe61d;\"</span> <span class=\"hljs-attr\">:disabled</span>=<span class=\"hljs-string\">\"true\"</span>&gt;</span>批量删除<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-button</span>&gt;</span>\n</code></pre>\n</div></demo-block>\n<h3 id=\"yan-se-qing-xiang\"><a class=\"header-anchor\" href=\"#yan-se-qing-xiang\" aria-hidden=\"true\">¶</a> 颜色倾向</h3>\n<p>不同的颜色倾向代表不同的提示。</p>\n<demo-block class=\"demo-box\">\n                      <div class=\"source\" slot=\"source\"><d-button type=\"warning\">警告按钮</d-button>\n</div>\n                      <p>目前只提供了 <code>warning</code> 样式，显示为橘色，如有其他颜色需求可以添加不同的type。</p>\n\n                      <div class=\"highlight\" slot=\"highlight\"><pre><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"warning\"</span>&gt;</span>警告按钮<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-button</span>&gt;</span>\n</code></pre>\n</div></demo-block>\n<h3 id=\"tu-biao-an-niu\"><a class=\"header-anchor\" href=\"#tu-biao-an-niu\" aria-hidden=\"true\">¶</a> 图标按钮</h3>\n<p>带图标的按钮可增强辨识度(有文字)或节省空间(无文字)。</p>\n<demo-block class=\"demo-box\">\n                      <div class=\"source\" slot=\"source\"><d-button icon=\"\">批量删除</d-button>\n<d-button icon=\"\" type=\"primary\">批量删除</d-button>\n<d-button icon=\"\"></d-button>\n</div>\n                      <p>设置<code>icon</code>属性为对应的iconfont值即可。</p>\n\n                      <div class=\"highlight\" slot=\"highlight\"><pre><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-button</span> <span class=\"hljs-attr\">icon</span>=<span class=\"hljs-string\">\"&amp;#xe61d;\"</span>&gt;</span>批量删除<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-button</span> <span class=\"hljs-attr\">icon</span>=<span class=\"hljs-string\">\"&amp;#xe61d;\"</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span>&gt;</span>批量删除<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-button</span> <span class=\"hljs-attr\">icon</span>=<span class=\"hljs-string\">\"&amp;#xe61d;\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-button</span>&gt;</span>\n</code></pre>\n</div></demo-block>\n<h3 id=\"bu-tong-chi-cun\"><a class=\"header-anchor\" href=\"#bu-tong-chi-cun\" aria-hidden=\"true\">¶</a> 不同尺寸</h3>\n<p>Button组件提供除了默认值以外，还有一种大尺寸按钮，可以在不同场景下选择合适的按钮尺寸。</p>\n<demo-block class=\"demo-box\">\n                      <div class=\"source\" slot=\"source\"><d-button type=\"primary\" size=\"large\">大型按钮</d-button>\n<d-button type=\"primary\">正常按钮</d-button>\n</div>\n                      <p>额外的尺寸：<code>large</code>，通过设置<code>size</code>属性来配置它们。</p>\n\n                      <div class=\"highlight\" slot=\"highlight\"><pre><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span> <span class=\"hljs-attr\">size</span>=<span class=\"hljs-string\">\"large\"</span>&gt;</span>大型按钮<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span>&gt;</span>正常按钮<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-button</span>&gt;</span>\n</code></pre>\n</div></demo-block>\n<h3 id=\"an-niu-dian-ji-hui-diao\"><a class=\"header-anchor\" href=\"#an-niu-dian-ji-hui-diao\" aria-hidden=\"true\">¶</a> 按钮点击回调</h3>\n<demo-block class=\"demo-box\">\n                      <div class=\"source\" slot=\"source\"><d-button @click=\"handleClick\">普通按钮</d-button>\n</div>\n                      <p>可以设置一个按钮点击的回调函数。</p>\n\n                      <div class=\"highlight\" slot=\"highlight\"><pre><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-button</span> <span class=\"hljs-attr\">@click</span>=<span class=\"hljs-string\">\"handleClick\"</span>&gt;</span>普通按钮<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-button</span>&gt;</span>\n</code></pre>\n</div></demo-block>\n<h3 id=\"attributes\"><a class=\"header-anchor\" href=\"#attributes\" aria-hidden=\"true\">¶</a> Attributes</h3>\n<table class=\"table\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>size</td>\n<td>尺寸</td>\n<td>string</td>\n<td>large</td>\n<td>—</td>\n</tr>\n<tr>\n<td>type</td>\n<td>类型</td>\n<td>string</td>\n<td>primary,warning,text</td>\n<td>—</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>禁用</td>\n<td>boolean</td>\n<td>true, false</td>\n<td>false</td>\n</tr>\n<tr>\n<td>icon</td>\n<td>图标，已有的图标库中的图标名</td>\n<td>string</td>\n<td>—</td>\n<td>—</td>\n</tr>\n</tbody>\n</table>\n</section>";

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(36);

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(37)
	__vue_template__ = __webpack_require__(38)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/cookfront/Sites/work/duiba-design/node_modules/vue-markdown-loader/.cache/checkbox-1.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 37 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template><section><h2 id="checkbox-duo-xuan-kuang"><a class="header-anchor" href="#checkbox-duo-xuan-kuang" aria-hidden="true">¶</a> Checkbox 多选框</h2>
	
	// <h3 id="ji-chu-yong-fa"><a class="header-anchor" href="#ji-chu-yong-fa" aria-hidden="true">¶</a> 基础用法</h3>
	// <p>单独使用可以表示两种状态之间的切换</p>
	// <demo-block class="demo-box">
	//                       <div class="source" slot="source"><d-checkbox :checked.sync="checked">备选项</d-checkbox>
	
	
	// </div>
	//                       <p>在<code>d-checkbox</code>元素中双向绑定<code>checked</code>属性即可。</p>
	
	//                       <div class="highlight" slot="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">d-checkbox</span> <span class="hljs-attr">:checked.sync</span>=<span class="hljs-string">"checked"</span>&gt;</span>备选项<span class="hljs-tag">&lt;/<span class="hljs-name">d-checkbox</span>&gt;</span>
	
	// <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
	//   <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
	//     data() {
	//       <span class="hljs-keyword">return</span> {
	//         <span class="hljs-attr">checked</span>: <span class="hljs-literal">true</span>
	//       };
	//     }
	//   };
	// </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
	// </code></pre>
	// </div></demo-block>
	// <h3 id="jin-yong-zhuang-tai"><a class="header-anchor" href="#jin-yong-zhuang-tai" aria-hidden="true">¶</a> 禁用状态</h3>
	// <p>禁用状态复选框不可点击</p>
	// <demo-block class="demo-box">
	//                       <div class="source" slot="source"><d-checkbox :checked.sync="checked2" disabled>备选项</d-checkbox>
	
	
	// </div>
	//                       <p>在<code>d-checkbox</code>元素上设置<code>disabled</code>属性即可。</p>
	
	//                       <div class="highlight" slot="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">d-checkbox</span> <span class="hljs-attr">:checked.sync</span>=<span class="hljs-string">"checked2"</span> <span class="hljs-attr">disabled</span>&gt;</span>备选项<span class="hljs-tag">&lt;/<span class="hljs-name">d-checkbox</span>&gt;</span>
	
	// <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
	//   <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
	//     data() {
	//       <span class="hljs-keyword">return</span> {
	//         <span class="hljs-attr">checked2</span>: <span class="hljs-literal">true</span>
	//       };
	//     }
	//   };
	// </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
	// </code></pre>
	// </div></demo-block>
	// <h3 id="duo-xuan-kuang-zu"><a class="header-anchor" href="#duo-xuan-kuang-zu" aria-hidden="true">¶</a> 多选框组</h3>
	// <p>适用于多个复选框绑定到同一个数组的情景，通过是否复选来表示这一组选项中选中的项。</p>
	// <demo-block class="demo-box">
	//                       <div class="source" slot="source"><d-checkbox-group :value.sync="checkList">
	//   <d-checkbox :name="1">选项1</d-checkbox>
	//   <d-checkbox :name="2">选项2</d-checkbox>
	//   <d-checkbox :name="3">选项3</d-checkbox>
	//   <d-checkbox :name="4" disabled>选项4</d-checkbox>
	//   <d-checkbox :name="5" disabled>选项5</d-checkbox>
	// </d-checkbox-group>
	
	
	// </div>
	//                       <p><code>checkbox-group</code>元素能把多个 checkbox 管理为一组，只需要在 Group 中使用绑定<code>value</code>属性即可，<code>name</code>与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。</p>
	
	//                       <div class="highlight" slot="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">d-checkbox-group</span> <span class="hljs-attr">:value.sync</span>=<span class="hljs-string">"checkList"</span>&gt;</span>
	//   <span class="hljs-tag">&lt;<span class="hljs-name">d-checkbox</span> <span class="hljs-attr">:name</span>=<span class="hljs-string">"1"</span>&gt;</span>选项1<span class="hljs-tag">&lt;/<span class="hljs-name">d-checkbox</span>&gt;</span>
	//   <span class="hljs-tag">&lt;<span class="hljs-name">d-checkbox</span> <span class="hljs-attr">:name</span>=<span class="hljs-string">"2"</span>&gt;</span>选项2<span class="hljs-tag">&lt;/<span class="hljs-name">d-checkbox</span>&gt;</span>
	//   <span class="hljs-tag">&lt;<span class="hljs-name">d-checkbox</span> <span class="hljs-attr">:name</span>=<span class="hljs-string">"3"</span>&gt;</span>选项3<span class="hljs-tag">&lt;/<span class="hljs-name">d-checkbox</span>&gt;</span>
	//   <span class="hljs-tag">&lt;<span class="hljs-name">d-checkbox</span> <span class="hljs-attr">:name</span>=<span class="hljs-string">"4"</span> <span class="hljs-attr">disabled</span>&gt;</span>选项4<span class="hljs-tag">&lt;/<span class="hljs-name">d-checkbox</span>&gt;</span>
	//   <span class="hljs-tag">&lt;<span class="hljs-name">d-checkbox</span> <span class="hljs-attr">:name</span>=<span class="hljs-string">"5"</span> <span class="hljs-attr">disabled</span>&gt;</span>选项5<span class="hljs-tag">&lt;/<span class="hljs-name">d-checkbox</span>&gt;</span>
	// <span class="hljs-tag">&lt;/<span class="hljs-name">d-checkbox-group</span>&gt;</span>
	
	// <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
	//   <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
	//     data () {
	//       <span class="hljs-keyword">return</span> {
	//         <span class="hljs-attr">checkList</span>: [<span class="hljs-string">'1'</span>,<span class="hljs-string">'5'</span>]
	//       };
	//     }
	//   };
	// </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
	// </code></pre>
	// </div></demo-block>
	// <h3 id="checkbox-attributes"><a class="header-anchor" href="#checkbox-attributes" aria-hidden="true">¶</a> Checkbox Attributes</h3>
	// <table class="table"><thead>
	// <tr>
	// <th>参数</th>
	// <th>说明</th>
	// <th>类型</th>
	// <th>可选值</th>
	// <th>默认值</th>
	// </tr>
	// </thead>
	// <tbody>
	// <tr>
	// <td>name</td>
	// <td>用于checkbox group时，区分每个复选框</td>
	// <td>string,number</td>
	// <td>—</td>
	// <td>—</td>
	// </tr>
	// <tr>
	// <td>disabled</td>
	// <td>按钮禁用</td>
	// <td>boolean</td>
	// <td>—</td>
	// <td>false</td>
	// </tr>
	// <tr>
	// <td>checked</td>
	// <td>当前是否勾选</td>
	// <td>boolean</td>
	// <td>—</td>
	// <td>false</td>
	// </tr>
	// </tbody>
	// </table>
	// <h3 id="checkbox-group-attributes"><a class="header-anchor" href="#checkbox-group-attributes" aria-hidden="true">¶</a> Checkbox-group Attributes</h3>
	// <table class="table"><thead>
	// <tr>
	// <th>参数</th>
	// <th>说明</th>
	// <th>类型</th>
	// <th>可选值</th>
	// <th>默认值</th>
	// </tr>
	// </thead>
	// <tbody>
	// <tr>
	// <td>value</td>
	// <td>checkbox group组的值</td>
	// <td>Array</td>
	// <td>—</td>
	// <td>—</td>
	// </tr>
	// </tbody>
	// </table>
	// <h3 id="checkbox-group-events"><a class="header-anchor" href="#checkbox-group-events" aria-hidden="true">¶</a> Checkbox-group Events</h3>
	// <table class="table"><thead>
	// <tr>
	// <th>事件名称</th>
	// <th>说明</th>
	// <th>回调参数</th>
	// </tr>
	// </thead>
	// <tbody>
	// <tr>
	// <td>change</td>
	// <td>当绑定值变化时触发的事件</td>
	// <td>event 事件对象</td>
	// </tr>
	// </tbody>
	// </table>
	// </section></template>
	
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      checked: true,
	      checked2: true,
	      checkList: [1, 5]
	    };
	  }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = "<section><h2 id=\"checkbox-duo-xuan-kuang\"><a class=\"header-anchor\" href=\"#checkbox-duo-xuan-kuang\" aria-hidden=\"true\">¶</a> Checkbox 多选框</h2>\n\n<h3 id=\"ji-chu-yong-fa\"><a class=\"header-anchor\" href=\"#ji-chu-yong-fa\" aria-hidden=\"true\">¶</a> 基础用法</h3>\n<p>单独使用可以表示两种状态之间的切换</p>\n<demo-block class=\"demo-box\">\n                      <div class=\"source\" slot=\"source\"><d-checkbox :checked.sync=\"checked\">备选项</d-checkbox>\n\n\n</div>\n                      <p>在<code>d-checkbox</code>元素中双向绑定<code>checked</code>属性即可。</p>\n\n                      <div class=\"highlight\" slot=\"highlight\"><pre><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-checkbox</span> <span class=\"hljs-attr\">:checked.sync</span>=<span class=\"hljs-string\">\"checked\"</span>&gt;</span>备选项<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-checkbox</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span><span class=\"javascript\">\n  <span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> {\n    data() {\n      <span class=\"hljs-keyword\">return</span> {\n        <span class=\"hljs-attr\">checked</span>: <span class=\"hljs-literal\">true</span>\n      };\n    }\n  };\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</code></pre>\n</div></demo-block>\n<h3 id=\"jin-yong-zhuang-tai\"><a class=\"header-anchor\" href=\"#jin-yong-zhuang-tai\" aria-hidden=\"true\">¶</a> 禁用状态</h3>\n<p>禁用状态复选框不可点击</p>\n<demo-block class=\"demo-box\">\n                      <div class=\"source\" slot=\"source\"><d-checkbox :checked.sync=\"checked2\" disabled>备选项</d-checkbox>\n\n\n</div>\n                      <p>在<code>d-checkbox</code>元素上设置<code>disabled</code>属性即可。</p>\n\n                      <div class=\"highlight\" slot=\"highlight\"><pre><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-checkbox</span> <span class=\"hljs-attr\">:checked.sync</span>=<span class=\"hljs-string\">\"checked2\"</span> <span class=\"hljs-attr\">disabled</span>&gt;</span>备选项<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-checkbox</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span><span class=\"javascript\">\n  <span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> {\n    data() {\n      <span class=\"hljs-keyword\">return</span> {\n        <span class=\"hljs-attr\">checked2</span>: <span class=\"hljs-literal\">true</span>\n      };\n    }\n  };\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</code></pre>\n</div></demo-block>\n<h3 id=\"duo-xuan-kuang-zu\"><a class=\"header-anchor\" href=\"#duo-xuan-kuang-zu\" aria-hidden=\"true\">¶</a> 多选框组</h3>\n<p>适用于多个复选框绑定到同一个数组的情景，通过是否复选来表示这一组选项中选中的项。</p>\n<demo-block class=\"demo-box\">\n                      <div class=\"source\" slot=\"source\"><d-checkbox-group :value.sync=\"checkList\">\n  <d-checkbox :name=\"1\">选项1</d-checkbox>\n  <d-checkbox :name=\"2\">选项2</d-checkbox>\n  <d-checkbox :name=\"3\">选项3</d-checkbox>\n  <d-checkbox :name=\"4\" disabled>选项4</d-checkbox>\n  <d-checkbox :name=\"5\" disabled>选项5</d-checkbox>\n</d-checkbox-group>\n\n\n</div>\n                      <p><code>checkbox-group</code>元素能把多个 checkbox 管理为一组，只需要在 Group 中使用绑定<code>value</code>属性即可，<code>name</code>与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。</p>\n\n                      <div class=\"highlight\" slot=\"highlight\"><pre><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-checkbox-group</span> <span class=\"hljs-attr\">:value.sync</span>=<span class=\"hljs-string\">\"checkList\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-checkbox</span> <span class=\"hljs-attr\">:name</span>=<span class=\"hljs-string\">\"1\"</span>&gt;</span>选项1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-checkbox</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-checkbox</span> <span class=\"hljs-attr\">:name</span>=<span class=\"hljs-string\">\"2\"</span>&gt;</span>选项2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-checkbox</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-checkbox</span> <span class=\"hljs-attr\">:name</span>=<span class=\"hljs-string\">\"3\"</span>&gt;</span>选项3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-checkbox</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-checkbox</span> <span class=\"hljs-attr\">:name</span>=<span class=\"hljs-string\">\"4\"</span> <span class=\"hljs-attr\">disabled</span>&gt;</span>选项4<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-checkbox</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-checkbox</span> <span class=\"hljs-attr\">:name</span>=<span class=\"hljs-string\">\"5\"</span> <span class=\"hljs-attr\">disabled</span>&gt;</span>选项5<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-checkbox</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-checkbox-group</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span><span class=\"javascript\">\n  <span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> {\n    data () {\n      <span class=\"hljs-keyword\">return</span> {\n        <span class=\"hljs-attr\">checkList</span>: [<span class=\"hljs-string\">'1'</span>,<span class=\"hljs-string\">'5'</span>]\n      };\n    }\n  };\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</code></pre>\n</div></demo-block>\n<h3 id=\"checkbox-attributes\"><a class=\"header-anchor\" href=\"#checkbox-attributes\" aria-hidden=\"true\">¶</a> Checkbox Attributes</h3>\n<table class=\"table\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>name</td>\n<td>用于checkbox group时，区分每个复选框</td>\n<td>string,number</td>\n<td>—</td>\n<td>—</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>按钮禁用</td>\n<td>boolean</td>\n<td>—</td>\n<td>false</td>\n</tr>\n<tr>\n<td>checked</td>\n<td>当前是否勾选</td>\n<td>boolean</td>\n<td>—</td>\n<td>false</td>\n</tr>\n</tbody>\n</table>\n<h3 id=\"checkbox-group-attributes\"><a class=\"header-anchor\" href=\"#checkbox-group-attributes\" aria-hidden=\"true\">¶</a> Checkbox-group Attributes</h3>\n<table class=\"table\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>value</td>\n<td>checkbox group组的值</td>\n<td>Array</td>\n<td>—</td>\n<td>—</td>\n</tr>\n</tbody>\n</table>\n<h3 id=\"checkbox-group-events\"><a class=\"header-anchor\" href=\"#checkbox-group-events\" aria-hidden=\"true\">¶</a> Checkbox-group Events</h3>\n<table class=\"table\"><thead>\n<tr>\n<th>事件名称</th>\n<th>说明</th>\n<th>回调参数</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>change</td>\n<td>当绑定值变化时触发的事件</td>\n<td>event 事件对象</td>\n</tr>\n</tbody>\n</table>\n</section>";

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(40);

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(41)
	__vue_script__ = __webpack_require__(43)
	__vue_template__ = __webpack_require__(44)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/cookfront/Sites/work/duiba-design/node_modules/vue-markdown-loader/.cache/datepicker-7.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(42);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../.npminstall/css-loader/0.21.0/css-loader/index.js?sourceMap!./../../.npminstall/vue-loader/8.0.0/vue-loader/lib/style-rewriter.js?id=_v-370e6ebd&file=datepicker-7.vue!./../../.npminstall/less-loader/2.2.3/less-loader/index.js!./../../.npminstall/vue-loader/8.0.0/vue-loader/lib/selector.js?type=style&index=0!./datepicker-7.vue", function() {
				var newContent = require("!!./../../.npminstall/css-loader/0.21.0/css-loader/index.js?sourceMap!./../../.npminstall/vue-loader/8.0.0/vue-loader/lib/style-rewriter.js?id=_v-370e6ebd&file=datepicker-7.vue!./../../.npminstall/less-loader/2.2.3/less-loader/index.js!./../../.npminstall/vue-loader/8.0.0/vue-loader/lib/selector.js?type=style&index=0!./datepicker-7.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, ".form-control {\n  display: block;\n  width: 100%;\n  height: 34px;\n  line-height: 34px;\n  box-sizing: border-box;\n  padding: 0 10px;\n  border: 1px solid #ccc;\n  border-radius: 2px;\n  font-size: 14px;\n}\n.form-control:focus {\n  outline: 0;\n  border-color: #a8e7e7;\n}\n", "", {"version":3,"sources":["/./node_modules/vue-markdown-loader/.cache/datepicker-7.vue"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,uBAAuB;EACvB,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;CACjB;AACD;EACE,WAAW;EACX,sBAAsB;CACvB","file":"datepicker-7.vue","sourcesContent":[".form-control {\n  display: block;\n  width: 100%;\n  height: 34px;\n  line-height: 34px;\n  box-sizing: border-box;\n  padding: 0 10px;\n  border: 1px solid #ccc;\n  border-radius: 2px;\n  font-size: 14px;\n}\n.form-control:focus {\n  outline: 0;\n  border-color: #a8e7e7;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 43 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template><section>
	
	// <h2 id="datepicker-ri-qi-xuan-ze-qi"><a class="header-anchor" href="#datepicker-ri-qi-xuan-ze-qi" aria-hidden="true">¶</a> DatePicker 日期选择器</h2>
	// <p>用于选择或输入日期。</p>
	// <h3 id="ji-chu-yong-fa"><a class="header-anchor" href="#ji-chu-yong-fa" aria-hidden="true">¶</a> 基础用法</h3>
	// <p>最基础的选择天。</p>
	// <demo-block class="demo-box">
	//                       <div class="source" slot="source"><d-datepicker :value.sync="date" placeholder="请选择时间"></d-datepicker>
	
	
	// </div>
	//                       <p>基本用法只需双向绑定<code>value</code>属性即可，输出格式为<code>yyyy-MM-dd</code>，你也可以传入<code>format</code>属性为自己想要的输出格式。</p>
	
	//                       <div class="highlight" slot="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">d-datepicker</span> <span class="hljs-attr">:value.sync</span>=<span class="hljs-string">"date"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请选择时间"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">d-datepicker</span>&gt;</span>
	
	// <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
	// <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
	//   data() {
	//     <span class="hljs-keyword">return</span> {
	//       <span class="hljs-attr">date</span>: <span class="hljs-string">''</span>
	//     };
	//   }
	// };
	// </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
	// </code></pre>
	// </div></demo-block>
	// <h3 id="jin-yong-ri-qi"><a class="header-anchor" href="#jin-yong-ri-qi" aria-hidden="true">¶</a> 禁用日期</h3>
	// <p>你可以选择禁用某些日期，比如今天以前。</p>
	// <demo-block class="demo-box">
	//                       <div class="source" slot="source"><d-datepicker :value.sync="date" placeholder="请选择时间" :disabled-date="disabledDate"></d-datepicker>
	
	
	// </div>
	//                       <p>传入一个<code>disabledDate</code>的函数，来处理禁用日期逻辑，这个处理函数接受当前日期为参数。</p>
	
	//                       <div class="highlight" slot="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">d-datepicker</span> <span class="hljs-attr">:value.sync</span>=<span class="hljs-string">"date"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请选择时间"</span> <span class="hljs-attr">:disabled-date</span>=<span class="hljs-string">"disabledDate"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">d-datepicker</span>&gt;</span>
	
	// <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
	// <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
	//   data() {
	//     <span class="hljs-keyword">return</span> {
	//       <span class="hljs-attr">date</span>: <span class="hljs-string">''</span>
	//     };
	//   },
	
	//   <span class="hljs-attr">methods</span>: {
	//     <span class="hljs-attr">disabledDate</span>: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">date</span>) </span>{
	//       <span class="hljs-keyword">var</span> now = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>();
	//       <span class="hljs-keyword">var</span> currHour = now.getHours();
	//       now.setHours(<span class="hljs-number">0</span>);
	//       date.setHours(currHour);
	//       <span class="hljs-keyword">return</span> date.getTime() &lt;= now.getTime();
	//     }
	//   }
	// };
	// </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
	// </code></pre>
	// </div></demo-block>
	// <h3 id="shi-jian-xuan-ze"><a class="header-anchor" href="#shi-jian-xuan-ze" aria-hidden="true">¶</a> 时间选择</h3>
	// <p>精确到时的时间选择。</p>
	// <demo-block class="demo-box">
	//                       <div class="source" slot="source"><d-datepicker :value.sync="date" placeholder="请选择时间" :disabled-date="disabledDate" format="yyyy-MM-dd hh:ii" time=""></d-datepicker>
	
	
	// </div>
	//                       <p>时间精确到时，也就是整点时间。传入一个<code>time</code>属性即可。</p>
	
	//                       <div class="highlight" slot="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">d-datepicker</span> <span class="hljs-attr">:value.sync</span>=<span class="hljs-string">"date"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请选择时间"</span> <span class="hljs-attr">:disabled-date</span>=<span class="hljs-string">"disabledDate"</span> <span class="hljs-attr">format</span>=<span class="hljs-string">"yyyy-MM-dd hh:ii"</span> <span class="hljs-attr">time</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">d-datepicker</span>&gt;</span>
	
	// <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
	// <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
	//   data() {
	//     <span class="hljs-keyword">return</span> {
	//       <span class="hljs-attr">date</span>: <span class="hljs-string">''</span>
	//     };
	//   },
	
	//   <span class="hljs-attr">methods</span>: {
	//     <span class="hljs-attr">disabledDate</span>: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">date</span>) </span>{
	//       <span class="hljs-keyword">var</span> now = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>();
	//       <span class="hljs-keyword">var</span> currHour = now.getHours();
	//       now.setHours(<span class="hljs-number">0</span>);
	//       date.setHours(currHour);
	//       <span class="hljs-keyword">return</span> date.getTime() &lt;= now.getTime();
	//     }
	//   }
	// };
	// </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
	// </code></pre>
	// </div></demo-block>
	// <h3 id="fen-xuan-ze"><a class="header-anchor" href="#fen-xuan-ze" aria-hidden="true">¶</a> 分选择</h3>
	// <p>可以选择精确到分的时间。</p>
	// <demo-block class="demo-box">
	//                       <div class="source" slot="source"><d-datepicker :value.sync="date" placeholder="请选择时间" :disabled-date="disabledDate" format="yyyy-MM-dd hh:ii" time="" minute=""></d-datepicker>
	
	
	// </div>
	//                       <p>时间精确到分。需传入一个<code>time</code>和<code>minute</code>属性。</p>
	
	//                       <div class="highlight" slot="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">d-datepicker</span> <span class="hljs-attr">:value.sync</span>=<span class="hljs-string">"date"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请选择时间"</span> <span class="hljs-attr">:disabled-date</span>=<span class="hljs-string">"disabledDate"</span> <span class="hljs-attr">format</span>=<span class="hljs-string">"yyyy-MM-dd hh:ii"</span> <span class="hljs-attr">time</span> <span class="hljs-attr">minute</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">d-datepicker</span>&gt;</span>
	
	// <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
	// <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
	//   data() {
	//     <span class="hljs-keyword">return</span> {
	//       <span class="hljs-attr">date</span>: <span class="hljs-string">''</span>
	//     };
	//   },
	
	//   <span class="hljs-attr">methods</span>: {
	//     <span class="hljs-attr">disabledDate</span>: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">date</span>) </span>{
	//       <span class="hljs-keyword">var</span> now = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>();
	//       <span class="hljs-keyword">var</span> currHour = now.getHours();
	//       now.setHours(<span class="hljs-number">0</span>);
	//       date.setHours(currHour);
	//       <span class="hljs-keyword">return</span> date.getTime() &lt;= now.getTime();
	//     }
	//   }
	// };
	// </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
	// </code></pre>
	// </div></demo-block>
	// <h3 id="shi-jian-qu-jian"><a class="header-anchor" href="#shi-jian-qu-jian" aria-hidden="true">¶</a> 时间区间</h3>
	// <p>可以选择一个时间区间。</p>
	// <demo-block class="demo-box">
	//                       <div class="source" slot="source"><d-daterangepicker :start.sync="start" :end.sync="end" placeholder="请选择时间" :error-show="true" :range="7"></d-daterangepicker>
	
	
	// </div>
	//                       <p>可以使用<code>d-daterangepicker</code>元素显示一个时间区间。</p>
	
	//                       <div class="highlight" slot="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">d-daterangepicker</span> <span class="hljs-attr">:start.sync</span>=<span class="hljs-string">"start"</span> <span class="hljs-attr">:end.sync</span>=<span class="hljs-string">"end"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请选择时间"</span> <span class="hljs-attr">:error-show</span>=<span class="hljs-string">"true"</span> <span class="hljs-attr">:range</span>=<span class="hljs-string">"7"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">d-daterangepicker</span>&gt;</span>
	
	// <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
	// <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
	//   data() {
	//     <span class="hljs-keyword">return</span> {
	//       <span class="hljs-attr">start</span>: <span class="hljs-string">''</span>,
	//       <span class="hljs-attr">end</span>: <span class="hljs-string">''</span>
	//     };
	//   }
	// };
	// </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
	// </code></pre>
	// </div></demo-block>
	// <h3 id="datepicker-attributes"><a class="header-anchor" href="#datepicker-attributes" aria-hidden="true">¶</a> Datepicker Attributes</h3>
	// <table class="table"><thead>
	// <tr>
	// <th>参数</th>
	// <th>说明</th>
	// <th>类型</th>
	// <th>可选值</th>
	// <th>默认值</th>
	// </tr>
	// </thead>
	// <tbody>
	// <tr>
	// <td>value</td>
	// <td>选中的日期值</td>
	// <td>string</td>
	// <td>—</td>
	// <td>-</td>
	// </tr>
	// <tr>
	// <td>format</td>
	// <td>日期输出格式</td>
	// <td>string</td>
	// <td>—</td>
	// <td>yyyy-MM-dd</td>
	// </tr>
	// <tr>
	// <td>disabledDate</td>
	// <td>禁用日期逻辑函数</td>
	// <td>Function</td>
	// <td>—</td>
	// <td>-</td>
	// </tr>
	// <tr>
	// <td>placeholder</td>
	// <td>placeholder</td>
	// <td>string</td>
	// <td>—</td>
	// <td>-</td>
	// </tr>
	// <tr>
	// <td>time</td>
	// <td>是否可以选中时间</td>
	// <td>boolean</td>
	// <td>—</td>
	// <td>false</td>
	// </tr>
	// <tr>
	// <td>minute</td>
	// <td>是否可以选中分</td>
	// <td>boolean</td>
	// <td>—</td>
	// <td>false</td>
	// </tr>
	// <tr>
	// <td>rangeflag</td>
	// <td>是否为日期间隔选择</td>
	// <td>boolean</td>
	// <td>—</td>
	// <td>false</td>
	// </tr>
	// </tbody>
	// </table>
	// <h3 id="daterangepicker-attributes"><a class="header-anchor" href="#daterangepicker-attributes" aria-hidden="true">¶</a> Daterangepicker Attributes</h3>
	// <p>部分属性同上面的<code>Datepicker</code>的属性。</p>
	// <table class="table"><thead>
	// <tr>
	// <th>参数</th>
	// <th>说明</th>
	// <th>类型</th>
	// <th>可选值</th>
	// <th>默认值</th>
	// </tr>
	// </thead>
	// <tbody>
	// <tr>
	// <td>start</td>
	// <td>选中的开始日期</td>
	// <td>string</td>
	// <td>—</td>
	// <td>今天</td>
	// </tr>
	// <tr>
	// <td>end</td>
	// <td>选中的结束日期</td>
	// <td>string</td>
	// <td>—</td>
	// <td>今天</td>
	// </tr>
	// <tr>
	// <td>range</td>
	// <td>最多选择的日期间隔，比如7天</td>
	// <td>number</td>
	// <td>—</td>
	// <td>-</td>
	// </tr>
	// <tr>
	// <td>errorShow</td>
	// <td>是否显示错误提示</td>
	// <td>boolean</td>
	// <td>—</td>
	// <td>false</td>
	// </tr>
	// </tbody>
	// </table>
	// </section></template>
	// <style lang="less">
	// .form-control {
	//   display: block;
	//   width: 100%;
	//   height: 34px;
	//   line-height: 34px;
	//   box-sizing: border-box;
	//   padding: 0 10px;
	//   border: 1px solid #ccc;
	//   border-radius: 2px;
	//   font-size: 14px;
	
	//   &:focus {
	//     outline: 0;
	//     border-color: #a8e7e7;
	//   }
	// }
	// </style>
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      date: '',
	      start: '',
	      end: ''
	    };
	  },
	
	
	  methods: {
	    disabledDate: function disabledDate(date) {
	      var now = new Date();
	      var currHour = now.getHours();
	      now.setHours(0);
	      date.setHours(currHour);
	      return date.getTime() <= now.getTime();
	    }
	  }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = "<section>\n\n<h2 id=\"datepicker-ri-qi-xuan-ze-qi\"><a class=\"header-anchor\" href=\"#datepicker-ri-qi-xuan-ze-qi\" aria-hidden=\"true\">¶</a> DatePicker 日期选择器</h2>\n<p>用于选择或输入日期。</p>\n<h3 id=\"ji-chu-yong-fa\"><a class=\"header-anchor\" href=\"#ji-chu-yong-fa\" aria-hidden=\"true\">¶</a> 基础用法</h3>\n<p>最基础的选择天。</p>\n<demo-block class=\"demo-box\">\n                      <div class=\"source\" slot=\"source\"><d-datepicker :value.sync=\"date\" placeholder=\"请选择时间\"></d-datepicker>\n\n\n</div>\n                      <p>基本用法只需双向绑定<code>value</code>属性即可，输出格式为<code>yyyy-MM-dd</code>，你也可以传入<code>format</code>属性为自己想要的输出格式。</p>\n\n                      <div class=\"highlight\" slot=\"highlight\"><pre><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-datepicker</span> <span class=\"hljs-attr\">:value.sync</span>=<span class=\"hljs-string\">\"date\"</span> <span class=\"hljs-attr\">placeholder</span>=<span class=\"hljs-string\">\"请选择时间\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-datepicker</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span><span class=\"javascript\">\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> {\n  data() {\n    <span class=\"hljs-keyword\">return</span> {\n      <span class=\"hljs-attr\">date</span>: <span class=\"hljs-string\">''</span>\n    };\n  }\n};\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</code></pre>\n</div></demo-block>\n<h3 id=\"jin-yong-ri-qi\"><a class=\"header-anchor\" href=\"#jin-yong-ri-qi\" aria-hidden=\"true\">¶</a> 禁用日期</h3>\n<p>你可以选择禁用某些日期，比如今天以前。</p>\n<demo-block class=\"demo-box\">\n                      <div class=\"source\" slot=\"source\"><d-datepicker :value.sync=\"date\" placeholder=\"请选择时间\" :disabled-date=\"disabledDate\"></d-datepicker>\n\n\n</div>\n                      <p>传入一个<code>disabledDate</code>的函数，来处理禁用日期逻辑，这个处理函数接受当前日期为参数。</p>\n\n                      <div class=\"highlight\" slot=\"highlight\"><pre><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-datepicker</span> <span class=\"hljs-attr\">:value.sync</span>=<span class=\"hljs-string\">\"date\"</span> <span class=\"hljs-attr\">placeholder</span>=<span class=\"hljs-string\">\"请选择时间\"</span> <span class=\"hljs-attr\">:disabled-date</span>=<span class=\"hljs-string\">\"disabledDate\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-datepicker</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span><span class=\"javascript\">\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> {\n  data() {\n    <span class=\"hljs-keyword\">return</span> {\n      <span class=\"hljs-attr\">date</span>: <span class=\"hljs-string\">''</span>\n    };\n  },\n\n  <span class=\"hljs-attr\">methods</span>: {\n    <span class=\"hljs-attr\">disabledDate</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\">date</span>) </span>{\n      <span class=\"hljs-keyword\">var</span> now = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>();\n      <span class=\"hljs-keyword\">var</span> currHour = now.getHours();\n      now.setHours(<span class=\"hljs-number\">0</span>);\n      date.setHours(currHour);\n      <span class=\"hljs-keyword\">return</span> date.getTime() &lt;= now.getTime();\n    }\n  }\n};\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</code></pre>\n</div></demo-block>\n<h3 id=\"shi-jian-xuan-ze\"><a class=\"header-anchor\" href=\"#shi-jian-xuan-ze\" aria-hidden=\"true\">¶</a> 时间选择</h3>\n<p>精确到时的时间选择。</p>\n<demo-block class=\"demo-box\">\n                      <div class=\"source\" slot=\"source\"><d-datepicker :value.sync=\"date\" placeholder=\"请选择时间\" :disabled-date=\"disabledDate\" format=\"yyyy-MM-dd hh:ii\" time=\"\"></d-datepicker>\n\n\n</div>\n                      <p>时间精确到时，也就是整点时间。传入一个<code>time</code>属性即可。</p>\n\n                      <div class=\"highlight\" slot=\"highlight\"><pre><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-datepicker</span> <span class=\"hljs-attr\">:value.sync</span>=<span class=\"hljs-string\">\"date\"</span> <span class=\"hljs-attr\">placeholder</span>=<span class=\"hljs-string\">\"请选择时间\"</span> <span class=\"hljs-attr\">:disabled-date</span>=<span class=\"hljs-string\">\"disabledDate\"</span> <span class=\"hljs-attr\">format</span>=<span class=\"hljs-string\">\"yyyy-MM-dd hh:ii\"</span> <span class=\"hljs-attr\">time</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-datepicker</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span><span class=\"javascript\">\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> {\n  data() {\n    <span class=\"hljs-keyword\">return</span> {\n      <span class=\"hljs-attr\">date</span>: <span class=\"hljs-string\">''</span>\n    };\n  },\n\n  <span class=\"hljs-attr\">methods</span>: {\n    <span class=\"hljs-attr\">disabledDate</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\">date</span>) </span>{\n      <span class=\"hljs-keyword\">var</span> now = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>();\n      <span class=\"hljs-keyword\">var</span> currHour = now.getHours();\n      now.setHours(<span class=\"hljs-number\">0</span>);\n      date.setHours(currHour);\n      <span class=\"hljs-keyword\">return</span> date.getTime() &lt;= now.getTime();\n    }\n  }\n};\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</code></pre>\n</div></demo-block>\n<h3 id=\"fen-xuan-ze\"><a class=\"header-anchor\" href=\"#fen-xuan-ze\" aria-hidden=\"true\">¶</a> 分选择</h3>\n<p>可以选择精确到分的时间。</p>\n<demo-block class=\"demo-box\">\n                      <div class=\"source\" slot=\"source\"><d-datepicker :value.sync=\"date\" placeholder=\"请选择时间\" :disabled-date=\"disabledDate\" format=\"yyyy-MM-dd hh:ii\" time=\"\" minute=\"\"></d-datepicker>\n\n\n</div>\n                      <p>时间精确到分。需传入一个<code>time</code>和<code>minute</code>属性。</p>\n\n                      <div class=\"highlight\" slot=\"highlight\"><pre><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-datepicker</span> <span class=\"hljs-attr\">:value.sync</span>=<span class=\"hljs-string\">\"date\"</span> <span class=\"hljs-attr\">placeholder</span>=<span class=\"hljs-string\">\"请选择时间\"</span> <span class=\"hljs-attr\">:disabled-date</span>=<span class=\"hljs-string\">\"disabledDate\"</span> <span class=\"hljs-attr\">format</span>=<span class=\"hljs-string\">\"yyyy-MM-dd hh:ii\"</span> <span class=\"hljs-attr\">time</span> <span class=\"hljs-attr\">minute</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-datepicker</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span><span class=\"javascript\">\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> {\n  data() {\n    <span class=\"hljs-keyword\">return</span> {\n      <span class=\"hljs-attr\">date</span>: <span class=\"hljs-string\">''</span>\n    };\n  },\n\n  <span class=\"hljs-attr\">methods</span>: {\n    <span class=\"hljs-attr\">disabledDate</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\">date</span>) </span>{\n      <span class=\"hljs-keyword\">var</span> now = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>();\n      <span class=\"hljs-keyword\">var</span> currHour = now.getHours();\n      now.setHours(<span class=\"hljs-number\">0</span>);\n      date.setHours(currHour);\n      <span class=\"hljs-keyword\">return</span> date.getTime() &lt;= now.getTime();\n    }\n  }\n};\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</code></pre>\n</div></demo-block>\n<h3 id=\"shi-jian-qu-jian\"><a class=\"header-anchor\" href=\"#shi-jian-qu-jian\" aria-hidden=\"true\">¶</a> 时间区间</h3>\n<p>可以选择一个时间区间。</p>\n<demo-block class=\"demo-box\">\n                      <div class=\"source\" slot=\"source\"><d-daterangepicker :start.sync=\"start\" :end.sync=\"end\" placeholder=\"请选择时间\" :error-show=\"true\" :range=\"7\"></d-daterangepicker>\n\n\n</div>\n                      <p>可以使用<code>d-daterangepicker</code>元素显示一个时间区间。</p>\n\n                      <div class=\"highlight\" slot=\"highlight\"><pre><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-daterangepicker</span> <span class=\"hljs-attr\">:start.sync</span>=<span class=\"hljs-string\">\"start\"</span> <span class=\"hljs-attr\">:end.sync</span>=<span class=\"hljs-string\">\"end\"</span> <span class=\"hljs-attr\">placeholder</span>=<span class=\"hljs-string\">\"请选择时间\"</span> <span class=\"hljs-attr\">:error-show</span>=<span class=\"hljs-string\">\"true\"</span> <span class=\"hljs-attr\">:range</span>=<span class=\"hljs-string\">\"7\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-daterangepicker</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span><span class=\"javascript\">\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> {\n  data() {\n    <span class=\"hljs-keyword\">return</span> {\n      <span class=\"hljs-attr\">start</span>: <span class=\"hljs-string\">''</span>,\n      <span class=\"hljs-attr\">end</span>: <span class=\"hljs-string\">''</span>\n    };\n  }\n};\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</code></pre>\n</div></demo-block>\n<h3 id=\"datepicker-attributes\"><a class=\"header-anchor\" href=\"#datepicker-attributes\" aria-hidden=\"true\">¶</a> Datepicker Attributes</h3>\n<table class=\"table\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>value</td>\n<td>选中的日期值</td>\n<td>string</td>\n<td>—</td>\n<td>-</td>\n</tr>\n<tr>\n<td>format</td>\n<td>日期输出格式</td>\n<td>string</td>\n<td>—</td>\n<td>yyyy-MM-dd</td>\n</tr>\n<tr>\n<td>disabledDate</td>\n<td>禁用日期逻辑函数</td>\n<td>Function</td>\n<td>—</td>\n<td>-</td>\n</tr>\n<tr>\n<td>placeholder</td>\n<td>placeholder</td>\n<td>string</td>\n<td>—</td>\n<td>-</td>\n</tr>\n<tr>\n<td>time</td>\n<td>是否可以选中时间</td>\n<td>boolean</td>\n<td>—</td>\n<td>false</td>\n</tr>\n<tr>\n<td>minute</td>\n<td>是否可以选中分</td>\n<td>boolean</td>\n<td>—</td>\n<td>false</td>\n</tr>\n<tr>\n<td>rangeflag</td>\n<td>是否为日期间隔选择</td>\n<td>boolean</td>\n<td>—</td>\n<td>false</td>\n</tr>\n</tbody>\n</table>\n<h3 id=\"daterangepicker-attributes\"><a class=\"header-anchor\" href=\"#daterangepicker-attributes\" aria-hidden=\"true\">¶</a> Daterangepicker Attributes</h3>\n<p>部分属性同上面的<code>Datepicker</code>的属性。</p>\n<table class=\"table\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>start</td>\n<td>选中的开始日期</td>\n<td>string</td>\n<td>—</td>\n<td>今天</td>\n</tr>\n<tr>\n<td>end</td>\n<td>选中的结束日期</td>\n<td>string</td>\n<td>—</td>\n<td>今天</td>\n</tr>\n<tr>\n<td>range</td>\n<td>最多选择的日期间隔，比如7天</td>\n<td>number</td>\n<td>—</td>\n<td>-</td>\n</tr>\n<tr>\n<td>errorShow</td>\n<td>是否显示错误提示</td>\n<td>boolean</td>\n<td>—</td>\n<td>false</td>\n</tr>\n</tbody>\n</table>\n</section>";

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(46);

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_template__ = __webpack_require__(47)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/cookfront/Sites/work/duiba-design/node_modules/vue-markdown-loader/.cache/fileupload-6.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = "<section><h2 id=\"fileupload-wen-jian-shang-chuan\"><a class=\"header-anchor\" href=\"#fileupload-wen-jian-shang-chuan\" aria-hidden=\"true\">¶</a> Fileupload 文件上传</h2>\n<p>用于上传文件：图片、excel等，可以对其进行封装实现图片上传功能等。</p>\n<h3 id=\"ji-chu-yong-fa\"><a class=\"header-anchor\" href=\"#ji-chu-yong-fa\" aria-hidden=\"true\">¶</a> 基础用法</h3>\n<demo-block class=\"demo-box\">\n                      <div class=\"source\" slot=\"source\"><d-fileupload name=\"file\" post-action=\"/upyun/adminUploadImage\" put-action=\"/upyun/adminUploadImage\"></d-fileupload>\n</div>\n                      <p>具体请看<a href=\"https://github.com/lian-yue/vue-upload-component/\">vue-upload-component</a></p>\n\n                      <div class=\"highlight\" slot=\"highlight\"><pre><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-fileupload</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"file\"</span> <span class=\"hljs-attr\">post-action</span>=<span class=\"hljs-string\">\"/upyun/adminUploadImage\"</span> <span class=\"hljs-attr\">put-action</span>=<span class=\"hljs-string\">\"/upyun/adminUploadImage\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-fileupload</span>&gt;</span>\n</code></pre>\n</div></demo-block>\n</section>";

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(49);

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(50)
	__vue_script__ = __webpack_require__(52)
	__vue_template__ = __webpack_require__(53)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/cookfront/Sites/work/duiba-design/node_modules/vue-markdown-loader/.cache/imageupload-5.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(51);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../.npminstall/css-loader/0.21.0/css-loader/index.js?sourceMap!./../../.npminstall/vue-loader/8.0.0/vue-loader/lib/style-rewriter.js?id=_v-89593906&file=imageupload-5.vue!./../../.npminstall/less-loader/2.2.3/less-loader/index.js!./../../.npminstall/vue-loader/8.0.0/vue-loader/lib/selector.js?type=style&index=0!./imageupload-5.vue", function() {
				var newContent = require("!!./../../.npminstall/css-loader/0.21.0/css-loader/index.js?sourceMap!./../../.npminstall/vue-loader/8.0.0/vue-loader/lib/style-rewriter.js?id=_v-89593906&file=imageupload-5.vue!./../../.npminstall/less-loader/2.2.3/less-loader/index.js!./../../.npminstall/vue-loader/8.0.0/vue-loader/lib/selector.js?type=style&index=0!./imageupload-5.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, ".multi-images {\n  overflow: hidden;\n}\n.multi-images img {\n  width: 214px;\n  height: 100px;\n}\n.multi-images .add-image-btn {\n  width: 214px;\n  font-size: 40px;\n  line-height: 100px;\n}\n", "", {"version":3,"sources":["/./node_modules/vue-markdown-loader/.cache/imageupload-5.vue"],"names":[],"mappings":"AAAA;EACE,iBAAiB;CAClB;AACD;EACE,aAAa;EACb,cAAc;CACf;AACD;EACE,aAAa;EACb,gBAAgB;EAChB,mBAAmB;CACpB","file":"imageupload-5.vue","sourcesContent":[".multi-images {\n  overflow: hidden;\n}\n.multi-images img {\n  width: 214px;\n  height: 100px;\n}\n.multi-images .add-image-btn {\n  width: 214px;\n  font-size: 40px;\n  line-height: 100px;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 52 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template><section>
	
	// <h2 id="imageupload-tu-pian-shang-chuan"><a class="header-anchor" href="#imageupload-tu-pian-shang-chuan" aria-hidden="true">¶</a> ImageUpload 图片上传</h2>
	// <p>用于图片上传。</p>
	// <h3 id="ji-chu-yong-fa"><a class="header-anchor" href="#ji-chu-yong-fa" aria-hidden="true">¶</a> 基础用法</h3>
	// <p>单张图片上传的用法。</p>
	// <demo-block class="demo-box">
	//                       <div class="source" slot="source"><d-imageupload upload-url="/upload/image" :value.sync="imageUrl" :width="100">
	//   <p slot="upload-tip">
	//     尺寸为100*100像素，格式为jpg、png，图片大小不可大于1M。
	//   </p>
	// </d-imageupload>
	// </div>
	//                       <p>允许上传单张图片。</p>
	
	//                       <div class="highlight" slot="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">d-imageupload</span> <span class="hljs-attr">upload-url</span>=<span class="hljs-string">"/upload/image"</span> <span class="hljs-attr">:value.sync</span>=<span class="hljs-string">"imageUrl"</span> <span class="hljs-attr">:width</span>=<span class="hljs-string">"100"</span>&gt;</span>
	//   <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"upload-tip"</span>&gt;</span>
	//     尺寸为100*100像素，格式为jpg、png，图片大小不可大于1M。
	//   <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
	// <span class="hljs-tag">&lt;/<span class="hljs-name">d-imageupload</span>&gt;</span>
	// </code></pre>
	// </div></demo-block>
	// <h3 id="duo-tu-shang-chuan"><a class="header-anchor" href="#duo-tu-shang-chuan" aria-hidden="true">¶</a> 多图上传</h3>
	// <p>多张图片上传。</p>
	// <demo-block class="demo-box">
	//                       <div class="source" slot="source"><d-multi-imageupload class="multi-images" upload-url="/upload/image" :values.sync="images" :width="640">
	// </d-multi-imageupload>
	// </div>
	//                       <p>上传多张图片。</p>
	
	//                       <div class="highlight" slot="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">d-multi-imageupload</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"multi-images"</span> <span class="hljs-attr">upload-url</span>=<span class="hljs-string">"/upload/image"</span> <span class="hljs-attr">:values.sync</span>=<span class="hljs-string">"images"</span> <span class="hljs-attr">:width</span>=<span class="hljs-string">"640"</span>&gt;</span>
	// <span class="hljs-tag">&lt;/<span class="hljs-name">d-multi-imageupload</span>&gt;</span>
	// </code></pre>
	// </div></demo-block>
	// <h3 id="imageupload-attributes"><a class="header-anchor" href="#imageupload-attributes" aria-hidden="true">¶</a> ImageUpload Attributes</h3>
	// <table class="table"><thead>
	// <tr>
	// <th>参数</th>
	// <th>说明</th>
	// <th>类型</th>
	// <th>可选值</th>
	// <th>默认值</th>
	// </tr>
	// </thead>
	// <tbody>
	// <tr>
	// <td>uploadUrl</td>
	// <td>图片上传接口地址</td>
	// <td>String</td>
	// <td>—</td>
	// <td>-</td>
	// </tr>
	// <tr>
	// <td>value</td>
	// <td>上传的图片url</td>
	// <td>String</td>
	// <td>—</td>
	// <td>-</td>
	// </tr>
	// <tr>
	// <td>width</td>
	// <td>上传的图片宽度</td>
	// <td>Number</td>
	// <td>—</td>
	// <td>-</td>
	// </tr>
	// <tr>
	// <td>height</td>
	// <td>上传的图片高度</td>
	// <td>Number</td>
	// <td>—</td>
	// <td>-</td>
	// </tr>
	// <tr>
	// <td>size</td>
	// <td>上传的图片大小（单位为：B）</td>
	// <td>Number</td>
	// <td>—</td>
	// <td>1024 * 1024</td>
	// </tr>
	// <tr>
	// <td>extensions</td>
	// <td>允许上传的图片格式</td>
	// <td>String</td>
	// <td>—</td>
	// <td>jpg,png,jpeg</td>
	// </tr>
	// <tr>
	// <td>errorTip</td>
	// <td>错误提示</td>
	// <td>String</td>
	// <td>—</td>
	// <td>-</td>
	// </tr>
	// </tbody>
	// </table>
	// <h3 id="multiimageupload-attributes"><a class="header-anchor" href="#multiimageupload-attributes" aria-hidden="true">¶</a> MultiImageUpload Attributes</h3>
	// <table class="table"><thead>
	// <tr>
	// <th>参数</th>
	// <th>说明</th>
	// <th>类型</th>
	// <th>可选值</th>
	// <th>默认值</th>
	// </tr>
	// </thead>
	// <tbody>
	// <tr>
	// <td>values</td>
	// <td>上传的图片</td>
	// <td>Array</td>
	// <td>—</td>
	// <td>-</td>
	// </tr>
	// </tbody>
	// </table>
	// </section></template>
	// <style lang="less">
	// .multi-images {
	//   overflow: hidden;
	
	//   img {
	//     width: 214px;
	//     height: 100px;
	//   }
	
	//   .add-image-btn {
	//     width: 214px;
	//     font-size: 40px;
	//     line-height: 100px;
	//   }
	// }
	// </style>
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      value: '',
	      images: []
	    };
	  }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = "<section>\n\n<h2 id=\"imageupload-tu-pian-shang-chuan\"><a class=\"header-anchor\" href=\"#imageupload-tu-pian-shang-chuan\" aria-hidden=\"true\">¶</a> ImageUpload 图片上传</h2>\n<p>用于图片上传。</p>\n<h3 id=\"ji-chu-yong-fa\"><a class=\"header-anchor\" href=\"#ji-chu-yong-fa\" aria-hidden=\"true\">¶</a> 基础用法</h3>\n<p>单张图片上传的用法。</p>\n<demo-block class=\"demo-box\">\n                      <div class=\"source\" slot=\"source\"><d-imageupload upload-url=\"/upload/image\" :value.sync=\"imageUrl\" :width=\"100\">\n  <p slot=\"upload-tip\">\n    尺寸为100*100像素，格式为jpg、png，图片大小不可大于1M。\n  </p>\n</d-imageupload>\n</div>\n                      <p>允许上传单张图片。</p>\n\n                      <div class=\"highlight\" slot=\"highlight\"><pre><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-imageupload</span> <span class=\"hljs-attr\">upload-url</span>=<span class=\"hljs-string\">\"/upload/image\"</span> <span class=\"hljs-attr\">:value.sync</span>=<span class=\"hljs-string\">\"imageUrl\"</span> <span class=\"hljs-attr\">:width</span>=<span class=\"hljs-string\">\"100\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">slot</span>=<span class=\"hljs-string\">\"upload-tip\"</span>&gt;</span>\n    尺寸为100*100像素，格式为jpg、png，图片大小不可大于1M。\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-imageupload</span>&gt;</span>\n</code></pre>\n</div></demo-block>\n<h3 id=\"duo-tu-shang-chuan\"><a class=\"header-anchor\" href=\"#duo-tu-shang-chuan\" aria-hidden=\"true\">¶</a> 多图上传</h3>\n<p>多张图片上传。</p>\n<demo-block class=\"demo-box\">\n                      <div class=\"source\" slot=\"source\"><d-multi-imageupload class=\"multi-images\" upload-url=\"/upload/image\" :values.sync=\"images\" :width=\"640\">\n</d-multi-imageupload>\n</div>\n                      <p>上传多张图片。</p>\n\n                      <div class=\"highlight\" slot=\"highlight\"><pre><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-multi-imageupload</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"multi-images\"</span> <span class=\"hljs-attr\">upload-url</span>=<span class=\"hljs-string\">\"/upload/image\"</span> <span class=\"hljs-attr\">:values.sync</span>=<span class=\"hljs-string\">\"images\"</span> <span class=\"hljs-attr\">:width</span>=<span class=\"hljs-string\">\"640\"</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-multi-imageupload</span>&gt;</span>\n</code></pre>\n</div></demo-block>\n<h3 id=\"imageupload-attributes\"><a class=\"header-anchor\" href=\"#imageupload-attributes\" aria-hidden=\"true\">¶</a> ImageUpload Attributes</h3>\n<table class=\"table\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>uploadUrl</td>\n<td>图片上传接口地址</td>\n<td>String</td>\n<td>—</td>\n<td>-</td>\n</tr>\n<tr>\n<td>value</td>\n<td>上传的图片url</td>\n<td>String</td>\n<td>—</td>\n<td>-</td>\n</tr>\n<tr>\n<td>width</td>\n<td>上传的图片宽度</td>\n<td>Number</td>\n<td>—</td>\n<td>-</td>\n</tr>\n<tr>\n<td>height</td>\n<td>上传的图片高度</td>\n<td>Number</td>\n<td>—</td>\n<td>-</td>\n</tr>\n<tr>\n<td>size</td>\n<td>上传的图片大小（单位为：B）</td>\n<td>Number</td>\n<td>—</td>\n<td>1024 * 1024</td>\n</tr>\n<tr>\n<td>extensions</td>\n<td>允许上传的图片格式</td>\n<td>String</td>\n<td>—</td>\n<td>jpg,png,jpeg</td>\n</tr>\n<tr>\n<td>errorTip</td>\n<td>错误提示</td>\n<td>String</td>\n<td>—</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n<h3 id=\"multiimageupload-attributes\"><a class=\"header-anchor\" href=\"#multiimageupload-attributes\" aria-hidden=\"true\">¶</a> MultiImageUpload Attributes</h3>\n<table class=\"table\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>values</td>\n<td>上传的图片</td>\n<td>Array</td>\n<td>—</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</section>";

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(55);

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(56)
	__vue_template__ = __webpack_require__(89)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/cookfront/Sites/work/duiba-design/node_modules/vue-markdown-loader/.cache/messagebox-8.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _MessageBox = __webpack_require__(57);
	
	var _MessageBox2 = _interopRequireDefault(_MessageBox);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  methods: {
	    open1: function open1() {
	      (0, _MessageBox2.default)({
	        title: '保存成功！',
	        description: 'Messagebox说明Messagebox说明'
	      });
	    },
	    open2: function open2() {
	      (0, _MessageBox2.default)({
	        title: '保存成功！',
	        description: 'Messagebox说明Messagebox说明',
	        type: 'error'
	      });
	    }
	  }
	};
	// </script>
	/* generated by vue-loader */
	// <template><section>
	// <h2 id="messagebox-xiao-xi-kuang"><a class="header-anchor" href="#messagebox-xiao-xi-kuang" aria-hidden="true">¶</a> MessageBox 消息框</h2>
	// <p>常用于主动操作后的反馈提示。</p>
	// <h3 id="ji-chu-yong-fa"><a class="header-anchor" href="#ji-chu-yong-fa" aria-hidden="true">¶</a> 基础用法</h3>
	// <p>从顶部出现，1.5s后消失。</p>
	// <demo-block class="demo-box">
	//                       <div class="source" slot="source"><d-button type="text" @click="open1">点我弹出MessageBox</d-button>
	
	
	// </div>
	//                       <p>MessageBox成功提示。</p>
	
	//                       <div class="highlight" slot="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">d-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"open1"</span>&gt;</span>点我弹出MessageBox<span class="hljs-tag">&lt;/<span class="hljs-name">d-button</span>&gt;</span>
	
	// <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
	// <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
	//   <span class="hljs-attr">methods</span>: {
	//     <span class="hljs-attr">open1</span>: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
	//       MessageBox({
	//         <span class="hljs-attr">title</span>: <span class="hljs-string">'MessageBox成功提示。'</span>
	//       });
	//     }
	//   }
	// };
	// </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
	// </code></pre>
	// </div></demo-block>
	// <h3 id="bu-tong-zhuang-tai"><a class="header-anchor" href="#bu-tong-zhuang-tai" aria-hidden="true">¶</a> 不同状态</h3>
	// <p>用来显示「成功、错误」类的操作反馈。</p>
	// <demo-block class="demo-box">
	//                       <div class="source" slot="source"><d-button type="text" @click="open1">点我弹出成功MessageBox</d-button>
	// <d-button type="text" @click="open2">点我弹出错误MessageBox</d-button>
	
	
	// </div>
	//                       <p>MessageBox暂时只有<code>success</code>和<code>error</code>两种状态，通过<code>type</code>参数传入对应<code>type</code>即可，默认为<code>success</code>。</p>
	
	//                       <div class="highlight" slot="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">d-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"open1"</span>&gt;</span>点我弹出成功MessageBox<span class="hljs-tag">&lt;/<span class="hljs-name">d-button</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">d-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"open2"</span>&gt;</span>点我弹出错误MessageBox<span class="hljs-tag">&lt;/<span class="hljs-name">d-button</span>&gt;</span>
	
	// <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
	// <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
	//   <span class="hljs-attr">methods</span>: {
	//     <span class="hljs-attr">open1</span>: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
	//       MessageBox({
	//         <span class="hljs-attr">title</span>: <span class="hljs-string">'MessageBox成功提示。'</span>
	//       });
	//     },
	//     <span class="hljs-attr">open2</span>: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
	//       MessageBox({
	//         <span class="hljs-attr">title</span>: <span class="hljs-string">'保存成功！'</span>,
	//         <span class="hljs-attr">desc</span>: <span class="hljs-string">'Messagebox说明Messagebox说明'</span>,
	//         <span class="hljs-attr">type</span>: <span class="hljs-string">'error'</span>
	//       });
	//     }
	//   }
	// };
	// </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
	// </code></pre>
	// </div></demo-block>
	// <h3 id="attribute"><a class="header-anchor" href="#attribute" aria-hidden="true">¶</a> Attribute</h3>
	// <table class="table"><thead>
	// <tr>
	// <th>参数</th>
	// <th>说明</th>
	// <th>类型</th>
	// <th>可选值</th>
	// <th>默认值</th>
	// </tr>
	// </thead>
	// <tbody>
	// <tr>
	// <td>title</td>
	// <td>消息框标题</td>
	// <td>string</td>
	// <td>—</td>
	// <td>-</td>
	// </tr>
	// <tr>
	// <td>description</td>
	// <td>消息框说明</td>
	// <td>string</td>
	// <td>—</td>
	// <td>-</td>
	// </tr>
	// <tr>
	// <td>type</td>
	// <td>消息框类型</td>
	// <td>success,error</td>
	// <td>—</td>
	// <td>success</td>
	// </tr>
	// </tbody>
	// </table>
	// </section></template>
	
	// <script>

/***/ },
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */
/***/ function(module, exports) {

	module.exports = "<section>\n<h2 id=\"messagebox-xiao-xi-kuang\"><a class=\"header-anchor\" href=\"#messagebox-xiao-xi-kuang\" aria-hidden=\"true\">¶</a> MessageBox 消息框</h2>\n<p>常用于主动操作后的反馈提示。</p>\n<h3 id=\"ji-chu-yong-fa\"><a class=\"header-anchor\" href=\"#ji-chu-yong-fa\" aria-hidden=\"true\">¶</a> 基础用法</h3>\n<p>从顶部出现，1.5s后消失。</p>\n<demo-block class=\"demo-box\">\n                      <div class=\"source\" slot=\"source\"><d-button type=\"text\" @click=\"open1\">点我弹出MessageBox</d-button>\n\n\n</div>\n                      <p>MessageBox成功提示。</p>\n\n                      <div class=\"highlight\" slot=\"highlight\"><pre><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"text\"</span> <span class=\"hljs-attr\">@click</span>=<span class=\"hljs-string\">\"open1\"</span>&gt;</span>点我弹出MessageBox<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-button</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span><span class=\"javascript\">\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> {\n  <span class=\"hljs-attr\">methods</span>: {\n    <span class=\"hljs-attr\">open1</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) </span>{\n      MessageBox({\n        <span class=\"hljs-attr\">title</span>: <span class=\"hljs-string\">'MessageBox成功提示。'</span>\n      });\n    }\n  }\n};\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</code></pre>\n</div></demo-block>\n<h3 id=\"bu-tong-zhuang-tai\"><a class=\"header-anchor\" href=\"#bu-tong-zhuang-tai\" aria-hidden=\"true\">¶</a> 不同状态</h3>\n<p>用来显示「成功、错误」类的操作反馈。</p>\n<demo-block class=\"demo-box\">\n                      <div class=\"source\" slot=\"source\"><d-button type=\"text\" @click=\"open1\">点我弹出成功MessageBox</d-button>\n<d-button type=\"text\" @click=\"open2\">点我弹出错误MessageBox</d-button>\n\n\n</div>\n                      <p>MessageBox暂时只有<code>success</code>和<code>error</code>两种状态，通过<code>type</code>参数传入对应<code>type</code>即可，默认为<code>success</code>。</p>\n\n                      <div class=\"highlight\" slot=\"highlight\"><pre><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"text\"</span> <span class=\"hljs-attr\">@click</span>=<span class=\"hljs-string\">\"open1\"</span>&gt;</span>点我弹出成功MessageBox<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"text\"</span> <span class=\"hljs-attr\">@click</span>=<span class=\"hljs-string\">\"open2\"</span>&gt;</span>点我弹出错误MessageBox<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-button</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span><span class=\"javascript\">\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> {\n  <span class=\"hljs-attr\">methods</span>: {\n    <span class=\"hljs-attr\">open1</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) </span>{\n      MessageBox({\n        <span class=\"hljs-attr\">title</span>: <span class=\"hljs-string\">'MessageBox成功提示。'</span>\n      });\n    },\n    <span class=\"hljs-attr\">open2</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) </span>{\n      MessageBox({\n        <span class=\"hljs-attr\">title</span>: <span class=\"hljs-string\">'保存成功！'</span>,\n        <span class=\"hljs-attr\">desc</span>: <span class=\"hljs-string\">'Messagebox说明Messagebox说明'</span>,\n        <span class=\"hljs-attr\">type</span>: <span class=\"hljs-string\">'error'</span>\n      });\n    }\n  }\n};\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</code></pre>\n</div></demo-block>\n<h3 id=\"attribute\"><a class=\"header-anchor\" href=\"#attribute\" aria-hidden=\"true\">¶</a> Attribute</h3>\n<table class=\"table\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>title</td>\n<td>消息框标题</td>\n<td>string</td>\n<td>—</td>\n<td>-</td>\n</tr>\n<tr>\n<td>description</td>\n<td>消息框说明</td>\n<td>string</td>\n<td>—</td>\n<td>-</td>\n</tr>\n<tr>\n<td>type</td>\n<td>消息框类型</td>\n<td>success,error</td>\n<td>—</td>\n<td>success</td>\n</tr>\n</tbody>\n</table>\n</section>";

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(91);

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(92)
	__vue_template__ = __webpack_require__(93)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/cookfront/Sites/work/duiba-design/node_modules/vue-markdown-loader/.cache/modal-9.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 92 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template><section>
	// <h2 id="modal-dan-kuang"><a class="header-anchor" href="#modal-dan-kuang" aria-hidden="true">¶</a> Modal 弹框</h2>
	// <p>模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认。</p>
	// <h3 id="ji-ben-yong-fa"><a class="header-anchor" href="#ji-ben-yong-fa" aria-hidden="true">¶</a> 基本用法</h3>
	// <demo-block class="demo-box">
	//                       <div class="source" slot="source"><d-button type="text" @click="modal1Show = true">点击打开弹框</d-button>
	
	// <d-modal title="modal标题" description="modal说明" :show.sync="modal1Show" width="400">
	// </d-modal>
	// </div>
	//                       <p><code>modal-header</code>、<code>modal-body</code>和<code>modal-footer</code>都可以利用内容分发去覆盖，当然你也可以使用默认的。</p>
	
	//                       <div class="highlight" slot="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">d-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"modal1Show = true"</span>&gt;</span>点击打开弹框<span class="hljs-tag">&lt;/<span class="hljs-name">d-button</span>&gt;</span>
	
	// <span class="hljs-tag">&lt;<span class="hljs-name">d-modal</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"modal标题"</span> <span class="hljs-attr">description</span>=<span class="hljs-string">"modal说明"</span> <span class="hljs-attr">:show.sync</span>=<span class="hljs-string">"modal1Show"</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"400"</span>&gt;</span>
	// <span class="hljs-tag">&lt;/<span class="hljs-name">d-modal</span>&gt;</span>
	// </code></pre>
	// </div></demo-block>
	// <h3 id="er-ci-feng-zhuang"><a class="header-anchor" href="#er-ci-feng-zhuang" aria-hidden="true">¶</a> 二次封装</h3>
	// <demo-block class="demo-box">
	//                       <div class="source" slot="source"><d-button type="text" @click="modal2Show = true">点击打开弹框</d-button>
	
	// <d-modal title="modal标题" :show.sync="modal2Show" width="400">
	//   <template slot="modal-body">
	//     <div class="modal-body">
	//       <p>我是内容分发的内容。</p>
	//     </div>
	//   </template>
	//   <template slot="modal-footer">
	//     <div class="modal-footer">
	//       <d-button type="primary" @click="modal2Show = false">确定</d-button>
	//     </div>
	//   </template>
	// </d-modal>
	// </div>
	//                       <p>利用内容分发覆盖<code>modal-header</code>、<code>modal-body</code>和<code>modal-footer</code>。</p>
	
	//                       <div class="highlight" slot="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">d-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"modal2Show = true"</span>&gt;</span>点击打开弹框<span class="hljs-tag">&lt;/<span class="hljs-name">d-button</span>&gt;</span>
	
	// <span class="hljs-tag">&lt;<span class="hljs-name">d-modal</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"modal标题"</span> <span class="hljs-attr">:show.sync</span>=<span class="hljs-string">"modal2Show"</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"400"</span>&gt;</span>
	//   <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"modal-body"</span>&gt;</span>
	//     <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-body"</span>&gt;</span>
	//       <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>我是内容分发的内容。<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
	//     <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
	//   <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
	//   <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"modal-footer"</span>&gt;</span>
	//     <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-footer"</span>&gt;</span>
	//       <span class="hljs-tag">&lt;<span class="hljs-name">d-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"modal2Show = false"</span>&gt;</span>确定<span class="hljs-tag">&lt;/<span class="hljs-name">d-button</span>&gt;</span>
	//     <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
	//   <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
	// <span class="hljs-tag">&lt;/<span class="hljs-name">d-modal</span>&gt;</span>
	// </code></pre>
	// </div></demo-block>
	// <h3 id="attribute"><a class="header-anchor" href="#attribute" aria-hidden="true">¶</a> Attribute</h3>
	// <table class="table"><thead>
	// <tr>
	// <th>参数</th>
	// <th>说明</th>
	// <th>类型</th>
	// <th>可选值</th>
	// <th>默认值</th>
	// </tr>
	// </thead>
	// <tbody>
	// <tr>
	// <td>okText</td>
	// <td>确定按钮文案</td>
	// <td>string</td>
	// <td>-</td>
	// <td>确定</td>
	// </tr>
	// <tr>
	// <td>cancelText</td>
	// <td>取消按钮文案</td>
	// <td>string</td>
	// <td>-</td>
	// <td>取消</td>
	// </tr>
	// <tr>
	// <td>title</td>
	// <td>弹框标题</td>
	// <td>string</td>
	// <td>-</td>
	// <td>-</td>
	// </tr>
	// <tr>
	// <td>description</td>
	// <td>弹框描述</td>
	// <td>string</td>
	// <td>—</td>
	// <td>—</td>
	// </tr>
	// <tr>
	// <td>show</td>
	// <td>弹框是否显示</td>
	// <td>boolean</td>
	// <td>true,false</td>
	// <td>false</td>
	// </tr>
	// <tr>
	// <td>width</td>
	// <td>弹框宽度</td>
	// <td>string</td>
	// <td>-</td>
	// <td>300</td>
	// </tr>
	// <tr>
	// <td>backdrop</td>
	// <td>点击弹框其他区域是否能关闭弹框</td>
	// <td>boolean</td>
	// <td>true,false</td>
	// <td>true</td>
	// </tr>
	// <tr>
	// <td>onOk</td>
	// <td>确定点击回调</td>
	// <td>Function</td>
	// <td>-</td>
	// <td>-</td>
	// </tr>
	// <tr>
	// <td>onClose</td>
	// <td>取消点击回调</td>
	// <td>Function</td>
	// <td>-</td>
	// <td>-</td>
	// </tr>
	// </tbody>
	// </table>
	// </section></template>
	
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      modal1Show: false,
	      modal2Show: false
	    };
	  }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 93 */
/***/ function(module, exports) {

	module.exports = "<section>\n<h2 id=\"modal-dan-kuang\"><a class=\"header-anchor\" href=\"#modal-dan-kuang\" aria-hidden=\"true\">¶</a> Modal 弹框</h2>\n<p>模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认。</p>\n<h3 id=\"ji-ben-yong-fa\"><a class=\"header-anchor\" href=\"#ji-ben-yong-fa\" aria-hidden=\"true\">¶</a> 基本用法</h3>\n<demo-block class=\"demo-box\">\n                      <div class=\"source\" slot=\"source\"><d-button type=\"text\" @click=\"modal1Show = true\">点击打开弹框</d-button>\n\n<d-modal title=\"modal标题\" description=\"modal说明\" :show.sync=\"modal1Show\" width=\"400\">\n</d-modal>\n</div>\n                      <p><code>modal-header</code>、<code>modal-body</code>和<code>modal-footer</code>都可以利用内容分发去覆盖，当然你也可以使用默认的。</p>\n\n                      <div class=\"highlight\" slot=\"highlight\"><pre><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"text\"</span> <span class=\"hljs-attr\">@click</span>=<span class=\"hljs-string\">\"modal1Show = true\"</span>&gt;</span>点击打开弹框<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-button</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-modal</span> <span class=\"hljs-attr\">title</span>=<span class=\"hljs-string\">\"modal标题\"</span> <span class=\"hljs-attr\">description</span>=<span class=\"hljs-string\">\"modal说明\"</span> <span class=\"hljs-attr\">:show.sync</span>=<span class=\"hljs-string\">\"modal1Show\"</span> <span class=\"hljs-attr\">width</span>=<span class=\"hljs-string\">\"400\"</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-modal</span>&gt;</span>\n</code></pre>\n</div></demo-block>\n<h3 id=\"er-ci-feng-zhuang\"><a class=\"header-anchor\" href=\"#er-ci-feng-zhuang\" aria-hidden=\"true\">¶</a> 二次封装</h3>\n<demo-block class=\"demo-box\">\n                      <div class=\"source\" slot=\"source\"><d-button type=\"text\" @click=\"modal2Show = true\">点击打开弹框</d-button>\n\n<d-modal title=\"modal标题\" :show.sync=\"modal2Show\" width=\"400\">\n  <template slot=\"modal-body\">\n    <div class=\"modal-body\">\n      <p>我是内容分发的内容。</p>\n    </div>\n  </template>\n  <template slot=\"modal-footer\">\n    <div class=\"modal-footer\">\n      <d-button type=\"primary\" @click=\"modal2Show = false\">确定</d-button>\n    </div>\n  </template>\n</d-modal>\n</div>\n                      <p>利用内容分发覆盖<code>modal-header</code>、<code>modal-body</code>和<code>modal-footer</code>。</p>\n\n                      <div class=\"highlight\" slot=\"highlight\"><pre><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"text\"</span> <span class=\"hljs-attr\">@click</span>=<span class=\"hljs-string\">\"modal2Show = true\"</span>&gt;</span>点击打开弹框<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-button</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-modal</span> <span class=\"hljs-attr\">title</span>=<span class=\"hljs-string\">\"modal标题\"</span> <span class=\"hljs-attr\">:show.sync</span>=<span class=\"hljs-string\">\"modal2Show\"</span> <span class=\"hljs-attr\">width</span>=<span class=\"hljs-string\">\"400\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">template</span> <span class=\"hljs-attr\">slot</span>=<span class=\"hljs-string\">\"modal-body\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"modal-body\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span>&gt;</span>我是内容分发的内容。<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">template</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">template</span> <span class=\"hljs-attr\">slot</span>=<span class=\"hljs-string\">\"modal-footer\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"modal-footer\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span> <span class=\"hljs-attr\">@click</span>=<span class=\"hljs-string\">\"modal2Show = false\"</span>&gt;</span>确定<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">template</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-modal</span>&gt;</span>\n</code></pre>\n</div></demo-block>\n<h3 id=\"attribute\"><a class=\"header-anchor\" href=\"#attribute\" aria-hidden=\"true\">¶</a> Attribute</h3>\n<table class=\"table\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>okText</td>\n<td>确定按钮文案</td>\n<td>string</td>\n<td>-</td>\n<td>确定</td>\n</tr>\n<tr>\n<td>cancelText</td>\n<td>取消按钮文案</td>\n<td>string</td>\n<td>-</td>\n<td>取消</td>\n</tr>\n<tr>\n<td>title</td>\n<td>弹框标题</td>\n<td>string</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>description</td>\n<td>弹框描述</td>\n<td>string</td>\n<td>—</td>\n<td>—</td>\n</tr>\n<tr>\n<td>show</td>\n<td>弹框是否显示</td>\n<td>boolean</td>\n<td>true,false</td>\n<td>false</td>\n</tr>\n<tr>\n<td>width</td>\n<td>弹框宽度</td>\n<td>string</td>\n<td>-</td>\n<td>300</td>\n</tr>\n<tr>\n<td>backdrop</td>\n<td>点击弹框其他区域是否能关闭弹框</td>\n<td>boolean</td>\n<td>true,false</td>\n<td>true</td>\n</tr>\n<tr>\n<td>onOk</td>\n<td>确定点击回调</td>\n<td>Function</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>onClose</td>\n<td>取消点击回调</td>\n<td>Function</td>\n<td>-</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</section>";

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(95);

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(96)
	__vue_template__ = __webpack_require__(97)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/cookfront/Sites/work/duiba-design/node_modules/vue-markdown-loader/.cache/pagination-16.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 96 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template><section>
	// <h2 id="pagination-fen-ye"><a class="header-anchor" href="#pagination-fen-ye" aria-hidden="true">¶</a> Pagination 分页</h2>
	// <p>当数据量过多时，使用分页分解数据。</p>
	// <h3 id="ji-chu-yong-fa"><a class="header-anchor" href="#ji-chu-yong-fa" aria-hidden="true">¶</a> 基础用法</h3>
	// <demo-block class="demo-box">
	//                       <div class="source" slot="source"><d-pagination :total="188" :current-page="currPage" @change="onPageChange"></d-pagination>
	
	
	// </div>
	//                       <p>需要设置数据总条数<code>total</code>，和当前分页数<code>currentPage</code>，以及监听页数变化的函数。</p>
	
	//                       <div class="highlight" slot="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">d-pagination</span> <span class="hljs-attr">:total</span>=<span class="hljs-string">"188"</span> <span class="hljs-attr">:current-page</span>=<span class="hljs-string">"currPage"</span> <span class="hljs-attr">@change</span>=<span class="hljs-string">"onPageChange"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">d-pagination</span>&gt;</span>
	
	// <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
	// <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
	//   data() {
	//     <span class="hljs-keyword">return</span> {
	//       <span class="hljs-attr">currPage</span>: <span class="hljs-number">1</span>
	//     };
	//   },
	
	//   <span class="hljs-attr">methods</span>: {
	//     <span class="hljs-attr">onPageChange</span>: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">page</span>) </span>{
	//       <span class="hljs-keyword">this</span>.currPage = page;
	//       alert(page);
	//     }
	//   }
	// };
	// </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
	// </code></pre>
	// </div></demo-block>
	// <h3 id="attributes"><a class="header-anchor" href="#attributes" aria-hidden="true">¶</a> Attributes</h3>
	// <table class="table"><thead>
	// <tr>
	// <th>参数</th>
	// <th>说明</th>
	// <th>类型</th>
	// <th>可选值</th>
	// <th>默认值</th>
	// </tr>
	// </thead>
	// <tbody>
	// <tr>
	// <td>page-size</td>
	// <td>每页显示条目个数</td>
	// <td>Number</td>
	// <td>—</td>
	// <td>10</td>
	// </tr>
	// <tr>
	// <td>total</td>
	// <td>总条目数</td>
	// <td>Number</td>
	// <td>—</td>
	// <td>-</td>
	// </tr>
	// <tr>
	// <td>current-page</td>
	// <td>当前页数</td>
	// <td>Number</td>
	// <td>—</td>
	// <td>1</td>
	// </tr>
	// </tbody>
	// </table>
	// <h3 id="events"><a class="header-anchor" href="#events" aria-hidden="true">¶</a> Events</h3>
	// <table class="table"><thead>
	// <tr>
	// <th>事件名称</th>
	// <th>说明</th>
	// <th>回调参数</th>
	// </tr>
	// </thead>
	// <tbody>
	// <tr>
	// <td>change</td>
	// <td>currentPage 改变时会触发</td>
	// <td>当前页<code>currentPage</code></td>
	// </tr>
	// </tbody>
	// </table>
	// </section></template>
	
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      currPage: 1
	    };
	  },
	
	
	  methods: {
	    onPageChange: function onPageChange(page) {
	      this.currPage = page;
	      alert(page);
	    }
	  }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 97 */
/***/ function(module, exports) {

	module.exports = "<section>\n<h2 id=\"pagination-fen-ye\"><a class=\"header-anchor\" href=\"#pagination-fen-ye\" aria-hidden=\"true\">¶</a> Pagination 分页</h2>\n<p>当数据量过多时，使用分页分解数据。</p>\n<h3 id=\"ji-chu-yong-fa\"><a class=\"header-anchor\" href=\"#ji-chu-yong-fa\" aria-hidden=\"true\">¶</a> 基础用法</h3>\n<demo-block class=\"demo-box\">\n                      <div class=\"source\" slot=\"source\"><d-pagination :total=\"188\" :current-page=\"currPage\" @change=\"onPageChange\"></d-pagination>\n\n\n</div>\n                      <p>需要设置数据总条数<code>total</code>，和当前分页数<code>currentPage</code>，以及监听页数变化的函数。</p>\n\n                      <div class=\"highlight\" slot=\"highlight\"><pre><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-pagination</span> <span class=\"hljs-attr\">:total</span>=<span class=\"hljs-string\">\"188\"</span> <span class=\"hljs-attr\">:current-page</span>=<span class=\"hljs-string\">\"currPage\"</span> <span class=\"hljs-attr\">@change</span>=<span class=\"hljs-string\">\"onPageChange\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-pagination</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span><span class=\"javascript\">\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> {\n  data() {\n    <span class=\"hljs-keyword\">return</span> {\n      <span class=\"hljs-attr\">currPage</span>: <span class=\"hljs-number\">1</span>\n    };\n  },\n\n  <span class=\"hljs-attr\">methods</span>: {\n    <span class=\"hljs-attr\">onPageChange</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\">page</span>) </span>{\n      <span class=\"hljs-keyword\">this</span>.currPage = page;\n      alert(page);\n    }\n  }\n};\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</code></pre>\n</div></demo-block>\n<h3 id=\"attributes\"><a class=\"header-anchor\" href=\"#attributes\" aria-hidden=\"true\">¶</a> Attributes</h3>\n<table class=\"table\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>page-size</td>\n<td>每页显示条目个数</td>\n<td>Number</td>\n<td>—</td>\n<td>10</td>\n</tr>\n<tr>\n<td>total</td>\n<td>总条目数</td>\n<td>Number</td>\n<td>—</td>\n<td>-</td>\n</tr>\n<tr>\n<td>current-page</td>\n<td>当前页数</td>\n<td>Number</td>\n<td>—</td>\n<td>1</td>\n</tr>\n</tbody>\n</table>\n<h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\" aria-hidden=\"true\">¶</a> Events</h3>\n<table class=\"table\"><thead>\n<tr>\n<th>事件名称</th>\n<th>说明</th>\n<th>回调参数</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>change</td>\n<td>currentPage 改变时会触发</td>\n<td>当前页<code>currentPage</code></td>\n</tr>\n</tbody>\n</table>\n</section>";

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(99);

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(100)
	__vue_template__ = __webpack_require__(101)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/cookfront/Sites/work/duiba-design/node_modules/vue-markdown-loader/.cache/richeditor-10.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 100 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template><section>
	// <h2 id="richeditor-fu-wen-ben-bian-ji-qi"><a class="header-anchor" href="#richeditor-fu-wen-ben-bian-ji-qi" aria-hidden="true">¶</a> RichEditor 富文本编辑器</h2>
	// <p>用于输入富文本。</p>
	// <h3 id="ji-chu-yong-fa"><a class="header-anchor" href="#ji-chu-yong-fa" aria-hidden="true">¶</a> 基础用法</h3>
	// <demo-block class="demo-box">
	//                       <div class="source" slot="source"><d-richeditor toolbar-id="desc-toolbar" editor-id="desc-editor" placeholder="此奖品的介绍文案以及使用说明文案" :description="value" :value.sync="value">
	// </d-richeditor>
	
	
	// </div>
	//                       <p>使用时需要在页面中引入<code>wysihtml5</code>，</p>
	
	//                       <div class="highlight" slot="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">d-richeditor</span> <span class="hljs-attr">toolbar-id</span>=<span class="hljs-string">"desc-toolbar"</span> <span class="hljs-attr">editor-id</span>=<span class="hljs-string">"desc-editor"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"此奖品的介绍文案以及使用说明文案"</span> <span class="hljs-attr">:description</span>=<span class="hljs-string">"value"</span> <span class="hljs-attr">:value.sync</span>=<span class="hljs-string">"value"</span>&gt;</span>
	// <span class="hljs-tag">&lt;/<span class="hljs-name">d-richeditor</span>&gt;</span>
	
	// <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
	// <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
	//   data() {
	//     <span class="hljs-keyword">return</span> {
	//       <span class="hljs-attr">value</span>: <span class="hljs-string">''</span>
	//     };
	//   }
	// };
	// </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
	// </code></pre>
	// </div></demo-block>
	// </section></template>
	
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      value: ''
	    };
	  }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 101 */
/***/ function(module, exports) {

	module.exports = "<section>\n<h2 id=\"richeditor-fu-wen-ben-bian-ji-qi\"><a class=\"header-anchor\" href=\"#richeditor-fu-wen-ben-bian-ji-qi\" aria-hidden=\"true\">¶</a> RichEditor 富文本编辑器</h2>\n<p>用于输入富文本。</p>\n<h3 id=\"ji-chu-yong-fa\"><a class=\"header-anchor\" href=\"#ji-chu-yong-fa\" aria-hidden=\"true\">¶</a> 基础用法</h3>\n<demo-block class=\"demo-box\">\n                      <div class=\"source\" slot=\"source\"><d-richeditor toolbar-id=\"desc-toolbar\" editor-id=\"desc-editor\" placeholder=\"此奖品的介绍文案以及使用说明文案\" :description=\"value\" :value.sync=\"value\">\n</d-richeditor>\n\n\n</div>\n                      <p>使用时需要在页面中引入<code>wysihtml5</code>，</p>\n\n                      <div class=\"highlight\" slot=\"highlight\"><pre><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-richeditor</span> <span class=\"hljs-attr\">toolbar-id</span>=<span class=\"hljs-string\">\"desc-toolbar\"</span> <span class=\"hljs-attr\">editor-id</span>=<span class=\"hljs-string\">\"desc-editor\"</span> <span class=\"hljs-attr\">placeholder</span>=<span class=\"hljs-string\">\"此奖品的介绍文案以及使用说明文案\"</span> <span class=\"hljs-attr\">:description</span>=<span class=\"hljs-string\">\"value\"</span> <span class=\"hljs-attr\">:value.sync</span>=<span class=\"hljs-string\">\"value\"</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-richeditor</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span><span class=\"javascript\">\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> {\n  data() {\n    <span class=\"hljs-keyword\">return</span> {\n      <span class=\"hljs-attr\">value</span>: <span class=\"hljs-string\">''</span>\n    };\n  }\n};\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</code></pre>\n</div></demo-block>\n</section>";

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(103);

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(104)
	__vue_template__ = __webpack_require__(105)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/cookfront/Sites/work/duiba-design/node_modules/vue-markdown-loader/.cache/select-11.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 104 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template><section>
	// <h2 id="select-xia-la-kuang"><a class="header-anchor" href="#select-xia-la-kuang" aria-hidden="true">¶</a> Select 下拉框</h2>
	// <p>模拟表单组件的<code>select</code>。</p>
	// <h3 id="ji-chu-yong-fa"><a class="header-anchor" href="#ji-chu-yong-fa" aria-hidden="true">¶</a> 基础用法</h3>
	// <p>适用广泛的基础单选。</p>
	// <demo-block class="demo-box">
	//                       <div class="source" slot="source"><d-select :options="appList" :value.sync="appId" id-name="appId" label-name="name" @select="selectItem"></d-select>
	
	
	// </div>
	//                       <p><code>options</code>属性需传入一个数组，其值为可以选择的选项。<code>value</code>为选中的值。<code>idName</code>对应每个选项的<code>id</code>的名称，比如为<code>appId</code>，默认为<code>id</code>。<code>label-name</code>为选项名称的字段，默认为<code>label</code>。</p>
	
	//                       <div class="highlight" slot="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">d-select</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">"appList"</span> <span class="hljs-attr">:value.sync</span>=<span class="hljs-string">"appId"</span> <span class="hljs-attr">id-name</span>=<span class="hljs-string">"appId"</span> <span class="hljs-attr">label-name</span>=<span class="hljs-string">"name"</span> <span class="hljs-attr">@select</span>=<span class="hljs-string">"selectItem"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">d-select</span>&gt;</span>
	
	// <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
	// <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
	//   data() {
	//     <span class="hljs-keyword">return</span> {
	//       <span class="hljs-attr">appId</span>: <span class="hljs-literal">null</span>,
	//       <span class="hljs-attr">appList</span>: [
	//         {
	//           <span class="hljs-attr">appId</span>: <span class="hljs-string">''</span>,
	//           <span class="hljs-attr">name</span>: <span class="hljs-string">'选择应用'</span>
	//         },
	//         {
	//           <span class="hljs-attr">appId</span>: <span class="hljs-string">'1'</span>,
	//           <span class="hljs-attr">name</span>: <span class="hljs-string">'大富翁'</span>
	//         }
	//       ]
	//     };
	//   },
	
	//   <span class="hljs-attr">methods</span>: {
	//     <span class="hljs-attr">selectItem</span>: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">v</span>) </span>{
	//       <span class="hljs-built_in">console</span>.log(v);
	//     }
	//   }
	// };
	// </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
	// </code></pre>
	// </div></demo-block>
	// <h3 id="jin-yong-zhuang-tai"><a class="header-anchor" href="#jin-yong-zhuang-tai" aria-hidden="true">¶</a> 禁用状态</h3>
	// <p><code>select</code>的禁用状态。</p>
	// <demo-block class="demo-box">
	//                       <div class="source" slot="source"><d-select :options="appList" :value.sync="appId" id-name="appId" label-name="name" disabled></d-select>
	
	
	// </div>
	//                       <p>传入一个<code>disabled</code>属性即可。</p>
	
	//                       <div class="highlight" slot="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">d-select</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">"appList"</span> <span class="hljs-attr">:value.sync</span>=<span class="hljs-string">"appId"</span> <span class="hljs-attr">id-name</span>=<span class="hljs-string">"appId"</span> <span class="hljs-attr">label-name</span>=<span class="hljs-string">"name"</span> <span class="hljs-attr">disabled</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">d-select</span>&gt;</span>
	
	// <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
	// <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
	//   data() {
	//     <span class="hljs-keyword">return</span> {
	//       <span class="hljs-attr">appId</span>: <span class="hljs-literal">null</span>,
	//       <span class="hljs-attr">appList</span>: [
	//         {
	//           <span class="hljs-attr">appId</span>: <span class="hljs-string">''</span>,
	//           <span class="hljs-attr">name</span>: <span class="hljs-string">'选择应用'</span>
	//         },
	//         {
	//           <span class="hljs-attr">appId</span>: <span class="hljs-string">'1'</span>,
	//           <span class="hljs-attr">name</span>: <span class="hljs-string">'大富翁'</span>
	//         }
	//       ]
	//     };
	//   }
	// };
	// </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
	// </code></pre>
	// </div></demo-block>
	// <h3 id="attributes"><a class="header-anchor" href="#attributes" aria-hidden="true">¶</a> Attributes</h3>
	// <table class="table"><thead>
	// <tr>
	// <th>参数</th>
	// <th>说明</th>
	// <th>类型</th>
	// <th>可选值</th>
	// <th>默认值</th>
	// </tr>
	// </thead>
	// <tbody>
	// <tr>
	// <td>trigger</td>
	// <td>触发下拉的方式</td>
	// <td>String</td>
	// <td>hover,click等</td>
	// <td>hover</td>
	// </tr>
	// <tr>
	// <td>idName</td>
	// <td>id键名</td>
	// <td>String</td>
	// <td>-</td>
	// <td>id</td>
	// </tr>
	// <tr>
	// <td>labelName</td>
	// <td>label键名</td>
	// <td>String</td>
	// <td>—</td>
	// <td>label</td>
	// </tr>
	// <tr>
	// <td>value</td>
	// <td>下拉框选中的值</td>
	// <td>String</td>
	// <td>—</td>
	// <td>-</td>
	// </tr>
	// <tr>
	// <td>disabled</td>
	// <td>下拉框是否禁用</td>
	// <td>Boolean</td>
	// <td>—</td>
	// <td>false</td>
	// </tr>
	// <tr>
	// <td>options</td>
	// <td>下拉框选项</td>
	// <td>Array</td>
	// <td>—</td>
	// <td>[]</td>
	// </tr>
	// </tbody>
	// </table>
	// </section></template>
	
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      appId: null,
	      appList: [{
	        appId: '',
	        name: '选择应用'
	      }, {
	        appId: '1',
	        name: '大富翁'
	      }]
	    };
	  },
	
	
	  methods: {
	    selectItem: function selectItem(v) {
	      console.log(v);
	    }
	  }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 105 */
/***/ function(module, exports) {

	module.exports = "<section>\n<h2 id=\"select-xia-la-kuang\"><a class=\"header-anchor\" href=\"#select-xia-la-kuang\" aria-hidden=\"true\">¶</a> Select 下拉框</h2>\n<p>模拟表单组件的<code>select</code>。</p>\n<h3 id=\"ji-chu-yong-fa\"><a class=\"header-anchor\" href=\"#ji-chu-yong-fa\" aria-hidden=\"true\">¶</a> 基础用法</h3>\n<p>适用广泛的基础单选。</p>\n<demo-block class=\"demo-box\">\n                      <div class=\"source\" slot=\"source\"><d-select :options=\"appList\" :value.sync=\"appId\" id-name=\"appId\" label-name=\"name\" @select=\"selectItem\"></d-select>\n\n\n</div>\n                      <p><code>options</code>属性需传入一个数组，其值为可以选择的选项。<code>value</code>为选中的值。<code>idName</code>对应每个选项的<code>id</code>的名称，比如为<code>appId</code>，默认为<code>id</code>。<code>label-name</code>为选项名称的字段，默认为<code>label</code>。</p>\n\n                      <div class=\"highlight\" slot=\"highlight\"><pre><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-select</span> <span class=\"hljs-attr\">:options</span>=<span class=\"hljs-string\">\"appList\"</span> <span class=\"hljs-attr\">:value.sync</span>=<span class=\"hljs-string\">\"appId\"</span> <span class=\"hljs-attr\">id-name</span>=<span class=\"hljs-string\">\"appId\"</span> <span class=\"hljs-attr\">label-name</span>=<span class=\"hljs-string\">\"name\"</span> <span class=\"hljs-attr\">@select</span>=<span class=\"hljs-string\">\"selectItem\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-select</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span><span class=\"javascript\">\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> {\n  data() {\n    <span class=\"hljs-keyword\">return</span> {\n      <span class=\"hljs-attr\">appId</span>: <span class=\"hljs-literal\">null</span>,\n      <span class=\"hljs-attr\">appList</span>: [\n        {\n          <span class=\"hljs-attr\">appId</span>: <span class=\"hljs-string\">''</span>,\n          <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">'选择应用'</span>\n        },\n        {\n          <span class=\"hljs-attr\">appId</span>: <span class=\"hljs-string\">'1'</span>,\n          <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">'大富翁'</span>\n        }\n      ]\n    };\n  },\n\n  <span class=\"hljs-attr\">methods</span>: {\n    <span class=\"hljs-attr\">selectItem</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\">v</span>) </span>{\n      <span class=\"hljs-built_in\">console</span>.log(v);\n    }\n  }\n};\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</code></pre>\n</div></demo-block>\n<h3 id=\"jin-yong-zhuang-tai\"><a class=\"header-anchor\" href=\"#jin-yong-zhuang-tai\" aria-hidden=\"true\">¶</a> 禁用状态</h3>\n<p><code>select</code>的禁用状态。</p>\n<demo-block class=\"demo-box\">\n                      <div class=\"source\" slot=\"source\"><d-select :options=\"appList\" :value.sync=\"appId\" id-name=\"appId\" label-name=\"name\" disabled></d-select>\n\n\n</div>\n                      <p>传入一个<code>disabled</code>属性即可。</p>\n\n                      <div class=\"highlight\" slot=\"highlight\"><pre><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-select</span> <span class=\"hljs-attr\">:options</span>=<span class=\"hljs-string\">\"appList\"</span> <span class=\"hljs-attr\">:value.sync</span>=<span class=\"hljs-string\">\"appId\"</span> <span class=\"hljs-attr\">id-name</span>=<span class=\"hljs-string\">\"appId\"</span> <span class=\"hljs-attr\">label-name</span>=<span class=\"hljs-string\">\"name\"</span> <span class=\"hljs-attr\">disabled</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-select</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span><span class=\"javascript\">\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> {\n  data() {\n    <span class=\"hljs-keyword\">return</span> {\n      <span class=\"hljs-attr\">appId</span>: <span class=\"hljs-literal\">null</span>,\n      <span class=\"hljs-attr\">appList</span>: [\n        {\n          <span class=\"hljs-attr\">appId</span>: <span class=\"hljs-string\">''</span>,\n          <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">'选择应用'</span>\n        },\n        {\n          <span class=\"hljs-attr\">appId</span>: <span class=\"hljs-string\">'1'</span>,\n          <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">'大富翁'</span>\n        }\n      ]\n    };\n  }\n};\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</code></pre>\n</div></demo-block>\n<h3 id=\"attributes\"><a class=\"header-anchor\" href=\"#attributes\" aria-hidden=\"true\">¶</a> Attributes</h3>\n<table class=\"table\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>trigger</td>\n<td>触发下拉的方式</td>\n<td>String</td>\n<td>hover,click等</td>\n<td>hover</td>\n</tr>\n<tr>\n<td>idName</td>\n<td>id键名</td>\n<td>String</td>\n<td>-</td>\n<td>id</td>\n</tr>\n<tr>\n<td>labelName</td>\n<td>label键名</td>\n<td>String</td>\n<td>—</td>\n<td>label</td>\n</tr>\n<tr>\n<td>value</td>\n<td>下拉框选中的值</td>\n<td>String</td>\n<td>—</td>\n<td>-</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>下拉框是否禁用</td>\n<td>Boolean</td>\n<td>—</td>\n<td>false</td>\n</tr>\n<tr>\n<td>options</td>\n<td>下拉框选项</td>\n<td>Array</td>\n<td>—</td>\n<td>[]</td>\n</tr>\n</tbody>\n</table>\n</section>";

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(107);

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(108)
	__vue_script__ = __webpack_require__(110)
	__vue_template__ = __webpack_require__(111)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/cookfront/Sites/work/duiba-design/node_modules/vue-markdown-loader/.cache/switch-13.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(109);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../.npminstall/css-loader/0.21.0/css-loader/index.js?sourceMap!./../../.npminstall/vue-loader/8.0.0/vue-loader/lib/style-rewriter.js?id=_v-3e8403d8&file=switch-13.vue!./../../.npminstall/vue-loader/8.0.0/vue-loader/lib/selector.js?type=style&index=0!./switch-13.vue", function() {
				var newContent = require("!!./../../.npminstall/css-loader/0.21.0/css-loader/index.js?sourceMap!./../../.npminstall/vue-loader/8.0.0/vue-loader/lib/style-rewriter.js?id=_v-3e8403d8&file=switch-13.vue!./../../.npminstall/vue-loader/8.0.0/vue-loader/lib/selector.js?type=style&index=0!./switch-13.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.switch {\n  margin: 10px 0;\n}\n", "", {"version":3,"sources":["/./node_modules/vue-markdown-loader/.cache/switch-13.vue?0e70c329"],"names":[],"mappings":";AAqFA;EACA,eAAA;CACA","file":"switch-13.vue","sourcesContent":["<template><section>\n\n<h2 id=\"switch-kai-guan\"><a class=\"header-anchor\" href=\"#switch-kai-guan\" aria-hidden=\"true\">¶</a> Switch 开关</h2>\n<p>表示两种相互对立的状态间的切换，多用于触发「开/关」。</p>\n<h3 id=\"ji-ben-yong-fa\"><a class=\"header-anchor\" href=\"#ji-ben-yong-fa\" aria-hidden=\"true\">¶</a> 基本用法</h3>\n<demo-block class=\"demo-box\">\n                      <div class=\"source\" slot=\"source\"><d-switch :status.sync=\"status1\"></d-switch>\n<d-switch :status.sync=\"status2\"></d-switch>\n\n\n</div>\n                      <p>通常只需要用到双向绑定 <code>status</code> 属性即可。</p>\n\n                      <div class=\"highlight\" slot=\"highlight\"><pre><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-switch</span> <span class=\"hljs-attr\">:status.sync</span>=<span class=\"hljs-string\">\"status1\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-switch</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-switch</span> <span class=\"hljs-attr\">:status.sync</span>=<span class=\"hljs-string\">\"status2\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-switch</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span><span class=\"javascript\">\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> {\n  data() {\n    <span class=\"hljs-keyword\">return</span> {\n      <span class=\"hljs-attr\">status1</span>: <span class=\"hljs-literal\">false</span>,\n      <span class=\"hljs-attr\">status2</span>: <span class=\"hljs-literal\">true</span>\n    };\n  }\n};\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</code></pre>\n</div></demo-block>\n<h3 id=\"jin-yong-zhuang-tai\"><a class=\"header-anchor\" href=\"#jin-yong-zhuang-tai\" aria-hidden=\"true\">¶</a> 禁用状态</h3>\n<demo-block class=\"demo-box\">\n                      <div class=\"source\" slot=\"source\"><d-switch :status.sync=\"status1\" :disabled=\"true\"></d-switch>\n\n\n</div>\n                      <p>设置<code>disabled</code>为<code>true</code>可以禁用该组件。</p>\n\n                      <div class=\"highlight\" slot=\"highlight\"><pre><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-switch</span> <span class=\"hljs-attr\">:status.sync</span>=<span class=\"hljs-string\">\"status1\"</span> <span class=\"hljs-attr\">:disabled</span>=<span class=\"hljs-string\">\"true\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-switch</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span><span class=\"javascript\">\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> {\n  data() {\n    <span class=\"hljs-keyword\">return</span> {\n      <span class=\"hljs-attr\">status1</span>: <span class=\"hljs-literal\">false</span>\n    };\n  }\n};\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</code></pre>\n</div></demo-block>\n<h3 id=\"attributes\"><a class=\"header-anchor\" href=\"#attributes\" aria-hidden=\"true\">¶</a> Attributes</h3>\n<table class=\"table\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>disabled</td>\n<td>是否禁用</td>\n<td>boolean</td>\n<td>—</td>\n<td>false</td>\n</tr>\n<tr>\n<td>status</td>\n<td>当前开关状态</td>\n<td>boolean</td>\n<td>—</td>\n<td>true</td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>开关点击回调，可用于点击时需要确认等场合，在父组件中操作开关状态</td>\n<td>Function</td>\n<td>—</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</section></template>\n<style>\n.switch {\n  margin: 10px 0;\n}\n</style>\n<script>\nexport default {\n  data() {\n    return {\n      status1: false,\n      status2: true\n    };\n  }\n};\n</script>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 110 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template><section>
	
	// <h2 id="switch-kai-guan"><a class="header-anchor" href="#switch-kai-guan" aria-hidden="true">¶</a> Switch 开关</h2>
	// <p>表示两种相互对立的状态间的切换，多用于触发「开/关」。</p>
	// <h3 id="ji-ben-yong-fa"><a class="header-anchor" href="#ji-ben-yong-fa" aria-hidden="true">¶</a> 基本用法</h3>
	// <demo-block class="demo-box">
	//                       <div class="source" slot="source"><d-switch :status.sync="status1"></d-switch>
	// <d-switch :status.sync="status2"></d-switch>
	
	
	// </div>
	//                       <p>通常只需要用到双向绑定 <code>status</code> 属性即可。</p>
	
	//                       <div class="highlight" slot="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">d-switch</span> <span class="hljs-attr">:status.sync</span>=<span class="hljs-string">"status1"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">d-switch</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">d-switch</span> <span class="hljs-attr">:status.sync</span>=<span class="hljs-string">"status2"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">d-switch</span>&gt;</span>
	
	// <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
	// <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
	//   data() {
	//     <span class="hljs-keyword">return</span> {
	//       <span class="hljs-attr">status1</span>: <span class="hljs-literal">false</span>,
	//       <span class="hljs-attr">status2</span>: <span class="hljs-literal">true</span>
	//     };
	//   }
	// };
	// </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
	// </code></pre>
	// </div></demo-block>
	// <h3 id="jin-yong-zhuang-tai"><a class="header-anchor" href="#jin-yong-zhuang-tai" aria-hidden="true">¶</a> 禁用状态</h3>
	// <demo-block class="demo-box">
	//                       <div class="source" slot="source"><d-switch :status.sync="status1" :disabled="true"></d-switch>
	
	
	// </div>
	//                       <p>设置<code>disabled</code>为<code>true</code>可以禁用该组件。</p>
	
	//                       <div class="highlight" slot="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">d-switch</span> <span class="hljs-attr">:status.sync</span>=<span class="hljs-string">"status1"</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">d-switch</span>&gt;</span>
	
	// <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
	// <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
	//   data() {
	//     <span class="hljs-keyword">return</span> {
	//       <span class="hljs-attr">status1</span>: <span class="hljs-literal">false</span>
	//     };
	//   }
	// };
	// </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
	// </code></pre>
	// </div></demo-block>
	// <h3 id="attributes"><a class="header-anchor" href="#attributes" aria-hidden="true">¶</a> Attributes</h3>
	// <table class="table"><thead>
	// <tr>
	// <th>参数</th>
	// <th>说明</th>
	// <th>类型</th>
	// <th>可选值</th>
	// <th>默认值</th>
	// </tr>
	// </thead>
	// <tbody>
	// <tr>
	// <td>disabled</td>
	// <td>是否禁用</td>
	// <td>boolean</td>
	// <td>—</td>
	// <td>false</td>
	// </tr>
	// <tr>
	// <td>status</td>
	// <td>当前开关状态</td>
	// <td>boolean</td>
	// <td>—</td>
	// <td>true</td>
	// </tr>
	// <tr>
	// <td>onChange</td>
	// <td>开关点击回调，可用于点击时需要确认等场合，在父组件中操作开关状态</td>
	// <td>Function</td>
	// <td>—</td>
	// <td>-</td>
	// </tr>
	// </tbody>
	// </table>
	// </section></template>
	// <style>
	// .switch {
	//   margin: 10px 0;
	// }
	// </style>
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      status1: false,
	      status2: true
	    };
	  }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 111 */
/***/ function(module, exports) {

	module.exports = "<section>\n\n<h2 id=\"switch-kai-guan\"><a class=\"header-anchor\" href=\"#switch-kai-guan\" aria-hidden=\"true\">¶</a> Switch 开关</h2>\n<p>表示两种相互对立的状态间的切换，多用于触发「开/关」。</p>\n<h3 id=\"ji-ben-yong-fa\"><a class=\"header-anchor\" href=\"#ji-ben-yong-fa\" aria-hidden=\"true\">¶</a> 基本用法</h3>\n<demo-block class=\"demo-box\">\n                      <div class=\"source\" slot=\"source\"><d-switch :status.sync=\"status1\"></d-switch>\n<d-switch :status.sync=\"status2\"></d-switch>\n\n\n</div>\n                      <p>通常只需要用到双向绑定 <code>status</code> 属性即可。</p>\n\n                      <div class=\"highlight\" slot=\"highlight\"><pre><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-switch</span> <span class=\"hljs-attr\">:status.sync</span>=<span class=\"hljs-string\">\"status1\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-switch</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-switch</span> <span class=\"hljs-attr\">:status.sync</span>=<span class=\"hljs-string\">\"status2\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-switch</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span><span class=\"javascript\">\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> {\n  data() {\n    <span class=\"hljs-keyword\">return</span> {\n      <span class=\"hljs-attr\">status1</span>: <span class=\"hljs-literal\">false</span>,\n      <span class=\"hljs-attr\">status2</span>: <span class=\"hljs-literal\">true</span>\n    };\n  }\n};\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</code></pre>\n</div></demo-block>\n<h3 id=\"jin-yong-zhuang-tai\"><a class=\"header-anchor\" href=\"#jin-yong-zhuang-tai\" aria-hidden=\"true\">¶</a> 禁用状态</h3>\n<demo-block class=\"demo-box\">\n                      <div class=\"source\" slot=\"source\"><d-switch :status.sync=\"status1\" :disabled=\"true\"></d-switch>\n\n\n</div>\n                      <p>设置<code>disabled</code>为<code>true</code>可以禁用该组件。</p>\n\n                      <div class=\"highlight\" slot=\"highlight\"><pre><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-switch</span> <span class=\"hljs-attr\">:status.sync</span>=<span class=\"hljs-string\">\"status1\"</span> <span class=\"hljs-attr\">:disabled</span>=<span class=\"hljs-string\">\"true\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-switch</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span><span class=\"javascript\">\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> {\n  data() {\n    <span class=\"hljs-keyword\">return</span> {\n      <span class=\"hljs-attr\">status1</span>: <span class=\"hljs-literal\">false</span>\n    };\n  }\n};\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</code></pre>\n</div></demo-block>\n<h3 id=\"attributes\"><a class=\"header-anchor\" href=\"#attributes\" aria-hidden=\"true\">¶</a> Attributes</h3>\n<table class=\"table\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>disabled</td>\n<td>是否禁用</td>\n<td>boolean</td>\n<td>—</td>\n<td>false</td>\n</tr>\n<tr>\n<td>status</td>\n<td>当前开关状态</td>\n<td>boolean</td>\n<td>—</td>\n<td>true</td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>开关点击回调，可用于点击时需要确认等场合，在父组件中操作开关状态</td>\n<td>Function</td>\n<td>—</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</section>";

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(113);

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_template__ = __webpack_require__(114)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/cookfront/Sites/work/duiba-design/node_modules/vue-markdown-loader/.cache/table-15.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 114 */
/***/ function(module, exports) {

	module.exports = "<section><h2 id=\"table-biao-ge\"><a class=\"header-anchor\" href=\"#table-biao-ge\" aria-hidden=\"true\">¶</a> Table 表格</h2>\n</section>";

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(116);

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_template__ = __webpack_require__(117)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/cookfront/Sites/work/duiba-design/node_modules/vue-markdown-loader/.cache/tabs-12.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 117 */
/***/ function(module, exports) {

	module.exports = "<section><h2 id=\"tabs-biao-qian-ye\"><a class=\"header-anchor\" href=\"#tabs-biao-qian-ye\" aria-hidden=\"true\">¶</a> Tabs 标签页</h2>\n<p>分隔内容上有关联但属于不同类别的数据集合。</p>\n<h3 id=\"ji-chu-yong-fa\"><a class=\"header-anchor\" href=\"#ji-chu-yong-fa\" aria-hidden=\"true\">¶</a> 基础用法</h3>\n<p>基础的、简洁的标签页。</p>\n<demo-block class=\"demo-box\">\n                      <div class=\"source\" slot=\"source\"><d-tabs>\n  <d-tab header=\"在线充值\">\n    在线充值\n  </d-tab>\n  <d-tab header=\"转账汇款\">\n    转账汇款\n  </d-tab>\n</d-tabs>\n</div>\n                      <p>Tabs 组件目前只有一种样式，后续如果有其他风格的tab，可以添加一个<code>type</code>属性。</p>\n\n                      <div class=\"highlight\" slot=\"highlight\"><pre><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-tabs</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-tab</span> <span class=\"hljs-attr\">header</span>=<span class=\"hljs-string\">\"在线充值\"</span>&gt;</span>\n    在线充值\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-tab</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-tab</span> <span class=\"hljs-attr\">header</span>=<span class=\"hljs-string\">\"转账汇款\"</span>&gt;</span>\n    转账汇款\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-tab</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-tabs</span>&gt;</span>\n</code></pre>\n</div></demo-block>\n<h3 id=\"tabs-attributes\"><a class=\"header-anchor\" href=\"#tabs-attributes\" aria-hidden=\"true\">¶</a> Tabs Attributes</h3>\n<table class=\"table\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>active</td>\n<td>当前哪个选项卡处于active状态，从0开始的索引</td>\n<td>number</td>\n<td>-</td>\n<td>0</td>\n</tr>\n</tbody>\n</table>\n<h3 id=\"tab-attributes\"><a class=\"header-anchor\" href=\"#tab-attributes\" aria-hidden=\"true\">¶</a> Tab Attributes</h3>\n<table class=\"table\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>header</td>\n<td>选项卡标题</td>\n<td>string</td>\n<td>—</td>\n<td>—</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>选项卡是否被禁用</td>\n<td>boolean</td>\n<td>true,false</td>\n<td>false</td>\n</tr>\n</tbody>\n</table>\n</section>";

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(119);

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(120)
	__vue_template__ = __webpack_require__(121)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/cookfront/Sites/work/duiba-design/node_modules/vue-markdown-loader/.cache/timepicker-14.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 120 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template><section>
	// <h2 id="timepicker-shi-jian-xuan-ze-qi"><a class="header-anchor" href="#timepicker-shi-jian-xuan-ze-qi" aria-hidden="true">¶</a> TimePicker 时间选择器</h2>
	// <p>用于时间选择。</p>
	// <h3 id="ji-chu-yong-fa"><a class="header-anchor" href="#ji-chu-yong-fa" aria-hidden="true">¶</a> 基础用法</h3>
	// <demo-block class="demo-box">
	//                       <div class="source" slot="source"><d-timepicker format="HH:mm:ss" :time-value.sync="time"></d-timepicker>
	
	
	// </div>
	//                       <p>默认的<code>format</code>为<code>HH:mm</code>，可以设置一个自定义的<code>format</code>，还需要设置一个<code>time-value</code>的双向绑定来同步设置的时间。具体用法请看<a href="https://phoenixwong.github.io/vue-timepicker/">Vue Timepicker</a></p>
	
	//                       <div class="highlight" slot="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">d-timepicker</span> <span class="hljs-attr">format</span>=<span class="hljs-string">"HH:mm:ss"</span> <span class="hljs-attr">:time-value.sync</span>=<span class="hljs-string">"time"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">d-timepicker</span>&gt;</span>
	
	// <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
	// <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
	//   data() {
	//     <span class="hljs-keyword">return</span> {
	//       <span class="hljs-attr">time</span>: {
	//         <span class="hljs-attr">HH</span>: <span class="hljs-string">'01'</span>,
	//         <span class="hljs-attr">mm</span>: <span class="hljs-string">'01'</span>,
	//         <span class="hljs-attr">ss</span>: <span class="hljs-string">'01'</span>
	//       }
	//     };
	//   }
	// };
	// </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
	// </code></pre>
	// </div></demo-block>
	// </section></template>
	
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      time: {
	        HH: '01',
	        mm: '01',
	        ss: '01'
	      }
	    };
	  }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 121 */
/***/ function(module, exports) {

	module.exports = "<section>\n<h2 id=\"timepicker-shi-jian-xuan-ze-qi\"><a class=\"header-anchor\" href=\"#timepicker-shi-jian-xuan-ze-qi\" aria-hidden=\"true\">¶</a> TimePicker 时间选择器</h2>\n<p>用于时间选择。</p>\n<h3 id=\"ji-chu-yong-fa\"><a class=\"header-anchor\" href=\"#ji-chu-yong-fa\" aria-hidden=\"true\">¶</a> 基础用法</h3>\n<demo-block class=\"demo-box\">\n                      <div class=\"source\" slot=\"source\"><d-timepicker format=\"HH:mm:ss\" :time-value.sync=\"time\"></d-timepicker>\n\n\n</div>\n                      <p>默认的<code>format</code>为<code>HH:mm</code>，可以设置一个自定义的<code>format</code>，还需要设置一个<code>time-value</code>的双向绑定来同步设置的时间。具体用法请看<a href=\"https://phoenixwong.github.io/vue-timepicker/\">Vue Timepicker</a></p>\n\n                      <div class=\"highlight\" slot=\"highlight\"><pre><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-timepicker</span> <span class=\"hljs-attr\">format</span>=<span class=\"hljs-string\">\"HH:mm:ss\"</span> <span class=\"hljs-attr\">:time-value.sync</span>=<span class=\"hljs-string\">\"time\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-timepicker</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span><span class=\"javascript\">\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> {\n  data() {\n    <span class=\"hljs-keyword\">return</span> {\n      <span class=\"hljs-attr\">time</span>: {\n        <span class=\"hljs-attr\">HH</span>: <span class=\"hljs-string\">'01'</span>,\n        <span class=\"hljs-attr\">mm</span>: <span class=\"hljs-string\">'01'</span>,\n        <span class=\"hljs-attr\">ss</span>: <span class=\"hljs-string\">'01'</span>\n      }\n    };\n  }\n};\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</code></pre>\n</div></demo-block>\n</section>";

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(123);

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(124)
	__vue_template__ = __webpack_require__(126)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/cookfront/Sites/work/duiba-design/node_modules/vue-markdown-loader/.cache/tooltip-17.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(125);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../.npminstall/css-loader/0.21.0/css-loader/index.js?sourceMap!./../../.npminstall/vue-loader/8.0.0/vue-loader/lib/style-rewriter.js?id=_v-523ad547&file=tooltip-17.vue!./../../.npminstall/vue-loader/8.0.0/vue-loader/lib/selector.js?type=style&index=0!./tooltip-17.vue", function() {
				var newContent = require("!!./../../.npminstall/css-loader/0.21.0/css-loader/index.js?sourceMap!./../../.npminstall/vue-loader/8.0.0/vue-loader/lib/style-rewriter.js?id=_v-523ad547&file=tooltip-17.vue!./../../.npminstall/vue-loader/8.0.0/vue-loader/lib/selector.js?type=style&index=0!./tooltip-17.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.tooltip-content {\n  color: #fff !important;\n}\n", "", {"version":3,"sources":["/./node_modules/vue-markdown-loader/.cache/tooltip-17.vue?e67b0810"],"names":[],"mappings":";AAyEA;EACA,uBAAA;CACA","file":"tooltip-17.vue","sourcesContent":["<template><section>\n<h2 id=\"tooltip-wen-zi-ti-shi\"><a class=\"header-anchor\" href=\"#tooltip-wen-zi-ti-shi\" aria-hidden=\"true\">¶</a> Tooltip 文字提示</h2>\n<p>常用于展示鼠标 hover 时的提示信息。</p>\n<h3 id=\"ji-chu-yong-fa\"><a class=\"header-anchor\" href=\"#ji-chu-yong-fa\" aria-hidden=\"true\">¶</a> 基础用法</h3>\n<demo-block class=\"demo-box\">\n                      <div class=\"source\" slot=\"source\"><d-tooltip content=\"我是tooltip\">\n  <d-button type=\"text\">鼠标移动到我上面试试</d-button>\n</d-tooltip>\n<d-tooltip content=\"我是tooltip\" trigger=\"click\">\n  <d-button type=\"text\">点我试试</d-button>\n</d-tooltip>\n</div>\n                      <p>使用<code>content</code>属性来决定<code>hover</code>时的提示信息。由<code>placement</code>属性决定展示效果：<code>placement</code>属性值为：<code>方向-对齐位置</code>；四个方向：<code>top</code>、<code>left</code>、<code>right</code>、<code>bottom</code>。<code>trigger</code>属性用于设置触发<code>tooltip</code>的方式，默认为<code>hover</code>。</p>\n\n                      <div class=\"highlight\" slot=\"highlight\"><pre><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-tooltip</span> <span class=\"hljs-attr\">content</span>=<span class=\"hljs-string\">\"我是tooltip\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"text\"</span>&gt;</span>鼠标移动到我上面试试<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-tooltip</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-tooltip</span> <span class=\"hljs-attr\">content</span>=<span class=\"hljs-string\">\"我是tooltip\"</span> <span class=\"hljs-attr\">trigger</span>=<span class=\"hljs-string\">\"click\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"text\"</span>&gt;</span>点我试试<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-tooltip</span>&gt;</span>\n</code></pre>\n</div></demo-block>\n<h3 id=\"content-nei-rong-fen-fa\"><a class=\"header-anchor\" href=\"#content-nei-rong-fen-fa\" aria-hidden=\"true\">¶</a> content内容分发</h3>\n<demo-block class=\"demo-box\">\n                      <div class=\"source\" slot=\"source\"><d-tooltip>\n  <d-button type=\"text\">鼠标移动到我上面试试</d-button>\n  <p slot=\"content\" class=\"tooltip-content\">我是内容分发的conent。</p>\n</d-tooltip>\n</div>\n                      <p>设置一个名为<code>content</code>的<code>slot</code>。</p>\n\n                      <div class=\"highlight\" slot=\"highlight\"><pre><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-tooltip</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"text\"</span>&gt;</span>鼠标移动到我上面试试<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-button</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">slot</span>=<span class=\"hljs-string\">\"content\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"tooltip-content\"</span>&gt;</span>我是内容分发的conent。<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-tooltip</span>&gt;</span>\n</code></pre>\n</div></demo-block>\n<h3 id=\"attributes\"><a class=\"header-anchor\" href=\"#attributes\" aria-hidden=\"true\">¶</a> Attributes</h3>\n<table class=\"table\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>content</td>\n<td>显示的内容，也可以通过 <code>slot#content</code> 传入 DOM</td>\n<td>String</td>\n<td>—</td>\n<td>—</td>\n</tr>\n<tr>\n<td>placement</td>\n<td>Tooltip 的出现位置</td>\n<td>String</td>\n<td>top/right/bottom/left</td>\n<td>top</td>\n</tr>\n<tr>\n<td>trigger</td>\n<td>tooltip触发方式</td>\n<td>String</td>\n<td>—</td>\n<td>hover</td>\n</tr>\n</tbody>\n</table>\n</section></template>\n<style>\n.tooltip-content {\n  color: #fff !important;\n}\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 126 */
/***/ function(module, exports) {

	module.exports = "<section>\n<h2 id=\"tooltip-wen-zi-ti-shi\"><a class=\"header-anchor\" href=\"#tooltip-wen-zi-ti-shi\" aria-hidden=\"true\">¶</a> Tooltip 文字提示</h2>\n<p>常用于展示鼠标 hover 时的提示信息。</p>\n<h3 id=\"ji-chu-yong-fa\"><a class=\"header-anchor\" href=\"#ji-chu-yong-fa\" aria-hidden=\"true\">¶</a> 基础用法</h3>\n<demo-block class=\"demo-box\">\n                      <div class=\"source\" slot=\"source\"><d-tooltip content=\"我是tooltip\">\n  <d-button type=\"text\">鼠标移动到我上面试试</d-button>\n</d-tooltip>\n<d-tooltip content=\"我是tooltip\" trigger=\"click\">\n  <d-button type=\"text\">点我试试</d-button>\n</d-tooltip>\n</div>\n                      <p>使用<code>content</code>属性来决定<code>hover</code>时的提示信息。由<code>placement</code>属性决定展示效果：<code>placement</code>属性值为：<code>方向-对齐位置</code>；四个方向：<code>top</code>、<code>left</code>、<code>right</code>、<code>bottom</code>。<code>trigger</code>属性用于设置触发<code>tooltip</code>的方式，默认为<code>hover</code>。</p>\n\n                      <div class=\"highlight\" slot=\"highlight\"><pre><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-tooltip</span> <span class=\"hljs-attr\">content</span>=<span class=\"hljs-string\">\"我是tooltip\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"text\"</span>&gt;</span>鼠标移动到我上面试试<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-tooltip</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-tooltip</span> <span class=\"hljs-attr\">content</span>=<span class=\"hljs-string\">\"我是tooltip\"</span> <span class=\"hljs-attr\">trigger</span>=<span class=\"hljs-string\">\"click\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"text\"</span>&gt;</span>点我试试<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-tooltip</span>&gt;</span>\n</code></pre>\n</div></demo-block>\n<h3 id=\"content-nei-rong-fen-fa\"><a class=\"header-anchor\" href=\"#content-nei-rong-fen-fa\" aria-hidden=\"true\">¶</a> content内容分发</h3>\n<demo-block class=\"demo-box\">\n                      <div class=\"source\" slot=\"source\"><d-tooltip>\n  <d-button type=\"text\">鼠标移动到我上面试试</d-button>\n  <p slot=\"content\" class=\"tooltip-content\">我是内容分发的conent。</p>\n</d-tooltip>\n</div>\n                      <p>设置一个名为<code>content</code>的<code>slot</code>。</p>\n\n                      <div class=\"highlight\" slot=\"highlight\"><pre><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-tooltip</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">d-button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"text\"</span>&gt;</span>鼠标移动到我上面试试<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-button</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">slot</span>=<span class=\"hljs-string\">\"content\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"tooltip-content\"</span>&gt;</span>我是内容分发的conent。<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">d-tooltip</span>&gt;</span>\n</code></pre>\n</div></demo-block>\n<h3 id=\"attributes\"><a class=\"header-anchor\" href=\"#attributes\" aria-hidden=\"true\">¶</a> Attributes</h3>\n<table class=\"table\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>content</td>\n<td>显示的内容，也可以通过 <code>slot#content</code> 传入 DOM</td>\n<td>String</td>\n<td>—</td>\n<td>—</td>\n</tr>\n<tr>\n<td>placement</td>\n<td>Tooltip 的出现位置</td>\n<td>String</td>\n<td>top/right/bottom/left</td>\n<td>top</td>\n</tr>\n<tr>\n<td>trigger</td>\n<td>tooltip触发方式</td>\n<td>String</td>\n<td>—</td>\n<td>hover</td>\n</tr>\n</tbody>\n</table>\n</section>";

/***/ }
]));
//# sourceMappingURL=1.1.js.map