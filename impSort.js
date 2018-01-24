const sort = array => {
  let sectionSize = 2;
  while (sectionSize < array.length) {
    for (let i = 0; i < Math.ceil(array.length / sectionSize); i++) {
      mergeInPlace(
        array,
        i * sectionSize,
        sectionSize,
      );
    }
    sectionSize = sectionSize << 1;
  }
  mergeInPlace(array, 0, sectionSize);
  return array;
};
const largestPowerOfTwo = n => {
  if (n < 2) {
    return 'invalid';
  }
  let count = 0;
  while (n > 1) {
    n = n >> 1;
    count++;
  }
  return Math.pow(2, count);
};

const mergeInPlace = (array, start, sectionSize) => {
  let aPoint = start;
  let bPoint = start + sectionSize / 2;
  if(bPoint >= array.length){
    bPoint = array.length - 1;
  }
  while (aPoint !== bPoint && bPoint < start + sectionSize && bPoint < array.length) {
    if (array[aPoint] >= array[bPoint]) {
      insert(array, aPoint, bPoint);
      bPoint++;
      aPoint++;
    } else {
      aPoint++;
    }
  }
};

const insert = (array, aPoint, bPoint) => {
  const temp = array[bPoint];
  while (bPoint > aPoint) {
    array[bPoint] = array[bPoint - 1];
    bPoint--;
  }
  array[aPoint] = temp;
};

const randomArray = n => {
  let result = []
  for (let i = 0; i < n; i++){
    result.push( Math.floor(Math.random() * 100) );
  }
  return result
};

// let testArray = randomArray(100);
// console.log(testArray);
// console.log(sort(testArray));
// sort(testArray);
module.exports = sort;
