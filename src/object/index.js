var getAppraisal = function (grade) {
    var GRADE = {
        A: [90, 100],
        B: [75, 89],
        C: [60, 74],
        D: [40, 59],
        E: [0, 39]
    };
    if (typeof grade === 'number') {
        for (var _i = 0, _a = Object.entries(GRADE); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (grade >= value[0] && grade <= value[1]) {
                return key;
            }
            if (grade < 0) {
                return 'why do you give a minus mark?';
            }
        }
    }
    if (grade === 'nana') {
        return 'A';
    }
    ;
    if (grade === true) {
        return 'expect a number > 0';
    }
    ;
    return 0;
};
exports.getAppraisal = getAppraisal;
