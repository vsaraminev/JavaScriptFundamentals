function usernames(input) {
    let result = [];

    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split('@');
        let username = tokens[0];
        username = username + '.';
        let domainTokens = tokens[1].split('.');

        for (const token of domainTokens) {
            username = username + token[0];
        }

        result.push(username);
    }

    console.log(result.join(', '));
}

usernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);