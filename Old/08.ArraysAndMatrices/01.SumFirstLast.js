function sumFirstLast(input) {
    let firstNum = Number(input[0]);
    let lastNum = Number(input[input.length-1]);

    console.log(firstNum + lastNum);
}

sumFirstLast(['20', '30', '40']);
sumFirstLast(['5', '10']);