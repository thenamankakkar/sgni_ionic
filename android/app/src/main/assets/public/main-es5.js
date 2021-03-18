(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
        "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
        "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
        "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
        "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
        "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
        "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
        "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
        "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
        "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
        "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
        "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
        "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
        "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
        "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
        "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
        "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
        "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
        "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
        "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
        "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
        "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
        "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
        "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
        "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
        "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
        "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
        "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
        "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
        "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
        "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
        "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
        "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
        "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
        "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
        "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
        "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
        "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
        "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
        "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
        "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
        "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
        "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n    <ion-menu menuId=\"main-menu\" contentId=\"main\">\n        <ion-content>\n            <div class=\"menu-header-bg\"></div>\n\n            <div class=\"header-content swing\">\n                <img src=\"../assets/icon/sgnilogo.png\"/>\n            </div>\n\n            <div class=\"action-button\">\n                <ion-button>\n                    <ion-icon slot=\"start\" name=\"add\"></ion-icon>\n                    My Code : {{this.mycode}}\n                </ion-button>\n            </div>\n\n\n            <ion-list class=\"menu-items\" lines=\"none\">\n                <ion-item class=\"active\">\n                    <ion-icon name=\"home-outline\"></ion-icon>\n                    Home\n                </ion-item>\n\n\n                <ion-item routerLink=\"/myprofile\">\n                    <ion-icon name=\"person-circle-outline\"></ion-icon>\n                    My Profile\n                </ion-item>\n\n\n                <ion-item (click)=\"fb()\">\n                    <ion-icon name=\"logo-facebook\"></ion-icon>\n                    Facebook\n                </ion-item>\n\n                <ion-item (click)=\"instagram()\">\n                    <ion-icon name=\"logo-instagram\"></ion-icon>\n                    Instagram\n                </ion-item>\n\n                <ion-item (click)=\"linkedin()\">\n                    <ion-icon name=\"logo-linkedin\"></ion-icon>\n                    Linkedin\n                </ion-item>\n\n                <ion-item (click)=\"twitter()\">\n                    <ion-icon name=\"logo-twitter\"></ion-icon>\n                    Twitter\n                </ion-item>\n\n\n                <ion-item (click)=\"terms()\">\n                    <ion-icon name=\"newspaper-outline\"></ion-icon>\n                    Terms\n                </ion-item>\n\n                <ion-item (click)=\"shareapp()\">\n                    <ion-icon name=\"share-social-outline\"></ion-icon>\n                    Share App\n                </ion-item>\n\n                <ion-item routerLink=\"/about\">\n                    <ion-icon name=\"people-outline\"></ion-icon>\n                    About SGNI\n                </ion-item>\n                <ion-item (click)=\"invite()\">\n                    <ion-icon name=\"person-add-outline\"></ion-icon>\n                    Invite & Earn\n                </ion-item>\n\n                <ion-item (click)=\"signout()\">\n                    <ion-icon name=\"exit-outline\"></ion-icon>\n                    Sign out\n                </ion-item>\n\n            </ion-list>\n        </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main\"></ion-router-outlet>\n</ion-app>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/enquiremodal/enquiremodal.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/enquiremodal/enquiremodal.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppEnquiremodalEnquiremodalPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"end\">\n            <ion-label color=\"danger\" (click)=\"dismiss()\">\n                <ion-icon name=\"backspace-outline\"></ion-icon>\n                dismiss\n            </ion-label>\n        </ion-buttons>\n        <ion-title>Enquire Now</ion-title>\n\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n    <div class=\"main-div\">\n        <ion-card>\n            <form [formGroup]=\"todo\" (ngSubmit)=\"logForm()\">\n                <ion-item>\n                    <ion-label position=\"floating\">Phone Number *</ion-label>\n                    <ion-input type=\"tel\" maxlength=\"10\" required formControlName=\"title\"></ion-input>\n                    <ion-icon name=\"call-outline\" slot=\"end\"></ion-icon>\n                </ion-item>\n\n                <ion-item>\n                    <ion-label>Select Time</ion-label>\n                    <ion-select value=\"anytime\" formControlName=\"anytime\">\n                        <ion-select-option value=\"anytime\">Anytime</ion-select-option>\n                        <ion-select-option value=\"9-12\">9-12</ion-select-option>\n                        <ion-select-option value=\"12-3\">12-3</ion-select-option>\n                        <ion-select-option value=\"3-6\">3-6</ion-select-option>\n                    </ion-select>\n                </ion-item>\n\n                <ion-item>\n                    <ion-label position=\"floating\" class=\"requirement\">Specify you requirement if any? (optional)\n                    </ion-label>\n                    <ion-input type=\"text\" maxlength=\"50\" formControlName=\"description\"></ion-input>\n                    <ion-icon name=\"link-outline\" slot=\"end\"></ion-icon>\n                </ion-item>\n                <ion-button class=\"main-button\" type=\"submit\" expand=\"block\" shape=\"round\" [disabled]=\"!todo.valid\">Enquire Now</ion-button>\n            </form>\n        </ion-card>\n    </div>\n\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/otpmodal/otpmodal.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/otpmodal/otpmodal.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOtpmodalOtpmodalPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-title>Enter OTP you received</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <form [formGroup]=\"todo\" (ngSubmit)=\"logForm()\">\n        <ion-card class=\"ion-padding\">\n\n\n        <ion-item>\n            <ion-label position=\"floating\">Enter OTP</ion-label>\n            <ion-input type=\"tel\" maxlength=\"4\" required  formControlName=\"otp\"></ion-input>\n            <ion-icon name=\"call-outline\" slot=\"end\"></ion-icon>\n        </ion-item>\n\n        <ion-button class=\"main-button\" type=\"submit\" expand=\"block\" shape=\"round\" [disabled]=\"!todo.valid\">Login</ion-button>\n        </ion-card>\n    </form>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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

      var routes = [{
        path: 'home',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | home-home-module */
          "home-home-module").then(__webpack_require__.bind(null,
          /*! ./home/home.module */
          "./src/app/home/home.module.ts")).then(function (m) {
            return m.HomePageModule;
          });
        }
      }, {
        path: '',
        redirectTo: 'splash',
        pathMatch: 'full'
      }, {
        path: 'splash',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-splash-splash-module */
          "pages-splash-splash-module").then(__webpack_require__.bind(null,
          /*! ./pages/splash/splash.module */
          "./src/app/pages/splash/splash.module.ts")).then(function (m) {
            return m.SplashPageModule;
          });
        }
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-login-login-module */
          "pages-login-login-module").then(__webpack_require__.bind(null,
          /*! ./pages/login/login.module */
          "./src/app/pages/login/login.module.ts")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'main',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-main-main-module */
          "pages-main-main-module").then(__webpack_require__.bind(null,
          /*! ./pages/main/main.module */
          "./src/app/pages/main/main.module.ts")).then(function (m) {
            return m.MainPageModule;
          });
        }
      }, {
        path: 'location',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-location-location-module */
          "pages-location-location-module").then(__webpack_require__.bind(null,
          /*! ./pages/location/location.module */
          "./src/app/pages/location/location.module.ts")).then(function (m) {
            return m.LocationPageModule;
          });
        }
      }, {
        path: 'cities/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-cities-cities-module */
          "pages-cities-cities-module").then(__webpack_require__.bind(null,
          /*! ./pages/cities/cities.module */
          "./src/app/pages/cities/cities.module.ts")).then(function (m) {
            return m.CitiesPageModule;
          });
        }
      }, {
        path: 'courses/:id/:location',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-courses-courses-module */
          "pages-courses-courses-module").then(__webpack_require__.bind(null,
          /*! ./pages/courses/courses.module */
          "./src/app/pages/courses/courses.module.ts")).then(function (m) {
            return m.CoursesPageModule;
          });
        }
      }, {
        path: 'enquiremodal',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./enquiremodal/enquiremodal.module */
          "./src/app/enquiremodal/enquiremodal.module.ts")).then(function (m) {
            return m.EnquiremodalPageModule;
          });
        }
      }, {
        path: 'knowmore/:instituteid/:courseid/:institutename/:instituteaddress/:instituteslug',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-knowmore-knowmore-module */
          "pages-knowmore-knowmore-module").then(__webpack_require__.bind(null,
          /*! ./pages/knowmore/knowmore.module */
          "./src/app/pages/knowmore/knowmore.module.ts")).then(function (m) {
            return m.KnowmorePageModule;
          });
        }
      }, {
        path: 'booknow/:courseid/:coursename/:institutename/:instituteaddress/:instituteid/:instituteslug',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-booknow-booknow-module */
          "pages-booknow-booknow-module").then(__webpack_require__.bind(null,
          /*! ./pages/booknow/booknow.module */
          "./src/app/pages/booknow/booknow.module.ts")).then(function (m) {
            return m.BooknowPageModule;
          });
        }
      }, {
        path: 'order',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-order-order-module */
          "pages-order-order-module").then(__webpack_require__.bind(null,
          /*! ./pages/order/order.module */
          "./src/app/pages/order/order.module.ts")).then(function (m) {
            return m.OrderPageModule;
          });
        }
      }, {
        path: 'wallet',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-wallet-wallet-module */
          "pages-wallet-wallet-module").then(__webpack_require__.bind(null,
          /*! ./pages/wallet/wallet.module */
          "./src/app/pages/wallet/wallet.module.ts")).then(function (m) {
            return m.WalletPageModule;
          });
        }
      }, {
        path: 'otpmodal',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./otpmodal/otpmodal.module */
          "./src/app/otpmodal/otpmodal.module.ts")).then(function (m) {
            return m.OtpmodalPageModule;
          });
        }
      }, {
        path: 'orderdetails/:coursename/:institutename/:instituteaddress/:fees/:rollno',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-orderdetails-orderdetails-module */
          "pages-orderdetails-orderdetails-module").then(__webpack_require__.bind(null,
          /*! ./pages/orderdetails/orderdetails.module */
          "./src/app/pages/orderdetails/orderdetails.module.ts")).then(function (m) {
            return m.OrderdetailsPageModule;
          });
        }
      }, {
        path: 'searchresult',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-searchresult-searchresult-module */
          "pages-searchresult-searchresult-module").then(__webpack_require__.bind(null,
          /*! ./pages/searchresult/searchresult.module */
          "./src/app/pages/searchresult/searchresult.module.ts")).then(function (m) {
            return m.SearchresultPageModule;
          });
        }
      }, {
        path: 'nointernet',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-nointernet-nointernet-module */
          "pages-nointernet-nointernet-module").then(__webpack_require__.bind(null,
          /*! ./pages/nointernet/nointernet.module */
          "./src/app/pages/nointernet/nointernet.module.ts")).then(function (m) {
            return m.NointernetPageModule;
          });
        }
      }, {
        path: 'splash',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-splash-splash-module */
          "pages-splash-splash-module").then(__webpack_require__.bind(null,
          /*! ./pages/splash/splash.module */
          "./src/app/pages/splash/splash.module.ts")).then(function (m) {
            return m.SplashPageModule;
          });
        }
      }, {
        path: 'myprofile',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-myprofile-myprofile-module */
          "pages-myprofile-myprofile-module").then(__webpack_require__.bind(null,
          /*! ./pages/myprofile/myprofile.module */
          "./src/app/pages/myprofile/myprofile.module.ts")).then(function (m) {
            return m.MyprofilePageModule;
          });
        }
      }, {
        path: 'about',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-about-about-module */
          "pages-about-about-module").then(__webpack_require__.bind(null,
          /*! ./pages/about/about.module */
          "./src/app/pages/about/about.module.ts")).then(function (m) {
            return m.AboutPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "./src/app/app.component.scss":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "* {\n  font-family: lato;\n}\n\n.menu-header-bg {\n  height: 100px;\n  width: 350px;\n  background-color: #ffffff;\n  background-image: linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%);\n  box-shadow: 0px 1px 10px rgba(98, 140, 255, 0.5);\n  transform: rotate(-15deg);\n  border-radius: 10px 10px 10px 50px;\n  margin-left: -18px;\n  margin-top: -50px;\n  margin-bottom: 60px;\n}\n\n.header-content {\n  width: 100%;\n  position: absolute;\n  top: 10px;\n  text-align: center;\n}\n\n.header-content img {\n  width: 150px;\n  border-radius: 10%;\n  margin-right: 14px;\n}\n\n.header-content h2 {\n  font-weight: 300;\n  color: #fff;\n}\n\n.header-content p {\n  font-size: 12px;\n  color: #e4e4e4;\n  font-weight: 100;\n  letter-spacing: 0.4px;\n}\n\n.action-button {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n\n.action-button ion-button {\n  text-transform: capitalize;\n  font-weight: 300;\n  background: #628cff;\n  border-radius: 7px;\n  box-shadow: none;\n}\n\n.action-button ion-icon {\n  margin-right: 20px;\n  color: #86979f;\n}\n\n.menu-items {\n  margin: 0px;\n}\n\n.menu-items ion-icon {\n  margin-right: 20px;\n  color: #86979f;\n}\n\n.menu-items ion-item {\n  padding-left: 20px;\n  margin-bottom: 10px;\n}\n\n.menu-items .active {\n  border-left: 5px solid;\n  color: #628cff;\n  padding-left: 15px;\n}\n\n.menu-items .active ion-icon {\n  color: #628cff;\n}\n\n/*swing animation for navbar logo*/\n\n.swing {\n  transform-origin: top center;\n  -webkit-animation-name: swing;\n  animation-name: swing;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n@-webkit-keyframes swing {\n  20% {\n    transform: rotate3d(0, 0, 1, 15deg);\n  }\n  40% {\n    transform: rotate3d(0, 0, 1, -10deg);\n  }\n  60% {\n    transform: rotate3d(0, 0, 1, 5deg);\n  }\n  80% {\n    transform: rotate3d(0, 0, 1, -5deg);\n  }\n  100% {\n    transform: rotate3d(0, 0, 1, 0deg);\n  }\n}\n\n@keyframes swing {\n  20% {\n    transform: rotate3d(0, 0, 1, 15deg);\n  }\n  40% {\n    transform: rotate3d(0, 0, 1, -10deg);\n  }\n  60% {\n    transform: rotate3d(0, 0, 1, 5deg);\n  }\n  80% {\n    transform: rotate3d(0, 0, 1, -5deg);\n  }\n  100% {\n    transform: rotate3d(0, 0, 1, 0deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUFDRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBRUEseUJBQUE7RUFDQSxrRUFBQTtFQUNBLGdEQUFBO0VBQ0EseUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQURGOztBQUlBO0VBQ0UsV0FBQTtFQUVBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBRkY7O0FBS0U7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFFQSxrQkFBQTtBQUpKOztBQU9FO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBTEo7O0FBUUU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFOSjs7QUFVQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBUEY7O0FBU0U7RUFDRSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBUEo7O0FBVUU7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUFSSjs7QUFZQTtFQUNFLFdBQUE7QUFURjs7QUFXRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQVRKOztBQVlFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQVZKOztBQWFFO0VBQ0Usc0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFYSjs7QUFhSTtFQUNFLGNBQUE7QUFYTjs7QUFrQkEsa0NBQUE7O0FBQ0E7RUFHRSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtBQWZGOztBQWtCQTtFQUNFO0lBRUUsbUNBQUE7RUFmRjtFQWlCQTtJQUVFLG9DQUFBO0VBZkY7RUFpQkE7SUFFRSxrQ0FBQTtFQWZGO0VBaUJBO0lBRUUsbUNBQUE7RUFmRjtFQWlCQTtJQUVFLGtDQUFBO0VBZkY7QUFDRjs7QUFrQkE7RUFDRTtJQUVFLG1DQUFBO0VBaEJGO0VBa0JBO0lBRUUsb0NBQUE7RUFoQkY7RUFrQkE7SUFFRSxrQ0FBQTtFQWhCRjtFQWtCQTtJQUVFLG1DQUFBO0VBaEJGO0VBa0JBO0lBRUUsa0NBQUE7RUFoQkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIGZvbnQtZmFtaWx5OiBsYXRvO1xyXG59XHJcblxyXG5cclxuLm1lbnUtaGVhZGVyLWJnIHtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIHdpZHRoOiAzNTBweDtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjZmZmZmZmIDAlLCAjZDdlMWVjIDc0JSk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDFweCAxMHB4IHJnYmEoOTgsIDE0MCwgMjU1LCAwLjUpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKC0xNWRlZyk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggNTBweDtcclxuICBtYXJnaW4tbGVmdDogLTE4cHg7XHJcbiAgbWFyZ2luLXRvcDogLTUwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxufVxyXG5cclxuLmhlYWRlci1jb250ZW50IHtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG5cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG4gICAgLy9ib3JkZXI6IDdweCBzb2xpZCAjNWU3Y2NjO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xyXG4gIH1cclxuXHJcbiAgaDIge1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogI2U0ZTRlNDtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC40cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYWN0aW9uLWJ1dHRvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICBpb24tYnV0dG9uIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGJhY2tncm91bmQ6ICM2MjhjZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuXHJcbiAgaW9uLWljb24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgY29sb3I6ICM4Njk3OWY7XHJcbiAgfVxyXG59XHJcblxyXG4ubWVudS1pdGVtcyB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcblxyXG4gIGlvbi1pY29uIHtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIGNvbG9yOiAjODY5NzlmO1xyXG4gIH1cclxuXHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcblxyXG4gIC5hY3RpdmUge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZDtcclxuICAgIGNvbG9yOiAjNjI4Y2ZmO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG5cclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgY29sb3I6ICM2MjhjZmY7XHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG5cclxuXHJcbi8qc3dpbmcgYW5pbWF0aW9uIGZvciBuYXZiYXIgbG9nbyovXHJcbi5zd2luZyB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3AgY2VudGVyO1xyXG4gIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiB0b3AgY2VudGVyO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBjZW50ZXI7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogc3dpbmc7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IHN3aW5nO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3dpbmcge1xyXG4gIDIwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgMTVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAxNWRlZyk7XHJcbiAgfVxyXG4gIDQwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTEwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTEwZGVnKTtcclxuICB9XHJcbiAgNjAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA1ZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgNWRlZyk7XHJcbiAgfVxyXG4gIDgwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtNWRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3dpbmcge1xyXG4gIDIwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgMTVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAxNWRlZyk7XHJcbiAgfVxyXG4gIDQwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTEwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTEwZGVnKTtcclxuICB9XHJcbiAgNjAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA1ZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgNWRlZyk7XHJcbiAgfVxyXG4gIDgwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtNWRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAwZGVnKTtcclxuICB9XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var _services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./services/login.service */
      "./src/app/services/login.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/esm/index.js");

      var Share = _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["Plugins"].Share;

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, statusBar, storage, alertController, navCtrl, service, router, param) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.statusBar = statusBar;
          this.storage = storage;
          this.alertController = alertController;
          this.navCtrl = navCtrl;
          this.service = service;
          this.router = router;
          this.param = param;
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.storage.get('scode');

                    case 2:
                      this.mycode = _context.sent;

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "initializeApp",
          value: function initializeApp() {
            var _this = this;

            this.platform.ready().then(function () {
              _this.statusBar.backgroundColorByHexString('#ffffff');

              _this.backButtonEvent();
            });
          }
        }, {
          key: "backButtonEvent",
          value: function backButtonEvent() {
            var _this2 = this;

            this.backButtonSubscription = this.platform.backButton.subscribe(function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var _this3 = this;

                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        this.routerOutlets.forEach(function (outlet) {
                          if (outlet && outlet.canGoBack()) {
                            outlet.pop();
                          } else if (_this3.router.url === '/home') {
                            _this3.presentAlertConfirm();
                          }
                        });

                      case 1:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));
            });
          }
        }, {
          key: "presentAlertConfirm",
          value: function presentAlertConfirm() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertController.create({
                        header: 'Confirm!',
                        message: 'Confirm to Exit App !!!',
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Exit',
                          handler: function handler() {
                            console.log('Confirm Okay');
                            navigator['app'].exitApp();
                          }
                        }]
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          } //Called when view is left

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // Unregister the custom back button action for this page
            this.backButtonSubscription.unsubscribe();
          }
        }, {
          key: "fb",
          value: function fb() {
            window.open('https://www.facebook.com/SGNI.IN/', '_system', 'location=yes');
          }
        }, {
          key: "twitter",
          value: function twitter() {
            window.open('https://twitter.com/sgnisgni', '_system', 'location=yes');
          }
        }, {
          key: "terms",
          value: function terms() {
            window.open('https://sgni.in/terms/', '_system', 'location=yes');
          }
        }, {
          key: "instagram",
          value: function instagram() {
            window.open('https://www.instagram.com/sgni.in/', '_system', 'location=yes');
          }
        }, {
          key: "linkedin",
          value: function linkedin() {
            window.open('https://www.linkedin.com/in/sgni/', '_system', 'location=yes');
          }
        }, {
          key: "signout",
          value: function signout() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this4 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Logout!',
                        message: 'Your are going to <strong>Logout</strong>',
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Okay',
                          handler: function handler() {
                            //this.router.navigateByUrl('/login', { replaceUrl: true });
                            _this4.navCtrl.navigateRoot('/login', {
                              replaceUrl: true
                            });

                            _this4.service.clear();

                            console.log('Confirm Okay');
                          }
                        }]
                      });

                    case 2:
                      alert = _context4.sent;
                      _context4.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "shareapp",
          value: function shareapp() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return Share.share({
                        title: 'Install The SGNI App',
                        text: 'Way to discount education',
                        url: 'https://play.google.com/store/apps/details?id=vinfo.tech.sgni',
                        dialogTitle: 'Share with buddies'
                      });

                    case 2:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5);
            }));
          }
        }, {
          key: "invite",
          value: function invite() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return Share.share({
                        title: 'Install The SGNI App',
                        text: 'Login with my referal code you will get discount money' + this.mycode,
                        // url: 'https://play.google.com/store/apps/details?id=vinfo.tech.sgni',
                        dialogTitle: 'Share with buddies'
                      });

                    case 2:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }];
      };

      AppComponent.propDecorators = {
        routerOutlets: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRouterOutlet"]]
        }]
      };
      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.scss */
        "./src/app/app.component.scss"))["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _services_login_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./services/login.service */
      "./src/app/services/login.service.ts");
      /* harmony import */


      var _enquiremodal_enquiremodal_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./enquiremodal/enquiremodal.module */
      "./src/app/enquiremodal/enquiremodal.module.ts");
      /* harmony import */


      var _otpmodal_otpmodal_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./otpmodal/otpmodal.module */
      "./src/app/otpmodal/otpmodal.module.ts");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic-native/network/ngx */
      "./node_modules/@ionic-native/network/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var ng2_search_filter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ng2-search-filter */
      "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _ionic_storage__WEBPACK_IMPORTED_MODULE_12__["IonicStorageModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _enquiremodal_enquiremodal_module__WEBPACK_IMPORTED_MODULE_10__["EnquiremodalPageModule"], _otpmodal_otpmodal_module__WEBPACK_IMPORTED_MODULE_11__["OtpmodalPageModule"]],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_15__["Ng2SearchPipeModule"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }, _services_login_service__WEBPACK_IMPORTED_MODULE_9__["LoginService"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_13__["Network"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/app/enquiremodal/enquiremodal-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/enquiremodal/enquiremodal-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: EnquiremodalPageRoutingModule */

    /***/
    function srcAppEnquiremodalEnquiremodalRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EnquiremodalPageRoutingModule", function () {
        return EnquiremodalPageRoutingModule;
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


      var _enquiremodal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./enquiremodal.page */
      "./src/app/enquiremodal/enquiremodal.page.ts");

      var routes = [{
        path: '',
        component: _enquiremodal_page__WEBPACK_IMPORTED_MODULE_3__["EnquiremodalPage"]
      }];

      var EnquiremodalPageRoutingModule = function EnquiremodalPageRoutingModule() {
        _classCallCheck(this, EnquiremodalPageRoutingModule);
      };

      EnquiremodalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EnquiremodalPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/enquiremodal/enquiremodal.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/enquiremodal/enquiremodal.module.ts ***!
      \*****************************************************/

    /*! exports provided: EnquiremodalPageModule */

    /***/
    function srcAppEnquiremodalEnquiremodalModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EnquiremodalPageModule", function () {
        return EnquiremodalPageModule;
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


      var _enquiremodal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./enquiremodal-routing.module */
      "./src/app/enquiremodal/enquiremodal-routing.module.ts");
      /* harmony import */


      var _enquiremodal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./enquiremodal.page */
      "./src/app/enquiremodal/enquiremodal.page.ts");

      var EnquiremodalPageModule = function EnquiremodalPageModule() {
        _classCallCheck(this, EnquiremodalPageModule);
      };

      EnquiremodalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _enquiremodal_routing_module__WEBPACK_IMPORTED_MODULE_5__["EnquiremodalPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_enquiremodal_page__WEBPACK_IMPORTED_MODULE_6__["EnquiremodalPage"]]
      })], EnquiremodalPageModule);
      /***/
    },

    /***/
    "./src/app/enquiremodal/enquiremodal.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/enquiremodal/enquiremodal.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppEnquiremodalEnquiremodalPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".requirement {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW5xdWlyZW1vZGFsL2VucXVpcmVtb2RhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxlQUFBO0FBQUYiLCJmaWxlIjoic3JjL2FwcC9lbnF1aXJlbW9kYWwvZW5xdWlyZW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ucmVxdWlyZW1lbnR7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG5cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/enquiremodal/enquiremodal.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/enquiremodal/enquiremodal.page.ts ***!
      \***************************************************/

    /*! exports provided: EnquiremodalPage */

    /***/
    function srcAppEnquiremodalEnquiremodalPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EnquiremodalPage", function () {
        return EnquiremodalPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/login.service */
      "./src/app/services/login.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var EnquiremodalPage = /*#__PURE__*/function () {
        function EnquiremodalPage(modalController, platform, formBuilder, service, router, toastController) {
          _classCallCheck(this, EnquiremodalPage);

          this.modalController = modalController;
          this.platform = platform;
          this.formBuilder = formBuilder;
          this.service = service;
          this.router = router;
          this.toastController = toastController;
          this.todo = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10)])],
            anytime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            description: ['']
          });
          this.platform.backButton.subscribeWithPriority(10, function () {
            console.log('Handler was called!');
          });
        }

        _createClass(EnquiremodalPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "dismiss",
          value: function dismiss() {
            // using the injected ModalController this page
            // can "dismiss" itself and optionally pass back data
            this.modalController.dismiss({
              'dismissed': true
            });
          }
        }, {
          key: "logForm",
          value: function logForm() {
            var _this5 = this;

            //console.log("sqlitedatais",this.register.get("sqliteone"));
            console.log(this.todo.value);
            this.serverData = this.todo.value;
            console.log('phone no is', this.serverData.title); // this.register.registerph(this.serverData);

            this.phone = this.todo.get('title');
            this.time = this.todo.get('time');
            this.msg = this.todo.get('msg');
            this.service.enquire(this.phone, this.time, this.msg).subscribe(function (data) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                var toast;
                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        console.log('enquire data', data);
                        this.router.navigateByUrl('/home', {
                          replaceUrl: true
                        });
                        _context7.next = 4;
                        return this.toastController.create({
                          message: 'Enquire Request Has Been Sent',
                          position: 'bottom',
                          duration: 3000
                        });

                      case 4:
                        toast = _context7.sent;
                        toast.present();
                        this.dismiss();

                      case 7:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _callee7, this);
              }));
            });
          }
        }]);

        return EnquiremodalPage;
      }();

      EnquiremodalPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: _services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }];
      };

      EnquiremodalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-enquiremodal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./enquiremodal.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/enquiremodal/enquiremodal.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./enquiremodal.page.scss */
        "./src/app/enquiremodal/enquiremodal.page.scss"))["default"]]
      })], EnquiremodalPage);
      /***/
    },

    /***/
    "./src/app/otpmodal/otpmodal-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/otpmodal/otpmodal-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: OtpmodalPageRoutingModule */

    /***/
    function srcAppOtpmodalOtpmodalRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OtpmodalPageRoutingModule", function () {
        return OtpmodalPageRoutingModule;
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


      var _otpmodal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./otpmodal.page */
      "./src/app/otpmodal/otpmodal.page.ts");

      var routes = [{
        path: '',
        component: _otpmodal_page__WEBPACK_IMPORTED_MODULE_3__["OtpmodalPage"]
      }];

      var OtpmodalPageRoutingModule = function OtpmodalPageRoutingModule() {
        _classCallCheck(this, OtpmodalPageRoutingModule);
      };

      OtpmodalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OtpmodalPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/otpmodal/otpmodal.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/otpmodal/otpmodal.module.ts ***!
      \*********************************************/

    /*! exports provided: OtpmodalPageModule */

    /***/
    function srcAppOtpmodalOtpmodalModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OtpmodalPageModule", function () {
        return OtpmodalPageModule;
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


      var _otpmodal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./otpmodal-routing.module */
      "./src/app/otpmodal/otpmodal-routing.module.ts");
      /* harmony import */


      var _otpmodal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./otpmodal.page */
      "./src/app/otpmodal/otpmodal.page.ts");

      var OtpmodalPageModule = function OtpmodalPageModule() {
        _classCallCheck(this, OtpmodalPageModule);
      };

      OtpmodalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _otpmodal_routing_module__WEBPACK_IMPORTED_MODULE_5__["OtpmodalPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_otpmodal_page__WEBPACK_IMPORTED_MODULE_6__["OtpmodalPage"]]
      })], OtpmodalPageModule);
      /***/
    },

    /***/
    "./src/app/otpmodal/otpmodal.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/otpmodal/otpmodal.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppOtpmodalOtpmodalPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL290cG1vZGFsL290cG1vZGFsLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/otpmodal/otpmodal.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/otpmodal/otpmodal.page.ts ***!
      \*******************************************/

    /*! exports provided: OtpmodalPage */

    /***/
    function srcAppOtpmodalOtpmodalPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OtpmodalPage", function () {
        return OtpmodalPage;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/login.service */
      "./src/app/services/login.service.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var OtpmodalPage = /*#__PURE__*/function () {
        function OtpmodalPage(formBuilder, register, http, modalController, router, toastController) {
          _classCallCheck(this, OtpmodalPage);

          this.formBuilder = formBuilder;
          this.register = register;
          this.http = http;
          this.modalController = modalController;
          this.router = router;
          this.toastController = toastController;
          this.Get_Student_ProfileId = [];
          this.todo = this.formBuilder.group({
            otp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }

        _createClass(OtpmodalPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            console.log("otpmodel", this.otp);
            console.log("sid", this.sid);
            console.log("scode", this.scode);
            console.log("got the phone no", this.phone);
            this.register.Get_Student_ProfileId(this.sid).subscribe(function (data) {
              console.log("the value of get student profile id", data);
              _this6.Get_Student_ProfileId = data;

              _this6.Get_Student_ProfileId.data.forEach(function (item) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                  return regeneratorRuntime.wrap(function _callee8$(_context8) {
                    while (1) {
                      switch (_context8.prev = _context8.next) {
                        case 0:
                          this.spid = item.spid;
                          console.log("spid id is this in the game", this.spid);

                        case 2:
                        case "end":
                          return _context8.stop();
                      }
                    }
                  }, _callee8, this);
                }));
              });
            });
            console.log("got the spid no", this.spid);
          }
        }, {
          key: "logForm",
          value: function logForm() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var toast;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      console.log(this.todo.value);
                      this.serverData = this.todo.value;

                      if (!(this.otp === this.serverData.otp)) {
                        _context9.next = 12;
                        break;
                      }

                      console.log("OTP MAtched");
                      this.register.set("sid", this.sid);
                      this.register.set("scode", this.scode);
                      this.register.set("phone", this.phone);
                      this.register.set("spid", this.spid);
                      this.router.navigateByUrl("/home", {
                        replaceUrl: true
                      });
                      this.modalController.dismiss();
                      _context9.next = 19;
                      break;

                    case 12:
                      if (!(this.otp !== this.serverData.otp)) {
                        _context9.next = 19;
                        break;
                      }

                      console.log("otp is not matching");
                      _context9.next = 16;
                      return this.toastController.create({
                        message: 'Invalid OTP',
                        position: 'middle',
                        duration: 3000,
                        color: 'danger',
                        buttons: [{
                          side: 'start',
                          icon: 'skull',
                          handler: function handler() {
                            console.log('Favorite clicked');
                          }
                        }]
                      });

                    case 16:
                      toast = _context9.sent;
                      toast.present();
                      this.todo.reset();

                    case 19:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }]);

        return OtpmodalPage;
      }();

      OtpmodalPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
        }];
      };

      OtpmodalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-otpmodal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./otpmodal.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/otpmodal/otpmodal.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./otpmodal.page.scss */
        "./src/app/otpmodal/otpmodal.page.scss"))["default"]]
      })], OtpmodalPage);
      /***/
    },

    /***/
    "./src/app/services/login.service.ts":
    /*!*******************************************!*\
      !*** ./src/app/services/login.service.ts ***!
      \*******************************************/

    /*! exports provided: LoginService */

    /***/
    function srcAppServicesLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginService", function () {
        return LoginService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var LoginService = /*#__PURE__*/function () {
        function LoginService(http, storage, router) {
          _classCallCheck(this, LoginService);

          this.http = http;
          this.storage = storage;
          this.router = router;
          this.result = {};
          this.url = 'https://sgni.in/api/run_new.php?call=register';
          this.httpOptionsPlain = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Accept': 'text/plain',
              'Content-Type': 'text/plain'
            }),
            'responseType': 'text'
          };
        }

        _createClass(LoginService, [{
          key: "register",
          value: function register(phone, ref) {
            return this.http.get("".concat(this.url, "&phone=").concat(phone, "&ref=").concat(ref));
          }
        }, {
          key: "registerph",
          value: function registerph(phone) {
            var _this7 = this;

            return new Promise(function (resolve, reject) {
              _this7.http.get("".concat(_this7.url, "&phone=").concat(phone)).subscribe(function (res) {
                console.log('RegisterApi', res);
                _this7.result = res;

                _this7.result.data.forEach(function (item) {
                  _this7.scode = item.scode;
                  _this7.otp = item.otp;
                  _this7.student_id = item.studentid;
                  console.log('single-id', item.studentid);
                  console.log('otp', item.otp);
                  console.log('scode', item.scode);
                });
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "location",
          value: function location() {
            return this.http.get("https://sgni.in/api/run_new.php?call=locationcity");
          }
        }, {
          key: "city",
          value: function city(locid) {
            return this.http.get("https://sgni.in/api/run_new.php?call=locationcity&param=".concat(locid));
          }
        }, {
          key: "courses",
          value: function courses(id) {
            var _this8 = this;

            return this.http.get("https://sgni.in/api/run_new.php?call=cview&loc=".concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
              if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                if (error.error instanceof ErrorEvent) {
                  console.error("Error Event");
                } else {
                  console.log("error status : ".concat(error.status, " ").concat(error.statusText));

                  switch (error.status) {
                    case 200:
                      //login
                      console.log(error.message);
                      break;

                    case 403:
                      //forbidden
                      _this8.router.navigateByUrl("/unauthorized");

                      break;
                  }
                }
              } else {
                console.error("some thing else happened");
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(error);
            }));
          }
        }, {
          key: "enquire",
          value: function enquire(phone, time, msg) {
            return this.http.get("https://sgni.in/api/run_new.php?call=enquire&phone=".concat(phone, "&time").concat(time, "&msg=").concat(msg));
          }
        }, {
          key: "knowmore",
          value: function knowmore(instituteId) {
            return this.http.get("https://sgni.in/api/run_new.php?call=CoursefeesbyIntId&param=".concat(instituteId));
          }
        }, {
          key: "Show_institutes_Photo",
          value: function Show_institutes_Photo(instituteId) {
            return this.http.get("https://sgni.in/api/run_new.php?call=Show_institutesPhotos&param=".concat(instituteId));
          }
        }, {
          key: "courseduration",
          value: function courseduration(institutecourseid) {
            return this.http.get("https://sgni.in/api/run_new.php?call=Show_Courses_Fees&param=".concat(institutecourseid));
          }
        }, {
          key: "payatcenter",
          value: function payatcenter(institutecourseid, feesid, batch, instituteid, instituteslug, studentid, wb) {
            return this.http.get("https://sgni.in/api/run_new.php?call=order&cid=".concat(institutecourseid, "&fees=").concat(feesid, "&batch=").concat(batch, "&sid=").concat(studentid, "&instid").concat(instituteid, "&slug=").concat(instituteslug, "&wb=").concat(wb));
          }
        }, {
          key: "bookings",
          value: function bookings(s) {
            return this.http.get("https://sgni.in/api/run_new.php?call=myorder&s=".concat(s));
          }
        }, {
          key: "wallet",
          value: function wallet(s) {
            return this.http.get("https://sgni.in/api/run_new.php?call=wallb&s=".concat(s));
          }
        }, {
          key: "mainpagetopcourses",
          value: function mainpagetopcourses() {
            return this.http.get("https://sgni.in/api/run_new.php?call=topinstitutes");
          }
        }, {
          key: "mainpagetopcourses2",
          value: function mainpagetopcourses2() {
            return this.http.get("https://sgni.in/api/run_new.php?call=topcourse&param=1");
          }
        }, {
          key: "mainpagetopcourses3",
          value: function mainpagetopcourses3() {
            return this.http.get("https://sgni.in/api/run_new.php?call=topcourse&param=2");
          }
        }, {
          key: "mainpagetopcourses_knowmore",
          value: function mainpagetopcourses_knowmore(instituteId) {
            return this.http.get("https://sgni.in/api/run_new.php?call=CoursefeesbyIntId&param=".concat(instituteId));
          }
          /*localstorage*/
          // set a key/value

        }, {
          key: "set",
          value: function set(key, value) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var result;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.prev = 0;
                      _context10.next = 3;
                      return this.storage.set(key, value);

                    case 3:
                      result = _context10.sent;
                      console.log('set string in storage: ' + result);
                      return _context10.abrupt("return", true);

                    case 8:
                      _context10.prev = 8;
                      _context10.t0 = _context10["catch"](0);
                      console.log(_context10.t0);
                      return _context10.abrupt("return", false);

                    case 12:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this, [[0, 8]]);
            }));
          }
        }, {
          key: "get",
          value: function get(key) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var result;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.prev = 0;
                      _context11.next = 3;
                      return this.storage.get(key);

                    case 3:
                      result = _context11.sent;
                      console.log('storageGET: ' + key + ': ' + result);

                      if (!(result != null)) {
                        _context11.next = 10;
                        break;
                      }

                      this.router.navigateByUrl('/home', {
                        replaceUrl: true
                      });
                      return _context11.abrupt("return", result);

                    case 10:
                      this.router.navigateByUrl('login', {
                        replaceUrl: true
                      });

                    case 11:
                      return _context11.abrupt("return", null);

                    case 14:
                      _context11.prev = 14;
                      _context11.t0 = _context11["catch"](0);
                      console.log(_context11.t0);
                      return _context11.abrupt("return", null);

                    case 18:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this, [[0, 14]]);
            }));
          }
        }, {
          key: "getphone",
          value: function getphone(key) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var result;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.prev = 0;
                      _context12.next = 3;
                      return this.storage.get(key);

                    case 3:
                      result = _context12.sent;
                      console.log('storageGET: ' + key + ': ' + result);
                      return _context12.abrupt("return", this.getphonevalue = result);

                    case 8:
                      _context12.prev = 8;
                      _context12.t0 = _context12["catch"](0);
                      console.log(_context12.t0);
                      return _context12.abrupt("return", null);

                    case 12:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this, [[0, 8]]);
            }));
          }
        }, {
          key: "clear",
          value: function clear() {
            this.storage.clear();
          }
        }, {
          key: "search",
          value: function search(value) {
            return this.http.get("https://sgni.in/api/run_new.php?call=find&a=".concat(value));
          }
        }, {
          key: "updatephone",
          value: function updatephone(spid, name, add, phone, gender) {
            return this.http.get("https://sgni.in/api/run_new.php?call=profileupdate&spid=".concat(spid, "&name=").concat(name, "&gender=").concat(gender, "&address=").concat(add, "&phone=").concat(phone));
          }
        }, {
          key: "Get_Student_ProfileId",
          value: function Get_Student_ProfileId(sid) {
            return this.http.get("https://sgni.in/api/run_new.php?call=Get_Student_ProfileId&param=".concat(sid));
          }
        }, {
          key: "my",
          value: function my() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      _context13.next = 2;
                      return this.storage.get('scode');

                    case 2:
                      this.mycode = _context13.sent;
                      return _context13.abrupt("return", this.mycode);

                    case 4:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          }
        }, {
          key: "getSid",
          value: function getSid(key) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              var result;
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      _context14.prev = 0;
                      _context14.next = 3;
                      return this.storage.get(key);

                    case 3:
                      result = _context14.sent;
                      console.log('storageGET: ' + key + ': ' + result);
                      return _context14.abrupt("return", this.getphonevalue = result);

                    case 8:
                      _context14.prev = 8;
                      _context14.t0 = _context14["catch"](0);
                      console.log(_context14.t0);
                      return _context14.abrupt("return", null);

                    case 12:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this, [[0, 8]]);
            }));
          }
        }]);

        return LoginService;
      }();

      LoginService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      LoginService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], LoginService);
      /***/
    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\xampp\htdocs\ionic\SGNI.in\sgni\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map