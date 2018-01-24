const bubble = require('./bubble');
const insertionSort = require('./insertion');
const merge = require('./merge');
const mySort = require('./impSort');
const quicksort = require('./quickSort');

function insertionSortTwo(array) {
  for (var i = 0; i < array.length; i++) {
    var temp = array[i];
    var j = i - 1;
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
  return array;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle); 
  const right = arr.slice(middle); 
  return mergeTheirs(mergeSort(left), mergeSort(right));
}
function mergeTheirs(left, right) {
  let result = [];
  let indexLeft = 0;
  let indexRight = 0;
  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(right[indexRight]);
      indexRight++;
    }
  }
  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

const benchmark = array => {
  let holder = array.slice(0);
  let begin = new Date();
  bubble(holder);
  let bubbleTime = new Date() - begin;
  holder = array.slice(0);
  begin = new Date();
  insertionSort(holder);
  let insertionSortTime = new Date() - begin;
  holder = array.slice(0);
  begin = new Date();
  merge(holder);
  let mergeTime = new Date() - begin;
  return [bubbleTime, insertionSortTime, mergeTime];
};

const benchmarkCompare = (array, ours, theirs) => {
  let holder = array.slice(0);
  let begin = new Date();
  ours(holder);
  let ourTime = new Date() - begin;
  holder = array.slice(0);
  begin = new Date();
  theirs(holder);
  let theirTime = new Date() - begin;
  return [ourTime, theirTime];
};

// console.log(benchmarkCompare(Array(...Array(100).keys()).reverse()));
// console.log(benchmarkCompare(Array(...Array(1000).keys()).reverse()));
// console.log(benchmarkCompare(Array(...Array(10000).keys()).reverse()));
const randomArray = n => {
  let result = []
  for (let i = 0; i < n; i++){
    result.push( Math.floor(Math.random() * 50000) );
  }
  return result
};
let testArray = randomArray(100000);
console.log('things');
console.log(benchmarkCompare(testArray, mySort, quicksort));
