function composeTag(input) {
    let location = input[0];
    let text = input[1];

    let result = `<img src="${location}" alt="${text}">`;

    console.log(result);
}

composeTag(['smiley.gif', 'Smiley Face']);