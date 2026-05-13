// Loop through object

// Print a simple message to the console
console.log("Hello World!");

// Create an object containing student information
let studentData = {
    firstNme: "Rodrigo",   // Student's first name (note: typo in "firstNme")
    lastName: " Nunes",    // Student's last name
    age: 47,               // Student's age
};

// Loop through all keys inside the studentData object
// "data" will represent each key name (e.g., "firstNme", "lastName", "age")
for (student in studentData) {
    // Access the value of each key using bracket notation
    console.log(studentData[student]);
};

// A function expression using arrow syntax
// It receives two numbers and returns the difference between them
const ageCalculator = (currentYear, birthdayYear) => {
    return currentYear - birthdayYear;
}

// Call the ageCalculator function with specific values
const calculateAge = ageCalculator(2026, 1979);

// Print the result using a template literal
console.log(`My age is ${calculateAge}`);
