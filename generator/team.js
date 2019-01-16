const testingTeam = {
    lead: 'Jane',
    tester: 'Chris'
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
    const testingTeamGenerator = TestTeamInterator(team.testingTeam);
    yield* testingTeamGenerator;
}

function* TestTeamInterator(team) {
    yield team.lead;
    yield team.tester;
}

let names = [];

for (let name of TeamIterator(engineeringTeam)) {
    names.push(name);
}
console.log(names);
console.log(engineeringTeam);
