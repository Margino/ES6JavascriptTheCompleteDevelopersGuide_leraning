const testingTeam = {
    lead: 'Jane',
    tester: 'Chris',
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.tester;
    }
};

const engineeringTeam = {
    testingTeam,
    size      : 3,
    department: 'Engineering',
    lead      : 'Alex',
    manager   : 'John',
    engineer  : 'Andrew',
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.manager;
        yield this.engineer;
        yield* this.testingTeam;
    }
};

let names = [];

for (let name of engineeringTeam) {
    names.push(name);
}
console.log(names);
