//  check value is not number return true
//  if value is number return false

function add(n1: number, n2: number) {
  const n1_t = typeof n1;
  const n2_t = typeof n2;
  if (n1_t === 'number' && n2_t === 'number') {
    const result = n1 + n2;
    return result;
  } else {
    let string: string[] = [];
    if (n1_t !== 'number') {
      let s = n1_t === 'string' ? `"${n1}" (${n1_t})` : `${n1} (${n1_t})`
      string.push(s);
    }
    if (n2_t !== 'number') {
      if (string.length > 0) string.push('and');
      let s = n2_t === 'string' ? `"${n2}" (${n2_t})` : `${n2} (${n2_t})`
      string.push(s);
    }
    let message = `expect: number, but received: ${string.join(' ')}`;
    return message;
  }
}

exports.add = add;
