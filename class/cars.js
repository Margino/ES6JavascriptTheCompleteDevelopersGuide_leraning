const Car = function(options) {
    this.title = options.title;
};

Car.prototype.drive = function() {
    return 'vroom';
};

const car = new Car({
    title: 'Ford'
});

console.log(car);
console.log(car.drive());
