function messenger(input) {
    let regex = /^<message\s*((?:[a-z]+="[A-Za-z0-9 .]+"\s*)+)>([\s\S]*)<\/message>$/gm;
    let toRegex = /\bto="([A-Za-z0-9 .]+)"/;
    let fromRegex = /\bfrom="([A-Za-z0-9 .]+)"/;
    let match = regex.exec(input);

    let result = `<article>\n`;

    let sender ="";
    let recipient = "";
    let messages = "";

    if(match !== null) {
        let atributesGroup = match[1];

        if(!atributesGroup.match(toRegex) || !atributesGroup.match(fromRegex)) {
            console.log("Missing attributes");
            return;
        }

        sender = atributesGroup.match(fromRegex)[1]; 
        recipient = atributesGroup.match(toRegex)[1];

        messages = match[2];

    } else {
        console.log("Invalid message format");
        return;
    }

    result += `  <div>From: <span class="sender">${sender}</span></div>\n`;
    result += `  <div>To: <span class="recipient">${recipient}</span></div>\n`;
    result += `  <div>\n`;

    for (let message of messages.split('\n')) {
        result += `    <p>${message}</p>\n`;   
    }

    result += `  </div>\n`;
    result += `</article>`;

    console.log(result);
}

//messenger(`<message to="Bob" from="Alice" timestamp="1497254092">Hey man, what's up?</message>`);
//messenger(`<message from="John Doe" to="Alice">Not much, just chillin. How about you?</message>`);
//messenger(`<message from="Alice" timestamp="1497254112">Same old, same old</message>`);

//messenger(`<message to="Bob" from="Alice" timestamp="1497254114">Same old, same old
//Let's go out for a beer</message>`);

//messenger(`<message to="Alice" from="Charlie"><img src="fox.jpg"/></message><meta version="2"/>`);
//messenger(`<message from="Hillary" to="Edward" secret:true>VGhpcyBpcyBhIHRlc3Q</message>`);