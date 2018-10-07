function addAndRemove(input) {
    let initialNum = 0;
    let result = [];
    for (let i = 0; i < input.length; i++) {
        initialNum++;
        if(input[i] === 'add') {
            result.push(initialNum);
        } else if (input[i] === 'remove') {
            if(result.length > 0) {
                result.pop();
            }
        }        
    }

    if(result.length > 0) {
        console.log(result.join('\n'));
    } else {
        console.log('Empty');
    }
}

//addAndRemove(['add', 'add', 'add', 'add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
//addAndRemove(['remove', 'remove', 'remove']);