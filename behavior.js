function check() {
    var username = document.getElementById("user").value;
    var password = document.getElementById("pass").value;
    if (username == "saurabh") {
        if (password == "1234")
            document.getElementById("status").innerHTML = "LOGGED IN";
        else
            document.getElementById("status").innerHTML = "Invalid";
    }
    else
        document.getElementById("status").innerHTML = "Invalid";
}
function addRow() {
    var input = document.getElementById("input").value;
    if (input == "")
        alert("not valid");
    else {
        var row = document.getElementById("tb").insertRow();
        row.insertCell(0).innerHTML = input;
        row.insertCell(1).innerHTML = "<button class=\"button\" onclick=\"deleteTodo(this)\">X</button>";
        row.insertCell(2).innerHTML = "<button class=\"button\" onclick=\"editRow(this)\">Edit</button>";
        document.getElementById("input").value = "";
    }
}
function deleteTodo(r) {
    var i = r.parentNode.parentNode.rowIndex;
    console.log(document.getElementById("tb").rows[i].cells[0]);
    document.getElementById("tb").deleteRow(i);
}
function editRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    var data = document.getElementById("tb").rows[i].cells[0].innerHTML;
    document.getElementById("tb").deleteRow(i);
    var row = document.getElementById("tb").insertRow(i);
    row.insertCell(0).innerHTML = "<input id=\"append\" type=\"text\" value=\"" + data + "\"></input>";
    row.insertCell(1).innerHTML = "<button class=\"button\" onclick=\"append(this)\">change</button>";
}
function append(r) {
    var i = r.parentNode.parentNode.rowIndex;
    var input = document.getElementById("append").value;
    var row = document.getElementById("tb").insertRow(i);
    row.insertCell(0).innerHTML = input;
    row.insertCell(1).innerHTML = "<button class=\"button\" onclick=\"deleteTodo(this)\">X</button>";
    row.insertCell(2).innerHTML = "<button class=\"button\" onclick=\"editRow(this)\">Edit</button>";
    document.getElementById("tb").deleteRow(i + 1);
}