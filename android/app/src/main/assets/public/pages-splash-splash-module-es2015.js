(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-splash-splash-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/splash/splash.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/splash/splash.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content class=\"ion-padding\">\n  <div class=\"container\">\n\n<ion-card class=\"animate__backInLeft\">\n  <img src=\"../../../assets/icon/sgnilogo.png\" height=\"133\" width=\"311\"/>\n</ion-card>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/splash/splash-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/splash/splash-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SplashPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashPageRoutingModule", function() { return SplashPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _splash_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./splash.page */ "./src/app/pages/splash/splash.page.ts");




const routes = [
    {
        path: '',
        component: _splash_page__WEBPACK_IMPORTED_MODULE_3__["SplashPage"]
    }
];
let SplashPageRoutingModule = class SplashPageRoutingModule {
};
SplashPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SplashPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/splash/splash.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/splash/splash.module.ts ***!
  \***********************************************/
/*! exports provided: SplashPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashPageModule", function() { return SplashPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _splash_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./splash-routing.module */ "./src/app/pages/splash/splash-routing.module.ts");
/* harmony import */ var _splash_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./splash.page */ "./src/app/pages/splash/splash.page.ts");







let SplashPageModule = class SplashPageModule {
};
SplashPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _splash_routing_module__WEBPACK_IMPORTED_MODULE_5__["SplashPageRoutingModule"]
        ],
        declarations: [_splash_page__WEBPACK_IMPORTED_MODULE_6__["SplashPage"]]
    })
], SplashPageModule);



/***/ }),

/***/ "./src/app/pages/splash/splash.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/splash/splash.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@-webkit-keyframes scale-in-left {\n  0% {\n    transform: scale(0);\n    transform-origin: 0 50%;\n    opacity: 1;\n  }\n  100% {\n    transform: scale(1);\n    transform-origin: 0 50%;\n    opacity: 1;\n  }\n}\n@keyframes scale-in-left {\n  0% {\n    transform: scale(0);\n    transform-origin: 0 50%;\n    opacity: 1;\n  }\n  100% {\n    transform: scale(1);\n    transform-origin: 0 50%;\n    opacity: 1;\n  }\n}\n.container {\n  -webkit-animation: scale-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n  animation: scale-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n.container ion-card {\n  margin-top: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3BsYXNoL3NwbGFzaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBaUM7SUFBOEIsbUJBQUE7SUFBa0QsdUJBQUE7SUFBdUIsVUFBQTtFQU90STtFQVBnSjtJQUFnQyxtQkFBQTtJQUFrRCx1QkFBQTtJQUF1QixVQUFBO0VBY3pQO0FBQ0Y7QUFmc1E7RUFBeUI7SUFBOEIsbUJBQUE7SUFBa0QsdUJBQUE7SUFBdUIsVUFBQTtFQXVCcFk7RUF2QjhZO0lBQWdDLG1CQUFBO0lBQWtELHVCQUFBO0lBQXVCLFVBQUE7RUE4QnZmO0FBQ0Y7QUE5QkE7RUFDRSwrRUFBQTtFQUF1RSx1RUFBQTtBQWlDekU7QUEvQkU7RUFDRSxlQUFBO0FBaUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3BsYXNoL3NwbGFzaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJALXdlYmtpdC1rZXlmcmFtZXMgc2NhbGUtaW4tbGVmdHswJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm06c2NhbGUoMCk7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjAgNTAlO3RyYW5zZm9ybS1vcmlnaW46MCA1MCU7b3BhY2l0eToxfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjowIDUwJTt0cmFuc2Zvcm0tb3JpZ2luOjAgNTAlO29wYWNpdHk6MX19QGtleWZyYW1lcyBzY2FsZS1pbi1sZWZ0ezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zZm9ybTpzY2FsZSgwKTstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46MCA1MCU7dHJhbnNmb3JtLW9yaWdpbjowIDUwJTtvcGFjaXR5OjF9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSk7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjAgNTAlO3RyYW5zZm9ybS1vcmlnaW46MCA1MCU7b3BhY2l0eToxfX1cclxuLmNvbnRhaW5lcntcclxuICAtd2Via2l0LWFuaW1hdGlvbjpzY2FsZS1pbi1sZWZ0IC41cyBjdWJpYy1iZXppZXIoLjI1LC40NiwuNDUsLjk0KSBib3RoO2FuaW1hdGlvbjpzY2FsZS1pbi1sZWZ0IC41cyBjdWJpYy1iZXppZXIoLjI1LC40NiwuNDUsLjk0KSBib3RoO1xyXG5cclxuICBpb24tY2FyZHtcclxuICAgIG1hcmdpbi10b3A6IDUwJTtcclxuICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/splash/splash.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/splash/splash.page.ts ***!
  \*********************************************/
/*! exports provided: SplashPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashPage", function() { return SplashPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/login.service */ "./src/app/services/login.service.ts");




let SplashPage = class SplashPage {
    constructor(route, register) {
        this.route = route;
        this.register = register;
        setTimeout(() => {
            //this.route.navigateByUrl('login',{replaceUrl:true})
            this.register.get("sid");
        }, 1000);
    }
    ngOnInit() {
        //this.route.navigateByUrl('login',{replaceUrl:true})
    }
};
SplashPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }
];
SplashPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-splash',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./splash.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/splash/splash.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./splash.page.scss */ "./src/app/pages/splash/splash.page.scss")).default]
    })
], SplashPage);



/***/ })

}]);
//# sourceMappingURL=pages-splash-splash-module-es2015.js.map