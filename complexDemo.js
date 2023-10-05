/*
   Filename: complexDemo.js
   Description: A complex demonstration of various JavaScript concepts and algorithms
*/

// Function to calculate the nth Fibonacci number using recursion
function fibonacci(n) {
   if (n <= 1) return n;
   return fibonacci(n - 1) + fibonacci(n - 2);
}

// Function to check if a number is prime
function isPrime(number) {
   if (number <= 1) return false;
   for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
   }
   return true;
}

// Class representing a person
class Person {
   constructor(name, age) {
      this.name = name;
      this.age = age;
   }

   sayHello() {
      console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`);
   }
}

// Example usage of the Person class
const john = new Person("John", 25);
john.sayHello();

// Calculate the sum of the first 100 natural numbers
let sum = 0;
for (let i = 1; i <= 100; i++) {
   sum += i;
}

console.log("Sum of the first 100 natural numbers:", sum);

// Array of prime numbers less than 100
const primes = [];
for (let i = 2; i < 100; i++) {
   if (isPrime(i)) {
      primes.push(i);
   }
}

console.log("Prime numbers less than 100:", primes);

// Calculate the factorial of a number
function factorial(num) {
   if (num === 0 || num === 1) return 1;
   let result = 1;
   for (let i = 2; i <= num; i++) {
      result *= i;
   }
   return result;
}

console.log("Factorial of 5:", factorial(5));

// Calculate the average of an array
function calculateAverage(arr) {
   const sum = arr.reduce((acc, curr) => acc + curr, 0);
   return sum / arr.length;
}

const numbers = [1, 2, 3, 4, 5];
console.log("Average of numbers:", calculateAverage(numbers));

// Sorting an array using bubble sort algorithm
function bubbleSort(arr) {
   const len = arr.length;
   for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - i - 1; j++) {
         if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
         }
      }
   }
   return arr;
}

const unsortedArray = [5, 3, 9, 1, 2];
console.log("Sorted array:", bubbleSort(unsortedArray));

// Generate a random password
function generateRandomPassword(length) {
   const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
   let password = "";
   for (let i = 0; i < length; i++) {
      password += charset[Math.floor(Math.random() * charset.length)];
   }
   return password;
}

console.log("Random password:", generateRandomPassword(10));

// Performing a binary search on a sorted array
function binarySearch(arr, target) {
   let low = 0;
   let high = arr.length - 1;
   while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      if (arr[mid] === target) {
         return mid;
      } else if (arr[mid] < target) {
         low = mid + 1;
      } else {
         high = mid - 1;
      }
   }
   return -1;
}

const sortedArray = [1, 3, 5, 7, 9];
console.log("Index of target in sorted array:", binarySearch(sortedArray, 5));

// Recursive function to calculate the factorial of a number
function recursiveFactorial(num) {
   if (num === 0 || num === 1) return 1;
   return num * recursiveFactorial(num - 1);
}

console.log("Factorial of 7 (recursive):", recursiveFactorial(7));

// Class representing a rectangle
class Rectangle {
   constructor(length, width) {
      this.length = length;
      this.width = width;
   }

   calculateArea() {
      return this.length * this.width;
   }
}

const rectangle = new Rectangle(5, 3);
console.log("Area of rectangle:", rectangle.calculateArea());

// Function to check if a string is palindrome
function isPalindrome(str) {
   const reversedStr = str.split("").reverse().join("");
   return str === reversedStr;
}

console.log("Is 'madam' a palindrome?:", isPalindrome("madam"));

// Generating a random RGB color
function getRandomColor() {
   const red = Math.floor(Math.random() * 256);
   const green = Math.floor(Math.random() * 256);
   const blue = Math.floor(Math.random() * 256);
   return `rgb(${red}, ${green}, ${blue})`;
}

console.log("Random RGB color:", getRandomColor());

// Calculating the sum of even Fibonacci numbers less than 4 million
let fibonacciSum = 0;
let fibonacciIndex = 0;
while (true) {
   const fibonacciNumber = fibonacci(fibonacciIndex);
   if (fibonacciNumber > 4000000) break;
   if (fibonacciNumber % 2 === 0) {
      fibonacciSum += fibonacciNumber;
   }
   fibonacciIndex++;
}

console.log("Sum of even Fibonacci numbers < 4 million:", fibonacciSum);

// More code...
// ...
// ...

// Last line of the code
console.log("Code execution completed.");