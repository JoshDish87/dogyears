const myAge = 33;
//This my age
let earlyYears = 2;
// this is a variable created with let cause it could change
earlyYears = earlyYears * 10.5 ;

let laterYears = myAge - 2;
//we already accounted for the first two years
laterYears = laterYears * 4
//This calculates the number of dog years for the 2 years

let myAgeInDogYears = (earlyYears + laterYears);

let myName = ('Joshua Dishon'.toLowerCase());
//changes all uppercase letters to lowercase
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
