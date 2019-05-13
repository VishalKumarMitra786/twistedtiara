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

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\"\r\n     [class.example-is-mobile]=\"mobileQuery.matches\">\r\n  <mat-toolbar color=\"primary\" class=\"example-toolbar\">\r\n    <button mat-icon-button (click)=\"snav.toggle()\"><mat-icon>menu</mat-icon></button>\r\n    <h1 class=\"example-app-name\">{{user.email}}</h1>\r\n  </mat-toolbar>\r\n\r\n  <mat-sidenav-container class=\"example-sidenav-container\"\r\n                         [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\">\r\n    <mat-sidenav #snav [mode]=\"mobileQuery.matches ? 'over' : 'side'\"\r\n                 [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\">\r\n      <mat-nav-list>\r\n        <a mat-list-item [routerLink]=\"nav.value\" *ngFor=\"let nav of navs\">{{nav.key}}</a>\r\n      </mat-nav-list>\r\n    </mat-sidenav>\r\n\r\n    <mat-sidenav-content>\r\n      <!--<h1>Welcome, to Twisted Tiara Dashboard </h1>-->\r\n      <!--<p *ngFor=\"let content of fillerContent\">{{content}}</p>-->\r\n      <!--<mat-list role=\"list\">\r\n        <h1>Welcome, to Twisted Tiara Dashboard </h1>-->\r\n        <!--<mat-list-item role=\"listitem\">\r\n      <mat-icon mat-list-icon>account_circle</mat-icon>\r\n    </mat-list-item>-->\r\n      <!--</mat-list>-->\r\n    </mat-sidenav-content>\r\n  </mat-sidenav-container>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/admin.component.scss":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0; }\n\n.example-is-mobile .example-toolbar {\n  position: fixed;\n  /* Make sure the toolbar will stay on top of the content as it scrolls past. */\n  z-index: 2; }\n\nh1.example-app-name {\n  color: #ffffff;\n  margin-left: 8px; }\n\n.example-sidenav-container {\n  /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n     causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\n  flex: 1; }\n\n.example-is-mobile .example-sidenav-container {\n  /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n     `<body>` to be our scrolling element for mobile layouts. */\n  flex: 1 0 auto; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vRTpcXHR3aXN0ZWR0aWFyYVxcc291cmNlXFx0d2lzdGVkdGlhcmFcXFR3aXN0ZWRUaWFyYS5XZWJcXEFuZ3VsYXJBcHAvc3JjXFxhcHBcXGFkbWluXFxhZG1pbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRLEVBQUE7O0FBR1Y7RUFDRSxlQUFlO0VBQ2YsOEVBQUE7RUFDQSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0U7MEZDRndGO0VESXhGLE9BQU8sRUFBQTs7QUFHVDtFQUNFOytEQ0g2RDtFREs3RCxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5leGFtcGxlLWlzLW1vYmlsZSAuZXhhbXBsZS10b29sYmFyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgLyogTWFrZSBzdXJlIHRoZSB0b29sYmFyIHdpbGwgc3RheSBvbiB0b3Agb2YgdGhlIGNvbnRlbnQgYXMgaXQgc2Nyb2xscyBwYXN0LiAqL1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbmgxLmV4YW1wbGUtYXBwLW5hbWUge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLXNpZGVuYXYtY29udGFpbmVyIHtcclxuICAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIG5vdCBmaXhlZCwgc3RyZXRjaCB0aGUgc2lkZW5hdiBjb250YWluZXIgdG8gZmlsbCB0aGUgYXZhaWxhYmxlIHNwYWNlLiBUaGlzXHJcbiAgICAgY2F1c2VzIGA8bWF0LXNpZGVuYXYtY29udGVudD5gIHRvIGFjdCBhcyBvdXIgc2Nyb2xsaW5nIGVsZW1lbnQgZm9yIGRlc2t0b3AgbGF5b3V0cy4gKi9cclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4uZXhhbXBsZS1pcy1tb2JpbGUgLmV4YW1wbGUtc2lkZW5hdi1jb250YWluZXIge1xyXG4gIC8qIFdoZW4gdGhlIHNpZGVuYXYgaXMgZml4ZWQsIGRvbid0IGNvbnN0cmFpbiB0aGUgaGVpZ2h0IG9mIHRoZSBzaWRlbmF2IGNvbnRhaW5lci4gVGhpcyBhbGxvd3MgdGhlXHJcbiAgICAgYDxib2R5PmAgdG8gYmUgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBtb2JpbGUgbGF5b3V0cy4gKi9cclxuICBmbGV4OiAxIDAgYXV0bztcclxufVxyXG4iLCIuZXhhbXBsZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDsgfVxuXG4uZXhhbXBsZS1pcy1tb2JpbGUgLmV4YW1wbGUtdG9vbGJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgLyogTWFrZSBzdXJlIHRoZSB0b29sYmFyIHdpbGwgc3RheSBvbiB0b3Agb2YgdGhlIGNvbnRlbnQgYXMgaXQgc2Nyb2xscyBwYXN0LiAqL1xuICB6LWluZGV4OiAyOyB9XG5cbmgxLmV4YW1wbGUtYXBwLW5hbWUge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luLWxlZnQ6IDhweDsgfVxuXG4uZXhhbXBsZS1zaWRlbmF2LWNvbnRhaW5lciB7XG4gIC8qIFdoZW4gdGhlIHNpZGVuYXYgaXMgbm90IGZpeGVkLCBzdHJldGNoIHRoZSBzaWRlbmF2IGNvbnRhaW5lciB0byBmaWxsIHRoZSBhdmFpbGFibGUgc3BhY2UuIFRoaXNcclxuICAgICBjYXVzZXMgYDxtYXQtc2lkZW5hdi1jb250ZW50PmAgdG8gYWN0IGFzIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgZGVza3RvcCBsYXlvdXRzLiAqL1xuICBmbGV4OiAxOyB9XG5cbi5leGFtcGxlLWlzLW1vYmlsZSAuZXhhbXBsZS1zaWRlbmF2LWNvbnRhaW5lciB7XG4gIC8qIFdoZW4gdGhlIHNpZGVuYXYgaXMgZml4ZWQsIGRvbid0IGNvbnN0cmFpbiB0aGUgaGVpZ2h0IG9mIHRoZSBzaWRlbmF2IGNvbnRhaW5lci4gVGhpcyBhbGxvd3MgdGhlXHJcbiAgICAgYDxib2R5PmAgdG8gYmUgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBtb2JpbGUgbGF5b3V0cy4gKi9cbiAgZmxleDogMSAwIGF1dG87IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");



var AdminComponent = /** @class */ (function () {
    function AdminComponent(changeDetectorRef, media) {
        this.fillerNav = Array.from({ length: 50 }, function (_, i) { return "Nav Item " + (i + 1); });
        this.navs = [{ key: 'Website', value: '/home' }];
        this.fillerContent = Array.from({ length: 50 }, function () {
            return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\n       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        });
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.user = currentUser;
    };
    AdminComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tt-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/admin/admin.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["MediaMatcher"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin.routing.module */ "./src/app/admin/admin.routing.module.ts");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");













var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _admin_routing_module__WEBPACK_IMPORTED_MODULE_4__["AdminRoutingModule"],
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["A11yModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_9__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_10__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_11__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTreeModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__["PortalModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["ScrollingModule"],
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/admin.routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/admin.routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");




var routes = [{
        path: '',
        component: _admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
        children: [],
    }];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



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
/* harmony import */ var src_app_sections_sections_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sections/sections.component */ "./src/app/sections/sections.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");





var routes = [
    {
        path: 'home',
        component: src_app_sections_sections_component__WEBPACK_IMPORTED_MODULE_3__["SectionsComponent"]
    },
    {
        path: 'admin',
        component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"]
    },
    {
        path: '',
        redirectTo: '/admin',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/admin',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
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

module.exports = "<div id=\"page-wrapper\">\r\n  <!-- Main -->\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _sections_sections_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sections/sections.component */ "./src/app/sections/sections.component.ts");
/* harmony import */ var _sections_banner_banner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sections/banner/banner.component */ "./src/app/sections/banner/banner.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-simple-slideshow */ "./node_modules/ng-simple-slideshow/ng-simple-slideshow.es5.js");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _auth_auth_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth/auth-config */ "./src/app/auth/auth-config.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin/admin.module */ "./src/app/admin/admin.module.ts");

















// Configs 
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _sections_sections_component__WEBPACK_IMPORTED_MODULE_8__["SectionsComponent"],
                _sections_banner_banner_component__WEBPACK_IMPORTED_MODULE_9__["BannerComponent"],
                _auth_auth_component__WEBPACK_IMPORTED_MODULE_12__["AuthComponent"]
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_11__["SlideshowModule"],
                angular_6_social_login__WEBPACK_IMPORTED_MODULE_13__["SocialLoginModule"],
                _admin_admin_module__WEBPACK_IMPORTED_MODULE_16__["AdminModule"]
            ],
            providers: [
                {
                    provide: angular_6_social_login__WEBPACK_IMPORTED_MODULE_13__["AuthServiceConfig"],
                    useFactory: _auth_auth_config__WEBPACK_IMPORTED_MODULE_14__["getAuthServiceConfigs"]
                },
                _services_app_service__WEBPACK_IMPORTED_MODULE_15__["AppService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
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

module.exports = "<!--<div class=\"g-signin2\" data-onsuccess=\"onSignIn\"></div>-->\r\n<!--<button (click)=\"socialSignIn('google')\">Sign in with Google</button>\r\n<button (click)=\"display()\">display</button>\r\n<div>\r\n  Username/Passwort zum Testen: max/geheim\r\n</div>-->\r\n\r\n\r\n<div>\r\n  <button type=\"button\" class=\"google-button\" (click)=\"socialSignIn('google')\">\r\n    <span class=\"google-button__icon\">\r\n      <svg viewBox=\"0 0 366 372\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M125.9 10.2c40.2-13.9 85.3-13.6 125.3 1.1 22.2 8.2 42.5 21 59.9 37.1-5.8 6.3-12.1 12.2-18.1 18.3l-34.2 34.2c-11.3-10.8-25.1-19-40.1-23.6-17.6-5.3-36.6-6.1-54.6-2.2-21 4.5-40.5 15.5-55.6 30.9-12.2 12.3-21.4 27.5-27 43.9-20.3-15.8-40.6-31.5-61-47.3 21.5-43 60.1-76.9 105.4-92.4z\" id=\"Shape\" fill=\"#EA4335\" /><path d=\"M20.6 102.4c20.3 15.8 40.6 31.5 61 47.3-8 23.3-8 49.2 0 72.4-20.3 15.8-40.6 31.6-60.9 47.3C1.9 232.7-3.8 189.6 4.4 149.2c3.3-16.2 8.7-32 16.2-46.8z\" id=\"Shape\" fill=\"#FBBC05\" /><path d=\"M361.7 151.1c5.8 32.7 4.5 66.8-4.7 98.8-8.5 29.3-24.6 56.5-47.1 77.2l-59.1-45.9c19.5-13.1 33.3-34.3 37.2-57.5H186.6c.1-24.2.1-48.4.1-72.6h175z\" id=\"Shape\" fill=\"#4285F4\" /><path d=\"M81.4 222.2c7.8 22.9 22.8 43.2 42.6 57.1 12.4 8.7 26.6 14.9 41.4 17.9 14.6 3 29.7 2.6 44.4.1 14.6-2.6 28.7-7.9 41-16.2l59.1 45.9c-21.3 19.7-48 33.1-76.2 39.6-31.2 7.1-64.2 7.3-95.2-1-24.6-6.5-47.7-18.2-67.6-34.1-20.9-16.6-38.3-38-50.4-62 20.3-15.7 40.6-31.5 60.9-47.3z\" fill=\"#34A853\" /></svg>\r\n    </span>\r\n    <span class=\"google-button__text\">Sign in with Google</span>\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/auth/auth.component.scss":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".google-button {\n  height: 40px;\n  border-width: 0;\n  background: white;\n  color: #737373;\n  border-radius: 5px;\n  white-space: nowrap;\n  box-shadow: 1px 1px 0px 1px rgba(0, 0, 0, 0.05);\n  transition-property: background-color, box-shadow;\n  transition-duration: 150ms;\n  transition-timing-function: ease-in-out;\n  padding: 0; }\n  .google-button:focus, .google-button:hover {\n    box-shadow: 1px 4px 5px 1px rgba(0, 0, 0, 0.1); }\n  .google-button:active {\n    background-color: #e5e5e5;\n    box-shadow: none;\n    transition-duration: 10ms; }\n  .google-button__icon {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 8px 0 8px 8px;\n  width: 18px;\n  height: 18px;\n  box-sizing: border-box; }\n  .google-button__icon--plus {\n  width: 27px; }\n  .google-button__text {\n  display: inline-block;\n  vertical-align: middle;\n  padding: 0 24px;\n  font-size: 14px;\n  font-weight: bold;\n  color: black;\n  font-family: 'Roboto',arial,sans-serif; }\n  html, body {\n  height: 100%; }\n  body {\n  background-color: #f0f0f0;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  button ~ button {\n  margin-left: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9FOlxcdHdpc3RlZHRpYXJhXFxzb3VyY2VcXHR3aXN0ZWR0aWFyYVxcVHdpc3RlZFRpYXJhLldlYlxcQW5ndWxhckFwcC9zcmNcXGFwcFxcYXV0aFxcYXV0aC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLCtDQUE0QztFQUM1QyxpREFBaUQ7RUFDakQsMEJBQTBCO0VBQzFCLHVDQUF1QztFQUN2QyxVQUFVLEVBQUE7RUFYWjtJQWVJLDhDQUEyQyxFQUFBO0VBZi9DO0lBbUJJLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIseUJBQXlCLEVBQUE7RUFJN0I7RUFDRSxxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQixFQUFBO0VBR3hCO0VBQ0UsV0FBVyxFQUFBO0VBR2I7RUFDRSxxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixzQ0FBc0MsRUFBQTtFQUt4QztFQUNFLFlBQVksRUFBQTtFQUdkO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCLEVBQUE7RUFHekI7RUFDRSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEdvb2dsZSBJZGVudGl0eSBhbmQgR29vZ2xlKyBTaWduIGluIGJ1dHRvbnNcclxuLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vKy9icmFuZGluZy1ndWlkZWxpbmVzXHJcblxyXG4uZ29vZ2xlLWJ1dHRvbiB7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlci13aWR0aDogMDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBjb2xvcjogIzczNzM3MztcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDBweCAxcHggcmdiYSgwLDAsMCwwLjA1KTtcclxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCBib3gtc2hhZG93O1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDE1MG1zO1xyXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcclxuICBwYWRkaW5nOiAwO1xyXG5cclxuICAmOmZvY3VzLFxyXG4gICY6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDRweCA1cHggMXB4IHJnYmEoMCwwLDAsMC4xKTtcclxuICB9XHJcblxyXG4gICY6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTBtcztcclxuICB9XHJcbn1cclxuXHJcbi5nb29nbGUtYnV0dG9uX19pY29uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBtYXJnaW46IDhweCAwIDhweCA4cHg7XHJcbiAgd2lkdGg6IDE4cHg7XHJcbiAgaGVpZ2h0OiAxOHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5nb29nbGUtYnV0dG9uX19pY29uLS1wbHVzIHtcclxuICB3aWR0aDogMjdweDtcclxufVxyXG5cclxuLmdvb2dsZS1idXR0b25fX3RleHQge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIHBhZGRpbmc6IDAgMjRweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJyxhcmlhbCxzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4vLyBCb2lsZXJwbGF0ZSBzdHVmZlxyXG5cclxuaHRtbCwgYm9keSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuYnV0dG9uIH4gYnV0dG9uIHtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG4iXX0= */"

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

module.exports = ".tt-logo {\n  height: 100px;\n  width: 200px; }\n\n@media only screen and (max-width: 430px) {\n  .tt-logo-container {\n    display: flex;\n    justify-content: center; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0U6XFx0d2lzdGVkdGlhcmFcXHNvdXJjZVxcdHdpc3RlZHRpYXJhXFxUd2lzdGVkVGlhcmEuV2ViXFxBbmd1bGFyQXBwL3NyY1xcYXBwXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixZQUFZLEVBQUE7O0FBR2Q7RUFDRTtJQUNFLGFBQWE7SUFDYix1QkFBdUIsRUFBQSxFQUN4QiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHQtbG9nbyB7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICB3aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDMwcHgpIHtcclxuICAudHQtbG9nby1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxufVxyXG4iXX0= */"

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

module.exports = ".tt-logo {\n  height: 50px !important;\n  width: 100px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdGlvbnMvYmFubmVyL0U6XFx0d2lzdGVkdGlhcmFcXHNvdXJjZVxcdHdpc3RlZHRpYXJhXFxUd2lzdGVkVGlhcmEuV2ViXFxBbmd1bGFyQXBwL3NyY1xcYXBwXFxzZWN0aW9uc1xcYmFubmVyXFxiYW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zZWN0aW9ucy9iYW5uZXIvYmFubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnR0LWxvZ28ge1xyXG4gIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"

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

module.exports = "<!-- Header -->\r\n<tt-header></tt-header>\r\n<section id=\"main\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n\r\n        <!-- Portfolio -->\r\n        <section>\r\n          <header class=\"major\">\r\n            <h2>My Portfolio</h2>\r\n          </header>\r\n          <div class=\"row\">\r\n            <div class=\"col-4 col-6-medium col-12-small\">\r\n              <section class=\"box\">\r\n                <a href=\"#\" class=\"image featured\"><img src=\"images/pic02.jpg\" alt=\"\" /></a>\r\n                <header>\r\n                  <h3>Ipsum feugiat et dolor</h3>\r\n                </header>\r\n                <p>Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit  adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.</p>\r\n                <footer>\r\n                  <ul class=\"actions\">\r\n                    <li><a href=\"#\" class=\"button alt\">Find out more</a></li>\r\n                  </ul>\r\n                </footer>\r\n              </section>\r\n            </div>\r\n            <div class=\"col-4 col-6-medium col-12-small\">\r\n              <section class=\"box\">\r\n                <a href=\"#\" class=\"image featured\"><img src=\"images/pic03.jpg\" alt=\"\" /></a>\r\n                <header>\r\n                  <h3>Sed etiam lorem nulla</h3>\r\n                </header>\r\n                <p>Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit  adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.</p>\r\n                <footer>\r\n                  <ul class=\"actions\">\r\n                    <li><a href=\"#\" class=\"button alt\">Find out more</a></li>\r\n                  </ul>\r\n                </footer>\r\n              </section>\r\n            </div>\r\n            <div class=\"col-4 col-6-medium col-12-small\">\r\n              <section class=\"box\">\r\n                <a href=\"#\" class=\"image featured\"><img src=\"images/pic04.jpg\" alt=\"\" /></a>\r\n                <header>\r\n                  <h3>Consequat et tempus</h3>\r\n                </header>\r\n                <p>Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit  adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.</p>\r\n                <footer>\r\n                  <ul class=\"actions\">\r\n                    <li><a href=\"#\" class=\"button alt\">Find out more</a></li>\r\n                  </ul>\r\n                </footer>\r\n              </section>\r\n            </div>\r\n            <div class=\"col-4 col-6-medium col-12-small\">\r\n              <section class=\"box\">\r\n                <a href=\"#\" class=\"image featured\"><img src=\"images/pic05.jpg\" alt=\"\" /></a>\r\n                <header>\r\n                  <h3>Blandit sed adipiscing</h3>\r\n                </header>\r\n                <p>Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit  adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.</p>\r\n                <footer>\r\n                  <ul class=\"actions\">\r\n                    <li><a href=\"#\" class=\"button alt\">Find out more</a></li>\r\n                  </ul>\r\n                </footer>\r\n              </section>\r\n            </div>\r\n            <div class=\"col-4 col-6-medium col-12-small\">\r\n              <section class=\"box\">\r\n                <a href=\"#\" class=\"image featured\"><img src=\"images/pic06.jpg\" alt=\"\" /></a>\r\n                <header>\r\n                  <h3>Etiam nisl consequat</h3>\r\n                </header>\r\n                <p>Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit  adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.</p>\r\n                <footer>\r\n                  <ul class=\"actions\">\r\n                    <li><a href=\"#\" class=\"button alt\">Find out more</a></li>\r\n                  </ul>\r\n                </footer>\r\n              </section>\r\n            </div>\r\n            <div class=\"col-4 col-6-medium col-12-small\">\r\n              <section class=\"box\">\r\n                <a href=\"#\" class=\"image featured\"><img src=\"images/pic07.jpg\" alt=\"\" /></a>\r\n                <header>\r\n                  <h3>Dolore nisl feugiat</h3>\r\n                </header>\r\n                <p>Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit  adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.</p>\r\n                <footer>\r\n                  <ul class=\"actions\">\r\n                    <li><a href=\"#\" class=\"button alt\">Find out more</a></li>\r\n                  </ul>\r\n                </footer>\r\n              </section>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n      </div>\r\n      <div class=\"col-12\">\r\n\r\n        <!-- Blog -->\r\n        <section>\r\n          <header class=\"major\">\r\n            <h2>The Blog</h2>\r\n          </header>\r\n          <div class=\"row\">\r\n            <div class=\"col-6 col-12-small\">\r\n              <section class=\"box\">\r\n                <a href=\"#\" class=\"image featured\"><img src=\"images/pic08.jpg\" alt=\"\" /></a>\r\n                <header>\r\n                  <h3>Magna tempus consequat</h3>\r\n                  <p>Posted 45 minutes ago</p>\r\n                </header>\r\n                <p>Lorem ipsum dolor sit amet sit veroeros sed et blandit consequat sed veroeros lorem et blandit  adipiscing feugiat phasellus tempus hendrerit, tortor vitae mattis tempor, sapien sem feugiat sapien, id suscipit magna felis nec elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos lorem ipsum dolor sit amet.</p>\r\n                <footer>\r\n                  <ul class=\"actions\">\r\n                    <li><a href=\"#\" class=\"button icon fa-file-text\">Continue Reading</a></li>\r\n                    <li><a href=\"#\" class=\"button alt icon fa-comment\">33 comments</a></li>\r\n                  </ul>\r\n                </footer>\r\n              </section>\r\n            </div>\r\n            <div class=\"col-6 col-12-small\">\r\n              <section class=\"box\">\r\n                <a href=\"#\" class=\"image featured\"><img src=\"images/pic09.jpg\" alt=\"\" /></a>\r\n                <header>\r\n                  <h3>Aptent veroeros aliquam</h3>\r\n                  <p>Posted 45 minutes ago</p>\r\n                </header>\r\n                <p>Lorem ipsum dolor sit amet sit veroeros sed et blandit consequat sed veroeros lorem et blandit  adipiscing feugiat phasellus tempus hendrerit, tortor vitae mattis tempor, sapien sem feugiat sapien, id suscipit magna felis nec elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos lorem ipsum dolor sit amet.</p>\r\n                <footer>\r\n                  <ul class=\"actions\">\r\n                    <li><a href=\"#\" class=\"button icon fa-file-text\">Continue Reading</a></li>\r\n                    <li><a href=\"#\" class=\"button alt icon fa-comment\">33 comments</a></li>\r\n                  </ul>\r\n                </footer>\r\n              </section>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- Footer -->\r\n<tt-footer></tt-footer>\r\n"

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

module.exports = __webpack_require__(/*! E:\twistedtiara\source\twistedtiara\TwistedTiara.Web\AngularApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map