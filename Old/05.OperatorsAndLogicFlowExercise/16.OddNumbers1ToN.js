function oddNumbers1ToN(number) {
    for (let i = 1; i <= number; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}

oddNumbers1ToN(5);
oddNumbers1ToN(4);
oddNumbers1ToN(7);