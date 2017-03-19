const sum = require('./operations/sum');
const subtract = require('./operations/subtract');
const multiply = require('./operations/multiply');
const divide = require('./operations/divide');

let num1 = 15;
let num2 = 10;

let sumTotal = sum(num1, num2);
let subtractTotal = subtract(num1, num2);
let multiplyTotal = multiply(num1, num2);
let divideTotal = divide(num1, num2);

console.log('SUM', sumTotal);
console.log('SUBTRACT', subtractTotal);
console.log('MULTIPLY', multiplyTotal);
console.log('DIVIDE', divideTotal);
