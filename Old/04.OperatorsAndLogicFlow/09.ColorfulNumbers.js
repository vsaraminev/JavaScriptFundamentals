function colorfulNumbers(number) {
    let result = "<ul>\n";
    let color = "green";
    for (let i = 1; i <= number; i++) {
        color = i % 2 === 0 ? "blue" : "green";

        result += `<li><span style='color:${color}'>${i}</span></li>\n`;
    }

    result +="</ul>";

    console.log(result);
}

colorfulNumbers(5);