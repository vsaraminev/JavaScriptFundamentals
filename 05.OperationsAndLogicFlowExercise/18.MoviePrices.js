function moviePrices(input) {
    let inputTitle = input[0].toLowerCase();
    let inputDay = input[1].toLowerCase();

    if(inputTitle === "the godfather" ) {
        switch(inputDay) {
            case "monday": return ticketPrice = 12;
            case "tuesday": return ticketPrice = 10;
            case "wednesday": return ticketPrice = 15;
            case "thursday": return ticketPrice = 12.50;
            case "friday": return ticketPrice = 15;
            case "saturday": return ticketPrice = 25;
            case "sunday": return ticketPrice = 30;
            default :
            return "error";
        }
    } else if(inputTitle ==="schindler's list") {
        switch(inputDay) {
            case "monday": 
            case "tuesday": 
            case "wednesday": 
            case "thursday": 
            case "friday": 
            return ticketPrice = 8.50;
            case "saturday": 
            case "sunday": 
            return ticketPrice = 15;
            default :
            return "error";
        }
    } else if(inputTitle === "casablanca") {
        switch(inputDay) {
            case "monday": 
            case "tuesday": 
            case "wednesday": 
            case "thursday": 
            case "friday": 
            return ticketPrice = 8;
            case "saturday": 
            case "sunday": 
            return ticketPrice = 10;
            default :
            return "error";
        }
    } else if(inputTitle === "the wizard of oz") {
        switch(inputDay) {
            case "monday": 
            case "tuesday": 
            case "wednesday": 
            case "thursday": 
            case "friday": 
            return ticketPrice = 10;
            case "saturday": 
            case "sunday": 
            return ticketPrice = 15;
            default :
            return "error";
        }
    } else {
        return "error";
    }
}

//console.log(moviePrices(['The Godfather', 'Friday']));
//console.log(moviePrices(['SoftUni', 'Nineday']));
//console.log(moviePrices(['THE GODFATHER', 'SUNDAY']));
console.log(moviePrices(['The Godfather', 'Sofia']));