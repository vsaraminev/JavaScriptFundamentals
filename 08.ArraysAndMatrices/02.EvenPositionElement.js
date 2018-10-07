function evenPosElement(input) {

    let result = [];

    for (const index in input) {
       if(index % 2 === 0) {
           result.push(input[index]);
       }
    }

    console.log(result.join(' '));
}

evenPosElement(['20', '30', '40']);
evenPosElement(['5', '10']);