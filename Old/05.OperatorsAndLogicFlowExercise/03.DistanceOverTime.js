function distanceOverTime(input) {
    let timeHour = input[2] / 3600;
    let firstDistance = input[0] * timeHour;
    let secondDistance = input[1] * timeHour;

    let distance = Math.abs(firstDistance - secondDistance) * 1000;

    console.log(distance);
}

distanceOverTime([0, 60, 3600]);