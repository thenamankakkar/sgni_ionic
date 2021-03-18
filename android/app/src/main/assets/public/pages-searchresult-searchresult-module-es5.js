(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-searchresult-searchresult-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/searchresult/searchresult.page.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/searchresult/searchresult.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesSearchresultSearchresultPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Search Results</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngFor=\"let response of res\">\n    <ion-item>\n      <img src=\"../../../assets/icon/sgni.png\" width=\"100\"/>\n      <ion-label>\n        <h3 class=\"ion-text-wrap\">{{response.name}}</h3>\n        <p>{{response.location}}</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-card-header>\n      <ion-card-title><h6>Address</h6></ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      {{response.address}}\n    </ion-card-content>\n\n    <ion-footer>\n      <ion-row>\n        <ion-col center text-center>\n          <ion-button  color=\"medium\" (click)=\"presentModal()\">\n            <ion-icon name=\"alert-circle-outline\"></ion-icon>\n            <div>Enquire Now</div>\n          </ion-button>\n        </ion-col>\n        <ion-col text-center>\n          <ion-button color=\"danger\" [routerLink]=\"['/knowmore',response.inst_id,response.inst_cid,response.name,response.address,response.inst_slug]\">\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <div>Know More</div>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-footer>\n  </ion-card>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/searchresult/searchresult-routing.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/searchresult/searchresult-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: SearchresultPageRoutingModule */

    /***/
    function srcAppPagesSearchresultSearchresultRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchresultPageRoutingModule", function () {
        return SearchresultPageRoutingModule;
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


      var _searchresult_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./searchresult.page */
      "./src/app/pages/searchresult/searchresult.page.ts");

      var routes = [{
        path: '',
        component: _searchresult_page__WEBPACK_IMPORTED_MODULE_3__["SearchresultPage"]
      }];

      var SearchresultPageRoutingModule = function SearchresultPageRoutingModule() {
        _classCallCheck(this, SearchresultPageRoutingModule);
      };

      SearchresultPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SearchresultPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/searchresult/searchresult.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/searchresult/searchresult.module.ts ***!
      \***********************************************************/

    /*! exports provided: SearchresultPageModule */

    /***/
    function srcAppPagesSearchresultSearchresultModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchresultPageModule", function () {
        return SearchresultPageModule;
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


      var _searchresult_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./searchresult-routing.module */
      "./src/app/pages/searchresult/searchresult-routing.module.ts");
      /* harmony import */


      var _searchresult_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./searchresult.page */
      "./src/app/pages/searchresult/searchresult.page.ts");

      var SearchresultPageModule = function SearchresultPageModule() {
        _classCallCheck(this, SearchresultPageModule);
      };

      SearchresultPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _searchresult_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchresultPageRoutingModule"]],
        declarations: [_searchresult_page__WEBPACK_IMPORTED_MODULE_6__["SearchresultPage"]]
      })], SearchresultPageModule);
      /***/
    },

    /***/
    "./src/app/pages/searchresult/searchresult.page.scss":
    /*!***********************************************************!*\
      !*** ./src/app/pages/searchresult/searchresult.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesSearchresultSearchresultPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlYXJjaHJlc3VsdC9zZWFyY2hyZXN1bHQucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/pages/searchresult/searchresult.page.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/searchresult/searchresult.page.ts ***!
      \*********************************************************/

    /*! exports provided: SearchresultPage */

    /***/
    function srcAppPagesSearchresultSearchresultPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchresultPage", function () {
        return SearchresultPage;
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


      var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/login.service */
      "./src/app/services/login.service.ts");
      /* harmony import */


      var _enquiremodal_enquiremodal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../enquiremodal/enquiremodal.page */
      "./src/app/enquiremodal/enquiremodal.page.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var SearchresultPage = /*#__PURE__*/function () {
        function SearchresultPage(route, service, modalController, alertController, loadingController) {
          _classCallCheck(this, SearchresultPage);

          this.route = route;
          this.service = service;
          this.modalController = modalController;
          this.alertController = alertController;
          this.loadingController = loadingController;
          this.res = [];
        }

        _createClass(SearchresultPage, [{
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
                        message: 'Loading Result...'
                      });

                    case 2:
                      loading = _context.sent;
                      _context.next = 5;
                      return loading.present();

                    case 5:
                      this.route.queryParams.subscribe(function (params) {
                        _this.value = params["value"];
                        console.log("got the value of search", _this.value);
                      });
                      this.service.search(this.value).subscribe(function (data) {
                        console.log(data);
                        _this.res = data['data'];

                        if (!_this.res.isEmpty) {
                          loading.dismiss();
                        } else {
                          loading.dismiss();
                          console.log("nodata found");
                        }
                      });

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "enquire_alert",
          value: function enquire_alert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        header: 'Enquire Now',
                        message: 'By submitting the request, you accept our terms of use and privacy policy.',
                        inputs: [{
                          name: 'mobile',
                          type: 'number',
                          placeholder: 'Enter Number'
                        }, {
                          name: 'name',
                          type: 'text',
                          placeholder: 'Specify Your Requirements'
                        }],
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler() {
                            console.log('Confirm Cancel');
                          }
                        }, {
                          text: 'Ok',
                          handler: function handler(alertData) {
                            console.log(alertData.name1);
                          }
                        }]
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "presentModal",
          value: function presentModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var modal;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.modalController.create({
                        component: _enquiremodal_enquiremodal_page__WEBPACK_IMPORTED_MODULE_4__["EnquiremodalPage"],
                        cssClass: 'my-custom-class'
                      });

                    case 2:
                      modal = _context3.sent;
                      _context3.next = 5;
                      return modal.present();

                    case 5:
                      return _context3.abrupt("return", _context3.sent);

                    case 6:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return SearchresultPage;
      }();

      SearchresultPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
        }];
      };

      SearchresultPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-searchresult',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./searchresult.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/searchresult/searchresult.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./searchresult.page.scss */
        "./src/app/pages/searchresult/searchresult.page.scss"))["default"]]
      })], SearchresultPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-searchresult-searchresult-module-es5.js.map