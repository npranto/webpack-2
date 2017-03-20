import sum from './operations/sum';
import subtract from './operations/subtract';
import multiply from './operations/multiply';
import divide from './operations/divide';
import './image-viewer/image-viewer';

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
