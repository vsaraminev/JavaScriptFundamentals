function letterCheck(text, letterToCheck) {
    let counter = 0;
    for (let letter of text){
        if (letter === letterToCheck)
            counter++;
    }
    console .log(counter);
}

letterCheck('hello', 'l');
letterCheck('panther', 'n');
