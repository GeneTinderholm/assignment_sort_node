const insertionSort = array => {
  for (let i = 1; i < array.length; i++) {
    let move = array[i];
    for (let j = i - 1; j >= -1; j--) {
      if (array[j] > move) {
        array[j + 1] = array[j];
      } else {
        array[j + 1] = move;
        break;
      }
    }
  }
  return array;
};

module.exports = insertionSort;
