(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-main-main-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main/main.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main/main.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n       testing the data\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/main/main-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/main/main-routing.module.ts ***!
  \***************************************************/
/*! exports provided: MainPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageRoutingModule", function() { return MainPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.page */ "./src/app/pages/main/main.page.ts");




const routes = [
    {
        path: '',
        component: _main_page__WEBPACK_IMPORTED_MODULE_3__["MainPage"]
    }
];
let MainPageRoutingModule = class MainPageRoutingModule {
};
MainPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MainPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/main/main.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/main/main.module.ts ***!
  \*******************************************/
/*! exports provided: MainPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageModule", function() { return MainPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-routing.module */ "./src/app/pages/main/main-routing.module.ts");
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main.page */ "./src/app/pages/main/main.page.ts");







let MainPageModule = class MainPageModule {
};
MainPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _main_routing_module__WEBPACK_IMPORTED_MODULE_5__["MainPageRoutingModule"]
        ],
        declarations: [_main_page__WEBPACK_IMPORTED_MODULE_6__["MainPage"]]
    })
], MainPageModule);



/***/ }),

/***/ "./src/app/pages/main/main.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/main/main.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n\n.location_title {\n  font-size: 10px;\n}\n\n#chooseyourcity {\n  font-size: 10px;\n}\n\n#swipeleft {\n  font-size: 10px;\n  text-align: right;\n}\n\n.bottom-nav {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n}\n\n.bottom-nav ion-button {\n  text-transform: capitalize;\n  font-weight: 300;\n  background: #628cff;\n  border-radius: 7px;\n  box-shadow: none;\n}\n\n.bottom-nav ion-icon {\n  margin-right: 5px;\n  color: #86979f;\n}\n\n.active {\n  color: #628cff;\n}\n\n/*--------*/\n\nion-title {\n  font-weight: 600;\n}\n\nion-card {\n  width: 100%;\n  height: 160px;\n  box-shadow: none;\n  border-radius: 12px;\n}\n\nion-card img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  transform: scale(1.1, 1.1) rotate(1deg);\n  transition: 600ms all ease-in-out;\n}\n\n.swiper-slide-active {\n  transform: scale(1.05, 1.05);\n}\n\n.swiper-slide-active ion-card img {\n  transform: scale(1, 1);\n}\n\n.swiper-slide {\n  transition: 400ms all ease-in-out;\n}\n\n.class {\n  height: 100px;\n}\n\n.img img {\n  border-radius: 80%;\n}\n\n.img {\n  height: auto;\n}\n\n#discount {\n  height: auto;\n  width: auto;\n}\n\n.scrolling-wrapper {\n  overflow-x: scroll;\n  overflow-y: hidden;\n  white-space: nowrap;\n}\n\n.scrolling-wrapper .card {\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFpbi9tYWluLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsNEJBQUE7QUFDRjs7QUFLQTtFQUNFLGVBQUE7QUFGRjs7QUFJQTtFQUNFLGVBQUE7QUFERjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBQ0U7RUFDRSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUU7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUFBSjs7QUFHQTtFQUVFLGNBQUE7QUFERjs7QUFNQSxXQUFBOztBQUNBO0VBQ0UsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUhGOztBQUtFO0VBQ0Usb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSx1Q0FBQTtFQUNBLGlDQUFBO0FBSEo7O0FBT0E7RUFDRSw0QkFBQTtBQUpGOztBQU9JO0VBQ0Usc0JBQUE7QUFMTjs7QUFVQTtFQUNFLGlDQUFBO0FBUEY7O0FBVUE7RUFDRSxhQUFBO0FBUEY7O0FBU0E7RUFDRSxrQkFBQTtBQU5GOztBQVFBO0VBQ0UsWUFBQTtBQUxGOztBQU9BO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFKRjs7QUFNQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUhGOztBQUtFO0VBQ0UscUJBQUE7QUFISiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW4vbWFpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XHJcbiAgLS1pb24tc2FmZS1hcmVhLXRvcDogMjBweDtcclxuICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiAyMnB4O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4ubG9jYXRpb25fdGl0bGV7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcbiNjaG9vc2V5b3VyY2l0eXtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuI3N3aXBlbGVmdHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLmJvdHRvbS1uYXZ7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNjI4Y2ZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcblxyXG4gIGlvbi1pY29uIHtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgY29sb3I6ICM4Njk3OWY7XHJcbiAgfVxyXG59XHJcbi5hY3RpdmUge1xyXG5cclxuICBjb2xvcjogIzYyOGNmZjtcclxuXHJcbn1cclxuXHJcblxyXG4vKi0tLS0tLS0tKi9cclxuaW9uLXRpdGxlIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxNjBweDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcblxyXG4gIGltZyB7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEsIDEuMSkgcm90YXRlKDFkZWcpO1xyXG4gICAgdHJhbnNpdGlvbjogNjAwbXMgYWxsIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxufVxyXG5cclxuLnN3aXBlci1zbGlkZS1hY3RpdmUge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSwgMS4wNSk7XHJcblxyXG4gIGlvbi1jYXJkIHtcclxuICAgIGltZyB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc3dpcGVyLXNsaWRlIHtcclxuICB0cmFuc2l0aW9uOiA0MDBtcyBhbGwgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5jbGFzc3tcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcbi5pbWcgaW1ne1xyXG4gIGJvcmRlci1yYWRpdXM6IDgwJTtcclxufVxyXG4uaW1ne1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG4jZGlzY291bnR7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG59XHJcbi5zY3JvbGxpbmctd3JhcHBlciB7XHJcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cclxuICAuY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/main/main.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/main/main.page.ts ***!
  \*****************************************/
/*! exports provided: MainPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPage", function() { return MainPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/login.service */ "./src/app/services/login.service.ts");



let MainPage = class MainPage {
    constructor(service) {
        this.service = service;
        this.result = [];
        this.slideOptions = { slidesPerView: 3.5 };
        this.option = {
            slidesPerView: 3.5,
            centerdSlides: false,
            loop: true,
            spaceBetween: 1,
            autoplay: true,
            delay: 2
        };
    }
    ngOnInit() {
        this.service.mainpagetopcourses().subscribe(data => {
            this.result = data['data'];
            console.log('top courses data', this.result);
        });
    }
};
MainPage.ctorParameters = () => [
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }
];
MainPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./main.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main/main.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./main.page.scss */ "./src/app/pages/main/main.page.scss")).default]
    })
], MainPage);



/***/ })

}]);
//# sourceMappingURL=pages-main-main-module-es2015.js.map