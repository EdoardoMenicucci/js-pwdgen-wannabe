// Chiedi il nome
var nome = prompt("Inserisci il tuo nome:");

// Chiedi il cognome
var cognome = prompt("Inserisci il tuo cognome:");

// Chiedi il colore preferito
var colorePreferito = prompt("Inserisci il tuo colore preferito:");

// Calcola la password
var password = nome + cognome + colorePreferito;

//Aggiunta caratteri speciali
passwordSicura = password + "#24";

// Visualizza la frase
alert(passwordSicura);

// Insrisci la frase in un h1
document.getElementById("tuapassword").innerHTML = "La tua password: " + passwordSicura;