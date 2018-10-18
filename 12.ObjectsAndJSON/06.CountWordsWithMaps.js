function countWordsWithMaps(input) {
    let words = input.join(' ')
    .toLowerCase()
    .split(/[^\w]+/)
    .filter(w => w!== '');

    let map = new Map();

    for (const word of words) {
        if(!map.has(word)) {
            map.set(word, 0);
        }

        map.set(word, map.get(word) + 1);
    }

    let sortedKeys = Array.from(map.keys()).sort();

    for (const value of sortedKeys) {
        console.log(`'${value}' -> ${map.get(value)} times`);
    }
}

countWordsWithMaps(['Far too slow, you\'re far too slow.']);