function createArray(length) {
  return new Array(length)
    .fill()
    .map((value, index) => value = index)
    .sort(() => Math.random() - 0.5)
}

function sort(array, order) {
  let len = array.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (order ? array[j] > array[j + 1] : array[j] < array[j + 1]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
  }
  return array;
}

function showArray(array) {
  return array.map((value) => {
    console.log(value)
  })
}

const length = 10000;

const ascending = true;
const descending = false;

const array = createArray(length);
showArray(array);

const sortedArray = sort(array, ascending);
showArray(sortedArray);
