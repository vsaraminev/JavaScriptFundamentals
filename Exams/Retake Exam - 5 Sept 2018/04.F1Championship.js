function championship(input) {

    let result = {};

    for (let i = 0; i < input.length; i++) {
        let line = input[i];

        let [team, pilot, points] = line.split(' -> ');
        
        if(!result.hasOwnProperty(team)) {
            result[team] = {};
            result[team]['__total__'] = 0;
        }

        if(!result[team].hasOwnProperty(pilot)) {
            result[team][pilot] = 0;
        }

        result[team][pilot] += +points;
        result[team]['__total__'] += +points;
    }

    let sortedTeams = Object.keys(result).sort((t1, t2) => {
        let pointsDiff = result[t2]['__total__'] - result[t1]['__total__'];

        return pointsDiff;
    });

    let counter = 0;

    for (const team of sortedTeams) {

        if(counter > 2) {
            break;
        }

        console.log(`${team}: ${result[team]['__total__']}`);

        let sortedPilots = Object.keys(result[team]).filter(t => t!=='__total__').sort((p1, p2) => {
            let pointsDiff = result[team][p2] - result[team][p1];

            return pointsDiff;
        });

        for (const pilot of sortedPilots) {
            console.log(`-- ${pilot} -> ${result[team][pilot]}`);
        }

        counter++;
    }
}

championship([
"Ferrari -> Kimi Raikonnen -> 25",
"Ferrari -> Sebastian Vettel -> 18",
"Mercedes -> Lewis Hamilton -> 10",
"Mercedes -> Valteri Bottas -> 8",
"Red Bull -> Max Verstapen -> 6",
"Red Bull -> Daniel Ricciardo -> 4"
]);