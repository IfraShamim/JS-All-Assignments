//Chapter # 12-13

//Q#1

var inputs = prompt("Input any Character");

if(input.charCodeAt(0) >= 97 && inputs.charCodeAt(0) <= 122 ){
    document.write("Lowercase letter");

}
else if(inputs.charCodeAt(0) >= 65 && inputs.charCodeAt(0) <= 90){
    document.write("Upper Case Letter");
}
else if(inputs.charCodeAt(0) >= 48 && inputs.charCodeAt(0) <= 57){
    document.write("Number");
}
else{
    document.write("Invalid");
}

//Q#2

var input_1 = +prompt ("Enter Your First Number");
var input_2 = +prompt ("Enter Your Second Number");
if (input_1 > input_2){
    document.write ("The First Number is Greater Than Second Number")
}
else if (input_1 < input_2){
    document.write ("The First Number is Less Than Second Number")
}
else{
    document.write ("Numbers Are Equal");
}


//Q#3

var input = +prompt("Enter number");  
if(input == 0){
        document.write ("The Number is Zero ");
    }
else if( input > 0){
    document.write("The Number is positive");
}
else if( input < 0){
    document.write("The Number is Negative");
}else{
    document.write("Not a number");
}


//Q#4

var input = prompt ("Enter A Letter");
if ( input == 'a' || input =='e' || input =='i' || input =='o' || input =='u' || input =='A' || input =='E' || input =='I' || input =='O' || input =='U'){
    document.write("This is a Vowel");
}
else{
    document.write("This is Cosonant");
 }

//Q#5

let storedPassword = "SyedaAyesha%!*";
let password = prompt("Enter his/ her password");

if(storedPassword === password){
    document.write("Correct! The password you entered matches the original password");
}
else if(storedPassword !== password){
    document.write("Incorrect Passward!");
    let password = prompt("Enter his/ her password");
}
else{
    
}

//Q#6

var greeting;
var hour = 13;
if (hour < 18) {
document.write(greeting = "Good day");
}
else{
    document.write(greeting = "Good evening");
}

//Q#7

let time = +prompt("Enter time in 24 hours clock");
    let convert = time % 24;

if( convert === 13){
    document.write(convert +" in 12 hours is "+"1");
}
else if(convert === 14){
    document.write(convert +" in 12 hours is "+"2");
}
else if(convert === 15){
    document.write(convert+" in 12 hours is "+"3");
}
else if(convert === 16){
    document.write(convert+" in 12 hours is "+"4");
}
else if(convert === 17){
    document.write(convert+" in 12 hours is "+"5");
}
else if(convert === 18){
    document.write(convert+" in 12 hours is "+"6");
}
else if(convert == 19){
    document.write(convert+" in 12 hours is "+"7");
}
else if(convert == 20){
    document.write(convert+" in 12 hours is "+"8");
}
else if(convert == 21){
    document.write(convert+" in 12 hours is "+"9");
}
else if(convert == 22){
    document.write(convert+" in 12 hours is "+" 10");
}
else if(convert == 23){
    document.write(convert+" in 12 hours is "+" 11");
}
else if(convert == 24){
    document.write(convert+" in 12 hours is "+" 12");
}
else{
    document.write("Not in 24 hours");
}