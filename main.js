var pl1 = "";
var pl2 = "";

function loginFunc(){
    pl1 = document.getElementById("p1n").value;
    pl2 = document.getElementById("p2n").value;

    localStorage.setItem("p1name", pl1);
    localStorage.setItem("p2name", pl2);

    document.getElementById("p1n").value = "";
    document.getElementById("p2n").value = "";
    window.location = "primary.html";
};