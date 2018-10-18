function travelTime(input) {

    let result = {};

    for (let i = 0; i < input.length; i++) {
        let currentLine = input[i];

        let tokens = currentLine.split(' > ');
        
        let country = tokens[0];
        let inputTown = tokens[1];

        let town = "";

        if(inputTown[0] === inputTown[0].toLowerCase()) {
            town += inputTown[0].toUpperCase() + inputTown.slice(1);
        } else {
            town = inputTown;
        }

        let cost = +tokens[2];
        
        if(!result.hasOwnProperty(country)) {
            result[country] = {};
        }

        if(!result[country].hasOwnProperty(town)) {
            result[country][town] = cost;
        } else {
            if(result[country][town] > cost) {
                result[country][town] = cost;
            }
        }
    }

    let sortedCountries = Object.keys(result).sort((c1, c2) => {
        return c1.localeCompare(c2);
    });

    for (const country of sortedCountries) {

        let resultMessage = `${country} -> `;

        let sortedTowns = Object.keys(result[country])
        .sort((t1, t2) => {
            return result[country][t1] - result[country][t2];             
        });

        for (const town of sortedTowns) {
            resultMessage += `${town} -> ${result[country][town]} `
        }

        console.log(resultMessage);
    }
}

travelTime([
    "Bulgaria > sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]);