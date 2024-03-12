// Crea due tag div con due id diversi:
// un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

let numbers = [45 , 12 , 67 , 23 , 88 , 56 , 34 , 78 , 90 , 17 ];
// scorro gli elemnte dell'array 
for (let i = 0; i < numbers.length; i++){
    let thisNumber = numbers[i]
        // se pari stampo nel div verde 
    if (thisNumber % 2 ===0){
        document.getElementById("green").innerHTML += thisNumber + " ";
        // se dispari nel div rosso 
    } else {
        document.getElementById("red").innerHTML += thisNumber + " ";
    }
}
