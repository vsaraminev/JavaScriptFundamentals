function aggregateTable(input) {
    let cities = [];
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
       let tokens = input[i].split('|').filter(w => w !== '');
        let city = tokens[0].trim();
        let num = +tokens[1];

        cities.push(city);
        sum += num;
    }

    console.log(cities.join(', '));
    console.log(sum);
}

aggregateTable([
'| Sofia           | 300',
'| Veliko Tarnovo  | 500',
'| Yambol          | 275'
]);