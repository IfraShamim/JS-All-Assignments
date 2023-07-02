// 1. Write a custom function power ( a, b ), to calculate the value of 
// a raised to b.

function power(a, b) {
    var result = a;
    for (var i = 1; i < b; i++) {
        result = result * a;
    }
    return `The power of ${a} is: ` + result;
}
alert(power(8, 2));

// 2. Any year is entered through the keyboard. Write a function to 
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, …

function leapYear() {
    var year = +prompt("Please enter a year to check is its leap year or not", "2000");

    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return `The entered year ${year} is a leap year`;
            } else {
                return `The entered year ${year} is not a leap year`;
            }
        } else {
            return `The entered year ${year} is a leap year`;
        }
    } else {
        return `The entered year ${year} is not a leap year`;
    }
}

alert(leapYear());

// 3. If the lengths of the sides of a triangle are denoted by a, b, and 
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

function area(a, b, c) {
    function sOfArea() {
        return s = (a + b + c) / 2;
    }
    var sOA = sOfArea();
    // console.log(sOA);
    var areaOfTriangle = sOA * ((sOA - a) * (sOA - b) * (sOA - c));
    return "The Calculated area of triangle is: " + areaOfTriangle;
}

alert(area(5, 2, 30));

// 4. Write a function that receives marks received by a student in 3 
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction 
// and other are for average and percentage. Call those functions 
// from mainFunction and display result in mainFunction

function mainFunction(s1, s2, s3) {
    var total = 300;
    var obtained = s1 + s2 + s3;
    function percentage() {
        return (obtained / total) * 100;
    }
    function average() {
        return (obtained / 3);
    }
    return "The percentage is: " + Math.floor(percentage()) + " and the average is: " + Math.floor(average());

}
alert(mainFunction(43, 50, 98));

// 5. You have learned the function indexOf. Code your own custom 
// function that will perform the same functionality. You can code 
// for single character as of now.

function indexOfMy(input, character) {
    for (var i = 0; i < input.length; i++) {
        if (input[i] === character) {
            return alert(`The index of ${character} is: ` + i);
            break;
        }
    }
}
indexOfMy("The quick brown fox jumps over the lazy dog", "f");

// 6. Write a function to delete all vowels from a sentence. Assume 
// that the sentence is not more than 25 characters long.


function deleteVowels(s) {

    for (var i = 0; i < 25; i++) {

        if (s[i] === 'a') {
            s = s.replace('a', '');
        }
        else if (s[i] === 'e') {
            s = s.replace('e', '');
        }
        else if (s[i] === 'i') {
            s = s.replace('i', '');
        }
        else if (s[i] === 'o') {
            s = s.replace('o', '');
        }
        else if (s[i] === 'u') {
            s = s.replace('u', '');
        }
    }

    return alert("The updated sentence without vowels: " + s);
}
deleteVowels("Game is over");

// 7. Write a function with switch statement to count the number of 
// occurrences of any two vowels in succession in a line of text. 
// For example, in the sentence
// “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.

function countOccurrences(text) {
    var count = 0;
    var vowels = ['a', 'e', 'i', 'o', 'u'];

    for (var i = 0; i < text.length - 1; i++) {
        var char1 = text.charAt(i).toLowerCase();
        var char2 = text.charAt(i + 1).toLowerCase();

        switch (char1) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                if (vowels.includes(char2)) {
                    count++;
                }
                break;
            default:
                break;
        }
    }

    return alert("Number of occurrences of any two vowels in succession in a line of text is: " + count);
}

countOccurrences("Game is over");

// 8. The distance between two cities (in km.) is input through the 
// keyboard. Write four functions to convert and print this 
// distance in meters, feet, inches and centimeters.

var distance = +prompt("Please enter distance from two cities in kilometers", 140);

function meters() {
    return alert("Distance in meters is: " + (distance * 1000));
}
function feet() {
    return alert("Distance in feet is: " + (distance * 3280.8));
}
function inches() {
    return alert("Distance in inches is: " + (distance * 39370.08));
}
function centimeters() {
    return alert("Distance in centimeters is: " + (distance * 100000));
}
meters();
feet();
inches();
centimeters();

// 9. Write a program to calculate overtime pay of employees. 
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour 
// worked above 40 hours. Assume that employees do not work 
// for fractional part of an hour.

function totalWorkTime(overtime) {
    var workHour = 40;
    var extraWorkHours = overtime - workHour;
    if (overtime > workHour) {
        return alert(`Your overtime is ${extraWorkHours} and your over time payment is: ` + extraWorkHours * 12.00);
    }
}
totalWorkTime(43);

// 10. A cashier has currency notes of denominations 10, 50 and 
// 100. If the amount to be withdrawn is input through the 
// keyboard in hundreds, find the total number of currency notes 
// of each denomination the cashier will have to give to the 
// withdrawer.

function countCurrencyNotes(totalAmount) {
    // let totalAmount = amountInHundreds * 100;
    let num100 = Math.floor(totalAmount / 100);
    let remainingAmount = totalAmount % 100;
    let num50 = Math.floor(remainingAmount / 50);
    remainingAmount = remainingAmount % 50;
    let num10 = Math.floor(remainingAmount / 10);

    console.log(`Number of 100 rupee notes: ${num100}`);
    console.log(`Number of 50 rupee notes: ${num50}`);
    console.log(`Number of 10 rupee notes: ${num10}`);
}

countCurrencyNotes(470);