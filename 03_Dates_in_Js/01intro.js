// Date objects are static.

/*
The JavaScript Date object is a built-in way to work with dates and times—like today’s date, specific times,
or calculating durations. Here’s a quick rundown in simple terms:
*/

const d = new Date();
console.log(d);

// Get Full year
console.log(d.getFullYear());
// Get Month
console.log("The Month of the Year: ", d.getMonth() + 1);
switch (d.getMonth()) {
    case 0:
        console.log("January");
        break;
    case 1:
        console.log("Febuary");
        break;
    case 2:
        console.log("March");
        break;
    case 3:
        console.log("April");
        break;
    case 4:
        console.log("May");
        break;
    case 5:
        console.log("June");
        break;
    case 6:
        console.log("July");
        break;
    case 7:
        console.log("August");
        break;
    case 8:
        console.log("September");
        break;
    case 9:
        console.log("October");
        break;
    case 10:
        console.log("November");
        break;
    case 11:
        console.log("December");
        break;

    default: break;
}
// The Counting of Month Always starts with 0 like Jan -> 0.

// Get the Date
console.log("The Date of the month: ", d.getDate());

// Get the Day
console.log("The Day of the Week: ", d.getDay());
switch (d.getDay()) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        break;
}
// 0 day number refers to Sunday and 6 refers to Saturday.


// Get Hours
console.log(d.getHours());
// Specify hours in numbers like 0-24

// Get Minutes
console.log(d.getMinutes());

// Get Time
console.log(d.getTime().toString());