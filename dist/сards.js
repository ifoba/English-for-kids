/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/cards.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/cards.js":
/*!**********************!*\
  !*** ./src/cards.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ "./src/header.js");
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_header_js__WEBPACK_IMPORTED_MODULE_0__);
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var getCurrentCard = localStorage.getItem('currentCard');
var themes = {
  "Action A": [{
    name: "cry",
    image: "./assets/img/cry.jpg",
    translate: "плакать",
    audio: "./assets/audio/cry.mp3"
  }, {
    name: "dance",
    image: "./assets/img/dance.jpg",
    translate: "танцевать",
    audio: "./assets/audio/dance.mp3"
  }, {
    name: "dive",
    image: "./assets/img/dive.jpg",
    translate: "погружаться",
    audio: "./assets/audio/dive.mp3"
  }, {
    name: "draw",
    image: "./assets/img/draw.jpg",
    translate: "рисовать",
    audio: "./assets/audio/draw.mp3"
  }, {
    name: "fish",
    image: "./assets/img/fish.jpg",
    translate: "рыбачить",
    audio: "./assets/audio/fish.mp3"
  }, {
    name: "fly",
    image: "./assets/img/fly.jpg",
    translate: "летать",
    audio: "./assets/audio/fly.mp3"
  }, {
    name: "hug",
    image: "./assets/img/hug.jpg",
    translate: "обнимать",
    audio: "./assets/audio/hug.mp3"
  }, {
    name: "jump",
    image: "./assets/img/jump.jpg",
    translate: "прыгать",
    audio: "./assets/audio/jump.mp3"
  }],
  "Action B": [{
    name: "open",
    image: "./assets/img/open.jpg",
    translate: "открывать",
    audio: "./assets/audio/jump.mp3"
  }, {
    name: "play",
    image: "./assets/img/play.jpg",
    translate: "играть",
    audio: "./assets/audio/jump.mp3"
  }, {
    name: "point",
    image: "./assets/img/point.jpg",
    translate: "указывать",
    audio: "./assets/audio/jump.mp3"
  }, {
    name: "ride",
    image: "./assets/img/ride.jpg",
    translate: "ездить",
    audio: "./assets/audio/jump.mp3"
  }, {
    name: "run",
    image: "./assets/img/run.jpg",
    translate: "бежать",
    audio: "./assets/audio/jump.mp3"
  }, {
    name: "sing",
    image: "./assets/img/sing.jpg",
    translate: "петь",
    audio: "./assets/audio/jump.mp3"
  }, {
    name: "skip",
    image: "./assets/img/skip.jpg",
    translate: "пропускать, прыгать",
    audio: "./assets/audio/jump.mp3"
  }, {
    name: "swim",
    image: "./assets/img/swim.jpg",
    translate: "плавать",
    audio: "./assets/audio/jump.mp3"
  }],
  "Clothes": [{
    name: "skirt",
    image: "./assets/img/skirt.jpg",
    translate: "юбка",
    audio: "./assets/audio/jump.mp3"
  }, {
    name: "pants",
    image: "./assets/img/pants.jpg",
    translate: "брюки",
    audio: "./assets/audio/jump.mp3"
  }, {
    name: "blouse",
    image: "./assets/img/blouse.jpg",
    translate: "блузка",
    audio: "./assets/audio/jump.mp3"
  }, {
    name: "dress",
    image: "./assets/img/dress.jpg",
    translate: "платье",
    audio: "./assets/audio/jump.mp3"
  }, {
    name: "boot",
    image: "./assets/img/boot.jpg",
    translate: "ботинки",
    audio: "./assets/audio/jump.mp3"
  }, {
    name: "shirt",
    image: "./assets/img/shirt.jpg",
    translate: "рубашка",
    audio: "./assets/audio/jump.mp3"
  }, {
    name: "coat",
    image: "./assets/img/coat.jpg",
    translate: "пальто",
    audio: "./assets/audio/jump.mp3"
  }, {
    name: "shoe",
    image: "./assets/img/shoe.jpg",
    translate: "туфли",
    audio: "./assets/audio/jump.mp3"
  }]
};
var cardsContainer = document.getElementById('card-container');
var reloadStatus = true;

function cardsCreate(el) {
  if (localStorage.getItem('checkboxStatus') === 'bg-info') {
    return "\n      <div class =\"col mb-3\">\n          <div  class =\"card text-center text-white bg-info \">\n            <div class=\"card-flip-front\">\n              <img id = \"".concat(el.name, "\" class =\"card-img-top\" src=\"").concat(el.image, "\" alt =\"\">\n              <div class=\"card-body\">\n                <h5>").concat(el.name, "</h5>\n                <img class=\"flip-icon\" src=\"./assets/flip.png\">\n              </div>\n            </div>  \n            <div class=\"card-flip-back\">\n              <img class =\"card-img-top\" src=\"").concat(el.image, "\" alt =\"\">\n              <div class=\"card-body\">\n                <h5>").concat(el.translate, "</h5>\n              </div>\n            </div>\n          </div>\n      </div>\n      ");
  } else {
    return "\n      <div class =\"col mb-3\">\n        <div class =\"card text-center text-white\">\n          <div class=\"card-flip-front\">\n            <img id = \"".concat(el.name, "\" class =\"card-img-top\" src=\"").concat(el.image, "\" alt =\"\">\n            <div class=\"card-body hidden\">\n              <h5>").concat(el.name, "</h5>\n              <img class=\"flip-icon\" src=\"./assets/flip.png\">\n            </div>\n          </div>  \n          <div class=\"card-flip-back\">\n              <img class =\"card-img-top\" src=\"").concat(el.image, "\" alt =\"\">\n              <div class=\"card-body hidden\">\n                <h5>").concat(el.translate, "</h5>\n              </div>\n          </div> \n        </div>\n      </div>\n      ");
  }
}

cardsContainer.innerHTML = "\n    ".concat(themes[getCurrentCard].map(cardsCreate).join(''), "\n");
var btnContainer = document.createElement('div');
btnContainer.id = 'start-btn';
btnContainer.innerHTML = '<p class = "start-btn-text">Start Game</p>';
document.body.querySelector('.container').append(btnContainer);
var cards = document.querySelectorAll('.card');
var iconClickStatus = false;
var flipIcon = document.querySelectorAll('.flip-icon');
flipIcon.forEach(function (icon, index) {
  icon.addEventListener('click', function (event) {
    event.target.style.display = 'none';
    cardsFlip[index].classList.add('flip');
    iconClickStatus = true;
  });
});
document.querySelectorAll('.col.mb-3').forEach(function (el, i) {
  el.addEventListener('mouseleave', function (event) {
    if (iconClickStatus === true) {
      event.target.classList.remove('flip');
      iconClickStatus = false;
      flipIcon[i].style.display = '';
    }
  });
});

function rnd(a, b) {
  return Math.random() - 0.5;
}

var randomCardArr = themes[getCurrentCard].map(function (el) {
  return el.name;
}).sort(rnd);
var startGame = false;
var countGame = 0;
var audio = new Audio();
var err = new Audio('./assets/audio/error1.mp3');
var success = new Audio('./assets/audio/success.mp3');
document.querySelector('.start-btn-text').addEventListener('click', function (event) {
  if (startGame === false) {
    event.target.innerHTML = '<img class = "repeat-btn" src ="./assets/repeat.png">';
    console.log(randomCardArr[countGame]);
    audio = new Audio("./assets/audio/".concat(randomCardArr[countGame], ".mp3"));
    audio.play();
    startGame = true;
  } else {
    console.log(randomCardArr[countGame - 1]);
    audio.play();
  }
});

var _iterator = _createForOfIteratorHelper(document.querySelectorAll('.card')),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var el = _step.value;
    el.addEventListener('click', function (event) {
      if (event.target.id === randomCardArr[countGame] && countGame !== 7 && startGame) {
        countGame += 1;
        audio = new Audio("./assets/audio/".concat(randomCardArr[countGame], ".mp3"));
        audio.play();
        event.target.parentNode.parentNode.classList.add('inactive');
        console.log('yes');
        document.querySelector('.star-container').innerHTML += "<img src= \"./assets/star_yes.png\">";
      } else if (event.target.id !== randomCardArr[countGame] && countGame !== 8 && startGame) {
        console.log('nope');
        err.play();
        document.querySelector('.star-container').innerHTML += "<img src= \"./assets/no.png\">";
      } else if (event.target.id === randomCardArr[countGame] && countGame === 7 && startGame) {
        success.play();
        document.querySelector('.star-container').innerHTML += "<img src= \"./assets/star_yes.png\">";
        event.target.parentNode.parentNode.classList.add('inactive');
      } else if (!startGame && event.target.classList.contains('card-img-top')) {
        audio = new Audio("./assets/audio/".concat(event.target.id, ".mp3"));
        audio.play();
      }
    });
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var header = document.querySelector('.header');
var navList = document.querySelector('.nav-list');
var cardsFlip = document.querySelectorAll('.col.mb-3');
var switchBtn = document.querySelector('.switch-btn');
var startBtn = document.getElementById('start-btn');
localStorage.getItem('checkboxStatus') === '' ? switchBtn.checked = true : switchBtn.checked = false;

if (switchBtn.checked) {
  cards.forEach(function (el) {
    return el.classList.remove('bg-info');
  });
  if (getCurrentCard !== 'Home') startBtn.style.display = 'flex';
  startGame = false;
}

function controlMenu(event) {
  if (event.target.id === 'burger' || event.target.classList.contains('icon-bar')) {
    navList.classList.add('active');
  } else {
    navList.classList.remove('active');
  }
}

;

function controlGameStatus(event) {
  if (event.target.checked) {
    if (getCurrentCard === "Home") {
      cards.forEach(function (el) {
        return el.classList.remove('bg-info');
      });
      localStorage.setItem('checkboxStatus', '');
    } else {
      startGame = false;
      countGame = 0;
      randomCardArr = themes[getCurrentCard].map(function (el) {
        return el.name;
      }).sort(rnd);
      cards.forEach(function (el) {
        document.querySelector('.start-btn-text').innerHTML = 'Start Game';
        startBtn.style.display = 'flex';
        el.classList.remove('bg-info');
        el.querySelectorAll('.card-body').forEach(function (item) {
          return item.classList.add('hidden');
        });
      });
      localStorage.setItem('checkboxStatus', '');
    }
  } else if (!event.target.checked) {
    if (getCurrentCard === "Home") {
      cards.forEach(function (el) {
        return el.classList.add('bg-info');
      });
      localStorage.setItem('checkboxStatus', 'bg-info');
    } else {
      startBtn.style.display = 'none';
      cards.forEach(function (el) {
        el.classList.add('bg-info');
        el.querySelectorAll('.card-body').forEach(function (item) {
          return item.classList.remove('hidden');
        });
        cards.forEach(function (el) {
          return el.classList.remove('inactive');
        });
        startGame = false;
      });
      localStorage.setItem('checkboxStatus', 'bg-info');
    }
  }
}

var _iterator = _createForOfIteratorHelper(navList.querySelectorAll('a')),
    _step;

try {
  var _loop = function _loop() {
    var href = _step.value;
    href.addEventListener('click', function (event) {
      localStorage.setItem('currentCard', href.innerText);
      reloadStatus = false;
    });
  };

  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    _loop();
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

;
header.addEventListener('click', controlMenu);
switchBtn.addEventListener('click', controlGameStatus);
window.addEventListener('beforeunload', function (event) {
  if (reloadStatus === true) {
    localStorage.setItem('checkboxStatus', 'bg-info');
  }
});

/***/ })

/******/ });
//# sourceMappingURL=сards.js.map