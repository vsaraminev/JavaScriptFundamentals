function smallestTwoNumbers(input) {
    input.sort(function(a, b) { return a - b})
    let firstTwoNumbers = input.slice(0, 2);
    console.log(firstTwoNumbers.join(' '));
}

smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);