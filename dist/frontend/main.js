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
/* harmony import */ var _pages_users_users_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/users/users.component */ "./src/app/pages/users/users.component.ts");
/* harmony import */ var _pages_new_user_new_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/new-user/new-user.component */ "./src/app/pages/new-user/new-user.component.ts");
/* harmony import */ var _pages_update_user_update_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/update-user/update-user.component */ "./src/app/pages/update-user/update-user.component.ts");
/* harmony import */ var _pages_update_customer_update_customer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/update-customer/update-customer.component */ "./src/app/pages/update-customer/update-customer.component.ts");
/* harmony import */ var _pages_update_service_update_service_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/update-service/update-service.component */ "./src/app/pages/update-service/update-service.component.ts");
/* harmony import */ var _pages_update_booking_update_booking_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/update-booking/update-booking.component */ "./src/app/pages/update-booking/update-booking.component.ts");
/* harmony import */ var _pages_new_booking_new_booking_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/new-booking/new-booking.component */ "./src/app/pages/new-booking/new-booking.component.ts");
/* harmony import */ var _pages_new_customer_new_customer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/new-customer/new-customer.component */ "./src/app/pages/new-customer/new-customer.component.ts");
/* harmony import */ var _pages_new_service_new_service_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/new-service/new-service.component */ "./src/app/pages/new-service/new-service.component.ts");
/* harmony import */ var _pages_bookings_bookings_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/bookings/bookings.component */ "./src/app/pages/bookings/bookings.component.ts");
/* harmony import */ var _pages_customers_customers_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/customers/customers.component */ "./src/app/pages/customers/customers.component.ts");
/* harmony import */ var _pages_services_services_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/services/services.component */ "./src/app/pages/services/services.component.ts");
/* harmony import */ var _pages_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/edit-profile/edit-profile.component */ "./src/app/pages/edit-profile/edit-profile.component.ts");
/* harmony import */ var _pages_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/change-password/change-password.component */ "./src/app/pages/change-password/change-password.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _public_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./public.guard */ "./src/app/public.guard.ts");
/* harmony import */ var _layouts_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./layouts/dashboard/dashboard.component */ "./src/app/layouts/dashboard/dashboard.component.ts");
/* harmony import */ var _layouts_public_public_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./layouts/public/public.component */ "./src/app/layouts/public/public.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






















var publicRoutes = [
    { path: "", redirectTo: "login", pathMatch: "full" },
    { path: "login", component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"] },
];
var secureRoutes = [
    { path: "", component: _pages_users_users_component__WEBPACK_IMPORTED_MODULE_1__["UsersComponent"] },
    { path: "change-password", component: _pages_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_14__["ChangePasswordComponent"] },
    { path: "edit-profile", component: _pages_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_13__["EditProfileComponent"] },
    { path: "services", component: _pages_services_services_component__WEBPACK_IMPORTED_MODULE_12__["ServicesComponent"] },
    { path: "customers", component: _pages_customers_customers_component__WEBPACK_IMPORTED_MODULE_11__["CustomersComponent"] },
    { path: "bookings", component: _pages_bookings_bookings_component__WEBPACK_IMPORTED_MODULE_10__["BookingsComponent"] },
    { path: "new-user", component: _pages_new_user_new_user_component__WEBPACK_IMPORTED_MODULE_2__["NewUserComponent"] },
    { path: "new-customer", component: _pages_new_customer_new_customer_component__WEBPACK_IMPORTED_MODULE_8__["NewCustomerComponent"] },
    { path: "new-service", component: _pages_new_service_new_service_component__WEBPACK_IMPORTED_MODULE_9__["NewServiceComponent"] },
    { path: "new-booking", component: _pages_new_booking_new_booking_component__WEBPACK_IMPORTED_MODULE_7__["NewBookingComponent"] },
    { path: "update-user/:id", component: _pages_update_user_update_user_component__WEBPACK_IMPORTED_MODULE_3__["UpdateUserComponent"] },
    { path: "update-customer/:id", component: _pages_update_customer_update_customer_component__WEBPACK_IMPORTED_MODULE_4__["UpdateCustomerComponent"] },
    { path: "update-booking/:id", component: _pages_update_booking_update_booking_component__WEBPACK_IMPORTED_MODULE_6__["UpdateBookingComponent"] },
    { path: "update-service/:id", component: _pages_update_service_update_service_component__WEBPACK_IMPORTED_MODULE_5__["UpdateServiceComponent"] },
];
var routes = [
    {
        path: "",
        component: _layouts_public_public_component__WEBPACK_IMPORTED_MODULE_18__["PublicComponent"],
        canActivate: [_public_guard__WEBPACK_IMPORTED_MODULE_16__["PublicGuard"]],
        children: publicRoutes
    },
    {
        path: "dashboard",
        component: _layouts_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["DashboardComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]],
        children: secureRoutes
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_20__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_21__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_21__["RouterModule"]]
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

module.exports = "<router-outlet></router-outlet>\n"

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
        this.title = 'frontend';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
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
/* harmony import */ var _layouts_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/dashboard/dashboard.component */ "./src/app/layouts/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _layouts_public_public_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layouts/public/public.component */ "./src/app/layouts/public/public.component.ts");
/* harmony import */ var _pages_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/change-password/change-password.component */ "./src/app/pages/change-password/change-password.component.ts");
/* harmony import */ var _pages_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/edit-profile/edit-profile.component */ "./src/app/pages/edit-profile/edit-profile.component.ts");
/* harmony import */ var _pages_verify_verify_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/verify/verify.component */ "./src/app/pages/verify/verify.component.ts");
/* harmony import */ var _pages_users_users_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/users/users.component */ "./src/app/pages/users/users.component.ts");
/* harmony import */ var _pages_customers_customers_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/customers/customers.component */ "./src/app/pages/customers/customers.component.ts");
/* harmony import */ var _pages_bookings_bookings_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/bookings/bookings.component */ "./src/app/pages/bookings/bookings.component.ts");
/* harmony import */ var _pages_services_services_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/services/services.component */ "./src/app/pages/services/services.component.ts");
/* harmony import */ var _pages_new_user_new_user_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/new-user/new-user.component */ "./src/app/pages/new-user/new-user.component.ts");
/* harmony import */ var _pages_update_user_update_user_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/update-user/update-user.component */ "./src/app/pages/update-user/update-user.component.ts");
/* harmony import */ var _pages_update_customer_update_customer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/update-customer/update-customer.component */ "./src/app/pages/update-customer/update-customer.component.ts");
/* harmony import */ var _pages_update_service_update_service_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/update-service/update-service.component */ "./src/app/pages/update-service/update-service.component.ts");
/* harmony import */ var _pages_update_booking_update_booking_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/update-booking/update-booking.component */ "./src/app/pages/update-booking/update-booking.component.ts");
/* harmony import */ var _pages_new_booking_new_booking_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/new-booking/new-booking.component */ "./src/app/pages/new-booking/new-booking.component.ts");
/* harmony import */ var _pages_new_customer_new_customer_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/new-customer/new-customer.component */ "./src/app/pages/new-customer/new-customer.component.ts");
/* harmony import */ var _pages_new_service_new_service_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/new-service/new-service.component */ "./src/app/pages/new-service/new-service.component.ts");


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _layouts_public_public_component__WEBPACK_IMPORTED_MODULE_10__["PublicComponent"],
                _layouts_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"],
                _pages_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_11__["ChangePasswordComponent"],
                _pages_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_12__["EditProfileComponent"],
                _pages_verify_verify_component__WEBPACK_IMPORTED_MODULE_13__["VerifyComponent"],
                _pages_users_users_component__WEBPACK_IMPORTED_MODULE_14__["UsersComponent"],
                _pages_customers_customers_component__WEBPACK_IMPORTED_MODULE_15__["CustomersComponent"],
                _pages_bookings_bookings_component__WEBPACK_IMPORTED_MODULE_16__["BookingsComponent"],
                _pages_services_services_component__WEBPACK_IMPORTED_MODULE_17__["ServicesComponent"],
                _pages_new_user_new_user_component__WEBPACK_IMPORTED_MODULE_18__["NewUserComponent"],
                _pages_update_user_update_user_component__WEBPACK_IMPORTED_MODULE_19__["UpdateUserComponent"],
                _pages_update_customer_update_customer_component__WEBPACK_IMPORTED_MODULE_20__["UpdateCustomerComponent"],
                _pages_update_service_update_service_component__WEBPACK_IMPORTED_MODULE_21__["UpdateServiceComponent"],
                _pages_update_booking_update_booking_component__WEBPACK_IMPORTED_MODULE_22__["UpdateBookingComponent"],
                _pages_new_booking_new_booking_component__WEBPACK_IMPORTED_MODULE_23__["NewBookingComponent"],
                _pages_new_customer_new_customer_component__WEBPACK_IMPORTED_MODULE_24__["NewCustomerComponent"],
                _pages_new_service_new_service_component__WEBPACK_IMPORTED_MODULE_25__["NewServiceComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (!localStorage.getItem("_access_token")) {
            this.router.navigate(["login"]);
            return false;
        }
        return true;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/layouts/dashboard/dashboard.component.css":
/*!***********************************************************!*\
  !*** ./src/app/layouts/dashboard/dashboard.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-item a{\n    color:white;\n    text-decoration: none;\n}\n\nhr{\n   border-color: rgb(112, 93, 77);\n   height:5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0FBQ3pCOztBQUVBO0dBQ0csOEJBQThCO0dBQzlCLFVBQVU7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1pdGVtIGF7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5ocntcbiAgIGJvcmRlci1jb2xvcjogcmdiKDExMiwgOTMsIDc3KTtcbiAgIGhlaWdodDo1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/layouts/dashboard/dashboard.component.html":
/*!************************************************************!*\
  !*** ./src/app/layouts/dashboard/dashboard.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<!--Navbar-->\n<nav class=\"navbar navbar-light light-blue lighten-4\">\n\n  <!-- Navbar brand -->\n  <a class=\"navbar-brand\" href=\"#\" style=\"color:white\">{{loggedInUser?.name}}</a>\n\n  <a class=\"nav-link font-color-white d-none d-md-block d-lg-block d-xl-block navbar-brand\" href=\"#\" (click)=\"logout()\"\n    style=\"color:white\">Sign out</a>\n\n  <!-- Collapse button -->\n  <button class=\"d-md-none d-lg-none d-xl-none navbar-toggler\" type=\"button\" data-toggle=\"collapse\"\n    data-target=\"#navbarToggleExternalContent\" aria-controls=\"navbarToggleExternalContent\" aria-expanded=\"false\"\n    aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <!-- Collapsible content -->\n  <div class=\"collapse navbar-collapse\" id=\"navbarToggleExternalContent\">\n\n    <!-- Links -->\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/dashboard']\">Users</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/dashboard/customers']\">Customers</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/dashboard/services']\">Services</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/dashboard/bookings']\">Bookings</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" (click)=\"logout()\">Sign Out</a>\n      </li>\n    </ul>\n    <!-- Links -->\n\n  </div>\n  <!-- Collapsible content -->\n\n</nav>\n<!--/.Navbar-->\n\n<div class=\"container-fluid bg-gray padding-top-sm\">\n  <div class=\"row no-margin\">\n    <nav class=\"col-md-2 d-none d-md-block bg-gray sidebar\">\n      <div class=\"sidebar-sticky\">\n        <ul class=\"nav flex-column\">\n          <li class=\"nav-item\">\n            <a class=\"active\" href=\"#\" [routerLink]=\"['/dashboard']\">\n              Users\n            </a>\n            <hr>\n          </li>\n\n          <li class=\"nav-item\">\n            <a class=\"active\" href=\"#\" [routerLink]=\"['/dashboard/customers']\">\n              Customers\n            </a>\n            <hr>\n          </li>\n\n          <li class=\"nav-item\">\n            <a class=\"\" href=\"#\" [routerLink]=\"['/dashboard/services']\">\n              Services\n            </a>\n            <hr>\n          </li>\n\n          <li class=\"nav-item\">\n            <a class=\"\" href=\"#\" [routerLink]=\"['/dashboard/bookings']\">\n              Bookings\n            </a>\n            <hr>\n          </li>\n        </ul>\n      </div>\n    </nav>\n    <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 pt-3 px-4 bg-dark\">\n      <router-outlet></router-outlet>\n    </main>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layouts/dashboard/dashboard.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/layouts/dashboard/dashboard.component.ts ***!
  \**********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.loggedInUser = localStorage.getItem("_loggedInUser")
            ? JSON.parse(localStorage.getItem("_loggedInUser"))
            : {};
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        //check for current user
        this.auth.getAuthenticatedUser().subscribe(function (res) {
            console.log(res);
            if (res) {
                localStorage.setItem("_loggedInUser", JSON.stringify(res));
                _this.auth.setLoggedInUser(res);
            }
        }, function (res) {
            _this.logout();
            //if this get 401 error, user should be loggedout
        });
    };
    DashboardComponent.prototype.logout = function () {
        var _this = this;
        this.auth.logout().subscribe(function () {
            _this.router.navigate(["/"]);
        });
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-dashboard",
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/layouts/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/layouts/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/layouts/public/public.component.css":
/*!*****************************************************!*\
  !*** ./src/app/layouts/public/public.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvcHVibGljL3B1YmxpYy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/layouts/public/public.component.html":
/*!******************************************************!*\
  !*** ./src/app/layouts/public/public.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-gray\" style=\"padding-left:50px;\">\n  <nav class=\"navbar navbar-expand-lg navbar-light\">\n    <a class=\"navbar-brand\" href=\"https://www.mps-1950.org\" target=\"_blank\"> <img src=\"assets/images/logo.jpeg\"\n        style=\"width:56px;height:56px\" /></a>\n    <div class=\"font-color-white\">\n      Auto Verge Car Parking and Fleet Magament System\n    </div>\n  </nav>\n  <!-- <span class=\"font-color-white\"> Since 1950 </span> -->\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/layouts/public/public.component.ts":
/*!****************************************************!*\
  !*** ./src/app/layouts/public/public.component.ts ***!
  \****************************************************/
/*! exports provided: PublicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicComponent", function() { return PublicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PublicComponent = /** @class */ (function () {
    function PublicComponent() {
    }
    PublicComponent.prototype.ngOnInit = function () {
    };
    PublicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-public',
            template: __webpack_require__(/*! ./public.component.html */ "./src/app/layouts/public/public.component.html"),
            styles: [__webpack_require__(/*! ./public.component.css */ "./src/app/layouts/public/public.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PublicComponent);
    return PublicComponent;
}());



/***/ }),

/***/ "./src/app/pages/bookings/bookings.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/bookings/bookings.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mg-top-lg\">\n  <h1  class=\"h3 mb-3 font-weight-normal text-center font-color-white\">Booking List</h1>\n  <button class=\"font-color-white btn btn-sm btn-dark btn-inline border-color\" type=\"submit\" style=\"margin-bottom:10px;\">\n    <a routerLink=\"/dashboard/new-booking\">Add New</a>\n  </button>\n  <br/>\n  <table class=\"table table-dark\" style=\"padding:10px;\">\n    <thead>\n      <tr>\n        <th scope=\"col\">No</th>\n        <th scope=\"col\">Booking Date</th>\n        <th scope=\"col\">Customer</th>\n        <th scope=\"col\">Car No</th>\n        <th scope=\"col\">Additional Services</th>\n        <th scope=\"col\">Duration</th>\n        <th scope=\"col\">Action</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let booking of bookings; let i = index\">\n        <th scope=\"row\">{{ i+1 }}</th>\n        <td>{{ booking.booking_date }}</td>\n        <td>{{ booking.customer_name }}</td>\n        <td>{{ booking.car_no }}</td>\n        <td>{{ booking.additional_services }}</td>\n        <td>{{ booking.duration }} Days</td>\n        <td> \n          <button class=\"font-color-white btn btn-sm btn-dark btn-inline border-color float-left\" type=\"submit\" style=\"margin-bottom:10px; margin-right:10px\" *ngIf=\"!booking.payment_amount\">\n            <a routerLink=\"/dashboard/update-booking/{{booking.id}}\">Pick Up</a>\n          </button>\n          &nbsp;\n          <button (click)=\"openDialog('dialogDelete', booking.id)\" class=\"font-color-white btn btn-sm btn-dark btn-inline border-color float-left\" type=\"submit\" style=\"margin-bottom:10px;\">Delete</button>\n         </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n\n<!-- Delete modal -->\n<div class=\"modal bd-example-modal-sm\" tabindex=\"-1\" role=\"dialog\" id=\"dialogDelete\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Confirm</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"hideDialog()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>Are You Sure to delete?</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"deleteBooking()\">Delete</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Delete modal -->\n"

/***/ }),

/***/ "./src/app/pages/bookings/bookings.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/bookings/bookings.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Jvb2tpbmdzL2Jvb2tpbmdzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/bookings/bookings.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/bookings/bookings.component.ts ***!
  \******************************************************/
/*! exports provided: BookingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingsComponent", function() { return BookingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/common.service */ "./src/app/services/common.service.ts");



var BookingsComponent = /** @class */ (function () {
    function BookingsComponent(commonSvc) {
        this.commonSvc = commonSvc;
        this.bookings = [];
    }
    BookingsComponent.prototype.ngOnInit = function () {
        this.getBookings();
    };
    BookingsComponent.prototype.getBookings = function () {
        var that = this;
        this.commonSvc.getBookings().subscribe(function (res) {
            that.bookings = res.data;
        });
    };
    BookingsComponent.prototype.openDialog = function (dialogId, id) {
        this.id = id;
        $("#" + dialogId).show();
    };
    BookingsComponent.prototype.hideDialog = function (dialogId) {
        $("#" + dialogId).hide();
    };
    BookingsComponent.prototype.deleteBooking = function () {
        var _this = this;
        this.commonSvc.deleteBooking(this.id).subscribe(function (res) {
            _this.getBookings();
            _this.hideDialog('dialogDelete');
        }, function (error) {
            _this.hideDialog('dialogDelete');
        });
    };
    BookingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bookings',
            template: __webpack_require__(/*! ./bookings.component.html */ "./src/app/pages/bookings/bookings.component.html"),
            styles: [__webpack_require__(/*! ./bookings.component.scss */ "./src/app/pages/bookings/bookings.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]])
    ], BookingsComponent);
    return BookingsComponent;
}());



/***/ }),

/***/ "./src/app/pages/change-password/change-password.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/change-password/change-password.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n   <div class=\"alert alert-dismissible fade show\" role=\"alert\" *ngIf=\"showMessage\" [class.alert-danger]=\"!isSuccess\"\n     [class.alert-success]=\"isSuccess\">\n     {{message}}\n   </div>\n  <form class=\"form-signin\" action=\"#\" #changePasswordForm=\"ngForm\" (ngSubmit)=\"update(changePasswordForm)\" method=\"POST\">\n    <h1 class=\"h3 mb-3 font-weight-normal text-center font-color-white\">Change Password</h1>\n    <input type=\"password\" id=\"inputPassword\" class=\"form-control mg-end-sm bg-gray\" placeholder=\"Old Password\" required\n      name=\"old_password\" [(ngModel)]=\"user.old_password\">\n    <input type=\"password\" id=\"inputPassword\" class=\"form-control mg-end-sm bg-gray\" placeholder=\"New Password\" required\n      name=\"new_password\" [(ngModel)]=\"user.new_password\">\n    <input type=\"password\" id=\"inputPassword\" class=\"form-control mg-end-sm bg-gray\" placeholder=\"Confirm Password\" required\n      name=\"new_password_confirmation\" [(ngModel)]=\"user.new_password_confirmation\">\n    <!-- <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Update</button> -->\n      <button class=\"btn btn-lg btn-dark btn-block border-color mg-end-md\" type=\"submit\">Update</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/change-password/change-password.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/change-password/change-password.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  border: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95YWRhbmFyYXVuZy9Eb2N1bWVudHMvaGl2ZS10YWxlbnQtYXNzZXNzbWVudC1waHAtbGFyYXZlbDcvbXBzX2Zyb250ZW5kL3NyYy9hcHAvcGFnZXMvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlucHV0e1xuICAgIGJvcmRlcjogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/change-password/change-password.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/change-password/change-password.component.ts ***!
  \********************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(auth) {
        this.auth = auth;
        this.user = {};
        this.showMessage = false;
        this.isSuccess = false;
    }
    ChangePasswordComponent.prototype.ngOnInit = function () { };
    ChangePasswordComponent.prototype.update = function (form) {
        var _this = this;
        var that = this;
        if (form.valid) {
            console.log(form.value);
            this.auth.changePassword(form.value).subscribe(function (res) {
                _this.user = {};
                _this.message = "Change Password Successfully!";
                _this.showMessage = true;
                _this.isSuccess = true;
            }, function (error) {
                if (error.status == 422) {
                    console.log(error.error.errors);
                    if (error.error.errors.hasOwnProperty("old_password")) {
                        error.error.errors.old_password.forEach(function (obj) {
                            that.message = obj;
                        });
                    }
                    if (error.error.errors.hasOwnProperty("new_password")) {
                        error.error.errors.new_password.forEach(function (obj) {
                            that.message += obj;
                        });
                    }
                    _this.showMessage = true;
                    //this.message = "The old password does not match!";
                    _this.isSuccess = false;
                }
                else {
                    _this.message = "Change Password Fail!";
                    _this.showMessage = true;
                    _this.isSuccess = false;
                }
            });
        }
        else {
            this.message =
                "Please fill the old password, new password and confirm password!";
            this.showMessage = true;
            this.isSuccess = false;
        }
    };
    ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-change-password",
            template: __webpack_require__(/*! ./change-password.component.html */ "./src/app/pages/change-password/change-password.component.html"),
            styles: [__webpack_require__(/*! ./change-password.component.scss */ "./src/app/pages/change-password/change-password.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/pages/customers/customers.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/customers/customers.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mg-top-lg\">\n  <h1  class=\"h3 mb-3 font-weight-normal text-center font-color-white\">Customer List</h1>\n  <button class=\"font-color-white btn btn-sm btn-dark btn-inline border-color\" type=\"submit\" style=\"margin-bottom:10px;\">\n    <a routerLink=\"/dashboard/new-customer\">Add New</a>\n  </button>\n  <br/>\n  <table class=\"table table-dark\" style=\"padding:10px;\">\n    <thead>\n      <tr>\n        <th scope=\"col\">No</th>\n        <th scope=\"col\">Name</th>\n        <th scope=\"col\">Price</th>\n        <th scope=\"col\">Action</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let customer of customers; let i = index\">\n        <th scope=\"row\">{{ i+1 }}</th>\n        <td>{{ customer.name }}</td>\n        <td>{{ customer.phone_no }}</td>\n        <td> \n          <button class=\"font-color-white btn btn-sm btn-dark btn-inline border-color float-left\" type=\"submit\" style=\"margin-bottom:10px; margin-right:10px\">\n            <a routerLink=\"/dashboard/update-customer/{{customer.id}}\">Edit</a>\n          </button>\n          &nbsp;\n          <button (click)=\"openDialog('dialogDelete', customer.id)\" class=\"font-color-white btn btn-sm btn-dark btn-inline border-color float-left\" type=\"submit\" style=\"margin-bottom:10px;\">Delete</button>\n         </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<!-- Delete modal -->\n<div class=\"modal bd-example-modal-sm\" tabindex=\"-1\" role=\"dialog\" id=\"dialogDelete\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Confirm</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"hideDialog()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>Are You Sure to delete?</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"deleteCustomer()\">Delete</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Delete modal -->\n"

/***/ }),

/***/ "./src/app/pages/customers/customers.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/customers/customers.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1c3RvbWVycy9jdXN0b21lcnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/customers/customers.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/customers/customers.component.ts ***!
  \********************************************************/
/*! exports provided: CustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersComponent", function() { return CustomersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/common.service */ "./src/app/services/common.service.ts");



var CustomersComponent = /** @class */ (function () {
    function CustomersComponent(commonSvc) {
        this.commonSvc = commonSvc;
        this.customers = [];
    }
    CustomersComponent.prototype.ngOnInit = function () {
        this.getCustomers();
    };
    CustomersComponent.prototype.getCustomers = function () {
        var that = this;
        this.commonSvc.getCustomers().subscribe(function (res) {
            that.customers = res;
            // that.competitors = competitorList.filter(function(obj) {
            //   if(obj.contest_name)
            //     return obj;
            // });
        });
    };
    CustomersComponent.prototype.openDialog = function (dialogId, id) {
        this.id = id;
        $("#" + dialogId).show();
    };
    CustomersComponent.prototype.hideDialog = function (dialogId) {
        $("#" + dialogId).hide();
    };
    CustomersComponent.prototype.deleteCustomer = function () {
        var _this = this;
        this.commonSvc.deleteCustomer(this.id).subscribe(function (res) {
            _this.getCustomers();
            _this.hideDialog('dialogDelete');
        }, function (error) {
            _this.hideDialog('dialogDelete');
        });
    };
    CustomersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customers',
            template: __webpack_require__(/*! ./customers.component.html */ "./src/app/pages/customers/customers.component.html"),
            styles: [__webpack_require__(/*! ./customers.component.scss */ "./src/app/pages/customers/customers.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]])
    ], CustomersComponent);
    return CustomersComponent;
}());



/***/ }),

/***/ "./src/app/pages/edit-profile/edit-profile.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/edit-profile/edit-profile.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"padding-left:20px\">\n  <!-- <h1 class=\"h3 mb-3 font-weight-normal text-center font-color-white\">Profile</h1> -->\n\n\n  <!-- <div class=\"form-group row\">\n      <label class=\"col-xs-3 col-form-label mr-2 font-color-white\" style=\"width:150px;\">First Name</label>\n      <div class=\"col-xs-9\">\n        <label class=\"col-xs-3 col-form-label mr-2 font-color-white\"> : &nbsp; {{user.first_name}} </label>\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-xs-3 col-form-label mr-2 font-color-white\" style=\"width:150px;\">Last Name</label>\n      <div class=\"col-xs-9\">\n        <label class=\"col-xs-3 col-form-label mr-2 font-color-white\"> : &nbsp; {{user.last_name}} </label>\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-xs-3 col-form-label mr-2 font-color-white\" style=\"width:150px;\">Full Name</label>\n      <div class=\"col-xs-9\">\n        <label class=\"col-xs-3 col-form-label mr-2 font-color-white\"> : &nbsp; {{user.full_name}} </label>\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-xs-3 col-form-label mr-2 font-color-white\" style=\"width:150px;\">Country</label>\n      <div class=\"col-xs-9\">\n        <label class=\"col-xs-3 col-form-label mr-2 font-color-white\"> : &nbsp; {{user.country_name}} </label>\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-xs-3 col-form-label mr-2 font-color-white\" style=\"width:150px;\">Zip Code</label>\n      <div class=\"col-xs-9\">\n        <label class=\"col-xs-3 col-form-label mr-2 font-color-white\"> : &nbsp; {{user.zip_code}} </label>\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-xs-3 col-form-label mr-2 font-color-white\" style=\"width:150px;\">Email</label>\n      <div class=\"col-xs-9\">\n        <label class=\"col-xs-3 col-form-label mr-2 font-color-white\"> : &nbsp; {{user.email}} </label>\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-xs-3 col-form-label mr-2 font-color-white\" style=\"width:150px;\">Phone</label>\n      <div class=\"col-xs-9\">\n        <label class=\"col-xs-3 col-form-label mr-2 font-color-white\"> : &nbsp; {{user.phone}} </label>\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-xs-3 col-form-label mr-2 font-color-white\" style=\"width:150px;\">Address</label>\n      <div class=\"col-xs-9\">\n        <label class=\"col-xs-3 col-form-label mr-2 font-color-white\"> : &nbsp; {{user.address}} </label>\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-xs-5 col-form-label mr-2 font-color-white\" style=\"width:150px;\">NRC</label>\n      <div class=\"col-xs-7\">\n        <label class=\"col-form-label mr-2 font-color-white\"> : &nbsp; {{user.nrc}} </label>\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-xs-5 col-form-label mr-2 font-color-white\" style=\"width:150px;\">MPS Registration No</label>\n      <div class=\"col-xs-7\">\n        <label class=\"col-form-label mr-2 font-color-white\"> : &nbsp;\n          {{user.mps_register_no? user.mps_register_no: '-' }} </label>\n      </div>\n    </div> -->\n\n  <div>\n    <div class=\"alert alert-dismissible fade show\" role=\"alert\" *ngIf=\"showMessage\" [class.alert-danger]=\"!isSuccess\"\n      [class.alert-success]=\"isSuccess\">\n      {{message}}\n    </div>\n    <form class=\"form-signin\" action=\"#\" (ngSubmit)=\"update()\" method=\"POST\">\n      <h1 class=\"h3 mb-3 font-weight-normal text-center font-color-white\">Edit Profile</h1>\n\n      <label class=\"col-xs-3 col-form-label mr-2 font-color-white\" style=\"width:150px;\">First Name</label>\n      <input type=\"text\" class=\"form-control mg-end-sm bg-gray\" placeholder=\"First Name\" name=\"first_name\"\n        [(ngModel)]=\"user.first_name\"  [formControl]=\"userInfoFormValidation.controls['first_name']\">\n\n      <div class=\"error font-xs\" *ngIf=\"!userInfoFormValidation.controls['first_name'].valid &&\n        userInfoFormValidation.controls['first_name'].touched\"> First Name is required!\n      </div>\n\n      <label class=\"col-xs-3 col-form-label mr-2 font-color-white\" style=\"width:150px;\">Last Name</label>\n      <input type=\"text\" class=\"form-control mg-end-sm bg-gray\" placeholder=\"Last Name\" name=\"last_name\"\n        [(ngModel)]=\"user.last_name\"  [formControl]=\"userInfoFormValidation.controls['last_name']\">\n\n      <div class=\"error font-xs\" *ngIf=\"!userInfoFormValidation.controls['last_name'].valid &&\n        userInfoFormValidation.controls['last_name'].touched\"> Last Name is required!\n      </div>\n\n      <label class=\"col-xs-3 col-form-label mr-2 font-color-white\" style=\"width:150px;\">Full Name</label>\n      <input type=\"text\" class=\"form-control mg-end-sm bg-gray\" placeholder=\"Full Name\" name=\"full_name\"\n        [(ngModel)]=\"user.full_name\"  [formControl]=\"userInfoFormValidation.controls['full_name']\">\n\n      <div class=\"error font-xs\" *ngIf=\"!userInfoFormValidation.controls['full_name'].valid &&\n        userInfoFormValidation.controls['full_name'].touched\"> Full Name is required!\n      </div>\n\n      <label class=\"col-xs-3 col-form-label mr-2 font-color-white\" style=\"width:150px;\">Country</label>\n      <select class=\"form-control mg-end-sm form-dropdown bg-gray\" name=\"country_id\" [(ngModel)]=\"user.country_id\"\n        [formControl]=\"userInfoFormValidation.controls['country_id']\">\n        <option [value]=\"country.id\" *ngFor=\"let country of countries\">{{country.name}}</option>\n      </select>\n      <div class=\"error font-xs\" *ngIf=\"!userInfoFormValidation.controls['country_id'].valid &&\n        userInfoFormValidation.controls['country_id'].touched\"> Country is required!\n      </div>\n\n      <label class=\"col-xs-3 col-form-label mr-2 font-color-white\" style=\"width:150px;\">Zip Code</label>\n      <input type=\"text\" class=\"form-control mg-end-sm bg-gray\" placeholder=\"Zip Code\" name=\"zip_code\"\n        [(ngModel)]=\"user.zip_code\"  [formControl]=\"userInfoFormValidation.controls['zip_code']\">\n\n      <div class=\"error font-xs\" *ngIf=\"!userInfoFormValidation.controls['zip_code'].valid &&\n        userInfoFormValidation.controls['zip_code'].touched\"> Zip Code is required!\n      </div>\n\n      <label class=\"col-xs-3 col-form-label mr-2 font-color-white\" style=\"width:150px;\">Phone</label>\n      <input type=\"text\" class=\"form-control mg-end-sm bg-gray\" placeholder=\"Phone\" name=\"phone\"\n        [(ngModel)]=\"user.phone\"  [formControl]=\"userInfoFormValidation.controls['phone']\">\n\n      <div class=\"error font-xs\" *ngIf=\"!userInfoFormValidation.controls['phone'].valid &&\n        userInfoFormValidation.controls['phone'].touched\"> Phone is required!\n      </div>\n\n      <label class=\"col-xs-3 col-form-label mr-2 font-color-white\" style=\"width:150px;\">Address</label>\n      <input type=\"text\" class=\"form-control mg-end-sm bg-gray\" placeholder=\"Address\" name=\"address\"\n        [(ngModel)]=\"user.address\"  [formControl]=\"userInfoFormValidation.controls['address']\">\n\n      <div class=\"error font-xs\" *ngIf=\"!userInfoFormValidation.controls['address'].valid &&\n        userInfoFormValidation.controls['address'].touched\"> Address is required!\n      </div>\n\n      <label class=\"col-xs-3 col-form-label mr-2 font-color-white\" style=\"width:150px;\">NRC</label>\n      <input type=\"text\" class=\"form-control mg-end-sm bg-gray\" placeholder=\"NRC\" name=\"nrc\"\n        [(ngModel)]=\"user.nrc\"  [formControl]=\"userInfoFormValidation.controls['nrc']\">\n\n      <div class=\"error font-xs\" *ngIf=\"!userInfoFormValidation.controls['nrc'].valid &&\n        userInfoFormValidation.controls['nrc'].touched\"> NRC is required!\n      </div>\n     \n      <label class=\"col-xs-3 col-form-label mr-2 font-color-white\" style=\"width:150px;\">MPS Register No</label>\n      <input type=\"text\" class=\"form-control mg-end-sm bg-gray\" placeholder=\"MPS Register No\"\n        name=\"mps_register_no\" [(ngModel)]=\"user.mps_register_no\"  [formControl]=\"userInfoFormValidation.controls['mps_register_no']\">\n\n      <div class=\"error font-xs\" *ngIf=\"!userInfoFormValidation.controls['mps_register_no'].valid &&\n        userInfoFormValidation.controls['mps_register_no'].touched\"> MPS Register No is required!\n      </div>\n\n      <button class=\"btn btn-lg btn-dark btn-block border-color mg-end-md\" type=\"submit\" [disabled]=\"!userInfoFormValidation.valid\"\n      >Update</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/edit-profile/edit-profile.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/edit-profile/edit-profile.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input, select {\n  border: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95YWRhbmFyYXVuZy9Eb2N1bWVudHMvaGl2ZS10YWxlbnQtYXNzZXNzbWVudC1waHAtbGFyYXZlbDcvbXBzX2Zyb250ZW5kL3NyYy9hcHAvcGFnZXMvZWRpdC1wcm9maWxlL2VkaXQtcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VkaXQtcHJvZmlsZS9lZGl0LXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5pbnB1dCwgc2VsZWN0e1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuICAiXX0= */"

/***/ }),

/***/ "./src/app/pages/edit-profile/edit-profile.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/edit-profile/edit-profile.component.ts ***!
  \**************************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/country.service */ "./src/app/services/country.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent(auth, countrySvc, fb) {
        this.auth = auth;
        this.countrySvc = countrySvc;
        this.fb = fb;
        this.user = {};
        this.countries = [];
        this.showMessage = false;
        this.isSuccess = false;
    }
    EditProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userInfoFormValidation = this.fb.group({
            first_name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            last_name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            full_name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            country_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            zip_code: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            mps_register_no: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            phone: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            address: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            nrc: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.auth.getAuthenticatedUser().subscribe(function (res) {
            _this.user = res;
        });
        this.countrySvc.getAllCountry().subscribe(function (res) {
            _this.countries = res.data;
        });
    };
    EditProfileComponent.prototype.update = function () {
        var _this = this;
        var that = this;
        var user = this.user;
        console.log(user);
        this.auth.updateInfo(user).subscribe(function (res) {
            _this.message = "Update Successfully!";
            _this.showMessage = true;
        }, function (error) {
            if (error.status == 400) {
                _this.showMessage = true;
                _this.message = "Already register with this email!";
                _this.isSuccess = false;
            }
            else if (error.status == 422) {
                that.message += "Please fill required data!";
            }
            else {
                _this.message = "Update Fail!";
                _this.showMessage = true;
                _this.isSuccess = false;
            }
        });
    };
    EditProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-edit-profile',
            template: __webpack_require__(/*! ./edit-profile.component.html */ "./src/app/pages/edit-profile/edit-profile.component.html"),
            styles: [__webpack_require__(/*! ./edit-profile.component.scss */ "./src/app/pages/edit-profile/edit-profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_country_service__WEBPACK_IMPORTED_MODULE_1__["CountryService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], EditProfileComponent);
    return EditProfileComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"alert alert-dismissible fade show\" role=\"alert\" *ngIf=\"showMessage\" [class.alert-danger]=\"!isSuccess\"\n    [class.alert-success]=\"isSuccess\">\n    {{message}}\n  </div>\n  <form class=\"form-signin\" action=\"#\" #registerForm=\"ngForm\" method=\"POST\">\n    <h1 class=\"h3 mb-3 font-weight-normal text-center font-color-white\">Add Payslip</h1>\n    <div class=\"col-md-3 margin-auto\">\n      <div class=\"card mb-3 box-shadow\">\n        <img class=\"card-img-top\" [src]=\"photo.previewUrl\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n          <div class=\"d-flex justify-content-between align-items-center\">\n            <div class=\"custom-file\">\n              <label for=\"upload-photo\" class=\"font-color-white btn btn-sm btn-dark btn-inline border-color\">\n                Browse\n              </label>\n              <input type=\"file\" class=\"custom-file-input bg-dark\" id=\"upload-photo\" class=\"upload-photo\"\n                (change)=\"paymentFileProgress($event)\">\n\n                 <button (click)=\"uploadPayslip()\"\n                    class=\"font-color-white btn btn-sm btn-dark btn-inline border-color float-right\">\n                   Upload\n                 </button>\n\n              <!-- <label class=\"font-color-white btn btn-sm btn-dark btn-inline border-color float-right\">\n                Delete\n              </label> -->\n              <!-- <input type=\"file\" class=\"custom-file-input bg-dark\" id=\"customFile\"\n                (change)=\"paymentFileProgress($event)\"> -->\n              <!-- <label class=\"custom-file-label\" for=\"customFile\">Choose file</label> -->\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- <button class=\"btn btn-lg btn-dark btn-block border-color mg-end-md\" type=\"button\"\n      (click)=\"uploadPayslip()\">Upload</button> -->\n  </form>\n</div>\n<div *ngFor=\"let contest of contests; let i=index\">\n  <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom\">\n    <h1 class=\"h2 font-color-white\">{{contest.name}}</h1>\n  </div>\n\n  <form action=\"#\">\n    <div class=\"album py-5\">\n      <div class=\"container\">\n        <div class=\"spinner-border text-primary text-center\" role=\"status\" *ngIf=\"contest.showLoading\">\n          <span>Uploading...</span>\n        </div>\n        <br />\n        <div class=\"row\">\n\n          <div class=\"col-md-3\">\n            <div class=\"card mb-3 box-shadow\" [class.fileError]=\"contest.competition_photo_1.error\">\n              <!-- <img class=\"card-img-top\" [src]=\"contest.competition_photo_1.previewUrl\" alt=\"Card image cap\"> -->\n              <div class=\"card-img-top\"\n                [ngStyle]=\"{'background-image': 'url(' + contest.competition_photo_1.previewUrl + ')'}\">\n              </div>\n              <div class=\"card-body\">\n                <p class=\"card-text\">\n                  <input type=\"text\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Title\"\n                    [class.fileError]=\"contest.competition_photo_1.nameError\"\n                    [(ngModel)]=\"contest.competition_photo_1.name\" name=\"contest.competition_photo_1.name\" (focus)=\"hideError(contest.competition_photo_1)\">\n                </p>\n                <div class=\"d-flex justify-content-between align-items-center\">\n                  <div class=\"custom-file\">\n                    <label for=\"upload-photo-{{i}}-1\"\n                      class=\"font-color-white btn btn-sm btn-dark btn-inline border-color\">\n                      Browse\n                    </label>\n                    <input type=\"file\" class=\"custom-file-input bg-dark upload-photo\" id=\"upload-photo-{{i}}-1\"\n                      (change)=\"fileProgress($event, contest.competition_photo_1)\">\n\n                    <button class=\"font-color-white btn btn-sm btn-dark btn-inline border-color float-right\"\n                      (click)=\"deleteImage(contest.competition_photo_1, contest.competition_id, contest.main_contest.id)\">\n                      Delete\n                    </button>\n\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-md-3\">\n            <div class=\"card mb-3 box-shadow\" [class.fileError]=\"contest.competition_photo_2.error\">\n              <div class=\"card-img-top\"\n                [ngStyle]=\"{'background-image': 'url(' + contest.competition_photo_2.previewUrl + ')'}\">\n              </div>\n              <div class=\"card-body\">\n                <p class=\"card-text\">\n                  <input type=\"text\" id=\"inputEmail\" class=\"form-control bg-dark\" placeholder=\"Title\"\n                    [class.fileError]=\"contest.competition_photo_2.nameError\"\n                    [(ngModel)]=\"contest.competition_photo_2.name\" name=\"contest.competition_photo_2.name\" (focus)=\"hideError(contest.competition_photo_2)\">\n                </p>\n                <div class=\"d-flex justify-content-between align-items-center\">\n                  <div class=\"custom-file\">\n                    <label for=\"upload-photo-{{i}}-2\"\n                      class=\"font-color-white btn btn-sm btn-dark btn-inline border-color\">\n                      Browse\n                    </label>\n                    <input type=\"file\" class=\"custom-file-input bg-dark upload-photo\" id=\"upload-photo-{{i}}-2\"\n                      (change)=\"fileProgress($event, contest.competition_photo_2)\">\n\n                    <button class=\"font-color-white btn btn-sm btn-dark btn-inline border-color float-right\"\n                      (click)=\"deleteImage(contest.competition_photo_2, contest.competition_id, contest.main_contest.id)\">\n                      Delete\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-md-3\">\n            <div class=\"card mb-3 box-shadow\" [class.fileError]=\"contest.competition_photo_3.error\">\n              <div class=\"card-img-top\"\n                [ngStyle]=\"{'background-image': 'url(' + contest.competition_photo_3.previewUrl + ')'}\">\n              </div>\n              <div class=\"card-body\">\n                <p class=\"card-text\">\n                  <input type=\"text\" id=\"inputEmail\" class=\"form-control bg-dark\" placeholder=\"Title\"\n                    [class.fileError]=\"contest.competition_photo_3.nameError\"\n                    [(ngModel)]=\"contest.competition_photo_3.name\" name=\"contest.competition_photo_3.name\" (focus)=\"hideError(contest.competition_photo_3)\">\n                </p>\n                <div class=\"d-flex justify-content-between align-items-center\">\n                  <div class=\"custom-file\">\n                    <label for=\"upload-photo-{{i}}-3\"\n                      class=\"font-color-white btn btn-sm btn-dark btn-inline border-color\">\n                      Browse\n                    </label>\n                    <input type=\"file\" class=\"custom-file-input bg-dark upload-photo\" id=\"upload-photo-{{i}}-3\"\n                      (change)=\"fileProgress($event, contest.competition_photo_3)\">\n\n                    <button class=\"font-color-white btn btn-sm btn-dark btn-inline border-color float-right\"\n                      (click)=\"deleteImage(contest.competition_photo_3, contest.competition_id, contest.main_contest.id)\">\n                      Delete\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-md-3\">\n            <div class=\"card mb-3 box-shadow\" [class.fileError]=\"contest.competition_photo_4.error\">\n              <div class=\"card-img-top\"\n                [ngStyle]=\"{'background-image': 'url(' + contest.competition_photo_4.previewUrl + ')'}\">\n              </div>\n              <div class=\"card-body\">\n                <p class=\"card-text\">\n                  <input type=\"text\" id=\"inputEmail\" class=\"form-control bg-dark\" placeholder=\"Title\"\n                    [class.fileError]=\"contest.competition_photo_4.nameError\"\n                    [(ngModel)]=\"contest.competition_photo_4.name\" name=\"contest.competition_photo_4.name\" (focus)=\"hideError(contest.competition_photo_4)\">\n                </p>\n                <div class=\"d-flex justify-content-between align-items-center\">\n                  <div class=\"custom-file\">\n                    <label for=\"upload-photo-{{i}}-4\"\n                      class=\"font-color-white btn btn-sm btn-dark btn-inline border-color\">\n                      Browse\n                    </label>\n                    <input type=\"file\" class=\"custom-file-input bg-dark upload-photo\" id=\"upload-photo-{{i}}-4\"\n                      (change)=\"fileProgress($event, contest.competition_photo_4)\">\n\n                    <button class=\"font-color-white btn btn-sm btn-dark btn-inline border-color float-right\"\n                      (click)=\"deleteImage(contest.competition_photo_4, contest.competition_id, contest.main_contest.id)\">\n                      Delete\n                    </button>\n                  </div>\n                </div>\n\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n      <div class=\"text-right\">\n        <button class=\"btn btn-lg btn-dark btn-inline border-color\" (click)=\"saveCompetition(contest)\"\n          [disabled]=\"contest.disableButton\">Submit</button>\n      </div>\n\n    </div>\n  </form>\n</div>\n\n<!-- Small modal -->\n<div class=\"modal bd-example-modal-sm\" tabindex=\"-1\" role=\"dialog\" id=\"dialogMsg\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Information</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"hideDialog()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>{{errorMessage}}</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"hideDialog()\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Small modal -->\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  font-size: .875rem; }\n\n.feather {\n  width: 16px;\n  height: 16px;\n  vertical-align: text-bottom; }\n\n/*\n * Sidebar\n */\n\n.sidebar {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 100;\n  /* Behind the navbar */\n  padding: 0;\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1); }\n\n.sidebar-sticky {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 48px;\n  /* Height of navbar */\n  height: calc(100vh - 48px);\n  padding-top: .5rem;\n  overflow-x: hidden;\n  overflow-y: auto;\n  /* Scrollable contents if viewport is shorter than content. */ }\n\n.sidebar .nav-link {\n  font-weight: 500;\n  color: #333; }\n\n.sidebar .nav-link .feather {\n  margin-right: 4px;\n  color: #999; }\n\n.sidebar .nav-link.active {\n  color: #007bff; }\n\n.sidebar .nav-link:hover .feather,\n.sidebar .nav-link.active .feather {\n  color: inherit; }\n\n.sidebar-heading {\n  font-size: .75rem;\n  text-transform: uppercase; }\n\n/*\n * Navbar\n */\n\n.navbar-brand {\n  padding-top: .75rem;\n  padding-bottom: .75rem;\n  font-size: 1rem;\n  background-color: rgba(0, 0, 0, 0.25);\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.25); }\n\n.navbar .form-control {\n  padding: .75rem 1rem;\n  border-width: 0;\n  border-radius: 0; }\n\n.form-control-dark {\n  color: #fff;\n  background-color: rgba(255, 255, 255, 0.1);\n  border-color: rgba(255, 255, 255, 0.1); }\n\n.form-control-dark:focus {\n  border-color: transparent;\n  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.25); }\n\n/*\n * Utilities\n */\n\n.border-top {\n  border-top: 1px solid #e5e5e5; }\n\n.border-bottom {\n  border-bottom: 1px solid #705d4d !important; }\n\n:root {\n  --jumbotron-padding-y: 3rem; }\n\n.jumbotron {\n  padding-top: var(--jumbotron-padding-y);\n  padding-bottom: var(--jumbotron-padding-y);\n  margin-bottom: 0;\n  background-color: #705d4d; }\n\n@media (min-width: 768px) {\n  .jumbotron {\n    padding-top: calc(var(--jumbotron-padding-y) * 2);\n    padding-bottom: calc(var(--jumbotron-padding-y) * 2); } }\n\n.jumbotron p:last-child {\n  margin-bottom: 0; }\n\n.jumbotron-heading {\n  font-weight: 300; }\n\n.jumbotron .container {\n  max-width: 40rem; }\n\nfooter {\n  padding-top: 3rem;\n  padding-bottom: 3rem; }\n\nfooter p {\n  margin-bottom: .25rem; }\n\n.box-shadow {\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.05); }\n\n.card {\n  background-color: #262c34; }\n\ninput {\n  border-color: black;\n  background: #000001 !important; }\n\n.card-img-top {\n  height: 150px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 50%; }\n\n.upload-photo {\n  opacity: 0;\n  position: absolute;\n  z-index: -1;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95YWRhbmFyYXVuZy9Eb2N1bWVudHMvaGl2ZS10YWxlbnQtYXNzZXNzbWVudC1waHAtbGFyYXZlbDcvbXBzX2Zyb250ZW5kL3NyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDJCQUEyQixFQUFBOztBQUc3Qjs7RUNBRTs7QURJRjtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxZQUFZO0VBQ1osc0JBQUE7RUFDQSxVQUFVO0VBQ1YsNkNBQTRDLEVBQUE7O0FBRzlDO0VBQ0Usd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QscUJBQUE7RUFDQSwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsNkRBQUEsRUFBOEQ7O0FBR2hFO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGlCQUFpQjtFQUNqQixXQUFXLEVBQUE7O0FBR2I7RUFDRSxjQUFjLEVBQUE7O0FBR2hCOztFQUVFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxpQkFBaUI7RUFDakIseUJBQXlCLEVBQUE7O0FBRzNCOztFQ1JFOztBRFlGO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YscUNBQW9DO0VBQ3BDLDhDQUE2QyxFQUFBOztBQUcvQztFQUNFLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsV0FBVztFQUNYLDBDQUF5QztFQUN6QyxzQ0FBcUMsRUFBQTs7QUFHdkM7RUFDRSx5QkFBeUI7RUFDekIsK0NBQThDLEVBQUE7O0FBR2hEOztFQ2JFOztBRGlCRjtFQUNFLDZCQUE2QixFQUFBOztBQUcvQjtFQUNFLDJDQUFvRCxFQUFBOztBQUd0RDtFQUNFLDJCQUFzQixFQUFBOztBQUd4QjtFQUNFLHVDQUF1QztFQUN2QywwQ0FBMEM7RUFDMUMsZ0JBQWdCO0VBQ2hCLHlCQUFrQyxFQUFBOztBQUdwQztFQUNFO0lBQ0UsaURBQWlEO0lBQ2pELG9EQUFvRCxFQUFBLEVBQ3JEOztBQUdIO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQixFQUFBOztBQUd0QjtFQUNFLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLGlEQUE4QyxFQUFBOztBQUdoRDtFQUNFLHlCQUFpQyxFQUFBOztBQUduQztFQUVFLG1CQUFrQjtFQUNsQiw4QkFBbUMsRUFBQTs7QUFHckM7RUFDRSxhQUFZO0VBQ1osMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixvQkFBbUIsRUFBQTs7QUFRckI7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgZm9udC1zaXplOiAuODc1cmVtO1xufVxuXG4uZmVhdGhlciB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbn1cblxuLypcbiAqIFNpZGViYXJcbiAqL1xuXG4uc2lkZWJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwMDtcbiAgLyogQmVoaW5kIHRoZSBuYXZiYXIgKi9cbiAgcGFkZGluZzogMDtcbiAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIDAgcmdiYSgwLCAwLCAwLCAuMSk7XG59XG5cbi5zaWRlYmFyLXN0aWNreSB7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiA0OHB4O1xuICAvKiBIZWlnaHQgb2YgbmF2YmFyICovXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDQ4cHgpO1xuICBwYWRkaW5nLXRvcDogLjVyZW07XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgLyogU2Nyb2xsYWJsZSBjb250ZW50cyBpZiB2aWV3cG9ydCBpcyBzaG9ydGVyIHRoYW4gY29udGVudC4gKi9cbn1cblxuLnNpZGViYXIgLm5hdi1saW5rIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5zaWRlYmFyIC5uYXYtbGluayAuZmVhdGhlciB7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xuICBjb2xvcjogIzk5OTtcbn1cblxuLnNpZGViYXIgLm5hdi1saW5rLmFjdGl2ZSB7XG4gIGNvbG9yOiAjMDA3YmZmO1xufVxuXG4uc2lkZWJhciAubmF2LWxpbms6aG92ZXIgLmZlYXRoZXIsXG4uc2lkZWJhciAubmF2LWxpbmsuYWN0aXZlIC5mZWF0aGVyIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5zaWRlYmFyLWhlYWRpbmcge1xuICBmb250LXNpemU6IC43NXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLypcbiAqIE5hdmJhclxuICovXG5cbi5uYXZiYXItYnJhbmQge1xuICBwYWRkaW5nLXRvcDogLjc1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogLjc1cmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjI1KTtcbiAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIDAgcmdiYSgwLCAwLCAwLCAuMjUpO1xufVxuXG4ubmF2YmFyIC5mb3JtLWNvbnRyb2wge1xuICBwYWRkaW5nOiAuNzVyZW0gMXJlbTtcbiAgYm9yZGVyLXdpZHRoOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4uZm9ybS1jb250cm9sLWRhcmsge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMSk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMSk7XG59XG5cbi5mb3JtLWNvbnRyb2wtZGFyazpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4yNSk7XG59XG5cbi8qXG4gKiBVdGlsaXRpZXNcbiAqL1xuXG4uYm9yZGVyLXRvcCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTVlNWU1O1xufVxuXG4uYm9yZGVyLWJvdHRvbSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTEyLCA5MywgNzcpICFpbXBvcnRhbnQ7XG59XG5cbjpyb290IHtcbiAgLS1qdW1ib3Ryb24tcGFkZGluZy15OiAzcmVtO1xufVxuXG4uanVtYm90cm9uIHtcbiAgcGFkZGluZy10b3A6IHZhcigtLWp1bWJvdHJvbi1wYWRkaW5nLXkpO1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tanVtYm90cm9uLXBhZGRpbmcteSk7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTIsIDkzLCA3Nyk7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuanVtYm90cm9uIHtcbiAgICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1qdW1ib3Ryb24tcGFkZGluZy15KSAqIDIpO1xuICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLWp1bWJvdHJvbi1wYWRkaW5nLXkpICogMik7XG4gIH1cbn1cblxuLmp1bWJvdHJvbiBwOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uanVtYm90cm9uLWhlYWRpbmcge1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uanVtYm90cm9uIC5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDQwcmVtO1xufVxuXG5mb290ZXIge1xuICBwYWRkaW5nLXRvcDogM3JlbTtcbiAgcGFkZGluZy1ib3R0b206IDNyZW07XG59XG5cbmZvb3RlciBwIHtcbiAgbWFyZ2luLWJvdHRvbTogLjI1cmVtO1xufVxuXG4uYm94LXNoYWRvdyB7XG4gIGJveC1zaGFkb3c6IDAgLjI1cmVtIC43NXJlbSByZ2JhKDAsIDAsIDAsIC4wNSk7XG59XG5cbi5jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM4LCA0NCwgNTIpO1xufVxuXG5pbnB1dHtcbiAgLy8gYm9yZGVyOiBub25lO1xuICBib3JkZXItY29sb3I6YmxhY2s7XG4gIGJhY2tncm91bmQ6IHJnYigwLCAwLCAxKSAhaW1wb3J0YW50O1xufVxuXG4uY2FyZC1pbWctdG9we1xuICBoZWlnaHQ6MTUwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOjUwJTtcbn1cblxuLy8gLmN1c3RvbS1maWxlLWxhYmVse1xuLy8gICBib3JkZXI6XG4vLyB9XG5cblxuLnVwbG9hZC1waG90byB7XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iLCJib2R5IHtcbiAgZm9udC1zaXplOiAuODc1cmVtOyB9XG5cbi5mZWF0aGVyIHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tOyB9XG5cbi8qXG4gKiBTaWRlYmFyXG4gKi9cbi5zaWRlYmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTAwO1xuICAvKiBCZWhpbmQgdGhlIG5hdmJhciAqL1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgMCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cblxuLnNpZGViYXItc3RpY2t5IHtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDQ4cHg7XG4gIC8qIEhlaWdodCBvZiBuYXZiYXIgKi9cbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDhweCk7XG4gIHBhZGRpbmctdG9wOiAuNXJlbTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICAvKiBTY3JvbGxhYmxlIGNvbnRlbnRzIGlmIHZpZXdwb3J0IGlzIHNob3J0ZXIgdGhhbiBjb250ZW50LiAqLyB9XG5cbi5zaWRlYmFyIC5uYXYtbGluayB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMzMzOyB9XG5cbi5zaWRlYmFyIC5uYXYtbGluayAuZmVhdGhlciB7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xuICBjb2xvcjogIzk5OTsgfVxuXG4uc2lkZWJhciAubmF2LWxpbmsuYWN0aXZlIHtcbiAgY29sb3I6ICMwMDdiZmY7IH1cblxuLnNpZGViYXIgLm5hdi1saW5rOmhvdmVyIC5mZWF0aGVyLFxuLnNpZGViYXIgLm5hdi1saW5rLmFjdGl2ZSAuZmVhdGhlciB7XG4gIGNvbG9yOiBpbmhlcml0OyB9XG5cbi5zaWRlYmFyLWhlYWRpbmcge1xuICBmb250LXNpemU6IC43NXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxuXG4vKlxuICogTmF2YmFyXG4gKi9cbi5uYXZiYXItYnJhbmQge1xuICBwYWRkaW5nLXRvcDogLjc1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogLjc1cmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCAwIHJnYmEoMCwgMCwgMCwgMC4yNSk7IH1cblxuLm5hdmJhciAuZm9ybS1jb250cm9sIHtcbiAgcGFkZGluZzogLjc1cmVtIDFyZW07XG4gIGJvcmRlci13aWR0aDogMDtcbiAgYm9yZGVyLXJhZGl1czogMDsgfVxuXG4uZm9ybS1jb250cm9sLWRhcmsge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTsgfVxuXG4uZm9ybS1jb250cm9sLWRhcms6Zm9jdXMge1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTsgfVxuXG4vKlxuICogVXRpbGl0aWVzXG4gKi9cbi5ib3JkZXItdG9wIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNWU1ZTU7IH1cblxuLmJvcmRlci1ib3R0b20ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzcwNWQ0ZCAhaW1wb3J0YW50OyB9XG5cbjpyb290IHtcbiAgLS1qdW1ib3Ryb24tcGFkZGluZy15OiAzcmVtOyB9XG5cbi5qdW1ib3Ryb24ge1xuICBwYWRkaW5nLXRvcDogdmFyKC0tanVtYm90cm9uLXBhZGRpbmcteSk7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1qdW1ib3Ryb24tcGFkZGluZy15KTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcwNWQ0ZDsgfVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmp1bWJvdHJvbiB7XG4gICAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tanVtYm90cm9uLXBhZGRpbmcteSkgKiAyKTtcbiAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1qdW1ib3Ryb24tcGFkZGluZy15KSAqIDIpOyB9IH1cblxuLmp1bWJvdHJvbiBwOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwOyB9XG5cbi5qdW1ib3Ryb24taGVhZGluZyB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7IH1cblxuLmp1bWJvdHJvbiAuY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA0MHJlbTsgfVxuXG5mb290ZXIge1xuICBwYWRkaW5nLXRvcDogM3JlbTtcbiAgcGFkZGluZy1ib3R0b206IDNyZW07IH1cblxuZm9vdGVyIHAge1xuICBtYXJnaW4tYm90dG9tOiAuMjVyZW07IH1cblxuLmJveC1zaGFkb3cge1xuICBib3gtc2hhZG93OiAwIDAuMjVyZW0gMC43NXJlbSByZ2JhKDAsIDAsIDAsIDAuMDUpOyB9XG5cbi5jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2MmMzNDsgfVxuXG5pbnB1dCB7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDEgIWltcG9ydGFudDsgfVxuXG4uY2FyZC1pbWctdG9wIHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDUwJTsgfVxuXG4udXBsb2FkLXBob3RvIHtcbiAgb3BhY2l0eTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAtMTtcbiAgY3Vyc29yOiBwb2ludGVyOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_contest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/contest.service */ "./src/app/services/contest.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





var HomeComponent = /** @class */ (function () {
    function HomeComponent(auth, router, contestSvc) {
        var _this = this;
        this.auth = auth;
        this.router = router;
        this.contestSvc = contestSvc;
        this.contests = [];
        this.uploadSuccess = false;
        this.photo = {};
        this.showMessage = false;
        this.isSuccess = false;
        this.allowExtensions = ["image/jpeg", "image/jpg", "image/png"];
        this.auth.getAuthenticatedUser().subscribe(function (res) {
            _this.photo.previewUrl = res.paymentUrl;
            if (res.paymentUrl == "") {
                _this.photo.previewUrl = "assets/images/default.jpg";
            }
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.initHome();
    };
    HomeComponent.prototype.initHome = function () {
        var _this = this;
        var that = this;
        this.contestSvc.getAllContests().subscribe(function (res) {
            _this.contests = res.data;
            _this.contests.map(function (obj) {
                obj.disableButton = false;
                obj.showLoading = false;
                obj.competition_photo_1.error = false;
                obj.competition_photo_2.error = false;
                obj.competition_photo_3.error = false;
                obj.competition_photo_4.error = false;
                obj.competition_photo_1.nameError = false;
                obj.competition_photo_2.nameError = false;
                obj.competition_photo_3.nameError = false;
                obj.competition_photo_4.nameError = false;
                obj.competition_photo_1.photo_no = 1;
                obj.competition_photo_2.photo_no = 2;
                obj.competition_photo_3.photo_no = 3;
                obj.competition_photo_4.photo_no = 4;
                if (obj.competition_photo_1.previewUrl == "") {
                    obj.competition_photo_1.previewUrl = "assets/images/default.jpg";
                    obj.competition_photo_1.photo_no = 0;
                }
                if (obj.competition_photo_2.previewUrl == "") {
                    obj.competition_photo_2.previewUrl = "assets/images/default.jpg";
                    obj.competition_photo_2.photo_no = 0;
                }
                if (obj.competition_photo_3.previewUrl == "") {
                    obj.competition_photo_3.previewUrl = "assets/images/default.jpg";
                    obj.competition_photo_3.photo_no = 0;
                }
                if (obj.competition_photo_4.previewUrl == "") {
                    obj.competition_photo_4.previewUrl = "assets/images/default.jpg";
                    obj.competition_photo_4.photo_no = 0;
                }
            });
        }, function (error) {
            //  alert(JSON.stringify(error))
            if (error.status == 401) {
                _this.logout();
            }
        });
    };
    HomeComponent.prototype.logout = function () {
        var _this = this;
        this.auth.logout().subscribe(function () {
            _this.router.navigate(["/"]);
        });
    };
    HomeComponent.prototype.fileProgress = function (fileInput, photo) {
        var file = fileInput.target.files[0];
        var maxSize = file.size * 0.000001;
        var type = file.type;
        //check file extension
        if (this.allowExtensions.indexOf(type) == -1) {
            photo.error = true;
            this.errorMessage = "File extension is not allowed!";
            $("#dialogMsg").show();
            return false;
        }
        //check file size
        if (maxSize > 3) {
            photo.error = true;
            this.errorMessage = "Maximum file size is 3MB!";
            $("#dialogMsg").show();
            return false;
        }
        photo.error = false;
        photo.image = file;
        photo.extension = file.type.split("/").pop();
        this.preview(photo);
    };
    HomeComponent.prototype.preview = function (photo) {
        // Show preview
        var mimeType = photo.image.type;
        if (mimeType.match(/image\/*/) == null) {
            return;
        }
        var reader = new FileReader();
        reader.readAsDataURL(photo.image);
        reader.onload = function (_event) {
            photo.oldUrl = photo.previewUrl;
            photo.previewUrl = reader.result;
            photo.image = reader.result;
        };
    };
    HomeComponent.prototype.saveCompetition = function (contest) {
        var _this = this;
        contest.disableButton = true;
        contest.showLoading = true;
        var now = new Date();
        var date = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate();
        var closeDay = new Date(contest.main_contest.end_date);
        var today = new Date(date);
        if (today >= closeDay) {
            this.errorMessage = "This Photo Contest is expired!";
            $("#dialogMsg").show();
            contest.disableButton = false;
            contest.showLoading = false;
            return false;
        }
        var saveContest = {
            contest_id: contest.id,
            main_contest_id: contest.main_contest.id,
            competition_photo_1: {
                name: contest.competition_photo_1.name,
                image: contest.competition_photo_1.image,
                extension: contest.competition_photo_1.extension
            },
            competition_photo_2: {
                name: contest.competition_photo_2.name,
                image: contest.competition_photo_2.image,
                extension: contest.competition_photo_2.extension
            },
            competition_photo_3: {
                name: contest.competition_photo_3.name,
                image: contest.competition_photo_3.image,
                extension: contest.competition_photo_3.extension
            },
            competition_photo_4: {
                name: contest.competition_photo_4.name,
                image: contest.competition_photo_4.image,
                extension: contest.competition_photo_4.extension
            }
        };
        if (saveContest.competition_photo_1.image == "" &&
            saveContest.competition_photo_2.image == "" &&
            saveContest.competition_photo_3.image == "" &&
            saveContest.competition_photo_4.image == "" &&
            saveContest.competition_photo_1.name == "" &&
            saveContest.competition_photo_2.name == "" &&
            saveContest.competition_photo_3.name == "" &&
            saveContest.competition_photo_4.name == "") {
            // this.errorMessage = "Please upload at least one photo!";
            // $("#dialogMsg").show();
            contest.disableButton = false;
            contest.showLoading = false;
        }
        else {
            //update
            if (contest.competition_id) {
                //check title is blank?
                var valid = this.validationUpdate(contest);
                if (valid) {
                    this.contestSvc
                        .updateCompletition(saveContest, contest.competition_id)
                        .subscribe(function (res) {
                        _this.errorMessage = "Upload Photo Successfully!";
                        _this.uploadSuccess = true;
                        //this.ngOnInit();
                        // this.initHome();
                        $("#dialogMsg").show();
                    }, function (error) {
                        _this.ngOnInit();
                        if (error.status == 422) {
                            // alert('You need to upload at least one photo ')
                            _this.errorMessage = "Please upload at least one photo!";
                            $("#dialogMsg").show();
                        }
                        else {
                            _this.errorMessage = "Internal server error!";
                            $("#dialogMsg").show();
                        }
                    });
                }
            }
            else {
                //check title is blank?
                var valid = this.validation(contest);
                if (valid) {
                    this.contestSvc.saveCompletition(saveContest).subscribe(function (res) {
                        //this.ngOnInit();
                        // this.initHome();
                        _this.errorMessage = "Upload Photo Successfully!";
                        _this.uploadSuccess = true;
                        $("#dialogMsg").show();
                    }, function (error) {
                        _this.ngOnInit();
                        if (error.status == 422) {
                            // alert('You need to upload at least one photo ')
                            _this.errorMessage = "Please upload at least one photo!";
                            $("#dialogMsg").show();
                        }
                        else {
                            _this.errorMessage = "Internal server error!";
                            $("#dialogMsg").show();
                        }
                    });
                }
            }
        }
    };
    HomeComponent.prototype.hideDialog = function () {
        if (this.uploadSuccess) {
            window.location.reload();
        }
        $("#dialogMsg").hide();
    };
    HomeComponent.prototype.paymentFileProgress = function (fileInput) {
        this.photo.image = fileInput.target.files[0];
        this.paymentPreview(this.photo);
    };
    HomeComponent.prototype.paymentPreview = function (photo) {
        // Show preview
        var mimeType = photo.image.type;
        if (mimeType.match(/image\/*/) == null) {
            return;
        }
        var reader = new FileReader();
        reader.readAsDataURL(photo.image);
        reader.onload = function (_event) {
            photo.previewUrl = reader.result;
            photo.image = reader.result;
        };
    };
    HomeComponent.prototype.deleteImage = function (photo, competitionId, main_contest_id) {
        var that = this;
        photo.error = false;
        if (photo.oldUrl) {
            photo.previewUrl = photo.oldUrl;
            photo.error = false;
            photo.image = "";
        }
        else {
            if (photo.photo_no) {
                this.contestSvc
                    .deleteImage(competitionId, main_contest_id, photo.photo_no)
                    .subscribe(function (res) {
                    that.initHome();
                }, function (error) {
                    console.log(error);
                });
            }
        }
    };
    HomeComponent.prototype.uploadPayslip = function () {
        var _this = this;
        if (this.photo.image) {
            this.auth.uploadPayment({ image: this.photo.previewUrl }).subscribe(function (res) {
                _this.message = "Upload Payment Slip Successfully!";
                _this.showMessage = true;
                _this.isSuccess = true;
            }, function (error) {
                if (error.status == 422) {
                    // alert('You need to upload at least one photo ')
                    _this.message = "Please upload photo!";
                    _this.isSuccess = false;
                }
                else {
                    _this.message = "Internal server error!";
                    _this.isSuccess = false;
                }
            });
        }
    };
    HomeComponent.prototype.validation = function (contest) {
        var valid = true;
        //check image first
        if (contest.competition_photo_1.image != "" &&
            contest.competition_photo_1.name.trim() == "") {
            this.errorMessage = "Image Title is required!";
            $("#dialogMsg").show();
            contest.disableButton = false;
            contest.showLoading = false;
            contest.competition_photo_1.nameError = true;
            valid = false;
        }
        if (contest.competition_photo_2.image != "" &&
            contest.competition_photo_2.name.trim() == "") {
            this.errorMessage = "Image Title is required!";
            $("#dialogMsg").show();
            contest.disableButton = false;
            contest.showLoading = false;
            contest.competition_photo_2.nameError = true;
            valid = false;
        }
        if (contest.competition_photo_3.image != "" &&
            contest.competition_photo_3.name.trim() == "") {
            this.errorMessage = "Image Title is required!";
            $("#dialogMsg").show();
            contest.disableButton = false;
            contest.showLoading = false;
            contest.competition_photo_3.nameError = true;
            valid = false;
        }
        if (contest.competition_photo_4.image != "" &&
            contest.competition_photo_4.name.trim() == "") {
            this.errorMessage = "Image Title is required!";
            $("#dialogMsg").show();
            contest.disableButton = false;
            contest.showLoading = false;
            contest.competition_photo_4.nameError = true;
            valid = false;
        }
        //check image title first
        if (contest.competition_photo_1.image == "" &&
            contest.competition_photo_1.name.trim() != "") {
            this.errorMessage = "Image is required!";
            $("#dialogMsg").show();
            contest.disableButton = false;
            contest.showLoading = false;
            contest.competition_photo_1.error = true;
            valid = false;
        }
        if (contest.competition_photo_2.image == "" &&
            contest.competition_photo_2.name.trim() != "") {
            this.errorMessage = "Image is required!";
            $("#dialogMsg").show();
            contest.disableButton = false;
            contest.showLoading = false;
            contest.competition_photo_2.error = true;
            valid = false;
        }
        if (contest.competition_photo_3.image == "" &&
            contest.competition_photo_3.name.trim() != "") {
            this.errorMessage = "Image is required!";
            $("#dialogMsg").show();
            contest.disableButton = false;
            contest.showLoading = false;
            contest.competition_photo_3.error = true;
            valid = false;
        }
        if (contest.competition_photo_4.image == "" &&
            contest.competition_photo_4.name.trim() != "") {
            this.errorMessage = "Image is required!";
            $("#dialogMsg").show();
            contest.disableButton = false;
            contest.showLoading = false;
            contest.competition_photo_4.error = true;
            valid = false;
        }
        return valid;
    };
    HomeComponent.prototype.validationUpdate = function (contest) {
        var valid = true;
        //check image first
        if (contest.competition_photo_1.image != "" &&
            contest.competition_photo_1.name.trim() == "") {
            this.errorMessage = "Image Title is required!";
            $("#dialogMsg").show();
            contest.disableButton = false;
            contest.showLoading = false;
            contest.competition_photo_1.nameError = true;
            valid = false;
        }
        if (contest.competition_photo_2.image != "" &&
            contest.competition_photo_2.name.trim() == "") {
            this.errorMessage = "Image Title is required!";
            $("#dialogMsg").show();
            contest.disableButton = false;
            contest.showLoading = false;
            contest.competition_photo_2.nameError = true;
            valid = false;
        }
        if (contest.competition_photo_3.image != "" &&
            contest.competition_photo_3.name.trim() == "") {
            this.errorMessage = "Image Title is required!";
            $("#dialogMsg").show();
            contest.disableButton = false;
            contest.showLoading = false;
            contest.competition_photo_3.nameError = true;
            valid = false;
        }
        if (contest.competition_photo_4.image != "" &&
            contest.competition_photo_4.name.trim() == "") {
            this.errorMessage = "Image is required!";
            $("#dialogMsg").show();
            contest.disableButton = false;
            contest.showLoading = false;
            contest.competition_photo_4.nameError = true;
            valid = false;
        }
        //check old data
        if (contest.competition_photo_1.name.trim() == "" &&
            contest.competition_photo_1.photo_no != 0) {
            this.errorMessage = "Image Title is required!";
            $("#dialogMsg").show();
            contest.disableButton = false;
            contest.showLoading = false;
            contest.competition_photo_1.nameError = true;
            valid = false;
        }
        if (contest.competition_photo_2.name.trim() == "" &&
            contest.competition_photo_2.photo_no != 0) {
            this.errorMessage = "Image Title is required!";
            $("#dialogMsg").show();
            contest.disableButton = false;
            contest.showLoading = false;
            contest.competition_photo_2.nameError = true;
            valid = false;
        }
        if (contest.competition_photo_3.name.trim() == "" &&
            contest.competition_photo_3.photo_no != 0) {
            this.errorMessage = "Image Title is required!";
            $("#dialogMsg").show();
            contest.disableButton = false;
            contest.showLoading = false;
            contest.competition_photo_3.nameError = true;
            valid = false;
        }
        if (contest.competition_photo_4.name.trim() == "" &&
            contest.competition_photo_4.photo_no != 0) {
            this.errorMessage = "Image Title is required!";
            $("#dialogMsg").show();
            contest.disableButton = false;
            contest.showLoading = false;
            contest.competition_photo_4.nameError = true;
            valid = false;
        }
        //check image title first
        if (contest.competition_photo_1.image == "" &&
            contest.competition_photo_1.photo_no == 0 &&
            contest.competition_photo_1.name.trim() != "") {
            this.errorMessage = "Image is required!";
            $("#dialogMsg").show();
            contest.disableButton = false;
            contest.showLoading = false;
            contest.competition_photo_1.error = true;
            valid = false;
        }
        if (contest.competition_photo_2.image == "" &&
            contest.competition_photo_2.photo_no == 0 &&
            contest.competition_photo_2.name.trim() != "") {
            this.errorMessage = "Image is required!";
            $("#dialogMsg").show();
            contest.disableButton = false;
            contest.showLoading = false;
            contest.competition_photo_2.error = true;
            valid = false;
        }
        if (contest.competition_photo_3.image == "" &&
            contest.competition_photo_3.photo_no == 0 &&
            contest.competition_photo_3.name.trim() != "") {
            this.errorMessage = "Image is required!";
            $("#dialogMsg").show();
            contest.disableButton = false;
            contest.showLoading = false;
            contest.competition_photo_3.error = true;
            valid = false;
        }
        if (contest.competition_photo_4.image == "" &&
            contest.competition_photo_4.photo_no == 0 &&
            contest.competition_photo_4.name.trim() != "") {
            this.errorMessage = "Image is required!";
            $("#dialogMsg").show();
            contest.disableButton = false;
            contest.showLoading = false;
            contest.competition_photo_4.error = true;
            valid = false;
        }
        return valid;
    };
    HomeComponent.prototype.hideError = function (photo) {
        photo.nameError = false;
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: "app-home",
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_contest_service__WEBPACK_IMPORTED_MODULE_1__["ContestService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"alert alert-dismissible fade show\" role=\"alert\" *ngIf=\"showMessage\" [class.alert-danger]=\"!isSuccess\"\n   [class.alert-success]=\"isSuccess\">\n   {{message}}\n </div>\n<div class=\"bg-gray container mg-top-lg\" style=\"width:400px\">\n  <form class=\"form-signin font-color-white\" action=\"#\" (ngSubmit)=\"login()\" method=\"POST\">\n    <h1 class=\"h3 mb-3 font-weight-normal text-center\">Please sign in</h1>\n    <label for=\"inputEmail\" class=\"mg-end-none\">Email address <span class=\"star\">*</span></label>\n    <input type=\"email\" id=\"inputEmail\" class=\"form-control bg-dark\" placeholder=\"Email address\" name=\"email\"\n      [(ngModel)]=\"user.email\" [formControl]=\"loginFormValidation.controls['email']\">\n\n      <div class=\"error font-xs\" *ngIf=\"loginFormValidation.controls['email'].hasError('required') &&\n          loginFormValidation.controls['email'].touched\">\n        Email is required\n      </div>\n\n      <div class=\"error font-xs\"\n        *ngIf=\"loginFormValidation.controls['email'].hasError('email') && loginFormValidation.controls['email'].touched\">\n        Invalid Email Format\n      </div>\n    <label for=\"inputPassword\" class=\"mg-end-none mg-top-sm\">Password <span class=\"star\">*</span></label>\n    <input type=\"password\" id=\"inputPassword\" class=\"form-control bg-dark\" placeholder=\"Password\" name=\"password\"\n      [(ngModel)]=\"user.password\" [formControl]=\"loginFormValidation.controls['password']\">\n       <div class=\"error font-xs\" *ngIf=\"loginFormValidation.controls['password'].hasError('required') &&\n          loginFormValidation.controls['password'].touched\">\n         Password is required\n       </div>\n      <br />\n      <button class=\"btn btn-lg btn-dark btn-block border-color mg-end-md\" type=\"submit\"\n        [disabled]=\"!loginFormValidation.valid\">Sign in</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html,\nbody {\n  height: 100%; }\n\nbody {\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-align: center;\n  -ms-flex-pack: center;\n  -webkit-box-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  justify-content: center;\n  padding-top: 40px;\n  padding-bottom: 40px;\n  background-color: #f5f5f5; }\n\n.form-signin {\n  width: 100%;\n  max-width: 330px;\n  padding: 15px;\n  margin: 0 auto; }\n\n.form-signin .checkbox {\n  font-weight: 400; }\n\n.form-signin .form-control {\n  position: relative;\n  box-sizing: border-box;\n  height: auto;\n  padding: 10px;\n  font-size: 16px; }\n\n.form-signin .form-control:focus {\n  z-index: 2; }\n\n.form-signin input {\n  color: white;\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95YWRhbmFyYXVuZy9Eb2N1bWVudHMvaGl2ZS10YWxlbnQtYXNzZXNzbWVudC1waHAtbGFyYXZlbDcvbXBzX2Zyb250ZW5kL3NyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsWUFBWSxFQUFBOztBQUdkO0VBRUUsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZSxFQUFBOztBQUdqQjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFlBQVc7RUFDWCxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQixZQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbn1cblxuLmZvcm0tc2lnbmluIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMzMwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uZm9ybS1zaWduaW4gLmNoZWNrYm94IHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmZvcm0tc2lnbmluIC5mb3JtLWNvbnRyb2wge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uZm9ybS1zaWduaW4gLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5mb3JtLXNpZ25pbiBpbnB1dCB7XG4gIGNvbG9yOndoaXRlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyOm5vbmU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router, fb) {
        this.auth = auth;
        this.router = router;
        this.fb = fb;
        this.user = {};
        this.showMessage = false;
        this.isSuccess = false;
        this.loginFormValidation = fb.group({
            email: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email])
            ],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var that = this;
        var user = this.user;
        var userObj = { email: user.email, password: user.password };
        this.auth.login(userObj).subscribe(function (res) {
            _this.auth.setToken(res.access_token);
            _this.auth.getAuthenticatedUser().subscribe(function (authUser) {
                localStorage.setItem("_loggedInUser", JSON.stringify(authUser));
                _this.auth.setLoggedInUser(authUser);
                _this.router.navigate(["/dashboard"]);
            });
        }, function (error) {
            if (error.status == 422) {
                _this.message = "Please fill required data!";
                _this.showMessage = true;
                _this.isSuccess = false;
            }
            else if (error.status == 401) {
                _this.message = "User Name and Password doesn't match!";
                _this.showMessage = true;
                _this.isSuccess = false;
            }
            else {
                _this.message = "Login Fail!";
                _this.showMessage = true;
                _this.isSuccess = false;
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-login",
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/new-booking/new-booking.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/new-booking/new-booking.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"alert alert-dismissible fade show\" role=\"alert\" *ngIf=\"showMessage\" [class.alert-danger]=\"!isSuccess\"\n    [class.alert-success]=\"isSuccess\">\n    {{message}}\n  </div>\n  <form class=\"form-signin\" action=\"#\" #newBooking=\"ngForm\" (ngSubmit)=\"update(newBooking)\" method=\"POST\">\n    <h1 class=\"h3 mb-3 font-weight-normal text-center font-color-white\">Add New Booking</h1>\n\n    <label for=\"inputEmail\" class=\"mg-end-none\">Customer <span class=\"star\">*</span></label>\n    <select class=\"form-control mg-end-sm form-dropdown bg-gray\" name=\"customer_id\" [(ngModel)]=\"booking.customer_id\">\n      <option [value]=\"customer.id\" *ngFor=\"let customer of customers\">{{customer.name}}</option>\n    </select>\n\n    <label for=\"inputEmail\" class=\"mg-end-none\">Car No <span class=\"star\">*</span></label>\n    <input type=\"text\" id=\"inputCarNo\" class=\"form-control mg-end-sm bg-gray\" placeholder=\"Car No\" required\n      name=\"car_no\" [(ngModel)]=\"booking.car_no\">\n\n    <label for=\"inputEmail\" class=\"mg-end-none\">Services <span class=\"star\">*</span></label>\n    <select multiple class=\"form-control mg-end-sm form-dropdown bg-gray\" name=\"service_id\"\n      [(ngModel)]=\"booking.service_id\">\n      <option [value]=\"service.id\" *ngFor=\"let service of services\">{{service.name}}</option>\n    </select>\n\n    <label for=\"inputEmail\" class=\"mg-end-none\">Duration <span class=\"star\">*</span></label>\n    <input type=\"number\" id=\"inputDuration\" class=\"form-control mg-end-sm bg-gray\"  min=\"1\" max=\"30\" placeholder=\"Duration\" required\n      name=\"duration\" [(ngModel)]=\"booking.duration\">\n\n    <label for=\"inputEmail\" class=\"mg-end-none\">Booking Date<span class=\"star\">*</span></label>\n    <input type=\"date\" id=\"inputName\" class=\"form-control mg-end-sm bg-gray\" placeholder=\"Name\" required\n      name=\"booking_date\" [(ngModel)]=\"booking.booking_date\" >\n\n    <label for=\"inputEmail\" class=\"mg-end-none\">Note <span class=\"star\">*</span></label>\n    <textarea id=\"inputNote\" class=\"form-control mg-end-sm bg-gray\" name=\"note\" [(ngModel)]=\"booking.note\">\n    </textarea>\n\n    <button class=\"btn btn-lg btn-dark btn-block border-color mg-end-md\" type=\"submit\">Save</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/new-booking/new-booking.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/new-booking/new-booking.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95YWRhbmFyYXVuZy9Eb2N1bWVudHMvaGl2ZS10YWxlbnQtYXNzZXNzbWVudC1waHAtbGFyYXZlbDcvbXBzX2Zyb250ZW5kL3NyYy9hcHAvcGFnZXMvbmV3LWJvb2tpbmcvbmV3LWJvb2tpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUNKLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9uZXctYm9va2luZy9uZXctYm9va2luZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVse1xuICAgIGNvbG9yOndoaXRlXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/new-booking/new-booking.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/new-booking/new-booking.component.ts ***!
  \************************************************************/
/*! exports provided: NewBookingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewBookingComponent", function() { return NewBookingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NewBookingComponent = /** @class */ (function () {
    function NewBookingComponent(commonSvc, router) {
        this.commonSvc = commonSvc;
        this.router = router;
        this.customers = [];
        this.services = [];
        this.booking = {};
        this.showMessage = false;
        this.isSuccess = false;
    }
    NewBookingComponent.prototype.ngOnInit = function () {
        this.getCustomers();
        this.getServices();
    };
    NewBookingComponent.prototype.update = function (form) {
        var _this = this;
        var that = this;
        if (form.valid) {
            console.log(form.value);
            this.commonSvc.createBooking(form.value).subscribe(function (res) {
                _this.booking = {};
                _this.message = "Add booking Successfully!";
                _this.showMessage = true;
                _this.isSuccess = true;
                _this.router.navigate(["/dashboard/bookings"]);
            }, function (error) {
                if (error.status == 422) {
                    _this.message =
                        "Please fill required fields!";
                    _this.showMessage = true;
                    _this.isSuccess = false;
                }
                else {
                    _this.message = "Add booking Fail!";
                    _this.showMessage = true;
                    _this.isSuccess = false;
                }
            });
        }
        else {
            this.message =
                "Please fill required fields!";
            this.showMessage = true;
            this.isSuccess = false;
        }
    };
    NewBookingComponent.prototype.getCustomers = function () {
        var that = this;
        this.commonSvc.getCustomers().subscribe(function (res) {
            that.customers = res;
        });
    };
    NewBookingComponent.prototype.getServices = function () {
        var that = this;
        this.commonSvc.getServices().subscribe(function (res) {
            that.services = res;
        });
    };
    NewBookingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-booking',
            template: __webpack_require__(/*! ./new-booking.component.html */ "./src/app/pages/new-booking/new-booking.component.html"),
            styles: [__webpack_require__(/*! ./new-booking.component.scss */ "./src/app/pages/new-booking/new-booking.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NewBookingComponent);
    return NewBookingComponent;
}());



/***/ }),

/***/ "./src/app/pages/new-customer/new-customer.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/new-customer/new-customer.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"alert alert-dismissible fade show\" role=\"alert\" *ngIf=\"showMessage\" [class.alert-danger]=\"!isSuccess\"\n    [class.alert-success]=\"isSuccess\">\n    {{message}}\n  </div>\n <form class=\"form-signin\" action=\"#\" #newCustomer=\"ngForm\" (ngSubmit)=\"update(newCustomer)\" method=\"POST\">\n    <h1 class=\"h3 mb-3 font-weight-normal text-center font-color-white\">Add New Customer</h1>\n    <input type=\"text\" id=\"inputName\" class=\"form-control mg-end-sm bg-gray\" placeholder=\"Name\" required\n      name=\"name\" [(ngModel)]=\"customer.name\">\n    \n    <input type=\"text\" id=\"inputPhoneNo\" class=\"form-control mg-end-sm bg-gray\" placeholder=\"Phone No\" required\n      name=\"phone_no\" [(ngModel)]=\"customer.phone_no\">\n\n      <button class=\"btn btn-lg btn-dark btn-block border-color mg-end-md\" type=\"submit\">Save</button>\n </form>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/new-customer/new-customer.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/new-customer/new-customer.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25ldy1jdXN0b21lci9uZXctY3VzdG9tZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/new-customer/new-customer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/new-customer/new-customer.component.ts ***!
  \**************************************************************/
/*! exports provided: NewCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewCustomerComponent", function() { return NewCustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NewCustomerComponent = /** @class */ (function () {
    function NewCustomerComponent(commonSvc, router) {
        this.commonSvc = commonSvc;
        this.router = router;
        this.customer = {};
        this.showMessage = false;
        this.isSuccess = false;
    }
    NewCustomerComponent.prototype.ngOnInit = function () { };
    NewCustomerComponent.prototype.update = function (form) {
        var _this = this;
        var that = this;
        if (form.valid) {
            console.log(form.value);
            this.commonSvc.createCustomer(form.value).subscribe(function (res) {
                _this.customer = {};
                _this.message = "Add customer Successfully!";
                _this.showMessage = true;
                _this.isSuccess = true;
                _this.router.navigate(["/dashboard/customers"]);
            }, function (error) {
                if (error.status == 422) {
                    _this.message =
                        "Please fill required fields!";
                    _this.showMessage = true;
                    _this.isSuccess = false;
                }
                else {
                    _this.message = "Add customer Fail!";
                    _this.showMessage = true;
                    _this.isSuccess = false;
                }
            });
        }
        else {
            this.message =
                "Please fill required fields!";
            this.showMessage = true;
            this.isSuccess = false;
        }
    };
    NewCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-customer',
            template: __webpack_require__(/*! ./new-customer.component.html */ "./src/app/pages/new-customer/new-customer.component.html"),
            styles: [__webpack_require__(/*! ./new-customer.component.scss */ "./src/app/pages/new-customer/new-customer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NewCustomerComponent);
    return NewCustomerComponent;
}());



/***/ }),

/***/ "./src/app/pages/new-service/new-service.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/new-service/new-service.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"alert alert-dismissible fade show\" role=\"alert\" *ngIf=\"showMessage\" [class.alert-danger]=\"!isSuccess\"\n    [class.alert-success]=\"isSuccess\">\n    {{message}}\n  </div>\n <form class=\"form-signin\" action=\"#\" #newService=\"ngForm\" (ngSubmit)=\"update(newService)\" method=\"POST\">\n    <h1 class=\"h3 mb-3 font-weight-normal text-center font-color-white\">Add New Service</h1>\n    <input type=\"text\" id=\"inputName\" class=\"form-control mg-end-sm bg-gray\" placeholder=\"Name\" required\n      name=\"name\" [(ngModel)]=\"service.name\">\n    \n    <input type=\"text\" id=\"inputEmail\" class=\"form-control mg-end-sm bg-gray\" placeholder=\"Price\" required\n      name=\"price\" [(ngModel)]=\"service.price\">\n    \n      <button class=\"btn btn-lg btn-dark btn-block border-color mg-end-md\" type=\"submit\">Save</button>\n </form>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/new-service/new-service.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/new-service/new-service.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25ldy1zZXJ2aWNlL25ldy1zZXJ2aWNlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/new-service/new-service.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/new-service/new-service.component.ts ***!
  \************************************************************/
/*! exports provided: NewServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewServiceComponent", function() { return NewServiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NewServiceComponent = /** @class */ (function () {
    function NewServiceComponent(commonSvc, router) {
        this.commonSvc = commonSvc;
        this.router = router;
        this.service = {};
        this.showMessage = false;
        this.isSuccess = false;
    }
    NewServiceComponent.prototype.ngOnInit = function () { };
    NewServiceComponent.prototype.update = function (form) {
        var _this = this;
        var that = this;
        if (form.valid) {
            console.log(form.value);
            this.commonSvc.createService(form.value).subscribe(function (res) {
                _this.service = {};
                _this.message = "Add service Successfully!";
                _this.showMessage = true;
                _this.isSuccess = true;
                _this.router.navigate(["/dashboard/services"]);
            }, function (error) {
                if (error.status == 422) {
                    _this.message =
                        "Please fill required fields!";
                    _this.showMessage = true;
                    _this.isSuccess = false;
                }
                else {
                    _this.message = "Add service Fail!";
                    _this.showMessage = true;
                    _this.isSuccess = false;
                }
            });
        }
        else {
            this.message =
                "Please fill required fields!";
            this.showMessage = true;
            this.isSuccess = false;
        }
    };
    NewServiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-service',
            template: __webpack_require__(/*! ./new-service.component.html */ "./src/app/pages/new-service/new-service.component.html"),
            styles: [__webpack_require__(/*! ./new-service.component.scss */ "./src/app/pages/new-service/new-service.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NewServiceComponent);
    return NewServiceComponent;
}());



/***/ }),

/***/ "./src/app/pages/new-user/new-user.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/new-user/new-user.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"alert alert-dismissible fade show\" role=\"alert\" *ngIf=\"showMessage\" [class.alert-danger]=\"!isSuccess\"\n    [class.alert-success]=\"isSuccess\">\n    {{message}}\n  </div>\n <form class=\"form-signin\" action=\"#\" #newUser=\"ngForm\" (ngSubmit)=\"update(newUser)\" method=\"POST\">\n    <h1 class=\"h3 mb-3 font-weight-normal text-center font-color-white\">Add New User</h1>\n    <input type=\"text\" id=\"inputName\" class=\"form-control mg-end-sm bg-gray\" placeholder=\"Name\" required\n      name=\"name\" [(ngModel)]=\"user.name\">\n    \n    <input type=\"email\" id=\"inputEmail\" class=\"form-control mg-end-sm bg-gray\" placeholder=\"Email\" required\n      name=\"email\" [(ngModel)]=\"user.email\">\n\n    <input type=\"password\" id=\"inputPassword\" class=\"form-control mg-end-sm bg-gray\" placeholder=\"Password\" required\n      name=\"password\" [(ngModel)]=\"user.password\">\n    \n      <button class=\"btn btn-lg btn-dark btn-block border-color mg-end-md\" type=\"submit\">Save</button>\n </form>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/new-user/new-user.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/new-user/new-user.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25ldy11c2VyL25ldy11c2VyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/new-user/new-user.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/new-user/new-user.component.ts ***!
  \******************************************************/
/*! exports provided: NewUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewUserComponent", function() { return NewUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NewUserComponent = /** @class */ (function () {
    function NewUserComponent(commonSvc, router) {
        this.commonSvc = commonSvc;
        this.router = router;
        this.user = {};
        this.showMessage = false;
        this.isSuccess = false;
    }
    NewUserComponent.prototype.ngOnInit = function () { };
    NewUserComponent.prototype.update = function (form) {
        var _this = this;
        var that = this;
        if (form.valid) {
            console.log(form.value);
            this.commonSvc.createUser(form.value).subscribe(function (res) {
                _this.user = {};
                _this.message = "Add User Successfully!";
                _this.showMessage = true;
                _this.isSuccess = true;
                _this.router.navigate(["/dashboard/users"]);
            }, function (error) {
                if (error.status == 422) {
                    _this.message =
                        "Please fill required fields!";
                    _this.showMessage = true;
                    _this.isSuccess = false;
                }
                else {
                    _this.message = "Add User Fail!";
                    _this.showMessage = true;
                    _this.isSuccess = false;
                }
            });
        }
        else {
            this.message =
                "Please fill required fields!";
            this.showMessage = true;
            this.isSuccess = false;
        }
    };
    NewUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-user',
            template: __webpack_require__(/*! ./new-user.component.html */ "./src/app/pages/new-user/new-user.component.html"),
            styles: [__webpack_require__(/*! ./new-user.component.scss */ "./src/app/pages/new-user/new-user.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NewUserComponent);
    return NewUserComponent;
}());



/***/ }),

/***/ "./src/app/pages/services/services.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/services/services.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mg-top-lg\">\n  <h1 class=\"h3 mb-3 font-weight-normal text-center font-color-white\">Service List</h1>\n  <button class=\"font-color-white btn btn-sm btn-dark btn-inline border-color\" type=\"submit\"\n    style=\"margin-bottom:10px;\">\n    <a routerLink=\"/dashboard/new-service\">Add New</a>\n  </button>\n  <br />\n  <table class=\"table table-dark\" style=\"padding:10px;\">\n    <thead>\n      <tr>\n        <th scope=\"col\">No</th>\n        <th scope=\"col\">Name</th>\n        <th scope=\"col\">Price</th>\n        <th scope=\"col\">Action</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let service of services; let i = index\">\n        <th scope=\"row\">{{ i+1 }}</th>\n        <td>{{ service.name }}</td>\n        <td>{{ service.price }}</td>\n        <td>\n          <button class=\"font-color-white btn btn-sm btn-dark btn-inline border-color float-left\" type=\"submit\"\n            style=\"margin-bottom:10px; margin-right:10px\">\n            <a routerLink=\"/dashboard/update-service/{{service.id}}\">Edit</a>\n          </button>\n          &nbsp;\n          <button (click)=\"openDialog('dialogDelete', service.id)\"\n            class=\"font-color-white btn btn-sm btn-dark btn-inline border-color float-left\" type=\"submit\"\n            style=\"margin-bottom:10px;\">Delete</button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<!-- Delete modal -->\n<div class=\"modal bd-example-modal-sm\" tabindex=\"-1\" role=\"dialog\" id=\"dialogDelete\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Confirm</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"hideDialog()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>Are You Sure to delete?</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"deleteService()\">Delete</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Delete modal -->\n"

/***/ }),

/***/ "./src/app/pages/services/services.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/services/services.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/services/services.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/services/services.component.ts ***!
  \******************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/common.service */ "./src/app/services/common.service.ts");



var ServicesComponent = /** @class */ (function () {
    function ServicesComponent(commonSvc) {
        this.commonSvc = commonSvc;
        this.services = [];
    }
    ServicesComponent.prototype.ngOnInit = function () {
        this.getServices();
    };
    ServicesComponent.prototype.getServices = function () {
        var that = this;
        this.commonSvc.getServices().subscribe(function (res) {
            that.services = res;
            // that.competitors = competitorList.filter(function(obj) {
            //   if(obj.contest_name)
            //     return obj;
            // });
        });
    };
    ServicesComponent.prototype.openDialog = function (dialogId, id) {
        this.id = id;
        $("#" + dialogId).show();
    };
    ServicesComponent.prototype.hideDialog = function (dialogId) {
        $("#" + dialogId).hide();
    };
    ServicesComponent.prototype.deleteService = function () {
        var _this = this;
        this.commonSvc.deleteService(this.id).subscribe(function (res) {
            _this.getServices();
            _this.hideDialog('dialogDelete');
        }, function (error) {
            _this.hideDialog('dialogDelete');
        });
    };
    ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/pages/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.scss */ "./src/app/pages/services/services.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/pages/update-booking/update-booking.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/update-booking/update-booking.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"alert alert-dismissible fade show\" role=\"alert\" *ngIf=\"showMessage\" [class.alert-danger]=\"!isSuccess\"\n    [class.alert-success]=\"isSuccess\">\n    {{message}}\n  </div>\n <form class=\"form-signin\" action=\"#\" #updateBooking=\"ngForm\" (ngSubmit)=\"update(updateBooking)\" method=\"POST\">\n    <h1 class=\"h3 mb-3 font-weight-normal text-center font-color-white\">Update Booking</h1>\n    <label for=\"inputEmail\" class=\"mg-end-none\">Payment Date <span class=\"star\">*</span></label>\n    <input type=\"date\" id=\"inputName\" class=\"form-control mg-end-sm bg-gray\" placeholder=\"Payment Date\" required\n      name=\"payment_date\" [(ngModel)]=\"booking.payment_date\">\n    \n     <label for=\"inputEmail\" class=\"mg-end-none\">Payment Amount <span class=\"star\">*</span></label>\n    <input type=\"number\" id=\"inputEmail\" class=\"form-control mg-end-sm bg-gray\" placeholder=\"Payment Amount\" required\n      name=\"payment_amount\" [(ngModel)]=\"booking.payment_amount\">\n      \n      <button class=\"btn btn-lg btn-dark btn-block border-color mg-end-md\" type=\"submit\">Update</button>\n </form>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/update-booking/update-booking.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/update-booking/update-booking.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95YWRhbmFyYXVuZy9Eb2N1bWVudHMvaGl2ZS10YWxlbnQtYXNzZXNzbWVudC1waHAtbGFyYXZlbDcvbXBzX2Zyb250ZW5kL3NyYy9hcHAvcGFnZXMvdXBkYXRlLWJvb2tpbmcvdXBkYXRlLWJvb2tpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUNKLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91cGRhdGUtYm9va2luZy91cGRhdGUtYm9va2luZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVse1xuICAgIGNvbG9yOndoaXRlXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/update-booking/update-booking.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/update-booking/update-booking.component.ts ***!
  \******************************************************************/
/*! exports provided: UpdateBookingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateBookingComponent", function() { return UpdateBookingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var UpdateBookingComponent = /** @class */ (function () {
    function UpdateBookingComponent(commonSvc, activeRouter, router) {
        this.commonSvc = commonSvc;
        this.activeRouter = activeRouter;
        this.router = router;
        this.booking = {};
        this.showMessage = false;
        this.isSuccess = false;
    }
    UpdateBookingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRouter.paramMap.subscribe(function (params) {
            _this.id = params.get("id");
        });
    };
    UpdateBookingComponent.prototype.update = function (form) {
        var _this = this;
        var that = this;
        if (form.valid) {
            console.log(form.value);
            this.commonSvc.updateBooking(form.value, this.id).subscribe(function (res) {
                _this.booking = {};
                _this.message = "Update booking Successfully!";
                _this.showMessage = true;
                _this.isSuccess = true;
                _this.router.navigate(["/dashboard/bookings"]);
            }, function (error) {
                if (error.status == 422) {
                    _this.message =
                        "Please fill required fields!";
                    _this.showMessage = true;
                    _this.isSuccess = false;
                }
                else {
                    _this.message = "Update booking Fail!";
                    _this.showMessage = true;
                    _this.isSuccess = false;
                }
            });
        }
        else {
            this.message =
                "Please fill required fields!";
            this.showMessage = true;
            this.isSuccess = false;
        }
    };
    UpdateBookingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-booking',
            template: __webpack_require__(/*! ./update-booking.component.html */ "./src/app/pages/update-booking/update-booking.component.html"),
            styles: [__webpack_require__(/*! ./update-booking.component.scss */ "./src/app/pages/update-booking/update-booking.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UpdateBookingComponent);
    return UpdateBookingComponent;
}());



/***/ }),

/***/ "./src/app/pages/update-customer/update-customer.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/update-customer/update-customer.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"alert alert-dismissible fade show\" role=\"alert\" *ngIf=\"showMessage\" [class.alert-danger]=\"!isSuccess\"\n    [class.alert-success]=\"isSuccess\">\n    {{message}}\n  </div>\n <form class=\"form-signin\" action=\"#\" #newCustomer=\"ngForm\" (ngSubmit)=\"update(newCustomer)\" method=\"POST\">\n    <h1 class=\"h3 mb-3 font-weight-normal text-center font-color-white\">Update Customer</h1>\n    <input type=\"text\" id=\"inputName\" class=\"form-control mg-end-sm bg-gray\" placeholder=\"Name\" required\n      name=\"name\" [(ngModel)]=\"customer.name\">\n    \n    <input type=\"text\" id=\"inputPhoneNo\" class=\"form-control mg-end-sm bg-gray\" placeholder=\"Phone No\" required\n      name=\"phone_no\" [(ngModel)]=\"customer.phone_no\">\n      \n      <button class=\"btn btn-lg btn-dark btn-block border-color mg-end-md\" type=\"submit\">Update</button>\n </form>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/update-customer/update-customer.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/update-customer/update-customer.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VwZGF0ZS1jdXN0b21lci91cGRhdGUtY3VzdG9tZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/update-customer/update-customer.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/update-customer/update-customer.component.ts ***!
  \********************************************************************/
/*! exports provided: UpdateCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCustomerComponent", function() { return UpdateCustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var UpdateCustomerComponent = /** @class */ (function () {
    function UpdateCustomerComponent(commonSvc, activeRouter, router) {
        this.commonSvc = commonSvc;
        this.activeRouter = activeRouter;
        this.router = router;
        this.customer = {};
        this.showMessage = false;
        this.isSuccess = false;
    }
    UpdateCustomerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRouter.paramMap.subscribe(function (params) {
            _this.id = params.get("id");
            _this.getCustomer();
        });
    };
    UpdateCustomerComponent.prototype.getCustomer = function () {
        var that = this;
        this.commonSvc.getCustomer(this.id).subscribe(function (res) {
            that.customer = res;
        });
    };
    UpdateCustomerComponent.prototype.update = function (form) {
        var _this = this;
        var that = this;
        if (form.valid) {
            console.log(form.value);
            this.commonSvc.updateCustomer(form.value, this.id).subscribe(function (res) {
                _this.message = "Update customer Successfully!";
                _this.showMessage = true;
                _this.isSuccess = true;
                _this.router.navigate(["/dashboard/customers"]);
            }, function (error) {
                if (error.status == 422) {
                    _this.message =
                        "Please fill required fields!";
                    _this.showMessage = true;
                    _this.isSuccess = false;
                }
                else {
                    _this.message = "Update customer Fail!";
                    _this.showMessage = true;
                    _this.isSuccess = false;
                }
            });
        }
        else {
            this.message =
                "Please fill required fields!";
            this.showMessage = true;
            this.isSuccess = false;
        }
    };
    UpdateCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-customer',
            template: __webpack_require__(/*! ./update-customer.component.html */ "./src/app/pages/update-customer/update-customer.component.html"),
            styles: [__webpack_require__(/*! ./update-customer.component.scss */ "./src/app/pages/update-customer/update-customer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UpdateCustomerComponent);
    return UpdateCustomerComponent;
}());



/***/ }),

/***/ "./src/app/pages/update-service/update-service.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/update-service/update-service.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"alert alert-dismissible fade show\" role=\"alert\" *ngIf=\"showMessage\" [class.alert-danger]=\"!isSuccess\"\n    [class.alert-success]=\"isSuccess\">\n    {{message}}\n  </div>\n <form class=\"form-signin\" action=\"#\" #newService=\"ngForm\" (ngSubmit)=\"update(newService)\" method=\"POST\">\n    <h1 class=\"h3 mb-3 font-weight-normal text-center font-color-white\">Update Service</h1>\n    <input type=\"text\" id=\"inputName\" class=\"form-control mg-end-sm bg-gray\" placeholder=\"Name\" required\n      name=\"name\" [(ngModel)]=\"service.name\">\n    \n    <input type=\"number\" id=\"inputPrice\" class=\"form-control mg-end-sm bg-gray\" placeholder=\"Price\" required\n      name=\"price\" [(ngModel)]=\"service.price\">\n      \n      <button class=\"btn btn-lg btn-dark btn-block border-color mg-end-md\" type=\"submit\">Update</button>\n </form>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/update-service/update-service.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/update-service/update-service.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VwZGF0ZS1zZXJ2aWNlL3VwZGF0ZS1zZXJ2aWNlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/update-service/update-service.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/update-service/update-service.component.ts ***!
  \******************************************************************/
/*! exports provided: UpdateServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateServiceComponent", function() { return UpdateServiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var UpdateServiceComponent = /** @class */ (function () {
    function UpdateServiceComponent(commonSvc, activeRouter, router) {
        this.commonSvc = commonSvc;
        this.activeRouter = activeRouter;
        this.router = router;
        this.service = {};
        this.showMessage = false;
        this.isSuccess = false;
    }
    UpdateServiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRouter.paramMap.subscribe(function (params) {
            _this.id = params.get("id");
            _this.getService();
        });
    };
    UpdateServiceComponent.prototype.getService = function () {
        var that = this;
        this.commonSvc.getService(this.id).subscribe(function (res) {
            that.service = res;
        });
    };
    UpdateServiceComponent.prototype.update = function (form) {
        var _this = this;
        var that = this;
        if (form.valid) {
            console.log(form.value);
            this.commonSvc.updateService(form.value, this.id).subscribe(function (res) {
                _this.message = "Update service Successfully!";
                _this.showMessage = true;
                _this.isSuccess = true;
                _this.router.navigate(["/dashboard/services"]);
            }, function (error) {
                if (error.status == 422) {
                    _this.message =
                        "Please fill required fields!";
                    _this.showMessage = true;
                    _this.isSuccess = false;
                }
                else {
                    _this.message = "Update service Fail!";
                    _this.showMessage = true;
                    _this.isSuccess = false;
                }
            });
        }
        else {
            this.message =
                "Please fill required fields!";
            this.showMessage = true;
            this.isSuccess = false;
        }
    };
    UpdateServiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-service',
            template: __webpack_require__(/*! ./update-service.component.html */ "./src/app/pages/update-service/update-service.component.html"),
            styles: [__webpack_require__(/*! ./update-service.component.scss */ "./src/app/pages/update-service/update-service.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UpdateServiceComponent);
    return UpdateServiceComponent;
}());



/***/ }),

/***/ "./src/app/pages/update-user/update-user.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/update-user/update-user.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"alert alert-dismissible fade show\" role=\"alert\" *ngIf=\"showMessage\" [class.alert-danger]=\"!isSuccess\"\n    [class.alert-success]=\"isSuccess\">\n    {{message}}\n  </div>\n <form class=\"form-signin\" action=\"#\" #newUser=\"ngForm\" (ngSubmit)=\"update(newUser)\" method=\"POST\">\n    <h1 class=\"h3 mb-3 font-weight-normal text-center font-color-white\">Update User</h1>\n    <input type=\"text\" id=\"inputName\" class=\"form-control mg-end-sm bg-gray\" placeholder=\"Name\" required\n      name=\"name\" [(ngModel)]=\"user.name\">\n    \n    <input type=\"email\" id=\"inputEmail\" class=\"form-control mg-end-sm bg-gray\" placeholder=\"Email\" required\n      name=\"email\" [(ngModel)]=\"user.email\">\n      \n      <button class=\"btn btn-lg btn-dark btn-block border-color mg-end-md\" type=\"submit\">Update</button>\n </form>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/update-user/update-user.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/update-user/update-user.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VwZGF0ZS11c2VyL3VwZGF0ZS11c2VyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/update-user/update-user.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/update-user/update-user.component.ts ***!
  \************************************************************/
/*! exports provided: UpdateUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserComponent", function() { return UpdateUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/common.service */ "./src/app/services/common.service.ts");




var UpdateUserComponent = /** @class */ (function () {
    function UpdateUserComponent(commonSvc, activeRouter, router) {
        this.commonSvc = commonSvc;
        this.activeRouter = activeRouter;
        this.router = router;
        this.user = {};
        this.showMessage = false;
        this.isSuccess = false;
    }
    UpdateUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRouter.paramMap.subscribe(function (params) {
            _this.id = params.get("id");
            _this.getUser();
        });
    };
    UpdateUserComponent.prototype.getUser = function () {
        var that = this;
        this.commonSvc.getUser(this.id).subscribe(function (res) {
            that.user = res;
        });
    };
    UpdateUserComponent.prototype.update = function (form) {
        var _this = this;
        var that = this;
        if (form.valid) {
            console.log(form.value);
            this.commonSvc.updateUser(form.value, this.id).subscribe(function (res) {
                _this.message = "Update User Successfully!";
                _this.showMessage = true;
                _this.isSuccess = true;
                _this.router.navigate(["/dashboard/users"]);
            }, function (error) {
                if (error.status == 422) {
                    _this.message =
                        "Please fill required fields!";
                    _this.showMessage = true;
                    _this.isSuccess = false;
                }
                else {
                    _this.message = "Update User Fail!";
                    _this.showMessage = true;
                    _this.isSuccess = false;
                }
            });
        }
        else {
            this.message =
                "Please fill required fields!";
            this.showMessage = true;
            this.isSuccess = false;
        }
    };
    UpdateUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-user',
            template: __webpack_require__(/*! ./update-user.component.html */ "./src/app/pages/update-user/update-user.component.html"),
            styles: [__webpack_require__(/*! ./update-user.component.scss */ "./src/app/pages/update-user/update-user.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UpdateUserComponent);
    return UpdateUserComponent;
}());



/***/ }),

/***/ "./src/app/pages/users/users.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/users/users.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mg-top-lg\">\n  <h1 class=\"h3 mb-3 font-weight-normal text-center font-color-white\">Users List</h1>\n  <button class=\"font-color-white btn btn-sm btn-dark btn-inline border-color\" type=\"submit\"\n    style=\"margin-bottom:10px;\">\n    <a routerLink=\"/dashboard/new-user\">Add New</a>\n  </button>\n  <br />\n  <table class=\"table table-dark\" style=\"padding:10px;\">\n    <thead>\n      <tr>\n        <th scope=\"col\">No</th>\n        <th scope=\"col\">Name</th>\n        <th scope=\"col\">Email</th>\n        <th scope=\"col\">Action</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let user of users; let i = index\">\n        <th scope=\"row\">{{ i+1 }}</th>\n        <td>{{ user.name }}</td>\n        <td>{{ user.email }}</td>\n        <td>\n          <button class=\"font-color-white btn btn-sm btn-dark btn-inline border-color float-left\" type=\"submit\"\n            style=\"margin-bottom:10px; margin-right:10px\">\n            <a routerLink=\"/dashboard/update-user/{{user.id}}\">Edit</a></button>\n          &nbsp;\n          <button (click)=\"openDialog('dialogDelete', user.id)\"\n            class=\"font-color-white btn btn-sm btn-dark btn-inline border-color float-left\" type=\"submit\"\n            style=\"margin-bottom:10px;\">Delete</button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<!-- Delete modal -->\n<div class=\"modal bd-example-modal-sm\" tabindex=\"-1\" role=\"dialog\" id=\"dialogDelete\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Confirm</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"hideDialog()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>Are You Sure to delete?</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"deleteUser()\">Delete</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Delete modal -->\n"

/***/ }),

/***/ "./src/app/pages/users/users.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/users/users.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/users/users.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/users/users.component.ts ***!
  \************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/common.service */ "./src/app/services/common.service.ts");



var UsersComponent = /** @class */ (function () {
    function UsersComponent(commonSvc) {
        this.commonSvc = commonSvc;
        this.users = [];
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UsersComponent.prototype.getUsers = function () {
        var that = this;
        this.commonSvc.getUsers().subscribe(function (res) {
            that.users = res;
        });
    };
    UsersComponent.prototype.openDialog = function (dialogId, id) {
        this.id = id;
        $("#" + dialogId).show();
    };
    UsersComponent.prototype.hideDialog = function (dialogId) {
        $("#" + dialogId).hide();
    };
    UsersComponent.prototype.deleteUser = function () {
        var _this = this;
        this.commonSvc.deleteUser(this.id).subscribe(function (res) {
            _this.getUsers();
            _this.hideDialog('dialogDelete');
        }, function (error) {
            _this.hideDialog('dialogDelete');
        });
    };
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/pages/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.scss */ "./src/app/pages/users/users.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/pages/verify/verify.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/verify/verify.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mg-top-lg\" style=\"width:400px\">\n  <p class=\"font-color-white text-center\">Click verify button to verify your acccount.</p>\n  <button class=\"btn btn-lg btn-dark btn-block border-color mg-end-md\" (click)=\"verify()\">Verify</button>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/verify/verify.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/verify/verify.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZlcmlmeS92ZXJpZnkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/verify/verify.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/verify/verify.component.ts ***!
  \**************************************************/
/*! exports provided: VerifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyComponent", function() { return VerifyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





var VerifyComponent = /** @class */ (function () {
    function VerifyComponent(activeRouter, auth, router) {
        this.activeRouter = activeRouter;
        this.auth = auth;
        this.router = router;
    }
    VerifyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRouter.paramMap.subscribe(function (params) {
            _this.verifyKey = params.get("verify_key");
            _this.id = params.get("id");
        });
    };
    VerifyComponent.prototype.verify = function () {
        var _this = this;
        this.auth.verifyEmail(this.id, this.verifyKey).subscribe(function (res) {
            _this.auth.setToken(res.access_token);
            _this.auth.getAuthenticatedUser().subscribe(function (authUser) {
                localStorage.setItem("_loggedInUser", JSON.stringify(authUser));
                _this.auth.setLoggedInUser(authUser);
                _this.router.navigate(["/dashboard"]);
            });
        });
    };
    VerifyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-verify",
            template: __webpack_require__(/*! ./verify.component.html */ "./src/app/pages/verify/verify.component.html"),
            styles: [__webpack_require__(/*! ./verify.component.scss */ "./src/app/pages/verify/verify.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], VerifyComponent);
    return VerifyComponent;
}());



/***/ }),

/***/ "./src/app/public.guard.ts":
/*!*********************************!*\
  !*** ./src/app/public.guard.ts ***!
  \*********************************/
/*! exports provided: PublicGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicGuard", function() { return PublicGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var PublicGuard = /** @class */ (function () {
    function PublicGuard(router) {
        this.router = router;
    }
    PublicGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem("_access_token")) {
            this.router.navigate(["dashboard"]);
            return false;
        }
        return true;
    };
    PublicGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PublicGuard);
    return PublicGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.token = localStorage.getItem("_access_token") || null;
        this.loggedInUser = localStorage.getItem("_loggedInUser")
            ? JSON.parse(localStorage.getItem("_loggedInUser"))
            : {};
        this.config = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"];
    }
    AuthService.prototype.getAuthHeader = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Content-Type": "application/json",
                Authorization: "Bearer " + this.token
            })
        };
        return httpOptions;
    };
    AuthService.prototype.getFormDataAuthHeader = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: "Bearer " + this.token
            })
        };
        return httpOptions;
    };
    AuthService.prototype.setToken = function (token) {
        this.token = token;
        localStorage.setItem("_access_token", token);
    };
    AuthService.prototype.getToken = function () {
        return this.token;
    };
    AuthService.prototype.setLoggedInUser = function (user) {
        this.loggedInUser = user;
        localStorage.setItem("_loggedInUser", JSON.stringify(user));
    };
    AuthService.prototype.login = function (userObj) {
        var url = this.config.baseUrl + "login";
        return this.http.post(url, userObj);
    };
    AuthService.prototype.logout = function () {
        this.loggedInUser = null;
        localStorage.removeItem("_access_token");
        localStorage.removeItem("_loggedInUser");
        var url = this.config.baseUrl + "logout";
        return this.http.post(url, {}, this.getAuthHeader());
    };
    AuthService.prototype.refreshToken = function () {
        var url = this.config.baseUrl + "refresh";
        return this.http.post(url, {}, this.getAuthHeader());
    };
    AuthService.prototype.getAuthenticatedUser = function () {
        var url = this.config.baseUrl + "me";
        return this.http.get(url, this.getAuthHeader());
    };
    AuthService.prototype.isLoggedIn = function () {
        return this.loggedInUser ? true : false;
    };
    AuthService.prototype.register = function (userObj) {
        var url = this.config.baseUrl + "register";
        return this.http.post(url, userObj);
    };
    AuthService.prototype.updateInfo = function (userObj) {
        var url = this.config.baseUrl + "updateInfo";
        return this.http.put(url, userObj, this.getAuthHeader());
    };
    AuthService.prototype.uploadPayment = function (userObj) {
        var url = this.config.baseUrl + "addPayment";
        return this.http.post(url, userObj, this.getAuthHeader());
    };
    AuthService.prototype.changePassword = function (userObj) {
        var url = this.config.baseUrl + "changePassword";
        return this.http.post(url, userObj, this.getAuthHeader());
    };
    AuthService.prototype.verifyEmail = function (id, key) {
        var url = this.config.baseUrl + "emailVerify";
        return this.http.put(url, { verify_key: key, id: id });
    };
    AuthService.prototype.forgotPassword = function (email) {
        var url = this.config.baseUrl + "forgotPassword";
        return this.http.put(url, { email: email });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/common.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/common.service.ts ***!
  \********************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var CommonService = /** @class */ (function () {
    function CommonService(http, auth) {
        this.http = http;
        this.auth = auth;
        this.config = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"];
    }
    /* users */
    CommonService.prototype.getUsers = function () {
        var url = this.config.baseUrl + "users";
        return this.http.get(url, this.auth.getAuthHeader());
    };
    CommonService.prototype.createUser = function (form) {
        var url = this.config.baseUrl + "users";
        return this.http.post(url, form, this.auth.getAuthHeader());
    };
    CommonService.prototype.updateUser = function (form, id) {
        var url = this.config.baseUrl + "users" + "/" + id;
        return this.http.put(url, form, this.auth.getAuthHeader());
    };
    CommonService.prototype.deleteUser = function (id) {
        var url = this.config.baseUrl + "users/" + id;
        return this.http.delete(url, this.auth.getAuthHeader());
    };
    CommonService.prototype.getUser = function (id) {
        var url = this.config.baseUrl + "users" + "/" + id;
        return this.http.get(url, this.auth.getAuthHeader());
    };
    /* customers */
    CommonService.prototype.getCustomers = function () {
        var url = this.config.baseUrl + "customers";
        return this.http.get(url, this.auth.getAuthHeader());
    };
    CommonService.prototype.createCustomer = function (form) {
        var url = this.config.baseUrl + "customers";
        return this.http.post(url, form, this.auth.getAuthHeader());
    };
    CommonService.prototype.updateCustomer = function (form, id) {
        var url = this.config.baseUrl + "customers" + "/" + id;
        return this.http.put(url, form, this.auth.getAuthHeader());
    };
    CommonService.prototype.deleteCustomer = function (id) {
        var url = this.config.baseUrl + "customers/" + id;
        return this.http.delete(url, this.auth.getAuthHeader());
    };
    CommonService.prototype.getCustomer = function (id) {
        var url = this.config.baseUrl + "customers" + "/" + id;
        return this.http.get(url, this.auth.getAuthHeader());
    };
    /* services */
    CommonService.prototype.getServices = function () {
        var url = this.config.baseUrl + "services";
        return this.http.get(url, this.auth.getAuthHeader());
    };
    CommonService.prototype.createService = function (form) {
        var url = this.config.baseUrl + "services";
        return this.http.post(url, form, this.auth.getAuthHeader());
    };
    CommonService.prototype.updateService = function (form, id) {
        var url = this.config.baseUrl + "services" + "/" + id;
        return this.http.put(url, form, this.auth.getAuthHeader());
    };
    CommonService.prototype.deleteService = function (id) {
        var url = this.config.baseUrl + "services/" + id;
        return this.http.delete(url, this.auth.getAuthHeader());
    };
    CommonService.prototype.getService = function (id) {
        var url = this.config.baseUrl + "services" + "/" + id;
        return this.http.get(url, this.auth.getAuthHeader());
    };
    /* Booking */
    CommonService.prototype.getBookings = function () {
        var url = this.config.baseUrl + "bookings";
        return this.http.get(url, this.auth.getAuthHeader());
    };
    CommonService.prototype.createBooking = function (form) {
        var url = this.config.baseUrl + "bookings";
        return this.http.post(url, form, this.auth.getAuthHeader());
    };
    CommonService.prototype.updateBooking = function (form, id) {
        var url = this.config.baseUrl + "bookings" + "/" + id;
        return this.http.put(url, form, this.auth.getAuthHeader());
    };
    CommonService.prototype.deleteBooking = function (id) {
        var url = this.config.baseUrl + "bookings/" + id;
        return this.http.delete(url, this.auth.getAuthHeader());
    };
    CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ "./src/app/services/contest.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/contest.service.ts ***!
  \*********************************************/
/*! exports provided: ContestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContestService", function() { return ContestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var ContestService = /** @class */ (function () {
    function ContestService(http, auth) {
        this.http = http;
        this.auth = auth;
        this.config = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"];
    }
    ContestService.prototype.getAllContests = function () {
        var url = this.config.baseUrl + "contests/getAll";
        return this.http.get(url, this.auth.getAuthHeader());
    };
    ContestService.prototype.saveCompletition = function (form) {
        var url = this.config.baseUrl + "competitions";
        return this.http.post(url, form, this.auth.getAuthHeader());
    };
    ContestService.prototype.updateCompletition = function (form, id) {
        var url = this.config.baseUrl + "competitions" + "/" + id;
        return this.http.put(url, form, this.auth.getAuthHeader());
    };
    ContestService.prototype.deleteImage = function (id, mainContestId, photo) {
        var url = this.config.baseUrl + "competitions/deleteImage";
        return this.http.post(url, { id: id, main_contest_id: mainContestId, photo_no: photo }, this.auth.getAuthHeader());
    };
    ContestService.prototype.competitors = function () {
        var url = this.config.baseUrl + "services";
        return this.http.get(url);
    };
    ContestService.prototype.contestReport = function () {
        var url = this.config.baseUrl + "totalCompetition";
        return this.http.get(url);
    };
    ContestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], ContestService);
    return ContestService;
}());



/***/ }),

/***/ "./src/app/services/country.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/country.service.ts ***!
  \*********************************************/
/*! exports provided: CountryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryService", function() { return CountryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var CountryService = /** @class */ (function () {
    function CountryService(http, auth) {
        this.http = http;
        this.auth = auth;
        this.config = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"];
    }
    CountryService.prototype.getAllCountry = function () {
        var url = this.config.baseUrl + "countries/getAll";
        return this.http.get(url);
    };
    CountryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], CountryService);
    return CountryService;
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
    production: false,
    baseUrl: "http://localhost:8000/api/"
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

module.exports = __webpack_require__(/*! /Users/yadanaraung/Documents/hive-talent-assessment-php-laravel7/mps_frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map