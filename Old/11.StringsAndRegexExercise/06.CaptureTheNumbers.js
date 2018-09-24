function captureTheNumbers(input) {
    let result = [];
    for (let i = 0; i < input.length; i++) {
        let elements = input[i].match(/(\d+)/g);
        if (elements){
            for (let element of elements) {
                result.push(element);
            }
        }
    }

    console.log(result.join(' '));
}

captureTheNumbers(
    ['The300',
    'What is that?',
    'I think it’s the 3rd movie.',
    'Lets watch it at 22:45']
);

captureTheNumbers(['Let’s go11!!!11!','Okey!1!'])