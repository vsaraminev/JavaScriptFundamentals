function chessBoard(number) {
    let result = "";
    result += `<div class="chessboard">\n`;
    for (let row = 0; row < number; row++) {
        result += "  <div>\n";
        let color = (row % 2 === 0) ? 'black' : 'white';
            for (let col = 0; col < number; col++) {
                 result += `    <span class="${color}"></span>\n`;
                color = (color === 'white') ? 'black' : 'white';
            } 

        result +="  </div>\n";
    }

    return result + "</div>";
}

console.log(chessBoard(3));