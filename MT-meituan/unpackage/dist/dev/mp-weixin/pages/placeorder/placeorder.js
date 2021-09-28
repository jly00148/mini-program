(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/placeorder/placeorder"],{

/***/ 70:
/*!********************************************************************************************************************!*\
  !*** C:/Users/ASUS/github_depositories/mini-program/MT-meituan/main.js?{"page":"pages%2Fplaceorder%2Fplaceorder"} ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _placeorder = _interopRequireDefault(__webpack_require__(/*! ./pages/placeorder/placeorder.vue */ 71));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_placeorder.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 71:
/*!*************************************************************************************************!*\
  !*** C:/Users/ASUS/github_depositories/mini-program/MT-meituan/pages/placeorder/placeorder.vue ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _placeorder_vue_vue_type_template_id_e7307e34_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./placeorder.vue?vue&type=template&id=e7307e34&scoped=true& */ 72);
/* harmony import */ var _placeorder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./placeorder.vue?vue&type=script&lang=js& */ 74);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _placeorder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _placeorder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _placeorder_vue_vue_type_style_index_0_id_e7307e34_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./placeorder.vue?vue&type=style&index=0&id=e7307e34&scoped=true&lang=css& */ 76);
/* harmony import */ var _D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs





/* normalize component */

var component = Object(_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _placeorder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _placeorder_vue_vue_type_template_id_e7307e34_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _placeorder_vue_vue_type_template_id_e7307e34_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e7307e34",
  null,
  false,
  _placeorder_vue_vue_type_template_id_e7307e34_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/placeorder/placeorder.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 72:
/*!********************************************************************************************************************************************!*\
  !*** C:/Users/ASUS/github_depositories/mini-program/MT-meituan/pages/placeorder/placeorder.vue?vue&type=template&id=e7307e34&scoped=true& ***!
  \********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_placeorder_vue_vue_type_template_id_e7307e34_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./placeorder.vue?vue&type=template&id=e7307e34&scoped=true& */ 73);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_placeorder_vue_vue_type_template_id_e7307e34_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_placeorder_vue_vue_type_template_id_e7307e34_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_placeorder_vue_vue_type_template_id_e7307e34_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_placeorder_vue_vue_type_template_id_e7307e34_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 73:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/ASUS/github_depositories/mini-program/MT-meituan/pages/placeorder/placeorder.vue?vue&type=template&id=e7307e34&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uIcon: function() {
      return __webpack_require__.e(/*! import() | view-ui/uview-ui/components/u-icon/u-icon */ "view-ui/uview-ui/components/u-icon/u-icon").then(__webpack_require__.bind(null, /*! @/view-ui/uview-ui/components/u-icon/u-icon.vue */ 205))
    }
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  if (!_vm._isMounted) {
    _vm.e0 = function($event) {
      _vm.HMmessages = _vm.$refs.HMmessages
    }
  }
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 74:
/*!**************************************************************************************************************************!*\
  !*** C:/Users/ASUS/github_depositories/mini-program/MT-meituan/pages/placeorder/placeorder.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_placeorder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./placeorder.vue?vue&type=script&lang=js& */ 75);
/* harmony import */ var _D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_placeorder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_placeorder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_placeorder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_placeorder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_placeorder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 75:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/ASUS/github_depositories/mini-program/MT-meituan/pages/placeorder/placeorder.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 22));










































































var _request = __webpack_require__(/*! ../../api/request.js */ 50);
var _api = _interopRequireDefault(__webpack_require__(/*! ../../api/api.js */ 49));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var HMmessages = function HMmessages() {__webpack_require__.e(/*! require.ensure | components/HM-messages/HM-messages */ "components/HM-messages/HM-messages").then((function () {return resolve(__webpack_require__(/*! @/components/HM-messages/HM-messages.vue */ 240));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =


{
  components: {
    HMmessages: HMmessages },

  data: function data() {
    return {
      payment: '',
      delivering: 0,
      openid: '',
      merchantId: '',
      log: '',
      allNums: '',
      uniqueArr: [{}],
      // 收货地址
      address: '深圳市龙华区民治大道',
      username: '你的名字',
      tel: '20210814',
      shopname: '',
      tipsText: '',
      defaultSite: { name: '', site: '', phone: '' } };

  },
  methods: {
    addAddress: function addAddress() {
      uni.navigateTo({
        url: '/pages/address/index' });

    },

    // 发起微信支付：
    toPay: function toPay() {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var peopleobj, merchantid, ide, commod, logo, Paymentinfor, placeorder, placeorderobj, wxpay, paysucc;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:

                // 发起微信支付的数据
                /*
                	*1.下单客户信息
                	*2.商家信息
                */

                // 1.下单客户信息
                peopleobj = {
                  address: _this.address,
                  name: _this.username,
                  iphone: _this.tel };

                // ------------------------------------------------------------------------------
                // 2.商家信息
                // 商家标识
                merchantid = _this.merchantId;

                // 截取商家标识字符串
                ide = _this.merchantId.slice(0, 7);

                // 商家名称
                commod = _this.shopname;

                // 商家logo
                logo = _this.logo;
                // -----------------------------------------------------------------------------

                // 把发送给后台的数据以对象的形式存储
                Paymentinfor = {
                  type: 'placeOrder', //请求类型
                  peopleobj: peopleobj, //客户信息
                  arrinfo: _this.uniqueArr, //客户选中的订单
                  merchantid: merchantid, //商家标识
                  ide: ide, //商家标志字符串截取前7位数
                  commod: commod, //商家名称
                  logo: logo, //商家logo
                  useropenid: _this.openid, //用户openid
                  payment: _this.payment + _this.delivering // 支付的总价：
                };

                // es6:async sawit 异步编程同步化，分三步:
                /*
                	1.统一下单
                	2.发起支付
                	3.
                */

                // 1.统一下单:
                _context.next = 8;return _this.placeOrder(Paymentinfor);case 8:placeorder = _context.sent;
                placeorderobj = placeorder[1].data.datas;

                // 2.发起支付:
                _context.next = 12;return _this.wxPays(placeorderobj);case 12:wxpay = _context.sent;_context.next = 15;return (


                  _this.paySucc(wxpay));case 15:paysucc = _context.sent;
                _this.tipsText = '网络错误';case 17:case "end":return _context.stop();}}}, _callee);}))();
    },

    // 1.统一下单：
    placeOrder: function placeOrder(Paymentinfor) {var _this2 = this;
      return new Promise(function (resolve, reject) {
        (0, _api.default)(_request.wxPaymentUrl, 'POST', Paymentinfor).
        then(function (res) {
          _this2.HMmessages.show('余额不足，无法支付', { icon: 'error', background: '#F78181', duration: 3000 });

          // res[1].data.datas返回的值说明：
          /*
          	nonceStr: "UCbMTLPh5ZNskhHR" //随机字符串
          	out_trade_no: "5dfcf32-1628716988838" // 商户订单号
          	payauto: "5689754C5CAE383B32A63165B70E44F0" //签名
          	prepayId://预支付交易会话标识数据包。(缺少返回，无营业执照用不了真正的支付)
          	time_stamp: "1628716989" //时间戳,从1970年1月1日 00:00:00至今的秒数，即当前的时间
          	_id: "61143fbdc2ec5207cfe9c40b" //订单标识id
          */
          // resolve(res)
        }).
        catch(function (err) {
          reject(err, '支付错误');
        });
      });
    },

    // 2.发起支付请求
    wxPays: function wxPays(placeorderobj) {
      // timeStamp应该是String而不是Undefined;参数。package应该是String而不是Undefined
      return new Promise(function (resolve, reject) {
        wx.requestPayment({
          // 发起支付主要参数：
          timeStamp: placeorderobj.time_stamp, //时间截，必填，从1970年1月1日 00:00:00至今的秒数，即当前的时间
          nonceStr: placeorderobj.nonceStr, //随机字符串，必填，长度为32个字符以下
          package: "prepay_id=".concat(placeorderobj.prepayId), // 统一下单接口返回的prepay_id参数，必填，提交格式为prepay_id=***
          signType: 'MD5', //签名算法 非必填
          paySign: placeorderobj.payauto, //签名，必填
          // 调用接口成功的回调函数
          success: function success(res) {
            resolve(res);
          },
          // 调用接口失败的回调函数
          fail: function fail(err) {
            reject(err);
            var succ = '取消支付';
            var ico = 'success';
          } });

      });
    },
    // 3.
    paySucc: function paySucc(wxpay) {var _this3 = this;
      return new Promise(function (resolve, reject) {
        var data = {
          type: 'paysucc',
          out_trade_no: wxpay.out_trade_no,
          id: wxpay._id,
          merchantid: _this3.merchantId };

        (0, _api.default)(wexpayingUrl, 'POST', data).
        then(function (res) {
          console.log(res);
        }).
        catch(function (err) {
          console.log(err);
        });
      });
    },
    getAllSite: function getAllSite(siteArray) {
      for (var i = 0; i < siteArray.length; i++) {
        if (siteArray[i].default) {
          this.defaultSite = siteArray[i];
        }
      }
    } },

  onLoad: function onLoad(obj) {
    // 刚进入该页面取出本地的地址缓存的数组
    var siteArray = uni.getStorageSync('siteArray');
    // 调用方法for循环检查是否有默认标签的地址，有的话显示默认地址，没有不显示
    this.getAllSite(siteArray);

    // 跳转到本页面传过来的订单列表：
    if (obj.ide) {
      var ideObj = JSON.parse(obj.ide);
      // 商品的总价
      this.payment = ideObj.payment;
      // 配送费
      this.delivering = ideObj.delivering;
      // 用户openid
      this.openid = ideObj.openid;
      // 商家标识
      this.merchantId = ideObj.merchantId;
      // 商家logo
      this.logo = ideObj.logo;
      // 点的商品份数
      this.allNums = ideObj.allNums;
      // 商家标识
      this.merchantId = ideObj.merchantId;

      // 需要渲染的数据(已去重)
      this.uniqueArr = ideObj.uniqueArr;
      // 为什么要存？因为选择地址后跳转该页面获取不到订单列表，所以先存起来方便取出来
      uni.setStorageSync('uniqueArr', this.uniqueArr);
      // 商家名称
      this.shopname = ideObj.shopname;

      // 选择地址跳转该页面的传过来的地址
    } else if (obj.select) {
      this.uniqueArr = uni.getStorageSync('uniqueArr');
      this.defaultSite = JSON.parse(obj.select);
    }


  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 76:
/*!**********************************************************************************************************************************************************!*\
  !*** C:/Users/ASUS/github_depositories/mini-program/MT-meituan/pages/placeorder/placeorder.vue?vue&type=style&index=0&id=e7307e34&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_placeorder_vue_vue_type_style_index_0_id_e7307e34_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./placeorder.vue?vue&type=style&index=0&id=e7307e34&scoped=true&lang=css& */ 77);
/* harmony import */ var _D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_placeorder_vue_vue_type_style_index_0_id_e7307e34_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_placeorder_vue_vue_type_style_index_0_id_e7307e34_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_placeorder_vue_vue_type_style_index_0_id_e7307e34_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_placeorder_vue_vue_type_style_index_0_id_e7307e34_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_software_download_hbuildx_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_placeorder_vue_vue_type_style_index_0_id_e7307e34_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 77:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/ASUS/github_depositories/mini-program/MT-meituan/pages/placeorder/placeorder.vue?vue&type=style&index=0&id=e7307e34&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[70,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/placeorder/placeorder.js.map