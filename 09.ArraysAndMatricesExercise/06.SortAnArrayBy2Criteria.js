function sortAnArray(input) {
    
    input.sort(function(a, b) {return a.length - b.length || a.localeCompare(b)});

    console.log(input.join('\n'));
}

sortAnArray(['alpha', 'beta', 'gamma']);