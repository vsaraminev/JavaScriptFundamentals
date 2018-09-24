function compoundInterest(input) {
    let p = input[0];
    let i = input[1];
    let m = input[2];
    let n = 12 / m;
    let t = input[3];

    let result = p * Math.pow( 1 + i / n /100, n * t) ;

    console.log(result.toFixed(2));
}

compoundInterest([1500, 4.3, 3, 6]);