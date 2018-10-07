function biggestElement(input) {
    let biggestNum = Number.NEGATIVE_INFINITY;

    for (let row = 0; row < input.length; row++) {
        for (let num of input[row]) {
            if(num > biggestNum) {
                biggestNum = num;
            }
        }
    }

    console.log(biggestNum);
}

biggestElement([
    [20, 50, 10],
    [8, 33, 145]
]);

biggestElement([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]
])