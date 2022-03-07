// oops //
/* eslint-disable space-infix-ops */
/* eslint-disable no-undef */
/* eslint-disable quote-props */
/* eslint-disable key-spacing */
/* eslint-disable no-unused-vars */
/* object
javascript functuonak databasd is the object.
An object is an unorders collection of properties,
each of the which has a name and value.
Property names are strings, hence objects mapnstring to
values */

/* const person = {
  first: 'Apzal',
  last: 'Amrin',
  age: 100
}
console.log(person.first)
console.log(person.last)
console.log(person.age)
person.first = 'Tom'
person.last = 'Jerry'
console.log(person.first)
console.log(person.last)
person.last = null
console.log(person.last) */

const empty = {}
const point = { x: 10, y: 50 }
const point2 = { x: point.x, y: point.y + 1 }
const book = {
  'main title': 'java script', // property includes space
  'sub-title' : 'Guide to java script for beginners',
  'for' : 'students', // reserved key word
  author: {
    first: 'Apzal',
    last: 'Amrin'
  }
}
console.log(book['main title'])
console.log(book['sub-title'])
console.log(book.for)
console.log(book.author.first)
console.log(book.author.last)
console.log(book.author.sub-title)
console.log(book.for)
