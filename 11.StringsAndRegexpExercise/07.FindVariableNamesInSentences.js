function findVariables(input) {
    let result = [];

    let match = input.match(/\b_[A-Za-z0-9]+\b/g);

    if (match) {
        for (const word of match) {
            result.push(word.substr(1));
        }
    }

    console.log(result.join(','));
}

findVariables('The _id and _age variables are both integers.');