function figureOf4Squares(number) {
    let result = "";
    let plus = "+";
    let dash = "-";
    let pipe = "|";
    let space = " ";

    let n = Number(number);

    if (!(n >= 2 && n <= 200)){
        return
    }

    result += `${plus}${dash.repeat(n - 2)}${plus}${dash.repeat(n - 2)}${plus}\n`;
    if(n % 2 === 0){
        for (let i = 0; i < Math.floor((n - 1 - 2) / 2); i++) { 
            result += `${pipe}${space.repeat(n - 2)}${pipe}${space.repeat(n - 2)}${pipe}\n`;
        }
        result += `${plus}${dash.repeat(n - 2)}${plus}${dash.repeat(n - 2)}${plus}\n`;
        for (let i = 0; i < Math.floor((n - 1 - 2) / 2); i++) { 
            result += `${pipe}${space.repeat(n - 2)}${pipe}${space.repeat(n - 2)}${pipe}\n`;
        }

    } else {
        for (let i = 0; i < Math.floor((n - 2) / 2); i++) {  
            result += `${pipe}${space.repeat(n - 2)}${pipe}${space.repeat(n - 2)}${pipe}\n`;    
        }
        result += `${plus}${dash.repeat(n - 2)}${plus}${dash.repeat(n - 2)}${plus}\n`;
        for (let i = 0; i < Math.floor((n - 2) / 2); i++) {  
            result += `${pipe}${space.repeat(n - 2)}${pipe}${space.repeat(n - 2)}${pipe}\n`;    
        }
    }

    result += `${plus}${dash.repeat(n - 2)}${plus}${dash.repeat(n - 2)}${plus}`;
    
    console.log(result);
}

figureOf4Squares(2);
//figureOf4Squares(6);