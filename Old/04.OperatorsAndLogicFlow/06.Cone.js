function coneVolumeAndSurface(radius, height) {
    let volume = (Math.PI * Math.pow(radius, 2) * height) / 3;
    console.log("volume = " + volume);

    let surface = Math.PI * radius * (radius + Math.sqrt(Math.pow(height, 2) + Math.pow(radius, 2)));
    console.log("area = " + surface);
}

coneVolumeAndSurface(3, 5);
coneVolumeAndSurface(3.3, 7.8);