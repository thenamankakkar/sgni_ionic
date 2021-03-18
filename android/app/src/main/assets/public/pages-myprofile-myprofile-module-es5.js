(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-myprofile-myprofile-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/myprofile/myprofile.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/myprofile/myprofile.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesMyprofileMyprofilePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>My Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <form [formGroup]=\"todo\" (ngSubmit)=\"logForm()\">\n    <ion-item>\n      <ion-label position=\"floating\">Name *</ion-label>\n      <ion-input type=\"tel\"  required  formControlName=\"name\"  (ngModelChange)=\"$event.toUpperCase()\"></ion-input>\n      <ion-icon name=\"person-outline\" slot=\"end\"></ion-icon>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Address *</ion-label>\n      <ion-input type=\"tel\"  formControlName=\"address\"></ion-input>\n      <ion-icon name=\"pin-outline\" slot=\"end\"></ion-icon>\n    </ion-item>\n\n\n\n    <ion-item>\n      <ion-label position=\"floating\">Phone *</ion-label>\n      <ion-input type=\"tel\"  maxlength=\"10\" required  formControlName=\"phone\"></ion-input>\n      <ion-icon name=\"call-outline\" slot=\"end\"></ion-icon>\n    </ion-item>\n\n    <ion-item  [formGroup]=\"todo\">\n      <ion-label>Gender</ion-label>\n      <ion-select (ionChange)=\"batchChange(batch)\" [(ngModel)]=\"batch\" formControlName=\"gender\" >\n        <ion-select-option value=\"M\">Male</ion-select-option>\n        <ion-select-option value=\"F\">Female</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n\n\n    <ion-button class=\"main-button\" type=\"submit\" expand=\"block\" [disabled]=\"!todo.valid\">Update Profile</ion-button>\n  </form>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/myprofile/myprofile-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/pages/myprofile/myprofile-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: MyprofilePageRoutingModule */

    /***/
    function srcAppPagesMyprofileMyprofileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyprofilePageRoutingModule", function () {
        return MyprofilePageRoutingModule;
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


      var _myprofile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./myprofile.page */
      "./src/app/pages/myprofile/myprofile.page.ts");

      var routes = [{
        path: '',
        component: _myprofile_page__WEBPACK_IMPORTED_MODULE_3__["MyprofilePage"]
      }];

      var MyprofilePageRoutingModule = function MyprofilePageRoutingModule() {
        _classCallCheck(this, MyprofilePageRoutingModule);
      };

      MyprofilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MyprofilePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/myprofile/myprofile.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/myprofile/myprofile.module.ts ***!
      \*****************************************************/

    /*! exports provided: MyprofilePageModule */

    /***/
    function srcAppPagesMyprofileMyprofileModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyprofilePageModule", function () {
        return MyprofilePageModule;
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


      var _myprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./myprofile-routing.module */
      "./src/app/pages/myprofile/myprofile-routing.module.ts");
      /* harmony import */


      var _myprofile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./myprofile.page */
      "./src/app/pages/myprofile/myprofile.page.ts");

      var MyprofilePageModule = function MyprofilePageModule() {
        _classCallCheck(this, MyprofilePageModule);
      };

      MyprofilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _myprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyprofilePageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_myprofile_page__WEBPACK_IMPORTED_MODULE_6__["MyprofilePage"]]
      })], MyprofilePageModule);
      /***/
    },

    /***/
    "./src/app/pages/myprofile/myprofile.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/pages/myprofile/myprofile.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesMyprofileMyprofilePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL215cHJvZmlsZS9teXByb2ZpbGUucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/pages/myprofile/myprofile.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/myprofile/myprofile.page.ts ***!
      \***************************************************/

    /*! exports provided: MyprofilePage */

    /***/
    function srcAppPagesMyprofileMyprofilePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyprofilePage", function () {
        return MyprofilePage;
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

      var MyprofilePage = /*#__PURE__*/function () {
        function MyprofilePage(formBuilder, service, loadingController, toastController, router, menu) {
          _classCallCheck(this, MyprofilePage);

          this.formBuilder = formBuilder;
          this.service = service;
          this.loadingController = loadingController;
          this.toastController = toastController;
          this.router = router;
          this.menu = menu;
          this.todo = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10)])],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          /*   this.todo.controls['phone'].disable();*/
        }

        _createClass(MyprofilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.menu.close();
            this.service.getSid('spid').then(function (d) {
              return console.log("spid is this now", _this.sid = d);
            });
            /*    this.service.getphone('phone').then(
                    (value) => console.log("isLogged",this.data= value)
                );*/

            /*  this.service.getphone('phone');
              this.service.getSid('sid').then((value) => console.log("this is the sid",this.sid= value));*/
          }
        }, {
          key: "batchChange",
          value: function batchChange(batch) {
            console.log('Selectedbatch', batch);
            this.batchtime = batch;
            console.log(this.batchtime);
          }
        }, {
          key: "logForm",
          value: function logForm() {
            var _this2 = this;

            console.log(this.sid);
            this.serverData = this.todo.value;
            console.log(this.serverData.phone);
            /*  this.service.updatephone(this.sid, this.serverData.name,this.serverData.address,this.serverData.phone,this.serverData.gender).subscribe(data => {
                  console.log(data);
                  this.loading();
                      });*/

            this.service.updatephone(this.sid, this.serverData.name, this.serverData.address, this.serverData.phone, this.serverData.gender).subscribe(function (data) {
              console.log(data);

              _this2.loading();
            });
          }
        }, {
          key: "loading",
          value: function loading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.router.navigateByUrl('/home', {
                        replaceUrl: true
                      });
                      _context.next = 3;
                      return this.toastController.create({
                        message: 'Profile Updated Successfully',
                        position: 'bottom',
                        duration: 3000
                      });

                    case 3:
                      toast = _context.sent;
                      toast.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return MyprofilePage;
      }();

      MyprofilePage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
        }];
      };

      MyprofilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-myprofile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./myprofile.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/myprofile/myprofile.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./myprofile.page.scss */
        "./src/app/pages/myprofile/myprofile.page.scss"))["default"]]
      })], MyprofilePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-myprofile-myprofile-module-es5.js.map