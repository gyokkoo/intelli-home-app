(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-navigation-main-navigation-module"],{

/***/ "./src/app/main-navigation/main-navigation-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/main-navigation/main-navigation-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: MainNavigationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavigationRoutingModule", function() { return MainNavigationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _main_navigation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-navigation.component */ "./src/app/main-navigation/main-navigation.component.ts");





const routes = [
    {
        path: 'tabs',
        component: _main_navigation_component__WEBPACK_IMPORTED_MODULE_2__["MainNavigationComponent"],
        children: [
            {
                path: 'home',
                loadChildren: () => Promise.all(/*! import() | pages-home-page-home-page-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-home-page-home-page-module")]).then(__webpack_require__.bind(null, /*! ../pages/home-page/home-page.module */ "./src/app/pages/home-page/home-page.module.ts")).then(m => m.HomePageModule)
            },
            {
                path: 'rooms',
                loadChildren: () => Promise.all(/*! import() | pages-rooms-page-rooms-page-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-rooms-page-rooms-page-module")]).then(__webpack_require__.bind(null, /*! ../pages/rooms-page/rooms-page.module */ "./src/app/pages/rooms-page/rooms-page.module.ts")).then(m => m.RoomsPageModule)
            },
            {
                path: 'analytics',
                loadChildren: () => Promise.all(/*! import() | pages-analytics-page-analytics-page-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-analytics-page-analytics-page-module")]).then(__webpack_require__.bind(null, /*! ../pages/analytics-page/analytics-page.module */ "./src/app/pages/analytics-page/analytics-page.module.ts")).then(m => m.AnalyticsPageModule)
            },
            {
                path: 'settings',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-settings-page-settings-page-module */ "pages-settings-page-settings-page-module").then(__webpack_require__.bind(null, /*! ../pages/settings-page/settings-page.module */ "./src/app/pages/settings-page/settings-page.module.ts")).then(m => m.SettingsPageModule)
            },
            {
                path: '',
                redirectTo: '/tabs/home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
    }
];
class MainNavigationRoutingModule {
}
MainNavigationRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MainNavigationRoutingModule });
MainNavigationRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MainNavigationRoutingModule_Factory(t) { return new (t || MainNavigationRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainNavigationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainNavigationRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/main-navigation/main-navigation.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/main-navigation/main-navigation.component.ts ***!
  \**************************************************************/
/*! exports provided: MainNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavigationComponent", function() { return MainNavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



class MainNavigationComponent {
    constructor() {
    }
}
MainNavigationComponent.ɵfac = function MainNavigationComponent_Factory(t) { return new (t || MainNavigationComponent)(); };
MainNavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainNavigationComponent, selectors: [["app-tabs"]], decls: 10, vars: 0, consts: [["slot", "bottom"], ["tab", "home"], ["name", "home"], ["tab", "rooms"], ["name", "list"], ["tab", "analytics"], ["name", "pulse"], ["tab", "settings"], ["name", "settings"]], template: function MainNavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-tab-bar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-tab-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-tab-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ion-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-tab-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ion-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-tab-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "ion-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTabs"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTabBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTabButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4tbmF2aWdhdGlvbi9tYWluLW5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainNavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tabs',
                templateUrl: 'main-navigation.component.html',
                styleUrls: ['main-navigation.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/main-navigation/main-navigation.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/main-navigation/main-navigation.module.ts ***!
  \***********************************************************/
/*! exports provided: MainNavigationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavigationModule", function() { return MainNavigationModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _main_navigation_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-navigation-routing.module */ "./src/app/main-navigation/main-navigation-routing.module.ts");
/* harmony import */ var _main_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-navigation.component */ "./src/app/main-navigation/main-navigation.component.ts");







class MainNavigationModule {
}
MainNavigationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MainNavigationModule });
MainNavigationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function MainNavigationModule_Factory(t) { return new (t || MainNavigationModule)(); }, imports: [[
            _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _main_navigation_routing_module__WEBPACK_IMPORTED_MODULE_4__["MainNavigationRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MainNavigationModule, { declarations: [_main_navigation_component__WEBPACK_IMPORTED_MODULE_5__["MainNavigationComponent"]], imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _main_navigation_routing_module__WEBPACK_IMPORTED_MODULE_4__["MainNavigationRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MainNavigationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _main_navigation_routing_module__WEBPACK_IMPORTED_MODULE_4__["MainNavigationRoutingModule"]
                ],
                declarations: [_main_navigation_component__WEBPACK_IMPORTED_MODULE_5__["MainNavigationComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=main-navigation-main-navigation-module-es2015.js.map