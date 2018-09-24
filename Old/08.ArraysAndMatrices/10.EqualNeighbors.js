function equalNeighbors(input) {
    let counter = 0;
    for (let row = 0; row < input.length; row++) {
        for (let col = 0; col < input[row].length; col++) {
            if (input[row][col] === input[row][col+1]){
                counter++;
            }

            if (input[row + 1] && input[row][col] === input[row + 1][col]) {
                counter++;
            }
        }
    }

    console.log(counter);
}

equalNeighbors(
    [['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]
);

equalNeighbors(
    [['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]
);

equalNeighbors(
    [2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4]
    [2, 5, 5, 4, 2]);