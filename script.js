var newExpense = document.getElementById("newExpense"); // getting element by id given to button 
var row = 1; // as now one row is already present
// function show
function show(){
    // getting elements by id given to them into html file then will be getting value bye .value
    var type = document.getElementById("type").value;
    var name = document.getElementById("name").value;
    var date = document.getElementById("date").value;
    var amount = document.getElementById("amount").value;
    
    //getting table elements
    var data = document.getElementById("data");
    // creating a new row by id of table
    var newRow = data.insertRow(row);
    // creating columns 
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    // adding value fetched into cells
    cell1.innerHTML = type;
    cell2.innerHTML = name;
    cell3.innerHTML = date;
    cell4.innerHTML = amount;
    // incrementing row if more rows to be added to new line
    row++ 
    debugger 
    getTotal()  
}
function getTotal() {
    // getting data by id
    var data = document.getElementById("data");
    var total = 0;
    // initailizing variable for length of rows
    var len = data.rows.length;
    // loop for amount to be counted
    for (var i = 1 ; i < len -1 ; i++) {
        var value = data.rows[i].cells[3].innerHTML;
        if(value!=''){
            total = parseInt(total) + parseInt(data.rows[i].cells[3].innerHTML); //addition is done by rows and column num
        }
        
    }
    document.getElementById("sum").innerHTML =  "$" + total; //printing total
}
//    var a=5;
//    var b=5;
//    var c;
//    c= a+b;
//    document.getElementById("sum").innerHTML = "$"+c;