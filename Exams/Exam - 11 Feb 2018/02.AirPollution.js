function pollution(inputMatrix, actions) {
    let matrix = [];
    let breezeDrop = 15;
    let galeDrop = 20;
    let result = [];

    for (const line of inputMatrix) {
        matrix.push(line.split(" ").map(Number));
    }

    for (const action of actions) {
        let tokens = action.split(" ");
        let command = tokens[0];
        let number = +tokens[1];

        switch (command) {
            case "breeze":
                let matrixRow = matrix[number];
                for (let row = 0; row < matrixRow.length; row++) {
                    matrixRow[row] = Math.max(0, matrixRow[row] - breezeDrop);
                }
                break;
            case "gale":
                let colIndex = number;
                for (let row = 0; row < matrix.length; row++) {
                    matrix[row][colIndex] = Math.max(0, matrix[row][colIndex] - galeDrop);
                }
                break;
            case "smog":
                for (let row = 0; row < matrix.length; row++) {
                    for (let col = 0; col < matrix.length; col++) {
                        matrix[row][col] += number;
                    }
                }
                break;
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix.length; col++) {
            if (matrix[row][col] >= 50) {
                result.push(`[${row}-${col}]`);
            }
        }
    }

    if (result.length > 0) {
        console.log(`Polluted areas: ${result.join(", ")}`);
    } else {
        console.log("No polluted areas");
    }
}

pollution([
    "5 7 72 14 4",
    "41 35 37 27 33",
    "23 16 27 42 12",
    "2 20 28 39 14",
    "16 34 31 10 24",
],
    [
        "breeze 1", "gale 2", "smog 25"
    ]);