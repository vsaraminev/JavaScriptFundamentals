function triangle(number) {
    let char = "$";
    for (let i = 1; i <= number; i++) {
        console.log(char.repeat(i));
    }
}

triangle(3);
triangle(2);
triangle(4);