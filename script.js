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
    let a = document.getElementById('gebiet').value;
    if(a != 0){
        let b = document.getElementById('kleidung').value;
        if(b != 0){
                document.location.href = "erfolgabgabe.html";
                for(d of document.getElementsByName('gebietwahl')){
                    if(d.selected){
                        window.sessionStorage.setItem("gebiet", d.innerText);
                    } else {}
                }
                for(e of document.getElementsByName('kleidungwahl')){
                    if(e.selected){
                        window.sessionStorage.setItem("kleidung", e.innerText);
                    } else {}
                }
                var datum = new Date();
                window.sessionStorage.setItem("datum", datum.toLocaleString('de-DE'));
        } else {
                document.getElementById('fehler').classList.remove('d-none');
        }
    } else {
        document.getElementById('fehler').classList.remove('d-none');
    }
}

function spendenext(){
    let a = document.getElementById('gebiet').value;
    if(a != 0){
        let b = document.getElementById('kleidung').value;
        if(b != 0){
           let d = document.getElementsByClassName('form-control');
           if(d[0].value.length >= 3 && d[0].value.length <= 100 && d[1].value.length >= 2 && d[1].value.length <= 100 && d[2].value.length === 5){
                if(d[2].value.charAt(0) == 1 && d[2].value.charAt(1) == 0){
                    document.location.href = "erfolgabholung.html";
                    window.sessionStorage.setItem("anschrift", document.getElementById('straßeundnr').value);
                    window.sessionStorage.setItem("ort", document.getElementById('ort').value);
                    window.sessionStorage.setItem("plz", document.getElementById('plz').value);
                    for(d of document.getElementsByName('gebietwahl')){
                        if(d.selected){
                            window.sessionStorage.setItem("gebiet", d.innerText);
                        } else {}
                    }
                    for(e of document.getElementsByName('kleidungwahl')){
                        if(e.selected){
                            window.sessionStorage.setItem("kleidung", e.innerText);
                        } else {}
                    }
                    var datum = new Date();
                    window.sessionStorage.setItem("datum", datum.toLocaleString('de-DE'));
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