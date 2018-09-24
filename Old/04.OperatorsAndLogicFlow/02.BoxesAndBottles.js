function calculateBoxes(bottles, boxCapacity) {
    return Math.ceil(bottles / boxCapacity);
}

console.log(calculateBoxes(20, 5));
console.log(calculateBoxes(15, 7));
console.log(calculateBoxes(5, 10));