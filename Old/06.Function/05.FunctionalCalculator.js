function functionalCalculator(firstNum, secondNum, op) {
    switch (op) {
        case "+" :
            return firstNum + secondNum;
        case "-" :
            return firstNum - secondNum;
        case "*" :
            return firstNum * secondNum;
        case "/" :
            return firstNum / secondNum;
    }
}

console.log(functionalCalculator(2, 4, '+'));