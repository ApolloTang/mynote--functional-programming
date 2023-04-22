/*
nodemon -w '.' --exec ts-node sort-ramda-eg1.ts
*/

import {sort} from 'ramda';


const myArray = [10, 60, 20, 30, 100, 200]

const comparator = (a:number, b:number) => a - b
const myArray_sorted = sort(comparator)(myArray)

console.log('myArray_sorted: ', myArray_sorted)  // [ 10, 20, 30, 60, 100, 200 ]



