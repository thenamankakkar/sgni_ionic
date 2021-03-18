(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-knowmore-knowmore-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/knowmore/knowmore.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/knowmore/knowmore.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesKnowmoreKnowmorePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <h5 class=\"ion-padding ion-text-wrap ion-text-capitalize\">{{this.institutename}}</h5>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"ion-padding-top\">\n  <ion-slides [options]=\"option\" pager=\"true\">\n\n    <ion-slide *ngFor=\"let data of result2\">\n      <ion-col>\n        <ion-card>\n        <img src=\"https://sgni.in/institute/{{data.pic}}\">\n        </ion-card>\n      </ion-col>\n    </ion-slide>\n\n\n  </ion-slides>\n  </div>\n\n\n\n\n  <ion-card *ngFor=\"let response of result\">\n  <ion-item>\n    <ion-label>\n      <h3>{{response.coursename}}</h3>\n      <p><s>&#8377;{{response.fees | number}}</s></p>\n      <p>&#8377;{{response.final_fees | number}}</p>\n\n\n    </ion-label>\n\n    <ion-buttons>\n      <ion-button fill=\"outline\" expand=\"block\" color=\"success\" [routerLink]=\"['/booknow', courseid,response.coursename,institutename,instituteaddress,instituteid,instituteslug]\">\n        Book Now\n      </ion-button>\n    </ion-buttons>\n  </ion-item>\n  </ion-card>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/knowmore/knowmore-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/knowmore/knowmore-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: KnowmorePageRoutingModule */

    /***/
    function srcAppPagesKnowmoreKnowmoreRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KnowmorePageRoutingModule", function () {
        return KnowmorePageRoutingModule;
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


      var _knowmore_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./knowmore.page */
      "./src/app/pages/knowmore/knowmore.page.ts");

      var routes = [{
        path: '',
        component: _knowmore_page__WEBPACK_IMPORTED_MODULE_3__["KnowmorePage"]
      }];

      var KnowmorePageRoutingModule = function KnowmorePageRoutingModule() {
        _classCallCheck(this, KnowmorePageRoutingModule);
      };

      KnowmorePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], KnowmorePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/knowmore/knowmore.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/knowmore/knowmore.module.ts ***!
      \***************************************************/

    /*! exports provided: KnowmorePageModule */

    /***/
    function srcAppPagesKnowmoreKnowmoreModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KnowmorePageModule", function () {
        return KnowmorePageModule;
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


      var _knowmore_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./knowmore-routing.module */
      "./src/app/pages/knowmore/knowmore-routing.module.ts");
      /* harmony import */


      var _knowmore_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./knowmore.page */
      "./src/app/pages/knowmore/knowmore.page.ts");

      var KnowmorePageModule = function KnowmorePageModule() {
        _classCallCheck(this, KnowmorePageModule);
      };

      KnowmorePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _knowmore_routing_module__WEBPACK_IMPORTED_MODULE_5__["KnowmorePageRoutingModule"]],
        declarations: [_knowmore_page__WEBPACK_IMPORTED_MODULE_6__["KnowmorePage"]]
      })], KnowmorePageModule);
      /***/
    },

    /***/
    "./src/app/pages/knowmore/knowmore.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/pages/knowmore/knowmore.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesKnowmoreKnowmorePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-slide {\n  height: 250px;\n}\n\nion-slide:focus {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMva25vd21vcmUva25vd21vcmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0EsYUFBQTtBQUNBOztBQUNBO0VBQ0UsYUFBQTtBQUVGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMva25vd21vcmUva25vd21vcmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNsaWRle1xyXG5oZWlnaHQ6IDI1MHB4O1xyXG59XHJcbmlvbi1zbGlkZTpmb2N1c3tcclxuICBvdXRsaW5lOm5vbmU7XHJcblxyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/knowmore/knowmore.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/knowmore/knowmore.page.ts ***!
      \*************************************************/

    /*! exports provided: KnowmorePage */

    /***/
    function srcAppPagesKnowmoreKnowmorePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KnowmorePage", function () {
        return KnowmorePage;
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

      var KnowmorePage = /*#__PURE__*/function () {
        function KnowmorePage(route, service) {
          _classCallCheck(this, KnowmorePage);

          this.route = route;
          this.service = service;
          this.result = [];
          this.result2 = [];
          this.option = {
            slidesPerView: 1,
            centerdSlides: true,
            loop: true,
            initialSlide: 1,
            speed: 100,
            autoplay: true
          };
        }

        _createClass(KnowmorePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.instituteid = this.route.snapshot.paramMap.get('instituteid');
            this.courseid = this.route.snapshot.paramMap.get('courseid');
            this.institutename = this.route.snapshot.paramMap.get('institutename');
            this.instituteaddress = this.route.snapshot.paramMap.get('instituteaddress');
            this.instituteslug = this.route.snapshot.paramMap.get('instituteslug'); //console.log(this.institutename);

            console.log(this.instituteid);
            this.service.knowmore(this.instituteid).subscribe(function (data) {
              console.log("know-more response", data);
              _this.result = data['data'];
            });
            this.service.Show_institutes_Photo(this.instituteid).subscribe(function (data) {
              console.log("show institutes response", data);
              _this.result2 = data['data'];
            });
          }
        }]);

        return KnowmorePage;
      }();

      KnowmorePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
        }];
      };

      KnowmorePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-knowmore',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./knowmore.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/knowmore/knowmore.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./knowmore.page.scss */
        "./src/app/pages/knowmore/knowmore.page.scss"))["default"]]
      })], KnowmorePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-knowmore-knowmore-module-es5.js.map