"use strict";
/* eslint-disable no-confusing-arrow,implicit-arrow-linebreak */
var isEven = function (num) {
    var num_t = typeof num;
    if (num_t === 'number') {
        if (num % 2 === 0)
            return true;
        else
            return false;
    }
    else {
        var m = num_t === 'undefined' ? num_t : num + " (" + num_t + ")";
        return "expect number but received " + m;
    }
};
exports.isEven = isEven;
