function findOccurrences (text, targetWord) {
    
    let counter = 0;

    let regex = new RegExp(`\\b${targetWord}\\b`, "gi");

    let match = regex.exec(text);

    while( match !== null) {
        counter++;
        match = regex.exec(text);
    }

    console.log(counter);
}  


findOccurrences('The waterfall was so high, that the child couldn’t see its peak.', 'the');
findOccurrences('Тhere was one. Therefore I bought it. I wouldn�t buy it otherwise.', 'there');