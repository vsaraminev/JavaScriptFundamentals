function ancientVSMemory(input) {

        let nums = input.join(' ').split(' ');

        for (let i = 0; i < nums.length; i++) {
            if(nums[i] === '32656' && nums[i+1] === '19759' && nums[i+2] === '32763') {
                let count = +nums[i+4];

                let result = nums.slice(i +6, i + 6 + count);
               
                console.log(result.map(sym => String.fromCharCode(sym)).join(''));                 
            }       
        }
}


ancientVSMemory([
    '32656 19759 32763 0 5 0 80 101 115 104 111 0 0 0 0 0 0 0 0 0 0 0',
    '0 32656 19759 32763 0 7 0 83 111 102 116 117 110 105 0 0 0 0 0 0 0 0'
]);