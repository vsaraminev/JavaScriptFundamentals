function filterByAge(minAge, name1, age1, name2, age2) {
    let firstPerson = {name: name1, age: age1};
    let secondPerson = {name: name2, age: age2};

    if (firstPerson.age >= minAge){
        console.log(firstPerson);
    }

    if (secondPerson.age >= minAge){
        console.log(secondPerson);
    }
}

filterByAge(12, 'Ivan', 15, 'Asen', 9);
filterByAge(19,'Pesho',119, 'Gosho', 20);