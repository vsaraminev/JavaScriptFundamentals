function secretData(text) {
    let namesPattern = /(\*[A-Z][A-Za-z]*)(?=\s|$|\.)/g;
    let phonePattern = /(\+[0-9-]{10})(?=\s|$|\.)/g;
    let idPattern = /(\![A-Za-z0-9]+)(?=\s|$|\.)/g;
    let basePattern = /(\_[A-Za-z0-9]+)(?=\s|$|\.)/g;

    for (let match of text) {
        match = match.replace(namesPattern, m => "|".repeat(m.length));
        match = match.replace(phonePattern, m => "|".repeat(m.length));
        match = match.replace(idPattern, m => "|".repeat(m.length));
        match = match.replace(basePattern, m => "|".repeat(m.length));

        console.log(match);
    }
}