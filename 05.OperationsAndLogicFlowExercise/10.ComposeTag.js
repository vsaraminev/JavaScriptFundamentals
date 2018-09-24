function composeTag(input) {
    let location = input[0];
    let alternate = input[1];

    console.log(`<img src="${location}" alt="${alternate}">`);
}

composeTag(['smiley.gif', 'Smiley Face']);