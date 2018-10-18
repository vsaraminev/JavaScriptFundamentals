function autoCompany(input) {
    let map = new Map();

    for (const line of input) {
        let tokens = line.split(" | ");
        let brand = tokens[0];
        let model = tokens[1];
        let quatity = +tokens[2];

        if(!map.has(brand)) {
            map.set(brand, new Map());
        }

        if(!map.get(brand).has(model)) {
            map.get(brand).set(model, 0);
        }

        map.get(brand).set(model, map.get(brand).get(model) + quatity);
    }

    for (const [key, value] of map) {
        console.log(key);

        for (const [k,v] of value) {
            console.log(`###${k} -> ${v}`)
        }
    }
}

autoCompany(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
);