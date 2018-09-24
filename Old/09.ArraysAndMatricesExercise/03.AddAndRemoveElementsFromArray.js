function addRemoveElements(input) {
    let result = [];

    for (let i = 0; i < input.length; i++) {

        if (input[i] === "add") {
            result.push(i+1);
        }
    }

    if (result.length === 0) {
        console.log("Empty");
    } else {
        console.log(result.join("\n"));
    }
}

addRemoveElements(['add', 'add', 'remove', 'add']);
console.log();
addRemoveElements(['add', 'add', 'remove','add', 'add']);


