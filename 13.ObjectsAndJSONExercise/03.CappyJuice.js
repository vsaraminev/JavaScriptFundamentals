function cappyJuice(input) {
    let result = {};
    let sorted = [];

    for (let line of input) {
        let tokens = line.split(" => ");
        let juice = tokens[0];
        let quantity = Number(tokens[1]);

        if(!result.hasOwnProperty(juice)) {
            result[juice] = 0;
        }

        result[juice] += quantity;

        if(result[juice]>= 1000 && !sorted.includes(juice)) {
            sorted.push(juice);
        }
    }
    
    for (let juice of sorted) {
        console.log(`${juice} => ${Math.floor(result[juice]/1000)}`)
    }
}

cappyJuice(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
);

