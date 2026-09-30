// ex 1 - variables and data types (mundia)

let fullgitName = "Collins Mundia";
const age = 25;
var isEnrolled = true;

console.log(fullName, typeof fullName);
console.log(age, typeof age);
console.log(isEnrolled, typeof isEnrolled);

// ex 2 - Operators & Type Coercion 
const numericString = "5";
const numberValue = 10;

const additionResult = numericString + numberValue;
const multiplicationResult = numericString * numberValue;

console.log(additionResult, typeof additionResult);
console.log(multiplicationResult, typeof multiplicationResult);

// ex 3 - Conditional Statements(mundia)
const moviegoerAge = 17;
let ticketTier;

if (moviegoerAge < 5) {
  ticketTier = "Free admission";
} else if (moviegoerAge < 18) {
  ticketTier = "Child discount";
} else if (moviegoerAge < 65) {
  ticketTier = "Full price";
} else {
  ticketTier = "Senior discount";
}

console.log(ticketTier);

// ex 4 - Conditional Operators (muhammad)
const accountBalance = -250;

const accountStatus = accountBalance < 0
  ? "Account Overdrawn"
  : "Account Active";

console.log(accountStatus);

// ex 5 - Comprehensive Challenge (mundia & muha)
let score = 85;
let grade;

switch(true) {
    case score >= 90:
        grade="A";
        break;

    case score >= 80:
        grade="B";
        break;
        
    case score >= 70:
        grade="C";
        break;

    case score >= 60:
        grade="D";
        break;

    default:
        grade = "D";
}

console.log("Your grade is: " + grade);

// Array Traversal
const numbers = [3, 7, 4, 9, -2, 5, 8];
for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];

    if (num < 0) {
        break;
    }
    if (num % 2 === 0 ) {
        continue;
    }
    console.log(num)
}

// While vs Do-While
let input = 10;

while (input < 7) {
    console.log("while: running, input =", input);
    input++;
} 
console.log("While loop finished. Input =", input);

let newInput = 10;
do {
    console.log("do...while: running, input =", input);
    input++;
} while (input < 5) {
    console;log("do...while loop finished, input = ", input);
}


// Arrow function anatomy
const multiply = (a, b) => a * b;

