// 1. Write a program that displays current date and time in 
// your browser.

alert(new Date());

// 2. Write a program that alerts the current month in words. 
// For example December.

var month = new Date().getMonth();
var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
for (var i = 0; i < monthNames.length; i++) {
    if (i === month) {
        alert("Current month: " + monthNames[i]);
        break;
    }
}

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show 
// Sun.

var day = new Date().getDay();
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
for (var i = 0; i < dayNames.length; i++) {
    if (i === day) {
        alert("Today is " + dayNames[i]);
        break;
    }
}

// 4. Write a program that displays a message “It’s Fun day” if 
// its Saturday or Sunday today.

var day = new Date().getDay();
if (day === 0 || day === 6) {
    alert("It's Fun day");
}
else {
    alert("It's workday");
}

// 5. Write a program that shows the message “First fifteen 
// days of the month” if the date is less than 16th of the month 
// else shows “Last days of the month”.

var date = new Date().getDate();

// console.log(date);
if (date < 16 ) {
    alert("First fifteen days of the month");
}
else {
    alert("Last fifteen days of the month");
}

// 6. Write a program that determines the minutes since 
// midnight, Jan. 1, 1970 and assigns it to a variable that 
// hasn't been declared beforehand. Use any variable you like 
// to represent the Date object.

var d = new Date();
var milliSeconds = d.getTime() / 1000;
var minutes = d.getTime() / (1000 * 60);

alert("Elapsed milliseconds since January 1, 1970: " + milliSeconds);
alert("Elapsed minutes since January 1, 1970: " + minutes);

// 7. Write a program that tests whether it's before noon and 
// alert “Its AM” else “its PM”.

var d = new Date().getHours();

if (d >= 0 && d < 12) {
    alert("Its AM");
}
else {
    alert("Its PM");
}

// 8. Write a program that creates a Date object for the last day 
// of the last month of 2020 and assigns it to variable named 
// laterDate.

var laterDate = new Date("December 31, 2020");

alert(laterDate);

// 9. Create a date object of the starting date of this Ramadan 
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

var now = new Date("june 18, 2015");
now = now.getTime() / (1000 * 60 * 60 * 24);
now = Math.floor(now);
alert(now + " days have passed since 1st Ramadan, 2015");

// 10. Write a program that displays in your browser the 
// seconds that elapsed between the reference date and the 
// beginning of 2015.

alert(`Our reference date ${new Date("January 1, 2015")}, ` + new Date("January 1, 2015").getTime() / 1000 + " seconds had passed since the beginning of 2015");

// 11. Create a Date object for the current date and time. 
// Extract the hours, reset the date object an hour ahead and 
// finally display the date object in your browser

var now = new Date();
var hours = now.getHours();
now.setHours(hours - 1);
alert("current date: " + new Date() + " 1 hours ago, it was" + now);

// 12. Write a program that creates a date object and show the 
// date in an alert box that is reset to 100 years back?

var now = new Date();
var years = now.getFullYear();
now.setFullYear(years - 100);
alert("current date: " + new Date() + " 100 year back, it was" + now);

// 13. Write a program to ask the user about his age. Calculate 
// and show his birth year in your browser.

var age = +prompt("What is your age?","21");

var year = new Date().getFullYear() - age;

alert("Your birth year is " + year);

// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2 
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

var userName = prompt("Enter your username","Naeem Raza");
var billOfMonth = prompt("enter bill of month","January");
var noOfUnits = +prompt("enter no of units of this month","410");
var chargesPerUnit = 16;

var netAmountPayable = noOfUnits * chargesPerUnit;
var latePaymentSurcharges = 350;
var grossAmountPayable = netAmountPayable + latePaymentSurcharges;

document.getElementById("p1").innerHTML = "Program # 14: <br/> <br/> K-Electric Bill <br/>";
document.getElementById("p1ii").innerHTML = `Customer Name: ${userName}`;
document.getElementById("p1iii").innerHTML = `Month: ${billOfMonth}`;
document.getElementById("p1iv").innerHTML = `Number of units: ${noOfUnits}`; 
document.getElementById("p1v").innerHTML = `Charges per unit: ${chargesPerUnit} <br/> <br/>`; 
document.getElementById("p1vi").innerHTML = `Net Amount Payable (within Due Date): ${netAmountPayable}`; 
document.getElementById("p1vii").innerHTML = `Late payment surcharge: ${latePaymentSurcharges}`; 
document.getElementById("p1viii").innerHTML = `Gross Amount Payable (after Due Date): ${grossAmountPayable}`;