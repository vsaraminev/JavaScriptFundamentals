function distance(input) {
    let x1 = input[0];
    let y1 = input[1];
    let z1 = input[2];

    let x2 = input[3];
    let y2 = input[4];
    let z2 = input[5];

    let x = Math.abs(x1 - x2);
    let y = Math.abs(y1 - y2);
    let z = Math.abs(z1 - z2);

    let result = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));

    console.log(result);
}

distance([1, 1, 0, 5, 4, 0]);
distance([3.5, 0, 1, 0, 2, -1]);