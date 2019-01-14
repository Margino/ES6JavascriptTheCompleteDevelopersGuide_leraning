function creatBookShop(inventory) {
    return {
        inventory,
        inventoryValue() {
            return this.inventory.reduce((total, book) => {
                return total + book.price;
            }, 0);
        },
        priceForTitle(title) {
            return this.inventory.find((book) => {
                return book.title === title;
            }).price;
        }
    };
}

const inventory = [
    { title: 'Harry Potter', price: 10 },
    { title: 'Strange Life', price: 5}
];

const bookShop = creatBookShop(inventory);

console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle('Harry Potter'));
