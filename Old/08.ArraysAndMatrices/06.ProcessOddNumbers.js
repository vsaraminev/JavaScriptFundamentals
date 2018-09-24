function processOddNumbers(input) {
    let result = [];

    for (let i = 0; i < input.length; i++) {
        if (i % 2 !== 0) {
            result.push(input[i] * 2);
        }
    }

    console.log(result.reverse().join(" "));
}

processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);