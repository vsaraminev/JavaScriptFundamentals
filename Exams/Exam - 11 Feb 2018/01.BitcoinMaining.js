function mining(input) {
    let sumGrams = 0;
    let dayOfFirstPur = 0;
    for (let i = 0; i < input.length; i++) {
        let currentGrams = +input[i];

        if((i+1) % 3 === 0 && i !== 0) {
            currentGrams *= 0.7;
        }
        
        sumGrams += currentGrams;

        if((sumGrams * 67.51) >=11949.16 && dayOfFirstPur === 0 ) {
            dayOfFirstPur = i +1;
        }
    }

    let sumLv = sumGrams * 67.51;
    let bitcoins = Math.floor(sumLv / 11949.16);
    let restMoney = sumLv - bitcoins * 11949.16;
    console.log(`Bought bitcoins: ${bitcoins}`);
    if(dayOfFirstPur > 0 ) {
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstPur}`);
    }
    console.log(`Left money: ${restMoney.toFixed(2)} lv.`);
}

//mining([100, 200, 300]);
//mining([50, 100]);
mining([3124.15, 504.212, 2511.124]);