function extractNumbers(input) {
    let currentMaxNum = Number.NEGATIVE_INFINITY;
    let result = [];

    for (let i = 0; i < input.length; i++) {
        if(input[i] >= currentMaxNum) {
            currentMaxNum = input[i];
            result.push(currentMaxNum);
        }
    }

    console.log(result.join('\n'));
}

//extractNumbers([1, 3, 8, 4, 10, 12, 3, 2, 24]);
//extractNumbers([1, 2, 3, 4]);
extractNumbers([20, 3, 2, 15, 6, 1]);