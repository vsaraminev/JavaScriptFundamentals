function findOccurrences(text, word) {

    text = text.toLowerCase();

    let index = text.indexOf(word);

    let counter = 0;

    while (index > -1) {
        counter++;
        index = text.indexOf(word, index + 1);
    }

    console.log(counter);
}

//findOccurrences('The waterfall was so high, that the child couldn’t see its peak.', 'the');
//findOccurrences('How do you plan on achieving that? How? How can you even think of that?', 'how');
findOccurrences('There was one. Therefore I bought it. I wouldn’t buy it otherwise.', 'there');