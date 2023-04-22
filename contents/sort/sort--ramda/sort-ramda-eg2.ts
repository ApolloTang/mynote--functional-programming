/*
nodemon -w '.' --exec ts-node sort-ramda-eg2.ts
*/

import {sort, pipe, map} from 'ramda'


const myArray = ['10', '60', '20', '30', '100', '200']
type myArrayType = typeof myArray

const toNum = (a:string) => parseInt(a, 10)
const comparator = (a:number, b:number) =>  a - b

const myArray_sorted = pipe<myArrayType, number[], number[]>(
  map(toNum),
  sort(comparator)
)(myArray)

console.log('myArray_sorted: ', myArray_sorted)  // [ 10, 20, 30, 60, 100, 200 ]


