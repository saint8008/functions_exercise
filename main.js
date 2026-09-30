// ex 1 - variables and data types

let fullName = "Collins Mundia";
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

// ex 3 - Conditional Statements
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

// ex 4 - Conditional Operators
const accountBalance = -250;

const accountStatus = accountBalance < 0
  ? "Account Overdrawn"
  : "Account Active";

console.log(accountStatus);

// ex 5 - Comprehensive Challenge
const courseworkPoints = 25;
const quizPoints = 20;
const examPoints = 40;

const numericScore =
  courseworkPoints + quizPoints + examPoints;

const scoreBand = Math.floor(numericScore / 10);
let letterGrade;

switch (scoreBand) {
  case 10:
  case 9:
    letterGrade = "A";
    break;
  case 8:
    letterGrade = "B";
    break;
  case 7:
    letterGrade = "C";
    break;
  case 6:
    letterGrade = "D";
    break;
  default:
    letterGrade = "F";
}

console.log("Score:", numericScore);
console.log("Grade:", letterGrade);