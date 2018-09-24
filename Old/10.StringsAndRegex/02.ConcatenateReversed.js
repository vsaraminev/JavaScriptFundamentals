function concatenateReversed(input) {
    let result =[];

    for (let i = 0; i < input.length; i++) {
        result.unshift(input[i].split("").reverse().join(""));
    }
    console.log(result.join(""));
}

concatenateReversed(['I', 'am', 'student']);
concatenateReversed(['race', 'car']);