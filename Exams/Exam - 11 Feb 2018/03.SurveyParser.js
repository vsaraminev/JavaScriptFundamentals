function surveyParser(input) {
    let svgRegex = /<svg>((.|\n)*?)<\/svg>/g;
    let catRegex = /<cat><text>((.|\n)*?)\[((.|\n)*?)]((.|\n)*?)<\/text><\/cat>\s*<cat>((.|\n)*?)<\/cat>/g;
    let ratingRegex = /<g><val>([0-9]+)<\/val>([0-9]+)<\/g>/g;

    let label = "";
    let votes = 0;
    let sumOfVotes = 0;

    let svgMatch = input.match(svgRegex);
    let catMatch = input.match(catRegex);

    if (!svgMatch) {
        console.log("No survey found");
    } else if (!catMatch) {
        console.log("Invalid format");
    } else {
        let catMatches = catRegex.exec(input);
        label = catMatches[3];
        let ratings = ratingRegex.exec(input);

        while (ratings) {
            let value = +ratings[1];
            let count = +ratings[2];

            if (value <= 0 || value > 10) {
                ratings = ratingRegex.exec(input);
                continue;
            }

            votes += count;
            sumOfVotes += value * count;

            ratings = ratingRegex.exec(input);
        }
        console.log(`${label}: ${+(sumOfVotes / votes).toFixed(2)}`);
    }
}

surveyParser("<p>Some random text</p><svg><cat><text>How do you rate our food? [Food - General]</text></cat><cat><g><val>1</val>0</g><g><val>2</val>1</g><g><val>3</val>3</g><g><val>4</val>10</g><g><val>5</val>7</g></cat></svg><p>Some more random text</p>");