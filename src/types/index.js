//  check value is not number return true
//  if value is number return false
function add(n1, n2) {
    var n1_t = typeof n1;
    var n2_t = typeof n2;
    if (n1_t === 'number' && n2_t === 'number') {
        var result = n1 + n2;
        return result;
    }
    else {
        var string = [];
        if (n1_t !== 'number') {
            var s = n1_t === 'string' ? "\"" + n1 + "\" (" + n1_t + ")" : n1 + " (" + n1_t + ")";
            string.push(s);
        }
        if (n2_t !== 'number') {
            if (string.length > 0)
                string.push('and');
            var s = n2_t === 'string' ? "\"" + n2 + "\" (" + n2_t + ")" : n2 + " (" + n2_t + ")";
            string.push(s);
        }
        var message = "expect: number, but received: " + string.join(' ');
        return message;
    }
}
exports.add = add;
