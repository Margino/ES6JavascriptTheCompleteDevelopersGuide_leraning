function* shopping() {
    // stuff on the sidewalk

    // walking down the sidewalk

    // go into the store with cash
    const staffFromStore = yield 'cash';

    // walking back home
    return staffFromStore;
}

// stuff in the store
const gen = shopping();
console.log(gen.next()); // living our house
console.log(gen.next('groceries')); // living the store with groceries
