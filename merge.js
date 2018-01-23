const merge = array => {
  if (array.length === 1) {
    return array;
  }
  let midpoint = Math.ceil(array.length / 2);
  let left = merge(array.slice(0, midpoint));
  let right = merge(array.slice(midpoint));

  let result = [];

  while (left.length && right.length) {
    left[0] > right[0]
      ? (result[result.length] = right.shift())
      : (result[result.length] = left.shift());
  }

  result = result.concat(left).concat(right);
  return result;
};

module.exports = merge;
