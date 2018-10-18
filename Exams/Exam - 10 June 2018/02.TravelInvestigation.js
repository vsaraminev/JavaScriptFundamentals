function travelInvestigation(input) {
    let companies = input.shift();
    let delimiter = input.shift();
    let symbol = '=';
    let valid = [];
    let invalid = [];
    
    companies = companies.split(delimiter);

    for (let i = 0; i < input.length; i++) {
        let line = input[i].toLowerCase();    
        let isTrue = true;

        for (const company of companies) {
            let index = line.indexOf(company);

            if (index < 0) {
                isTrue = false;
            }
        }

        if(isTrue) {
            valid.push(line);
        } else {
            invalid.push(line);
        }
    }

    let counter = 0;

    if (valid.length > 0) {
        console.log('ValidSentences');

        for (const element of valid) {
            counter++;
            console.log(`${counter}. ${element}`);        
        }
    }
    

    counter = 0;  
    if(valid.length > 0 && invalid.length > 0) {
        console.log(symbol.repeat(30));
    }

    if(invalid.length > 0) {
        console.log('InvalidSentences')
        for (const element of invalid) {
            counter++;
            console.log(`${counter}. ${element}`);        
        }
    }    
}

travelInvestigation([
"bulgariatour@, minkatrans@, koftipochivkaltd",
"@,",
"Mincho e KoftiPochivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
"dqdo mraz some text but is KoftiPochivkaLTD MinkaTrans",
"someone continues as no "
]);