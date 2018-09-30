function roadRadar(input) {
    let currentSpeed = input[0];
    let area = input[1];
    let speedLimit = 0;
   
    switch(area) {
       case "motorway": 
         speedLimit = 130;
         break;
       case "interstate":  
        speedLimit = 90; 
         break;
       case "city":  
        speedLimit = 50;
         break;
       case "residential": 
         speedLimit = 20; 
         break;
    }
   
       if(currentSpeed - speedLimit > 40) {
           console.log("reckless driving");
       } else if (currentSpeed - speedLimit > 20) {
           console.log("excessive speeding");
       } else if(currentSpeed - speedLimit > 0) {
           console.log("speeding");
       }
   }

roadRadar([40, 'city']);
roadRadar([21, 'residential']);
roadRadar([120, 'interstate']);
roadRadar([200, 'motorway'])