function maxAge(age, firstName, firstAge, secondName, secondAge) {
    let firstPerson = {name: firstName, age: firstAge};
    let secondPerson = {name: secondName, age: secondAge};
    
    if (firstPerson.age >= age) {
        console.log(firstPerson)
    }

    if (secondPerson.age >= age) {
        console.log(secondPerson)
    }
}

maxAge(12, 'Ivan', 15, 'Asen', 9)