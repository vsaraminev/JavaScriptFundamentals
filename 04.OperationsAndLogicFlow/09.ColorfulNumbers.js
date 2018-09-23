function colorfulNumbers(number) {
    let result = "";
    result += "<ul>\n";
    let color = "green";
    for (let i = 1; i <= number; i++) {
        if (i % 2 !== 0) {
            color = "green";
        } else {
            color = "blue";
        }           
        result += `  <li><span style='color:${color}'>${i}</span></li>\n`;        
    }

    result += "</ul>";

    console.log(result);
}

colorfulNumbers(10);