/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/accordion.js":
/*!*********************************!*\
  !*** ./js/modules/accordion.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initAccordion)
/* harmony export */ });
function initAccordion() {
  var accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
  var activeClass = "ativo";
  if (accordionList.length) {
    var activeAccordion = function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    };
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);
    accordionList.forEach(function (item) {
      item.addEventListener("click", activeAccordion);
    });
  }
}

/***/ }),

/***/ "./js/modules/dropdown-menu.js":
/*!*************************************!*\
  !*** ./js/modules/dropdown-menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initDropdownMenu)
/* harmony export */ });
/* harmony import */ var _outside_click_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outside-click.js */ "./js/modules/outside-click.js");

function initDropdownMenu() {
  var dropdownMenus = document.querySelectorAll("[data-dropdown]");
  dropdownMenus.forEach(function (menu) {
    ["touchstart", "click"].forEach(function (userEvent) {
      menu.addEventListener(userEvent, handleClick);
    });
  });
  function handleClick(event) {
    var _this = this;
    event.preventDefault();
    this.classList.add("active");
    (0,_outside_click_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ["touchstart", "click"], function () {
      _this.classList.remove("active");
    });
  }
}

/***/ }),

/***/ "./js/modules/funcionamento.js":
/*!*************************************!*\
  !*** ./js/modules/funcionamento.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initFuncionamento)
/* harmony export */ });
function initFuncionamento() {
  var funcionamento = document.querySelector("[data-semana]");
  var diasSemana = funcionamento.dataset.semana.split(",").map(Number);
  var horarioSemana = funcionamento.dataset.horario.split(",").map(Number);
  var agora = new Date();
  var diaAgora = agora.getDay();
  var horarioAgora = agora.getHours();
  var semanaAberto = diasSemana.indexOf(diaAgora) !== -1;
  var horarioAberto = horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];
  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add("aberto");
  }
}

/*
const now = new Date();
// console.log(now);
// console.log(now.getDay()); // week day from 0 to 6
// console.log(now.getMonth()); // month from 0 to 11
// console.log(now.getTime()); // time in milliseconds

const future = new Date("Dec 24 2025 23:59");
// console.log(future);

const daysNow = transform2days(now.getTime());
const daysFuture = transform2days(future.getTime());
console.log(
  "Faltam quantos dias para o natal ? ",
  Math.floor(daysFuture - daysNow)
);

function transform2days(time) {
  return time / (24 * 60 * 60 * 1000);
}
*/

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initMenuMobile)
/* harmony export */ });
/* harmony import */ var _outside_click_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outside-click.js */ "./js/modules/outside-click.js");

function initMenuMobile() {
  var menuMobileButton = document.querySelector('[data-menu="button"]');
  var menuMobileList = document.querySelector('[data-menu="list"]');
  var events = ["click", "touchstart"];
  if (menuMobileButton && menuMobileList) {
    var openMenuMobile = function openMenuMobile(event) {
      event.preventDefault();
      menuMobileList.classList.add("active");
      menuMobileButton.classList.add("active");
      (0,_outside_click_js__WEBPACK_IMPORTED_MODULE_0__["default"])(menuMobileList, events, function () {
        menuMobileList.classList.remove("active");
        menuMobileButton.classList.remove("active");
      });
    };
    events.forEach(function (userEvent) {
      menuMobileButton.addEventListener(userEvent, openMenuMobile);
    });
  }
}

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initModal)
/* harmony export */ });
function initModal() {
  var openModal = document.querySelector('[data-modal="abrir"]');
  var closeModal = document.querySelector('[data-modal="fechar"]');
  var containerModal = document.querySelector('[data-modal="container"]');
  if (openModal && closeModal && containerModal) {
    var toggleModal = function toggleModal(event) {
      event.preventDefault();
      containerModal.classList.toggle("ativo");
    };
    var clickOutsideModal = function clickOutsideModal(event) {
      if (event.target === this) {
        toggleModal(event);
      }
    };
    openModal.addEventListener("click", toggleModal);
    closeModal.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", clickOutsideModal);
  }
}

/***/ }),

/***/ "./js/modules/numbers.js":
/*!*******************************!*\
  !*** ./js/modules/numbers.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initAnimeNumbers)
/* harmony export */ });
function initAnimeNumbers() {
  function animeNumbers() {
    var numbers = document.querySelectorAll("[data-numero]");
    if (!numbers) {
      return;
    }
    numbers.forEach(function (number) {
      var total = +number.innerText;
      var start = 0;
      var increment = Math.floor(total / 100);
      var timer = setInterval(function () {
        start += increment;
        number.innerText = start;
        if (start > total) {
          clearInterval(timer);
          number.innerText = total;
        }
      }, 25 * Math.random());
    });
  }
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      observer.disconnect();
      animeNumbers();
    }
  }
  var observerTarget = document.querySelector(".numeros");
  var observer = new MutationObserver(handleMutation);
  observer.observe(observerTarget, {
    attributes: true
  });
}

/***/ }),

/***/ "./js/modules/outside-click.js":
/*!*************************************!*\
  !*** ./js/modules/outside-click.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ outsideClick)
/* harmony export */ });
function outsideClick(element, events, callback) {
  var html = document.documentElement;
  var outside = "data-outside";
  if (!element.hasAttribute(outside)) {
    events.forEach(function (userEvent) {
      setTimeout(function () {
        html.addEventListener(userEvent, handleOutsideClick);
      });
    });
    element.setAttribute(outside, "");
  }
  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach(function (userEvent) {
        html.removeEventListener(userEvent, handleOutsideClick);
      });
      callback();
    }
  }
}

/***/ }),

/***/ "./js/modules/scroll-animation.js":
/*!****************************************!*\
  !*** ./js/modules/scroll-animation.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initAnimeScroll)
/* harmony export */ });
function initAnimeScroll() {
  var sections = document.querySelectorAll('[data-anime="scroll"]');
  if (sections.length) {
    var animeScroll = function animeScroll() {
      sections.forEach(function (section) {
        var sectionTop = section.getBoundingClientRect().top;
        var positionToAnimate = sectionTop - window.innerHeight * 0.6;
        var isSectionVisible = positionToAnimate < 0;
        if (isSectionVisible) {
          section.classList.add("ativo");
        } else if (section.classList.contains("ativo")) {
          section.classList.remove("ativo");
        }
        // console.log("sectionTop:", sectionTop);
      });
    };
    animeScroll();
    window.addEventListener("scroll", animeScroll);
  }
}

/***/ }),

/***/ "./js/modules/scroll-smooth.js":
/*!*************************************!*\
  !*** ./js/modules/scroll-smooth.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initSmoothScroll)
/* harmony export */ });
function initSmoothScroll() {
  var linksInternos = document.querySelectorAll('[data-menu="suave"] [href^="#"]');
  function scrollToSection(event) {
    event.preventDefault();
    var href = event.currentTarget.getAttribute("href");
    var section = document.querySelector(href);
    // window.scrollTo(x, y);
    // or
    // window.scrollTo({
    //   top: section.offsetTop,
    //   behavior: "smooth",
    // });
    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
  linksInternos.forEach(function (link) {
    link.addEventListener("click", scrollToSection);
  });
}

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initTabNav)
/* harmony export */ });
function initTabNav() {
  var tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  var tabContent = document.querySelectorAll('[data-tab="content"] section');
  if (tabMenu.length && tabContent.length) {
    var activeTab = function activeTab(index) {
      tabContent.forEach(function (section) {
        section.classList.remove("ativo");
      });
      var direction = tabContent[index].dataset.anime;
      tabContent[index].classList.add("ativo", direction);
    };
    tabContent[0].classList.add("ativo");
    tabMenu.forEach(function (item, index) {
      item.addEventListener("click", function () {
        activeTab(index);
      });
    });
  }
}

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initTooltip)
/* harmony export */ });
function initTooltip() {
  var tooltips = document.querySelectorAll("[data-tooltip]");
  tooltips.forEach(function (item) {
    item.addEventListener("mouseover", onMouseOver);
  });
  function onMouseOver(event) {
    var tooltipBox = createTooltipBox(this);
    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener("mousemove", onMouseMove);
    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener("mouseleave", onMouseLeave);
  }
  var onMouseLeave = {
    tooltipBox: "",
    element: "",
    handleEvent: function handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener("mouseleave", onMouseLeave);
      this.element.removeEventListener("mousemove", onMouseMove);
    }
  };
  var onMouseMove = {
    tooltipBox: "",
    handleEvent: function handleEvent(event) {
      this.tooltipBox.style.top = event.pageY + 20 + "px";
      this.tooltipBox.style.left = event.pageX + 20 + "px";
    }
  };
  function createTooltipBox(element) {
    var tooltipBox = document.createElement("div");
    var text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }
}

/***/ })

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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_scroll_smooth_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-smooth.js */ "./js/modules/scroll-smooth.js");
/* harmony import */ var _modules_scroll_animation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll-animation.js */ "./js/modules/scroll-animation.js");
/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/accordion.js */ "./js/modules/accordion.js");
/* harmony import */ var _modules_tabs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabs.js */ "./js/modules/tabs.js");
/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ "./js/modules/modal.js");
/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltip.js */ "./js/modules/tooltip.js");
/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ "./js/modules/dropdown-menu.js");
/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menu-mobile.js */ "./js/modules/menu-mobile.js");
/* harmony import */ var _modules_numbers_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/numbers.js */ "./js/modules/numbers.js");
/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/funcionamento.js */ "./js/modules/funcionamento.js");










(0,_modules_scroll_smooth_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_modules_scroll_animation_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_modules_tabs_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
(0,_modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__["default"])();
(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__["default"])();
(0,_modules_numbers_js__WEBPACK_IMPORTED_MODULE_8__["default"])();
(0,_modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_9__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=main.js.map