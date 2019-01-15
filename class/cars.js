const Car = function(options) {
    this.title = options.title;
};

Car.prototype.drive = function() {
    return 'vroom';
};

const car = new Car({
    title: 'Ford'
});

console.log('Car:', car);
console.log('Car.drive:', car.drive());

const Toyota = function(options) {
    Car.call(this, options);
    this.color = options.color;
};
Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;
Toyota.prototype.honk = function() {
    return 'beep';
}

const carT = new Toyota({
    color: 'red',
    title: 'Daily Driver'
});

console.log('Toyota:', carT);
console.log('Toyota.drive:', carT.drive());
console.log('Toyota.honk:', carT.honk());
