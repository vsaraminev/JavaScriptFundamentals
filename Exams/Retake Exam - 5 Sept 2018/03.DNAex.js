function dnaEx(input) {

    let result = {};

    for (let i = 0; i < input.length; i++) {
        let currentLine = input[i];

        if(currentLine === 'Stop!') {
            break;
        } else {

            let match = currentLine.match(/([A-Z,a-z,!,@,#,?,$]+)=(\d+)--(\d+)<<([A-Za-z]+)/);

            if(match) {
                let nameOfGene = match[1];
                let test = currentLine.split('=')[0];
                if(test === nameOfGene) {
                    let lettersCount = nameOfGene.match(/[A-Za-z]+/g).join('').length;
               let count = Number(match[2]);
               let organism = match[4];  
               let genesCount = Number(match[3]);  

               if(lettersCount === count) {
                   if(!result.hasOwnProperty(organism)) {
                       result[organism] = 0;
                    }
                   result[organism] += genesCount; 
                }  
            }
                        
            }   
        }     
    }

    let sortedOrganism = Object.keys(result).sort((o1,o2) => {
        let diff = result[o2] - result[o1];

        return diff;
    });
    for (const organism of sortedOrganism) {
        console.log(`${organism} has genome size of ${result[organism]}`);
    }
}

dnaEx([
'!@ру?би#=4--57<<polecat',
'?do?@#ri#=4--89<<polecat',
'=12<<cat',
'!vi@rus?=2--142',
'@pa!rcu>ba@cteria$=13--234<<mouse',
'?!cur##viba@cter!!=11--680<<cat',
'Stop!']);