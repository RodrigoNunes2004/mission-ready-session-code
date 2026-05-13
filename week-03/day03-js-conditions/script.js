console.log('connect 👍✅');

// =========== Conditions (if and else statements) ========== //
// if statement
if(1 === 1){
    console.log('the conditions was true');
}

const x = 1;
if(x > 1){
    console.log("Yes x is greater than 1s");
}
else if(x === 1){
    console.log('x is 1');
}
else{
    console.log('x is less than 1');
};

// ==== exercise one ==== //
const number = -10;
if(number < 0){
    console.log("The number is negative")
}
else if(number === 0){
    console.log("number is = 0");
}
else{
    console.log("number is positive");
}

// exercise two 
const myString = 'orange';
if(myString[0] == 'oS'){
    console.log(true);
}
else{
    console.log(false);
}

////////////////////////// Using ternary operator //////////////////////////////

const sum = 3 + 3;
let num = sum === 7 ? 7 : 6;
console.log(num);



const word = 'hippopotamus';

word.length === 12
  ? console.log("word has 12 characters")
  : word.length > 12
    ? console.log("Rewarding for the 13 or more characters 😁")
    : console.log("less than 12");

const age = prompt('Please enter your age: ');
if(age >= 65){
    console.log('Congratulations you are selected foe our special offer');
}else{
    console.log('Sorry you did not meet our age requirements');
}

age >= 65 ? 
console.log("You meet the requirements congratulations") 
: console.log("sorry you are under age");