function oddEven(number) {

    if (!Number.isInteger(number)) {
        return "invalid";
    }

    if (number % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

console.log(oddEven(5));
console.log(oddEven(8));
console.log(oddEven(1.5));