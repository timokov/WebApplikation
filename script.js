class Registrierung{
    gebiet = null;
    kleidung = null;
    zeit = null;
    straßeundnr = null;
    ort = null;
    plz = null;

    constructor(g, k, z, s, o, p){
        this.gebiet = g;
        this.kleidung = k;
        this.zeit = z;
        this.straßeundnr = s;
        this.ort = o;
        this.plz = p;
    }
}

function weiter(){
if(document.getElementsByName('Auswahl')[0].checked){
    weiterkurz();
    document.getElementById('spendenknopfabgabe').classList.remove('d-none');
} else {
    if(document.getElementsByName('Auswahl')[1].checked){
        weiterkurz();
        document.getElementById('adresseingabe').classList.remove('d-none');
        document.getElementById('spendenknopfabholung').classList.remove('d-none');
    } else {
        document.getElementById('fehlerweiter').classList.remove('d-none');
    }
}}

function weiterkurz(){
    document.getElementById('wahlgebietkleidung').classList.remove('d-none');
    document.getElementById('weiterknopf').classList.add('d-none');
    document.getElementById('abgabe').setAttribute("disabled", "");
    document.getElementById('abholung').setAttribute("disabled", "");
    document.getElementById('fehlerweiter').classList.add('d-none');
    document.getElementById('wrknopf').classList.remove('d-none');
}

function widerruf(){
    document.getElementById('abgabe').removeAttribute("disabled");
    document.getElementById('abholung').removeAttribute("disabled");
    document.getElementById('abgabe').removeAttribute("checked");
    document.getElementById('abholung').removeAttribute("checked");
    document.getElementById('weiterknopf').classList.remove('d-none');
    document.getElementById('wrknopf').classList.add('d-none');
    document.getElementById('spendenknopfabgabe').classList.add('d-none');
    document.getElementById('adresseingabe').classList.add('d-none');
    document.getElementById('spendenknopfabholung').classList.add('d-none');
    document.getElementById('wahlgebietkleidung').classList.add('d-none');
    document.getElementById('fehler').classList.add('d-none');
    document.getElementById('fehler1').classList.add('d-none');
    document.getElementById('fehler3').classList.add('d-none');
    for(q of document.getElementsByTagName('option')){
    q.removeAttribute("selected");
    }
    document.getElementById('default').setAttribute("selected", "");
    document.getElementById('default1').setAttribute("selected", "");
    document.getElementById('straßeundnr').value = "";
    document.getElementById('ort').value = "";
    document.getElementById('plz').value = "";
}

function spenden(){
    let a = document.getElementById('gebiet').value;
    if(a != 0){
        let b = document.getElementById('kleidung').value;
        if(b != 0){
                document.location.href = "erfolg.html";
                window.sessionStorage.setItem("anschrift", "Musterstraße 77");
                window.sessionStorage.setItem("ort", "Berlin");
                window.sessionStorage.setItem("plz", "10115");
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
                let datum = new Date();
                window.sessionStorage.setItem("datum", datum.toLocaleString('de-DE'));
                let reg = new Registrierung(sessionStorage.getItem("gebiet"), sessionStorage.getItem("kleidung"), 
                sessionStorage.getItem("datum"), sessionStorage.getItem("anschrift"), 
                sessionStorage.getItem("ort"), sessionStorage.getItem("plz"));
                let regjson = JSON.stringify(reg);
        } else {
                document.getElementById('fehler3').classList.remove('d-none');
        }
    } else {
        document.getElementById('fehler3').classList.remove('d-none');
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
                    document.location.href = "erfolg.html";
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
                    let datum = new Date();
                    window.sessionStorage.setItem("datum", datum.toLocaleString('de-DE'));
                    let reg = new Registrierung(sessionStorage.getItem("gebiet"), sessionStorage.getItem("kleidung"), 
                    sessionStorage.getItem("datum"), sessionStorage.getItem("anschrift"), sessionStorage.getItem("ort"), sessionStorage.getItem("plz"));
                    let regjson = JSON.stringify(reg);
                } else {
                    document.getElementById('fehler1').classList.remove('d-none');
                    document.getElementById('fehler').classList.add('d-none');
                } 
            } else {
                document.getElementById('fehler').classList.remove('d-none');
                document.getElementById('fehler1').classList.add('d-none');
            }
        } else {
            document.getElementById('fehler').classList.remove('d-none');
            document.getElementById('fehler1').classList.add('d-none');
        }
    } else {
        document.getElementById('fehler').classList.remove('d-none');
        document.getElementById('fehler1').classList.add('d-none');
    }
}