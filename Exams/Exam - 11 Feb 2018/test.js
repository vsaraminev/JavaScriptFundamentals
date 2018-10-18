function test(input, battles) {
    let result = {};
    let generals = {};
    let kingdomsSorted = {};

    for (let i = 0; i < input.length; i++) {
        let currentLine = input[i];

        let kingdom = currentLine.kingdom;
        let general = currentLine.general;
        let army = +currentLine.army;

        if (!result.hasOwnProperty(kingdom)) {
            result[kingdom] = {};
            kingdomsSorted[kingdom] = {};
            kingdomsSorted[kingdom]["wins"] = 0;
            kingdomsSorted[kingdom]["losses"] = 0;
        }

        if (!result[kingdom].hasOwnProperty(general)) {
            result[kingdom][general] = 0;
        }

        result[kingdom][general] += army;
    }

    for (let i = 0; i < battles.length; i++) {
        let line = battles[i];
        let attackingKingdom = line[0];
        let attackingGeneral = line[1];
        let defendingKingdom = line[2];
        let defendingGeneral = line[3];

        if (attackingKingdom !== defendingKingdom) {

            if (!generals.hasOwnProperty(attackingGeneral)) {
                generals[attackingGeneral] = { "wins": 0, "loses": 0 };
            }

            if (!generals.hasOwnProperty(defendingGeneral)) {
                generals[defendingGeneral] = { "wins": 0, "loses": 0 };
            }

            let attackingArmy = result[attackingKingdom][attackingGeneral];
            let defendingArmy = result[defendingKingdom][defendingGeneral];

            if (attackingArmy > defendingArmy) {
                attackingArmy = Math.floor(attackingArmy * 1.1);
                defendingArmy = Math.floor(defendingArmy * 0.9);
                generals[attackingGeneral]["wins"] = generals[attackingGeneral]["wins"] + 1;
                generals[defendingGeneral]["loses"] += 1;
                kingdomsSorted[attackingKingdom]["wins"] += 1;
                kingdomsSorted[defendingKingdom]["losses"] += 1;
            } else if(defendingArmy > attackingArmy) {
                defendingArmy = Math.floor(defendingArmy * 1.1);
                attackingArmy = Math.floor(attackingArmy * 0.9);
                generals[defendingGeneral]["wins"] += 1;
                generals[attackingGeneral]["loses"] += 1;

                kingdomsSorted[defendingKingdom]["wins"] += 1;
                kingdomsSorted[attackingKingdom]["losses"] += 1;
            }

            result[attackingKingdom][attackingGeneral] = attackingArmy;
            result[defendingKingdom][defendingGeneral] = defendingArmy;
        } else {
            continue;
        }
    }

    let winningKingdom = Object.keys(kingdomsSorted).sort((k1, k2) => {
        return kingdomsSorted[k2]["wins"] - kingdomsSorted[k1]["wins"] ||
        kingdomsSorted[k1]["losses"] - kingdomsSorted[k2]["losses"] ||
        k1.localeCompare(k2);
    })[0];

    for (const king in result) {
        if(king === winningKingdom) {
            let sortedGenerals = Object.keys(result[winningKingdom]).sort((g1, g2) => {
                return result[winningKingdom][g2] - result[winningKingdom][g1];
            });
            console.log(`Winner: ${winningKingdom}`);

            for (const gener of sortedGenerals) {
                console.log(`/\\general: ${gener}`);
                console.log(`---army: ${result[winningKingdom][gener]}`);
                for (const iterator in generals) {
                    if(iterator === gener) {
                        let wins = generals[gener]["wins"];
                        let losses = generals[gener]["loses"];
                        console.log(`---wins: ${wins}`);
                        console.log(`---losses: ${losses}`);
                    }                   
                }
            }
        }
    }
}

test(
    [ { kingdom: "Maiden Way", general: "Merek", army: 5000 },
  { kingdom: "Stonegate", general: "Ulric", army: 4900 },
  { kingdom: "Stonegate", general: "Doran", army: 70000 },
  { kingdom: "YorkenShire", general: "Quinn", army: 0 },
  { kingdom: "YorkenShire", general: "Quinn", army: 2000 } ],
[ ["YorkenShire", "Quinn", "Stonegate", "Doran"],
  ["Stonegate", "Ulric", "Maiden Way", "Merek"] ]

);