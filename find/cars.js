function Car(model) {
    this.model = model;
}

const cars = [
    new Car('Ford'),
    new Car('Audi'),
    new Car('BMW')
];

const car = cars.find((car) => car.model === 'Ford');
console.log(car);
