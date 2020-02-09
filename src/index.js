export default function(a, b) {
  let aLen = a.length - 1;
  let bLen = b.length - 1;

  let carry = 0;
  let ret = "";

  while (aLen >= 0 || bLen >= 0) {
    let i = 0;
    let j = 0;
    let sum;

    if (aLen >= 0) {
      i = a[aLen] - "0";
      aLen--;
    }
    if (bLen >= 0) {
      j = b[bLen] - "0";
      bLen--;
    }

    sum = i + j + carry;
    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    } else {
      carry = 0;
    }

    ret = sum + ret;
  }

  if (carry) {
    return carry + ret;
  }
  return ret;
}
