// Create an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Create a veriable to hold the sum
let sum = 0;

// Loop over the array, incrementing the sum variable
numbers.forEach((number) => {
    sum += number;
});

// Print the sum variable
console.log(sum);


// An alternative option
const adder = (number) => {
    sum += number;
};
numbers.forEach(adder);


// An alternative option
const result = numbers.reduce((sum, num) => sum + num, 0);
