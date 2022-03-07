
/* eslint-disable no-const-assign */
function getChild (parent) {
  if (parent == null) throw TypeError()
  return Object.create(parent)
}

const o = { x: "don't change" }
// console.log(o.x)

let p = Object.create(o)
// console.log(p)

p = getChild(o)
// console.log(p)

Object.prototype = 0
// console.log(Object)

// The prootype properties of built in are read only
// Object.prototype unchanged
// If the parent is null it wont be inherited //
// To validate Create a Function in child on parent in that object//

const o5 = {}
console.log(o5)
o5.x = 100
console.log(o5)
p = getChild(o5)
console.log(p)
p.y = 200
const q = getChild(p)
q.z = 300
// console.log(q)
console.log('q.x + q.y + q.z' + (q.x + q.y + q.z))
console.log('p.x + p.y ' + (p.x + p.y))
console.log('o.5.x + o5.y' + (o5.x + o5.y))
console.log(' o5.x  ' + o5.x)
// parent cannot access new properties

const book = {
  'main title': 'JavaScript',
  subtitle: ' The Definitive Guide',
  for: 'all audiences',
  author: {
    firstname: 'Donald',
    surname: 'Duck'
  }

}
let len
/* book = null
if (book) {
  if (book.subtitle) {
    len = book.subtitle.length
    console.log(len)
  } else { console.log('book.subtitle underfined') }
} else { console.log('book is null') }
*/
// eslint-disable-next-line prefer-const
len = book && book.subtitle && book.subtitle.length
if (len) console.log(len)
console.log(len)
console.log(book.author)
delete book.author
console.log(book.author)

console.log(book['main title'])
delete book['main title']
console.log(book['main title'])

const o6 = { x: 100 }
console.log(o6.x)
delete o6.x
console.log(o6.x)
delete o6.tostring
console.log(o6.toString)

delete Object.prototype
// eslint-disable-next-line no-unused-vars
const a = 1
delete this.a
// eslint-disable-next-line no-unused-vars
function f1 () {}
delete this.f1()
