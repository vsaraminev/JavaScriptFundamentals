function triangleOfStars(number) {
    let symbol = "*";
    for (let i = 1; i <= number; i++) {
        console.log(symbol.repeat(i));        
    }

    for (let i = number - 1; i >= 0; i--) {
        console.log(symbol.repeat(i));  
    }
}

triangleOfStars(5);
triangleOfStars(4);