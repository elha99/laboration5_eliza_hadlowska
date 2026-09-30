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

//Rensa-knapp
clearButton.addEventListener('click', function (event) {
    event.preventDefault();
    fullnameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';
    
})

//Rensa historik-knapp MÅSTE TESTAS
deleteHistoryButton.addEventListener('click', function (event) {
    event.preventDefault();
})

//Formuläret
form.addEventListener('submit', (event) => {
    event.preventDefault();

    //Inhämta värden från fälten och ta bort mellanslagen med trim()
    const fullname = fullnameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();

// Array som används för felmeddelanden
    let errors = [];

//Rensa tidigare meddelanden
    errorList.innerHTML = "";

//Kontrollera att namn,email och telefon fälten är ifyllda, om ej genereras det ett felmeddelande
    if (fullname === "") {
    errors.push("Du måste ange ditt fullständiga namn");
    } 


    if (email === "") {
    errors.push("Du måste ange din e-postadress");
    }

    if (phone === "") {
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
});


// Array som innehåller sparade studentkort
let history = [];

/**
 * Validerar formulärets inmatning.
 * @returns {boolean}
 */
function validateForm() {
    // Kontrollera formulärets obligatoriska fält

    // Visa eventuella felmeddelanden

    // Returnera resultatet (true eller false) av valideringen
}


/**
 * Visar felmeddelanden på sidan.
 */
function displayErrors() {
    // Rensa tidigare felmeddelanden

    // Skriv ut aktuella felmeddelanden till DOM
}


/**
 * Skapar ett studentkort och visar det på sidan.
 */
function createStudentCard() {
    // Hämta information från formuläret

    // Uppdatera studentkortet

    // Lägg till studentkortet i historiken

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
}


/**
 * Raderar hela historiken.
 */
function deleteHistory() {
    // Radera sparad historik

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