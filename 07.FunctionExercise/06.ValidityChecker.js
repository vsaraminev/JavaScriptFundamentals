function validityChecker(input) {
    let x1 = +input[0];
    let y1 = +input[1];
    let x2 = +input[2];
    let y2 = +input[3];
    
   let firstPoint = distanceTo0(x1, y1);
   let secondPoint = distanceTo0(x2, y2);

   if(firstPoint) {
       console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
   } else {
    console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
   }

   if(secondPoint) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }    
    
    if(distanceBetweenPoints) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
   
    function distanceTo0(xcoord, ycoord) {
        let x = Math.abs(xcoord - 0);
        let y = Math.abs(ycoord - 0 );
        let distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
        if(Number.isInteger(distance)) {
            return true;
        } else {
            return false;
        }
    }

    function distanceBetweenPoints(x1, y1, x2, y2) {
        let x = Math.abs(x1 - x2);
        let y = Math.abs(y1 - y2);
        let distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
        if(Number.isInteger(distance)) {
            return true;
        } else {
            return false;
        }
    }
}

//validityChecker([3, 0, 0, 4]);
validityChecker([2, 1, 1, 1]);