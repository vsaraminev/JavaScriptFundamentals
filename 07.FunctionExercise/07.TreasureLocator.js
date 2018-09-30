function treasureLocator(input) {
    let tuvalu = [1, 3, 1, 3];
    let tokelau = [8, 9, 0, 1];
    let samoa = [5, 7, 3, 6];
    let tonga = [0, 2, 6, 8];
    let cook = [4, 9, 7, 8]; 

    let arr = [];
    arr.push(tuvalu);
    arr.push(tokelau);
    arr.push(samoa);
    arr.push(tonga);
    arr.push(cook);

    for (let i = 0; i < input.length; i+=2) {
        let x = +input[i];
        let y = +input[i+1];
        let pointResult = false;
        let counter = 0;

        for (const array of arr) {
            counter++;
            let xMin = +array[0];
            let xMax = +array[1];
            let yMin = +array[2];
            let yMax = +array[3];

            let result = checkPoint(x, y, xMin, xMax, yMin, yMax);

            if(result) {
                console.log(onIsland(counter));
                pointResult = true;
            }
        }  
        
        if(!pointResult){
            console.log("On the bottom of the ocean");
        }        
     }

    function checkPoint(x, y, xMin, xMax, yMin, yMax) {
       
        if((x >= xMin && x <= xMax) && (y >= yMin && y <= yMax)) {
            return true;
        } else {
            return false;
        }    
     }

     function onIsland(counter) {
        switch(counter) {
            case 1 : return "Tuvalu"; 
            case 2 : return "Tokelau"; 
            case 3 : return "Samoa"; 
            case 4 :  return "Tonga";
            case 5 : return "Cook";
        }
     }
}

treasureLocator([4, 2, 1.5, 6.5, 1, 3]);
treasureLocator([6, 4]);