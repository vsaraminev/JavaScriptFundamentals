function systemComponents(input) {
    let result = new Map();

    for (let line of input) {
        let tokens = line.split(" | ");
        let system = tokens[0];
        let component = tokens[1];
        let subcomponent =tokens[2];

        if(!result.has(system)) {
            result.set(system, new Map());
        }

        if(!result.get(system).has(component)) {
            result.get(system).set(component, []);
        }

        result.get(system).get(component).push(subcomponent);
    }

    //let test = result[0].length;
    let sortedSystems = [...result.keys()].sort((s1, s2) => {
        let diff = result.get(s2).size - result.get(s1).size;

        if(diff === 0) {
            return s1.toLowerCase().localeCompare(s2.toLowerCase());
        } 

        return diff;
    });

    for (const system of sortedSystems) {
        console.log(system);

        let sortedComponents = [...result.get(system).keys()].sort((c1, c2) => {
            return result.get(system).get(c2).length - result.get(system).get(c2).length;
        })
        for (const component of sortedComponents) {
            console.log(`|||${component}`);

            for (const subCom of result.get(system).get(component)) {
                console.log(`||||||${subCom}`);
            }
        }
    }
}

systemComponents(['SULS | Main Site | Home Page',
'SULS | Main Site | Login Page',
'SULS | Main Site | Register Page',
'SULS | Judge Site | Login Page',
'SULS | Judge Site | Submittion Page',
'Lambda | CoreA | A23',
'SULS | Digital Site | Login Page',
'Lambda | CoreB | B24',
'Lambda | CoreA | A24',
'Lambda | CoreA | A25',
'Lambda | CoreC | C4',
'Indice | Session | Default Storage',
'Indice | Session | Default Security']
)