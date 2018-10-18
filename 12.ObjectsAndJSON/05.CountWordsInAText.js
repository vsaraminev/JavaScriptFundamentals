function countWordsInAText(input) {
    let words = input.join(' ').split(/[^\w]+/).filter(w => w!== '');

    let result = {};

    for (const word of words) {
        if(!result.hasOwnProperty(word)) {
            result[word] = 0;
        }

        result[word]++;
    }

    console.log(JSON.stringify(result));
}

countWordsInAText(['Far too slow, you\'re far too slow.']);