function stringEndsWith(text, end) {
    let index = text.indexOf(end, text.length - end.length);

    if (index > -1) {
        console.log("true");
    } else{
        console.log("false");
    }
}

stringEndsWith('This sentence ends with fun?', 'fun?');
stringEndsWith('This is Houston, we have…', 'We have…');