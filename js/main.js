
console.log(`prezzo`);
let km = document.getElementById("km");
console.log(`km`);
let eta = document.getElementById("inputGroupSelect01");
console.log(`eta`);
let nomeCognome = document.getElementById("nm")

function generaBiglietto () {
    let prezzo = 0.21 * km;
    if (eta="1"){
        prezzo *= 0.8;
    } else if (eta="2"){
        prezzo *= 0.6;
    } 
    console.log(`prezzo`);
}
function annullaBiglietto (){
    document.getElementById("km").innerHTML = ``;
    km= null;
    document.getElementById("inputGroupSelect01").innerHTML = ``;
    eta= null;
    document.getElementById("nm").innerHTML = ``;
    nomeCognome= null;
}


