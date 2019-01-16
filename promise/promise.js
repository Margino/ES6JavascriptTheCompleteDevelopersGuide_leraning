const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 1000);
});

promise
    .then(() => console.log('finally finished'))
    .then(() => console.log('I was alse run'))
    .catch(() => console.log('uh ou'))
