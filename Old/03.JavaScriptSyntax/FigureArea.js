function area(w, h, W, H) {
    let firstArea = w * h;
    let secondArea = W * H;
    let commonArea = Math.min(w, W) * Math.min(h, H);

    console.log(firstArea + secondArea - commonArea);
}

area(2, 4, 5, 3);