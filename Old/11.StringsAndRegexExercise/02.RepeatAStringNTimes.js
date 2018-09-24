function repeatString(text, number) {
    //console.log(text.repeat(number));

    let result ="";

    for (let i = 0; i < number; i++) {
        result += text;
    }

    console.log(result);
}

repeatString('repeat',5);
repeatString('magic is real',3);