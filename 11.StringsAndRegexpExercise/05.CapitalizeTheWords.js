function capitalize(text) {
    let words = text.toLowerCase().split(' ');

    let result = [];

    for (const word of words) {
        result.push(word[0].toUpperCase()+ word.substr(1));
    }

    console.log(result.join(' '));
}

capitalize('Capitalize these words');