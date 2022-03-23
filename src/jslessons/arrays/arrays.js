const names =['john', 'sam', 'peter'];
console.log(names[0]);
console.log(names.length);
console.log(names[names.length - 1]);

// methods of array
names.push('suresh');
console.log('After push: ' + names);
//push will add the items at the end
const names2 = [...names,'Raj'];
console.log('names2: ' + names2);
// ... is called as the spread operator
// it represents the entire items in the array
names.unshift('poppy');
console.log('unshift:' + names);
// it adds data to the beginning
// so the index no of the res of the values will change now
const names3 = ['raj', ...names];
console.log(names3);
// this will add data at the beginning
// Now next method slice()
// Create a new array
const bikes = ['bianchi','miele','panasonic','miyata','RE'];
const b1 = [...bikes.slice(0,2)];
console.log(b1);
// slice takes 2 parameters 
// from , to
// it has copied 2 values from index 0 and assigned to b1

const b2 = [...bikes.slice(3)];
console.log(b2);

const newBikes = [
    ...bikes.slice(0,3),
    'benotto', 
    ...bikes.slice(3)

];
console.log('newBikes: ' + newBikes);
/* then in index 0 and 1 values from bikes is copied using the slice
  (0,2) method. The first 2 values 'benotto' is pushed,
  then from the third index again values from bikes is copied using slice(2) - the values from the 2 index of bikes are copied. */
  const newBikes2 = [
    ...newBikes.slice(0,3),
    ...newBikes.slice(4)

];
console.log('newBikes2: ' + newBikes2);
const indexOfsam = names.findIndex(name => name === 'sam');
console.log('IndexOfSAM:'+ indexOfsam)

// write a function to delete a name from the array?

function deleteName(nametodelete, names){
    const indexOfname = names.findIndex(n => n === nametodelete);
    console.log('indexOf name to delete:'+ indexOfname);
    const newArray=[
        ...names.slice(0,indexOfname),
        ...names.slice(indexOfname+1)
    ];
    return newArray;    
};
const deleteNames = deleteName('john', names);
console.log('After Delete:' + deleteNames);
console.log('Before Delete:' + names)

const numbers =[1,2,3,4,5,6,7,8,9];
// any time you want to use a mutation method or not mutate the original array
// we need to take a copy of the array
/*console.log(numbers);
// numbers.splice(3,2);
// (method) Array <numbers>.splice(start:number,deletecount?:number):
// Mutation Method - modifies/deletes the value in the source array
// from the 3rd index delete the next 2 values
// the values in njumbers are modified/deleted
// console.log(numbers);
const pizzaSlice = numbers.slice(2,4);// start and end index
// (method) Array<number>.slice(start?: number, end?:number):
// Immutable method - does not changes the source array.
console.log('pizzaSlices:'+ pizzaSlice);
console.log('Original Numbers:'+numbers);
// both are numbers.splice(3,2);
// same syntax but diffrent behaviours */
numbers.reverse();
console.log(numbers);
const numbersReversed=[...numbers].reverse();
console.log(numbersReversed)

//iterating array
// iteration/numeration meaning:looping through the connection
const toppings = ['Mushrooms ', 'Tomatoes', 'Eggs', 'Chili', 'Lettuce', 'Avocado', 'Chiles', 'Bacon', 'Pickles', 'Onions', 'Cheese'];

    const students = [
      {
        id: '11ce',
        first_name: 'Dall',
        last_name: 'Puckring',
      },
      {
        id: '2958',
        first_name: 'Margarete',
        last_name: 'Brandi',
      },
      {
        id: '565a',
        first_name: 'Bendicty',
        last_name: 'Woodage',
      },
      {
        id: '3a16',
        first_name: 'Micki',
        last_name: 'Mattes',
      },
      {
        id: 'f396',
        first_name: 'Flory',
        last_name: 'Gladeche',
      },
      {
        id: 'de5f',
        first_name: 'Jamill',
        last_name: 'Emilien',
      },
      {
        id: '54cb',
        first_name: 'Brett',
        last_name: 'Aizikowitz',
      },
      {
        id: '9135',
        first_name: 'Lorry',
        last_name: 'Smallman',
      },
      {
        id: '978f',
        first_name: 'Gilly',
        last_name: 'Flott',
      },
    ];

    const people = [
      {
        birthday: 'April 22, 1993',
        names: {
          first: 'Keith',
          last: 'Buckley'
        }
      },
      {
        birthday: 'January 3, 1975',
        names: {
          first: 'Larry',
          last: 'Heep'
        }
      },
      {
        birthday: 'February 12, 1944',
        names: {
          first: 'Linda',
          last: 'Bermeer'
        }
      }
    ];


    const buns = ['egg', 'wonder', 'brioche'];

    const meats = {
      beyond: 10,
      beef: 5,
      pork: 7
    };

    const prices = {
      hotDog: 453,
      burger: 765,
      sausage: 634,
      corn: 234,
    };

    const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];

    const feedback = [
      { comment: 'Love the burgs', rating: 4 },
      { comment: 'Horrible Service', rating: 2 },
      { comment: 'Smoothies are great, liked the burger too', rating: 5 },
      { comment: 'Ambiance needs work', rating: 3 },
      { comment: 'I DONT LIKE BURGERS', rating: 1 },
    ];

    const faces = ['😃', '🤠', '🤡', '🤑', '😵', '🌞', '🐶', '😺'];

    const inventory = [
      { type: 'shirt', price: 4000 },
      { type: 'pants', price: 4532 },
      { type: 'socks', price: 234 },
      { type: 'shirt', price: 2343 },
      { type: 'pants', price: 2343 },
      { type: 'socks', price: 542 },
      { type: 'pants', price: 123 },
    ];

    // Looping Methods:-
    function logItemsInArray(item, index, originalArray){
        const nextitem = originalArray[index + 1];
        const previtem = originalArray[index - 1];
        // log the item
        console.log(item);
        // log the orev item if there is one
        previtem ? console.log(previtem): null;
        // log the next item if there is one
        nextitem?console.log(nextitem): null;
// if its the last the item in the array, say good bye
index === originalArray.length-1
    ? console.log('Goodbye')
    : console.log('Getting the next item');
    // index === originalArray.length && console.log('Goodbye);
    console.log('------😃------')
    }
    console.log(toppings);
    toppings.forEach(logItemsInArray);
    // using one index

    function displayToppings(item)
    {
        console.log('currentItem: ' + item);
    }
    toppings.forEach(displayToppings);
    //map
    toppings.map(displayToppings);
    function addArms(face){
    return `hi...${faces}...`;
    }
    const toys = faces.map(addArms);
    console.log(toys);
   function increaseValue(item){
       return item *  1.25;

   }
const newTotalNumber=orderTotal.map(increaseValue);
console.log(number)
function tallyNumbers(prvNumber,currentNumber) {
    console.log(` The total so far is &{prvNumber}`);
    console.log(`The current Number is ${currentNumber}`);
    console.log('--------');
    // return the current tally PLUS the amount of this order
    return prvNumber + currentNumber;
    
}
const allOrders = orderTotals.reduce(tallyNumbers,0);
console.log('allOrders:'+ allOrders)

