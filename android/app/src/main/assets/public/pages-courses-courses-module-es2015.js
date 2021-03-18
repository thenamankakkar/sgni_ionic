(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-courses-courses-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/courses/courses.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/courses/courses.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-title class=\"text-wrap ion-text-capitalize\">All of {{this.location}}</ion-title>\n\n    </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\" fullscreen=\"true\">\n    <!--   <ion-card *ngFor=\"let response of result\">\n           <ion-item>\n                   <img src=\"../../../assets/icon/sgni.png\" width=\"100\"/>\n               <ion-label>\n                   <h3 class=\"ion-text-wrap\">{{response.name}}</h3>\n                   <p>{{response.location}}</p>\n               </ion-label>\n           </ion-item>\n\n           <ion-card-header>\n               <ion-card-title><h6>Address</h6></ion-card-title>\n           </ion-card-header>\n           <ion-card-content>\n               {{response.address}}\n           </ion-card-content>\n\n           <ion-footer>\n               <ion-row>\n                   <ion-col center text-center>\n                       <ion-button  color=\"medium\" (click)=\"presentModal()\">\n                           <ion-icon name=\"alert-circle-outline\"></ion-icon>\n                           <div>Enquire Now</div>\n                       </ion-button>\n                   </ion-col>\n                   <ion-col text-center>\n                       <ion-button color=\"danger\" [routerLink]=\"['/knowmore',response.inst_id,response.inst_cid,response.name,response.address,response.inst_slug]\">\n                           <ion-icon name=\"information-circle-outline\"></ion-icon>\n                           <div>Know More</div>\n                       </ion-button>\n                   </ion-col>\n               </ion-row>\n           </ion-footer>\n       </ion-card>-->\n    <div class=\"section-two\">\n        <div class=\"headings\">\n\n            <ion-slide *ngFor=\"let fd of result;let i=index\" class=\"ion-no-padding\">\n                <ion-card class=\"flip-horizontal-top\">\n\n                    <ion-header>\n                        <ion-title class=\"ion-padding-top\">\n                            <p class=\"text-wrap  ion-no-padding flip-2-ver-right-fwd\">{{fd.name}}</p>\n                        </ion-title>\n\n                        <div class=\"rating-bar\">\n                            <div class=\"float-left views col-6\">\n                                     <span class=\"watch\">\n                                    <ion-icon name=\"eye\"></ion-icon>\n                                         {{fd.Views}}\n                                    </span>\n                            </div>\n\n                            <div class=\"float-right save  col-6\">\n                                <span class=\"offer\">save up to 10%</span>\n                            </div>\n\n                        </div>\n                    </ion-header>\n\n                    <div class=\"address\">\n\n\n                            <ion-icon name=\"location\"></ion-icon>\n                            {{fd.address2}}\n                    </div>\n\n                    <div *ngIf=\"flag == true\">\n                        <ng-container *ngFor=\"let det of coursesDetails[fd.inst_id]; let i = index\">\n                            <div *ngIf=\"i < 4\"  [routerLink]=\"['/booknow', fd.inst_cid,det.coursename,fd.name,fd.address,fd.inst_id,fd.inst_slug]\">\n\n\n                                <div class=\"sec-two-course-name \">\n                                    <div class=\"sec-two-course-name-l float-left\">\n\n                                        <ion-icon name=\"book\"></ion-icon>&nbsp;{{ det.coursename }}\n                                    </div>\n\n                                    <div class=\"sec-two-course-name-r float-right\">\n                                        <strong>\n                                            &nbsp;{{det.final_fees  | number }}\n                                        </strong>\n                                        <s class=\"fees\">&nbsp;&#8377;{{det.fees | number}}</s>&nbsp;&nbsp;\n                                        <span slot=\"end\" class=\"badge badge-success\"><small><b>BOOK NOW</b></small></span>\n                                    </div>\n                                </div>\n\n                            </div>\n                        </ng-container>\n                    </div>\n\n\n                    <div class=\"bottom\">\n                        <ion-buttons class=\"color-button \">\n                            <ion-button class=\"col-6 green rounded\" (click)=\"presentModal()\">Enquire Now\n                            </ion-button>\n                            <ion-button class=\"col-6 red rounded\"\n                                        [routerLink]=\"['/knowmore',fd.inst_id,fd.inst_cid,fd.name,fd.address,fd.inst_slug]\">\n                                Know More\n                            </ion-button>\n                        </ion-buttons>\n                    </div>\n                </ion-card>\n            </ion-slide>\n\n        </div>\n    </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/courses/courses-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/courses/courses-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: CoursesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesPageRoutingModule", function() { return CoursesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _courses_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./courses.page */ "./src/app/pages/courses/courses.page.ts");




const routes = [
    {
        path: '',
        component: _courses_page__WEBPACK_IMPORTED_MODULE_3__["CoursesPage"]
    }
];
let CoursesPageRoutingModule = class CoursesPageRoutingModule {
};
CoursesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoursesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/courses/courses.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/courses/courses.module.ts ***!
  \*************************************************/
/*! exports provided: CoursesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesPageModule", function() { return CoursesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _courses_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./courses-routing.module */ "./src/app/pages/courses/courses-routing.module.ts");
/* harmony import */ var _courses_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./courses.page */ "./src/app/pages/courses/courses.page.ts");







let CoursesPageModule = class CoursesPageModule {
};
CoursesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _courses_routing_module__WEBPACK_IMPORTED_MODULE_5__["CoursesPageRoutingModule"]
        ],
        declarations: [_courses_page__WEBPACK_IMPORTED_MODULE_6__["CoursesPage"]]
    })
], CoursesPageModule);



/***/ }),

/***/ "./src/app/pages/courses/courses.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/courses/courses.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slide :focus {\n  outline: none;\n}\n\nion-col :focus {\n  outline: none;\n}\n\n.category-slider ion-slide {\n  width: 50px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin-right: 10px;\n  margin-left: 10px;\n  margin-bottom: 10px;\n}\n\n.category-slider ion-slide ion-col {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.category-slider ion-slide ion-col h4 {\n  color: #1e212d;\n  margin-top: 70px;\n  font-size: 10px;\n}\n\n.category-slider ion-slide ion-col img {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n  top: 0;\n  left: 0;\n  z-index: -1;\n}\n\n.category-slider ion-slide ion-col img :focus {\n  outline: none;\n}\n\nion-slide:focus {\n  outline: none;\n}\n\n.top-card-swiper li {\n  list-style: none;\n}\n\n.top-card-swiper ion-card {\n  width: 100%;\n  height: 150px;\n  border-radius: 10px;\n  color: #000;\n  background-image: url('sgni_orange.jpg');\n  background-position: center;\n  background-repeat: no-repeat;\n  /* Do not repeat the image */\n  background-size: cover;\n}\n\n.top-card-swiper .coursename {\n  display: inline-block;\n  font-size: 13px;\n  font-weight: bold;\n  width: 100%;\n  white-space: nowrap;\n  overflow: hidden !important;\n  text-overflow: ellipsis;\n}\n\n.top-card-swiper ion-title {\n  font-size: 12px;\n  text-align: center;\n}\n\n.grey-button {\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n}\n\n.grey-button .green {\n  text-align: left;\n  background-color: #83898D;\n  color: whitesmoke;\n  font-size: 7px;\n}\n\n.grey-button .red {\n  background-color: #ec4646;\n  color: whitesmoke;\n  font-size: 7px;\n  position: relative;\n}\n\n.grey-button ion-button:active {\n  outline: limegreen auto 5px;\n}\n\n.headings {\n  padding-top: 5px;\n}\n\n.headings h6 {\n  font-size: 12px;\n  color: #374045;\n}\n\n/*discount banner animaton*/\n\n.flip-horizontal-top {\n  -webkit-animation: scale-up-center 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n          animation: scale-up-center 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n}\n\n@-webkit-keyframes scale-up-center {\n  0% {\n    transform: scale(0.5);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n@keyframes scale-up-center {\n  0% {\n    transform: scale(0.5);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n/*discount banner animaton*/\n\n/*sgni toolbar logo animation*/\n\n.scale-down-center {\n  text-align: center;\n}\n\n/*sgni toolbar logo animation*/\n\n/*text animation*/\n\n.flip-2-ver-right-fwd {\n  -webkit-animation: tracking-in-expand 1.5s cubic-bezier(0.215, 0.61, 0.355, 1) both;\n          animation: tracking-in-expand 1.5s cubic-bezier(0.215, 0.61, 0.355, 1) both;\n  -webkit-animation-fill-mode: backwards;\n          animation-fill-mode: backwards;\n}\n\n@keyframes tracking-in-expand {\n  0% {\n    letter-spacing: -0.5em;\n    opacity: 0;\n  }\n  40% {\n    opacity: 0.6;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n.active {\n  color: #628cff;\n}\n\n.bootom-margin {\n  padding-bottom: 50px;\n}\n\n.red {\n  color: #ff0000;\n}\n\nion-badge {\n  margin-top: 5px;\n  font-size: 10px;\n}\n\n.sec-one-main {\n  width: 100%;\n  font-size: 8px;\n}\n\n.sec-one-main .left {\n  float: left;\n  background-color: yellow;\n  text-align: left;\n}\n\n.sec-one-main .right {\n  background-color: #FF0101;\n  float: right;\n}\n\n.sec-one-main .course-name {\n  display: inline-block;\n  white-space: nowrap;\n  overflow: hidden !important;\n  text-overflow: ellipsis;\n}\n\n.color-button {\n  width: 100%;\n  text-align: center;\n  position: absolute;\n  bottom: 0;\n}\n\n.color-button .red {\n  background-color: #FF0101;\n  color: whitesmoke;\n  font-size: 8px;\n}\n\n.color-button .green {\n  color: whitesmoke;\n  font-size: 8px;\n  background-color: #83898D;\n}\n\n/*section two*/\n\n.section-two ion-slide {\n  border: 0.5px black solid;\n  border-radius: 5px;\n  margin-bottom: 15px;\n}\n\n.section-two ion-header {\n  height: 80px;\n  color: white;\n  background-image: url('sgni_orange.jpg');\n  background-position: center;\n  background-repeat: no-repeat;\n  /* Do not repeat the image */\n  background-size: cover;\n}\n\n.section-two ion-header ion-title {\n  text-align: justify;\n  font-size: 10px;\n  text-shadow: 1px 2px black;\n  display: inline-block;\n  white-space: nowrap;\n  overflow: hidden !important;\n  text-overflow: ellipsis;\n}\n\n.section-two ion-header .offer {\n  border: 1px solid #ffffff;\n  border-radius: 5px;\n  padding: 2px;\n  font-size: 8px;\n  background-color: green;\n  color: #fff;\n  text-transform: capitalize;\n  z-index: 1;\n}\n\n.section-two ion-header .rating-bar {\n  top: 60px;\n  position: fixed;\n  width: 100%;\n  z-index: 1;\n}\n\n.section-two ion-header .rating-bar .views {\n  text-align: left;\n}\n\n.section-two ion-header .rating-bar .watch {\n  border: 1px solid #ffffff;\n  border-radius: 5px;\n  background-color: white;\n  color: grey;\n  text-align: left;\n  padding: 2px;\n  font-size: 8px;\n  text-transform: capitalize;\n  z-index: 1;\n}\n\n.section-two li {\n  list-style: none;\n}\n\n.section-two ion-card {\n  height: 200px;\n  width: 100%;\n  border-radius: 10px;\n  color: #000;\n}\n\n.section-two ion-title {\n  font-size: 14px;\n  text-align: center;\n}\n\n.section-two .grey-button {\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n}\n\n.section-two .grey-button .green {\n  text-align: left;\n  background-color: #83898D;\n  color: whitesmoke;\n  font-size: 7px;\n}\n\n.section-two .grey-button .red {\n  background-color: #FF0101;\n  color: whitesmoke;\n  font-size: 7px;\n  position: relative;\n}\n\n.section-two .address {\n  padding-left: 3px;\n  width: 100%;\n  text-align: left;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  font-size: 12px;\n  display: inline-block;\n  width: 100%;\n  white-space: nowrap;\n  overflow: hidden !important;\n  text-overflow: ellipsis;\n  text-transform: capitalize;\n}\n\n.section-two .badge-success {\n  color: #fff;\n  background-color: #28a745;\n}\n\n.section-two .badge {\n  display: inline-block;\n  padding: 0.25em 0.4em;\n  font-size: 75%;\n  font-weight: 700;\n  line-height: 1;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: 0.25rem;\n}\n\n.section-two .sec-two-course-name {\n  height: 100%;\n}\n\n.section-two .sec-two-course-name .sec-two-course-name-l {\n  padding-left: 3px;\n  width: 50%;\n  text-align: left;\n  display: inline-block;\n  font-size: 10px;\n  white-space: nowrap;\n  overflow: hidden !important;\n  text-overflow: ellipsis;\n}\n\n.section-two .sec-two-course-name .sec-two-course-name-r {\n  font-size: 10px;\n  width: 50%;\n}\n\n.wallet-card ion-card {\n  background-color: #ffffff;\n  background-image: linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%);\n  color: black;\n}\n\n.wallet-card .main {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  font-size: 20px;\n  display: inline-block;\n}\n\n.wallet-card .money {\n  text-align: center;\n  font-size: 20px;\n}\n\n.wallet-card .amt {\n  padding: 10px;\n  text-align: center;\n}\n\n.nearby button {\n  cursor: pointer;\n  font-size: 10px;\n  text-align: left;\n  background: transparent;\n}\n\n.tracking-in-expand {\n  -webkit-animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) both;\n  animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) both;\n}\n\n@-webkit-keyframes tracking-in-expand {\n  0% {\n    letter-spacing: -0.5em;\n    opacity: 0;\n  }\n  40% {\n    opacity: 0.6;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes tracking-in-expand {\n  0% {\n    letter-spacing: -0.5em;\n    opacity: 0;\n  }\n  40% {\n    opacity: 0.6;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY291cnNlcy9jb3Vyc2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFHRTtFQUNFLFdBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFFSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUFOOztBQUVNO0VBQ0UsY0FBQTtFQUVBLGdCQUFBO0VBQ0EsZUFBQTtBQURSOztBQUlNO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtBQUZSOztBQU1NO0VBQ0UsYUFBQTtBQUpSOztBQVVBO0VBQ0UsYUFBQTtBQVBGOztBQVlFO0VBQ0UsZ0JBQUE7QUFUSjs7QUFZRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBRUEsd0NBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQThCLDRCQUFBO0VBQzlCLHNCQUFBO0FBVko7O0FBY0U7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7QUFaSjs7QUFpQkE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUFkRjs7QUFrQkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBZkY7O0FBaUJFO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQWZKOztBQWtCRTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFoQko7O0FBdUJBO0VBQ0UsMkJBQUE7QUFwQkY7O0FBd0JBO0VBQ0UsZ0JBQUE7QUFyQkY7O0FBeUJBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUF0QkY7O0FBeUJBLDJCQUFBOztBQUNBO0VBQ0UsOEVBQUE7VUFBQSxzRUFBQTtBQXRCRjs7QUF5QkE7RUFDRTtJQUNFLHFCQUFBO0VBdEJGO0VBd0JBO0lBQ0UsbUJBQUE7RUF0QkY7QUFDRjs7QUFnQkE7RUFDRTtJQUNFLHFCQUFBO0VBdEJGO0VBd0JBO0lBQ0UsbUJBQUE7RUF0QkY7QUFDRjs7QUF5QkEsMkJBQUE7O0FBRUEsOEJBQUE7O0FBQ0E7RUFDRSxrQkFBQTtBQXhCRjs7QUE2QkEsOEJBQUE7O0FBR0EsaUJBQUE7O0FBQ0E7RUFDRSxtRkFBQTtVQUFBLDJFQUFBO0VBQ0Esc0NBQUE7VUFBQSw4QkFBQTtBQTVCRjs7QUErQkE7RUFDRTtJQUNFLHNCQUFBO0lBQ0EsVUFBQTtFQTVCRjtFQThCQTtJQUNFLFlBQUE7RUE1QkY7RUE4QkE7SUFDRSxVQUFBO0VBNUJGO0FBQ0Y7O0FBK0JBO0VBQ0UsY0FBQTtBQTdCRjs7QUFnQ0E7RUFDRSxvQkFBQTtBQTdCRjs7QUFnQ0E7RUFDRSxjQUFBO0FBN0JGOztBQWdDQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FBN0JGOztBQWdDQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0FBN0JGOztBQStCRTtFQUNFLFdBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FBN0JKOztBQWdDRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQTlCSjs7QUFpQ0U7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtBQS9CSjs7QUFzQ0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFuQ0Y7O0FBc0NFO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFwQ0o7O0FBdUNFO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUFyQ0o7O0FBMENBLGNBQUE7O0FBRUU7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUF4Q0o7O0FBMkNFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSx3Q0FBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFBOEIsNEJBQUE7RUFDOUIsc0JBQUE7QUF4Q0o7O0FBMENJO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtBQXhDTjs7QUE0Q0k7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7QUExQ047O0FBNkNJO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQTNDTjs7QUE2Q007RUFDRSxnQkFBQTtBQTNDUjs7QUE4Q007RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtBQTVDUjs7QUFrREU7RUFDRSxnQkFBQTtBQWhESjs7QUFtREU7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQWpESjs7QUFxREU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUFuREo7O0FBdURFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQXJESjs7QUF1REk7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBckROOztBQXdESTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUF0RE47O0FBNkRFO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFHQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7QUE3REo7O0FBaUVFO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0FBL0RKOztBQWtFRTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7QUFoRUo7O0FBbUVFO0VBRUUsWUFBQTtBQWxFSjs7QUFvRUk7RUFDRSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUVBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtBQW5FTjs7QUFzRUk7RUFDRSxlQUFBO0VBQ0EsVUFBQTtBQXBFTjs7QUE2RUU7RUFDRSx5QkFBQTtFQUNBLGtFQUFBO0VBQ0EsWUFBQTtBQTFFSjs7QUE2RUU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBM0VKOztBQThFRTtFQUNFLGtCQUFBO0VBRUEsZUFBQTtBQTdFSjs7QUFnRkU7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUE5RUo7O0FBcUZFO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBbEZKOztBQXVGQTtFQUNFLG1GQUFBO0VBQ0EsMkVBQUE7QUFwRkY7O0FBdUZBO0VBQ0U7SUFDRSxzQkFBQTtJQUNBLFVBQUE7RUFwRkY7RUFzRkE7SUFDRSxZQUFBO0VBcEZGO0VBc0ZBO0lBQ0UsVUFBQTtFQXBGRjtBQUNGOztBQXVGQTtFQUNFO0lBQ0Usc0JBQUE7SUFDQSxVQUFBO0VBckZGO0VBdUZBO0lBQ0UsWUFBQTtFQXJGRjtFQXVGQTtJQUNFLFVBQUE7RUFyRkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvdXJzZXMvY291cnNlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2xpZGUgOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5pb24tY29sIDpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmNhdGVnb3J5LXNsaWRlciB7XHJcbiAgaW9uLXNsaWRlIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgICBpb24tY29sIHtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgIGg0IHtcclxuICAgICAgICBjb2xvcjogIzFlMjEyZDtcclxuICAgICAgICAvL21hcmdpbjogMDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA3MHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICAvLyBib3gtc2hhZG93OiAwcHggMTVweCAyMHB4IDBweCByZ2JhKDAsMCwwLDAuMTYpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpbWcgOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5pb24tc2xpZGU6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcblxyXG4udG9wLWNhcmQtc3dpcGVyIHtcclxuICBsaSB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIH1cclxuXHJcbiAgaW9uLWNhcmQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG5cclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9zZ25pX29yYW5nZS5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyAvKiBEbyBub3QgcmVwZWF0IHRoZSBpbWFnZSAqL1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHJcbiAgfVxyXG5cclxuICAuY291cnNlbmFtZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5cclxuICB9XHJcbn1cclxuXHJcbi50b3AtY2FyZC1zd2lwZXIgaW9uLXRpdGxlIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLmdyZXktYnV0dG9uIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG5cclxuICAuZ3JlZW4ge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4Mzg5OEQ7XHJcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIGZvbnQtc2l6ZTogN3B4O1xyXG4gIH1cclxuXHJcbiAgLnJlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWM0NjQ2O1xyXG4gICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBmb250LXNpemU6IDdweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbi5ncmV5LWJ1dHRvbiBpb24tYnV0dG9uOmFjdGl2ZSB7XHJcbiAgb3V0bGluZTogbGltZWdyZWVuIGF1dG8gNXB4O1xyXG59XHJcblxyXG5cclxuLmhlYWRpbmdzIHtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG59XHJcblxyXG5cclxuLmhlYWRpbmdzIGg2IHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICMzNzQwNDU7XHJcbn1cclxuXHJcbi8qZGlzY291bnQgYmFubmVyIGFuaW1hdG9uKi9cclxuLmZsaXAtaG9yaXpvbnRhbC10b3Age1xyXG4gIGFuaW1hdGlvbjogc2NhbGUtdXAtY2VudGVyIDFzIGN1YmljLWJlemllciguMzksIC41NzUsIC41NjUsIDEuMDAwKSBib3RoXHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2NhbGUtdXAtY2VudGVyIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC41KVxyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSlcclxuICB9XHJcbn1cclxuXHJcbi8qZGlzY291bnQgYmFubmVyIGFuaW1hdG9uKi9cclxuXHJcbi8qc2duaSB0b29sYmFyIGxvZ28gYW5pbWF0aW9uKi9cclxuLnNjYWxlLWRvd24tY2VudGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG5cclxuLypzZ25pIHRvb2xiYXIgbG9nbyBhbmltYXRpb24qL1xyXG5cclxuXHJcbi8qdGV4dCBhbmltYXRpb24qL1xyXG4uZmxpcC0yLXZlci1yaWdodC1md2Qge1xyXG4gIGFuaW1hdGlvbjogdHJhY2tpbmctaW4tZXhwYW5kIDEuNXMgY3ViaWMtYmV6aWVyKC4yMTUsIC42MSwgLjM1NSwgMS4wMDApIGJvdGg7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYmFja3dhcmRzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHRyYWNraW5nLWluLWV4cGFuZCB7XHJcbiAgMCUge1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0uNWVtO1xyXG4gICAgb3BhY2l0eTogMFxyXG4gIH1cclxuICA0MCUge1xyXG4gICAgb3BhY2l0eTogLjZcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxXHJcbiAgfVxyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICBjb2xvcjogIzYyOGNmZjtcclxufVxyXG5cclxuLmJvb3RvbS1tYXJnaW4ge1xyXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4ucmVkIHtcclxuICBjb2xvcjogI2ZmMDAwMDtcclxufVxyXG5cclxuaW9uLWJhZGdlIHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG4uc2VjLW9uZS1tYWluIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDhweDtcclxuXHJcbiAgLmxlZnQge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuXHJcbiAgLnJpZ2h0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjAxMDE7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG5cclxuICAuY291cnNlLW5hbWUge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIH1cclxuXHJcblxyXG59XHJcblxyXG5cclxuLmNvbG9yLWJ1dHRvbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcblxyXG5cclxuICAucmVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjAxMDE7XHJcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4gIH1cclxuXHJcbiAgLmdyZWVuIHtcclxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgZm9udC1zaXplOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODM4OThEO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8qc2VjdGlvbiB0d28qL1xyXG4uc2VjdGlvbi10d28ge1xyXG4gIGlvbi1zbGlkZSB7XHJcbiAgICBib3JkZXI6IC41cHggYmxhY2sgc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgaW9uLWhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvc2duaV9vcmFuZ2UuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgLyogRG8gbm90IHJlcGVhdCB0aGUgaW1hZ2UgKi9cclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblxyXG4gICAgaW9uLXRpdGxlIHtcclxuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICB0ZXh0LXNoYWRvdzogMXB4IDJweCBibGFjaztcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAub2ZmZXIge1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgZm9udC1zaXplOiA4cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgLnJhdGluZy1iYXIge1xyXG4gICAgICB0b3A6IDYwcHg7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcblxyXG4gICAgICAudmlld3Mge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC53YXRjaCB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICAgICAgZm9udC1zaXplOiA4cHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIGxpIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgfVxyXG5cclxuICBpb24tY2FyZCB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgfVxyXG5cclxuXHJcbiAgaW9uLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG5cclxuICAuZ3JleS1idXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcblxyXG4gICAgLmdyZWVuIHtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzgzODk4RDtcclxuICAgICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICAgIGZvbnQtc2l6ZTogN3B4O1xyXG4gICAgfVxyXG5cclxuICAgIC5yZWQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYwMTAxO1xyXG4gICAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgICAgZm9udC1zaXplOiA3cHg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIC5hZGRyZXNzIHtcclxuICAgIHBhZGRpbmctbGVmdDogM3B4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuXHJcblxyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuXHJcbiAgfVxyXG5cclxuICAuYmFkZ2Utc3VjY2VzcyB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOGE3NDU7XHJcbiAgfVxyXG5cclxuICAuYmFkZ2Uge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogLjI1ZW0gLjRlbTtcclxuICAgIGZvbnQtc2l6ZTogNzUlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxuICB9XHJcblxyXG4gIC5zZWMtdHdvLWNvdXJzZS1uYW1lIHtcclxuXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgLnNlYy10d28tY291cnNlLW5hbWUtbCB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogM3B4O1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlYy10d28tY291cnNlLW5hbWUtciB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXHJcbi53YWxsZXQtY2FyZCB7XHJcbiAgaW9uLWNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICNmZmZmZmYgMCUsICNkN2UxZWMgNzQlKTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcblxyXG4gIC5tYWluIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLm1vbmV5IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuYW10IHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcbi5uZWFyYnkge1xyXG4gIGJ1dHRvbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLnRyYWNraW5nLWluLWV4cGFuZCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHRyYWNraW5nLWluLWV4cGFuZCAuN3MgY3ViaWMtYmV6aWVyKC4yMTUsIC42MSwgLjM1NSwgMS4wMDApIGJvdGg7XHJcbiAgYW5pbWF0aW9uOiB0cmFja2luZy1pbi1leHBhbmQgLjdzIGN1YmljLWJlemllciguMjE1LCAuNjEsIC4zNTUsIDEuMDAwKSBib3RoXHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyB0cmFja2luZy1pbi1leHBhbmQge1xyXG4gIDAlIHtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtLjVlbTtcclxuICAgIG9wYWNpdHk6IDBcclxuICB9XHJcbiAgNDAlIHtcclxuICAgIG9wYWNpdHk6IC42XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMVxyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyB0cmFja2luZy1pbi1leHBhbmQge1xyXG4gIDAlIHtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtLjVlbTtcclxuICAgIG9wYWNpdHk6IDBcclxuICB9XHJcbiAgNDAlIHtcclxuICAgIG9wYWNpdHk6IC42XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMVxyXG4gIH1cclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/pages/courses/courses.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/courses/courses.page.ts ***!
  \***********************************************/
/*! exports provided: CoursesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesPage", function() { return CoursesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _enquiremodal_enquiremodal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../enquiremodal/enquiremodal.page */ "./src/app/enquiremodal/enquiremodal.page.ts");






let CoursesPage = class CoursesPage {
    constructor(route, router, service, alertController, modalController, toastController, loadingController) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.alertController = alertController;
        this.modalController = modalController;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.result = [];
        this.coursesDetails = {};
        this.flag = false;
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
            this.location = this.route.snapshot.paramMap.get('location');
            console.log('Locid', this.id);
            this.service.courses(this.id).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.result = data['data'];
                loading.dismiss();
                if (this.result.length == 0) {
                    console.log('data is null');
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
                }
                console.log('courses data', this.result);
                /*coursedeatils*/
                this.generateCourseDetails(this.result);
            }));
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
    enquire_alert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Enquire Now',
                message: 'By submitting the request, you accept our terms of use and privacy policy.',
                inputs: [
                    {
                        name: 'mobile',
                        type: 'number',
                        placeholder: 'Enter Number',
                    },
                    {
                        name: 'name',
                        type: 'text',
                        placeholder: 'Specify Your Requirements'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Ok',
                        handler: (alertData) => {
                            console.log(alertData.name1);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _enquiremodal_enquiremodal_page__WEBPACK_IMPORTED_MODULE_5__["EnquiremodalPage"],
                cssClass: 'my-custom-class'
            });
            return yield modal.present();
        });
    }
};
CoursesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
CoursesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-courses',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./courses.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/courses/courses.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./courses.page.scss */ "./src/app/pages/courses/courses.page.scss")).default]
    })
], CoursesPage);



/***/ })

}]);
//# sourceMappingURL=pages-courses-courses-module-es2015.js.map