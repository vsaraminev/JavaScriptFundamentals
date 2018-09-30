function modifyAverage(number) {    
    let sum = 0;
    let counter = 0;
    let result ="";
    result += number;

    while (number) {
        counter++;
        sum += number % 10;
        number = Math.floor(number / 10);
    }

    let average = sum / counter;

    while(average <= 5) {
        result +="9";
        sum += 9;
        counter++;
        average = sum / counter;
    }

    console.log(result);
}

modifyAverage(101);
modifyAverage(5835);