function biggestOf3Numbers(input) {
    let first = input[0];
    let second = input[1];
    let third = input[2];

    let biggestNum = Math.max(first, second, third);
    console.log(biggestNum);
}

biggestOf3Numbers([5, -2, 7]);