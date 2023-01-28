document.getElementById("anzeigegebiet").innerText = sessionStorage.getItem("gebiet");
document.getElementById("anzeigekleidung").innerText = sessionStorage.getItem("kleidung");

document.getElementById('datum').innerHTML = sessionStorage.getItem("datum");

function back(){
    document.location.href = "index.html";
}