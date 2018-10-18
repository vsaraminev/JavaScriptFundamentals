function townstoJSON(input) {
    let keys = input.shift().split(/\s*\|\s*/).filter(w => w!=='');

    let result = [];

    for (let i = 0; i < input.length; i++) {
        let obj = {};
        let [town, lat, long] = input[i].split(/\s*\|\s*/).filter(w => w!=='');
        obj[keys[0]] = town;
        obj[keys[1]] = +lat;
        obj[keys[2]] = +long;
        result.push(obj);
    }

    console.log(JSON.stringify(result));
}

townstoJSON([
'| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |'
]);