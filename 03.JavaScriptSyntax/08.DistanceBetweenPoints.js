function distance(x1, y1, x2, y2) {
    let x = Math.abs(x1 - x2);
    let y = Math.abs(y1 -y2);

    let result = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

    console.log(result);
}

distance(2, 4, 5, 0);