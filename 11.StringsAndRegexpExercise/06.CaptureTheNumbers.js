function captureTheNumbers(input) {
    let numbers = [];

    for (let i = 0; i < input.length; i++) {
        let currentLine = input[i];

        let match = currentLine.match(/\d+/g);

       if (match) {
           for (const number of match) {
               numbers.push(number);
           }
       }        
    }

    console.log(numbers.join(' '));
}

captureTheNumbers([
'The300', 
'What is that?', 
'I think it’s the 3rd movie.', 
'Lets watch it at 22:45'
]);