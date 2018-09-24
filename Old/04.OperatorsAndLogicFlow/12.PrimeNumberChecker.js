function primeNumberChecker(input) {
    let prime = true;
    for (let i = 2; i <= Math.sqrt(input); i++) {
        if (input % i == 0) {
            prime = false;
            break;
        }
    }
    return prime && (input > 1);
}

console.log(primeNumberChecker(7));
console.log(primeNumberChecker(8));
console.log(primeNumberChecker(81));