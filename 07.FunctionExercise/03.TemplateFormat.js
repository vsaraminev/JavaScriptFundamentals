function templateFormat(input) {
    let result = "";
    result += `<?xml version="1.0" encoding="UTF-8"?>\n`;
    result +="<quiz>\n";

    for (let i = 0; i < input.length; i+=2) {
        let question = input[i];
        let answer = input[i+1];
        
        result += 
        `<question>
        ${question}
      </question>\n`;

      result += `<answer>
      ${answer}
    </answer>\n`;
    }

    result += "</quiz>";

    console.log(result);
}

templateFormat([
    "Who was the forty-second president of the U.S.A.?",
    "William Jefferson Clinton"]);