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
    engineer  : 'Andrew'
};

function* TeamIterator(team) {
    yield team.lead;
    yield team.manager;
    yield team.engineer;
    yield* team.testingTeam;
}

let names = [];

for (let name of TeamIterator(engineeringTeam)) {
    names.push(name);
}
console.log(names);
console.log(engineeringTeam);
