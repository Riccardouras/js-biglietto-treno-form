
console.log(`prezzo`);
let km = document.getElementById("km");
console.log(`km`);
let eta = document.getElementById("inputGroupSelect01");
console.log(`eta`);
let nomeCognome = document.getElementById("nm")
console.log(`nomeCognome`)

function generaBiglietto () {
    let prezzo = 0.21 * km;
    if (eta="1"){
        prezzo *= 0.8.toFixed(2);
        document.getElementById("Biglietto").innerHTML = `Sconto Minori`;
        document.getElementById("costo").innerHTML = `${prezzo}`;
        document.getElementById("Nome").innerHTML = `${nomeCognome}`;
    } else if (eta="2"){
        prezzo *= 0.6.toFixed(2);
        document.getElementById("Biglietto").innerHTML = `Sconto Anziani`;
        document.getElementById("costo").innerHTML = `${prezzo}`;
        document.getElementById("Nome").innerHTML = `${nomeCognome}`;
    } else{
        document.getElementById("Nome").innerHTML = `${nomeCognome}`;
        document.getElementById("costo").innerHTML = `${prezzo}`;
    }
    console.log(`prezzo`);
}
function annullaBiglietto (){
    document.getElementById("km").innerHTML = `Tratta`;
    km= null;
    // document.getElementById("inputGroupSelect01").innerHTML = ``;
    eta= null;
    document.getElementById("nm").innerHTML = `Inserisci nome`;
    nomeCognome= null;
}


