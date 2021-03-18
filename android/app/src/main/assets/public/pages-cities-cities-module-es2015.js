(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cities-cities-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cities/cities.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cities/cities.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Search Your City</ion-title>\n  </ion-toolbar>\n  <ion-searchbar [(ngModel)]=\"searchTerm\"  [animated]=\"true\" placeholder=\"Search your city\"></ion-searchbar>\n</ion-header>\n\n<ion-content>\n<ion-list >\n\n  <ion-card>\n    <ion-item-sliding *ngFor=\"let grocery of result | filter:searchTerm\">\n      <ion-item [routerLink]=\"['/courses', grocery.locid,grocery.location]\">\n        <ion-label>{{grocery.location}}</ion-label>\n      </ion-item>\n      <ion-item-options side=\"start\">\n        <ion-item-option>Search </ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-card>\n</ion-list>\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/cities/cities-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/cities/cities-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: CitiesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitiesPageRoutingModule", function() { return CitiesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _cities_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cities.page */ "./src/app/pages/cities/cities.page.ts");




const routes = [
    {
        path: '',
        component: _cities_page__WEBPACK_IMPORTED_MODULE_3__["CitiesPage"]
    }
];
let CitiesPageRoutingModule = class CitiesPageRoutingModule {
};
CitiesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CitiesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/cities/cities.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/cities/cities.module.ts ***!
  \***********************************************/
/*! exports provided: CitiesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitiesPageModule", function() { return CitiesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _cities_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cities-routing.module */ "./src/app/pages/cities/cities-routing.module.ts");
/* harmony import */ var _cities_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cities.page */ "./src/app/pages/cities/cities.page.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");








let CitiesPageModule = class CitiesPageModule {
};
CitiesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cities_routing_module__WEBPACK_IMPORTED_MODULE_5__["CitiesPageRoutingModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"]
        ],
        declarations: [_cities_page__WEBPACK_IMPORTED_MODULE_6__["CitiesPage"]]
    })
], CitiesPageModule);



/***/ }),

/***/ "./src/app/pages/cities/cities.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/cities/cities.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NpdGllcy9jaXRpZXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/cities/cities.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/cities/cities.page.ts ***!
  \*********************************************/
/*! exports provided: CitiesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitiesPage", function() { return CitiesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let CitiesPage = class CitiesPage {
    constructor(route, router, service, loadingController, toastController, alertController) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.alertController = alertController;
        this.result = [];
    }
    ngOnDestroy() {
        this.alertController.dismiss();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Loading ...',
            });
            yield loading.present();
            this.id = this.route.snapshot.paramMap.get('id');
            console.log("get the values in cities", this.id);
            this.service.city(this.id).subscribe(data => {
                this.result = data['data'];
                console.log("cities data", data);
                loading.dismiss();
            }, (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.error('error caught in component', error.message);
                console.error('no record found');
                loading.dismiss();
                const alert = yield this.alertController.create({
                    cssClass: 'my-custom-class',
                    header: 'Sorry',
                    subHeader: 'No Data Available ',
                    backdropDismiss: false
                });
                yield alert.present();
                const toast = yield this.toastController.create({
                    header: 'Sorry',
                    message: 'No Data found',
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
            }));
        });
    }
};
CitiesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
CitiesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cities',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./cities.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cities/cities.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./cities.page.scss */ "./src/app/pages/cities/cities.page.scss")).default]
    })
], CitiesPage);



/***/ })

}]);
//# sourceMappingURL=pages-cities-cities-module-es2015.js.map