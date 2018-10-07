function countOccurrences(word, text) {
    let counter = 0;

    let index = text.indexOf(word);

    while(index > -1) {
        counter++;
        index = text.indexOf(word, index + 1);
    }

    console.log(counter);
}

countOccurrences('the', 'The quick brown fox jumps over the lay dog.');