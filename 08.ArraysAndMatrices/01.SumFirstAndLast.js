function sumFirstAndLast(input) {
    let firstNum = +input[0];
    let lastNum = +input[input.length - 1];

    let sum = firstNum + lastNum;

    console.log(sum);
}

sumFirstAndLast(['20', '30', '40']);
sumFirstAndLast(['5', '10']);