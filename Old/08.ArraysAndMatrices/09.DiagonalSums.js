function diagonalSums(input) {
    let left = 0;
    let right = 0;

    for (let row = 0; row < input.length; row++) {
        left += input[row][row];
        right += input[row][input.length - 1 - row];
    }

    console.log(left + " " + right);
}

diagonalSums(
    [[20, 40],
    [10, 60]]
);

diagonalSums(
    [[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
);