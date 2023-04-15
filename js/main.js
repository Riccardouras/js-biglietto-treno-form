let generaBiglietto = document.getElementById("Biglietto");

function genera() {
    const name = document.getElementById("name").value;
    console.log(name);

    const km = document.getElementById("km").value;
    console.log(km);

    const eta = document.getElementById("inputGroupSelect01").value;
    console.log(eta);


    prezzo= (0.21 *km).toFixed(2);
    if (eta == "Minorenne") {
        prezzo = (0.21 * 0.80 * km).toFixed(2);
        console.log("il prezzo è " + prezzo)
    } else if (eta == "Over65") {
        prezzo = (0.21 * 0.60 * km).toFixed(2);
        console.log("il prezzo è " + prezzo)
    }
    else if (eta == 'Maggiorenne') {
        prezzo = (0.21 * km).toFixed(2);
        console.log("il prezzo è " + prezzo)
    }
    else {
    }

    const carrozza = Math.floor(Math.random() * 10) + 1;

    const codiceCp = Math.floor(Math.random() * 100000) + 900000;

    document.getElementById("nome").innerHTML = name;
    document.getElementById("costo-biglietto").innerHTML = prezzo + "€";
    document.getElementById("sconto").innerHTML = prezzo;
    document.getElementById("carrozza").innerHTML = carrozza;
    document.getElementById("codice-cp").innerHTML = codiceCp;

    document.getElementById('ticket').classList.add("show");



}



