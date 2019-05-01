(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_auth_auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var src_app_sections_sections_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sections/sections.component */ "./src/app/sections/sections.component.ts");





var routes = [
    {
        path: 'home',
        component: src_app_sections_sections_component__WEBPACK_IMPORTED_MODULE_4__["SectionsComponent"]
    },
    {
        path: 'signin',
        component: src_app_auth_auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"]
    },
    {
        path: '',
        redirectTo: '/signin',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/signin',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"page-wrapper\">\r\n  <!-- Header -->\r\n  <tt-header></tt-header>\r\n  <!-- Main -->\r\n  <router-outlet></router-outlet>\r\n  <!-- Footer -->\r\n  <tt-footer></tt-footer>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tt-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _sections_sections_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sections/sections.component */ "./src/app/sections/sections.component.ts");
/* harmony import */ var _sections_banner_banner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sections/banner/banner.component */ "./src/app/sections/banner/banner.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-simple-slideshow */ "./node_modules/ng-simple-slideshow/ng-simple-slideshow.es5.js");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _auth_auth_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/auth-config */ "./src/app/auth/auth-config.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/app.service */ "./src/app/services/app.service.ts");















// Configs 
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _sections_sections_component__WEBPACK_IMPORTED_MODULE_7__["SectionsComponent"],
                _sections_banner_banner_component__WEBPACK_IMPORTED_MODULE_8__["BannerComponent"],
                _auth_auth_component__WEBPACK_IMPORTED_MODULE_11__["AuthComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_10__["SlideshowModule"],
                angular_6_social_login__WEBPACK_IMPORTED_MODULE_12__["SocialLoginModule"]
            ],
            providers: [
                {
                    provide: angular_6_social_login__WEBPACK_IMPORTED_MODULE_12__["AuthServiceConfig"],
                    useFactory: _auth_auth_config__WEBPACK_IMPORTED_MODULE_13__["getAuthServiceConfigs"]
                },
                _services_app_service__WEBPACK_IMPORTED_MODULE_14__["AppService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-config.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth-config.ts ***!
  \*************************************/
/*! exports provided: getAuthServiceConfigs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthServiceConfigs", function() { return getAuthServiceConfigs; });
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_0__);


function getAuthServiceConfigs() {
    var config = new angular_6_social_login__WEBPACK_IMPORTED_MODULE_0__["AuthServiceConfig"]([
        {
            id: angular_6_social_login__WEBPACK_IMPORTED_MODULE_0__["GoogleLoginProvider"].PROVIDER_ID,
            provider: new angular_6_social_login__WEBPACK_IMPORTED_MODULE_0__["GoogleLoginProvider"]('209215004498-2etv6gm9p0av98jtagdb1ujcsqjtmp9u.apps.googleusercontent.com')
        }
    ]);
    return config;
}


/***/ }),

/***/ "./src/app/auth/auth.component.html":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"g-signin2\" data-onsuccess=\"onSignIn\"></div>-->\r\n<button (click)=\"socialSignIn('google')\">Sign in with Google</button>\r\n<button (click)=\"display()\">display</button>\r\n<div>\r\n  Username/Passwort zum Testen: max/geheim\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/auth/auth.component.scss":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/app.service */ "./src/app/services/app.service.ts");




var AuthComponent = /** @class */ (function () {
    function AuthComponent(socialAuthService, appService) {
        this.socialAuthService = socialAuthService;
        this.appService = appService;
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent.prototype.socialSignIn = function (socialPlatform) {
        var _this = this;
        var socialPlatformProvider;
        if (socialPlatform == "google") {
            socialPlatformProvider = angular_6_social_login__WEBPACK_IMPORTED_MODULE_2__["GoogleLoginProvider"].PROVIDER_ID;
        }
        this.socialAuthService.signIn(socialPlatformProvider).then(function (userData) {
            console.log(socialPlatform + " sign in data : ", userData);
            _this.display('Bearer ' + userData.idToken);
            // Now sign-in with userData
            // ...
        });
    };
    AuthComponent.prototype.display = function (tokenId) {
        this.appService.display(tokenId);
    };
    AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tt-auth',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.scss */ "./src/app/auth/auth.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular_6_social_login__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<footer id=\"footer\">\r\n  <p class=\"copyright\">Created with ♥ by <a href=\"#\">TWISTED TIARA</a>&copy;.</p>\r\n</footer>-->\r\n\r\n<section id=\"footer\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-8 col-12-medium\">\r\n        <section>\r\n          <header>\r\n            <h2>Blandit nisl adipiscing</h2>\r\n          </header>\r\n          <ul class=\"dates\">\r\n            <li>\r\n              <span class=\"date\">Jan <strong>27</strong></span>\r\n              <h3><a href=\"#\">Lorem dolor sit amet veroeros</a></h3>\r\n              <p>Ipsum dolor sit amet veroeros consequat blandit ipsum phasellus lorem consequat etiam.</p>\r\n            </li>\r\n            <li>\r\n              <span class=\"date\">Jan <strong>23</strong></span>\r\n              <h3><a href=\"#\">Ipsum sed blandit nisl consequat</a></h3>\r\n              <p>Blandit phasellus lorem ipsum dolor tempor sapien tortor hendrerit adipiscing feugiat lorem.</p>\r\n            </li>\r\n            <li>\r\n              <span class=\"date\">Jan <strong>15</strong></span>\r\n              <h3><a href=\"#\">Magna tempus lorem feugiat</a></h3>\r\n              <p>Dolore consequat sed phasellus lorem sed etiam nullam dolor etiam sed amet sit consequat.</p>\r\n            </li>\r\n            <li>\r\n              <span class=\"date\">Jan <strong>12</strong></span>\r\n              <h3><a href=\"#\">Dolore tempus ipsum feugiat nulla</a></h3>\r\n              <p>Feugiat lorem dolor sed nullam tempus lorem ipsum dolor sit amet nullam consequat.</p>\r\n            </li>\r\n            <li>\r\n              <span class=\"date\">Jan <strong>10</strong></span>\r\n              <h3><a href=\"#\">Blandit tempus aliquam?</a></h3>\r\n              <p>Feugiat sed tempus blandit tempus adipiscing nisl lorem ipsum dolor sit amet dolore.</p>\r\n            </li>\r\n          </ul>\r\n        </section>\r\n      </div>\r\n      <div class=\"col-4 col-12-medium\">\r\n        <section>\r\n          <header>\r\n            <h2>What's this all about?</h2>\r\n          </header>\r\n          <a href=\"#\" class=\"image featured\"><img src=\"images/pic10.jpg\" alt=\"\" /></a>\r\n          <p>\r\n            This is <strong>Dopetrope</strong> a free, fully responsive HTML5 site template by\r\n            <a href=\"http://twitter.com/ajlkn\">AJ</a> for <a href=\"http://html5up.net/\">HTML5 UP</a> It's released for free under\r\n            the <a href=\"http://html5up.net/license/\">Creative Commons Attribution</a> license so feel free to use it for any personal or commercial project &ndash; just don't forget to credit us!\r\n          </p>\r\n          <footer>\r\n            <ul class=\"actions\">\r\n              <li><a href=\"#\" class=\"button\">Find out more</a></li>\r\n            </ul>\r\n          </footer>\r\n        </section>\r\n      </div>\r\n      <div class=\"col-4 col-6-medium col-12-small\">\r\n        <section>\r\n          <header>\r\n            <h2>Tempus consequat</h2>\r\n          </header>\r\n          <ul class=\"divided\">\r\n            <li><a href=\"#\">Lorem ipsum dolor sit amet sit veroeros</a></li>\r\n            <li><a href=\"#\">Sed et blandit consequat sed tlorem blandit</a></li>\r\n            <li><a href=\"#\">Adipiscing feugiat phasellus sed tempus</a></li>\r\n            <li><a href=\"#\">Hendrerit tortor vitae mattis tempor sapien</a></li>\r\n            <li><a href=\"#\">Sem feugiat sapien id suscipit magna felis nec</a></li>\r\n            <li><a href=\"#\">Elit class aptent taciti sociosqu ad litora</a></li>\r\n          </ul>\r\n        </section>\r\n      </div>\r\n      <div class=\"col-4 col-6-medium col-12-small\">\r\n        <section>\r\n          <header>\r\n            <h2>Ipsum et phasellus</h2>\r\n          </header>\r\n          <ul class=\"divided\">\r\n            <li><a href=\"#\">Lorem ipsum dolor sit amet sit veroeros</a></li>\r\n            <li><a href=\"#\">Sed et blandit consequat sed tlorem blandit</a></li>\r\n            <li><a href=\"#\">Adipiscing feugiat phasellus sed tempus</a></li>\r\n            <li><a href=\"#\">Hendrerit tortor vitae mattis tempor sapien</a></li>\r\n            <li><a href=\"#\">Sem feugiat sapien id suscipit magna felis nec</a></li>\r\n            <li><a href=\"#\">Elit class aptent taciti sociosqu ad litora</a></li>\r\n          </ul>\r\n        </section>\r\n      </div>\r\n      <div class=\"col-4 col-12-medium\">\r\n        <section>\r\n          <header>\r\n            <h2>Vitae tempor lorem</h2>\r\n          </header>\r\n          <ul class=\"social\">\r\n            <li><a class=\"icon fa-facebook\" href=\"#\"><span class=\"label\">Facebook</span></a></li>\r\n            <li><a class=\"icon fa-twitter\" href=\"#\"><span class=\"label\">Twitter</span></a></li>\r\n            <li><a class=\"icon fa-dribbble\" href=\"#\"><span class=\"label\">Dribbble</span></a></li>\r\n            <li><a class=\"icon fa-tumblr\" href=\"#\"><span class=\"label\">Tumblr</span></a></li>\r\n            <li><a class=\"icon fa-linkedin\" href=\"#\"><span class=\"label\">LinkedIn</span></a></li>\r\n          </ul>\r\n          <ul class=\"contact\">\r\n            <li>\r\n              <h3>Address</h3>\r\n              <p>\r\n                Untitled Incorporated<br />\r\n                1234 Somewhere Road Suite<br />\r\n                Nashville, TN 00000-0000\r\n              </p>\r\n            </li>\r\n            <li>\r\n              <h3>Mail</h3>\r\n              <p><a href=\"#\">someone@untitled.tld</a></p>\r\n            </li>\r\n            <li>\r\n              <h3>Phone</h3>\r\n              <p>(800) 000-0000</p>\r\n            </li>\r\n          </ul>\r\n        </section>\r\n      </div>\r\n      <div class=\"col-12\">\r\n\r\n        <!-- Copyright -->\r\n        <div id=\"copyright\">\r\n          <ul class=\"links\">\r\n            <li>&copy; Untitled. All rights reserved.</li>\r\n            <li>Design: <a href=\"http://html5up.net\">HTML5 UP</a></li>\r\n          </ul>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tt-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"header\">\r\n  <!-- Logo -->\r\n  <h1><a href=\"index.html\">Dopetrope</a></h1>\r\n\r\n  <!-- Nav -->\r\n  <nav id=\"nav\">\r\n    <ul>\r\n      <li class=\"current\"><a href=\"index.html\">Home</a></li>\r\n      <li>\r\n        <a href=\"#\">Dropdown</a>\r\n        <ul>\r\n          <li><a href=\"#\">Lorem ipsum dolor</a></li>\r\n          <li><a href=\"#\">Magna phasellus</a></li>\r\n          <li><a href=\"#\">Etiam dolore nisl</a></li>\r\n          <li>\r\n            <a href=\"#\">Phasellus consequat</a>\r\n            <ul>\r\n              <li><a href=\"#\">Magna phasellus</a></li>\r\n              <li><a href=\"#\">Etiam dolore nisl</a></li>\r\n              <li><a href=\"#\">Veroeros feugiat</a></li>\r\n              <li><a href=\"#\">Nisl sed aliquam</a></li>\r\n              <li><a href=\"#\">Dolore adipiscing</a></li>\r\n            </ul>\r\n          </li>\r\n          <li><a href=\"#\">Veroeros feugiat</a></li>\r\n        </ul>\r\n      </li>\r\n      <li><a href=\"left-sidebar.html\">Left Sidebar</a></li>\r\n      <li><a href=\"right-sidebar.html\">Right Sidebar</a></li>\r\n      <li><a href=\"no-sidebar.html\">No Sidebar</a></li>\r\n    </ul>\r\n  </nav>\r\n\r\n  <!-- Banner -->\r\n  <tt-banner></tt-banner>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tt-logo {\n  height: 100px;\n  width: 200px; }\n\n@media only screen and (max-width: 430px) {\n  .tt-logo-container {\n    display: flex;\n    justify-content: center; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0U6XFxQcm9qZWN0c1xcVHdpc3RlZFRpYXJhXFxTb3VyY2VcXFR3aXN0ZWRUaWFyYS1Eb3BldHJvcGVcXFR3aXN0ZWRUaWFyYVxcVHdpc3RlZFRpYXJhLldlYlxcQW5ndWxhckFwcC9zcmNcXGFwcFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsWUFBWSxFQUFBOztBQUdkO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCLEVBQUEsRUFDeEIiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnR0LWxvZ28ge1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQzMHB4KSB7XHJcbiAgLnR0LWxvZ28tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.ngAfterViewInit = function () {
        this.initialize();
    };
    HeaderComponent.prototype.initialize = function () {
        var $window = $(window);
        var $head = $('head');
        var $body = $('body');
        // Dropdowns.
        $('#nav > ul').dropotron({
            mode: 'fade',
            noOpenerFade: true,
            alignment: 'center'
        });
        // Nav.
        // Title Bar.
        $('<div id="titleBar">' +
            '<a href="#navPanel" class="toggle"></a>' +
            '</div>')
            .appendTo($body);
        // Panel.
        $('<div id="navPanel">' +
            '<nav>' +
            $('#nav').navList() +
            '</nav>' +
            '</div>')
            .appendTo($body)
            .panel({
            delay: 500,
            hideOnClick: true,
            hideOnSwipe: true,
            resetScroll: true,
            resetForms: true,
            side: 'left',
            target: $body,
            visibleClass: 'navPanel-visible'
        });
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tt-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/sections/banner/banner.component.html":
/*!*******************************************************!*\
  !*** ./src/app/sections/banner/banner.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"banner\">\r\n  <header>\r\n    <h2>Howdy. This is Dopetrope.</h2>\r\n    <p>A responsive template by HTML5 UP</p>\r\n  </header>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/sections/banner/banner.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/sections/banner/banner.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tt-logo {\n  height: 50px !important;\n  width: 100px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdGlvbnMvYmFubmVyL0U6XFxQcm9qZWN0c1xcVHdpc3RlZFRpYXJhXFxTb3VyY2VcXFR3aXN0ZWRUaWFyYS1Eb3BldHJvcGVcXFR3aXN0ZWRUaWFyYVxcVHdpc3RlZFRpYXJhLldlYlxcQW5ndWxhckFwcC9zcmNcXGFwcFxcc2VjdGlvbnNcXGJhbm5lclxcYmFubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHVCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2VjdGlvbnMvYmFubmVyL2Jhbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50dC1sb2dvIHtcclxuICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxuICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/sections/banner/banner.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/sections/banner/banner.component.ts ***!
  \*****************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BannerComponent = /** @class */ (function () {
    function BannerComponent() {
        this.images = new Array();
    }
    BannerComponent.prototype.ngOnInit = function () {
        var image1 = {
            url: './images/pic10.jpg',
            caption: 'Women Empowerment'
        };
        var image2 = {
            url: './images/pic03.jpg',
            caption: 'Super Girl'
        };
        var image3 = {
            url: './images/pic01.jpg',
            caption: 'Beauty & Elegance'
        };
        this.images.push(image1);
        this.images.push(image2);
        this.images.push(image3);
    };
    BannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tt-banner',
            template: __webpack_require__(/*! ./banner.component.html */ "./src/app/sections/banner/banner.component.html"),
            styles: [__webpack_require__(/*! ./banner.component.scss */ "./src/app/sections/banner/banner.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "./src/app/sections/sections.component.html":
/*!**************************************************!*\
  !*** ./src/app/sections/sections.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"main\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n\r\n        <!-- Portfolio -->\r\n        <section>\r\n          <header class=\"major\">\r\n            <h2>My Portfolio</h2>\r\n          </header>\r\n          <div class=\"row\">\r\n            <div class=\"col-4 col-6-medium col-12-small\">\r\n              <section class=\"box\">\r\n                <a href=\"#\" class=\"image featured\"><img src=\"images/pic02.jpg\" alt=\"\" /></a>\r\n                <header>\r\n                  <h3>Ipsum feugiat et dolor</h3>\r\n                </header>\r\n                <p>Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit  adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.</p>\r\n                <footer>\r\n                  <ul class=\"actions\">\r\n                    <li><a href=\"#\" class=\"button alt\">Find out more</a></li>\r\n                  </ul>\r\n                </footer>\r\n              </section>\r\n            </div>\r\n            <div class=\"col-4 col-6-medium col-12-small\">\r\n              <section class=\"box\">\r\n                <a href=\"#\" class=\"image featured\"><img src=\"images/pic03.jpg\" alt=\"\" /></a>\r\n                <header>\r\n                  <h3>Sed etiam lorem nulla</h3>\r\n                </header>\r\n                <p>Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit  adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.</p>\r\n                <footer>\r\n                  <ul class=\"actions\">\r\n                    <li><a href=\"#\" class=\"button alt\">Find out more</a></li>\r\n                  </ul>\r\n                </footer>\r\n              </section>\r\n            </div>\r\n            <div class=\"col-4 col-6-medium col-12-small\">\r\n              <section class=\"box\">\r\n                <a href=\"#\" class=\"image featured\"><img src=\"images/pic04.jpg\" alt=\"\" /></a>\r\n                <header>\r\n                  <h3>Consequat et tempus</h3>\r\n                </header>\r\n                <p>Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit  adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.</p>\r\n                <footer>\r\n                  <ul class=\"actions\">\r\n                    <li><a href=\"#\" class=\"button alt\">Find out more</a></li>\r\n                  </ul>\r\n                </footer>\r\n              </section>\r\n            </div>\r\n            <div class=\"col-4 col-6-medium col-12-small\">\r\n              <section class=\"box\">\r\n                <a href=\"#\" class=\"image featured\"><img src=\"images/pic05.jpg\" alt=\"\" /></a>\r\n                <header>\r\n                  <h3>Blandit sed adipiscing</h3>\r\n                </header>\r\n                <p>Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit  adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.</p>\r\n                <footer>\r\n                  <ul class=\"actions\">\r\n                    <li><a href=\"#\" class=\"button alt\">Find out more</a></li>\r\n                  </ul>\r\n                </footer>\r\n              </section>\r\n            </div>\r\n            <div class=\"col-4 col-6-medium col-12-small\">\r\n              <section class=\"box\">\r\n                <a href=\"#\" class=\"image featured\"><img src=\"images/pic06.jpg\" alt=\"\" /></a>\r\n                <header>\r\n                  <h3>Etiam nisl consequat</h3>\r\n                </header>\r\n                <p>Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit  adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.</p>\r\n                <footer>\r\n                  <ul class=\"actions\">\r\n                    <li><a href=\"#\" class=\"button alt\">Find out more</a></li>\r\n                  </ul>\r\n                </footer>\r\n              </section>\r\n            </div>\r\n            <div class=\"col-4 col-6-medium col-12-small\">\r\n              <section class=\"box\">\r\n                <a href=\"#\" class=\"image featured\"><img src=\"images/pic07.jpg\" alt=\"\" /></a>\r\n                <header>\r\n                  <h3>Dolore nisl feugiat</h3>\r\n                </header>\r\n                <p>Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit  adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.</p>\r\n                <footer>\r\n                  <ul class=\"actions\">\r\n                    <li><a href=\"#\" class=\"button alt\">Find out more</a></li>\r\n                  </ul>\r\n                </footer>\r\n              </section>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n      </div>\r\n      <div class=\"col-12\">\r\n\r\n        <!-- Blog -->\r\n        <section>\r\n          <header class=\"major\">\r\n            <h2>The Blog</h2>\r\n          </header>\r\n          <div class=\"row\">\r\n            <div class=\"col-6 col-12-small\">\r\n              <section class=\"box\">\r\n                <a href=\"#\" class=\"image featured\"><img src=\"images/pic08.jpg\" alt=\"\" /></a>\r\n                <header>\r\n                  <h3>Magna tempus consequat</h3>\r\n                  <p>Posted 45 minutes ago</p>\r\n                </header>\r\n                <p>Lorem ipsum dolor sit amet sit veroeros sed et blandit consequat sed veroeros lorem et blandit  adipiscing feugiat phasellus tempus hendrerit, tortor vitae mattis tempor, sapien sem feugiat sapien, id suscipit magna felis nec elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos lorem ipsum dolor sit amet.</p>\r\n                <footer>\r\n                  <ul class=\"actions\">\r\n                    <li><a href=\"#\" class=\"button icon fa-file-text\">Continue Reading</a></li>\r\n                    <li><a href=\"#\" class=\"button alt icon fa-comment\">33 comments</a></li>\r\n                  </ul>\r\n                </footer>\r\n              </section>\r\n            </div>\r\n            <div class=\"col-6 col-12-small\">\r\n              <section class=\"box\">\r\n                <a href=\"#\" class=\"image featured\"><img src=\"images/pic09.jpg\" alt=\"\" /></a>\r\n                <header>\r\n                  <h3>Aptent veroeros aliquam</h3>\r\n                  <p>Posted 45 minutes ago</p>\r\n                </header>\r\n                <p>Lorem ipsum dolor sit amet sit veroeros sed et blandit consequat sed veroeros lorem et blandit  adipiscing feugiat phasellus tempus hendrerit, tortor vitae mattis tempor, sapien sem feugiat sapien, id suscipit magna felis nec elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos lorem ipsum dolor sit amet.</p>\r\n                <footer>\r\n                  <ul class=\"actions\">\r\n                    <li><a href=\"#\" class=\"button icon fa-file-text\">Continue Reading</a></li>\r\n                    <li><a href=\"#\" class=\"button alt icon fa-comment\">33 comments</a></li>\r\n                  </ul>\r\n                </footer>\r\n              </section>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/sections/sections.component.scss":
/*!**************************************************!*\
  !*** ./src/app/sections/sections.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL3NlY3Rpb25zLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/sections/sections.component.ts":
/*!************************************************!*\
  !*** ./src/app/sections/sections.component.ts ***!
  \************************************************/
/*! exports provided: SectionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionsComponent", function() { return SectionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SectionsComponent = /** @class */ (function () {
    function SectionsComponent() {
    }
    SectionsComponent.prototype.ngOnInit = function () {
    };
    SectionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tt-sections',
            template: __webpack_require__(/*! ./sections.component.html */ "./src/app/sections/sections.component.html"),
            styles: [__webpack_require__(/*! ./sections.component.scss */ "./src/app/sections/sections.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SectionsComponent);
    return SectionsComponent;
}());



/***/ }),

/***/ "./src/app/services/app.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/app.service.ts ***!
  \*****************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
    }
    AppService.prototype.display = function (bearerToken) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Authorization', bearerToken);
        this.http.get('https://localhost:44385/account/display', { headers: headers }).toPromise().then(function (res) {
            console.log(res);
        }).catch(function (err) { return console.error(err); });
    };
    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Projects\TwistedTiara\Source\TwistedTiara-Dopetrope\TwistedTiara\TwistedTiara.Web\AngularApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map