/* eslint-disable no-trailing-spaces */
/* eslint-disable spaced-comment */
/* eslint-disable no-array-constructor */
/* eslint-disable no-new-object */
/* eslint-disable no-unused-vars */
const o = new Object()
const a = new Array()
const d = new Date()
const f1 = function () {
  console.log('the cow jumped over the moon')
}
console.log('date = ' + d)
f1()
// --------------------------//
const o1 = Object.create({ x: 100, y: 200 })
console.log('x= ' + o1.x + 'y=' + o1.y)
console.log(o1)

const o2 = Object.create(null)
const o3 = Object.create(Object.prototype)
// const o3 = new object();
// const o3 = {};
console.log(o2)
console.log(o3)

/*-------------------*/

// what is oops:
// It is a Functional programming
// solution to a problem is through is collabration of two or more objects.
// with help of one solution we solved one solution means a structural approach and many solution  we used to solve one solution is object oriented approach.
// Behavior and property useability(datas)
// the problem or bug on isuue one in object should not perform other object
// lack of code usebility and independent
// [principle 1 oops]*cogosive(friendly)and decoupling(independent)
//                   *objects are friendly in nature (cogosive)and the same time independent(decoupling)
// ooad(object oriented analytics and designs) first we need to analyse the object in oops
// Inheritence:
// Inheritence-establish a (is a )solution to parent
//             we can inherit but not change,if parent creted a house and given the house to his child but chilld not make changes in entire life without changing anything on 
//             that house which parent gived (inheritence)
// Inheritence:example1-is a( relation between parents and child)
//              Bike is a vehicle,ship is a vehicle
//             example2-has a(relation of friends)
//              car has an engine,car has sets
//------------------Java script-------------//
// In java script object is a parent and in that object(parent) there is a prototype(child).
// after that we create  ex-O1(child) but it inherit from object(parent).
// that all inherited object(oarent) (O1) is inherited in the protoype(child)(O1).
//In this object(parent) it inherited date that is in prototype of child and that date itself d1 also inherited grand parent protype.
//Date.prototype inherits properties from object,protype
//so a Date object created by new Date() inherits properties from both
//data.protype
//-------------------------------------------//
// #object.create():
// object.create()is a static function,
// Not a method invoked on individueak object.
//to use it, simply pass line desired prototype objec:
