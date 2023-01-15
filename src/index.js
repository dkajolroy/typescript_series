"use strict";
//Functions types
exports.__esModule = true;
//Not returning functions system 1
var func;
func = function () {
    console.log("OK-1");
};
func();
//Not returning functions system 2
var func2 = function () {
    console.log("OK-2");
};
func2();
// Returning functions
var rFunc = function (a, b) {
    return a + b;
};
console.log(rFunc(1, 2));
