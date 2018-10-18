function gladiatorInventory(input) {
    let inventory = input.shift().split(' ');

    for (let i = 0; i < input.length; i++) {

        let tokens = input[i].split(' ');
        
        let currentCommand = tokens[0];

        if(currentCommand === 'Fight!') {
            break;
        }

        let equipment ='';
        let upgrade = '';
        
        if(currentCommand === 'Upgrade') {

            let upgradeTokens = tokens[1].split('-');
            equipment = upgradeTokens[0];
            upgrade = upgradeTokens[1];
        } else {
            equipment = tokens[1];
        } 

        let isAvailable = inventory.includes(equipment);

        switch(currentCommand) {
            case 'Buy':
            if(!isAvailable){
                inventory.push(equipment);
            }
            break;
            case 'Trash':
            if(isAvailable){
                let index = inventory.indexOf(equipment);
                if(index > -1) {
                    inventory.splice(index, 1);
                }
            }
            break;
            case 'Repair' :
            if(isAvailable){
                let index = inventory.indexOf(equipment);
                if(index > -1) {
                    inventory.splice(index, 1);
                    inventory.push(equipment);
                }
            } 
            break;
            case 'Upgrade':
            if(isAvailable){
                let index = inventory.indexOf(equipment);
                let insertAtIndex = index + 1;
                let upgradeToInsert = equipment + ':' + upgrade;
                inventory.splice( insertAtIndex, 0, upgradeToInsert);
            } 
            break;
        }
    }

    console.log(inventory.join(' '));
}

gladiatorInventory(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel', 'Fight!']);
gladiatorInventory(['SWORD Shield Spear','Trash Bow', 'Repair Shield', 'Upgrade Helmet-V', 'Fight!']);