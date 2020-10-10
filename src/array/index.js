var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var throws = require('assert').throws;
/* eslint-disable implicit-arrow-linebreak */
var checkArray = function (array, val) {
    var greater = 0;
    var less = 0;
    var equal = 0;
    if (Array.isArray(array)) {
        array.forEach(function (v) {
            if (v < val)
                less += 1;
            if (v > val)
                greater += 1;
            if (v === val)
                equal += 1;
        });
        return {
            greater: greater,
            less: less,
            equal: equal
        };
    }
    throw new Error('param 1 should be an array');
};
var isAlbertHere = function (array) {
    var result = false;
    if (Array.isArray(array)) {
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var v = array_1[_i];
            if (v === 'albert')
                result = true;
        }
    }
    return result;
};
var findAllBoys = function (array) {
    var boys = [];
    if (array.length > 0) {
        for (var _i = 0, array_2 = array; _i < array_2.length; _i++) {
            var p = array_2[_i];
            if (p.gender === 'M')
                boys.push(p.name);
        }
        return boys;
    }
    else {
        throw new Error('empty array given');
    }
};
var copyArray = function (array) {
    var result = [];
    for (var _i = 0, array_3 = array; _i < array_3.length; _i++) {
        var item = array_3[_i];
        if (typeof item === 'object') {
            var newObj = __assign({}, item);
            result.push(newObj);
        }
        else {
            result.push(item);
        }
    }
    return result;
};
var countBoysAndGirls = function (array) {
    var obj = {
        boys: 0,
        girls: 0
    };
    if (array.length > 0) {
        for (var _i = 0, array_4 = array; _i < array_4.length; _i++) {
            var item = array_4[_i];
            if (item.gender === 'M')
                obj.boys += 1;
            if (item.gender === 'F')
                obj.girls += 1;
        }
    }
    return obj;
};
var editItemInArray = function (array, i, obj) {
    var index = i - 1;
    var keys = Object.keys(obj);
    if (array.length > 0) {
        var updatedArray = array.map(function (o, n) {
            if (n === index) {
                var updatedObj_1 = __assign({}, o);
                keys.forEach(function (x) {
                    updatedObj_1[x] = obj[x];
                });
                return updatedObj_1;
            }
            else {
                return o;
            }
        });
        return updatedArray;
    }
    else {
        throw new Error('empty array given');
    }
};
exports.checkArray = checkArray;
exports.isAlbertHere = isAlbertHere;
exports.findAllBoys = findAllBoys;
exports.copyArray = copyArray;
exports.countBoysAndGirls = countBoysAndGirls;
exports.editItemInArray = editItemInArray;
