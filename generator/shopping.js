function* shopping() {
    // stuff on the sidewalk

    // walking down the sidewalk

    // go into the store with cash
    const staffFromStore = yield 'cash';

    // walking to laundry place
    const cleanClothes = yield 'laundry';

    // walking back home
    return [staffFromStore, cleanClothes];
}

// stuff in the store
const gen = shopping();
console.log(gen.next()); // living our house
console.log(gen.next('groceries')); // living the store with groceries
console.log(gen.next('clean clothes'));
