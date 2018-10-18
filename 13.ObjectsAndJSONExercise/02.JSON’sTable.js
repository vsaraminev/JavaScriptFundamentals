function JSONsTable(input) {
    let result = `<table>\n`;

    for (let i = 0; i < input.length; i++) {
        result += `   <tr>\n`;
        let obj = JSON.parse(input[i]);
        for (const param in obj) {
            result += `      <td>${obj[param]}</td>\n`;
        }
        result += `   <tr>\n`;
    }

    result +=`</table>`;

    console.log(result);
}

JSONsTable([
'{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}'
]);