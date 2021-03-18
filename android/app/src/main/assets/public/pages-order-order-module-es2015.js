(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-order-order-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order/order.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order/order.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-title>My Courses</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-card>\n        <div *ngFor=\"let record of groupedItems | keyvalue\"  class=\"card\">\n            <ion-card>\n                <div class=\"main\">\n                <div class=\"first col-6 red\">Order Id : {{ record.value[0]['orderid']}}</div>\n                    <div class=\"second col-6 green\">Order Status : {{record.value[0]['order_status']}}</div>\n                </div>\n\n                <div class=\"main\">\n                    <div class=\"first col-6 blue\">Quantity : {{ record.value[0]['order_qty']}}</div>\n                    <div class=\"second col-6 red\">Fee Status : {{record.value[0]['fee_status']}}</div>\n                </div>\n\n                <div class=\"main col-6 green\">Total Fees : &#8377;{{ record.value[0]['order_total'] | number}}</div>\n                <div class=\"main col-12 orange\">Order Date : {{ record.value[0]['order_date']}}</div>\n                <div class=\"main\">\n                    <div class=\"second red\" [routerLink]=\"['/orderdetails',  record.value[1]['course_name'],record.value[1]['inst_name'],record.value[1]['int_address'],record.value[1]['course_final_fees'],record.value[2]['roll_no']]\">View Details<ion-icon name=\"arrow-redo-outline\"></ion-icon></div>\n                </div>\n\n            </ion-card>\n        </div>\n    </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/order/order-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/order/order-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: OrderPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPageRoutingModule", function() { return OrderPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _order_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order.page */ "./src/app/pages/order/order.page.ts");




const routes = [
    {
        path: '',
        component: _order_page__WEBPACK_IMPORTED_MODULE_3__["OrderPage"]
    }
];
let OrderPageRoutingModule = class OrderPageRoutingModule {
};
OrderPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrderPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/order/order.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/order/order.module.ts ***!
  \*********************************************/
/*! exports provided: OrderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPageModule", function() { return OrderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _order_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-routing.module */ "./src/app/pages/order/order-routing.module.ts");
/* harmony import */ var _order_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order.page */ "./src/app/pages/order/order.page.ts");







let OrderPageModule = class OrderPageModule {
};
OrderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _order_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderPageRoutingModule"]
        ],
        declarations: [_order_page__WEBPACK_IMPORTED_MODULE_6__["OrderPage"]]
    })
], OrderPageModule);



/***/ }),

/***/ "./src/app/pages/order/order.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/order/order.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main .first {\n  float: left;\n}\n.main .second {\n  float: right;\n}\n.red {\n  color: #f05454;\n}\n.blue {\n  color: #1687a7;\n}\n.green {\n  color: #16c79a;\n}\n.orange {\n  color: #eb5e0b;\n}\n.card ion-card {\n  border-radius: 10px;\n  background-color: #e8efeb;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3JkZXIvb3JkZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBRUUsV0FBQTtBQURKO0FBSUU7RUFDRSxZQUFBO0FBRko7QUFNQTtFQUNFLGNBQUE7QUFIRjtBQU9BO0VBQ0UsY0FBQTtBQUpGO0FBT0E7RUFDRSxjQUFBO0FBSkY7QUFPQTtFQUNFLGNBQUE7QUFKRjtBQU9FO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtBQUpKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvb3JkZXIvb3JkZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xyXG4gIC5maXJzdCB7XHJcblxyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgfVxyXG5cclxuICAuc2Vjb25kIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbn1cclxuXHJcbi5yZWQge1xyXG4gIGNvbG9yOiAjZjA1NDU0O1xyXG59XHJcblxyXG5cclxuLmJsdWUge1xyXG4gIGNvbG9yOiAjMTY4N2E3O1xyXG59XHJcblxyXG4uZ3JlZW4ge1xyXG4gIGNvbG9yOiAjMTZjNzlhO1xyXG59XHJcblxyXG4ub3JhbmdlIHtcclxuICBjb2xvcjogI2ViNWUwYjtcclxufVxyXG4uY2FyZHtcclxuICBpb24tY2FyZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZWZlYjtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/pages/order/order.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/order/order.page.ts ***!
  \*******************************************/
/*! exports provided: OrderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPage", function() { return OrderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let OrderPage = class OrderPage {
    constructor(service, storage, toastController) {
        this.service = service;
        this.storage = storage;
        this.toastController = toastController;
        this.result = [];
        this.result2 = {};
        this.groupedItems = {};
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const result = yield this.storage.get("sid");
            console.log(result);
            this.service.bookings(result).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (data == null) {
                    console.log("data is null");
                    const toast = yield this.toastController.create({
                        header: 'Sorry',
                        message: 'No Orders Yet',
                        position: 'bottom',
                        animated: true,
                        color: 'secondary',
                        duration: 3000,
                        buttons: [
                            {
                                side: 'start',
                                icon: 'alert',
                                handler: () => {
                                    console.log('Favorite clicked');
                                }
                            }
                        ]
                    });
                    toast.present();
                }
                this.result = data['data'];
                console.log(this.result);
                let index = 1;
                this.result.forEach((value) => {
                    if (this.groupedItems[value.orderid] == undefined) {
                        this.groupedItems[value.orderid] = [];
                        this.groupedItems[value.orderid].push(value);
                    }
                    else {
                        this.groupedItems[value.orderid].push(value);
                    }
                });
                console.log(this.groupedItems);
            }));
        });
    }
};
OrderPage.ctorParameters = () => [
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
];
OrderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./order.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order/order.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./order.page.scss */ "./src/app/pages/order/order.page.scss")).default]
    })
], OrderPage);



/***/ })

}]);
//# sourceMappingURL=pages-order-order-module-es2015.js.map