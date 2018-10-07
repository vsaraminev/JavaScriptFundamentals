function processOddNumbers(input) {
    let result = [];

    for (const index in input) {
        if (index % 2 !== 0) {
            result.push(input[index] * 2);            
        }
    }

    console.log(result.reverse().join(' '));
}

processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);