function dnaHelix(number) {
 let symbols = "ATCGTTAGGG";
 let rows = +number;
 let currentIndex = 0;

 for (let i = 0; i < rows; i++) {
    let currentRow = i % 4;

    if(currentIndex === symbols.length) {
        currentIndex = 0;
    }

    if(currentRow === 0) {
        console.log(`**${symbols[currentIndex++]}${symbols[currentIndex++]}**`);
    } else if(currentRow === 1 || currentRow === 3) {
        console.log(`*${symbols[currentIndex++]}--${symbols[currentIndex++]}*`);
    } else {
        console.log(`${symbols[currentIndex++]}----${symbols[currentIndex++]}`);
    }
 }
}

dnaHelix(10);