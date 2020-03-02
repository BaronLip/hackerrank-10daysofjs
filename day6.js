// ---DATES:---
// Acceptable formats for Date.parse():
// 1. MM/DD/YYYY => 04/25/2013 
// 2. Month Day, Year => April 25, 2013

function getDayName(dateString){
    let dayName;
    let date = new Date(dateString); // Creates a date format.
    let dayNumber = date.getDay(); // Returns a number representing the day of the week. 

    switch(dayNumber) {
        case 0:
            dayName = "Sunday";
            break;
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
        default:
            dayName = "This isn't working."
    }

    console.log(dayName)
}
getDayName(08/25/2019)

// ---BITWISE OPERATORS:---
// This challenge is written incredibly complicated...not sure what it's asking for. 
