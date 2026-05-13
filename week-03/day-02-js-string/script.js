console.log("Connected ✅");
// Primitive data types
// Numbers

const year = 2026; // Whole number (Integer)

const py = 3.141;// Floating point number (one with decimals)

console.log(year, typeof year);
console.log(py, typeof py);

// Strings
const firstName = "Bonie";
let greeting = "Good Morning";

console.log(greeting, firstName);

// Booleans
let isRaining = false;
console.log(isRaining, typeof isRaining);


// Undefined
let x;
console.log(x, typeof x);

// Null
let iAmAEmptValue = null;
console.log(iAmAEmptValue, typeof iAmAEmptValue);


const sheSayd = "Shall we go?";
const remember = "Remember to say";

console.log(`${sheSayd} she said. ${remember}\n "please" 'and' "thank you."`);

const book = 5;
const bookQuantity = 10;

const multiply = (book, bookQuantity) => {
    return book * bookQuantity;
}
 const totalCost = multiply (5, 10);
 console.log(`The total cost will be $ ${totalCost}`);