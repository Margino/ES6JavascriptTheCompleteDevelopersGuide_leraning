const numbers = [1, 2, 3];

const doubled = [];
for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
}
console.log(doubled);


const doubledNumbers = numbers.map((number) => number * 2);
console.log(doubledNumbers);
