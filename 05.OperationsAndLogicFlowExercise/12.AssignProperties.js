function assignProperties(input) {
    let obj ={};
    let key = "";
   for (let i = 0; i < input.length; i++) {
       if(i % 2 === 0) {
            key = [input[i]];
       }

       obj[key] = input[i];
   }
    
    console.log(obj);
}

assignProperties(['name', 'Pesho', 'age', '23', 'gender', 'male']);