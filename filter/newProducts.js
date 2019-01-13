const products = [
    { name: 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
    { name: 'banana', type: 'fruit', quantity: 10, price: 15 },
    { name: 'orange', type: 'fruit', quantity: 30, price: 13 },
    { name: 'cabbage', type: 'vegetable', quantity: 3, price: 5}
];

// vegetable, quantity > 0, price < 10
const myProducts = products.filter((product) => {
    return product.type === 'vegetable' &&
           product.quantity > 0 &&
           product.price < 10;
});
console.log(myProducts);
