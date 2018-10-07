function escaping(input) {
    let result = `<ul>\n`;

    for (const line of input) {
        result +=`  <li>${htmlEscape(line)}</li>\n`;
    }

    result += `</ul>`;

    console.log(result);

    function htmlEscape(str) {
        return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}

escaping(['<b>unescaped text</b>', 'normal text']);