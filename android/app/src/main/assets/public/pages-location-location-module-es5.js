(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-location-location-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/location/location.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/location/location.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesLocationLocationPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Choose Location</ion-title>\n      </ion-toolbar>\n  <ion-searchbar [(ngModel)]=\"searchTerm\"  [animated]=\"true\" placeholder=\"Search your location\"></ion-searchbar>\n</ion-header>\n\n<ion-content>\n  <ion-list >\n    <ion-card>\n    <ion-item-sliding *ngFor=\"let grocery of result2 | filter: searchTerm \">\n      <ion-item  [routerLink]=\"['/cities', grocery.locid]\">\n        <ion-label>{{grocery.location}}</ion-label>\n      </ion-item>\n      <ion-item-options side=\"start\">\n        <ion-item-option>Search </ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n    </ion-card>\n\n\n\n\n<!--    <ion-card>\n      <ion-item>\n        <ion-header>\n          {{grocery.locid}}\n          {{grocery.location}}\n        </ion-header>\n      </ion-item>\n    </ion-card>-->\n  </ion-list>\n\n\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/location/location-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/location/location-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: LocationPageRoutingModule */

    /***/
    function srcAppPagesLocationLocationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocationPageRoutingModule", function () {
        return LocationPageRoutingModule;
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


      var _location_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./location.page */
      "./src/app/pages/location/location.page.ts");

      var routes = [{
        path: '',
        component: _location_page__WEBPACK_IMPORTED_MODULE_3__["LocationPage"]
      }];

      var LocationPageRoutingModule = function LocationPageRoutingModule() {
        _classCallCheck(this, LocationPageRoutingModule);
      };

      LocationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LocationPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/location/location.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/location/location.module.ts ***!
      \***************************************************/

    /*! exports provided: LocationPageModule */

    /***/
    function srcAppPagesLocationLocationModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocationPageModule", function () {
        return LocationPageModule;
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


      var _location_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./location-routing.module */
      "./src/app/pages/location/location-routing.module.ts");
      /* harmony import */


      var _location_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./location.page */
      "./src/app/pages/location/location.page.ts");
      /* harmony import */


      var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng2-search-filter */
      "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");

      var LocationPageModule = function LocationPageModule() {
        _classCallCheck(this, LocationPageModule);
      };

      LocationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _location_routing_module__WEBPACK_IMPORTED_MODULE_5__["LocationPageRoutingModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"]],
        declarations: [_location_page__WEBPACK_IMPORTED_MODULE_6__["LocationPage"]]
      })], LocationPageModule);
      /***/
    },

    /***/
    "./src/app/pages/location/location.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/pages/location/location.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesLocationLocationPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvY2F0aW9uL2xvY2F0aW9uLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/pages/location/location.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/location/location.page.ts ***!
      \*************************************************/

    /*! exports provided: LocationPage */

    /***/
    function srcAppPagesLocationLocationPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocationPage", function () {
        return LocationPage;
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


      var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/login.service */
      "./src/app/services/login.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var LocationPage = /*#__PURE__*/function () {
        function LocationPage(http, service, toastController, router, loadingController) {
          _classCallCheck(this, LocationPage);

          this.http = http;
          this.service = service;
          this.toastController = toastController;
          this.router = router;
          this.loadingController = loadingController;
          this.url = 'https://sgni.in/api/run_new.php?call=locationcity';
          this.result = {};
          this.result2 = [];
        }

        _createClass(LocationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingController.create({
                        message: 'Loading ...'
                      });

                    case 2:
                      loading = _context.sent;
                      _context.next = 5;
                      return loading.present();

                    case 5:
                      this.service.location().subscribe(function (data) {
                        _this.result2 = data['data'];
                        loading.dismiss();
                        console.log(data);
                      });
                      /*        return this.http.get(`https://sgni.in/api/run_new.php?call=locationcity`).subscribe(data => {
                                        this.genres = data.data;
                                    });
                                          return new Promise((resolve, reject) => {
                                  this.http.get(`${this.url}`).subscribe((res) => {
                                      console.log('RegisterApi', res);
                                      this.result = res;
                                            console.log('ttt', this.result2);
                                      this.result.data.forEach((item) => {
                                                      this.location = item.location;
                                          this.locid = item.locid;
                                                console.log('loc-id', item.locid);
                                          console.log('location', item.location);
                                      });
                                  }, err => {
                                      reject(err);
                                  });
                              });*/

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return LocationPage;
      }();

      LocationPage.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }];
      };

      LocationPage.propDecorators = {
        search: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['search', {
            "static": false
          }]
        }]
      };
      LocationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-location',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./location.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/location/location.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./location.page.scss */
        "./src/app/pages/location/location.page.scss"))["default"]]
      })], LocationPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-location-location-module-es5.js.map