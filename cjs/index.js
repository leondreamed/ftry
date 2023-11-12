"use strict";
exports.__esModule = true;
exports.fresult = exports.fres = exports.ferror = exports.ferr = void 0;
function ftryFunction(fn) {
    try {
        return [null, fn()];
    }
    catch (error) {
        return [error];
    }
}
function ftryPromise(promise) {
    var successFn = function (value) {
        return [null, value];
    };
    var errorFn = function (err) {
        return [err];
    };
    return promise.then(successFn, errorFn);
}
function ftry(functionOrPromise) {
    if (typeof functionOrPromise === "function") {
        return ftryFunction(functionOrPromise);
    }
    if (Promise.resolve(functionOrPromise) === functionOrPromise) {
        return ftryPromise(functionOrPromise);
    }
    throw new Error("Argument must be a function or Promise");
}
exports["default"] = ftry;
function ferror(err) {
    return [err];
}
exports.ferror = ferror;
exports.ferr = ferror;
function fresult(result) {
    return [null, result];
}
exports.fresult = fresult;
exports.fres = fresult;
