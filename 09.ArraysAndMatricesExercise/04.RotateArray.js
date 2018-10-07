function rotateArray(input) {
    
    let rotations = +input.pop() % input.length;

    for (let i = 0; i < rotations; i++) {
        let currentNum = input.pop();
        input.unshift(currentNum);     
    }
    
    console.log(input.join(' '));
}

//rotateArray(['1', '2', '3', '4','2']);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);