function gladiatorExpenses(num, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    
    let helmet = Math.floor(num/2);
    let sword =Math.floor(num/3)
    let shield =Math.floor(num/6);
    let armor = Math.floor(shield/2);
   
     let helmetTotal = helmet*helmetPrice;
      let swordTotal = sword*swordPrice;
      let shieldTotal = shield*shieldPrice;
      let armorTotal = armor*armorPrice;
     
      let total = helmetTotal + swordTotal + shieldTotal + armorTotal;
     
      console.log(`Gladiator expenses: ${total.toFixed(2)} aureus `)
}

gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.50, 21.50, 40, 200);