function imperialUnits(number) {
    let feet = Math.floor(number / 12);
    let inches = number % 12;

    let result = `${feet}'-${inches}"`;

    console.log(result);
}

imperialUnits(36);
imperialUnits(55);
imperialUnits(11);