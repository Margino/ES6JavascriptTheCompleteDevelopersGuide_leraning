const companies = [
    'Google',
    'Facebook',
    'Uber'
];

const [name, ...rest] = companies;
console.log(name, rest);
