"use strict";
/*
 * Laboration 5 - Studentkortsgenerator
 * Namn: Eliza Hadlowska
 */

// Hämta element från DOM
const form = document.querySelector("#studentform");
const clearButton = document.querySelector("#clear");

const fullnameInput = document.querySelector("#fullname");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const fontSelect = document.querySelector("#font");

const previewFullname = document.querySelector("#previewfullname");
const previewEmail = document.querySelector("#previewemail");
const previewPhone = document.querySelector("#previewphone");

const errorList = document.querySelector("#errorlist");
const historySection = document.querySelector("#history");
const deleteHistoryButton = document.querySelector("#delete");

clearButton.addEventListener('click', clearForm)
deleteHistoryButton.addEventListener('click', deleteHistory)

//Formuläret
form.addEventListener('submit', validateForm) 
    
// if (!email.includes("@")) {
//     errors.push("E-postadressen måste innehålla ett @-tecken");
// }

// Array som innehåller sparade studentkort
let history = [];

/**
 * Validerar formulärets inmatning.
 * @returns {boolean}
 */
function validateForm(event) {
    // Kontrollera formulärets obligatoriska fält

    // Visa eventuella felmeddelanden

    // Returnera resultatet (true eller false) av valideringen
    event.preventDefault();

    displayErrors();

    createStudentCard();

    clearForm();
}


/**
 * Visar felmeddelanden på sidan.
 */
function displayErrors() {
    // Rensa tidigare felmeddelanden
    errorList.innerHTML = "";

    // Skriv ut aktuella felmeddelanden till DOM

    // Array som används för felmeddelanden
    let errors = [];

//Kontrollera att namn,email och telefon fälten är ifyllda, om ej genereras det ett felmeddelande
    if (fullnameInput === "") {
    errors.push("Du måste ange ditt fullständiga namn");
    } 

    if (emailInput === "") {
    errors.push("Du måste ange din e-postadress");
    }

    if (phoneInput === "") {
    errors.push("Du måste ange ditt telefonnummer");
    }

//Visar hur många fel det handlar om och för varje skapar den ett li element
    if (errors.length > 0) {
    errors.forEach(function(message) {
    const li = document.createElement('li');
    li.textContent = message;

//li elementet kommer att ingå i ul errorList i HTML-filen
    errorList.appendChild(li);
    })
    }
}


/**
 * Skapar ett studentkort och visar det på sidan.
 */
function createStudentCard() {

    //Inhämta värden från formuläret och ta bort mellanslagen med trim()
    const fullname = fullnameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();

    // Uppdatera studentkortet
    previewFullname.textContent = `${fullname}`
    previewEmail.innerHTML = `${email}`
    previewPhone.innerHTML = `${phone}`

    // Lägg till studentkortet i historiken
    historySection.innerHTML = `Namn: ${fullname} <br> E-postadress: ${email} <br> Telefonnummer: ${phone}`

    // Spara och uppdatera historiken

}


/**
 * Sparar historiken i localStorage.
 */
function saveHistory() {
    // Spara history i localStorage
}


/**
 * Läser in tidigare historik från localStorage.
 */
function loadHistory() {
    // Hämta eventuell sparad historik

    // Uppdatera history
}


/**
 * Visar historiken på sidan.
 */
function renderHistory() {
    // Rensa tidigare visad historik

    // Skriv ut innehållet i history till DOM
}


/**
 * Rensar formulär, aktuellt studentkort och felmeddelanden.
 */
function clearForm() {
    // Återställ formulär och studentkort

    // Rensa eventuella felmeddelanden

    //Rensa-knapp

    fullnameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
    
}



/**
 * Raderar hela historiken.
 */
function deleteHistory() {
    // Radera sparad historik
    historySection.innerHTML = "";
    // Uppdatera history och visningen på sidan
}


// Eventlyssnare

// När formuläret skickas:
// - validera inmatningen
// - skapa studentkort om valideringen lyckas


// När användaren klickar på "Rensa"


// När användaren klickar på "Radera historik"


// När sidan laddas:
// - läs in och visa eventuell tidigare historik