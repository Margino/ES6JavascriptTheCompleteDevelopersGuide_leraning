function Computer(name, ram) {
    this.name = name;
    this.ram = ram;
}

const computers = [
    new Computer('Apple', 24),
    new Computer('Pc', 12),
    new Computer('Acer', 32)
];

const allComputers = computers.every((computer) => computer.rem > 16);
console.log(allComputers);
