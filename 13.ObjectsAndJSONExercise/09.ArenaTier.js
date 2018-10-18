function arenaTier(input) {

    let result = {};

    for (let i = 0; i < input.length; i++) {

        let line = input[i];

        if(line.includes(' -> ')) {
            let tokens = line.split(' -> ');
            let gladiator = tokens[0];
            let technique = tokens[1];
            let skill = +tokens[2];
    
            if(!result.hasOwnProperty(gladiator)) {
                result[gladiator] = {};
                result[gladiator][technique] = skill;
                result[gladiator]['__total__'] = skill;
            }
    
            if(!result[gladiator].hasOwnProperty(technique)) {
                result[gladiator][technique] = skill;
                result[gladiator]['__total__'] +=skill;
            } else {
                if(result[gladiator][technique] < skill) {
                    result[gladiator]['__total__'] -= result[gladiator][technique];
                    result[gladiator]['__total__'] += skill;
                    result[gladiator][technique] = skill;
                }
            }
    
        } else if(line.includes(' vs ')) {
            let glTokens = line.split(' vs ');
            let gladiator1 = glTokens[0];
            let gladiator1Exists = result.hasOwnProperty(gladiator1);
            let gladiator2 = glTokens[1];
            let gladiator2Exists = result.hasOwnProperty(gladiator2);

            if(gladiator1Exists && gladiator2Exists) {

                for (const technique in result[gladiator1]) {
                   let gladiator1Skill = result[gladiator1][technique];
                   let gladiator2Skill = result[gladiator2][technique];

                   if(gladiator1Skill && gladiator2Skill && technique !== '__total__') {
                       if(gladiator1Skill > gladiator2Skill) {
                           delete result[gladiator2];
                           break;
                       } else if(gladiator1Skill < gladiator2Skill) {
                           delete result[gladiator1];
                           break;
                       }
                   }
                }
            }
        } else {
            break;
        }        
    }

    let sortedGladiators = Object.keys(result).sort((g1, g2) => {
        let skillDiff = result[g2]['__total__'] - result[g1]['__total__'];

        if(skillDiff === 0) {
            return g1.localeCompare(g2);
        }

        return skillDiff;
    });

    for (const glad of sortedGladiators) {
        console.log(`${glad}: ${result[glad]['__total__']} skill`);

        let sortedTechniques = Object.keys(result[glad])
        .filter(s => s !== '__total__').sort((s1, s2) => {
            let skillDiff = result[glad][s2] - result[glad][s1];

            if(skillDiff === 0) {
                return s1.localeCompare(s2);
            }
    
            return skillDiff;
        });

        for (const tech of sortedTechniques) {
           console.log(`- ${tech} <!> ${result[glad][tech]}`);
        }
    }
}