function extractText(input) {
    let result = [];

    let startIndex = input.indexOf('(');
    let endIndex = input.indexOf(')', startIndex + 1);

    while(startIndex > -1 && endIndex > -1) {
        result.push(input.substring(startIndex + 1, endIndex));
        startIndex = input.indexOf('(', startIndex + 1);
        endIndex = input.indexOf(')', endIndex + 1);
    }

    console.log(result.join(', '));
}

extractText('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)');