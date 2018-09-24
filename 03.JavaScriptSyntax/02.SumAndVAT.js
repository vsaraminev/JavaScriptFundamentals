function sumAndVAT(input) {
    let sum = 0;

    for (const number of input) {
        sum+= number;
    }
    console.log(`sum = ${sum}`);
    console.log(`VAT = ${sum*0.2}`);
    console.log(`total = ${sum * 1.2}`);
}

sumAndVAT([1.20, 2.60, 3.50]);
sumAndVAT([3.12, 5, 18, 19.24, 1953.2262, 0.001564, 1.1445]);