const products = [
    { name: 'cucumber', type: 'vegetable' },
    { name: 'orange', type: 'fruit' },
    { name: 'banana', type: 'fruit' },
    { name: 'cabbage', type: 'vegetable' }
];

const fruit = products.filter((product) => product.type === 'fruit');
console.log(fruit);
