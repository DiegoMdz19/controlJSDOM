const names = [
    'A-Jay',
    'Manuel',
    'Manuel',
    'Eddie',
    'A-Jay',
    'Su',
    'Reean',
    'Manuel',
    'A-Jay',
    'Zacharie',
    'Zacharie',
    'Tyra',
    'Rishi',
    'Arun',
    'Kenton',
];

const reducedNames = names.reduce((acc, name) => {
    acc.includes(name) ? acc : acc.push(name);
    return acc;
}, []);

console.log(reducedNames);

for (let i = 0; i < names.length; i++) {
    let counter = 0;
    for (let j = 0; j < names.length; j++) {
        if (names[i] === names[j]) counter++;
    }
    if (counter > 1) {
        for (let k = 1; k < counter; k++) {
            const position = names.lastIndexOf(names[i]);
            names.splice(position, 1);
        }
    }
}

console.log(names);
