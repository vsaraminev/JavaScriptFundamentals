function cookingByNumbers(input) {
    let number = +input[0];

    for (let i = 1; i < input.length; i++) {
        let operation = input[i];
        number = cook(operation); 
        console.log(number);       
    }

    function cook(operation) {
        switch(operation) {
            case "chop" : 
            return number/2; 
            case "dice" : 
           return Math.sqrt(number);
            case "spice" : 
            return number+=1;
            case "bake" : 
            return number*=3;
            case "fillet" : 
            return number*=0.8;
        }
    }
}

cookingByNumbers([32, 'chop', 'chop', 'chop', 'chop', 'chop']);
//cookingByNumbers([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);