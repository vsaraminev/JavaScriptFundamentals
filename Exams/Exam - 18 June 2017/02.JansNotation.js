function notation(input) {
    let numbers = [];

    for (const item of input) {
        if(Number.isInteger(item)) {
            numbers.push(item);
        } else {
            let secondNum = numbers.pop();
            let firstNum = numbers.pop();

            if(firstNum && secondNum) {
                switch(item) {
                    case "+":
                    numbers.push(firstNum + secondNum);
                    break;
                    case "-":
                    numbers.push(firstNum - secondNum);
                    break;
                    case "*":
                    numbers.push(firstNum * secondNum);
                    break;
                    case "/":
                    numbers.push(firstNum / secondNum);
                    break;
                }
            } else {
                console.log("Error: not enough operands!");
                break;
            }
        }
    }

    if(numbers.length == 1) {
        console.log(numbers[0]);
    } else if(numbers.length > 1) {
        console.log("Error: too many operands!");
    }
}

//notation([3, 4, '+']);
//notation([5, 3, 4, '*', '-']);
//notation([7, 33, 8, '-']);
notation([15, '/']);