function wordsUppercase(str) {
    let strUpper = str.toUpperCase();

    let words = splitWords();
    
    words = words.filter(w => w != '');
    
    return words.join(', ');

    function splitWords() {
        return strUpper.split(/\W+/);
    }
  } 

wordsUppercase('Hi, how are you?');