function firstAndLastKNums(input) {
    let k = input.shift();
    let first = input.slice(0,k);
    let last = input.slice(input.length-k, input.lenght);
    console.log(first.join(' '));
    console.log(last.join(' '));
}

firstAndLastKNums([2, 7, 8, 9]);