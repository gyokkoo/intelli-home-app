(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-page-home-page-module"],{

/***/ "./src/app/pages/home-page/home-page-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/home-page/home-page-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-page.component */ "./src/app/pages/home-page/home-page.component.ts");





const routes = [
    {
        path: '',
        component: _home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"],
    }
];
class HomePageRoutingModule {
}
HomePageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomePageRoutingModule });
HomePageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomePageRoutingModule_Factory(t) { return new (t || HomePageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomePageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.ts ***!
  \********************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _page_view_home_page_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-view/home-page-view.component */ "./src/app/pages/home-page/page-view/home-page-view.component.ts");




class HomePageComponent {
    constructor() {
        this.pageTitle = 'Ivan\'s Smart Home';
    }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-tab1"]], decls: 10, vars: 2, consts: [[3, "translucent"], [3, "fullscreen"], [1, "page-container"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Ivan's");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Smart home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-home-page-view");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translucent", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullscreen", true);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _page_view_home_page_view_component__WEBPACK_IMPORTED_MODULE_2__["HomePageViewComponent"]], styles: [".page-container[_ngcontent-%COMP%] {\n  padding-top: 4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zeXVsZXltYW5vdmcvR2l0SHViL2ludGVsbGktaG9tZS1hcHAvc3JjL2FwcC9wYWdlcy9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csaUJBQUE7QUNDSCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1jb250YWluZXIge1xuICAgcGFkZGluZy10b3A6IDRyZW07XG59XG4iLCIucGFnZS1jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogNHJlbTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tab1',
                templateUrl: 'home-page.component.html',
                styleUrls: ['home-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/home-page/home-page.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/home-page/home-page.module.ts ***!
  \*****************************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _home_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-page-routing.module */ "./src/app/pages/home-page/home-page-routing.module.ts");
/* harmony import */ var _page_view_home_page_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-view/home-page-view.component */ "./src/app/pages/home-page/page-view/home-page-view.component.ts");
/* harmony import */ var _home_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home-page.component */ "./src/app/pages/home-page/home-page.component.ts");









class HomePageModule {
}
HomePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HomePageModule });
HomePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function HomePageModule_Factory(t) { return new (t || HomePageModule)(); }, imports: [[
            _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_4__["ExploreContainerComponentModule"],
            _home_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomePageModule, { declarations: [_home_page_component__WEBPACK_IMPORTED_MODULE_7__["HomePageComponent"],
        _page_view_home_page_view_component__WEBPACK_IMPORTED_MODULE_6__["HomePageViewComponent"]], imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_4__["ExploreContainerComponentModule"],
        _home_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomePageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_4__["ExploreContainerComponentModule"],
                    _home_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]
                ],
                declarations: [
                    _home_page_component__WEBPACK_IMPORTED_MODULE_7__["HomePageComponent"],
                    _page_view_home_page_view_component__WEBPACK_IMPORTED_MODULE_6__["HomePageViewComponent"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/home-page/page-view/home-page-view.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/home-page/page-view/home-page-view.component.ts ***!
  \***********************************************************************/
/*! exports provided: HomePageViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageViewComponent", function() { return HomePageViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HomePageViewComponent {
    constructor() { }
    ngOnInit() { }
}
HomePageViewComponent.ɵfac = function HomePageViewComponent_Factory(t) { return new (t || HomePageViewComponent)(); };
HomePageViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePageViewComponent, selectors: [["app-home-page-view"]], decls: 42, vars: 0, consts: [[1, "quick-status-text"], [1, "material-icons", "refresh-icon"], [1, "system-status"], [1, "section-wrapper"], [1, "block-item", "blue-icon"], [1, "material-icons", "status-icon"], [1, "block-item"], [1, "item-header"], [1, "item-description"], [1, "block-item", "warning-icon"]], template: function HomePageViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Quick status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " refresh ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "done");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Security system");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " No issues found ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "timeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "124.23 kWh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Monthly power consumption ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "battery_charging_full");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Backup battery: 76%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " 1h and 34 sec until full charge ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Firmware update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Available for your Bosch BHI160BP ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".quick-status-text[_ngcontent-%COMP%] {\n  font-size: x-large;\n  color: #3f51b5;\n}\n\n.refresh-icon[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  font-size: 20px;\n}\n\n.section-wrapper[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n\n.section-wrapper[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n\n.section-wrapper[_ngcontent-%COMP%]   .block-item[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.section-wrapper[_ngcontent-%COMP%]   .item-header[_ngcontent-%COMP%] {\n  padding-left: 1rem;\n  font-size: larger;\n  text-align: left;\n}\n\n.section-wrapper[_ngcontent-%COMP%]   .item-description[_ngcontent-%COMP%] {\n  padding-left: 1rem;\n  font-size: smaller;\n  color: #6c757d;\n  width: 250px;\n  text-align: left;\n}\n\n.section-wrapper[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%] {\n  font-size: larger;\n}\n\n.section-wrapper[_ngcontent-%COMP%]   .warning-icon[_ngcontent-%COMP%] {\n  color: orange;\n}\n\n.section-wrapper[_ngcontent-%COMP%]   .blue-icon[_ngcontent-%COMP%] {\n  color: #3f51b5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zeXVsZXltYW5vdmcvR2l0SHViL2ludGVsbGktaG9tZS1hcHAvc3JjL2FwcC9wYWdlcy9ob21lLXBhZ2UvcGFnZS12aWV3L2hvbWUtcGFnZS12aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lLXBhZ2UvcGFnZS12aWV3L2hvbWUtcGFnZS12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csa0JBQUE7RUFDQSxjQUFBO0FDQ0g7O0FERUE7RUFDRyxrQkFBQTtFQUNBLGVBQUE7QUNDSDs7QURFQTtFQUNHLGlCQUFBO0FDQ0g7O0FEQ0c7RUFDRyxlQUFBO0FDQ047O0FERUc7RUFDRyxxQkFBQTtBQ0FOOztBREdHO0VBQ0csa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDRE47O0FESUc7RUFDRyxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0ZOOztBREtHO0VBQ0csaUJBQUE7QUNITjs7QURNRztFQUNHLGFBQUE7QUNKTjs7QURPRztFQUNHLGNBQUE7QUNMTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUtcGFnZS9wYWdlLXZpZXcvaG9tZS1wYWdlLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucXVpY2stc3RhdHVzLXRleHQge1xuICAgZm9udC1zaXplOiB4LWxhcmdlO1xuICAgY29sb3I6ICMzZjUxYjU7XG59XG5cbi5yZWZyZXNoLWljb24ge1xuICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uc2VjdGlvbi13cmFwcGVyIHtcbiAgIHBhZGRpbmctdG9wOiAyMHB4O1xuXG4gICAuc3RhdHVzLWljb24ge1xuICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgfVxuXG4gICAuYmxvY2staXRlbSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICB9XG4gICBcbiAgIC5pdGVtLWhlYWRlciB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgICBmb250LXNpemU6IGxhcmdlcjtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICB9XG5cbiAgIC5pdGVtLWRlc2NyaXB0aW9uIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcbiAgICAgIGNvbG9yOiAjNmM3NTdkO1xuICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgIH1cbiAgIFxuICAgLml0ZW0taWNvbiB7XG4gICAgICBmb250LXNpemU6IGxhcmdlcjtcbiAgIH1cbiAgIFxuICAgLndhcm5pbmctaWNvbiB7XG4gICAgICBjb2xvcjogb3JhbmdlO1xuICAgfVxuICAgXG4gICAuYmx1ZS1pY29uIHtcbiAgICAgIGNvbG9yOiAjM2Y1MWI1O1xuICAgfVxufVxuIiwiLnF1aWNrLXN0YXR1cy10ZXh0IHtcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xuICBjb2xvcjogIzNmNTFiNTtcbn1cblxuLnJlZnJlc2gtaWNvbiB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uc2VjdGlvbi13cmFwcGVyIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG4uc2VjdGlvbi13cmFwcGVyIC5zdGF0dXMtaWNvbiB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cbi5zZWN0aW9uLXdyYXBwZXIgLmJsb2NrLWl0ZW0ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uc2VjdGlvbi13cmFwcGVyIC5pdGVtLWhlYWRlciB7XG4gIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uc2VjdGlvbi13cmFwcGVyIC5pdGVtLWRlc2NyaXB0aW9uIHtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICBmb250LXNpemU6IHNtYWxsZXI7XG4gIGNvbG9yOiAjNmM3NTdkO1xuICB3aWR0aDogMjUwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uc2VjdGlvbi13cmFwcGVyIC5pdGVtLWljb24ge1xuICBmb250LXNpemU6IGxhcmdlcjtcbn1cbi5zZWN0aW9uLXdyYXBwZXIgLndhcm5pbmctaWNvbiB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG4uc2VjdGlvbi13cmFwcGVyIC5ibHVlLWljb24ge1xuICBjb2xvcjogIzNmNTFiNTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-page-view',
                templateUrl: './home-page-view.component.html',
                styleUrls: ['./home-page-view.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-home-page-home-page-module-es2015.js.map