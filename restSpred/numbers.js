function addNumbers(...numbers) {
    return numbers.reduce((sum, num) => {
        return sum + num;
    });
}

console.log(addNumbers(1,2,3,4,5,6,7));
