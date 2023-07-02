// --------------- Chapter#6-9
// ----- Q#01
document.write("<h3>Program 01</h3>");
document.write("<h2>Result:</h2>");
var a = 10;
document.write("The value of a is: " + a + "<br>");
document.write("................................<br>");
var pre_increament = ++a;
document.write("The value of ++a is: " + pre_increament + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");
var post_increament = a++;
document.write("The value of a++ is: " + post_increament + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");
var pre_decreament = --a;
document.write("The value of --a is: " + pre_decreament + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");
var post_decreament = a--;
document.write("The value of a-- is: " + post_decreament + "<br>");
document.write("Now the value of a is: " + a + "<br>");

// ----- Q#02
document.write("<h3>Program 02</h3>");
var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;
document.write("a is: " + a + "<br>");
document.write("b is: " + b + "<br>");
document.write("result is: " + result + "<br>");

// ----- Q#03
document.write("<h3>Program 03</h3>");
var userName = prompt("Please enter your name");
alert(`Hello! ${userName}`);

// ----- Q#04
document.write("<h3>Program 04</h3>");
// Not Display in PDF

// ----- Q#05
document.write("<h3>Program 05</h3>");
var table = prompt("Please enter a table of ");
document.write("<h2><b>Table of " + table + " </b></h2>");
document.write(table + "x 1 = " + table * 1 + "<br>");
document.write(table + "x 2 = " + table * 2 + "<br>");
document.write(table + "x 3 = " + table * 3 + "<br>");
document.write(table + "x 4 = " + table * 4 + "<br>");
document.write(table + "x 5 = " + table * 5 + "<br>");
document.write(table + "x 6 = " + table * 6 + "<br>");
document.write(table + "x 7 = " + table * 7 + "<br>");
document.write(table + "x 8 = " + table * 8 + "<br>");
document.write(table + "x 9 = " + table * 9 + "<br>");
document.write(table + "x 10 = " + table * 10 + "<br>");

// ----- Q#06
document.write("<h3>Program 06</h3>");
var subjectName1 = prompt("Please enter your first Subject Name");
var subjectName2 = prompt("Please enter your second Subject Name");
var subjectName3 = prompt("Please enter your third Subject Name");
var totalMarks = 100;
var obtained_subjectName1 = prompt("Please enter obtained marks of first subject");
var obtained_subjectName2 = prompt("Please enter obtained marks of second subject");
var obtained_subjectName3 = prompt("Please enter obtained marks of third subject");
var total_obtainedMarks = obtained_subjectName1 + obtained_subjectName2 + obtained_subjectName3;
document.write("<h3>Subject &nbsp Total_Marks &nbsp Obtained_Marks &nbsp Percentage</h3>");
var percentage1 = (obtained_subjectName1 * 100) / totalMarks;
document.write(subjectName1 + " &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + totalMarks + " &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp " + obtained_subjectName1 + " &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp " + percentage1 + "%<br>");
var percentage2 = (obtained_subjectName2 * 100) / totalMarks;
document.write(subjectName2 + " &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + totalMarks + " &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp " + obtained_subjectName2 + " &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp " + percentage2 + "%<br>");
var percentage3 = (obtained_subjectName3 * 100) / totalMarks;
document.write(subjectName3 + " &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + totalMarks + " &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp " + obtained_subjectName3 + " &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp " + percentage3 + "%<br>");

