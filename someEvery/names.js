const names = [
    'Alexandra',
    'Johan',
    'Le'
];

const someNames = names.some((name) => name.length > 4);
const allNames = names.every((name) => name.length > 4);
console.log('SomeNames:', someNames);
console.log('AllNames:', allNames);
