function MathLibrary() {
    calculateProduct(...rest) {
        console.log('Pleasure use the multiply method insted');
        return this.multiply(...rest);
    },
    multiply(a, b) {
        return a * b;
    }
}
