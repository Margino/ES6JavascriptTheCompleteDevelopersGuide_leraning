const savedFile = {
    extention: 'jpg',
    name: 'inage',
    size: 1029
};

function fileSummary({extention, name, size}) {
    return `The file ${name}.${extention} is of size ${size}`;
}

console.log(fileSummary(savedFile));
