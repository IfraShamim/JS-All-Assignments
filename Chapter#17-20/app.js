//Chapter  17-20


// Question 1

var m = 4;
var  n = 5;
var arr = new Array(m); 
for (var i = 0; i < m; i++) {
  arr[i] = new Array(n); 
}
console.log(arr);


//Question 2

var matrix = [

    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1],
    [3,1,2,0],
    [3,1,3,0]

];
document.write(matrix[0]+"<br/>");
document.write(matrix[1]+"<br/>");
document.write(matrix[2]+"<br/>");
document.write(matrix[3]+"<br/>");
document.write(matrix[4]+"<br/>");



//Question 3

var i =0
for (var i=0;i<=10;i++){
    document.write(i+"<br/>");
}

//Question 4


var table_Number = +prompt("Enter Table number");
var table_length = +prompt("Enter table length");

for (var i = 1; i <= table_length; i++) {
    document.write(table_Number + " x" + " " + i + " " + " = " + " " + table_Number * i + "<br />")

}

//Question 5

 var fruits = ["apple", "banana", "mango", "orange", 
"strawberry"]
for (let i = 0; i < fruits.length; i++) {
  document.write(fruits[i]+"<br/>"); // here i represents index
}
document.write("Element on index 0 is" + " "+fruits[0]+"<br/>");
document.write("Element on index 1 is" + " "+fruits[1]+"<br/>");
document.write("Element on index 2 is" + " "+fruits[2]+"<br/>");
document.write("Element on index 3 is" + " "+fruits[3]+"<br/>");


//Question 6

document.write("<h1>Counting</h1>")
document.write("<br/>")
for (var i=0;i<=15;i++){
    document.write(i+" ")
}
document.write("<br/>")
document.write("<h1>Reverse Counting</h1>")
for (var i=10;i>0;i--){
    document.write(i+" ")
}
document.write("<br/>")
document.write("<h1>Even Counting Counting</h1>")

for (let i=0; i <= 20; i+=2) {
     document.write(i+" ");
}
document.write("<br/>")
document.write("<h1>Odd Counting Counting</h1>")

for (let i=1; i <= 20; i+=2) {
     document.write(i+" ");
}
document.write("<br/>")
document.write("<h1>Series Counting</h1>")

for (let i=2000; i <= 20000; i+=2000) {
     document.write(i+" ");
}


//Question 7

var BakeryItem = ["cake","apple pie", "cookie","chips","patties"]
var req_Item = prompt("Welcome to star bakery! What do you want to order")
var isMatch = false;

for (var i = 0; i<BakeryItem.length;i++){
    if (BakeryItem[i] === req_Item){
        isMatch = true
        document.write(req_Item+" "+"is available at index"+i+" "+"in our bakery <br/>")
    }
}
if(isMatch === false)[
    document.write("we are sorry")
]

//Question 8

var A = [24, 53, 78, 91, 12]
document.write(Math.max.apply(null,A));

//Question 9

var A = [24, 53, 78, 91, 12]
document.write(Math.min.apply(null,A));


//Question 10

for (let i=5; i <= 100; i+=5) {
     document.write(i+" ");
}