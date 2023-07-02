// ------------- Chapter#5(Math Expressions)
// ------Q#1
document.write("<h3>Program 01</h3>");
var num1 = 3;
var num2 = 5;
var sum = num1 + num2;
document.write("Addition of " + num1 +" and " + num2 + " is " + sum);
document.write("<br>");

// ------Q#2
document.write("<h3>Program 02</h3>");
// -- Sub..
var num1 = 3;
var num2 = 5;
var sub = num1 - num2;
document.write("Subtraction of " + num1 +" and " + num2 + " is " + sub);
document.write("<br>");
// -- Mul..
var num1 = 3;
var num2 = 5;
var mul = num1 * num2;
document.write ("Multiplication of " + num1 +" and " + num2 + " is " + mul);
document.write("<br>");
// -- Div..
var num1 = 3;
var num2 = 5;
var div = num1 / num2;
document.write ("Division of " + num1 +" and " + num2 + " is " + div);
document.write("<br>");
// -- Mod..
var num1 = 3;
var num2 = 5;
var mod = num1 % num2;
document.write ("Modulus of " + num1 +" and " + num2 + " is " + mod);
document.write("<br>");

// ------Q#3
document.write("<h3>Program 03</h3>");
// ---a..
var value;
// ---b..
document.write("Value after variable declaration is undefind. ");
document.write("<br>");
// ---c..
value = 5;
// ---d..
document.write("Initial value: "+value);
document.write("<br>");
// ---e..
value++;
// ---f..
document.write("Value after increament is: "+value);
document.write("<br>");
// ---g..
value = value + 7;
// ---h..
document.write("Value after addition is: "+value);
document.write("<br>");
// ---i..
value--;
// ---j..
document.write("Value after decreament is: "+value);
document.write("<br>");
// ---k..
value = value % 3;
// ---l..
document.write("The remainder is: "+value);

// ------Q#4
document.write("<h3>Program 04</h3>");
var ticket1 = 600;
var ticket5 = ticket1 * 5;
document.write("Total cost of buy 5 tickets to a movie is " + ticket5 +" <b>PKR</b>");

// ------Q#5
document.write("<h3>Program 05</h3>");
var table = 16;
document.write(table + " x 1 = " + table * 1 + "<br>");
document.write(table + " x 2 = " + table * 2 + "<br>");
document.write(table + " x 3 = " + table * 3 + "<br>");
document.write(table + " x 4 = " + table * 4 + "<br>");
document.write(table + " x 5 = " + table * 5 + "<br>");
document.write(table + " x 6 = " + table * 6 + "<br>");
document.write(table + " x 7 = " + table * 7 + "<br>");
document.write(table + " x 8 = " + table * 8 + "<br>");
document.write(table + " x 9 = " + table * 9 + "<br>");
document.write(table + " x 10 = " + table * 10 + "<br>");

// ------Q#6
document.write("<h3>Program 06</h3>");
// ---a..
var celsiusTemperature = 25;
// ---b..
var fahrenheitConversion = (celsiusTemperature * 9/5) + 32;
document.write(celsiusTemperature + "C is " + fahrenheitConversion + "F.");
document.write("<br>");
// ---c..
var fahrenheitTemperature = 70;
// ---d..
var celsiusConversion = (fahrenheitTemperature - 32) * 5/9;
document.write(fahrenheitTemperature + "F is " + celsiusConversion + "C.");

// ------Q#7
document.write("<h3>Program 07</h3>");
document.write("<h2>Shopping Cart</h2>");
// ---a..
var price_of_item1 = 650;
// ---b..
var price_of_item2 = 100;
// ---c..
var quantity_of_item1 = 3;
// ---d..
var quantity_of_item2 = 7;
// ---e..
var shipping_charges = 100;
document.write("Price of item 1 is "+price_of_item1+"<br>");
document.write("Quantity of item 1 is "+quantity_of_item1 +"<br>");
document.write("Price of item 2 is "+price_of_item2 +"<br>");
document.write("Quantity of item 2 is "+quantity_of_item2 +"<br>");
document.write("<br>");
var total_cost= (price_of_item1 * quantity_of_item1) +(price_of_item2 * quantity_of_item2)+shipping_charges;
document.write("Total cost of your order is " +total_cost);

// ------Q#8
document.write("<h3>Program 08</h3>");
document.write("<h2>Marks Sheet</h2>");
var total_marks = 980;
var obtained_marks = 804;
var percentage = (obtained_marks * 100)/total_marks;
document.write("Total marks: "+total_marks+"<br>");
document.write("Marks Obtained: "+obtained_marks+"<br>");
document.write("Percentage: "+percentage+"% "+"<br>");

// ------Q#9
document.write("<h3>Program 09</h3>");
document.write("<h2>Currency in PKR</h2>");
var usDollars = 10;
var usDollars_Conversion = usDollars * 104.80;
var saudiRiyals = 25;
var saudiRiyals_Conversion = saudiRiyals * 28;
var total_cost = usDollars_Conversion + saudiRiyals_Conversion;
document.write("Total cost in PKR: "+total_cost);

// ------Q#10
document.write("<h3>Program 10</h3>");
var num = 5;
var arthimatic_operation = num + 5 * 10 / 2;
document.write(arthimatic_operation);

// ------Q#11
document.write("<h3>Program 11</h3>");
var currentYear = 2023;
var birthYear = 2004;
var age = currentYear - birthYear;
document.write("Your Age is: "+age);

// ------Q#12
document.write("<h3>Program 12</h3>");
document.write("<h2>The Geometrizer</h2>");
var circleRadius = 20;
var circleCircumference = 2 * 3.142 * circleRadius;
var circleArea = 3.142 * circleRadius * 2;
document.write("Radius of a circle: "+circleRadius +"<br>");
document.write("The circumference is: "+circleCircumference +"<br>");
document.write("The area is: "+circleArea +"<br>");

// ------Q#13
document.write("<h3>Program 13</h3>");
document.write("<h2>The Lifetime Supply Calculator</h2>");
// --a..
var fvrtSnack = "chocolate chip";
// --b..
var currentAge = 18;
// --c..
var maxAge = 50;
// --d..
var snacksPerday = 4;
var remainAge = maxAge - currentAge;
var snacksAmount = remainAge * snacksPerday;

document.write("Favourite Snack: "+fvrtSnack+"<br>");
document.write("Current Age: "+currentAge+"<br>");
document.write("Estimated Maximum Age: "+maxAge+"<br>");
document.write("Amount of snacks per day: "+snacksAmount+"<br>");
document.write("You will need "+snacksAmount+ " chocolate chip to last you until the ripe old age of "+maxAge+"<br>");




