document.getElementById("anzeigegebiet").innerText = sessionStorage.getItem("gebiet");
document.getElementById("anzeigekleidung").innerText = sessionStorage.getItem("kleidung");
document.getElementById("anzeigeanschrift").innerText = sessionStorage.getItem("anschrift");
document.getElementById("anzeigeort").innerText = sessionStorage.getItem("ort");
document.getElementById("anzeigeplz").innerText = sessionStorage.getItem("plz");
document.getElementById('datum').innerHTML = sessionStorage.getItem("datum");

function back(){
    document.location.href = "index.html";
}