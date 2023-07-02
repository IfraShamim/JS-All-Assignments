// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var num = +prompt("Enter any positive interger number", 3.45214);

if (num > 0) {
    document.getElementById("p1").innerHTML = `Program # 01: <br/><br/> number: ${num}`;
    document.getElementById("p1ii").innerHTML = `round off value: ${Math.round(num)}`;
    document.getElementById("p1iii").innerHTML = `floor value: ${Math.floor(num)}`;
    document.getElementById("p1iv").innerHTML = `ceil value: ${Math.ceil(num)}`;
} else {
    num = +prompt("Enter a valid positive interger number", 3.45214);
}

// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var num = +prompt("Enter any negative floating point number", -3.45214);

if (num < 0) {
    document.getElementById("p2").innerHTML = `<br/>Program # 02: <br/><br/> number: ${num}`;
    document.getElementById("p2ii").innerHTML = `round off value: ${Math.round(num)}`;
    document.getElementById("p2iii").innerHTML = `floor value: ${Math.floor(num)}`;
    document.getElementById("p2iv").innerHTML = `ceil value: ${Math.ceil(num)}`;
} else {
    num = +prompt("Enter a valid positive interger number", 3.45214);
}

// 3. Write a program that displays the absolute value of a 
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

var num = -4;
var absValue = Math.abs(num);

document.getElementById("p3i").innerHTML = `<br/>Program # 03: <br/><br/> The absolute value of ${num} is ${absValue}`;

// 4. Write a program that simulates a dice using random() 
// method of JS Math class. Display the value of dice in your 
// browser.:

var random = Math.random();

random = (random * 6) + 1;
random = Math.floor(random);

document.getElementById("p4i").innerHTML = `<br/>Program # 04: <br/><br/> random dice value :   ${random}`;

// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

var random = Math.random();

random = (random * 2) + 1;
random = Math.floor(random);

if (random === 1) {
    document.getElementById("p5i").innerHTML = `<br/>Program # 05: <br/><br/> ${random} <br/> random coin value : Tail`;
}
else {
    document.getElementById("p5i").innerHTML = `<br/>Program # 05: <br/><br/> ${random} <br/> random coin value : Head`;
}

// 6. Write a program that shows a random number between 1 
// and 100 in your browser.

var random = Math.random();

random = (random * 100) + 1;
random = Math.floor(random);

document.getElementById("p6").innerHTML = `<br/>Program # 06: <br/><br/> random number between 1 to 100 is: ${random} `;

// 7. Write a program that asks the user about his weight. Parse 
// the user input and display his weight in your browser. 
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms


// var weight = prompt("What is your weight?");
// var regex = /^([\d.]+)\s*(kgs|kilograms)?$/i;
// var match = weight.match(regex);
// if (match) {
//     var kgWeight = parseFloat(match[1]);
//     if (match[2] && match[2].toLowerCase() === "kilograms") {
//         kgWeight *= 1000;
//     }
//     document.getElementById("p7i").innerHTML = `<br/>Program # 07: <br/><br/> The weight of user is ${kgWeight} kilograms`;
// } else {
//     document.getElementById("p7i").innerHTML = "<br/>Program # 07: <br/><br/> Invalid input!";
// }

var weight = prompt("What is your weight?","58Kilograms");
var kgWeight = weight[0] + weight[1];

document.getElementById("p7i").innerHTML = `<br/>Program # 07: <br/><br/> The weight of user is ${parseFloat(kgWeight)} kilograms`;

// 8. Write a program that stores a random secret number from 
// 1 to 10 in a variable. Ask the user to input a number 
// between 1 and 10. If the user input equals the secret 
// number, congratulate the user.

var random = Math.random();
var secret = +prompt("Please enter a secret number from 1 to 10",6);

random = (random * 10) + 1;
random = Math.floor(random);

if (secret === random) {
    document.getElementById("p8").innerHTML = `<br/>Program # 08: <br/><br/> Bravo! You Won.`;
}else {
    document.getElementById("p8").innerHTML = `<br/>Program # 08: <br/><br/> Opps! you loss, the secret number is: ${random} `;
}