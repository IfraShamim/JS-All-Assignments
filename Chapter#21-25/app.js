//  CHAPTER# 21-25
// Q#1
var firstName = prompt("Enter your first name?");
var lastName = prompt("Enter your last name?");
var fullName = alert("Hi! " + firstName + " " + lastName);

// Q#2
let phoneModel = prompt("Please enter your favorite mobile phone model.");
document.write("My favorite phone is: " + phoneModel + "<br>");
document.write("Length of string: " + phoneModel.length + "<br>");

// Q#3
var letterIndex = "Pakistani";
document.write("String: " + letterIndex + "<br>");
document.write("Index of 'n': " + letterIndex.search('n') + "<br>");

// Q#4
var letterIndex = "Hello World";
document.write("String: " + letterIndex + "<br>");
document.write("Index of 'n': " + letterIndex.lastIndexOf('l') + "<br>");

// Q#5
var letterIndex = "Pakistani";
document.write("String: " + letterIndex + "<br>");
document.write("Character at index 3: " + letterIndex.charAt(3) + "<br>");

// Q#6
var firstName = prompt("Enter your first name?");
var lastName = prompt("Enter your last name?");
var fullName = firstName + lastName;
alert("Hi! " + fullName);

// Q#7
var city = "Hyderabad";
document.write("City: " + city + "<br>");
document.write("After replacement: " + city.replace("Hyder", "Islam") + "<br>");

// Q#8
var message = "Ali and Sami are best friends. They play cricket and football together.";
document.write(`Replace the message "and" into "&": <br>` + message.replaceAll("and", "&") + "<br>");

// Q#9
var converts = "472";
document.write("Value: " + converts + "<br>");
document.write("Type: " + typeof (converts) + "<br>");
var convertNum = parseInt(converts);
document.write("Value: " + convertNum + "<br>");
document.write("Type: " + typeof (convertNum) + "<br>");

// Q#10
var input = prompt("Please give any input to convert into capital letters.");
document.write("User Input: " + input + "<br>");
document.write("Upper case: " + input.toUpperCase() + "<br>");

// Q#11
var input = prompt("Please give any input to convert into capital letters.");
document.write("User Input: " + input + "<br>");
function titleCase(string) {
    var sentence = string.toLowerCase().split(" ");
    for (var i = 0; i < sentence.length; i++) {
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    document.write(sentence.join(" "));
    return sentence;
}
document.write("Title case: ");
titleCase(input);

// Q#12
var converts = 35.36;
document.write("Number: " + converts + "<br>");
var convertNum = converts.toString();
var result = convertNum.replace(".", "");
document.write("Result: " + result + "<br>");

// Q#13
const specialSymbols = ['@', '.', ',', '!'];

function isValidUsername(username) {
    for (let i = 0; i < specialSymbols.length; i++) {
        if (username.includes(specialSymbols[i])) {
            return false;
        }
    }
    return true;
}

const userInputs = prompt("Enter a username:");
if (isValidUsername(userInputs)) {
    console.log("Username is valid.");
} else {
    console.log("Please enter a valid username without special symbols [@, ., !].");
}

// Q#14
const A = ["cake", "apple pie", "cookie", "chips", "patties"];

function searchItem(item, arr) {
    const lowerItem = item.toLowerCase();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase() === lowerItem) {
            return true;
        }
    }
    return false;
}

const userInput = prompt("Enter an item to search for:");
if (searchItem(userInput, A)) {
    console.log("Item found in the list!");
} else {
    console.log("Item not found in the list.");
}

// Q#15
function isValidPassword(password) {
    // Check if the password contains both alphabets and numbers
    const hasAlphabet = /[a-zA-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);

    // Check if the password starts with a letter
    const startsWithLetter = /^[a-zA-Z]/.test(password);

    // Check if the password is at least 6 characters long
    const isMinimumLength = password.length >= 6;

    // Validate the password based on the requirements
    if (hasAlphabet && hasNumber && startsWithLetter && isMinimumLength) {
        return true;
    }

    return false;
}

const usersInputs = prompt("Enter a password:");
if (isValidPassword(usersInputs)) {
    console.log("Password is valid.");
} else {
    console.log("Please enter a valid password that meets the specified requirements.");

    console.log("The password must contain both alphabets and numbers, The password must not start with a number , The password must be at least 6 characters long.");
};

// Q#16
var university = "University of Karachi";
var universityArray = university.split("");

console.log(universityArray.join("\n"));

// // Q#17
const usersInput = prompt("Enter a string:");
const lastCharacter = usersInput.slice(-1);

console.log("Last character:", lastCharacter);

// Q#18
const sentence = "The quick brown fox jumps over the lazy dog";
const wordToFind = "the";
const regex = new RegExp(`\\b${wordToFind}\\b`, "gi");
const count = (sentence.match(regex) || []).length;

console.log(`Number of occurrences of "${wordToFind}":`, count);
