function cityMarkets(input) {
    let map = new Map();

    for (let i = 0; i < input.length; i++) {
        let currentLine = input[i].split(/\s+->\s+|:/);
        let city = currentLine[0];
        let product = currentLine[1];
        let total = +currentLine[2] * +currentLine[3];

        if(!map.has(city)) {
            map.set(city, new Map());
        }

        map.get(city).set(product, total);
    }

    for (const [key, value] of map) {
        console.log(`Town - ${key}`);
        
        for (const [k,v] of value) {
            console.log(`$$$${k} : ${v}`);
        }
    }
}

cityMarkets([
'Sofia -> Laptops HP -> 200 : 2000',
'Sofia -> Raspberry -> 200000 : 1500',
'Sofia -> Audi Q7 -> 200 : 100000',
'Montana -> Portokals -> 200000 : 1',
'Montana -> Qgodas -> 20000 : 0.2',
'Montana -> Chereshas -> 1000 : 0.3'
]);