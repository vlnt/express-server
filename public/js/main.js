/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/ContextMenu.js":
/*!*******************************!*\
  !*** ./src/js/ContextMenu.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContextMenu": () => (/* binding */ ContextMenu)
/* harmony export */ });
const template = document.createElement('template')
template.innerHTML = `
   <style> 
           li {
            list-style: none;
             padding: .5rem;
            }
    </style>
   <div class="context-menu">
   <ul>
   <li id='author'> <slot name="author" /></li>
   <li id='docs'> <slot name="docs" /></li>
   </ul>
   </div>
   `

class ContextMenu extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(template.content.cloneNode((true)))
        this.isShown = false
    }

    connectedCallback() {
        const menu = document.querySelector('context-menu')

        window.addEventListener('contextmenu', (e) => {
            e.preventDefault()
            if(!this.isShown){
                this.style.display = "block"
                this.style.top = `${e.layerY}px`
                this.style.left = `${e.layerX}px`
                this.isShown = true
            }else{
                this.style.display = "none"
                this.isShown = false
            }
            
        })       
    }
};





/***/ }),

/***/ "./src/js/classes.js":
/*!***************************!*\
  !*** ./src/js/classes.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Corner": () => (/* binding */ Corner),
/* harmony export */   "Frame": () => (/* binding */ Frame)
/* harmony export */ });
class Frame {
    /**
     * 
     * @param {number} x  X coordinate of upper left corner
     * @param {number} y  Y coordinate of upper left corner
     * @param {number} size  The width of the frame
     * @param {number} t     The thickness of the frame(constant = 24 c.i.)
     */
    constructor(x, y, size, t = 24) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.t = t;
      this.flipped = false;
      this.isCorner = false;
    }
  
    draw(ctx) {
  
      //ctx.fillStyle = "black";
      ctx.lineWidth = 3;
      ctx.strokeRect(this.x, this.y, this.size, this.t);
      //ctx.fill();
  
      ctx.font = "24px";
      !this.flipped
        ? ctx.fillText(
          (this.size / 2).toString(),
          this.x + this.size / 2,
          this.y + (this.t * 2) / 3
        )
        : ctx.fillText(
          (this.t / 2).toString(),
          this.x + this.size / 4,
          this.y + this.t / 2
        );
    }
  }
  

class Corner extends Frame{
    constructor(x, y, flipped, size = 60, t = 24){
        super()
        this.x = x
        this.y = y
        this.t = t
        this.flipped = flipped
        this.size = size
        this.isCorner = true
    }

    draw(ctx){
      let path
        if(!this.flipped) {
          path = `M ${this.x} ${this.y} H ${this.x + 60} V ${this.y + 24} H ${this.x + 24} V ${this.y + 60} H ${this.x} V ${this.y}`
        } else{
          path = `M ${this.x} ${this.y} H ${this.x - 60} V ${this.y + 24} H ${this.x - 24} V ${this.y + 60} H ${this.x} V ${this.y}`
        }
        ctx.lineWidth = 3
        ctx.stroke(new Path2D(path))
    }

  }

/***/ }),

/***/ "./src/js/draw.js":
/*!************************!*\
  !*** ./src/js/draw.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drawPath": () => (/* binding */ drawPath)
/* harmony export */ });
/**
 * Drawing path in 2d context
 * 
 * @see {@link https://tinywritingchest.netlify.app Blog }
 * @function drawPath
 *
 * 
 * @param {CanvasRenderingContext2D} ctx
 * @param {string}                   path
 *  
*/
function drawPath(ctx, path){
  const p = new Path2D(path)
  ctx.lineWidth = 3
  ctx.stroke(p)
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/doka.js ***!
  \************************/
/**
 * @todo jsdoc -c conf.doc.js --readme ./README.md src/js
 * @copyright 2023
 * @author vlnt
 * @requires ./draw.js ./classes.js
 */
const { drawPath } = __webpack_require__(/*! ./draw.js */ "./src/js/draw.js")
const { Frame, Corner } = __webpack_require__(/*! ./classes.js */ "./src/js/classes.js")
const {ContextMenu} = __webpack_require__(/*! ./ContextMenu.js */ "./src/js/ContextMenu.js")

window.customElements.define('context-menu', ContextMenu)

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.fillStyle = "rgb(150, 150, 200)";
let f = null;
let farr = [];

const dokaSet = [30, 45, 60, 90, 135];
const baumaSet = [30, 45, 60, 75, 90, 120, 240] 
const p1 = "M 200 400 V 200 H 674 V 540 H 724 V 200 H 1198 V 400"
const p2 = "M 200 150 H 1198"

const fSet = baumaSet
let scaleRatio = 1;

window.addEventListener("resize", (e) => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
})

drawPath(ctx, p1)
drawPath(ctx, p2)
//****************Functions for creating buttons********************* */

function createFlipBtn() {
  const button = document.createElement("button");
  const textNode = document.createTextNode("flip");
  button.appendChild(textNode);
  document.querySelector("body").append(button);
  button.classList.add('traybtn')
  button.style.position = "relative";
  button.addEventListener("click", function (e) {
    if(f.isCorner){
      f.flipped = true
      f.draw(ctx)
    } else{
      flip(f);
    }
   
  });
}

function createSaveBtn() {
  const button = document.createElement("button");
  const textNode = document.createTextNode("save");
  button.appendChild(textNode);
  button.classList.add('traybtn')
  document.querySelector("body").append(button);
  button.style.position = "relative";
  button.addEventListener("click", function (e) {
    save(farr);
  });
}

function createCornerBtn() {
  const button = document.createElement("button");
  const textNode = document.createTextNode("corner");
  button.appendChild(textNode);
  button.classList.add('traybtn')
  document.querySelector("body").append(button);
  button.style.position = "relative";
  button.addEventListener("click", function (e) {
    f = new Corner(e.layerX, e.layerY)
    farr.push(f)
    f.draw(ctx)
    console.log(f)
  });
}

function createRestoreBtn() {
  const button = document.createElement("button");
  const textNode = document.createTextNode("restore");
  button.appendChild(textNode);
  button.classList.add('traybtn')
  document.querySelector("body").append(button);
  button.style.position = "relative";
  button.addEventListener("click", function (e) {
    let arr = restore();
    arr.map((item) => {
      let frame
      if(item.isCorner){
          frame = new Corner(item.x, item.y, item.flipped)
      } else{
        frame = new Frame(item.x, item.y, item.size, item.t);
      } 
      farr.push(frame);
    });

    console.log(farr);
    f = farr[0];
    drawScene();
  });
}

function createButtons() {
  for (let b of fSet) {
    const button = document.createElement("button");
    const textNode = document.createTextNode(b.toString());
    button.appendChild(textNode);
    document.querySelector("body").append(button);
    button.classList.add('traybtn')
    button.style.position = "relative";
    button.addEventListener("click", function (e) {
      f = new Frame(e.clientX, e.clientY, b * 2);
      farr.push(f);
      f.draw(ctx);
    });
  }
}

//******************End of buttons functions**************************************** */
/**
 * Creating buttons
 */
createButtons();
createFlipBtn();
createCornerBtn();
createSaveBtn();
createRestoreBtn();

/**
 * @event canvas click event 
 */

//******************Canvas event listeners******************************* */

canvas.addEventListener("click", function (e) {
  e.preventDefault()
  for (let item of farr) {
    let path = new Path2D();
    path.rect(item.x, item.y, (item.x + item.size), (item.y + item.t))
    if (ctx.isPointInPath(path, e.layerX, e.layerY)) {
      f = item;
    }
  }
});

canvas.addEventListener("mousemove", function (e) {
  //console.log(e)
  if (f !== null) {
    if (e.buttons === 1) {
      if(f.isCorner){
        ctx.clearRect(f.x, f.y, f.size, f.t + 36)
      } else{
        ctx.clearRect(f.x, f.y, f.size, f.t);
      }
      
      f.x = e.layerX;
      f.y = e.layerY;
    }
      drawLines(f.x, f.y);
      drawScene()
  }
});

//************************End of event listeners********************************** */

/**
 * Draws lines indicating active frame
 * 
 * @param {number} x 
 * @param {number} y 
 */

function drawLines(x, y) {
  ctx.strokeStyle = "white";
  ctx.lineWidth = 0.2;
  ctx.beginPath();
  ctx.moveTo(x, 0);
  ctx.lineTo(x, window.innerHeight);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0, y);
  ctx.lineTo(window.innerWidth, y);
  ctx.stroke();
}

/**
 * 
 * @param {Frame} frame 
 */
function flip(frame) {
  const size = frame.size;
  frame.size = frame.t;
  frame.t = size;
  frame.flipped ? (frame.flipped = false) : (frame.flipped = true);
}

function drawScene() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  drawPath(ctx, p1)
  drawPath(ctx, p2)
  for (let i of farr) {
    i.draw(ctx);
    
  }
  drawLines(f.x, f.y);
  requestAnimationFrame(drawScene)
}

function save(arr) {
  arr.map((item, index) => {
    localStorage.setItem(index, JSON.stringify(item));
  });
}

function restore() {
  let arr = [];
  for (let i = 0; i < localStorage.length; i++) {
    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    console.log(arr);
  }
  localStorage.clear();
  //console.log("restored: ", arr);
  return arr;
}

})();

/******/ })()
;
//# sourceMappingURL=main.js.map