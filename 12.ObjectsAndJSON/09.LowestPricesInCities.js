function lowestPricesInCities(input) {
    let map = new Map();

    for (let i = 0; i < input.length; i++) {
        
        let[town, product, price] = input[i].split(' | ');
        
        if(!map.has(product)) {
            map.set(product, new Map());
        }

        map.get(product).set(town, +price);
    }

    for (const [key, value] of map) {
        let sortedTowns = Array
        .from(value.keys())
        .sort((k1, k2) => {
            return value.get(k1) - value.get(k2);
        });

        console.log(`${key} -> ${value.get(sortedTowns[0])} (${sortedTowns[0]})`);
    }
}

lowestPricesInCities([
'Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10'
]);