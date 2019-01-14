const users = [
    { name: 'Jill' },
    { name: 'Alex' },
    { naem: 'John' }
];

const user = users.find((user) => user.name === 'Alex');
console.log(user);
