function firstAndLastKNumbers(input) {
    let k = input.shift();
    let elements = input;

    console.log(elements.slice(0, k).join(" "))
    console.log(elements.slice(elements.length - k).join(" "));
}

firstAndLastKNumbers([2, 7, 8, 9]);
firstAndLastKNumbers([3, 6, 7, 8, 9]);