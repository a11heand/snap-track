/* 
Filename: complexScript.js
Content: Complex script demonstrating various advanced JavaScript concepts and techniques
*/

// Variable to store the total sum of even numbers
let sumOfEvenNumbers = 0;

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// Class representing a shape with common properties and methods
class Shape {
  constructor(color) {
    this.color = color;
  }

  getColor() {
    return this.color;
  }
}

// Class representing a rectangle that inherits from Shape
class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

// Array of prime numbers
const primeNumbers = [];

// Loop to find prime numbers and add them to the array
for (let i = 2; i <= 1000; i++) {
  if (isPrime(i)) {
    primeNumbers.push(i);
  }
}

// Loop to calculate the sum of even prime numbers
for (let i = 0; i < primeNumbers.length; i++) {
  if (primeNumbers[i] % 2 === 0) {
    sumOfEvenNumbers += primeNumbers[i];
  }
}

// Creating instances of Rectangle class
const rectangle1 = new Rectangle("blue", 5, 10);
const rectangle2 = new Rectangle("red", 8, 12);

// Output the area of rectangle1
console.log("Area of rectangle1:", rectangle1.getArea());

// Output the color of rectangle2
console.log("Color of rectangle2:", rectangle2.getColor());

// Recursive function to calculate factorial of a number
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

// Output factorial of 5
console.log("Factorial of 5:", factorial(5));

// Simulating a network call using Promise
function simulateNetworkCall(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data) {
        resolve("Network call successful!");
      } else {
        reject("Network call failed!");
      }
    }, 2000);
  });
}

// Using async/await to handle the asynchronous network call
async function performNetworkCall() {
  try {
    const response = await simulateNetworkCall(true);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

// Call the async function
performNetworkCall();

/*
Remaining code...
Continue adding more functionality and logic to accomplish complex tasks.
Ensure to implement error handling, optimization, and best practices.
Remember to test and validate the code for robustness and accuracy.
*/