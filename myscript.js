function randomNumberBetween(min, max) {
    var newMax = max - min;
    var number = Math.floor(Math.random() * newMax + 1) + min;
    return number
}

for (var i = 0; i < 10; i++){
    console.log(randomNumberBetween(10, 15));
}


function myIndexOf(array, elements) {
    for (var i = 0; i < array.length; i++) {
        if (element == array[i]) {
            return i;
        }
    }

    return -1;
}

var bombe = [];
var numeriInseriti = [];
var numeroMassimo = 100;
var numeroBombe = 16;


var difficoltaValida = false;

while (!difficoltaValida) {
    var difficolta = parseInt(prompt("Scegli la difficoltà"))


    switch (difficolta) {
        case 0:
            break;
        case 1:
            numeroMassimo = 80
            break;
        case 2:
            numeroMassimo = 50
            break;
        default:
            alert("Inserisci un valore valido");
            break;
    }
}

console.log("Difficoltà", difficolta);

while (bombe.length < numeroBombe) {
    var numeroGenerato = Math.floor(Math.random() * numeroMassimo) + 1;

    if (bombe.indexOf(numeroGenerato) === -1) {
        bombe.push(numeroGenerato);
    }
}

console.log(bombe);

var bombaTrovata = false;

while (numeriInseriti.length < (100 - 16) && !bombaTrovata) {

    var numeroUtente = parseInt(prompt("Inserisci un numero"));

    if (numeriInseriti.indexOf(numeroUtente) === -1) {
        numeriInseriti.push(numeroUtente);

        if (bombe.indexOf(numeroGenerato) === -1) {
            bombaTrovata = true;
        }

        numeriInseriti.push(numeroUtente);

    } else {
        alert("Inserisci un numero differente");
    }
}

if (bombaTrovata) {
    alert("Hai Perso il tuo punteggio è: " + numeriInseriti.length + "!")
}

else {
    alert("Hai Vinto il tuo punteggio è: " + numeriInseriti.length + "!")
}