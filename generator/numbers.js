'use strict';

function* numbers() {
    yield;
}

const gen = numbers();


console.log(numbers());
console.log(gen.next());
console.log(gen.next());
