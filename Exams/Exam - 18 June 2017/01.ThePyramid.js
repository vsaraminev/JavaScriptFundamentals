function pyramid(size, increment) {
    let pyramidRows = Math.ceil(size / 2);

    let stone = 0;
    let marble = 0;
    let lapis = 0;

    for (let i = 1; i <= pyramidRows - 1; i++) {
        let currentStone = Math.pow(size -2, 2);
        stone += currentStone;
        if(i % 5 === 0) {
            lapis += Math.pow(size, 2 ) - currentStone;
        } else {
            marble += Math.pow(size, 2 ) - currentStone;
        }
        size -= 2;
    }

    let gold = Math.pow(size, 2);

    console.log(`Stone required: ${Math.ceil(stone * increment)}`);
    console.log(`Marble required: ${Math.ceil(marble * increment)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis * increment)}`);
    console.log(`Gold required: ${Math.ceil(gold * increment)}`)
    console.log(`Final pyramid height: ${Math.floor(pyramidRows * increment)}`)
}

//pyramid(11, 1);
//pyramid(11, 0.75);
//pyramid(12, 1);
pyramid(23, 0.5);