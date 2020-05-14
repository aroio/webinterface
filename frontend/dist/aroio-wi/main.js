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
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  Hier kann das Ausgang-Routing des Aroio System eingestellt werden. Wählen Sie zuerst den gewünschten Ausgang. In\n  Abhängigkeit zu dem Ausgang können Sie dann die gewünschten Player auswhlen. Eine Mehrfachauswahl ist nur bei dem\n  Ausgang „Bus“ und „Convolver“ möglich. Am Ende können Sie die Kodierung des physikalischen Audio Ausgangs wählen.\n  Mid/Side macht nur in zusammenhang mit unserer Geräte sinn, wenn Sie dort die Hardwareseitige Cleaner-Funktion Nutzen\n  können.\n</p>\n\n<aroio-loading *ngIf=\"isloading\"></aroio-loading>\n<form [formGroup]=\"form\" (submit)=\"submitForm($event)\" *ngIf=\"form && !isloading\">\n\n  <aroio-content-item [title]=\"'Output'\">\n    <div class=\"action-bar action-bar--evenly\">\n      <div class=\"action-bar__item\" *ngFor=\"let output of audioOutputs;\">\n        <div class=\"radio\">\n          <input id=\"{{ output.id }}\"\n                 type=\"radio\"\n                 name=\"audio_outputs\"\n                 [value]=\"form.get('audio_output').value\"\n                 [checked]=\"form.get('audio_output').value === output.value\"\n                 (change)=\"form.get('audio_output').setValue(output.value); index = output.position\">\n          <label for=\"{{ output.id }}\">\n            <span class=\"radio-label\">{{ output.label }}</span>\n          </label>\n        </div>\n      </div>\n    </div>\n  </aroio-content-item>\n\n  <aroio-content-item [title]=\"'Player'\">\n    <!--<swiper class=\"carousel\">-->\n    <swiper class=\"audio-carousel\" [(index)]=\"index\"\n            (indexChange)=\"form.get('audio_output').setValue(audioOutputs[$event].value);\" [config]=\"config\">\n\n\n      <div class=\"audio-carousel__item\" *ngFor=\"let output of audioOutputs\">\n          <ul>\n            <li *ngFor=\"let player of output.player\">\n              <div class=\"radio\" *ngIf=\"!output.multiselectable; else checkbox\">\n                <input type=\"radio\"\n                       id=\"radio_{{ output.id }}_{{ player.id }}\"\n                       [value]=\"form.get(output.id).get(player.id).value\"\n                       [checked]=\"form.get(output.id).get(player.id).value\"\n                       (change)=\"changeRadio(output.id, player.id)\">\n\n                <label for=\"radio_{{ output.id }}_{{ player.id }}\">\n                  <span class=\"radio-label\">{{ player.label }}</span>\n                </label>\n              </div>\n              <ng-template #checkbox>\n                <div class=\"checkbox\">\n                  <input type=\"checkbox\"\n                         id=\"checkbox_{{ output.id }}_{{ player.id }}\"\n                         [formControl]=\"form.get(output.id).get(player.id)\"/>\n                  <label for=\"checkbox_{{ output.id }}_{{ player.id }}\">\n                    <span class=\"checkbox-label\">{{ player.label }}</span>\n                  </label>\n                </div>\n              </ng-template>\n            </li>\n          </ul>\n\n\n        <!--<div class=\"action-bar action-bar&#45;&#45;evenly\" [formControl]=\"form.get(output.id).get('mscoding')\">-->\n          <!--<div class=\"action-bar__item\">-->\n            <!--<div class=\"radio\">-->\n              <!--<input id=\"{{ output.id }}_stereo\"-->\n                     <!--type=\"radio\"-->\n                     <!--name=\"mscoding\"-->\n                     <!--formControlName=\"mscoding\"-->\n              <!--&gt;-->\n              <!--<label for=\"{{ output.id }}_stereo\">-->\n                <!--<span class=\"radio-label\">Stereo</span>-->\n              <!--</label>-->\n            <!--</div>-->\n          <!--</div>-->\n          <!--<div class=\"action-bar__item\">-->\n            <!--<div class=\"radio\">-->\n              <!--<input id=\"{{ output.id }}_ms\"-->\n                     <!--type=\"radio\"-->\n                     <!--name=\"mscoding\"-->\n                     <!--formControlName=\"mscoding\"-->\n              <!--&gt;-->\n              <!--<label for=\"{{ output.id }}_ms\">-->\n                <!--<span class=\"radio-label\">M/S</span>-->\n              <!--</label>-->\n            <!--</div>-->\n          <!--</div>-->\n        <!--</div>-->\n\n\n      </div>\n    </swiper>\n  </aroio-content-item>\n\n  <aroio-content-item [title]=\"'Kodierung'\">\n\n  </aroio-content-item>\n\n\n  <div class=\"action-bar\">\n    <div class=\"action-bar__item\">\n      <!--<a [routerLink]=\"['/', translate.currentLang, 'convolver', 'wizard']\">-->\n      <!--<button aroio-btn type=\"submit\" [color]=\"'primary'\">Filter Hinzufügen</button>-->\n      <!--</a>-->\n    </div>\n    <div class=\"action-bar__item\">\n      <button aroio-btn type=\"submit\" [color]=\"'primary'\">Speichern</button>\n    </div>\n  </div>\n</form>\n\n");

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/imprint/components/abacus/abacus.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/imprint/components/abacus/abacus.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>ABACUS electronics Feature Seite Yayyy</h2>\n\n<p>\n  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dignissimos dolorum incidunt laborum laudantium quaerat quia? Aperiam asperiores libero maiores possimus ratione. Cumque eius iusto non quas! Aliquam aut, dolores!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/imprint/components/imprint/imprint.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/imprint/components/imprint/imprint.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Impressum Dawwwwg</h2>\n\n<p>\n  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dignissimos dolorum incidunt laborum laudantium quaerat quia? Aperiam asperiores libero maiores possimus ratione. Cumque eius iusto non quas! Aliquam aut, dolores!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/imprint/components/support/support.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/imprint/components/support/support.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>AroioOS Support Boyyy</h2>\n\n<aroio-content-item [title]=\"'Aroio - Infos und Links'\">\n  <p><a class=\"forward\" title=\"Aroio Streaming allgemein\" href=\"https://www.abacus-electronics.de/produkte/streaming.html\"\n       target=\"_blank\">Allgemeine Informationen</a> zum Thema Aroio-Streaming</p>\n  <p><a class=\"forward\" title=\"AroioOS - Betriebssystem\"\n        href=\"https://www.abacus-electronics.de/produkte/streaming/aroioos.html\" target=\"_blank\">AroioOS</a> - das\n    Betriebssystem auf den Aroio-Produkten</p>\n  <p><a class=\"forward\" title=\"TeamViewer QuickSupport\" href=\"https://get.teamviewer.com/abacus-electronics\"\n        target=\"_blank\">TeamViewer QuickSupport</a> - schnelle Hilfe bei Problemen mit der Einrichtung</p>\n  <p><a class=\"forward\" title=\"ABACUS-Aroio-Forum\" href=\"https://www.abacus-electronics.de/forum/index.php\"\n        target=\"_blank\">ABACUS-Aroio-Forum</a> - Information und Diskussion</p>\n\n</aroio-content-item>\n\n<aroio-content-item [title]=\"'Verwendete Open Source Module'\">\n\n  <p>\n    <a class=\"forward\" href=\"https://www.ludd.ltu.se/~torger/brutefir.html\" target=\"_blank\">BruteFIR</a> – Software\n    Convolution engine</p>\n  <p><a class=\"forward\" href=\"https://github.com/hzeller/gmrender-resurrect\" target=\"_blank\">GMediaRenderer\n    Resurrect</a> – Resource efficient UPnP/DLNA renderer</p>\n  <p><a class=\"forward\" href=\"http://wiki.slimdevices.com/index.php/Logitech_Media_Server\" target=\"_blank\">Logitech\n    Media Server</a> – Flexible Multimedia Server Software</p>\n  <p><a class=\"forward\" href=\"https://github.com/mikebrady/shairport-sync\" target=\"_blank\">Shairport Sync</a> – AirPlay\n    audio player</p>\n  <p><a class=\"forward\" href=\"https://code.google.com/archive/p/squeezelite/\" target=\"_blank\">Squeezelite</a> – Headless\n    squeezebox emulator for linux/osx/windows</p>\n\n</aroio-content-item>\n\n\n\n<!--<aroio-content-item [title]=\"'Test'\">-->\n  <!--<div [innerHTML]=\"content\"></div>-->\n<!--</aroio-content-item>-->\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"aroio-content-item\" [ngClass]=\"{'aroio-content-item--single-item': singleItem, 'aroio-content-item--slim': slim}\">\n  <div class=\"aroio-content-item__title\" *ngIf=\"title\">\n    {{ title }}\n  </div>\n  <div class=\"aroio-content-item__content\">\n    <ng-content></ng-content>\n  </div>\n</div>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"footer\">\n  <div class=\"footer__brand\">\n  </div>\n\n  <div class=\"footer__center\">\n    <div class=\"footer__center__item\"><a [routerLink]=\"['/', translate.currentLang, 'impressum']\">{{ 'aroio.pages.imprint.title' | translate }}</a></div>\n    <div class=\"footer__center__item\"><a [routerLink]=\"['/', translate.currentLang, 'abacus']\">{{ 'aroio.pages.abacus.title' | translate }}</a></div>\n    <div class=\"footer__center__item\"><a [routerLink]=\"['/', translate.currentLang, 'support']\">{{ 'aroio.pages.support.title' | translate }}</a></div>\n  </div>\n\n  <div class=\"footer__actions\">\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/components/aroio-form-switch/aroio-form-switch.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/components/aroio-form-switch/aroio-form-switch.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"aroio-form-switch\" [ngClass]=\"{'aroio-form-switch--disabled': disabled}\">\n  <div class=\"aroio-form-switch__head\">\n    <div class=\"aroio-form-switch__head__label\">\n      {{ label }}\n    </div>\n    <div class=\"aroio-form-switch__head__action\">\n      <aroio-switch [id]=\"id\" [switchState]=\"switchState\" (switched)=\"switched.emit($event); switchState = $event\"></aroio-switch>\n    </div>\n  </div>\n\n  <div  [@hideEnterAnimation]>\n    <div class=\"aroio-form-switch__content\" *ngIf=\"(inverted ? !switchState : switchState) && hasContent && !disabled\" [@fadeHeightInOut]>\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/components/aroio-header/aroio-header.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/components/aroio-header/aroio-header.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"header\">\n  <div class=\"header__brand\">\n    <a [routerLink]=\"['/', translate.currentLang]\">\n      <img src=\"/assets/abacus_logo_wide.png\" alt=\"Abacus Electronics Logo\">\n    </a>\n  </div>\n\n  <div class=\"header__title\">\n    <!--AroioOS Webinterface 2.0-->\n  </div>\n\n  <div class=\"header__actions\">\n    <div class=\"header__actions__item\" (click)=\"openModal(webinterfaceSettingsModal, 0)\">\n        Webinterface <i class=\"fas fa-cog\"></i>\n    </div>\n    <div class=\"header__actions__item\">\n      <a [routerLink]=\"['/', translate.currentLang, 'logout']\">\n        Logout <i class=\"fas fa-lock\"></i>\n      </a>\n    </div>\n  </div>\n</div>\n\n<ng-template #webinterfaceSettingsModal>\n  <div class=\"modal-content__close\">\n    <div class=\"modal-content__close__times\" (click)=\"modalClose()\">\n      <i class=\"fas fa-times\"></i>\n    </div>\n  </div>\n  <div class=\"modal-header\">\n    <h2>\n      {{ 'aroio.pages.webinterface.title' | translate }}\n    </h2>\n    <p>\n      {{ 'aroio.pages.webinterface.help' | translate }}\n    </p>\n  </div>\n  <div class=\"modal-content\">\n    <aroio-loading *ngIf=\"isLoading\"></aroio-loading>\n\n    <aroio-content-item [title]=\"'aroio.pages.webinterface.settings' | translate\">\n      <form [formGroup]=\"formBase\" (submit)=\"submitForm($event)\" *ngIf=\"formBase && !isLoading\">\n        <aroio-input [type]=\"'text'\"\n                     [formControl]=\"formBase.get('name')\"\n                     [label]=\"'aroio.pages.webinterface.forms.username.label' | translate\"\n                     [placeholder]=\"'aroio.pages.webinterface.forms.username.placeholder' | translate\"\n        ></aroio-input>\n\n        <bd-textarea [formControl]=\"formBase.get('description')\"\n                     [label]=\"'aroio.pages.webinterface.forms.description.label' | translate\"\n                     [placeholder]=\"'aroio.pages.webinterface.forms.description.placeholder' | translate\"\n        ></bd-textarea>\n\n        <div class=\"form-group\">\n          <div class=\"checkbox\">\n            <input type=\"checkbox\" id=\"authentication_enabled\" [formControl]=\"formBase.get('authentication_enabled')\"/>\n            <label for=\"authentication_enabled\">\n              <span class=\"checkbox-label\">{{ 'aroio.pages.webinterface.forms.authentication_enabled.label' | translate }}</span>\n            </label>\n          </div>\n        </div>\n      </form>\n      <form [formGroup]=\"formWebinterface\" (submit)=\"submitForm($event)\" *ngIf=\"formWebinterface && !isLoading\">\n        <div class=\"form-group\">\n          <div class=\"checkbox\">\n            <input type=\"checkbox\" id=\"dark_mode\" [formControl]=\"formWebinterface.get('dark_mode')\"/>\n            <label for=\"dark_mode\">\n              <span class=\"checkbox-label\">{{ 'aroio.pages.webinterface.forms.dark_mode.label' | translate }}</span>\n            </label>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <div class=\"checkbox\">\n            <input type=\"checkbox\" id=\"advanced_configuration\" [formControl]=\"formWebinterface.get('advanced_configuration')\"/>\n            <label for=\"advanced_configuration\">\n              <span class=\"checkbox-label\">{{ 'aroio.pages.webinterface.forms.advanced_configuration.label' | translate }}</span>\n            </label>\n          </div>\n        </div>\n      </form>\n\n      <div class=\"action-bar\">\n        <div class=\"action-bar__item\"></div>\n        <div class=\"action-bar__item\">\n          <aroio-button [color]=\"'primary'\" (click)=\"submitForm()\">{{ 'aroio.cta.save' | translate }}</aroio-button>\n        </div>\n      </div>\n\n    </aroio-content-item>\n    <aroio-content-item [title]=\"'aroio.pages.webinterface.password' | translate\">\n      <form [formGroup]=\"passwordForm\" (submit)=\"submitPassswordForm($event)\" *ngIf=\"passwordForm && !isLoading\">\n        <aroio-input [type]=\"'password'\"\n                     [formControl]=\"passwordForm.get('password')\"\n                     [label]=\"'aroio.pages.webinterface.forms.new_password.label' | translate\"\n                     [placeholder]=\"'aroio.pages.webinterface.forms.new_password.placeholder' | translate\"\n        ></aroio-input>\n        <aroio-input [type]=\"'password'\"\n                     [formControl]=\"passwordForm.get('password_repeated')\"\n                     [label]=\"'aroio.pages.webinterface.forms.password_repeated.label' | translate\"\n                     [placeholder]=\"'aroio.pages.webinterface.forms.password_repeated.placeholder' | translate\"\n        ></aroio-input>\n\n\n        <div class=\"action-bar\">\n          <div class=\"action-bar__item\"></div>\n          <div class=\"action-bar__item\">\n            <button aroio-btn type=\"submit\" [color]=\"'danger'\">{{ 'aroio.cta.set_password' | translate }}</button>\n          </div>\n        </div>\n\n      </form>\n\n    </aroio-content-item>\n\n  </div>\n  <div class=\"modal-footer\">\n  </div>\n\n</ng-template>\n");

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/components/aroio-system-list/aroio-filter-list-item/aroio-system-list-item.component.html":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/components/aroio-system-list/aroio-filter-list-item/aroio-system-list-item.component.html ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<li>\n  <ng-content></ng-content>\n</li>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/components/aroio-system-list/aroio-system-list.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/components/aroio-system-list/aroio-system-list.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"aroio-system-list\">\n  <li class=\"aroio-system-list__item aroio-system-list__item--title\" *ngIf=\"title\">\n    {{ title }}\n  </li>\n\n  <ng-content></ng-content>\n</ul>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/components/aroio-tabset/aroio-tabset.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/components/aroio-tabset/aroio-tabset.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"aroio-tabs\">\n  <div class=\"aroio-tabs__navigation\">\n    <a class=\"aroio-tabs__navigation__item\"\n         *ngFor=\"let tab of aroioTabs | orderBy: 'position'\"\n         [ngClass]=\"{'aroio-tabs__navigation__item--active': tab.id === activeTab}\"\n         id=\"{{ tab.id }}\"\n       [routerLink]=\"['/', translate.currentLang, tab.route]\"\n    >\n        {{ tab.label }}\n    </a>\n  </div>\n  <div class=\"aroio-tabs__content\">\n      <ng-content></ng-content>\n  </div>\n</div>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("<aroio-loading *ngIf=\"isLoading\"></aroio-loading>\n\n<form [formGroup]=\"form\" (submit)=\"submitForm($event)\" *ngIf=\"form && !isLoading\">\n  <aroio-content-item [title]=\"'aroio.pages.network.connection.title' | translate\">\n\n    <aroio-input [type]=\"'text'\"\n                 [formControl]=\"form.get('hostname')\"\n                 [label]=\"'aroio.pages.network.forms.hostname.label' | translate\"\n                 [placeholder]=\"'aroio.pages.network.forms.hostname.placeholder' | translate\"\n    ></aroio-input>\n\n    <aroio-form-switch [id]=\"'lan-dhcp-form'\"\n                       [label]=\"'aroio.pages.network.forms.lan_dhcp.label' | translate\"\n                       [hasContent]=\"true\"\n                       [inverted]=\"true\"\n                       [switchState]=\"form.get('lan_dhcp').value\"\n                       (switched)=\"form.get('lan_dhcp').setValue($event)\"\n                       [disabled]=\"form.get('wifi').value\"\n    >\n      <aroio-input [type]=\"'text'\"\n                   [formControl]=\"form.get('lan_ipaddr')\"\n                   [label]=\"'aroio.pages.network.forms.lan_ipaddr.label' | translate\"\n                   [placeholder]=\"'aroio.pages.network.forms.lan_ipaddr.placeholder' | translate\"\n      ></aroio-input>\n      <aroio-input [type]=\"'text'\"\n                   [formControl]=\"form.get('lan_netmask')\"\n                   [label]=\"'aroio.pages.network.forms.lan_netmask.label' | translate\"\n                   [placeholder]=\"'aroio.pages.network.forms.lan_netmask.placeholder' | translate\"\n      ></aroio-input>\n      <aroio-input [type]=\"'text'\"\n                   [formControl]=\"form.get('lan_gateway')\"\n                   [label]=\"'aroio.pages.network.forms.lan_gateway.label' | translate\"\n                   [placeholder]=\"'aroio.pages.network.forms.lan_gateway.placeholder' | translate\"\n      ></aroio-input>\n      <aroio-input [type]=\"'text'\"\n                   [formControl]=\"form.get('lan_dnsserv')\"\n                   [label]=\"'aroio.pages.network.forms.lan_dnsserv.label' | translate\"\n                   [placeholder]=\"'aroio.pages.network.forms.lan_dnsserv.placeholder' | translate\"\n      ></aroio-input>\n    </aroio-form-switch>\n\n    <aroio-form-switch [id]=\"'wifi-form'\"\n                       [label]=\"'aroio.pages.network.forms.wifi.label' | translate\"\n                       [hasContent]=\"true\"\n                       [switchState]=\"form.get('wifi').value\"\n                       (switched)=\"form.get('wifi').setValue($event)\"\n    >\n      <aroio-input [type]=\"'text'\"\n                   [formControl]=\"form.get('wlanssid')\"\n                   [label]=\"'aroio.pages.network.forms.wlan_ssid.label' | translate\"\n                   [placeholder]=\"'aroio.pages.network.forms.wlan_ssid.placeholder' | translate\"\n      ></aroio-input>\n      <aroio-input [type]=\"'password'\"\n                   [formControl]=\"form.get('wlanpwd')\"\n                   [label]=\"'aroio.pages.network.forms.wlanpwd.label' | translate\"\n                  [placeholder]=\"'aroio.pages.network.forms.wlanpwd.placeholder' | translate\"\n      ></aroio-input>\n\n\n\n      <aroio-form-switch [id]=\"'wifi-dhcp-form'\"\n                         [label]=\"'aroio.pages.network.forms.wlan_dhcp.label' | translate\"\n                         [hasContent]=\"true\"\n                         [inverted]=\"true\"\n                         [switchState]=\"form.get('wlan_dhcp').value\"\n                         (switched)=\"form.get('wlan_dhcp').setValue($event)\"\n      >\n        <aroio-input [type]=\"'text'\"\n                     [formControl]=\"form.get('wlan_ipaddr')\"\n                     [label]=\"'aroio.pages.network.forms.wlan_ipaddr.label' | translate\"\n                     [placeholder]=\"'aroio.pages.network.forms.wlan_ipaddr.placeholder' | translate\"\n        ></aroio-input>\n        <aroio-input [type]=\"'text'\"\n                     [formControl]=\"form.get('wlan_netmask')\"\n                     [label]=\"'aroio.pages.network.forms.wlan_netmask.label' | translate\"\n                     [placeholder]=\"'aroio.pages.network.forms.wlan_netmask.placeholder' | translate\"\n        ></aroio-input>\n        <aroio-input [type]=\"'text'\"\n                     [formControl]=\"form.get('wlan_gateway')\"\n                     [label]=\"'aroio.pages.network.forms.wlan_gateway.label' | translate\"\n                     [placeholder]=\"'aroio.pages.network.forms.wlan_gateway.placeholder' | translate\"\n        ></aroio-input>\n        <aroio-input [type]=\"'text'\"\n                     [formControl]=\"form.get('wlan_dnsserv')\"\n                     [label]=\"'aroio.pages.network.forms.wlan_dnsserv.label' | translate\"\n                     [placeholder]=\"'aroio.pages.network.forms.wlan_dnsserv.placeholder' | translate\"\n        ></aroio-input>\n      </aroio-form-switch>\n\n    </aroio-form-switch>\n\n  </aroio-content-item>\n\n\n  <aroio-content-item [title]=\"'aroio.pages.network.webinterface.title' | translate\">\n\n\n  </aroio-content-item>\n  <!--<aroio-content-item [title]=\"'Hardware'\">-->\n  <!--<bd-input [type]=\"'select'\" [formControl]=\"form.get('platform')\" label=\"Plattform\" placeholder=\"Auswählen\"></bd-input>-->\n  <!--</aroio-content-item>-->\n\n  <div class=\"action-bar\">\n    <div class=\"action-bar__item\"></div>\n    <div class=\"action-bar__item\">\n      <button aroio-btn type=\"submit\" [color]=\"'primary'\">Speichern</button>\n    </div>\n  </div>\n\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/streaming/components/index/index.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/streaming/components/index/index.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<aroio-content-item [title]=\"'Squeezebox Einstellungen'\">\n  <form [formGroup]=\"form\" (submit)=\"submitForm($event)\" *ngIf=\"form\">\n    <aroio-input [type]=\"'text'\"\n                 [formControl]=\"form.get('playername')\"\n                 [label]=\"'aroio.pages.streaming.forms.playername.label' | translate\"\n                 [placeholder]=\"'aroio.pages.streaming.forms.playername.placeholder' | translate\"\n    ></aroio-input>\n    <aroio-input [type]=\"'text'\"\n                 [formControl]=\"form.get('servername')\"\n                 [label]=\"'aroio.pages.streaming.forms.servername.label' | translate\"\n                 [placeholder]=\"'aroio.pages.streaming.forms.servername.placeholder' | translate\"\n    ></aroio-input>\n    <aroio-input [type]=\"'text'\"\n                 [formControl]=\"form.get('serverport')\"\n                 [label]=\"'aroio.pages.streaming.forms.serverport.label' | translate\"\n                 [placeholder]=\"'aroio.pages.streaming.forms.serverport.placeholder' | translate\"\n    ></aroio-input>\n    <aroio-input [type]=\"'text'\"\n                 [formControl]=\"form.get('squeezeuser')\"\n                 [label]=\"'aroio.pages.streaming.forms.squeezeuser.label' | translate\"\n                 [placeholder]=\"'aroio.pages.streaming.forms.squeezeuser.placeholder' | translate\"\n    ></aroio-input>\n    <aroio-input [type]=\"'text'\"\n                 [formControl]=\"form.get('squeezepwd')\"\n                 [label]=\"'aroio.pages.streaming.forms.squeezepwd.label' | translate\"\n                 [placeholder]=\"'aroio.pages.streaming.forms.squeezepwd.placeholder' | translate\"\n    ></aroio-input>\n    <div class=\"action-bar\">\n      <div class=\"action-bar__item\"></div>\n      <div class=\"action-bar__item\">\n        <button aroio-btn type=\"submit\" [color]=\"'primary'\">Speichern</button>\n      </div>\n    </div>\n  </form>\n\n\n</aroio-content-item>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/system/components/index/index.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/system/components/index/index.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<aroio-content-item [title]=\"'Ihr Aroio'\">\n  <img src=\"/assets/aroio_lt.svg\" alt=\"AroioLT\">\n</aroio-content-item>\n<aroio-content-item *ngIf=\"aroioSettings?.configuration\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <aroio-system-list class=\"col-6\" *ngFor=\"let config of getKeyValues(aroioSettings.configuration)\"\n                         [title]=\"config.key\">\n        <aroio-system-list-item\n          *ngFor=\"let inner of getKeyValues(aroioSettings.configuration[config.key])\">{{ inner.key}}\n          : {{ inner.value }}</aroio-system-list-item>\n      </aroio-system-list>\n\n    </div>\n  </div>\n</aroio-content-item>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/security/components/login/components/index/index.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/security/components/login/components/index/index.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"login\">\n\n  <aroio-content-item [singleItem]=\"true\" [title]=\"'security.login.meta.title' | translate\">\n    <security-login-component></security-login-component>\n  </aroio-content-item>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/security/components/login/components/login/login.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/security/components/login/components/login/login.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<form class=\"form\" [formGroup]=\"form\" *ngIf=\"form\" (submit)=\"handleSubmit()\">\n    <ng-content></ng-content>\n    <aroio-input [formControl]=\"form.get('username')\"\n                 [label]=\"'security.login.labels.email' | translate\"\n                 [placeholder]=\"'aroio'\"\n    ></aroio-input>\n    <aroio-input type=\"password\" [formControl]=\"form.get('password')\"\n                 [label]=\"'security.login.labels.password' | translate\"\n                 [placeholder]=\"'abacus'\"\n    ></aroio-input>\n\n\n    <button aroio-button [disabled]=\"form.invalid\" [loading]=\"isSendingRequest\" color=\"primary\" [block]=\"'true'\" type=\"submit\">\n        {{ 'security.login.labels.login' | translate }}\n    </button>\n\n    <div class=\"form-help\">\n        <a href=\"\" [routerLink]=\"['/', currentLang,'password-request']\">{{ 'security.login.labels.reset' | translate }}</a>\n    </div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/security/components/logout/logout.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/security/components/logout/logout.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/security/components/no-access/components/index/index.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/security/components/no-access/components/index/index.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login\">\n  <aroio-content-item [singleItem]=\"true\" [title]=\"'aroio.pages.security.select_device.title' | translate\">\n    <security-no-access-component></security-no-access-component>\n  </aroio-content-item>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/security/components/no-access/components/no-access/no-access.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/security/components/no-access/components/no-access/no-access.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>{{ 'security.no_access.title' | translate }}</h1>\n<p>{{ 'security.no_access.description' | translate }}</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/security/components/not-found/components/index/index.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/security/components/not-found/components/index/index.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login\">\n  <aroio-content-item [singleItem]=\"true\" [title]=\"'aroio.pages.security.select_device.title' | translate\">\n    <security-not-found-component></security-not-found-component>\n  </aroio-content-item>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/security/components/not-found/components/not-found/not-found.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/security/components/not-found/components/not-found/not-found.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>{{ 'security.not_found.title' | translate }}</h2>\n<p class=\"form-label\">{{ currentPath }}</p>\n<p>{{ 'security.not_found.description' | translate }}</p>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/security/components/password-request/components/index/index.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/security/components/password-request/components/index/index.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login\">\n  <aroio-content-item [singleItem]=\"true\" [title]=\"'aroio.pages.security.select_device.title' | translate\">\n\n    <h4>\n      {{ 'security.password_reset.title' | translate }}\n    </h4>\n    <p>\n      {{ 'security.password_request.description' | translate }}\n    </p>\n\n    <security-password-request-component></security-password-request-component>\n  </aroio-content-item>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/security/components/password-request/components/password-request/password-request.component.html":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/security/components/password-request/components/password-request/password-request.component.html ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<form class=\"form\" [formGroup]=\"form\" *ngIf=\"form\" (submit)=\"handleSubmit()\">\n    <ng-content></ng-content>\n    <aroio-input [formControl]=\"form.get('email')\" [label]=\"'security.login.labels.email' | translate\"></aroio-input>\n\n\n    <button aroio-button [disabled]=\"form.invalid\" [loading]=\"isSendingRequest\" color=\"primary\" [block]=\"'true'\" type=\"submit\">\n        {{ 'security.password_request.labels.request' | translate }}\n    </button>\n\n    <div class=\"form-help\">\n        <a href=\"\" [routerLink]=\"['/', currentLang, 'login']\">\n            {{ 'security.password_request.labels.back_to_login' | translate }}\n        </a>\n    </div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/security/components/password-reset/components/index/index.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/security/components/password-reset/components/index/index.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login\">\n  <aroio-content-item [singleItem]=\"true\" [title]=\"'aroio.pages.security.select_device.title' | translate\">\n\n    <h4>\n      {{ 'security.password_reset.title' | translate }}\n    </h4>\n    <p>\n      {{ 'security.password_request.description' | translate }}\n    </p>\n    <security-password-reset-component></security-password-reset-component>\n  </aroio-content-item>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/security/components/password-reset/components/password-reset/password-reset.component.html":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/security/components/password-reset/components/password-reset/password-reset.component.html ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"form\" *ngIf=\"form\" (submit)=\"handleSubmit()\">\n    <ng-content></ng-content>\n\n    <aroio-input [requiredMarker]=\"true\" type=\"password\" [label]=\"'security.login.labels.password' | translate\" [formControl]=\"form.get('password')\"></aroio-input>\n    <aroio-input [requiredMarker]=\"true\" type=\"password\" [label]=\"'security.login.labels.password_confirm' | translate\" [formControl]=\"form.get('passwordRepeated')\"></aroio-input>\n    <button aroio-button type=\"submit\" [color]=\"'primary'\" [block]=\"true\" [disabled]=\"form.invalid\" [loading]=\"isSendingRequest\">{{ 'Password Reset' | translate }}</button>\n\n    <div class=\"form-help\">\n        <a href=\"\" [routerLink]=\"['/', translate.currentLang, 'login']\">\n            {{ 'security.password_request.labels.back_to_login' | translate }}\n        </a>\n    </div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/security/components/select-device/select-device.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/security/components/select-device/select-device.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  <aroio-content-item [singleItem]=\"true\" [title]=\"'aroio.pages.security.select_device.title' | translate\">\n\n    <form [formGroup]=\"form\" (submit)=\"setAroio()\" *ngIf=\"form\">\n      <ng-select\n        bdSelect\n        bindLabel=\"label\"\n        bindValue=\"value\"\n        [formControl]=\"form.get('network').get('hostname')\"\n        [placeholder]=\"'aroio.pages.security.select_device.form.device.placeholder' | translate\"\n        [items]=\"options\"\n      ></ng-select>\n\n\n      <div class=\"action-bar\">\n        <div class=\"action-bar__item\"></div>\n        <div class=\"action-bar__item\">\n          <button aroio-btn type=\"submit\" [color]=\"'primary'\">{{ 'aroio.cta.save' | translate }}</button>\n        </div>\n      </div>\n    </form>\n  </aroio-content-item>\n");

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/aroio-wi/imprint/abacus/abacus.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/aroio-wi/imprint/abacus/abacus.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<aroio-header></aroio-header>\n\n\n<aroio-content [centered]=\"true\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"offset-md-1 col-md-10\">\n        <aroio-content-item [singleItem]=\"true\">\n          <aroio-abacus-component></aroio-abacus-component>\n        </aroio-content-item>\n      </div>\n    </div>\n  </div>\n</aroio-content>\n\n<aroio-footer></aroio-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/aroio-wi/imprint/imprint/imprint.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/aroio-wi/imprint/imprint/imprint.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<aroio-header></aroio-header>\n\n\n<aroio-content [centered]=\"true\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"offset-md-1 col-md-10\">\n        <aroio-content-item [singleItem]=\"true\">\n          <aroio-imprint-component></aroio-imprint-component>\n        </aroio-content-item>\n      </div>\n    </div>\n  </div>\n</aroio-content>\n\n<aroio-footer></aroio-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/aroio-wi/imprint/support/support.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/aroio-wi/imprint/support/support.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<aroio-header></aroio-header>\n\n\n<aroio-content [centered]=\"true\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"offset-md-1 col-md-10\">\n          <aroio-content-item [singleItem]=\"true\">\n            <aroio-support-component></aroio-support-component>\n          </aroio-content-item>\n      </div>\n    </div>\n  </div>\n</aroio-content>\n\n<aroio-footer></aroio-footer>\n");

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/aroio-wi/security/login/login.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/aroio-wi/security/login/login.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<aroio-header></aroio-header>\n\n<aroio-content [centered]=\"true\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"offset-md-2 col-md-8\">\n        <security-login-index-component></security-login-index-component>\n      </div>\n    </div>\n  </div>\n</aroio-content>\n\n<aroio-footer></aroio-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/aroio-wi/security/logout/logout.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/aroio-wi/security/logout/logout.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<aroio-header></aroio-header>\n\n<aroio-content [centered]=\"true\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"offset-2 col-md-8\">\n        <security-logout-component></security-logout-component>\n      </div>\n    </div>\n  </div>\n</aroio-content>\n\n<aroio-footer></aroio-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/aroio-wi/security/no-access/no-access.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/aroio-wi/security/no-access/no-access.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<aroio-header></aroio-header>\n\n<aroio-content [centered]=\"true\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"offset-2 col-md-8\">\n        <security-no-access-index-component></security-no-access-index-component>\n      </div>\n    </div>\n  </div>\n</aroio-content>\n\n<aroio-footer></aroio-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/aroio-wi/security/not-found/not-found.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/aroio-wi/security/not-found/not-found.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<aroio-header></aroio-header>\n\n<aroio-content [centered]=\"true\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"offset-2 col-md-8\">\n        <security-not-found-index-component></security-not-found-index-component>\n      </div>\n    </div>\n  </div>\n</aroio-content>\n\n<aroio-footer></aroio-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/aroio-wi/security/password-request/password-request.page.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/aroio-wi/security/password-request/password-request.page.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<aroio-header></aroio-header>\n\n<aroio-content [centered]=\"true\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"offset-2 col-md-8\">\n        <security-password-request-index-component></security-password-request-index-component>\n      </div>\n    </div>\n  </div>\n</aroio-content>\n\n<aroio-footer></aroio-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/aroio-wi/security/password-reset/password-reset.page.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/aroio-wi/security/password-reset/password-reset.page.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<aroio-header></aroio-header>\n\n<aroio-content [centered]=\"true\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"offset-2 col-md-8\">\n        <security-password-reset-index-component></security-password-reset-index-component>\n      </div>\n    </div>\n  </div>\n</aroio-content>\n\n<aroio-footer></aroio-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/aroio-wi/security/select-device/select-device.page.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/aroio-wi/security/select-device/select-device.page.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<aroio-header></aroio-header>\n\n<aroio-content [centered]=\"true\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"offset-2 col-md-8\">\n        <aroio-security-select-device-component></aroio-security-select-device-component>\n      </div>\n    </div>\n  </div>\n</aroio-content>\n\n<aroio-footer></aroio-footer>\n");

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
/* harmony import */ var _modules_security_security_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modules/security/security.module */ "./src/app/modules/security/security.module.ts");



















function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__["TranslateHttpLoader"](http, _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].api + '/translations/', '');
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
                _modules_security_security_module__WEBPACK_IMPORTED_MODULE_18__["SecurityModule"].forRoot(),
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _utils_configs_audio_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../utils/configs/audio-configuration */ "./src/app/utils/configs/audio-configuration.ts");
/* harmony import */ var _core_services_aroio_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/services/aroio-settings.service */ "./src/app/modules/core/services/aroio-settings.service.ts");
/* harmony import */ var _core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/services/alert.service */ "./src/app/modules/core/services/alert.service.ts");






var AudioIndexComponent = /** @class */ (function () {
    function AudioIndexComponent(settingsSerivce, alert) {
        this.settingsSerivce = settingsSerivce;
        this.alert = alert;
        this.audioOutputs = _utils_configs_audio_configuration__WEBPACK_IMPORTED_MODULE_3__["AroioOutputs"];
        this.activeOutput = 1;
        this.index = 0;
        this.switchState = [];
        this.isLoading = true;
        this.subscriptions = [];
        this.config = {
            direction: 'horizontal',
            slidesPerView: 1.5,
            spaceBetween: 20,
            centeredSlides: true,
            threshold: 3,
        };
    }
    AudioIndexComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.isLoading = true;
        this.subscriptions.push(this.settingsSerivce.getAroioSettings().subscribe(function (aroioSettings) {
            _this.buildForm(aroioSettings);
            _this.audioOutputs.forEach(function (output, index) {
                if (_this.form.get('audio_output').value === output.value) {
                    _this.index = index;
                }
            });
            _this.isLoading = false;
        }));
    };
    AudioIndexComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (_) { return _.unsubscribe(); });
    };
    AudioIndexComponent.prototype.buildForm = function (aroioSettings) {
        var _this = this;
        if (aroioSettings === void 0) { aroioSettings = null; }
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({});
        this.audioOutputs.forEach(function (output) {
            _this.form.addControl(output.id, new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({}));
            _this.form.addControl('audio_output', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](aroioSettings.configuration.audio.output_configuration.audio_output ? aroioSettings.configuration.audio.output_configuration.audio_output : ''));
            output.player.forEach(function (player) {
                _this.form.get(output.id).addControl(player.id, new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](aroioSettings.configuration.audio.output_configuration[output.id][player.id] ? aroioSettings.configuration.audio.output_configuration[output.id][player.id] : false));
                _this.form.get(output.id).addControl('mscoding', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](aroioSettings.configuration.audio.output_configuration[output.id]['mscoding'] ? aroioSettings.configuration.audio.output_configuration[output.id]['mscoding'] : false));
                _this.form.get(output.id).addControl('measurement_output', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](aroioSettings.configuration.audio.output_configuration[output.id]['measurement_output'] ? aroioSettings.configuration.audio.output_configuration[output.id]['measurement_output'] : ''));
                _this.form.get(output.id).addControl('rate', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](aroioSettings.configuration.audio.output_configuration[output.id]['rate'] ? aroioSettings.configuration.audio.output_configuration[output.id]['rate'] : 0));
                _this.form.get(output.id).addControl('sprate', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](aroioSettings.configuration.audio.output_configuration[output.id]['sprate'] ? aroioSettings.configuration.audio.output_configuration[output.id]['sprate'] : 0));
                _this.form.get(output.id).addControl('channels', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](aroioSettings.configuration.audio.output_configuration[output.id]['channels'] ? aroioSettings.configuration.audio.output_configuration[output.id]['channels'] : 0));
            });
        });
    };
    AudioIndexComponent.prototype.submitForm = function (event) {
        var _this = this;
        this.subscriptions.push(this.settingsSerivce.setAroioSettingsAudioOutputConfig(this.form.getRawValue()).subscribe(function (_) {
            _this.alert.alert$.next({ message: 'Das Audiosetup erfolgreich gespeichert', type: 'success' });
        }, function (error) {
            _this.alert.alert$.next({ message: 'Es ist ein Fehler aufgetreten.', type: 'error' });
        }));
    };
    AudioIndexComponent.prototype.changeRadio = function (outputID, playerID) {
        var _this = this;
        this.audioOutputs.forEach(function (output) {
            output.player.forEach(function (player) {
                if (player.id !== playerID) {
                    _this.form.get(outputID).get(player.id).setValue(false);
                }
            });
        });
        this.form.get(outputID).get(playerID).setValue(!this.form.get(outputID).get(playerID).value);
    };
    AudioIndexComponent.prototype.getChildForm = function (formGrouoName) {
        return this.form.get(formGrouoName);
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
    AudioIndexComponent.ctorParameters = function () { return [
        { type: _core_services_aroio_settings_service__WEBPACK_IMPORTED_MODULE_4__["AroioSettingsService"] },
        { type: _core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AroioAlertService"] }
    ]; };
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
            def_coeff: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](aroioSettings.configuration.convolver.def_coeff ? aroioSettings.configuration.convolver.def_coeff : 0),
            filters: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]),
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

/***/ "./src/app/modules/aroio-wi/modules/imprint/components/abacus/abacus.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/aroio-wi/modules/imprint/components/abacus/abacus.component.ts ***!
  \****************************************************************************************/
/*! exports provided: AroioAbacusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioAbacusComponent", function() { return AroioAbacusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");



var AroioAbacusComponent = /** @class */ (function () {
    function AroioAbacusComponent(location) {
        this.location = location;
    }
    AroioAbacusComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
    ]; };
    AroioAbacusComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '<aroio-abacus-component>',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./abacus.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/imprint/components/abacus/abacus.component.html")).default
        })
    ], AroioAbacusComponent);
    return AroioAbacusComponent;
}());



/***/ }),

/***/ "./src/app/modules/aroio-wi/modules/imprint/components/imprint/imprint.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/aroio-wi/modules/imprint/components/imprint/imprint.component.ts ***!
  \******************************************************************************************/
/*! exports provided: AroioImprintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioImprintComponent", function() { return AroioImprintComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");



var AroioImprintComponent = /** @class */ (function () {
    function AroioImprintComponent(location) {
        this.location = location;
    }
    AroioImprintComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
    ]; };
    AroioImprintComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '<aroio-imprint-component>',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./imprint.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/imprint/components/imprint/imprint.component.html")).default
        })
    ], AroioImprintComponent);
    return AroioImprintComponent;
}());



/***/ }),

/***/ "./src/app/modules/aroio-wi/modules/imprint/components/support/support.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/aroio-wi/modules/imprint/components/support/support.component.ts ***!
  \******************************************************************************************/
/*! exports provided: AroioSupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioSupportComponent", function() { return AroioSupportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");



var AroioSupportComponent = /** @class */ (function () {
    function AroioSupportComponent(location) {
        this.location = location;
    }
    AroioSupportComponent.prototype.ngOnInit = function () {
    };
    AroioSupportComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
    ]; };
    AroioSupportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '<aroio-support-component>',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./support.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/imprint/components/support/support.component.html")).default
        })
    ], AroioSupportComponent);
    return AroioSupportComponent;
}());



/***/ }),

/***/ "./src/app/modules/aroio-wi/modules/imprint/imprint.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/aroio-wi/modules/imprint/imprint.module.ts ***!
  \********************************************************************/
/*! exports provided: AroioImprintModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioImprintModule", function() { return AroioImprintModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layout/layout.module */ "./src/app/modules/aroio-wi/modules/layout/layout.module.ts");
/* harmony import */ var _components_imprint_imprint_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/imprint/imprint.component */ "./src/app/modules/aroio-wi/modules/imprint/components/imprint/imprint.component.ts");
/* harmony import */ var _components_support_support_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/support/support.component */ "./src/app/modules/aroio-wi/modules/imprint/components/support/support.component.ts");
/* harmony import */ var _components_abacus_abacus_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/abacus/abacus.component */ "./src/app/modules/aroio-wi/modules/imprint/components/abacus/abacus.component.ts");










var AroioImprintModule = /** @class */ (function () {
    function AroioImprintModule() {
    }
    AroioImprintModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _layout_layout_module__WEBPACK_IMPORTED_MODULE_6__["AroioLayoutModule"],
            ],
            declarations: [
                _components_imprint_imprint_component__WEBPACK_IMPORTED_MODULE_7__["AroioImprintComponent"],
                _components_support_support_component__WEBPACK_IMPORTED_MODULE_8__["AroioSupportComponent"],
                _components_abacus_abacus_component__WEBPACK_IMPORTED_MODULE_9__["AroioAbacusComponent"]
            ],
            exports: [
                _components_imprint_imprint_component__WEBPACK_IMPORTED_MODULE_7__["AroioImprintComponent"],
                _components_support_support_component__WEBPACK_IMPORTED_MODULE_8__["AroioSupportComponent"],
                _components_abacus_abacus_component__WEBPACK_IMPORTED_MODULE_9__["AroioAbacusComponent"]
            ],
            providers: [],
        })
    ], AroioImprintModule);
    return AroioImprintModule;
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
    hideEnterAnimation: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('hideEnterAnimation', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [])
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
        this.singleItem = false;
        this.slim = false;
    }
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AroioContentItemComponent.prototype, "title", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AroioContentItemComponent.prototype, "singleItem", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AroioContentItemComponent.prototype, "slim", void 0);
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
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");



var AroioFooterComponent = /** @class */ (function () {
    function AroioFooterComponent(translate) {
        this.translate = translate;
    }
    AroioFooterComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
    ]; };
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
                _animations_animations__WEBPACK_IMPORTED_MODULE_2__["Animations"].hideEnterAnimation
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
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _core_services_aroio_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/services/aroio-settings.service */ "./src/app/modules/core/services/aroio-settings.service.ts");
/* harmony import */ var _core_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/services/alert.service */ "./src/app/modules/core/services/alert.service.ts");







var AroioHeaderComponent = /** @class */ (function () {
    function AroioHeaderComponent(translate, settingsSerivce, modalService, alert) {
        this.translate = translate;
        this.settingsSerivce = settingsSerivce;
        this.modalService = modalService;
        this.alert = alert;
        // Modal Specific
        this.modalIndex = 0;
        this.subscriptions = [];
        this.isLoading = true;
    }
    AroioHeaderComponent.prototype.buildForm = function (aroioSettings) {
        if (aroioSettings === void 0) { aroioSettings = null; }
        this.formBase = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](aroioSettings.username ? aroioSettings.username : ''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](aroioSettings.password ? aroioSettings.password : ''),
            old_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](aroioSettings.password ? aroioSettings.password : ''),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](aroioSettings.description ? aroioSettings.description : ''),
            authentication_enabled: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](aroioSettings.authentication_enabled ? aroioSettings.authentication_enabled : true)
        });
        this.formWebinterface = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            dark_mode: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](aroioSettings.configuration.webinterface.dark_mode ? aroioSettings.configuration.webinterface.dark_mode : false),
            initial_setup: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](aroioSettings.configuration.webinterface.initial_setup ? aroioSettings.configuration.webinterface.initial_setup : false),
            advanced_configuration: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](aroioSettings.configuration.webinterface.advanced_configuration ? aroioSettings.configuration.webinterface.advanced_configuration : false),
        });
    };
    AroioHeaderComponent.prototype.buildPasswordForm = function (aroioSettings) {
        if (aroioSettings === void 0) { aroioSettings = null; }
        this.passwordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            password_repeated: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
        });
    };
    AroioHeaderComponent.prototype.submitForm = function () {
        var _this = this;
        this.subscriptions.push(this.settingsSerivce.setAroioBaseInformation(this.formBase.getRawValue()).subscribe(function (_) {
            _this.alert.alert$.next({ message: 'Die Basiskonfiguration wurde erfolgreich gespeichert.', type: 'success' });
        }, function (error) {
            _this.alert.alert$.next({ message: 'Es ist ein Fehler aufgetreten.', type: 'error' });
        }), this.settingsSerivce.setAroioSettingsWebinterface(this.formWebinterface.getRawValue()).subscribe(function (_) {
            _this.alert.alert$.next({ message: 'Die Webinterfacekonfiguration erfolgreich gespeichert.', type: 'success' });
        }, function (error) {
            _this.alert.alert$.next({ message: 'Es ist ein Fehler aufgetreten.', type: 'error' });
        }));
    };
    AroioHeaderComponent.prototype.submitPassswordForm = function (event) {
        var _this = this;
        this.subscriptions.push(this.settingsSerivce.setAroioPasswort(this.passwordForm.getRawValue()).subscribe(function (_) {
            _this.alert.alert$.next({ message: 'Das Passwort wurde erfolgreich geändert.', type: 'success' });
        }, function (error) {
            _this.alert.alert$.next({ message: 'Es ist ein Fehler aufgetreten.', type: 'error' });
        }));
    };
    // Modal Specific
    // -----------------------
    AroioHeaderComponent.prototype.openModal = function (template, _index) {
        var _this = this;
        this.subscriptions.push(this.settingsSerivce.getAroioSettings().subscribe(function (aroioSettings) {
            _this.buildForm(aroioSettings);
            _this.buildPasswordForm(aroioSettings);
            _this.isLoading = false;
            _this.modalRef = _this.modalService.show(template, { class: 'modal--lg' });
        }));
    };
    AroioHeaderComponent.prototype.modalClose = function (_index) {
        this.subscriptions.forEach(function (_) {
            _.unsubscribe();
        });
        this.modalRef.hide();
        this.modalRef = null;
    };
    AroioHeaderComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
        { type: _core_services_aroio_settings_service__WEBPACK_IMPORTED_MODULE_5__["AroioSettingsService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"] },
        { type: _core_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AroioAlertService"] }
    ]; };
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

/***/ "./src/app/modules/aroio-wi/modules/layout/components/aroio-system-list/aroio-filter-list-item/aroio-system-list-item.component.ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/modules/aroio-wi/modules/layout/components/aroio-system-list/aroio-filter-list-item/aroio-system-list-item.component.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: AroioSystemListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioSystemListItemComponent", function() { return AroioSystemListItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var AroioSystemListItemComponent = /** @class */ (function () {
    function AroioSystemListItemComponent() {
        this.class = 'aroio-system-list__item';
    }
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
    ], AroioSystemListItemComponent.prototype, "class", void 0);
    AroioSystemListItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'aroio-system-list-item',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./aroio-system-list-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/components/aroio-system-list/aroio-filter-list-item/aroio-system-list-item.component.html")).default
        })
    ], AroioSystemListItemComponent);
    return AroioSystemListItemComponent;
}());



/***/ }),

/***/ "./src/app/modules/aroio-wi/modules/layout/components/aroio-system-list/aroio-system-list.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/aroio-wi/modules/layout/components/aroio-system-list/aroio-system-list.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: AroioSystemListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioSystemListComponent", function() { return AroioSystemListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var AroioSystemListComponent = /** @class */ (function () {
    function AroioSystemListComponent() {
    }
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AroioSystemListComponent.prototype, "title", void 0);
    AroioSystemListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'aroio-system-list',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./aroio-system-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aroio-wi/modules/layout/components/aroio-system-list/aroio-system-list.component.html")).default
        })
    ], AroioSystemListComponent);
    return AroioSystemListComponent;
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
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/__ivy_ngcc__/fesm5/ngx-order-pipe.js");
/* harmony import */ var _components_aroio_system_list_aroio_system_list_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/aroio-system-list/aroio-system-list.component */ "./src/app/modules/aroio-wi/modules/layout/components/aroio-system-list/aroio-system-list.component.ts");
/* harmony import */ var _components_aroio_system_list_aroio_filter_list_item_aroio_system_list_item_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/aroio-system-list/aroio-filter-list-item/aroio-system-list-item.component */ "./src/app/modules/aroio-wi/modules/layout/components/aroio-system-list/aroio-filter-list-item/aroio-system-list-item.component.ts");


































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
                angular_resize_event__WEBPACK_IMPORTED_MODULE_9__["AngularResizedEventModule"],
                ngx_order_pipe__WEBPACK_IMPORTED_MODULE_31__["OrderModule"],
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
                _components_aroio_sidebar_aroio_sidebar_component__WEBPACK_IMPORTED_MODULE_20__["AroioSidebarWidgetComponent"],
                _components_aroio_switch_aroio_switch_component__WEBPACK_IMPORTED_MODULE_21__["AroioSwitchComponent"],
                _components_aroio_form_switch_aroio_form_switch_component__WEBPACK_IMPORTED_MODULE_22__["AroioFormSwitchComponent"],
                _utils_aroio_loading_aroio_loading_component__WEBPACK_IMPORTED_MODULE_10__["AroioLoadingComponent"],
                _components_aroio_alert_aroio_alert_component__WEBPACK_IMPORTED_MODULE_30__["AroioAlertComponent"],
                _components_aroio_input_aroio_input_component__WEBPACK_IMPORTED_MODULE_23__["AroioInputComponent"],
                _components_aroio_system_list_aroio_system_list_component__WEBPACK_IMPORTED_MODULE_32__["AroioSystemListComponent"],
                _components_aroio_system_list_aroio_filter_list_item_aroio_system_list_item_component__WEBPACK_IMPORTED_MODULE_33__["AroioSystemListItemComponent"],
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
                _components_aroio_sidebar_aroio_sidebar_component__WEBPACK_IMPORTED_MODULE_20__["AroioSidebarWidgetComponent"],
                _components_aroio_switch_aroio_switch_component__WEBPACK_IMPORTED_MODULE_21__["AroioSwitchComponent"],
                _components_aroio_form_switch_aroio_form_switch_component__WEBPACK_IMPORTED_MODULE_22__["AroioFormSwitchComponent"],
                _components_aroio_input_aroio_input_component__WEBPACK_IMPORTED_MODULE_23__["AroioInputComponent"],
                _components_aroio_system_list_aroio_system_list_component__WEBPACK_IMPORTED_MODULE_32__["AroioSystemListComponent"],
                _components_aroio_system_list_aroio_filter_list_item_aroio_system_list_item_component__WEBPACK_IMPORTED_MODULE_33__["AroioSystemListItemComponent"],
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
        this.isLoading = false;
    }
    NetworkIndexComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.isLoading = true;
        this.subscriptions.push(this.settingsSerivce.getAroioSettings().subscribe(function (aroioSettings) {
            _this.buildForm(aroioSettings);
            _this.isLoading = false;
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _core_services_aroio_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/services/aroio-settings.service */ "./src/app/modules/core/services/aroio-settings.service.ts");
/* harmony import */ var _core_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/services/alert.service */ "./src/app/modules/core/services/alert.service.ts");





var StreamingIndexComponent = /** @class */ (function () {
    function StreamingIndexComponent(settingsSerivce, alert) {
        this.settingsSerivce = settingsSerivce;
        this.alert = alert;
        this.form = null;
        this.subscriptions = [];
    }
    StreamingIndexComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.subscriptions.push(this.settingsSerivce.getAroioSettings().subscribe(function (aroioSettings) {
            _this.buildForm(aroioSettings);
        }));
    };
    StreamingIndexComponent.prototype.buildForm = function (aroioSettings) {
        if (aroioSettings === void 0) { aroioSettings = null; }
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            servername: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](aroioSettings && aroioSettings.configuration.streaming.servername ? aroioSettings.configuration.streaming.servername : ''),
            serverport: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](aroioSettings && aroioSettings.configuration.streaming.serverport ? aroioSettings.configuration.streaming.serverport : ''),
            squeezeuser: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](aroioSettings && aroioSettings.configuration.streaming.squeezeuser ? aroioSettings.configuration.streaming.squeezeuser : ''),
            squeezepwd: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](aroioSettings && aroioSettings.configuration.streaming.squeezepwd ? aroioSettings.configuration.streaming.squeezepwd : ''),
            playername: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](aroioSettings && aroioSettings.configuration.streaming.playername ? aroioSettings.configuration.streaming.playername : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    };
    StreamingIndexComponent.prototype.submitForm = function (event) {
        var _this = this;
        this.subscriptions.push(this.settingsSerivce.setAroioSettingsStreaming(this.form.getRawValue()).subscribe(function (_) {
            _this.alert.alert$.next({ message: 'Netzwerk erfolgreich gespeichert', type: 'success' });
        }, function (error) {
            _this.alert.alert$.next({ message: 'Es ist ein Fehler aufgetreten.', type: 'error' });
        }));
    };
    StreamingIndexComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (_) {
            _.unsubscribe();
        });
    };
    StreamingIndexComponent.ctorParameters = function () { return [
        { type: _core_services_aroio_settings_service__WEBPACK_IMPORTED_MODULE_3__["AroioSettingsService"] },
        { type: _core_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AroioAlertService"] }
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
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
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
/* harmony import */ var _core_services_aroio_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/services/aroio-settings.service */ "./src/app/modules/core/services/aroio-settings.service.ts");
/* harmony import */ var _core_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/services/alert.service */ "./src/app/modules/core/services/alert.service.ts");




var SystemIndexComponent = /** @class */ (function () {
    function SystemIndexComponent(settingsSerivce, alert) {
        this.settingsSerivce = settingsSerivce;
        this.alert = alert;
        this.subscriptions = [];
    }
    SystemIndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.settingsSerivce.getAroioSettings().subscribe(function (aroioSettings) {
            _this.aroioSettings = aroioSettings;
            _this.getKeyValues(aroioSettings.configuration.network);
        }));
    };
    SystemIndexComponent.prototype.getKeyValues = function (object) {
        var keys = [];
        Object.keys(object).forEach(function (_) {
            keys.push({ key: _, value: object[_] });
        });
        return keys;
    };
    SystemIndexComponent.ctorParameters = function () { return [
        { type: _core_services_aroio_settings_service__WEBPACK_IMPORTED_MODULE_2__["AroioSettingsService"] },
        { type: _core_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AroioAlertService"] }
    ]; };
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
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/alert.service */ "./src/app/modules/core/services/alert.service.ts");







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
            exports: [
                _services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AroioAlertService"]
            ],
            providers: [
                _services_navigation_service__WEBPACK_IMPORTED_MODULE_5__["NavigationService"],
                _services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AroioAlertService"]
            ],
        })
    ], AroioCoreModule);
    return AroioCoreModule;
}());



/***/ }),

/***/ "./src/app/modules/core/interfaces/error.abstract.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/core/interfaces/error.abstract.ts ***!
  \***********************************************************/
/*! exports provided: ErrorServiceAbstract */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorServiceAbstract", function() { return ErrorServiceAbstract; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var ErrorServiceAbstract = /** @class */ (function () {
    function ErrorServiceAbstract() {
    }
    return ErrorServiceAbstract;
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
    //////////////////////////
    // Get Routes
    //////////////////////////
    AroioSettingsService.prototype.getAroioSettings = function () {
        return this._api.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + '/aroio');
    };
    //////////////////////////
    // Patch Routes
    //////////////////////////
    AroioSettingsService.prototype.setAroioBaseInformation = function (form) {
        return this._api.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + '/aroio', form);
    };
    AroioSettingsService.prototype.setAroioSettings = function (form) {
        return this._api.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + '/config', form);
    };
    AroioSettingsService.prototype.setAroioSettingsNetwork = function (form) {
        return this._api.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + '/config/network', form);
    };
    AroioSettingsService.prototype.setAroioSettingsAudio = function (form) {
        return this._api.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + '/config/audio', form);
    };
    AroioSettingsService.prototype.setAroioSettingsAudioOutputConfig = function (form) {
        return this._api.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + '/config/audio/output-configuration', form);
    };
    AroioSettingsService.prototype.setAroioSettingsWebinterface = function (form) {
        return this._api.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + '/config/webinterface', form);
    };
    AroioSettingsService.prototype.setAroioSettingsStreaming = function (form) {
        return this._api.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + '/config/streaming', form);
    };
    AroioSettingsService.prototype.setAroioSettingsConvolver = function (form) {
        return this._api.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + '/config/convolver', form);
    };
    AroioSettingsService.prototype.setAroioPasswort = function (form) {
        return this._api.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + '/password', form);
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

/***/ "./src/app/modules/security/components/login/components/index/index.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/security/components/login/components/index/index.component.ts ***!
  \***************************************************************************************/
/*! exports provided: LoginIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginIndexComponent", function() { return LoginIndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../environments/environment */ "./src/environments/environment.ts");



var LoginIndexComponent = /** @class */ (function () {
    function LoginIndexComponent() {
        this.version = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].version;
    }
    LoginIndexComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'security-login-index-component',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/security/components/login/components/index/index.component.html")).default
        })
    ], LoginIndexComponent);
    return LoginIndexComponent;
}());



/***/ }),

/***/ "./src/app/modules/security/components/login/components/login/login.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/security/components/login/components/login/login.component.ts ***!
  \***************************************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/auth.service */ "./src/app/modules/security/services/auth.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/storage.service */ "./src/app/modules/security/services/storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _services_default_page_resolver_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/default-page-resolver.service */ "./src/app/modules/security/services/default-page-resolver.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");








var LoginComponent = /** @class */ (function () {
    function LoginComponent(api, storage, router, builder, defaultPageResolver, translate, route) {
        this.api = api;
        this.storage = storage;
        this.router = router;
        this.builder = builder;
        this.defaultPageResolver = defaultPageResolver;
        this.translate = translate;
        this.route = route;
        this.isSendingRequest = false;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)])
        });
        this.currentLang = this.translate.currentLang;
    }
    LoginComponent.prototype.handleSubmit = function () {
        var _this = this;
        if (this.form.valid) {
            this.isSendingRequest = true;
            this.api.getToken(this.form.getRawValue(), this.storage).subscribe(function (result) {
                _this.isSendingRequest = false;
                if (_this.route.snapshot.queryParams['returnUrl']) {
                    _this.router.navigateByUrl(_this.route.snapshot.queryParams['returnUrl']);
                }
                else {
                    _this.router.navigate(['/']);
                }
                // this.router.navigate(['/', this.translate.currentLang , 'dashboard']);
            }, function (error) {
                _this.isSendingRequest = false;
                _this.form.get('password').setValue(null);
            });
        }
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: _services_default_page_resolver_service__WEBPACK_IMPORTED_MODULE_6__["DefaultPageResolverService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'security-login-component',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/security/components/login/components/login/login.component.html")).default
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/modules/security/components/logout/logout.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/security/components/logout/logout.component.ts ***!
  \************************************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/modules/security/services/auth.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/modules/security/services/storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");






var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(auth, _storage, _router, translateService) {
        this.auth = auth;
        this._storage = _storage;
        this._router = _router;
        this.translateService = translateService;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"].forgetToken(this._storage);
        this._router.navigate(['/', this.translateService.currentLang, 'login']);
    };
    LogoutComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }
    ]; };
    LogoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'security-logout-component',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./logout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/security/components/logout/logout.component.html")).default
        })
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/modules/security/components/no-access/components/index/index.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/security/components/no-access/components/index/index.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: NoAccessIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoAccessIndexComponent", function() { return NoAccessIndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var NoAccessIndexComponent = /** @class */ (function () {
    function NoAccessIndexComponent() {
    }
    NoAccessIndexComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'security-no-access-index-component',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/security/components/no-access/components/index/index.component.html")).default
        })
    ], NoAccessIndexComponent);
    return NoAccessIndexComponent;
}());



/***/ }),

/***/ "./src/app/modules/security/components/no-access/components/no-access/no-access.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/security/components/no-access/components/no-access/no-access.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: NoAccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoAccessComponent", function() { return NoAccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/auth.service */ "./src/app/modules/security/services/auth.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/storage.service */ "./src/app/modules/security/services/storage.service.ts");






var NoAccessComponent = /** @class */ (function () {
    function NoAccessComponent(_router, _route, _storage, _translateService) {
        this._router = _router;
        this._route = _route;
        this._storage = _storage;
        this._translateService = _translateService;
    }
    NoAccessComponent.prototype.logout = function () {
        _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"].forgetToken(this._storage);
        this._router.navigate(['/', this._translateService.currentLang, 'login']);
    };
    NoAccessComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }
    ]; };
    NoAccessComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'security-no-access-component',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./no-access.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/security/components/no-access/components/no-access/no-access.component.html")).default
        })
    ], NoAccessComponent);
    return NoAccessComponent;
}());



/***/ }),

/***/ "./src/app/modules/security/components/not-found/components/index/index.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/security/components/not-found/components/index/index.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: NotFoundIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundIndexComponent", function() { return NotFoundIndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var NotFoundIndexComponent = /** @class */ (function () {
    function NotFoundIndexComponent() {
    }
    NotFoundIndexComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'security-not-found-index-component',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/security/components/not-found/components/index/index.component.html")).default
        })
    ], NotFoundIndexComponent);
    return NotFoundIndexComponent;
}());



/***/ }),

/***/ "./src/app/modules/security/components/not-found/components/not-found/not-found.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/security/components/not-found/components/not-found/not-found.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
        this.currentPath = window.location.href;
    }
    NotFoundComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'security-not-found-component',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/security/components/not-found/components/not-found/not-found.component.html")).default
        })
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/modules/security/components/password-request/components/index/index.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/security/components/password-request/components/index/index.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: PasswordRequestIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordRequestIndexComponent", function() { return PasswordRequestIndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../environments/environment */ "./src/environments/environment.ts");



var PasswordRequestIndexComponent = /** @class */ (function () {
    function PasswordRequestIndexComponent() {
        this.version = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].version;
    }
    PasswordRequestIndexComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'security-password-request-index-component',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/security/components/password-request/components/index/index.component.html")).default
        })
    ], PasswordRequestIndexComponent);
    return PasswordRequestIndexComponent;
}());



/***/ }),

/***/ "./src/app/modules/security/components/password-request/components/password-request/password-request.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/security/components/password-request/components/password-request/password-request.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: PasswordRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordRequestComponent", function() { return PasswordRequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/services/alert.service */ "./src/app/modules/core/services/alert.service.ts");







var PasswordRequestComponent = /** @class */ (function () {
    function PasswordRequestComponent(router, http, builder, _alertService, translateService) {
        this.router = router;
        this.http = http;
        this.builder = builder;
        this._alertService = _alertService;
        this.translateService = translateService;
        this.isSendingRequest = false;
        this.currentLang = this.translateService.currentLang;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])
        });
    }
    PasswordRequestComponent.prototype.handleSubmit = function () {
        var _this = this;
        if (this.form.valid) {
            this.isSendingRequest = true;
            this.http.post('/auth/password', this.form.getRawValue()).subscribe(function (result) {
                _this.isSendingRequest = false;
                _this._alertService.alert$.next({ type: 'success', message: 'security.password_request.success' });
            }, function (error) {
                console.dir(error);
                _this.isSendingRequest = false;
            });
        }
    };
    PasswordRequestComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _core_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AroioAlertService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }
    ]; };
    PasswordRequestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'security-password-request-component',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./password-request.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/security/components/password-request/components/password-request/password-request.component.html")).default
        })
    ], PasswordRequestComponent);
    return PasswordRequestComponent;
}());



/***/ }),

/***/ "./src/app/modules/security/components/password-reset/components/index/index.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/security/components/password-reset/components/index/index.component.ts ***!
  \************************************************************************************************/
/*! exports provided: PasswordResetIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordResetIndexComponent", function() { return PasswordResetIndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../environments/environment */ "./src/environments/environment.ts");



var PasswordResetIndexComponent = /** @class */ (function () {
    function PasswordResetIndexComponent() {
        this.version = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].version;
    }
    PasswordResetIndexComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'security-password-reset-index-component',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/security/components/password-reset/components/index/index.component.html")).default
        })
    ], PasswordResetIndexComponent);
    return PasswordResetIndexComponent;
}());



/***/ }),

/***/ "./src/app/modules/security/components/password-reset/components/password-reset/password-reset.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/security/components/password-reset/components/password-reset/password-reset.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: PasswordResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordResetComponent", function() { return PasswordResetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/storage.service */ "./src/app/modules/security/services/storage.service.ts");
/* harmony import */ var _services_default_page_resolver_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/default-page-resolver.service */ "./src/app/modules/security/services/default-page-resolver.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/auth.service */ "./src/app/modules/security/services/auth.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/alert.service */ "./src/app/modules/core/services/alert.service.ts");










var PasswordResetComponent = /** @class */ (function () {
    function PasswordResetComponent(storage, router, translate, route, http, builder, _alertService, _defaultPageResolver) {
        this.storage = storage;
        this.router = router;
        this.translate = translate;
        this.route = route;
        this.http = http;
        this.builder = builder;
        this._alertService = _alertService;
        this._defaultPageResolver = _defaultPageResolver;
        this.isSendingRequest = false;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]),
            passwordRepeated: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)])
        }, this.passwordMatchValidator);
    }
    PasswordResetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSubscription = this.route.params.subscribe(function (params) {
            _this.hash = params['hash'];
        });
    };
    PasswordResetComponent.prototype.ngOnDestroy = function () {
        this.routeSubscription.unsubscribe();
    };
    PasswordResetComponent.prototype.handleSubmit = function () {
        var _this = this;
        if (this.form.valid && this.hash) {
            this.isSendingRequest = true;
            this.http.post('/auth/password/' + this.hash, this.form.getRawValue()).subscribe(function (result) {
                _this.isSendingRequest = false;
                _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"].storeToken(result['token'], _this.storage);
                _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"].setUser(result['token']);
                _this._alertService.alert$.next({ type: 'success', message: 'security.password_reset.success' });
                _this.router.navigate(_this._defaultPageResolver.resolve());
            }, function (error) {
                console.dir(error);
                _this.isSendingRequest = false;
            });
        }
    };
    PasswordResetComponent.prototype.passwordMatchValidator = function (g) {
        return g.get('password').value === g.get('passwordRepeated').value ? null : { 'passwordIsMatching': true };
    };
    PasswordResetComponent.ctorParameters = function () { return [
        { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _core_services_alert_service__WEBPACK_IMPORTED_MODULE_9__["AroioAlertService"] },
        { type: _services_default_page_resolver_service__WEBPACK_IMPORTED_MODULE_6__["DefaultPageResolverService"] }
    ]; };
    PasswordResetComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'security-password-reset-component',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./password-reset.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/security/components/password-reset/components/password-reset/password-reset.component.html")).default
        })
    ], PasswordResetComponent);
    return PasswordResetComponent;
}());



/***/ }),

/***/ "./src/app/modules/security/components/select-device/select-device.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/security/components/select-device/select-device.component.ts ***!
  \**************************************************************************************/
/*! exports provided: SecuritySelectDeviceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecuritySelectDeviceComponent", function() { return SecuritySelectDeviceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_aroio_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/aroio-settings.service */ "./src/app/modules/core/services/aroio-settings.service.ts");
/* harmony import */ var _core_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/services/alert.service */ "./src/app/modules/core/services/alert.service.ts");







var SecuritySelectDeviceComponent = /** @class */ (function () {
    function SecuritySelectDeviceComponent(settingsSerivce, alert, router, translate) {
        this.settingsSerivce = settingsSerivce;
        this.alert = alert;
        this.router = router;
        this.translate = translate;
        this.form = null;
        this.subscriptions = [];
        this.options = [
            { label: 'AroioSU', value: 'AroioSU' },
            { label: 'AroioEX', value: 'AroioEX' },
            { label: 'AroioLT', value: 'AroioLT' },
            { label: 'RaspberryPI', value: 'RaspberryPI' }
        ];
    }
    SecuritySelectDeviceComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    SecuritySelectDeviceComponent.prototype.buildForm = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            webinterface: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                initial_setup: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            }),
            network: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                hostname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            }),
            system: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                platform: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            }),
            streaming: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                playername: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            })
        });
    };
    SecuritySelectDeviceComponent.prototype.setAroio = function () {
        var _this = this;
        this.form.get('webinterface').get('initial_setup').setValue(false);
        this.form.get('system').get('platform').setValue(this.form.get('network').get('hostname').value);
        this.form.get('streaming').get('playername').setValue(this.form.get('network').get('hostname').value);
        this.subscriptions.push(this.settingsSerivce.setAroioSettings(this.form.getRawValue()).subscribe(function (_) {
            _this.alert.alert$.next({ message: 'Ihre Grundkonfiguration wurde erfolgreich gespeichert', type: 'success' });
            _this.router.navigate([_this.translate.currentLang, 'network']);
        }, function (error) {
            _this.alert.alert$.next({ message: 'Es ist ein Fehler aufgetreten.', type: 'error' });
        }));
    };
    SecuritySelectDeviceComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (_) {
            _.unsubscribe();
        });
    };
    SecuritySelectDeviceComponent.ctorParameters = function () { return [
        { type: _core_services_aroio_settings_service__WEBPACK_IMPORTED_MODULE_5__["AroioSettingsService"] },
        { type: _core_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AroioAlertService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
    ]; };
    SecuritySelectDeviceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '<aroio-security-select-device-component>',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./select-device.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/security/components/select-device/select-device.component.html")).default
        })
    ], SecuritySelectDeviceComponent);
    return SecuritySelectDeviceComponent;
}());



/***/ }),

/***/ "./src/app/modules/security/directives/has-not-role.directive.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/security/directives/has-not-role.directive.ts ***!
  \***********************************************************************/
/*! exports provided: HasNotRoleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HasNotRoleDirective", function() { return HasNotRoleDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/modules/security/services/auth.service.ts");



var HasNotRoleDirective = /** @class */ (function () {
    function HasNotRoleDirective(templateRef, viewContainer, cdr) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.cdr = cdr;
        // Is the element currently rendered
        this.hasView = false;
    }
    Object.defineProperty(HasNotRoleDirective.prototype, "hasNotRoles", {
        /**
         * @param {[string , string]} condition
         */
        set: function (roles) {
            this.roles = roles;
            this.handleChange();
        },
        enumerable: true,
        configurable: true
    });
    HasNotRoleDirective.prototype.ngOnInit = function () {
        //this.userEventSubscription = AuthService.loggedInEvent.subscribe(u => {
        //  this.cdr.markForCheck();
        //  this.handleChange();
        //});
    };
    HasNotRoleDirective.prototype.ngOnDestroy = function () {
        if (this.userEventSubscription) {
            this.userEventSubscription.unsubscribe();
            this.userEventSubscription = null;
        }
    };
    HasNotRoleDirective.prototype.handleChange = function () {
        var _this = this;
        if (_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"].user.roles.filter(function (role) { return _this.roles.includes(role); }).length > 0) {
            this.hide();
        }
        else {
            this.show();
        }
    };
    // Show the element
    HasNotRoleDirective.prototype.show = function () {
        if (!this.hasView) {
            this.viewContainer.createEmbeddedView(this.templateRef);
            this.hasView = true;
        }
    };
    // Hide the element
    HasNotRoleDirective.prototype.hide = function () {
        if (this.hasView) {
            this.viewContainer.clear();
            this.hasView = false;
        }
    };
    HasNotRoleDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], HasNotRoleDirective.prototype, "hasNotRoles", null);
    HasNotRoleDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[hasNotRoles]'
        })
    ], HasNotRoleDirective);
    return HasNotRoleDirective;
}());



/***/ }),

/***/ "./src/app/modules/security/directives/has-role.directive.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/security/directives/has-role.directive.ts ***!
  \*******************************************************************/
/*! exports provided: HasRoleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HasRoleDirective", function() { return HasRoleDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/modules/security/services/auth.service.ts");
/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/6/19 9:43 AM Braune Digital GmbH
 */



var HasRoleDirective = /** @class */ (function () {
    function HasRoleDirective(templateRef, viewContainer, auth, cdr) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.auth = auth;
        this.cdr = cdr;
        // Is the element currently rendered
        this.hasView = false;
    }
    Object.defineProperty(HasRoleDirective.prototype, "hasRoles", {
        /**
         * @param {[string , string]} condition
         */
        set: function (roles) {
            this.roles = roles;
            this.handleChange();
        },
        enumerable: true,
        configurable: true
    });
    HasRoleDirective.prototype.ngOnInit = function () {
        // this.userEventSubscription = this.auth.loggedInEvent.subscribe(u => {
        //   this.cdr.markForCheck();
        //   this.handleChange();
        // });
    };
    HasRoleDirective.prototype.ngOnDestroy = function () {
        if (this.userEventSubscription) {
            this.userEventSubscription.unsubscribe();
            this.userEventSubscription = null;
        }
    };
    HasRoleDirective.prototype.handleChange = function () {
        var _this = this;
        if (_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"].user.roles.filter(function (role) { return _this.roles.includes(role); }).length > 0) {
            this.show();
        }
        else {
            this.hide();
        }
    };
    // Show the element
    HasRoleDirective.prototype.show = function () {
        if (!this.hasView) {
            this.viewContainer.createEmbeddedView(this.templateRef);
            this.hasView = true;
        }
    };
    // Hide the element
    HasRoleDirective.prototype.hide = function () {
        if (this.hasView) {
            this.viewContainer.clear();
            this.hasView = false;
        }
    };
    HasRoleDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], HasRoleDirective.prototype, "hasRoles", null);
    HasRoleDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[hasRoles]'
        })
    ], HasRoleDirective);
    return HasRoleDirective;
}());



/***/ }),

/***/ "./src/app/modules/security/directives/is-authorized.directive.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/security/directives/is-authorized.directive.ts ***!
  \************************************************************************/
/*! exports provided: IsAuthorizedDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsAuthorizedDirective", function() { return IsAuthorizedDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/storage.service */ "./src/app/modules/security/services/storage.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/modules/security/services/auth.service.ts");
/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/5/19 5:46 PM Braune Digital GmbH
 */




var IsAuthorizedDirective = /** @class */ (function () {
    function IsAuthorizedDirective(_templateRef, _viewContainer, _storage) {
        this._templateRef = _templateRef;
        this._viewContainer = _viewContainer;
        this._storage = _storage;
        // Is the element currently rendered
        this.hasView = false;
    }
    IsAuthorizedDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.handleChange();
        this.userEventSubscription = _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"].onAuthenticate.subscribe(function (_user) {
            if (_user) {
                _this.show();
                return;
            }
            _this.hide();
        });
    };
    IsAuthorizedDirective.prototype.ngOnDestroy = function () {
        if (this.userEventSubscription) {
            this.userEventSubscription.unsubscribe();
            this.userEventSubscription = null;
        }
    };
    IsAuthorizedDirective.prototype.handleChange = function () {
        var _this = this;
        _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"].isAuthenticated(this._storage).then(function (_) {
            _this.show();
        }, function (_) {
            _this.hide();
        });
    };
    // Show the element
    IsAuthorizedDirective.prototype.show = function () {
        if (!this.hasView) {
            this._viewContainer.createEmbeddedView(this._templateRef);
            this.hasView = true;
        }
    };
    // Hide the element
    IsAuthorizedDirective.prototype.hide = function () {
        if (this.hasView) {
            this._viewContainer.clear();
            this.hasView = false;
        }
    };
    IsAuthorizedDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] },
        { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"] }
    ]; };
    IsAuthorizedDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[isAuthorized]'
        })
    ], IsAuthorizedDirective);
    return IsAuthorizedDirective;
}());



/***/ }),

/***/ "./src/app/modules/security/directives/is-not-authorized.directive.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/security/directives/is-not-authorized.directive.ts ***!
  \****************************************************************************/
/*! exports provided: IsNotAuthorizedDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsNotAuthorizedDirective", function() { return IsNotAuthorizedDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/storage.service */ "./src/app/modules/security/services/storage.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/modules/security/services/auth.service.ts");
/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/6/19 9:43 AM Braune Digital GmbH
 */




var IsNotAuthorizedDirective = /** @class */ (function () {
    function IsNotAuthorizedDirective(_templateRef, _viewContainer, _storage) {
        this._templateRef = _templateRef;
        this._viewContainer = _viewContainer;
        this._storage = _storage;
        // Is the element currently rendered
        this.hasView = false;
    }
    IsNotAuthorizedDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.handleChange();
        this.userEventSubscription = _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"].onAuthenticate.subscribe(function (_user) {
            if (_user) {
                _this.hide();
                return;
            }
            _this.show();
        });
    };
    IsNotAuthorizedDirective.prototype.ngOnDestroy = function () {
        if (this.userEventSubscription) {
            this.userEventSubscription.unsubscribe();
            this.userEventSubscription = null;
        }
    };
    IsNotAuthorizedDirective.prototype.handleChange = function () {
        var _this = this;
        _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"].isAuthenticated(this._storage).then(function (_) {
            _this.hide();
        }, function (_) {
            _this.show();
        });
    };
    // Show the element
    IsNotAuthorizedDirective.prototype.show = function () {
        if (!this.hasView) {
            this._viewContainer.createEmbeddedView(this._templateRef);
            this.hasView = true;
        }
    };
    // Hide the element
    IsNotAuthorizedDirective.prototype.hide = function () {
        if (this.hasView) {
            this._viewContainer.clear();
            this.hasView = false;
        }
    };
    IsNotAuthorizedDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] },
        { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"] }
    ]; };
    IsNotAuthorizedDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[isNotAuthorized]'
        })
    ], IsNotAuthorizedDirective);
    return IsNotAuthorizedDirective;
}());



/***/ }),

/***/ "./src/app/modules/security/directives/module-access.directive.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/security/directives/module-access.directive.ts ***!
  \************************************************************************/
/*! exports provided: ModuleAccessDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleAccessDirective", function() { return ModuleAccessDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_module_access_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/module-access.service */ "./src/app/modules/security/services/module-access.service.ts");
/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/6/19 9:43 AM Braune Digital GmbH
 */



var ModuleAccessDirective = /** @class */ (function () {
    function ModuleAccessDirective(moduleAccessService, templateRef, viewContainer) {
        this.moduleAccessService = moduleAccessService;
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        // Is the element currently rendered
        this.hasView = false;
    }
    Object.defineProperty(ModuleAccessDirective.prototype, "moduleAccess", {
        /**
         * First index is the subject, second one the workflow_name and third the transition_name
         * @param modules
         */
        set: function (modules) {
            this.modules = modules;
            this.handleChange();
        },
        enumerable: true,
        configurable: true
    });
    ModuleAccessDirective.prototype.ngOnInit = function () {
    };
    ModuleAccessDirective.prototype.ngOnDestroy = function () {
        if (this.userEventSubscription) {
            this.userEventSubscription.unsubscribe();
            this.userEventSubscription = null;
        }
    };
    ModuleAccessDirective.prototype.handleChange = function () {
        var _this = this;
        this.userEventSubscription = this.moduleAccessService.hasAccess((this.modules) ? this.modules : []).subscribe(function (_) {
            if (_) {
                _this.show();
            }
            else {
                _this.hide();
            }
        });
    };
    // Show the element
    ModuleAccessDirective.prototype.show = function () {
        if (!this.hasView) {
            this.viewContainer.createEmbeddedView(this.templateRef);
            this.hasView = true;
        }
    };
    // Hide the element
    ModuleAccessDirective.prototype.hide = function () {
        if (this.hasView) {
            this.viewContainer.clear();
            this.hasView = false;
        }
    };
    ModuleAccessDirective.ctorParameters = function () { return [
        { type: _services_module_access_service__WEBPACK_IMPORTED_MODULE_2__["ModuleAccessService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ModuleAccessDirective.prototype, "moduleAccess", null);
    ModuleAccessDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[moduleAccess]'
        })
    ], ModuleAccessDirective);
    return ModuleAccessDirective;
}());



/***/ }),

/***/ "./src/app/modules/security/guards/authentication.guard.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/security/guards/authentication.guard.ts ***!
  \*****************************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/modules/security/services/auth.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/storage.service */ "./src/app/modules/security/services/storage.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/5/19 5:46 PM Braune Digital GmbH
 */






var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, storage, translate) {
        this.router = router;
        this.storage = storage;
        this.translate = translate;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"].isAuthenticated(_this.storage).then(function (r) {
                resolve(true);
            }, function (e) {
                _this.router.navigate(['/', _this.translate.currentLang, 'login'], { queryParams: { returnUrl: state.url } });
                resolve(false);
            });
        });
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }
    ]; };
    AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/modules/security/guards/initial-setup.guard.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/security/guards/initial-setup.guard.ts ***!
  \****************************************************************/
/*! exports provided: InitialSetupGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialSetupGuard", function() { return InitialSetupGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _core_services_aroio_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/aroio-settings.service */ "./src/app/modules/core/services/aroio-settings.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");





var InitialSetupGuard = /** @class */ (function () {
    function InitialSetupGuard(aroioSettingsService, router, translate) {
        this.aroioSettingsService = aroioSettingsService;
        this.router = router;
        this.translate = translate;
    }
    InitialSetupGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.aroioSettingsService.getAroioSettings().subscribe(function (_) {
                if (!_.configuration.webinterface.initial_setup) {
                    resolve(true);
                }
                else {
                    _this.router.navigate(['/', _this.translate.currentLang, 'select-aroio'], { queryParams: { returnUrl: state.url } });
                    resolve(false);
                }
            }, function (error) {
                _this.router.navigate(['/', _this.translate.currentLang, 'select-aroio'], { queryParams: { returnUrl: state.url } });
                resolve(false);
            });
        });
    };
    InitialSetupGuard.ctorParameters = function () { return [
        { type: _core_services_aroio_settings_service__WEBPACK_IMPORTED_MODULE_3__["AroioSettingsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
    ]; };
    InitialSetupGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], InitialSetupGuard);
    return InitialSetupGuard;
}());



/***/ }),

/***/ "./src/app/modules/security/guards/module-access.guard.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/security/guards/module-access.guard.ts ***!
  \****************************************************************/
/*! exports provided: ModuleAccessGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleAccessGuard", function() { return ModuleAccessGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_module_access_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/module-access.service */ "./src/app/modules/security/services/module-access.service.ts");
/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/6/19 9:43 AM Braune Digital GmbH
 */



var ModuleAccessGuard = /** @class */ (function () {
    function ModuleAccessGuard(moduleAccess) {
        this.moduleAccess = moduleAccess;
    }
    ModuleAccessGuard.prototype.canActivate = function (route, state) {
        return this.moduleAccess.hasAccess(route.data['moduleAccess']);
    };
    ModuleAccessGuard.ctorParameters = function () { return [
        { type: _services_module_access_service__WEBPACK_IMPORTED_MODULE_2__["ModuleAccessService"] }
    ]; };
    ModuleAccessGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ModuleAccessGuard);
    return ModuleAccessGuard;
}());



/***/ }),

/***/ "./src/app/modules/security/interceptors/api.interceptor.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/security/interceptors/api.interceptor.ts ***!
  \******************************************************************/
/*! exports provided: ApiInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiInterceptor", function() { return ApiInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/6/19 9:43 AM Braune Digital GmbH
 */



var ApiInterceptor = /** @class */ (function () {
    function ApiInterceptor() {
    }
    ApiInterceptor.prototype.intercept = function (req, next) {
        // Add the api base path and pass on the new request.
        if (req.url.match(new RegExp(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api, 'g'))) {
            return next.handle(req);
        }
        else {
            return next.handle(req.clone({ url: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api + req.url }));
        }
    };
    ApiInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ApiInterceptor);
    return ApiInterceptor;
}());



/***/ }),

/***/ "./src/app/modules/security/interceptors/auth.interceptor.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/security/interceptors/auth.interceptor.ts ***!
  \*******************************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/storage.service */ "./src/app/modules/security/services/storage.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/modules/security/services/auth.service.ts");
/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2018 Braune Digital GmbH
 */







var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(router, storage) {
        this.router = router;
        this.storage = storage;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (event) {
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"].forgetToken(_this.storage);
                    //this.router.navigate(['login']);
                }
            }
        }));
    };
    AuthInterceptor.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] }
    ]; };
    AuthInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/modules/security/interceptors/error.interceptor.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/security/interceptors/error.interceptor.ts ***!
  \********************************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _braune_digital_form_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @braune-digital/form-utilities */ "./node_modules/@braune-digital/form-utilities/__ivy_ngcc__/fesm5/braune-digital-form-utilities.js");
/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/6/19 9:43 AM Braune Digital GmbH
 */






var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(router, _error) {
        this.router = router;
        this._error = _error;
    }
    ErrorInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (event) {
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpErrorResponse"]) {
                if (err.status !== 200) {
                    var errorObject = err.error;
                    /**
                     * send remote error events
                     */
                    if (errorObject && errorObject.message) {
                        _this._error.formError.next(errorObject.message);
                    }
                    else {
                        if (err.status === 400) {
                            _this._error.formError.next('form.errors.default');
                        }
                    }
                }
            }
        }));
    };
    ErrorInterceptor.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _braune_digital_form_utilities__WEBPACK_IMPORTED_MODULE_5__["FormErrorService"] }
    ]; };
    ErrorInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/modules/security/interceptors/jwt.interceptor.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/security/interceptors/jwt.interceptor.ts ***!
  \******************************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/modules/security/services/auth.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/storage.service */ "./src/app/modules/security/services/storage.service.ts");
/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/6/19 9:43 AM Braune Digital GmbH
 */






var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(storage) {
        this.storage = storage;
    }
    JwtInterceptor.prototype.intercept = function (req, next) {
        return this.getAuthorizationHeader().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (authHeader) {
            // If there is an auth header add it and pass on the new request.
            if (authHeader) {
                return next
                    .handle(req.clone({
                    setHeaders: authHeader
                }));
            }
            // Simply pass on the request if there is no header to set.
            return next.handle(req);
        }));
    };
    JwtInterceptor.prototype.getAuthorizationHeader = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"].getAuthorizationHeader(this.storage));
    };
    JwtInterceptor.ctorParameters = function () { return [
        { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] }
    ]; };
    JwtInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/modules/security/interceptors/locale.interceptor.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/security/interceptors/locale.interceptor.ts ***!
  \*********************************************************************/
/*! exports provided: LocaleInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocaleInterceptor", function() { return LocaleInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/6/19 9:43 AM Braune Digital GmbH
 */





var LocaleInterceptor = /** @class */ (function () {
    function LocaleInterceptor(translation) {
        this.translation = translation;
    }
    LocaleInterceptor.prototype.intercept = function (req, next) {
        return this.getAuthorizationLocaleHeader().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (authHeader) {
            // If there is an auth header add it and pass on the new request.
            if (authHeader) {
                return next
                    .handle(req.clone({
                    setHeaders: authHeader
                }));
            }
            // Simply pass on the request if there is no header to set.
            return next.handle(req);
        }));
    };
    LocaleInterceptor.prototype.getAuthorizationLocaleHeader = function () {
        if (this.translation.currentLang) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(Promise.resolve({ 'X-Locale': this.translation.currentLang }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(Promise.resolve({}));
    };
    LocaleInterceptor.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
    ]; };
    LocaleInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], LocaleInterceptor);
    return LocaleInterceptor;
}());



/***/ }),

/***/ "./src/app/modules/security/interfaces/Storage.abstract.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/security/interfaces/Storage.abstract.ts ***!
  \*****************************************************************/
/*! exports provided: StorageAbstract */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageAbstract", function() { return StorageAbstract; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var StorageAbstract = /** @class */ (function () {
    function StorageAbstract() {
    }
    return StorageAbstract;
}());



/***/ }),

/***/ "./src/app/modules/security/security.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/security/security.module.ts ***!
  \*****************************************************/
/*! exports provided: SecurityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityModule", function() { return SecurityModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _components_login_components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/components/login/login.component */ "./src/app/modules/security/components/login/components/login/login.component.ts");
/* harmony import */ var _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/logout/logout.component */ "./src/app/modules/security/components/logout/logout.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _braune_digital_form_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @braune-digital/form-utilities */ "./node_modules/@braune-digital/form-utilities/__ivy_ngcc__/fesm5/braune-digital-form-utilities.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _directives_has_role_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/has-role.directive */ "./src/app/modules/security/directives/has-role.directive.ts");
/* harmony import */ var _directives_has_not_role_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/has-not-role.directive */ "./src/app/modules/security/directives/has-not-role.directive.ts");
/* harmony import */ var _directives_is_authorized_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directives/is-authorized.directive */ "./src/app/modules/security/directives/is-authorized.directive.ts");
/* harmony import */ var _directives_is_not_authorized_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./directives/is-not-authorized.directive */ "./src/app/modules/security/directives/is-not-authorized.directive.ts");
/* harmony import */ var _directives_module_access_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./directives/module-access.directive */ "./src/app/modules/security/directives/module-access.directive.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/storage.service */ "./src/app/modules/security/services/storage.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/modules/security/services/auth.service.ts");
/* harmony import */ var _services_error_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/error.service */ "./src/app/modules/security/services/error.service.ts");
/* harmony import */ var _services_module_access_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/module-access.service */ "./src/app/modules/security/services/module-access.service.ts");
/* harmony import */ var _services_default_page_resolver_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/default-page-resolver.service */ "./src/app/modules/security/services/default-page-resolver.service.ts");
/* harmony import */ var _services_role_access_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/role-access.service */ "./src/app/modules/security/services/role-access.service.ts");
/* harmony import */ var _guards_authentication_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./guards/authentication.guard */ "./src/app/modules/security/guards/authentication.guard.ts");
/* harmony import */ var _guards_module_access_guard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./guards/module-access.guard */ "./src/app/modules/security/guards/module-access.guard.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _interceptors_api_interceptor__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./interceptors/api.interceptor */ "./src/app/modules/security/interceptors/api.interceptor.ts");
/* harmony import */ var _interceptors_locale_interceptor__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./interceptors/locale.interceptor */ "./src/app/modules/security/interceptors/locale.interceptor.ts");
/* harmony import */ var _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./interceptors/jwt.interceptor */ "./src/app/modules/security/interceptors/jwt.interceptor.ts");
/* harmony import */ var _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./interceptors/auth.interceptor */ "./src/app/modules/security/interceptors/auth.interceptor.ts");
/* harmony import */ var _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./interceptors/error.interceptor */ "./src/app/modules/security/interceptors/error.interceptor.ts");
/* harmony import */ var _components_login_components_index_index_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/login/components/index/index.component */ "./src/app/modules/security/components/login/components/index/index.component.ts");
/* harmony import */ var _components_not_found_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/not-found/components/not-found/not-found.component */ "./src/app/modules/security/components/not-found/components/not-found/not-found.component.ts");
/* harmony import */ var _components_not_found_components_index_index_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/not-found/components/index/index.component */ "./src/app/modules/security/components/not-found/components/index/index.component.ts");
/* harmony import */ var _components_password_request_components_password_request_password_request_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/password-request/components/password-request/password-request.component */ "./src/app/modules/security/components/password-request/components/password-request/password-request.component.ts");
/* harmony import */ var _components_password_request_components_index_index_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/password-request/components/index/index.component */ "./src/app/modules/security/components/password-request/components/index/index.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _components_password_reset_components_password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/password-reset/components/password-reset/password-reset.component */ "./src/app/modules/security/components/password-reset/components/password-reset/password-reset.component.ts");
/* harmony import */ var _components_password_reset_components_index_index_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/password-reset/components/index/index.component */ "./src/app/modules/security/components/password-reset/components/index/index.component.ts");
/* harmony import */ var _components_select_device_select_device_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/select-device/select-device.component */ "./src/app/modules/security/components/select-device/select-device.component.ts");
/* harmony import */ var _components_no_access_components_no_access_no_access_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/no-access/components/no-access/no-access.component */ "./src/app/modules/security/components/no-access/components/no-access/no-access.component.ts");
/* harmony import */ var _components_no_access_components_index_index_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/no-access/components/index/index.component */ "./src/app/modules/security/components/no-access/components/index/index.component.ts");
/* harmony import */ var _aroio_wi_modules_layout_layout_module__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../aroio-wi/modules/layout/layout.module */ "./src/app/modules/aroio-wi/modules/layout/layout.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../core/core.module */ "./src/app/modules/core/core.module.ts");
/* harmony import */ var _guards_initial_setup_guard__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./guards/initial-setup.guard */ "./src/app/modules/security/guards/initial-setup.guard.ts");











































var SecurityModule = /** @class */ (function () {
    function SecurityModule() {
    }
    SecurityModule_1 = SecurityModule;
    SecurityModule.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: SecurityModule_1,
            providers: [
                config.storage || _services_storage_service__WEBPACK_IMPORTED_MODULE_14__["StorageService"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"],
                _services_error_service__WEBPACK_IMPORTED_MODULE_16__["ErrorService"],
                _services_module_access_service__WEBPACK_IMPORTED_MODULE_17__["ModuleAccessService"],
                _services_default_page_resolver_service__WEBPACK_IMPORTED_MODULE_18__["DefaultPageResolverService"],
                _guards_initial_setup_guard__WEBPACK_IMPORTED_MODULE_42__["InitialSetupGuard"],
                _services_role_access_service__WEBPACK_IMPORTED_MODULE_19__["RoleAccessService"],
                _guards_authentication_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"],
                _guards_module_access_guard__WEBPACK_IMPORTED_MODULE_21__["ModuleAccessGuard"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HTTP_INTERCEPTORS"],
                    useClass: _interceptors_api_interceptor__WEBPACK_IMPORTED_MODULE_23__["ApiInterceptor"],
                    multi: true
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HTTP_INTERCEPTORS"],
                    useClass: _interceptors_locale_interceptor__WEBPACK_IMPORTED_MODULE_24__["LocaleInterceptor"],
                    multi: true
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HTTP_INTERCEPTORS"],
                    useClass: _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_25__["JwtInterceptor"],
                    multi: true
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HTTP_INTERCEPTORS"],
                    useClass: _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_26__["AuthInterceptor"],
                    multi: true
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HTTP_INTERCEPTORS"],
                    useClass: _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_27__["ErrorInterceptor"],
                    multi: true
                }
            ]
        };
    };
    var SecurityModule_1;
    SecurityModule = SecurityModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _aroio_wi_modules_layout_layout_module__WEBPACK_IMPORTED_MODULE_40__["AroioLayoutModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_41__["AroioCoreModule"],
                _braune_digital_form_utilities__WEBPACK_IMPORTED_MODULE_6__["FormUtilitiesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_34__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_33__["BrowserAnimationsModule"],
            ],
            declarations: [
                _components_login_components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
                _components_login_components_index_index_component__WEBPACK_IMPORTED_MODULE_28__["LoginIndexComponent"],
                _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_3__["LogoutComponent"],
                _components_not_found_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_29__["NotFoundComponent"],
                _components_not_found_components_index_index_component__WEBPACK_IMPORTED_MODULE_30__["NotFoundIndexComponent"],
                _components_password_request_components_password_request_password_request_component__WEBPACK_IMPORTED_MODULE_31__["PasswordRequestComponent"],
                _components_password_request_components_index_index_component__WEBPACK_IMPORTED_MODULE_32__["PasswordRequestIndexComponent"],
                _components_password_reset_components_password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_35__["PasswordResetComponent"],
                _components_password_reset_components_index_index_component__WEBPACK_IMPORTED_MODULE_36__["PasswordResetIndexComponent"],
                _directives_has_role_directive__WEBPACK_IMPORTED_MODULE_9__["HasRoleDirective"],
                _directives_has_not_role_directive__WEBPACK_IMPORTED_MODULE_10__["HasNotRoleDirective"],
                _directives_is_authorized_directive__WEBPACK_IMPORTED_MODULE_11__["IsAuthorizedDirective"],
                _directives_is_not_authorized_directive__WEBPACK_IMPORTED_MODULE_12__["IsNotAuthorizedDirective"],
                _directives_module_access_directive__WEBPACK_IMPORTED_MODULE_13__["ModuleAccessDirective"],
                _components_select_device_select_device_component__WEBPACK_IMPORTED_MODULE_37__["SecuritySelectDeviceComponent"],
                _components_no_access_components_no_access_no_access_component__WEBPACK_IMPORTED_MODULE_38__["NoAccessComponent"],
                _components_no_access_components_index_index_component__WEBPACK_IMPORTED_MODULE_39__["NoAccessIndexComponent"]
            ],
            exports: [
                _components_login_components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
                _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_3__["LogoutComponent"],
                _components_login_components_index_index_component__WEBPACK_IMPORTED_MODULE_28__["LoginIndexComponent"],
                _components_not_found_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_29__["NotFoundComponent"],
                _components_not_found_components_index_index_component__WEBPACK_IMPORTED_MODULE_30__["NotFoundIndexComponent"],
                _components_password_request_components_password_request_password_request_component__WEBPACK_IMPORTED_MODULE_31__["PasswordRequestComponent"],
                _components_password_request_components_index_index_component__WEBPACK_IMPORTED_MODULE_32__["PasswordRequestIndexComponent"],
                _components_password_reset_components_password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_35__["PasswordResetComponent"],
                _components_password_reset_components_index_index_component__WEBPACK_IMPORTED_MODULE_36__["PasswordResetIndexComponent"],
                _directives_has_role_directive__WEBPACK_IMPORTED_MODULE_9__["HasRoleDirective"],
                _directives_has_not_role_directive__WEBPACK_IMPORTED_MODULE_10__["HasNotRoleDirective"],
                _directives_is_authorized_directive__WEBPACK_IMPORTED_MODULE_11__["IsAuthorizedDirective"],
                _directives_is_not_authorized_directive__WEBPACK_IMPORTED_MODULE_12__["IsNotAuthorizedDirective"],
                _directives_module_access_directive__WEBPACK_IMPORTED_MODULE_13__["ModuleAccessDirective"],
                _components_select_device_select_device_component__WEBPACK_IMPORTED_MODULE_37__["SecuritySelectDeviceComponent"],
                _components_no_access_components_no_access_no_access_component__WEBPACK_IMPORTED_MODULE_38__["NoAccessComponent"],
                _components_no_access_components_index_index_component__WEBPACK_IMPORTED_MODULE_39__["NoAccessIndexComponent"]
            ]
        })
    ], SecurityModule);
    return SecurityModule;
}());



/***/ }),

/***/ "./src/app/modules/security/services/auth.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/security/services/auth.service.ts ***!
  \***********************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");






var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService_1 = AuthService;
    /**
     * Stores the given token in the localStorage.
     */
    AuthService.storeToken = function (token, storage) {
        storage.setItem(AuthService_1.LOCAL_STORAGE_TOKEN_KEY, token);
    };
    /**
     * Fetches a saved token from the localStorage.
     */
    AuthService.retrieveToken = function (storage) {
        return storage.getItem(AuthService_1.LOCAL_STORAGE_TOKEN_KEY);
    };
    /**
     * Deletes a saved token from the localStorage.
     */
    AuthService.deleteToken = function (storage) {
        storage.remove(AuthService_1.LOCAL_STORAGE_TOKEN_KEY);
    };
    /**
     * Returns the headers needed for authenticated requests.
     */
    AuthService.getAuthorizationHeader = function (storage) {
        return new Promise(function (resolve, reject) {
            AuthService_1.retrieveToken(storage).then(function (token) {
                if (token) {
                    resolve({ 'Authorization': 'Bearer ' + token });
                }
                else {
                    resolve(null);
                }
            }, function (error) {
                resolve(null);
            });
        });
    };
    /**
     * Returns true if there is a stored token in localStorage.
     *
     */
    AuthService.isAuthenticated = function (storage) {
        return new Promise(function (resolve, reject) {
            AuthService_1.retrieveToken(storage).then(function (token) {
                if (token) {
                    var decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_4__(token);
                    if (Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["isAfter"])(new Date(decoded['exp'] * 1000), new Date())) {
                        AuthService_1.setUser(token);
                        resolve(true);
                    }
                    else {
                        AuthService_1.forgetToken(storage);
                        reject(false);
                    }
                }
                else {
                    reject(false);
                }
            });
        });
    };
    AuthService.setUser = function (token) {
        var decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_4__(token);
        if (decoded['user']) {
            AuthService_1.user = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, decoded['user']), { 'roles': decoded['roles'] });
            AuthService_1.user.token = token;
            AuthService_1.onAuthenticate.next(AuthService_1.user);
        }
    };
    /**
     * Removes the stored token and redirects the user to the login screen.
     */
    AuthService.forgetToken = function (storage) {
        AuthService_1.deleteToken(storage);
        AuthService_1.onAuthenticate.next();
    };
    /**
     * Requests a jwt token from the remote.
     *
     */
    AuthService.prototype.getToken = function (credentials, storage) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observable) {
            _this.http.post('/token', credentials).subscribe(function (response) {
                AuthService_1.storeToken(response.token, storage);
                AuthService_1.setUser(response.token);
                observable.next(response);
            }, function (error) {
                observable.error(error);
            });
        });
    };
    AuthService.prototype.activate = function (token, storage) {
        return this.http.get('/auth/activate/' + token);
    };
    var AuthService_1;
    /**
     * The key used to store the jwt-token in localStorage.
     *
     * @type {string}
     */
    AuthService.LOCAL_STORAGE_TOKEN_KEY = 'abacus_aroio_token';
    AuthService.onAuthenticate = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    AuthService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AuthService = AuthService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/modules/security/services/default-page-resolver.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/security/services/default-page-resolver.service.ts ***!
  \****************************************************************************/
/*! exports provided: DefaultPageResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultPageResolverService", function() { return DefaultPageResolverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/modules/security/services/auth.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");




var DefaultPageResolverService = /** @class */ (function () {
    function DefaultPageResolverService() {
    }
    DefaultPageResolverService.prototype.resolve = function () {
        var roles = _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"].user.roles.filter(function (role) {
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].defaultPage[role]) {
                return true;
            }
            return false;
        });
        return _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].defaultPage[roles[0]];
    };
    DefaultPageResolverService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], DefaultPageResolverService);
    return DefaultPageResolverService;
}());



/***/ }),

/***/ "./src/app/modules/security/services/error.service.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/security/services/error.service.ts ***!
  \************************************************************/
/*! exports provided: ErrorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorService", function() { return ErrorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_interfaces_error_abstract__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/interfaces/error.abstract */ "./src/app/modules/core/interfaces/error.abstract.ts");





var ErrorService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ErrorService, _super);
    function ErrorService(_translateService) {
        var _this = _super.call(this) || this;
        _this._translateService = _translateService;
        _this.propertyError = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        _this.error = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        return _this;
    }
    ErrorService.prototype.displayError = function (response) {
        var errorMsg;
        if (response.error && response.error.errors && response.error.errors.errors.length > 0) {
            errorMsg = response.error.errors.errors[0];
        }
        else {
            errorMsg = this._translateService.instant('globals.forms.errors.default');
        }
    };
    ErrorService.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }
    ]; };
    ErrorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ErrorService);
    return ErrorService;
}(_core_interfaces_error_abstract__WEBPACK_IMPORTED_MODULE_4__["ErrorServiceAbstract"]));



/***/ }),

/***/ "./src/app/modules/security/services/module-access.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/security/services/module-access.service.ts ***!
  \********************************************************************/
/*! exports provided: ModuleAccessService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleAccessService", function() { return ModuleAccessService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/modules/security/services/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./storage.service */ "./src/app/modules/security/services/storage.service.ts");
/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/6/19 9:43 AM Braune Digital GmbH
 */







var ModuleAccessService = /** @class */ (function () {
    function ModuleAccessService(auth, api, storage) {
        this.auth = auth;
        this.api = api;
        this.storage = storage;
    }
    ModuleAccessService.prototype.getModules = function () {
        if (!this._modulesCache$) {
            this._modulesCache$ = this.api.get('/access').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["publishReplay"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["refCount"])());
        }
        return this._modulesCache$;
    };
    ModuleAccessService.prototype.hasAccess = function (modules) {
        // if module is set, check for access, allow if no module is present
        //if (modules) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this.getModules().subscribe(function (moduleAccess) {
                _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"].isAuthenticated(_this.storage).then(function (_) {
                    if (typeof modules === 'string') {
                        var module_1 = modules;
                        _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"].user.roles.forEach(function (role) {
                            if (moduleAccess[module_1] && moduleAccess[module_1].roles.indexOf(role) >= 0) {
                                observer.next(true);
                                observer.complete();
                            }
                        });
                    }
                    else {
                        if (!modules || modules.length === 0) {
                            observer.next(true);
                            observer.complete();
                        }
                        else {
                            modules.forEach(function (module) {
                                _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"].user.roles.forEach(function (role) {
                                    if (moduleAccess[module] && moduleAccess[module].roles.indexOf(role) >= 0) {
                                        observer.next(true);
                                        observer.complete();
                                    }
                                });
                            });
                        }
                    }
                }, function (_) {
                    observer.next(false);
                    observer.complete();
                    return;
                });
            });
        });
        //}
    };
    ModuleAccessService.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] }
    ]; };
    ModuleAccessService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], ModuleAccessService);
    return ModuleAccessService;
}());



/***/ }),

/***/ "./src/app/modules/security/services/role-access.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/security/services/role-access.service.ts ***!
  \******************************************************************/
/*! exports provided: RoleAccessService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleAccessService", function() { return RoleAccessService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/modules/security/services/auth.service.ts");
/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/6/19 9:43 AM Braune Digital GmbH
 */



var RoleAccessService = /** @class */ (function () {
    function RoleAccessService() {
    }
    RoleAccessService.prototype.hasAccess = function (roles) {
        // if module is set, check for access, allow if no module is present
        if (roles) {
            if (_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"].user.roles.filter(function (role) { return roles.includes(role); }).length > 0) {
                return true;
            }
            else {
                return false;
            }
        }
        return true;
    };
    RoleAccessService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], RoleAccessService);
    return RoleAccessService;
}());



/***/ }),

/***/ "./src/app/modules/security/services/storage.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/security/services/storage.service.ts ***!
  \**************************************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _interfaces_Storage_abstract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interfaces/Storage.abstract */ "./src/app/modules/security/interfaces/Storage.abstract.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2018 Braune Digital GmbH
 */



var StorageService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StorageService, _super);
    function StorageService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StorageService.prototype.setItem = function (key, token) {
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem(key, token);
        }
    };
    StorageService.prototype.getItem = function (key) {
        if (typeof localStorage !== 'undefined') {
            return Promise.resolve(localStorage.getItem(key));
        }
        else {
            return '';
        }
    };
    StorageService.prototype.remove = function (key) {
        if (typeof localStorage !== 'undefined') {
            localStorage.removeItem(key);
        }
    };
    StorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], StorageService);
    return StorageService;
}(_interfaces_Storage_abstract__WEBPACK_IMPORTED_MODULE_1__["StorageAbstract"]));



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
/* harmony import */ var _aroio_wi_security_security_routing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./aroio-wi/security/security.routing */ "./src/app/pages/aroio-wi/security/security.routing.ts");
/* harmony import */ var _modules_security_security_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../modules/security/security.module */ "./src/app/modules/security/security.module.ts");
/* harmony import */ var _aroio_wi_imprint_imprint_routing__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./aroio-wi/imprint/imprint.routing */ "./src/app/pages/aroio-wi/imprint/imprint.routing.ts");
/* harmony import */ var _modules_aroio_wi_modules_layout_layout_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../modules/aroio-wi/modules/layout/layout.module */ "./src/app/modules/aroio-wi/modules/layout/layout.module.ts");
















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
                _modules_security_security_module__WEBPACK_IMPORTED_MODULE_13__["SecurityModule"],
                _modules_aroio_wi_modules_layout_layout_module__WEBPACK_IMPORTED_MODULE_15__["AroioLayoutModule"],
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
                _aroio_wi_system_system_routing__WEBPACK_IMPORTED_MODULE_9__["AroioSystemPageModule"],
                _aroio_wi_security_security_routing__WEBPACK_IMPORTED_MODULE_12__["AroioSecurityPageModule"],
                _aroio_wi_imprint_imprint_routing__WEBPACK_IMPORTED_MODULE_14__["AroioImprintPageModule"]
            ],
            declarations: [],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
            ]
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
/* harmony import */ var _modules_security_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../modules/security/guards/authentication.guard */ "./src/app/modules/security/guards/authentication.guard.ts");
/* harmony import */ var _modules_security_guards_initial_setup_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../modules/security/guards/initial-setup.guard */ "./src/app/modules/security/guards/initial-setup.guard.ts");










var AudioRoutes = [
    // ---------------------------
    // Audio
    // ---------------------------
    {
        path: ':lang/audio',
        component: _root_root_page__WEBPACK_IMPORTED_MODULE_5__["AroioAudioRootPage"],
        canActivate: [_modules_security_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"], _modules_security_guards_initial_setup_guard__WEBPACK_IMPORTED_MODULE_9__["InitialSetupGuard"]],
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
/* harmony import */ var _modules_security_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../modules/security/guards/authentication.guard */ "./src/app/modules/security/guards/authentication.guard.ts");
/* harmony import */ var _modules_security_guards_initial_setup_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../modules/security/guards/initial-setup.guard */ "./src/app/modules/security/guards/initial-setup.guard.ts");











var ConvolverRoutes = [
    // ---------------------------
    // Configuration
    // ---------------------------
    {
        path: ':lang/convolver',
        component: _root_root_page__WEBPACK_IMPORTED_MODULE_5__["AroioConvolverRootPage"],
        canActivate: [_modules_security_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"], _modules_security_guards_initial_setup_guard__WEBPACK_IMPORTED_MODULE_10__["InitialSetupGuard"]],
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

/***/ "./src/app/pages/aroio-wi/imprint/abacus/abacus.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/aroio-wi/imprint/abacus/abacus.page.ts ***!
  \**************************************************************/
/*! exports provided: AroioAbacusPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioAbacusPage", function() { return AroioAbacusPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var AroioAbacusPage = /** @class */ (function () {
    function AroioAbacusPage() {
    }
    AroioAbacusPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'aroio-abacus-page',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./abacus.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/aroio-wi/imprint/abacus/abacus.page.html")).default
        })
    ], AroioAbacusPage);
    return AroioAbacusPage;
}());



/***/ }),

/***/ "./src/app/pages/aroio-wi/imprint/imprint.routing.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/aroio-wi/imprint/imprint.routing.ts ***!
  \***********************************************************/
/*! exports provided: AroioImprintRoutes, AroioImprintPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioImprintRoutes", function() { return AroioImprintRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioImprintPageModule", function() { return AroioImprintPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _modules_aroio_wi_modules_layout_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../modules/aroio-wi/modules/layout/layout.module */ "./src/app/modules/aroio-wi/modules/layout/layout.module.ts");
/* harmony import */ var _root_root_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./root/root.page */ "./src/app/pages/aroio-wi/imprint/root/root.page.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _imprint_imprint_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./imprint/imprint.page */ "./src/app/pages/aroio-wi/imprint/imprint/imprint.page.ts");
/* harmony import */ var _modules_aroio_wi_modules_imprint_imprint_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../modules/aroio-wi/modules/imprint/imprint.module */ "./src/app/modules/aroio-wi/modules/imprint/imprint.module.ts");
/* harmony import */ var _abacus_abacus_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./abacus/abacus.page */ "./src/app/pages/aroio-wi/imprint/abacus/abacus.page.ts");
/* harmony import */ var _support_support_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./support/support.page */ "./src/app/pages/aroio-wi/imprint/support/support.page.ts");










var AroioImprintRoutes = [
    // ---------------------------
    // Imprint Pages
    // ---------------------------
    {
        path: ':lang/abacus',
        component: _root_root_page__WEBPACK_IMPORTED_MODULE_4__["AroioImprintRootPage"],
        data: {
            routeName: 'abacus',
            meta: {
                title: 'pages.abacus.meta.title',
                description: 'pages.abacus.meta.description',
                'og:description': 'pages.abacus.meta.description',
                keywords: 'pages.abacus.meta.tags',
            }
        },
        children: [
            {
                path: '',
                component: _abacus_abacus_page__WEBPACK_IMPORTED_MODULE_8__["AroioAbacusPage"],
            },
        ]
    },
    {
        path: ':lang/impressum',
        component: _root_root_page__WEBPACK_IMPORTED_MODULE_4__["AroioImprintRootPage"],
        data: {
            routeName: 'impressum',
            meta: {
                title: 'pages.impressum.meta.title',
                description: 'pages.impressum.meta.description',
                'og:description': 'pages.impressum.meta.description',
                keywords: 'pages.impressum.meta.tags',
            }
        },
        children: [
            {
                path: '',
                component: _imprint_imprint_page__WEBPACK_IMPORTED_MODULE_6__["AroioImprintPage"],
            },
        ]
    },
    {
        path: ':lang/support',
        component: _root_root_page__WEBPACK_IMPORTED_MODULE_4__["AroioImprintRootPage"],
        data: {
            routeName: 'support',
            meta: {
                title: 'pages.support.meta.title',
                description: 'pages.support.meta.description',
                'og:description': 'pages.support.meta.description',
                keywords: 'pages.support.meta.tags',
            }
        },
        children: [
            {
                path: '',
                component: _support_support_page__WEBPACK_IMPORTED_MODULE_9__["AroioSupportPage"],
            },
        ]
    },
];
var AroioImprintPageModule = /** @class */ (function () {
    function AroioImprintPageModule() {
    }
    AroioImprintPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(AroioImprintRoutes),
                // AroioModules
                _modules_aroio_wi_modules_layout_layout_module__WEBPACK_IMPORTED_MODULE_3__["AroioLayoutModule"],
                _modules_aroio_wi_modules_imprint_imprint_module__WEBPACK_IMPORTED_MODULE_7__["AroioImprintModule"]
            ],
            declarations: [
                _root_root_page__WEBPACK_IMPORTED_MODULE_4__["AroioImprintRootPage"],
                _support_support_page__WEBPACK_IMPORTED_MODULE_9__["AroioSupportPage"],
                _abacus_abacus_page__WEBPACK_IMPORTED_MODULE_8__["AroioAbacusPage"],
                _imprint_imprint_page__WEBPACK_IMPORTED_MODULE_6__["AroioImprintPage"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AroioImprintPageModule);
    return AroioImprintPageModule;
}());



/***/ }),

/***/ "./src/app/pages/aroio-wi/imprint/imprint/imprint.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/aroio-wi/imprint/imprint/imprint.page.ts ***!
  \****************************************************************/
/*! exports provided: AroioImprintPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioImprintPage", function() { return AroioImprintPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var AroioImprintPage = /** @class */ (function () {
    function AroioImprintPage() {
    }
    AroioImprintPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'aroio-imprint-page',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./imprint.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/aroio-wi/imprint/imprint/imprint.page.html")).default
        })
    ], AroioImprintPage);
    return AroioImprintPage;
}());



/***/ }),

/***/ "./src/app/pages/aroio-wi/imprint/root/root.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/aroio-wi/imprint/root/root.page.ts ***!
  \**********************************************************/
/*! exports provided: AroioImprintRootPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioImprintRootPage", function() { return AroioImprintRootPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var AroioImprintRootPage = /** @class */ (function () {
    function AroioImprintRootPage() {
    }
    AroioImprintRootPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'aroio-imprint-root-page',
            template: '<router-outlet></router-outlet>'
        })
    ], AroioImprintRootPage);
    return AroioImprintRootPage;
}());



/***/ }),

/***/ "./src/app/pages/aroio-wi/imprint/support/support.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/aroio-wi/imprint/support/support.page.ts ***!
  \****************************************************************/
/*! exports provided: AroioSupportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioSupportPage", function() { return AroioSupportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var AroioSupportPage = /** @class */ (function () {
    function AroioSupportPage() {
    }
    AroioSupportPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'aroio-support-page',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./support.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/aroio-wi/imprint/support/support.page.html")).default
        })
    ], AroioSupportPage);
    return AroioSupportPage;
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
/* harmony import */ var _modules_security_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../modules/security/guards/authentication.guard */ "./src/app/modules/security/guards/authentication.guard.ts");
/* harmony import */ var _modules_security_guards_initial_setup_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../modules/security/guards/initial-setup.guard */ "./src/app/modules/security/guards/initial-setup.guard.ts");










var AroioNetworkRoutes = [
    // ---------------------------
    // Network
    // ---------------------------
    {
        path: ':lang/network',
        component: _root_root_page__WEBPACK_IMPORTED_MODULE_5__["AroioNetworkRootPage"],
        canActivate: [_modules_security_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"], _modules_security_guards_initial_setup_guard__WEBPACK_IMPORTED_MODULE_9__["InitialSetupGuard"]],
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

/***/ "./src/app/pages/aroio-wi/security/login/login.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/aroio-wi/security/login/login.page.ts ***!
  \*************************************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var LoginPage = /** @class */ (function () {
    function LoginPage() {
    }
    LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'login-page',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/aroio-wi/security/login/login.page.html")).default
        })
    ], LoginPage);
    return LoginPage;
}());



/***/ }),

/***/ "./src/app/pages/aroio-wi/security/logout/logout.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/aroio-wi/security/logout/logout.page.ts ***!
  \***************************************************************/
/*! exports provided: LogoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutPage", function() { return LogoutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var LogoutPage = /** @class */ (function () {
    function LogoutPage() {
    }
    LogoutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'logout-page',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./logout.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/aroio-wi/security/logout/logout.page.html")).default
        })
    ], LogoutPage);
    return LogoutPage;
}());



/***/ }),

/***/ "./src/app/pages/aroio-wi/security/no-access/no-access.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/aroio-wi/security/no-access/no-access.page.ts ***!
  \*********************************************************************/
/*! exports provided: NoAccessPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoAccessPage", function() { return NoAccessPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var NoAccessPage = /** @class */ (function () {
    function NoAccessPage() {
    }
    NoAccessPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'no-access-page',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./no-access.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/aroio-wi/security/no-access/no-access.page.html")).default
        })
    ], NoAccessPage);
    return NoAccessPage;
}());



/***/ }),

/***/ "./src/app/pages/aroio-wi/security/not-found/not-found.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/aroio-wi/security/not-found/not-found.page.ts ***!
  \*********************************************************************/
/*! exports provided: NotFoundPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundPage", function() { return NotFoundPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var NotFoundPage = /** @class */ (function () {
    function NotFoundPage() {
    }
    NotFoundPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'not-found-page',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./not-found.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/aroio-wi/security/not-found/not-found.page.html")).default
        })
    ], NotFoundPage);
    return NotFoundPage;
}());



/***/ }),

/***/ "./src/app/pages/aroio-wi/security/password-request/password-request.page.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/aroio-wi/security/password-request/password-request.page.ts ***!
  \***********************************************************************************/
/*! exports provided: PasswordRequestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordRequestPage", function() { return PasswordRequestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var PasswordRequestPage = /** @class */ (function () {
    function PasswordRequestPage() {
    }
    PasswordRequestPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'password-request-page',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./password-request.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/aroio-wi/security/password-request/password-request.page.html")).default
        })
    ], PasswordRequestPage);
    return PasswordRequestPage;
}());



/***/ }),

/***/ "./src/app/pages/aroio-wi/security/password-reset/password-reset.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/aroio-wi/security/password-reset/password-reset.page.ts ***!
  \*******************************************************************************/
/*! exports provided: PasswordResetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordResetPage", function() { return PasswordResetPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var PasswordResetPage = /** @class */ (function () {
    function PasswordResetPage() {
    }
    PasswordResetPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'password-reset-page',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./password-reset.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/aroio-wi/security/password-reset/password-reset.page.html")).default
        })
    ], PasswordResetPage);
    return PasswordResetPage;
}());



/***/ }),

/***/ "./src/app/pages/aroio-wi/security/root/root.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/aroio-wi/security/root/root.page.ts ***!
  \***********************************************************/
/*! exports provided: AroioSecurityRootPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioSecurityRootPage", function() { return AroioSecurityRootPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var AroioSecurityRootPage = /** @class */ (function () {
    function AroioSecurityRootPage() {
    }
    AroioSecurityRootPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'aroio-security-root-page',
            template: '<router-outlet></router-outlet>'
        })
    ], AroioSecurityRootPage);
    return AroioSecurityRootPage;
}());



/***/ }),

/***/ "./src/app/pages/aroio-wi/security/security.routing.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/aroio-wi/security/security.routing.ts ***!
  \*************************************************************/
/*! exports provided: AroioSecurityRoutes, AroioSecurityPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioSecurityRoutes", function() { return AroioSecurityRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioSecurityPageModule", function() { return AroioSecurityPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _modules_aroio_wi_modules_layout_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../modules/aroio-wi/modules/layout/layout.module */ "./src/app/modules/aroio-wi/modules/layout/layout.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _root_root_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./root/root.page */ "./src/app/pages/aroio-wi/security/root/root.page.ts");
/* harmony import */ var _select_device_select_device_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select-device/select-device.page */ "./src/app/pages/aroio-wi/security/select-device/select-device.page.ts");
/* harmony import */ var _login_login_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.page */ "./src/app/pages/aroio-wi/security/login/login.page.ts");
/* harmony import */ var _logout_logout_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./logout/logout.page */ "./src/app/pages/aroio-wi/security/logout/logout.page.ts");
/* harmony import */ var _not_found_not_found_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./not-found/not-found.page */ "./src/app/pages/aroio-wi/security/not-found/not-found.page.ts");
/* harmony import */ var _no_access_no_access_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./no-access/no-access.page */ "./src/app/pages/aroio-wi/security/no-access/no-access.page.ts");
/* harmony import */ var _password_request_password_request_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./password-request/password-request.page */ "./src/app/pages/aroio-wi/security/password-request/password-request.page.ts");
/* harmony import */ var _password_reset_password_reset_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./password-reset/password-reset.page */ "./src/app/pages/aroio-wi/security/password-reset/password-reset.page.ts");
/* harmony import */ var _modules_security_security_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../modules/security/security.module */ "./src/app/modules/security/security.module.ts");
/* harmony import */ var _modules_security_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../modules/security/guards/authentication.guard */ "./src/app/modules/security/guards/authentication.guard.ts");















var AroioSecurityRoutes = [
    // ---------------------------
    // Network
    // ---------------------------
    {
        path: ':lang/select-aroio',
        component: _root_root_page__WEBPACK_IMPORTED_MODULE_5__["AroioSecurityRootPage"],
        canActivate: [_modules_security_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]],
        data: {
            routeName: 'select-aroio',
            meta: {
                title: 'pages.select.meta.title',
                description: 'pages.select.meta.description',
                'og:description': 'pages.select.meta.description',
                keywords: 'pages.select.meta.tags',
            }
        },
        children: [
            {
                path: '',
                component: _select_device_select_device_page__WEBPACK_IMPORTED_MODULE_6__["AroioSecuritySelectDeviceIndexPage"],
            },
        ]
    },
    {
        path: ':lang/login',
        component: _root_root_page__WEBPACK_IMPORTED_MODULE_5__["AroioSecurityRootPage"],
        data: {
            routeName: 'login',
            hideSidebar: true,
            meta: {
                title: 'security.login.meta.title',
                description: 'security.login.meta.description',
                'og:description': 'security.login.meta.description',
                keywords: 'security.login.meta.tags',
            }
        },
        children: [
            {
                path: '',
                component: _login_login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"],
            }
        ]
    },
    {
        path: ':lang/logout',
        component: _logout_logout_page__WEBPACK_IMPORTED_MODULE_8__["LogoutPage"],
        data: {
            routeName: 'logout',
            hideSidebar: true,
            meta: {
                title: 'security.logout.meta.title',
                description: 'security.logout.meta.description',
                'og:description': 'security.logout.meta.description',
                keywords: 'security.logout.meta.tags',
            }
        }
    },
    {
        path: ':lang/404',
        component: _not_found_not_found_page__WEBPACK_IMPORTED_MODULE_9__["NotFoundPage"],
        data: {
            routeName: '404',
            meta: {
                title: 'security.not_found.meta.title',
                description: 'security.not_found.meta.description',
                'og:description': 'security.not_found.meta.description',
                keywords: 'security.not_found.meta.tags',
            }
        }
    },
    {
        path: ':lang/no-access',
        component: _no_access_no_access_page__WEBPACK_IMPORTED_MODULE_10__["NoAccessPage"],
        data: {
            routeName: 'no_access',
            meta: {
                title: 'security.no_access.meta.title',
                description: 'security.no_access.meta.description',
                'og:description': 'security.no_access.meta.description',
                keywords: 'security.no_access.meta.tags',
            }
        }
    },
    {
        path: ':lang/password-request',
        component: _password_request_password_request_page__WEBPACK_IMPORTED_MODULE_11__["PasswordRequestPage"],
        data: {
            routeName: 'password-request',
            hideSidebar: true,
            meta: {
                title: 'security.password_request.meta.title',
                description: 'security.password_request.meta.description',
                'og:description': 'security.password_request.meta.description',
                keywords: 'security.password_request.meta.tags',
            }
        }
    },
    {
        path: ':lang/password-reset/:hash',
        component: _password_reset_password_reset_page__WEBPACK_IMPORTED_MODULE_12__["PasswordResetPage"],
        data: {
            routeName: 'password-reset',
            hideSidebar: true,
            meta: {
                title: 'security.password_reset.meta.title',
                description: 'security.password_reset.meta.description',
                'og:description': 'security.password_reset.meta.description',
                keywords: 'security.password_reset.meta.tags',
            }
        }
    }
];
var AroioSecurityPageModule = /** @class */ (function () {
    function AroioSecurityPageModule() {
    }
    AroioSecurityPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(AroioSecurityRoutes),
                // AroioModules
                _modules_aroio_wi_modules_layout_layout_module__WEBPACK_IMPORTED_MODULE_3__["AroioLayoutModule"],
                _modules_security_security_module__WEBPACK_IMPORTED_MODULE_13__["SecurityModule"]
            ],
            declarations: [
                _root_root_page__WEBPACK_IMPORTED_MODULE_5__["AroioSecurityRootPage"],
                _login_login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"],
                _logout_logout_page__WEBPACK_IMPORTED_MODULE_8__["LogoutPage"],
                _not_found_not_found_page__WEBPACK_IMPORTED_MODULE_9__["NotFoundPage"],
                _no_access_no_access_page__WEBPACK_IMPORTED_MODULE_10__["NoAccessPage"],
                _password_request_password_request_page__WEBPACK_IMPORTED_MODULE_11__["PasswordRequestPage"],
                _password_reset_password_reset_page__WEBPACK_IMPORTED_MODULE_12__["PasswordResetPage"],
                _select_device_select_device_page__WEBPACK_IMPORTED_MODULE_6__["AroioSecuritySelectDeviceIndexPage"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AroioSecurityPageModule);
    return AroioSecurityPageModule;
}());



/***/ }),

/***/ "./src/app/pages/aroio-wi/security/select-device/select-device.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/aroio-wi/security/select-device/select-device.page.ts ***!
  \*****************************************************************************/
/*! exports provided: AroioSecuritySelectDeviceIndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroioSecuritySelectDeviceIndexPage", function() { return AroioSecuritySelectDeviceIndexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var AroioSecuritySelectDeviceIndexPage = /** @class */ (function () {
    function AroioSecuritySelectDeviceIndexPage() {
    }
    AroioSecuritySelectDeviceIndexPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'aroio-security-select-device-page',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./select-device.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/aroio-wi/security/select-device/select-device.page.html")).default
        })
    ], AroioSecuritySelectDeviceIndexPage);
    return AroioSecuritySelectDeviceIndexPage;
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
/* harmony import */ var _modules_security_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../modules/security/guards/authentication.guard */ "./src/app/modules/security/guards/authentication.guard.ts");
/* harmony import */ var _modules_security_guards_initial_setup_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../modules/security/guards/initial-setup.guard */ "./src/app/modules/security/guards/initial-setup.guard.ts");










var AroioStreamingRoutes = [
    // ---------------------------
    // Streaming
    // ---------------------------
    {
        path: ':lang/streaming',
        component: _root_root_page__WEBPACK_IMPORTED_MODULE_5__["AroioStreamingRootPage"],
        canActivate: [_modules_security_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"], _modules_security_guards_initial_setup_guard__WEBPACK_IMPORTED_MODULE_9__["InitialSetupGuard"]],
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
/* harmony import */ var _modules_security_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../modules/security/guards/authentication.guard */ "./src/app/modules/security/guards/authentication.guard.ts");
/* harmony import */ var _modules_security_guards_initial_setup_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../modules/security/guards/initial-setup.guard */ "./src/app/modules/security/guards/initial-setup.guard.ts");










var AroioSystemRoutes = [
    // ---------------------------
    // Configuration
    // ---------------------------
    {
        path: ':lang/system',
        component: _root_root_page__WEBPACK_IMPORTED_MODULE_5__["AroioSystemRootPage"],
        canActivate: [_modules_security_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"], _modules_security_guards_initial_setup_guard__WEBPACK_IMPORTED_MODULE_9__["InitialSetupGuard"]],
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
        position: 3,
        label: 'Audio',
        route: 'audio'
    },
    {
        id: 'tab-convolver',
        position: 4,
        label: 'Convolver',
        route: 'convolver'
    },
    {
        id: 'tab-network',
        position: 1,
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
        position: 0,
        label: 'System',
        route: 'system'
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

/***/ "./src/app/utils/configs/audio-configuration.ts":
/*!******************************************************!*\
  !*** ./src/app/utils/configs/audio-configuration.ts ***!
  \******************************************************/
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
        value: false,
        label: 'Stereo',
        description: 'Audiosignal wird als normales Stereo-Signal wiedergegeben.'
    },
    {
        id: 'coding_ms',
        position: 1,
        value: true,
        label: 'M/S',
        description: 'Audiosignal wird Mitte-Seite kodiert. Dies ist nur sinnvoll, in zusammenhang mit einem Abacus Cleaner auf Seiten der Hardware.'
    }
];
var AroioPlayer = [
    {
        id: 'squeezelite',
        position: 0,
        label: 'Squeezelite',
        description: 'Direkter Raspberry Pi Ausgang'
    },
    {
        id: 'gmediarender',
        position: 1,
        label: 'UPnP',
        description: 'Direkter Raspberry Pi Ausgang'
    },
    {
        id: 'shairportsync',
        position: 2,
        label: 'ShAirPlay',
        description: 'Apple Airplay Support'
    },
    {
        id: 'bluealsaaplay',
        position: 3,
        label: 'Bluetooth',
        description: 'Direkter Raspberry Pi Ausgang'
    },
    {
        id: 'input',
        position: 4,
        label: 'Line In',
        description: 'Direkter Raspberry Pi Ausgang'
    },
    {
        id: 'netjack',
        position: 5,
        label: 'NetJack',
        description: 'Direkter Raspberry Pi Ausgang'
    }
];
var AroioOutputs = [
    {
        id: 'direct_config',
        position: 0,
        value: 'vol-plug',
        label: 'Direkt',
        description: 'Direkter Raspberry Pi Ausgang',
        multiselectable: false,
        player: AroioPlayer,
        codings: AroioCodings
    },
    {
        id: 'bus_config',
        position: 1,
        value: 'jack',
        label: 'Bus',
        description: 'Bus Ausgang für komplexeres Audio Routing',
        multiselectable: true,
        player: AroioPlayer,
        codings: AroioCodings
    },
    {
        id: 'convolver_config',
        position: 2,
        value: 'jack-bf',
        label: 'Convolver',
        description: 'Convolver zur korrektur Messung',
        multiselectable: true,
        player: AroioPlayer,
        codings: AroioCodings
    },
];


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
    api: 'http://127.0.0.1:8000',
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
