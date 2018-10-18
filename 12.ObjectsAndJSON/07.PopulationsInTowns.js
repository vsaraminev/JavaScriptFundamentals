function populationsInTowns(input) {
    let map = new Map();
    
    for (let i = 0; i < input.length; i++) {
        let currentLine = input[i].split(/<->/).filter(w => w!== '');
        let city = currentLine[0];
        let population = +currentLine[1];

        if(!map.has(city)) {
            map.set(city, 0);
        }

        map.set(city, map.get(city) + population);
    }

    for (const [key, value] of map) {
        console.log(`${key}: ${value}`);
    }
}

populationsInTowns([
'Sofia <-> 1200000', 
'Montana <-> 20000', 
'New York <-> 10000000', 
'Washington <-> 2345000',
'Las Vegas <-> 1000000'
]);