function kompot(input) {

    let totalPeachWeight = 0;
    let totalCherryWeight = 0;
    let totalPlumWeight = 0;
    let rakiaWeight = 0;

    let peachWeight = 0.14;
    let cherryWeight = 0.009;
    let plumWeight = 0.020;

    let peachesPerKompot = 2.5;
    let cherriesPerKompot = 25;
    let plumpsPerKompot = 10;

    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(' ');
        let product = tokens[0];
        let weight = +tokens[1];

        switch(product) {
            case "peach" : 
                totalPeachWeight += weight;
                break;
            case "cherry" :
                totalCherryWeight += weight;
                break;
            case "plum" :
                totalPlumWeight += weight;
                break;
            default : 
                rakiaWeight += weight; 
                break;
        }
    }

    let peaches = totalPeachWeight / peachWeight;
    let peachKompots = Math.floor(peaches / peachesPerKompot);

    let cherries = totalCherryWeight / cherryWeight;
    let cherryKompots = Math.floor(cherries / cherriesPerKompot);

    let plumps = totalPlumWeight / plumWeight;
    let plumpKompots = Math.floor(plumps / plumpsPerKompot);

    let rakia = rakiaWeight * 0.2;

    console.log(`Cherry kompots: ${cherryKompots}`);
    console.log(`Peach kompots: ${peachKompots}`);
    console.log(`Plum kompots: ${plumpKompots}`);
    console.log(`Rakiya liters: ${rakia.toFixed(2)}`);
}

kompot(['cherry 1.2',
 'peach 2.2', 
 'plum 5.2',
 'peach 0.1',
 'cherry 0.2', 
'cherry 5.0', 
'plum 10',
'cherry 20.0' ,
'papaya 20' ]);

kompot([   'apple 6',
'peach 25.158',
'strawberry 0.200',
'peach 0.1',
'banana 1.55',
'cherry 20.5',
'banana 16.8',
'grapes 205.65'
,'watermelon 20.54'
]);