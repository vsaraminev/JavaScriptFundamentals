function decode(input) {
    let startIndex = +input[0];
    let endIndex = +input[1];
    let word = input[2];
    let text = input[3];
    let countryRegex = /[A-Z][a-z]+[A-Z]/;
    let numbersRgex = /\d{3}[\.\d+]*/g;
    let countryMatch = text.match(countryRegex);
    let countryResult = "";    

    if (countryMatch) {
        let country= countryMatch[0];
        countryResult = country.slice(0, startIndex) + word + country.slice(endIndex + 1);
    }

    let numbersMatch = text.match(numbersRgex);

    let town = "";

    for (const number of numbersMatch) {
        let currentNum = 0;
        if(number.includes(".")) {
            currentNum = Math.ceil(Number(number));
        } else {
            currentNum = +number;
        }

        town += String.fromCharCode(currentNum);
    }

    let countryFinal = countryResult.slice(0, countryResult.length - 1) + countryResult[countryResult.length - 1].toLowerCase();
    let townResult = town[0].toUpperCase() + town.slice(1);

    console.log(`${countryFinal} => ${townResult}`)
}

decode([
    "3",
    "5",
    "gar",
    "114 sDfia 1, riDl10 confin$4%#ed117 likewise it humanity aTe114.223432 BultoriA - Varnd railLery101 an unpacked as he"
]);

decode([
    "1", 
    "4","loveni", 
    "SerbiA 67 – sDf1d17ia aTe 1, 108 confin$4%#ed likewise it humanity  Bulg35aria - VarnA railLery1a0s1 111 an unpacked as 109 he"
]);