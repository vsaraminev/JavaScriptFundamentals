function heroicInventory(input) {
    let result = [];

    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(' / ');
        let name = tokens.shift();
        let level = +tokens.shift();
        let items = [];

        if(tokens.length > 0) {
            items = tokens.join(' ').split(', ');
        }
        
        let hero = {name: name, level: level, items: items};

        result.push(hero);
    }

    console.log(JSON.stringify(result));
}

heroicInventory([
'Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'
]);