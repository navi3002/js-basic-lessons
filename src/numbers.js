/* eslint-disable prefer-const */
/* ## Number

Only **one** type of number in JavaScript whether it has decimel point
or not.
*/

/* const age = 100
const money = 1000.50
console.log(typeof age) // number
console.log(typeof money) // number

// `typeof` is used to number javascript whether it has decimal point or not.

console.log('10' - '3')

// `typeof

console.log(Math.round(2.2))
console.log(Math.floor(5.6))
console.log(Math.ceil(8.4))
console.log(Math.random())

const sweets = 20
const kids = 3
const eachkidGets = Math.floor(sweets / kids)
console.log(eachkidGets)
const leftsweets = sweets % kids
console.log(leftsweets)

let x = 2 ** 3
console.log(x)
x = Math.pow(2, 3)
console.log(x)

console.log(0.1 + 0.2)
// let costOfProduct = 100.95;
let costOfProduct = 10095 // in paise

/* so, when working with money,
don't store them as (rupees.paise) or (dollors.cents) .store all
of the money in (paise/cents)
ass you won't have to deal with fraction only whole nos.
when need to display to user, just convert them back.

//---------------------------- */
/* console.log(typeof Infinity)
console.log(typeof -Infinity)
let result = 10 / 'hello'
console.log(typeof NaN) */

// -------------------------------------
// check the datatypes of a value
let x = 100
let result = Number.isInteger(x)
console.log(`Is x a number: ${result}`)
let y = 'abcd'
result = Number.isInteger(x)
console.log(`Is y a number: ${result}`)
result = (typeof y === 'string')
console.log(`Is y a string: ${result}`)
let flag = true
result = (typeof flag === 'boolean')
console.log(`Is flag a boolean: ${result}`)
let nos = [1, 2, 3, 4, 5]
result = (typeof nos === 'object')
console.log(`Is nos an object: ${result}`)
