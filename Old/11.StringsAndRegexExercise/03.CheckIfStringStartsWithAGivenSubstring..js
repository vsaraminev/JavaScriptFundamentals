function stringStartsWith(text, start) {
    let index = text.indexOf(start);

    if (index > -1) {
        console.log("true");
    } else{
        console.log("false");
    }
}

stringStartsWith('How have you been?', 'how');
stringStartsWith('The quick brown fox…', 'The quick brown fox…');