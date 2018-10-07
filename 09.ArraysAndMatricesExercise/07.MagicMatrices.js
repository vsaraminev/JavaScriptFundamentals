function magicMatrices(matrix) {
 
    let sum = matrix[0].reduce((a, b) => a + b);

   for (let row = 1; row < matrix.length; row++) {
       let currentSum = matrix[row].reduce((a, b) => a + b);
       
       if(sum !== currentSum) {
        return false;
       }
   }

   for (let col = 0; col < matrix[0].length; col++) {
       let colSum = 0;
       
       for (let row = 0; row < matrix.length; row++) {
           colSum += matrix[row][col];           
       }

       if(sum !== colSum) {
           return false;
       }

       return true;
   }
}

console.log(magicMatrices([	
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
   ]));

