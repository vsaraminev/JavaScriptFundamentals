function f1Race(input) {
    let pilots = [];

    for (const pilot of input[0].split(' ')) {
        pilots.push(pilot);
    }

    for (let i = 1; i < input.length; i++) {
        let tokens = input[i].split(' ');
        let action = tokens[0];
        let pilot = tokens[1];

        switch(action) {
            case "Join":
            pilots.push(pilot);
            break;
            case "Crash":
            let index = pilots.indexOf(pilot);
            if(index > -1) {
                pilots.splice(index, 1);
            }
            break;
            case "Pit":
            if(pilots.includes(pilot)) {
                let fromIndex = pilots.indexOf(pilot);
                let toIndex = fromIndex + 1;
                array_move(pilots, fromIndex, toIndex);
            }
            break;    
            case "Overtake":
            let fromIndex = pilots.indexOf(pilot);
            if(pilots.includes(pilot) && fromIndex > 0) {
                let toIndex = fromIndex - 1;
                array_move(pilots, fromIndex, toIndex);
            }
            break;  
        }
    }

    function array_move(arr, old_index, new_index) {
        if (new_index >= arr.length) {
            var k = new_index - arr.length + 1;
            while (k--) {
                arr.push(undefined);
            }
        }
        arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    }

    console.log(pilots.join(' ~ '));
}

f1Race(["Vetel Hamilton Slavi",
"Pit Hamilton",
"Overtake Vetel",
"Crash Slavi"]);