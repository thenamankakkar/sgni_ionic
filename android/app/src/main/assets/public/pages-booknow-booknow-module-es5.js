(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-booknow-booknow-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/booknow/booknow.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/booknow/booknow.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesBooknowBooknowPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <h5 class=\"ion-padding ion-text-wrap\">{{institutename}}</h5>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-item>\n        <ion-label class=\"ion-text-wrap\">{{instituteaddres}}</ion-label>\n    </ion-item>\n\n    <ion-card>\n\n        <ion-item>\n            <ion-label>Your Course is {{coursename}}</ion-label>\n        </ion-item>\n\n        <ion-card size-xs=\"12\">\n            <ion-list [formGroup]=\"todo\">\n                <ion-radio-group allow-empty-selection=\"true\" name=\"radio-group\"\n                                 (ionChange)=\"radioGroupChange($event)\"  formControlName=\"duration\">\n                    <ion-list-header>\n                        <ion-label>Select Course Duration</ion-label>\n                    </ion-list-header>\n\n                    <ion-item class=\"ion-text-wrap\" *ngFor=\"let item of emptyarray\" (ionFocus)=\"radioFocus()\"\n                              (ionSelect)=\"radioSelect($event)\" (ionBlur)=\"radioBlur()\">\n\n\n                        <span class=\"black\" >{{item.duration}} Months\n                            &#8377;{{item.final_fees  | number }}&nbsp;\n                            <s class=\"red  \">&#8377;{{item.fees | number}} </s>&nbsp;\n                            <ion-badge slot=\"end\" color=\"warning\">{{item.markup}} %off</ion-badge>\n                             </span>\n                        <ion-radio slot=\"start\" value=\"{{item.fees_id}}\" ></ion-radio>\n                    </ion-item>\n\n                </ion-radio-group>\n            </ion-list>\n        </ion-card>\n    </ion-card>\n\n    <ion-item  [formGroup]=\"todo\">\n        <ion-label>Start Date</ion-label>\n        <ion-datetime displayFormat=\"DD MMMM  YY\" max=\"2021\" min=\"2021\" placeholder=\"Select Date\" [(ngModel)]=\"myDate\"\n                      (ionChange)=\"onSelectChange(myDate)\" formControlName=\"date\"></ion-datetime>\n    </ion-item>\n\n    <ion-item  [formGroup]=\"todo\">\n        <ion-label>Batch Time</ion-label>\n        <ion-select value=\"morning\" (ionChange)=\"batchChange(batch)\" [(ngModel)]=\"batch\" formControlName=\"batch\" >\n            <ion-select-option>Morning</ion-select-option>\n            <ion-select-option>Afternoon</ion-select-option>\n            <ion-select-option>Evening</ion-select-option>\n        </ion-select>\n    </ion-item>\n\n    <ion-item>\n    <ion-checkbox color=\"secondary\" (ionChange)=\"addamount()\"></ion-checkbox>\n       <span class=\"ion-padding-start\">Add Wallet Balance</span>\n        <span slot=\"end\">&#8377;{{this.walletamount[0] | number}}</span>\n    </ion-item>\n\n    <div class=\"ion-padding\">\n        <ion-button class=\"pay-btn text-center\" type=\"submit\" expand=\"full\" (click)=\"payatcenter()\"  [disabled]=\"!todo.valid\">\n            Pay At Center\n        </ion-button>\n    </div>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/booknow/booknow-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/booknow/booknow-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: BooknowPageRoutingModule */

    /***/
    function srcAppPagesBooknowBooknowRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BooknowPageRoutingModule", function () {
        return BooknowPageRoutingModule;
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


      var _booknow_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./booknow.page */
      "./src/app/pages/booknow/booknow.page.ts");

      var routes = [{
        path: '',
        component: _booknow_page__WEBPACK_IMPORTED_MODULE_3__["BooknowPage"]
      }];

      var BooknowPageRoutingModule = function BooknowPageRoutingModule() {
        _classCallCheck(this, BooknowPageRoutingModule);
      };

      BooknowPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BooknowPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/booknow/booknow.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/booknow/booknow.module.ts ***!
      \*************************************************/

    /*! exports provided: BooknowPageModule */

    /***/
    function srcAppPagesBooknowBooknowModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BooknowPageModule", function () {
        return BooknowPageModule;
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


      var _booknow_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./booknow-routing.module */
      "./src/app/pages/booknow/booknow-routing.module.ts");
      /* harmony import */


      var _booknow_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./booknow.page */
      "./src/app/pages/booknow/booknow.page.ts");

      var BooknowPageModule = function BooknowPageModule() {
        _classCallCheck(this, BooknowPageModule);
      };

      BooknowPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _booknow_routing_module__WEBPACK_IMPORTED_MODULE_5__["BooknowPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_booknow_page__WEBPACK_IMPORTED_MODULE_6__["BooknowPage"]]
      })], BooknowPageModule);
      /***/
    },

    /***/
    "./src/app/pages/booknow/booknow.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/pages/booknow/booknow.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesBooknowBooknowPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".red {\n  color: #ff0000;\n}\n\n.black {\n  color: #211f1f;\n}\n\n.yellow {\n  color: #f5ce42;\n}\n\n.pay-btn {\n  background-color: #17f9f2;\n  background-image: linear-gradient(315deg, #17f9f2 0%, #b0f9a9 74%);\n  --background: linear-gradient(90deg, rgba(102,126,234,1) 0%, rgba(100,182,255,1) 100%);\n  --box-shadow: none;\n  position: relative;\n  height: 50px;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYm9va25vdy9ib29rbm93LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFDQTtFQUNFLHlCQUFBO0VBQ0Esa0VBQUE7RUFFQSxzRkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Jvb2tub3cvYm9va25vdy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVkIHtcclxuICBjb2xvcjogI2ZmMDAwMDtcclxufVxyXG5cclxuLmJsYWNrIHtcclxuICBjb2xvcjogIzIxMWYxZjtcclxufVxyXG5cclxuLnllbGxvdyB7XHJcbiAgY29sb3I6ICNmNWNlNDI7XHJcbn1cclxuLnBheS1idG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3ZjlmMjtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjMTdmOWYyIDAlLCAjYjBmOWE5IDc0JSk7XHJcblxyXG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDEwMiwxMjYsMjM0LDEpIDAlLCByZ2JhKDEwMCwxODIsMjU1LDEpIDEwMCUpO1xyXG4gIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/pages/booknow/booknow.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/pages/booknow/booknow.page.ts ***!
      \***********************************************/

    /*! exports provided: BooknowPage */

    /***/
    function srcAppPagesBooknowBooknowPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BooknowPage", function () {
        return BooknowPage;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

      var BooknowPage = /*#__PURE__*/function () {
        function BooknowPage(route, service, formBuilder, loadingController, router, storage) {
          _classCallCheck(this, BooknowPage);

          this.route = route;
          this.service = service;
          this.formBuilder = formBuilder;
          this.loadingController = loadingController;
          this.router = router;
          this.storage = storage;
          this.single_valueArray = {};
          this.result = [];
          this.walletamount = [];
          this.checkbox = false;
          this.emptyarray = [];
          this.todo = this.formBuilder.group({
            batch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            duration: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])]
          });
        }

        _createClass(BooknowPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.coursename = this.route.snapshot.paramMap.get('coursename');
            this.courseid = this.route.snapshot.paramMap.get('courseid');
            this.institutename = this.route.snapshot.paramMap.get('institutename');
            this.instituteaddres = this.route.snapshot.paramMap.get('instituteaddress');
            this.instituteid = this.route.snapshot.paramMap.get('instituteid');
            this.instituteslug = this.route.snapshot.paramMap.get('instituteslug');
            console.log(this.coursename);
            this.service.courseduration(this.courseid).subscribe(function (data) {
              _this.result = data['data']; //this.fee_status = data.fee_status;

              _this.single_valueArray = data;
              console.log('booknow', _this.result);
              console.log('institutecourseid', _this.courseid);
              /*testing*/

              _this.result.forEach(function (item) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          console.log('testing', item.fees_id);
                          console.log('testing', item.fee_status);

                          if (item.fee_status == 'Y') {
                            this.emptyarray.push({
                              duration: item.duration,
                              fees: item.fees,
                              fees_id: item.fees_id,
                              final_fees: item.final_fees,
                              markup: item.markup
                            });
                          }

                        case 3:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, this);
                }));
              });

              console.log("outofloop", _this.emptyarray);
            });
            this.getwalletAmount();
          }
        }, {
          key: "radioGroupChange",
          value: function radioGroupChange(event) {
            console.log('radioGroupChange', event.detail);
            this.selectedRadioGroup = event.detail;
            console.log('feesid', this.selectedRadioGroup.value);
            this.fees_id = this.selectedRadioGroup.value;
          }
        }, {
          key: "radioFocus",
          value: function radioFocus() {
            console.log('radioFocus');
          }
        }, {
          key: "radioSelect",
          value: function radioSelect(event) {
            console.log('radioSelect', event.detail);
          }
        }, {
          key: "radioBlur",
          value: function radioBlur() {
            console.log('radioBlur');
          }
        }, {
          key: "onSelectChange",
          value: function onSelectChange(selectedValue) {
            selectedValue.split('T')[0];
            this.dateFormat = selectedValue.split('T');
            console.log(this.dateFormat[0]);
            console.log('Selected', selectedValue);
            this.time = this.dateFormat[0];
          }
        }, {
          key: "batchChange",
          value: function batchChange(batch) {
            console.log('Selectedbatch', batch);
            this.batchtime = batch;
          }
        }, {
          key: "payatcenter",
          value: function payatcenter() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              var loading, result;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loadingController.create({
                        message: 'Booking Order...'
                      });

                    case 2:
                      loading = _context2.sent;
                      _context2.next = 5;
                      return loading.present();

                    case 5:
                      _context2.next = 7;
                      return this.storage.get('sid');

                    case 7:
                      result = _context2.sent;
                      console.log(result);
                      this.service.payatcenter(this.courseid, this.fees_id, "".concat(this.time, "|").concat(this.batchtime), this.instituteid, this.instituteslug, result, this.addwalletbalance).subscribe(function (data) {
                        loading.dismiss();

                        _this2.router.navigateByUrl('/home', {
                          replaceUrl: true
                        });
                      });

                    case 10:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "logForm",
          value: function logForm() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this3 = this;

              var loading, result;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.loadingController.create({
                        message: 'Booking Order...'
                      });

                    case 2:
                      loading = _context3.sent;
                      _context3.next = 5;
                      return loading.present();

                    case 5:
                      _context3.next = 7;
                      return this.storage.get('sid');

                    case 7:
                      result = _context3.sent;
                      console.log(result);
                      this.service.payatcenter(this.courseid, this.fees_id, "".concat(this.time, "|").concat(this.batchtime), this.instituteid, this.instituteslug, result, this.addwalletbalance).subscribe(function (data) {
                        loading.dismiss();

                        _this3.router.navigateByUrl('/home', {
                          replaceUrl: true
                        });
                      });

                    case 10:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "getwalletAmount",
          value: function getwalletAmount() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this4 = this;

              var result;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.storage.get('sid');

                    case 2:
                      result = _context4.sent;
                      console.log(result);
                      this.service.wallet(result).subscribe(function (data) {
                        _this4.walletamount = data['data'];
                        console.log(_this4.walletamount[0]);
                      });

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "addamount",
          value: function addamount() {
            this.checkbox = !this.checkbox;
            this.addwalletbalance = this.walletamount[0];
          }
        }]);

        return BooknowPage;
      }();

      BooknowPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]
        }];
      };

      BooknowPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-booknow',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./booknow.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/booknow/booknow.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./booknow.page.scss */
        "./src/app/pages/booknow/booknow.page.scss"))["default"]]
      })], BooknowPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-booknow-booknow-module-es5.js.map