function reg() {
    var fname = document.getElementById('Name').value;
    var email = document.getElementById('Email').value;
    var cntry = document.getElementById('cntry').value;
    var msg = document.getElementById('Message').value;
    if (fname == "" || email == "" || msg == "") {
        alert("must be filled out");
        document.getElementById('Name').focus();


    } else {
        alert("Successfully Send");


        document.write("<h1> Thank You!<h1>");
        document.write("<p>Now , your data will send via Email.</p>");
        document.write("<hr>");
        document.write("<h3>Entered informations are,</h3> ");
        document.write(fname + "<br>");
        document.write(email + "<br>");
        document.write(cntry + "<br>");
        document.write(msg + "<br>");
        document.write("<hr>");


    }

}













function openTab(tabName) {
    var i, x;
    x = document.getElementsByClassName("containerTab");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}