// Rechenart würfeln
function wuerfeln() {
    document.getElementById("wuerfelnB").disabled = true;
    // operator würfeln
    let operator = Math.floor(Math.random() * 4);
    let operatorSymbol;
    if (operator === 0) {
        operatorSymbol = "+";
    } else if (operator === 1) {
        operatorSymbol = "-";
    } else if (operator === 2) {
        operatorSymbol = "x";
    } else {
        operatorSymbol = ":";
    }
    console.log (operatorSymbol);

    // zahl1 und zahl2 würfeln
    let zahl1 = Math.floor(Math.random() * 99) + 1;
    let zahl2 = Math.floor(Math.random() * 99) + 1;
    if ((operatorSymbol === "x") || (operatorSymbol==":")) {
        zahl1 = Math.floor(Math.random() * 10) + 1;
        zahl2 = Math.floor(Math.random() * 10) + 1;
    }
    
    if (operatorSymbol=="-") {
        do {
            zahl1=Math.floor(Math.random()*99)+1
            zahl2=Math.floor(Math.random()*99)+1
            console.log("Changed -")
        }
        while (zahl1<zahl2)
    }
    if (operatorSymbol==":") {
        do {
            zahl1=Math.floor(Math.random()*99)+1
            zahl2=Math.floor(Math.random()*99)+1
            console.log("Changed /")
        }
        while(zahl1%zahl2!=0)
    }
    console.log (zahl1, zahl2);
    document.getElementById("aufgabe").innerHTML = "Aufgabe: "+zahl1 + " " + operatorSymbol + " " + zahl2 + " = ?";
    rechnen(zahl1, zahl2, operatorSymbol);
    phase2();
}
function rechnen(zahl1, zahl2, operatorSymbol) {
    if (operatorSymbol === "+") {
        window.loesung = zahl1 + zahl2;
    } else if (operatorSymbol === "-") {
        window.loesung = zahl1 - zahl2;
    } else if (operatorSymbol === "x") {
        window.loesung = zahl1 * zahl2;
    } else {
        window.loesung = zahl1 / zahl2;
    }
    console.log (loesung);
}
function phase2() {
    let w = document.getElementById("phase2");
    w.style.display = "block"
}
function phase3() {
    console.log("phase3");
    document.getElementById("eingabe").disabled=true
    let p = document.getElementById("check");
    p.style.display = "block"
    let a = document.getElementById("new");
    a.style.display = "block"
    let b = document.getElementById("new");
    console.log(b);
    b.style.display = "block"
    check_answer()
}
function neu() {
    let p = document.getElementById("check");
    p.style.display = "none"
    let w = document.getElementById("phase2");
    w.style.display = "none"
    document.getElementById("eingabe").value = "";
    document.getElementById("eingabe").disabled=false

    wuerfeln();

}
function answer_true() {
    let b = document.getElementById("check")
    b.style.display = "block"
    b.innerHTML = "Korrekt!"
    let a = Number(localStorage.getItem("Punkte"))
    a+=10
    localStorage.setItem("Punkte", a)
    console.log(a)
    document.getElementById("points").innerHTML="Du hast jetzt "+a+" Punkte!"
}
function answer_false(){
    console.log("False answer started")
    let b = document.getElementById("check")
    b.style.display = "block"
    b.innerHTML = "Leider falsch! Das richtige Ergebnis wäre "+loesung+" gewesen."
    let a = Number(localStorage.getItem("Punkte"))
    a-=10
    localStorage.setItem("Punkte", a)
    console.log(a)
    document.getElementById("points").innerHTML="Du hast jetzt "+a+" Punkte!"
}

function check_answer() {
    let answer = document.getElementById("eingabe").value
    console.log("answer = "+answer+" loesung = "+loesung+".")
    if (answer == loesung) {
        answer_true()
    }
    else {
        answer_false()
    }
}
