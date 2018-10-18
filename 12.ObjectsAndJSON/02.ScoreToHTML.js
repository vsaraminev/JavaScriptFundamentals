function scoreToHTML(input) {
 let arr = JSON.parse(input);
 let result = '<table>\n';
 result += '  <tr><th>name</th><th>score</th></tr>\n';
 for (const obj of arr) {
     result += `  <tr><td>${htmlEscape(obj.name)}</td><td>${obj.score}</td></tr>\n`
 }

 function htmlEscape(str) {
     return str.replace(/&/g, '&amp;')
     .replace(/</g, '&lt;')
     .replace(/>/g, '&gt;')
     .replace(/"/g, '&quot;')
     .replace(/'/g, '&#39;')
 }

 result += '</table>';

 console.log(result);
}   

scoreToHTML('[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]');