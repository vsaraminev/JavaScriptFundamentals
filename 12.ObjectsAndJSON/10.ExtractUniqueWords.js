function extractUniqueWords(input) {
    let set = new Set();

    for (let i = 0; i < input.length; i++) {
        let words = input.join(' ').toLowerCase().split(/[^\w]+/).filter(w => w!== '');
        for (const word of words) {
            set.add(word);
        }
    }

  console.log(Array.from(set).join(', '));
}

extractUniqueWords([
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis hendrerit dui.', 
'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.',
'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.', 
'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.',
'Morbi in ipsum varius, pharetra diam vel, mattis arcu.', 
'Integer ac turpis commodo, varius nulla sed, elementum lectus.', 
'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.'
]);