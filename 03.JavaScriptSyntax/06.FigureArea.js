function area(w, h, W, H) {
    let firstArea = w * h;
    let secondArea = W * H;

    let jointArea =Math.min(W, w) * Math.min(H, h);

    console.log(firstArea + secondArea - jointArea);
}

area(2, 4, 5, 3);
area(5, 5 ,5 ,5);
area(13, 2,5,8);