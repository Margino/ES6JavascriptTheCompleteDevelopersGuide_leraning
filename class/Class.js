class Car {
    constructor( {title}) {
        this.title = title;
    }
    drive() {
        return 'vroom';
    }
}

const car = new Car({
    title: 'Toyota'
});
console.log('Car:', car);
console.log('Car.drive:', car.drive());

class Toyota extends Car {
    constructor(options) {
        super(options);
        this.color = options.color;
    }

    honk() {
        return 'honk';
    }
}
const carT = new Toyota({
    color: 'red'
});
console.log('CarT:', carT);
console.log('CarT.honk:', carT.honk());
console.log('CarT.drive:', carT.drive());
