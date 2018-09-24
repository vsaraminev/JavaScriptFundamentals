function roadRadar(input) {
    let speed = input[0];
    let area = input[1];
    let speedLimit = getLimit(area);
    let result = "";

  function getLimit(area) {
      switch (area) {
          case "motorway":
              return 130;
          case "interstate":
              return 90;
          case "city":
              return 50;
          case "residential":
              return 20;
      }
  }

    if (speed <= speedLimit){
        result = "";
    }

    if (speed + 20 <= speedLimit){
        result = "speeding"
    } else if(speed + 40 <= speedLimit) {
        result = "excessive speeding";
    } else {
        result = "reckless driving";
    }
}

roadRadar([40, 'city']);