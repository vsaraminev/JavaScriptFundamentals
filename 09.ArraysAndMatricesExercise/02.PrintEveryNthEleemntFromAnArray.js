function printElements(input) {
    let step = +input.pop();
    for (let i = 0; i < input.length; i+=step) {
        console.log(input[i]);
    }
}

printElements([5, 20, 31, 4, 20, 2]);
printElements(['dsa', 'asd', 'test', 'tset', 2]);
