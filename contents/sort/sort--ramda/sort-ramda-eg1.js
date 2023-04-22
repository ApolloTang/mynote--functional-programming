const sort = require('ramda').sort;

const myArray = [10, 60, 20, 30, 100, 200]

const comparator = (a, b) => a - b
const myArray_sorted = sort(comparator)(myArray)

console.log('myArray_sorted: ', myArray_sorted)  // [ 10, 20, 30, 60, 100, 200 ]



