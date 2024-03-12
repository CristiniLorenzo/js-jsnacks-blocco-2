// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

// chiedo all'utente 2 parole 
let firstWord = prompt('dimmi una parola');
let secondWord = prompt('dimmi una parola')

// se la parola è più corta dell'altra la stampo prima 
if(firstWord.length > secondWord.length){
    console.log(secondWord);
    console.log(firstWord);
}   else {
    console.log(firstWord);
    console.log(secondWord);
}

