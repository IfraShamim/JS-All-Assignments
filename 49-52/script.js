// 1. Create a signup form and display form data in your web 
//     page on submission.

function displayForm() {
    alert(document.getElementById("input1").value);
    alert(document.getElementById("input2").value);
}

// 2. Suppose in your webpage there is content area in which 
//     you have entered your item details, but user can only see 
//     some details on first look. When user clicks on “Read 
//     more” button, full detail of that particular item will be 
//     displayed.

function expandPara() {
    var para = "Slow lorises are a group of several species of trepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time.Slow lorises have a toxic bite, a rare trait among mammals.";

    document.getElementById("slowLora").innerHTML = para;
}

// 3. In previous assignment you have created a tabular data
//         using javascript. Let’s modify that. Create a form which
//         takes student’s details and show each student detail in
//         table. Each row of table must contain a delete button and
//         an edit button. On click on delete button entire row should
//         be deleted. On click on edit button, a hidden form will
//         appear with the values of that row.

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