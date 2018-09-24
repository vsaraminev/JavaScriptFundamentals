function oddNumbers(number) {
    let result = [];

    for (let i = 1; i <= number; i++) {
        if(i % 2 !== 0) {
            console.log(i);
        }     
    }
}

oddNumbers(5);
oddNumbers(4);
oddNumbers(7);