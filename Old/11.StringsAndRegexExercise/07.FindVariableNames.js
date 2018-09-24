function findVariableNames(input) {

    let regex = /\b\_[A-Za-z0-9]+\b/g;

    let elements = input.match(regex);

    let result = [];

    for (const element of elements) {
        result.push(element.substring(1));
    }

    console.log(result.join(','));
}

findVariableNames('The _id and _age variables are both integers.');
findVariableNames('Calculate the _area of the _perfectRectangle object.');
findVariableNames('__invalidVariable _evenMoreInvalidVariable_ _validVariable');