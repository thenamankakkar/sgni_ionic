(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-wallet-wallet-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wallet/wallet.page.html":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wallet/wallet.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesWalletWalletPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Wallet</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-card>\n  <ion-item>\n    <ion-header>\n      <ion-icon name=\"wallet\"></ion-icon>\n      Amount in Wallet\n    </ion-header>\n    <ion-card-content>\n      <ion-header>\n        &#8377;{{this.result[0] | number}}\n      </ion-header>\n    </ion-card-content>\n  </ion-item>\n</ion-card>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/wallet/wallet-routing.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/pages/wallet/wallet-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: WalletPageRoutingModule */

    /***/
    function srcAppPagesWalletWalletRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WalletPageRoutingModule", function () {
        return WalletPageRoutingModule;
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


      var _wallet_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./wallet.page */
      "./src/app/pages/wallet/wallet.page.ts");

      var routes = [{
        path: '',
        component: _wallet_page__WEBPACK_IMPORTED_MODULE_3__["WalletPage"]
      }];

      var WalletPageRoutingModule = function WalletPageRoutingModule() {
        _classCallCheck(this, WalletPageRoutingModule);
      };

      WalletPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], WalletPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/wallet/wallet.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/pages/wallet/wallet.module.ts ***!
      \***********************************************/

    /*! exports provided: WalletPageModule */

    /***/
    function srcAppPagesWalletWalletModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WalletPageModule", function () {
        return WalletPageModule;
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


      var _wallet_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./wallet-routing.module */
      "./src/app/pages/wallet/wallet-routing.module.ts");
      /* harmony import */


      var _wallet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./wallet.page */
      "./src/app/pages/wallet/wallet.page.ts");

      var WalletPageModule = function WalletPageModule() {
        _classCallCheck(this, WalletPageModule);
      };

      WalletPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _wallet_routing_module__WEBPACK_IMPORTED_MODULE_5__["WalletPageRoutingModule"]],
        declarations: [_wallet_page__WEBPACK_IMPORTED_MODULE_6__["WalletPage"]]
      })], WalletPageModule);
      /***/
    },

    /***/
    "./src/app/pages/wallet/wallet.page.scss":
    /*!***********************************************!*\
      !*** ./src/app/pages/wallet/wallet.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesWalletWalletPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header {\n  color: lawngreen;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd2FsbGV0L3dhbGxldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvd2FsbGV0L3dhbGxldC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xyXG4gIGNvbG9yOiBsYXduZ3JlZW47XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/pages/wallet/wallet.page.ts":
    /*!*********************************************!*\
      !*** ./src/app/pages/wallet/wallet.page.ts ***!
      \*********************************************/

    /*! exports provided: WalletPage */

    /***/
    function srcAppPagesWalletWalletPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WalletPage", function () {
        return WalletPage;
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


      var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/login.service */
      "./src/app/services/login.service.ts");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

      var WalletPage = /*#__PURE__*/function () {
        function WalletPage(service, storage) {
          _classCallCheck(this, WalletPage);

          this.service = service;
          this.storage = storage;
          this.result = [];
          this.result2 = {};
        }

        _createClass(WalletPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var result;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.storage.get("sid");

                    case 2:
                      result = _context.sent;
                      console.log(result);
                      this.service.wallet(result).subscribe(function (data) {
                        _this.result = data['data'];
                        console.log(_this.result[0]);
                      });

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return WalletPage;
      }();

      WalletPage.ctorParameters = function () {
        return [{
          type: _services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
        }];
      };

      WalletPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wallet',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./wallet.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wallet/wallet.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./wallet.page.scss */
        "./src/app/pages/wallet/wallet.page.scss"))["default"]]
      })], WalletPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-wallet-wallet-module-es5.js.map