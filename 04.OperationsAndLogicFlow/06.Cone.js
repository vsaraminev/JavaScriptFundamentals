function cone(radius, height) {
    let surfaceArea = Math.PI * radius * 
                        (radius + Math.sqrt(Math.pow(height, 2) + Math.pow(radius, 2)));
    
    let volume = (Math.PI * Math.pow(radius, 2) * height) / 3;

    console.log(`volume = ${volume}`);
    console.log(`area = ${surfaceArea}`);
}

cone(3, 5);