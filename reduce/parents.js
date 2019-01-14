function balancedParents(string) {
    // ! - to return a bulean
    return !string.split('').reduce((previous, char) => {
        if (previous < 0) return previous;
        if (char === '(') return ++previous;
        if (char === ')') return --previous;
        return previous;
    },0);
}

console.log(balancedParents(')('));
