function distance(x1, y1, x2, y2) {
    let firstPoint = {x: x1, y:y1};
    let secondPoint = {x: x2, y: y2};

    let newX = Math.abs(firstPoint.x - secondPoint.x);
    let newY = Math.abs(firstPoint.y - secondPoint.y);
    let result = Math.sqrt(Math.pow(newX, 2) + Math.pow(newY, 2));

    console.log(result);
}

distance(2, 4, 5, 0);
distance(2.34, 15.66, -13.55, -2.9985);
