// ----------------- Chapter#9-11(User Input And Conditional Statement)
// ----- Q#01
let cityName = prompt("Please enter City Name");
if (cityName == "Karachi" || cityName == "karachi") {
    alert("Welcome to city of lights");
}

// ----- Q#02
let userGender = prompt("Please enter your gender");
if (userGender == "Male" || userGender == "male") {
    alert("Good Morning Sir");
}
else if (userGender == "Female" || userGender == "female") {
    alert("Good Morning Ma'am");
}
else {
    alert("you are'nt eligible");
}

// ----- Q#03
let signalColor = prompt("Please enter input of Signal Color");
if (signalColor == "Red" || signalColor == "red") {
    alert("Must Stop");
}
else if (signalColor == "Yellow" || signalColor == "yellow") {
    alert("Ready to move");
}
else if (signalColor == "Green" || signalColor == "green") {
    alert("Move now");
}
else {
    alert("This is'nt a Signal Color");
}

// ----- Q#04
let fuel = prompt("Please enter input remaining fuel in car");
if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}
else {
    alert("No need to refill");
}

// ----- Q#05
let a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
let b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
let c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}
if ("car" < "cat") {
    alert("car is smaller than cat");
}

// ----- Q#06
document.write("<h3>MARKS SHEET</h3><br>");
var t_math = +prompt("Plz Enter your subject Math Total Number ");
var math = +prompt("Plz Enter your subject Math Obtained Number ");
var t_english = +prompt("Plz Enter your subject English Total Number ");
var english = +prompt("Plz Enter your subject English obtained Number ");
var t_urdu = +prompt("Plz Enter your subject Urdu Total Number ");
var urdu = +prompt("Plz Enter your subject Urdu obtained Number ");
var total_marks =(t_math + t_english + t_urdu);
var obtained_marks =(math + english + urdu);

var percentage = (obtained_marks / total_marks) * 100 ;
document.write("Percentage: "+percentage+"% <br>");
if(percentage >= 80){
    document.write(" Grade: A-one <br>");
    document.write("Remarks: Excellent <br>");

}
else if(percentage >= 70){
    document.write("Grade: A <br>");
    document.write("Remarks: Good <br>");
}
else if(percentage >= 60){
    document.write("Grade: B <br>");
    document.write("Remarks: You need to improve <br>");
}
else{
    document.write("Grade: Fail <br>");
    document.write("Remarks: Sorry <br>");
}

// ----- Q#07
var secretNumber = 6;
var userGuess = +prompt(" Enter Any Number 1 To 10");
if (secretNumber == userGuess){
document.write("Bingo! Correct answer<br>")
}
else if (secretNumber == userGuess -1 || secretNumber == userGuess +1){
document.write("Close enough to the correct answer<br>")
}
else{
document.write("Your secret Number Is Wrong<br>")
}

// ----- Q#08
let number = prompt("Please enter any number to check wheather it is divisible by 3 or not?");
let divisible = number % 3;
if( divisible == 0){
    alert("This entered number is divisible by 3.");
}
else if(divisible !== 0){
    alert("This entered number is'nt divisible by 3.");
}
else{
    alert("It's not any number..");
}

// ----- Q#09
let givenNumber = prompt("Please enter any number to check wheather it is even or odd?");
let evenNumber = givenNumber % 2;
let oddNumber = givenNumber % 3;
if(evenNumber == 0){
    alert("This entered number is even.");
}
else if(oddNumber == 0){
    alert("This entered number is odd.");
}
else{
    alert("It's not any number..");
}

// ----- Q#10
let temperature = prompt("Please enter the degree of the temperature.");
if( temperature > 40){
  alert("It is too hot outside.");
}
else if(temperature > 30){
    alert("The Weather today is Normal.");
}
else if(temperature > 20){
    alert("Today’s Weather is cool.”");
}
else if(temperature > 10){
    alert("OMG! Today’s weather is so Cool.”");
}
else{
    alert("It's very cold.");
}

// ----- Q#11
let firstNum = prompt("Enter first number.");
let secondNum = prompt("Enter second number.");
let operators = prompt("Select arthimatic operators to performed on both numbers. (+,-,*,/,%)");
if(operators == '+'){
    let addNum = firstNum + secondNum;
    document.write("Result : "+ firstNum + "+" + secondNum + "=" + addNum);
}
else if(operators == '-'){
    let subNum = firstNum - secondNum;
    document.write("Result : "+ firstNum + "-" + secondNum + "=" + subNum);
}
else if(operators == '*'){
    let mulNum = firstNum * secondNum;
    document.write("Result : "+ firstNum + "*" + secondNum + "=" + mulNum);
}
else if(operators == '/'){
    let divNum = firstNum / secondNum;
    document.write("Result : "+ firstNum + "/" + secondNum + "=" + divNum);
}
else if(operators == '%'){
    let modNum = firstNum % secondNum;
    document.write("Result : "+ firstNum + "%" + secondNum + "=" + modNum);
}
else{
    document.write("It's not a number.");
}

