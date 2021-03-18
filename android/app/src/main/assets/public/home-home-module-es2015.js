(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-title class=\"scale-down-center\">\r\n            <img src=\"../../assets/t_sgni.png\" width=\"100\"/>\r\n        </ion-title>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button menu=\"main-menu\">\r\n                <ion-icon name=\"menu\"></ion-icon>\r\n            </ion-menu-button>\r\n        </ion-buttons>\r\n\r\n    </ion-toolbar>\r\n\r\n    <ion-item class=\"text-wrap ion-no-padding\">\r\n\r\n        <ion-searchbar class=\"float-left \" (search)=\"yourSearchFunction($event.target.value)\" [animated]=\"true\"\r\n                       placeholder=\"Search location, course, institute\"></ion-searchbar>\r\n        <div id=\"label\" class=\"ion-no-padding\">\r\n            <label>\r\n                <ion-icon name=\"locate-sharp\"></ion-icon>\r\n                <span id=\"nearby\">Nearby</span>\r\n            </label>\r\n        </div>\r\n\r\n\r\n        <!--        <div class=\"nearby float-right ion-no-padding\">\r\n                    <ion-slide>\r\n                        <ion-col>\r\n                            <ion-icon name=\"locate-outline\"></ion-icon>\r\n                            <span>Nearby</span>\r\n                        </ion-col>\r\n                    </ion-slide>\r\n                </div>-->\r\n    </ion-item>\r\n\r\n\r\n</ion-header>\r\n<ion-content class=\"ion-padding tracking-in-expand\">\r\n\r\n    <div class=\"category-slider text-wrap\">\r\n\r\n        <ion-slides\r\n                [options]=\"{ slidesPerView : 'auto', zoom : false, gradCursor : true, loop : false, scroll:'infinite'}\"\r\n                class=\"jasmine-banner pager\">\r\n\r\n            <ion-slide [routerLink]=\"['/cities', 6]\">\r\n                <ion-col>\r\n                    <img src=\"../../assets/img_locations/amritsar.jpg\" height=\"281\" width=\"500\"/>\r\n                    <h4>Amritsar</h4>\r\n                </ion-col>\r\n            </ion-slide>\r\n\r\n\r\n            <ion-slide [routerLink]=\"['/cities', 32]\">\r\n                <ion-col>\r\n                    <h4>Jalandhar</h4>\r\n                    <img src=\"../../assets/img_locations/jalandhar.jpg\" height=\"281\" width=\"500\"/>\r\n                </ion-col>\r\n            </ion-slide>\r\n\r\n\r\n            <ion-slide [routerLink]=\"['/cities', 34]\">\r\n                <ion-col>\r\n                    <h4>Pathankot</h4>\r\n                    <img src=\"../../assets/img_locations/pathankot.jpg\" height=\"281\" width=\"500\"/>\r\n                </ion-col>\r\n            </ion-slide>\r\n\r\n\r\n            <ion-slide [routerLink]=\"['/cities', 35]\">\r\n                <ion-col>\r\n                    <h4>Bathinda</h4>\r\n                    <img src=\"../../assets/img_locations/bathinda.jpg\" height=\"281\" width=\"500\"/>\r\n                </ion-col>\r\n            </ion-slide>\r\n\r\n\r\n            <ion-slide [routerLink]=\"['/location']\">\r\n                <ion-col>\r\n                    <h4>More ></h4>\r\n                    <img src=\"../../assets/img_locations/more.png\" height=\"281\" width=\"500\"/>\r\n\r\n                </ion-col>\r\n            </ion-slide>\r\n\r\n\r\n        </ion-slides>\r\n    </div>\r\n\r\n    <!--main banner-->\r\n    <div class=\"brand-ads flip-horizontal-top\">\r\n        <ion-slide class=\"ion-no-padding\">\r\n            <ion-card class=\"ion-no-padding\">\r\n                <img src=\"../../assets/banners/one.png\" height=\"310\" width=\"1210\"/>\r\n\r\n            </ion-card>\r\n        </ion-slide>\r\n    </div>\r\n\r\n\r\n    <div class=\"section-two\">\r\n        <div class=\"headings\">\r\n            <h6>Recommended Institutes</h6>\r\n\r\n            <ion-slides [options]=\"option\" class=\"ion-margin-top\" *ngIf=\"result.length\">\r\n\r\n                <ion-slide *ngFor=\"let fd of result;let i=index\" class=\"ion-no-padding\">\r\n                    <ion-card class=\"flip-horizontal-top\">\r\n\r\n                        <ion-header>\r\n                            <ion-title class=\"ion-padding-top\">\r\n                                <p class=\"text-wrap  ion-no-padding flip-2-ver-right-fwd\">{{fd.name}}</p>\r\n                            </ion-title>\r\n\r\n                            <div class=\"rating-bar\">\r\n                                <div class=\"float-left views col-6\">\r\n                                     <span class=\"watch\">\r\n                                    <ion-icon name=\"eye\"></ion-icon>\r\n                                         {{fd.Views}}\r\n                                    </span>\r\n                                </div>\r\n\r\n                                <div class=\"float-right save  col-6\">\r\n                                    <span class=\"offer\">save up to 10%</span>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </ion-header>\r\n\r\n                        <div class=\"address\">\r\n\r\n\r\n                            <ion-icon name=\"location\"></ion-icon>\r\n                            {{fd.address2}}\r\n                        </div>\r\n\r\n                        <div *ngIf=\"flag == true\">\r\n                            <ng-container *ngFor=\"let det of coursesDetails[fd.inst_id]; let i = index\">\r\n                                <div *ngIf=\"i < 3\"\r\n                                     [routerLink]=\"['/booknow', fd.inst_cid,det.coursename,fd.name,fd.address,fd.inst_id,fd.inst_slug]\">\r\n\r\n\r\n                                    <div class=\"sec-two-course-name\">\r\n                                        <div class=\"sec-two-course-name-l float-left\">\r\n\r\n                                            <ion-icon name=\"book\"></ion-icon>&nbsp;{{ det.coursename }}\r\n                                        </div>\r\n\r\n                                        <div class=\"sec-two-course-name-r float-right\">\r\n                                            <strong>\r\n                                                &nbsp;{{det.final_fees  | number }}\r\n                                            </strong>\r\n                                            <s class=\"fees\">&nbsp;&#8377;{{det.fees | number}}</s>&nbsp;&nbsp;\r\n                                            <span slot=\"end\" class=\"badge badge-success\"><small><b>BOOK NOW</b></small></span>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </ng-container>\r\n                        </div>\r\n\r\n\r\n                        <div class=\"bottom\">\r\n                            <ion-buttons class=\"color-button \">\r\n                                <ion-button class=\"col-6 green rounded\" (click)=\"presentModal()\">Enquire Now\r\n                                </ion-button>\r\n                                <ion-button class=\"col-6 red rounded\"\r\n                                            [routerLink]=\"['/knowmore',fd.inst_id,fd.inst_cid,fd.name,fd.address,fd.inst_slug]\">\r\n                                    Know More\r\n                                </ion-button>\r\n                            </ion-buttons>\r\n                        </div>\r\n                    </ion-card>\r\n                </ion-slide>\r\n            </ion-slides>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <!--banner-->\r\n    <div class=\"brand-ads flip-horizontal-top\">\r\n        <ion-slide class=\"ion-no-padding\">\r\n            <ion-card class=\"ion-no-padding\">\r\n                <img src=\"../../assets/banners/two.png\" height=\"310\" width=\"1210\"/>\r\n            </ion-card>\r\n        </ion-slide>\r\n    </div>\r\n\r\n\r\n    <!--second section-->\r\n    <div class=\"section-two\">\r\n        <div class=\"headings\">\r\n            <h6>Top Ielts Institues</h6>\r\n\r\n            <ion-slides [options]=\"option\" class=\"ion-margin-top\" *ngIf=\"resulttopcourse.length\">\r\n\r\n                <ion-slide *ngFor=\"let fd of resulttopcourse;let i=index\" class=\"ion-no-padding\">\r\n                    <ion-card class=\"flip-horizontal-top\">\r\n\r\n\r\n                        <ion-header>\r\n                            <ion-title class=\"ion-padding-top\">\r\n                                <p class=\"text-wrap  ion-no-padding flip-2-ver-right-fwd\">{{fd.name}}</p>\r\n                            </ion-title>\r\n\r\n                            <div class=\"rating-bar\">\r\n                                <div class=\"float-left views col-6\">\r\n                                     <span class=\"watch\">\r\n                                    <ion-icon name=\"eye\"></ion-icon>\r\n                                         {{fd.Views}}\r\n                                    </span>\r\n                                </div>\r\n\r\n                                <div class=\"float-right save  col-6\">\r\n                                    <span class=\"offer\">save up to 10%</span>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </ion-header>\r\n\r\n                        <div class=\"address\">\r\n\r\n\r\n                            <ion-icon name=\"location\"></ion-icon>\r\n                            {{fd.address2}}\r\n                        </div>\r\n\r\n                        <div *ngIf=\"flag == true\">\r\n                            <ng-container *ngFor=\"let det of coursesDetails2[fd.inst_id]; let i = index\">\r\n                                <div *ngIf=\"i < 3\"\r\n                                     [routerLink]=\"['/booknow', fd.inst_cid,det.coursename,fd.name,fd.address,fd.inst_id,fd.inst_slug]\">\r\n\r\n\r\n                                    <div class=\"sec-two-course-name\">\r\n                                        <div class=\"sec-two-course-name-l float-left\">\r\n\r\n                                            <ion-icon name=\"book\"></ion-icon>&nbsp;{{ det.coursename }}\r\n                                        </div>\r\n\r\n                                        <div class=\"sec-two-course-name-r float-right\">\r\n                                            <strong>\r\n                                                &nbsp;{{det.final_fees  | number }}\r\n                                            </strong>\r\n                                            <s class=\"fees\">&nbsp;&#8377;{{det.fees | number}}</s>&nbsp;&nbsp;\r\n                                            <span slot=\"end\" class=\"badge badge-success\"><small><b>BOOK NOW</b></small></span>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </ng-container>\r\n                        </div>\r\n\r\n\r\n                        <div class=\"bottom\">\r\n                            <ion-buttons class=\"color-button \">\r\n                                <ion-button class=\"col-6 green rounded\" (click)=\"presentModal()\">Enquire Now\r\n                                </ion-button>\r\n                                <ion-button class=\"col-6 red rounded\"\r\n                                            [routerLink]=\"['/knowmore',fd.inst_id,fd.inst_cid,fd.name,fd.address,fd.inst_slug]\">\r\n                                    Know More\r\n                                </ion-button>\r\n                            </ion-buttons>\r\n                        </div>\r\n                    </ion-card>\r\n                </ion-slide>\r\n            </ion-slides>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <!--banner-->\r\n    <div class=\"brand-ads  flip-horizontal-top\">\r\n        <ion-slide class=\"ion-no-padding\">\r\n            <ion-card class=\"ion-no-padding\">\r\n                <img src=\"../../assets/banners/three.png\" height=\"310\" width=\"1210\"/>\r\n            </ion-card>\r\n        </ion-slide>\r\n    </div>\r\n\r\n\r\n    <!--section three top ielts wala-->\r\n    <div class=\"section-two\">\r\n        <div class=\"headings\">\r\n            <h6>Top PTE Institutes</h6>\r\n\r\n            <ion-slides [options]=\"option\" class=\"ion-margin-top\" *ngIf=\"resulttopcourse2.length\">\r\n\r\n                <ion-slide *ngFor=\"let fd of resulttopcourse2;let i=index\" class=\"ion-no-padding\">\r\n                    <ion-card class=\"flip-horizontal-top\">\r\n\r\n\r\n                        <ion-header>\r\n                            <ion-title class=\"ion-padding-top\">\r\n                                <p class=\"text-wrap  ion-no-padding flip-2-ver-right-fwd\">{{fd.name}}</p>\r\n                            </ion-title>\r\n\r\n                            <div class=\"rating-bar\">\r\n                                <div class=\"float-left views col-6\">\r\n                                     <span class=\"watch\">\r\n                                    <ion-icon name=\"eye\"></ion-icon>\r\n                                         {{fd.Views}}\r\n                                    </span>\r\n                                </div>\r\n\r\n                                <div class=\"float-right save  col-6\">\r\n                                    <span class=\"offer\">save up to 10%</span>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </ion-header>\r\n\r\n                        <div class=\"address\">\r\n\r\n\r\n                            <ion-icon name=\"location\"></ion-icon>\r\n                            {{fd.address2}}\r\n                        </div>\r\n\r\n                        <div *ngIf=\"flag == true\">\r\n                            <ng-container *ngFor=\"let det of coursesDetails3[fd.inst_id]; let i = index\">\r\n                                <div *ngIf=\"i < 3\"\r\n                                     [routerLink]=\"['/booknow', fd.inst_cid,det.coursename,fd.name,fd.address,fd.inst_id,fd.inst_slug]\">\r\n\r\n\r\n                                    <div class=\"sec-two-course-name\">\r\n                                        <div class=\"sec-two-course-name-l float-left\">\r\n\r\n                                            <ion-icon name=\"book\"></ion-icon>&nbsp;{{ det.coursename }}\r\n                                        </div>\r\n\r\n                                        <div class=\"sec-two-course-name-r float-right\">\r\n                                            <strong>\r\n                                                &nbsp;{{det.final_fees  | number }}\r\n                                            </strong>\r\n                                            <s class=\"fees\">&nbsp;&#8377;{{det.fees | number}}</s>&nbsp;&nbsp;\r\n                                            <span slot=\"end\" class=\"badge badge-success\"><small><b>BOOK NOW</b></small></span>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </ng-container>\r\n                        </div>\r\n\r\n\r\n                        <div class=\"bottom\">\r\n                            <ion-buttons class=\"color-button \">\r\n                                <ion-button class=\"col-6 green rounded\" (click)=\"presentModal()\">Enquire Now\r\n                                </ion-button>\r\n                                <ion-button class=\"col-6 red rounded\"\r\n                                            [routerLink]=\"['/knowmore',fd.inst_id,fd.inst_cid,fd.name,fd.address,fd.inst_slug]\">\r\n                                    Know More\r\n                                </ion-button>\r\n                            </ion-buttons>\r\n                        </div>\r\n                    </ion-card>\r\n                </ion-slide>\r\n            </ion-slides>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\" aboutsgni\">\r\n        <ion-card>\r\n            <ion-card-header>\r\n                <ion-card-title>SGNI</ion-card-title>\r\n                <ion-card-subtitle>Why we are best</ion-card-subtitle>\r\n            </ion-card-header>\r\n            <ion-card-content class=\"ion-text-justify\">\r\n                SGNI is a prominent institute that offers several intensive yet exciting programs/services for the last\r\n                many years. SGNI has continuously worked to upgrade its content and provide accurate guidance for the\r\n                students.\r\n                We not only connect students to provide services in every context but also work closely with institutes\r\n                to enable a piece of accurate information regarding every course choose by students.\r\n            </ion-card-content>\r\n        </ion-card>\r\n    </div>\r\n\r\n\r\n    <div class=\"brand-ads   flip-horizontal-top\">\r\n        <ion-slide class=\"ion-no-padding\">\r\n            <ion-card class=\"ion-no-padding\">\r\n                <img src=\"../../assets/banners/four.png\" height=\"310\" width=\"1210\"/>\r\n            </ion-card>\r\n        </ion-slide>\r\n    </div>\r\n\r\n\r\n    <div class=\"headings wallet-card bootom-margin\" routerLink=\"/wallet\">\r\n        <h6>Your Wallet</h6>\r\n        <ion-card>\r\n            <div class=\"main\">\r\n                <div class=\"money\">\r\n                    <div class=\"col-8 one float-left\"><strong> SGNI </strong>| Money</div>\r\n                    <div class=\"col-4 two float-right\"><img src=\"../../assets/coin_logo.png\"/></div>\r\n                </div>\r\n\r\n                <div class=\"amt\">\r\n                    &#8377;{{this.walletamt[0] | number}}\r\n                </div>\r\n            </div>\r\n        </ion-card>\r\n    </div>\r\n\r\n\r\n    <!--bottom navbar-->\r\n\r\n    <div class=\"fixed-bottom\">\r\n        <ion-tab-bar slot=\"bottom\">\r\n            <ion-tab-button tab=\"home\">\r\n                <ion-icon name=\"home\" class=\"active\"></ion-icon>\r\n                <ion-label>Home</ion-label>\r\n            </ion-tab-button>\r\n\r\n\r\n            <ion-tab-button routerLink=\"/order\">\r\n                <ion-icon name=\"bag-handle\"></ion-icon>\r\n                <ion-label>Orders</ion-label>\r\n            </ion-tab-button>\r\n\r\n\r\n            <ion-tab-button routerLink=\"/wallet\">\r\n                <ion-icon name=\"wallet\"></ion-icon>\r\n                <ion-label>Wallet</ion-label>\r\n            </ion-tab-button>\r\n\r\n\r\n            <ion-tab-button (click)=\"presentModal()\">\r\n                <ion-icon name=\"help-circle\"></ion-icon>\r\n                <ion-label>Help</ion-label>\r\n            </ion-tab-button>\r\n        </ion-tab-bar>\r\n    </div>\r\n</ion-content>\r\n\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");








let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slide :focus {\n  outline: none;\n}\n\nion-col :focus {\n  outline: none;\n}\n\n.nearby ion-slide {\n  border-radius: 50%;\n  width: 35px;\n  height: 35px;\n}\n\n.nearby ion-slide ion-col {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.nearby ion-slide ion-col span {\n  margin-top: 40px;\n  color: #1e212d;\n  font-size: 10px;\n}\n\n.nearby ion-slide ion-col ion-icon {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n  left: 0;\n  z-index: 1;\n}\n\n.nearby ion-slide ion-col img :focus {\n  outline: none;\n}\n\n.category-slider ion-slide {\n  width: 50px;\n  height: 50px;\n  margin-right: 10px;\n  margin-left: 10px;\n  margin-bottom: 10px;\n}\n\n.category-slider ion-slide ion-col {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.category-slider ion-slide ion-col h4 {\n  color: #1e212d;\n  margin-top: 70px;\n  font-size: 10px;\n}\n\n.category-slider ion-slide ion-col img {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n  top: 0;\n  left: 0;\n  z-index: -1;\n}\n\n.category-slider ion-slide ion-col img :focus {\n  outline: none;\n}\n\nion-slide:focus {\n  outline: none;\n}\n\n.top-card-swiper li {\n  list-style: none;\n}\n\n.top-card-swiper ion-card {\n  width: 100%;\n  height: 150px;\n  border-radius: 10px;\n  color: #000;\n  background-image: url('sgni_orange.jpg');\n  background-position: center;\n  background-repeat: no-repeat;\n  /* Do not repeat the image */\n  background-size: cover;\n}\n\n.top-card-swiper .coursename {\n  display: inline-block;\n  font-size: 13px;\n  font-weight: bold;\n  width: 100%;\n  white-space: nowrap;\n  overflow: hidden !important;\n  text-overflow: ellipsis;\n}\n\n.top-card-swiper ion-title {\n  font-size: 12px;\n  text-align: center;\n}\n\n.grey-button {\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n}\n\n.grey-button .green {\n  text-align: left;\n  background-color: #83898D;\n  color: whitesmoke;\n  font-size: 7px;\n}\n\n.grey-button .red {\n  background-color: #ec4646;\n  color: whitesmoke;\n  font-size: 7px;\n  position: relative;\n}\n\n.grey-button ion-button:active {\n  outline: limegreen auto 5px;\n}\n\n.headings {\n  padding-top: 5px;\n}\n\n.headings h6 {\n  font-size: 12px;\n  color: #374045;\n}\n\n/*discount banner animaton*/\n\n.flip-horizontal-top {\n  -webkit-animation: scale-up-center 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n          animation: scale-up-center 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n}\n\n@-webkit-keyframes scale-up-center {\n  0% {\n    transform: scale(0.5);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n@keyframes scale-up-center {\n  0% {\n    transform: scale(0.5);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n/*discount banner animaton*/\n\n/*sgni toolbar logo animation*/\n\n.scale-down-center {\n  text-align: center;\n}\n\n/*sgni toolbar logo animation*/\n\n/*text animation*/\n\n.flip-2-ver-right-fwd {\n  -webkit-animation: tracking-in-expand 1.5s cubic-bezier(0.215, 0.61, 0.355, 1) both;\n          animation: tracking-in-expand 1.5s cubic-bezier(0.215, 0.61, 0.355, 1) both;\n  -webkit-animation-fill-mode: backwards;\n          animation-fill-mode: backwards;\n}\n\n@keyframes tracking-in-expand {\n  0% {\n    letter-spacing: -0.5em;\n    opacity: 0;\n  }\n  40% {\n    opacity: 0.6;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n.active {\n  color: #628cff;\n}\n\n.bootom-margin {\n  padding-bottom: 50px;\n}\n\n.red {\n  color: #ff0000;\n}\n\nion-badge {\n  margin-top: 5px;\n  font-size: 10px;\n}\n\n.sec-one-main {\n  width: 100%;\n  font-size: 8px;\n}\n\n.sec-one-main .left {\n  float: left;\n  background-color: yellow;\n  text-align: left;\n}\n\n.sec-one-main .right {\n  background-color: #FF0101;\n  float: right;\n}\n\n.sec-one-main .course-name {\n  display: inline-block;\n  white-space: nowrap;\n  overflow: hidden !important;\n  text-overflow: ellipsis;\n}\n\n.color-button {\n  width: 100%;\n  text-align: center;\n  position: absolute;\n  bottom: 0;\n}\n\n.color-button .red {\n  background-color: #FF0101;\n  color: whitesmoke;\n  font-size: 8px;\n}\n\n.color-button .green {\n  color: whitesmoke;\n  font-size: 8px;\n  background-color: #83898D;\n}\n\n/*section two*/\n\n.section-two {\n  /*.coursename {\n    display: inline-block;\n    font-size: 13px;\n    font-weight: bold;\n    width: 50px;\n    text-align: left;\n    white-space: nowrap;\n    overflow: hidden !important;\n    text-overflow: ellipsis;\n\n  }*/\n}\n\n.section-two ion-slide {\n  border: 0.5px black solid;\n  border-radius: 10px;\n}\n\n.section-two ion-header {\n  height: 80px;\n  color: white;\n  background-image: url('sgni_orange.jpg');\n  background-position: center;\n  background-repeat: no-repeat;\n  /* Do not repeat the image */\n  background-size: cover;\n}\n\n.section-two ion-header ion-title {\n  text-align: justify;\n  font-size: 10px;\n  text-shadow: 1px 2px black;\n  display: inline-block;\n  white-space: nowrap;\n  overflow: hidden !important;\n  text-overflow: ellipsis;\n}\n\n.section-two ion-header .offer {\n  border: 1px solid #ffffff;\n  border-radius: 5px;\n  padding: 2px;\n  font-size: 8px;\n  background-color: green;\n  color: #fff;\n  text-transform: capitalize;\n  z-index: 1;\n}\n\n.section-two ion-header .rating-bar {\n  top: 60px;\n  position: fixed;\n  width: 100%;\n  z-index: 1;\n}\n\n.section-two ion-header .rating-bar .views {\n  text-align: left;\n}\n\n.section-two ion-header .rating-bar .watch {\n  border: 1px solid #ffffff;\n  border-radius: 5px;\n  background-color: white;\n  color: grey;\n  text-align: left;\n  padding: 2px;\n  font-size: 8px;\n  text-transform: capitalize;\n  z-index: 1;\n}\n\n.section-two li {\n  list-style: none;\n}\n\n.section-two ion-card {\n  padding: 1px;\n  width: 100%;\n  height: 200px;\n  border-radius: 10px;\n  color: #000;\n}\n\n.section-two ion-title {\n  font-size: 14px;\n  text-align: center;\n}\n\n.section-two .grey-button {\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n}\n\n.section-two .grey-button .green {\n  text-align: left;\n  background-color: #83898D;\n  color: whitesmoke;\n  font-size: 7px;\n}\n\n.section-two .grey-button .red {\n  background-color: #FF0101;\n  color: whitesmoke;\n  font-size: 7px;\n  position: relative;\n}\n\n.section-two .address {\n  padding-left: 3px;\n  width: 100%;\n  text-align: left;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  font-size: 12px;\n  display: inline-block;\n  white-space: nowrap;\n  overflow: hidden !important;\n  text-overflow: ellipsis;\n  text-transform: capitalize;\n}\n\n.section-two .badge-success {\n  color: #fff;\n  background-color: #28a745;\n}\n\n.section-two .badge {\n  display: inline-block;\n  padding: 0.25em 0.4em;\n  font-size: 75%;\n  font-weight: 700;\n  line-height: 1;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: 0.25rem;\n}\n\n.section-two .sec-two-course-name {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.section-two .sec-two-course-name .sec-two-course-name-l {\n  padding-left: 3px;\n  width: 70px;\n  text-align: left;\n  display: inline-block;\n  font-size: 10px;\n  white-space: nowrap;\n  overflow: hidden !important;\n  text-overflow: ellipsis;\n}\n\n.section-two .sec-two-course-name .sec-two-course-name-r {\n  font-size: 10px;\n}\n\n.wallet-card:focus {\n  outline: none;\n}\n\n.wallet-card ion-card {\n  background-color: #ffffff;\n  background-image: linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%);\n  color: black;\n}\n\n.wallet-card .main {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  font-size: 20px;\n  display: inline-block;\n}\n\n.wallet-card .money {\n  text-align: center;\n  font-size: 20px;\n}\n\n.wallet-card .amt {\n  padding: 10px;\n  text-align: center;\n}\n\n.nearby button {\n  cursor: pointer;\n  font-size: 10px;\n  text-align: left;\n  background: transparent;\n}\n\n.tracking-in-expand {\n  -webkit-animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) both;\n  animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) both;\n}\n\n@-webkit-keyframes tracking-in-expand {\n  0% {\n    letter-spacing: -0.5em;\n    opacity: 0;\n  }\n  40% {\n    opacity: 0.6;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes tracking-in-expand {\n  0% {\n    letter-spacing: -0.5em;\n    opacity: 0;\n  }\n  40% {\n    opacity: 0.6;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\nlabel {\n  /*  background-color: yellow;*/\n}\n\nlabel ion-icon {\n  /*  background-color: red;*/\n  padding-top: 8px;\n  width: 100%;\n  text-align: center;\n  border-radius: 50%;\n}\n\n#label {\n  /*  background-color: orange;*/\n  padding: 0;\n  width: 10%;\n}\n\n#nearby {\n  bottom: 0;\n  width: 100%;\n  font-size: 10px;\n  /*  background-color: grey;*/\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFVRTtFQUVFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFSSjs7QUFVSTtFQUVFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQVROOztBQVdNO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQVRSOztBQVlNO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0FBVlI7O0FBY007RUFDRSxhQUFBO0FBWlI7O0FBbUJFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFoQko7O0FBa0JJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBaEJOOztBQWtCTTtFQUNFLGNBQUE7RUFFQSxnQkFBQTtFQUNBLGVBQUE7QUFqQlI7O0FBb0JNO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtBQWxCUjs7QUFzQk07RUFDRSxhQUFBO0FBcEJSOztBQTBCQTtFQUNFLGFBQUE7QUF2QkY7O0FBNEJFO0VBQ0UsZ0JBQUE7QUF6Qko7O0FBNEJFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFFQSx3Q0FBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFBOEIsNEJBQUE7RUFDOUIsc0JBQUE7QUExQko7O0FBOEJFO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNB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O0lBQ0UsVUFBQTtFQXBHRjtBQUNGOztBQXVHQTtFQUNFO0lBQ0Usc0JBQUE7SUFDQSxVQUFBO0VBckdGO0VBdUdBO0lBQ0UsWUFBQTtFQXJHRjtFQXVHQTtJQUNFLFVBQUE7RUFyR0Y7QUFDRjs7QUF3R0E7RUFDQSw4QkFBQTtBQXRHQTs7QUF5R0E7RUFDQSwyQkFBQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUF0R0Y7O0FBd0dBO0VBQ0EsOEJBQUE7RUFDRSxVQUFBO0VBQ0EsVUFBQTtBQXJHRjs7QUF1R0E7RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDRiw0QkFBQTtBQXBHQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2xpZGUgOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuaW9uLWNvbCA6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5pb24tc2VhcmNoYmFyIHtcblxuXG59XG5cbi5uZWFyYnkge1xuXG5cbiAgaW9uLXNsaWRlIHtcblxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogMzVweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG5cbiAgICBpb24tY29sIHtcblxuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgc3BhbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgICAgIGNvbG9yOiAjMWUyMTJkO1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICB9XG5cbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAvLyBib3gtc2hhZG93OiAwcHggMTVweCAyMHB4IDBweCByZ2JhKDAsMCwwLDAuMTYpO1xuICAgICAgfVxuXG4gICAgICBpbWcgOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmNhdGVnb3J5LXNsaWRlciB7XG4gIGlvbi1zbGlkZSB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG4gICAgaW9uLWNvbCB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICBoNCB7XG4gICAgICAgIGNvbG9yOiAjMWUyMTJkO1xuICAgICAgICAvL21hcmdpbjogMDtcbiAgICAgICAgbWFyZ2luLXRvcDogNzBweDtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgfVxuXG4gICAgICBpbWcge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgIC8vIGJveC1zaGFkb3c6IDBweCAxNXB4IDIwcHggMHB4IHJnYmEoMCwwLDAsMC4xNik7XG4gICAgICB9XG5cbiAgICAgIGltZyA6Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5pb24tc2xpZGU6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5cbi50b3AtY2FyZC1zd2lwZXIge1xuICBsaSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgfVxuXG4gIGlvbi1jYXJkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgY29sb3I6ICMwMDA7XG5cbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvc2duaV9vcmFuZ2UuanBnXCIpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyAvKiBEbyBub3QgcmVwZWF0IHRoZSBpbWFnZSAqL1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cbiAgfVxuXG4gIC5jb3Vyc2VuYW1lIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuXG4gIH1cbn1cblxuLnRvcC1jYXJkLXN3aXBlciBpb24tdGl0bGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG4uZ3JleS1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG5cbiAgLmdyZWVuIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4Mzg5OEQ7XG4gICAgY29sb3I6IHdoaXRlc21va2U7XG4gICAgZm9udC1zaXplOiA3cHg7XG4gIH1cblxuICAucmVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWM0NjQ2O1xuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIGZvbnQtc2l6ZTogN3B4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICB9XG5cbn1cblxuXG4uZ3JleS1idXR0b24gaW9uLWJ1dHRvbjphY3RpdmUge1xuICBvdXRsaW5lOiBsaW1lZ3JlZW4gYXV0byA1cHg7XG59XG5cblxuLmhlYWRpbmdzIHtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cblxuXG4uaGVhZGluZ3MgaDYge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjMzc0MDQ1O1xufVxuXG4vKmRpc2NvdW50IGJhbm5lciBhbmltYXRvbiovXG4uZmxpcC1ob3Jpem9udGFsLXRvcCB7XG4gIGFuaW1hdGlvbjogc2NhbGUtdXAtY2VudGVyIDFzIGN1YmljLWJlemllciguMzksIC41NzUsIC41NjUsIDEuMDAwKSBib3RoXG59XG5cbkBrZXlmcmFtZXMgc2NhbGUtdXAtY2VudGVyIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoLjUpXG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKVxuICB9XG59XG5cbi8qZGlzY291bnQgYmFubmVyIGFuaW1hdG9uKi9cblxuLypzZ25pIHRvb2xiYXIgbG9nbyBhbmltYXRpb24qL1xuLnNjYWxlLWRvd24tY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG59XG5cblxuLypzZ25pIHRvb2xiYXIgbG9nbyBhbmltYXRpb24qL1xuXG5cbi8qdGV4dCBhbmltYXRpb24qL1xuLmZsaXAtMi12ZXItcmlnaHQtZndkIHtcbiAgYW5pbWF0aW9uOiB0cmFja2luZy1pbi1leHBhbmQgMS41cyBjdWJpYy1iZXppZXIoLjIxNSwgLjYxLCAuMzU1LCAxLjAwMCkgYm90aDtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYmFja3dhcmRzO1xufVxuXG5Aa2V5ZnJhbWVzIHRyYWNraW5nLWluLWV4cGFuZCB7XG4gIDAlIHtcbiAgICBsZXR0ZXItc3BhY2luZzogLS41ZW07XG4gICAgb3BhY2l0eTogMFxuICB9XG4gIDQwJSB7XG4gICAgb3BhY2l0eTogLjZcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxXG4gIH1cbn1cblxuLmFjdGl2ZSB7XG4gIGNvbG9yOiAjNjI4Y2ZmO1xufVxuXG4uYm9vdG9tLW1hcmdpbiB7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xufVxuXG4ucmVkIHtcbiAgY29sb3I6ICNmZjAwMDA7XG59XG5cbmlvbi1iYWRnZSB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4uc2VjLW9uZS1tYWluIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogOHB4O1xuXG4gIC5sZWZ0IHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuXG4gIC5yaWdodCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMDEwMTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gIH1cblxuICAuY291cnNlLW5hbWUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgfVxuXG5cbn1cblxuXG4uY29sb3ItYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG5cblxuICAucmVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYwMTAxO1xuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICB9XG5cbiAgLmdyZWVuIHtcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgICBmb250LXNpemU6IDhweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODM4OThEO1xuICB9XG59XG5cblxuLypzZWN0aW9uIHR3byovXG4uc2VjdGlvbi10d28ge1xuICBpb24tc2xpZGUge1xuICAgIGJvcmRlcjogLjVweCBibGFjayBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG5cbiAgaW9uLWhlYWRlciB7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvc2duaV9vcmFuZ2UuanBnXCIpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyAvKiBEbyBub3QgcmVwZWF0IHRoZSBpbWFnZSAqL1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cbiAgICBpb24tdGl0bGUge1xuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgIHRleHQtc2hhZG93OiAxcHggMnB4IGJsYWNrO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuXG4gICAgfVxuXG4gICAgLm9mZmVyIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBwYWRkaW5nOiAycHg7XG4gICAgICBmb250LXNpemU6IDhweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuXG4gICAgLnJhdGluZy1iYXIge1xuICAgICAgdG9wOiA2MHB4O1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB6LWluZGV4OiAxO1xuXG4gICAgICAudmlld3Mge1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgfVxuXG4gICAgICAud2F0Y2gge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBjb2xvcjogZ3JleTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgICBmb250LXNpemU6IDhweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuICBsaSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgfVxuXG4gIGlvbi1jYXJkIHtcbiAgICBwYWRkaW5nOiAxcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGNvbG9yOiAjMDAwO1xuICB9XG5cbiAgLyouY291cnNlbmFtZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB3aWR0aDogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuXG4gIH0qL1xuXG5cbiAgaW9uLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cblxuICAuZ3JleS1idXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG5cbiAgICAuZ3JlZW4ge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4Mzg5OEQ7XG4gICAgICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgICAgIGZvbnQtc2l6ZTogN3B4O1xuICAgIH1cblxuICAgIC5yZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMDEwMTtcbiAgICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgICAgZm9udC1zaXplOiA3cHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICB9XG5cbiAgfVxuXG5cbiAgLmFkZHJlc3Mge1xuICAgIHBhZGRpbmctbGVmdDogM3B4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcblxuXG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuXG4gIH1cblxuICAuYmFkZ2Utc3VjY2VzcyB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTtcbiAgfVxuXG4gIC5iYWRnZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IC4yNWVtIC40ZW07XG4gICAgZm9udC1zaXplOiA3NSU7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xuICB9XG5cbiAgLnNlYy10d28tY291cnNlLW5hbWUge1xuXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcblxuICAgIC5zZWMtdHdvLWNvdXJzZS1uYW1lLWwge1xuICAgICAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gICAgICB3aWR0aDogNzBweDtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG5cbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB9XG5cbiAgICAuc2VjLXR3by1jb3Vyc2UtbmFtZS1yIHtcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcblxuICAgIH1cblxuICB9XG5cbn1cblxuLndhbGxldC1jYXJkOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLndhbGxldC1jYXJkIHtcbiAgaW9uLWNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgI2ZmZmZmZiAwJSwgI2Q3ZTFlYyA3NCUpO1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuXG4gIC5tYWluIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuXG4gIC5tb25leSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG5cbiAgLmFtdCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuXG59XG5cbi5uZWFyYnkge1xuICBidXR0b24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgfVxuXG59XG5cbi50cmFja2luZy1pbi1leHBhbmQge1xuICAtd2Via2l0LWFuaW1hdGlvbjogdHJhY2tpbmctaW4tZXhwYW5kIC43cyBjdWJpYy1iZXppZXIoLjIxNSwgLjYxLCAuMzU1LCAxLjAwMCkgYm90aDtcbiAgYW5pbWF0aW9uOiB0cmFja2luZy1pbi1leHBhbmQgLjdzIGN1YmljLWJlemllciguMjE1LCAuNjEsIC4zNTUsIDEuMDAwKSBib3RoXG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyB0cmFja2luZy1pbi1leHBhbmQge1xuICAwJSB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0uNWVtO1xuICAgIG9wYWNpdHk6IDBcbiAgfVxuICA0MCUge1xuICAgIG9wYWNpdHk6IC42XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMVxuICB9XG59XG5cbkBrZXlmcmFtZXMgdHJhY2tpbmctaW4tZXhwYW5kIHtcbiAgMCUge1xuICAgIGxldHRlci1zcGFjaW5nOiAtLjVlbTtcbiAgICBvcGFjaXR5OiAwXG4gIH1cbiAgNDAlIHtcbiAgICBvcGFjaXR5OiAuNlxuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDFcbiAgfVxufVxuXG5sYWJlbCB7XG4vKiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93OyovXG59XG5cbmxhYmVsIGlvbi1pY29uIHtcbi8qICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7Ki9cbiAgcGFkZGluZy10b3A6IDhweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuI2xhYmVse1xuLyogIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTsqL1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTAlO1xufVxuI25lYXJieSB7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTBweDtcbi8qICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5OyovXG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _enquiremodal_enquiremodal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../enquiremodal/enquiremodal.page */ "./src/app/enquiremodal/enquiremodal.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/core */ "./node_modules/@ionic/core/dist/esm/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");










const { Network, Toast } = _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["Plugins"];
let HomePage = class HomePage {
    constructor(httpclient, service, elementRef, modalController, alertController, platform, router, navCtrl, storage, menu) {
        this.httpclient = httpclient;
        this.service = service;
        this.elementRef = elementRef;
        this.modalController = modalController;
        this.alertController = alertController;
        this.platform = platform;
        this.router = router;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.menu = menu;
        this.coursesDetails = {};
        this.coursesDetails2 = {};
        this.coursesDetails3 = {};
        this.flag = false;
        this.result = [];
        this.resulttopcourse = [];
        this.resulttopcourse2 = [];
        this.bawa = [];
        this.id = [];
        this.name = [];
        this.result2 = {};
        this.maincourse_knowmore = [];
        this.arrayObject = [];
        this.finalarray = [];
        this.walletamt = [];
        this.option = {
            slidesPerView: 1.5,
            centerdSlides: true,
            loop: true,
            spaceBetween: 5,
        };
        this.topcard = {
            slidesPerView: 2.2,
            centerdSlides: true,
            loop: true,
            spaceBetween: 1,
        };
        let ref = this;
        Network.addListener('networkStatusChange', function (val) {
            var self = this;
            if (val.connected) {
            }
            else {
                ref.navCtrl.navigateRoot('/nointernet', { replaceUrl: true });
            }
        });
        this.service.getSid('sid').then((d) => console.log("sid", this.sid = d));
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            /*top institute*/
            this.service.mainpagetopcourses().subscribe(data => {
                this.result = data['data'];
                console.log(this.result);
                console.log('instituteid', this.result['inst_id']);
                this.generateCourseDetails(this.result);
            });
            /*wallet-card*/
            const result = yield this.storage.get('sid');
            console.log(result);
            this.service.wallet(result).subscribe(data => {
                this.walletamt = data['data'];
                console.log(this.walletamt[0]);
            });
            /*top course*/
            this.service.mainpagetopcourses2().subscribe(data => {
                this.resulttopcourse = data['data'];
                console.log('topcoursedata', this.resulttopcourse);
                console.log('instituteid', this.resulttopcourse['inst_id']);
                this.generateCourseDetails2(this.resulttopcourse);
            });
            /*top ielts*/
            this.service.mainpagetopcourses3().subscribe(data => {
                this.resulttopcourse2 = data['data'];
                console.log('topcoursedata', this.resulttopcourse2);
                console.log('instituteid', this.resulttopcourse2['inst_id']);
                this.generateCourseDetails3(this.resulttopcourse2);
            });
        });
    }
    ionViewDidEnter() {
        this.backButtonSubscription = this.platform.backButton.subscribeWithPriority(1, () => {
            navigator['app'].exitApp();
            //this.presentAlertConfirm();
        });
    }
    ionViewWillLeave() {
        this.backButtonSubscription.unsubscribe();
    }
    ngAfterViewInit() {
        /*this.backButtonSubscription = this.platform.backButton.subscribeWithPriority(1, () => {
            navigator['app'].exitApp();
            //this.presentAlertConfirm();
        });*/
    }
    ngOnDestroy() {
        // this.backButtonSubscription.unsubscribe();
    }
    presentAlertConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirm!',
                message: 'Confirm to Exit App !!!',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Exit',
                        handler: () => {
                            console.log('Confirm Okay');
                            navigator["app"].exitApp();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    generateCourseDetails(company, i = 0) {
        console.log(company);
        if (company[i] != undefined) {
            this.service.mainpagetopcourses_knowmore(company[i].inst_id).subscribe((data) => {
                this.coursesDetails[company[i].inst_id] = data.data;
                i++;
                this.generateCourseDetails(company, i);
            });
        }
        else {
            this.flag = true;
            console.log('cd', this.coursesDetails);
        }
    }
    generateCourseDetails2(company, i = 0) {
        console.log(company);
        if (company[i] != undefined) {
            this.service.mainpagetopcourses_knowmore(company[i].inst_id).subscribe((data) => {
                this.coursesDetails2[company[i].inst_id] = data.data;
                i++;
                this.generateCourseDetails2(company, i);
            });
        }
        else {
            this.flag = true;
            console.log('cd', this.coursesDetails2);
        }
    }
    generateCourseDetails3(company, i = 0) {
        console.log(company);
        if (company[i] != undefined) {
            this.service.mainpagetopcourses_knowmore(company[i].inst_id).subscribe((data) => {
                this.coursesDetails3[company[i].inst_id] = data.data;
                i++;
                this.generateCourseDetails3(company, i);
            });
        }
        else {
            this.flag = true;
            console.log('cd', this.coursesDetails3);
        }
    }
    showToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Please Check Your Connection',
                message: 'No internet connection dude.',
                backdropDismiss: false,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    presentModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _enquiremodal_enquiremodal_page__WEBPACK_IMPORTED_MODULE_4__["EnquiremodalPage"],
                cssClass: 'my-custom-class',
            });
            return yield modal.present();
        });
    }
    animation() {
        const animation = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_6__["createAnimation"])('')
            .addElement(this.testdiv.nativeElement)
            .duration(1000)
            .fromTo('opacity', '1', '0.5');
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Logout!',
                message: 'Your are going to <strong>Logout</strong>',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Okay',
                        handler: () => {
                            //this.router.navigateByUrl('/login', { replaceUrl: true });
                            this.navCtrl.navigateRoot('/login', { replaceUrl: true });
                            this.service.clear();
                            console.log('Confirm Okay');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    yourSearchFunction(value) {
        let navigationExtras = {
            queryParams: {
                value: value,
            }
        };
        this.navCtrl.navigateForward(['searchresult'], navigationExtras);
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] }
];
HomePage.propDecorators = {
    testdiv: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['test',] }]
};
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map