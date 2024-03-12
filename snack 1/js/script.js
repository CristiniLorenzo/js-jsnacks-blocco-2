// L'utente inserisce un numero nel prompt, se è pari stampa il numero,
// se è dispari stampa il numero successivo 

// chiedere a utente i numeri 
const userNumber = parseInt(prompt('dimmi un numero'));
// se pari lo stampo 
if (userNumber % 2 === 0){
    console.log(userNumber)
    // se dispari stampo quello dopo 
}   else {
    console.log(userNumber + 1)
}
