const companies = [
    {
        name    : 'Google',
        location: 'Montiain View'
    },
    {
        name    : 'Facebook',
        location: 'Menlo Park'
    },
    {
        name    : 'Uber',
        location: 'San Francisco'
    }
];

let [ { location } ] = companies;
console.log(location);

const google = {
    locations: ['Mountain View', 'New Yourk', 'London']
};

let { locations: [loc] } = google;
console.log(loc);
