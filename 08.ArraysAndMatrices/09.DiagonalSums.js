function diagonalSums(input) {
    let leftSum = 0;
    let rigthSum = 0;

for (let row = 0; row < input.length; row++) {
    leftSum += input[row][row];
    rigthSum += input[row][input.length - 1 - row];
}

    console.log(leftSum + " " + rigthSum);
}

diagonalSums([
    [20, 40],
    [10, 60]
])