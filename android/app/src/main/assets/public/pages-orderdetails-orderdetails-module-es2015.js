(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-orderdetails-orderdetails-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/orderdetails/orderdetails.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/orderdetails/orderdetails.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Order Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n    <ion-title class=\"main\">Course : {{coursename}}</ion-title>\n    <ion-header><ion-card>{{institutename}}</ion-card></ion-header>\n    <ion-card-content>\n      <ion-icon name=\"home-outline\"></ion-icon>\n      {{instituteaddress}}\n    </ion-card-content>\n\n      <div class=\"ion-padding-start\">\n        Fees : &#8377;{{fees | number}}\n      </div>\n\n      <div class=\"ion-padding-start\">\n        Roll No: {{rollno}}\n      </div>\n\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/orderdetails/orderdetails-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/orderdetails/orderdetails-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: OrderdetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderdetailsPageRoutingModule", function() { return OrderdetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _orderdetails_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orderdetails.page */ "./src/app/pages/orderdetails/orderdetails.page.ts");




const routes = [
    {
        path: '',
        component: _orderdetails_page__WEBPACK_IMPORTED_MODULE_3__["OrderdetailsPage"]
    }
];
let OrderdetailsPageRoutingModule = class OrderdetailsPageRoutingModule {
};
OrderdetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrderdetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/orderdetails/orderdetails.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/orderdetails/orderdetails.module.ts ***!
  \***********************************************************/
/*! exports provided: OrderdetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderdetailsPageModule", function() { return OrderdetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _orderdetails_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./orderdetails-routing.module */ "./src/app/pages/orderdetails/orderdetails-routing.module.ts");
/* harmony import */ var _orderdetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orderdetails.page */ "./src/app/pages/orderdetails/orderdetails.page.ts");







let OrderdetailsPageModule = class OrderdetailsPageModule {
};
OrderdetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _orderdetails_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderdetailsPageRoutingModule"]
        ],
        declarations: [_orderdetails_page__WEBPACK_IMPORTED_MODULE_6__["OrderdetailsPage"]]
    })
], OrderdetailsPageModule);



/***/ }),

/***/ "./src/app/pages/orderdetails/orderdetails.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/orderdetails/orderdetails.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main {\n  background: #f05454;\n  color: floralwhite;\n  text-align: center;\n}\n\nion-header ion-card {\n  color: #f05454;\n  text-align: center;\n  border-radius: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3JkZXJkZXRhaWxzL29yZGVyZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFHRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vcmRlcmRldGFpbHMvb3JkZXJkZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWlue1xyXG4gIGJhY2tncm91bmQ6ICNmMDU0NTQ7XHJcbiAgY29sb3I6IGZsb3JhbHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLWhlYWRlcntcclxuICBpb24tY2FyZHtcclxuICAgIGNvbG9yOiAjZjA1NDU0O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG4gIH1cclxuXHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/orderdetails/orderdetails.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/orderdetails/orderdetails.page.ts ***!
  \*********************************************************/
/*! exports provided: OrderdetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderdetailsPage", function() { return OrderdetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let OrderdetailsPage = class OrderdetailsPage {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        this.coursename = this.route.snapshot.paramMap.get('coursename');
        this.institutename = this.route.snapshot.paramMap.get('institutename');
        this.instituteaddress = this.route.snapshot.paramMap.get('instituteaddress');
        this.fees = this.route.snapshot.paramMap.get('fees');
        this.rollno = this.route.snapshot.paramMap.get('rollno');
    }
};
OrderdetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
OrderdetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-orderdetails',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./orderdetails.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/orderdetails/orderdetails.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./orderdetails.page.scss */ "./src/app/pages/orderdetails/orderdetails.page.scss")).default]
    })
], OrderdetailsPage);



/***/ })

}]);
//# sourceMappingURL=pages-orderdetails-orderdetails-module-es2015.js.map