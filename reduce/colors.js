function Color(color) {
    this.color = color;
};

const primaryColors = [
    new Color('red'),
    new Color('blue'),
    new Color('yellow')
];

const arrayOfColors = primaryColors.reduce((previous, primaryColor) => {
    previous.push(primaryColor.color);
    return previous;
}, []);

console.log(arrayOfColors);
