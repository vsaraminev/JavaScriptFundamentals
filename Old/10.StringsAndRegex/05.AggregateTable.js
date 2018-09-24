function aggregateTable(input) {
    let cities = [];
    let sum = 0;

    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split("|").filter(a => a !='');
        cities.push(tokens[0].trim());
        sum += Number(tokens[1]);
    }

    console.log(cities.join(", "));
    console.log(sum);
}

aggregateTable(
    ['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']
);