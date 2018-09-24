function biggestElement(input) {
    let maxNum = Number.NEGATIVE_INFINITY;
    for (let row = 0; row < input.length; row++) {
        for (let col = 0; col < input[row].length; col++) {
            if (input[row][col] > maxNum) {
                maxNum = input[row][col];
            }
        }
    }

    console.log(maxNum);
}

biggestElement(
    [[20, 50, 10],
    [8, 33, 145]]);

biggestElement(
    [[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]);