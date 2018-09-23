function squareOfStars(number) {
    let symbol = "* ";
    for (let i = 1; i <= number; i++) {
        console.log(symbol.repeat(number));
    }
}

squareOfStars(2);
squareOfStars(5);