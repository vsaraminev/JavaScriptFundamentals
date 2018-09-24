function capitalizeWord(input) {

    let result = [];

    let tokens = input.split(' ');

    for (let i = 0; i < tokens.length; i++) {
        let currentWord = tokens[i];
        result.push(currentWord.charAt(0).toUpperCase() + currentWord.slice(1).toLowerCase());
    }

    console.log(result.join(' '));
}

//capitalizeWord('Capitalize these words');
capitalizeWord('Was that Easy? tRY thIs onE for SiZe!');