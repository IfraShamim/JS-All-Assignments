// 1. Write a function that displays current date & time in your 
// browser.

function display() {
    alert(new Date());
}
display();

// 2. Write a function that takes first & last name and then it 
// greets the user using his full name.

function greets() {
    var firstName = prompt("Enter your first name", "Naeem");
    var lastName = prompt("Enter your last name", "Raza");

    alert("Hello, " + firstName + " " + lastName);
}
greets();

// 3. Write a function that adds two numbers (input by user) 
// and returns the sum of two numbers.

function calculate() {
    var n1 = +prompt("Enter your first number", "1");
    var n2 = +prompt("Enter your 2nd number", "9");

    return n1 + n2;
}
alert("The sum of two numbers is: " + calculate());

// 4. Calculator:
// Write a function that takes three arguments num1, num2 
// & operator & compute the desired operation. Return and 
// show the desired result in your browser.

function calculator() {
    var n1 = +prompt("Enter your first number", "1");
    var n2 = +prompt("Enter your 2nd number", "9");
    var n3 = prompt("Enter operator for operation: ", "+");

    switch (n3) {
        case "+":
            return n1 + n2;
            break;
        case "-":
            return n1 - n2;
            break;
        case "*":
            return n1 * n2;
            break;
        case "/":
            return n1 / n2;
            break;
        case "%":
            return n1 % n2;
            break;
        default:
            return "Enter valid operator like: +,-,*,/,%";
    }
}
alert("Computed result is: " + calculator());

// 5. Write a function that squares its argument.

function square(n) {
    return "The square of given number is: " + n * n;
}

alert(square(5));

// 6. Write a function that computes factorial of a number.

function factorial() {
    var number = +prompt("Enter a number to compute the factorial", "5");
    var result = number;
    for (var i = number; i > 1; i--) {
        result = result * (i - 1);
        console.log(result);
    }
    alert("The Factorial of given number is " + result);
}
factorial();

// 7. Write a function that take start and end number as inputs 
// & display counting in your browser.

function count(start, end) {
    for (var i = start; i <= end; i++) {
        console.log(i);
    }
}
count(1, 10);

// 8. Write a nested function that computes hypotenuse of a 
// right angle triangle. 
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

function calculateHypotenuse() {
    var base = +prompt("enter base value of right angle triangle", "30");
    var perpendicular = +prompt("enter perpendicular value of right angle triangle", "10");

    function square(n) {
        return n * n;
    }
    return "Hypotenuse of a right angle triangle is: " + (square(base) + square(perpendicular));
}
alert(calculateHypotenuse());

// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

function area(width, height) {
    alert("Area of rectangle is: " + (width * height));
}

var height = 32;
area(24, height);

// 10. Write a JavaScript function that checks whether a passed 
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as 
// forward, e.g., madam.

function isPalindrome() {
    var palindrome = prompt("Please enter a palindrome", "madam");
    palindrome = palindrome.toLowerCase();
    var reverse = palindrome.split('').reverse().join('');
    console.log(reverse);
    if (reverse === palindrome) {
        return "The given string " + palindrome + " is a palindrome.";
    }
    else {
        return "The given string " + palindrome + " is not a palindrome.";
    }
}

alert(isPalindrome());

// 11. Write a JavaScript function that accepts a string as a 
// parameter and converts the first letter of each word of the 
// string in upper case. 
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

function capatalizedString(string) {
    var words = string.split(" ");

    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    return words.join(" ");
}

alert(capatalizedString("the quick brown fox"));

// 12. Write a JavaScript function that accepts a string as a 
// parameter and find the longest word within the string. 
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'


function longestString(string) {
    var words = string.split(" ");
    var maxLength = words[0];

    for (var i = 0; i < words.length - 1; i++) {

        if (words[i].length < words[i + 1].length) {
            maxLength = words[i + 1];
        }

    }
    if (words[words.length - 1].length > maxLength.length) {
        maxLength = words[words.length - 1];
    }

    return maxLength;
}

alert(longestString("Web Development tutorial"));

// 13. Write a JavaScript function that accepts two arguments, a 
// string and a letter and the function will count the number of occurrences of the specified letter within the string. 
// Sample arguments : 'JSResourceS.com', 'o'

function findChar(n1, n2) {
    var n1 = n1.toLowerCase();
    var count = 0;
    for (var i = 0; i < n1.length; i++) {
        if (n1.charAt(i) === n2) {
            ++count;
        }
    }
    return "The occurrence of " + n2 + " is " + count;
}

alert(findChar("Naeem Raza", "a"));

// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using 
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output 
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area 
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2

function calcCircumference(r) {
    var π = 3.14159265;
    return "Circumference of circle: " + 2 * π * r;
}

alert(calcCircumference(5.67));


function calcArea(r) {
    var π = 3.14159265;
    return "Area of circle: " + π * r * r;
}
alert(calcArea(5.67));