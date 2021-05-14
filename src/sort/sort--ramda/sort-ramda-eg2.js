const R = require('ramda')
const {sort, pipe, map} = R

const myArray = ['10', '60', '20', '30', '100', '200']
const toNum = (a) => parseInt(a, 10)
const comparator = (a, b) =>  a - b

const myArray_sorted = pipe(
  map(toNum),
  sort(comparator)
)(myArray)

console.log('myArray_sorted: ', myArray_sorted)  // [ 10, 20, 30, 60, 100, 200 ]
