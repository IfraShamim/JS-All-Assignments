//Chapter # 14-16
//Q#1

const student_Name = [];

//Q#2

const students_Name ={};

//Q#3

const string =["Ifra","Shamim",];

//Q#4

const number =[29,11,2004];

//Q#5

// const boolean =[True , False];

//Q#6

const mixed_array =["ifrashamim29@gmail.com" ,29,11,2004];

//Q#7

const education =[" SSC", " HSC ", " BCS"," BS", " BCOM", " MS ", " M. Phil", " PhD"];
document.write ("<h1> Qualifications : </h1> <br>");
document.write ( " <h2> 1) "+education [0] +"<br> ");
document.write ( "2) "+education [1] +"<br>");
document.write ( "3)"+education [2] +"<br>");
document.write ( "4)"+education [3] +"<br>");
document.write ( "5)"+education [4] +"<br>");
document.write ( "6)"+education [5] +"<br>");
document.write ( "7)"+education [6] +"<br>");
document.write ( "8)"+education [7]);

//Q#8
const studentnames = ["Michael" , "John" , "Tony"];
const score = [320 , 230 , 480];
let totalmarks = 500;

document.write("Score of " + studentnames[0] + " is " + score[0] + ".Percentage is " + score[0]/500*100 + "% <br><br>" );
document.write("Score of " + studentnames[1] + " is " + score[1] + ".Percentage is " + score[1]/500*100 + "% <br> <br>" );
document.write("Score of " + studentnames[2] + " is " + score[2] + ".Percentage is " + score[2]/500*100 + "%" );


//Q#9
 // a)---------------

 const colorNames = [" Black " , " White " , " Blue " , " Pink " , " Grey "];
 document.write("Colors are: <br>" + colorNames + "<br><br>");

// b)---------------

  let inputColor = prompt("Enter color to add at the begining.<br>");
  colorNames.splice(0, 0, inputColor);
  document.write(colorNames + "<br><br>");

// c---------------

  colorNames.splice(0, 0 , "Red" , "Orange");
  document.write(colorNames + "<br><br>");

// d---------------

   colorNames.splice(0 , 1);
   document.write(colorNames + "<br><br>");

// e---------------

   colorNames.splice(-1 , 1);
   document.write(colorNames + "<br><br>");

// f---------------
   let input_Color = prompt("Enter color to add.<br>");
   let desiredindex = prompt("Enter the Index number where you want to add the color");
   colorNames.splice(desiredindex , 0 , input_Color);
   document.write(colorNames + "<br><br>");

   // g---------------
      
   let desired_index = +prompt("Enter the Index number where you want to delete the color");
   let numberOfColors = +prompt("Enter number of color you wants to delete.<br>");
   colorNames.splice(desired_index , numberOfColors);
   document.write(colorNames + "<br><br>");
   colorNames.splice(desired_index , desired_index);


//Q#10
const scores = [320 , 230 , 480 , 120];
document.write("Scores :" + scores + "<br>");
document.write("Ordered score of students : " + scores.sort());


//Q#11

  const cityNames = ["karachi" , "Islamabad" , "Lahore" , "Quetta" , "Peshawar"];
  document.write(cityNames + "<br>") ;
  document.write("Selected Cities: <br>" + cityNames.slice(0 , 3));

//Q#12
  const ar = ["This" , "is" , "my" , "cat"];
  document.write("The sentence is : " + ar.join(' '));

//Q#13

       
 const arrs = ["Keyboard" , "Mouse" , "Printer" , "Monitor"];
 document.write("Devices: <br>" + arrs);
 document.write("<br>Out:<br>" + arrs[0]);
 document.write("<br>Out:<br>" + arrs[1]);
 document.write("<br>Out:<br>" + arrs[2]);
 document.write("<br>Out:<br>" + arrs[3]);

//Q#14
const arr = ["Keyboard" , "Mouse" , "Printer" , "Monitor"];
document.write("Devices: <br>" + arr);
document.write("<br>Out:<br>" + arr[3]);
document.write("<br>Out:<br>" + arr[2]);
document.write("<br>Out:<br>" + arr[1]);
document.write("<br>Out:<br>" + arr[0]);

// Q#15
 const mobileCompanies = ["Apple" , "Samsung" , "Motrola" , "Nokia" , "Sony" , "Haier"];
 document.write("<select><option>" +mobileCompanies[0] +  "</option><option>" +mobileCompanies[1] +  "</option><option>" +mobileCompanies[2] +  "</option><option>" +mobileCompanies[3] +  "</option><option>" +mobileCompanies[4] +  "</option><option>" +mobileCompanies[5] +  "</option></select>");