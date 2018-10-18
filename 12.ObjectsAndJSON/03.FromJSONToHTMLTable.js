function fromJSONToHTMLTable(input) {
    
    let result = `<table>\n`;
    for (let line of input) {
        line = JSON.parse(line);
        result += '  <tr>\n';
        result += `<th>${key}</th>`;
    }
    result += `</tr>\n`;
    for (let i = 0; i < arr.length; i++) {
        result += `  <tr>`;
        let currentObj = arr[i];
        for (const obj in currentObj) {
            if( currentObj[obj] instanceof String){
                result += `<td>${htmlEscape(currentObj[obj])}</td>`;            
            } else {
                result += `<td>${currentObj[obj]}</td>`;
            }
        }
        result += `</tr>\n`;      
    }

    function htmlEscape(str) {
        return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    result += `</table>`;

    console.log(result);
}

fromJSONToHTMLTable(['{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}']);
//fromJSONToHTMLTable(['{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}']);