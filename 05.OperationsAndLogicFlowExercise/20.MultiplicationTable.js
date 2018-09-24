function multiplicationTable(number) {
    let result = "";
    result+= '<table border="1">\n';
    result += "<tr>";
    result += "<th>x</th>";
    for (let i = 1; i <= number; i++) {
        result+= `<th>${i}</th>`;    
    }
    result += "</tr>\n";

    for (let row = 1; row <= number; row++) { 
        result += "<tr>";
        result += `<th>${row}</th>`;
        let num = row;
        for (let col = 0; col < number; col++) {    
            result += `<td>${num}</td>`;
            num +=row;
        }
        result += "</tr>\n";
    }

    result += "</table>";

    console.log(result);
}

multiplicationTable(5);