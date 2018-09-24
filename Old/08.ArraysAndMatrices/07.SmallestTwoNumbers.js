function smallestTwoNumbers(input) {

    let ordered = input.sort(function(a, b){return a - b}).join(" ");

    console.log(input.slice(0,2).join(" "));
}

smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);