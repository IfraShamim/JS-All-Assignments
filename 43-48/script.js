// 1. Show an alert box on click on a link.

function myAlert() {
    alert("Hello world");
}

// 2. Display some Mobile images in browser. On click on an 
// image Show the message in alert to user.

// <!-- 3. Display 10 student records in table and each row should contain a delete 
//         button. If you click on a button to delete a record, entire row should be 
//         deleted. -->

function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    console.log(row);
    var rowIndex = row.rowIndex;
    console.log(rowIndex);
    row.parentNode.removeChild(row);

    var table = document.getElementsByTagName("table")[0];
    var rowCount = table.rows.length;

    for (var i = rowIndex; i < rowCount; i++) {
        var row = table.rows[i];
        row.cells[0].textContent = i - 1;
    }
}


// var n = [0, 1, 2, 3];

// for (var i = 0; i < n.length; i++) {
//     document.getElementById(`d${i + 1}`).innerHTML = n[i];
// }

// function myDelete(rNumber, dNumber) {
//     document.getElementById(rNumber).innerHTML = "";
//     console.log(dNumber);
//     if (dNumber === "d1") {
//         for (var i = 0; i < n.length; i++) {
            
//         }
//     }

    
//     var d = document.getElementById(dNumber).innerHTML;
//     var index = n.indexOf(parseInt(d));
//     n.splice(index, 1);
// }

function counter1() {
    document.getElementById("count").innerHTML++; 
}
function counter2() {
    document.getElementById("count").innerHTML--; 
}