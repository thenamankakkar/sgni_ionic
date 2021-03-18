(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-about-about-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesAboutAboutPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar class=\"col-12\">\n        About SGNI\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <div class=\"ion-text-justify\">\n        <ion-card>\n            <ion-card-content>\n                SGNI was established in 2010. SGNI is a prominent institute that offers several intensive yet exciting\n                programs/services for the last many years. This institute has continuously worked to upgrade its content\n                and provide accurate guidance to the students. We have a team of self-motivated, highly dedicated\n                professionals with an unwavering commitment and a single-minded focus on empowering (our students) with\n                appropriate knowledge that enable them to achieve their goals. The main reason for the establishment of\n                SGNI is to make an educational chain between student and institute.\n\n                We push ourselves beyond our abilities to provide a flexible service. SGNI has grown from a home project\n                to one of the largest aggregators in the field of education. We not only connect students to provide\n                services in every context but also work closely with institutes to enable a piece of accurate\n                information regarding every course choose by students. we are providing the one-stop solution for all\n                students who desire to pursue their higher studies and enhance their career abroad. With our assistance,\n                our clients/students are bound to achieve great heights and succeed in achieving their goals.\n\n\n            </ion-card-content>\n        </ion-card>\n\n        <ion-card>\n            <ion-card-title class=\"text-center\">Role of SGNI</ion-card-title>\n            <ion-card-content>\n                SGNI, plays a significant role between Institute and Students. In this competitive time, we will provide\n                our best services in the education world. We start from the first step of guiding, then the choice of\n                admission in their favourable institute with special discounts and offers. Basically, from beginning to\n                end we hold your hands and guide you to choose your path. This platform benefits for every student as we\n                want to help students while choosing their career and the institute.\n            </ion-card-content>\n        </ion-card>\n\n\n        <ion-card>\n            <ion-card-title class=\"text-center\">SGNI Provide Free Services</ion-card-title>\n            <ion-card-content>\n                Free personal Counselling: There is nothing that cannot be achieved without education and correct\n                guidance add up to success. The counselling given by the consultants of SGNI makes the mind to convert\n                your dreams into reality. We are always welcome you for personal guidance regarding the choice of the\n                institute or all types of information related to education.\n\n                <ion-card-content class=\"ion-no-padding\">\n\n                    Check ratings and faculty of institutes: SGNI ranks institutes on the basis of few parameters. Each\n                    parameter has a certain weightage and institutes are evaluated out of a total score for the sake of\n                    students.\n                    The blog for interesting guides, news and expert tips: -we are providing you with the helpful tips,\n                    interesting guides and news for better preparation in exams.\n\n                </ion-card-content>\n            </ion-card-content>\n        </ion-card>\n\n\n        <ion-card>\n            <ion-card-title class=\"text-center\">Journey of SGNI</ion-card-title>\n            <ion-card-content>\n                In the beginning, we owe our success to three critical elements-unique teaching methods, capable and\n                motivated team and Continuous improvement. At first, we start our journey to help the students by giving\n                them the short courses with quality of content such as Competitive Exam, Banking exams, IBPS, SSC, RRB,\n                IIT, JEE, GATE, UPSC, STENOGRAPHY, Accountancy etc. Along with this, we raise our services in the field\n                of IELTS, PTE, TOEFL, With the change of time, the methods of teaching and polish the students in the\n                field of LANGUAGES are different and most of the institutes have been opened recently related to IELTS,\n                PTE, TOEFL for those who want to go abroad for further studies. When the student steps out for the\n                search of institutes then he/she find a number of institutes and get confused for the selection\n                according to their requirement. When our experts have an eye on this point then Again for the purpose to\n                help the students SGNI brings a volcanic change in the field of education.\n\n                We just linked up with all the institutes, collect all information related to IELTS and then help the\n                students while choosing the best coaching institutes with discounts so that they select an institute\n                according to their requirement. Basically, we are just a service provider who able to give services\n                under one roof.\n            </ion-card-content>\n        </ion-card>\n    </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/about/about-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/about/about-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: AboutPageRoutingModule */

    /***/
    function srcAppPagesAboutAboutRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutPageRoutingModule", function () {
        return AboutPageRoutingModule;
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


      var _about_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./about.page */
      "./src/app/pages/about/about.page.ts");

      var routes = [{
        path: '',
        component: _about_page__WEBPACK_IMPORTED_MODULE_3__["AboutPage"]
      }];

      var AboutPageRoutingModule = function AboutPageRoutingModule() {
        _classCallCheck(this, AboutPageRoutingModule);
      };

      AboutPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AboutPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/about/about.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/pages/about/about.module.ts ***!
      \*********************************************/

    /*! exports provided: AboutPageModule */

    /***/
    function srcAppPagesAboutAboutModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutPageModule", function () {
        return AboutPageModule;
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


      var _about_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./about-routing.module */
      "./src/app/pages/about/about-routing.module.ts");
      /* harmony import */


      var _about_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./about.page */
      "./src/app/pages/about/about.page.ts");

      var AboutPageModule = function AboutPageModule() {
        _classCallCheck(this, AboutPageModule);
      };

      AboutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _about_routing_module__WEBPACK_IMPORTED_MODULE_5__["AboutPageRoutingModule"]],
        declarations: [_about_page__WEBPACK_IMPORTED_MODULE_6__["AboutPage"]]
      })], AboutPageModule);
      /***/
    },

    /***/
    "./src/app/pages/about/about.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/pages/about/about.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesAboutAboutPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "img {\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xyXG4gIHdpZHRoOiAxMDBweDtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/about/about.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/pages/about/about.page.ts ***!
      \*******************************************/

    /*! exports provided: AboutPage */

    /***/
    function srcAppPagesAboutAboutPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutPage", function () {
        return AboutPage;
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

      var AboutPage = /*#__PURE__*/function () {
        function AboutPage(menu) {
          _classCallCheck(this, AboutPage);

          this.menu = menu;
        }

        _createClass(AboutPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.menu.close();
          }
        }]);

        return AboutPage;
      }();

      AboutPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
        }];
      };

      AboutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./about.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./about.page.scss */
        "./src/app/pages/about/about.page.scss"))["default"]]
      })], AboutPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-about-about-module-es5.js.map