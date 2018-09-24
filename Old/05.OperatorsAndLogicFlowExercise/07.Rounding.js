function rounding(input) {
    let number = input[0];
    let precision = input[1];

    let fraction = number.toString().split('.')[1];

    if (precision > 15) {
        console.log(number.toFixed(15));
    } else {
        console.log(parseFloat(number.toFixed(precision)));
    }
}

rounding([3.1415926535897932384626433832795, 2]);
rounding([10.5, 3]);