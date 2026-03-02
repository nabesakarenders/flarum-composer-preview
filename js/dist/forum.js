/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./src/forum/index.js"
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/IndexPage */ "flarum/forum/components/IndexPage");
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/TextEditor */ "flarum/common/components/TextEditor");
/* harmony import */ var flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_TextEditorButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/TextEditorButton */ "flarum/common/components/TextEditorButton");
/* harmony import */ var flarum_common_components_TextEditorButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_TextEditorButton__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_ComposerState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/ComposerState */ "flarum/common/components/ComposerState");
/* harmony import */ var flarum_common_components_ComposerState__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_ComposerState__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_components_ComposerPostPreview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/components/ComposerPostPreview */ "flarum/common/components/ComposerPostPreview");
/* harmony import */ var flarum_common_components_ComposerPostPreview__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_ComposerPostPreview__WEBPACK_IMPORTED_MODULE_6__);







flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().initializers.add('nabesaka/flarum-composer-preview', function () {
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().composer).constructor.prototype, 'load', function () {
    if (typeof this.showPreview === 'undefined') {
      this.showPreview = false;
    }
  });
  (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().composer).constructor.prototype.togglePreview = function () {
    this.showPreview = !this.showPreview;
    m.redraw();
  };

  // Add the actual preview to the main App
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'view', function (vdom) {
    if (!flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().composer.isVisible() || !(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().composer).fields.title || !(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().composer).showPreview) return;
    vdom.children.push(m("div", {
      "class": "ComposerPreview-overlay",
      style: '--composer-height: ' + (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().composer).height + 'px;'
    }, m("div", {
      "class": "ComposerPreview-container"
    }, m("div", {
      "class": "ComposerPreview-header"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('nabesaka-composer-preview.forum.preview_heading')), m("h3", {
      "class": "ComposerPreview-title"
    }, (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().composer).fields.title ? flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().composer.fields.title() : flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('nabesaka-composer-preview.forum.preview_default_title')), m("div", {
      "class": "ComposerPreview-content"
    }, m((flarum_common_components_ComposerPostPreview__WEBPACK_IMPORTED_MODULE_6___default()), {
      composer: (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().composer),
      "class": "ComposerPreview-preview"
    })))));
  });

  // Preview toggle must be added to the TextEditor's context but check that the composer is open
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_3___default().prototype), 'toolbarItems', function (items) {
    var _this = this;
    // Only add the preview button if we're in a composer and it has a title (means it is a new discussion not an edit or reply)
    if (!this.attrs.composer || !this.attrs.composer.fields.title) return;
    console.log(this.attrs.composer);
    items.add('preview-toggle', m((flarum_common_components_TextEditorButton__WEBPACK_IMPORTED_MODULE_4___default()), {
      onclick: function onclick() {
        return _this.attrs.composer.togglePreview();
      },
      icon: this.attrs.composer.showPreview ? 'fas fa-eye-slash' : 'fas fa-eye',
      tooltipText: flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('nabesaka-composer-preview.forum.toggle_preview_tooltip')
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('nabesaka-composer-preview.forum.toggle_preview_tooltip')));
  });

  // Try to add a ResizeObserver to the composer to adjust the height limit of the preview to prevent overlap
  var composer = document.querySelector('.Composer');
  var preview = document.querySelector('.ComposerPreview-overlay');
  if (composer && preview) {
    var ro = new ResizeObserver(function (entries) {
      var height = entries[0].contentRect.height;
      preview.style.setProperty('--composer-height', height + "px");
    });
    ro.observe(composer);
  }

  // // Have the Composer keep track of the preview state, default it to false on init
  // extend(ComposerState.prototype, 'oninit', function () {
  //   this.showPreview = false;
  // });

  // // Have the Composer deal with toggling the preview state too
  // ComposerState.prototype.togglePreview = function () {
  //   this.showPreview = !this.showPreview;
  //   m.redraw();
  // };

  // Modify the view to add the preview pane in a split layout
  // override(TextEditor.prototype, 'view', function (original) {
  //   // Only show preview if enabled and we're in a composer
  //   if (!this.showPreview || !this.attrs.composer) return original();

  //   return (
  //     <div class="ComposerEditor-split">
  //       <div class="ComposerEditor-editor">
  //         {original()}
  //       </div>
  //       <div class="ComposerEditor-preview">
  //         <ComposerPostPreview composer={app.composer} />
  //       </div>
  //     </div>
  //   );
  // });
});

/***/ },

/***/ "flarum/common/components/ComposerPostPreview"
/*!******************************************************************************!*\
  !*** external "flarum.core.compat['common/components/ComposerPostPreview']" ***!
  \******************************************************************************/
(module) {

"use strict";
module.exports = flarum.core.compat['common/components/ComposerPostPreview'];

/***/ },

/***/ "flarum/common/components/ComposerState"
/*!************************************************************************!*\
  !*** external "flarum.core.compat['common/components/ComposerState']" ***!
  \************************************************************************/
(module) {

"use strict";
module.exports = flarum.core.compat['common/components/ComposerState'];

/***/ },

/***/ "flarum/common/components/TextEditor"
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['common/components/TextEditor']" ***!
  \*********************************************************************/
(module) {

"use strict";
module.exports = flarum.core.compat['common/components/TextEditor'];

/***/ },

/***/ "flarum/common/components/TextEditorButton"
/*!***************************************************************************!*\
  !*** external "flarum.core.compat['common/components/TextEditorButton']" ***!
  \***************************************************************************/
(module) {

"use strict";
module.exports = flarum.core.compat['common/components/TextEditorButton'];

/***/ },

/***/ "flarum/common/extend"
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
(module) {

"use strict";
module.exports = flarum.core.compat['common/extend'];

/***/ },

/***/ "flarum/forum/app"
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
(module) {

"use strict";
module.exports = flarum.core.compat['forum/app'];

/***/ },

/***/ "flarum/forum/components/IndexPage"
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['forum/components/IndexPage']" ***!
  \*******************************************************************/
(module) {

"use strict";
module.exports = flarum.core.compat['forum/components/IndexPage'];

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=forum.js.map