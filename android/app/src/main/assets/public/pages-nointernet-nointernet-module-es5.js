(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-nointernet-nointernet-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nointernet/nointernet.page.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nointernet/nointernet.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesNointernetNointernetPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title> No Internet Connection     <ion-spinner name=\"crescent\"></ion-spinner>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<!--  <img src=\"../../../assets/nointernet.gif\"/>\n\n  <ion-card-header>Make sure your connection is secure !</ion-card-header></ion-card>-->\n\n  <div class=\"container\">\n    <div class=\"headChar\"></div>\n    <div class=\"bodyChar\"></div>\n    <div class=\"firstLeg\"></div>\n    <div class=\"secondLeg\"></div>\n    <div class=\"shadowChar\"></div>\n  </div>\n\n<div class=\"text-flicker-in-glow\">Make sure your connection is secure !</div>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/nointernet/nointernet-routing.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/pages/nointernet/nointernet-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: NointernetPageRoutingModule */

    /***/
    function srcAppPagesNointernetNointernetRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NointernetPageRoutingModule", function () {
        return NointernetPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _nointernet_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./nointernet.page */
      "./src/app/pages/nointernet/nointernet.page.ts");

      var routes = [{
        path: '',
        component: _nointernet_page__WEBPACK_IMPORTED_MODULE_3__["NointernetPage"]
      }];

      var NointernetPageRoutingModule = function NointernetPageRoutingModule() {
        _classCallCheck(this, NointernetPageRoutingModule);
      };

      NointernetPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NointernetPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/nointernet/nointernet.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/pages/nointernet/nointernet.module.ts ***!
      \*******************************************************/

    /*! exports provided: NointernetPageModule */

    /***/
    function srcAppPagesNointernetNointernetModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NointernetPageModule", function () {
        return NointernetPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _nointernet_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./nointernet-routing.module */
      "./src/app/pages/nointernet/nointernet-routing.module.ts");
      /* harmony import */


      var _nointernet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./nointernet.page */
      "./src/app/pages/nointernet/nointernet.page.ts");

      var NointernetPageModule = function NointernetPageModule() {
        _classCallCheck(this, NointernetPageModule);
      };

      NointernetPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _nointernet_routing_module__WEBPACK_IMPORTED_MODULE_5__["NointernetPageRoutingModule"]],
        declarations: [_nointernet_page__WEBPACK_IMPORTED_MODULE_6__["NointernetPage"]]
      })], NointernetPageModule);
      /***/
    },

    /***/
    "./src/app/pages/nointernet/nointernet.page.scss":
    /*!*******************************************************!*\
      !*** ./src/app/pages/nointernet/nointernet.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesNointernetNointernetPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "img {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: 300px;\n}\n\nion-card-header {\n  color: red;\n  text-align: center;\n}\n\nion-spinner {\n  height: 5px;\n}\n\n/*loading*/\n\n.container {\n  margin: auto;\n  width: 300px;\n  height: 300px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  position: relative;\n}\n\n.headChar {\n  width: 50px;\n  height: 50px;\n  background-color: black;\n  border-radius: 50%;\n  position: relative;\n  left: 35px;\n  top: 20px;\n  -webkit-animation: headChange 1s infinite 1.6s ease-in;\n          animation: headChange 1s infinite 1.6s ease-in;\n}\n\n.bodyChar {\n  width: 40px;\n  height: 100px;\n  background-color: black;\n  border-radius: 60px 10px 0 0;\n  -webkit-animation: bodyChange 1s infinite 1.6s ease-in;\n          animation: bodyChange 1s infinite 1.6s ease-in;\n}\n\n.firstLeg, .secondLeg {\n  width: 35px;\n  height: 10px;\n  background-color: black;\n  border-radius: 20px 50px 50px 20px;\n  position: relative;\n  top: 55px;\n  left: 20px;\n  -webkit-animation: walk 2s infinite linear;\n          animation: walk 2s infinite linear;\n}\n\n.secondLeg {\n  top: 25px;\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s;\n}\n\n.shadowChar {\n  width: 100px;\n  height: 10px;\n  background-color: rgba(197, 82, 82, 0.2);\n  border-radius: 50%;\n  -webkit-animation: shadowChange 1s infinite 1.6s linear;\n          animation: shadowChange 1s infinite 1.6s linear;\n}\n\n@-webkit-keyframes headChange {\n  0% {\n    transform: translateY(0px);\n  }\n  50% {\n    transform: translateY(7px);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n\n@keyframes headChange {\n  0% {\n    transform: translateY(0px);\n  }\n  50% {\n    transform: translateY(7px);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n\n@-webkit-keyframes bodyChange {\n  0% {\n    transform: translateY(0px);\n  }\n  50% {\n    transform: translateY(3px);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n\n@keyframes bodyChange {\n  0% {\n    transform: translateY(0px);\n  }\n  50% {\n    transform: translateY(3px);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n\n@-webkit-keyframes walk {\n  0% {\n    transform: translateX(0px) rotate(0deg);\n  }\n  20% {\n    transform: translateX(-20px) rotate(0deg);\n  }\n  40% {\n    transform: translate(-40px, 0px) rotate(0deg);\n  }\n  60% {\n    transform: translate(-30px, -10px) rotate(35deg);\n  }\n  90% {\n    transform: translate(10px, -7px);\n  }\n  100% {\n    transform: translateX(0px);\n  }\n}\n\n@keyframes walk {\n  0% {\n    transform: translateX(0px) rotate(0deg);\n  }\n  20% {\n    transform: translateX(-20px) rotate(0deg);\n  }\n  40% {\n    transform: translate(-40px, 0px) rotate(0deg);\n  }\n  60% {\n    transform: translate(-30px, -10px) rotate(35deg);\n  }\n  90% {\n    transform: translate(10px, -7px);\n  }\n  100% {\n    transform: translateX(0px);\n  }\n}\n\n@-webkit-keyframes shadowChange {\n  0% {\n    width: 100px;\n  }\n  50% {\n    width: 110px;\n  }\n  100% {\n    width: 100px;\n  }\n}\n\n@keyframes shadowChange {\n  0% {\n    width: 100px;\n  }\n  50% {\n    width: 110px;\n  }\n  100% {\n    width: 100px;\n  }\n}\n\nion-card {\n  background-color: snow;\n}\n\n.text-flicker-in-glow {\n  -webkit-animation: text-flicker-in-glow 2s linear both;\n  animation: text-flicker-in-glow 4s linear both;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  text-align: center;\n  color: red;\n  font-weight: bolder;\n}\n\n@-webkit-keyframes text-flicker-in-glow {\n  0% {\n    opacity: 0;\n  }\n  10% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  10.1% {\n    opacity: 1;\n    text-shadow: none;\n  }\n  10.2% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  20% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  20.1% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.25);\n  }\n  20.6% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  30% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  30.1% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);\n  }\n  30.5% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);\n  }\n  30.6% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  45% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  45.1% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);\n  }\n  50% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);\n  }\n  55% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);\n  }\n  55.1% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  57% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  57.1% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35);\n  }\n  60% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35);\n  }\n  60.1% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  65% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  65.1% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);\n  }\n  75% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);\n  }\n  75.1% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  77% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  77.1% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1);\n  }\n  85% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1);\n  }\n  85.1% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  86% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  86.1% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25), 0 0 100px rgba(255, 255, 255, 0.1);\n  }\n  100% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25), 0 0 100px rgba(255, 255, 255, 0.1);\n  }\n}\n\n@keyframes text-flicker-in-glow {\n  0% {\n    opacity: 0;\n  }\n  10% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  10.1% {\n    opacity: 1;\n    text-shadow: none;\n  }\n  10.2% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  20% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  20.1% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.25);\n  }\n  20.6% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  30% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  30.1% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);\n  }\n  30.5% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);\n  }\n  30.6% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  45% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  45.1% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);\n  }\n  50% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);\n  }\n  55% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);\n  }\n  55.1% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  57% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  57.1% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35);\n  }\n  60% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35);\n  }\n  60.1% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  65% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  65.1% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);\n  }\n  75% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);\n  }\n  75.1% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  77% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  77.1% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1);\n  }\n  85% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1);\n  }\n  85.1% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  86% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  86.1% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25), 0 0 100px rgba(255, 255, 255, 0.1);\n  }\n  100% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25), 0 0 100px rgba(255, 255, 255, 0.1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbm9pbnRlcm5ldC9ub2ludGVybmV0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFDQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtBQUVGOztBQUFBO0VBRUUsV0FBQTtBQUVGOztBQUFBLFVBQUE7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFHRjs7QUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxzREFBQTtVQUFBLDhDQUFBO0FBR0Y7O0FBQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzREFBQTtVQUFBLDhDQUFBO0FBR0Y7O0FBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsMENBQUE7VUFBQSxrQ0FBQTtBQUdGOztBQUFBO0VBQ0UsU0FBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7QUFHRjs7QUFBQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQkFBQTtFQUNBLHVEQUFBO1VBQUEsK0NBQUE7QUFHRjs7QUFDQTtFQUNFO0lBRUUsMEJBQUE7RUFDRjtFQUVBO0lBRUUsMEJBQUE7RUFERjtFQUdBO0lBQ0UsMEJBQUE7RUFERjtBQUNGOztBQVhBO0VBQ0U7SUFFRSwwQkFBQTtFQUNGO0VBRUE7SUFFRSwwQkFBQTtFQURGO0VBR0E7SUFDRSwwQkFBQTtFQURGO0FBQ0Y7O0FBSUE7RUFDRTtJQUNFLDBCQUFBO0VBRkY7RUFJQTtJQUNFLDBC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QTBObDhHO0VBMU55a0g7SUFBSSxVQUFBO0lBQVUsMEpBQUE7RUE4TnZsSDtFQTlOOHRIO0lBQU0sVUFBQTtJQUFVLGlCQUFBO0VBa085dUg7RUFsTyt2SDtJQUFJLFVBQUE7SUFBVSxpQkFBQTtFQXNPN3dIO0VBdE84eEg7SUFBTSxVQUFBO0lBQVUsMkpBQUE7RUEwTzl5SDtFQTFPczdIO0lBQUssVUFBQTtJQUFVLDJKQUFBO0VBOE9yOEg7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vaW50ZXJuZXQvbm9pbnRlcm5ldC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWd7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbn1cclxuaW9uLWNhcmQtaGVhZGVye1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmlvbi1zcGlubmVye1xyXG5cclxuICBoZWlnaHQ6IDVweDtcclxufVxyXG4vKmxvYWRpbmcqL1xyXG4uY29udGFpbmVyIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaGVhZENoYXIge1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IDM1cHg7XHJcbiAgdG9wOiAyMHB4O1xyXG4gIGFuaW1hdGlvbjogaGVhZENoYW5nZSAxcyBpbmZpbml0ZSAxLjZzIGVhc2UtaW47XHJcbn1cclxuXHJcbi5ib2R5Q2hhciB7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiA2MHB4IDEwcHggMCAwO1xyXG4gIGFuaW1hdGlvbjogYm9keUNoYW5nZSAxcyBpbmZpbml0ZSAxLjZzIGVhc2UtaW47XHJcbn1cclxuXHJcbi5maXJzdExlZywgLnNlY29uZExlZyB7XHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHggNTBweCA1MHB4IDIwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogNTVweDtcclxuICBsZWZ0OiAyMHB4O1xyXG4gIGFuaW1hdGlvbjogd2FsayAycyBpbmZpbml0ZSBsaW5lYXI7XHJcbn1cclxuXHJcbi5zZWNvbmRMZWcge1xyXG4gIHRvcDogMjVweDtcclxuICBhbmltYXRpb24tZGVsYXk6IDFzO1xyXG59XHJcblxyXG4uc2hhZG93Q2hhciB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5NywgODIsIDgyLCAwLjIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBhbmltYXRpb246IHNoYWRvd0NoYW5nZSAxcyBpbmZpbml0ZSAxLjZzIGxpbmVhcjtcclxufVxyXG5cclxuXHJcbkBrZXlmcmFtZXMgaGVhZENoYW5nZSB7XHJcbiAgMCUge1xyXG5cclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gIH1cclxuXHJcbiAgNTAlIHtcclxuXHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoN3B4KTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYm9keUNoYW5nZSB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3B4KTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5Aa2V5ZnJhbWVzIHdhbGsge1xyXG5cclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDIwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpIHJvdGF0ZSgwZGVnKTtcclxuXHJcbiAgfVxyXG4gIDQwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNDBweCwgMHB4KSByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG5cclxuICA2MCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTMwcHgsIC0xMHB4KSByb3RhdGUoMzVkZWcpO1xyXG4gIH1cclxuXHJcblxyXG4gIDkwJSB7XHJcblxyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTBweCwgLTdweCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQGtleWZyYW1lcyBzaGFkb3dDaGFuZ2Uge1xyXG4gIDAlIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIHdpZHRoOiAxMTBweDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgfVxyXG59XHJcbmlvbi1jYXJke1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHNub3c7XHJcbn1cclxuLnRleHQtZmxpY2tlci1pbi1nbG93ey13ZWJraXQtYW5pbWF0aW9uOnRleHQtZmxpY2tlci1pbi1nbG93IDJzIGxpbmVhciBib3RoO2FuaW1hdGlvbjp0ZXh0LWZsaWNrZXItaW4tZ2xvdyA0cyBsaW5lYXIgYm90aDtcclxuIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyB0ZXh0LWZsaWNrZXItaW4tZ2xvd3swJXtvcGFjaXR5OjB9MTAle29wYWNpdHk6MDt0ZXh0LXNoYWRvdzpub25lfTEwLjEle29wYWNpdHk6MTt0ZXh0LXNoYWRvdzpub25lfTEwLjIle29wYWNpdHk6MDt0ZXh0LXNoYWRvdzpub25lfTIwJXtvcGFjaXR5OjA7dGV4dC1zaGFkb3c6bm9uZX0yMC4xJXtvcGFjaXR5OjE7dGV4dC1zaGFkb3c6MCAwIDMwcHggcmdiYSgyNTUsMjU1LDI1NSwuMjUpfTIwLjYle29wYWNpdHk6MDt0ZXh0LXNoYWRvdzpub25lfTMwJXtvcGFjaXR5OjA7dGV4dC1zaGFkb3c6bm9uZX0zMC4xJXtvcGFjaXR5OjE7dGV4dC1zaGFkb3c6MCAwIDMwcHggcmdiYSgyNTUsMjU1LDI1NSwuNDUpLDAgMCA2MHB4IHJnYmEoMjU1LDI1NSwyNTUsLjI1KX0zMC41JXtvcGFjaXR5OjE7dGV4dC1zaGFkb3c6MCAwIDMwcHggcmdiYSgyNTUsMjU1LDI1NSwuNDUpLDAgMCA2MHB4IHJnYmEoMjU1LDI1NSwyNTUsLjI1KX0zMC42JXtvcGFjaXR5OjA7dGV4dC1zaGFkb3c6bm9uZX00NSV7b3BhY2l0eTowO3RleHQtc2hhZG93Om5vbmV9NDUuMSV7b3BhY2l0eToxO3RleHQtc2hhZG93OjAgMCAzMHB4IHJnYmEoMjU1LDI1NSwyNTUsLjQ1KSwwIDAgNjBweCByZ2JhKDI1NSwyNTUsMjU1LC4yNSl9NTAle29wYWNpdHk6MTt0ZXh0LXNoYWRvdzowIDAgMzBweCByZ2JhKDI1NSwyNTUsMjU1LC40NSksMCAwIDYwcHggcmdiYSgyNTUsMjU1LDI1NSwuMjUpfTU1JXtvcGFjaXR5OjE7dGV4dC1zaGFkb3c6MCAwIDMwcHggcmdiYSgyNTUsMjU1LDI1NSwuNDUpLDAgMCA2MHB4IHJnYmEoMjU1LDI1NSwyNTUsLjI1KX01NS4xJXtvcGFjaXR5OjA7dGV4dC1zaGFkb3c6bm9uZX01NyV7b3BhY2l0eTowO3RleHQtc2hhZG93Om5vbmV9NTcuMSV7b3BhY2l0eToxO3RleHQtc2hhZG93OjAgMCAzMHB4IHJnYmEoMjU1LDI1NSwyNTUsLjU1KSwwIDAgNjBweCByZ2JhKDI1NSwyNTUsMjU1LC4zNSl9NjAle29wYWNpdHk6MTt0ZXh0LXNoYWRvdzowIDAgMzBweCByZ2JhKDI1NSwyNTUsMjU1LC41NSksMCAwIDYwcHggcmdiYSgyNTUsMjU1LDI1NSwuMzUpfTYwLjEle29wYWNpdHk6MDt0ZXh0LXNoYWRvdzpub25lfTY1JXtvcGFjaXR5OjA7dGV4dC1zaGFkb3c6bm9uZX02NS4xJXtvcGFjaXR5OjE7dGV4dC1zaGFkb3c6MCAwIDMwcHggcmdiYSgyNTUsMjU1LDI1NSwuNTUpLDAgMCA2MHB4IHJnYmEoMjU1LDI1NSwyNTUsLjM1KSwwIDAgMTAwcHggcmdiYSgyNTUsMjU1LDI1NSwuMSl9NzUle29wYWNpdHk6MTt0ZXh0LXNoYWRvdzowIDAgMzBweCByZ2JhKDI1NSwyNTUsMjU1LC41NSksMCAwIDYwcHggcmdiYSgyNTUsMjU1LDI1NSwuMzUpLDAgMCAxMDBweCByZ2JhKDI1NSwyNTUsMjU1LC4xKX03NS4xJXtvcGFjaXR5OjA7dGV4dC1zaGFkb3c6bm9uZX03NyV7b3BhY2l0eTowO3RleHQtc2hhZG93Om5vbmV9NzcuMSV7b3BhY2l0eToxO3RleHQtc2hhZG93OjAgMCAzMHB4IHJnYmEoMjU1LDI1NSwyNTUsLjU1KSwwIDAgNjBweCByZ2JhKDI1NSwyNTUsMjU1LC40KSwwIDAgMTEwcHggcmdiYSgyNTUsMjU1LDI1NSwuMiksMCAwIDEwMHB4IHJnYmEoMjU1LDI1NSwyNTUsLjEpfTg1JXtvcGFjaXR5OjE7dGV4dC1zaGFkb3c6MCAwIDMwcHggcmdiYSgyNTUsMjU1LDI1NSwuNTUpLDAgMCA2MHB4IHJnYmEoMjU1LDI1NSwyNTUsLjQpLDAgMCAxMTBweCByZ2JhKDI1NSwyNTUsMjU1LC4yKSwwIDAgMTAwcHggcmdiYSgyNTUsMjU1LDI1NSwuMSl9ODUuMSV7b3BhY2l0eTowO3RleHQtc2hhZG93Om5vbmV9ODYle29wYWNpdHk6MDt0ZXh0LXNoYWRvdzpub25lfTg2LjEle29wYWNpdHk6MTt0ZXh0LXNoYWRvdzowIDAgMzBweCByZ2JhKDI1NSwyNTUsMjU1LC42KSwwIDAgNjBweCByZ2JhKDI1NSwyNTUsMjU1LC40NSksMCAwIDExMHB4IHJnYmEoMjU1LDI1NSwyNTUsLjI1KSwwIDAgMTAwcHggcmdiYSgyNTUsMjU1LDI1NSwuMSl9MTAwJXtvcGFjaXR5OjE7dGV4dC1zaGFkb3c6MCAwIDMwcHggcmdiYSgyNTUsMjU1LDI1NSwuNiksMCAwIDYwcHggcmdiYSgyNTUsMjU1LDI1NSwuNDUpLDAgMCAxMTBweCByZ2JhKDI1NSwyNTUsMjU1LC4yNSksMCAwIDEwMHB4IHJnYmEoMjU1LDI1NSwyNTUsLjEpfX1Aa2V5ZnJhbWVzIHRleHQtZmxpY2tlci1pbi1nbG93ezAle29wYWNpdHk6MH0xMCV7b3BhY2l0eTowO3RleHQtc2hhZG93Om5vbmV9MTAuMSV7b3BhY2l0eToxO3RleHQtc2hhZG93Om5vbmV9MTAuMiV7b3BhY2l0eTowO3RleHQtc2hhZG93Om5vbmV9MjAle29wYWNpdHk6MDt0ZXh0LXNoYWRvdzpub25lfTIwLjEle29wYWNpdHk6MTt0ZXh0LXNoYWRvdzowIDAgMzBweCByZ2JhKDI1NSwyNTUsMjU1LC4yNSl9MjAuNiV7b3BhY2l0eTowO3RleHQtc2hhZG93Om5vbmV9MzAle29wYWNpdHk6MDt0ZXh0LXNoYWRvdzpub25lfTMwLjEle29wYWNpdHk6MTt0ZXh0LXNoYWRvdzowIDAgMzBweCByZ2JhKDI1NSwyNTUsMjU1LC40NSksMCAwIDYwcHggcmdiYSgyNTUsMjU1LDI1NSwuMjUpfTMwLjUle29wYWNpdHk6MTt0ZXh0LXNoYWRvdzowIDAgMzBweCByZ2JhKDI1NSwyNTUsMjU1LC40NSksMCAwIDYwcHggcmdiYSgyNTUsMjU1LDI1NSwuMjUpfTMwLjYle29wYWNpdHk6MDt0ZXh0LXNoYWRvdzpub25lfTQ1JXtvcGFjaXR5OjA7dGV4dC1zaGFkb3c6bm9uZX00NS4xJXtvcGFjaXR5OjE7dGV4dC1zaGFkb3c6MCAwIDMwcHggcmdiYSgyNTUsMjU1LDI1NSwuNDUpLDAgMCA2MHB4IHJnYmEoMjU1LDI1NSwyNTUsLjI1KX01MCV7b3BhY2l0eToxO3RleHQtc2hhZG93OjAgMCAzMHB4IHJnYmEoMjU1LDI1NSwyNTUsLjQ1KSwwIDAgNjBweCByZ2JhKDI1NSwyNTUsMjU1LC4yNSl9NTUle29wYWNpdHk6MTt0ZXh0LXNoYWRvdzowIDAgMzBweCByZ2JhKDI1NSwyNTUsMjU1LC40NSksMCAwIDYwcHggcmdiYSgyNTUsMjU1LDI1NSwuMjUpfTU1LjEle29wYWNpdHk6MDt0ZXh0LXNoYWRvdzpub25lfTU3JXtvcGFjaXR5OjA7dGV4dC1zaGFkb3c6bm9uZX01Ny4xJXtvcGFjaXR5OjE7dGV4dC1zaGFkb3c6MCAwIDMwcHggcmdiYSgyNTUsMjU1LDI1NSwuNTUpLDAgMCA2MHB4IHJnYmEoMjU1LDI1NSwyNTUsLjM1KX02MCV7b3BhY2l0eToxO3RleHQtc2hhZG93OjAgMCAzMHB4IHJnYmEoMjU1LDI1NSwyNTUsLjU1KSwwIDAgNjBweCByZ2JhKDI1NSwyNTUsMjU1LC4zNSl9NjAuMSV7b3BhY2l0eTowO3RleHQtc2hhZG93Om5vbmV9NjUle29wYWNpdHk6MDt0ZXh0LXNoYWRvdzpub25lfTY1LjEle29wYWNpdHk6MTt0ZXh0LXNoYWRvdzowIDAgMzBweCByZ2JhKDI1NSwyNTUsMjU1LC41NSksMCAwIDYwcHggcmdiYSgyNTUsMjU1LDI1NSwuMzUpLDAgMCAxMDBweCByZ2JhKDI1NSwyNTUsMjU1LC4xKX03NSV7b3BhY2l0eToxO3RleHQtc2hhZG93OjAgMCAzMHB4IHJnYmEoMjU1LDI1NSwyNTUsLjU1KSwwIDAgNjBweCByZ2JhKDI1NSwyNTUsMjU1LC4zNSksMCAwIDEwMHB4IHJnYmEoMjU1LDI1NSwyNTUsLjEpfTc1LjEle29wYWNpdHk6MDt0ZXh0LXNoYWRvdzpub25lfTc3JXtvcGFjaXR5OjA7dGV4dC1zaGFkb3c6bm9uZX03Ny4xJXtvcGFjaXR5OjE7dGV4dC1zaGFkb3c6MCAwIDMwcHggcmdiYSgyNTUsMjU1LDI1NSwuNTUpLDAgMCA2MHB4IHJnYmEoMjU1LDI1NSwyNTUsLjQpLDAgMCAxMTBweCByZ2JhKDI1NSwyNTUsMjU1LC4yKSwwIDAgMTAwcHggcmdiYSgyNTUsMjU1LDI1NSwuMSl9ODUle29wYWNpdHk6MTt0ZXh0LXNoYWRvdzowIDAgMzBweCByZ2JhKDI1NSwyNTUsMjU1LC41NSksMCAwIDYwcHggcmdiYSgyNTUsMjU1LDI1NSwuNCksMCAwIDExMHB4IHJnYmEoMjU1LDI1NSwyNTUsLjIpLDAgMCAxMDBweCByZ2JhKDI1NSwyNTUsMjU1LC4xKX04NS4xJXtvcGFjaXR5OjA7dGV4dC1zaGFkb3c6bm9uZX04NiV7b3BhY2l0eTowO3RleHQtc2hhZG93Om5vbmV9ODYuMSV7b3BhY2l0eToxO3RleHQtc2hhZG93OjAgMCAzMHB4IHJnYmEoMjU1LDI1NSwyNTUsLjYpLDAgMCA2MHB4IHJnYmEoMjU1LDI1NSwyNTUsLjQ1KSwwIDAgMTEwcHggcmdiYSgyNTUsMjU1LDI1NSwuMjUpLDAgMCAxMDBweCByZ2JhKDI1NSwyNTUsMjU1LC4xKX0xMDAle29wYWNpdHk6MTt0ZXh0LXNoYWRvdzowIDAgMzBweCByZ2JhKDI1NSwyNTUsMjU1LC42KSwwIDAgNjBweCByZ2JhKDI1NSwyNTUsMjU1LC40NSksMCAwIDExMHB4IHJnYmEoMjU1LDI1NSwyNTUsLjI1KSwwIDAgMTAwcHggcmdiYSgyNTUsMjU1LDI1NSwuMSl9fVxyXG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/nointernet/nointernet.page.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/nointernet/nointernet.page.ts ***!
      \*****************************************************/

    /*! exports provided: NointernetPage */

    /***/
    function srcAppPagesNointernetNointernetPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NointernetPage", function () {
        return NointernetPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/esm/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var _capacitor_core__WEBP = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"],
          Network = _capacitor_core__WEBP.Network,
          Toast = _capacitor_core__WEBP.Toast;

      var NointernetPage = /*#__PURE__*/function () {
        function NointernetPage(navCtrl) {
          _classCallCheck(this, NointernetPage);

          this.navCtrl = navCtrl;
          var ref = this;
          Network.addListener('networkStatusChange', function (val) {
            if (val.connected) {
              ref.navCtrl.navigateRoot('/home', {
                replaceUrl: true
              });
            } else {
              ref.navCtrl.navigateRoot('/nointernet', {
                replaceUrl: true
              });
            }
          });
        }

        _createClass(NointernetPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NointernetPage;
      }();

      NointernetPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }];
      };

      NointernetPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nointernet',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./nointernet.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nointernet/nointernet.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./nointernet.page.scss */
        "./src/app/pages/nointernet/nointernet.page.scss"))["default"]]
      })], NointernetPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-nointernet-nointernet-module-es5.js.map