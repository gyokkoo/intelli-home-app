function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-settings-page-settings-page-module"], {
  /***/
  "./src/app/pages/settings-page/page-view/settings-page-view.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/pages/settings-page/page-view/settings-page-view.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: SettingsPageViewComponent */

  /***/
  function srcAppPagesSettingsPagePageViewSettingsPageViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsPageViewComponent", function () {
      return SettingsPageViewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");

    var SettingsPageViewComponent = /*#__PURE__*/function () {
      function SettingsPageViewComponent() {
        _classCallCheck(this, SettingsPageViewComponent);
      }

      _createClass(SettingsPageViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SettingsPageViewComponent;
    }();

    SettingsPageViewComponent.ɵfac = function SettingsPageViewComponent_Factory(t) {
      return new (t || SettingsPageViewComponent)();
    };

    SettingsPageViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SettingsPageViewComponent,
      selectors: [["app-settings-page-view"]],
      decls: 47,
      vars: 2,
      consts: [[1, "page-title", "inline-block"], [1, "example-card"], [1, "centered-header"], ["mat-card-avatar", ""], ["src", "../../../../assets/avatars/home-owner.png", "alt", "Owner's photo", 1, "avatar-image"], ["src", "../../../../assets/avatars/user-1.png", "alt", "User's photo", 1, "avatar-image"], ["src", "../../../../assets/avatars/guest-1.png", "alt", "Guest's photo", 1, "avatar-image"], [1, "toggle-label"], [1, "mat-slide-toggle-content"], [3, "color"], ["color", "primary"], ["color", "primary", 3, "checked"]],
      template: function SettingsPageViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Accounts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-header", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Ivan Ivanov");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Owner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-header", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Milen Milev");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "User");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card-header", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Iva Ivanova");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Guest");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "System features");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Voice control");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "mat-slide-toggle", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Dynamic environment ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "mat-slide-toggle", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Analytics data collection ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "mat-slide-toggle", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "primary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", true);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardSubtitle"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__["MatDivider"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggle"]],
      styles: [".toggle-label[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  display: inline-block;\n  text-align: left;\n  width: 200px;\n  color: #6c757d;\n}\n\n.mat-divider[_ngcontent-%COMP%] {\n  margin-left: 10%;\n  margin-right: 10%;\n}\n\n.page-title[_ngcontent-%COMP%] {\n  font-size: x-large;\n  color: #3f51b5;\n  width: 240px;\n  text-align: left;\n  padding: 1rem 0;\n}\n\n.mat-card[_ngcontent-%COMP%] {\n  box-shadow: none;\n}\n\n.mat-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n  justify-content: center;\n  width: 90%;\n}\n\n.mat-card[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.avatar-image[_ngcontent-%COMP%] {\n  background-size: cover;\n  border-radius: 50%;\n}\n\n.section-wrapper[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n\n.section-wrapper[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n\n.section-wrapper[_ngcontent-%COMP%]   .item-header[_ngcontent-%COMP%] {\n  padding-left: 1rem;\n  font-size: larger;\n  text-align: left;\n}\n\n.section-wrapper[_ngcontent-%COMP%]   .item-description[_ngcontent-%COMP%] {\n  padding-left: 1rem;\n  font-size: smaller;\n  color: #6c757d;\n  width: 250px;\n  text-align: left;\n}\n\n.section-wrapper[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%] {\n  font-size: larger;\n}\n\n.section-wrapper[_ngcontent-%COMP%]   .warning-icon[_ngcontent-%COMP%] {\n  color: orange;\n}\n\n.section-wrapper[_ngcontent-%COMP%]   .blue-icon[_ngcontent-%COMP%] {\n  color: #3f51b5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zeXVsZXltYW5vdmcvR2l0SHViL2ludGVsbGktaG9tZS1hcHAvc3JjL2FwcC9wYWdlcy9zZXR0aW5ncy1wYWdlL3BhZ2Utdmlldy9zZXR0aW5ncy1wYWdlLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NldHRpbmdzLXBhZ2UvcGFnZS12aWV3L3NldHRpbmdzLXBhZ2Utdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNHLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDQ0g7O0FERUE7RUFDRyxnQkFBQTtFQUNBLGlCQUFBO0FDQ0g7O0FERUE7RUFDRyxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQ0g7O0FERUE7RUFDRyxnQkFBQTtBQ0NIOztBRENHO0VBQ0csdUJBQUE7RUFDQSxVQUFBO0FDQ047O0FERUc7RUFDRyxnQkFBQTtBQ0FOOztBRFFBO0VBQ0csc0JBQUE7RUFDQSxrQkFBQTtBQ0xIOztBRFNBO0VBQ0csaUJBQUE7QUNOSDs7QURRRztFQUNHLGVBQUE7QUNOTjs7QURVRztFQUNHLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ1JOOztBRFdHO0VBQ0csa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNUTjs7QURZRztFQUNHLGlCQUFBO0FDVk47O0FEYUc7RUFDRyxhQUFBO0FDWE47O0FEY0c7RUFDRyxjQUFBO0FDWk4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZXR0aW5ncy1wYWdlL3BhZ2Utdmlldy9zZXR0aW5ncy1wYWdlLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9nZ2xlLWxhYmVsIHtcbiAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgIHdpZHRoOiAyMDBweDtcbiAgIGNvbG9yOiAjNmM3NTdkO1xufVxuXG4ubWF0LWRpdmlkZXIge1xuICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgIG1hcmdpbi1yaWdodDogMTAlO1xufVxuXG4ucGFnZS10aXRsZSB7XG4gICBmb250LXNpemU6IHgtbGFyZ2U7XG4gICBjb2xvcjogIzNmNTFiNTtcbiAgIHdpZHRoOiAyNDBweDtcbiAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICBwYWRkaW5nOiAxcmVtIDA7XG59XG5cbi5tYXQtY2FyZCB7XG4gICBib3gtc2hhZG93OiBub25lO1xuXG4gICBtYXQtY2FyZC1oZWFkZXIge1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB3aWR0aDogOTAlO1xuICAgfVxuXG4gICBtYXQtY2FyZC1zdWJ0aXRsZSB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgfVxufVxuXG4uZXhhbXBsZS1jYXJkIHtcbiAgIC8vbWF4LXdpZHRoOiA0MDBweDtcbn1cblxuLmF2YXRhci1pbWFnZSB7XG4gICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG5cbi5zZWN0aW9uLXdyYXBwZXIge1xuICAgcGFkZGluZy10b3A6IDIwcHg7XG5cbiAgIC5zdGF0dXMtaWNvbiB7XG4gICAgICBmb250LXNpemU6IDQwcHg7XG4gICB9XG5cblxuICAgLml0ZW0taGVhZGVyIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgIH1cblxuICAgLml0ZW0tZGVzY3JpcHRpb24ge1xuICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICAgICAgZm9udC1zaXplOiBzbWFsbGVyO1xuICAgICAgY29sb3I6ICM2Yzc1N2Q7XG4gICAgICB3aWR0aDogMjUwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgfVxuXG4gICAuaXRlbS1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICAgfVxuXG4gICAud2FybmluZy1pY29uIHtcbiAgICAgIGNvbG9yOiBvcmFuZ2U7XG4gICB9XG5cbiAgIC5ibHVlLWljb24ge1xuICAgICAgY29sb3I6ICMzZjUxYjU7XG4gICB9XG59XG4iLCIudG9nZ2xlLWxhYmVsIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDIwMHB4O1xuICBjb2xvcjogIzZjNzU3ZDtcbn1cblxuLm1hdC1kaXZpZGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XG59XG5cbi5wYWdlLXRpdGxlIHtcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xuICBjb2xvcjogIzNmNTFiNTtcbiAgd2lkdGg6IDI0MHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAxcmVtIDA7XG59XG5cbi5tYXQtY2FyZCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4ubWF0LWNhcmQgbWF0LWNhcmQtaGVhZGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiA5MCU7XG59XG4ubWF0LWNhcmQgbWF0LWNhcmQtc3VidGl0bGUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uYXZhdGFyLWltYWdlIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uc2VjdGlvbi13cmFwcGVyIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG4uc2VjdGlvbi13cmFwcGVyIC5zdGF0dXMtaWNvbiB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cbi5zZWN0aW9uLXdyYXBwZXIgLml0ZW0taGVhZGVyIHtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICBmb250LXNpemU6IGxhcmdlcjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5zZWN0aW9uLXdyYXBwZXIgLml0ZW0tZGVzY3JpcHRpb24ge1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gIGZvbnQtc2l6ZTogc21hbGxlcjtcbiAgY29sb3I6ICM2Yzc1N2Q7XG4gIHdpZHRoOiAyNTBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5zZWN0aW9uLXdyYXBwZXIgLml0ZW0taWNvbiB7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xufVxuLnNlY3Rpb24td3JhcHBlciAud2FybmluZy1pY29uIHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cbi5zZWN0aW9uLXdyYXBwZXIgLmJsdWUtaWNvbiB7XG4gIGNvbG9yOiAjM2Y1MWI1O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsPageViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-settings-page-view',
          templateUrl: 'settings-page-view.component.html',
          styleUrls: ['settings-page-view.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/settings-page/settings-page-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/settings-page/settings-page-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: SettingsPageRoutingModule */

  /***/
  function srcAppPagesSettingsPageSettingsPageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsPageRoutingModule", function () {
      return SettingsPageRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _settings_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./settings-page.component */
    "./src/app/pages/settings-page/settings-page.component.ts");

    var routes = [{
      path: '',
      component: _settings_page_component__WEBPACK_IMPORTED_MODULE_2__["SettingsPageComponent"]
    }];

    var SettingsPageRoutingModule = function SettingsPageRoutingModule() {
      _classCallCheck(this, SettingsPageRoutingModule);
    };

    SettingsPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SettingsPageRoutingModule
    });
    SettingsPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SettingsPageRoutingModule_Factory(t) {
        return new (t || SettingsPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SettingsPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/settings-page/settings-page.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/settings-page/settings-page.component.ts ***!
    \****************************************************************/

  /*! exports provided: SettingsPageComponent */

  /***/
  function srcAppPagesSettingsPageSettingsPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsPageComponent", function () {
      return SettingsPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _page_view_settings_page_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./page-view/settings-page-view.component */
    "./src/app/pages/settings-page/page-view/settings-page-view.component.ts");

    var SettingsPageComponent = /*#__PURE__*/function () {
      function SettingsPageComponent() {
        _classCallCheck(this, SettingsPageComponent);

        this.pageTitle = 'Settings';
      }

      _createClass(SettingsPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SettingsPageComponent;
    }();

    SettingsPageComponent.ɵfac = function SettingsPageComponent_Factory(t) {
      return new (t || SettingsPageComponent)();
    };

    SettingsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SettingsPageComponent,
      selectors: [["app-settings-page"]],
      decls: 8,
      vars: 3,
      consts: [[3, "translucent"], [3, "fullscreen"], [1, "page-container"]],
      template: function SettingsPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-content", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-settings-page-view");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translucent", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pageTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullscreen", true);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _page_view_settings_page_view_component__WEBPACK_IMPORTED_MODULE_2__["SettingsPageViewComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NldHRpbmdzLXBhZ2Uvc2V0dGluZ3MtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-settings-page',
          templateUrl: 'settings-page.component.html',
          styleUrls: ['settings-page.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/settings-page/settings-page.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/settings-page/settings-page.module.ts ***!
    \*************************************************************/

  /*! exports provided: SettingsPageModule */

  /***/
  function srcAppPagesSettingsPageSettingsPageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function () {
      return SettingsPageModule;
    });
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _settings_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./settings-page.component */
    "./src/app/pages/settings-page/settings-page.component.ts");
    /* harmony import */


    var _page_view_settings_page_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./page-view/settings-page-view.component */
    "./src/app/pages/settings-page/page-view/settings-page-view.component.ts");
    /* harmony import */


    var _settings_page_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./settings-page-routing.module */
    "./src/app/pages/settings-page/settings-page-routing.module.ts");

    var SettingsPageModule = function SettingsPageModule() {
      _classCallCheck(this, SettingsPageModule);
    };

    SettingsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: SettingsPageModule
    });
    SettingsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function SettingsPageModule_Factory(t) {
        return new (t || SettingsPageModule)();
      },
      imports: [[_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"], _settings_page_routing_module__WEBPACK_IMPORTED_MODULE_10__["SettingsPageRoutingModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SettingsPageModule, {
        declarations: [_settings_page_component__WEBPACK_IMPORTED_MODULE_8__["SettingsPageComponent"], _page_view_settings_page_view_component__WEBPACK_IMPORTED_MODULE_9__["SettingsPageViewComponent"]],
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"], _settings_page_routing_module__WEBPACK_IMPORTED_MODULE_10__["SettingsPageRoutingModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SettingsPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"], _settings_page_routing_module__WEBPACK_IMPORTED_MODULE_10__["SettingsPageRoutingModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"]],
          declarations: [_settings_page_component__WEBPACK_IMPORTED_MODULE_8__["SettingsPageComponent"], _page_view_settings_page_view_component__WEBPACK_IMPORTED_MODULE_9__["SettingsPageViewComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-settings-page-settings-page-module-es5.js.map