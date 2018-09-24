function distanceOverTime(arr) {
    let speed1 = +arr[0];
    let speed2 = +arr[1];
    let timeSec = arr[2];
    let time = timeSec / 3600;

    let dist1 = speed1 * time;
    let dist2 = speed2 * time;

    console.log(Math.abs(dist1 - dist2) * 1000);
}

distanceOverTime([0, 60, 3600]);
distanceOverTime([11, 10, 120]);