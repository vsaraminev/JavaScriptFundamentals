function arenaTier(input) {
    let gladiators = {};

    for (let i = 0; i < input.length; i++) {
        let line = input[i];

        let tokens = [];
        if (line.includes("vs")) {
            tokens = line.split(" vs ");
            let gladiator1 = tokens[0];
            let gladiator2 = tokens[1];

            if (gladiators.hasOwnProperty(gladiator1) && gladiators.hasOwnProperty(gladiator2)) {

                for (const tech in gladiators[gladiator1]) {
                    let glad1Skill = gladiators[gladiator1][tech];
                    let glad2Skill = gladiators[gladiator2][tech];

                    if (glad1Skill && glad2Skill && tech !== "__total__") {
                        if (glad1Skill > glad2Skill) {
                            delete gladiators[gladiator2];
                        } else if (glad2Skill > glad1Skill) {
                            delete gladiators[gladiator1];
                        }
                    }
                }
            }
        } else if(line.includes(" -> ")) {
            tokens = line.split(" -> ");

            let gladiator = tokens[0];
            let technique = tokens[1];
            let skill = +tokens[2];

            if (!gladiators.hasOwnProperty(gladiator)) {
                gladiators[gladiator] = {};
                gladiators[gladiator]["__total__"] = 0;
            }

            if (!gladiators[gladiator].hasOwnProperty(technique)) {
                gladiators[gladiator][technique] = skill;
                gladiators[gladiator]["__total__"] += skill;
            } else {
                if (gladiators[gladiator][technique] < skill) {
                    gladiators[gladiator]['__total__'] -= result[gladiator][technique];
                    gladiators[gladiator][technique] = skill;
                    gladiators[gladiator]["__total__"] += skill;
                }
            }
        } else {
            break;
        }
    }

    let sortedGladiators = Object.keys(gladiators).sort((g1, g2) => {
        return gladiators[g2]["__total__"] - gladiators[g1]["__total__"] || g1.localeCompare(g2);
    });

    for (const glad of sortedGladiators) {
        console.log(`${glad}: ${gladiators[glad]["__total__"]} skill`);

        let sortedTechniques = Object.keys(gladiators[glad])
            .filter(t => t !== "__total__").sort((t1, t2) => {
                return diff = gladiators[glad][t2] - gladiators[glad][t1] || t1.localeCompare(t2);               
            });

        for (const tech of sortedTechniques) {
            if (tech !== "__total__") {
                console.log(`- ${tech} <!> ${gladiators[glad][tech]}`);
            }
        }
    }
}

// arenaTier([
//     "Pesho -> BattleCry -> 400",
//     "Gosho -> PowerPunch -> 300",
//     "Stamat -> Duck -> 200",
//     "Stamat -> Tiger -> 250",
//     "Ave Cesar"
// ]);

arenaTier([
    "Pesho -> Duck -> 400",
    "Julius -> Shield -> 150",
    "Gladius -> Heal -> 200",
    "Gladius -> Support -> 250",
    "Gladius -> Shield -> 250",
    "Pesho vs Gladius",
    "Gladius vs Julius",
    "Gladius vs Gosho",
    "Ave Cesar"
]);