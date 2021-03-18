(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <!--  <ion-button color=\"primary\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back\">\n                </ion-icon>\n              </ion-button>-->\n\n            <ion-title>Login</ion-title>\n        </ion-buttons>\n\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n      <div id=\"header\">\n        <img src=\"../../../assets/icon/sgnilogo.png\" />\n      </div>\n\n      <form [formGroup]=\"todo\" (ngSubmit)=\"logForm()\">\n        <ion-item>\n          <ion-label position=\"floating\">Phone Number *</ion-label>\n          <ion-input type=\"tel\" maxlength=\"10\" required  formControlName=\"phone\" ></ion-input>\n          <ion-icon name=\"call-outline\" slot=\"end\"></ion-icon>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\">Referal Code is Optional </ion-label>\n          <ion-input type=\"tel\" maxlength=\"5\"  formControlName=\"ref\"></ion-input>\n          <ion-icon name=\"link-outline\" slot=\"end\"></ion-icon>\n        </ion-item>\n        <ion-button class=\"main-button\" type=\"submit\" expand=\"block\" [disabled]=\"!todo.valid\">Login</ion-button>\n      </form>\n      <p>By Login you agree <br> to our terms & conditions.</p>\n\n\n<!--<ion-button (click)=\"presentHalfModal()\">button click</ion-button>-->\n\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/login/login-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #f5f5f3;\n}\nion-toolbar ion-button {\n  text-transform: initial;\n  font-size: 17px;\n}\nion-content {\n  --background: #f5f5f3;\n}\nion-content #header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nion-content #header img {\n  margin-top: 10px;\n  width: 50%;\n  /*      border-radius: 50%;\n        border: 8px solid #ffffff;*/\n}\nion-content #form {\n  margin-top: 10%;\n  padding-left: 30px;\n  padding-right: 30px;\n}\nion-content #form ion-button {\n  margin-top: 35px;\n  height: 48px;\n  font-size: 18px;\n  text-transform: initial;\n  border-radius: 50px;\n  box-shadow: 1px 8px 8pc 0px black;\n  --box-shadow: none;\n}\nion-content p {\n  text-align: center;\n  color: #b6b6b6;\n  margin-top: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUFDRjtBQUNFO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0FBQ0o7QUFHQTtFQUNFLHFCQUFBO0FBQUY7QUFFRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQUo7QUFFSTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUVBO21DQUFBO0FBQU47QUFLRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBSEo7QUFLSTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtBQUhOO0FBTUU7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUpKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZjVmNWYzO1xyXG5cclxuICBpb24tYnV0dG9ue1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgfVxyXG59XHJcblxyXG5pb24tY29udGVudHtcclxuICAtLWJhY2tncm91bmQ6ICNmNWY1ZjM7XHJcblxyXG4gICNoZWFkZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgaW1ne1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG5cclxuICAgICAgLyogICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogOHB4IHNvbGlkICNmZmZmZmY7Ki9cclxuICAgIH1cclxuICB9XHJcblxyXG4gICNmb3Jte1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuXHJcbiAgICBpb24tYnV0dG9ue1xyXG4gICAgICBtYXJnaW4tdG9wOiAzNXB4O1xyXG4gICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDFweCA4cHggOHBjIDBweCByZ2JhKDAsMCwwLjA1KTtcclxuICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICBwe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNiNmI2YjY7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIH1cclxuXHJcblxyXG5cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _otpmodal_otpmodal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../otpmodal/otpmodal.page */ "./src/app/otpmodal/otpmodal.page.ts");







let LoginPage = class LoginPage {
    constructor(formBuilder, register, http, modalController, loadingController, toastController, menu) {
        this.formBuilder = formBuilder;
        this.register = register;
        this.http = http;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.menu = menu;
        this.login = {};
        this.loginarray = [];
        this.todo = this.formBuilder.group({
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10)])],
            ref: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)])],
        });
        //this.register.get("sid");
    }
    ngOnInit() {
        this.menu.close();
    }
    logForm() {
        this.loading();
        //console.log("sqlitedatais",this.register.get("sqliteone"));
        console.log(this.todo.value);
        this.serverData = this.todo.value;
        console.log('phone no is', this.serverData.phone);
        this.register.register(this.serverData.phone, this.serverData.ref).subscribe(data => {
            console.log(data);
            this.loginarray = data;
            this.loginarray.data.forEach((item) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log('single-id', item.studentid);
                console.log('otp', item.otp);
                console.log('otp', item.phone);
                this.otp = item.otp;
                console.log('scode', item.scode);
                /*set the values to the variable of localstorage*/
                this.scode = item.scode;
                this.sid = item.studentid;
                this.phone = item.phone;
                this.presentHalfModal();
                this.loadingController.dismiss();
                const toast = yield this.toastController.create({
                    message: 'OTP has been sent',
                    position: 'middle',
                    duration: 3000,
                });
                toast.present();
            }));
        });
    }
    presentHalfModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('buttonclick');
            const modal = yield this.modalController.create({
                component: _otpmodal_otpmodal_page__WEBPACK_IMPORTED_MODULE_6__["OtpmodalPage"],
                cssClass: 'half-modal',
                componentProps: {
                    otp: this.otp,
                    sid: this.sid,
                    scode: this.scode,
                    phone: this.phone,
                    spid: this.spid
                }
            });
            return yield modal.present();
        });
    }
    loading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Sending OTP ..',
            });
            yield loading.present();
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")).default]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map