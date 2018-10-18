function storeCatalogue(input) {
    let result = {};

    for (let line of input) {
        let tokens = line.split(" : ");
        let product = tokens[0];
        let price = +tokens[1];

        let firstChar= product[0];

        if(!result.hasOwnProperty(firstChar)) {
            result[firstChar] = {};
        }

        if(!result[firstChar].hasOwnProperty(product)) {
            result[firstChar][product] = price;
        }
    }

    let sortedGroups = Object.keys(result).sort((a,b) => {
       return a.localeCompare(b);
    });

    for (let item of sortedGroups) {
        console.log(`${item}`);

        let sortedProducts = Object.keys(result[item]).sort((p1, p2) => {
            return p1.localeCompare(p2);
        })

        for (const product of sortedProducts) {
            console.log(`  ${product}: ${result[item][product]}`)
        }
    }
}

storeCatalogue([
'Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'
])