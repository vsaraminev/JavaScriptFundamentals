function travelPlans(input) {
    let specialized = [
        "Programming", "Hardware maintenance", "Cooking", "Translating", "Designing"
    ];

    let specializedCount = 1; 

    let average = [
        "Driving", "Managing", "Fishing", "Gardening"
    ];

    let clumsy = [
        "Singing", "Accounting", "Teaching", "Exam-Making",
        "Acting", "Writing", "Lecturing", "Modeling", "Nursing"
    ];

    let clumsyCount = 1;

    let goldSum = 0;

    for (const line of input) {
        let tokens = line.split(" : ");
        let proffesion = tokens[0];
        let gold = +tokens[1];

        if(specialized.includes(proffesion)) {
            if(gold < 200) {
                continue;
            }

            goldSum += gold * 0.8;

            if(specializedCount % 2 === 0) {
                goldSum += 200;
            }

            specializedCount++;
        }

        if(average.includes(proffesion)) {            
            goldSum += gold;
        }

        if(clumsy.includes(proffesion)) {
            if(clumsyCount % 2 === 0) {
                goldSum += gold * 0.95;
            } else if(clumsyCount % 3 === 0) {
                goldSum += gold * 0.9;                
            } else {
                goldSum += gold;
            }

            clumsyCount++;
        }
    }

    console.log(`Final sum: ${goldSum.toFixed(2)}`);
    if(goldSum < 1000) {
        console.log(`Mariyka need to earn ${(1000 - goldSum).toFixed(2)} gold more to continue in the next task.`)
    } else {
        console.log(`Mariyka earned ${(goldSum - 1000).toFixed(2)} gold more.`)
    }
}

//travelPlans(["Programming : 500", "Driving : 243", "Singing : 100", "Cooking : 199"]);
travelPlans([`Programming : 500, Driving : 243.55, Acting : 200, Singing : 100, Cooking : 199, Hardware maintenance : 800, Gardening : 700, Programming : 500`])