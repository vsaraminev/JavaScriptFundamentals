function areaCircle(radius) {
    let area =  Math.PI * Math.pow(radius, 2);
    console.log(area);
    let roundedArea = area.toFixed(2);
    console.log(roundedArea);
}

areaCircle(5);