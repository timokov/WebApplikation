/*let a = document.getElementsByName('Auswahl');
for(let b of a){
    b.checked
}*/
function weiter(){
    if(document.getElementsByName('Auswahl')[0].checked){
        document.location.href = "abgabe.html";
    } else {
        document.location.href = "abholung.html";
    }
}

function back(){
    document.location.href = "index.html";
}

function spenden(){
    let a = document.getElementById('tag').value;
    if(a !== 0){
        let b = document.getElementById('zeit').value;
        if(b !== 0){
            let c = document.getElementsByClassName("form-check-input");
            if((c[0].checked || c[1].checked || c[2].checked || c[3].checked || c[4].checked) &&  
            (c[5].checked || c[6].checked || c[7].checked || c[8].checked || c[9].checked || c[10].checked)){
                document.location.href = "erfolgabgabe.html";
            } else {
                document.getElementById('fehler').classList.remove('d-none');
            }
        } else {
            document.getElementById('fehler').classList.remove('d-none');
        }
    } else {
        document.getElementById('fehler').classList.remove('d-none');
    }
}

function spendenext(){
    let a = document.getElementById('tag').value;
    if(a !== 0){
        let b = document.getElementById('zeit').value;
        if(b !== 0){
           let d = document.getElementsByClassName('form-control');
           if(d[0].value.length >= 3 && d[1].value.length >= 3 && d[2].value.length === 5){
                if(d[2].value.charAt(0) == 1 && d[2].value.charAt(1) == 0){
                    let c = document.getElementsByClassName("form-check-input");
                    if((c[0].checked || c[1].checked || c[2].checked || c[3].checked || c[4].checked) &&  
                    (c[5].checked || c[6].checked || c[7].checked || c[8].checked || c[9].checked || c[10].checked)){
                    document.location.href = "erfolgabholung.html";
                    window.sessionStorage.setItem("anschrift", document.getElementById('straßeundnr').value);
                    window.sessionStorage.setItem("ort", document.getElementById('ort').value);
                    window.sessionStorage.setItem("plz", document.getElementById('plz').value);
                    } else {
                    document.getElementById('fehler').classList.remove('d-none');
                } 
            } else {
                document.getElementById('fehler1').classList.remove('d-none');
            }
           } else {
            document.getElementById('fehler').classList.remove('d-none');
           }
        } else {
            document.getElementById('fehler').classList.remove('d-none');
        }
    } else {
        document.getElementById('fehler').classList.remove('d-none');
    }

}

document.getElementById("anzeigeanschrift").innerText = sessionStorage.getItem("anschrift");
document.getElementById("anzeigeort").innerText = sessionStorage.getItem("ort");
document.getElementById("anzeigeplz").innerText = sessionStorage.getItem("plz");

/*function addr(){
    let data = sessionStorage.getItem("ort").innerText;
    document.
}


   /* if(document.getElementsByName('Auswahl')[0].value === 'option1'){
        document.location.href = "abgabe.html";
    } else {
        document.location.href = "abholung.html";
    }
}
     let f = document.querySelector('Auswahl');
   f.onclick = function wahl(){
    f.setAttribute("value", "option3")
}*/
/*function weitertest(){
    if(document.getElementsbyName('Auswahl')[0].checked){
        let a = document.getElementsByName('Daten')[0];
        a.classList.remove('d-none');
        let b = document.getElementsByName('Daten')[1];
        b.classList.remove('d-none');
        let c = document.getElementsByName('Daten')[2];
        c.classList.remove('d-none');
        let d = document.getElementsByName('Daten')[3];
        d.classList.remove('d-none');
        let e = document.getElementsByName('Daten')[4];
        e.classList.remove('d-none');
    }
    else {
        let a = document.getElementsByName('Daten')[0];
        a.classList.remove('d-none');
        let c = document.getElementsByName('Daten')[2];
        c.classList.remove('d-none');
        let d = document.getElementsByName('Daten')[3];
        d.classList.remove('d-none');
        let e = document.getElementsByName('Daten')[4];
        e.classList.remove('d-none');
    }
}*/