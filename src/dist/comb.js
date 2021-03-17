/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./lib/commonjs/comb.js":
/*!******************************!*\
  !*** ./lib/commonjs/comb.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const {\r\n    isEven,\r\n    stringAND\r\n} = __webpack_require__(/*! ./utils.js */ \"./lib/commonjs/utils.js\");\r\n\r\n/*---------------------------------------------------------------\r\n    Heap algorithm - recursive - permutations without repetition   \r\n-----------------------------------------------------------------*/\r\n\r\n/**\r\n * Return an array of array of single permutation.\r\n * @param {anyArray} array Array of elements subject of permutation\r\n */\r\nconst heapPerm = (anyArray)=>{\r\n    let pointer = anyArray.length;\r\n    return heapPermMain(pointer, anyArray);\r\n}\r\n\r\n/*\r\n    Utility function, not exported. Should only be called inside of a module (heapPerm method).\r\n*/\r\nconst heapPermMain = (pointer, anyArray, newArray = [])=>{\r\n    if(pointer==1){\r\n       // console.log(anyArray)\r\n        newArray.push([...anyArray]);\r\n    }\r\n    else{\r\n        heapPermMain(pointer - 1, anyArray, newArray);\r\n\r\n        for(let i=0; i<pointer-1; i++){\r\n            if(isEven(pointer)){\r\n                //swap(a[0]) i a[k-1]\r\n                let temp = anyArray[pointer-1];\r\n                anyArray[pointer-1] = anyArray[0];\r\n                anyArray[0] = temp;\r\n            }\r\n            else{\r\n                //swap(a[i]) i a[k-1]\r\n                let temp = anyArray[pointer-1];\r\n                anyArray[pointer-1] = anyArray[i];\r\n                anyArray[i] = temp;\r\n            }\r\n            heapPermMain(pointer - 1, anyArray, newArray);\r\n        }\r\n    }\r\n    return newArray;\r\n}\r\n\r\n\r\n/*-------------------------------------------------------------------\r\n    Heap algorithm - iterative - permutations without repetition    \r\n---------------------------------------------------------------------*/\r\n\r\n/**\r\n * @param {array} anyArray Array of elements subject to permutations \r\n */\r\nconst heapPermIterative = (anyArray)=>{\r\n    let pointer = anyArray.length;\r\n\r\n    let result = [];\r\n\r\n    let c = [];\r\n    for(let i=0; i<pointer; i++) c[i]=0;\r\n\r\n    //console.log(anyArray);\r\n    result.push([...anyArray]);\r\n\r\n    let i=0;\r\n    while(i < pointer){\r\n        if(c[i] < i){\r\n            if(isEven(i)){\r\n                let temp = anyArray[i];\r\n                anyArray[i] = anyArray[0];\r\n                anyArray[0] = temp;\r\n            }\r\n            else{\r\n                let temp = anyArray[i];\r\n                anyArray[i] = anyArray[c[i]];\r\n                anyArray[c[i]] = temp;\r\n            }\r\n            //console.log(anyArray);\r\n            result.push([...anyArray]);\r\n\r\n            c[i] += 1;\r\n            i = 0;\r\n        }\r\n        else{\r\n            c[i] = 0;\r\n            i += 1;\r\n        }\r\n    }\r\n    return result;\r\n}\r\n\r\n\r\n/*\r\n    Binary combination algorithms\r\n*/\r\n\r\n/**\r\n * \r\n * @param {array} anyArray Array of elements subject to combination\r\n * @param {'f' or 'b'} direction Combine forward or backward (default is 'f')\r\n * Returns an array of arrays that contains all possible combinations.\r\n */\r\nconst combAll = (anyArray, direction='f')=>{\r\n    let resultArray = [];\r\n    //anyArray.length-1, num_of_combinations = 2^(anyArray.length-1)\r\n    let arrLength = anyArray.length;\r\n    let num_of_combinations = Math.pow(2, arrLength) - 1;   \r\n\r\n    let tempArray = [];\r\n    if(direction==='f') tempArray = [...anyArray]\r\n    else tempArray=[...anyArray.reverse()];\r\n\r\n    for(let i = 1; i < num_of_combinations+1; i++){\r\n        //console.log(i, Number(i).toString(2).split(\"\"));\r\n        let compareString = Number(i).toString(2).split(\"\").reverse();          \r\n        let result = [];\r\n        for(let j = 0; j < arrLength; j++){\r\n            stringAND(tempArray[j], compareString[j])!=0 ? result.push(tempArray[j])  : null;\r\n        }\r\n        resultArray.push(result.reverse());\r\n    }\r\n\r\n    return resultArray;\r\n}\r\n\r\n/**\r\n * \r\n * @param {array} anyArray Array of elements subject to combinations\r\n * @param {'f' or 'b'} direction Combine forward or backward (default is 'f')\r\n * @param {boolean} strict  If strict is true, combinbinations are of exact lenght of length param, if false, combinations are less length than length param\r\n * @param {number} length Length of results.\r\n * Returns an array of arrays that contains all possible combinations whose length is definded by strict param less or exact length of given length\r\n */\r\nconst combAllStrict = (anyArray, direction='f', length, strict)=>{\r\n    let resultArray = [];\r\n    //anyArray.length-1, num_of_combinations = 2^(anyArray.length-1)\r\n    let arrLength = anyArray.length;\r\n    let num_of_combinations = Math.pow(2, arrLength) - 1;   \r\n\r\n    let tempArray = [];\r\n    if(direction==='f') tempArray = [...anyArray]\r\n    else tempArray=[...anyArray.reverse()];\r\n\r\n    for(let i = 1; i < num_of_combinations+1; i++){\r\n        //console.log(i, Number(i).toString(2).split(\"\"));\r\n        let compareString = Number(i).toString(2).split(\"\").reverse();          \r\n        let result = [];\r\n        for(let j = 0; j < arrLength; j++){\r\n            stringAND(tempArray[j], compareString[j])!=0 ? result.push(tempArray[j])  : null;\r\n        }\r\n        if(strict){\r\n            if(result.length===length) resultArray.push(result.reverse());\r\n        }\r\n        else{\r\n            if(result.length<=length) resultArray.push(result.reverse());\r\n        } \r\n    }\r\n\r\n    return resultArray;\r\n}\r\n\r\nmodule.exports = {\r\n    'heapPerm' : heapPerm,\r\n    'heapPermIterative' : heapPermIterative,\r\n    'combAll' : combAll,\r\n    'combAllStrict' : combAllStrict\r\n}\n\n//# sourceURL=webpack://js-combperm/./lib/commonjs/comb.js?");

/***/ }),

/***/ "./lib/commonjs/utils.js":
/*!*******************************!*\
  !*** ./lib/commonjs/utils.js ***!
  \*******************************/
/***/ ((module) => {

eval("const stringAND = (par1, par2)=>{\r\n    //par1 is a character i.e. 'a', 'e', 'A', 'F'\r\n    //par 2 is a character only '0' or '1'\r\n    if(par2 === '1') return par1\r\n    else return '0';\r\n}\r\n\r\nconst isEven = (element)=>{\r\n    if((element/2 - Math.ceil(element/2))!=0) return false;\r\n    else return true;\r\n}\r\n\r\nmodule.exports = {\r\n    'stringAND': stringAND,\r\n    'isEven': isEven\r\n}\n\n//# sourceURL=webpack://js-combperm/./lib/commonjs/utils.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./lib/commonjs/comb.js");
/******/ 	
/******/ })()
;