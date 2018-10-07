function simpleEmailValidation(email) {
    let regex = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+/;

    if(regex.test(email)) {
        console.log('Valid');
    } else {
        console.log('Invalid');
    }
}

simpleEmailValidation('valid@email.bg');
simpleEmailValidation('invalid@emai1.bg');