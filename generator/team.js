const engineeringTeam = {
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
}

let names = [];

for (let name of TeamIterator(engineeringTeam)) {
    names.push(name);
}
console.log(names);
