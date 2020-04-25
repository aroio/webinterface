(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/aroio-wi.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/aroio-wi.component.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<aroio-alert [closeable]=\"true\"></aroio-alert>\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/audio/components/index/index.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/audio/components/index/index.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  Hier kann das Ausgang-Routing des Aroio System eingestellt werden. Wählen Sie zuerst den gewünschten Ausgang. In\n  Abhängigkeit zu dem Ausgang können Sie dann die gewünschten Player auswhlen. Eine Mehrfachauswahl ist nur bei dem\n  Ausgang „Bus“ und „Convolver“ möglich. Am Ende können Sie die Kodierung des physikalischen Audio Ausgangs wählen.\n  Mid/Side macht nur in zusammenhang mit unserer Geräte sinn, wenn Sie dort die Hardwareseitige Cleaner-Funktion Nutzen\n  können.\n</p>\n\n<aroio-content-item [title]=\"'Output'\">\n  <div class=\"action-bar action-bar--evenly\">\n    <div class=\"action-bar__item\" *ngFor=\"let output of audioOutputs; let outputIndex = index\">\n      <div class=\"radio\">\n        <input id=\"{{ output.id }}\" type=\"radio\" value=\"{{ output.position }}\" name=\"audio_outputs\" [checked]=\"index === outputIndex\" (change)=\"index = outputIndex\">\n        <label for=\"{{ output.id }}\">\n          <span class=\"radio-label\">{{ output.label }}</span>\n        </label>\n      </div>\n    </div>\n  </div>\n</aroio-content-item>\n\n<aroio-content-item [title]=\"'Player'\">\n  <!--<swiper class=\"carousel\">-->\n  <swiper class=\"audio-carousel\" [(index)]=\"index\" (indexChange)=\"changeSelect($event)\" [config]=\"config\">\n    <div class=\"audio-carousel__item\" *ngFor=\"let output of audioOutputs\">\n      <ul>\n        <li *ngFor=\"let player of output.player\">\n          <div class=\"radio\" *ngIf=\"!output.multiselectable; else checkbox\">\n            <input id=\"{{ output.id }}_{{ player.id }}\" type=\"radio\" value=\"{{ player.position }}\" name=\"{{ output.id }}\">\n            <label for=\"{{ output.id }}_{{ player.id }}\">\n              <span class=\"radio-label\">{{ player.label }}</span>\n            </label>\n          </div>\n          <ng-template #checkbox>\n            <div class=\"checkbox\">\n              <input type=\"checkbox\" id=\"{{ output.id }}_{{ player.id }}\" [formControl]=\"form.get(output.id + '_' + player.id)\"/>\n              <label for=\"{{ output.id }}_{{ player.id }}\">\n                <span class=\"checkbox-label\">{{ player.label }}</span>\n              </label>\n            </div>\n          </ng-template>\n        </li>\n      </ul>\n    </div>\n  </swiper>\n\n</aroio-content-item>\n\n<aroio-content-item [title]=\"'Kodierung'\">\n  <div class=\"action-bar action-bar--evenly\">\n    <div class=\"action-bar__item\" *ngFor=\"let coding of audioOutputs[activeOutput].codings\">\n      <div class=\"radio\">\n        <input id=\"{{ coding.id }}\" type=\"radio\" value=\"{{ coding.position }}\" name=\"{{ coding.id }}\">\n        <label for=\"{{ coding.id }}\">\n          <span class=\"radio-label\">{{ coding.label }}</span>\n        </label>\n      </div>\n    </div>\n  </div>\n</aroio-content-item>\n\n\n\n<div class=\"action-bar\">\n  <div class=\"action-bar__item\">\n    <!--<a [routerLink]=\"['/', translate.currentLang, 'convolver', 'wizard']\">-->\n      <!--<button aroio-btn type=\"submit\" [color]=\"'primary'\">Filter Hinzufügen</button>-->\n    <!--</a>-->\n  </div>\n  <div class=\"action-bar__item\">\n    <button aroio-btn type=\"submit\" [color]=\"'primary'\">Speichern</button>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/convolver/components/index/index.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/convolver/components/index/index.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"form\" (submit)=\"submitForm($event)\" *ngIf=\"form\">\n  <aroio-content-item [title]=\"'Einstellungen'\">\n\n    <aroio-form-switch [id]=\"'pre-filter-form'\"\n                       [label]=\"'Pre-Filter beim Booten'\"\n                       [switchState]=\"form.get('load_prefilter').value\"\n                       (switched)=\"form.get('load_prefilter').setValue($event)\"\n    ></aroio-form-switch>\n    <aroio-form-switch [id]=\"'audio-convolution-form'\"\n                       [label]=\"'Audio Convolution'\"\n                       [hasContent]=\"true\"\n                       [switchState]=\"form.get('brutefir').value\"\n                       (switched)=\"form.get('brutefir').setValue($event)\"\n    >\n\n\n      <aroio-content-item [title]=\"'Filter'\">\n        <aroio-message [color]=\"'black-300'\"\n                       *ngIf=\"!form.get('brutefir').value; else filterListe\"\n        >Convolution ist nicht aktiviert\n        </aroio-message>\n\n        <ng-template #filterListe>\n          <aroio-filter-list>\n            <aroio-filter-list-item></aroio-filter-list-item>\n            <aroio-filter-list-item></aroio-filter-list-item>\n            <aroio-filter-list-item></aroio-filter-list-item>\n          </aroio-filter-list>\n        </ng-template>\n      </aroio-content-item>\n\n\n    </aroio-form-switch>\n  </aroio-content-item>\n\n  <div class=\"action-bar\">\n    <div class=\"action-bar__item\">\n      <a [routerLink]=\"['/', translate.currentLang, 'convolver', 'wizard']\">\n        <button aroio-btn type=\"submit\" [color]=\"'primary'\">Filter Hinzufügen</button>\n      </a>\n    </div>\n    <div class=\"action-bar__item\">\n      <button aroio-btn type=\"submit\" [color]=\"'primary'\">Speichern</button>\n    </div>\n  </div>\n\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/convolver/components/wizard/wizard.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/convolver/components/wizard/wizard.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"form\">\n  <h4>Wizard zur Audio Korrektur Messung</h4>\n\n  <aw-wizard>\n    <aw-wizard-step stepTitle=\"Start\">\n\n      <div class=\"wizard-steps__content\">\n        <p>\n          Möchten Sie eine neue Messung vornehmen?\n        </p>\n\n        <button aroio-btn class=\"btn\" [color]=\"'primary'\" type=\"button\" awNextStep>Wizard starten</button>\n      </div>\n\n      <!--<div class=\"action-bar\">-->\n        <!--<div class=\"action-bar__item\">-->\n        <!--</div>-->\n<!---->\n        <!--<div class=\"action-bar__item\">-->\n          <!--<button aroio-btn class=\"btn\" [color]=\"'primary'\" type=\"button\" awNextStep>Vor</button>-->\n        <!--</div>-->\n      <!--</div>-->\n\n    </aw-wizard-step>\n\n    <aw-wizard-step stepTitle=\"Ausrichtung Mikrofon\">\n      <div class=\"wizard-steps__content\">\n        Content of Step 2\n      </div>\n\n      <div class=\"action-bar\">\n        <div class=\"action-bar__item\">\n          <button aroio-btn class=\"btn\" type=\"link\" awPreviousStep>Zurück</button>\n        </div>\n\n        <div class=\"action-bar__item\">\n          <button aroio-btn class=\"btn\" [color]=\"'primary'\" type=\"button\" awNextStep>Vor</button>\n        </div>\n      </div>\n\n    </aw-wizard-step>\n\n    <aw-wizard-step stepTitle=\"Start der Messung\">\n      <div class=\"wizard-steps__content\">\n        Content of Step 3\n      </div>\n\n      <div class=\"action-bar\">\n        <div class=\"action-bar__item\">\n          <button aroio-btn class=\"btn\" type=\"link\" awPreviousStep>Zurück</button>\n        </div>\n\n        <div class=\"action-bar__item\">\n          <button aroio-btn class=\"btn\" [color]=\"'primary'\" type=\"button\" awNextStep>Vor</button>\n        </div>\n      </div>\n    </aw-wizard-step>\n\n    <aw-wizard-step stepTitle=\"Messung läuft\">\n      <div class=\"wizard-steps__content\">\n        Content of Step 4\n      </div>\n\n      <div class=\"action-bar\">\n        <div class=\"action-bar__item\">\n          <button aroio-btn class=\"btn\" type=\"link\" awPreviousStep>Zurück</button>\n        </div>\n\n        <div class=\"action-bar__item\">\n          <button aroio-btn class=\"btn\" [color]=\"'primary'\" type=\"button\" awNextStep>Vor</button>\n        </div>\n      </div>\n    </aw-wizard-step>\n\n    <aw-wizard-step stepTitle=\"Filter berechnen\">\n      <div class=\"wizard-steps__content\">\n        Content of Step 5\n      </div>\n\n      <div class=\"action-bar\">\n        <div class=\"action-bar__item\">\n          <button aroio-btn class=\"btn\" type=\"link\" awPreviousStep>Zurück</button>\n        </div>\n\n        <div class=\"action-bar__item\">\n          <button aroio-btn class=\"btn\" [color]=\"'primary'\" type=\"button\" awNextStep>Vor</button>\n        </div>\n      </div>\n    </aw-wizard-step>\n\n    <aw-wizard-step stepTitle=\"Messung abschließen\">\n      <div class=\"wizard-steps__content\">\n        Content of Step 6\n      </div>\n\n\n      <div class=\"action-bar\">\n        <div class=\"action-bar__item\">\n          <button aroio-btn class=\"btn\" type=\"link\" awPreviousStep>Zurück</button>\n        </div>\n\n        <div class=\"action-bar__item\">\n          <button aroio-btn class=\"btn\" [color]=\"'primary'\" type=\"button\" awNextStep>Vor</button>\n        </div>\n      </div>\n    </aw-wizard-step>\n  </aw-wizard>\n\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/components/aroio-alert/aroio-alert.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/components/aroio-alert/aroio-alert.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [ngClass]=\"[hasNavbar ? 'alert-box' : 'alert-box  alert-box--no-navigation']\">\n  <div class=\"alert alert--{{ item.type }} flash\"  *ngFor=\"let item of _alerts\" [@slideRightOut] (@slideRightOut.done)=\"removeAlertWithTimeout(item)\">\n    <div class=\"alert__title\" *ngIf=\"item.title\">\n      {{ item.title | translate }}\n    </div>\n    <div class=\"alert__body\" *ngIf=\"item.message\">\n      {{ item.message | translate }}\n    </div>\n\n    <div class=\"alert__close\" *ngIf=\"closeable\">\n      <div class=\"icon\" (click)=\"removeAlert(item)\">\n        <i class=\"fas fa-times\"></i>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/components/aroio-button/aroio-button.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/components/aroio-button/aroio-button.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  ~ @author Felix Baltruschat <fb@braune-digital.com>\n  ~ @company Braune Digital GmbH\n  -->\n\n\n<div class=\"btn__text\">\n    <ng-content></ng-content>\n</div>\n<div class=\"btn__loader\">\n    <span></span>\n    <span></span>\n    <span></span>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/components/aroio-content-item/aroio-content-item.component.html":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/components/aroio-content-item/aroio-content-item.component.html ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"aroio-content-item\">\n  <div class=\"aroio-content-item__title\" *ngIf=\"title\">\n    {{ title }}\n  </div>\n  <div class=\"aroio-content-item__content\">\n    <ng-content></ng-content>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/components/aroio-content/aroio-content.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/components/aroio-content/aroio-content.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tmpl\" [ngClass]=\"{'tmpl--centered': centered}\">\n  <ng-content></ng-content>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/components/aroio-filter-list/aroio-filter-list-item/aroio-filter-list-item.component.html":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/components/aroio-filter-list/aroio-filter-list-item/aroio-filter-list-item.component.html ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<li>\n  <div class=\"aroio-filter-list__item__switch\">\n    <div class=\"radio\">\n      <input id=\"{{ id }}\" type=\"radio\" value=\"{{ id }}\" name=\"{{ id }}\">\n      <label for=\"{{ id }}\">\n        <span class=\"radio-label\">{{ id }}</span>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"aroio-filter-list__item__actions\">\n    <div class=\"aroio-filter-list__item__actions__item aroio-filter-list__item__actions__item--info\" (click)=\"openModal(filterDetailsModal, 0)\">\n      Details\n      <i class=\"fas fa-info-circle\"></i>\n    </div>\n\n\n    <div class=\"aroio-filter-list__item__actions__item\">\n      <i class=\"fas fa-pencil-alt\" (click)=\"openModal(filterEditModal, 1)\"></i>\n    </div>\n    <div class=\"aroio-filter-list__item__actions__item\">\n      <i class=\"far fa-trash-alt\"></i>\n    </div>\n  </div>\n</li>\n\n\n<ng-template #filterEditModal>\n  <div class=\"modal-header modal-header--underlined\">\n    Filter Name bearbeiten\n  </div>\n  <div class=\"modal-content\">\n    <aroio-input [type]=\"'text'\"\n                 [formControl]=\"form.get('filterName')\"\n                 label=\"Filter\"\n                 placeholder=\"Filter\"\n    ></aroio-input>\n    <aroio-input [type]=\"'text'\"\n                 [formControl]=\"form.get('comment')\"\n                 label=\"Notiz\"\n                 placeholder=\"Ihre persönliche Notiz\"\n    ></aroio-input>\n    <aroio-input [type]=\"'text'\"\n                 [formControl]=\"form.get('pegel')\"\n                 label=\"Pegel\"\n                 placeholder=\"-0dB\"\n    ></aroio-input>\n  </div>\n  <div class=\"modal-footer\">\n    <div class=\"action-bar\">\n      <div class=\"action-bar__item\">\n        <aroio-button (click)=\"modalClose()\" [type]=\"'button'\" [color]=\"'black-300'\">Schließen</aroio-button>\n      </div>\n      <div class=\"action-bar__item\">\n        <aroio-button (click)=\"modalClose()\" [type]=\"'button'\" [color]=\"'primary'\">Speichern</aroio-button>\n      </div>\n    </div>\n  </div>\n\n</ng-template>\n\n<ng-template #filterDetailsModal>\n  <div class=\"modal-header modal-header--underlined\">\n    Filter Name\n  </div>\n  <div class=\"modal-content\">\n    <div class=\"aroio-filter-list__details\">\n      <div class=\"aroio-filter-list__details__item\">\n        <div class=\"aroio-filter-list__details__item__label\">Kommentar:</div>\n        <div class=\"aroio-filter-list__details__item__text\">Blablabla Blablabla Blablabla</div>\n      </div>\n      <div class=\"aroio-filter-list__details__item\">\n        <div class=\"aroio-filter-list__details__item__label\">Pegelabschwächung:</div>\n        <div class=\"aroio-filter-list__details__item__text\">8dB</div>\n      </div>\n      <div class=\"aroio-filter-list__details__item\">\n        <div class=\"aroio-filter-list__details__item__label\">Kommentar:</div>\n        <div class=\"aroio-filter-list__details__item__text\">Blablabla Blablabla Blablabla</div>\n      </div>\n      <div class=\"aroio-filter-list__details__item\">\n        <div class=\"aroio-filter-list__details__item__label\">Pegelabschwächung:</div>\n        <div class=\"aroio-filter-list__details__item__text\">8dB</div>\n      </div>\n      <div class=\"aroio-filter-list__details__item\">\n        <div class=\"aroio-filter-list__details__item__label\">Verfügbare Samplingraten:</div>\n        <div class=\"aroio-filter-list__details__item__text\">44.1kHz <strong>48kHz</strong> <strong>96kHz</strong>\n          192kHz\n        </div>\n      </div>\n      <div class=\"aroio-filter-list__details__item\">\n        <div class=\"aroio-filter-list__details__item__label\">Pegelabschwächung:</div>\n        <div class=\"aroio-filter-list__details__item__text\">8dB</div>\n      </div>\n      <div class=\"aroio-filter-list__details__item\">\n        <div class=\"aroio-filter-list__details__item__label\">Verfügbare Samplingraten:</div>\n        <div class=\"aroio-filter-list__details__item__text\">44.1kHz <strong>48kHz</strong> <strong>96kHz</strong>\n          192kHz\n        </div>\n      </div>\n    </div>\n\n  </div>\n  <div class=\"modal-footer\">\n    <div class=\"action-bar\">\n      <div class=\"action-bar__item\">\n        <aroio-button (click)=\"modalClose()\" [type]=\"'button'\" [color]=\"'primary'\"\n                      [size]=\"'sm'\">Schließen\n        </aroio-button>\n      </div>\n      <div class=\"action-bar__item\"></div>\n    </div>\n  </div>\n\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/components/aroio-filter-list/aroio-filter-list.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/components/aroio-filter-list/aroio-filter-list.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"aroio-filter-list\">\n  <ng-content></ng-content>\n</ul>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/components/aroio-footer/aroio-footer.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/components/aroio-footer/aroio-footer.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"footer\">\n  <div class=\"footer__brand\">\n  </div>\n\n  <div class=\"footer__center\">\n    <div class=\"footer__center__item\">Impressum</div>\n    <div class=\"footer__center__item\">ABACUS</div>\n    <div class=\"footer__center__item\">AroioOS - Support</div>\n  </div>\n\n  <div class=\"footer__actions\">\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/components/aroio-form-switch/aroio-form-switch.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/components/aroio-form-switch/aroio-form-switch.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"aroio-form-switch\" [ngClass]=\"{'aroio-form-switch--disabled': disabled}\">\n  <div class=\"aroio-form-switch__head\">\n    <div class=\"aroio-form-switch__head__label\">\n      {{ label }}\n    </div>\n    <div class=\"aroio-form-switch__head__action\">\n      <aroio-switch [id]=\"id\" [switchState]=\"switchState\" (switched)=\"switched.emit($event); switchState = $event\"></aroio-switch>\n    </div>\n  </div>\n\n  <div class=\"aroio-form-switch__content\" *ngIf=\"(inverted ? !switchState : switchState) && hasContent && !disabled\" [@fadeHeightInOut]>\n    <ng-content></ng-content>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/components/aroio-header/aroio-header.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/components/aroio-header/aroio-header.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"header\">\n  <div class=\"header__brand\">\n    <img src=\"/assets/abacus_logo_wide.png\" alt=\"Abacus Electronics Logo\">\n  </div>\n\n  <div class=\"header__title\">\n    <!--AroioOS Webinterface 2.0-->\n  </div>\n\n  <div class=\"header__actions\">\n    <div class=\"header__actions__item\">\n        Webinterface <i class=\"fas fa-cog\"></i>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/components/aroio-input/aroio-input.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/components/aroio-input/aroio-input.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"{{ options.classFormGroup }}\" [ngClass]=\"{'focus': focus, 'has-errors': errors.length, 'has-value': formControl.value}\">\n\n  <div class=\"{{ options.classFromInput }}\">\n\n    <div class=\"{{ options.classFromLegend }}\">\n\n      <bd-form-label [label]=\"label\" [inputId]=\"uniqueId\"></bd-form-label>\n      <bd-form-required [required]=\"requiredMarker\" *ngIf=\"requiredMarker\"></bd-form-required>\n      <bd-form-tips [tips]=\"tips\" *ngIf=\"tips\"></bd-form-tips>\n      <bd-form-counter [maxLength]=\"maxLength\" [form]=\"formControl\" *ngIf=\"maxLength && options.counterBefore\"></bd-form-counter>\n      <bd-form-label-icon [icon]=\"icon\" (click)=\"handleIconClicked($event)\"></bd-form-label-icon>\n    </div>\n\n    <div class=\"{{ inputGroupClass }}\">\n\n      <bd-form-addon [text]=\"prepend\" position=\"prepend\" *ngIf=\"prepend\"></bd-form-addon>\n\n      <input [type]=\"type\"\n             [step]=\"step\"\n             class=\"{{ options.classFormControl }} {{ inputClass }}\"\n             [placeholder]=\"placeholder\"\n             [autocomplete]=\"autocomplete\"\n             [attr.id]=\"uniqueId\"\n             [attr.maxlength]=\"maxLength\"\n             [attr.aria-label]=\"placeholder\"\n             (focusout)=\"handleOnFocusOut($event.target.value)\"\n             (focus)=\"handleOnFocus($event.target.value)\"\n             (change)=\"handleOnInputChange($event.target.value)\"\n             (keypress)=\"handleOnInputKeypress($event.target.value)\"\n             (keyup)=\"handleOnInputKeyup($event.target.value)\"\n             ngDefaultControl>\n\n      <bd-form-addon [text]=\"append\" position=\"append\" *ngIf=\"append\"></bd-form-addon>\n\n      <div class=\"form-errors-sign\" *ngIf=\"errors.length\">\n        <div class=\"form-errors-sign__sign\">\n          <i class=\"fas fa-exclamation-triangle\"></i>\n        </div>\n        <bd-form-errors [errors]=\"errors\"></bd-form-errors>\n      </div>\n\n\n    </div>\n  </div>\n\n  <bd-form-counter [maxLength]=\"maxLength\" [form]=\"formControl\" *ngIf=\"maxLength && !options.counterBefore\"></bd-form-counter>\n  <bd-form-help [label]=\"help\" *ngIf=\"help\"></bd-form-help>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/components/aroio-sidebar/aroio-sidebar.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/components/aroio-sidebar/aroio-sidebar.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"aroio-sidebar\">\n  <div class=\"aroio-sidebar__widget\">\n    <h4>Item 1</h4>\n    <p>\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad autem explicabo minus omnis reprehenderit rerum sapiente voluptatem!\n    </p>\n  </div>\n  <div class=\"aroio-sidebar__widget\">\n    <h4>Item 1</h4>\n    <p>\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad autem explicabo minus omnis reprehenderit rerum sapiente voluptatem!\n    </p>\n  </div>\n  <div class=\"aroio-sidebar__widget\">\n    <h4>Item 1</h4>\n    <p>\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad autem explicabo minus omnis reprehenderit rerum sapiente voluptatem!\n    </p>\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/components/aroio-switch/aroio-switch.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/components/aroio-switch/aroio-switch.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<input type=\"checkbox\" [value]=\"switchState\"\n       [checked]=\"switchState\"\n       (change)=\"switchState = !switchState; switched.emit(switchState)\"\n       id=\"{{ id }}\"\n>\n<label class=\"slider\" for=\"{{ id }}\">\n  <!--<span class=\"slider&#45;&#45;label-left\">Off</span>-->\n  <!--<span class=\"slider&#45;&#45;label-right\">On</span>-->\n</label>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/components/aroio-tabset/aroio-tabset.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/components/aroio-tabset/aroio-tabset.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"aroio-tabs\">\n  <div class=\"aroio-tabs__navigation\">\n    <a class=\"aroio-tabs__navigation__item\"\n         *ngFor=\"let tab of aroioTabs\"\n         [ngClass]=\"{'aroio-tabs__navigation__item--active': tab.id === activeTab}\"\n         id=\"{{ tab.id }}\"\n       [routerLink]=\"['/', translate.currentLang, tab.route]\"\n    >\n        {{ tab.label }}\n    </a>\n  </div>\n  <div class=\"aroio-tabs__content\">\n      <ng-content></ng-content>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/utils/aroio-badge/aroio-badge.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/utils/aroio-badge/aroio-badge.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  ~ @author Felix Baltruschat <fb@braune-digital.com>\n  ~ @company Braune Digital GmbH\n  -->\n\n<span>\n    <ng-content></ng-content>\n</span>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/utils/aroio-loading/aroio-loading.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/utils/aroio-loading/aroio-loading.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  ~ @author Felix Baltruschat <fb@braune-digital.com>\n  ~ @company Braune Digital GmbH\n  -->\n\n<ng-container *ngIf=\"isLoading\">\n    <ng-container *ngIf=\"!overlay\">\n        <div class=\"loading\">\n          <label>\n            {{ text | translate }}\n          </label>\n          <ng-content></ng-content>\n\n          <div class=\"loading__circles\">\n            <span></span>\n            <span></span>\n            <span></span>\n          </div>\n        </div>\n    </ng-container>\n    <ng-container *ngIf=\"overlay\">\n        <div class=\"loading-overlay\" [@fadeInOut]>\n            <div class=\"loading\">\n              <label>\n                {{ 'global.loading' | translate }}\n              </label>\n            </div>\n        </div>\n    </ng-container>\n</ng-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/utils/aroio-message/aroio-message.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/utils/aroio-message/aroio-message.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  ~ @author Felix Baltruschat <fb@braune-digital.com>\n  ~ @company Braune Digital GmbH\n  -->\n<div class=\"message message--{{ color }}\">\n    <div class=\"message__title\" *ngIf=\"title\">\n        {{ title }}\n    </div>\n    <div class=\"message__body\">\n        <ng-content></ng-content>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/utils/aroio-progress-bar/aroio-progress-bar.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/utils/aroio-progress-bar/aroio-progress-bar.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  ~ @author Felix Baltruschat <fb@braune-digital.com>\n  ~ @company Braune Digital GmbH\n  -->\n\n<span class=\"progress-bar__stripe\" [ngStyle]=\"applyWidth()\"></span>\n<span class=\"progress-bar__value\">{{ progress }}%</span>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/utils/aroio-progress-circle/aroio-progress-circle.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/utils/aroio-progress-circle/aroio-progress-circle.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"progress-circle__inner\">\n\n    <div class=\"mask full\" [ngStyle]=\"applyWidth()\">\n        <div class=\"fill\" [ngStyle]=\"applyWidth()\"></div>\n    </div>\n    <div class=\"mask half\">\n        <div class=\"fill\" [ngStyle]=\"applyWidth()\"></div>\n    </div>\n\n    <div class=\"progress-circle__inner__content\">\n        <div class=\"progress-circle__inner__time\">\n            {{ minutesLeft }}<span>m</span>\n        </div>\n        <div class=\"progress-circle__inner__label\">\n            {{ label | translate }}\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/network/components/index/index.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/network/components/index/index.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"form\" (submit)=\"submitForm($event)\" *ngIf=\"form\">\n  <aroio-content-item [title]=\"'aroio.pages.network.connection.title' | translate\">\n\n    <aroio-input [type]=\"'text'\"\n                 [formControl]=\"form.get('hostname')\"\n                 [label]=\"'aroio.pages.network.forms.hostname.label' | translate\"\n                 [placeholder]=\"'aroio.pages.network.forms.hostname.placeholder' | translate\"\n    ></aroio-input>\n\n    <aroio-form-switch [id]=\"'lan-dhcp-form'\"\n                       [label]=\"'aroio.pages.network.forms.lan_dhcp.label' | translate\"\n                       [hasContent]=\"true\"\n                       [inverted]=\"true\"\n                       [switchState]=\"form.get('lan_dhcp').value\"\n                       (switched)=\"form.get('lan_dhcp').setValue($event)\"\n                       [disabled]=\"form.get('wifi').value\"\n    >\n      <aroio-input [type]=\"'text'\"\n                   [formControl]=\"form.get('lan_ipaddr')\"\n                   [label]=\"'aroio.pages.network.forms.lan_ipaddr.label' | translate\"\n                   [placeholder]=\"'aroio.pages.network.forms.lan_ipaddr.placeholder' | translate\"\n      ></aroio-input>\n      <aroio-input [type]=\"'text'\"\n                   [formControl]=\"form.get('lan_netmask')\"\n                   [label]=\"'aroio.pages.network.forms.lan_netmask.label' | translate\"\n                   [placeholder]=\"'aroio.pages.network.forms.lan_netmask.placeholder' | translate\"\n      ></aroio-input>\n      <aroio-input [type]=\"'text'\"\n                   [formControl]=\"form.get('lan_gateway')\"\n                   [label]=\"'aroio.pages.network.forms.lan_gateway.label' | translate\"\n                   [placeholder]=\"'aroio.pages.network.forms.lan_gateway.placeholder' | translate\"\n      ></aroio-input>\n      <aroio-input [type]=\"'text'\"\n                   [formControl]=\"form.get('lan_dnsserv')\"\n                   [label]=\"'aroio.pages.network.forms.lan_dnsserv.label' | translate\"\n                   [placeholder]=\"'aroio.pages.network.forms.lan_dnsserv.placeholder' | translate\"\n      ></aroio-input>\n    </aroio-form-switch>\n\n    <aroio-form-switch [id]=\"'wifi-form'\"\n                       [label]=\"'aroio.pages.network.forms.wifi.label' | translate\"\n                       [hasContent]=\"true\"\n                       [switchState]=\"form.get('wifi').value\"\n                       (switched)=\"form.get('wifi').setValue($event)\"\n    >\n      <aroio-input [type]=\"'text'\"\n                   [formControl]=\"form.get('wlanssid')\"\n                   [label]=\"'aroio.pages.network.forms.wlan_ssid.label' | translate\"\n                   [placeholder]=\"'aroio.pages.network.forms.wlan_ssid.placeholder' | translate\"\n      ></aroio-input>\n      <aroio-input [type]=\"'password'\"\n                   [formControl]=\"form.get('wlanpwd')\"\n                   [label]=\"'aroio.pages.network.forms.wlanpwd.label' | translate\"\n                  [placeholder]=\"'aroio.pages.network.forms.wlanpwd.placeholder' | translate\"\n      ></aroio-input>\n\n\n\n      <aroio-form-switch [id]=\"'wifi-dhcp-form'\"\n                         [label]=\"'aroio.pages.network.forms.wlan_dhcp.label' | translate\"\n                         [hasContent]=\"true\"\n                         [inverted]=\"true\"\n                         [switchState]=\"form.get('wlan_dhcp').value\"\n                         (switched)=\"form.get('wlan_dhcp').setValue($event)\"\n      >\n        <aroio-input [type]=\"'text'\"\n                     [formControl]=\"form.get('wlan_ipaddr')\"\n                     [label]=\"'aroio.pages.network.forms.wlan_ipaddr.label' | translate\"\n                     [placeholder]=\"'aroio.pages.network.forms.wlan_ipaddr.placeholder' | translate\"\n        ></aroio-input>\n        <aroio-input [type]=\"'text'\"\n                     [formControl]=\"form.get('wlan_netmask')\"\n                     [label]=\"'aroio.pages.network.forms.wlan_netmask.label' | translate\"\n                     [placeholder]=\"'aroio.pages.network.forms.wlan_netmask.placeholder' | translate\"\n        ></aroio-input>\n        <aroio-input [type]=\"'text'\"\n                     [formControl]=\"form.get('wlan_gateway')\"\n                     [label]=\"'aroio.pages.network.forms.wlan_gateway.label' | translate\"\n                     [placeholder]=\"'aroio.pages.network.forms.wlan_gateway.placeholder' | translate\"\n        ></aroio-input>\n        <aroio-input [type]=\"'text'\"\n                     [formControl]=\"form.get('wlan_dnsserv')\"\n                     [label]=\"'aroio.pages.network.forms.wlan_dnsserv.label' | translate\"\n                     [placeholder]=\"'aroio.pages.network.forms.wlan_dnsserv.placeholder' | translate\"\n        ></aroio-input>\n      </aroio-form-switch>\n\n    </aroio-form-switch>\n\n  </aroio-content-item>\n\n\n  <aroio-content-item [title]=\"'aroio.pages.network.webinterface.title' | translate\">\n\n\n  </aroio-content-item>\n  <!--<aroio-content-item [title]=\"'Hardware'\">-->\n  <!--<bd-input [type]=\"'select'\" [formControl]=\"form.get('platform')\" label=\"Plattform\" placeholder=\"Auswählen\"></bd-input>-->\n  <!--</aroio-content-item>-->\n\n  <div class=\"action-bar\">\n    <div class=\"action-bar__item\"></div>\n    <div class=\"action-bar__item\">\n      <button aroio-btn type=\"submit\" [color]=\"'primary'\">Speichern</button>\n    </div>\n  </div>\n\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/streaming/components/index/index.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/streaming/components/index/index.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<aroio-content-item>\n  <h2>streaming index</h2>\n\n  <aroio-button [color]=\"'primary'\">Test</aroio-button>\n</aroio-content-item>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/system/components/index/index.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/system/components/index/index.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<aroio-content-item>\n  <h2>system index</h2>\n\n  <aroio-button [color]=\"'primary'\">Test</aroio-button>\n</aroio-content-item>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/aroio-wi/audio/index/index.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/aroio-wi/audio/index/index.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<aroio-header></aroio-header>\n\n<aroio-content [centered]=\"true\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-8\">\n        <aroio-tabset>\n          <aroio-audio-index-component></aroio-audio-index-component>\n        </aroio-tabset>\n      </div>\n\n      <div class=\"d-none d-md-block col-md-4\">\n        <aroio-sidebar></aroio-sidebar>\n      </div>\n    </div>\n  </div>\n</aroio-content>\n\n<aroio-footer></aroio-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/aroio-wi/convolver/index/index.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/aroio-wi/convolver/index/index.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<aroio-header></aroio-header>\n\n<aroio-content [centered]=\"true\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-8\">\n        <aroio-tabset>\n          <aroio-convolver-index-component></aroio-convolver-index-component>\n        </aroio-tabset>\n      </div>\n\n      <div class=\"d-none d-md-block col-md-4\">\n        <aroio-sidebar></aroio-sidebar>\n      </div>\n    </div>\n  </div>\n</aroio-content>\n\n<aroio-footer></aroio-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/aroio-wi/convolver/wizard/wizard.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/aroio-wi/convolver/wizard/wizard.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<aroio-header></aroio-header>\n\n<aroio-content [centered]=\"true\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-8\">\n        <aroio-tabset>\n          <aroio-convolver-wizard-component></aroio-convolver-wizard-component>\n        </aroio-tabset>\n      </div>\n\n      <div class=\"d-none d-md-block col-md-4\">\n        <aroio-sidebar></aroio-sidebar>\n      </div>\n    </div>\n  </div>\n</aroio-content>\n\n<aroio-footer></aroio-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/aroio-wi/network/index/index.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/aroio-wi/network/index/index.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<aroio-header></aroio-header>\n\n<aroio-content [centered]=\"true\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-8\">\n        <aroio-tabset>\n          <aroio-network-index-component></aroio-network-index-component>\n        </aroio-tabset>\n      </div>\n\n      <div class=\"d-none d-md-block col-md-4\">\n        <aroio-sidebar></aroio-sidebar>\n      </div>\n    </div>\n  </div>\n</aroio-content>\n\n<aroio-footer></aroio-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/aroio-wi/streaming/index/index.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/aroio-wi/streaming/index/index.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<aroio-header></aroio-header>\n\n\n<aroio-content [centered]=\"true\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-8\">\n        <aroio-tabset>\n          <aroio-streaming-index-component></aroio-streaming-index-component>\n        </aroio-tabset>\n      </div>\n\n      <div class=\"d-none d-md-block col-md-4\">\n        <aroio-sidebar></aroio-sidebar>\n      </div>\n    </div>\n  </div>\n</aroio-content>\n\n<aroio-footer></aroio-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/aroio-wi/system/index/index.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/aroio-wi/system/index/index.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<aroio-header></aroio-header>\n\n\n<aroio-content [centered]=\"true\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-8\">\n        <aroio-tabset>\n          <aroio-system-index-component></aroio-system-index-component>\n        </aroio-tabset>\n      </div>\n\n      <div class=\"d-none d-md-block col-md-4\">\n        <aroio-sidebar></aroio-sidebar>\n      </div>\n    </div>\n  </div>\n</aroio-content>\n\n<aroio-footer></aroio-footer>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/aroio-wi.component.ts":
/*!***************************************!*\
  !*** ./src/app/aroio-wi.component.ts ***!
  \***************************************/
/*! exports provided: AroioWiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioWiComponent", function() { return AroioWiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common_locales_de__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/locales/de */ "./node_modules/@angular/common/locales/de.js");
/* harmony import */ var _angular_common_locales_de__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_de__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common_locales_extra_de__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/locales/extra/de */ "./node_modules/@angular/common/locales/extra/de.js");
/* harmony import */ var _angular_common_locales_extra_de__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_extra_de__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/locales/en */ "./node_modules/@angular/common/locales/en.js");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_common_locales_extra_en__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/locales/extra/en */ "./node_modules/@angular/common/locales/extra/en.js");
/* harmony import */ var _angular_common_locales_extra_en__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_extra_en__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/chronos/fesm5/ngx-bootstrap-chronos.js");










Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["registerLocaleData"])(_angular_common_locales_de__WEBPACK_IMPORTED_MODULE_5___default.a, 'de', _angular_common_locales_extra_de__WEBPACK_IMPORTED_MODULE_6___default.a);
Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_7___default.a, 'en', _angular_common_locales_extra_en__WEBPACK_IMPORTED_MODULE_8___default.a);
var AroioWiComponent = /** @class */ (function () {
    function AroioWiComponent(translate) {
        var _this = this;
        this.translate = translate;
        this.version = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].version;
        this.currentTranslation = 'en';
        this.isLoading = false;
        this.isLoading = true;
        Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_9__["defineLocale"])('de', ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_9__["deLocale"]);
        this.translate.use(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].defaultLocale).subscribe(function () {
            _this.currentTranslation = _this.translate.currentLang;
            _this.isLoading = false;
        });
    }
    AroioWiComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
    ]; };
    AroioWiComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'aroio-wi-root',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./aroio-wi.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/aroio-wi.component.html")).default
        })
    ], AroioWiComponent);
    return AroioWiComponent;
}());



/***/ }),

/***/ "./src/app/aroio-wi.module.ts":
/*!************************************!*\
  !*** ./src/app/aroio-wi.module.ts ***!
  \************************************/
/*! exports provided: createTranslateLoader, TranslateHandler, AroioWiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateHandler", function() { return TranslateHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioWiModule", function() { return AroioWiModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _aroio_wi_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aroio-wi.component */ "./src/app/aroio-wi.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _pages_aroio_wi_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/aroio-wi-routing.module */ "./src/app/pages/aroio-wi-routing.module.ts");
/* harmony import */ var _modules_core_core_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/core/core.module */ "./src/app/modules/core/core.module.ts");
/* harmony import */ var _braune_digital_form_utilities__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @braune-digital/form-utilities */ "./node_modules/@braune-digital/form-utilities/__ivy_ngcc__/fesm5/braune-digital-form-utilities.js");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/__ivy_ngcc__/fesm5/ngx-swiper-wrapper.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm5/ngx-bootstrap-tooltip.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _modules_aroio_wi_modules_layout_layout_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/aroio-wi/modules/layout/layout.module */ "./src/app/modules/aroio-wi/modules/layout/layout.module.ts");


















function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__["TranslateHttpLoader"](http, _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].api + 'translations/', '');
}
// Handler for missing translations debuggin
var TranslateHandler = /** @class */ (function () {
    function TranslateHandler() {
    }
    TranslateHandler.prototype.handle = function (params) {
        console.log('Missing translation for:', params.key);
    };
    return TranslateHandler;
}());

var AroioWiModule = /** @class */ (function () {
    function AroioWiModule() {
    }
    AroioWiModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _aroio_wi_component__WEBPACK_IMPORTED_MODULE_3__["AroioWiComponent"]
            ],
            imports: [
                _modules_core_core_module__WEBPACK_IMPORTED_MODULE_10__["AroioCoreModule"],
                _modules_aroio_wi_modules_layout_layout_module__WEBPACK_IMPORTED_MODULE_17__["AroioLayoutModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _braune_digital_form_utilities__WEBPACK_IMPORTED_MODULE_11__["FormUtilitiesModule"].forRoot({
                    displayErrors: true,
                    classFormGroup: 'form-group',
                    classFromInput: 'form-input',
                    classFormInputGroup: 'input-group',
                    classFormInputGroupPrepend: 'input-group-prepend',
                    classFormInputGroupAppend: 'input-group-append',
                    classFormInputGroupText: 'input-group-text',
                    classFromLegend: 'form-legend',
                    classFormLabel: 'form-label',
                    classFormControl: 'form-control',
                    classFormCounter: 'form-counter',
                    classFormError: 'form-errors',
                    classFormHelp: 'form-help',
                    classFormRequired: 'form-required',
                    classIconBase: 'far',
                    requiredString: '*',
                    maxLengthString: 'Noch %s Zeichen',
                    minLengthString: 'Es fehlen noch %s Zeichen',
                    counterBefore: false
                }),
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _pages_aroio_wi_routing_module__WEBPACK_IMPORTED_MODULE_9__["AroioWiRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_12__["SwiperModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_15__["ModalModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_13__["TooltipModule"].forRoot(),
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_14__["TabsModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
                        useFactory: (createTranslateLoader),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]
                    },
                    missingTranslationHandler: [{ provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["MissingTranslationHandler"], useClass: TranslateHandler }]
                }),
            ],
            providers: [
                _braune_digital_form_utilities__WEBPACK_IMPORTED_MODULE_11__["FormErrorService"]
            ],
            bootstrap: [_aroio_wi_component__WEBPACK_IMPORTED_MODULE_3__["AroioWiComponent"]]
        })
    ], AroioWiModule);
    return AroioWiModule;
}());



/***/ }),

/***/ "./src/app/modules/aroio-wi/modules/audio/audio.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/aroio-wi/modules/audio/audio.module.ts ***!
  \****************************************************************/
/*! exports provided: AroioAudioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioAudioModule", function() { return AroioAudioModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layout/layout.module */ "./src/app/modules/aroio-wi/modules/layout/layout.module.ts");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/modules/aroio-wi/modules/audio/components/index/index.component.ts");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/__ivy_ngcc__/fesm5/ngx-swiper-wrapper.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tabs/fesm5/ngx-bootstrap-tabs.js");










var DEFAULT_SWIPER_CONFIG = {
    direction: 'horizontal',
    slidesPerView: 'auto'
};
var AroioAudioModule = /** @class */ (function () {
    function AroioAudioModule() {
    }
    AroioAudioModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_9__["TabsModule"],
                _layout_layout_module__WEBPACK_IMPORTED_MODULE_6__["AroioLayoutModule"],
                ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_8__["SwiperModule"]
            ],
            declarations: [
                _components_index_index_component__WEBPACK_IMPORTED_MODULE_7__["AudioIndexComponent"],
            ],
            exports: [
                _components_index_index_component__WEBPACK_IMPORTED_MODULE_7__["AudioIndexComponent"],
            ],
            providers: [
                {
                    provide: ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_8__["SWIPER_CONFIG"],
                    useValue: DEFAULT_SWIPER_CONFIG
                }
            ],
        })
    ], AroioAudioModule);
    return AroioAudioModule;
}());



/***/ }),

/***/ "./src/app/modules/aroio-wi/modules/audio/components/index/index.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/aroio-wi/modules/audio/components/index/index.component.ts ***!
  \************************************************************************************/
/*! exports provided: AudioIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioIndexComponent", function() { return AudioIndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _utils_audio_configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../utils/audio-configuration */ "./src/app/utils/audio-configuration.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");




var AudioIndexComponent = /** @class */ (function () {
    function AudioIndexComponent() {
        this.audioOutputs = _utils_audio_configuration__WEBPACK_IMPORTED_MODULE_2__["AroioOutputs"];
        this.activeOutput = 1;
        this.index = 0;
        this.switchState = [];
        this.config = {
            direction: 'horizontal',
            slidesPerView: 1.5,
            spaceBetween: 20,
            centeredSlides: true,
            threshold: 3,
        };
    }
    AudioIndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.audioOutputs.forEach(function (output) {
            output.player.forEach(function (player) {
                _this.form.addControl(output.id + '_' + player.id, new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''));
            });
        });
    };
    AudioIndexComponent.prototype.getCheckboxState = function (switchState, id) {
        return this.switchState[id];
    };
    AudioIndexComponent.prototype.changeStatus = function (switchState, id) {
        console.log('changeStatus', id);
        if (this.switchState[id]) {
            this.switchState[id] = false;
        }
        else {
            this.switchState[id] = true;
        }
    };
    AudioIndexComponent.prototype.changeSelect = function (index) {
        setTimeout(function (_) {
            console.log(index);
            // this.activeOutput = index;
        }, 0);
    };
    AudioIndexComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '<aroio-audio-index-component>',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/audio/components/index/index.component.html")).default
        })
    ], AudioIndexComponent);
    return AudioIndexComponent;
}());



/***/ }),

/***/ "./src/app/modules/aroio-wi/modules/convolver/components/index/index.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/aroio-wi/modules/convolver/components/index/index.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ConvolverIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConvolverIndexComponent", function() { return ConvolverIndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _layout_animations_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../layout/animations/animations */ "./src/app/modules/aroio-wi/modules/layout/animations/animations.ts");
/* harmony import */ var _core_services_aroio_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/services/aroio-settings.service */ "./src/app/modules/core/services/aroio-settings.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/services/alert.service */ "./src/app/modules/core/services/alert.service.ts");







var ConvolverIndexComponent = /** @class */ (function () {
    function ConvolverIndexComponent(translate, settingsSerivce, alert) {
        this.translate = translate;
        this.settingsSerivce = settingsSerivce;
        this.alert = alert;
        this.form = null;
        this.subscriptions = [];
    }
    ConvolverIndexComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.subscriptions.push(this.settingsSerivce.getAroioSettings().subscribe(function (aroioSettings) {
            _this.buildForm(aroioSettings);
        }));
    };
    ConvolverIndexComponent.prototype.buildForm = function (aroioSettings) {
        if (aroioSettings === void 0) { aroioSettings = null; }
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            brutefir: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](aroioSettings.configuration.convolver.brutefir ? aroioSettings.configuration.convolver.brutefir : false),
            load_prefilter: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](aroioSettings.configuration.convolver.load_prefilter ? aroioSettings.configuration.convolver.load_prefilter : false),
            def_coeff: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](aroioSettings.configuration.convolver.def_coeff ? aroioSettings.configuration.convolver.def_coeff : ''),
            filter: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]),
        });
    };
    ConvolverIndexComponent.prototype.submitForm = function (event) {
        var _this = this;
        this.subscriptions.push(this.settingsSerivce.setAroioSettingsConvolver(this.form.getRawValue()).subscribe(function (_) {
            _this.alert.alert$.next({ message: 'Convolver erfolgreich gespeichert', type: 'success' });
        }, function (error) {
            _this.alert.alert$.next({ message: 'Es ist ein Fehler aufgetreten.', type: 'error' });
        }));
    };
    ConvolverIndexComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (_) {
            _.unsubscribe();
        });
    };
    ConvolverIndexComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: _core_services_aroio_settings_service__WEBPACK_IMPORTED_MODULE_4__["AroioSettingsService"] },
        { type: _core_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AroioAlertService"] }
    ]; };
    ConvolverIndexComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '<aroio-convolver-index-component>',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/convolver/components/index/index.component.html")).default,
            animations: [
                _layout_animations_animations__WEBPACK_IMPORTED_MODULE_3__["Animations"].fadeHeightInOut,
            ]
        })
    ], ConvolverIndexComponent);
    return ConvolverIndexComponent;
}());



/***/ }),

/***/ "./src/app/modules/aroio-wi/modules/convolver/components/wizard/wizard.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/aroio-wi/modules/convolver/components/wizard/wizard.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ConvolverWizardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConvolverWizardComponent", function() { return ConvolverWizardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _layout_animations_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../layout/animations/animations */ "./src/app/modules/aroio-wi/modules/layout/animations/animations.ts");





var ConvolverWizardComponent = /** @class */ (function () {
    function ConvolverWizardComponent(_api) {
        this._api = _api;
        this.convolutionEnabled = true;
    }
    ConvolverWizardComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            hostname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            ip: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            gateway: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            subnet: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            platform: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
        });
    };
    ConvolverWizardComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ConvolverWizardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '<aroio-convolver-wizard-component>',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./wizard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/convolver/components/wizard/wizard.component.html")).default,
            animations: [
                _layout_animations_animations__WEBPACK_IMPORTED_MODULE_4__["Animations"].fadeHeightInOut,
            ]
        })
    ], ConvolverWizardComponent);
    return ConvolverWizardComponent;
}());



/***/ }),

/***/ "./src/app/modules/aroio-wi/modules/convolver/convolver.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/aroio-wi/modules/convolver/convolver.module.ts ***!
  \************************************************************************/
/*! exports provided: AroioConvolverModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioConvolverModule", function() { return AroioConvolverModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layout/layout.module */ "./src/app/modules/aroio-wi/modules/layout/layout.module.ts");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/modules/aroio-wi/modules/convolver/components/index/index.component.ts");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _components_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/wizard/wizard.component */ "./src/app/modules/aroio-wi/modules/convolver/components/wizard/wizard.component.ts");
/* harmony import */ var angular_archwizard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-archwizard */ "./node_modules/angular-archwizard/__ivy_ngcc__/fesm5/angular-archwizard.js");












var AroioConvolverModule = /** @class */ (function () {
    function AroioConvolverModule() {
    }
    AroioConvolverModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__["TabsModule"],
                _layout_layout_module__WEBPACK_IMPORTED_MODULE_6__["AroioLayoutModule"],
                angular_archwizard__WEBPACK_IMPORTED_MODULE_11__["ArchwizardModule"]
            ],
            declarations: [
                _components_index_index_component__WEBPACK_IMPORTED_MODULE_7__["ConvolverIndexComponent"],
                _components_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_10__["ConvolverWizardComponent"]
            ],
            exports: [
                _components_index_index_component__WEBPACK_IMPORTED_MODULE_7__["ConvolverIndexComponent"],
                _components_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_10__["ConvolverWizardComponent"]
            ],
            providers: [],
        })
    ], AroioConvolverModule);
    return AroioConvolverModule;
}());



/***/ }),

/***/ "./src/app/modules/aroio-wi/modules/layout/animations/animations.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/aroio-wi/modules/layout/animations/animations.ts ***!
  \**************************************************************************/
/*! exports provided: Animations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animations", function() { return Animations; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm5/animations.js");


var Animations = {
    slideRightOut: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideRightOut', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-100%)', opacity: 0 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0)', opacity: 1 })),
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)', opacity: 0 }))
        ])
    ]),
    fadeHeightInOut: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeHeightInOut', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0', height: '0', 'padding-top': '0', 'padding-bottom': '0' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '1', height: '*', 'padding-top': '*', 'padding-bottom': '*' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '1', height: '*', 'padding-top': '*', 'padding-bottom': '*' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0', height: '0', 'padding-top': '0', 'padding-bottom': '0' }))
        ])
    ]),
    fadeInOut: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeInOut', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '1' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '1' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0' }))
        ])
    ]),
    halfFadeInOut: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('halfFadeInOut', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '.5' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '.5' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0' }))
        ])
    ]),
    fadeWidthOut: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeWidthOut', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ width: '*', opacity: '1' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ width: '0', opacity: '0' }))
        ])
    ]),
    showNavLinkBackwards: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('showNavLinkBackwards', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0', transform: 'translateX(-90px)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '1', transform: 'translateX(-130px)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '1', transform: 'translateX(-130px)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0', transform: 'translateX(-90px)' }))
        ])
    ]),
    showNavLinkForwards: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('showNavLinkForwards', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0', transform: 'translateX(90px)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '1', transform: 'translateX(130px)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '1', transform: 'translateX(130px)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0', transform: 'translateX(90px)' }))
        ])
    ])
};


/***/ }),

/***/ "./src/app/modules/aroio-wi/modules/layout/components/aroio-alert/aroio-alert.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/aroio-wi/modules/layout/components/aroio-alert/aroio-alert.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: AroioAlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioAlertComponent", function() { return AroioAlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _core_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/services/alert.service */ "./src/app/modules/core/services/alert.service.ts");
/* harmony import */ var _animations_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../animations/animations */ "./src/app/modules/aroio-wi/modules/layout/animations/animations.ts");




var AroioAlertComponent = /** @class */ (function () {
    function AroioAlertComponent(_alertService) {
        var _this = this;
        this._alertService = _alertService;
        this.closeable = false;
        this.timeout = 6500;
        this._alerts = [];
        this._alertService.alert$.subscribe(function (_alert) {
            _this._alerts.push(_alert);
        });
    }
    Object.defineProperty(AroioAlertComponent.prototype, "alert", {
        get: function () {
            return this._alerts[this._alerts.length - 1];
        },
        enumerable: true,
        configurable: true
    });
    AroioAlertComponent.prototype.removeAlert = function (alert) {
        this._alerts = this._alerts.filter(function (obj) { return obj !== alert; });
    };
    AroioAlertComponent.prototype.removeAlertWithTimeout = function (alert) {
        var _this = this;
        setTimeout(function () {
            _this._alerts = _this._alerts.filter(function (obj) { return obj !== alert; });
        }, this.timeout);
    };
    AroioAlertComponent.ctorParameters = function () { return [
        { type: _core_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AroioAlertService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AroioAlertComponent.prototype, "closeable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AroioAlertComponent.prototype, "timeout", void 0);
    AroioAlertComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'aroio-alert, [aroio-alert]',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./aroio-alert.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/components/aroio-alert/aroio-alert.component.html")).default,
            animations: [
                _animations_animations__WEBPACK_IMPORTED_MODULE_3__["Animations"].slideRightOut
            ]
        })
    ], AroioAlertComponent);
    return AroioAlertComponent;
}());



/***/ }),

/***/ "./src/app/modules/aroio-wi/modules/layout/components/aroio-button/aroio-button.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/aroio-wi/modules/layout/components/aroio-button/aroio-button.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: AroioButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioButtonComponent", function() { return AroioButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _utils_bem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../utils/bem */ "./src/app/utils/bem.ts");



var AroioButtonComponent = /** @class */ (function () {
    function AroioButtonComponent() {
        this.baseClass = 'btn';
        this.loading = false;
        this.size = null;
        this.color = null;
        this.type = null;
        this.block = false;
        this.outline = false;
        this.inline = false;
        this.disabled = false;
    }
    Object.defineProperty(AroioButtonComponent.prototype, "hostClasses", {
        get: function () {
            var bem = new _utils_bem__WEBPACK_IMPORTED_MODULE_2__["Bem"](this.baseClass);
            return bem.setMods(this.baseClass, [
                bem.setModifier(this.size),
                bem.setModifier(this.color),
                bem.setModifier(this.type),
                bem.checkModifier(this.outline, 'outline'),
                bem.checkModifier(this.inline, 'inline'),
                bem.checkModifier(this.block, 'block'),
                bem.checkModifier(this.loading, 'loading'),
                bem.checkModifier(this.disabled, 'disabled'),
            ]);
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('loading')
    ], AroioButtonComponent.prototype, "loading", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('size')
    ], AroioButtonComponent.prototype, "size", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('color')
    ], AroioButtonComponent.prototype, "color", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('type')
    ], AroioButtonComponent.prototype, "type", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('block')
    ], AroioButtonComponent.prototype, "block", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('outline')
    ], AroioButtonComponent.prototype, "outline", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('inline')
    ], AroioButtonComponent.prototype, "inline", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disabled')
    ], AroioButtonComponent.prototype, "disabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
    ], AroioButtonComponent.prototype, "hostClasses", null);
    AroioButtonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'aroio-button, aroio-btn, [aroio-button], [aroio-btn]',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./aroio-button.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/components/aroio-button/aroio-button.component.html")).default
        })
    ], AroioButtonComponent);
    return AroioButtonComponent;
}());



/***/ }),

/***/ "./src/app/modules/aroio-wi/modules/layout/components/aroio-content-item/aroio-content-item.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/aroio-wi/modules/layout/components/aroio-content-item/aroio-content-item.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: AroioContentItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioContentItemComponent", function() { return AroioContentItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var AroioContentItemComponent = /** @class */ (function () {
    function AroioContentItemComponent() {
    }
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AroioContentItemComponent.prototype, "title", void 0);
    AroioContentItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'aroio-content-item, [aroio-content-item]',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./aroio-content-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/components/aroio-content-item/aroio-content-item.component.html")).default,
        })
    ], AroioContentItemComponent);
    return AroioContentItemComponent;
}());



/***/ }),

/***/ "./src/app/modules/aroio-wi/modules/layout/components/aroio-content/aroio-content.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/aroio-wi/modules/layout/components/aroio-content/aroio-content.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: AroioContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioContentComponent", function() { return AroioContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var AroioContentComponent = /** @class */ (function () {
    function AroioContentComponent() {
        this.centered = false;
    }
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AroioContentComponent.prototype, "centered", void 0);
    AroioContentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'aroio-content',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./aroio-content.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/components/aroio-content/aroio-content.component.html")).default
        })
    ], AroioContentComponent);
    return AroioContentComponent;
}());



/***/ }),

/***/ "./src/app/modules/aroio-wi/modules/layout/components/aroio-filter-list/aroio-filter-list-item/aroio-filter-list-item.component.ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/modules/aroio-wi/modules/layout/components/aroio-filter-list/aroio-filter-list-item/aroio-filter-list-item.component.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: AroioFilterListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioFilterListItemComponent", function() { return AroioFilterListItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");




var AroioFilterListItemComponent = /** @class */ (function () {
    function AroioFilterListItemComponent(modalService) {
        this.modalService = modalService;
        this.class = 'aroio-filter-list__item';
        this.id = Math.random().toString(36).substring(7);
        // Modal Specific
        this.modalIndex = 0;
    }
    AroioFilterListItemComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            filterName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            pegel: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
        });
    };
    // Modal Specific
    // -----------------------
    AroioFilterListItemComponent.prototype.openModal = function (template, _index) {
        if (!this.modalRef) {
            this.modalRef = this.modalService.show(template, { class: 'modal--lg' });
        }
    };
    AroioFilterListItemComponent.prototype.modalAccept = function (_index) {
        console.log('Modal Accepted');
        this.modalRef.hide();
    };
    AroioFilterListItemComponent.prototype.modalClose = function (_index) {
        this.modalRef.hide();
        this.modalRef = null;
    };
    AroioFilterListItemComponent.ctorParameters = function () { return [
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
    ], AroioFilterListItemComponent.prototype, "class", void 0);
    AroioFilterListItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'aroio-filter-list-item',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./aroio-filter-list-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/components/aroio-filter-list/aroio-filter-list-item/aroio-filter-list-item.component.html")).default
        })
    ], AroioFilterListItemComponent);
    return AroioFilterListItemComponent;
}());



/***/ }),

/***/ "./src/app/modules/aroio-wi/modules/layout/components/aroio-filter-list/aroio-filter-list.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/aroio-wi/modules/layout/components/aroio-filter-list/aroio-filter-list.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: AroioFilterListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioFilterListComponent", function() { return AroioFilterListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var AroioFilterListComponent = /** @class */ (function () {
    function AroioFilterListComponent() {
    }
    AroioFilterListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'aroio-filter-list',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./aroio-filter-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/components/aroio-filter-list/aroio-filter-list.component.html")).default
        })
    ], AroioFilterListComponent);
    return AroioFilterListComponent;
}());



/***/ }),

/***/ "./src/app/modules/aroio-wi/modules/layout/components/aroio-footer/aroio-footer.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/aroio-wi/modules/layout/components/aroio-footer/aroio-footer.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: AroioFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioFooterComponent", function() { return AroioFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var AroioFooterComponent = /** @class */ (function () {
    function AroioFooterComponent() {
    }
    AroioFooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'aroio-footer',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./aroio-footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/components/aroio-footer/aroio-footer.component.html")).default
        })
    ], AroioFooterComponent);
    return AroioFooterComponent;
}());



/***/ }),

/***/ "./src/app/modules/aroio-wi/modules/layout/components/aroio-form-switch/aroio-form-switch.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/aroio-wi/modules/layout/components/aroio-form-switch/aroio-form-switch.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: AroioFormSwitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioFormSwitchComponent", function() { return AroioFormSwitchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _animations_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../animations/animations */ "./src/app/modules/aroio-wi/modules/layout/animations/animations.ts");



var AroioFormSwitchComponent = /** @class */ (function () {
    function AroioFormSwitchComponent() {
        this.hasContent = false;
        this.inverted = false;
        this.switchState = false;
        this.disabled = false;
        this.switched = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AroioFormSwitchComponent.prototype, "id", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AroioFormSwitchComponent.prototype, "label", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AroioFormSwitchComponent.prototype, "hasContent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AroioFormSwitchComponent.prototype, "inverted", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AroioFormSwitchComponent.prototype, "switchState", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AroioFormSwitchComponent.prototype, "disabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], AroioFormSwitchComponent.prototype, "switched", void 0);
    AroioFormSwitchComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'aroio-form-switch',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./aroio-form-switch.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/components/aroio-form-switch/aroio-form-switch.component.html")).default,
            animations: [
                _animations_animations__WEBPACK_IMPORTED_MODULE_2__["Animations"].fadeHeightInOut,
            ]
        })
    ], AroioFormSwitchComponent);
    return AroioFormSwitchComponent;
}());



/***/ }),

/***/ "./src/app/modules/aroio-wi/modules/layout/components/aroio-header/aroio-header.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/aroio-wi/modules/layout/components/aroio-header/aroio-header.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: AroioHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioHeaderComponent", function() { return AroioHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var AroioHeaderComponent = /** @class */ (function () {
    function AroioHeaderComponent() {
    }
    AroioHeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'aroio-header',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./aroio-header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/components/aroio-header/aroio-header.component.html")).default
        })
    ], AroioHeaderComponent);
    return AroioHeaderComponent;
}());



/***/ }),

/***/ "./src/app/modules/aroio-wi/modules/layout/components/aroio-input/aroio-input.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/aroio-wi/modules/layout/components/aroio-input/aroio-input.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: AroioInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioInputComponent", function() { return AroioInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _braune_digital_form_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @braune-digital/form-utilities */ "./node_modules/@braune-digital/form-utilities/__ivy_ngcc__/fesm5/braune-digital-form-utilities.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");




var AroioInputComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AroioInputComponent, _super);
    function AroioInputComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AroioInputComponent_1 = AroioInputComponent;
    Object.defineProperty(AroioInputComponent.prototype, "inputGroupClass", {
        get: function () {
            if (this.prepend) {
                return this.options.classFormInputGroup + ' ' + this.options.classFormInputGroup + '--prepend';
            }
            if (this.append) {
                return this.options.classFormInputGroup + ' ' + this.options.classFormInputGroup + '--append';
            }
            return this.options.classFormInputGroup;
        },
        enumerable: true,
        configurable: true
    });
    var AroioInputComponent_1;
    AroioInputComponent = AroioInputComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            providers: [{
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function () { return AroioInputComponent_1; }),
                    multi: true
                }],
            selector: 'aroio-input',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./aroio-input.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/components/aroio-input/aroio-input.component.html")).default
        })
    ], AroioInputComponent);
    return AroioInputComponent;
}(_braune_digital_form_utilities__WEBPACK_IMPORTED_MODULE_1__["InputComponent"]));



/***/ }),

/***/ "./src/app/modules/aroio-wi/modules/layout/components/aroio-sidebar/aroio-sidebar.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/aroio-wi/modules/layout/components/aroio-sidebar/aroio-sidebar.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: AroioSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioSidebarComponent", function() { return AroioSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/services/navigation.service */ "./src/app/modules/core/services/navigation.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");




var AroioSidebarComponent = /** @class */ (function () {
    function AroioSidebarComponent(navigationService, translate) {
        this.navigationService = navigationService;
        this.translate = translate;
    }
    AroioSidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.navigationService.$activeTab.subscribe(function (_) {
            _this.activeTab = _;
        });
    };
    AroioSidebarComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AroioSidebarComponent.ctorParameters = function () { return [
        { type: _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }
    ]; };
    AroioSidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'aroio-sidebar',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./aroio-sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/components/aroio-sidebar/aroio-sidebar.component.html")).default
        })
    ], AroioSidebarComponent);
    return AroioSidebarComponent;
}());



/***/ }),

/***/ "./src/app/modules/aroio-wi/modules/layout/components/aroio-switch/aroio-switch.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/aroio-wi/modules/layout/components/aroio-switch/aroio-switch.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: AroioSwitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioSwitchComponent", function() { return AroioSwitchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var AroioSwitchComponent = /** @class */ (function () {
    function AroioSwitchComponent() {
        this.checked = true;
        this.switchState = true;
        this.switched = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.class = 'switch';
    }
    AroioSwitchComponent.prototype.ngOnInit = function () {
        this.switched.emit(this.switchState);
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AroioSwitchComponent.prototype, "id", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AroioSwitchComponent.prototype, "checked", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AroioSwitchComponent.prototype, "formControl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AroioSwitchComponent.prototype, "switchState", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], AroioSwitchComponent.prototype, "switched", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
    ], AroioSwitchComponent.prototype, "class", void 0);
    AroioSwitchComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'aroio-switch',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./aroio-switch.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/components/aroio-switch/aroio-switch.component.html")).default
        })
    ], AroioSwitchComponent);
    return AroioSwitchComponent;
}());



/***/ }),

/***/ "./src/app/modules/aroio-wi/modules/layout/components/aroio-tabset/aroio-tabset.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/aroio-wi/modules/layout/components/aroio-tabset/aroio-tabset.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: AroioTabsetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioTabsetComponent", function() { return AroioTabsetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/services/navigation.service */ "./src/app/modules/core/services/navigation.service.ts");
/* harmony import */ var _utils_aroio_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../utils/aroio-tabs */ "./src/app/utils/aroio-tabs.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");





var AroioTabsetComponent = /** @class */ (function () {
    function AroioTabsetComponent(navigationService, translate) {
        this.navigationService = navigationService;
        this.translate = translate;
        this.aroioTabs = _utils_aroio_tabs__WEBPACK_IMPORTED_MODULE_3__["AroioTabs"];
    }
    AroioTabsetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.navigationService.$activeTab.subscribe(function (_) {
            _this.activeTab = _;
        });
    };
    AroioTabsetComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AroioTabsetComponent.ctorParameters = function () { return [
        { type: _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AroioTabsetComponent.prototype, "activeTab", void 0);
    AroioTabsetComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'aroio-tabset',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./aroio-tabset.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/components/aroio-tabset/aroio-tabset.component.html")).default
        })
    ], AroioTabsetComponent);
    return AroioTabsetComponent;
}());



/***/ }),

/***/ "./src/app/modules/aroio-wi/modules/layout/layout.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/aroio-wi/modules/layout/layout.module.ts ***!
  \******************************************************************/
/*! exports provided: AroioLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioLayoutModule", function() { return AroioLayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _components_aroio_content_item_aroio_content_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/aroio-content-item/aroio-content-item.component */ "./src/app/modules/aroio-wi/modules/layout/components/aroio-content-item/aroio-content-item.component.ts");
/* harmony import */ var angular_resize_event__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-resize-event */ "./node_modules/angular-resize-event/__ivy_ngcc__/fesm5/angular-resize-event.js");
/* harmony import */ var _utils_aroio_loading_aroio_loading_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/aroio-loading/aroio-loading.component */ "./src/app/modules/aroio-wi/modules/layout/utils/aroio-loading/aroio-loading.component.ts");
/* harmony import */ var _utils_aroio_badge_aroio_badge_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/aroio-badge/aroio-badge.component */ "./src/app/modules/aroio-wi/modules/layout/utils/aroio-badge/aroio-badge.component.ts");
/* harmony import */ var _utils_aroio_message_aroio_message_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/aroio-message/aroio-message.component */ "./src/app/modules/aroio-wi/modules/layout/utils/aroio-message/aroio-message.component.ts");
/* harmony import */ var _utils_aroio_progress_bar_aroio_progress_bar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils/aroio-progress-bar/aroio-progress-bar.component */ "./src/app/modules/aroio-wi/modules/layout/utils/aroio-progress-bar/aroio-progress-bar.component.ts");
/* harmony import */ var _utils_aroio_progress_circle_aroio_progress_circle_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utils/aroio-progress-circle/aroio-progress-circle.component */ "./src/app/modules/aroio-wi/modules/layout/utils/aroio-progress-circle/aroio-progress-circle.component.ts");
/* harmony import */ var _components_aroio_button_aroio_button_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/aroio-button/aroio-button.component */ "./src/app/modules/aroio-wi/modules/layout/components/aroio-button/aroio-button.component.ts");
/* harmony import */ var _components_aroio_tabset_aroio_tabset_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/aroio-tabset/aroio-tabset.component */ "./src/app/modules/aroio-wi/modules/layout/components/aroio-tabset/aroio-tabset.component.ts");
/* harmony import */ var _components_aroio_header_aroio_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/aroio-header/aroio-header.component */ "./src/app/modules/aroio-wi/modules/layout/components/aroio-header/aroio-header.component.ts");
/* harmony import */ var _components_aroio_footer_aroio_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/aroio-footer/aroio-footer.component */ "./src/app/modules/aroio-wi/modules/layout/components/aroio-footer/aroio-footer.component.ts");
/* harmony import */ var _components_aroio_content_aroio_content_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/aroio-content/aroio-content.component */ "./src/app/modules/aroio-wi/modules/layout/components/aroio-content/aroio-content.component.ts");
/* harmony import */ var _components_aroio_sidebar_aroio_sidebar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/aroio-sidebar/aroio-sidebar.component */ "./src/app/modules/aroio-wi/modules/layout/components/aroio-sidebar/aroio-sidebar.component.ts");
/* harmony import */ var _components_aroio_switch_aroio_switch_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/aroio-switch/aroio-switch.component */ "./src/app/modules/aroio-wi/modules/layout/components/aroio-switch/aroio-switch.component.ts");
/* harmony import */ var _components_aroio_form_switch_aroio_form_switch_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/aroio-form-switch/aroio-form-switch.component */ "./src/app/modules/aroio-wi/modules/layout/components/aroio-form-switch/aroio-form-switch.component.ts");
/* harmony import */ var _components_aroio_input_aroio_input_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/aroio-input/aroio-input.component */ "./src/app/modules/aroio-wi/modules/layout/components/aroio-input/aroio-input.component.ts");
/* harmony import */ var _braune_digital_form_utilities__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @braune-digital/form-utilities */ "./node_modules/@braune-digital/form-utilities/__ivy_ngcc__/fesm5/braune-digital-form-utilities.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm5/ngx-bootstrap-tooltip.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var _components_aroio_filter_list_aroio_filter_list_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/aroio-filter-list/aroio-filter-list.component */ "./src/app/modules/aroio-wi/modules/layout/components/aroio-filter-list/aroio-filter-list.component.ts");
/* harmony import */ var _components_aroio_filter_list_aroio_filter_list_item_aroio_filter_list_item_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/aroio-filter-list/aroio-filter-list-item/aroio-filter-list-item.component */ "./src/app/modules/aroio-wi/modules/layout/components/aroio-filter-list/aroio-filter-list-item/aroio-filter-list-item.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _components_aroio_alert_aroio_alert_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/aroio-alert/aroio-alert.component */ "./src/app/modules/aroio-wi/modules/layout/components/aroio-alert/aroio-alert.component.ts");































var AroioLayoutModule = /** @class */ (function () {
    function AroioLayoutModule() {
    }
    AroioLayoutModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _braune_digital_form_utilities__WEBPACK_IMPORTED_MODULE_24__["FormUtilitiesModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_29__["ModalModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_25__["TooltipModule"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_26__["TabsModule"],
                angular_resize_event__WEBPACK_IMPORTED_MODULE_9__["AngularResizedEventModule"]
            ],
            declarations: [
                // ---------------------------
                // Aroio Stuff
                // ---------------------------
                _components_aroio_content_item_aroio_content_item_component__WEBPACK_IMPORTED_MODULE_8__["AroioContentItemComponent"],
                _utils_aroio_message_aroio_message_component__WEBPACK_IMPORTED_MODULE_12__["AroioMessageComponent"],
                _components_aroio_filter_list_aroio_filter_list_component__WEBPACK_IMPORTED_MODULE_27__["AroioFilterListComponent"],
                _components_aroio_filter_list_aroio_filter_list_item_aroio_filter_list_item_component__WEBPACK_IMPORTED_MODULE_28__["AroioFilterListItemComponent"],
                // ---------------------------
                // Layout
                // ---------------------------
                _components_aroio_header_aroio_header_component__WEBPACK_IMPORTED_MODULE_17__["AroioHeaderComponent"],
                _components_aroio_content_aroio_content_component__WEBPACK_IMPORTED_MODULE_19__["AroioContentComponent"],
                _components_aroio_footer_aroio_footer_component__WEBPACK_IMPORTED_MODULE_18__["AroioFooterComponent"],
                _utils_aroio_loading_aroio_loading_component__WEBPACK_IMPORTED_MODULE_10__["AroioLoadingComponent"],
                _components_aroio_button_aroio_button_component__WEBPACK_IMPORTED_MODULE_15__["AroioButtonComponent"],
                _components_aroio_tabset_aroio_tabset_component__WEBPACK_IMPORTED_MODULE_16__["AroioTabsetComponent"],
                _components_aroio_sidebar_aroio_sidebar_component__WEBPACK_IMPORTED_MODULE_20__["AroioSidebarComponent"],
                _components_aroio_switch_aroio_switch_component__WEBPACK_IMPORTED_MODULE_21__["AroioSwitchComponent"],
                _components_aroio_form_switch_aroio_form_switch_component__WEBPACK_IMPORTED_MODULE_22__["AroioFormSwitchComponent"],
                _utils_aroio_loading_aroio_loading_component__WEBPACK_IMPORTED_MODULE_10__["AroioLoadingComponent"],
                _components_aroio_alert_aroio_alert_component__WEBPACK_IMPORTED_MODULE_30__["AroioAlertComponent"],
                _components_aroio_input_aroio_input_component__WEBPACK_IMPORTED_MODULE_23__["AroioInputComponent"],
                // ---------------------------
                // ---------------------------
                _utils_aroio_badge_aroio_badge_component__WEBPACK_IMPORTED_MODULE_11__["AroioBadgeComponent"],
                _utils_aroio_message_aroio_message_component__WEBPACK_IMPORTED_MODULE_12__["AroioMessageComponent"],
                _utils_aroio_progress_bar_aroio_progress_bar_component__WEBPACK_IMPORTED_MODULE_13__["AroioProgressBarComponent"],
                _utils_aroio_progress_circle_aroio_progress_circle_component__WEBPACK_IMPORTED_MODULE_14__["AroioProgressCircleComponent"],
            ],
            exports: [
                // ---------------------------
                // Aroio Stuff
                // ---------------------------
                _components_aroio_content_item_aroio_content_item_component__WEBPACK_IMPORTED_MODULE_8__["AroioContentItemComponent"],
                _utils_aroio_message_aroio_message_component__WEBPACK_IMPORTED_MODULE_12__["AroioMessageComponent"],
                _components_aroio_filter_list_aroio_filter_list_component__WEBPACK_IMPORTED_MODULE_27__["AroioFilterListComponent"],
                _components_aroio_filter_list_aroio_filter_list_item_aroio_filter_list_item_component__WEBPACK_IMPORTED_MODULE_28__["AroioFilterListItemComponent"],
                _utils_aroio_loading_aroio_loading_component__WEBPACK_IMPORTED_MODULE_10__["AroioLoadingComponent"],
                // ---------------------------
                // Layout
                // ---------------------------
                _components_aroio_alert_aroio_alert_component__WEBPACK_IMPORTED_MODULE_30__["AroioAlertComponent"],
                _components_aroio_header_aroio_header_component__WEBPACK_IMPORTED_MODULE_17__["AroioHeaderComponent"],
                _components_aroio_content_aroio_content_component__WEBPACK_IMPORTED_MODULE_19__["AroioContentComponent"],
                _components_aroio_footer_aroio_footer_component__WEBPACK_IMPORTED_MODULE_18__["AroioFooterComponent"],
                _utils_aroio_loading_aroio_loading_component__WEBPACK_IMPORTED_MODULE_10__["AroioLoadingComponent"],
                _components_aroio_button_aroio_button_component__WEBPACK_IMPORTED_MODULE_15__["AroioButtonComponent"],
                _components_aroio_tabset_aroio_tabset_component__WEBPACK_IMPORTED_MODULE_16__["AroioTabsetComponent"],
                _components_aroio_sidebar_aroio_sidebar_component__WEBPACK_IMPORTED_MODULE_20__["AroioSidebarComponent"],
                _components_aroio_switch_aroio_switch_component__WEBPACK_IMPORTED_MODULE_21__["AroioSwitchComponent"],
                _components_aroio_form_switch_aroio_form_switch_component__WEBPACK_IMPORTED_MODULE_22__["AroioFormSwitchComponent"],
                _components_aroio_input_aroio_input_component__WEBPACK_IMPORTED_MODULE_23__["AroioInputComponent"],
                // ---------------------------
                // Utils
                // ---------------------------
                _utils_aroio_badge_aroio_badge_component__WEBPACK_IMPORTED_MODULE_11__["AroioBadgeComponent"],
                _utils_aroio_message_aroio_message_component__WEBPACK_IMPORTED_MODULE_12__["AroioMessageComponent"],
                _utils_aroio_progress_bar_aroio_progress_bar_component__WEBPACK_IMPORTED_MODULE_13__["AroioProgressBarComponent"],
                _utils_aroio_progress_circle_aroio_progress_circle_component__WEBPACK_IMPORTED_MODULE_14__["AroioProgressCircleComponent"],
            ],
            providers: [
                _braune_digital_form_utilities__WEBPACK_IMPORTED_MODULE_24__["FormErrorService"]
            ],
            entryComponents: [],
        })
    ], AroioLayoutModule);
    return AroioLayoutModule;
}());



/***/ }),

/***/ "./src/app/modules/aroio-wi/modules/layout/utils/aroio-badge/aroio-badge.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/aroio-wi/modules/layout/utils/aroio-badge/aroio-badge.component.ts ***!
  \********************************************************************************************/
/*! exports provided: AroioBadgeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioBadgeComponent", function() { return AroioBadgeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _utils_bem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../utils/bem */ "./src/app/utils/bem.ts");



var AroioBadgeComponent = /** @class */ (function () {
    function AroioBadgeComponent() {
        this.baseClass = 'badge';
        this.size = null;
        this.text = false;
        this.color = null;
        this.pill = false;
        this.hover = false;
    }
    Object.defineProperty(AroioBadgeComponent.prototype, "hostClasses", {
        get: function () {
            var bem = new _utils_bem__WEBPACK_IMPORTED_MODULE_2__["Bem"](this.baseClass);
            var classNames = bem.setMods(this.baseClass, [
                bem.setModifier(this.size),
                bem.setModifier(this.color),
                bem.checkModifier(this.pill, 'pill'),
                bem.checkModifier(this.hover, 'hover')
            ]);
            if (this.text) {
                classNames += ' ' + this.baseClass + '--text';
            }
            if (this.size) {
                classNames += ' ' + this.baseClass + '--' + this.size;
            }
            return classNames;
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('size')
    ], AroioBadgeComponent.prototype, "size", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('text')
    ], AroioBadgeComponent.prototype, "text", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('color')
    ], AroioBadgeComponent.prototype, "color", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('pill')
    ], AroioBadgeComponent.prototype, "pill", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('hover')
    ], AroioBadgeComponent.prototype, "hover", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
    ], AroioBadgeComponent.prototype, "hostClasses", null);
    AroioBadgeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'aroio-badge, [aroio-badge]',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./aroio-badge.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/utils/aroio-badge/aroio-badge.component.html")).default
        })
    ], AroioBadgeComponent);
    return AroioBadgeComponent;
}());



/***/ }),

/***/ "./src/app/modules/aroio-wi/modules/layout/utils/aroio-loading/aroio-loading.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/aroio-wi/modules/layout/utils/aroio-loading/aroio-loading.component.ts ***!
  \************************************************************************************************/
/*! exports provided: AroioLoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioLoadingComponent", function() { return AroioLoadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm5/animations.js");



var AroioLoadingComponent = /** @class */ (function () {
    function AroioLoadingComponent() {
        this.isLoading = true;
        this.overlay = false;
        this.text = 'global.loading';
    }
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AroioLoadingComponent.prototype, "isLoading", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AroioLoadingComponent.prototype, "overlay", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AroioLoadingComponent.prototype, "text", void 0);
    AroioLoadingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'aroio-loading',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./aroio-loading.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/utils/aroio-loading/aroio-loading.component.html")).default,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fadeInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: 0
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('333ms ease')),
                ]),
            ]
        })
    ], AroioLoadingComponent);
    return AroioLoadingComponent;
}());



/***/ }),

/***/ "./src/app/modules/aroio-wi/modules/layout/utils/aroio-message/aroio-message.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/aroio-wi/modules/layout/utils/aroio-message/aroio-message.component.ts ***!
  \************************************************************************************************/
/*! exports provided: AroioMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioMessageComponent", function() { return AroioMessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var AroioMessageComponent = /** @class */ (function () {
    function AroioMessageComponent() {
        this.title = null;
    }
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('color')
    ], AroioMessageComponent.prototype, "color", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('title')
    ], AroioMessageComponent.prototype, "title", void 0);
    AroioMessageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'aroio-message',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./aroio-message.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/utils/aroio-message/aroio-message.component.html")).default
        })
    ], AroioMessageComponent);
    return AroioMessageComponent;
}());



/***/ }),

/***/ "./src/app/modules/aroio-wi/modules/layout/utils/aroio-progress-bar/aroio-progress-bar.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/aroio-wi/modules/layout/utils/aroio-progress-bar/aroio-progress-bar.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: AroioProgressBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioProgressBarComponent", function() { return AroioProgressBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var AroioProgressBarComponent = /** @class */ (function () {
    function AroioProgressBarComponent() {
        this.progress = 0;
    }
    AroioProgressBarComponent.prototype.applyWidth = function () {
        return { 'width': this.progress + '%' };
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('progress')
    ], AroioProgressBarComponent.prototype, "progress", void 0);
    AroioProgressBarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'aroio-progress-bar',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./aroio-progress-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/utils/aroio-progress-bar/aroio-progress-bar.component.html")).default,
            host: {
                'role': 'progressbar',
                'aria-valuemin': '0',
                'aria-valuemax': '100',
                '[attr.aria-valuenow]': 'progress',
                'class': 'progress-bar'
            },
        })
    ], AroioProgressBarComponent);
    return AroioProgressBarComponent;
}());



/***/ }),

/***/ "./src/app/modules/aroio-wi/modules/layout/utils/aroio-progress-circle/aroio-progress-circle.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/aroio-wi/modules/layout/utils/aroio-progress-circle/aroio-progress-circle.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: AroioProgressCircleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioProgressCircleComponent", function() { return AroioProgressCircleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var AroioProgressCircleComponent = /** @class */ (function () {
    function AroioProgressCircleComponent() {
        this.progress = 0;
        this.minutesLeft = 0;
        this.label = 'global.time_to_end';
    }
    AroioProgressCircleComponent.prototype.applyWidth = function () {
        var degreesToTransform = (360 / 100 * this.progress) / 2;
        return { 'transform': 'rotate(' + degreesToTransform + 'deg)' };
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AroioProgressCircleComponent.prototype, "progress", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AroioProgressCircleComponent.prototype, "minutesLeft", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AroioProgressCircleComponent.prototype, "label", void 0);
    AroioProgressCircleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'aroio-progress-circle',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./aroio-progress-circle.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/utils/aroio-progress-circle/aroio-progress-circle.component.html")).default,
            host: {
                'role': 'progresscircle',
                'aria-valuemin': '0',
                'aria-valuemax': '100',
                '[attr.aria-valuenow]': 'progress',
                'class': 'progress-circle'
            },
        })
    ], AroioProgressCircleComponent);
    return AroioProgressCircleComponent;
}());



/***/ }),

/***/ "./src/app/modules/aroio-wi/modules/network/components/index/index.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/aroio-wi/modules/network/components/index/index.component.ts ***!
  \**************************************************************************************/
/*! exports provided: NetworkIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkIndexComponent", function() { return NetworkIndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _core_services_aroio_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/services/aroio-settings.service */ "./src/app/modules/core/services/aroio-settings.service.ts");
/* harmony import */ var _core_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/services/alert.service */ "./src/app/modules/core/services/alert.service.ts");





var NetworkIndexComponent = /** @class */ (function () {
    function NetworkIndexComponent(settingsSerivce, alert) {
        this.settingsSerivce = settingsSerivce;
        this.alert = alert;
        this.form = null;
        this.subscriptions = [];
    }
    NetworkIndexComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.subscriptions.push(this.settingsSerivce.getAroioSettings().subscribe(function (aroioSettings) {
            _this.buildForm(aroioSettings);
        }));
    };
    NetworkIndexComponent.prototype.buildForm = function (aroioSettings) {
        if (aroioSettings === void 0) { aroioSettings = null; }
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            hostname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](aroioSettings && aroioSettings.configuration.network.hostname ? aroioSettings.configuration.network.hostname : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            wifi: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](aroioSettings && aroioSettings.configuration.network.wifi ? aroioSettings.configuration.network.wifi : false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            lan_dhcp: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](aroioSettings && aroioSettings.configuration.network.lan_dhcp ? aroioSettings.configuration.network.lan_dhcp : false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            lan_ipaddr: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](aroioSettings && aroioSettings.configuration.network.lan_ipaddr ? aroioSettings.configuration.network.lan_ipaddr : ''),
            lan_gateway: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](aroioSettings && aroioSettings.configuration.network.lan_gateway ? aroioSettings.configuration.network.lan_gateway : ''),
            lan_netmask: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](aroioSettings && aroioSettings.configuration.network.lan_netmask ? aroioSettings.configuration.network.lan_netmask : ''),
            lan_dnsserv: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](aroioSettings && aroioSettings.configuration.network.lan_dnsserv ? aroioSettings.configuration.network.lan_dnsserv : ''),
            wlan_dhcp: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](aroioSettings && aroioSettings.configuration.network.wlan_dhcp ? aroioSettings.configuration.network.wlan_dhcp : false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            wlan_ipaddr: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](aroioSettings && aroioSettings.configuration.network.wlan_ipaddr ? aroioSettings.configuration.network.wlan_ipaddr : ''),
            wlan_gateway: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](aroioSettings && aroioSettings.configuration.network.wlan_gateway ? aroioSettings.configuration.network.wlan_gateway : ''),
            wlan_netmask: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](aroioSettings && aroioSettings.configuration.network.wlan_netmask ? aroioSettings.configuration.network.wlan_netmask : ''),
            wlan_dnsserv: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](aroioSettings && aroioSettings.configuration.network.wlan_dnsserv ? aroioSettings.configuration.network.wlan_dnsserv : ''),
            wlanpwd: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](aroioSettings && aroioSettings.configuration.network.wlanpwd ? aroioSettings.configuration.network.wlanpwd : ''),
            wlanssid: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](aroioSettings && aroioSettings.configuration.network.wlanssid ? aroioSettings.configuration.network.wlanssid : '')
        });
    };
    NetworkIndexComponent.prototype.submitForm = function (event) {
        var _this = this;
        this.subscriptions.push(this.settingsSerivce.setAroioSettingsNetwork(this.form.getRawValue()).subscribe(function (_) {
            _this.alert.alert$.next({ message: 'Netzwerk erfolgreich gespeichert', type: 'success' });
        }, function (error) {
            _this.alert.alert$.next({ message: 'Es ist ein Fehler aufgetreten.', type: 'error' });
        }));
    };
    NetworkIndexComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (_) {
            _.unsubscribe();
        });
    };
    NetworkIndexComponent.ctorParameters = function () { return [
        { type: _core_services_aroio_settings_service__WEBPACK_IMPORTED_MODULE_3__["AroioSettingsService"] },
        { type: _core_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AroioAlertService"] }
    ]; };
    NetworkIndexComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '<aroio-network-index-component>',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/network/components/index/index.component.html")).default
        })
    ], NetworkIndexComponent);
    return NetworkIndexComponent;
}());



/***/ }),

/***/ "./src/app/modules/aroio-wi/modules/network/network.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/aroio-wi/modules/network/network.module.ts ***!
  \********************************************************************/
/*! exports provided: AroioNetworkModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioNetworkModule", function() { return AroioNetworkModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layout/layout.module */ "./src/app/modules/aroio-wi/modules/layout/layout.module.ts");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/modules/aroio-wi/modules/network/components/index/index.component.ts");
/* harmony import */ var _braune_digital_form_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @braune-digital/form-utilities */ "./node_modules/@braune-digital/form-utilities/__ivy_ngcc__/fesm5/braune-digital-form-utilities.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tabs/fesm5/ngx-bootstrap-tabs.js");










var AroioNetworkModule = /** @class */ (function () {
    function AroioNetworkModule() {
    }
    AroioNetworkModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_9__["TabsModule"],
                _layout_layout_module__WEBPACK_IMPORTED_MODULE_6__["AroioLayoutModule"],
                _braune_digital_form_utilities__WEBPACK_IMPORTED_MODULE_8__["FormUtilitiesModule"]
            ],
            declarations: [
                _components_index_index_component__WEBPACK_IMPORTED_MODULE_7__["NetworkIndexComponent"],
            ],
            exports: [
                _components_index_index_component__WEBPACK_IMPORTED_MODULE_7__["NetworkIndexComponent"],
            ],
            providers: [],
        })
    ], AroioNetworkModule);
    return AroioNetworkModule;
}());



/***/ }),

/***/ "./src/app/modules/aroio-wi/modules/streaming/components/index/index.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/aroio-wi/modules/streaming/components/index/index.component.ts ***!
  \****************************************************************************************/
/*! exports provided: StreamingIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreamingIndexComponent", function() { return StreamingIndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");



var StreamingIndexComponent = /** @class */ (function () {
    function StreamingIndexComponent(_api) {
        this._api = _api;
    }
    StreamingIndexComponent.prototype.ngOnInit = function () {
    };
    StreamingIndexComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    StreamingIndexComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '<aroio-streaming-index-component>',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/streaming/components/index/index.component.html")).default
        })
    ], StreamingIndexComponent);
    return StreamingIndexComponent;
}());



/***/ }),

/***/ "./src/app/modules/aroio-wi/modules/streaming/streaming.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/aroio-wi/modules/streaming/streaming.module.ts ***!
  \************************************************************************/
/*! exports provided: AroioStreamingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioStreamingModule", function() { return AroioStreamingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layout/layout.module */ "./src/app/modules/aroio-wi/modules/layout/layout.module.ts");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/modules/aroio-wi/modules/streaming/components/index/index.component.ts");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tabs/fesm5/ngx-bootstrap-tabs.js");









var AroioStreamingModule = /** @class */ (function () {
    function AroioStreamingModule() {
    }
    AroioStreamingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__["TabsModule"],
                _layout_layout_module__WEBPACK_IMPORTED_MODULE_6__["AroioLayoutModule"]
            ],
            declarations: [
                _components_index_index_component__WEBPACK_IMPORTED_MODULE_7__["StreamingIndexComponent"],
            ],
            exports: [
                _components_index_index_component__WEBPACK_IMPORTED_MODULE_7__["StreamingIndexComponent"],
            ],
            providers: [],
        })
    ], AroioStreamingModule);
    return AroioStreamingModule;
}());



/***/ }),

/***/ "./src/app/modules/aroio-wi/modules/system/components/index/index.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/aroio-wi/modules/system/components/index/index.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SystemIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemIndexComponent", function() { return SystemIndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var SystemIndexComponent = /** @class */ (function () {
    function SystemIndexComponent() {
    }
    SystemIndexComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '<aroio-system-index-component>',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/system/components/index/index.component.html")).default
        })
    ], SystemIndexComponent);
    return SystemIndexComponent;
}());



/***/ }),

/***/ "./src/app/modules/aroio-wi/modules/system/system.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/aroio-wi/modules/system/system.module.ts ***!
  \******************************************************************/
/*! exports provided: AroioSystemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioSystemModule", function() { return AroioSystemModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layout/layout.module */ "./src/app/modules/aroio-wi/modules/layout/layout.module.ts");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/modules/aroio-wi/modules/system/components/index/index.component.ts");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tabs/fesm5/ngx-bootstrap-tabs.js");









var AroioSystemModule = /** @class */ (function () {
    function AroioSystemModule() {
    }
    AroioSystemModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__["TabsModule"],
                _layout_layout_module__WEBPACK_IMPORTED_MODULE_6__["AroioLayoutModule"]
            ],
            declarations: [
                _components_index_index_component__WEBPACK_IMPORTED_MODULE_7__["SystemIndexComponent"]
            ],
            exports: [
                _components_index_index_component__WEBPACK_IMPORTED_MODULE_7__["SystemIndexComponent"]
            ],
            providers: [],
        })
    ], AroioSystemModule);
    return AroioSystemModule;
}());



/***/ }),

/***/ "./src/app/modules/core/core.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/core/core.module.ts ***!
  \*********************************************/
/*! exports provided: AroioCoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioCoreModule", function() { return AroioCoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/navigation.service */ "./src/app/modules/core/services/navigation.service.ts");






var AroioCoreModule = /** @class */ (function () {
    function AroioCoreModule() {
    }
    AroioCoreModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            ],
            declarations: [],
            exports: [],
            providers: [
                _services_navigation_service__WEBPACK_IMPORTED_MODULE_5__["NavigationService"],
            ],
        })
    ], AroioCoreModule);
    return AroioCoreModule;
}());



/***/ }),

/***/ "./src/app/modules/core/services/alert.abstract.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/core/services/alert.abstract.service.ts ***!
  \*****************************************************************/
/*! exports provided: AroioAbstractAlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioAbstractAlertService", function() { return AroioAbstractAlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var AroioAbstractAlertService = /** @class */ (function () {
    function AroioAbstractAlertService() {
    }
    return AroioAbstractAlertService;
}());



/***/ }),

/***/ "./src/app/modules/core/services/alert.service.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/core/services/alert.service.ts ***!
  \********************************************************/
/*! exports provided: AroioAlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioAlertService", function() { return AroioAlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _alert_abstract_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert.abstract.service */ "./src/app/modules/core/services/alert.abstract.service.ts");




var AroioAlertService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AroioAlertService, _super);
    function AroioAlertService() {
        var _this = _super.call(this) || this;
        _this.alert$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        return _this;
    }
    AroioAlertService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        })
    ], AroioAlertService);
    return AroioAlertService;
}(_alert_abstract_service__WEBPACK_IMPORTED_MODULE_3__["AroioAbstractAlertService"]));



/***/ }),

/***/ "./src/app/modules/core/services/aroio-settings.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/core/services/aroio-settings.service.ts ***!
  \*****************************************************************/
/*! exports provided: AroioSettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioSettingsService", function() { return AroioSettingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");




var AroioSettingsService = /** @class */ (function () {
    function AroioSettingsService(_api) {
        this._api = _api;
    }
    AroioSettingsService.prototype.getAroioSettings = function () {
        return this._api.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + 'settings');
    };
    AroioSettingsService.prototype.setAroioSettingsNetwork = function (form) {
        return this._api.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + 'settings/network', form);
    };
    AroioSettingsService.prototype.setAroioSettingsConvolver = function (form) {
        return this._api.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + 'settings/convolver', form);
    };
    AroioSettingsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AroioSettingsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AroioSettingsService);
    return AroioSettingsService;
}());



/***/ }),

/***/ "./src/app/modules/core/services/navigation.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/core/services/navigation.service.ts ***!
  \*************************************************************/
/*! exports provided: NavigationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationService", function() { return NavigationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var NavigationService = /** @class */ (function () {
    function NavigationService() {
        this.$activeTab = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('system');
    }
    NavigationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], NavigationService);
    return NavigationService;
}());



/***/ }),

/***/ "./src/app/pages/aroio-wi-routing.module.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/aroio-wi-routing.module.ts ***!
  \**************************************************/
/*! exports provided: routes, AroioWiRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioWiRoutingModule", function() { return AroioWiRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _aroio_wi_audio_audio_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./aroio-wi/audio/audio.routing */ "./src/app/pages/aroio-wi/audio/audio.routing.ts");
/* harmony import */ var _aroio_wi_convolver_convolver_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./aroio-wi/convolver/convolver.routing */ "./src/app/pages/aroio-wi/convolver/convolver.routing.ts");
/* harmony import */ var _aroio_wi_network_network_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./aroio-wi/network/network.routing */ "./src/app/pages/aroio-wi/network/network.routing.ts");
/* harmony import */ var _aroio_wi_streaming_streaming_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./aroio-wi/streaming/streaming.routing */ "./src/app/pages/aroio-wi/streaming/streaming.routing.ts");
/* harmony import */ var _aroio_wi_system_system_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./aroio-wi/system/system.routing */ "./src/app/pages/aroio-wi/system/system.routing.ts");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/pagination/fesm5/ngx-bootstrap-pagination.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm5/ngx-bootstrap-modal.js");












var routes = [
    { path: '', redirectTo: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].defaultLocale + '/network', pathMatch: 'full' },
    { path: ':lang', redirectTo: ':lang/network', pathMatch: 'full' },
];
var AroioWiRoutingModule = /** @class */ (function () {
    function AroioWiRoutingModule() {
    }
    AroioWiRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                ////////////////////////////////////////
                // Angular Imports
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                    onSameUrlNavigation: 'reload',
                    paramsInheritanceStrategy: 'always',
                    anchorScrolling: 'enabled'
                }),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
                ////////////////////////////////////////
                // Ngx-Bootstrap
                ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_10__["PaginationModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__["ModalModule"].forRoot(),
                ////////////////////////////////////////
                // Aroio Webinterface Imports
                _aroio_wi_audio_audio_routing__WEBPACK_IMPORTED_MODULE_5__["AroioAudioPageModule"],
                _aroio_wi_convolver_convolver_routing__WEBPACK_IMPORTED_MODULE_6__["AroioConvolverPageModule"],
                _aroio_wi_network_network_routing__WEBPACK_IMPORTED_MODULE_7__["AroioNetworkPageModule"],
                _aroio_wi_streaming_streaming_routing__WEBPACK_IMPORTED_MODULE_8__["AroioStreamingPageModule"],
                _aroio_wi_system_system_routing__WEBPACK_IMPORTED_MODULE_9__["AroioSystemPageModule"]
            ],
            declarations: [],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AroioWiRoutingModule);
    return AroioWiRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/aroio-wi/audio/audio.routing.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/aroio-wi/audio/audio.routing.ts ***!
  \*******************************************************/
/*! exports provided: AudioRoutes, AroioAudioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioRoutes", function() { return AudioRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioAudioPageModule", function() { return AroioAudioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _modules_aroio_wi_modules_layout_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../modules/aroio-wi/modules/layout/layout.module */ "./src/app/modules/aroio-wi/modules/layout/layout.module.ts");
/* harmony import */ var _index_index_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index/index.page */ "./src/app/pages/aroio-wi/audio/index/index.page.ts");
/* harmony import */ var _root_root_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./root/root.page */ "./src/app/pages/aroio-wi/audio/root/root.page.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _modules_aroio_wi_modules_audio_audio_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../modules/aroio-wi/modules/audio/audio.module */ "./src/app/modules/aroio-wi/modules/audio/audio.module.ts");








var AudioRoutes = [
    // ---------------------------
    // Audio
    // ---------------------------
    {
        path: ':lang/audio',
        component: _root_root_page__WEBPACK_IMPORTED_MODULE_5__["AroioAudioRootPage"],
        data: {
            routeName: 'audio',
            meta: {
                title: 'pages.audio.meta.title',
                description: 'pages.audio.meta.description',
                'og:description': 'pages.audio.meta.description',
                keywords: 'pages.audio.meta.tags',
            }
        },
        children: [
            {
                path: '',
                component: _index_index_page__WEBPACK_IMPORTED_MODULE_4__["AroioAudioIndexPage"],
            },
        ]
    },
];
var AroioAudioPageModule = /** @class */ (function () {
    function AroioAudioPageModule() {
    }
    AroioAudioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(AudioRoutes),
                // AroioModules
                _modules_aroio_wi_modules_layout_layout_module__WEBPACK_IMPORTED_MODULE_3__["AroioLayoutModule"],
                _modules_aroio_wi_modules_audio_audio_module__WEBPACK_IMPORTED_MODULE_7__["AroioAudioModule"]
            ],
            declarations: [
                _root_root_page__WEBPACK_IMPORTED_MODULE_5__["AroioAudioRootPage"],
                _index_index_page__WEBPACK_IMPORTED_MODULE_4__["AroioAudioIndexPage"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AroioAudioPageModule);
    return AroioAudioPageModule;
}());



/***/ }),

/***/ "./src/app/pages/aroio-wi/audio/index/index.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/aroio-wi/audio/index/index.page.ts ***!
  \**********************************************************/
/*! exports provided: AroioAudioIndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioAudioIndexPage", function() { return AroioAudioIndexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _modules_core_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../modules/core/services/navigation.service */ "./src/app/modules/core/services/navigation.service.ts");



var AroioAudioIndexPage = /** @class */ (function () {
    function AroioAudioIndexPage(navigationService) {
        this.navigationService = navigationService;
        this.id = 'tab-audio';
        this.navigationService.$activeTab.next(this.id);
    }
    AroioAudioIndexPage.ctorParameters = function () { return [
        { type: _modules_core_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"] }
    ]; };
    AroioAudioIndexPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'aroio-audio-index-page',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/aroio-wi/audio/index/index.page.html")).default
        })
    ], AroioAudioIndexPage);
    return AroioAudioIndexPage;
}());



/***/ }),

/***/ "./src/app/pages/aroio-wi/audio/root/root.page.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/aroio-wi/audio/root/root.page.ts ***!
  \********************************************************/
/*! exports provided: AroioAudioRootPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioAudioRootPage", function() { return AroioAudioRootPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var AroioAudioRootPage = /** @class */ (function () {
    function AroioAudioRootPage() {
    }
    AroioAudioRootPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'aroio-audio-root-page',
            template: '<router-outlet></router-outlet>'
        })
    ], AroioAudioRootPage);
    return AroioAudioRootPage;
}());



/***/ }),

/***/ "./src/app/pages/aroio-wi/convolver/convolver.routing.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/aroio-wi/convolver/convolver.routing.ts ***!
  \***************************************************************/
/*! exports provided: ConvolverRoutes, AroioConvolverPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConvolverRoutes", function() { return ConvolverRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioConvolverPageModule", function() { return AroioConvolverPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _modules_aroio_wi_modules_layout_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../modules/aroio-wi/modules/layout/layout.module */ "./src/app/modules/aroio-wi/modules/layout/layout.module.ts");
/* harmony import */ var _index_index_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index/index.page */ "./src/app/pages/aroio-wi/convolver/index/index.page.ts");
/* harmony import */ var _root_root_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./root/root.page */ "./src/app/pages/aroio-wi/convolver/root/root.page.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _modules_aroio_wi_modules_convolver_convolver_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../modules/aroio-wi/modules/convolver/convolver.module */ "./src/app/modules/aroio-wi/modules/convolver/convolver.module.ts");
/* harmony import */ var _wizard_wizard_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./wizard/wizard.page */ "./src/app/pages/aroio-wi/convolver/wizard/wizard.page.ts");









var ConvolverRoutes = [
    // ---------------------------
    // Configuration
    // ---------------------------
    {
        path: ':lang/convolver',
        component: _root_root_page__WEBPACK_IMPORTED_MODULE_5__["AroioConvolverRootPage"],
        data: {
            routeName: 'convolver',
            meta: {
                title: 'pages.convolver.meta.title',
                description: 'pages.convolver.meta.description',
                'og:description': 'pages.convolver.meta.description',
                keywords: 'pages.convolver.meta.tags',
            }
        },
        children: [
            {
                path: '',
                component: _index_index_page__WEBPACK_IMPORTED_MODULE_4__["AroioConvolverIndexPage"],
            },
            {
                path: 'wizard',
                pathMatch: 'full',
                component: _wizard_wizard_page__WEBPACK_IMPORTED_MODULE_8__["AroioConvolverWizardPage"],
                data: {
                    routeName: 'convolver_wizard',
                    meta: {
                        title: 'pages.convolver.meta.title',
                        description: 'pages.convolver.meta.description',
                        'og:description': 'pages.convolver.meta.description',
                        keywords: 'pages.convolver.meta.tags',
                    }
                },
            },
        ]
    },
];
var AroioConvolverPageModule = /** @class */ (function () {
    function AroioConvolverPageModule() {
    }
    AroioConvolverPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ConvolverRoutes),
                // AroioModules
                _modules_aroio_wi_modules_layout_layout_module__WEBPACK_IMPORTED_MODULE_3__["AroioLayoutModule"],
                _modules_aroio_wi_modules_convolver_convolver_module__WEBPACK_IMPORTED_MODULE_7__["AroioConvolverModule"],
            ],
            declarations: [
                _root_root_page__WEBPACK_IMPORTED_MODULE_5__["AroioConvolverRootPage"],
                _index_index_page__WEBPACK_IMPORTED_MODULE_4__["AroioConvolverIndexPage"],
                _wizard_wizard_page__WEBPACK_IMPORTED_MODULE_8__["AroioConvolverWizardPage"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AroioConvolverPageModule);
    return AroioConvolverPageModule;
}());



/***/ }),

/***/ "./src/app/pages/aroio-wi/convolver/index/index.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/aroio-wi/convolver/index/index.page.ts ***!
  \**************************************************************/
/*! exports provided: AroioConvolverIndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioConvolverIndexPage", function() { return AroioConvolverIndexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _modules_core_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../modules/core/services/navigation.service */ "./src/app/modules/core/services/navigation.service.ts");



var AroioConvolverIndexPage = /** @class */ (function () {
    function AroioConvolverIndexPage(navigationService) {
        this.navigationService = navigationService;
        this.id = 'tab-convolver';
        this.navigationService.$activeTab.next(this.id);
    }
    AroioConvolverIndexPage.ctorParameters = function () { return [
        { type: _modules_core_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"] }
    ]; };
    AroioConvolverIndexPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'aroio-convolver-index-page',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/aroio-wi/convolver/index/index.page.html")).default
        })
    ], AroioConvolverIndexPage);
    return AroioConvolverIndexPage;
}());



/***/ }),

/***/ "./src/app/pages/aroio-wi/convolver/root/root.page.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/aroio-wi/convolver/root/root.page.ts ***!
  \************************************************************/
/*! exports provided: AroioConvolverRootPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioConvolverRootPage", function() { return AroioConvolverRootPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var AroioConvolverRootPage = /** @class */ (function () {
    function AroioConvolverRootPage() {
    }
    AroioConvolverRootPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'aroio-convolver-root-page',
            template: '<router-outlet></router-outlet>'
        })
    ], AroioConvolverRootPage);
    return AroioConvolverRootPage;
}());



/***/ }),

/***/ "./src/app/pages/aroio-wi/convolver/wizard/wizard.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/aroio-wi/convolver/wizard/wizard.page.ts ***!
  \****************************************************************/
/*! exports provided: AroioConvolverWizardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioConvolverWizardPage", function() { return AroioConvolverWizardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _modules_core_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../modules/core/services/navigation.service */ "./src/app/modules/core/services/navigation.service.ts");



var AroioConvolverWizardPage = /** @class */ (function () {
    function AroioConvolverWizardPage(navigationService) {
        this.navigationService = navigationService;
        this.id = 'tab-convolver';
        this.navigationService.$activeTab.next(this.id);
    }
    AroioConvolverWizardPage.ctorParameters = function () { return [
        { type: _modules_core_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"] }
    ]; };
    AroioConvolverWizardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'aroio-convolver-wizard-page',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./wizard.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/aroio-wi/convolver/wizard/wizard.page.html")).default
        })
    ], AroioConvolverWizardPage);
    return AroioConvolverWizardPage;
}());



/***/ }),

/***/ "./src/app/pages/aroio-wi/network/index/index.page.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/aroio-wi/network/index/index.page.ts ***!
  \************************************************************/
/*! exports provided: AroioNetworkIndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioNetworkIndexPage", function() { return AroioNetworkIndexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _modules_core_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../modules/core/services/navigation.service */ "./src/app/modules/core/services/navigation.service.ts");



var AroioNetworkIndexPage = /** @class */ (function () {
    function AroioNetworkIndexPage(navigationService) {
        this.navigationService = navigationService;
        this.id = 'tab-network';
        this.navigationService.$activeTab.next(this.id);
    }
    AroioNetworkIndexPage.ctorParameters = function () { return [
        { type: _modules_core_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"] }
    ]; };
    AroioNetworkIndexPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'aroio-network-index-page',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/aroio-wi/network/index/index.page.html")).default
        })
    ], AroioNetworkIndexPage);
    return AroioNetworkIndexPage;
}());



/***/ }),

/***/ "./src/app/pages/aroio-wi/network/network.routing.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/aroio-wi/network/network.routing.ts ***!
  \***********************************************************/
/*! exports provided: AroioNetworkRoutes, AroioNetworkPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioNetworkRoutes", function() { return AroioNetworkRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioNetworkPageModule", function() { return AroioNetworkPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _modules_aroio_wi_modules_layout_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../modules/aroio-wi/modules/layout/layout.module */ "./src/app/modules/aroio-wi/modules/layout/layout.module.ts");
/* harmony import */ var _index_index_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index/index.page */ "./src/app/pages/aroio-wi/network/index/index.page.ts");
/* harmony import */ var _root_root_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./root/root.page */ "./src/app/pages/aroio-wi/network/root/root.page.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _modules_aroio_wi_modules_network_network_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../modules/aroio-wi/modules/network/network.module */ "./src/app/modules/aroio-wi/modules/network/network.module.ts");








var AroioNetworkRoutes = [
    // ---------------------------
    // Network
    // ---------------------------
    {
        path: ':lang/network',
        component: _root_root_page__WEBPACK_IMPORTED_MODULE_5__["AroioNetworkRootPage"],
        data: {
            routeName: 'network',
            meta: {
                title: 'pages.network.meta.title',
                description: 'pages.network.meta.description',
                'og:description': 'pages.network.meta.description',
                keywords: 'pages.network.meta.tags',
            }
        },
        children: [
            {
                path: '',
                component: _index_index_page__WEBPACK_IMPORTED_MODULE_4__["AroioNetworkIndexPage"],
            },
        ]
    },
];
var AroioNetworkPageModule = /** @class */ (function () {
    function AroioNetworkPageModule() {
    }
    AroioNetworkPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(AroioNetworkRoutes),
                // AroioModules
                _modules_aroio_wi_modules_layout_layout_module__WEBPACK_IMPORTED_MODULE_3__["AroioLayoutModule"],
                _modules_aroio_wi_modules_network_network_module__WEBPACK_IMPORTED_MODULE_7__["AroioNetworkModule"],
            ],
            declarations: [
                _root_root_page__WEBPACK_IMPORTED_MODULE_5__["AroioNetworkRootPage"],
                _index_index_page__WEBPACK_IMPORTED_MODULE_4__["AroioNetworkIndexPage"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AroioNetworkPageModule);
    return AroioNetworkPageModule;
}());



/***/ }),

/***/ "./src/app/pages/aroio-wi/network/root/root.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/aroio-wi/network/root/root.page.ts ***!
  \**********************************************************/
/*! exports provided: AroioNetworkRootPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioNetworkRootPage", function() { return AroioNetworkRootPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var AroioNetworkRootPage = /** @class */ (function () {
    function AroioNetworkRootPage() {
    }
    AroioNetworkRootPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'aroio-network-root-page',
            template: '<router-outlet></router-outlet>'
        })
    ], AroioNetworkRootPage);
    return AroioNetworkRootPage;
}());



/***/ }),

/***/ "./src/app/pages/aroio-wi/streaming/index/index.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/aroio-wi/streaming/index/index.page.ts ***!
  \**************************************************************/
/*! exports provided: AroioStreamingIndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioStreamingIndexPage", function() { return AroioStreamingIndexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _modules_core_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../modules/core/services/navigation.service */ "./src/app/modules/core/services/navigation.service.ts");



var AroioStreamingIndexPage = /** @class */ (function () {
    function AroioStreamingIndexPage(navigationService) {
        this.navigationService = navigationService;
        this.id = 'tab-streaming';
        this.navigationService.$activeTab.next(this.id);
    }
    AroioStreamingIndexPage.ctorParameters = function () { return [
        { type: _modules_core_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"] }
    ]; };
    AroioStreamingIndexPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'aroio-streaming-index-page',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/aroio-wi/streaming/index/index.page.html")).default
        })
    ], AroioStreamingIndexPage);
    return AroioStreamingIndexPage;
}());



/***/ }),

/***/ "./src/app/pages/aroio-wi/streaming/root/root.page.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/aroio-wi/streaming/root/root.page.ts ***!
  \************************************************************/
/*! exports provided: AroioStreamingRootPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioStreamingRootPage", function() { return AroioStreamingRootPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var AroioStreamingRootPage = /** @class */ (function () {
    function AroioStreamingRootPage() {
    }
    AroioStreamingRootPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'aroio-streaming-root-page',
            template: '<router-outlet></router-outlet>'
        })
    ], AroioStreamingRootPage);
    return AroioStreamingRootPage;
}());



/***/ }),

/***/ "./src/app/pages/aroio-wi/streaming/streaming.routing.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/aroio-wi/streaming/streaming.routing.ts ***!
  \***************************************************************/
/*! exports provided: AroioStreamingRoutes, AroioStreamingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioStreamingRoutes", function() { return AroioStreamingRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioStreamingPageModule", function() { return AroioStreamingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _modules_aroio_wi_modules_layout_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../modules/aroio-wi/modules/layout/layout.module */ "./src/app/modules/aroio-wi/modules/layout/layout.module.ts");
/* harmony import */ var _index_index_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index/index.page */ "./src/app/pages/aroio-wi/streaming/index/index.page.ts");
/* harmony import */ var _root_root_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./root/root.page */ "./src/app/pages/aroio-wi/streaming/root/root.page.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _modules_aroio_wi_modules_streaming_streaming_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../modules/aroio-wi/modules/streaming/streaming.module */ "./src/app/modules/aroio-wi/modules/streaming/streaming.module.ts");








var AroioStreamingRoutes = [
    // ---------------------------
    // Streaming
    // ---------------------------
    {
        path: ':lang/streaming',
        component: _root_root_page__WEBPACK_IMPORTED_MODULE_5__["AroioStreamingRootPage"],
        data: {
            routeName: 'streaming',
            meta: {
                title: 'pages.streaming.meta.title',
                description: 'pages.streaming.meta.description',
                'og:description': 'pages.streaming.meta.description',
                keywords: 'pages.streaming.meta.tags',
            }
        },
        children: [
            {
                path: '',
                component: _index_index_page__WEBPACK_IMPORTED_MODULE_4__["AroioStreamingIndexPage"],
            },
        ]
    },
];
var AroioStreamingPageModule = /** @class */ (function () {
    function AroioStreamingPageModule() {
    }
    AroioStreamingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(AroioStreamingRoutes),
                // AroioModules
                _modules_aroio_wi_modules_layout_layout_module__WEBPACK_IMPORTED_MODULE_3__["AroioLayoutModule"],
                _modules_aroio_wi_modules_streaming_streaming_module__WEBPACK_IMPORTED_MODULE_7__["AroioStreamingModule"],
            ],
            declarations: [
                _root_root_page__WEBPACK_IMPORTED_MODULE_5__["AroioStreamingRootPage"],
                _index_index_page__WEBPACK_IMPORTED_MODULE_4__["AroioStreamingIndexPage"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AroioStreamingPageModule);
    return AroioStreamingPageModule;
}());



/***/ }),

/***/ "./src/app/pages/aroio-wi/system/index/index.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/aroio-wi/system/index/index.page.ts ***!
  \***********************************************************/
/*! exports provided: AroioSystemIndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioSystemIndexPage", function() { return AroioSystemIndexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _modules_core_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../modules/core/services/navigation.service */ "./src/app/modules/core/services/navigation.service.ts");



var AroioSystemIndexPage = /** @class */ (function () {
    function AroioSystemIndexPage(navigationService) {
        this.navigationService = navigationService;
        this.id = 'tab-system';
        this.navigationService.$activeTab.next(this.id);
    }
    AroioSystemIndexPage.ctorParameters = function () { return [
        { type: _modules_core_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"] }
    ]; };
    AroioSystemIndexPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'aroio-system-index-page',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/aroio-wi/system/index/index.page.html")).default
        })
    ], AroioSystemIndexPage);
    return AroioSystemIndexPage;
}());



/***/ }),

/***/ "./src/app/pages/aroio-wi/system/root/root.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/aroio-wi/system/root/root.page.ts ***!
  \*********************************************************/
/*! exports provided: AroioSystemRootPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioSystemRootPage", function() { return AroioSystemRootPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var AroioSystemRootPage = /** @class */ (function () {
    function AroioSystemRootPage() {
    }
    AroioSystemRootPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'aroio-system-root-page',
            template: '<router-outlet></router-outlet>'
        })
    ], AroioSystemRootPage);
    return AroioSystemRootPage;
}());



/***/ }),

/***/ "./src/app/pages/aroio-wi/system/system.routing.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/aroio-wi/system/system.routing.ts ***!
  \*********************************************************/
/*! exports provided: AroioSystemRoutes, AroioSystemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioSystemRoutes", function() { return AroioSystemRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioSystemPageModule", function() { return AroioSystemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _modules_aroio_wi_modules_layout_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../modules/aroio-wi/modules/layout/layout.module */ "./src/app/modules/aroio-wi/modules/layout/layout.module.ts");
/* harmony import */ var _index_index_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index/index.page */ "./src/app/pages/aroio-wi/system/index/index.page.ts");
/* harmony import */ var _root_root_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./root/root.page */ "./src/app/pages/aroio-wi/system/root/root.page.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _modules_aroio_wi_modules_system_system_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../modules/aroio-wi/modules/system/system.module */ "./src/app/modules/aroio-wi/modules/system/system.module.ts");








var AroioSystemRoutes = [
    // ---------------------------
    // Configuration
    // ---------------------------
    {
        path: ':lang/system',
        component: _root_root_page__WEBPACK_IMPORTED_MODULE_5__["AroioSystemRootPage"],
        data: {
            routeName: 'system',
            meta: {
                title: 'pages.system.meta.title',
                description: 'pages.system.meta.description',
                'og:description': 'pages.system.meta.description',
                keywords: 'pages.system.meta.tags',
            }
        },
        children: [
            {
                path: '',
                component: _index_index_page__WEBPACK_IMPORTED_MODULE_4__["AroioSystemIndexPage"],
            },
        ]
    },
];
var AroioSystemPageModule = /** @class */ (function () {
    function AroioSystemPageModule() {
    }
    AroioSystemPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(AroioSystemRoutes),
                // AroioModules
                _modules_aroio_wi_modules_layout_layout_module__WEBPACK_IMPORTED_MODULE_3__["AroioLayoutModule"],
                _modules_aroio_wi_modules_system_system_module__WEBPACK_IMPORTED_MODULE_7__["AroioSystemModule"]
            ],
            declarations: [
                _root_root_page__WEBPACK_IMPORTED_MODULE_5__["AroioSystemRootPage"],
                _index_index_page__WEBPACK_IMPORTED_MODULE_4__["AroioSystemIndexPage"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AroioSystemPageModule);
    return AroioSystemPageModule;
}());



/***/ }),

/***/ "./src/app/utils/aroio-tabs.ts":
/*!*************************************!*\
  !*** ./src/app/utils/aroio-tabs.ts ***!
  \*************************************/
/*! exports provided: AroioTabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioTabs", function() { return AroioTabs; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var AroioTabs = [
    {
        id: 'tab-audio',
        position: 0,
        label: 'Audio',
        route: 'audio'
    },
    {
        id: 'tab-convolver',
        position: 1,
        label: 'Convolver',
        route: 'convolver'
    },
    {
        id: 'tab-network',
        position: 2,
        label: 'Network',
        route: 'network'
    },
    {
        id: 'tab-streaming',
        position: 3,
        label: 'Streaming',
        route: 'streaming'
    },
    {
        id: 'tab-system',
        position: 4,
        label: 'System',
        route: 'system'
    },
];


/***/ }),

/***/ "./src/app/utils/audio-configuration.ts":
/*!**********************************************!*\
  !*** ./src/app/utils/audio-configuration.ts ***!
  \**********************************************/
/*! exports provided: AroioCodings, AroioPlayer, AroioOutputs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioCodings", function() { return AroioCodings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioPlayer", function() { return AroioPlayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioOutputs", function() { return AroioOutputs; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var AroioCodings = [
    {
        id: 'coding_stereo',
        position: 0,
        label: 'Stereo',
        description: 'Audiosignal wird als normales Stereo-Signal wiedergegeben.'
    },
    {
        id: 'coding_ms',
        position: 1,
        label: 'M/S',
        description: 'Audiosignal wird Mitte-Seite kodiert. Dies ist nur sinnvoll, in zusammenhang mit einem Abacus Cleaner auf Seiten der Hardware.'
    }
];
var AroioPlayer = [
    {
        id: 'player_sqeeze',
        position: 0,
        label: 'Squeezelite',
        description: 'Direkter Raspberry Pi Ausgang'
    },
    {
        id: 'player_upnp',
        position: 1,
        label: 'UPnP',
        description: 'Direkter Raspberry Pi Ausgang'
    },
    {
        id: 'player_shairplay',
        position: 2,
        label: 'ShAirPlay',
        description: 'Apple Airplay Support'
    },
    {
        id: 'player_bluetooth',
        position: 3,
        label: 'Bluetooth',
        description: 'Direkter Raspberry Pi Ausgang'
    },
    {
        id: 'player_line',
        position: 4,
        label: 'Line In',
        description: 'Direkter Raspberry Pi Ausgang'
    },
    {
        id: 'player_netjack',
        position: 5,
        label: 'NetJack',
        description: 'Direkter Raspberry Pi Ausgang'
    }
];
var AroioOutputs = [
    {
        id: 'output_direct',
        position: 0,
        label: 'Direkt',
        description: 'Direkter Raspberry Pi Ausgang',
        multiselectable: false,
        player: AroioPlayer,
        codings: AroioCodings
    },
    {
        id: 'output_bus',
        position: 1,
        label: 'Bus',
        description: 'Bus Ausgang für komplexeres Audio Routing',
        multiselectable: true,
        player: AroioPlayer,
        codings: AroioCodings
    },
    {
        id: 'output_convolver',
        position: 2,
        label: 'Convolver',
        description: 'Convolver zur korrektur Messung',
        multiselectable: true,
        player: AroioPlayer,
        codings: AroioCodings
    },
];


/***/ }),

/***/ "./src/app/utils/bem.ts":
/*!******************************!*\
  !*** ./src/app/utils/bem.ts ***!
  \******************************/
/*! exports provided: Bem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bem", function() { return Bem; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Bem = /** @class */ (function () {
    function Bem(base) {
        this.base = base;
    }
    Bem.prototype.setMods = function (base, mods) {
        mods.unshift(base);
        var preparedMods = mods.filter(function (element) { return element; });
        return preparedMods.join(' ');
    };
    Bem.prototype.setModifier = function (attr, prefix) {
        if (prefix === void 0) { prefix = ''; }
        var modifier = '';
        if (attr != null) {
            modifier = this.base + '--' + prefix + attr;
        }
        return modifier;
    };
    Bem.prototype.checkModifier = function (attr, val) {
        if (attr != null && attr) {
            return this.setModifier(val);
        }
    };
    return Bem;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false,
    api: 'http://127.0.0.1:8000/',
    version: '1.0',
    defaultLocale: 'de',
    defaultPage: {
        ROLE_USER: ['de/system'],
        ROLE_ADMIN: ['de/system'],
    },
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_aroio_wi_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/aroio-wi.module */ "./src/app/aroio-wi.module.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_aroio_wi_module__WEBPACK_IMPORTED_MODULE_4__["AroioWiModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/melf/www/abacus/webinterface/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map